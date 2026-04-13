ServerEvents.recipes(event => {
    event.replaceOutput({}, '#forge:ingots/bronze', 'alltheores:bronze_ingot')
    event.replaceOutput({}, '#forge:plates/bronze', 'alltheores:bronze_plate')
    event.replaceOutput({}, '#forge:dusts/bronze', 'alltheores:bronze_dust')

})