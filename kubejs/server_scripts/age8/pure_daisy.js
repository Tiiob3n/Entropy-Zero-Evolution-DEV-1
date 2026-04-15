ServerEvents.recipes(event => {

    event.remove({ output: 'botania:pure_daisy' })
    event.recipes.botania.petal_apothecary('botania:pure_daisy', [
        'botania:white_petal', 
        'botania:white_petal', 
        'deeperdarker:resonarium',
        'botania:white_petal', 
        'botania:white_petal'
    ])

})