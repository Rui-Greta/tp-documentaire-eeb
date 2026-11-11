/* TP documentaire C4 – TP EEB – Procéder à la mise en sécurité de l'installation électrique des bâtiments d'habitation existants */
window.TPDOC = {
  id: "eeb-tpdoc-c4-v1",
  num: 4, code: "C4", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Mettre en sécurité l'installation électrique d'un logement existant",
  sousTitre: "TP documentaire C4 · TP EEB · CCP 1 Courants forts",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C4 – Mise en sécurité… » (sur le PC), le cours écrit, les guides NF C 15-100 et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "La compétence C4 et son cadre", duree: "35 min", competences: "C4 · étape 1",
      intro: "Mise en sécurité, conformité ou rénovation, les 7 étapes, l'habilitation, l'état de l'installation intérieure d'électricité (ÉII) et les domaines d'anomalies B.1 à B.11.",
      source: "Présentation, parties 01 et 02 (diapositives 4 à 15)",
      ex: [
        { type: "match", q: "Associe chaque type de travaux à son objectif.", pairs: [
          ["Mise en sécurité", "Supprimer les dangers graves"],
          ["Mise en conformité", "Rendre conforme à toute la NF C 15-100, point par point"],
          ["Rénovation totale", "Tout refaire, comme une installation neuve"]] },
        { type: "qcm", q: "En simple mise en sécurité, le tableau que tu poses doit être…", options: ["identique à l'ancien", "conforme à la NF C 15-100 en vigueur", "conforme à la norme de l'année de construction", "validé par le diagnostiqueur"], answer: 1,
          explain: "Règle des travaux réalisés : tout ce qui est posé ou modifié respecte la NF C 15-100 en vigueur." },
        { type: "order", q: "Remets dans l'ordre les 7 étapes de la compétence C4.", items: ["Exploiter le dossier de mise en sécurité", "Réaliser le cheminement des canalisations", "Installer et raccorder l'appareillage de distribution", "Procéder aux autocontrôles", "Mettre en service les parties privatives", "Assister la mise en service des parties communes", "Présenter au client et rendre compte"] },
        { type: "match", q: "Quelle habilitation pour chaque situation ?", pairs: [
          ["Travaux en privatif, sous un chargé d'essais", "B1V sous B2V Essai"],
          ["Travaux en privatif, seul en autonomie", "BC, B2V, B2V Essai"],
          ["Dépannage d'un logement", "BR"],
          ["Travaux en parties communes", "B1V sous B2V Essai"]] },
        { type: "qcm", q: "Qui délivre l'habilitation électrique ?", options: ["Le centre de formation", "L'employeur", "Le diagnostiqueur", "Le Consuel"], answer: 1,
          explain: "Le centre forme et évalue ; c'est l'employeur qui habilite." },
        { type: "match", q: "L'état de l'installation intérieure d'électricité (ÉII) :", pairs: [
          ["Quand est-il obligatoire ?", "Vente ou location, installation de plus de 15 ans"],
          ["Validité pour une vente", "3 ans"],
          ["Validité pour une location", "6 ans"],
          ["Qui le réalise ?", "Un diagnostiqueur certifié, selon la NF C 16-600"]] },
        { type: "match", q: "Associe chaque code de la NF C 16-600 à son domaine.", pairs: [
          ["B.1", "AGCP et son accessibilité"],
          ["B.2", "Différentiel à l'origine, adapté à la terre"],
          ["B.3", "Prise de terre et mise à la terre"],
          ["B.4", "Protection contre les surintensités"],
          ["B.5", "Liaison équipotentielle de la salle d'eau"],
          ["B.6", "Zones de la salle d'eau"],
          ["B.7", "Risques de contacts directs"],
          ["B.8", "Matériel vétuste ou inadapté"]] },
        { type: "match", q: "Quelle norme pour quoi ?", pairs: [
          ["Repérer les dangers d'une installation existante", "NF C 16-600"],
          ["Réaliser les travaux de correction", "NF C 15-100"]] },
        { type: "qcm", q: "La présence du 30 mA sur tout le logement relève de quel code ?", options: ["B.1", "B.2", "B.8", "B.11 (informations complémentaires)"], answer: 3,
          explain: "B.2 demande un différentiel à l'origine adapté à la terre ; le 30 mA partout est en B.11. En mise en sécurité, on installe quand même le 30 mA." }
      ]
    },
    {
      id: "m2", num: 2, titre: "Diagnostiquer une installation existante", duree: "40 min", competences: "C4 · étape 1",
      intro: "La méthode en 6 étapes, ce que l'on regarde, le codage et le classement des anomalies, les appareils de contrôle.",
      source: "Présentation, partie 03 (diapositives 16 à 21)",
      ex: [
        { type: "order", q: "Remets dans l'ordre la méthode de diagnostic.", items: ["Préparer", "Inspecter sans démonter", "Consigner", "Inspecter l'intérieur du tableau", "Mesurer", "Rendre compte"] },
        { type: "tf", q: "Diagnostiquer en sécurité : vrai ou faux ?", items: [
          ["L'inspection sans démontage se fait sous tension, sans rien ouvrir.", true],
          ["On ouvre le tableau sous tension pour gagner du temps.", false],
          ["On consigne avant d'ouvrir le tableau.", true],
          ["Dans l'existant, on peut se fier aux couleurs des conducteurs.", false]],
          explain: "Dans l'existant, un neutre peut être noir, une terre absente : VAT testé avant et après." },
        { type: "match", q: "Code chaque constat (NF C 16-600).", pairs: [
          ["AGCP dans un placard fermé à clé", "B.1"],
          ["Socles de prise sans conducteur de protection", "B.3"],
          ["Circuit en 1,5 mm² protégé par un fusible 32 A", "B.4"],
          ["Canalisations métalliques de la douche non reliées", "B.5"],
          ["Prise de courant à 30 cm du bac à douche", "B.6"],
          ["Interrupteur cassé, bornes visibles", "B.7"],
          ["Conducteurs sous baguette bois", "B.8"],
          ["Éclairage de cave alimenté par le voisin", "B.9"]] },
        { type: "match", q: "Classe chaque anomalie par niveau de danger.", pairs: [
          ["Fils nus accessibles", "Danger immédiat"],
          ["Fusible remplacé par un fil de cuivre", "Danger immédiat"],
          ["Aucun différentiel 30 mA", "Danger grave"],
          ["Pas de prise de terre", "Danger grave"],
          ["Socles sans obturateurs", "À programmer"],
          ["Matériel vétuste non dangereux à court terme", "À programmer"]] },
        { type: "qcm", q: "Tu découvres un danger immédiat. Que fais-tu ?", options: ["Tu le notes pour le devis", "Tu mets le circuit hors tension et tu informes le client et ton responsable", "Tu le répares sous tension", "Tu attends le diagnostiqueur"], answer: 1 },
        { type: "order", q: "Une anomalie bien rédigée contient 5 informations. Remets-les dans l'ordre.", items: ["Où", "Quoi", "Code B.x", "Danger", "Proposition"] },
        { type: "qcm", q: "Immeuble dont le permis date de 1985, sans repérage amiante avant travaux. Tu dois faire une saignée…", options: ["Tu la fais avec un masque FFP3", "Tu ne perces pas et tu demandes à ton responsable", "Tu la fais si elle est courte", "Tu humidifies le mur avant"], answer: 1,
          explain: "Permis antérieur à juillet 1997 : risque amiante. Sans repérage avant travaux, on ne perce pas, on ne ponce pas." },
        { type: "match", q: "À quoi sert chaque appareil ?", pairs: [
          ["VAT", "Vérifier l'absence de tension"],
          ["Testeur de prise", "Contrôler phase, neutre et terre d'un socle"],
          ["Telluromètre ou pince de terre", "Mesurer la résistance de la prise de terre"],
          ["Contrôleur d'installation", "Continuité, isolement, essai des différentiels"]] },
        { type: "task", phone: true, q: "Observation chez toi ou au centre (sans rien ouvrir)", steps: [
          "Observe un tableau électrique et deux prises, sans rien démonter.",
          "Photographie-les avec ton téléphone.",
          "Rédige ci-dessous une anomalie en 5 informations (où, quoi, code, danger, proposition), ou écris « aucune anomalie visible » et explique ce que tu as vérifié."], note: "Anomalie rédigée (ou vérifications faites)" }
      ]
    },
    {
      id: "m3", num: 3, titre: "Les 6 points de mise en sécurité", duree: "40 min", competences: "C4 · étape 3",
      intro: "Du constat à la correction, le choix du différentiel selon la terre, l'interdiction de la fausse terre et l'ordre des corrections. Prends une calculatrice.",
      source: "Présentation, partie 04 (diapositives 22 à 27)",
      ex: [
        { type: "match", q: "Associe chaque point à sa correction.", pairs: [
          ["1. AGCP inaccessible", "Rendre l'accès libre ; déplacer avec le distributeur"],
          ["2. Aucun différentiel efficace", "ID 30 mA sur tous les circuits"],
          ["3. Pas de terre, socles sans PE", "Reprendre la prise de terre et tirer le PE"],
          ["4. Calibre trop fort pour la section", "Disjoncteur adapté à la section"],
          ["5. Salle d'eau dangereuse", "LES et matériel déplacé selon les zones"],
          ["6. Matériel dangereux", "Remplacer, connexions en boîte, conducteurs protégés"]] },
        { type: "gen", gen: "uc", n: 3, q: "Calcule la tension de contact U = R × IΔn (limite 50 V)." },
        { type: "gen", gen: "terre", n: 3, q: "L'AGCP 500 mA assure-t-il la protection ?" },
        { type: "num", q: "Avec un différentiel 30 mA, quelle résistance de terre maximale (arrondie à l'ohm) ?", answer: 1667, tol: 1, unit: "Ω",
          explain: "R ≤ 50 / 0,03 ≈ 1 667 Ω." },
        { type: "qcm", q: "Un client propose de relier la borne de terre d'une prise au neutre « pour que ça marche ». Tu réponds…", options: ["D'accord si c'est provisoire", "Non : faute grave, la carcasse serait sous tension en cas de défaut ; on tire un PE", "D'accord si la prise est sous 30 mA", "On peut plutôt la relier au tuyau d'eau"], answer: 1 },
        { type: "tf", q: "Circuits sans conducteur de protection : vrai ou faux ?", items: [
          ["Le 30 mA est une mesure compensatoire admise par la NF C 16-600.", true],
          ["Le 30 mA remplace le PE pour un appareil de classe I.", false],
          ["La bonne correction est de tirer un PE ou de recâbler.", true]] },
        { type: "order", q: "Dans quel ordre corriger ?", items: ["Supprimer les dangers immédiats", "Protéger les personnes (30 mA)", "Mettre à la terre", "Adapter les protections aux sections", "Traiter la salle d'eau", "Remplacer le matériel vétuste"] },
        { type: "qcm", q: "Après la pose des ID 30 mA, ils déclenchent sans défaut apparent. Cause probable ?", options: ["Terre trop bonne", "Neutre partagé ou neutre sous un autre ID que sa phase", "Disjoncteurs trop petits", "Câbles trop longs"], answer: 1,
          explain: "Un circuit = une phase + son neutre + son PE, sous le même ID." }
      ]
    },
    {
      id: "m4", num: 4, titre: "Le tableau et le cheminement dans l'existant", duree: "40 min", competences: "C4 · étapes 2 et 3",
      intro: "Quand remplacer un tableau, comment le composer et le remplacer circuit par circuit, puis comment cheminer dans un logement occupé et en parties communes.",
      source: "Présentation, parties 05 et 06 (diapositives 28 à 38)",
      ex: [
        { type: "pick", q: "Coche les situations qui imposent de remplacer le tableau.", items: [
          ["Planche bois et fusibles porcelaine", true],
          ["Pas de 30 mA et aucune place pour en ajouter", true],
          ["Traces d'échauffement, appareils cassés", true],
          ["Tableau récent avec 30 mA et 20 % de place libre", false],
          ["Bornes accessibles sur l'ancien tableau", true],
          ["Seules quelques étiquettes manquent", false]] },
        { type: "qcm", q: "Ancien circuit de prises en 1,5 mm² : disjoncteur maximal ?", options: ["10 A", "16 A", "20 A", "32 A"], answer: 1,
          explain: "La section réelle commande le calibre : 16 A, et 8 socles au maximum." },
        { type: "order", q: "Remplacer un tableau : remets les 8 étapes dans l'ordre.", items: ["Préparer", "Consigner", "Photographier", "Identifier", "Déposer", "Poser", "Raccorder", "Repérer"] },
        { type: "qcm", q: "Pourquoi photographier et repérer les départs avant de déposer l'ancien tableau ?", options: ["Pour le client", "Pour reconnecter chaque circuit au bon endroit avec sa phase et son neutre", "Pour l'assurance", "Pour le diagnostiqueur"], answer: 1 },
        { type: "num", img: "eeb_c4_unifilaire.png", alt: "Schéma unifilaire du tableau de Mme Lopez après mise en sécurité : AGCP, ID1 et ID3 type AC, ID2 type A, 8 départs", q: "Tableau de Mme Lopez après mise en sécurité : combien de circuits peut-on encore ajouter sous ID2 ?", answer: 6, tol: 0, unit: "circuits",
          explain: "8 circuits au maximum par ID ; ID2 en protège déjà 2 (S1 plaque de cuisson, S2 lave-linge)." },
        { type: "qcm", img: "eeb_c4_departs.png", alt: "Mini-tableau en multifilaire : ID 30 mA, éclairage et prises", q: "Sur ce schéma, le neutre du circuit des prises est raccordé…", options: ["sur le bornier de terre", "sur le disjoncteur Q2, sous le même ID que sa phase", "sur le disjoncteur Q1", "directement sur l'arrivée, avant l'ID"], answer: 1 },
        { type: "tf", q: "Conducteurs anciens : vrai ou faux ?", items: [
          ["Un conducteur aluminium peut être serré au contact direct d'un cuivre.", false],
          ["Un isolant caoutchouc ou tissu cassant se remplace.", true],
          ["Avant de raccorder un ancien conducteur, on rafraîchit le cuivre.", true]] },
        { type: "match", q: "Quel mode de pose dans l'existant ?", pairs: [
          ["Pièce habitée, sans saignée possible", "Goulotte, moulure ou plinthe"],
          ["Cave, garage, local technique", "Conduit IRL apparent"],
          ["Rénovation lourde, mur non porteur", "Saignée et ICTA (accord du responsable)"],
          ["Doublage, faux plafond", "Vide de construction"],
          ["Combles, vide sanitaire", "Câble U-1000 R2V fixé"]] },
        { type: "tf", q: "Coupe-feu et parties communes : vrai ou faux ?", items: [
          ["Une traversée de mur de cage d'escalier se rebouche avec un produit certifié coupe-feu.", true],
          ["On note le nom du produit et on photographie avant et après.", true],
          ["La colonne électrique de l'immeuble peut être modifiée sans le distributeur.", false],
          ["Un câble craquelé en parties communes peut être réutilisé s'il fonctionne.", false]] },
        { type: "match", q: "Travailler dans un logement occupé :", pairs: [
          ["Mobilier et sols", "Protéger avant de percer"],
          ["Poussière", "Outils aspirés, aspirateur chaque soir"],
          ["Coupures de courant", "Prévenir : congélateur, alarme, appareils médicaux"],
          ["Fin de journée", "Aucun conducteur nu, boîtes fermées, circuits signalés"]] }
      ]
    },
    {
      id: "m5", num: 5, titre: "Autocontrôles, mise en service et client", duree: "40 min", competences: "C4 · étapes 4 à 7",
      intro: "L'ordre des autocontrôles et les valeurs attendues, la remise sous tension, la lecture d'un procès-verbal, la présentation au client, le dépannage et le compte rendu.",
      source: "Présentation, parties 07 et 08 (diapositives 39 à 46)",
      ex: [
        { type: "order", q: "Remets les autocontrôles dans l'ordre.", items: ["Examen visuel", "Continuité des PE et liaisons", "Isolement actifs / terre", "Résistance de la prise de terre", "Essai des différentiels", "Polarité et fonctionnement", "Procès-verbal de mesures"] },
        { type: "match", q: "Quelle valeur attendue ?", pairs: [
          ["Continuité des PE", "≤ 2 Ω"],
          ["Isolement sous 500 V continu", "≥ 1 MΩ"],
          ["Terre avec AGCP 500 mA", "≤ 100 Ω"],
          ["Différentiel à ½ IΔn", "Ne déclenche pas"]] },
        { type: "tf", q: "Avant la mesure d'isolement : vrai ou faux ?", items: [
          ["On débranche les appareils, l'électronique et le parafoudre.", true],
          ["On prévient les occupants.", true],
          ["On peut laisser la box internet branchée.", false],
          ["On décharge le circuit après la mesure.", true]] },
        { type: "order", q: "Remise sous tension : remets les étapes dans l'ordre.", items: ["Disjoncteurs divisionnaires ouverts, ID fermés", "AGCP fermé (déconsignation)", "Disjoncteurs fermés un par un, essai de chaque circuit", "Essai des différentiels", "Report des résultats sur le PV"] },
        { type: "pick", q: "Lis ce procès-verbal et coche les valeurs NON conformes.", items: [
          ["Continuité PE, prises du séjour : 0,8 Ω", false],
          ["Continuité PE, prises de la chambre : 3,5 Ω", true],
          ["Isolement, éclairage : 0,3 MΩ", true],
          ["Isolement, prises cuisine : 150 MΩ", false],
          ["Terre : 85 Ω", false],
          ["ID n°1 à ½ IΔn : déclenche", true],
          ["ID n°2 à IΔn : 28 ms", false]],
          explain: "PE ≤ 2 Ω ; isolement ≥ 1 MΩ ; un ID qui déclenche à ½ IΔn est trop sensible ou il y a une fuite : à rechercher." },
        { type: "order", q: "Présenter l'installation au client : remets les 5 points dans l'ordre.", items: ["Où couper", "Le tableau", "Tester les différentiels", "Que faire si ça disjoncte", "Les documents"] },
        { type: "order", q: "Dépanner (BR) : remets les étapes dans l'ordre.", items: ["Écouter", "Constater", "Isoler", "Localiser", "Réparer", "Vérifier"] },
        { type: "qcm", q: "Pourquoi écrire et faire signer les anomalies que le client refuse de corriger ?", options: ["Pour facturer plus tard", "Pour prouver que le client a été informé et protéger l'entreprise", "C'est demandé par le Consuel", "Pour le diagnostiqueur"], answer: 1 },
        { type: "qcm", q: "Dans quelle filière va un ancien tableau électrique déposé ?", options: ["Benne métaux", "Benne gravats", "Filière DEEE", "Ordures ménagères"], answer: 2 },
        { type: "task", phone: true, q: "Présentation au « client » avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Présente en 2 minutes un tableau électrique à quelqu'un qui n'est pas électricien, en suivant les 5 points.",
          "Pas de sigle sans explication : « le gros disjoncteur qui coupe tout », « la protection qui coupe si quelqu'un touche un fil ».",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de ton enregistrement et remarques" }
      ]
    },
    {
      id: "m6", num: 6, titre: "Étude de cas : la maison de Mme Lopez", duree: "30 min", competences: "C4 · toutes étapes",
      intro: "Maison de 90 m² construite en 1974, chauffage gaz. Monophasé 230 V, schéma TT, AGCP 500 mA sélectif. Terre mesurée : 140 Ω. Constats : AGCP derrière une armoire ; prises de la cuisine sans PE ; circuit de prises en 1,5 mm² protégé par un fusible 20 A ; canalisations métalliques de la baignoire non reliées ; interrupteur du séjour cassé, bornes visibles ; garage : conducteurs fixés au mur sans conduit.",
      source: "Toute la présentation",
      ex: [
        { type: "match", q: "Code chaque constat de la maison de Mme Lopez.", pairs: [
          ["AGCP derrière une armoire", "B.1"],
          ["Prises de la cuisine sans PE", "B.3"],
          ["Prises en 1,5 mm² sur fusible 20 A", "B.4"],
          ["Canalisations de la baignoire non reliées", "B.5"],
          ["Interrupteur cassé, bornes visibles", "B.7"],
          ["Conducteurs au mur du garage, sans conduit", "B.8"]] },
        { type: "qcm", q: "Lequel de ces constats est un danger immédiat ?", options: ["L'AGCP derrière l'armoire", "L'interrupteur cassé aux bornes visibles", "Les prises de cuisine sans PE", "Les conducteurs du garage"], answer: 1,
          explain: "Bornes accessibles : contact direct possible. Circuit hors tension, cliente et responsable informés." },
        { type: "num", q: "Tension de contact avec l'AGCP 500 mA et une terre de 140 Ω ?", answer: 70, tol: 0.1, unit: "V" },
        { type: "qcm", q: "Que proposes-tu pour la protection des personnes ?", options: ["Rien, l'AGCP suffit", "ID 30 mA sur tous les circuits et amélioration de la terre", "Un AGCP 300 mA", "Relier la terre au tuyau de gaz"], answer: 1,
          explain: "140 × 0,5 = 70 V > 50 V ; avec 30 mA : 140 × 0,03 = 4,2 V. On améliore quand même la terre." },
        { type: "qcm", q: "Le circuit de prises en 1,5 mm² sera protégé par…", options: ["un disjoncteur 10 A", "un disjoncteur 16 A, 8 socles au maximum", "un disjoncteur 20 A", "le fusible 20 A conservé"], answer: 1 },
        { type: "num", q: "Nombre minimal d'ID 30 mA pour cette maison de 90 m² ?", answer: 3, tol: 0, unit: "ID" },
        { type: "qcm", q: "Mme Lopez refuse qu'on tire un PE dans la cuisine. Que fais-tu ?", options: ["Je relie la terre des prises au neutre", "J'installe le 30 mA, j'écris l'anomalie non traitée et je la fais signer", "Je refuse tout le chantier", "Je ne dis rien à mon responsable"], answer: 1,
          explain: "Le 30 mA est une mesure compensatoire ; l'anomalie non traitée est écrite et signée par la cliente." },
        { type: "open", q: "Rédige l'anomalie « prises en 1,5 mm² sur fusible 20 A » avec les 5 informations.", hint: "Où · quoi · code B.x · danger · proposition." }
      ]
    }
  ]
};
