#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
from typing import Generator
import random
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Function generator async"""
    result = []
    async for i in async_generator():
        result.append(i)
    return result
