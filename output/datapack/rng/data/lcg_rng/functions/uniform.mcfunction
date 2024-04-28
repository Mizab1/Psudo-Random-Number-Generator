scoreboard players operation anon_6LEZtrPb_0 sandstone = #max random_obj
scoreboard players operation anon_6LEZtrPb_0 sandstone -= #min random_obj
scoreboard players operation anon_6LEZtrPb_1 sandstone = anon_6LEZtrPb_0 sandstone
scoreboard players add anon_6LEZtrPb_1 sandstone 1
scoreboard players operation #size random_obj = anon_6LEZtrPb_1 sandstone
scoreboard players operation #lcg random_obj *= #lcg_a random_obj
scoreboard players operation #lcg random_obj += #lcg_c random_obj
scoreboard players operation #lcg random_obj %= #lcg_m random_obj
scoreboard players operation anon_6LEZtrPb_2 sandstone = #lcg random_obj
scoreboard players operation anon_6LEZtrPb_2 sandstone /= 8 sandstone_const
scoreboard players operation #uniform_out random_obj = anon_6LEZtrPb_2 sandstone
scoreboard players operation #uniform_out random_obj %= #size random_obj
scoreboard players operation #uniform_out random_obj += #min random_obj