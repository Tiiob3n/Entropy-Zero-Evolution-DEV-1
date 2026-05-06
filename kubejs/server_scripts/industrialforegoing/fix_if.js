ServerEvents.recipes(event => {
    event.remove({ output: 'industrialforegoing:dissolution_chamber' })
    event.remove({ output: 'industrialforegoing:fluid_extractor' })
    event.remove({ output: 'industrialforegoing:latex_processing_unit' })

    // 2. DISSOLUTION CHAMBER 
    event.shaped('industrialforegoing:dissolution_chamber', [
        'ICI',
        'GMF',
        'ICI'
    ], {
        I: 'industrialforegoing:plastic',
        C: '#forge:ingots/gold',
        G: 'minecraft:glass_pane',
        F: 'minecraft:bucket',
        M: 'thermal:machine_frame' 
    }).id('entropy:fixed_dissolution_chamber')

    // 3. FLUID EXTRACTOR
    event.shaped('industrialforegoing:fluid_extractor', [
        'ICI',
        'GMF',
        'ICI'
    ], {
        I: 'industrialforegoing:plastic',
        C: 'minecraft:cobblestone',
        G: 'minecraft:glass_pane',
        M: 'thermal:machine_frame',
        F: 'minecraft:piston'
    }).id('entropy:fixed_fluid_extractor')

    // 4. LATEX PROCESSING UNIT
    event.shaped('industrialforegoing:latex_processing_unit', [
        'ICI',
        'RMF',
        'ICI'
    ], {
        I: '#forge:ingots/iron',
        C: 'minecraft:furnace',
        R: 'minecraft:redstone',
        M: 'thermal:machine_frame',
        F: 'minecraft:water_bucket'
    }).id('entropy:fixed_latex_processing_unit')
})