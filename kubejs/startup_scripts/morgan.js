ItemEvents.modification(event => {
    event.modify('mahoutsukai:morgan', item => {
        item.maxDamage = -1
    })
})