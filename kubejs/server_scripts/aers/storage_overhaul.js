ServerEvents.recipes(event => {

    // ==========================================
    // 🛠️ FONCTION EXPERT : DISSOLUTION CHAMBER
    // ==========================================
    const dissolve = (output, inputs, fluidId, fluidAmount, time, recipeId) => {
        event.remove({ output: output })
        event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: inputs.map(i => ({ item: i })),
            inputFluid: `{FluidName:"${fluidId}",Amount:${fluidAmount}}`,
            output: { item: output, count: 1 },
            processingTime: time
        }).id(`entropy:age6/storage/${recipeId}`)
    }

    // --- Définition des fluides ---
    let latex = "industrialforegoing:latex"
    let water = "minecraft:water"
    let redstone = "thermal:redstone"
    let glowstone = "thermal:glowstone"
    let ether = "industrialforegoing:ether_gas"

    // ==========================================
    // 💾 REFINED STORAGE (Items)
    // Fluide : Latex
    // ==========================================
    
    // Processors
    dissolve('refinedstorage:raw_basic_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:iron_ingot'], latex, 50, 50, 'raw_basic_proc')
    dissolve('refinedstorage:raw_improved_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:gold_ingot'], latex, 100, 75, 'raw_improved_proc')
    dissolve('refinedstorage:raw_advanced_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:diamond'], latex, 150, 100, 'raw_advanced_proc')

    // Storage Parts Base
    dissolve('refinedstorage:1k_storage_part', ['refinedstorage:silicon', 'refinedstorage:silicon', 'refinedstorage:silicon', 'refinedstorage:basic_processor', 'minecraft:iron_ingot'], latex, 100, 100, 'rs_1k')
    dissolve('refinedstorage:4k_storage_part', ['refinedstorage:1k_storage_part', 'refinedstorage:1k_storage_part', 'refinedstorage:1k_storage_part', 'refinedstorage:basic_processor', 'minecraft:gold_ingot'], latex, 200, 150, 'rs_4k')
    dissolve('refinedstorage:16k_storage_part', ['refinedstorage:4k_storage_part', 'refinedstorage:4k_storage_part', 'refinedstorage:4k_storage_part', 'refinedstorage:improved_processor', 'minecraft:quartz'], latex, 300, 200, 'rs_16k')
    dissolve('refinedstorage:64k_storage_part', ['refinedstorage:16k_storage_part', 'refinedstorage:16k_storage_part', 'refinedstorage:16k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:diamond'], latex, 400, 250, 'rs_64k')

    // Tiers Supérieurs (ExtraDisks & ExtraStorage)
    const tiersRS = [
        { outED: 'extradisks:256k_storage_part', outEX: 'extrastorage:storagepart_256k', in: 'refinedstorage:64k_storage_part', mat: 'minecraft:emerald', vol: 500, time: 300, id: '256k' },
        { outED: 'extradisks:1024k_storage_part', outEX: 'extrastorage:storagepart_1024k', in: 'extradisks:256k_storage_part', mat: 'minecraft:netherite_scrap', vol: 700, time: 400, id: '1024k' },
        { outED: 'extradisks:4096k_storage_part', outEX: 'extrastorage:storagepart_4096k', in: 'extradisks:1024k_storage_part', mat: 'minecraft:netherite_ingot', vol: 1000, time: 500, id: '4096k' },
        { outED: 'extradisks:16384k_storage_part', outEX: 'extrastorage:storagepart_16384k', in: 'extradisks:4096k_storage_part', mat: 'thermal:invar_ingot', vol: 1500, time: 600, id: '16384k' }
    ]
    
    tiersRS.forEach(t => {
        dissolve(t.outED, [t.in, t.in, t.in, 'refinedstorage:advanced_processor', t.mat], latex, t.vol, t.time, `ed_${t.id}`)
        dissolve(t.outEX, [t.in, t.in, t.in, 'refinedstorage:advanced_processor', t.mat], latex, t.vol, t.time, `ex_${t.id}`)
    })

    // Très Hauts Tiers ExtraDisks
    dissolve('extradisks:65536k_storage_part', ['extradisks:16384k_storage_part', 'extradisks:16384k_storage_part', 'extradisks:16384k_storage_part', 'refinedstorage:advanced_processor', 'thermal:electrum_ingot'], latex, 900, 500, 'ed_64m')
    dissolve('extradisks:262144k_storage_part', ['extradisks:65536k_storage_part', 'extradisks:65536k_storage_part', 'extradisks:65536k_storage_part', 'refinedstorage:advanced_processor', 'mekanism:ingot_osmium'], latex, 1000, 550, 'ed_256m')
    dissolve('extradisks:1048576k_storage_part', ['extradisks:262144k_storage_part', 'extradisks:262144k_storage_part', 'extradisks:262144k_storage_part', 'refinedstorage:advanced_processor', 'mekanism:ingot_steel'], latex, 1500, 600, 'ed_1024m')
    
    dissolve('extradisks:raw_withering_processor', ['minecraft:wither_skeleton_skull', 'refinedstorage:advanced_processor', 'minecraft:soul_sand', 'minecraft:soul_sand', 'minecraft:diamond'], latex, 2000, 400, 'raw_withering')
    dissolve('extradisks:infinite_storage_part', ['extradisks:1048576k_storage_part', 'extradisks:1048576k_storage_part', 'extradisks:1048576k_storage_part', 'extradisks:raw_withering_processor', 'minecraft:nether_star'], latex, 4000, 1000, 'rs_infinite')

    // ==========================================
    // 💧 FLUID STORAGE (RS + ED + EX)
    // Fluide : EAU
    // ==========================================
    dissolve('refinedstorage:64k_fluid_storage_part', ['minecraft:glass', 'minecraft:glass', 'minecraft:glass', 'refinedstorage:basic_processor', 'minecraft:iron_ingot'], water, 1000, 100, 'rs_64k_fl')
    dissolve('refinedstorage:256k_fluid_storage_part', ['refinedstorage:64k_fluid_storage_part', 'refinedstorage:64k_fluid_storage_part', 'refinedstorage:64k_fluid_storage_part', 'refinedstorage:improved_processor', 'minecraft:gold_ingot'], water, 2000, 150, 'rs_256k_fl')
    dissolve('refinedstorage:1024k_fluid_storage_part', ['refinedstorage:256k_fluid_storage_part', 'refinedstorage:256k_fluid_storage_part', 'refinedstorage:256k_fluid_storage_part', 'refinedstorage:advanced_processor', 'minecraft:diamond'], water, 4000, 200, 'rs_1024k_fl')
    dissolve('refinedstorage:4096k_fluid_storage_part', ['refinedstorage:1024k_fluid_storage_part', 'refinedstorage:1024k_fluid_storage_part', 'refinedstorage:1024k_fluid_storage_part', 'refinedstorage:advanced_processor', 'minecraft:emerald'], water, 8000, 250, 'rs_4096k_fl')

    const fluidTiers = [
        { outED: 'extradisks:16384k_fluid_storage_part', outEX: 'extrastorage:storagepart_16384k_fluid', in: 'refinedstorage:4096k_fluid_storage_part', mat: 'minecraft:netherite_scrap', vol: 10000, id: '16m' },
        { outED: 'extradisks:65536k_fluid_storage_part', outEX: 'extrastorage:storagepart_65536k_fluid', in: 'extradisks:16384k_fluid_storage_part', mat: 'minecraft:netherite_ingot', vol: 12000, id: '64m' },
        { outED: 'extradisks:262144k_fluid_storage_part', outEX: 'extrastorage:storagepart_262144k_fluid', in: 'extradisks:65536k_fluid_storage_part', mat: 'thermal:invar_ingot', vol: 14000, id: '256m' },
        { outED: 'extradisks:1048576k_fluid_storage_part', outEX: 'extrastorage:storagepart_1048576k_fluid', in: 'extradisks:262144k_fluid_storage_part', mat: 'mekanism:ingot_steel', vol: 16000, id: '1024m' }
    ]

    fluidTiers.forEach(t => {
        dissolve(t.outED, [t.in, t.in, t.in, 'refinedstorage:advanced_processor', t.mat], water, t.vol, 400, `ed_${t.id}_fl`)
        dissolve(t.outEX, [t.in, t.in, t.in, 'refinedstorage:advanced_processor', t.mat], water, t.vol, 400, `ex_${t.id}_fl`)
    })

    dissolve('extradisks:infinite_fluid_storage_part', ['extradisks:1048576k_fluid_storage_part', 'extradisks:1048576k_fluid_storage_part', 'extradisks:1048576k_fluid_storage_part', 'extradisks:raw_withering_processor', 'minecraft:nether_star'], water, 32000, 1000, 'ed_inf_fl')

    // ==========================================
    // 💎 APPLIED ENERGISTICS 2
    // Fluide : Redstone / Glowstone
    // ==========================================
    dissolve('ae2:cell_component_1k', ['ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:logic_processor', 'minecraft:redstone'], redstone, 100, 100, 'ae2_1k')
    dissolve('ae2:cell_component_4k', ['ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:logic_processor', 'ae2:fluix_crystal'], redstone, 200, 150, 'ae2_4k')
    dissolve('ae2:cell_component_16k', ['ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:calculation_processor', 'ae2:fluix_crystal'], redstone, 300, 200, 'ae2_16k')
    dissolve('ae2:cell_component_64k', ['ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:calculation_processor', 'ae2:sky_dust'], redstone, 400, 250, 'ae2_64k')
    dissolve('ae2:cell_component_256k', ['ae2:cell_component_64k', 'ae2:cell_component_64k', 'ae2:cell_component_64k', 'ae2:engineering_processor', 'minecraft:diamond'], redstone, 500, 300, 'ae2_256k')

    // AppFlux (Energie AE2)
    dissolve('appflux:core_1k', ['ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:logic_processor', 'thermal:electrum_ingot'], redstone, 250, 150, 'flux_1k')
    dissolve('appflux:core_4k', ['appflux:core_1k', 'appflux:core_1k', 'appflux:core_1k', 'ae2:logic_processor', 'thermal:signalum_ingot'], redstone, 500, 200, 'flux_4k')
    dissolve('appflux:core_16k', ['appflux:core_4k', 'appflux:core_4k', 'appflux:core_4k', 'ae2:calculation_processor', 'thermal:signalum_ingot'], redstone, 1000, 250, 'flux_16k')
    dissolve('appflux:core_64k', ['appflux:core_16k', 'appflux:core_16k', 'appflux:core_16k', 'ae2:engineering_processor', 'thermal:lumium_ingot'], glowstone, 500, 300, 'flux_64k')
    dissolve('appflux:core_256k', ['appflux:core_64k', 'appflux:core_64k', 'appflux:core_64k', 'ae2:engineering_processor', 'thermal:lumium_ingot'], glowstone, 1000, 400, 'flux_256k')
    dissolve('appflux:core_1m', ['appflux:core_256k', 'appflux:core_256k', 'appflux:core_256k', 'ae2:engineering_processor', 'thermal:enderium_ingot'], glowstone, 2000, 500, 'flux_1m')
    dissolve('appflux:core_4m', ['appflux:core_1m', 'appflux:core_1m', 'appflux:core_1m', 'ae2:engineering_processor', 'thermal:enderium_ingot'], glowstone, 4000, 600, 'flux_4m')
    dissolve('appflux:core_16m', ['appflux:core_4m', 'appflux:core_4m', 'appflux:core_4m', 'ae2:engineering_processor', 'mekanism:alloy_elite'], redstone, 8000, 700, 'flux_16m')
    dissolve('appflux:core_64m', ['appflux:core_16m', 'appflux:core_16m', 'appflux:core_16m', 'ae2:engineering_processor', 'mekanism:alloy_ultimate'], glowstone, 8000, 800, 'flux_64m')
    dissolve('appflux:core_256m', ['appflux:core_64m', 'appflux:core_64m', 'appflux:core_64m', 'ae2:engineering_processor', 'mekanism:alloy_atomic'], glowstone, 16000, 1000, 'flux_256m')

    // ==========================================
    // 🌌 MEGACELLS (Ultra End-Game AE2)
    // Fluide : Ether Gas
    // ==========================================
    dissolve('megacells:cell_component_1m', ['ae2:cell_component_256k', 'ae2:cell_component_256k', 'ae2:cell_component_256k', 'ae2:engineering_processor', 'mekanism:alloy_atomic'], ether, 1000, 600, 'mega_1m')
    dissolve('megacells:cell_component_4m', ['megacells:cell_component_1m', 'megacells:cell_component_1m', 'megacells:cell_component_1m', 'ae2:engineering_processor', 'mekanism:pellet_polonium'], ether, 2000, 800, 'mega_4m')
    dissolve('megacells:cell_component_16m', ['megacells:cell_component_4m', 'megacells:cell_component_4m', 'megacells:cell_component_4m', 'ae2:engineering_processor', 'mekanism:pellet_plutonium'], ether, 4000, 1000, 'mega_16m')
    dissolve('megacells:cell_component_64m', ['megacells:cell_component_16m', 'megacells:cell_component_16m', 'megacells:cell_component_16m', 'ae2:engineering_processor', 'mekanism:pellet_antimatter'], ether, 8000, 1500, 'mega_64m')
    dissolve('megacells:cell_component_256m', ['megacells:cell_component_64m', 'megacells:cell_component_64m', 'megacells:cell_component_64m', 'ae2:engineering_processor', 'mekanism:pellet_antimatter'], ether, 16000, 2000, 'mega_256m')

    console.log('--- [ENTROPY] Script Age 6 COMPLET chargé ! ---')
})