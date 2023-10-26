from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Mongo

from pydantic import BaseModel
from scraper import Main

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
    Signature:str


mongo = Mongo(
    "mongodb+srv://Akashgreninja:Pokemonprimape%4013@cluster0.o3ihusq.mongodb.net/"
)
mongo.connect()

# mongo.define_schemas()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/blacklisted_contracts")
async def blacklisted(contract: BlacklistedContract):
    print(contract)
    mongo.insert(where="blacklisted_contracts", data=contract.dict())

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
