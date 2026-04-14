ServerEvents.recipes(event => {

    // ========================================================================
    // --- 1. INFRASTRUCTURE ET MACHINE FRAMES ---
    // ========================================================================

    // Metallurgic Infuser (Mekanism)
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', ['SFS', 'RCR', 'SFS'], {
        S: 'thermal:signalum_ingot',
        F: 'thermal:machine_frame',
        R: 'minecraft:redstone_block',
        C: 'thermal:enderium_ingot'
    }).id('entropy:age6/metallurgic_infuser_expert')

    // Basic Control Circuit (Infusion)
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'thermal:signalum_ingot' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:redstone' },
        output: { item: 'mekanism:basic_control_circuit' }
    }).id('entropy:age6/basic_circuit_infusion')

    // Industrial Foregoing Frames (Pity -> Supreme)
    const frames = [
        { out: 'industrialforegoing:machine_frame_pity', pattern: ['IPI','PMP','IPI'], ing: { I: 'alltheores:invar_ingot', P: 'industrialforegoing:dry_rubber', M: 'thermal:machine_frame' }, id: 'pity' },
        { out: 'industrialforegoing:machine_frame_simple', pattern: ['APA','PFP','APA'], ing: { A: 'mekanism:alloy_infused', P: 'thermalendergy:prismalium_ingot', F: 'industrialforegoing:machine_frame_pity' }, id: 'simple' },
        { out: 'industrialforegoing:machine_frame_advanced', pattern: ['AMA','MVM','AMA'], ing: { A: 'mekanism:alloy_reinforced', M: 'thermalendergy:melodium_ingot', V: 'industrialforegoing:machine_frame_simple' }, id: 'advanced' },
        { out: 'industrialforegoing:machine_frame_supreme', pattern: ['ASA','SVS','ASA'], ing: { A: 'mekanism:alloy_atomic', S: 'thermalendergy:stellarium_ingot', V: 'industrialforegoing:machine_frame_advanced' }, id: 'supreme' }
    ]
    frames.forEach(f => {
        event.remove({ output: f.out })
        event.shaped(f.out, f.pattern, f.ing).id(`entropy:age6/${f.id}_frame_expert`)
    })

    // Steel Casing
    event.remove({ output: 'mekanism:steel_casing' })
    event.shaped('mekanism:steel_casing', ['SPS', 'PFP', 'SPS'], {
        S: 'alltheores:steel_ingot',
        P: 'industrialforegoing:dry_rubber',
        F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/steel_casing_expert')

    // ========================================================================
    // --- 2. REFINED STORAGE ---
    // ========================================================================

    // Controller & Casing
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

    // Crafter & Fluid Interface
    event.remove({ output: 'refinedstorage:crafter' })
    event.shaped('refinedstorage:crafter', ['SCS','MAM','SCS'], {
        S: 'thermal:signalum_ingot', C: 'mekanism:advanced_control_circuit', M: 'refinedstorage:machine_casing', A: 'mekanism:steel_casing'
    }).id('entropy:age6/rs_crafter_expert')

    event.remove({ output: 'refinedstorage:fluid_interface' })
    event.shaped('refinedstorage:fluid_interface', ['SGS','GFG','SGS'], {
        S: 'thermal:signalum_ingot', G: 'minecraft:glass', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/rs_fluid_interface_expert')

    // Components 1k & 16k
    event.remove({ output: 'refinedstorage:1k_storage_part' })
    event.shaped('refinedstorage:1k_storage_part', ['SPS','PCP','SPS'], {
        S: 'thermal:signalum_ingot', P: 'industrialforegoing:dry_rubber', C: 'mekanism:basic_control_circuit'
    }).id('entropy:age6/rs_1k_part_expert')

    event.remove({ output: 'refinedstorage:16k_storage_part' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'refinedstorage:4k_storage_part' }, { item: 'refinedstorage:4k_storage_part' }, { item: 'refinedstorage:4k_storage_part' }, { item: 'thermal:signalum_ingot' }],
        inputFluid: "{FluidName:\"mekanism:brine\",Amount:500}",
        output: { item: 'refinedstorage:16k_storage_part', count: 1 },
        processingTime: 300
    }).id('entropy:age6/rs_16k_brine')

    // ========================================================================
    // --- 3. APPLIED ENERGISTICS 2 ---
    // ========================================================================

    // Drive & Inscriber
    event.remove({ output: 'ae2:drive' })
    event.shaped('ae2:drive', ['ECE','CFC','ECE'], {
        E: 'thermal:enderium_ingot', C: 'mekanism:basic_control_circuit', F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/ae2_drive_expert')

    event.remove({ output: 'ae2:inscriber' })
    event.shaped('ae2:inscriber', ['EPE','SFS','EPE'], {
        E: 'thermal:enderium_ingot', P: 'minecraft:sticky_piston', S: 'thermal:signalum_ingot', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/ae2_inscriber_expert')

    // Molecular Assembler & Interface
    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped('ae2:molecular_assembler', ['IWI','SCS','IWI'], {
        I: 'minecraft:iron_ingot', W: 'ae2:quartz_glass', S: 'thermal:signalum_ingot', C: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_assembler_expert')

    event.remove({ output: 'ae2:interface' })
    event.shaped('ae2:interface', ['EPE', 'PFP', 'EPE'], {
        E: 'thermal:enderium_ingot', P: 'ae2:calculation_processor', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/ae2_interface_expert')

    // AE2 Components (Progression dissolution)
    event.remove({ output: 'ae2:cell_component_16k' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:cell_component_4k' }, { item: 'ae2:cell_component_4k' }, { item: 'ae2:cell_component_4k' }, { item: 'ae2:calculation_processor' }, { item: 'thermal:signalum_ingot' }],
        inputFluid: "{FluidName:\"mekanism:brine\",Amount:500}",
        output: { item: 'ae2:cell_component_16k', count: 1 },
        processingTime: 300
    }).id('entropy:age6/ae2_16k_brine')

    // ========================================================================
    // --- 4. MEKANISM : CHIMIE ET ÉNERGIE ---
    // ========================================================================

    // Gas-Burning Generator
    event.remove({ output: 'mekanismgenerators:gas_burning_generator' })
    event.shaped('mekanismgenerators:gas_burning_generator', ['CAC','TFT','CAC'], {
        C: 'mekanism:advanced_control_circuit', A: 'mekanism:alloy_reinforced', T: 'mekanism:electrolytic_core', F: 'industrialforegoing:machine_frame_advanced'
    }).id('entropy:age6/gas_generator_expert')

    // PRC & Separator
    event.remove({ output: 'mekanism:pressurized_reaction_chamber' })
    event.shaped('mekanism:pressurized_reaction_chamber', ['ACA','DFD','ACA'], {
        A: 'mekanism:alloy_reinforced', C: 'mekanism:advanced_control_circuit', D: 'mekanism:dynamic_tank', F: 'industrialforegoing:machine_frame_advanced'
    }).id('entropy:age6/prc_expert')

    event.remove({ output: 'mekanism:electrolytic_separator' })
    event.shaped('mekanism:electrolytic_separator', ['ACA','SFS','ACA'], {
        A: 'mekanism:alloy_infused', C: 'mekanism:basic_control_circuit', S: 'alltheores:steel_ingot', F: 'industrialforegoing:machine_frame_simple'
    }).id('entropy:age6/electrolytic_separator_expert')

    // ALLIAGES SUPÉRIEURS (Automatisation)
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
    // --- 5. LOGISTIQUE ET OUTILS ---
    // ========================================================================

    // Logistical Sorter & Configurator
    event.remove({ output: 'mekanism:logistical_sorter' })
    event.shaped('mekanism:logistical_sorter', ['ICI','SFS','ICI'], {
        I: 'minecraft:iron_ingot', C: 'mekanism:basic_control_circuit', S: 'thermal:signalum_ingot', F: 'industrialforegoing:machine_frame_pity'
    }).id('entropy:age6/logistical_sorter_expert')

    event.remove({ output: 'mekanism:configurator' })
    event.shaped('mekanism:configurator', [' L ',' S ',' E '], {
        L: 'mekanism:alloy_infused', S: 'minecraft:stick', E: 'mekanism:energy_tablet'
    }).id('entropy:age6/configurator_expert')

    // ========================================================================
    // --- 6. FACTORIES (BOUCLE AUTOMATIQUE) ---
    // ========================================================================

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
    // ========================================================================
    // ---EVOLVED MEKANISM---
    // ========================================================================

    // --- ALLIAGES EVOLVED ---
    
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
        chemicalInput: { amount: 100, infuse_type: 'mekanism:tin' }, // Ou autre gaz rare
        output: { item: 'evolvedmekanism:alloy_singular' }
    }).id('entropy:age6/alloy_singular_infusion')

    // --- CIRCUITS EVOLVED ---

    event.remove({ output: 'evolvedmekanism:overclocked_control_circuit' })
    event.shaped('evolvedmekanism:overclocked_control_circuit', [
        'AHA',
        'HCH',
        'AHA'
    ], {
        A: 'mekanism:alloy_atomic',
        H: 'evolvedmekanism:alloy_hypercharged',
        C: 'mekanism:ultimate_control_circuit'
    }).id('entropy:age6/overclocked_circuit_expert')

    event.remove({ output: 'evolvedmekanism:quantum_control_circuit' })
    event.shaped('evolvedmekanism:quantum_control_circuit', [
        'SQS',
        'QCQ',
        'SQS'
    ], {
        S: 'evolvedmekanism:alloy_subatomic',
        Q: 'ae2:quantum_link_chamber', 
        C: 'evolvedmekanism:overclocked_control_circuit'
    }).id('entropy:age6/quantum_circuit_expert')

    // --- MÉTAUX SPÉCIAUX ---

    event.remove({ output: 'evolvedmekanism:ingot_better_gold' })
    event.custom({
        type: 'mekanism:enriching',
        input: { ingredient: { item: 'minecraft:gold_ingot' } },
        output: { item: 'evolvedmekanism:ingot_better_gold', count: 1 }
    }).id('entropy:age6/better_gold_enriching')

    event.remove({ output: 'evolvedmekanism:ingot_plaslitherite' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'evolvedmekanism:alloy_singular' },
            { item: 'industrialforegoing:dry_rubber' },
            { item: 'thermal:enderium_ingot' }
        ],
        inputFluid: "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
        output: { item: 'evolvedmekanism:ingot_plaslitherite', count: 1 },
        processingTime: 400
    }).id('entropy:age6/plaslitherite_dissolution')
    // ========================================================================
    // --- 8. APPLIED ENERGISTICS 2 : DIMENSIONAL LINK ---
    // ========================================================================

    event.remove({ output: 'ae2:quantum_link' })
    event.shaped('ae2:quantum_link', [
        'ASA',
        'CFC',
        'ASA'
    ], {
        A: 'evolvedmekanism:alloy_singular',
        S: 'ae2:quartz_glass',
        C: 'evolvedmekanism:quantum_control_circuit',
        F: 'industrialforegoing:machine_frame_supreme'
    }).id('entropy:age6/ae2_quantum_link_expert')

    // Quantum Ring (La structure externe)
    event.remove({ output: 'ae2:quantum_ring' })
    event.shaped('ae2:quantum_ring', [
        'EBE',
        'BMB',
        'EBE'
    ], {
        E: 'thermal:enderium_ingot',
        B: 'evolvedmekanism:ingot_better_gold',
        M: 'mekanism:steel_casing'
    }).id('entropy:age6/ae2_quantum_ring_expert')

    // Craft des Singularities (Via une Explosion ou une machine)
    event.remove({ output: 'ae2:singularity' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'ae2:matter_ball', count: 64 },
            { item: 'evolvedmekanism:alloy_singular' }
        ],
        inputFluid: "{FluidName:\"mekanism:ethene\",Amount:1000}", 
        output: { item: 'ae2:singularity', count: 1 },
        processingTime: 600
    }).id('entropy:age6/ae2_singularity_expert')
    // ========================================================================
    // --- 9. UTILITÉ : STOCKAGE DE MASSE & PROCESSEURS ---
    // ========================================================================

    event.remove({ output: 'megacells:cell_component_4m' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'megacells:cell_component_1m' },
            { item: 'megacells:cell_component_1m' },
            { item: 'megacells:cell_component_1m' },
            { item: 'evolvedmekanism:alloy_singular' }, // Utilisation de l'alliage Singular
            { item: 'evolvedmekanism:quantum_control_circuit' } // Et du circuit Quantum
        ],
        inputFluid: "{FluidName:\"mekanism:lithium\",Amount:2000}",
        output: { item: 'megacells:cell_component_4m', count: 1 },
        processingTime: 1000
    }).id('entropy:age6/megacells_4m_expert')

    // Dense Control Circuit 
    event.remove({ output: 'evolvedmekanism:dense_control_circuit' })
    event.shaped('evolvedmekanism:dense_control_circuit', [
        'PPP',
        'SCS',
        'PPP'
    ], {
        P: 'evolvedmekanism:ingot_plaslitherite',
        S: 'evolvedmekanism:alloy_singular',
        C: 'evolvedmekanism:quantum_control_circuit'
    }).id('entropy:age6/dense_circuit_expert')

    // QIO Bulk Storage (Mekanism)
    event.remove({ output: 'mekanism:qio_drive_supermassive' })
    event.shaped('mekanism:qio_drive_supermassive', [
        'DQD',
        'QAQ',
        'DQD'
    ], {
        D: 'evolvedmekanism:dense_control_circuit',
        Q: 'evolvedmekanism:alloy_singular',
        A: 'mekanism:qio_drive_hyper_dense'
    }).id('entropy:age6/qio_supermassive_expert')
    // ========================================================================
    // --- 11. L'ANTIMATIÈRE ET L'EXOVERSAL (PUISSANCE MAX) ---
    // ========================================================================

    // Pellet d'Antimatière (Simplifié dans le Nucleosynthesizer)
    event.remove({ output: 'mekanism:antimatter_pellet' })
    event.custom({
        type: 'mekanism:nucleosynthesizing',
        itemInput: { ingredient: { item: 'evolvedmekanism:alloy_singular' } },
        gasInput: { amount: 100, gas: 'mekanism:antimatter' }, // 10x moins cher en gaz
        output: { item: 'mekanism:antimatter_pellet' },
        duration: 100
    }).id('entropy:age6/antimatter_pellet_expert')

    // Alloy Exoversal (L'alliage ultime avant le Creative)
    event.remove({ output: 'evolvedmekanism:alloy_exoversal' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'evolvedmekanism:alloy_singular' },
            { item: 'mekanism:antimatter_pellet' },
            { item: 'thermal:enderium_ingot' },
            { item: 'evolvedmekanism:ingot_plaslitherite' }
        ],
        inputFluid: "{FluidName:\"mekanism:lithium\",Amount:1000}",
        output: { item: 'evolvedmekanism:alloy_exoversal', count: 1 },
        processingTime: 200
    }).id('entropy:age6/alloy_exoversal_dissolution')

    event.remove({ output: 'evolvedmekanism:multiversal_control_circuit' })
    event.shaped('evolvedmekanism:multiversal_control_circuit', [
        'EXE',
        'XCX',
        'EXE'
    ], {
        E: 'evolvedmekanism:alloy_exoversal',
        X: 'mekanism:antimatter_pellet',
        C: 'evolvedmekanism:dense_control_circuit'
    }).id('entropy:age6/multiversal_circuit_expert')
})