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
const projectsList = [
    {
        slug: "hobotruck",
        year: 2024,
        name: "Création de l'identité graphique",
        description: [
            "Hobo Truck est un food truck solidaire ayant plusieurs missions",
            "",
            "- Distribuer des repas gratuits à celles et ceux qui en ont besoin",
            "- Créer du lien social et lutter contre l'isolement",
            "- Sensibiliser et mobiliser autour de la solidarité",
            "",
            "Nous avons imaginé un logo facilement déclinable (Hobo Truck / Hobo Café...) accompagnée d'une identité visuelle inspirée des \"Hobos signs\". ",
        ],
        client: {
            name: "Hobo Truck", description: "Food Truck solidaire à Nancy (54000)",
        },
        url: "",
        tags: ["Logo & charte graphique", "Kakémono", "Habillage de véhicule", "Ecocups"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy banner"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_solidaire_hobo-truck_nancy.jpg", description: "Accolade graphisme web hobo truck nancy logo"},
        images: [
            {src: "accolade_graphisme-web_projets_graphisme_signaletique_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy chevalet"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_habillage-vehicule_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy habillage"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_hobo-cafe_nancy-min.png", description: "Accolade graphisme web hobo truck nancy logos"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck palettes couleurs"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo-clair_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy logo clair"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo-typo_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy typo"},
            {src: "accolade_graphisme-web_projets_graphisme_kakemono_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy kakemono"},
            {src: "accolade_graphisme-web_projets_graphisme_sac_hobo-truck_nancy-min.png", description: "Accolade graphisme web hobo truck nancy sac"},
        ]
    },
    {
        slug: "chaouette",
        year: 2022,
        name: "Refonte de l'identité graphique & Réalisation d'un site internet",
        description: [
            "Refonte du l’identité visuelle – Création d’un nouveau logo & d’une charte graphique complète.",
            "Création des nouvelles étiquettes – A partir de la nouvelle charte graphique, réalisation d’une gamme d’étiquette en 33cl et 75cl.",
            "Gestion de l’édition – Prise de contact avec l’imprimeur, sélection et proposition au client du papier & de la colle selon les contraintes données.",
            "Création d’un site internet sous WordPress & WooCommerce – Construction de l’architecture du site, mise en place de la charte graphique, création de l’ensemble des pages.",
            "Développement d’un programme permettant de générer une carte OpenStreetMap depuis un fichier Excel contenant les points de distribution de la Châouette.",
        ],
        client: {
            name: "La Châouette", description: "Brasserie de bières artisanales",
        },
        url: "https://www.chaouette.fr/",
        tags: ["Identité graphique", "Logo", "Image de marque", "Site internet", "SEO"],
        banner: {src: "", description: ""},
        logo: {src: "chaouette-logo.jpg", description: "La Châouette"},
        images: [
        ]
    },
    {
        slug: "turn-head",
        year: 2024,
        name: "Création d'une identité graphique & Réalisation d'un site internet",
        description: [
            "Création d’un nom pour la société du client – Etude de l’état de l’art, phase d’inspiration, proposition de plusieurs noms avec leurs univers graphique correspondants.",
            "Création de l’identité visuelle – phase d’inspiration, création et  propositions de plusieurs logotypes, établissement d’une charte graphique.",
            "Création de carte de visite – format standard et carré proposés.",
            "Création d’un site internet sous WordPress.",
        ],
        client: {
            name: "Turn Head", description: "Fabrication de disque Vinyle",
        },
        url: "https://www.turn-head.fr/",
        tags: ["Identité graphique", "Logo", "Image de marque", "Site internet", "SEO"],
        banner: {src: "", description: ""},
        logo: {src: "turn-head-logo.png", description: "Turn head"},
        images: [
        ]
    },
    {
        slug: "cse-afpa",
        year: 2022,
        name: "Réalisation d'un site intranet",
        description: [
            "Création d’un site internet sous WordPress – Construction de l’architecture du site, mise en place de la charte graphique, création de l’ensemble des pages.",
            "Gestion de l’accès authentifié – Mise en place d’une page de connexion et gestion des comptes utilisateurs.",
            "Mise en place d’une gestion des actualités du CSE – Séjours, Billetterie, Remboursement sur facture, Chèques ANCV – un modèle de saisie simplifié permet aux gestionnaires du site de créer les actualités.",
            "Mise en place d’une intégration des salariés – depuis un fichier fourni par les RH, l’intégration permet de créer / modifier / supprimer les comptes utilisateurs et d’envoyer une procédure de connexion pour les nouveaux salariés.",
        ],
        client: {
            name: "CSE Afpa Grand Est", description: "CSE de l'Apfa - Région Grand Est",
        },
        url: "https://www.csee-afpa-grandest.fr/",
        tags: ["Site internet", "SEO"],
        banner: {src: "", description: ""},
        logo: {src: "cse-logo.svg", description: "CSE AFPA GRAND EST"},
        images: [
        ]
    },
    {
        slug: "georessources",
        year: 2021 & 2022,
        name: "Réalisation rapports d'activité 2021 & 2022",
        description: [
            "Réalisation d’un modèle InDesign de rapport d’activité – plusieurs templates de pages, adaptation de la charte graphique existante avec la création de nouveaux éléments graphiques.",
            "Mise en page des rapports d’activité 2021 & 2022 – adaptation des photographies sous Photoshop, création de graphiques sous Indesign depuis des modèles Powerpoint existants.",
        ],
        client: {
            name: "Université de Lorraine - CNRS - GeoRessources", description: "Laboratoire de recherche en géologie",
        },
        url: "",
        tags: ["Édition", "Design graphique"],
        banner: {src: "", description: "GEORESSOURCES"},
        logo: {src: "", description: "GEORESSOURCES"},
        images: [
        ]
    },
    {
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
        url: "https://www.lafabriquedesgros.fr/",
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
    },
    {
        slug: "b31",
        year: 2021,
        name: "Réalisation site internet & Développements de programmes",
        description: [
            "Création d’un site internet sous WordPress & WooCommerce – Construction de l’architecture du site, mise en place de la charte graphique, création de l’ensemble des pages, création d’un fichier normalisé sous Excel et intégration automatisé sur le catalogue de produit, mise en place des livraisons via Colissimo & Chronopost, mise en place d’un kit bancaire & d’un règlement via Stripe.",
            "Développement d’un programme permettant de générer des PDF prêts à l’impression pour la production des produits commercialisés sur le site de B31 – Analyse des commandes via l’API WooCommerce, mise au norme d’un fichier PDF normalisé, envoi automatisé des commandes à la chaine de production.",
            "Développement d’un programme de génération de catalogues destinés à l’impression & à la consultation numérique – Analyse et récupération du catalogue via l’API WooCommerce, génération d’un fichier normalisé PDF intégrant les visuels et les informations des différents produits.",
            "Développement d’un programme d’export des mouvements comptables – Récupération des informations de facturation via l’API WooCommerce, analyse des lignes de facturation et génération des mouvements comptables correspondants, génération d’un fichier CSV normalisé destiné à une intégration sur un logiciel de comptabilité",
            "Accompagnement de l’expert comptable de B31 sur l’import comptable sur le logiciel CADOR – Paramétrage de l’import sur le logiciel, intégration des premiers fichiers générés, rédaction d’une procédure d’intégration.",
        ],
        client: {
            name: "B31", description: "Vente de design automobile",
        },
        url: "https://www.b31.fr/",
        tags: ["Site internet", "Développement", "SEO", "Web"],
        banner: {src: "b31-logo.png", description: "B31"},
        logo: {src: "b31-logo.png", description: "B31"},
        images: [
        ]
    },
    {
        slug: "adeios",
        year: 2023,
        name: "Réfonte identité graphique & Réalisation site internet",
        description: [
            "Refonte du l’identité visuelle du cabinet ADEIOS – Création d’un nouveau logo & d’une charte graphique complète, adaptation des signatures de mails, création de visuels destinés à la communication sur les réseaux sociaux (LinkedIn, Youtube).",
            "Réalisation du site internet – vitrine du cabinet créé avec WordPress, SEO",
            "Mise en page des documents professionnels – contrats, executive summary, documents de formation, fiches produits.",
            "Création de la papeterie – cartes de visible, papier entête, enveloppe personnalisée, carte de correspondance, tampon.",
            "Réalisation et gestion de newsletter – création du modèle de mail, intégration des listes de diffusion et gestion de l’envoi via SendInBlue.",
        ],
        client: {
            name: "ADEIOS", description: "Cabinet de conseils stratégiques",
        },
        url: "https://adeios.fr/",
        tags: ["Site internet", "SEO", "Identité graphique", "Image de marque", "Design graphique"],
        banner: {src: "", description: "ADEIOS"},
        logo: {src: "adeios-logo.png", description: "ADEIOS"},
        images: [
        ]
    },

];

export default projectsList;
