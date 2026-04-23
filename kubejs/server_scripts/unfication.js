ServerEvents.recipes(event => {
    // --- UNIFICATION ACIER (STEEL) ---
    event.replaceOutput({}, '#forge:ingots/steel', 'immersiveengineering:ingot_steel')
    event.replaceOutput({}, '#forge:plates/steel', 'immersiveengineering:plate_steel')

    const steelMods = ['thermal', 'mekanism', 'alltheores', 'ad_astra']
    
    steelMods.forEach(mod => {
        event.replaceOutput({}, `${mod}:steel_ingot`, 'immersiveengineering:ingot_lead')
        event.replaceOutput({}, `${mod}:ingot_steel`, 'immersiveengineering:ingot_lead')
        event.replaceOutput({}, `${mod}:steel_plate`, 'immersiveengineering:plate_steel')
        event.replaceOutput({}, `${mod}:plate_steel`, 'immersiveengineering:plate_steel')
    })
    event.replaceOutput({}, '#forge:ingots/bronze', 'alltheores:bronze_ingot')
    event.replaceOutput({}, '#forge:plates/bronze', 'alltheores:bronze_plate')
    event.replaceOutput({}, '#forge:dusts/bronze', 'alltheores:bronze_dust')
    event.replaceOutput({}, '#forge:ingots/lead', 'immersiveengineering:ingot_lead')

    const gearMaterials = [
        'iron', 'gold', 'copper', 'netherite', 'tin', 'lead', 'silver', 
        'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 
        'lumium', 'enderium', 'lapis', 'diamond', 'emerald', 'quartz', 
        'ruby', 'sapphire'
    ]

    gearMaterials.forEach(mat => {
        event.replaceOutput({}, `#forge:gears/${mat}`, `thermal:${mat}_gear`)
    })
})