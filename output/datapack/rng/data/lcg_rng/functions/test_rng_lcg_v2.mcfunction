scoreboard players set #min random_obj 10
scoreboard players set #max random_obj 20
function lcg_rng:uniform
scoreboard players operation output_test_rng_v2 test_rng_v2 = #uniform_out random_obj