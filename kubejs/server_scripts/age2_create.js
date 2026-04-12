ServerEvents.recipes(event => {
  
  
  const wiresToReplace = [
    { ie: 'immersiveengineering:wire_copper', create: 'createaddition:copper_wire' },
    { ie: 'immersiveengineering:wire_gold', create: 'createaddition:gold_wire' },
    { ie: 'immersiveengineering:wire_iron', create: 'createaddition:iron_wire' },
    { ie: 'immersiveengineering:wire_electrum', create: 'createaddition:electrum_wire' }
  ]

  wiresToReplace.forEach(w => {
    event.remove({ output: w.ie })
    
  })

  event.remove({ id: 'immersiveengineering:crafting/wirecoil_copper' })
  
  event.shaped('4x immersiveengineering:wirecoil_copper', [
    ' W ',
    'WSW',
    ' W '
  ], {
    W: 'createaddition:copper_wire', 
    S: 'minecraft:stick'
  })

})