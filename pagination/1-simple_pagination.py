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
