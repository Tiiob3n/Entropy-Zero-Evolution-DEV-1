ServerEvents.recipes(event => {

    const presses = [
        'ae2:silicon_press',
        'ae2:engineering_processor_press',
        'ae2:calculation_processor_press',
        'ae2:logic_processor_press'
    ]

    presses.forEach(press => {
        event.remove({ output: press })
        event.recipes.create.deploying(
            Item.of(press, 2), 
            [press, 'minecraft:iron_block']
        )
        event.custom({
            type: 'ae2:inscriber',
            mode: 'press',
            ingredients: {
                top: { item: press },
                middle: { item: 'minecraft:iron_block' }
            },
            result: { item: press, count: 2 }
        }).id(`entropy:age6/duplicate_${press.split(':')[1]}`)
    })
})