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

    // ==========================================
    // 💽 REFINED STORAGE & EXTRADISKS (Accès Facilité)
    // Fluide : Latex | Ingots : Fer -> Or -> Diamant -> Invar
    // ==========================================
    let latex = "industrialforegoing:latex"
    
    // Dissolve(Sortie, [Composant x3, Processeur, Métal], Fluide, Quantité, Temps, Nom_ID)
    dissolve('refinedstorage:1k_storage_part', ['refinedstorage:silicon', 'refinedstorage:silicon', 'refinedstorage:silicon', 'refinedstorage:basic_processor', 'minecraft:iron_ingot'], latex, 100, 100, 'rs_1k')
    dissolve('refinedstorage:4k_storage_part', ['refinedstorage:1k_storage_part', 'refinedstorage:1k_storage_part', 'refinedstorage:1k_storage_part', 'refinedstorage:basic_processor', 'minecraft:gold_ingot'], latex, 200, 150, 'rs_4k')
    dissolve('refinedstorage:16k_storage_part', ['refinedstorage:4k_storage_part', 'refinedstorage:4k_storage_part', 'refinedstorage:4k_storage_part', 'refinedstorage:improved_processor', 'minecraft:quartz'], latex, 300, 200, 'rs_16k')
    dissolve('refinedstorage:64k_storage_part', ['refinedstorage:16k_storage_part', 'refinedstorage:16k_storage_part', 'refinedstorage:16k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:diamond'], latex, 400, 250, 'rs_64k')
    
// ExtraDisks Tiers (256k -> 1M -> 4M -> 16M -> 64M -> 256M) : Chaque tier demande 3 du tier précédent + un processeur avancé + un matériau de plus en plus rare (Emerald -> Netherite Scrap -> Netherite Ingot -> Invar -> Electrum -> Osmium -> Steel)
    dissolve('extradisks:256k_storage_part', ['refinedstorage:64k_storage_part', 'refinedstorage:64k_storage_part', 'refinedstorage:64k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:emerald'], latex, 500, 300, 'rs_256k')
    dissolve('extradisks:1024k_storage_part', ['extradisks:256k_storage_part', 'extradisks:256k_storage_part', 'extradisks:256k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:netherite_scrap'], latex, 600, 350, 'rs_1024k')
    dissolve('extradisks:4096k_storage_part', ['extradisks:1024k_storage_part', 'extradisks:1024k_storage_part', 'extradisks:1024k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:netherite_ingot'], latex, 700, 400, 'rs_4096k')
    dissolve('extradisks:16384k_storage_part', ['extradisks:4096k_storage_part', 'extradisks:4096k_storage_part', 'extradisks:4096k_storage_part', 'refinedstorage:advanced_processor', 'thermal:invar_ingot'], latex, 800, 450, 'rs_16384k')
    dissolve('extradisks:65536k_storage_part', ['extradisks:16384k_storage_part', 'extradisks:16384k_storage_part', 'extradisks:16384k_storage_part', 'refinedstorage:advanced_processor', 'thermal:electrum_ingot'], latex, 900, 500, 'rs_65536k')
    dissolve('extradisks:262144k_storage_part', ['extradisks:65536k_storage_part', 'extradisks:65536k_storage_part', 'extradisks:65536k_storage_part', 'refinedstorage:advanced_processor', 'mekanism:ingot_osmium'], latex, 1000, 550, 'rs_262144k')
    dissolve('extradisks:1048576k_storage_part', ['extradisks:262144k_storage_part', 'extradisks:262144k_storage_part', 'extradisks:262144k_storage_part', 'refinedstorage:advanced_processor', 'mekanism:ingot_steel'], latex, 1500, 600, 'rs_1048576k')
    
    // Les Raw Processor & Infinite Disk
    dissolve('extradisks:raw_withering_processor', ['minecraft:wither_skeleton_skull', 'refinedstorage:advanced_processor', 'minecraft:soul_sand', 'minecraft:soul_sand', 'minecraft:diamond'], latex, 2000, 400, 'raw_withering')
    dissolve('extradisks:infinite_storage_part', ['extradisks:1048576k_storage_part', 'extradisks:1048576k_storage_part', 'extradisks:1048576k_storage_part', 'extradisks:raw_withering_processor', 'minecraft:nether_star'], latex, 4000, 1000, 'rs_infinite')
    dissolve('refinedstorage:raw_basic_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:iron_ingot'], latex, 50, 50, 'raw_basic_proc')
    dissolve('refinedstorage:raw_improved_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:gold_ingot'], latex, 100, 75, 'raw_improved_proc')
    dissolve('refinedstorage:raw_advanced_processor', ['refinedstorage:silicon', 'minecraft:redstone', 'minecraft:diamond'], latex, 150, 100, 'raw_advanced_proc')
    // ==========================================
    // ⚡ APPFLUX (Stockage d'Énergie AE2)
    // Fluide : Redstone & Glowstone
    // ==========================================
    let redstone = "thermal:redstone"
    let glowstone = "thermal:glowstone"

    dissolve('appflux:core_1k', ['ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:logic_processor', 'thermal:electrum_ingot'], redstone, 250, 150, 'appflux_1k')
    dissolve('appflux:core_4k', ['appflux:core_1k', 'appflux:core_1k', 'appflux:core_1k', 'ae2:logic_processor', 'thermal:signalum_ingot'], redstone, 500, 200, 'appflux_4k')
    dissolve('appflux:core_16k', ['appflux:core_4k', 'appflux:core_4k', 'appflux:core_4k', 'ae2:calculation_processor', 'thermal:signalum_ingot'], redstone, 1000, 250, 'appflux_16k')
    dissolve('appflux:core_64k', ['appflux:core_16k', 'appflux:core_16k', 'appflux:core_16k', 'ae2:engineering_processor', 'thermal:lumium_ingot'], glowstone, 500, 300, 'appflux_64k')
    dissolve('appflux:core_256k', ['appflux:core_64k', 'appflux:core_64k', 'appflux:core_64k', 'ae2:engineering_processor', 'thermal:lumium_ingot'], glowstone, 1000, 400, 'appflux_256k')
    
    dissolve('appflux:core_1m', ['appflux:core_256k', 'appflux:core_256k', 'appflux:core_256k', 'ae2:engineering_processor', 'thermal:enderium_ingot'], glowstone, 2000, 500, 'appflux_1m')
    dissolve('appflux:core_4m', ['appflux:core_1m', 'appflux:core_1m', 'appflux:core_1m', 'ae2:engineering_processor', 'thermal:enderium_ingot'], glowstone, 4000, 600, 'appflux_4m')
    dissolve('appflux:core_16m', ['appflux:core_4m', 'appflux:core_4m', 'appflux:core_4m', 'ae2:engineering_processor', 'mekanism:alloy_elite'], redstone, 8000, 700, 'appflux_16m')
    dissolve('appflux:core_64m', ['appflux:core_16m', 'appflux:core_16m', 'appflux:core_16m', 'ae2:engineering_processor', 'mekanism:alloy_ultimate'], glowstone, 8000, 800, 'appflux_64m')
    dissolve('appflux:core_256m', ['appflux:core_64m', 'appflux:core_64m', 'appflux:core_64m', 'ae2:engineering_processor', 'mekanism:alloy_atomic'], glowstone, 16000, 1000, 'appflux_256m')
// ==========================================
    // 💎 APPLIED ENERGISTICS 2 (Standard Components)
    // Fluide : Redstone | Quartz -> Fluix
    // ==========================================
    
    // Dissolve(Sortie, [Composants], Fluide, Quantité, Temps, Nom_ID)
    dissolve('ae2:cell_component_1k', ['ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:logic_processor', 'minecraft:redstone'], redstone, 100, 100, 'ae2_1k')
    dissolve('ae2:cell_component_4k', ['ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:logic_processor', 'ae2:fluix_crystal'], redstone, 200, 150, 'ae2_4k')
    dissolve('ae2:cell_component_16k', ['ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:calculation_processor', 'ae2:fluix_crystal'], redstone, 300, 200, 'ae2_16k')
    dissolve('ae2:cell_component_64k', ['ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:calculation_processor', 'ae2:sky_dust'], redstone, 400, 250, 'ae2_64k')
    
    // Le Tier 256k d'AE2 
    dissolve('ae2:cell_component_256k', ['ae2:cell_component_64k', 'ae2:cell_component_64k', 'ae2:cell_component_64k', 'ae2:engineering_processor', 'minecraft:diamond'], redstone, 500, 300, 'ae2_256k')
    // ==========================================
    // 🌌 MEGACELLS (L'Ultra End-Game AE2)
    // Fluide : Ether Gas
    // ==========================================
    let ether = "industrialforegoing:ether_gas"

    // La base 256k (créée dans ton autre script) sert pour faire la 1M
    dissolve('megacells:cell_component_1m', ['ae2:cell_component_256k', 'ae2:cell_component_256k', 'ae2:cell_component_256k', 'ae2:engineering_processor', 'mekanism:alloy_atomic'], ether, 1000, 600, 'mega_1m')
    dissolve('megacells:cell_component_4m', ['megacells:cell_component_1m', 'megacells:cell_component_1m', 'megacells:cell_component_1m', 'ae2:engineering_processor', 'mekanism:pellet_polonium'], ether, 2000, 800, 'mega_4m')
    dissolve('megacells:cell_component_16m', ['megacells:cell_component_4m', 'megacells:cell_component_4m', 'megacells:cell_component_4m', 'ae2:engineering_processor', 'mekanism:pellet_plutonium'], ether, 4000, 1000, 'mega_16m')
    dissolve('megacells:cell_component_64m', ['megacells:cell_component_16m', 'megacells:cell_component_16m', 'megacells:cell_component_16m', 'ae2:engineering_processor', 'mekanism:pellet_antimatter'], ether, 8000, 1500, 'mega_64m')
    dissolve('megacells:cell_component_256m', ['megacells:cell_component_64m', 'megacells:cell_component_64m', 'megacells:cell_component_64m', 'ae2:engineering_processor', 'mekanism:pellet_antimatter'], ether, 16000, 2000, 'mega_256m')

})