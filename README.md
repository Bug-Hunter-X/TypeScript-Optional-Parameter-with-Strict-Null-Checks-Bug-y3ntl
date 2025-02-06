# TypeScript Optional Parameter with Strict Null Checks Bug

This repository demonstrates a potential issue in TypeScript when using optional parameters with the `--strictNullChecks` compiler flag enabled.  The bug arises when passing a variable that might be `null` to an optional parameter.  Even if the function explicitly checks for `null`, a compile-time error occurs.

## How to Reproduce

1. Clone the repository.
2. Compile the code using `tsc --strictNullChecks bug.ts`.
3. Observe the compilation error.

## Solution

The provided `bugSolution.ts` demonstrates a solution involving type guards to resolve the compilation error. The solution avoids the need for a type assertion, which can be risky.