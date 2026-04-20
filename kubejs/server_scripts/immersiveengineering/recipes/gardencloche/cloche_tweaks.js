ServerEvents.recipes(event => {
    const validSoils = [
        { item: 'minecraft:dirt' },
        { item: 'farmersdelight:rich_soil' },
        { item: 'mysticalagriculture:inferium_farmland' },
        { item: 'mysticalagriculture:prudentium_farmland' },
        { item: 'mysticalagriculture:tertium_farmland' },
        { item: 'mysticalagriculture:imperium_farmland' },
        { item: 'mysticalagriculture:supremium_farmland' },
        { item: 'mysticalagriculture:insanium_farmland' }
    ]

    Item.getList().forEach(item => {
        if (item.mod == 'croptopia' && item.id.endsWith('_seed')) {
            let cropName = item.id.replace('croptopia:', '').replace('_seed', '')
            
            event.custom({
                type: 'immersiveengineering:cloche',
                results: [
                    { item: `croptopia:${cropName}` }
                ],
                input: { item: item.id },
                soil: validSoils,
                time: 800,
                render: { 
                    type: 'crop', 
                    block: `croptopia:${cropName}_crop` 
                }
            }).id(`entropy:cloche/auto_croptopia_${cropName}`)
        }
    })

    Item.getList().forEach(item => {
        if (item.mod == 'farmersdelight' && item.id.endsWith('_seeds')) {
            let cropName = item.id.replace('farmersdelight:', '').replace('_seeds', '')
            let cropBlock = (cropName == 'tomato') ? 'farmersdelight:tomatoes' : `farmersdelight:${cropName}s`
            
            event.custom({
                type: 'immersiveengineering:cloche',
                results: [
                    { item: `farmersdelight:${cropName}` }
                ],
                input: { item: item.id },
                soil: validSoils,
                time: 800,
                render: { 
                    type: 'crop', 
                    block: cropBlock 
                }
            }).id(`entropy:cloche/auto_farmers_${cropName}`)
        }
    })
})