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

## Concepts

## 
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

### Example code

```c
#include <stdio.h> // Library (header file)

int main(void) // (return type) function(param type)
{
	printf("hello, world\n");
}
```

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
