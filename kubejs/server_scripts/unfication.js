ServerEvents.recipes(event => {
    event.replaceOutput({}, '#forge:ingots/bronze', 'alltheores:bronze_ingot')
    event.replaceOutput({}, '#forge:plates/bronze', 'alltheores:bronze_plate')
    event.replaceOutput({}, '#forge:dusts/bronze', 'alltheores:bronze_dust')

    const gearMaterials = [
        'iron', 'gold', 'copper', 'netherite', 'tin', 'lead', 'silver', 
        'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 
        'lumium', 'enderium', 'lapis', 'diamond', 'emerald', 'quartz', 
        'ruby', 'sapphire'
    ]
    gearMaterials.forEach(mat => {
        let gearTag = `#forge:gears/${mat}`
        let preferredGear = `thermal:${mat}_gear`
        
        event.replaceOutput({}, gearTag, preferredGear)
    })

})