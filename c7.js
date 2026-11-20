/* TP documentaire C7 – TP EEB – Installer des équipements de sûreté et de sécurité dans un bâtiment à usage d'habitation et autres
   Source : cours expert C7 (version présentiel) ; renvois à la présentation du cours expert C7 (8 parties).
   Types : qcm, tf, match, order, num, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c7-v1",
  num: 7, code: "C7", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer des équipements de sûreté et de sécurité dans un bâtiment d'habitation et autres",
  sousTitre: "TP documentaire C7 · TP EEB · CCP 2 Courants faibles et solutions",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C7 – Installer des équipements de sûreté et de sécurité » (sur le PC), le cours écrit et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "Le métier, la compétence C7 et ses limites", duree: "25 min", competences: "C7 · critères 4 et 5",
      intro: "Les trois systèmes de C7, ce que fait le technicien et ce qu'il ne fait pas, son rôle aux essais et sa sécurité.",
      source: "Présentation, partie 01 (diapositives 5 à 9)",
      ex: [
        { type: "match", q: "Les trois systèmes de C7 : associe chaque système à ses équipements.", pairs: [
          ["Sécurité incendie", "DAAF, détecteurs, déclencheurs manuels, diffuseurs"],
          ["Intrusion et alarme technique", "Centrale, détecteurs, sirène, fuite d'eau"],
          ["Contrôle d'accès", "Interphonie, lecteur de badge, gâche, ventouse"]] },
        { type: "pick", q: "Coche ce que fait le technicien C7.", items: [
          ["Poser, câbler et raccorder les équipements", true],
          ["Programmer les zones de la centrale", false],
          ["Réaliser les essais sur ordre", true],
          ["Choisir la catégorie de SSI d'un ERP", false],
          ["Présenter l'installation au client", true],
          ["Mettre sous tension sans ordre pour gagner du temps", false]] },
        { type: "match", q: "Frontières : à quelle compétence appartient chaque travail ?", pairs: [
          ["Alimentation du contrôle d'accès des parties communes", "C3"],
          ["Réseau VDI", "C6"],
          ["Automatismes de confort", "C8"]] },
        { type: "tf", q: "Sécurité et habilitation : vrai ou faux ?", items: [
          ["Près des circuits 230 V : séparer, condamner, vérifier l'absence de tension au V.A.T.", true],
          ["En parties communes, le technicien C7 travaille en B1V sous la responsabilité d'un B2V Essai.", true],
          ["Pour poser une sirène au plafond, une chaise stable suffit.", false],
          ["La mise sous tension et les essais se font sur ordre du chargé d'essais.", true]] },
        { type: "qcm", q: "Quel critère du jury est propre à C7 ?", options: ["Le calcul de section", "La présentation au client : il doit exploiter seul ses installations", "L'équilibrage des phases", "La mesure de la prise de terre"], answer: 1 },
        { type: "match", q: "Ce que le jury observe en C7 :", pairs: [
          ["Raccordement", "Conforme au dossier et aux notices"],
          ["Présentation au client", "Le client exploite seul ses installations"],
          ["Prévention et sécurité", "V.A.T., essais sur ordre, câbles adaptés"],
          ["Chantier propre", "Déchets triés (DEEE, piles)"]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "Détection incendie : du DAAF au SSI", duree: "30 min", competences: "C7 · critères 1 et 3",
      intro: "Le DAAF obligatoire en logement, la différence avec un SSI, la composition d'un SSI, ses catégories et les types d'alarme.",
      source: "Présentation, partie 02 (diapositives 10 à 13)",
      ex: [
        { type: "qcm", q: "Quel équipement incendie est obligatoire dans tout logement ?", options: ["Un SSI de catégorie A", "Au moins un DAAF conforme à la NF EN 14604", "Un déclencheur manuel", "Aucun"], answer: 1 },
        { type: "qcm", q: "Où poses-tu le DAAF d'un appartement ?", options: ["Dans la cuisine, au-dessus de la plaque", "Au plafond, dans la circulation qui dessert les chambres", "Dans la salle d'eau", "Au mur, à 1 m du sol"], answer: 1,
          explain: "Loin de la cuisine et de la salle d'eau pour éviter les fausses alarmes." },
        { type: "tf", q: "DAAF ou SSI : vrai ou faux ?", items: [
          ["Un DAAF alerte les occupants par un signal sonore.", true],
          ["Un DAAF commande la fermeture des portes coupe-feu.", false],
          ["Un DAAF est relié à une centrale (sauf modèles interconnectés).", false],
          ["Un SSI détecte et déclenche la mise en sécurité.", true]] },
        { type: "match", q: "SSI = SDI + SMSI : classe chaque équipement.", pairs: [
          ["Détecteurs, DM, ECS", "SDI : détecter"],
          ["CMSI, UGA, DAS", "SMSI : mettre en sécurité"]] },
        { type: "match", q: "Associe chaque sigle à sa signification.", pairs: [
          ["ECS", "Équipement de contrôle et de signalisation"],
          ["CMSI", "Centralisateur de mise en sécurité incendie"],
          ["UGA", "Unité de gestion d'alarme"],
          ["DAS", "Dispositif actionné de sécurité"],
          ["DM", "Déclencheur manuel"]] },
        { type: "match", q: "Catégories de SSI :", pairs: [
          ["Catégorie A", "Détection automatique + CMSI"],
          ["Catégorie B", "CMSI déclenché par des DM"],
          ["Catégorie E", "DAS commandés individuellement ou autonomes"]] },
        { type: "qcm", q: "Qui choisit la catégorie de SSI d'un ERP ?", options: ["Le technicien C7 sur le chantier", "L'ingénierie (bureau d'études) : ce n'est pas C7", "Le client", "Le fabricant de la centrale"], answer: 1 }
      ]
    },
    {
      id: "m3", num: 3, titre: "Installer une détection et alarme incendie", duree: "35 min", competences: "C7 · critères 1, 3 et 5",
      intro: "L'implantation des détecteurs et des déclencheurs manuels, le câble de chaque liaison, la surveillance des lignes et les essais sur ordre.",
      source: "Présentation, partie 03 (diapositives 14 à 17)",
      ex: [
        { type: "match", q: "Où implanter chaque équipement ?", pairs: [
          ["Détecteur de fumée", "Au plafond, à distance des murs et obstacles"],
          ["Déclencheur manuel", "Vers 1,30 m, près des issues, visible"],
          ["Diffuseur sonore", "En hauteur ou protégé, audible partout"]] },
        { type: "num", q: "Hauteur de pose habituelle d'un déclencheur manuel ?", answer: 1.3, tol: 0, unit: "m",
          explain: "0,90 à 1,30 m pour l'accessibilité en ERP." },
        { type: "match", q: "Quel câble pour quelle liaison ?", pairs: [
          ["Diffuseurs sonores, commandes de DAS", "CR1 (résistant au feu)"],
          ["Lignes de détection surveillées", "C2 minimum (CR1 selon la notice)"],
          ["Câbles multipaires", "Interdits en détection"]] },
        { type: "match", q: "La centrale surveille la ligne : associe l'état à sa cause.", pairs: [
          ["Veille", "Valeur normale (élément de fin de ligne)"],
          ["Alarme", "Détecteur ou DM actionné"],
          ["Dérangement", "Coupure ou court-circuit"]] },
        { type: "order", q: "Essai d'un DM sur ordre : remets les étapes dans l'ordre.", items: ["Recevoir l'ordre du chargé d'essais", "Prévenir les occupants", "Actionner le DM avec la clé d'essai", "Vérifier la zone ou le point à la centrale", "Réarmer le DM à la clé", "Remplir la fiche d'essai"] },
        { type: "tf", q: "Vrai ou faux ?", items: [
          ["On essaie un détecteur de fumée avec un aérosol d'essai homologué.", true],
          ["Les câbles incendie peuvent partager le cheminement des câbles 230 V.", false],
          ["Les boîtes et équipements de sécurité incendie sont rouges pour être identifiés.", true],
          ["Sur une boucle adressable, chaque point a une adresse et la ligne revient à la centrale.", true]] }
      ]
    },
    {
      id: "m4", num: 4, titre: "Alarme intrusion : implanter et câbler", duree: "45 min", competences: "C7 · critères 1 et 3",
      intro: "Les grades de la NF EN 50131, les composants, l'implantation sans fausse alarme, les six conducteurs d'un détecteur et les résistances d'équilibrage.",
      source: "Présentation, parties 04 et 05 (diapositives 18 à 25)",
      ex: [
        { type: "match", q: "Grades NF EN 50131 :", pairs: [
          ["Grade 1", "Risque faible : logement, grand public"],
          ["Grade 2", "Risque faible à moyen : maison, commerce"],
          ["Grade 3", "Risque moyen à élevé : locaux pros, télésurveillance"],
          ["Grade 4", "Risque élevé : site sensible, hors C7"]] },
        { type: "qcm", q: "Un système comporte une centrale de grade 3 et un détecteur de grade 2. Quel est son grade ?", options: ["Grade 3", "Grade 2", "Grade 2,5", "Grade 1"], answer: 1,
          explain: "Le grade d'un système est celui de son élément le plus faible." },
        { type: "match", q: "Composants d'un système d'intrusion :", pairs: [
          ["Centrale", "Zones, codes, transmission ; secteur + batterie"],
          ["Clavier / badge", "Mise en et hors service"],
          ["IRP", "Mouvement d'une source de chaleur"],
          ["Contact d'ouverture", "Aimant + ILS sur l'ouvrant"],
          ["Transmetteur", "IP / 4G vers l'occupant ou la télésurveillance"]] },
        { type: "pick", q: "Détecteur IRP : coche les bonnes pratiques d'implantation.", items: [
          ["De préférence dans un angle", true],
          ["Le déplacement croise les faisceaux", true],
          ["Face à un radiateur pour bien voir la pièce", false],
          ["Vers une fenêtre exposée au soleil", false],
          ["Hauteur selon la notice", true]] },
        { type: "qcm", q: "Contact d'ouverture : où va l'aimant ?", options: ["Sur le dormant", "Sur l'ouvrant (partie mobile)", "Sur le mur à côté", "Dans la centrale"], answer: 1 },
        { type: "match", q: "Les six conducteurs d'un détecteur : associe les bornes à leur fonction.", pairs: [
          ["+12 V / 0 V", "Alimentation (polarité)"],
          ["AL / AL", "Contact d'alarme, fermé au repos"],
          ["AP / AP", "Autoprotection (capot), fermée au repos"]] },
        { type: "qcm", q: "Pourquoi le contact d'alarme est-il fermé au repos ?", options: ["Pour consommer moins", "Pour qu'une coupure du câble soit aussi vue comme une alarme", "Pour que la sirène reste silencieuse", "Par habitude"], answer: 1 },
        { type: "match", q: "Double équilibrage (R1 en parallèle sur le contact, R2 en série) : que lit la centrale ?", pairs: [
          ["Repos", "R2"],
          ["Alarme", "R1 + R2"],
          ["Court-circuit (≈ 0 Ω)", "Sabotage"],
          ["Coupure (résistance infinie)", "Sabotage aussi"]] },
        { type: "qcm", q: "Local commun : tu mesures R1 + R2 sur la boucle au repos, capot fermé, personne devant le détecteur. Que conclus-tu ?", options: ["Tout est normal", "Le contact d'alarme est ouvert : détecteur en alarme ou contact AL mal raccordé ; je contrôle le câblage", "C'est un sabotage", "La batterie est faible"], answer: 1,
          explain: "Au repos, on doit lire R2 seule." }
      ]
    },
    {
      id: "m5", num: 5, titre: "Contrôle d'accès, interphonie et cybersécurité", duree: "35 min", competences: "C7 · critères 1, 3 et 5",
      intro: "Le point d'accès, l'interphonie N+1, le choix entre verrouillage à émission et à rupture de courant, et les règles de cybersécurité.",
      source: "Présentation, partie 06 (diapositives 26 à 29)",
      ex: [
        { type: "match", q: "Le point d'accès : associe chaque élément à son rôle.", pairs: [
          ["Lecteur / clavier", "En façade, IP65 minimum"],
          ["Contrôleur", "Droits, plages horaires, journal"],
          ["Gâche / ventouse", "Verrouillage de la porte"],
          ["Bouton de sortie", "Ouverture intérieure sans badge"],
          ["Alimentation", "Bloc dédié + batterie"]] },
        { type: "match", q: "Sans courant, que fait chaque organe ?", pairs: [
          ["Organe à émission de courant", "Reste verrouillé"],
          ["Organe à rupture de courant", "Se déverrouille"]] },
        { type: "qcm", q: "La porte d'entrée de la résidence est aussi une issue de secours. Quel verrouillage ?", options: ["À émission de courant", "À rupture de courant, avec un déverrouillage d'urgence", "Serrure à clé seule", "Aucun"], answer: 1,
          explain: "Une coupure ne doit jamais enfermer les occupants." },
        { type: "qcm", q: "Interphonie N+1 dans une résidence de 6 logements : combien de conducteurs d'appel et de communs ?", options: ["6 d'appel + 1 commun", "1 bus 2 fils", "12 conducteurs", "6 d'appel + 6 communs"], answer: 0 },
        { type: "qcm", q: "Le combiné du logement 4 sonne quand on appuie sur le bouton du logement 3. Où cherches-tu ?", options: ["Dans le combiné du logement 4", "Au raccordement des fils d'appel 3 et 4 (platine ou distributeur) : ils sont inversés", "Dans l'alimentation", "Sur la gâche"], answer: 1 },
        { type: "order", q: "Cybersécurité d'un contrôleur connecté : remets dans l'ordre.", items: ["Changer le mot de passe par défaut", "Mettre à jour le firmware", "Activer le chiffrement (HTTPS)", "Fermer les ports de configuration", "Remettre les codes au client sous pli"] },
        { type: "tf", q: "Vrai ou faux ?", items: [
          ["Les câbles du contrôle d'accès cheminent séparés des câbles 230 V (ou avec écran).", true],
          ["On laisse les codes usine pour faciliter le SAV.", false],
          ["Les conducteurs de réserve de l'interphonie sont isolés et repérés.", true]] }
      ]
    },
    {
      id: "m6", num: 6, titre: "Mettre en service et présenter : la résidence de 6 logements", duree: "55 min", competences: "C7 · tous critères",
      intro: "Une résidence de 6 logements : porte d'entrée avec lecteur de badge et interphonie, local commun avec alarme intrusion, logement témoin à équiper d'un DAAF. Ton responsable te confie la pose, le raccordement et la présentation au syndic.",
      source: "Présentation, partie 07 (diapositives 30 à 33)",
      ex: [
        { type: "order", q: "Avant la mise sous tension : remets les contrôles dans l'ordre.", items: ["Visuel : boîtiers fermés, câbles fixés, repérage", "Séparation courants forts / faibles", "Continuité des boucles à l'ohmmètre (déconnectées)", "Isolement des seuls circuits 230 V", "Polarités, fins de ligne, réserves isolées"] },
        { type: "qcm", q: "Peut-on mesurer l'isolement sous 500 V d'une ligne de détecteurs ?", options: ["Oui, comme un circuit 230 V", "Non : on mesure seulement les circuits 230 V ; l'électronique et les lignes TBT sont déconnectées", "Oui, mais sous 1 000 V", "Seulement en ERP"], answer: 1 },
        { type: "match", q: "Essais sur ordre : quel résultat attendu ?", pairs: [
          ["Appel depuis la platine de rue", "Le bon combiné sonne"],
          ["Bouton d'ouverture", "La gâche se déverrouille"],
          ["Test de marche devant l'IRP", "Zone en alarme à la centrale"],
          ["Capot du détecteur ouvert", "Autoprotection signalée"],
          ["DM actionné à la clé", "Bon point, bonne zone"]] },
        { type: "order", q: "Présenter au syndic en 4 temps : remets dans l'ordre.", items: ["Expliquer simplement", "Montrer le geste", "Faire faire au client", "Remettre notices, codes sous pli, contacts SAV"] },
        { type: "pick", q: "Le dossier remis au client contient :", items: [
          ["Plans annotés et fiches de mise en service", true],
          ["Codes dans une enveloppe cachetée", true],
          ["Conduite à tenir en cas d'alarme incendie", true],
          ["Codes usine écrits sur la centrale", false],
          ["Entretien du DAAF", true]] },
        { type: "qcm", q: "La présentation est réussie quand :", options: ["Le client a signé le PV", "Le client refait seul l'appel, l'ouverture, la mise en / hors service et sait quoi faire en cas d'alarme incendie", "Tu as tout expliqué en 5 minutes", "Le syndic a reçu la facture"], answer: 1 },
        { type: "qcm", q: "Le client est malentendant. Comment adaptes-tu ta présentation ?", options: ["Tu parles plus fort", "Tu te places face à lui, tu démontres et tu laisses des consignes écrites", "Tu envoies un e-mail plus tard", "Tu le présentes à son voisin"], answer: 1 },
        { type: "open", q: "Logement témoin : rédige en 4 ou 5 phrases ce que tu dis au syndic sur le DAAF (où il est posé et pourquoi, à quoi il sert, comment l'entretenir et le tester, ce qu'il ne fait pas).", hint: "Plafond de la circulation des chambres ; NF EN 14604 ; il alerte les occupants mais ne commande aucune mise en sécurité ; test au bouton, dépoussiérage, pile ou fin de vie selon la notice." },
        { type: "task", phone: true, q: "Fiche d'essais et compte rendu avec ton téléphone", steps: [
          "Au plateau, pendant les essais sur ordre, photographie l'indication de la centrale pour le test de marche de l'IRP et pour l'ouverture du capot.",
          "Photographie le DM après réarmement à la clé (si un DM est installé au plateau).",
          "Enregistre au dictaphone, en 2 minutes, ton compte rendu au responsable : ce qui est fait par système, ce qui est modifié par rapport au dossier, les réserves.",
          "Envoie les photos et l'enregistrement à ton formateur (ou montre-les en fin de séance)."], note: "Résultats des essais et remarques" }
      ]
    }
  ]
};
