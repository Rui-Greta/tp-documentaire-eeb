/* TP documentaire C2 – TP EEB – Procéder aux autocontrôles et à la mise en service de l'installation électrique d'un logement
   Source : cours expert C2 (version présentiel, v1 du 7 novembre 2026) ; renvois à la présentation « Autocontrôles et mise en service » (7 modules).
   Types : qcm, tf, match, order, num, gen, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c2-v1",
  num: 2, code: "C2", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Procéder aux autocontrôles et à la mise en service d'un logement",
  sousTitre: "TP documentaire C2 · TP EEB · CCP 1 Courants forts",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C2 – Autocontrôles et mise en service » (sur le PC), le cours écrit, les guides NF C 15-100 et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "La compétence C2 et la mesure en sécurité", duree: "30 min", competences: "C2 · critères 1 et 3",
      intro: "Ce que couvre C2, l'habilitation, les mesures et leurs appareils, les catégories de mesure et le V.A.T.",
      source: "Présentation, module 01 (diapositives 4 à 8)",
      ex: [
        { type: "match", q: "Hors de C2 : à quelle compétence appartient chaque tâche ?", pairs: [
          ["Poser et raccorder l'installation du logement", "C1"],
          ["Éclairage et colonne des parties communes", "C3"],
          ["Remettre en sécurité une installation ancienne", "C4"],
          ["Mettre en service l'installation d'un bureau", "C5"]] },
        { type: "match", q: "Quelle habilitation pour chaque situation ?", pairs: [
          ["Autocontrôles sous la responsabilité d'un chargé d'essais", "B1V sous B2V Essai"],
          ["Autocontrôles et mise en service en autonomie", "BC, B2V, B2V Essai"],
          ["Dépannage d'une installation", "BR"]] },
        { type: "qcm", q: "Qui délivre le titre d'habilitation électrique ?", options: ["Le centre de formation", "Le CONSUEL", "L'employeur", "Le jury du titre"], answer: 2,
          explain: "Le centre de formation forme et évalue ; c'est l'employeur qui habilite." },
        { type: "match", q: "Associe chaque mesure à sa condition d'essai.", pairs: [
          ["Continuité des PE", "Hors tension, courant d'essai ≥ 200 mA"],
          ["Résistance d'isolement", "Hors tension, 500 V continu"],
          ["Résistance de la prise de terre", "Méthode des piquets"],
          ["Essai des différentiels", "Sous tension, sur une prise en aval"],
          ["Tension et polarité", "Sous tension, multimètre ou contrôleur de prise"]] },
        { type: "match", q: "Catégories de mesure : où les utilise-t-on ?", pairs: [
          ["CAT I", "Électronique protégée, faible énergie"],
          ["CAT II", "Appareils branchés sur une prise"],
          ["CAT III", "Tableau, disjoncteurs, câblage fixe"],
          ["CAT IV", "Origine : compteur, branchement"]] },
        { type: "qcm", q: "Catégorie de mesure minimale pour mesurer au tableau de répartition ?", options: ["CAT I", "CAT II", "CAT III", "Aucune exigence"], answer: 2,
          explain: "CAT III minimum au tableau, vérifiée sur l'appareil ET sur les cordons." },
        { type: "tf", q: "Appareils de mesure et V.A.T. : vrai ou faux ?", items: [
          ["Le V.A.T. se teste sur une source connue avant et après la vérification d'absence de tension.", true],
          ["Un multimètre CAT II convient pour mesurer sur un tableau de logement.", false],
          ["Un cordon fendu ou une pointe de touche nue : l'appareil est retiré.", true],
          ["Un multimètre peut remplacer le V.A.T. pour vérifier l'absence de tension.", false]] },
        { type: "task", phone: true, q: "Le marquage de ton appareil de mesure", steps: [
          "Prends en photo la face avant de ton multimètre ou de ton contrôleur d'installation, et ses cordons.",
          "Repère la catégorie de mesure et la tension inscrites (exemple : CAT III 600 V).",
          "Vérifie l'état des cordons et des pointes de touche.",
          "Note ci-dessous la catégorie relevée et dis si l'appareil peut servir au tableau."], note: "Catégorie, tension et conclusion" }
      ]
    },
    {
      id: "m2", num: 2, titre: "Les autocontrôles hors tension", duree: "45 min", competences: "C2 · critère 1",
      intro: "L'ordre des autocontrôles, les seuils de conformité, la mesure d'isolement et la prise de terre. Prends une calculatrice.",
      source: "Présentation, module 02 (diapositives 9 à 13) et synthèse (diapositive 37)",
      ex: [
        { type: "order", q: "Remets dans l'ordre les 4 phases des autocontrôles.", items: ["Inspecter (contrôle visuel)", "Mesurer hors tension", "Mettre sous tension progressivement", "Mesurer sous tension"] },
        { type: "order", q: "Remets dans l'ordre les 5 étapes hors tension.", items: ["Contrôle visuel", "Continuité des PE", "Résistance d'isolement", "Absence de court-circuit phase / neutre", "Résistance de la prise de terre"] },
        { type: "match", q: "Associe chaque contrôle à sa valeur de conformité.", pairs: [
          ["Continuité des PE", "≤ 2 Ω"],
          ["Isolement d'un circuit 230 V (500 V continu)", "≥ 1 MΩ"],
          ["Prise de terre avec AGCP 500 mA", "≤ 100 Ω visés"],
          ["Différentiel 30 mA testé à IΔn", "≤ 300 ms"],
          ["Différentiel 30 mA testé à 5 × IΔn", "≤ 40 ms"],
          ["Tension phase-neutre", "230 V ± 10 %"]] },
        { type: "tf", q: "Mesurer l'isolement sans rien abîmer : vrai ou faux ?", items: [
          ["L'installation est séparée du réseau, consignée, et l'absence de tension vérifiée au V.A.T.", true],
          ["Les disjoncteurs divisionnaires sont ouverts pendant la mesure.", false],
          ["Les appareils sont débranchés ; l'électronique et le parafoudre sont déconnectés.", true],
          ["On mesure entre phase et neutre réunis d'un côté, et le PE de l'autre.", true],
          ["On peut toucher les conducteurs pendant l'essai, puisque l'installation est consignée.", false]],
          explain: "Divisionnaires fermés (ON) : la tension d'essai parcourt tout le câblage en aval. Jamais de contact pendant l'essai à 500 V : attendre la décharge." },
        { type: "match", q: "Interprète chaque valeur d'isolement lue sous 500 V.", pairs: [
          ["250 MΩ", "Excellent, installation neuve"],
          ["12 MΩ", "Conforme"],
          ["0,6 MΩ", "Non conforme : rechercher le défaut"],
          ["0 MΩ", "Court-circuit franc avec le PE"]] },
        { type: "qcm", q: "Isolement de 0,4 MΩ mesuré au tableau, divisionnaires fermés. Que fais-tu ?", options: ["Je mets sous tension, la valeur est proche du seuil", "J'ouvre les divisionnaires un par un pour trouver le circuit en défaut", "Je refais la mesure sous 250 V", "Je remplace l'AGCP"], answer: 1,
          explain: "Une valeur hors seuil interdit la mise sous tension tant que le défaut n'est pas trouvé et corrigé." },
        { type: "num", q: "Avec un AGCP 500 mA sélectif, résistance maximale de la prise de terre ?", answer: 100, tol: 0, unit: "Ω",
          explain: "RA × IΔn ≤ 50 V → RA ≤ 50 / 0,5 = 100 Ω." },
        { type: "gen", gen: "uc", n: 3, q: "Calcule la tension de contact U = RA × IΔn (limite 50 V)." },
        { type: "qcm", q: "Pourquoi la continuité des PE se mesure-t-elle avec un courant d'au moins 200 mA, et pas avec le « bip » du multimètre ?", options: ["Pour aller plus vite", "Parce qu'un courant trop faible peut faire paraître bonne une connexion mal serrée", "Parce que le bip abîme le PE", "Parce que la mesure se fait sous tension"], answer: 1 }
      ]
    },
    {
      id: "m3", num: 3, titre: "La mise en service et le fil pilote", duree: "35 min", competences: "C2 · critères 2 et 3",
      intro: "Déconsigner, mettre sous tension de l'amont vers l'aval, trouver le circuit qui fait déclencher un différentiel, mettre en service un chauffage à fil pilote.",
      source: "Présentation, module 03 (diapositives 14 à 18)",
      ex: [
        { type: "order", q: "Déconsigner puis mettre sous tension : remets les 8 étapes dans l'ordre.", items: ["Retirer les mises à la terre et en court-circuit", "Retirer les cadenas (chacun le sien)", "Retirer la signalisation de consignation", "Annoncer « Installation sous tension »", "Fermer l'AGCP", "Fermer chaque interrupteur différentiel", "Fermer les divisionnaires un par un", "Contrôler : aucun déclenchement, tension présente"] },
        { type: "qcm", q: "Pendant la mise sous tension, une odeur de brûlé apparaît. Que fais-tu ?", options: ["Je termine la mise sous tension puis je cherche", "Je coupe immédiatement l'AGCP et je préviens le formateur", "Je réarme et j'observe", "Je mesure l'isolement sous tension"], answer: 1,
          explain: "Couper l'AGCP, prévenir, corriger, puis refaire les autocontrôles du circuit avant toute nouvelle mise sous tension." },
        { type: "order", q: "Un différentiel déclenche : remets la méthode dans l'ordre.", items: ["Ne pas réarmer en boucle", "Ouvrir tous les divisionnaires sous ce différentiel", "Réarmer le différentiel seul", "Refermer les divisionnaires un par un", "Laisser ouvert le circuit fautif et poursuivre la mise en service", "Confirmer le défaut hors tension au mégohmmètre"] },
        { type: "tf", q: "Le différentiel et son bouton test : vrai ou faux ?", items: [
          ["Le bouton test vérifie que le mécanisme de déclenchement fonctionne.", true],
          ["Le bouton test prouve que le différentiel déclenche en moins de 300 ms.", false],
          ["Le temps de déclenchement se mesure au testeur de DDR, sur une prise en aval.", true]] },
        { type: "match", q: "Fil pilote : quel signal pour chaque ordre ?", pairs: [
          ["Confort", "Aucun signal"],
          ["Éco", "Alternance complète"],
          ["Hors-gel", "Demi-alternance négative"],
          ["Arrêt (délestage)", "Demi-alternance positive"]] },
        { type: "match", q: "Que lit-on au multimètre (entre fil pilote et neutre) ?", pairs: [
          ["Confort", "0 V"],
          ["Éco", "≈ 230 V"],
          ["Hors-gel ou Arrêt", "≈ 115 V"]] },
        { type: "qcm", q: "Le multimètre affiche ≈ 115 V sur le fil pilote. Comment savoir si c'est Hors-gel ou Arrêt ?", options: ["Impossible, c'est le même ordre", "Avec un testeur de fil pilote ou un oscilloscope", "En mesurant le courant à la pince", "En coupant le radiateur"], answer: 1,
          explain: "Seul un testeur de fil pilote ou un oscilloscope distingue le sens de la demi-alternance." },
        { type: "tf", q: "Le fil pilote : vrai ou faux ?", items: [
          ["Le fil pilote est sous 230 V.", true],
          ["Il se raccorde hors tension, comme un conducteur actif.", true],
          ["Il peut être relié à la terre s'il n'est pas utilisé.", false]] }
      ]
    },
    {
      id: "m4", num: 4, titre: "Le PV de vérification et le CONSUEL", duree: "30 min", competences: "C2 · critère 1",
      intro: "Ce que contient un procès-verbal, l'attestation de conformité et les non-conformités les plus fréquentes.",
      source: "Présentation, module 04 (diapositives 19 à 23)",
      ex: [
        { type: "pick", q: "Coche ce qui doit figurer sur le procès-verbal de vérification.", items: [
          ["Chantier, intervenant, date, appareil utilisé", true],
          ["Chaque mesure avec sa valeur et son unité", true],
          ["Conforme / non conforme pour chaque ligne", true],
          ["Réserves, actions correctives et signature", true],
          ["Le prix des travaux", false],
          ["Uniquement les mesures conformes", false]] },
        { type: "tf", q: "Le procès-verbal : vrai ou faux ?", items: [
          ["Une valeur sans unité rend le PV inexploitable.", true],
          ["Un exemplaire est remis au client, un autre archivé par l'entreprise.", true],
          ["Une case vide est acceptée si la mesure était bonne.", false]] },
        { type: "match", q: "Attestations de conformité : associe chaque couleur à son usage.", pairs: [
          ["Jaune", "Logement (habitation)"],
          ["Verte", "Hors habitation, parties communes"],
          ["Bleue", "Production sans stockage"],
          ["Violette", "Production avec stockage"]] },
        { type: "qcm", q: "Pour un logement neuf, l'installateur remplit l'attestation…", options: ["bleue, CERFA 15523", "jaune, CERFA 12506", "verte, CERFA 12507", "violette"], answer: 1,
          explain: "Logement : attestation jaune, CERFA 12506, transmise au CONSUEL avant le raccordement." },
        { type: "pick", q: "Dans quels cas la saisine du CONSUEL est-elle obligatoire ?", items: [
          ["Logement neuf", true],
          ["Rénovation totale avec mise hors tension par le distributeur", true],
          ["Installation de production raccordée au réseau", true],
          ["Remplacement d'une prise à l'identique", false]] },
        { type: "match", q: "Associe chaque non-conformité à sa correction.", pairs: [
          ["Circuit de salle d'eau sans DDR 30 mA", "Placer le circuit sous un différentiel 30 mA"],
          ["Section incompatible avec la protection", "Mettre section et calibre en cohérence"],
          ["Réserve du tableau insuffisante", "Réaménager pour retrouver 20 %"],
          ["Liaison équipotentielle manquante", "Réaliser la LEP ou la LES"],
          ["Repérage ou schéma absent", "Étiqueter, joindre le schéma"]] },
        { type: "qcm", q: "Câblage très soigné, mais circuit de salle d'eau sans 30 mA. Le CONSUEL…", options: ["accepte, la finition est parfaite", "refuse : il contrôle la sécurité, pas la finition", "accepte avec une réserve", "ne contrôle pas la salle d'eau"], answer: 1 }
      ]
    },
    {
      id: "m5", num: 5, titre: "Salle d'eau et dépannage", duree: "40 min", competences: "C2 · critères 1 et 3",
      intro: "Liaisons équipotentielles LEP et LES, volumes de la salle d'eau, méthode de dépannage en 6 étapes et sécurité pendant le dépannage.",
      source: "Présentation, modules 05 et 06 (diapositives 24 à 32)",
      ex: [
        { type: "match", q: "Liaisons équipotentielles : associe chaque cas à sa section minimale.", pairs: [
          ["LEP (liaison principale)", "6 mm² cuivre"],
          ["LES protégée mécaniquement", "2,5 mm²"],
          ["LES non protégée", "4 mm²"]] },
        { type: "qcm", q: "Où raccorde-t-on la liaison équipotentielle principale aux canalisations métalliques ?", options: ["Au tableau de répartition", "Au plus près de leur entrée dans le bâtiment", "Dans la salle d'eau", "Sur la prise de terre directement"], answer: 1 },
        { type: "match", q: "Volumes de la salle d'eau : associe chaque volume à sa délimitation.", pairs: [
          ["Volume 0", "Intérieur de la baignoire ou du receveur"],
          ["Volume 1", "Au-dessus du volume 0, jusqu'à 2,25 m"],
          ["Volume 2", "0,60 m autour du volume 1"],
          ["Hors volume", "Au-delà du volume 2"]] },
        { type: "tf", q: "Salle d'eau : vrai ou faux ?", items: [
          ["Une prise 230 V ordinaire est admise dans le volume 2 si elle est IPX4.", false],
          ["La prise rasoir à transformateur de séparation est admise dans le volume 2.", true],
          ["Les socles hors volume sont protégés par un différentiel 30 mA.", true],
          ["On peut placer un interrupteur sur la LES pour la couper.", false],
          ["La continuité de la LES se vérifie au contrôleur.", true]] },
        { type: "order", q: "Remets dans l'ordre les 6 étapes du dépannage.", items: ["Recueillir", "Analyser", "Délimiter", "Localiser", "Réparer", "Vérifier"] },
        { type: "match", q: "Du symptôme à la cause probable :", pairs: [
          ["Le DDR déclenche à la mise sous tension", "Défaut d'isolement"],
          ["Le disjoncteur déclenche à la mise en charge", "Surcharge ou court-circuit"],
          ["Prise sans tension, disjoncteur fermé", "Connexion desserrée, conducteur coupé"],
          ["Va-et-vient qui ne commande que d'un côté", "Navette coupée ou inversée"],
          ["Lumière qui clignote", "Mauvais serrage, oxydation"],
          ["Picotement au contact d'une masse", "PE absent ou interrompu"]] },
        { type: "qcm", q: "Pour « tester », un collègue propose de ponter le différentiel qui déclenche. Tu réponds…", options: ["D'accord, quelques minutes seulement", "Non : c'est une faute grave, cela supprime la protection des personnes", "D'accord si on est habilité BR", "D'accord si le client est prévenu"], answer: 1 },
        { type: "pick", q: "Dépanner en sécurité : coche les bonnes pratiques.", items: [
          ["Tester le V.A.T. avant et après", true],
          ["Consigner si l'on intervient hors tension", true],
          ["Limiter les mesures sous tension au diagnostic, avec les EPI", true],
          ["Remplacer un disjoncteur par un calibre plus fort s'il déclenche", false],
          ["Faire un autocontrôle du circuit réparé et remplir le bon d'intervention", true]] }
      ]
    },
    {
      id: "m6", num: 6, titre: "Étude de cas : le T4 de Mme Martin", duree: "45 min", competences: "C2 · tous critères",
      intro: "T4 neuf, monophasé 230 V, schéma TT, AGCP 500 mA. Relevés : continuité PE chambre 2 : 0,4 Ω · isolement prises cuisine : 0,6 MΩ · isolement éclairage : > 200 MΩ · terre : 48 Ω · ID n°1 à IΔn : 28 ms · ID n°2 : ne déclenche pas au bouton test.",
      source: "Toute la présentation · modules 02, 03 et 07 (diapositives 9 à 18 et 33 à 36)",
      ex: [
        { type: "pick", q: "Coche les relevés NON conformes.", items: [
          ["Continuité PE chambre 2 : 0,4 Ω", false],
          ["Isolement prises cuisine : 0,6 MΩ", true],
          ["Isolement éclairage : > 200 MΩ", false],
          ["Terre : 48 Ω", false],
          ["ID n°1 à IΔn : 28 ms", false],
          ["ID n°2 : ne déclenche pas au bouton test", true]],
          explain: "PE ≤ 2 Ω ; isolement ≥ 1 MΩ ; terre ≤ 100 Ω ; DDR ≤ 300 ms à IΔn. Un ID qui ne déclenche pas au bouton test a un mécanisme défectueux." },
        { type: "num", q: "Tension de contact avec la terre mesurée (48 Ω) et l'AGCP 500 mA ?", answer: 24, tol: 0, unit: "V",
          explain: "U = RA × IΔn = 48 × 0,5 = 24 V ≤ 50 V : conforme." },
        { type: "qcm", q: "Le circuit des prises de la cuisine (0,6 MΩ) :", options: ["est mis sous tension, l'écart est faible", "reste hors tension jusqu'à la recherche et la correction du défaut", "est mis sous tension avec un disjoncteur plus faible", "est raccordé sur un autre différentiel"], answer: 1,
          explain: "Valeur hors seuil hors tension : pas de mise sous tension tant que le défaut n'est pas corrigé." },
        { type: "qcm", q: "L'ID n°2 ne déclenche pas au bouton test. Que fais-tu ?", options: ["Je mets quand même ses circuits en service", "Je remplace l'ID avant de mettre ses circuits en service, puis je refais l'essai", "Je le ponte en attendant", "Je teste seulement à 5 × IΔn"], answer: 1 },
        { type: "pick", q: "Quels documents remets-tu à Mme Martin ?", items: [
          ["Le schéma du tableau", true],
          ["Le PV de vérification", true],
          ["Les notices des appareils", true],
          ["L'attestation CONSUEL si elle est établie", true],
          ["Le bon de commande du matériel", false]] },
        { type: "qcm", q: "Mme Martin entend mal. Comment présentes-tu l'installation ?", options: ["Je parle plus fort, de dos, en travaillant", "Je me place face à elle, j'articule, je montre les gestes et je remets un support écrit annoté", "Je laisse la notice", "J'explique à quelqu'un d'autre"], answer: 1 },
        { type: "order", q: "Rendre compte au responsable : remets les 5 points dans l'ordre.", items: ["Avancement", "Conformité (mesures clés)", "Écarts par rapport au dossier", "Anomalies non traitées, à décider", "Chantier : matériel restant, déchets triés"] },
        { type: "task", phone: true, q: "Présentation à Mme Martin avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Présente le tableau en 2 minutes, sans sigle non expliqué : montrer (AGCP, disjoncteurs, différentiels et bouton test), expliquer, remettre.",
          "Fais refaire le geste : « Montrez-moi comment vous coupez tout. »",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de ton enregistrement et remarques" },
        { type: "open", q: "Rédige ton compte rendu au responsable pour ce chantier (5 points).", hint: "Avancement · résultats des autocontrôles · écarts · anomalies (prises cuisine, ID n°2) et décisions à prendre · état du chantier." }
      ]
    }
  ]
};
