#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Function that returns a random float"""
    rand = random.uniform(0, max_delay)
    await asyncio.sleep(rand)
    return rand
