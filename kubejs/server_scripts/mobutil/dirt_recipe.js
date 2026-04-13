ServerEvents.recipes(event => {

    // --- GM CHICKEN FEED (Normal -> Delightful Dirt) ---
    event.remove({ output: 'mob_grinding_utils:gm_chicken_feed' })
    event.shaped('mob_grinding_utils:gm_chicken_feed', [
        'GGG',
        'GSG',
        'WWW'
    ], {
        G: 'xycraft_world:xychorium_gem_green', 
        S: 'minecraft:wheat_seeds',
        W: 'croptopia:salt'
    })

    // --- GM CHICKEN FEED CURSED (Violet -> Dreadful Dirt) ---
    event.remove({ output: 'mob_grinding_utils:gm_chicken_feed_cursed' })
    event.shaped('mob_grinding_utils:gm_chicken_feed_cursed', [
        'RRR',
        'RSR',
        'BBB'
    ], {
        R: 'xycraft_world:xychorium_gem_red',
        S: 'mob_grinding_utils:gm_chicken_feed',
        B: 'minecraft:blaze_powder'
    })
})