#!/usr/bin/env python3
"""Module that contains a python function"""


def schools_by_topic(mongo_collection, topic):
    """Function that returns a list"""
    col = mongo_collection.find()
    d = [doc for doc in col if topic in doc.get('topics')]
    return d
