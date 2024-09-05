# Linear Congruential Generator (LCG) for Sandstone

This project implements a Pseudo-Random Number Generator (PRNG) using the Linear Congruential Generator (LCG) algorithm for the [Sandstone](https://github.com/TheMrZZ/sandstone) framework, written in TypeScript.

## Features
- **Exclusive to Sandstone**: This PRNG is designed to integrate seamlessly with Sandstone, making it ideal for Minecraft function-based projects.
- **Simple API**: Just pass a range, and the generator will provide a random number within that range.

## Installation

To use this PRNG in your Sandstone project, clone or download this repository and import the `rng` function.

```ts
import { rng } from "./lcgRng";
MCFunction("test_rng_lcg", () => {
  // Setup the scoreboard Object and Score
  const test_rng: ObjectiveInstance<string> = Objective.create("test_rng", "dummy");
  const output: Score<string> = test_rng("output_test_rng");

  // Set the values to the generated numbers
  output.set(rng(0, 10));
});
```

## Dependencies
- Sandstone: This project is dependent on the Sandstone framework, which allows the creation of Minecraft functions with TypeScript.
License

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
Thanks to the developers of Sandstone for creating an excellent framework for Minecraft function-based development.
