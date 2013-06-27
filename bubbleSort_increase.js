bubbleSort1=[[[2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 1, 9, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 11, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 12, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 13, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 14, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 15, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], 0], [[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 9, 11, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 9, 12, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 9, 13, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 9, 14, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 15, 16, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], 0], [[2, 3, 5, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 3, 6, 7, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 3, 7, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 8, 10, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 8, 11, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 8, 12, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 8, 13, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 9, 16, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [2, 5, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], 0], [[5, 2, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 6, 7, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 4, 10, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 4, 11, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 4, 12, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 4, 13, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 14, 16, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], 0], [[5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 3, 10, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 3, 11, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 12, 13, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 8, 16, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], 0], [[5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 6, 10, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 6, 11, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 3, 13, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 4, 16, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], 0], [[5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 7, 10, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 7, 11, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 12, 16, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], 0], [[5, 2, 10, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 2, 11, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 3, 16, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [5, 10, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 5, 11, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 13, 16, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 6, 16, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 7, 16, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0], [[10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], [10, 11, 5, 2, 16, 7, 6, 13, 3, 12, 4, 8, 14, 9, 15, 1], 0]];