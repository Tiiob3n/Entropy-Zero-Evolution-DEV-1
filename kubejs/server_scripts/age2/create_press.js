ServerEvents.recipes(event => {
  // --- SUPPRESSIONS ---
  event.remove({ output: 'create:andesite_alloy' })
  event.remove({ output: '#forge:plates' })
  event.remove({ input: '#alltheores:ore_hammers' })
  event.remove({ output: 'create:belt_connector' })
  event.remove({ output: 'create:goggles' })
  event.remove({ output: 'tiab:time_in_a_bottle' }) 

  // --- COMPOSANTS DE BASE ---
  event.shapeless('2x create:andesite_alloy', [
    'minecraft:andesite',
    'minecraft:flint'
  ]).id('entropy:andesite_alloy_flint')

  // --- TRAITEMENT DES PLAQUES (CREATE & IE) ---
  const plates = [
    { ingot: 'minecraft:iron_ingot', out: 'create:iron_sheet' },
    { ingot: 'minecraft:gold_ingot', out: 'create:golden_sheet' },
    { ingot: 'minecraft:copper_ingot', out: 'create:copper_sheet' },
    { ingot: 'create:brass_ingot', out: 'create:brass_sheet' },
    { ingot: 'alltheores:zinc_ingot', out: 'createaddition:zinc_sheet' },
    { ingot: 'alltheores:electrum_ingot', out: 'createaddition:electrum_sheet' },
    { ingot: 'minecraft:iron_ingot', out: 'alltheores:iron_plate' },
    { ingot: 'minecraft:gold_ingot', out: 'alltheores:gold_plate' },
    { ingot: 'minecraft:copper_ingot', out: 'alltheores:copper_plate' },
    { ingot: 'alltheores:zinc_ingot', out: 'alltheores:zinc_plate' },
    { ingot: 'alltheores:electrum_ingot', out: 'alltheores:electrum_plate' },
    { ingot: 'alltheores:brass_ingot', out: 'alltheores:brass_plate' },
    { ingot: 'alltheores:aluminum_ingot', out: 'alltheores:aluminum_plate' },
    { ingot: 'alltheores:lead_ingot', out: 'alltheores:lead_plate' },
    { ingot: 'alltheores:nickel_ingot', out: 'alltheores:nickel_plate' },
    { ingot: 'alltheores:tin_ingot', out: 'alltheores:tin_plate' },
    { ingot: 'alltheores:silver_ingot', out: 'alltheores:silver_plate' },
    { ingot: 'alltheores:platinum_ingot', out: 'alltheores:platinum_plate' },
    { ingot: 'alltheores:iridium_ingot', out: 'alltheores:iridium_plate' },
    { ingot: 'alltheores:osmium_ingot', out: 'alltheores:osmium_plate' },
    { ingot: 'alltheores:uranium_ingot', out: 'alltheores:uranium_plate' },
    { ingot: 'alltheores:steel_ingot', out: 'alltheores:steel_plate' },
    { ingot: 'alltheores:steel_ingot', out: 'immersiveengineering:plate_steel' },
    { ingot: 'alltheores:invar_ingot', out: 'alltheores:invar_plate' },
    { ingot: 'alltheores:bronze_ingot', out: 'alltheores:bronze_plate' },
    { ingot: 'alltheores:constantan_ingot', out: 'alltheores:constantan_plate' },
    { ingot: 'alltheores:enderium_ingot', out: 'alltheores:enderium_plate' },
    { ingot: 'alltheores:lumium_ingot', out: 'alltheores:lumium_plate' },
    { ingot: 'alltheores:signalum_ingot', out: 'alltheores:signalum_plate' },
    { ingot: 'minecraft:diamond', out: 'alltheores:diamond_plate' },
    { ingot: 'allthemodium:allthemodium_ingot', out: 'allthemodium:allthemodium_plate' },
    { ingot: 'allthemodium:vibranium_ingot', out: 'allthemodium:vibranium_plate' },
    { ingot: 'allthemodium:unobtainium_ingot', out: 'allthemodium:unobtainium_plate' }
  ]

  plates.forEach(p => {
    event.recipes.create.pressing(p.out, p.ingot)
    event.custom({
        type: "immersiveengineering:metal_press",
        mold: "immersiveengineering:mold_plate",
        result: { item: p.out },
        input: { item: p.ingot },
        energy: 2400
    })
  })

  event.recipes.create.pressing('create:belt_connector', 'minecraft:dried_kelp')

  // --- CRAFTS SPÉCIFIQUES ---

  // Acier manuel
  event.shapeless('immersiveengineering:plate_steel', [
    'alltheores:steel_ingot',
    'immersiveengineering:hammer'
  ]).damageIngredient('immersiveengineering:hammer')

  // Goggles
  event.shaped('create:goggles', [
    ' T ', 
    'GPG', 
    ' S ' 
  ], {
    T: 'create:electron_tube',
    G: 'minecraft:glass',
    P: 'create:precision_mechanism',
    S: 'create:golden_sheet'
  })
// --- LE CRAFT DE LA TIME IN A BOTTLE ---
  event.recipes.create.mechanical_crafting('tiab:time_in_a_bottle', [
    'S N S',
    'S G S',
    'SMMMS',
    'SMTMS',
    'SSSSS'
  ], {
    N: 'powah:crystal_nitro',
    G: 'create:goggles',
    M: 'create:precision_mechanism',
    S: 'create:brass_sheet',
    T: 'minecraft:nether_star'
  })
})