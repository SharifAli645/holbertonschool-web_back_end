#!/usr/bin/env python3
"""Module that contains a function
that lists all documents in a collection"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """Function that lists all documents in a collection"""
    if not mongo_collection.find():
        return []
    return mongo_collection.find()
