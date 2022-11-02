1. console will output 3 because after 3 iterations of the for loop it will fail. After the last iteration, i = 3 and the for loop fails so outside of it 3 is printed out.
2. Console will print out 150 since after the last iteration of the for loop discounted price would equal price[2] * (1-0.5). Price[2] is equal to 300 in the list thus resulting in 150.
3. Console will print out 150 since after the last iteration for loop discounted price would equal price[2] * (1-0.5). finalPrice would just be that result, 150 since multiplying by 100 and then dividing by 100 would result in the same exact answer.
4. The function would return [ 50, 100, 150 ] because in the for loop the resulting final prices after calculation for each iteration is stored into the list dicounted.
5. This will cause an error as i is not defined outside the for loop because of the let keyword.
6. Same as problem 5, This will cause an error as discountedPrice is not defined outside the for loop because of the let keyword.
7. Console will print out 150 since discountedPrice is defined in the same code block and the last value stored in discountedPrice after the for loop is 150. (300 * 0.5)\
8. The function would return [ 50, 100, 150 ] because in the for loop the resulting final prices after calculation for each iteration is stored into the list dicounted which is declared in the same code block.
9. This would result in an error since i is only defined in the for loop code block because of let keyword and cannot be accessed outside of it.
10. Console will print out 3 since after each iteration of the for loop length increases by one. After the last iteration it increases to 3 and the for loop fails. Outside of the for loop length = 3 and thus is displayed.
11. The function would return [ 50, 100, 150 ] because in the for loop the resulting final prices after calculation for each iteration is stored into the list dicounted which is declared in the same code block. 
12. A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. A) '32' since integers map to their exact string representation
    B) 1 since '3' maps to 3
    C) 3 since null maps to zero
    D) '3null' since null maps to 'null'
    E) 4 since true maps to 1 
    F) 0 since 'false' maps to zero and 'null' maps to zero 
    G) '3undefined' since undefined maps to 'undefined' 
    H) NaN since undefined has no corresponding integer value.
14. A) true since '2' maps to 2 and 2 > 1.
    B) false since '2' comes after the first character in '12', i.e. '2' > '1'
    C) true since '2' maps to 2 and 2 == 2
    D) false since 2 is an integer and '2' is a string
    E) false since true maps to 1 and 1 does not equal 2
    F) true since boolean(2) is equal to true
15. == checks for equality thriugh type conversion while === does not.
16. code in part2-question16.js
17. [2,4,6] is returned. The for loop calls the callback funcrion on each element in [1,2,3] then it pushes the returned value. This return value is twice the number that was originally passed in.
18. code in part2-question18.js
19. the program would output 1 4 3 2 vertically.