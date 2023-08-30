#!/usr/bin/env python3
"""Module that contains a function"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function that returns a list"""
    return [(i, len(i)) for i in lst]
