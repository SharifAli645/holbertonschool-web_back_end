#!/usr/bin/env python3
"""Function that inserts a document in a
collection"""


def insert_school(mongo_collection, **kwargs):
    dicty = {}
    for k, v in kwargs.items():
        dicty[k] = v
    return mongo_collection.insert_one(dicty).inserted_id
