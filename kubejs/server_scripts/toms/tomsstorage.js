ServerEvents.recipes(event => {

  // On définit les objets à modifier
  const steel = 'immersiveengineering:ingot_steel'
  const plate = 'immersiveengineering:plate_steel' 

  // 1. Storage Terminal
  event.remove({ output: 'toms_storage:ts.storage_terminal' })
  event.shaped('toms_storage:ts.storage_terminal', [
    'SPS',
    'PCP',
    'SPS'
  ], {
    S: steel,
    P: '#forge:plates/iron',
    C: 'minecraft:chest'
  })

  // 2. Crafting Terminal 
  event.remove({ output: 'toms_storage:ts.crafting_terminal' })
  event.shaped('toms_storage:ts.crafting_terminal', [
    'SPS',
    'PWP',
    'SPS'
  ], {
    S: steel,
    P: 'toms_storage:ts.storage_terminal',
    W: 'minecraft:crafting_table'
  })

  // 3. Inventory Connector
  event.remove({ output: 'toms_storage:ts.inventory_connector' })
  event.shaped('toms_storage:ts.inventory_connector', [
    'SGS',
    'GCG',
    'SGS'
  ], {
    S: steel,
    G: '#forge:glass',
    C: 'minecraft:comparator'
  })

  // 4. Inventory Cable 
  event.remove({ output: 'toms_storage:ts.inventory_cable' })
  event.shaped('8x toms_storage:ts.inventory_cable', [
    'SSS',
    'GGG',
    'SSS'
  ], {
    S: '#forge:nuggets/steel', 
    G: '#forge:glass'
  })

})