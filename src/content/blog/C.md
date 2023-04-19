---
title: C
date: 2023-04-19
description: My notes on C
tags:
  - Notes
draft: false
---

## Table of contents

1. [Source code](#source-code)
2. [Machine code](#machine-code)
3. [Types](#types)
4. [Format Codes](#format-codes)
5. [Libraries](#libraries)
6. [Cons](#cons)

### Source code

List of commands that a person writes (languages)

### Machine code

List of commands a computer can understand from compiled [Source code](#source-code)

<object data="/assets/compiler.svg"></object>

```c
#include <stdio.h>

int main(void)

{
	printf("hello, world\n");
}
```

### Types

- bool
- char
- double
- float
- int
- long
- string

### Format Codes

- %c
- %f
- %i
- %li
- %s

### Libraries

```c
#include <stdio.h>
```

Libraries are typically referred to as "header files", are declarations that tell your program to use a certain function. Historically, this is because computers were slower and resource constrained.

### Conditionals

```c
if (x < y)
{
printf("x is less than y\n");
}
else if (x > y)
{
printf("x is greater than y\n");
}
else
{
printf("x is equal than y\n");
}
```

### Cons

```c
int main(void)
{
	int x = 2000000000;
	int y = 2000000000;

	printf("%i\n", x + y);
}
```

```
➜  c ./calculator
-294967296
```

- #### Integer Overflow

  Computers typically uses 32 bits to represent an integer, with the maximum number that can be represented around 4 billion. But in cases where we need to use negative numbers, computers allocate half of the resources to negative numbers. This means that even though you're using 32 bits, the computer can only count as high as 2 billion.

- #### Truncation
  Occurs when doing math with floating point values (numbers with decimals), where you accidentally truncate the value.
