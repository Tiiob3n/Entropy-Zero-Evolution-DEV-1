ServerEvents.recipes(event => {

    // --- METALLURGIC INFUSER ---
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', [
        'SFS',
        'RCR',
        'SFS'
    ], {
        S: 'thermal:signalum_ingot',
        F: 'thermal:machine_frame',
        R: 'minecraft:redstone_block',
        C: 'thermal:enderium_ingot'
    }).id('entropy:age6/metallurgic_infuser_expert')

    // --- BASIC CONTROL CIRCUIT ---
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'thermal:signalum_ingot' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:redstone' },
        output: { item: 'mekanism:basic_control_circuit' }
    }).id('entropy:age6/basic_circuit_infusion')

    // --- FLUID EXTRACTOR ---
    event.remove({ output: 'industrialforegoing:fluid_extractor' })
    event.shaped('industrialforegoing:fluid_extractor', [
        'ISI',
        'PMP',
        'ISI'
    ], {
        I: 'alltheores:invar_ingot',
        S: 'mekanism:basic_control_circuit',
        P: 'minecraft:piston',
        M: 'thermal:machine_frame'
    }).id('entropy:age6/fluid_extractor_expert')

    // --- LATEX PROCESSING UNIT ---
    event.remove({ output: 'industrialforegoing:latex_processing_unit' })
    event.shaped('industrialforegoing:latex_processing_unit', [
        'SGS',
        'EME',
        'SGS'
    ], {
        S: 'thermal:signalum_ingot',
        G: 'thermal:constantan_gear',
        E: 'minecraft:redstone_block',
        M: 'thermal:machine_frame'
    }).id('entropy:age6/latex_processor_expert')

    // --- ENRICHMENT CHAMBER ---
    event.remove({ output: 'mekanism:enrichment_chamber' })
    event.shaped('mekanism:enrichment_chamber', [
        'PCP',
        'RFR',
        'PCP'
    ], {
        P: 'thermalendergy:prismalium_ingot',
        C: 'mekanism:basic_control_circuit',
        R: 'minecraft:redstone',
        F: 'thermal:machine_frame'
    }).id('entropy:age6/enrichment_chamber_expert')

    // --- DRY RUBBER ---
    event.remove({ output: 'industrialforegoing:dry_rubber' })
    event.custom({
        type: 'mekanism:enriching',
        input: { ingredient: { item: 'industrialforegoing:tiny_dry_rubber', count: 9 } },
        output: { item: 'industrialforegoing:dry_rubber' }
    }).id('entropy:age6/plastic_enriching_expert')

    // --- OSMIUM COMPRESSOR ---
    event.remove({ output: 'mekanism:osmium_compressor' })
    event.shaped('mekanism:osmium_compressor', [
        'SCS',
        'PFP',
        'SCS'
    ], {
        S: 'thermal:signalum_ingot',
        C: 'mekanism:basic_control_circuit',
        P: 'minecraft:piston',
        F: 'thermal:machine_frame'
    }).id('entropy:age6/osmium_compressor_expert')

    // --- PITY MACHINE FRAME ---
    event.remove({ output: 'industrialforegoing:machine_frame_pity' })
    event.shaped('industrialforegoing:machine_frame_pity', [
        'IPI',
        'PMP',
        'IPI'
    ], {
        I: 'alltheores:invar_ingot',
        P: 'industrialforegoing:dry_rubber',
        M: 'thermal:machine_frame'
    }).id('entropy:age6/pity_frame_expert')

    // --- SIMPLE MACHINE FRAME ---
    event.remove({ output: 'industrialforegoing:machine_frame_simple' })
    event.shaped('industrialforegoing:machine_frame_simple', [
        'APA',
        'PFP',
        'APA'
    ], {
        A: 'mekanism:alloy_infused',
        P: 'thermalendergy:prismalium_ingot',
        F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/simple_frame_expert')

    // --- ADVANCED MACHINE FRAME ---
    event.remove({ output: 'industrialforegoing:machine_frame_advanced' })
    event.shaped('industrialforegoing:machine_frame_advanced', [
        'AMA',
        'MVM',
        'AMA'
    ], {
        A: 'mekanism:alloy_reinforced',
        M: 'thermalendergy:melodium_ingot',
        V: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/advanced_frame_expert')

    // --- SUPREME MACHINE FRAME ---
    event.remove({ output: 'industrialforegoing:machine_frame_supreme' })
    event.shaped('industrialforegoing:machine_frame_supreme', [
        'ASA',
        'SVS',
        'ASA'
    ], {
        A: 'mekanism:alloy_atomic',
        S: 'thermalendergy:stellarium_ingot',
        V: 'industrialforegoing:machine_frame_advanced'
    }).id('entropy:age6/supreme_frame_expert')

    // --- MEKANISM : STEEL CASING ---
    event.remove({ output: 'mekanism:steel_casing' })
    event.shaped('mekanism:steel_casing', [
        'SPS',
        'PFP',
        'SPS'
    ], {
        S: 'alltheores:steel_ingot',
        P: 'industrialforegoing:dry_rubber',
        F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/steel_casing_expert')

    // --- DISSOLUTION CHAMBER ---
    event.remove({ output: 'industrialforegoing:dissolution_chamber' })
    event.shaped('industrialforegoing:dissolution_chamber', [
        'PCP',
        'SFS',
        'PCP'
    ], {
        P: 'industrialforegoing:dry_rubber',
        C: 'mekanism:basic_control_circuit',
        S: 'thermal:signalum_ingot',
        F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/dissolution_chamber_expert')

    // --- THERMAL EVAPORATION CONTROLLER ---
    event.remove({ output: 'mekanism:thermal_evaporation_controller' })
    event.shaped('mekanism:thermal_evaporation_controller', [
        'SCS',
        'IPI',
        'SCS'
    ], {
        S: 'alltheores:steel_ingot',
        C: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused',
        P: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/evaporation_controller_expert')

    // --- REFINED STORAGE : CONTROLLER & CRAFTING ---
    event.remove({ output: 'refinedstorage:controller' })
    event.shaped('refinedstorage:controller', [
        'SCS',
        'CFC',
        'SCS'
    ], {
        S: 'thermal:signalum_ingot',
        C: 'mekanism:basic_control_circuit',
        F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/rs_controller_expert')

    event.remove({ output: 'refinedstorage:crafter' })
    event.shaped('refinedstorage:crafter', [
        'SCS',
        'MAM',
        'SCS'
    ], {
        S: 'thermal:signalum_ingot',
        C: 'mekanism:advanced_control_circuit',
        M: 'refinedstorage:machine_casing',
        A: 'mekanism:steel_casing'
    }).id('entropy:age6/rs_crafter_expert')

    event.remove({ output: 'refinedstorage:raw_basic_processor' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'minecraft:iron_ingot' }, { item: 'minecraft:redstone' }, { item: 'refinedstorage:processor_binding' }],
        inputFluid: "{FluidName:\"industrialforegoing:latex\",Amount:100}",
        output: { item: 'refinedstorage:basic_processor', count: 1 },
        processingTime: 100
    }).id('entropy:age6/rs_basic_processor_dissolution')

    event.remove({ output: 'refinedstorage:16k_storage_part' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'refinedstorage:4k_storage_part' }, { item: 'refinedstorage:4k_storage_part' }, { item: 'refinedstorage:4k_storage_part' }, { item: 'thermal:signalum_ingot' }],
        inputFluid: "{FluidName:\"mekanism:brine\",Amount:500}",
        output: { item: 'refinedstorage:16k_storage_part', count: 1 },
        processingTime: 300
    }).id('entropy:age6/rs_16k_brine')

    // --- AE2 : INFRASTRUCTURE & AUTOCRAFT ---
    event.remove({ output: 'ae2:inscriber' })
    event.shaped('ae2:inscriber', [
        'EPE',
        'SFS',
        'EPE'
    ], {
        E: 'thermal:enderium_ingot',
        P: 'minecraft:sticky_piston',
        S: 'thermal:signalum_ingot',
        F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/ae2_inscriber_expert')

    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped('ae2:molecular_assembler', [
        'IWI',
        'SCS',
        'IWI'
    ], {
        I: 'minecraft:iron_ingot',
        W: 'ae2:quartz_glass',
        S: 'thermal:signalum_ingot',
        C: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_assembler_expert')

    event.remove({ output: 'ae2:pattern_provider' })
    event.shaped('ae2:pattern_provider', [
        'ETE',
        'SCS',
        'ETE'
    ], {
        E: 'thermal:enderium_ingot',
        T: 'minecraft:crafting_table',
        S: 'mekanism:advanced_control_circuit',
        C: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_pattern_provider_expert')

    event.remove({ output: 'ae2:cell_component_16k' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:cell_component_4k' }, { item: 'ae2:cell_component_4k' }, { item: 'ae2:cell_component_4k' }, { item: 'ae2:calculation_processor' }, { item: 'thermal:signalum_ingot' }],
        inputFluid: "{FluidName:\"mekanism:brine\",Amount:500}",
        output: { item: 'ae2:cell_component_16k', count: 1 },
        processingTime: 300
    }).id('entropy:age6/ae2_16k_brine')

    event.remove({ output: 'ae2:cell_component_64k' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:cell_component_16k' }, { item: 'ae2:cell_component_16k' }, { item: 'ae2:cell_component_16k' }, { item: 'ae2:logic_processor' }, { item: 'thermal:enderium_ingot' }],
        inputFluid: "{FluidName:\"mekanism:lithium\",Amount:1000}",
        output: { item: 'ae2:cell_component_64k', count: 1 },
        processingTime: 500
    }).id('entropy:age6/ae2_64k_lithium')

    event.remove({ output: 'megacells:cell_component_1m' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:cell_component_64k' }, { item: 'ae2:cell_component_64k' }, { item: 'ae2:cell_component_64k' }, { item: 'mekanism:alloy_atomic' }, { item: 'thermalendergy:melodium_ingot' }],
        inputFluid: "{FluidName:\"mekanism:lithium\",Amount:2000}",
        output: { item: 'megacells:cell_component_1m', count: 1 },
        processingTime: 800
    }).id('entropy:age6/ae2_1m_mega')

    // --- MEKANISM & DIVERS ---
    event.remove({ output: 'mekanism:precision_sawmill' })
    event.shaped('mekanism:precision_sawmill', [
        'SCS',
        'IPI',
        'SCS'
    ], {
        S: 'alltheores:steel_ingot',
        C: 'mekanism:basic_control_circuit',
        I: 'mekanism:alloy_infused',
        P: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/precision_sawmill_expert')

    event.remove({ output: 'industrialforegoing:resourceful_furnace' })
    event.shaped('industrialforegoing:resourceful_furnace', [
        'PBP',
        'SFS',
        'PBP'
    ], {
        P: 'industrialforegoing:dry_rubber',
        B: 'minecraft:blast_furnace',
        S: 'thermalendergy:prismalium_ingot',
        F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/resourceful_furnace_expert')

})