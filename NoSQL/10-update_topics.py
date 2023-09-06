#!/usr/bin/env python3
"""Function that inserts a document in a
collection"""


def update_topics(mongo_collection, name, topics):
    """Function that updates a document"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
