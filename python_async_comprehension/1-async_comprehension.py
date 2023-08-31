#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
from typing import List
import random
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Function generator async"""
    result = [i async for i in async_generator()]
    return result
