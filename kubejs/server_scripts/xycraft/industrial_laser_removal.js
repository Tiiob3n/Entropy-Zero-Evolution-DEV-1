ServerEvents.recipes(event => {
    event.remove({ 
        type: 'industrialforegoing:laser_drill_ore', 
        output: /xycraft_world:xychorium_gem_.*/ 
    })

})