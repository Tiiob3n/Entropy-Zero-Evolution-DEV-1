ServerEvents.recipes(event => {
  // 1. Suppression des recettes de la Hache et de la Pioche (Quark + Vanilla)
  event.remove({id: 'quark:tweaks/crafting/utility/tools/stone_axe'})
  event.remove({id: 'quark:tweaks/crafting/utility/tools/stone_pickaxe'})
  event.remove({output: 'minecraft:stone_axe'})
  event.remove({output: 'minecraft:stone_pickaxe'})

  // 2. Définition des outils Tinkers en Flint (Variables pour plus de clarté)
  let flintPick = Item.of('tconstruct:pickaxe', '{tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"]}').weakNBT()
  let flintAxe = Item.of('tconstruct:hand_axe', '{tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"]}').weakNBT()

  // 3. Nouvelle recette pour la HACHE EN PIERRE
  event.shaped('minecraft:stone_axe', [
    'SS ',
    'SP ',
    ' L '
  ], {
    S: '#forge:stone', 
    P: flintAxe,       
    L: 'minecraft:stick'
  })

  // 4. Nouvelle recette pour la PIOCHE EN PIERRE
  event.shaped('minecraft:stone_pickaxe', [
    'SSS',
    ' P ',
    ' L '
  ], {
    S: '#forge:stone',
    P: flintPick,      
    L: 'minecraft:stick'
  })
})