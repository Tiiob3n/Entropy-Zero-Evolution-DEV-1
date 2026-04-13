// --- 1. EMPÊCHER L'ACTION PHYSIQUE (FINI LE CLIC GAUCHE) ---
BlockEvents.leftClicked('minecraft:obsidian', event => {
    if (event.player.mainHandItem == 'minecraft:redstone') {
        event.cancel()
        event.player.displayClientMessage(Text.red("❌ Cette méthode est désactivée. Utilisez la recette !"), true)
    }
})
