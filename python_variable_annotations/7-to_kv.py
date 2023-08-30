#!/usr/bin/env python3
"""Module that contains a function"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function that create a tuple"""
    return (k, v ** 2)
