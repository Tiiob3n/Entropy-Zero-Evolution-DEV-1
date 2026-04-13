ServerEvents.recipes(event => {

  // --- 1. NETTOYAGE DE L'ACIER (Fours et Create) ---
  const aciersInutiles = [
    'samurai_dynasty:steel_ingot',
    'beyond_earth:steel_ingot'
  ]

  aciersInutiles.forEach(steel => {
    event.remove({output: steel, type: 'minecraft:smelting'})
    event.remove({output: steel, type: 'minecraft:blasting'})
  })

  // Bloque le Fer -> Acier partout sauf dans le Blast Furnace d'IE
  event.remove({type: 'minecraft:smelting', input: '#forge:ingots/iron', output: '#forge:ingots/steel'})
  event.remove({type: 'minecraft:blasting', input: '#forge:ingots/iron', output: '#forge:ingots/steel'})
  event.remove({type: 'create:blasting', input: '#forge:ingots/iron', output: '#forge:ingots/steel'})


  // --- 2. UNIFICATION DES FILS (WIRES) -> METAL PRESS UNIQUEMENT ---
  const wiresAForcer = [
    'immersiveengineering:wire_aluminum',
    'immersiveengineering:wire_steel',
    'immersiveengineering:wire_lead'
  ]

  wiresAForcer.forEach(wire => {
    // Supprime les crafts manuels (table de craft) pour forcer l'usage de la Metal Press
    event.remove({ output: wire, type: 'minecraft:crafting_shaped' })
    event.remove({ output: wire, type: 'minecraft:crafting_shapeless' })
  })

  console.log('Fini la triche ! Acier protégé et Fils électriques forcés dans la Metal Press.')
})