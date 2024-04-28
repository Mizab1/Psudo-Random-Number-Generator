import { execute, MCFunction, Objective, Score } from "sandstone";

// Scores
const randomScore = Objective.create("random_obj");
const lcg = randomScore("#lcg");
const lcgA = randomScore("#lcg_a");
const lcgC = randomScore("#lcg_c");
const lcgM = randomScore("#lcg_m");
const size = randomScore("#size");
const min = randomScore("#min");
const max = randomScore("#max");
const uniformOut = randomScore("#uniform_out");

// Functions
const uniformMCFunction = MCFunction(
  "uniform",
  () => {
    // Calculate size of range
    size.set(max.minus(min).plus(1));

    // Xn+1 = (aXn + c) mod m
    lcg.multiply(lcgA).add(lcgC).modulo(lcgM);

    // Trim "low quality" bits
    uniformOut.set(lcg.dividedBy(8));

    // Get within desired range
    uniformOut.modulo(size).add(min);
  },
  {
    lazy: true,
  }
);

/**
 * Generates a random number between two given bounds using a linear congruential generator.
 *
 * Note: The resulting distribution is not truly uniform when `max + min - 1` isn't a power of 2.
 * While this is insignificant in almost all cases, `trueUniform` implements a more expensive method that doesn't have this bias.
 *
 * Distribution:
 *
 * ![Distribution](https://camo.githubusercontent.com/7ee3cf83ecc8ec7d3eaa4be3c1919434c5f84f5d90dad8045a22320e9b8e7434/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3932353831383039313437353230323131382f3932363835303835323730393335393631362f756e6b6e6f776e2e706e67)
 *
 * @param minimum The lower bound of the range.
 * @param maximum The upper bound of the range.
 */
export function uniform(minimum: number | Score, maximum: number | Score) {
  min.set(minimum);
  max.set(maximum);
  uniformMCFunction();

  return uniformOut;
}

// Setup the LCG on load
MCFunction(
  "_load_lcg",
  () => {
    // Initialize the random number generator
    execute.store.result.score(lcg).run.seed();

    lcgA.set(1630111353);
    lcgC.set(1623164762);
    lcgM.set(2 ** 31 - 1);
  },
  {
    runOnLoad: true,
    onConflict: "ignore",
  }
);
