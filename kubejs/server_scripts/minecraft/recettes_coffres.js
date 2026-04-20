ServerEvents.recipes(event => {

    event.remove({ output: 'minecraft:chest' })
    event.shaped('minecraft:chest', [
        'PPP',
        'PIP',
        'PPP'
    ], {
        P: '#minecraft:planks',  
        I: 'minecraft:oak_log'   
    }).id('entropy:expert/vanilla_chest_iron')
})