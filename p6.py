def is_equal_as_bs(string):
    count = 0
    
    for char in string:
        if char == 'a':
            count += 1
        elif char == 'b':
            count -= 1
        else:
            return False
    
    return count == 0

test_cases = ["abba", "abab", "aabb", "aaabbb", "ababab", "aababb"]

for test in test_cases:
    result = is_equal_as_bs(test)
    print(f"String: {test}, Accepted: {result}")
