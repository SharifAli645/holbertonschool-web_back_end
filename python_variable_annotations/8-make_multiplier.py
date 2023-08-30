#!/usr/bin/env python3
"""Module that contains a function"""
from typing import List, Union, Tuple, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function that create a tuple"""
    return lambda x: x * multiplier
