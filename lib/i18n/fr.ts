import type { Dictionary } from "./en";

export const fr = {
  common: {
    verifyNote: "Vérifiez auprès des sources officielles avant de voyager",
    skipToContent: "Aller au contenu",
    loading: "Chargement de VisitBurundi",
    backToTop: "Retour en haut",
    closeDialog: "Fermer la boîte de dialogue",
    photograph: "Photographie",
    photoCredits: "Crédits photos",
    sample: "Exemple",
    day: "Jour",
    days: "jours",
    stops: "étapes",
    destinations: "destinations",
    destinationOne: "destination",
    destinationMany: "destinations",
    makeItYours: "Faites-le vôtre",
    viewOptions: "Options d’affichage",
    photoBadge: "BURUNDI · PHOTO",
  },
  categories: {
    culture: "Culture",
    nature: "Nature",
    lake: "Lacs",
    adventure: "Aventure",
    food: "Gastronomie",
    heritage: "Patrimoine",
  },
  header: {
    previewEdition: "ÉDITION APERÇU",
    previewTagline: "Un premier regard sur les voyages au Burundi",
    planYourTrip: "Planifier votre voyage",
    openMenu: "Ouvrir le menu de navigation",
    mobileMenuTitle: "Explorer le Burundi",
    contactPartnerships: "Contact & partenariats",
    languageLabel: "Langue",
    languageEn: "Anglais",
    languageFr: "Français",
    languageRn: "Kirundi",
  },
  nav: {
    destinations: "Destinations",
    experiences: "Expériences",
    plan: "Planifier",
    visit: "Visiter",
    about: "À propos",
  },
  footer: {
    tagline:
      "Rives du lac, sentiers des hauts plateaux et histoires transmises de génération en génération. Commencez un voyage plus réfléchi.",
    socialComing: "Réseaux sociaux à venir",
    explore: "Explorer",
    connect: "Se connecter",
    ourVision: "Notre vision",
    becomePartner: "Devenir partenaire",
    contact: "Contact",
    newsletterTitle: "Un peu de Burundi, dans votre boîte mail.",
    newsletterNote: "Aperçu du futur carnet de voyage.",
    legalNote:
      "VisitBurundi · Aperçu pour les parties prenantes · Pas un avis de voyage officiel",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
  },
  cookie: {
    label: "Préférences de cookies",
    title: "Votre visite, votre choix.",
    body: "Cet aperçu n’utilise aucun cookie de suivi. Votre choix de cookies et votre voyage enregistré restent dans ce navigateur.",
    readNotice: "Lire l’avis d’aperçu.",
    essential: "Essentiels uniquement",
    accept: "Accepter la préférence",
  },
  home: {
    badge: "Afrique de l’Est, à un autre rythme",
    title1: "Un autre rythme.",
    title2: "Un voyage plus profond.",
    intro:
      "Suivez le lac jusqu’aux collines. Retrouvez des histoires au son d’un tambour. Faites de la place pour le Burundi.",
    findYourBurundi: "Trouvez votre Burundi",
    heroCredit: "Lac Tanganyika, Bujumbura · Photo : Edouard mhg",
    heroAside1: "Entre l’eau et les hauts plateaux.",
    heroAside2: "Un pays à découvrir",
    quickFacts: [
      { label: "Monnaie", value: "Franc burundais", note: "BIF" },
      {
        label: "Langues parlées",
        value: "Kirundi · Français",
        note: "Anglais · Swahili",
      },
      {
        label: "Capitale politique",
        value: "Gitega",
        note: "Dans les hauts plateaux du centre",
      },
      {
        label: "Capitale économique",
        value: "Bujumbura",
        note: "Sur le lac Tanganyika",
      },
    ],
    placesEyebrow: "Des lieux qui restent en mémoire",
    placesTitle1: "Commencez quelque part",
    placesTitle2: "de remarquable.",
    allDestinations: "Toutes les destinations",
    whyEyebrow: "Pourquoi le Burundi",
    whyTitle1: "Pas un lieu à parcourir à la hâte.",
    whyTitle2: "Un lieu à ressentir.",
    whyP1:
      "Un horizon de lac peut changer la forme d’une journée. Une conversation peut changer votre regard sur un lieu. Ici, l’itinéraire le plus riche laisse de la place aux deux.",
    whyP2:
      "Voyagez avec attention : cherchez le savoir local, respectez les traditions vivantes et laissez celles et ceux qui vivent au Burundi guider le récit.",
    whyLink: "La vision derrière VisitBurundi",
    curiosityEyebrow: "Suivez votre curiosité",
    curiosityTitle: "Qu’est-ce qui vous anime ?",
    structureEyebrow: "Un peu de structure. Beaucoup de possibles.",
    structureTitle: "Des voyages à faire vôtres.",
    openPlanner: "Ouvrir le planificateur",
    sampleNote:
      "Simples exemples. Confirmez les avis, accès et itinéraires en vigueur avant de voyager.",
    senseEyebrow: "Un sens du lieu",
    senseTitle1: "Petit sur la carte.",
    senseTitle2: "De la place pour mille histoires.",
    senseNote: "Une invitation à explorer, pas une mesure de distance.",
    prepEyebrow: "Un voyage réfléchi commence ici",
    prepTitle1: "Un peu de préparation.",
    prepTitle2: "Un voyage plus réfléchi.",
    prepBody:
      "Documents d’entrée, transports locaux, santé et avis de voyage en vigueur : intégrez les questions pratiques à vos projets dès le départ.",
    prepVerify: "Vérifiez auprès des sources officielles avant de voyager.",
    prepCta: "Préparez votre visite",
    journalEyebrow: "Le carnet de voyage · Aperçu",
    journalTitle: "Restez proche de l’histoire.",
    journalNote:
      "Une future collection de lieux, de personnes et de façons réfléchies de voyager.",
    closingTitle: "Où votre histoire commencera-t-elle ?",
    closingCta: "Construisez votre voyage",
  },
  destinations: {
    eyebrow: "La collection de destinations",
    title: "Trouvez votre Burundi.",
    intro:
      "Du bord du lac Tanganyika au calme des hauts plateaux. Choisissez un lieu, puis donnez-vous le temps de le connaître.",
    filtersTitle: "Trouvez votre type de lieu",
    searchLabel: "Rechercher des destinations",
    searchPlaceholder: "Essayez Gitega…",
    categoryLabel: "Catégorie",
    regionLabel: "Région",
    seasonLabel: "Saison",
    interestLabel: "Intérêt",
    allCategories: "Toutes les catégories",
    allRegions: "Toutes les régions",
    allSeasons: "Toutes les saisons",
    allInterests: "Tous les intérêts",
    seasonNote:
      "Les saisons sont des suggestions de planification ; confirmez la météo, l’accès et les avis de voyage en vigueur.",
    planningCue: "Indication de planification",
    clearFilters: "Effacer tous les filtres",
    resultsHeading: "Résultats de destinations",
    emptyTitle: "Un horizon plus large vous attend.",
    emptyBody:
      "Aucune destination ne correspond à ces filtres. Essayez une recherche plus large.",
    resetFilters: "Réinitialiser les filtres",
  },
  intent: {
    destinationLabel: "Quel lieu vous appelle ?",
    destinationPlaceholder: "N’importe où au Burundi",
    dateLabel: "Quand partiriez-vous ?",
    interestLabel: "Trouvez votre rythme",
    interestAll: "Tous les intérêts",
    submit: "Explorer",
    note: "Les dates ne servent qu’à l’inspiration. Aucune disponibilité ni réservation en temps réel.",
  },
  detail: {
    allDestinations: "Toutes les destinations",
    addToTrip: "Ajouter au voyage",
    inYourTrip: "Dans votre voyage",
    openMyTrip: "Ouvrir mon voyage",
    caption: "Photographie. Les crédits sont liés dans le pied de page.",
    getToKnow: "Apprenez à connaître le lieu",
    thingsToDo: "À faire",
    beforeYouGo: "Avant de partir",
    atAGlance: "En un coup d’œil",
    highlights: "Points forts",
    bestTime: "Meilleure période à prévoir",
    planningNote:
      "Simple indication de planification. L’accès et les conditions doivent être vérifiés.",
    keepGoing: "Poursuivez le voyage",
    anotherPlace: "Un autre lieu où faire une pause.",
    alreadyInTrip:
      "Cette destination est déjà dans votre voyage. Modifiez-la dans le planificateur.",
    tripFull:
      "Votre voyage compte déjà 60 étapes. Retirez-en une avant d’en ajouter une autre.",
    added:
      "Ajoutée à votre voyage. Ouvrez le planificateur pour choisir un jour.",
  },
  experiences: {
    eyebrow: "Suivez votre curiosité",
    title: "Des voyages façonnés par ce que vous aimez.",
    intro:
      "Un lieu est plus qu’un point sur une carte. Commencez par les expériences qui vous attirent.",
    navLabel: "Catégories d’expériences",
    experienceLabel: "Expérience",
    relatedTitle: "Voyages d’exemple associés",
    buildOwn: "Construisez votre propre voyage",
  },
  plan: {
    eyebrow: "Votre voyage, à votre rythme",
    title: "Faites de la place à ce qui vous anime.",
    intro:
      "Quelques jours ou une pause plus longue. Réunissez des lieux, organisez les journées et gardez votre propre plan. Aucun compte nécessaire.",
    startingPoint: "Votre point de départ",
    findPlace: "Trouver un lieu",
    sampleJourneys: "Voyages d’exemple",
    searchLabel: "Rechercher des destinations",
    searchPlaceholder: "Lac, forêt, culture…",
    sampleLabel: "Partez d’un exemple éditorial",
    useSample: "Utiliser cet exemple",
    sampleNote:
      "Un plan indicatif, pas un itinéraire vérifié ni une offre réservable.",
    roomToChange: "Un plan, avec de la place pour changer.",
    roomToChangeBody:
      "Les temps de trajet, la disponibilité et la faisabilité des itinéraires ne sont pas calculés. Revoyez ce plan avec un opérateur local qualifié.",
    outlineEyebrow: "Votre plan personnel",
    outlineTitle: "Le voyage prend forme.",
    daysLabel: "Nombre de jours",
    storageAlert:
      "Le stockage du navigateur est indisponible. Votre voyage fonctionne pour cette session, mais peut être perdu au rechargement. Copiez-le ou imprimez-le pour le conserver.",
    emptyTitle: "Chaque voyage commence quelque part.",
    emptyBody:
      "Ajoutez une destination depuis la liste, ou commencez par un voyage d’exemple. Votre plan apparaîtra ici.",
    copySummary: "Copier le résumé",
    print: "Imprimer",
    savedNote:
      "Enregistré uniquement dans ce navigateur, lorsque le stockage est disponible. Aucun compte, réservation ou transfert de données. Jusqu’à 30 jours et 60 étapes.",
    replaceTitle: "Remplacer votre plan actuel ?",
    replaceBody:
      "Charger un exemple remplace les étapes que vous avez ajoutées. Copiez d’abord votre résumé actuel si vous voulez le conserver.",
    replaceConfirm: "Remplacer par l’exemple",
    keepTrip: "Garder mon voyage",
    copyTitle: "Copier votre résumé",
    copyBody:
      "L’accès au presse-papiers est indisponible. Sélectionnez et copiez ce texte manuellement.",
    copyLabel: "Résumé du voyage à copier",
    stopMoved: "Étape déplacée. Les jours restent inchangés.",
    daysUpdated:
      "Durée mise à jour. Les étapes au-delà de la nouvelle durée passent au dernier jour.",
    sampleLoaded:
      "Exemple chargé. Ajustez les jours et les étapes pour le faire vôtre.",
    addedToDay1: "ajouté au jour 1.",
    stopRemoved: "Étape retirée.",
    copied: "Résumé du voyage copié.",
    noPlacesFound: "Aucun lieu trouvé. Essayez une recherche plus large.",
    summaryTitle: "VisitBurundi — mon voyage provisoire",
    summaryNote:
      "Simple inspiration. Itinéraires, horaires et accès non confirmés.",
    addAria: "Ajouter {name} au voyage",
    moveUpAria: "Monter l’étape {index}",
    moveDownAria: "Descendre l’étape {index}",
    removeAria: "Retirer l’étape {index} : {name}",
    dayAria: "Jour de l’étape {index} : {name}",
  },
  visit: {
    eyebrow: "Préparez-vous avec soin",
    title: "Avant que le voyage commence.",
    intro:
      "Une bonne préparation laisse plus de place à la présence. Commencez ici, puis confirmez les détails auprès des personnes et autorités compétentes.",
    verifyTitle: "Vérifiez auprès des sources officielles avant de voyager",
    verifyBody:
      "Ceci est une information générale de planification, pas un avis individuel sur les visas, la santé ou la sécurité. Consultez les avertissements régionaux en vigueur avant d’utiliser tout itinéraire.",
    readAdvisory: "Lire l’avis de voyage actuel du gouvernement du Canada",
    practicalTitle: "Les détails pratiques",
    beforeTitle: "Avant de partir",
    checklistNote: "Une liste personnelle. Rien n’est envoyé ni enregistré.",
    checklist: [
      "Lire les avis de voyage officiels en vigueur",
      "Confirmer les exigences d’entrée et de documents de voyage",
      "Consulter un professionnel de la santé du voyage",
      "Souscrire une assurance voyage adaptée",
      "Confirmer les transports locaux et l’accès aux sites",
      "Garder documents et contacts disponibles hors ligne",
    ],
    startItinerary: "Commencer un itinéraire provisoire",
  },
  about: {
    eyebrow: "Une plateforme porteuse de sens",
    title: "Laissez le Burundi raconter sa propre histoire.",
    intro:
      "Une vision provisoire pour une plateforme touristique façonnée par les lieux, les personnes et l’attention.",
    draftBadge: "Vision provisoire · Sous réserve d’approbation",
    heroAlt:
      "La source du Nil à Rutovu, dans les hauts plateaux du sud du Burundi",
    connectTitle1: "Une façon plus réfléchie",
    connectTitle2: "de se connecter.",
    connectP1:
      "VisitBurundi veut réunir lieux, savoir local et planification pratique dans une seule expérience attentive. L’ambition est de rendre le pays plus facile à comprendre sans réduire sa culture à une liste.",
    connectP2:
      "La plateforme doit donner aux gardiens locaux, aux guides et aux entreprises touristiques un rôle dans la présentation de leurs lieux. Le contenu doit être relu, les images sourcées de manière responsable, et les limites de l’information de voyage rendues claires.",
    connectP3:
      "Ceci est un texte proposé pour discussion. Ce n’est ni une stratégie nationale approuvée, ni une approbation officielle, ni un engagement à livrer la feuille de route ci-dessous.",
    roadmapEyebrow: "Regarder vers l’avant",
    roadmapTitle: "Conçu pour grandir, délibérément.",
    roadmap: [
      {
        title: "L’aperçu",
        text: "Découverte des destinations et planificateur de voyage local. La base pour les retours des parties prenantes.",
        phase: "Phase 1 · Actuelle",
      },
      {
        title: "Des récits relus",
        text: "Un CMS, une relecture éditoriale et le soutien des langues française et kirundi.",
        phase: "Proposition future",
      },
      {
        title: "Des connexions locales",
        text: "Annuaires de partenaires vérifiés et chemins plus clairs vers le savoir local.",
        phase: "Proposition future",
      },
      {
        title: "Des cartes avec du contexte",
        text: "Cartographie réelle, vérification d’itinéraires et détails géographiques pratiques.",
        phase: "Proposition future",
      },
      {
        title: "Des voyages qui voyagent avec vous",
        text: "Comptes facultatifs et itinéraires enregistrés en sécurité entre appareils.",
        phase: "Proposition future",
      },
      {
        title: "De la planification à la réservation",
        text: "Intégrations de réservation responsables avec des partenaires approuvés.",
        phase: "Proposition future",
      },
    ],
    roadmapNote:
      "La séquence est indicative. Aucune date de livraison ni engagement commercial n’est confirmé.",
    helpTitle: "Aidez à façonner la suite.",
    helpNote: "L’expertise locale est au cœur de ce travail.",
    helpCta: "Intérêt partenariat · Aperçu",
  },
  contact: {
    eyebrow: "Une conversation qui vaut la peine d’être lancée",
    title: "Apportez votre point de vue.",
    intro:
      "Le savoir local, des partenariats réfléchis et des retours honnêtes façonneront VisitBurundi. Aperçu de la façon dont cette conversation pourrait commencer.",
    asideTitle: "Construit avec des personnes qui connaissent le lieu.",
    asideBody:
      "Pour les guides, les gardiens culturels, les entreprises touristiques et toute personne ayant une histoire à partager. Ce formulaire illustre un futur canal de partenariat et de retour.",
    asideNote:
      "Aperçu uniquement. Aucun message n’est envoyé ni stocké. Les coordonnées seront publiées après approbation.",
    formTitle: "Dites-nous ce que vous avez en tête.",
  },
  forms: {
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.com",
    keepInspired: "Gardez-moi inspiré",
    previewNote:
      "Formulaire d’aperçu uniquement. Aucun e-mail n’est envoyé, stocké ou inscrit.",
    emailError: "Saisissez une adresse e-mail valide.",
    newsletterSuccess:
      "Aperçu terminé. Votre adresse n’a pas été envoyée ni enregistrée.",
    nameLabel: "Votre nom",
    nameError: "Saisissez votre nom.",
    interestLabel: "Je m’intéresse à",
    interestOptions: {
      partnership: "Partenariat touristique",
      knowledge: "Partage de savoir local",
      feedback: "Retour sur la plateforme",
    },
    messageLabel: "Votre message",
    messageError: "Dites-nous-en un peu plus (au moins 20 caractères).",
    consentLabel:
      "Je comprends que cet aperçu n’envoie ni ne stocke mon message.",
    consentError: "Confirmez que vous comprenez qu’il s’agit d’un aperçu.",
    submit: "Envoyer l’aperçu",
    requiredNote:
      "Les champs marqués * sont obligatoires. Aucun envoi réel n’est effectué.",
    successTitle: "Merci d’avoir essayé l’aperçu.",
    successBody:
      "Votre message n’a pas été envoyé ni enregistré. Un vrai canal de contact partenaire sera ajouté après approbation.",
    tryAgain: "Essayer un autre message",
  },
  legal: {
    eyebrow: "Espace réservé juridique",
    notice:
      "Projet d’espace réservé. Ceci n’est pas une politique juridique approuvée.",
    p1: "Cet aperçu pour les parties prenantes ne gère ni réservations, ni comptes utilisateurs, ni envois de formulaires réels. Les champs de contact et de newsletter sont validés sur votre appareil et ne sont ni envoyés ni enregistrés.",
    p2: "Le planificateur de voyage et la préférence de cookies utilisent le localStorage du navigateur. Aucun cookie d’analyse ou de suivi n’est installé par cette application. L’infrastructure d’hébergement peut traiter des requêtes techniques ; un examen complet du prestataire et de la conservation est requis avant lancement.",
    p3: "Supprimez les données locales d’aperçu en effaçant le stockage de ce site dans votre navigateur. Le contenu des destinations et les voyages d’exemple sont du matériel de planification indicatif, pas une garantie d’accès ni de sécurité de voyage.",
    privacyWarning:
      "Remplacez cette page par une politique de confidentialité relue avant le lancement public.",
    termsWarning:
      "Remplacez cette page par des conditions d’utilisation relues avant le lancement public.",
    cookiesWarning:
      "Remplacez cette page par une politique de cookies relue avant le lancement public.",
    privacyTitle: "Confidentialité",
    termsTitle: "Conditions",
    cookiesTitle: "Cookies",
  },
  notFound: {
    eyebrow: "404 · Un détour hors du sentier",
    title: "Retrouvons votre chemin.",
    body: "Cette page n’est pas sur notre carte. Revenez à la collection de destinations et recommencez ailleurs.",
    cta: "Explorer les destinations",
  },
  map: {
    label: "Carte illustrative des destinations du Burundi, pas à l’échelle",
    chooseDeparture: "Choisissez un point de départ",
    explorePlace: "Explorer ce lieu",
    explorePrefix: "Explorer",
    note: "Carte illustrative · Pas à l’échelle · Pas pour la navigation",
  },
} satisfies Dictionary;
