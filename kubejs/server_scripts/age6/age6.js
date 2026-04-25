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

    // Basic Control Circuit (Infusion)
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'thermal:signalum_ingot' } },
        chemicalInput: { amount: 20, infuse_type: 'mekanism:redstone' },
        output: { item: 'mekanism:basic_control_circuit' }
    }).id('entropy:age6/basic_circuit_infusion')

    // --- CONFIGURATION DES CHASSIS DANS LA DISSOLUTION CHAMBER ---
    const dissolutionFrames = [
        { 
            out: 'industrialforegoing:machine_frame_pity', 
            input: [
                'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
                'industrialforegoing:dryrubber', 'industrialforegoing:dryrubber', 'industrialforegoing:dryrubber',
                'thermal:machine_frame' 
            ], 
            fluid: 'industrialforegoing:latex', amt: 250, id: 'pity' 
        },
        { 
            out: 'industrialforegoing:machine_frame_simple', 
            input: [
                'mekanism:alloy_infused', 'mekanism:alloy_infused', 'mekanism:alloy_infused', 'mekanism:alloy_infused',
                'thermalendergy:prismalium_ingot', 'thermalendergy:prismalium_ingot', 'thermalendergy:prismalium_ingot',
                'industrialforegoing:machine_frame_pity'
            ], 
            fluid: 'industrialforegoing:latex', amt: 500, id: 'simple' 
        },
        { 
            out: 'industrialforegoing:machine_frame_advanced', 
            input: [
                'mekanism:alloy_reinforced', 'mekanism:alloy_reinforced', 'mekanism:alloy_reinforced', 'mekanism:alloy_reinforced',
                'thermalendergy:melodium_ingot', 'thermalendergy:melodium_ingot', 'thermalendergy:melodium_ingot',
                'industrialforegoing:machine_frame_simple'
            ], 
            fluid: 'industrialforegoing:latex', amt: 750, id: 'advanced' 
        },
        { 
            out: 'industrialforegoing:machine_frame_supreme', 
            input: [
                'mekanism:alloy_atomic', 'mekanism:alloy_atomic', 'mekanism:alloy_atomic', 'mekanism:alloy_atomic',
                'thermalendergy:stellarium_ingot', 'thermalendergy:stellarium_ingot', 'thermalendergy:stellarium_ingot',
                'industrialforegoing:machine_frame_advanced'
            ], 
            fluid: 'industrialforegoing:latex', amt: 1000, id: 'supreme' 
        }
    ]

    dissolutionFrames.forEach(f => {
        event.remove({ output: f.out })
        
        let ingredientList = []
        f.input.forEach(i => { ingredientList.push({ item: i }) })

        event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredientList,
            inputFluid: `{FluidName:"${f.fluid}",Amount:${f.amt}}`, // Syntaxe la plus stable pour IF
            processingTime: 60,
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

    // AE2 Singularity (Dissolution)
    event.remove({ output: 'ae2:singularity' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'ae2:matter_ball', count: 64 }, { item: 'evolvedmekanism:alloy_singular' }],
        inputFluid: `{FluidName:"mekanism:ethene",Amount:1000}`, 
        output: { item: 'ae2:singularity', count: 1 },
        processingTime: 100
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

    const alloys = [
        { out: 'mekanism:alloy_reinforced', in: 'mekanism:alloy_infused', type: 'mekanism:diamond', id: 'reinforced' },
        { out: 'mekanism:alloy_atomic', in: 'mekanism:alloy_reinforced', type: 'mekanism:refined_obsidian', id: 'atomic' },
        { out: 'evolvedmekanism:alloy_hypercharged', in: 'mekanism:alloy_atomic', type: 'mekanism:diamond', id: 'hypercharged', amt: 80 },
        { out: 'evolvedmekanism:alloy_subatomic', in: 'evolvedmekanism:alloy_hypercharged', type: 'mekanism:refined_obsidian', id: 'subatomic', amt: 80 },
        { out: 'evolvedmekanism:alloy_singular', in: 'evolvedmekanism:alloy_subatomic', type: 'mekanism:tin', id: 'singular', amt: 100 }
    ]

    alloys.forEach(a => {
        event.remove({ output: a.out })
        event.custom({
            type: 'mekanism:metallurgic_infusing',
            itemInput: { ingredient: { item: a.in } },
            chemicalInput: { amount: a.amt || 20, infuse_type: a.type },
            output: { item: a.out }
        }).id(`entropy:age6/alloy_${a.id}_infusion`)
    })

    // Plaslitherite Ingot
    event.remove({ output: 'evolvedmekanism:ingot_plaslitherite' })
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [{ item: 'evolvedmekanism:alloy_singular' }, { item: 'industrialforegoing:dry_rubber' }, { item: 'thermal:enderium_ingot' }],
        inputFluid: `{FluidName:"industrialforegoing:latex",Amount:1000}`,
        output: { item: 'evolvedmekanism:ingot_plaslitherite' },
        processingTime: 120
    }).id('entropy:age6/plaslitherite_dissolution')

    // ========================================================================
    // --- 5. ÉQUIPEMENT FINAL (MEKASUIT) ---
    // ========================================================================

    const suit = [
        { out: 'mekanism:mekasuit_helmet', in: 'evolvedmekanism:alloy_singular', circ: 'evolvedmekanism:dense_control_circuit' },
        { out: 'mekanism:mekasuit_bodyarmor', in: 'evolvedmekanism:alloy_exoversal', circ: 'evolvedmekanism:multiversal_control_circuit' },
        { out: 'mekanism:mekasuit_pants', in: 'evolvedmekanism:alloy_subatomic', circ: 'evolvedmekanism:dense_control_circuit' },
        { out: 'mekanism:mekasuit_boots', in: 'evolvedmekanism:alloy_hypercharged', circ: 'evolvedmekanism:overclocked_control_circuit' }
    ]

    suit.forEach(s => {
        event.remove({ output: s.out })
        event.shaped(s.out, ['HCH','APA','SFS'], {
            H: s.in, C: s.circ, A: 'mekanism:pellet_antimatter', P: 'mekanism:pellet_polonium', S: 'evolvedmekanism:ingot_plaslitherite', F: 'industrialforegoing:machine_frame_supreme'
        }).id(`entropy:age6/${s.out.split(':')[1]}_expert`)
    })

    // Factories Loop
    const factoryMap = [
        { m: 'enrichment_chamber', f: 'mekanism:basic_enriching_factory' },
        { m: 'osmium_compressor', f: 'mekanism:basic_compressing_factory' },
        { m: 'purification_chamber', f: 'mekanism:basic_purifying_factory' },
        { m: 'metallurgic_infuser', f: 'mekanism:basic_infusing_factory' }
    ]
    factoryMap.forEach(f => {
        event.remove({ output: f.f })
        event.shaped(f.f, ['CAC','SFS','CAC'], {
            C: 'mekanism:basic_control_circuit', A: 'mekanism:alloy_infused', S: '#forge:ingots/steel', F: `mekanism:${f.m}`
        }).id(`entropy:age6/${f.f.replace(':', '_')}_expert`)
    })
})