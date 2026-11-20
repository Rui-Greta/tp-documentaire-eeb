/* TP documentaire C9 – TP EEB – Installer des équipements et solutions d'efficacité énergétique dans le bâtiment
   Source : cours expert C9 (version présentiel) ; renvois à la présentation du cours expert C9 (10 parties).
   Types : qcm, tf, match, order, num, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c9-v1",
  num: 9, code: "C9", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer des équipements et solutions d'efficacité énergétique dans le bâtiment",
  sousTitre: "TP documentaire C9 · TP EEB · CCP 2 Courants faibles et solutions",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C9 – Efficacité énergétique » (sur le PC), le cours écrit, une calculatrice et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "Le métier, la compétence C9 et ses limites", duree: "25 min", competences: "C9 · critères 5 et 6",
      intro: "Les activités de C9, quand l'électricien met en service et quand il assiste, les frontières et l'habilitation, notamment côté courant continu.",
      source: "Présentation, partie 01 (diapositives 5 à 9)",
      ex: [
        { type: "match", q: "Associe chaque activité de C9 à son contenu.", pairs: [
          ["Mesurer, afficher", "Compteur, sous-comptage par usage, afficheurs"],
          ["Contrôler, réguler", "Délestage, pilotage selon tarif et production"],
          ["Produire", "Photovoltaïque avec ou sans stockage"],
          ["Recharger", "Bornes IRVE"],
          ["Faire dialoguer", "Réseau entre production, distribution et consommation"]] },
        { type: "num", q: "Jusqu'à quelle puissance l'électricien met-il seul en service un PV en autoconsommation ?", answer: 6, tol: 0, unit: "kWc",
          explain: "Au-delà, ou sous contrat de vente, il assiste la mise en service réalisée par une personne qualifiée." },
        { type: "qcm", q: "En C9, quel critère remplace la présentation au client ?", options: ["Un devis", "Un compte rendu oral au responsable de toutes les modifications", "Un DOE complet", "Aucun"], answer: 1 },
        { type: "match", q: "Quelle habilitation pour quelle situation ?", pairs: [
          ["Logement, en autonomie", "BC, B2V, B2V Essai + BR"],
          ["Parties communes, autres bâtiments", "B1V sous B2V Essai"],
          ["Partie DC du photovoltaïque", "BP (NF C 18-510)"]] },
        { type: "tf", q: "Courant continu : vrai ou faux ?", items: [
          ["Les modules restent sous tension dès qu'ils sont éclairés.", true],
          ["Couper le disjoncteur AC suffit pour intervenir côté DC.", false],
          ["On vérifie l'absence de tension avec un VAT adapté au continu.", true]] },
        { type: "qcm", q: "Quelle différence entre le réseau de C6 et celui de C9 ?", options: ["Aucune", "C6 : réseau VDI (voix, données, images) ; C9 : réseau qui relie les matériels d'énergie", "C9 est uniquement en fibre", "C6 est réservé au tertiaire"], answer: 1 },
        { type: "qcm", q: "Sur un parking collectif, que fait l'électricien C9 pour l'IRVE ?", options: ["Il met en service seul toute l'infrastructure", "Il pose les points de charge et le contrôle d'accès", "Rien, ce n'est pas C9", "Il signe le contrat d'électricité"], answer: 1 }
      ]
    },
    {
      id: "m2", num: 2, titre: "Chauffage électrique, fil pilote et VMC", duree: "35 min", competences: "C9 · critères 1 et 3",
      intro: "Les émetteurs, les 6 ordres du fil pilote et son câblage par zones, puis l'obligation de ventilation permanente et le raccordement de la VMC.",
      source: "Présentation, parties 02 et 03 (diapositives 10 à 16)",
      ex: [
        { type: "match", q: "Associe chaque émetteur à son principe.", pairs: [
          ["Convecteur", "Air chaud par effet Joule"],
          ["Panneau rayonnant", "Rayonnement infrarouge"],
          ["Radiateur à inertie", "Cœur de chauffe (fonte, fluide, céramique)"],
          ["Plancher chauffant", "Câbles noyés + sonde de sol"]] },
        { type: "match", q: "Les ordres du fil pilote :", pairs: [
          ["Confort", "Aucun signal (0 V)"],
          ["Éco", "Alternance complète 230 V"],
          ["Hors-gel", "Demi-alternance négative"],
          ["Arrêt (délestage)", "Demi-alternance positive"],
          ["Confort −1 °C", "230 V pendant 3 s toutes les 5 min"],
          ["Confort −2 °C", "230 V pendant 7 s toutes les 5 min"]] },
        { type: "tf", q: "Câblage du fil pilote : vrai ou faux ?", items: [
          ["Le fil pilote est raccordé au gestionnaire d'énergie, puis distribué par zone.", true],
          ["On peut le relier à la terre.", false],
          ["Il reste sous tension : on consigne avant d'intervenir.", true],
          ["Une diode permet de combiner deux ordres simples.", true]] },
        { type: "num", q: "Maison Martin, 5 zones de chauffage. Combien de sorties fil pilote au gestionnaire ?", answer: 5, tol: 0, unit: "sorties" },
        { type: "qcm", q: "Pendant un délestage, quel ordre reçoivent les radiateurs ?", options: ["Confort", "Éco", "Hors-gel", "Arrêt (demi-alternance positive)"], answer: 3 },
        { type: "qcm", q: "Pourquoi interdit-on l'interrupteur de proximité sur une VMC ?", options: ["Pour économiser", "La ventilation doit rester permanente (arrêté du 24 mars 1982)", "Parce qu'il coûte cher", "Ce n'est pas interdit"], answer: 1 },
        { type: "qcm", q: "Maison Martin, VMC hygro B : où places-tu les bouches d'extraction ?", options: ["Dans les chambres", "Dans les pièces de service : cuisine, salle de bains, WC", "Dans le séjour", "Dans le garage"], answer: 1 },
        { type: "match", q: "Associe chaque système de VMC à sa performance.", pairs: [
          ["Simple flux autoréglable", "Basique : débit constant"],
          ["Hygro B", "Très bonne : bouches et entrées d'air hygroréglables"],
          ["Double flux", "Excellente : récupère la chaleur de l'air extrait"]] }
      ]
    },
    {
      id: "m3", num: 3, titre: "GTB, mesure et réseau de communication", duree: "30 min", competences: "C9 · critère 3",
      intro: "Mesurer, afficher, réguler, superviser : le sous-comptage par usage et les protocoles KNX, DALI et Modbus.",
      source: "Présentation, partie 04 (diapositives 17 à 20)",
      ex: [
        { type: "order", q: "La chaîne de l'efficacité énergétique : remets dans l'ordre.", items: ["Mesurer : compteur, sous-comptage", "Afficher : afficheurs, gestionnaire", "Réguler : délestage, pilotage", "Superviser : GTB, analyser, réduire"] },
        { type: "match", q: "Associe chaque protocole à son application.", pairs: [
          ["KNX (EN 50090)", "Éclairage, volets, scènes, chauffage"],
          ["DALI", "Gestion numérique de l'éclairage"],
          ["Modbus", "Comptage, automates, équipements techniques"]] },
        { type: "qcm", q: "À quoi sert le sous-comptage par usage ?", options: ["À facturer le voisin", "À analyser les consommations par usage pour les réduire", "À remplacer le compteur Linky", "À délester"], answer: 1 },
        { type: "qcm", q: "En KNX, à quoi sert une adresse de groupe ?", options: ["À identifier l'appareil dans l'installation", "À relier une commande à un ou plusieurs actionneurs", "À alimenter le bus", "À rien"], answer: 1 },
        { type: "order", q: "Programmer en KNX (ETS) : remets dans l'ordre.", items: ["Attribuer une adresse physique à chaque composant", "Créer les adresses de groupe", "Charger les appareils", "Tester groupe, scène et volet"] },
        { type: "num", q: "DALI : combien de luminaires au maximum par ligne ?", answer: 64, tol: 0, unit: "luminaires" }
      ]
    },
    {
      id: "m4", num: 4, titre: "Photovoltaïque : composants, réglementation, raccordement", duree: "45 min", competences: "C9 · critères 1, 3 et 6",
      intro: "De la cellule au champ, la fiche technique d'un module, le choix de l'onduleur, les démarches et le schéma DC / AC.",
      source: "Présentation, parties 05 et 06 (diapositives 21 à 28)",
      ex: [
        { type: "order", q: "De la cellule au champ : remets dans l'ordre.", items: ["Cellule", "Module", "String (modules en série)", "Champ photovoltaïque"] },
        { type: "match", q: "Fiche technique d'un module : à quoi sert chaque grandeur ?", pairs: [
          ["Wc", "Dimensionner le champ"],
          ["Voc", "Calculer la tension maximale du string"],
          ["Isc", "Choisir protections et câbles"],
          ["Vmpp / Impp", "Vérifier la plage MPPT de l'onduleur"]] },
        { type: "match", q: "Quel onduleur pour quelle situation ?", pairs: [
          ["Toiture sans ombrage, le plus économique", "Onduleur string"],
          ["Toiture partiellement ombragée", "Micro-onduleur (ou optimiseur)"],
          ["Ajouter une batterie de stockage", "Onduleur hybride"]] },
        { type: "match", q: "Quel câble ou quel appareil pour quel côté ?", pairs: [
          ["Liaison des modules", "Câble H1Z2Z2-K"],
          ["Coffret DC", "Sectionneur, fusibles, parafoudre classe II"],
          ["Protection AC", "Disjoncteur + différentiel adapté à l'onduleur"]] },
        { type: "qcm", q: "Côté AC, quel type de différentiel ?", options: ["Type AC dans tous les cas", "Type B, ou type A si l'onduleur assure au moins une séparation simple ou si son fabricant l'autorise", "Aucun différentiel", "Type A dans tous les cas"], answer: 1,
          explain: "NF C 15-100, partie 7-712." },
        { type: "pick", q: "Maison Martin, 3 kWc en toiture : coche les démarches avant les travaux.", items: [
          ["Déclaration préalable en mairie", true],
          ["Demande de raccordement auprès d'Enedis (ou de l'ELD)", true],
          ["Convention de raccordement et d'autoconsommation", true],
          ["Permis de construire obligatoire pour 3 kWc", false]] },
        { type: "tf", q: "Vrai ou faux ?", items: [
          ["Couper le réseau ne met pas l'installation PV hors tension : l'étiquetage signale les deux sources.", true],
          ["Les pertes en ligne côté DC doivent rester inférieures à 1 %.", true],
          ["Le câble H1Z2Z2-K n'a pas besoin de résister aux UV.", false]] }
      ]
    },
    {
      id: "m5", num: 5, titre: "Photovoltaïque : mise en service et réception", duree: "30 min", competences: "C9 · critères 3 et 6",
      intro: "Les 6 étapes de la mise en service, les mesures de réception et le suivi par le monitoring.",
      source: "Présentation, partie 07 (diapositives 29 à 32)",
      ex: [
        { type: "order", q: "La mise en service en 6 étapes : remets dans l'ordre.", items: ["Isolement DC de chaque string", "Polarité de chaque string", "Connexion AC", "Paramétrage de l'onduleur (pays, anti-îlotage, limitation)", "Vérification des tensions, courants, puissance", "Monitoring et fiche de mise en service"] },
        { type: "qcm", q: "Pourquoi contrôle-t-on la polarité avant de connecter l'onduleur ?", options: ["Pour la beauté du câblage", "Pour éviter d'endommager l'onduleur par une inversion", "Pour le monitoring", "Ce n'est pas utile"], answer: 1 },
        { type: "num", q: "Isolement DC minimal attendu (NF EN IEC 62446-1) ?", answer: 1, tol: 0, unit: "MΩ" },
        { type: "match", q: "Mesures de réception : quel appareil ?", pairs: [
          ["Isolement DC", "Mégohmmètre 500 V ou 1 000 V DC"],
          ["Voc de chaque string", "Multimètre DC"],
          ["U, I, P, cos φ côté AC", "Multimètre / pince"],
          ["Courbe journalière, PR, défauts", "Interface de l'onduleur"]] },
        { type: "qcm", q: "Un string a un Voc nettement plus faible que les autres. Que suspectes-tu ?", options: ["Rien d'anormal", "Un défaut de string ou un ombrage", "Un problème de compteur Linky", "Un différentiel trop sensible"], answer: 1 },
        { type: "qcm", q: "À quoi sert le ratio de performance (PR) ?", options: ["À calculer la facture", "À comparer l'énergie produite à l'énergie théorique : une chute signale un défaut ou un ombrage", "À régler l'onduleur", "À mesurer l'isolement"], answer: 1 },
        { type: "match", q: "Paramétrage de l'onduleur : à quoi sert chaque réglage ?", pairs: [
          ["Pays", "Règles du réseau français"],
          ["Anti-îlotage", "Arrêt de l'onduleur en cas de coupure du réseau"],
          ["Limitation de puissance", "Respecter la puissance d'injection autorisée"]] }
      ]
    },
    {
      id: "m6", num: 6, titre: "IRVE et étude de cas : la maison Martin", duree: "60 min", competences: "C9 · tous critères",
      intro: "M. et Mme Martin rénovent une maison de 110 m² (monophasé 230 V, TT). Ton responsable te confie notamment la borne de recharge 7,4 kW du garage, à 25 m du tableau, puis le compte rendu.",
      source: "Présentation, parties 08 et 09 (diapositives 33 à 40) et étude de cas du cours",
      ex: [
        { type: "match", q: "Modes de charge :", pairs: [
          ["Mode 1", "Prise domestique standard : non recommandé"],
          ["Mode 2", "Câble + boîtier intégré : dépannage"],
          ["Mode 3", "Borne dédiée, pilote PWM : standard"],
          ["Mode 4", "Charge rapide en courant continu"]] },
        { type: "match", q: "États du pilote de contrôle :", pairs: [
          ["A", "Borne disponible"],
          ["B", "Véhicule connecté"],
          ["C", "Charge en cours"],
          ["E / F", "Défaut"]] },
        { type: "match", q: "Puissance et connecteur :", pairs: [
          ["3,7 kW", "Type 2, charge lente"],
          ["7,4 / 11 kW", "Type 2, charge normale"],
          ["50 à 150 kW en continu", "CCS / CHAdeMO"]] },
        { type: "num", q: "Borne 7,4 kW en monophasé 230 V : courant absorbé (arrondi à l'unité) ?", answer: 32, tol: 0.5, unit: "A",
          explain: "7 400 / 230 ≈ 32 A." },
        { type: "qcm", q: "Exercice 4 : quelle protection pour cette borne ?", options: ["Disjoncteur 20 A + ID 30 mA type AC", "Disjoncteur 40 A courbe C dédié + DDR 30 mA type A minimum (type B si la borne n'a pas de détection 6 mA DC)", "Disjoncteur 32 A sur le circuit des prises", "Aucune protection dédiée"], answer: 1 },
        { type: "num", q: "Câble U-1000 R2V 3G10 mm², 25 m, 32 A. Chute de tension ΔU = 2 × ρ × L × I / S avec ρ = 0,0172 Ω·mm²/m (arrondie au centième) ?", answer: 2.75, tol: 0.03, unit: "V",
          explain: "ΔU = 2 × 0,0172 × 25 × 32 / 10 ≈ 2,75 V, soit environ 1,2 % de 230 V." },
        { type: "qcm", q: "Quelle qualification l'entreprise doit-elle avoir pour cette borne de 7,4 kW ?", options: ["Aucune", "La qualification IRVE (obligatoire au-delà de 3,7 kW)", "Seulement QualiPV", "Le CONSUEL"], answer: 1 },
        { type: "pick", q: "Mesures de réception de la borne : coche celles à réaliser.", items: [
          ["Continuité du conducteur de protection", true],
          ["Mesure d'isolement", true],
          ["Résistance de la prise de terre", true],
          ["Essai du différentiel", true],
          ["Essai au testeur IRVE (états A, B, C)", true],
          ["Mesure de la luminosité du garage", false]] },
        { type: "open", q: "Exercice 5 : rédige en 4 ou 5 phrases ton compte rendu oral au responsable en fin de chantier chez les Martin.", hint: "Ce qui est fait (chauffage 5 zones, VMC, PV, borne), toutes les modifications par rapport au dossier, les réserves, les résultats de mesures avec unités, le chantier propre et les déchets triés." },
        { type: "task", phone: true, q: "Compte rendu oral avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Enregistre en 2 minutes ton compte rendu au responsable du chantier Martin.",
          "Cite au moins deux résultats de mesure avec leur unité (par exemple isolement DC, essai du différentiel).",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de l'enregistrement et remarques" }
      ]
    }
  ]
};
