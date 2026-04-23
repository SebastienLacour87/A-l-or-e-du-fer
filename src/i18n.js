// taduction du texte
const translations = {
  fr: {
    //navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Mes chantiers",
    "nav.contact": "Contact",
    //sliders
    "btn.discover": "Découvrir →",
    "btn.collection": "Voir la collection →",
    "btn.contact": "Nous contacter →",
    "title.pres": "Atelier de ferronnerie spécialisé",
    "text.pres": "Architecture intérieur et extérieur",
    "text.lineup":
      "Découvrez des créations uniques faites à la main avec passion.",
    "title.pres.2": "Pièces de décoration, Mobilier sur-mesure en métal",
    "text.pres.2": "Bienvenue dans notre atelier",
    "text.lineup.2": "Un savoir faire ancestral au service de vos projets.",
    "title.pres.3": "Artisant créateur en serrurerie d'art",
    "text.pres.3":
      "Concevoir des créations contemporaines dans le respect des techniques ancestrales",
    "text.lineup.3": "Contactez nous pour un devis personnaliser.",
    // section a propos
    "fig.caption": "Luc Desessarts en plein travail",
    "about.title": "LA FERRONNERIE D’ART",
    "about.p":
      "La Ferronnerie d’Art est l’art et la technique du travail du fer à la forge, à l’étampe ou au marteau dans un but décoratif et/ou architectural. C’est un savoir-faire ancestral qui permet d’imaginer, de créer et de concevoir des ferronneries : escaliers, rampes de style, grilles et portails, mobilier, gardecorps, structures métalliques, marquises... Elle nécessite un grand savoir-faire et de nombreuses années d’expérience.",
    "working.title": "Une prise en charge globale : de la conception à la pose",
    "working.subtitle": "Mon travail en 4 étapes au service de vos envies :",
    "working.p":
      "❈ Etape 1 : Tout commence par un premier rendez-vous afin d'écouter, comprendre et cerner les souhaits de mes clients. Dans le but d'établir un devis au plus juste. Devis que je présente en personne, car il s'accompagne en général d'explication esthétique et  technique, ainsi que d'échantillons pour m'assurer que nous nous   comprenons.",
    "working.p2":
      "❈ Etape 2 : Après acceptation du devis, commence la phase de création et de conception. Je propose une esthétique que nous affinons ensemble pour être au plus près de vos attentes.",
    "working.figcaption": "étape 3",
    "working.figcaption2": "étape 3 bis",
    "working.figcaption3": "étape 4",
    "working.p3":
      "❈ Etape 3 : Une fois validé par vos soins, vient le moment de la fabrication dans le respect des règles techniques. Le essin prend vie et passe de l'imaginaire au réel.",
    "working.p4":
      "❈ Etape 4 : Pour finir, je me charge en personne de l'installation sur site. Vous découvrez alors votre ouvrage tel que vous l'avez imaginé en lieu et place.",
    "material.title": "Les matériaux",
    "material.p":
      "Le ferronnier d'art est connu pour ses ouvrages en fer mais en fonction du rendu recherché il pourra travailler également d'autres matériaux :",
    "material.li1": "• La feuille d'or",
    "material.li2": "• Le bronze (alliance étain et cuivre)",
    "material.li3": "• L'acier (alliance fer et carbone)",
    "material.li4": "• Les aciers inoxydables",
    "material.li5": "• Les métaux non ferreux (cuivre, aluminium, laiton)",
    "material.li6": "• Le plomb",
    // section galerie
    "gallery.title": "Nos réalisations",
    "gallery1.title": "Rampes et escaliers",
    "gallery2.title": "Mobiliers et Objets d'art",
    "gallery3.title": "Portes et Fenêtres",
    "gallery4.title": "Marquises et Pergolas",
    // footer
    "footer.title":
      "Réalisation architecturale extérieur et intérieur en métal",
    "footer.adress":
      "2, rue de la terrasse 87260 Pierre-Buffière 06 80 50 90 09",
    "footer.nav.home": "Accueil",
    "footer.nav.about": "À Propos",
    "footer.nav.gallery": "Mes Chantiers",
    "footer.nav.mention": "Mentions Légales",
    "footer.nav.confidentialite": "Politique de Confidentialitée",
    //page gelerie rampe
    "gallery.ramps.title": "Nos escaliers et rampes",
    "gallery.ramps.figcaption1":
      "escalier en métal avec sa rampe réaliser sur mesure",
    "gallery.ramps.figcaption2": "garde corps réaliser en fer forgé",
    "gallery.ramps.figcaption3": "rampe d'escalier métal et bois",
    "gallery.ramps.figcaption4":
      "rampe d'escalier métal et bois vue du haut de l'escalier",
    "gallery.ramps.figcaption5": "rampe d'escalier en colimaçon",
    "gallery.ramps.figcaption6": "rampe d'escalier d'inspiration végétale",
    "gallery.ramps.figcaption7": "rampe d'escalier d'extérieur et garde corps",
    "gallery.ramps.figcaption8":
      "rampe d'escalier en colimaçon vue du haut de l'escalier",
    "gallery.ramps.figcaption9": "garde corps d'escalier",
    "see.more": "Voir Aussi",
    "btn.mobilier": "Mobiliers et Objets d'art",
    "btn.porte": "Portes et Fenêtres",
    "btn.pergolas": "Marquises et Pergolas",
    // galerie mobilier
    "btn.rampe": "Rampes et Escaliers",
    "gallery.furniture.title": "Mobilier et objet d'art réaliser sur mesure",
    "gallery.furniture.figcaption":
      "balance réaliser pour la maison de l'énergie - Haute-Vienne",
    "gallery.furniture.figcaption2": "structure de bureau et chaise assorti",
    "gallery.furniture.figcaption3": "couvercle de puit",
    "gallery.furniture.figcaption4": "desserte bois et métal",
    "gallery.furniture.figcaption5": "sommier et tête de lit en fer forgé",
    "gallery.furniture.figcaption6":
      "plaque funéraire réaliser pour la tombe d'un chien",
    "gallery.furniture.figcaption7":
      "lampe vitrail représentant Eddy la mascotte de Iron Maiden",
    // galerie porte
    "gallery.door.title": "Portes et Fenêtres",
    "gallery.door.figcaption": "Fenêtre d'intérieur réaliser sur mesure",
    "gallery.door.figcaption2": "Porte réaliser en fer forgé pour une chapelle",
    "gallery.door.figcaption3":
      "porte vitrail dont la partie basse s'ouvre indépendamment de la partie haute",
    "gallery.door.figcaption4":
      "grille de porte d'entrée dont la forme rappel le soleil",
    "gallery.door.figcaption5": "structure métallique pour fenêtre intérieur",
    "gallery.door.figcaption6": "portail réaliser en fer forgé",
    "gallery.door.figcaption7": "porte vitrée en métal",
    //galerie pergolas
    "gallery.pergoles.title": "Marquises et Pergolas",
    "gallery.pergolas.figcaption": "marquise structure acier banc et verre",
    "gallery.pergolas.figcaption2": "marquise porte d'entrée",
    "gallery.pergolas.figcaption3": "marquise et rampe pour un perron",
    "gallery.pergolas.figcaption4": "marquise vitrée",
    "gallery.pergolas.figcaption5": "pergolas avec lanterne",
    "gallery.pergolas.figcaption6": "pergolas pour une terrasse",
    "gallery.pergolas.figcaption7": "pergolas avec lanterne vue de plus près",
    //page contact
    "contact.title": "Contactez-nous",
    "contact.p":
      "Pour plus de renseignement, entrez vos coordonées et votre demande ci-dessous, et nous vous recontacterons",
    "contact.objet.label": "Objet",
    "contact.objet.devis": "Demande de devis",
    "contact.objet.renseignement": "Renseignement",
    "contact.objet.reclamation": "Réclamation",
    "contact.objet.autre": "Autre",
    "contact.nom.label": "Nom",
    "contact.societe.label": "Société",
    "contact.optionnel": "(optionnel)",
    "contact.email.label": "Email",
    "contact.email.error": "Veuillez saisir une adresse email valide.",
    "contact.tel.label": "Téléphone",
    "contact.tel.error": "Veuillez saisir un numéro de téléphone valide.",
    "contact.message.label": "Message",
    "contact.rgpd":
      "En cochant cette case et en soumettant ce formulaire,   j'accepte que mes données personnelles soient utilisées pour           me recontacter dans le cadre de ma demande indiquée dans ce            formulaire. Aucun autre traitement ne sera effectué avec mes           informations.",
    "contact.rgpd.error":
      "Vous devez accepter les conditions pour envoyer le formulaire.",
    "contact.submit": "Envoyer",
    // page mentions légales
    "legal.editor.title": "1. Éditeur du site",
    "legal.editor.intro": "Le présent site est édité par :",
    "legal.editor.phone": "Téléphone ",
    "legal.director.title": "2. Directeur de la publication",
    "legal.director.content":
      "Luc Desessarts, en qualité d'artisan responsable de l'activité À l'Orée du Fer.",
    "legal.host.title": "3. Hébergeur",
    "legal.host.intro": "Ce site est hébergé par :",
    "legal.host.country": "États-Unis",
    "legal.dev.content": "Site conçu et développé par :",
    "legal.ip.title": "5. Propriété intellectuelle",
    "legal.ip.content":
      "L'ensemble des contenus présents sur ce site (textes, photographies, illustrations, logo) sont la propriété exclusive de Luc Desessarts — À l'Orée du Fer, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    "legal.liability.title": "6. Limitation de responsabilité",
    "legal.liability.content":
      "Luc Desessarts s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées et décline toute responsabilité pour toute imprécision ou omission portant sur les informations disponibles sur ce site.",
    "legal.data.title": "7. Données personnelles",
    "legal.data.content":
      "Les informations collectées via le formulaire de contact sont utilisées uniquement dans le cadre de la relation commerciale avec Luc Desessarts. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à l'adresse :",
    "legal.data.link": "Politique de confidentialité",
    "legal.cookies.title": "8. Cookies",
    "legal.cookies.content":
      "Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucune donnée de navigation n'est collectée à des fins commerciales ou statistiques.",
    "legal.law.title": "9. Droit applicable",
    "legal.law.content":
      "Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.",
    //page confidentialitée
    "privacy.title": "Politique de Confidentialité",
    "privacy.controller.title": "1. Responsable du traitement",
    "privacy.controller.intro":
      "Le responsable du traitement des données collectées sur ce site est :",
    "privacy.controller.phone": "Téléphone",
    "privacy.data.title": "2. Données collectées",
    "privacy.data.content":
      "Dans le cadre de l'utilisation du formulaire de contact, les données suivantes sont susceptibles d'être collectées :",
    "privacy.data.item1": "Nom et prénom",
    "privacy.data.item2": "Nom de société (optionnel)",
    "privacy.data.item3": "Adresse email",
    "privacy.data.item4": "Numéro de téléphone",
    "privacy.data.item5": "Objet et contenu de la demande",
    "privacy.purpose.title": "3. Finalité du traitement",
    "privacy.purpose.content":
      "Les données collectées sont utilisées exclusivement pour répondre aux demandes envoyées via le formulaire de contact (demande de devis, renseignement, réclamation ou autre). Aucune donnée ne sera utilisée à  des fins commerciales, publicitaires ou transmise à des tiers sans votre consentement explicite.",
    "privacy.retention.title": "4. Durée de conservation",
    "privacy.retention.before":
      "Les données personnelles collectées sont conservées pour une durée maximale de",
    "privacy.retention.months": "mois",
    "privacy.retention.after":
      "à compter de la date de réception du message. Au-delà de cette période, les données sont supprimées de manière définitive",
    "privacy.legal.title": "5. Base légale du traitement",
    "privacy.legal.content":
      "Le traitement de vos données repose sur votre consentement explicite, exprimé lors de la soumission du formulaire de contact en cochant la case prévue à cet effet, conformément à l'article 6.1.a du Règlement Général sur la Protection des Données (RGPD).",
    "privacy.rights.title": "6. Vos droits",
    "privacy.rights.content":
      "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :",
    "privacy.rights.item1": "Droit d'accès à vos données",
    "privacy.rights.item2": "Droit de rectification",
    "privacy.rights.item3": "Droit à l'effacement (droit à l'oubli)",
    "privacy.rights.item4": "Droit à la limitation du traitement",
    "privacy.rights.item5": "Droit d'opposition au traitement",
    "privacy.rights.item6": "Droit à la portabilité des données",
    "privacy.rights.contact.before":
      "Pour exercer l'un de ces droits, contactez-nous par email à :",
    "privacy.rights.contact.after":
      "Nous nous engageons à répondre dans un délai maximum de 30 jours",
    "privacy.security.title": "7. Sécurité des données",
    "privacy.security.content":
      "Les données collectées via le formulaire de contact sont transmises de manière sécurisée via le service Netlify Forms, qui assure leur chiffrement lors de la transmission. Luc Desessarts s'engage à prendre toutes les précautions nécessaires pour préserver la sécurité de vos données et empêcher qu'elles soient déformées, endommagées ou communiquées à des tiers non autorisés.",
    "privacy.cookies.title": "8. Cookies",
    "privacy.cookies.content":
      "Ce site n'utilise aucun cookie de traçage, publicitaire ou analytique. Aucune donnée de navigation n'est collectée à des fins commerciales ou statistiques.",
    "privacy.cnil.title": "9. Réclamation auprès de la CNIL",
    "privacy.cnil.content":
      "Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :",
    "privacy.update.title": "10. Mise à jour de la politique",
    "privacy.update.content":
      "La présente politique de confidentialité peut être mise à jour à tout moment afin de refléter les évolutions légales ou les changements apportés au site. La date de dernière mise à jour sera indiquée en bas de page.",
    "privacy.update.date": "Dernière mise à jour : avril 2025",
  },
  en: {
    //navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "My projects",
    "nav.contact": "Contact",
    //sliders
    "btn.discover": "Discover →",
    "btn.collection": "View the collection →",
    "btn.contact": "Contact us →",
    "title.pres": "Specialized metalwork shop",
    "text.pres": "Interior and exterior architecture",
    "text.lineup": "Discover unique creations, handcrafted with passion.",
    "title.pres.2": "Decorative items, Custom-made metal furniture",
    "text.pres.2": "Welcome to our workshop",
    "text.lineup.2": "Time-honored expertise at the service of your projects.",
    "title.pres.3": "Artisan, a creator of artistic locksmith work",
    "text.pres.3":
      "Creating contemporary designs while honoring traditional techniques",
    "text.lineup.3": "Contact us for a personalized quote.",
    // section a propos
    "fig.caption": "Luc Desessarts hard at work",
    "about.title": "ARTISTIC IRONWORK",
    "about.p":
      "Artistic metalwork is the art and technique of working with iron using a forge, a stamping press, or a hammer for decorative and/or architectural purposes. It is an ancestral craft that allows for the conception, creation, and design of ironwork: staircases, decorative railings, gates and fences, furniture, balustrades, metal structures, canopies... It requires great skill and many years of experience.",
    "working.title": "Comprehensive service: from design to installation",
    "working.subtitle": "My 4-step process tailored to your needs:",
    "working.p":
      "❈ Step 1: It all starts with an initial meeting to listen to, understand, and identify my clients’ wishes. The goal is to provide the most accurate quote possible. I present this quote in person, as it usually includes aesthetic and technical explanations, as well as samples, to ensure we’re on the same page.",
    "working.p2":
      "❈ Step 2: Once you’ve approved the quote, the design and development phase begins. I’ll propose a design concept that we’ll refine together to ensure it meets your expectations as closely as possible.",
    "working.figcaption": "Step 3",
    "working.figcaption2": "Step 3a",
    "working.figcaption3": "Step 4",
    "working.p3":
      "❈ Step 3: Once you’ve approved it, it’s time to begin production in accordance with technical specifications. The design comes to life, moving from imagination to reality.",
    "working.p4":
      "❈ Step 4: Finally, I personally handle the on-site installation. You’ll then see your project come to life exactly as you envisioned it.",
    "material.title": "Materials",
    "material.p":
      "Artistic metalworkers are known for their ironwork, but depending on the desired effect, they may also work with other materials:",
    "material.li1": "• Gold leaf",
    "material.li2": "• Bronze (an alloy of tin and copper)",
    "material.li3": "• Steel (an alloy of iron and carbon)",
    "material.li4": "• Stainless steels",
    "material.li5": "• Non-ferrous metals (copper, aluminum, brass)",
    "material.li6": "• Lead",
    // section galerie
    "gallery.title": "Our Projects",
    "gallery1.title": "Ramps and stairs",
    "gallery2.title": "Furniture and Art Objects",
    "gallery3.title": "Doors and Windows",
    "gallery4.title": "Awnings and Pergolas",
    // footer
    "footer.title": "Architectural design of metal exteriors and interiors",
    "footer.nav.home": "Home",
    "footer.nav.about": "About",
    "footer.nav.gallery": "My Projects",
    "footer.nav.mention": "Legal Notice",
    "footer.nav.confidentialite": "Privacy Policy",
    //page galerie-rampe
    "gallery.ramps.title": "Our staircases and handrails",
    "gallery.ramps.figcaption1": "custom-made metal staircase with handrail",
    "gallery.ramps.figcaption2": "wrought iron railing",
    "gallery.ramps.figcaption3": "metal and wood stair railing",
    "gallery.ramps.figcaption4":
      "Metal and wood stair railing, viewed from the top of the stairs",
    "gallery.ramps.figcaption5": "spiral staircase railing",
    "gallery.ramps.figcaption6": "plant-inspired stair railing",
    "gallery.ramps.figcaption7": "Outdoor stair railing and handrail",
    "gallery.ramps.figcaption8":
      "spiral staircase railing, viewed from the top of the staircase",
    "gallery.ramps.figcaption9": "stair railing",
    "see.more": "See Also",
    "btn.mobilier": "Furniture and Art Objects",
    "btn.porte": "Doors and Windows",
    "btn.pergolas": "Awnings and Pergolas",
    // galerie-mobilier
    "btn.rampe": "Ramps and Stairs",
    "gallery.furniture.title": "Custom-made furniture and art objects",
    "gallery.furniture.figcaption":
      "Energy balance to be prepared for the Energy House - Haute-Vienne",
    "gallery.furniture.figcaption2": "desk set with matching chair",
    "gallery.furniture.figcaption3": "manhole cover",
    "gallery.furniture.figcaption4": "wood and metal side table",
    "gallery.furniture.figcaption5": "wrought-iron bed frame and headboard",
    "gallery.furniture.figcaption6": "A dog grave marker",
    "gallery.furniture.figcaption7":
      "stained-glass lamp featuring Eddy, the Iron Maiden mascot",
    // galerie porte
    "gallery.door.title": "Doors and Windows",
    "gallery.door.figcaption": "Custom-made interior window",
    "gallery.door.figcaption2": "Wrought-iron door for a chapel",
    "gallery.door.figcaption3":
      "stained-glass door whose lower section opens independently of the upper section",
    "gallery.door.figcaption4": "front door grille shaped like the sun",
    "gallery.door.figcaption5": "metal frame for an interior window",
    "gallery.door.figcaption6": "wrought-iron gate",
    "gallery.door.figcaption7": "metal glass door",
    //galerie pergolas
    "gallery.pergoles.title": "Awnings and Pergolas",
    "gallery.pergolas.figcaption": "steel-framed pergola with bench and glass",
    "gallery.pergolas.figcaption2": "front door awning",
    "gallery.pergolas.figcaption3": "canopy and handrail for a front porch",
    "gallery.pergolas.figcaption4": "glass canopy",
    "gallery.pergolas.figcaption5": "pergolas with lanterns",
    "gallery.pergolas.figcaption6": "pergolas for a patio",
    "gallery.pergolas.figcaption7": "Pergolas with lanterns: a closer look",
    //page contact
    "contact.title": "Contact us",
    "contact.p":
      "For more information, please enter your contact information and your request below, and we will get back to you",
    "contact.objet.label": "Subject",
    "contact.objet.devis": "Request a Quote",
    "contact.objet.renseignement": "Information",
    "contact.objet.reclamation": "Complaint",
    "contact.objet.autre": "Other",
    "contact.nom.label": "Name",
    "contact.societe.label": "Company",
    "contact.optionnel": "(optional)",
    "contact.email.label": "Email",
    "contact.email.error": "Please enter a valid email address.",
    "contact.tel.label": "Phone",
    "contact.tel.error": "Please enter a valid phone number.",
    "contact.message.label": "Message",
    "contact.rgpd":
      "By checking this box and submitting this form, I consent to the use of my personal data to contact me regarding the request I have made in this form. My information will not be used for any other purpose.",
    "contact.rgpd.error":
      "You must agree to the terms and conditions to submit the form.",
    "contact.submit": "Send",
    //page mentions légales
    "legal.editor.title": "1. Website Publisher",
    "legal.editor.intro": "This website is published by:",
    "legal.editor.phone": "Phone ",
    "legal.director.title": "2. Publisher",
    "legal.director.content":
      "Luc Desessarts, as the artisan in charge of the À l'Orée du Fer workshop.",
    "legal.host.title": "3. Web Host",
    "legal.host.intro": "This site is hosted by:",
    "legal.host.country": "United States",
    "legal.dev.content": "Website designed and developed by:",
    "legal.ip.title": "5. Intellectual Property",
    "legal.ip.content":
      "All content on this website (text, photographs, illustrations, logo) is the exclusive property of Luc Desessarts — À l'Orée du Fer, unless otherwise stated. Any reproduction, display, or distribution, in whole or in part, without prior written permission is strictly prohibited and constitutes an infringement punishable under the Intellectual Property Code.",
    "legal.liability.title": "6. Limitation of Liability",
    "legal.liability.content":
      "Luc Desessarts makes every effort to ensure that the information provided on this website is accurate and up to date. However, he cannot guarantee the accuracy, completeness, or timeliness of the published information and accepts no liability for any inaccuracies or omissions in the information available on this website.",
    "legal.data.title": "7. Personal Information",
    "legal.data.content":
      "The information collected via the contact form is used solely for the purposes of the business relationship with Luc Desessarts. In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the right to access, correct, and delete your data. To exercise this right, please contact us at:",
    "legal.data.link": "Privacy Policy",
    "legal.cookies.title": "8. Cookies",
    "legal.cookies.content":
      "This site does not use tracking or advertising cookies. No browsing data is collected for commercial or statistical purposes.",
    "legal.law.title": "9. Governing Law",
    "legal.law.content":
      "This website and its legal notices are governed by French law. Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the French courts.",
    // page confidentialitée
    "privacy.title": "Privacy Policy",
    "privacy.controller.title": "1. Data Controller",
    "privacy.controller.intro":
      "The data controller for the data collected on this website is:",
    "privacy.controller.phone": "Phone",
    "privacy.data.title": "2. Data Collected",
    "privacy.data.content":
      "When using the contact form, the following data may be collected:",
    "privacy.data.item1": "First and last name",
    "privacy.data.item2": "Company name (optional)",
    "privacy.data.item3": "Email address",
    "privacy.data.item4": "Phone number",
    "privacy.data.item5": "Purpose and content of the request",
    "privacy.purpose.title": "3. Purpose of the processing",
    "privacy.purpose.content":
      "The data collected is used exclusively to respond to requests submitted via the contact form (requests for quotes, inquiries, complaints, or other matters). No data will be used for commercial or advertising purposes, nor will it be shared with third parties without your explicit consent.",
    "privacy.retention.title": "4. Shelf life",
    "privacy.retention.before":
      "The personal data collected is retained for a maximum period of",
    "privacy.retention.months": "month",
    "privacy.retention.after":
      "as of the date the message is received. After this period, the data is permanently deleted",
    "privacy.legal.title": "5. Legal basis for processing",
    "privacy.legal.content":
      "The processing of your data is based on your explicit consent, which you provide by checking the box provided for this purpose when submitting the contact form, in accordance with Article 6.1.a of the General Data Protection Regulation (GDPR).",
    "privacy.rights.title": "6. Your rights",
    "privacy.rights.content":
      "In accordance with the GDPR and the French Data Protection Act, you have the following rights regarding your personal data:",
    "privacy.rights.item1": "Right of access to your data",
    "privacy.rights.item2": "Right to rectification",
    "privacy.rights.item3": "Right to erasure (right to be forgotten)",
    "privacy.rights.item4": "Right to restriction of processing",
    "privacy.rights.item5": "Right to object to processing",
    "privacy.rights.item6": "Right to data portability",
    "privacy.rights.contact.before":
      "To exercise any of these rights, please contact us by email at:",
    "privacy.rights.contact.after": "We promise to respond within 30 days",
    "privacy.security.title": "7. Data Security",
    "privacy.security.content":
      "Data collected via the contact form is transmitted securely through the Netlify Forms service, which encrypts the data during transmission. Luc Desessarts is committed to taking all necessary precautions to ensure the security of your data and to prevent it from being altered, damaged, or disclosed to unauthorized third parties.",
    "privacy.cookies.title": "8. Cookies",
    "privacy.cookies.content":
      "This site does not use any tracking, advertising, or analytics cookies. No browsing data is collected for commercial or statistical purposes.",
    "privacy.cnil.title": "9. Complaint to the CNIL",
    "privacy.cnil.content":
      "If you believe your rights have not been respected, you may file a complaint with the French Data Protection Authority (CNIL):",
    "privacy.update.title": "10. Policy Update",
    "privacy.update.content":
      "This Privacy Policy may be updated at any time to reflect changes in the law or changes to the website. The date of the last update will be indicated at the bottom of the page.",
    "privacy.update.date": "Last updated: April 2025",
  },
};
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
