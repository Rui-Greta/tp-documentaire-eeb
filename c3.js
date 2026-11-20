/* TP documentaire C3 – TP EEB – Installer des réseaux d'énergie et des équipements courants forts dans les parties communes des bâtiments d'habitation
   Source : cours expert C3 (version présentiel, v1 du 7 novembre 2026) ; renvois à la présentation « Les parties communes des immeubles d'habitation » (7 modules).
   Types : qcm, tf, match, order, num, gen, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c3-v1",
  num: 3, code: "C3", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer les réseaux d'énergie dans les parties communes d'un immeuble d'habitation",
  sousTitre: "TP documentaire C3 · TP EEB · CCP 1 Courants forts",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C3 – Les parties communes des immeubles d'habitation » (sur le PC), le cours écrit, les guides NF C 15-100 et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "L'immeuble, les normes et les limites de C3", duree: "30 min", competences: "C3 · critères 1 et 3",
      intro: "Le chemin de l'énergie du réseau public au logement, la frontière NF C 14-100 / NF C 15-100, la loi ELAN, le périmètre de C3 et l'habilitation.",
      source: "Présentation, module 01 (diapositives 4 à 8)",
      ex: [
        { type: "order", q: "Remets dans l'ordre le chemin de l'énergie, du réseau public au logement.", items: ["Réseau public", "Coffret de branchement", "Pied de colonne", "Colonne et dérivations", "Panneau de comptage du logement"] },
        { type: "match", q: "Associe chaque élément à son rôle.", pairs: [
          ["Coffret de branchement", "Raccorde l'immeuble au réseau"],
          ["Pied de colonne", "Origine de la colonne : protection et sectionnement"],
          ["Distributeur d'étage", "Point de piquage des dérivations"],
          ["Dérivation individuelle", "Du distributeur au panneau de comptage"],
          ["Panneau de comptage", "Comptage et origine de l'installation du logement"]] },
        { type: "match", q: "Quelle norme s'applique ?", pairs: [
          ["Colonne électrique et dérivations individuelles", "NF C 14-100"],
          ["Tableau des services généraux et ses circuits", "NF C 15-100"],
          ["Pose du grillage avertisseur", "NF T 54-080"]] },
        { type: "qcm", q: "Depuis la loi ELAN (2018), les colonnes montantes appartiennent…", options: ["aux copropriétaires", "au réseau public de distribution", "à l'installateur", "au syndic"], answer: 1,
          explain: "Sauf opposition des propriétaires dans le délai prévu. L'électricien intervient sur la colonne selon les prescriptions du distributeur." },
        { type: "qcm", q: "Où s'arrête le périmètre de C3 ?", options: ["Au coffret de branchement", "Au pied de colonne", "Au panneau de comptage du logement", "Au tableau du logement"], answer: 2,
          explain: "Au-delà du panneau de comptage, on entre dans le logement : C1 et C2." },
        { type: "match", q: "Hors de C3 : à quelle compétence appartient chaque tâche ?", pairs: [
          ["Tableau privatif d'un logement", "C1 / C2"],
          ["TGBT d'un immeuble de bureaux", "C5"],
          ["Architecture du réseau VDI", "C6"],
          ["Alarme intrusion, SSI", "C7"]] },
        { type: "tf", q: "Habilitation en parties communes : vrai ou faux ?", items: [
          ["Le technicien C3 travaille en B1V sous la responsabilité d'un B2V Essai sur une installation en exploitation.", true],
          ["Le technicien C3 peut lever seul la consignation du tableau général si l'installation est neuve.", false],
          ["C'est l'employeur qui délivre le titre d'habilitation.", true]] },
        { type: "match", q: "Les trois ensembles électriques d'un immeuble :", pairs: [
          ["Branchement", "Du réseau public au point de livraison"],
          ["Distribution collective", "Colonne et dérivations"],
          ["Services généraux", "Tableau et comptage propres"]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "Branchement et pose enterrée", duree: "35 min", competences: "C3 · critères 1 et 3",
      intro: "La tranchée, les profondeurs, le grillage avertisseur et les distances avec les autres réseaux.",
      source: "Présentation, module 02 (diapositives 9 à 12)",
      ex: [
        { type: "match", q: "Profondeurs et signalisation : associe chaque repère à sa valeur.", pairs: [
          ["Terrain normal (hors voies et trottoirs)", "0,50 m minimum"],
          ["Sous voies accessibles aux véhicules et sous trottoirs", "0,85 m minimum"],
          ["Grillage avertisseur au-dessus du câble", "Au moins 20 cm"],
          ["Lit de sable en pose directe", "10 cm dessous et dessus"]] },
        { type: "order", q: "Coupe de tranchée : remets les couches dans l'ordre, du bas vers le haut.", items: ["Fond de fouille dressé", "Sable ou terre meuble", "Câble en fourreau aiguillé", "Sable ou terre meuble", "Grillage avertisseur", "Remblai compacté"] },
        { type: "qcm", q: "Couleur du grillage avertisseur d'un câble d'énergie ?", options: ["Jaune", "Rouge", "Vert", "Bleu"], answer: 1 },
        { type: "qcm", q: "Avant tout terrassement, on effectue…", options: ["une attestation CONSUEL", "une DT-DICT", "un PV de réception", "un bon d'intervention"], answer: 1,
          explain: "La déclaration de projet de travaux (DT-DICT) permet de connaître les réseaux existants avant de creuser." },
        { type: "match", q: "Cohabiter avec les autres réseaux : quelle distance minimale ?", pairs: [
          ["Gaz, eau, hydrocarbures (croisement ou parallèle)", "≥ 0,20 m"],
          ["Télécommunication, en croisement", "≥ 0,20 m en croisement"],
          ["Télécommunication, en parallèle", "≥ 0,50 m"],
          ["Distance impossible à respecter", "Protection particulière ou écran"]] },
        { type: "tf", q: "Pose enterrée : vrai ou faux ?", items: [
          ["Un conducteur isolé H07V-U peut être enterré s'il est dans un fourreau.", false],
          ["Un câble enterré directement est un câble armé (U-1000 RVFV…).", true],
          ["Le fourreau est aiguillé dès la pose pour tirer plus tard sans rouvrir la tranchée.", true],
          ["Les prescriptions du distributeur s'appliquent à la partie branchement.", true]] },
        { type: "num", q: "Un câble d'éclairage extérieur traverse l'allée du parking (voie accessible aux véhicules). Profondeur minimale ?", answer: 0.85, tol: 0, unit: "m" }
      ]
    },
    {
      id: "m3", num: 3, titre: "La colonne et son dimensionnement", duree: "40 min", competences: "C3 · critère 1",
      intro: "La gaine technique, le repérage des dérivations, le foisonnement, le courant d'emploi et la chute de tension d'une canalisation collective. Prends une calculatrice.",
      source: "Présentation, module 03 (diapositives 13 à 16)",
      ex: [
        { type: "tf", q: "Gaine technique et repérage : vrai ou faux ?", items: [
          ["La gaine technique est accessible sur toute la hauteur.", true],
          ["Les traversées de plancher sont rebouchées avec un produit coupe-feu.", true],
          ["Chaque dérivation porte le numéro du logement desservi.", true],
          ["Le repérage peut attendre la mise en service.", false]] },
        { type: "qcm", q: "Pourquoi le repérage des dérivations est-il si important ?", options: ["Pour l'esthétique", "Une dérivation mal affectée inverse deux logements à la mise en service", "Pour le CONSUEL uniquement", "Pour calculer la chute de tension"], answer: 1 },
        { type: "order", q: "Dimensionner une canalisation collective : remets les étapes dans l'ordre.", items: ["Puissance : somme × coefficient de simultanéité", "Courant d'emploi Ib", "Section selon Iz et le mode de pose", "Contrôle de la chute de tension"] },
        { type: "qcm", q: "Pourquoi n'additionne-t-on pas simplement les puissances des logements ?", options: ["Parce que la colonne est triphasée", "Parce que tous les logements ne consomment pas en même temps (foisonnement)", "Parce que le distributeur l'interdit", "Pour réduire le prix du câble"], answer: 1,
          explain: "Le coefficient de simultanéité est fourni par le dossier ou le distributeur." },
        { type: "num", q: "6 logements de 9 kVA, coefficient de simultanéité 0,6 : puissance à retenir ?", answer: 32.4, tol: 0.05, unit: "kVA",
          explain: "6 × 9 × 0,6 = 32,4 kVA." },
        { type: "num", q: "Même colonne alimentée en triphasé 400 V : courant d'emploi Ib (arrondi au dixième) ?", answer: 46.8, tol: 0.2, unit: "A",
          explain: "Ib = S / (√3 × U) = 32 400 / (1,732 × 400) ≈ 46,8 A." },
        { type: "match", q: "Dans ΔU = b × ρ × L × Ib / S, que vaut chaque terme ?", pairs: [
          ["b en monophasé", "2"],
          ["b en triphasé", "1"],
          ["ρ du cuivre", "0,0172 Ω·mm²/m"],
          ["L", "Longueur aller simple, en mètres"]] },
        { type: "qcm", q: "Le calcul donne une section de 13,2 mm². Quelle section retiens-tu ?", options: ["10 mm²", "13 mm²", "16 mm²", "25 mm²"], answer: 2,
          explain: "On retient la section normalisée immédiatement supérieure au calcul." }
      ]
    },
    {
      id: "m4", num: 4, titre: "Tableau des services généraux, éclairage et BAES", duree: "45 min", competences: "C3 · critères 1 et 3",
      intro: "La composition du tableau, les circuits collectifs, la commande de l'éclairage des circulations, l'éclairage de sécurité et le choix IP / IK.",
      source: "Présentation, modules 04 et 05 (diapositives 17 à 25)",
      ex: [
        { type: "order", q: "Le tableau des services généraux, de l'arrivée aux départs : remets dans l'ordre.", items: ["Arrivée : comptage des services généraux et coupure", "Protection générale", "Différentiels par groupe de circuits", "Un départ par circuit collectif", "Terre, repérage, schéma, réserve"] },
        { type: "match", q: "Associe chaque circuit à sa particularité.", pairs: [
          ["Éclairage des circulations (1,5 mm², 10 A)", "Minuterie ou détection de présence"],
          ["Éclairage des caves (1,5 mm², 10 A)", "Matériel IP 44 minimum"],
          ["Prise du local technique (2,5 mm², 20 A)", "DDR 30 mA, usage maintenance"],
          ["Interphone, contrôle d'accès", "Alimentation TBT par bloc fabricant"],
          ["Éclairage extérieur", "IP 65, horloge astronomique ou cellule"]] },
        { type: "qcm", q: "Les boutons-poussoirs d'une minuterie de cage d'escalier se câblent…", options: ["en série", "en parallèle", "chacun sur sa minuterie", "en va-et-vient"], answer: 1,
          explain: "Chaque appui relance la temporisation." },
        { type: "match", q: "Quel mode de commande pour quel lieu ?", pairs: [
          ["Cages d'escalier, paliers", "Minuterie"],
          ["Halls, couloirs, parkings", "Détecteur de présence"],
          ["Éclairage extérieur", "Horloge astronomique ou cellule"]] },
        { type: "match", q: "BAES : associe chaque type à sa valeur minimale.", pairs: [
          ["BAES d'évacuation", "≥ 45 lm pendant 1 h"],
          ["BAES d'ambiance", "≥ 360 lm pendant 1 h"]] },
        { type: "qcm", q: "Où raccorde-t-on l'alimentation d'un BAES ?", options: ["Sur un circuit de prises", "Sur le circuit d'éclairage qu'il secourt, en amont de sa commande", "En aval de la minuterie", "Directement sur l'arrivée, avant le différentiel"], answer: 1,
          explain: "Le BAES doit détecter la coupure du circuit d'éclairage qu'il secourt : il est alimenté en amont de la commande (minuterie, détecteur)." },
        { type: "tf", q: "BAES : vrai ou faux ?", items: [
          ["On le place au-dessus des portes de sortie, à chaque changement de direction et aux paliers.", true],
          ["Sa flèche est orientée vers la sortie.", true],
          ["On le teste par coupure secteur : il s'allume sur batterie, puis s'éteint au retour du courant.", true],
          ["En habitation, la vérification se fait tous les 5 ans.", false]],
          explain: "Vérification au moins une fois par an, consignée au registre de sécurité (arrêté du 31 janvier 1986)." },
        { type: "match", q: "Choisis IP et IK selon la zone.", pairs: [
          ["Hall intérieur", "IP 20 · IK 07"],
          ["Local technique, cave", "IP 44 · IK 07"],
          ["Sous-sol inondable", "IP 55 · IK 08"],
          ["Extérieur, parking", "IP 65 · IK 08 à IK 10"]] },
        { type: "qcm", q: "Luminaire de parking exposé au vandalisme :", options: ["IP 20 · IK 05", "IP 44 · IK 07", "IP 65 · IK 10 et visserie inviolable", "IP 55 · IK 02"], answer: 2 }
      ]
    },
    {
      id: "m5", num: 5, titre: "Accès, câbles, coordination et autocontrôles", duree: "40 min", competences: "C3 · tous critères",
      intro: "Le contrôle d'accès, les gâches, le choix des câbles et la réaction au feu, la coordination avec les autres corps d'état, les autocontrôles et l'assistance à la mise en service.",
      source: "Présentation, modules 06 et 07 (diapositives 26 à 34)",
      ex: [
        { type: "match", q: "Contrôle d'accès : associe chaque élément à son rôle.", pairs: [
          ["Platine de rue", "Appel, digicode, commande d'ouverture"],
          ["Postes intérieurs", "Interphone ou visiophone"],
          ["Gâche, ventouse", "Verrouillage de la porte"],
          ["Alimentation", "Bloc dédié, protégé au tableau des services généraux"]] },
        { type: "qcm", q: "La porte du hall est une issue d'évacuation. Quel dispositif de verrouillage ?", options: ["Gâche à émission", "Gâche à rupture (sécurité positive)", "Serrure mécanique seule", "Indifférent"], answer: 1,
          explain: "Sans courant, la gâche à rupture libère la porte." },
        { type: "match", q: "Quel câble pour quel emploi ?", pairs: [
          ["U-1000 R2V", "Distribution et services généraux"],
          ["CR1-C1", "Circuits de sécurité devant fonctionner en cas d'incendie"],
          ["H07V-U / H07V-R", "Sous conduit et dans les tableaux"]] },
        { type: "tf", q: "Cheminements et feu : vrai ou faux ?", items: [
          ["La classe de réaction au feu (RPC) se vérifie sur le marquage du touret.", true],
          ["La classe Fca est la meilleure.", false],
          ["Une traversée de plancher retrouve son degré coupe-feu après passage.", true],
          ["Les chemins de câbles assurent leur continuité de masse par des éclisses.", true]] },
        { type: "match", q: "Coordination : quel point voir avec chaque corps d'état ?", pairs: [
          ["Gros œuvre", "Réservations et gaines techniques avant coulage"],
          ["Plombiers", "Distances de séparation eau / électricité"],
          ["Ascensoriste", "Alimentation et terre de la machinerie"],
          ["Courants faibles", "Cheminements BAES, interphonie, VDI"]] },
        { type: "order", q: "Remets dans l'ordre les autocontrôles de C3.", items: ["Contrôle visuel", "Continuité des PE (≤ 2 Ω)", "Isolement sous 500 V continu (≥ 1 MΩ)", "Mesure de la prise de terre", "Mise sous tension assistée par le B2V Essai"] },
        { type: "pick", q: "Pendant la mise en service, coche ce que fait l'électricien C3.", items: [
          ["Observer la levée de consignation", true],
          ["Fermer les départs sur instruction", true],
          ["Lever lui-même la consignation pour gagner du temps", false],
          ["Tester éclairage, minuterie, BAES et interphonie", true],
          ["Relever les tensions et noter tout déclenchement", true]] },
        { type: "qcm", q: "Lever seul la consignation du tableau général pendant l'évaluation :", options: ["est toléré si l'installation est neuve", "est éliminatoire", "est permis en présence du client", "est permis avec un BR"], answer: 1 }
      ]
    },
    {
      id: "m6", num: 6, titre: "Étude de cas : la résidence « Les Oliviers »", duree: "35 min", competences: "C3 · tous critères",
      intro: "Petit immeuble de 8 logements sur 3 niveaux (R+2) : une cage d'escalier, un hall, un parking extérieur et des caves. Chaque logement : 6 kVA. Colonne monophasée 230 V de 12 m, coefficient de simultanéité 0,5. Ton encadrant te confie, en binôme, le tableau des services généraux et l'éclairage des communes.",
      source: "Toute la présentation · synthèse (diapositive 35)",
      ex: [
        { type: "num", q: "Puissance à retenir pour la colonne ?", answer: 24, tol: 0, unit: "kVA",
          explain: "8 × 6 × 0,5 = 24 kVA." },
        { type: "num", q: "Courant d'emploi de la colonne en monophasé 230 V (arrondi à l'unité) ?", answer: 104, tol: 1, unit: "A",
          explain: "Ib = 24 000 / 230 ≈ 104 A." },
        { type: "num", q: "Chute de tension en % pour une section de 35 mm² cuivre (arrondie au dixième) ?", answer: 0.5, tol: 0.1, unit: "%",
          explain: "ΔU = 2 × 0,0172 × 12 × 104,3 / 35 ≈ 1,23 V → 1,23 / 230 × 100 ≈ 0,5 %." },
        { type: "match", q: "Choisis IP et IK pour les luminaires de la résidence.", pairs: [
          ["Hall", "IP 20 · IK 07"],
          ["Caves", "IP 44 · IK 07"],
          ["Parking extérieur", "IP 65 · IK 08 à IK 10"]] },
        { type: "qcm", q: "Les BAES de la cage d'escalier sont alimentés…", options: ["par un circuit de prises", "par le circuit d'éclairage de la cage, en amont de la minuterie", "en aval de la minuterie", "par l'alimentation de l'interphone"], answer: 1 },
        { type: "qcm", q: "La porte du hall est une issue d'évacuation : quelle gâche ?", options: ["À émission", "À rupture", "Mécanique", "Sans importance"], answer: 1 },
        { type: "order", q: "Ton compte rendu oral à l'encadrant : remets les points dans l'ordre.", items: ["Travaux réalisés en binôme", "Résultats des autocontrôles, avec unités", "Écarts au dossier technique", "Propreté et tri des déchets"] },
        { type: "task", phone: true, q: "Compte rendu oral avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Enregistre en 2 minutes ton compte rendu de la mise en service assistée de la résidence « Les Oliviers », comme si tu parlais à ton encadrant.",
          "Cite au moins une valeur d'autocontrôle avec son unité et un écart au dossier.",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de ton enregistrement et remarques" },
        { type: "open", q: "En câblant, tu constates que la dérivation du 2e étage n'est pas repérée et qu'une traversée de plancher n'a pas été rebouchée par le plaquiste. Rédige en 3 à 4 phrases ton message à l'encadrant.", hint: "Le constat, le risque (inversion de logements, propagation du feu), ce que tu proposes, et le fait que tu le signales le jour même." }
      ]
    }
  ]
};
