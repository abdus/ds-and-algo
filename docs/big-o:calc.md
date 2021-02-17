---
title: What is Good Code
---

A codebase would be called as "good" if it has following properties

- Readable
- Scalable

Big O Notation allows us to make code scalable

## rules for calculating Big O

1. consider the worst case: there is no guarantee that a function would be
   running in most efficient way
2. drop constants: constants does not matter as the input would be really huge
   in a real world scenerio
3. different terms for input: when the inputs are different, one must take it in
   consideration. for example:

   ```ts
   function demo(input1: string[], input2: string[]): void {
     for (let i of input1) {
       console.log(i);
     }

     for (let i of input2) {
       console.log(i);
     }
   }
   ```

   This function might appear as `O(2n)`(`O(n)` after dropping the constants),
   but it is not. both of the parameter function is depending upon, are
   distinct ... and can have different size.

   So, the Big O of this function would be `O(m + n)`.

   In case of nested loops like below example:

   ```ts
   function demo(input1: string[], input2: string[]): void {
     for (let i of input1) {
       for (let j of input2) {
         console.log(i, j);
       }
     }
   }
   ```

   The Big O for this function would be `O(m * n)`. (note that when the loops
   are nested, multiplication should be used instead of addition)
