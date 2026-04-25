ServerEvents.recipes(event => {

    const metals = [
        'allthemodium:unobtainium_ingot',
        'allthemodium:allthemodium_ingot',
        'allthemodium:vibranium_ingot'
    ]

    metals.forEach(ingot => {
        event.remove({ type: 'tconstruct:melting', output: ingot.replace('_ingot', '') })

        event.custom({
            type: "tconstruct:melting",
            ingredient: { item: ingot },
            result: {
                fluid: ingot.replace('_ingot', '').replace('allthemodium:', 'allthemodium:molten_'),
                amount: 90
            },
            temperature: 1000, 
            time: 500
        }).id(`entropy:melting/${ingot.split(':')[1]}_fix`)
    })

    console.log("--- [FIX] Température de l'Allthemodium baissée à 1000°C ---")
})