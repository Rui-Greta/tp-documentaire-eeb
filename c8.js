/* TP documentaire C8 – TP EEB – Installer des équipements d'automatisme et de confort dans un bâtiment à usage d'habitation et autres
   Source : cours expert C8 (version présentiel) ; renvois à la présentation du cours expert C8 (8 parties).
   Types : qcm, tf, match, order, num, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c8-v1",
  num: 8, code: "C8", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer des équipements d'automatisme et de confort dans un bâtiment d'habitation et autres",
  sousTitre: "TP documentaire C8 · TP EEB · CCP 2 Courants faibles et solutions",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C8 – Installer des équipements d'automatisme et de confort » (sur le PC), le cours écrit et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "Le métier, la compétence C8 et ses limites", duree: "25 min", competences: "C8 · critères 4, 5 et 6",
      intro: "Les familles d'équipements de C8, les frontières avec les autres compétences et les règles du travail en site occupé.",
      source: "Présentation, partie 01 (diapositives 5 à 9)",
      ex: [
        { type: "match", q: "Associe chaque famille d'équipements de C8 à un exemple.", pairs: [
          ["Éclairage", "Variation, détection, sonde de luminosité"],
          ["Automatismes", "Radio par autoapprentissage (Tyxia au plateau)"],
          ["Ouvrants", "Volets, stores, portails, portes de garage"],
          ["Ventilation", "VMC simple flux, hygro, double flux"],
          ["Maintien à domicile", "Téléassistance, éclairage de nuit, commandes adaptées"]] },
        { type: "match", q: "Frontières : à quelle compétence appartient chaque travail ?", pairs: [
          ["Mise en service du logement, fil pilote", "C2"],
          ["Alarme et contrôle d'accès", "C7"],
          ["Gestion de l'énergie, KNX, GTB", "C9"]] },
        { type: "pick", q: "Site occupé : coche les bonnes pratiques.", items: [
          ["Protéger les sols et le mobilier", true],
          ["Prévenir les occupants avant chaque coupure", true],
          ["Laisser le chantier propre chaque soir", true],
          ["Couper le courant sans prévenir pour aller plus vite", false],
          ["Remettre sous tension sur ordre du chargé d'essais", true]] },
        { type: "qcm", q: "Après la modification, un conducteur ne sert plus. Que fais-tu ?", options: ["Je le coupe au ras de la boîte", "Je l'isole, je le repère « réserve » et je le signale", "Je le laisse nu dans la boîte", "Je le relie à la terre"], answer: 1 },
        { type: "tf", q: "Ce que le jury observe en C8 : vrai ou faux ?", items: [
          ["Le client doit savoir utiliser seul les automatismes après la présentation.", true],
          ["Le compte rendu peut se limiter aux travaux prévus, sans les modifications.", false],
          ["La mise en service par autoapprentissage est évaluée.", true],
          ["Avant d'ouvrir une boîte : séparer, condamner, vérifier l'absence de tension au V.A.T.", true]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "Éclairage : grandeurs, variation, détection", duree: "35 min", competences: "C8 · critère 3",
      intro: "Lumen, lux, kelvin et IRC, la compatibilité lampe / variateur et les trois réglages d'un détecteur de présence.",
      source: "Présentation, partie 02 (diapositives 10 à 13)",
      ex: [
        { type: "match", q: "Associe chaque grandeur à son unité.", pairs: [
          ["Flux lumineux", "Lumen (lm)"],
          ["Éclairement", "Lux (lx)"],
          ["Température de couleur", "Kelvin (K)"],
          ["Rendu des couleurs", "IRC (Ra)"],
          ["Efficacité", "lm/W"]] },
        { type: "qcm", q: "Que mesure un luxmètre ?", options: ["Le flux de la lampe", "L'éclairement, en lux", "La température de couleur", "La puissance en watts"], answer: 1 },
        { type: "match", q: "Température de couleur :", pairs: [
          ["2 700 K", "Lumière chaude"],
          ["4 000 K", "Lumière neutre"],
          ["6 500 K", "Lumière froide"]] },
        { type: "num", q: "IRC minimal conseillé en logement et en bureau ?", answer: 80, tol: 0, unit: "Ra" },
        { type: "pick", q: "Des spots LED scintillent même à pleine puissance. Coche ce que tu vérifies.", items: [
          ["Les lampes sont marquées dimmables", true],
          ["Le couple lampe / variateur est dans la liste du fabricant", true],
          ["La puissance totale est dans la plage du variateur", true],
          ["La couleur des fils de la boîte", false],
          ["Le réglage du minimum du variateur", true]] },
        { type: "match", q: "Détecteurs : associe chaque technologie à son principe.", pairs: [
          ["Infrarouge passif", "Chaleur en mouvement"],
          ["Hyperfréquence", "Traverse les cloisons légères"],
          ["Double technologie", "Moins de fausses détections"]] },
        { type: "match", q: "Les trois réglages d'un détecteur de présence :", pairs: [
          ["Zone", "Orientation, masques"],
          ["Durée", "Temporisation"],
          ["Seuil", "Luminosité en lux : n'allumer que si la lumière naturelle manque"]] },
        { type: "qcm", q: "Après avoir posé un variateur, la lampe scintille en bas de plage. Que règles-tu ?", options: ["Rien, c'est normal", "Le minimum du variateur (potentiomètre), puis essai de 0 à 100 %", "La température de couleur", "Le disjoncteur"], answer: 1 }
      ]
    },
    {
      id: "m3", num: 3, titre: "Automatismes radio par autoapprentissage", duree: "35 min", competences: "C8 · critères 3 et 6",
      intro: "Raccorder un récepteur radio encastré, associer et effacer un émetteur, combiner plusieurs commandes et mesurer l'isolement sans détruire l'électronique.",
      source: "Présentation, partie 03 (diapositives 14 à 17)",
      ex: [
        { type: "match", q: "Raccorder un récepteur radio : à quoi va chaque borne ?", pairs: [
          ["L", "Phase du circuit"],
          ["N", "Neutre du circuit"],
          ["Sortie", "Retour vers la lampe"]] },
        { type: "qcm", q: "Pourquoi le récepteur radio a-t-il besoin du neutre ?", options: ["Pour la terre", "Son électronique doit être alimentée en permanence pour écouter les ordres radio", "Pour faire varier la lampe", "Ce n'est pas nécessaire"], answer: 1 },
        { type: "order", q: "Associer un émetteur : remets les étapes dans l'ordre.", items: ["Mettre le récepteur en mode apprentissage", "Appuyer sur l'émetteur selon la notice", "Attendre la confirmation (voyant, clignotement)", "Essayer : marche, arrêt, variation"] },
        { type: "tf", q: "Combiner émetteurs et récepteurs : vrai ou faux ?", items: [
          ["Un émetteur peut être associé à plusieurs récepteurs pour une extinction générale.", true],
          ["Un récepteur n'accepte qu'un seul émetteur.", false],
          ["Sur un récepteur à variation : appui bref = marche / arrêt, appui maintenu = variation.", true],
          ["On efface l'association avant de réaffecter un émetteur.", true]] },
        { type: "pick", q: "La portée radio est fortement atténuée par :", items: [
          ["Le métal (tableau, ossature)", true],
          ["Le béton armé", true],
          ["Une cloison en plaque de plâtre", false],
          ["Une porte en bois", false]] },
        { type: "qcm", q: "Comment mesures-tu l'isolement d'un circuit équipé de récepteurs radio ?", options: ["Tel quel, sous 500 V entre phase et neutre", "Modules déconnectés (ou L et N reliés), entre (L+N) et PE sous 500 V : ≥ 1 MΩ", "On ne mesure jamais l'isolement", "Sous 1 000 V pour être sûr"], answer: 1,
          explain: "Sinon la tension d'essai détruit l'électronique." },
        { type: "qcm", q: "Comment éteindre trois lampes avec un seul émetteur ?", options: ["En câblant les trois lampes en série", "En associant le même émetteur aux trois récepteurs", "Avec trois piles", "C'est impossible en radio"], answer: 1 },
        { type: "qcm", q: "L'émetteur fonctionne près du récepteur mais pas une fois fixé derrière le tableau métallique. Que fais-tu ?", options: ["Je change la pile", "J'essaie un autre emplacement avant de fixer : le métal atténue la radio", "Je remplace le récepteur", "Je le fixe quand même"], answer: 1 }
      ]
    },
    {
      id: "m4", num: 4, titre: "Volets, stores et portails motorisés", duree: "30 min", competences: "C8 · critères 3 et 6",
      intro: "Raccorder un moteur tubulaire, régler les fins de course et connaître les sécurités d'un portail motorisé.",
      source: "Présentation, partie 04 (diapositives 18 à 21)",
      ex: [
        { type: "match", q: "Moteur tubulaire de volet : associe chaque conducteur à sa fonction.", pairs: [
          ["Phase montée", "Sens 1"],
          ["Phase descente", "Sens 2"],
          ["Neutre", "Commun"],
          ["PE", "Terre du moteur"]] },
        { type: "qcm", q: "Pourquoi l'inter de volet est-il à verrouillage ?", options: ["Pour économiser l'énergie", "Pour que montée et descente ne soient jamais alimentées ensemble : sinon le moteur peut être détruit", "Pour faire varier la vitesse", "Pour l'esthétique"], answer: 1 },
        { type: "tf", q: "Fins de course : vrai ou faux ?", items: [
          ["Selon le moteur : apprentissage électronique ou réglage par vis, d'après la notice.", true],
          ["En haut, on force la lame finale contre la butée pour bien fermer.", false],
          ["En bas : volet fermé, lames tassées sans excès.", true]] },
        { type: "match", q: "Portail motorisé : associe chaque sécurité à son rôle.", pairs: [
          ["Cellules photoélectriques", "Arrêt ou inversion devant un obstacle"],
          ["Bord sensible", "Détection sur le bord d'attaque"],
          ["Feu clignotant", "Signaler avant et pendant le mouvement"],
          ["Déverrouillage manuel", "Ouvrir en cas de panne"]] },
        { type: "qcm", q: "Le client veut supprimer les cellules qui « gênent ». Que réponds-tu ?", options: ["D'accord, c'est son portail", "Non : ce sont des sécurités contre l'écrasement et l'installateur reste responsable", "Je les débranche seulement la journée", "Je les remplace par un interrupteur"], answer: 1 },
        { type: "qcm", q: "Store banne : à quoi sert le capteur de vent ?", options: ["À ouvrir le store quand il fait beau", "À remonter automatiquement le store pour éviter la casse", "À mesurer la température", "À rien en logement"], answer: 1 }
      ]
    },
    {
      id: "m5", num: 5, titre: "VMC, chauffage et maintien à domicile", duree: "40 min", competences: "C8 · critère 3",
      intro: "Le balayage de l'air et les types de VMC, l'installation et le raccordement, les ordres du fil pilote, le thermostat connecté et le maintien à domicile.",
      source: "Présentation, parties 05 et 06 (diapositives 22 à 29)",
      ex: [
        { type: "match", q: "VMC : par où passe l'air ?", pairs: [
          ["Entrée d'air neuf", "Pièces principales (séjour, chambres)"],
          ["Extraction", "Pièces humides (cuisine, salle d'eau, WC)"]] },
        { type: "match", q: "Associe chaque type de VMC à son principe.", pairs: [
          ["Simple flux autoréglable", "Débits constants"],
          ["Hygro A", "Bouches pilotées par l'humidité, entrées d'air fixes"],
          ["Hygro B", "Bouches et entrées d'air hygroréglables"],
          ["Double flux", "Insufflation + extraction + échangeur"]] },
        { type: "pick", q: "Installer une VMC : coche les bonnes pratiques.", items: [
          ["Caisson accessible, sur suspentes ou silent-blocs", true],
          ["Gaines tendues, sans écrasement, raccords étanches", true],
          ["Rejet de l'air dans les combles", false],
          ["Gaines isolées en volume non chauffé", true],
          ["Un interrupteur pour couper la VMC la nuit", false]] },
        { type: "qcm", q: "Comment alimente-t-on une VMC ?", options: ["Sur le circuit éclairage avec un interrupteur", "Circuit dédié, disjoncteur 2 A ou 6 A selon la notice, sans interrupteur", "Sur une prise de courant", "Sur le circuit du chauffe-eau"], answer: 1,
          explain: "La ventilation doit être permanente, 24 h/24." },
        { type: "match", q: "Fil pilote : associe chaque ordre à son signal (mesuré par rapport au neutre).", pairs: [
          ["Confort", "Aucun signal (0 V)"],
          ["Éco", "Alternance complète (230 V)"],
          ["Hors-gel", "Demi-alternance négative"],
          ["Arrêt (délestage)", "Demi-alternance positive"]] },
        { type: "tf", q: "Chauffage : vrai ou faux ?", items: [
          ["Le fil pilote porte du 230 V : on consigne avant d'intervenir.", true],
          ["On peut relier le fil pilote à la terre s'il ne sert pas.", false],
          ["Le délestage coupe momentanément le chauffage pour ne pas dépasser la puissance souscrite.", true]] },
        { type: "match", q: "Maintien à domicile : associe chaque équipement à son usage.", pairs: [
          ["Téléassistance", "Centrale + médaillon d'appel, secours sur batterie"],
          ["Éclairage de nuit", "Détecteur en couloir et sanitaires, seuil bas"],
          ["Commandes adaptées", "Radio, grosses touches, commande vocale"],
          ["Ouvrants automatiques", "Force réduite, temps de manœuvre long"]] },
        { type: "qcm", q: "Thermostat connecté : comment se fait le couplage ?", options: ["Par le fil pilote seul", "Raccordement L, N + sortie relais ou fil pilote selon la notice, puis couplage au Wi-Fi par l'application", "Par un câble RJ45 obligatoire", "Aucun raccordement"], answer: 1 },
        { type: "qcm", q: "Pourquoi les entrées d'air ne doivent-elles jamais être obturées ?", options: ["Pour l'esthétique", "Sans entrée d'air, la VMC ne balaie plus le logement : humidité, air vicié", "Pour réduire le bruit", "Parce que la notice le dit, sans raison"], answer: 1 }
      ]
    },
    {
      id: "m6", num: 6, titre: "Étude de cas : chez Mme L.", duree: "60 min", competences: "C8 · tous critères",
      intro: "Mme L., 78 ans, vit seule dans un T3. Elle souhaite des commandes d'éclairage sans fil près de son fauteuil, un éclairage automatique de nuit vers les toilettes, le volet de sa chambre motorisé et une VMC qui ne fasse plus de bruit. Ton responsable te confie l'intervention.",
      source: "Présentation, partie 07 (diapositives 30 à 32) et étude de cas du cours",
      ex: [
        { type: "match", q: "Exercice 1 du cours : quel équipement pour chaque besoin de Mme L. ?", pairs: [
          ["Commandes d'éclairage près du fauteuil", "Récepteur radio + émetteurs à pile"],
          ["Éclairage de nuit vers les toilettes", "Détecteur de présence, seuil bas"],
          ["Volet de la chambre", "Moteur tubulaire + inter à verrouillage ou émetteur radio"],
          ["VMC bruyante", "Vérifier caisson, gaines, bouches et débits"]] },
        { type: "qcm", q: "Exercice 3 : quels réglages pour le détecteur du couloir la nuit ?", options: ["Seuil élevé, durée 10 s", "Zone orientée vers le passage, durée suffisante pour aller et revenir, seuil bas (n'allume que dans le noir)", "Pas de détecteur, un interrupteur suffit", "Détection permanente, sans seuil"], answer: 1 },
        { type: "pick", q: "Exercice 5 : la VMC est bruyante. Coche les causes possibles à vérifier.", items: [
          ["Caisson fixé sans silent-blocs, qui vibre", true],
          ["Gaine écrasée ou trop longue", true],
          ["Bouches inadaptées ou encrassées", true],
          ["Débit trop élevé (grand débit bloqué)", true],
          ["Couleur de l'entrée d'air", false]] },
        { type: "order", q: "Présenter à Mme L. en 4 temps : remets dans l'ordre.", items: ["Expliquer simplement, sans jargon", "Montrer chaque commande", "Lui faire faire", "Remettre les notices et une notice simplifiée"] },
        { type: "pick", q: "Mme L. est malentendante. Coche les bonnes attitudes.", items: [
          ["Se placer face à elle", true],
          ["Faire des phrases courtes et démontrer", true],
          ["Laisser des consignes écrites en gros caractères", true],
          ["Parler plus vite pour finir à l'heure", false]] },
        { type: "match", q: "Le compte rendu au responsable :", pairs: [
          ["Fait", "Récepteurs posés, émetteurs associés"],
          ["Modifié", "Interrupteurs déposés, conducteurs en réserve"],
          ["Réserves", "Portée, encombrement, piles"],
          ["Preuves", "Isolement, continuité PE, essais"]] },
        { type: "open", q: "Exercice 6 : rédige en 4 ou 5 phrases ce que tu dis à Mme L. pour qu'elle utilise seule son éclairage sans fil et son volet.", hint: "Phrases courtes ; quel bouton fait quoi ; comment changer une pile ; qui appeler pour une nouvelle association ; ce que tu lui laisses par écrit." },
        { type: "task", phone: true, q: "Associer un émetteur et le prouver avec ton téléphone", steps: [
          "Au plateau (Espace 1, Tyxia), sur ordre, associe un émetteur à un récepteur selon la notice.",
          "Filme en 20 secondes l'essai : marche, arrêt, puis variation si le récepteur le permet.",
          "Photographie le schéma de recollement mis à jour (récepteurs, émetteurs, conducteurs en réserve).",
          "Envoie la vidéo et la photo à ton formateur (ou montre-les en fin de séance)."], note: "Récepteur et émetteurs associés, résultat de l'essai" }
      ]
    }
  ]
};
