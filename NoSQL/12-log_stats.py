#!/usr/bin/env python3
"""Module that works with mongoDB
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient("mongodb://localhost:27017")
    db = client["logs"]
    collection = db["nginx"]

    get_m = collection.count_documents({"method": "GET"})
    post_m = collection.count_documents({"method": "POST"})
    put_m = collection.count_documents({"method": "PUT"})
    patch_m = collection.count_documents({"method": "PATCH"})
    del_m = collection.count_documents({"method": "DELETE"})
    status = collection.count_documents({"path": "/status"})
    logs = collection.count_documents({})

    print(f"{logs} logs")
    print(f"Methods:")
    print(f"\tmethod GET: {get_m}")
    print(f"\tmethod POST: {post_m}")
    print(f"\tmethod PUT: {put_m}")
    print(f"\tmethod PATCH: {patch_m}")
    print(f"\tmethod DELETE: {del_m}")
    print(f"{status} status check")
