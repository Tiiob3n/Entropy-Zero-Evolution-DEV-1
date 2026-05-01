LootJS.modifiers(event => {
    event.addLootTableModifier(/.*chests\/.*/)
        .removeLoot('minecraft:iron_pickaxe')
        .removeLoot('minecraft:iron_ingot')
        .removeLoot('minecraft:iron_sword')
        .removeLoot('minecraft:diamond')
    
    event.addLootTableModifier("minecraft:chests/village/village_blacksmith")
        .addLoot("minecraft:flint")
        .addLoot("minecraft:coal")
});