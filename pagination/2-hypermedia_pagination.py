#!/usr/bin/env python3
"""Module that contains a class Server"""
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page, page_size):
        """Function that returns a start index
        and end index"""
        start = (page - 1) * page_size
        end = start + page_size
        return (start, end)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Function that returns a page"""
        assert isinstance(page, int), 'e'
        assert isinstance(page_size, int), 'e'
        assert page > 0, 'e'
        assert page_size > 0, 'e'
        start, end = self.index_range(page=page, page_size=page_size)
        var = self.dataset()
        return var[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Function that returns a dictionary """
        data = self.get_page(page, page_size)
        p_page = (None if page - 1 < 1 else page - 1)
        datos = self.dataset()
        t_page = len(datos) // page_size + (1 if len(datos) %
                                            page_size != 0 else 0)
        page_size = len(self.get_page(page, page_size))
        n_page = (None if page >= t_page else page + 1)
        dicty = {"page_size": page_size, "page": page, "data": data,
                 "next_page": n_page, "prev_page": p_page,
                 "total_pages": t_page}
        return dicty
