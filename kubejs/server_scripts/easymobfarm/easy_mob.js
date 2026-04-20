ServerEvents.recipes(event => {

    event.shaped('easy_mob_farm:creative_speed_enhancement', [
        'SSS',
        'SXS',
        'SSS'
    ], {
        S: 'easy_mob_farm:speed_enhancement', 
        X: 'minecraft:nether_star'           
    }).id('entropy:expert/creative_speed_enhancer')

})