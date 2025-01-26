# Subtle Null Check Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to null checks and function return types.  The `foo` function intends to add two numbers; however, it prematurely returns `null` if either input is null, potentially leading to unexpected behavior in larger applications. The solution offers a refined approach that handles null values more gracefully.

## Bug Description
The primary issue lies in the way null values are handled within the `foo` function.  A more robust solution should either explicitly handle null inputs (e.g., by assigning default values or throwing an error) or explicitly check for the type of each input before performing the addition.