ServerEvents.recipes(event => {

    // Le craft se fait dans les Mechanical Crafters de Create
    event.recipes.create.mechanical_crafting('entropy:primordial_inertia_shard', [
        " CCCCC  ",
        "C     C ",
        "C  R  C ",
        "C RIR C ",
        "C  R  C ",
        "C     C ",
        " CCCCC  "
    ], {
        C: 'draconicevolution:chaos_shard',
        R: 'draconicevolution:reactor_core',
        I: 'avaritia:infinity_ingot'
    })
    event.recipes.create.mechanical_crafting('entropy:chaos_seeds', [
        'CCCCC',
        'CSNSC',
        'CNGNC',
        'CSNSC',
        'CCCCC'
    ], {
        C: 'draconicevolution:small_chaos_frag',
        S: 'mysticalagriculture:supremium_essence',
        N: 'mysticalagriculture:nether_star_seeds',
        G: 'mysticalagriculture:prosperity_seed_base'
    })

    // Transformation Essence -> Fragment de Chaos
    event.shaped('draconicevolution:small_chaos_frag', [
        'EEE',
        'E E',
        'EEE'
    ], {
        E: 'entropy:chaos_essence'
    })

})
