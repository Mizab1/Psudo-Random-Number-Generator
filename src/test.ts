import { MCFunction, Objective, ObjectiveInstance, Score } from "sandstone";
import { rng } from "./lcgRng";
import { uniform } from "./lcgRngV2";

MCFunction("test_rng_lcg", () => {
  // Setup the scoreboard Object and Score
  const test_rng: ObjectiveInstance<string> = Objective.create("test_rng", "dummy");
  const output: Score<string> = test_rng("output_test_rng");

  // Set the values to the generated numbers
  output.set(rng(0, 10));
});

MCFunction("test_rng_lcg_v2", () => {
  // Setup the scoreboard Object and Score
  const test_rng_v2: ObjectiveInstance<string> = Objective.create("test_rng_v2", "dummy");
  const output: Score<string> = test_rng_v2("output_test_rng_v2");

  // Set the values to the generated numbers
  output.set(uniform(10, 20));
});
