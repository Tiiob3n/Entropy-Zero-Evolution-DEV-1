ServerEvents.recipes(event => {
    event.remove({ output: 'botania:lexicon' })
    event.shapeless('botania:lexicon', [
        'minecraft:book',
        'ad_astra:glacio_ice_shard_ore'
    ]).id('entropy:endgame/botania_lexicon_glacio')
    
})