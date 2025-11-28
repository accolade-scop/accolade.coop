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
        slug: "jules-bourgoin",
        year: 2025,
        name: "Réalisation d'un thème OMEKA S",
        description: [
            "Exploitation numérique et scientifique des archives de Jules Bourgoin à partir de la numérisation d'une sélection du fonds de l'architecte et ornemaniste Jules Bourgoin (1838-1908) conservé à l'INHA",
            "",
            "Réalisation d'un thème graphique sur mesure sur le CMS OMEKA S.",
        ],
        client: {
            name: "Archives de Jules Bourgoin", description: "Universités & centres de recherche",
        },
        url: "",
        tags: ["Omeka", "Charte graphique", "Graphisme", "Site internet"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_archives-henri-poincare-inha-msh-lorraine_jules-bourgoin_site-internet_graphisme.png", description: "Accolade graphisme web jules-bourgoin banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_archives-henri-poincare-inha-msh-lorraine_jules-bourgoin.jpg", description: "Accolade graphisme web jules-bourgoin logo"},
        images: []
    },
    {
        slug: "ific",
        year: 2025,
        name: "Réalisation d'un site internet",
        description: [
            "L’Institut Francilien d’Implantation Cochléaire est une structure de santé experte, qui a pour mission l’accompagnement à long terme et l’optimisation du parcours de soin des patients implantés cochléaires.",
            "",
            "Réalisation d'un site internet et d'un espace d'administration permettant de présenter la structure et gérer les services proposées.",
            "",
            "Le développement a été réalisé avec une priorité sur l'éco-responsabilité.",
        ],
        client: {
            name: "IFIC", description: "Institut Francilien d'implantation cochléaire",
        },
        url: "https://implant-ific.org/",
        tags: ["Développement", "Site internet", "Graphisme"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_ific-institut-francilien-implantation-cochleaire_site-internet.jpg", description: "Accolade graphisme web IFIC banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_ific-institut-francilien-implantation-cochleaire.jpg", description: "Accolade graphisme web logo"},
        images: []
    },
    {
        slug: "espoir54",
        year: 2024,
        name: "Site internet",
        description: [
            "Espoir 54 est une association proposant à toute personne en situation de souffrance psychique un lieu d'accueil et d'entraide avec des professionnels et des bénévoles, des services de réhabilitation psychosociale/professionnelle, des ateliers de création et de resocialisation (théâtre, musique, cuisine, club de marche, jardinage, etc...).",
            "",
            "Réalisation d'un site internet présentant l'association, ses dispositifs et les actions menées.",
        ],
        client: {
            name: "Espoir 54", description: "Accueil et accompagnement d'adultes handicapés ou de personnes agés",
        },
        url: "https://www.espoir54.org/",
        tags: ["Graphisme", "Site internet"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_espoir54-site-internet-wordpress.jpg", description: "Accolade graphisme web espoir54 banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_espoir54.jpg", description: "Accolade graphisme web espoir54 logo"},
        images: []
    },
    {
        slug: "epistemology-of-theism",
        year: 2019,
        name: "Supports de communication",
        description: [
            "“Inquiries Into Epistemology of Theism: A Seminar in Religious Epistemology” est un séminaire organisé par Roger Pouivet & Paul Clavier avec le soutien de l’université de Lorraine, des Archives Henri Poincaré, et de l’Institut universitaire de France.",
            "",
            "Création du graphisme et de la mise en page de différents supports de communication (affiche & programme) pour un séminaire philosophique.",
        ],
        client: {
            name: "Epistemology of Theism", description: "",
        },
        url: "",
        tags: ["Graphisme", "Mise en page", "Print"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_livret_archives-henri-poincaré_université_lorraine_programme.jpg", description: "Accolade graphisme web banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_livret_archives-henri-poincaré_université_lorraine_programme_epistemology_logo.jpg", description: "Accolade graphisme web logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_livret_archives-henri-poincaré_université_lorraine_programme-2.jpg", description: "Accolade graphisme web programme"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_livret_archives-henri-poincaré_université_lorraine_programme_interieur.png", description: "Accolade graphisme web programme"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_livret_archives-henri-poincaré_université_lorraine_programme_epistemology.jpg", description: "Accolade graphisme web programme"},
        ]
    },
    {
        slug: "georessources",
        year: 2022 & 2023,
        name: "Création d'une charte graphique & mise en page de rapports d'activités",
        description: [
            "Laboratoire de recherche en géologie, GeoRessources couvre le champ des ressources géologiques, de leur exploration à leur exploitation, en passant par les étapes du traitement et de la valorisation, et de ses impacts sur la société et l’environnement.",
            "",
            "Conception d’un modèle de rapport d’activité – graphisme et mise en page – et déclinaison de celui-ci sur deux années consécutives.",
        ],
        client: {
            name: "GeoRessources", description: "Laboratoire de recherche en géologie",
        },
        url: "",
        tags: ["Charte graphique", "Graphisme", "Print"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite-2021.jpg", description: "Accolade graphisme web georessources banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite.jpg", description: "Accolade graphisme web georessources logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite-1.jpg", description: "Accolade graphisme web georessources rapport activite"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite2.jpg", description: "Accolade graphisme web georessources rapport activite"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite3.jpg", description: "Accolade graphisme web georessources rapport activite"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite4.jpg", description: "Accolade graphisme web georessources rapport activite"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_georessources_mise-en-page-rapport-activite5.jpg", description: "Accolade graphisme web georessources rapport activite"},
        ]
    },
    {
        slug: "hobotruck",
        year: 2024,
        name: "Création de l'identité graphique",
        description: [
            "Hobo Truck est un food truck solidaire ayant plusieurs missions : ",
            "• Distribuer des repas gratuits à celles et ceux qui en ont besoin",
            "• Créer du lien social et lutter contre l'isolement",
            "• Mobiliser autour de la solidarité",
            "",
            "Nous avons imaginé un logo facilement déclinable (Hobo Truck / Hobo Café...) accompagné d'une identité visuelle inspirée des \"Hobos signs\". ",
        ],
        client: {
            name: "Hobo Truck", description: "Food Truck solidaire à Nancy (54000)",
        },
        url: "",
        tags: ["Logo","Charte graphique", "Kakémono", "Habillage de véhicule", "Ecocups"],
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
        year: 2020,
        name: "Création de l'identité graphique & Réalisation d'un site internet",
        description: [
            "Basée à Saizerais en Lorraine, La Châouette est une brasserie produisant de la bière biologique de fabrication artisanale.",
            "",
            "Refonte du logo, création de l’univers graphique de la nouvelle identité (graphisme des étiquettes…) et conception du site internet.",
            "",
            "Le « back-office » a été entièrement pensé pour permettre une utilisation plus intuitive pour le client.",
        ],
        client: {
            name: "La Châouette", description: "Brasserie de bières artisanales",
        },
        url: "https://www.chaouette.fr/",
        tags: ["Logo", "Charte graphique", "Graphisme", "Site internet", "Print"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_chaouette_bieres-artisanales-bio-blonde.jpg", description: "Accolade graphisme web chaouette banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo__biere_chaouette_bieres-artisanales-bio-min.jpg", description: "Accolade graphisme web chaouette logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_chaouette_bieres-artisanales-bio.jpg", description: "Accolade graphisme web chaouette etiquette"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_chaouette_bieres-artisanales-bio_site-internet.jpg", description: "Accolade graphisme web chaouette etiquette"},
        ]
    },
    {
        slug: "la-brass",
        year: "Depuis 2020",
        name: "Création de l'identité graphique & Réalisation d'un site internet",
        description: [
            "La Fabrique des GrÔ est une brasserie artisanale basée à Maxéville (Lorraine - 54320). C'est également un lieu culturel en plein essort où le public peut déguster de bonnes bières tout à assitant à des concerts",
            "",
            "Désireux de moderniser son image et de développer sa communication, la Fabrique des GrÔ a fait appel à nous pour la refonte de son identité visuelle, le développement de son site internet et un accompagnement dans la gestion de ses réseaux sociaux.",
        ],
        client: {
            name: "La Fabrique des GrÔ", description: "Brasserie de bières artisanales et salle de concert à Maxéville (54320)",
        },
        url: "https://www.lafabriquedesgros.fr/",
        tags: ["Logo", "Charte graphique", "Graphisme", "Site internet", "Print", "Développement"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_fabrique-des-gro-brasserie_maxeville.png", description: "Accolade graphisme web la fabrique des gro maxeville banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_fabrique-des-gro_bieres_slider.jpg", description: "Accolade graphisme web la fabrique des gro maxeville  logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_site-internet_fabrique-des-gro_biere.png", description: "Accolade graphisme la fabrique des gro maxeville site internet"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_fabrique-des-gro_biere.jpg", description: "Accolade graphisme web la fabrique des gro maxeville gnon"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_fabrique-des-gro_sweat.jpg", description: "Accolade graphisme la fabrique des gro maxeville sweat"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_fabrique-des-gro_biere_landaise.jpg", description: "Accolade graphisme web la fabrique des gro maxeville landaise"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_fabrique-des-gro_biere_maxeville.jpg", description: "Accolade graphisme la fabrique des gro maxeville maxeville"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_fabrique-des-gro_sweat2.jpg", description: "Accolade graphisme la fabrique des gro maxeville sweat2"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_fabrique-des-gro_biere_niasse.jpg", description: "Accolade graphisme la fabrique des gro maxeville niasse"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_biere_fabrique-des-gro_biere-ipa.jpg", description: "Accolade graphisme la fabrique des gro maxeville ipa"},
        ]
    },
    {
        slug: "liec",
        year: 2023,
        name: "Création graphique & mise en page d'une frise chronologique",
        description: [
            "Le LIEC, Laboratoire Interdisciplinaire des Environnements Continentaux, est une UMR Université de Lorraine. En 2023, le laboratoire fête ses 10ans, l’occasion de revenir sur les étapes phares de cette décennie.",
            "Création graphique et mise en page d’un “frise chronologique” mettant en avant les événements marquants, à l’aide de photographies, création d’icônes…",
        ],
        client: {
            name: "LIEC", description: "Laboratoire Interdisciplinaire des Environnements Continentaux",
        },
        url: "",
        tags: ["Graphisme", "Print"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_liec_université_lorraine_depliant-couverture.jpg", description: "Accolade graphisme web liec banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_liec_université_lorraine_depliant.jpg", description: "Accolade graphisme web liec logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_liec_université_lorraine_depliant-exterieur.jpg", description: "Accolade graphisme web liec 1"},
            {src: "accolade_graphisme-web_nancy_lorraine_liec_université_lorraine_depliant-interieur.jpg", description: "Accolade graphisme web liec 2"},
        ]
    },
    {
        slug: "ekipea",
        year: "Depuis 2020",
        name: "Développement d'un ERP destiné aux CSE",
        description: [
            "EKIPEA propose un service externalisé de back office pour gérer les activités sociales et culturelles des CSE, une solution de comptabilité et une application mobile permettant au CSE de communiquer avec ses salariés, et aux salariés d'accéder aux ASC du CSE",
            "",
            "Développement d'un ERP : API métier (Symfony), Interface d'administration (Angular), application mobiles (Ionic).",
        ],
        client: {
            name: "EKIPEA", description: "Editeur de logiciels destinés aux CSE",
        },
        url: "",
        tags: ["Développement", "ERP", "API", "Mobile"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_logiciel_graphisme_developpement_ekipea_cse.jpg", description: "Accolade graphisme web ekipea banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_logiciel_graphisme_developpement_ekipea_cse_logo.jpg", description: "Accolade graphisme web ekipea logo"},
        images: []
    },
    // {
    //     slug: "colloque-numerique",
    //     year: 2020,
    //     name: "Création et mise en page de supports de communication",
    //     description: [
    //         "“Mondes virtuels” est un séminaire organisé par Alexis Anne-Braun, Alexandre Declos & Vincent Granata avec le soutien des Archives Poincarré, et de l’Institut universitaire de France.",
    //         "Création du graphisme et de la mise en page de différents supports de communication (affiche & programme) pour un séminaire philosophique.",
    //     ],
    //     client: {
    //         name: "Archives Poincarré & Institut universitaire de France", description: "Colloque sur le thème \"Objets, Oeuvres, Mondes virtuels\"",
    //     },
    //     url: "",
    //     tags: ["Graphisme", "Print"],
    //     banner: {src: "banner.jpg", description: "Accolade graphisme web colloque numerique banner"},
    //     logo: {src: "logo.jpg", description: "Accolade graphisme web colloque numerique logo"},
    //     images: [
    //         {src: "projet_1.jpg", description: "Accolade graphisme web colloque numerique 1"},
    //         {src: "projet_2.jpg", description: "Accolade graphisme web colloque numerique 2"},
    //         {src: "projet_3.jpg", description: "Accolade graphisme web colloque numerique 3"},
    //         {src: "projet_4.jpg", description: "Accolade graphisme web colloque numerique 4"},
    //         {src: "projet_5.jpg", description: "Accolade graphisme web colloque numerique 5"},
    //     ]
    // },
    // {
    //     slug: "mon-slug",
    //     year: 2020,
    //     name: "",
    //     description: [
    //         "",
    //         "",
    //     ],
    //     client: {
    //         name: "", description: "",
    //     },
    //     url: "",
    //     tags: ["", ""],
    //     banner: {src: "banner.jpg", description: "Accolade graphisme web banner"},
    //     logo: {src: "logo.jpg", description: "Accolade graphisme web logo"},
    //     images: [
    //         {src: "projet_1.jpg", description: "Accolade graphisme web 1"},
    //         {src: "projet_2.jpg", description: "Accolade graphisme web 2"},
    //         {src: "projet_3.jpg", description: "Accolade graphisme web 3"},
    //         {src: "projet_4.jpg", description: "Accolade graphisme web 4"},
    //         {src: "projet_5.jpg", description: "Accolade graphisme web 5"},
    //     ]
    // },
    // {
    //     slug: "turn-head",
    //     year: 2024,
    //     name: "Création d'une identité graphique & Réalisation d'un site internet",
    //     description: [
    //         "Création d’un nom pour la société du client – Etude de l’état de l’art, phase d’inspiration, proposition de plusieurs noms avec leurs univers graphique correspondants.",
    //         "Création de l’identité visuelle – phase d’inspiration, création et  propositions de plusieurs logotypes, établissement d’une charte graphique.",
    //         "Création de carte de visite – format standard et carré proposés.",
    //         "Création d’un site internet sous WordPress.",
    //     ],
    //     client: {
    //         name: "Turn Head", description: "Fabrication de disque Vinyle",
    //     },
    //     url: "https://www.turn-head.fr/",
    //     tags: ["Identité graphique", "Logo", "Image de marque", "Site internet", "SEO"],
    //     banner: {src: "", description: ""},
    //     logo: {src: "turn-head-logo.png", description: "Turn head"},
    //     images: [
    //     ]
    // },
    // {
    //     slug: "cse-afpa",
    //     year: 2022,
    //     name: "Réalisation d'un site intranet",
    //     description: [
    //         "Création d’un site internet sous WordPress – Construction de l’architecture du site, mise en place de la charte graphique, création de l’ensemble des pages.",
    //         "Gestion de l’accès authentifié – Mise en place d’une page de connexion et gestion des comptes utilisateurs.",
    //         "Mise en place d’une gestion des actualités du CSE – Séjours, Billetterie, Remboursement sur facture, Chèques ANCV – un modèle de saisie simplifié permet aux gestionnaires du site de créer les actualités.",
    //         "Mise en place d’une intégration des salariés – depuis un fichier fourni par les RH, l’intégration permet de créer / modifier / supprimer les comptes utilisateurs et d’envoyer une procédure de connexion pour les nouveaux salariés.",
    //     ],
    //     client: {
    //         name: "CSE Afpa Grand Est", description: "CSE de l'Apfa - Région Grand Est",
    //     },
    //     url: "https://www.csee-afpa-grandest.fr/",
    //     tags: ["Site internet", "SEO"],
    //     banner: {src: "", description: ""},
    //     logo: {src: "cse-logo.svg", description: "CSE AFPA GRAND EST"},
    //     images: [
    //     ]
    // },
    // {
    //     slug: "b31",
    //     year: 2021,
    //     name: "Réalisation site internet & Développements de programmes",
    //     description: [
    //         "Création d’un site internet sous WordPress & WooCommerce – Construction de l’architecture du site, mise en place de la charte graphique, création de l’ensemble des pages, création d’un fichier normalisé sous Excel et intégration automatisé sur le catalogue de produit, mise en place des livraisons via Colissimo & Chronopost, mise en place d’un kit bancaire & d’un règlement via Stripe.",
    //         "Développement d’un programme permettant de générer des PDF prêts à l’impression pour la production des produits commercialisés sur le site de B31 – Analyse des commandes via l’API WooCommerce, mise au norme d’un fichier PDF normalisé, envoi automatisé des commandes à la chaine de production.",
    //         "Développement d’un programme de génération de catalogues destinés à l’impression & à la consultation numérique – Analyse et récupération du catalogue via l’API WooCommerce, génération d’un fichier normalisé PDF intégrant les visuels et les informations des différents produits.",
    //         "Développement d’un programme d’export des mouvements comptables – Récupération des informations de facturation via l’API WooCommerce, analyse des lignes de facturation et génération des mouvements comptables correspondants, génération d’un fichier CSV normalisé destiné à une intégration sur un logiciel de comptabilité",
    //         "Accompagnement de l’expert comptable de B31 sur l’import comptable sur le logiciel CADOR – Paramétrage de l’import sur le logiciel, intégration des premiers fichiers générés, rédaction d’une procédure d’intégration.",
    //     ],
    //     client: {
    //         name: "B31", description: "Vente de design automobile",
    //     },
    //     url: "https://www.b31.fr/",
    //     tags: ["Site internet", "Développement", "SEO", "Web"],
    //     banner: {src: "b31-logo.png", description: "B31"},
    //     logo: {src: "b31-logo.png", description: "B31"},
    //     images: [
    //     ]
    // },
    // {
    //     slug: "adeios",
    //     year: 2023,
    //     name: "Réfonte identité graphique & Réalisation site internet",
    //     description: [
    //         "Refonte du l’identité visuelle du cabinet ADEIOS – Création d’un nouveau logo & d’une charte graphique complète, adaptation des signatures de mails, création de visuels destinés à la communication sur les réseaux sociaux (LinkedIn, Youtube).",
    //         "Réalisation du site internet – vitrine du cabinet créé avec WordPress, SEO",
    //         "Mise en page des documents professionnels – contrats, executive summary, documents de formation, fiches produits.",
    //         "Création de la papeterie – cartes de visible, papier entête, enveloppe personnalisée, carte de correspondance, tampon.",
    //         "Réalisation et gestion de newsletter – création du modèle de mail, intégration des listes de diffusion et gestion de l’envoi via SendInBlue.",
    //     ],
    //     client: {
    //         name: "ADEIOS", description: "Cabinet de conseils stratégiques",
    //     },
    //     url: "https://adeios.fr/",
    //     tags: ["Site internet", "SEO", "Identité graphique", "Image de marque", "Design graphique"],
    //     banner: {src: "", description: "ADEIOS"},
    //     logo: {src: "adeios-logo.png", description: "ADEIOS"},
    //     images: [
    //     ]
    // },

];

export default projectsList;
