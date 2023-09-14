#!/usr/bin/env python3
"""Module that contains a
function"""


def index_range(page, page_size):
    """Function that returns a start index
    and end index"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
