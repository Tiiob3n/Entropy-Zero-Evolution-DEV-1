StartupEvents.registry('item', event => {
    event.create('entropy:polonium_seeds').displayName('Graines de Polonium (Tech)')
    event.create('entropy:polonium_essence').displayName('Essence de Polonium')

    event.create('entropy:plutonium_seeds').displayName('Graines de Plutonium (Tech)')
    event.create('entropy:plutonium_essence').displayName('Essence de Plutonium')

    event.create('entropy:antimatter_seeds').displayName("Graines d'Antimatière (Tech)")
    event.create('entropy:antimatter_essence').displayName("Essence d'Antimatière")

    event.create('entropy:resonarium_seeds').displayName('Resonarium Seeds')
    event.create('entropy:resonarium_essence').displayName('Resonarium Essence')

    event.create('entropy:chaos_seeds').displayName('Graines de Chaos (Mystical)')
    event.create('entropy:chaos_essence').displayName('Essence de Chaos')
    
    event.create('entropy:allthemodium_seeds').displayName('Graines de Allthemodium (Mystical)')
    event.create('entropy:allthemodium_essence').displayName('Essence de Allthemodium')

    event.create('entropy:vibranium_seeds').displayName('Graines de Vibranium (Mystical)')
    event.create('entropy:vibranium_essence').displayName('Essence de Vibranium')

    event.create('entropy:unobtainium_seeds').displayName('Graines de Unobtainium (Mystical)')
    event.create('entropy:unobtainium_essence').displayName('Essence de Unobtainium')
    
    // --- L'ITEM FINAL DE L'AGE 9 ---
    event.create('entropy:primordial_inertia_shard')
        .displayName('§bÉclat§f de l\'§dInertie Primordiale')
        .rarity('epic')
        .glow(true)
        .tooltip('§7§oLe point de convergence de l\'Entropy.')
        .tooltip('§8Utilisé pour fabriquer l\'équipement créatif.')


})