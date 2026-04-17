ServerEvents.recipes(event => {
    event.remove({ type: 'ae2:inscriber', output: 'ae2:printed_silicon' })
    event.recipes.create.pressing('ae2:printed_silicon', 'ae2:silicon')
    event.recipes.create.pressing('ae2:printed_silicon', 'refinedstorage:silicon')

})