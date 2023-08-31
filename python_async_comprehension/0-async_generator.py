#!/usr/bin/env python3
"""Module that contains a function async"""
import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[int, None, None]:
    """Function generator async"""
    for i in range(10):
        yield random.uniform(0, 10)
