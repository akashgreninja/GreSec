from pymongo import MongoClient
# from pymongo.schema import Schema

class Mongo:
    def __init__(self, uri):
        self.uri = uri
        self.client = MongoClient(self.uri)
        self.db = self.client['GreSec']
        self.blacklisted_contracts = self.db['blacklisted_contracts']
        self.whitelisted_contracts = self.db['whitelisted_contracts']
        self.blacklisted_users = self.db['blacklisted_users']

    def connect(self):
        try:
            self.client.admin.command("ping")
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)
    

    def insert(self,where,data):
        collection = getattr(self, where)
        collection.insert_one(data)


    def find(self):
        documents=self.blacklisted_contracts.find({})
        return documents
  
