ServerEvents.recipes(event => {

    // --- MELON JUICE ---
    event.remove({ output: 'farmersdelight:melon_juice' })
    event.recipes.create.mixing('farmersdelight:melon_juice', [
        'minecraft:glass_bottle',
        'minecraft:melon_slice',
        'minecraft:melon_slice'
    ])

    // --- MILK BOTTLE ---
    event.remove({ output: 'farmersdelight:milk_bottle' })
    event.recipes.create.mixing('3x farmersdelight:milk_bottle', [
        'minecraft:milk_bucket',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle'
    ]).heated() 

    // --- CROPTOPIA JUICES ---
    const fruits = ['apple', 'orange', 'lemon', 'lime', 'grape', 'pineapple', 'strawberry', 'blueberry']
    
    fruits.forEach(fruit => {
        event.remove({ output: `croptopia:${fruit}_juice` })
        event.recipes.create.mixing(`croptopia:${fruit}_juice`, [
            'minecraft:glass_bottle',
            `croptopia:${fruit}`
        ])
    })

    // --- OLIVE OIL ---
    event.remove({ output: 'croptopia:olive_oil' })
    event.recipes.create.mixing('croptopia:olive_oil', [
        'minecraft:glass_bottle',
        'croptopia:olive',
        'croptopia:olive'
    ]).heated()

    // --- FISH OIL ---
    event.recipes.create.mixing('croptopia:olive_oil', [ 
        'minecraft:glass_bottle',
        'aquaculture:fish_fillet_raw'
    ]).heated()

    // --- TEA ---
    event.remove({ output: 'croptopia:tea' })
    event.recipes.create.mixing('croptopia:tea', [
        'minecraft:glass_bottle',
        'croptopia:tea_leaves',
        'minecraft:water_bucket'
    ]).heated()

    // --- SUSHI ---
    event.remove({ output: 'croptopia:sushi' })
    event.recipes.create.mechanical_crafting('4x croptopia:sushi', [
        'RRR',
        'RSR',
        'AAA'
    ], {
        R: 'croptopia:rice',
        S: 'aquaculture:fish_fillet_raw',
        A: 'minecraft:dried_kelp'
    })

    // --- HAMBURGER ---
    event.remove({ output: 'croptopia:hamburger' })
    event.recipes.create.mechanical_crafting('croptopia:hamburger', [
        'B',
        'S',
        'V',
        'B'
    ], {
        B: 'croptopia:bun',
        S: 'minecraft:cooked_beef',
        V: 'croptopia:lettuce'
    })

    // --- FISH MILLING ---
    event.recipes.create.milling('4x minecraft:bone_meal', 'aquaculture:fish_fillet_raw')

    // --- AQUACULTURE FISH CUTTING ---
    const aqua_fish = [
        'aquaculture:cod', 
        'aquaculture:salmon', 
        'aquaculture:tuna', 
        'aquaculture:red_grouper',
        'aquaculture:perch'
    ]

    aqua_fish.forEach(fish => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ item: fish }],
            tool: { tag: "forge:tools/knives" },
            result: [
                { item: "aquaculture:fish_fillet_raw", count: 2 },
                { item: "minecraft:bone_meal", count: 1 }
            ]
        })
    })

    // --- LETTUCE CUTTING ---
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "croptopia:lettuce" }],
        tool: { tag: "forge:tools/knives" },
        result: [{ item: "croptopia:salad", count: 2 }]
    })

    // --- SALT CRUSHING ---
    event.recipes.create.crushing([
        '4x croptopia:salt',
        Item.of('croptopia:salt').withChance(0.5)
    ], 'minecraft:calcite')

    // --- THE BIG BREAKFAST ---
    event.remove({ output: 'croptopia:the_big_breakfast' })
    event.recipes.create.mechanical_crafting('croptopia:the_big_breakfast', [
        'BBBBB',
        'EOOOE',
        'HTMTH',
        'S S S',
        'BBBBB'
    ], {
        B: 'croptopia:bacon',
        E: 'minecraft:egg',
        O: 'croptopia:olive_oil',
        H: 'croptopia:hash_browns',
        T: 'croptopia:tomato',
        M: 'croptopia:milk_bottle',
        S: 'croptopia:salt'
    })
})