scoreboard players set mod rng_lib 2147483647
scoreboard players set inc rng_lib 123564
scoreboard players set mul rng_lib 1110243
scoreboard players operation next_num rng_lib = seed rng_lib
scoreboard players operation next_num rng_lib *= mul rng_lib
scoreboard players operation next_num rng_lib += inc rng_lib
scoreboard players operation next_num rng_lib %= mod rng_lib
scoreboard players operation seed rng_lib = next_num rng_lib
scoreboard players operation next_num rng_lib /= 100000 sandstone_const
scoreboard players set difference rng_lib 11
scoreboard players operation next_num rng_lib %= difference rng_lib
scoreboard players add next_num rng_lib 0
scoreboard players operation output_test_rng test_rng = next_num rng_lib