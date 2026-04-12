Platform.mods.kubejs.name = 'Entropy Zero Evolution';

function formatTextFromID(str) {
    return str
        .split('_')                    // Sépare sur les underscores
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalise chaque mot
        .join(' ');                    // Rejoint avec des espaces
}