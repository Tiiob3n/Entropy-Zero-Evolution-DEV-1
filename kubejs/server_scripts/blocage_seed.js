BlockEvents.rightClicked(event => {
    if (event.item.id.includes('mysticalagriculture') && event.item.id.endsWith('_seeds')) {
        
        if (event.block.id.contains('farmland')) {
            
            event.cancel()
            
            event.player.displayClientMessage(Text.red("❌ Trop facile ! Ces graines ne poussent que dans une Garden Cloche."), true)
        }
    }
})