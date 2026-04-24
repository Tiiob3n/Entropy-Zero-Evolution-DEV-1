ServerEvents.recipes(event => {

    // ========================================================================
    // --- 1. INFRASTRUCTURE DE BASE & CHÂSSIS (DISSOLUTION CHAMBER) ---
    // ========================================================================

    // Metallurgic Infuser
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', ['SFS', 'RCR', 'SFS'], {
        S: 'thermal:signalum_ingot',
        F: 'thermal:machine_frame',
        R: 'minecraft:redstone_block',
        C: 'thermal:enderium_ingot'
    }).id('entropy:age6/metallurgic_infuser_expert')

    // Basic Control Circuit
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'thermal:signalum_ingot' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:redstone' },
        output: { item: 'mekanism:basic_control_circuit' }
    }).id('entropy:age6/basic_circuit_infusion')

    // --- UNIFICATION DES CHASSIS DANS LA DISSOLUTION CHAMBER ---
    // Note : On utilise 8 items en input pour simuler ton pattern 3x3 sans le slot central
    const dissolutionFrames = [
        { 
            out: 'industrialforegoing:machine_frame_pity', 
            input: [
                'alltheores:invar_ingot', 'industrialforegoing:dry_rubber', 'alltheores:invar_ingot',
                'industrialforegoing:dry_rubber', 'industrialforegoing:dry_rubber',
                'alltheores:invar_ingot', 'industrialforegoing:dry_rubber', 'alltheores:invar_ingot'
            ], 
            fluid: 'industrialforegoing:latex', 
            amt: 250, 
            base: 'thermal:machine_frame', // Utilisé pour remplacer le slot central (F/M)
            id: 'pity' 
        },
        { 
            out: 'industrialforegoing:machine_frame_simple', 
            input: [
                'mekanism:alloy_infused', 'thermalendergy:prismalium_ingot', 'mekanism:alloy_infused',
                'thermalendergy:prismalium_ingot', 'thermalendergy:prismalium_ingot',
                'mekanism:alloy_infused', 'thermalendergy:prismalium_ingot', 'mekanism:alloy_infused'
            ], 
            fluid: 'industrialforegoing:latex', 
            amt: 500, 
            base: 'industrialforegoing:machine_frame_pity',
            id: 'simple' 
        },
        { 
            out: 'industrialforegoing:machine_frame_advanced', 
            input: [
                'mekanism:alloy_reinforced', 'thermalendergy:melodium_ingot', 'mekanism:alloy_reinforced',
                'thermalendergy:melodium_ingot', 'thermalendergy:melodium_ingot',
                'mekanism:alloy_reinforced', 'thermalendergy:melodium_ingot', 'mekanism:alloy_reinforced'
            ], 
            fluid: 'industrialforegoing:latex', 
            amt: 750, 
            base: 'industrialforegoing:machine_frame_simple',
            id: 'advanced' 
        },
        { 
            out: 'industrialforegoing:machine_frame_supreme', 
            input: [
                'mekanism:alloy_atomic', 'thermalendergy:stellarium_ingot', 'mekanism:alloy_atomic',
                'thermalendergy:stellarium_ingot', 'thermalendergy:stellarium_ingot',
                'mekanism:alloy_atomic', 'thermalendergy:stellarium_ingot', 'mekanism:alloy_atomic'
            ], 
            fluid: 'industrialforegoing:latex', 
            amt: 1000, 
            base: 'industrialforegoing:machine_frame_advanced',
            id: 'supreme' 
        }
    ]

    dissolutionFrames.forEach(f => {
        event.remove({ output: f.out })
        
        let ingredientList = []
        f.input.forEach(i => { ingredientList.push({ item: i }) })
        ingredientList.push({ item: f.base }) // On ajoute le châssis de base

        event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredientList,
            inputFluid: `{FluidName:"${f.fluid}",Amount:${f.amt}}`,
            processingTime: 300,
            output: { item: f.out, count: 1 }
        }).id(`entropy:age6/${f.id}_frame_dissolution`)
    })

    // Steel Casing
    event.remove({ output: 'mekanism:steel_casing' })
    event.shaped('mekanism:steel_casing', ['SPS', 'PFP', 'SPS'], {
        S: '#forge:ingots/steel',
        P: 'industrialforegoing:dry_rubber',
        F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/steel_casing_expert')

    // ========================================================================
    // --- 2. LOGISTIQUE : REFINED STORAGE ---
    // ========================================================================

    event.remove({ output: 'refinedstorage:controller' })
    event.shaped('refinedstorage:controller', ['SCS','CFC','SCS'], {
        S: 'thermal:signalum_ingot', C: 'mekanism:basic_control_circuit', F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/rs_controller_expert')

    event.remove({ output: 'refinedstorage:machine_casing' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'industrialforegoing:machine_frame_pity' } },
        chemicalInput: { amount: 40, infuse_type: 'mekanism:redstone' },
        output: { item: 'refinedstorage:machine_casing' }
    }).id('entropy:age6/rs_casing_infusion')

    event.remove({ output: 'refinedstorage:crafter' })
    event.shaped('refinedstorage:crafter', ['SCS','MAM','SCS'], {
        S: 'thermal:signalum_ingot', C: 'mekanism:advanced_control_circuit', M: 'refinedstorage:machine_casing', A: 'mekanism:steel_casing'
    }).id('entropy:age6/rs_crafter_expert')

    event.remove({ output: 'refinedstorage:fluid_interface' })
    event.shaped('refinedstorage:fluid_interface', ['SGS','GFG','SGS'], {
        S: 'thermal:signalum_ingot', G: 'minecraft:glass', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/rs_fluid_interface_expert')

    // ========================================================================
    // --- 3. LOGISTIQUE : APPLIED ENERGISTICS 2 ---
    // ========================================================================

    event.remove({ output: 'ae2:drive' })
    event.shaped('ae2:drive', ['ECE','CFC','ECE'], {
        E: 'thermal:enderium_ingot', C: 'mekanism:basic_control_circuit', F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/ae2_drive_expert')

    event.remove({ output: 'ae2:inscriber' })
    event.shaped('ae2:inscriber', ['EPE','SFS','EPE'], {
        E: 'thermal:enderium_ingot', P: 'minecraft:sticky_piston', S: 'thermal:signalum_ingot', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/ae2_inscriber_expert')

    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped('ae2:molecular_assembler', ['IWI','SCS','IWI'], {
        I: 'minecraft:iron_ingot', W: 'ae2:quartz_glass', S: 'thermal:signalum_ingot', C: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_assembler_expert')

    event.remove({ output: 'ae2:interface' })
    event.shaped('ae2:interface', ['EPE', 'PFP', 'EPE'], {
        E: 'thermal:enderium_ingot', P: 'ae2:calculation_processor', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/ae2_interface_expert')

    event.remove({ output: 'ae2:singularity' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:matter_ball', count: 64 }, { item: 'evolvedmekanism:alloy_singular' }],
        inputFluid: "{FluidName:\"mekanism:ethene\",Amount:1000}", 
        output: { item: 'ae2:singularity', count: 1 },
        processingTime: 600
    }).id('entropy:age6/ae2_singularity_expert')

    event.remove({ output: 'ae2:quantum_link' })
    event.shaped('ae2:quantum_link', ['ASA','CFC','ASA'], {
        A: 'evolvedmekanism:alloy_singular', S: 'ae2:quartz_glass', C: 'evolvedmekanism:quantum_control_circuit', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/ae2_quantum_link_expert')

    event.remove({ output: 'ae2:quantum_ring' })
    event.shaped('ae2:quantum_ring', ['EBE','BMB','EBE'], {
        E: 'thermal:enderium_ingot', B: 'evolvedmekanism:ingot_better_gold', M: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_quantum_ring_expert')

    // ========================================================================
    // --- 4. MEKANISM : CHIMIE & ÉNERGIE ---
    // ========================================================================

    event.remove({ output: 'mekanismgenerators:gas_burning_generator' })
    event.shaped('mekanismgenerators:gas_burning_generator', ['CAC','TFT','CAC'], {
        C: 'mekanism:advanced_control_circuit', A: 'mekanism:alloy_reinforced', T: 'mekanism:electrolytic_core', F: 'industrialforegoing:machine_frame_advanced'
    }).id('entropy:age6/gas_generator_expert')

    event.remove({ output: 'mekanism:pressurized_reaction_chamber' })
    event.shaped('mekanism:pressurized_reaction_chamber', ['ACA','DFD','ACA'], {
        A: 'mekanism:alloy_reinforced', C: 'mekanism:advanced_control_circuit', D: 'mekanism:dynamic_tank', F: 'industrialforegoing:machine_frame_advanced'
    }).id('entropy:age6/prc_expert')

    event.remove({ output: 'mekanism:electrolytic_separator' })
    event.shaped('mekanism:electrolytic_separator', ['ACA','SFS','ACA'], {
        A: 'mekanism:alloy_infused', C: 'mekanism:basic_control_circuit', S: 'alltheores:steel_ingot', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/electrolytic_separator_expert')

    event.remove({ output: 'mekanism:alloy_reinforced' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'mekanism:alloy_infused' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:diamond' },
        output: { item: 'mekanism:alloy_reinforced' }
    }).id('entropy:age6/alloy_reinforced_infusion')

    event.remove({ output: 'mekanism:alloy_atomic' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'mekanism:alloy_reinforced' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:refined_obsidian' },
        output: { item: 'mekanism:alloy_atomic' }
    }).id('entropy:age6/alloy_atomic_infusion')

    // ========================================================================
    // --- 5. EVOLVED MEKANISM : MATÉRIAUX SUPÉRIEURS ---
    // ========================================================================

    event.remove({ output: 'evolvedmekanism:alloy_hypercharged' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'mekanism:alloy_atomic' } },
        chemicalInput: { amount: 80, infuse_type: 'mekanism:diamond' },
        output: { item: 'evolvedmekanism:alloy_hypercharged' }
    }).id('entropy:age6/alloy_hypercharged_infusion')

    event.remove({ output: 'evolvedmekanism:alloy_subatomic' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'evolvedmekanism:alloy_hypercharged' } },
        chemicalInput: { amount: 80, infuse_type: 'mekanism:refined_obsidian' },
        output: { item: 'evolvedmekanism:alloy_subatomic' }
    }).id('entropy:age6/alloy_subatomic_infusion')

    event.remove({ output: 'evolvedmekanism:alloy_singular' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'evolvedmekanism:alloy_subatomic' } },
        chemicalInput: { amount: 100, infuse_type: 'mekanism:tin' }, 
        output: { item: 'evolvedmekanism:alloy_singular' }
    }).id('entropy:age6/alloy_singular_infusion')

    event.remove({ output: 'evolvedmekanism:overclocked_control_circuit' })
    event.shaped('evolvedmekanism:overclocked_control_circuit', ['AHA','HCH','AHA'], {
        A: 'mekanism:alloy_atomic', H: 'evolvedmekanism:alloy_hypercharged', C: 'mekanism:ultimate_control_circuit'
    }).id('entropy:age6/overclocked_circuit_expert')

    event.remove({ output: 'evolvedmekanism:quantum_control_circuit' })
    event.shaped('evolvedmekanism:quantum_control_circuit', ['SQS','QCQ','SQS'], {
        S: 'evolvedmekanism:alloy_subatomic', Q: 'ae2:quantum_link', C: 'evolvedmekanism:overclocked_control_circuit'
    }).id('entropy:age6/quantum_circuit_expert')

    event.remove({ output: 'evolvedmekanism:dense_control_circuit' })
    event.shaped('evolvedmekanism:dense_control_circuit', ['PPP','SCS','PPP'], {
        P: 'evolvedmekanism:ingot_plaslitherite', S: 'evolvedmekanism:alloy_singular', C: 'evolvedmekanism:quantum_control_circuit'
    }).id('entropy:age6/dense_circuit_expert')

    event.remove({ output: 'evolvedmekanism:ingot_better_gold' })
    event.custom({
        type: 'mekanism:enriching',
        input: { ingredient: { item: 'minecraft:gold_ingot' } },
        output: { item: 'evolvedmekanism:ingot_better_gold' }
    }).id('entropy:age6/better_gold_enriching')

    event.remove({ output: 'evolvedmekanism:ingot_plaslitherite' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'evolvedmekanism:alloy_singular' }, { item: 'industrialforegoing:dry_rubber' }, { item: 'thermal:enderium_ingot' }],
        inputFluid: "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
        output: { item: 'evolvedmekanism:ingot_plaslitherite' },
        processingTime: 400
    }).id('entropy:age6/plaslitherite_dissolution')

    // ========================================================================
    // --- 6. ANTIMATIÈRE & ALLIAGES FINAUX ---
    // ========================================================================

    event.remove({ output: 'mekanism:sps_casing' })
    event.shaped('mekanism:sps_casing', ['BSB','SFS','BSB'], {
        B: 'evolvedmekanism:alloy_subatomic', S: 'evolvedmekanism:alloy_hypercharged', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/sps_casing_expert')

    event.remove({ output: 'mekanism:sps_port' })
    event.shaped('mekanism:sps_port', [' C ','CPC',' C '], {
        C: 'evolvedmekanism:quantum_control_circuit', P: 'mekanism:sps_casing'
    }).id('entropy:age6/sps_port_expert')

    event.remove({ output: 'mekanism:supercharged_coil' })
    event.shaped('mekanism:supercharged_coil', ['AHA','HCH','AHA'], {
        A: 'evolvedmekanism:alloy_singular', H: 'evolvedmekanism:alloy_hypercharged', C: 'evolvedmekanism:overclocked_control_circuit'
    }).id('entropy:age6/supercharged_coil_expert')

    event.remove({ output: 'mekanism:structural_glass' })
    event.shaped('mekanism:structural_glass', [' S ','SGS',' S '], {
        S: 'alltheores:steel_ingot', G: 'ae2:quartz_glass'
    }).id('entropy:age6/structural_glass_expert')

    event.remove({ output: 'mekanism:pellet_antimatter' })
    event.custom({
        type: 'mekanism:nucleosynthesizing',
        itemInput: { ingredient: { item: 'evolvedmekanism:alloy_singular' } },
        gasInput: { amount: 100, gas: 'mekanism:antimatter' }, 
        output: { item: 'mekanism:pellet_antimatter' },
        duration: 100
    }).id('entropy:age6/antimatter_pellet_expert')

    event.remove({ output: 'evolvedmekanism:alloy_exoversal' })
    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: { ingredient: { item: "evolvedmekanism:alloy_singular" } },
        gasInput: { amount: 100, gas: "mekanism:antimatter" },
        output: { item: "evolvedmekanism:alloy_exoversal" },
        duration: 200
    }).id('entropy:age6/alloy_exoversal_nucleo')

    // SPS Table Fix (Optional)
    event.shaped('evolvedmekanism:alloy_exoversal', [' S ','APA',' S '], {
        S: 'evolvedmekanism:alloy_singular',
        P: 'mekanism:pellet_antimatter',
        A: 'evolvedmekanism:ingot_plaslitherite'
    }).id('entropy:age6/exoversal_table_fix')

    event.remove({ output: 'evolvedmekanism:multiversal_control_circuit' })
    event.shaped('evolvedmekanism:multiversal_control_circuit', ['EXE','XCX','EXE'], {
        E: 'evolvedmekanism:alloy_exoversal', X: 'mekanism:pellet_antimatter', C: 'evolvedmekanism:dense_control_circuit'
    }).id('entropy:age6/multiversal_circuit_expert')

    // ========================================================================
    // --- 7. STOCKAGE MASSIF & FACTORIES ---
    // ========================================================================

    event.remove({ output: 'mekanism:qio_drive_supermassive' })
    event.shaped('mekanism:qio_drive_supermassive', ['DQD','QAQ','DQD'], {
        D: 'evolvedmekanism:dense_control_circuit', Q: 'evolvedmekanism:alloy_singular', A: 'mekanism:qio_drive_hyper_dense'
    }).id('entropy:age6/qio_supermassive_expert')

    const factoryMap = [
        { machine: 'enrichment_chamber', factory: 'mekanism:basic_enriching_factory' },
        { machine: 'osmium_compressor', factory: 'mekanism:basic_compressing_factory' },
        { machine: 'purification_chamber', factory: 'mekanism:basic_purifying_factory' },
        { machine: 'metallurgic_infuser', factory: 'mekanism:basic_infusing_factory' }
    ]
    factoryMap.forEach(f => {
        event.remove({ output: f.factory })
        event.shaped(f.factory, ['CAC','SFS','CAC'], {
            C: 'mekanism:basic_control_circuit', A: 'mekanism:alloy_infused', S: 'alltheores:steel_ingot', F: `mekanism:${f.machine}`
        }).id(`entropy:age6/${f.factory.replace(':', '_')}_expert`)
    })

    event.remove({ output: 'mekanism:logistical_sorter' })
    event.shaped('mekanism:logistical_sorter', ['ICI','SFS','ICI'], {
        I: 'minecraft:iron_ingot', C: 'mekanism:basic_control_circuit', S: 'thermal:signalum_ingot', F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/logistical_sorter_expert')

    event.remove({ output: 'mekanism:configurator' })
    event.shaped('mekanism:configurator', [' L ',' S ',' E '], {
        L: 'mekanism:alloy_infused', S: 'minecraft:stick', E: 'mekanism:energy_tablet'
    }).id('entropy:age6/configurator_expert')

    // ========================================================================
    // --- 8. MEKASUITE (PALIER ANTIMATIÈRE) ---
    // ========================================================================

    event.remove({ output: 'mekanism:mekasuit_helmet' })
    event.shaped('mekanism:mekasuit_helmet', ['HCH','APA','SFS'], {
        H: 'evolvedmekanism:alloy_singular', C: 'evolvedmekanism:dense_control_circuit', A: 'mekanism:pellet_antimatter', P: 'mekanism:pellet_polonium', S: 'evolvedmekanism:ingot_plaslitherite', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/mekasuit_helmet_expert')

    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
    event.shaped('mekanism:mekasuit_bodyarmor', ['HCH','APA','SFS'], {
        H: 'evolvedmekanism:alloy_exoversal', C: 'evolvedmekanism:multiversal_control_circuit', A: 'mekanism:pellet_antimatter', P: 'mekanism:pellet_polonium', S: 'evolvedmekanism:ingot_plaslitherite', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/mekasuit_bodyarmor_expert')

    event.remove({ output: 'mekanism:mekasuit_pants' })
    event.shaped('mekanism:mekasuit_pants', ['HCH','APA','SFS'], {
        H: 'evolvedmekanism:alloy_subatomic', C: 'evolvedmekanism:dense_control_circuit', A: 'mekanism:pellet_antimatter', P: 'mekanism:pellet_polonium', S: 'evolvedmekanism:ingot_plaslitherite', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/mekasuit_pants_expert')

    event.remove({ output: 'mekanism:mekasuit_boots' })
    event.shaped('mekanism:mekasuit_boots', ['HCH','APA','SFS'], {
        H: 'evolvedmekanism:alloy_hypercharged', C: 'evolvedmekanism:overclocked_control_circuit', A: 'mekanism:pellet_antimatter', P: 'mekanism:pellet_polonium', S: 'evolvedmekanism:ingot_plaslitherite', F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/mekasuit_boots_expert')

})