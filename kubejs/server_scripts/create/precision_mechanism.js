ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(120.0), // Réussite
        Item.of('create:cogwheel').withChance(5.0),             
        Item.of('minecraft:iron_nugget').withChance(5.0)        
    ], 'minecraft:gold_ingot', [ 
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(3) 

})