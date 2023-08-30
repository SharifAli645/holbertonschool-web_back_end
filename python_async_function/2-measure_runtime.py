#!/usr/bin/env python3
"""Module that contains a function"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Function that returns execution time"""
    now = time.time()
    asyncio.run(wait_n(n, max_delay))
    later = time.time()
    return (later - now) / n
