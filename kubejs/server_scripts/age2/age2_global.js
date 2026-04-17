ServerEvents.recipes(event => {

    // ========================================================================
    // 2. FONDERIE & BRIQUES (Tinkers' Construct + IE)
    // ========================================================================

    // Smeltery Controller (Via Brass)
    event.remove({output: 'tconstruct:smeltery_controller'})
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_bricks" },
        cast_consumed: true,
        fluid: { name: "tconstruct:molten_brass", amount: 540 },
        result: "tconstruct:smeltery_controller",
        cooling_time: 100
    })

    // Coke Bricks (Casting Clay sur Seared Brick)
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_brick" },
        cast_consumed: true,
        fluid: { name: "tconstruct:molten_clay", amount: 250 },
        result: "immersiveengineering:cokebrick",
        cooling_time: 60
    })

    // Blast Bricks (Casting Invar sur Coke Brick)
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "immersiveengineering:cokebrick" },
        cast_consumed: true,
        fluid: { name: "tconstruct:molten_invar", amount: 90 },
        result: "immersiveengineering:blastbrick",
        cooling_time: 100
    })

    // Alloy Bricks (Casting Bronze sur Seared Brick)
    event.remove({ output: 'immersiveengineering:alloybrick' })
    event.custom({
        type: "tconstruct:casting_basin",
        cast: { item: "tconstruct:seared_brick" },
        cast_consumed: true,
        fluid: { name: "tconstruct:molten_bronze", amount: 90 },
        result: "immersiveengineering:alloybrick",
        cooling_time: 80
    })


    // ========================================================================
    // 3. ÉLECTRICITÉ & FILS (Immersive Engineering + Create Addition)
    // ========================================================================

    // Remplacement des fils IE par Create Addition (Unification)
    const wiresToReplace = [
        { ie: 'immersiveengineering:wire_copper', create: 'createaddition:copper_wire' },
        { ie: 'immersiveengineering:wire_gold', create: 'createaddition:gold_wire' },
        { ie: 'immersiveengineering:wire_iron', create: 'createaddition:iron_wire' },
        { ie: 'immersiveengineering:wire_electrum', create: 'createaddition:electrum_wire' }
    ]
    wiresToReplace.forEach(w => event.remove({ output: w.ie }))

    // Bobines de cuivre (Wirecoils)
    event.remove({ id: 'immersiveengineering:crafting/wirecoil_copper' })
    event.shaped('4x immersiveengineering:wirecoil_copper', [' W ', 'WSW', ' W '], { W: 'createaddition:copper_wire', S: 'minecraft:stick' })

    // Gestion du Bronze (Exclusif AllTheOres via Create Mixing)
    event.remove({ output: '#forge:ingots/bronze' })
    event.remove({ id: 'immersiveengineering:alloysmelter/bronze' })
    event.recipes.create.mixing('4x alltheores:bronze_ingot', ['3x #forge:ingots/copper', '#forge:ingots/tin']).heated()

    console.log('--- [PROJET] Tous les scripts de l Age 2 ont été chargés avec succès ! ---')
})