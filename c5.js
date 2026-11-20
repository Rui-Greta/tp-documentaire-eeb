/* TP documentaire C5 – TP EEB – Installer les réseaux d'énergie et les équipements courants forts dans les bâtiments tertiaires
   Source : cours expert C5 (version présentiel) ; renvois à la présentation du cours expert C5 (10 parties).
   Types : qcm, tf, match, order, num, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c5-v1",
  num: 5, code: "C5", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer les réseaux d'énergie et les équipements courants forts dans les bâtiments tertiaires",
  sousTitre: "TP documentaire C5 · TP EEB · CCP 1 Courants forts",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C5 – Installer les réseaux d'énergie dans les bâtiments tertiaires » (sur le PC), le cours écrit, le guide NF C 15-100, une calculatrice et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "Le tertiaire, la compétence C5 et le dossier", duree: "30 min", competences: "C5 · critères 1, 3 et 7",
      intro: "Ce qui change entre logement et tertiaire, les critères du jury, ton rôle à la mise en service, l'architecture de distribution et la maquette BIM.",
      source: "Présentation, parties 01 et 02 (diapositives 5 à 14)",
      ex: [
        { type: "match", q: "Logement ou tertiaire : associe chaque critère à ce qu'on trouve en tertiaire.", pairs: [
          ["Alimentation", "Triphasé 400 V + N"],
          ["Distribution", "TGBT → TD → coffrets de zone"],
          ["Pose", "Chemins de câbles, goulottes, faux-plafond"],
          ["Sécurité", "BAES, coupure d'urgence, SSI en ERP"],
          ["Mise en service", "Assistée par l'électricien"]] },
        { type: "tf", q: "Ton rôle en C5 : vrai ou faux ?", items: [
          ["L'électricien C5 travaille en B1V sous la responsabilité d'un B2V Essai.", true],
          ["À la mise en service, c'est l'électricien qui décide de remettre sous tension.", false],
          ["L'électricien réalise les mesures confiées, annonce les résultats et les note.", true],
          ["Au TGBT : écran facial, gants isolants et aucune initiative.", true]] },
        { type: "pick", q: "Parmi ces critères du jury, coche les trois qui concernent l'assistance au responsable.", items: [
          ["Autocontrôles sous la responsabilité de l'encadrant", true],
          ["Mise en service sous la responsabilité de l'encadrant", true],
          ["Informations fournies à l'encadrant pour la mise en service", true],
          ["Supports restitués après percement", false],
          ["Chantier propre, déchets triés", false]] },
        { type: "order", q: "Remets dans l'ordre les niveaux de distribution, de l'arrivée au local.", items: ["Poste HTA/BT ou branchement", "TGBT", "Tableau divisionnaire (TD)", "Coffret de zone", "Circuit terminal"] },
        { type: "match", q: "Dans le dossier d'exécution, où lis-tu l'information ?", pairs: [
          ["Calibres, réglages, pouvoirs de coupure", "Unifilaire TGBT / TD"],
          ["Position des luminaires, prises et BAES", "Plan d'implantation"],
          ["Place disponible entre dalle et faux-plafond", "Coupe du faux-plafond"],
          ["Repère, type, section, origine, destination, longueur", "Carnet de câbles"]] },
        { type: "qcm", q: "Avec la maquette BIM, l'électricien C5 :", options: ["modifie le tracé lui-même", "consulte, signale par une RFI et documente", "ne l'utilise jamais", "valide les plans du bureau d'études"], answer: 1 },
        { type: "qcm", q: "Le chemin de câbles prévu croise une gaine de ventilation non représentée sur la maquette. Que fais-tu ?", options: ["Je décale sans rien dire", "Je rédige une RFI avec photo et je préviens le responsable", "J'arrête le chantier", "Je demande au plombier de déplacer la gaine"], answer: 1 },
        { type: "match", q: "Hors de C5 : à quelle compétence appartient chaque travail ?", pairs: [
          ["Tableau d'un appartement neuf", "C1 / C2"],
          ["Colonne électrique d'un immeuble d'habitation", "C3"],
          ["Mise en sécurité d'un logement existant", "C4"],
          ["Programmation de la GTB", "C8"]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "Les régimes de neutre et la protection des personnes", duree: "35 min", competences: "C5 · critères 3 et 7",
      intro: "TT, TN-S, TN-C et IT : qui coupe au premier défaut, les règles du neutre et du PE, le CPI et le différentiel 30 mA.",
      source: "Présentation, partie 03 (diapositives 15 à 18)",
      ex: [
        { type: "match", q: "Au premier défaut d'isolement, qui protège les personnes ?", pairs: [
          ["TT", "Le différentiel"],
          ["TN-S", "Le disjoncteur (court-circuit phase-PE)"],
          ["TN-C", "Le disjoncteur, sans différentiel sur le PEN"],
          ["IT", "Le CPI signale ; coupure au 2e défaut"]] },
        { type: "num", q: "Schéma TT, différentiel de tête 500 mA. Valeur maximale de RA (RA × IΔn ≤ 50 V) ?", answer: 100, tol: 0, unit: "Ω",
          explain: "RA ≤ 50 / 0,5 = 100 Ω." },
        { type: "num", q: "Même calcul avec un différentiel de tête de 300 mA (arrondi à l'unité) ?", answer: 167, tol: 1, unit: "Ω",
          explain: "RA ≤ 50 / 0,3 ≈ 167 Ω." },
        { type: "tf", q: "Neutre et PE : vrai ou faux ?", items: [
          ["En TN-S, on peut ponter N et PE en aval du tableau.", false],
          ["On ne place jamais de différentiel sur un conducteur PEN.", true],
          ["Le PEN est admis en canalisation fixe à partir de 10 mm² cuivre.", true],
          ["En IT, le premier défaut provoque la coupure immédiate.", false]] },
        { type: "qcm", q: "Pourquoi un différentiel ne fonctionne-t-il pas sur un PEN ?", options: ["Il est trop lent", "L'aller et le retour du courant de défaut passent tous les deux dans le tore", "Le PEN est trop gros", "Il déclencherait en permanence"], answer: 1 },
        { type: "qcm", q: "En TN-S ou en IT, les socles de prises ≤ 32 A :", options: ["n'ont pas besoin de différentiel", "gardent un différentiel 30 mA", "ont un différentiel 300 mA", "sont interdits"], answer: 1 },
        { type: "qcm", q: "En schéma IT, après l'alarme du CPI, que faut-il faire ?", options: ["Rien, l'installation continue", "Rechercher et éliminer le défaut rapidement", "Mettre le neutre à la terre", "Shunter le CPI"], answer: 1,
          explain: "Un second défaut sur une autre phase provoquerait la coupure." }
      ]
    },
    {
      id: "m3", num: 3, titre: "Cheminements et pose en tertiaire", duree: "40 min", competences: "C5 · critères 1, 2 et 3",
      intro: "Fixations selon le support, chemins de câbles, taux de remplissage, séparation des courants forts et faibles, coupe-feu et couleurs des conducteurs. Prends ta calculatrice.",
      source: "Présentation, partie 04 (diapositives 19 à 24)",
      ex: [
        { type: "match", q: "Quelle fixation pour quel support ?", pairs: [
          ["Dalle béton", "Tige filetée, cheville métallique"],
          ["Plaque de plâtre", "Cheville pour plaque ou rail"],
          ["Brique creuse", "Cheville à frapper ou chimique"],
          ["Ossature métallique", "Serre-poutre, boulons"]] },
        { type: "order", q: "Poser un chemin de câbles : remets les étapes dans l'ordre.", items: ["Tracé du plan, report au laser", "Supports à l'entraxe de la notice (≈ 1,50 m)", "Éclisses, coudes et T du fabricant", "Continuité de masse et liaison équipotentielle", "Contrôle de l'alignement", "Repérage CF / cf, origine → destination"] },
        { type: "num", q: "Section extérieure d'un câble de diamètre 10 mm (S = π × (Ø / 2)², arrondie au dixième) ?", answer: 78.5, tol: 0.2, unit: "mm²" },
        { type: "num", q: "Sur le chemin : 6 câbles 3G2,5 (Ø 10), 3 câbles 3G1,5 (Ø 9) et 1 câble 5G6 (Ø 16). Section totale occupée (arrondie à l'unité) ?", answer: 863, tol: 4, unit: "mm²",
          explain: "6 × 78,5 + 3 × 63,6 + 201,1 ≈ 863 mm²." },
        { type: "qcm", q: "Chemin 100 × 50 : section utile 5 000 mm², remplissage maximal 40 %. Les 863 mm² de câbles passent-ils ?", options: ["Non : 863 / 0,4 = 2 158 mm² dépasse les 2 000 mm²", "Oui : 863 mm² ≤ 0,4 × 5 000 = 2 000 mm² (remplissage ≈ 17 %)", "Non : il faut toujours un chemin de 100 × 60", "On ne peut pas savoir"], answer: 1,
          explain: "On compare la section occupée (863 mm²) aux 40 % de la section utile (2 000 mm²). Autre façon : section utile nécessaire = 863 / 0,4 ≈ 2 158 mm², à comparer aux 5 000 mm² du chemin. Le 100 × 50 convient ; le 100 × 60 laisse plus de réserve." },
        { type: "tf", q: "Courants forts, courants faibles et feu : vrai ou faux ?", items: [
          ["Un câble RJ45 peut passer dans le même compartiment qu'un câble de prises.", false],
          ["En parallèle, sans séparateur, on garde 20 cm entre câbles non blindés (5 cm avec séparateur acier).", true],
          ["En faux-plafond, on peut poser les câbles sur les dalles.", false],
          ["Après une traversée de plancher, on restitue le degré coupe-feu (mastic, manchon).", true]] },
        { type: "match", q: "Couleurs des conducteurs d'un câble triphasé :", pairs: [
          ["L1", "Marron"],
          ["L2", "Noir"],
          ["L3", "Gris"],
          ["N", "Bleu clair"],
          ["PE", "Vert / jaune"]] },
        { type: "qcm", q: "Un moteur triphasé sans neutre s'alimente en :", options: ["3G", "4G (L1, L2, L3, PE)", "5G", "2 × 3G"], answer: 1 }
      ]
    },
    {
      id: "m4", num: 4, titre: "Le tableau divisionnaire et l'appareillage", duree: "40 min", competences: "C5 · critères 1 et 3",
      intro: "La composition du TD, le degré IP2X, les courbes de déclenchement, l'équilibrage des phases, le pouvoir de coupure, les contacteurs et les prises tertiaires.",
      source: "Présentation, partie 05 (diapositives 25 à 29)",
      ex: [
        { type: "match", q: "Associe chaque élément du TD à son rôle.", pairs: [
          ["Appareil de tête 4P", "Coupure générale du TD"],
          ["Répartiteur, peignes tri", "Distribuent L1, L2, L3 et N"],
          ["ID 30 mA", "Prises ≤ 32 A ; personnes en TT"],
          ["Contacteur et horloge", "Commande de l'éclairage, de la ventilation"],
          ["Borniers N et PE", "Un conducteur par borne, repéré"]] },
        { type: "qcm", q: "Degré de protection minimal d'un tableau accessible à des personnes non qualifiées :", options: ["IP20 seulement à l'arrière", "IP2X (IPXXB), plastrons en place", "IP65", "Aucun"], answer: 1 },
        { type: "match", q: "Courbes de déclenchement magnétique :", pairs: [
          ["Courbe B (3 à 5 In)", "Grandes longueurs de câble"],
          ["Courbe C (5 à 10 In)", "Usage général"],
          ["Courbe D (10 à 20 In)", "Forts appels de courant"]] },
        { type: "num", q: "Courants mesurés : L1 = 20 A, L2 = 16 A, L3 = 15 A. Déséquilibre (Imax − Imoy) / Imoy en % (arrondi à l'unité) ?", answer: 18, tol: 1, unit: "%",
          explain: "Imoy = 17 A ; (20 − 17) / 17 ≈ 17,6 % : supérieur à 10 %, à corriger." },
        { type: "num", q: "TD-Z1 du Forum. Répartition proposée : L1 = 4 430 W, L2 = 4 900 W, L3 = 4 800 W. Déséquilibre en % (arrondi à l'unité) ?", answer: 4, tol: 0.5, unit: "%",
          explain: "Pmoy = 14 130 / 3 = 4 710 W ; (4 900 − 4 710) / 4 710 ≈ 4 % : conforme (≤ 10 %)." },
        { type: "qcm", q: "Le pouvoir de coupure d'un disjoncteur doit être :", options: ["égal à son calibre", "au moins égal au courant de court-circuit présumé à son emplacement (ou filiation justifiée)", "inférieur à Icc", "de 6 kA dans tous les cas"], answer: 1 },
        { type: "tf", q: "Commande et prises : vrai ou faux ?", items: [
          ["L'horloge commande la bobine du contacteur, pas la puissance.", true],
          ["Un contacteur de catégorie AC-3 est prévu pour les moteurs.", true],
          ["Sur une prise CEE 5 broches, inverser neutre et phase est sans conséquence.", false]],
          explain: "Une inversion N / phase met les appareils monophasés sous 400 V." },
        { type: "match", q: "Quelle prise pour quel usage ?", pairs: [
          ["Poste de travail", "2P+T 16 A"],
          ["Open space", "Couplée 2P+T + RJ45"],
          ["Local technique", "CEE bleue 230 V"],
          ["Machine triphasée sans neutre", "CEE rouge 3P+T"]] }
      ]
    },
    {
      id: "m5", num: 5, titre: "Moteurs, éclairage et sécurité des personnes", duree: "45 min", competences: "C5 · critères 1, 3 et 7",
      intro: "La plaque du moteur, le démarrage direct, l'étoile-triangle et le variateur, la commande de l'éclairage, les BAES, l'arrêt d'urgence et le déclencheur manuel.",
      source: "Présentation, parties 06 et 07 (diapositives 30 à 39)",
      ex: [
        { type: "qcm", q: "Plaque 230 V Δ / 400 V Y, réseau 400 V entre phases : quel couplage ?", options: ["Triangle", "Étoile", "Étoile-triangle", "Indifférent"], answer: 1,
          explain: "Plus grande tension de la plaque = étoile." },
        { type: "num", q: "Moteur de ventilation du Forum : 1,5 kW · 230 V Δ / 400 V Y · 6,1 A / 3,5 A. Réglage du thermique sur réseau 400 V ?", answer: 3.5, tol: 0, unit: "A" },
        { type: "qcm", q: "Peut-on démarrer ce moteur (230 Δ / 400 Y) en étoile-triangle sur le réseau 400 V ?", options: ["Oui, toujours", "Non : il faut une plaque 400 V Δ / 690 V Y", "Oui, avec un variateur", "Oui, si le moteur fait plus de 1 kW"], answer: 1,
          explain: "En fin de démarrage, le moteur passe en triangle : son enroulement doit supporter 400 V en triangle." },
        { type: "order", q: "Démarrage direct : remets le fonctionnement dans l'ordre.", items: ["Appui sur S2 (marche) : la bobine KM1 est alimentée", "KM1 13-14 se ferme : auto-maintien", "Le voyant H1 signale la marche", "Appui sur S1 (à ouverture) : la bobine est coupée"] },
        { type: "tf", q: "Variateur de vitesse : vrai ou faux ?", items: [
          ["Le câble moteur est blindé, blindage raccordé à 360° aux deux extrémités.", true],
          ["Juste après la coupure, on peut intervenir sans attendre.", false],
          ["Inverser deux phases inverse le sens de rotation du moteur.", true]],
          explain: "Le bus continu reste chargé : attendre le délai de la notice et vérifier l'absence de tension." },
        { type: "match", q: "Quelle commande d'éclairage pour quel lieu ?", pairs: [
          ["Open space, vitrines", "Horloge + contacteur"],
          ["Éclairage extérieur, enseignes", "Horloge astronomique"],
          ["Sanitaires, circulations", "Détecteur de présence"],
          ["Bureaux modulables", "DALI (adresses, groupes, scènes)"]] },
        { type: "qcm", q: "Où raccorde-t-on l'alimentation d'un BAES ?", options: ["Sur le circuit de prises du local", "Sur le circuit d'éclairage normal du local, en amont de sa commande", "En aval du contacteur d'éclairage", "Sur un départ séparé du TD"], answer: 1,
          explain: "Le BAES surveille l'éclairage qu'il secourt : il s'allume si ce circuit disparaît." },
        { type: "match", q: "BAES d'évacuation : associe chaque repère à sa valeur.", pairs: [
          ["Flux minimal", "45 lm"],
          ["Autonomie", "1 h"],
          ["Espacement maximal dans un dégagement", "15 m"]] },
        { type: "match", q: "Couper en urgence et donner l'alarme :", pairs: [
          ["AU à manque de tension (bobine MN)", "Un fil coupé fait aussi déclencher : sécurité positive"],
          ["AU à émission de tension (bobine MX)", "Un fil coupé empêche l'arrêt : circuit à surveiller"],
          ["Déclencheur manuel", "Organe du SSI : donne l'alarme"]] }
      ]
    },
    {
      id: "m6", num: 6, titre: "Mise en service et étude de cas « Le Forum »", duree: "35 min", competences: "C5 · tous critères",
      intro: "Immeuble de bureaux « Le Forum », schéma TN-S. À l'étage, le TD-Z1 (tête 4P 40 A, câble 5G16 depuis le TGBT) alimente un open space de 200 m². Le responsable B2V Essai te fait réaliser les mesures, puis tu lui rends compte.",
      source: "Présentation, parties 08 et 09 (diapositives 40 à 49)",
      ex: [
        { type: "match", q: "Mesures confiées : quelle valeur attendue ?", pairs: [
          ["Continuité des PE", "≤ 2 Ω"],
          ["Isolement sous 500 V", "≥ 1 MΩ"],
          ["Différentiel 30 mA à IΔn", "Déclenchement ≤ 300 ms"],
          ["Déséquilibre des phases", "≤ 10 %"]] },
        { type: "order", q: "La mise en service, pas à pas : remets dans l'ordre.", items: ["Annoncer la remise sous tension, sur autorisation", "Refermer la tête puis les départs un par un", "Mesurer tensions, ordre des phases, prises", "Essayer différentiels, contacteur, horloge, BAES, moteurs", "Contrôler l'équilibrage à la pince", "Remettre la fiche d'autocontrôle au responsable"] },
        { type: "pick", q: "Résultats relevés au Forum : coche les mesures NON conformes.", items: [
          ["Continuité PE des prises P1 : 0,4 Ω", false],
          ["Continuité PE des prises P4 : 2,6 Ω", true],
          ["Isolement de la salle de réunion R2 : 0,6 MΩ", true],
          ["Courants : L1 = 22 A · L2 = 15 A · L3 = 14 A", true],
          ["Différentiel des prises à IΔn : déclenchement en 25 ms", false],
          ["Différentiel de la salle de réunion à ½ IΔn : déclenchement", true]] },
        { type: "num", q: "Courants L1 = 22 A, L2 = 15 A, L3 = 14 A : déséquilibre en % (arrondi à l'unité) ?", answer: 29, tol: 1, unit: "%",
          explain: "Imoy = 17 A ; (22 − 17) / 17 ≈ 29 % : déplacer un ou plusieurs circuits de L1 vers L3." },
        { type: "match", q: "Dépannage : associe le symptôme à sa cause probable.", pairs: [
          ["KM1 ne colle pas", "Q2 ouvert, S1 défectueux ou bobine coupée"],
          ["KM1 retombe quand on relâche S2", "Auto-maintien 13-14 absent"],
          ["L'open space ne s'allume pas", "Horloge, contacteur ou départ ouvert"],
          ["Le différentiel déclenche au réarmement", "Défaut d'isolement ou pontage N-PE"]] },
        { type: "qcm", q: "Le différentiel de la salle de réunion déclenche à ½ IΔn. Que dis-tu au responsable ?", options: ["« Conforme, il est très sensible »", "« Non conforme : il ne doit pas déclencher à ½ IΔn ; je recherche une fuite ou un appareil défaillant, ou on le remplace »", "« Je le shunte pour finir les essais »", "Rien, ce n'est pas mon rôle"], answer: 1 },
        { type: "order", q: "Rendre compte au responsable : remets les 5 points dans l'ordre.", items: ["Travaux réalisés", "Mesures, avec unités", "Écarts et RFI", "Anomalies et décisions attendues", "État du chantier : propre, tri, matériel restitué"] },
        { type: "task", phone: true, q: "Compte rendu oral avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Enregistre en 3 minutes maximum ton compte rendu au responsable du Forum, en suivant les 5 points.",
          "Annonce au moins deux mesures non conformes, avec leur valeur et leur unité, et ce que tu proposes.",
          "Ajoute l'écart : chemin de câbles décalé de 40 cm à cause d'une gaine de ventilation absente de la maquette (RFI préparée).",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de ton enregistrement et remarques" },
        { type: "open", q: "Espace 3 : le BAES est alimenté par le câble C7. Un collègue propose de le brancher sur le câble des prises C6 « parce que c'est plus court ». Explique-lui en 3 ou 4 phrases pourquoi c'est non.", hint: "Ce que surveille le BAES ; ce qui se passerait si l'éclairage tombait en panne mais pas les prises ; la règle : en amont de la commande de l'éclairage." }
      ]
    }
  ]
};
