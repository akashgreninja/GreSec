from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Mongo
from dotenv import load_dotenv
from pydantic import BaseModel
from scraper import Main
import os

load_dotenv()
app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class BlacklistedContract(BaseModel):
    ContractAddress: str
    UserAddress: str
    reason: str
    Signature: str


mongo_uri = os.getenv("MONGO_URI")
mongo = Mongo(mongo_uri)
mongo.connect()

# mongo.define_schemas()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/blacklisted_contracts")
async def blacklisted(contract: BlacklistedContract):
    print(contract)

    # Check if the signature is blacklisted
    signature = contract.Signature
    count = mongo.count(where="blacklisted_signatures", query={"signature": signature})
    if count > 0:
        return {"message": "Blacklisted"}

    # Insert the contract into the blacklisted_contracts collection
    mongo.insert(where="blacklisted_contracts", data=contract.dict())

    # Check if the user has submitted more than 3 contracts with the same signature
    user = contract.UserAddress
    count = mongo.count(
        where="blacklisted_contracts",
        query={"Signature": signature, "UserAddress": user},
    )
    if count > 3:
        # Add the user to the blacklisted_users collection
        mongo.insert(where="blacklisted_users", data={"user": user})
        return {"message": "User blacklisted"}

    return {"message": "Contract blacklisted"}


@app.post("/whitelisted")
async def blacklisted(contract: BlacklistedContract):
    mongo.insert(where="whitelisted_contracts", data=contract.dict())
    return {"message": "Contract blacklisted"}


@app.post("/blacklisted_users")
async def blacklisted(contract):
    mongo.insert(where="blacklisted_users", data=contract.dict())
    return {"message": "Contract blacklisted"}


@app.get("/is_contract_blacklisted/{address}")
async def is_contract_blacklisted(address: str):
    print("we here ")
    documents = mongo.find()
    for document in documents:
        if document.get("address") == address:
            tags = ["exploit", "heist"]
            return {"message": tags}

    getscrapeddata = Main(address)
    if getscrapeddata:
        data = {"address": address, "reason": getscrapeddata}
        mongo.insert(where="blacklisted_contracts", data=data)

        return {"message": getscrapeddata}

    # If the address is not found, return False
    return False


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=4001)
