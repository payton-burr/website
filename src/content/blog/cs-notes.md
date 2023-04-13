---
title: cs50 notes.
date: 2023-02-15
description: My notes on Harvard's cs50
tags:
  - Notes
draft: false
---

## Table of contents

1. [Binary](#binary)
2. [Algorithms](#algorithms)

### Binary

Computers only work in binary, this means it compiles down to only two digits, 0 and 1. Decimals however, has 10 digits 0-9 which is more familiar to humans.

In decimal, `123` is represented with the rightmost column being the "ones column", next digit from the right being the "tens column", then the "hundreds column" and so on...

|   100   |   10   |   1   |
| ------- | ------ | ----- |
|    1    |   2    |   3   |
| 100 x 1 | 10 x 2 | 1 x 3 |

Binary is represented the same way, but instead of each column representing a power of 10, it instead represents a power of 2:

| 4 | 2 | 1 |
| - | - | - |
| 0 | 0 | 0 |

1 is represented in the "ones column" like decimal:

| 4 | 2 | 1 |
| - | - | - |
| 0 | 0 | 1 |

But because only binary operates on 0 and 1, it doesn't have a `2` digit. So the number 2 is represented by the `1` in the "twos column":

| 4 | 2 | 1 |
| - | - | - |
| 0 | 1 | 0 |

and to represent the number 3:

| 4 | 2 | 1 |
| - | - | - |
| 0 | 1 | 1 |

And so on until we reach our maximum number of combinations:

| 4 | 2 | 1 |
| - | - | - |
| 1 | 1 | 1 |

But once we've used up all the places, we're left with up to eight different patterns, from 0 to 7. In order to increase the number of places or combinations we can use, we need to add more `bits` or binary digits, with each storing either a `0` or `1`.

Each `0` or `1` is stored in a `transistor` in a computer. Which can be represented as a switch, where `0` is the switch turned off and `1` is the switch turned on.

Obviously using `bits` as a unit of measure isn't ideal, especially if we're adding more, instead we use the term [byte](#byte), which consists of eight `bits`, which then gives us a total number of 256 (including 0).

### ASCII (American Standard Code Information Interchange)

The most common character encoding format for text data, which consists 128 unique values and each value being represented by their equivalent number of bits.

### Unicode

A character encoding format much like [ASCII](#ascii-american-standard-code-information-interchange), but is more universally adopted to support encoding for other languages, emojis, and other forms of text data

### Byte

A byte consists of eight bits, with it's common multiples being kilobyte, megabyte, gigabyte, terabyte

---

## Algorithms

An algorithm is a set of step-by-step instructions for solving a problem, taking inputs and producing outputs:

<object data="/assets/algorithm.svg"></object>

<object data="/assets/graph.svg"></object>
