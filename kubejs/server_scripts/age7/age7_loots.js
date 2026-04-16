LootJS.modifiers(event => {

    event.addEntityLootModifier("twilightforest:naga")
        .addWeightedLoot([8, 16], "twilightforest:naga_scale");

    event.addEntityLootModifier("twilightforest:lich")
        .addLoot("ars_nouveau:source_gem_block")
        .addLoot("ars_nouveau:experience_gem");

    event.addEntityLootModifier("twilightforest:hydra")
        .addWeightedLoot([5, 12], "twilightforest:fiery_blood")
        .addLoot("ad_astra:desh_ingot"); 

    event.addEntityLootModifier("minecraft:warden")
        .addLoot("deeperdarker:soul_crystal")
        .addLoot("deeperdarker:resonarium");
});