import { MCFunction, Objective, seed } from "sandstone";
import { rng } from "./lcgRng";

MCFunction("test2233", () => {
  const test_rng = Objective.create("test_rng", "dummy");
  const output = test_rng("output_test_rng");
  output.set(rng(0, 10));
});
