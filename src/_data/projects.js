/**
 * @typedef {Object} Media
 * @property {string} src - L'URL ou le chemin de l'image
 * @property {string} description - La description de l'image
 */

/**
 * @typedef {Object} Client
 * @property {string} name - Le nom du client
 * @property {string} description - La description du client
 */

/**
 * @typedef {Object} Project
 * @property {string} slug - Identifiant unique du projet
 * @property {number} year - Année du projet
 * @property {string} name - Nom ou titre du projet
 * @property {string[]} description - Tableau de paragraphes décrivant le projet
 * @property {Client} client - Informations sur le client
 * @property {string} [url] - URL externe du projet
 * @property {string[]} tags - Liste des tags du projet
 * @property {Media} [banner] - Image de bannière
 * @property {Media} [logo] - Logo du projet
 * @property {Media[]} [images] - Autres images du projet
 */

/** @type {Project[]} */
const projectsList = [{
    slug: "la-brass",
    year: 2024,
    name: "Refonte de l’identite graphique",
    description: [
        "La Fabrique des GrÔ est une brasserie artisanale basée à Maxéville (Lorraine - 54320). C’est également un lieu culturel en plein essort où le public peut déguster de bonnes bières tout en assistant à des concerts.",
        "Désireux de moderniser son image et de développer sa communication, La Fabrique des GrÔ a fait appel à nous pour la refonte de son identité visuelle et un accompagnement dans la gestion de ces réseaux sociaux."
    ],
    client: {
        name: "La Fabrique des GrÔ", description: "Brasserie artisanale / Bar et lieu de concerts à Maxéville (54320)",
    },
    url: "https://la-brass.herokuapp.com/",
    tags: ["Logo & charte graphique", "Illustrations", "Étiquettes", "Cartons", "Sous-bocks", "Stickers", "Cavaliers de pompes", "Web"],
    banner: {src: "la-brass-banner.png", description: "la brasserie des gros"},
    logo: {src: "la-brass-logo.png", description: "la brasserie des gros"},
    images: [
        {src: "la-brass-image1.png", description: "la brasserie des gros 1"},
        {src: "la-brass-image2.png", description: "la brasserie des gros 2"},
        {src: "la-brass-image3.png", description: "la brasserie des gros 2"},
        {src: "la-brass-image4.png", description: "la brasserie des gros 2"},
        {src: "la-brass-image5.png", description: "la brasserie des gros 2"},
    ]
}];

export default projectsList;
