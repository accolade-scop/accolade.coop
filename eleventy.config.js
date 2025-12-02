
function countCommonElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 0;
    }
    // Trouve les éléments de arr1 qui sont aussi dans arr2
    return arr1.filter(element => arr2.includes(element)).length;
}

export default async function(eleventyConfig) {

    eleventyConfig.addFilter('navSlug', function(projects, currentSlug, indexOperator) {
        const index = projects.findIndex(p => p.slug === currentSlug);
        if (index === 0 && indexOperator === -1) return projects[projects.length - 1].slug; // 1er projet + previous
        if (index === (projects.length - 1) && indexOperator === 1) return projects[0].slug; // Dernier projet + next
        return projects[index + indexOperator].slug; // Autres projets
    });

    eleventyConfig.addFilter('getUniqueTags', function(projects) {
        // Récupération des tags
        const allTags = projects.flatMap(item => item.tags || []);
        // Suppression des doublons + tri alphébétique
        const uniqueTags = [...new Set(allTags)].sort((a, b) => a.localeCompare(b, 'fr'));
        return uniqueTags;
    });

    eleventyConfig.addPassthroughCopy({
        "assets/js": "assets/js"
    });

    eleventyConfig.addFilter('slice', (arr, start, end) => arr.slice(start, end));
    /**
     * Trie une collection par similarité de tags par rapport à un item 'current'.
     * @param {Object} current - L'objet de la page actuelle (passé depuis le template, ex: 'page').
     * @param {Array} collection - La collection à trier (ex: collections.posts).
     * @param {Number} [limit=5] - Le nombre maximum d'items à retourner.
     * @param {String} [tagProperty='tags'] - Le nom de la propriété des tags.
     */
    eleventyConfig.addFilter("sortbyrelatedness", function(current, collection, limit = 5, tagProperty = 'tags') {

        // S'assurer qu'on a les bonnes données
        if (!Array.isArray(collection) || !current ) {
            console.warn('Filtre "sortbyrelatedness" : collection ou page actuelle invalide.');
            return [];
        }

        const currentTags = current[tagProperty];
        const currentUrl = current.slug; // Pour s'assurer de ne pas s'inclure soi-même

        // S'il n'y a pas de tags sur la page actuelle, on ne peut rien faire.
        if (!currentTags || currentTags.length === 0) {
            return [];
        }

        // 1. Calculer le score pour chaque item
        const scoredCollection = collection.map(item => {

            // On ne se compare pas à soi-même
            if (item.slug === currentUrl) {
                return { item: item, score: -1 }; // Score négatif pour l'exclure
            }

            const itemTags = item[tagProperty];

            // 2. Le score est le nombre de tags en commun AVEC 'current'
            const score = countCommonElements(currentTags, itemTags);

            return {
                item: item,
                score: score
            };
        });

        // 3. Trier par score (décroissant)
        scoredCollection.sort((a, b) => b.score - a.score);

        // 4. Filtrer les items sans tags communs (score 0) et soi-même (score -1)
        const filteredAndSorted = scoredCollection.filter(scoredItem => scoredItem.score > 0);

        // 5. Retourner uniquement les items, dans la limite définie
        return filteredAndSorted
            .map(scoredItem => scoredItem.item)
            .slice(0, limit);
    });

    // copy assets
    eleventyConfig.addPassthroughCopy("src/assets/");// Put robots.txt in root
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

    return {
        dir: {
            output: "dist",
            input: "src",
            data: "_data",
            layouts: "_layouts",
            includes: "_includes",
        },
        templateFormats: ["njk", "11ty.js"]
    };
};
