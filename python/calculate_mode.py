def calculate_mode(arr):
    y = max([arr.count(i) for i in arr])
    x = [i for i in arr if arr.count(i) == y]
    return list(set(x))


