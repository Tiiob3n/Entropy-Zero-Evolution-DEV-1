ServerEvents.recipes(event => {

    let base_item = 'xycraft_machines:incomplete_processor'
    let redstone = 'minecraft:redstone'

    // Nettoyage de JEI
    event.remove({ output: 'ae2:printed_silicon' })

    let processors = [
        { out: 'ae2:logic_processor', top: 'ae2:printed_logic_processor' },
        { out: 'ae2:calculation_processor', top: 'ae2:printed_calculation_processor' },
        { out: 'ae2:engineering_processor', top: 'ae2:printed_engineering_processor' },
        { out: 'appflux:energy_processor', top: 'appflux:printed_energy_processor' },
        { out: 'advanced_ae:quantum_processor', top: 'advanced_ae:printed_quantum_processor' },
        { out: 'megacells:accumulation_processor', top: 'megacells:printed_accumulation_processor' }
    ]

    processors.forEach(proc => {
        let cleanName = proc.out.split(':')[1]
        event.remove({ type: 'ae2:inscriber', output: proc.out })
        event.remove({ mod: 'evolvedmekanism', output: proc.out }) 
        event.remove({ mod: 'advanced_ae', output: proc.out })     
        event.custom({
            type: 'ae2:inscriber',
            mode: 'press',
            ingredients: {
                top: { item: proc.top },
                middle: { item: redstone },
                bottom: { item: base_item }
            },
            result: { item: proc.out }
        }).id(`entropy:age6/inscriber_${cleanName}`)
    })

})