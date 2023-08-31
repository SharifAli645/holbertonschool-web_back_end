#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
import time
from typing import List
import random
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Function generator async"""
    now = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    before = time.time()
    return (before - now)
