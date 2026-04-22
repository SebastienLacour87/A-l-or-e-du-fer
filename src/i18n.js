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
