
def add(a, b):
    #123 + 12 -> 321 + 21 = 342
    """
    Returns the sum of the two strings.
    """
    if len(a) == 0:
        return b
    if len(b) == 0:
        return a

    carry = 0
    result = ""
    for i in range(max(len(a), len(b))):
        a_val = int(a[i]) if i < len(a) else 0
        b_val = int(b[i]) if i < len(b) else 0
        total = a_val + b_val + carry
        if total > 9:
            total -= 10
            carry = 1
        else:
            carry = 0
        result += str(total)

    if carry:
        result += "1"

    return result

def max_pto(pto, schedule):
    """
    Returns the maximum pto for the given schedule.

    h h h h w w w h h
      l           r

    w h h h w w h h h
      l         r
    """
    left, right = 0, 0
    work_count = 0
    msf = 0
    while right < len(schedule):
        if schedule[right] == 'W':
            work_count += 1
        if work_count > pto:
            left += 1
            if left < len(schedule) and schedule[left] != 'W':
                work_count -= 1
        else:
            msf = max(msf, right - left + 1)
        right += 1

    return msf


if __name__ == "__main__":
    #write max pto tests in the format of ['W','H'], pto = 2
    print(max_pto(2, ['W','H','H','H','W','W','W']))
    print(max_pto(1, ['W','H','H','H','W','W','W','H','H','H']))
    # print(max_pto(0, ['W','H','H','H','W','W','W','H','H','H','H']))
    # print(max_pto(2, ['W','H','H','H','W','W','W','H','H','H','H','H']))
    # print(max_pto(2, ['W','H','H','H','W','W','W','H','H','H','H','H','H']))
    # print(max_pto(2, ['W','H','H','H','W','W','W','H','H','H','H','H','H','H']))

    # print(add("999", "99"))

    