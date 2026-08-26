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
        home: true,
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
        categories: ["Omeka", "Graphisme", "Site internet"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_archives-henri-poincare-inha-msh-lorraine_jules-bourgoin_site-internet_graphisme.png", description: "Accolade graphisme web jules-bourgoin banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_archives-henri-poincare-inha-msh-lorraine_jules-bourgoin.jpg", description: "Accolade graphisme web jules-bourgoin logo"},
        images: []
    },
    {
        slug: "ific",
        year: 2025,
        name: "Réalisation d'un site internet",
        home: true,
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
        categories: ["Graphisme", "Site internet", "Développement"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_ific-institut-francilien-implantation-cochleaire_site-internet.jpg", description: "Accolade graphisme web IFIC banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_ific-institut-francilien-implantation-cochleaire.jpg", description: "Accolade graphisme web logo"},
        images: []
    },
    {
        slug: "espoir54",
        year: 2024,
        name: "Site internet",
        home: true,
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
        categories: ["Graphisme", "Site internet"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_espoir54-site-internet-wordpress.jpg", description: "Accolade graphisme web espoir54 banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_espoir54.jpg", description: "Accolade graphisme web espoir54 logo"},
        images: []
    },
    {
        slug: "epistemology-of-theism",
        year: 2019,
        name: "Supports de communication",
        home: true,
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
        categories: ["Graphisme"],
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
        home: true,
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
        categories: ["Graphisme"],
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
        home: true,
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
        categories: ["Graphisme"],
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
        home: true,
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
        categories: ["Graphisme", "Site internet"],
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
        home: true,
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
        categories: ["Graphisme", "Site internet", "Développement"],
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
        home: true,
        description: [
            "Le LIEC, Laboratoire Interdisciplinaire des Environnements Continentaux, est une UMR Université de Lorraine. En 2023, le laboratoire fête ses 10ans, l’occasion de revenir sur les étapes phares de cette décennie.",
            "Création graphique et mise en page d’un “frise chronologique” mettant en avant les événements marquants, à l’aide de photographies, création d’icônes…",
        ],
        client: {
            name: "LIEC", description: "Laboratoire Interdisciplinaire des Environnements Continentaux",
        },
        url: "",
        tags: ["Graphisme", "Print"],
        categories: ["Graphisme"],
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
        home: true,
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
        categories: ["Développement"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_logiciel_graphisme_developpement_ekipea_cse.jpg", description: "Accolade graphisme web ekipea banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_logiciel_graphisme_developpement_ekipea_cse_logo.jpg", description: "Accolade graphisme web ekipea logo"},
        images: []
    },
    {
        slug: "b31",
        year: 2021,
        name: "Création de site internet e-commerce et développement",
        home: true,
        description: [
            "La société B31 est spécialisée dans la conception et l'impression d'affiches et de goodies de voitures.",
            "Ce projet vise à créer un site internet e-commerce personnalisé, permettant aux clients de personnaliser leurs affiches et goodies et d’envoyer directement les fichiers d’impression vers les imprimantes grand format de la société Graphik 224 et des autres partenaires.",
        ],
        client: {
            name: "B31", description: "Vente de design automobile",
        },
        url: "https://www.b31.fr/",
        tags: ["Site internet", "Développement"],
        categories: ["Site internet"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_b31.png", description: "B31"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_b31-logo.jpg", description: "B31"},
        images: []
    },
    {
        slug: "cbd",
        year: 2025,
        name: "Création de l’identité graphique et maquettage site internet",
        home: true,
        description: [
            "L’atelier CBD est une boutique en ligne qui propose des produits en ligne.",
            "Cette entreprise a fait appel à nous pour la création d’un logo facilement déclinable accompagné d’une identité visuelle permettant de s’adapter aux différents produits.",
            "Nous avons également été chargé du maquettage du site e-commerce de leur boutique en ligne.",
        ],
        client: {
            name: "L’atelier CBD", description: "Boutique en ligne",
        },
        url: "",
        tags: ["Logo", "Charte graphique", "Packaging produit", "Maquette Site internet"],
        categories: ["Graphisme"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_atelier-cbd-logo-packaging.png",  description: "Accolade graphisme web atelier cbd banner"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_atelier-cbd-logo.jpg", description: "Accolade graphisme web atelier cbd logo"},
        images: [{src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_atelier-cbd-site.png", description: "Accolade graphisme web atelier cbd 1"},]
    },
    {
        slug: "demons-et-merveilles",
        year: 2025,
        name: "Création de l’identité graphique et développement d’un thème prestashop",
        home: true,
        description: [
            "Démons & Merveilles est devenue un acteur incontournable du marché des produits culturels de seconde main.",
            "Désireux de moderniser son image et de retravailler l’ergonomie générale de son site internet, Démons & Merveilles a fait appel à nous pour la refonte de son logo et l'adaptation de son site internet.",
        ],
        client: {
            name: "Démons & Merveilles", description: "Librairie en ligne d'objets culturels de seconde main",
        },
        url: "https://www.demons-et-merveilles.com/",
        tags: ["Logo", "Charte graphique", "Thème Prestashop"],
        categories: ["Site internet", "Graphisme"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_demons-et-merveilles_site-internet.jpg",  description: "Accolade graphisme web demons et merveilles banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_demons-et-merveilles_site-2.jpg", description: "Accolade graphisme web demons et merveilles logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_demons-et-merveilles_site-3.jpg", description: "Accolade graphisme web demons et merveilles 1"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_site-internet_demons-et-merveilles_site-4.jpg", description: "Accolade graphisme web demons et merveilles 2"},
        ]
    },
    {
        slug: "grostival",
        year: 2021,
        name: "Communication du GrÔ’stival",
        home: true,
        description: [
            "Situé à Maxéville, le GrÔstival est un festival musical en soutien au don d’organes.",
            "Nous les accompagnons maintenant depuis plusieurs années pour la création de leurs visuels et un accompagnement en communication.",
        ],
        client: {
            name: "GrÔ’stival", description: "Festival musical",
        },
        url: "",
        tags: ["Affiche", "Sous-bock", "T-shirt", "Visuels réseaux sociaux", "Communiqué de presse"],
        categories: ["Graphisme"],
        banner: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_affiche_grostival.jpg",  description: "Accolade GrÔ’stival graphisme banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_-reseaux-sociauxgrostival2026-logo.jpg", description: "Accolade GrÔ’stival graphisme logo"},
        images: [
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_-reseaux-sociauxgrostival2026.jpg", description: "Accolade GrÔ’stival graphisme réseaux sociaux 1"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_reseaux-sociaux_grostival2025.jpg", description: "Accolade GrÔ’stival graphisme réseaux sociaux 1"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_sous-bockgrostival2026.jpg", description: "Accolade GrÔ’stival graphisme réseaux sociaux 3"},
            {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_web_sous-bockgrostival.jpg", description: "Accolade GrÔ’stival graphisme réseaux sociaux 2"},
        ]
    },
    {
        slug: "icarrelage",
        year: 2025,
        name: "Création du catalogue en ligne",
        home: true,
        description: [
            "International Négociation Carrelage ( In Carrelage ou INC ) est une entreprise d’import-export de carrelage située dans la région lorraine de la France.",
            "Réalisation d’un site internet et d’un espace d’administration permettant de présenter le catalogue de cette société.",
            "Le développement a été réalisé avec une priorité sur l’éco-responsabilité"
        ],
        client: {
            name: "Icarrelage", description: "Spécialiste du carrelage sur Internet pour professionnels et particuliers.",
        },
        url: "https://icarrelage.fr/",
        tags: ["Graphisme", "Développement", "Site internet"],
        categories: ["Site internet", "Développement"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_icarrelage1.jpg",  description: "Accolade graphisme web Icarrelage banner"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_site-internet_icarrelage.jpg", description: "Accolade graphisme web Icarrelage logo"},
        images: []
    },
    {
        slug: "saint-camille",
        year: 2025,
        name: "Création de l’identité graphique",
        home: true,
        description: [
            "L'objectif de l'Institution Saint-Camille est d’accueillir, éduquer et former des enfants, adolescents et jeunes adultes présentant des déficiences ou des difficultés d'insertion sociale, scolaire et/ou professionnelle reconnues en vue de leur intégration dans la société.",
            "Nous avons imaginé un logo facilement déclinable selon les dispositifs accompagné d’une identité visuelle moderne et institutionnelle.",
        ],
        client: {
            name: "Institution Saint Camille", description: "Hébergement médicalisé pour enfants handicapés",
        },
        url: "",
        tags: ["Logo", " Charte graphique", "Kakémonos", "Habillage de véhicule", "Modèle  PowerPoint", "Cartes de visites", "Site internet"],
        categories: ["Site internet", "Graphisme"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-7.png",  description: "Accolade graphisme web Saint-Camille banner"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_institution-st-camille.jpg", description: "Accolade graphisme web Saint-Camille logo"},
        images: [
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-1.png", description: "Accolade graphisme web Saint-Camille 1"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-2.png", description: "Accolade graphisme web Saint-Camille 2"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-3.png", description: "Accolade graphisme web Saint-Camille 3"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-4.png", description: "Accolade graphisme web Saint-Camille 4"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-5.png", description: "Accolade graphisme web Saint-Camille 5"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_st-camille-6.png", description: "Accolade graphisme web Saint-Camille 6"},
        ]
    },
    {
        slug: "demain-sera-choral",
        year: 2026,
        name: "Création d’un livret et d’une série de 9 cartes postales",
        home: true,
        description: [
            "À l’invitation de Pierre-Édouard Bour, 4 séances de 3 heures d’ateliers d’écriture dans le cadre de Philosofictions, une action de médiation portée par le laboratoire Archives Henri-Poincaré, Philosophie & Recherches en Sciences et Technologies.",
            "Nous avons travaillé sur la restitution de ces ateliers d’écriture en imaginant un livret gratuit et une série de 9 cartes postales.",
        ],
        client: {
            name: "Demain sera choral", description: "Ateliers d’écriture",
        },
        url: "",
        tags: ["Mise en page", "Graphisme"],
        categories: ["Graphisme"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_livret_mise-en-page_demain-sera-choral.png",  description: "Accolade graphisme web banner"},
        logo: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_graphisme_demain-sera-choral.jpg", description: "Accolade graphisme web logo"},
        images: [
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_livret_mise-en-page_demain-sera-choral_cartes-postales.png", description: "Accolade graphisme cartes postales Demain sera choral 1"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_livret_mise-en-page_demain-sera-choral_cartes-postales2.png", description: "Accolade graphisme cartes postales Demain sera choral 2"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_livret_mise-en-page_demain-sera-choral_cartes-postales3.png", description: "Accolade graphisme cartes postales Demain sera choral 3"},
            {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_logo_livret_mise-en-page_demain-sera-choral_cartes-postales4.png", description: "Accolade graphisme cartes postales Demain sera choral 4"}
        ]
    },
    {
        slug: "maison-sante-domgermain",
        year: 2025,
        name: "Création d’une affiche et d’un flyer",
        home: true,
        description: [
            "La maison de santé de Domgermain souhaité mettre en place une campagne de sensibilisation « Votre état de santé affecte-t-il votre enfant »",
            "Elle a fait appel à nous pour produire des affiches et flyer illustrés.",
        ],
        client: {
            name: "Maison de santé Domgermain", description: "Maison de santé de Domgermain",
        },
        url: "",
        tags: ["Affiche", "Illustration", "Flyer"],
        categories: ["Graphisme"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_affiche_maison-de-sante_domgermain.png",  description: "Accolade graphisme maison sante Domgermain banner"},
        logo: {src: "accolade_graphisme-web_nancy_lorraine_projets_graphisme_charte-graphique_logo_etiquette_sante_psychologie_maison-de-sante-domgermain.jpg", description: "Accolade graphisme maison sante Domgermain logo"},
        images: []
    },
    {
        slug: "ensem-alumni",
        year: 2025,
        name: "Création graphique de la refonte du site internet",
        home: true,
        description: [
            "L’association des anciens élèves de l’Ensem a fait appel à nous pour repenser graphiquement leur site internet.",
            "Nous avons repensé le site actuel et fourni les maquette html / css pour le développement du site internet.",
        ],
        client: {
            name: "Ensem Alumni", description: "association des anciens élèves ENSEM Alumni",
        },
        url: "",
        tags: ["Maquette site internet", "Intégration"],
        categories: ["Graphisme"],
        banner: {src: "accolade_graphisme-web_projets_graphisme_charte-graphique_maquette_site-internet_ensem-alumni.png",  description: "Accolade graphisme web Ensem Alumni banner"},
        logo: {src: "accolade_graphisme-web_nancy-lorraine_ensem-alumni_graphisme-site-internet.jpg", description: "Accolade graphisme web Ensem Alumni logo"},
        images: []
    },
    // {
    //     slug: " ",
    //     year: 1000,
    //     name: " ",
    //     home: true,
    //     description: [
    //         " ",
    //         " ",
    //     ],
    //     client: {
    //         name: " ", description: " ",
    //     },
    //     url: "",
    //     tags: [" ", " ", " ", " "],
    //     categories: [""],
    //     banner: {src: " ",  description: "  banner"},
    //     logo: {src: " ", description: "  logo"},
    //     images: [
    //         {src: " ", description: " "}
    //     ]
    // },
];

export default projectsList;
