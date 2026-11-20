/* TP documentaire C6 – TP EEB – Installer des réseaux de communication dans un bâtiment à usage d'habitation et autres
   Source : cours expert C6 (version présentiel, v1 du 11 novembre 2026) ; renvois à la présentation du cours expert C6 (8 parties).
   Types : qcm, tf, match, order, num, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c6-v1",
  num: 6, code: "C6", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer des réseaux de communication dans un bâtiment d'habitation et autres",
  sousTitre: "TP documentaire C6 · TP EEB · CCP 2 Courants faibles et solutions",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C6 – Installer des réseaux de communication » (sur le PC), le cours écrit et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "Le métier, la compétence C6 et ses limites", duree: "25 min", competences: "C6 · critères 3, 4 et 6",
      intro: "Ce que transporte un réseau de communication, ce que fait l'électricien en C6, ce qui n'en fait pas partie et l'habilitation.",
      source: "Présentation, partie 01 (diapositives 5 à 9)",
      ex: [
        { type: "order", q: "Remets dans l'ordre les étapes de la compétence C6.", items: ["Poser coffret, canalisations et prises", "Raccorder prises RJ45, panneau et jarretières", "Tester chaque lien", "Diagnostiquer et corriger les défauts", "Repérer aux deux extrémités", "Rendre compte : fiche de recette et recollement"] },
        { type: "match", q: "Courants forts ou courants faibles : associe.", pairs: [
          ["Les courants forts transportent…", "De l'énergie (230 V)"],
          ["Les courants faibles transportent…", "Des informations"],
          ["Risque principal des courants forts", "Électrisation, incendie"],
          ["Risque principal des courants faibles", "Perturbations, perte de données"]] },
        { type: "pick", q: "Coche ce qui fait partie de la compétence C6.", items: [
          ["Raccorder une prise RJ45 et le panneau de brassage", true],
          ["Configurer la box et le switch", false],
          ["Préparer l'emplacement et l'alimentation de la box", true],
          ["Tester chaque lien et remplir la fiche de recette", true],
          ["Installer la centrale d'alarme", false],
          ["Repérer chaque lien aux deux extrémités", true]] },
        { type: "match", q: "Hors de C6 : à quelle compétence appartient chaque travail ?", pairs: [
          ["Interphonie d'un immeuble", "C3 / C7"],
          ["Alarme intrusion, contrôle d'accès avancé", "C7"],
          ["Réseau d'énergie (IRVE, photovoltaïque…)", "C9"]] },
        { type: "tf", q: "Sécurité et habilitation : vrai ou faux ?", items: [
          ["Avant d'ouvrir une goulotte voisine d'un circuit 230 V : séparer, condamner, vérifier l'absence de tension au V.A.T.", true],
          ["En parties communes ou en tertiaire, l'électricien C6 travaille en B1V sous la responsabilité d'un B2V Essai.", true],
          ["Le titre d'habilitation est délivré par l'organisme de formation.", false],
          ["Un raccordement soigné qui échoue au test est quand même acquis.", false]],
          explain: "Le titre d'habilitation est délivré par l'employeur. Le jury regarde le lien testé." },
        { type: "qcm", q: "Le client te demande de configurer le Wi-Fi de sa box. Que réponds-tu ?", options: ["Je le fais, c'est dans C6", "La box est un élément actif hors de C6 : j'ai préparé son emplacement et son alimentation, la configuration relève de l'opérateur ou d'un spécialiste", "Je remplace la box", "Je refuse sans explication"], answer: 1 },
        { type: "match", q: "Ce que le jury observe en C6 :", pairs: [
          ["Pose et fixation", "Selon les règles professionnelles et les DTU"],
          ["Raccordement", "Conforme au dossier technique et aux notices"],
          ["Défauts", "Diagnostiqués, localisés, rectifiés"],
          ["Repérage", "Conforme au dossier technique"]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "L'architecture d'un réseau de communication", duree: "35 min", competences: "C6 · critères 1 et 3",
      intro: "Le chemin du signal de l'opérateur à la prise, le coffret de communication, le câblage en étoile et les grades résidentiels.",
      source: "Présentation, partie 02 (diapositives 10 à 13)",
      ex: [
        { type: "order", q: "Le chemin du signal dans un logement fibré : remets dans l'ordre.", items: ["Fibre de l'opérateur depuis la rue", "PTO / DTIo", "Box (élément actif)", "Panneau de brassage", "Prise RJ45 dans la pièce"] },
        { type: "match", q: "Associe chaque élément à son rôle.", pairs: [
          ["DTIo", "Limite entre l'opérateur et l'installation"],
          ["Panneau de brassage", "Chaque câble de pièce arrive sur un port numéroté"],
          ["Répartiteur TV", "Distribue la télévision vers les prises"],
          ["Cordon de brassage", "Relie un port du panneau à l'élément actif"]] },
        { type: "qcm", q: "Où place-t-on le coffret de communication d'un logement ?", options: ["Dans la salle de bains", "Dans la GTL, à côté du tableau électrique", "Au grenier", "Dans le tableau électrique lui-même"], answer: 1 },
        { type: "tf", q: "Le câblage en étoile : vrai ou faux ?", items: [
          ["Chaque prise a son propre câble depuis le panneau.", true],
          ["On peut repiquer une prise RJ45 sur la prise voisine.", false],
          ["Un défaut sur un câble ne touche qu'une prise.", true],
          ["Chaque lien se teste séparément.", true]] },
        { type: "match", q: "Grades du câblage résidentiel :", pairs: [
          ["Grade 1", "Téléphone, internet"],
          ["Grade 2TV", "+ télévision sur RJ45"],
          ["Grade 3TV", "+ satellite, hauts débits"]] },
        { type: "match", q: "Le coffret de communication, rangée par rangée :", pairs: [
          ["Arrivée", "DTI cuivre et / ou DTIo"],
          ["Brassage", "Panneau RJ45"],
          ["Actifs", "Emplacement box et switch + prises 2P+T"],
          ["Terre", "Bornier relié à la GTL"]] },
        { type: "num", q: "Tertiaire : longueur maximale d'un lien permanent (du panneau à la prise) ?", answer: 90, tol: 0, unit: "m",
          explain: "Lien permanent ≤ 90 m ; canal complet, cordons compris, ≤ 100 m (NF EN 50173)." },
        { type: "qcm", q: "Dans un logement fibré, où s'arrête le réseau de l'opérateur ?", options: ["Au tableau électrique", "Au DTIo (dispositif de terminaison intérieur optique)", "À la box", "À la première prise RJ45"], answer: 1 }
      ]
    },
    {
      id: "m3", num: 3, titre: "Les câbles cuivre et leur pose", duree: "35 min", competences: "C6 · critères 1 et 2",
      intro: "Les quatre paires torsadées, les catégories, la désignation des blindages et les règles de pose, notamment la séparation d'avec les courants forts.",
      source: "Présentation, partie 03 (diapositives 14 à 17)",
      ex: [
        { type: "match", q: "Catégories de câbles : associe chaque catégorie à son usage.", pairs: [
          ["Cat. 5e (100 MHz)", "Ancien résidentiel, 1 Gbit/s"],
          ["Cat. 6 (250 MHz)", "Minimum courant en neuf"],
          ["Cat. 6A (500 MHz)", "10 Gbit/s sur 100 m, tertiaire"]] },
        { type: "match", q: "Lire la désignation du blindage :", pairs: [
          ["U/UTP", "Aucun écran"],
          ["F/UTP", "Écran général en feuillard, paires non écrantées"],
          ["S/FTP", "Tresse générale + écran par paire"]] },
        { type: "qcm", q: "Combien de conducteurs dans un câble de communication cuivre courant ?", options: ["4, en 2 paires", "8, en 4 paires torsadées", "6, en 3 paires", "2, coaxiaux"], answer: 1,
          explain: "Paires orange, verte, bleue et marron. La torsade protège le signal." },
        { type: "pick", q: "Coche les bonnes pratiques de pose.", items: [
          ["Tirer sans forcer ni vriller le câble", true],
          ["Serrer fort les colliers pour un rendu propre", false],
          ["Utiliser des attaches souples (velcro)", true],
          ["Laisser une réserve lovée côté coffret", true],
          ["Faire un raccord au milieu si le câble est trop court", false],
          ["Respecter le rayon de courbure de la notice", true]] },
        { type: "tf", q: "Cohabitation avec les courants forts : vrai ou faux ?", items: [
          ["Un câble RJ45 peut passer dans le même conduit qu'un câble 230 V s'il est blindé.", false],
          ["En goulotte, on utilise des compartiments séparés.", true],
          ["Un croisement avec un câble 230 V se fait à angle droit.", true],
          ["En parallèle, sans séparateur, on garde 20 cm entre câbles non blindés ; 5 cm avec un séparateur acier.", true]],
          explain: "Jamais dans le même conduit ni le même compartiment (NF C 15-100 § 528.1). Distances en parallèle : NF EN 50174-2 ; le CCTP s'applique en priorité." },
        { type: "qcm", q: "Pourquoi interdit-on les colliers serrés sur un câble de communication ?", options: ["Ils coûtent cher", "L'écrasement déforme les paires et dégrade les performances", "Ils empêchent le repérage", "Ce n'est pas interdit"], answer: 1 },
        { type: "qcm", q: "Au plateau (Espace 3), quel câble utilise-t-on ?", options: ["U/UTP cat. 5e", "F/UTP cat. 6, prises et panneau blindés", "S/FTP cat. 7", "Câble coaxial"], answer: 1 }
      ]
    },
    {
      id: "m4", num: 4, titre: "Raccorder une prise RJ45 et un panneau de brassage", duree: "40 min", competences: "C6 · critère 3",
      intro: "Le code couleur T568B, la préparation du câble, le dépairage, la reprise de l'écran et le panneau de brassage.",
      source: "Présentation, partie 04 (diapositives 18 à 21)",
      ex: [
        { type: "order", q: "Code T568B : remets les couleurs dans l'ordre, de la broche 1 à la broche 8.", items: ["Blanc / orange", "Orange", "Blanc / vert", "Bleu", "Blanc / bleu", "Vert", "Blanc / marron", "Marron"] },
        { type: "qcm", q: "En T568B, quelles broches utilise la paire verte ?", options: ["1 et 2", "3 et 6", "4 et 5", "7 et 8"], answer: 1 },
        { type: "qcm", q: "Une extrémité est en T568A, l'autre en T568B. Que se passe-t-il ?", options: ["Rien, les deux codes sont compatibles", "Les paires 2 et 3 sont croisées : le test échoue", "Le câble devient blindé", "Le débit double"], answer: 1,
          explain: "La règle : le même code aux deux bouts." },
        { type: "order", q: "Raccorder une prise blindée : remets les étapes dans l'ordre.", items: ["Dégainer sur la longueur de la notice, sans entailler les paires", "Rabattre l'écran et le drain selon le connecteur", "Placer chaque conducteur dans sa fente (T568B)", "Garder la torsade jusqu'au contact", "Insérer à l'outil ou par fermeture du connecteur", "Vérifier : gaine maintenue jusqu'au connecteur, écran repris"] },
        { type: "num", q: "Repère de dépairage maximal (sauf valeur de la notice) ?", answer: 13, tol: 0, unit: "mm",
          explain: "Au-delà : diaphonie et échec au test." },
        { type: "tf", q: "Vrai ou faux ?", items: [
          ["L'écran d'un câble blindé est repris aux deux extrémités.", true],
          ["Sur le panneau, le numéro du port est le repère de la prise.", true],
          ["À 100 Mbit/s, un fil coupé sur la paire 4 se voit tout de suite.", false]],
          explain: "100 Mbit/s n'utilise que les paires 2 et 3 : le défaut passe inaperçu. Seul le test le révèle." },
        { type: "match", q: "T568B : quelles broches pour chaque paire ?", pairs: [
          ["Paire orange", "1 et 2"],
          ["Paire verte", "3 et 6"],
          ["Paire bleue", "4 et 5"],
          ["Paire marron", "7 et 8"]] },
        { type: "qcm", q: "Pourquoi détorsade-t-on les paires le moins possible ?", options: ["Pour gagner du temps", "La torsade limite la diaphonie : trop de dépairage fait échouer le test", "Pour économiser du câble", "Pour que l'écran tienne"], answer: 1 }
      ]
    },
    {
      id: "m5", num: 5, titre: "La fibre optique", duree: "30 min", competences: "C6 · critères 3 et 6",
      intro: "Les types de fibres, les connecteurs, la sécurité pour les yeux et la propreté des connecteurs.",
      source: "Présentation, partie 05 (diapositives 22 à 25)",
      ex: [
        { type: "match", q: "Associe chaque fibre à son usage.", pairs: [
          ["Multimode OM3 / OM4 (cœur 50 µm)", "Liaisons courtes, baies, bâtiment"],
          ["Monomode OS2 (cœur 9 µm)", "Longues distances, opérateur"],
          ["Monomode G.657", "FTTH : peu sensible aux courbures"]] },
        { type: "match", q: "Reconnaître les connecteurs :", pairs: [
          ["SC/APC", "Vert, poli en angle : FTTH"],
          ["SC/UPC", "Bleu"],
          ["LC", "Petit format : baies"]] },
        { type: "qcm", q: "On raccorde un connecteur APC (vert) sur un UPC (bleu) :", options: ["Aucun problème", "Forte perte, et les faces peuvent être abîmées", "Le débit augmente", "C'est la règle en FTTH"], answer: 1 },
        { type: "tf", q: "Sécurité : vrai ou faux ?", items: [
          ["On peut regarder l'extrémité d'une fibre si on ne voit pas de lumière.", false],
          ["On considère toute fibre comme éclairée.", true],
          ["On contrôle une fibre à l'appareil (photomètre, sonde), jamais à l'œil.", true],
          ["Les chutes de fibre vont à la poubelle ordinaire.", false]],
          explain: "Le rayonnement est souvent infrarouge, donc invisible. Les chutes sont des éclats de verre : boîte dédiée." },
        { type: "pick", q: "Manipuler une jarretière : coche les bons gestes.", items: [
          ["Respecter le rayon de courbure", true],
          ["Serrer la jarretière avec un collier", false],
          ["Remettre le capuchon dès qu'un connecteur est libre", true],
          ["Nettoyer la face du connecteur avant connexion", true],
          ["Souffler sur le connecteur pour le dépoussiérer", false],
          ["Lover la réserve dans le DTIo", true]] },
        { type: "match", q: "Tests fibre (niveau 2) : quel appareil pour quoi ?", pairs: [
          ["Photomètre + source", "Affaiblissement en dB"],
          ["Localisateur visuel (VFL)", "Cassure, courbure"],
          ["Réflectomètre (OTDR)", "Position des événements sur la fibre"]] },
        { type: "qcm", q: "La fibre transporte l'information sous forme de :", options: ["Courant électrique", "Lumière, souvent infrarouge et invisible", "Ondes radio", "Son"], answer: 1 }
      ]
    },
    {
      id: "m6", num: 6, titre: "Tester, diagnostiquer, livrer : le bureau de l'Espace 3", duree: "50 min", competences: "C6 · tous critères",
      intro: "Un petit local tertiaire (Espace 3 du plateau) reçoit deux postes de travail. Le coffret de communication est en place ; la goulotte GM a un compartiment courants faibles. Ton responsable te confie le câblage de deux prises RJ45 cat. 6 blindées (RJ1 et RJ2, ports P1 et P2) et leur recette.",
      source: "Présentation, parties 06 et 07 (diapositives 26 à 32)",
      ex: [
        { type: "match", q: "Associe l'indication du testeur au défaut.", pairs: [
          ["1 ↔ 2 croisés", "Paire inversée"],
          ["7 ouvert", "Conducteur coupé ou non inséré"],
          ["1→3, 2→6, 3→1, 6→2", "Paires croisées (T568A / T568B)"],
          ["Deux broches reliées", "Court-circuit"],
          ["Écran non continu", "Écran non repris sur le connecteur"]] },
        { type: "order", q: "Après un FAIL : remets la démarche de diagnostic dans l'ordre.", items: ["Lire l'indication du testeur", "En déduire le type de défaut", "Ouvrir une extrémité et comparer au T568B", "Si elle est conforme, ouvrir l'autre", "Corriger l'extrémité fautive", "Re-tester jusqu'au PASS"] },
        { type: "qcm", q: "Lien 2 : le testeur affiche « 1→3, 2→6, 3→1, 6→2 ». Que fais-tu ?", options: ["Je change tout le câble", "Je contrôle les deux extrémités : l'une est en T568A ; je la refais en T568B et je re-teste", "Je laisse : le lien fonctionne quand même", "Je change le testeur"], answer: 1 },
        { type: "qcm", q: "La prise du bureau porte le repère RJ2. Quel repère sur le panneau ?", options: ["P1", "P2", "Aucun", "Le nom du bureau"], answer: 1,
          explain: "Même numéro aux deux extrémités, conforme au dossier technique." },
        { type: "qcm", q: "Les 8 broches sont « en continuité », mais deux conducteurs de paires différentes sont échangés. Comment s'appelle ce défaut et qui le voit ?", options: ["Paire inversée, tout testeur", "Paire séparée : seul un testeur qui mesure la diaphonie le voit", "Court-circuit, un multimètre", "Aucun défaut"], answer: 1 },
        { type: "pick", q: "La fiche de recette contient :", items: [
          ["Le repère du lien (P1 / RJ1)", true],
          ["Le résultat PASS / FAIL de chaque test", true],
          ["La longueur mesurée", true],
          ["Le prix du câble", false],
          ["La date, le nom et la signature", true]] },
        { type: "match", q: "Chantier propre : où va chaque déchet ?", pairs: [
          ["Chutes de câble cuivre", "Recyclage cuivre"],
          ["Emballages, gaines plastiques", "Plastiques, emballages"],
          ["Chutes de fibre", "Boîte à éclats"]] },
        { type: "open", q: "Le client veut faire passer le câble RJ45 dans le même conduit que la prise 230 V voisine « pour gagner du temps ». Rédige en 3 ou 4 phrases ta réponse au client.", hint: "La règle (jamais dans le même conduit ni le même compartiment), le risque (perturbations, perte de données, sécurité), ta solution (compartiment courants faibles de la goulotte GM ou conduit distinct, croisement à angle droit)." },
        { type: "task", phone: true, q: "Recette et compte rendu avec ton téléphone", steps: [
          "Au plateau, après le test des liens P1-RJ1 et P2-RJ2, photographie l'écran du testeur pour chaque lien.",
          "Photographie l'étiquette du câble à chaque extrémité (port du panneau et prise).",
          "Enregistre au dictaphone ton compte rendu en 2 minutes : ce qui est fait, les résultats des tests, ce qui a changé par rapport au dossier, les réserves.",
          "Envoie les photos et l'enregistrement à ton formateur (ou montre-les en fin de séance)."], note: "Résultats des deux liens (PASS / FAIL, longueur) et remarques" }
      ]
    }
  ]
};
