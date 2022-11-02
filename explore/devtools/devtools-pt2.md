1. The bug was that num1 and num2 are both strings and thus the operation is a concactenation instead of addition.
2. Using the parseInt function to parse the strings into numbers can fix the issue.