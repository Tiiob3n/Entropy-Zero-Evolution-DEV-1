ServerEvents.tags('item', event => {
    event.removeAll('twilightforest:portal/activating_item')
    
    event.add('twilightforest:portal/activating_item', 'ars_nouveau:wilden_spike')
})