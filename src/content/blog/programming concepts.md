---
title: Programming Concepts
date: 2023-04-21
description: Programming concepts to know when learning a new langauge, and their trade-offs
tags:
  - Notes
draft: false
---

> #### Code examples are written in C
> These concepts don't pertain to C, but to programming as whole

Regardless of which programming language you choose to learn, the basic concepts of programming are similar across all languages. These include:

- Variables
- Conditionals
- Boolean expressions
- Loops
- Functions or Classes (or both)

### Variables

Variables are containers that store a value, a place in memory for a data type. Variables can hold any data type supported by the programming language


### Integer Overflow

Computers typically uses 32 bits to represent an integer, with the maximum number that can be represented around 4 billion. But in cases where we need to use negative numbers, computers allocate half of the resources to negative numbers. This means that even though you're using 32 bits, the computer can only count as high as 2 billion.

Nowadays, we can assign variables to be 

### Truncation
Occurs when doing math with floating point values (numbers with decimals), where you accidentally truncate the value.


### Libraries

Libraries are typically referred to as "header files", are declarations that tell your program to use a certain function. Historically, this is because computers were slower and resource constrained.

#### Example:
```c
#include <stdio.h> // header file
```


## Definitions

#### Source code

List of commands that a person writes (languages)

#### Machine code

List of commands a computer can understand from compiled [Source code](#source-code)

<object data="/assets/compiler.svg"></object>