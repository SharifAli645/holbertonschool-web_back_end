#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Function that returns a float list"""
    tasks = [await wait_random(max_delay) for _ in range(n)]
    return sorted(tasks)
