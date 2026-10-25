<?php
// Envoi du formulaire de contact par mail (hébergement OVH mutualisé).
// Pas de base de données : on valide, on envoie, on redirige.

const DESTINATAIRE = 'lucdesessarts@gmail.com';
// Adresse du domaine hébergé chez OVH (à créer dans l'espace client OVH).
// Un expéditeur hors du domaine fait refuser le mail ou le classe en spam.
const EXPEDITEUR = 'contact@domaine-a-renseigner.fr';

const OBJETS = [
    'devis' => 'Demande de devis',
    'renseignement' => 'Renseignement',
    'reclamation' => 'Réclamation',
    'autre' => 'Autre',
];

function retour(string $page): never
{
    header('Location: ' . $page, true, 303);
    exit;
}

// Texte d'un champ, tronqué ; sur une ligne, les caractères de contrôle
// (dont les retours à la ligne, vecteur d'injection d'en-têtes) sont retirés.
function champ(string $nom, int $max = 200, bool $multiligne = false): string
{
    $valeur = $_POST[$nom] ?? '';
    if (!is_string($valeur)) {
        return '';
    }
    $motif = $multiligne ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u' : '/[\x00-\x1F\x7F]/u';
    return trim(mb_substr(preg_replace($motif, ' ', $valeur) ?? '', 0, $max));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    retour('contact.html');
}

// Piège à robots : champ caché que seul un robot remplit.
// On fait comme si tout allait bien pour ne pas l'aider.
if (champ('bot-field') !== '') {
    retour('merci.html');
}

$objet = champ('objet');
$nom = champ('nom');
$societe = champ('societe');
$email = champ('email');
$telephone = champ('telephone', 30);
$message = champ('message', 5000, true);

$valide = isset(OBJETS[$objet])
    && $nom !== ''
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && preg_match('/^(\+33|0)[1-9](\s?\d{2}){4}$/', $telephone)
    && $message !== ''
    && isset($_POST['rgpd']);

if (!$valide) {
    retour('contact.html?erreur=1');
}

$sujet = mb_encode_mimeheader('[Site] ' . OBJETS[$objet] . ' - ' . $nom, 'UTF-8');
$corps = "Objet : " . OBJETS[$objet] . "\n"
    . "Nom : $nom\n"
    . ($societe !== '' ? "Société : $societe\n" : '')
    . "Email : $email\n"
    . "Téléphone : $telephone\n\n"
    . $message . "\n";
$entetes = [
    'From' => mb_encode_mimeheader("Site À l'orée du fer", 'UTF-8') . ' <' . EXPEDITEUR . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
];

if (mail(DESTINATAIRE, $sujet, $corps, $entetes, '-f' . EXPEDITEUR)) {
    retour('merci.html');
}
retour('contact.html?erreur=1');
