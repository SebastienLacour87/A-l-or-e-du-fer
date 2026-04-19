// taduction du texte
const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Mes chantiers",
    "nav.contact": "Contact",
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
    "title.pres.3": "Arisant créateur en serrurerie d'art",
    "text.pres.3":
      "Concevoir des créations contemporaines dans le respect des techniques ancestrales",
    "text.lineup.3": "Contactez nous pour un devis personnaliser.",
    "fig.caption": "Luc Desessarts en plein travail",
    "about.title": "LA FERRONNERIE D’ART",
    "about.p":
      "La Ferronnerie d’Art est l’art et la technique du travail du fer à la forge, à l’étampe ou au marteau dans un but décoratif et/ou architectural. C’est un savoir-faire ancestral qui permet d’imaginer, de créer et de concevoir des ferronneries : escaliers, rampes de style, grilles et portails, mobilier, gardecorps, structures métalliques, marquises... Elle nécessite un grand savoir-faire et de nombreuses années d’expérience.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "My projects",
    "nav.contact": "Contact",
    "btn.discover": "Discover →",
    "btn.collection": "View the collection →",
    "btn.contact": "Contact us →",
    "title.pres": "Specialized metalwork shop",
    "text.pres": "Interior and exterior architecture",
    "text.lineup": "Discover unique creations, handcrafted with passion.",
    "title.pres.2": "Decorative items, Custom-made metal furniture",
    "text.pres.2": "Welcome to our workshop",
    "text.lineup.2": "Time-honored expertise at the service of your projects.",
    "title.pres.3": "Arisant, a creator of artistic locksmith work",
    "text.pres.3":
      "Creating contemporary designs while honoring traditional techniques",
    "text.lineup.3": "Contact us for a personalized quote.",
    "fig.caption": "Luc Desessarts hard at work",
    "about.title": "ARTISTIC IRONWORK",
    "about.p":
      "Artistic metalwork is the art and technique of working with iron using a forge, a stamping press, or a hammer for decorative and/or architectural purposes. It is an ancestral craft that allows for the conception, creation, and design of ironwork: staircases, decorative railings, gates and fences, furniture, balustrades, metal structures, canopies... It requires great skill and many years of experience.",
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
