import { Objective, Score } from "sandstone";

export function rng(min:number, max:number, scoreboard?:Score): Score {
    // creation of variables 
    const rng_score = Objective.create("rng_lib", "dummy");
    const next_num = rng_score("next_num");
    const seed = rng_score("seed");
    const mod = rng_score("mod");
    const inc = rng_score("inc");
    const mul = rng_score("mul");
    const difference = rng_score("difference");

    // set the values of mod, mul, inc
    mod.set(2**31-1);
    inc.set(123564);
    mul.set(1110243);

    // generate random number
    next_num.set(seed);
    next_num.multiply(mul).add(inc).modulo(mod);
    seed.set(next_num);

    // clamp the number to the range
    next_num.divide(100000);
    difference.set(max - min + 1);
    next_num.modulo(difference)
    next_num.add(min)

    // set the number equal to the passed variable
    // scoreboard.set(next_num);
    return next_num;
}