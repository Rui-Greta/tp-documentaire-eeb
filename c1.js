/* TP documentaire C1 – TP EEB – Installer les réseaux d'énergie et les équipements courants forts dans les logements
   Types : qcm, tf, match, order, num, gen, pick, open, task. */
window.TPDOC = {
  id: "eeb-tpdoc-c1-v1",
  num: 1, code: "C1", groupe: "EEB",
  formation: "TP EEB",
  logo: "logo_greta.png",
  titre: "Installer les réseaux d'énergie courants forts dans les logements",
  sousTitre: "TP documentaire C1 · TP EEB · CCP 1 Courants forts",
  duree: "3 h 45",
  lead: "Tu utilises la présentation « C1 – Installer les réseaux d'énergie… » (sur le PC), le cours écrit, les guides NF C 15-100 et ton téléphone.",
  missions: [
    {
      id: "m1", num: 1, titre: "La compétence C1 et le dossier technique", duree: "30 min", competences: "C1 · étapes 1 et 9",
      intro: "Ce que couvre C1 et où elle s'arrête, l'habilitation, les documents du dossier, le repérage des circuits et la lecture d'un schéma unifilaire.",
      source: "Présentation, parties 01 et 02 (diapositives 5 à 18)",
      ex: [
        { type: "order", q: "Remets dans l'ordre les 9 étapes de la compétence C1.", items: ["Exploiter le dossier", "Approvisionner", "Tracer", "Encastrer", "Poser conduits et supports", "Insérer les conducteurs", "Raccorder", "Rendre propre et trier", "Rendre compte"] },
        { type: "match", q: "Hors de C1 : à quelle compétence appartient chaque tâche ?", pairs: [
          ["Mesurer l'isolement et mettre sous tension", "C2"],
          ["Éclairage de la cage d'escalier d'un immeuble", "C3"],
          ["Remettre en sécurité une installation ancienne", "C4"],
          ["Installer l'électricité d'un bureau", "C5"],
          ["Poser une prise RJ45 ou une alarme", "CCP 2"]] },
        { type: "qcm", q: "Un stagiaire habilité B1V travaille…", options: ["seul, sur toute installation", "comme exécutant, sous la responsabilité d'une personne habilitée B2V", "uniquement sur les courants faibles", "uniquement hors tension, sans titre"], answer: 1 },
        { type: "qcm", q: "Qui délivre le titre d'habilitation électrique ?", options: ["Le formateur", "Le CONSUEL", "L'employeur", "ENEDIS"], answer: 2 },
        { type: "match", q: "Quel document du dossier répond à chaque question ?", pairs: [
          ["Où placer chaque appareil ?", "Plan architectural"],
          ["Quelle protection pour chaque circuit ?", "Schéma unifilaire"],
          ["Comment câbler chaque conducteur ?", "Schéma multifilaire"],
          ["Dans quel ordre ranger le tableau ?", "Plan de face du tableau"],
          ["Quelle longueur de dénudage, quel couple de serrage ?", "Notices fabricants"]] },
        { type: "match", q: "Associe chaque lettre de repérage à sa famille de circuits.", pairs: [
          ["L", "Éclairage"], ["P", "Prises de courant 16 A"], ["S", "Circuit spécialisé (un appareil)"], ["C", "Chauffage"]] },
        { type: "num", img: "eeb_c1_unifilaire.png", alt: "Schéma unifilaire : AGCP, deux ID, quatre départs", q: "Observe le schéma unifilaire : combien de circuits sont protégés par ID2 ?", answer: 2, tol: 0, unit: "circuits",
          explain: "S1 (plaque de cuisson) et S4 (lave-linge)." },
        { type: "qcm", img: "eeb_c1_unifilaire.png", alt: "Schéma unifilaire : AGCP, deux ID, quatre départs", q: "Pourquoi la plaque et le lave-linge sont-ils sous ID2 ?", options: ["Parce qu'ID2 est le plus proche de la cuisine", "Parce qu'ils exigent un ID de type A", "Parce qu'ils consomment moins", "Parce qu'ID1 est déjà plein"], answer: 1 },
        { type: "num", img: "eeb_c1_unifilaire.png", alt: "Schéma unifilaire : AGCP, deux ID, quatre départs", q: "Combien de conducteurs dans la canalisation de L1 (traits obliques) ?", answer: 3, tol: 0, unit: "conducteurs",
          explain: "Phase (trait seul), neutre (trait + point), PE (trait en T) : câble 3G." },
        { type: "tf", q: "Vérifier la cohérence du dossier : vrai ou faux ?", items: [
          ["Chaque appareil du plan porte un repère qui existe sur l'unifilaire.", true],
          ["Une incohérence se corrige directement sur le chantier, à sa façon.", false],
          ["Une incohérence se signale par écrit au responsable avant de commencer.", true],
          ["Le plan de face doit garder une réserve d'au moins 20 %.", true]] }
      ]
    },
    {
      id: "m2", num: 2, titre: "Les règles de la NF C 15-100", duree: "45 min", competences: "C1 · étapes 1 et 7",
      intro: "Équipement minimal des pièces, circuits et protections, différentiels, GTL, parafoudre, salle d'eau et terre.",
      source: "Présentation, partie 03 (diapositives 19 à 30) · guides NF C 15-100",
      ex: [
        { type: "match", q: "Équipement minimal : combien de socles 16 A ?", pairs: [
          ["Chambre", "3 socles"],
          ["Cuisine", "6 socles, dont 4 au-dessus du plan de travail"],
          ["Salle d'eau", "1 socle hors volumes"],
          ["WC", "Aucun socle exigé"],
          ["Circulation de plus de 4 m²", "1 socle"]] },
        { type: "gen", gen: "socles", n: 2, q: "Séjour : calcule le nombre minimal de socles 16 A." },
        { type: "match", q: "Associe chaque circuit à sa section et à son disjoncteur.", pairs: [
          ["Éclairage (8 points)", "1,5 mm² – 10 A (16 A admis)"],
          ["Prises 16 A (8 socles)", "1,5 mm² – 16 A"],
          ["Prises 16 A (12 socles)", "2,5 mm² – 20 A"],
          ["Lave-linge", "2,5 mm² – 20 A, circuit dédié"],
          ["Plaque de cuisson", "6 mm² – 32 A"],
          ["VMC", "1,5 mm² – 2 A ou 6 A selon la notice"]] },
        { type: "gen", gen: "idnb", n: 3, q: "Calcule le nombre minimal d'interrupteurs différentiels 30 mA." },
        { type: "qcm", q: "Quels circuits exigent un interrupteur différentiel de type A ?", options: ["Éclairage, prises, volets", "Plaque de cuisson, lave-linge, IRVE", "VMC, chauffe-eau, congélateur", "Chauffage et salle d'eau"], answer: 1 },
        { type: "tf", q: "La protection différentielle : vrai ou faux ?", items: [
          ["Un ID 30 mA protège au maximum 8 circuits.", true],
          ["Un ID de type AC peut protéger le lave-linge.", false],
          ["L'éclairage et les prises d'une même zone sont sur des ID différents.", true],
          ["En cas de défaut, l'AGCP 500 mA déclenche avant l'ID 30 mA.", false],
          ["Chauffage + chauffe-eau > 8 kVA sous un même ID : un ID 40 A type AC est remplacé par un 63 A.", true]],
          explain: "Un type A peut protéger d'autres circuits, l'inverse est interdit. L'AGCP est sélectif (retardé) : l'ID 30 mA déclenche en premier." },
        { type: "match", q: "GTL et tableau : associe chaque règle à sa valeur.", pairs: [
          ["Largeur de la GTL", "600 mm minimum"],
          ["Profondeur de la GTL", "200 mm minimum"],
          ["Hauteur des organes de manœuvre", "Entre 0,50 m et 1,80 m"],
          ["Réserve du tableau", "20 % d'emplacements libres"]] },
        { type: "qcm", img: "eeb_c1_minitableau.png", alt: "Mini-tableau en multifilaire : ID, éclairage en va-et-vient, prises", q: "Sur ce mini-tableau, le départ des prises X1-X2 est protégé par…", options: ["Q1, 10 A, 1,5 mm²", "Q2, 20 A, 2,5 mm²", "Q0, 40 A, 6 mm²", "Aucun disjoncteur"], answer: 1 },
        { type: "match", q: "Parafoudre : obligatoire ou non ?", pairs: [
          ["Bâtiment équipé d'un paratonnerre", "Obligatoire"],
          ["Zone AQ2, alimentation BT aérienne", "Obligatoire"],
          ["Zone AQ2, alimentation entièrement souterraine", "Non obligatoire (recommandé)"],
          ["Zone AQ1, alimentation aérienne", "Non obligatoire"]] },
        { type: "match", q: "Salle d'eau : associe chaque volume à ce qu'on peut y installer.", pairs: [
          ["Volume 0", "TBTS 12 V prévue pour ce volume, IPX7"],
          ["Volume 1", "TBTS 12 V, chauffe-eau sous conditions, IPX4"],
          ["Volume 2", "Classe II, prise rasoir à transformateur de séparation, IPX4"],
          ["Hors volumes", "Prises 2P+T et appareillage courant, en 30 mA"]] },
        { type: "num", q: "Résistance maximale de la prise de terre avec un AGCP 500 mA ?", answer: 100, tol: 0, unit: "Ω",
          explain: "R × IΔn ≤ 50 V → R ≤ 50 / 0,5 = 100 Ω." },
        { type: "num", q: "Section de la liaison équipotentielle supplémentaire (salle d'eau) posée sous conduit ?", answer: 2.5, tol: 0, unit: "mm²",
          explain: "2,5 mm² protégée (sous conduit), 4 mm² non protégée." }
      ]
    },
    {
      id: "m3", num: 3, titre: "Dimensionner canalisations et protections", duree: "40 min", competences: "C1 · étapes 1 et 2",
      intro: "La règle Ib ≤ In ≤ Iz, le courant d'emploi, la désignation des câbles et la chute de tension. Prends une calculatrice (celle du téléphone suffit).",
      source: "Présentation, partie 04 (diapositives 31 à 37)",
      ex: [
        { type: "match", q: "Que signifie chaque grandeur ?", pairs: [
          ["Ib", "Courant d'emploi : ce que consomme le circuit"],
          ["In", "Calibre du disjoncteur"],
          ["Iz", "Courant admissible du câble"]] },
        { type: "qcm", q: "Dans quel ordre doivent être ces trois courants ?", options: ["Iz ≤ In ≤ Ib", "In ≤ Ib ≤ Iz", "Ib ≤ In ≤ Iz", "Ib ≤ Iz ≤ In"], answer: 2,
          explain: "Le disjoncteur laisse passer le courant normal et coupe avant que le câble ne chauffe." },
        { type: "gen", gen: "ib", n: 3, q: "Calcule le courant d'emploi Ib = P / U (arrondi au dixième)." },
        { type: "gen", gen: "dim", n: 3, q: "Choisis le disjoncteur et la section." },
        { type: "match", q: "Décode chaque désignation de conducteur.", pairs: [
          ["H07V-U", "Âme massive, sous conduit, le plus courant"],
          ["H07V-R", "Âme rigide câblée, sections ≥ 6 mm²"],
          ["H07V-K", "Âme souple, embouts obligatoires au tableau"],
          ["U-1000 R2V", "Câble 1 000 V, apparent ou enterré sous fourreau"],
          ["H05VV-F", "Cordon souple 300/500 V, luminaires"]] },
        { type: "match", q: "Chute de tension maximale admise :", pairs: [
          ["Circuit d'éclairage", "3 % (6,9 V)"],
          ["Autres usages", "5 % (11,5 V)"]] },
        { type: "gen", gen: "du", n: 3, q: "Calcule la chute de tension ΔU = 2 × ρ × L × Ib / S (ρ = 0,0172), en % de 230 V, arrondie au dixième." },
        { type: "qcm", q: "Un circuit est long et sa chute de tension dépasse la limite. Que fais-tu ?", options: ["Je prends un disjoncteur plus gros", "J'augmente la section du câble", "Je passe en H07V-K", "Je ne change rien, c'est toléré"], answer: 1 }
      ]
    },
    {
      id: "m4", num: 4, titre: "Préparer, encastrer, poser et tirer", duree: "40 min", competences: "C1 · étapes 2 à 6",
      intro: "Approvisionnement, hauteurs, traçage, percements selon le support, rebouchage, prévention, canalisations et tirage des conducteurs.",
      source: "Présentation, parties 05 et 06 (diapositives 38 à 51)",
      ex: [
        { type: "order", q: "Approvisionner le chantier : remets les étapes dans l'ordre.", items: ["Lister le matériel par lot", "Décrire : désignation, référence, quantité", "Contrôler à la livraison", "Stocker à l'abri, rangé par circuit"] },
        { type: "match", q: "Associe chaque élément à sa hauteur (axe, sol fini).", pairs: [
          ["Socles 16 A et 20 A", "≥ 5 cm"],
          ["Socles 32 A", "≥ 12 cm"],
          ["Interrupteurs et commandes", "0,90 à 1,30 m"],
          ["Organes du tableau", "0,50 à 1,80 m"]] },
        { type: "order", q: "Tracer un cheminement : remets les étapes dans l'ordre.", items: ["Reporter les emplacements du plan au mur", "Relier par des tracés horizontaux ou verticaux", "Repérer le numéro du circuit sur chaque boîte", "Détecter les réseaux existants avant de percer", "Valider avec le responsable si le dossier est imprécis"] },
        { type: "match", q: "Quelle boîte pour quel support ?", pairs: [
          ["Brique, parpaing, béton cellulaire", "Boîte maçonnerie scellée au plâtre"],
          ["Plaque de plâtre", "Boîte à griffes"],
          ["Béton coulé", "ICTA et boîtes spéciales posés avant coulage"],
          ["Vide de construction avec membrane", "Boîte étanche à l'air"]] },
        { type: "match", q: "Associe chaque risque à sa prévention.", pairs: [
          ["Poussières (silice)", "Aspiration, masque FFP3, aspirateur"],
          ["Projections, coupures", "Lunettes, gants, outils en bon état"],
          ["Bruit", "Protections auditives"],
          ["Chute de hauteur", "Plateforme individuelle roulante"],
          ["Manutention des couronnes", "À deux ou avec un dérouleur"]] },
        { type: "qcm", q: "Une saignée dans un poteau, une poutre ou un mur porteur est possible…", options: ["si elle fait moins de 3 cm", "avec l'accord écrit du responsable ou du bureau d'études", "jamais, en aucun cas", "si on la rebouche au plâtre"], answer: 1 },
        { type: "tf", q: "Après percement, le support doit retrouver sa fonction : vrai ou faux ?", items: [
          ["La boîte est fixée sans jeu et la saignée remplie à cœur.", true],
          ["Une traversée coupe-feu se rebouche au plâtre ordinaire.", false],
          ["On peut laisser un petit trou dans une cloison isolée.", false],
          ["Les traversées de membrane reçoivent manchons ou adhésifs (étanchéité à l'air).", true]] },
        { type: "match", q: "Quel système de canalisation pour quel usage ?", pairs: [
          ["Conduit ICTA", "Encastré, construction neuve"],
          ["Conduit IRL", "Apparent : garages, caves, locaux techniques"],
          ["Goulotte, moulure, plinthe", "Apparent en rénovation"],
          ["Câble U-1000 R2V", "Extérieur, combles, enterré sous fourreau"]] },
        { type: "num", q: "Règle du tiers : combien de conducteurs H07V-U 2,5 mm² au maximum dans un ICTA 20 ?", answer: 5, tol: 0, unit: "conducteurs",
          explain: "Section intérieure ≈ 154 mm², un tiers ≈ 51 mm² ; un conducteur ≈ 10,2 mm² → 51 / 10,2 ≈ 5." },
        { type: "tf", q: "Poser et tirer : vrai ou faux ?", items: [
          ["Un circuit par conduit.", true],
          ["Un câble internet peut passer dans le conduit d'un circuit de prises.", false],
          ["On peut faire une connexion dans un conduit si elle est bien isolée.", false],
          ["Chaque circuit a son PE vert-jaune, tiré avec lui.", true],
          ["Un isolant blessé au tirage impose de remplacer le conducteur.", true]] }
      ]
    },
    {
      id: "m5", num: 5, titre: "Raccorder, terminer et rendre compte", duree: "30 min", competences: "C1 · étapes 7 à 9",
      intro: "Préparer les conducteurs, les bornes, le tableau en 7 étapes, les erreurs fréquentes, le tri des déchets et le compte rendu oral.",
      source: "Présentation, parties 07 et 08 (diapositives 52 à 62)",
      ex: [
        { type: "tf", q: "Préparer et raccorder : vrai ou faux ?", items: [
          ["Un conducteur souple serré sous une vis reçoit un embout serti.", true],
          ["On étame l'extrémité d'un souple pour mieux le serrer.", false],
          ["Un cuivre légèrement entaillé au dénudage est acceptable.", false],
          ["Un seul conducteur par borne, sauf indication de la notice.", true]],
          explain: "L'étain flue : le serrage se desserre. Un cuivre entaillé peut casser ou chauffer." },
        { type: "qcm", q: "Pourquoi le PE est-il laissé un peu plus long que les autres conducteurs ?", options: ["Pour le repérer plus facilement", "Pour qu'il se déconnecte en dernier en cas d'arrachement", "Parce qu'il est de plus forte section", "Pour faciliter le dénudage"], answer: 1 },
        { type: "order", q: "Câbler le tableau : remets les 7 étapes dans l'ordre.", items: ["Réception du matériel", "Montage des rails et appareils", "Arrivée : AGCP → tableau → ID", "Peignes (8 circuits max par ID)", "Départs (phase et neutre sur le même disjoncteur)", "Terre : PE sur le bornier", "Repérage et contrôle visuel"] },
        { type: "match", q: "Associe chaque erreur à sa conséquence.", pairs: [
          ["Serrage insuffisant", "Échauffement, incendie"],
          ["Cuivre visible", "Contact direct possible"],
          ["Calibre trop fort", "Câble non protégé"],
          ["Neutre sous un autre ID", "Déclenchements intempestifs"],
          ["Interrupteur sur le neutre", "Douille sous tension lampe éteinte"],
          ["PE oublié", "Masse non protégée"]] },
        { type: "match", q: "Où vont ces déchets de chantier ?", pairs: [
          ["Chutes de cuivre, rails DIN, peignes", "Benne métaux"],
          ["Chutes de conduits et de goulottes", "Benne plastiques"],
          ["Emballages de l'appareillage", "Benne cartons"],
          ["Gravats de saignées, plâtre sec", "Benne gravats"],
          ["Luminaires et appareils déposés", "Collecte DEEE"],
          ["Aérosols, cartouches de mastic, piles", "Collecte spécifique (dangereux)"]] },
        { type: "order", q: "Rendre compte oralement : remets les 5 points dans l'ordre.", items: ["Ce que j'ai fait", "Ce qui reste (et le temps estimé)", "Les problèmes rencontrés", "Les décisions à prendre", "La sécurité et l'état du chantier"] },
        { type: "task", phone: true, q: "Compte rendu oral de 2 minutes avec ton téléphone", steps: [
          "Ouvre le dictaphone de ton téléphone.",
          "Enregistre un compte rendu de ta dernière séance au box, comme si tu parlais à ton chef de chantier.",
          "Respecte les 5 points : fait, reste, problèmes, décisions, sécurité.",
          "Cite au moins un problème et une décision que tu ne prends pas seul.",
          "Envoie l'enregistrement à ton formateur (ou fais-le écouter en fin de séance)."], note: "Durée de ton enregistrement et remarques" }
      ]
    },
    {
      id: "m6", num: 6, titre: "Étude de cas : « Le Clos des Oliviers »", duree: "30 min", competences: "C1 · toutes étapes",
      intro: "Appartement T3 de 68 m² en construction neuve, monophasé 230 V, schéma TT, AGCP 500 mA, zone AQ1, alimentation souterraine, sans paratonnerre. Séjour 26 m², cuisine 9 m², 2 chambres, salle d'eau, WC. Chauffage électrique : 7 kW de radiateurs et un chauffe-eau de 2 400 W, sous le même ID. Le client veut une prise sur la terrasse, à 30 m du tableau.",
      source: "Toute la présentation · guides NF C 15-100",
      ex: [
        { type: "num", q: "Nombre minimal de socles 16 A dans le séjour de 26 m² ?", answer: 7, tol: 0, unit: "socles",
          explain: "1 par tranche de 4 m², minimum 5 : 26 / 4 = 6,5 → 7 socles." },
        { type: "num", q: "Nombre minimal de socles 16 A dans la cuisine de 9 m² ?", answer: 6, tol: 0, unit: "socles" },
        { type: "num", q: "Nombre minimal d'interrupteurs différentiels 30 mA pour ce logement de 68 m² ?", answer: 3, tol: 0, unit: "ID",
          explain: "35 à 100 m² : 2 ID 40 A type AC + 1 ID 40 A type A." },
        { type: "qcm", q: "Chauffage (7 kW) et chauffe-eau (2 400 W) sont sous le même ID. Que faut-il ?", options: ["Rien de particulier", "Un ID 63 A type AC à la place d'un 40 A type AC", "Un ID de type F", "Un deuxième AGCP"], answer: 1,
          explain: "7 + 2,4 = 9,4 kVA > 8 kVA sous un même ID → ID 63 A type AC." },
        { type: "num", q: "Circuit de radiateurs de la zone nuit : 3 × 1 000 W. Courant d'emploi Ib ?", answer: 13, tol: 0.15, unit: "A",
          explain: "Ib = 3 000 / 230 = 13,0 A." },
        { type: "qcm", q: "Pour ce circuit de 3 000 W, quel disjoncteur et quelle section ?", options: ["10 A – 1,5 mm²", "16 A – 1,5 mm²", "20 A – 2,5 mm²", "32 A – 6 mm²"], answer: 1,
          explain: "Chauffage jusqu'à 3 500 W : 1,5 mm² / 16 A. Ib 13 A ≤ In 16 A ≤ Iz." },
        { type: "num", q: "Prise de la terrasse : circuit 2,5 mm², Ib = 16 A, 30 m. Chute de tension en % ?", answer: 2.9, tol: 0.15, unit: "%",
          explain: "ΔU = 2 × 0,0172 × 30 × 16 / 2,5 = 6,60 V → 2,9 % ≤ 5 % : conforme." },
        { type: "qcm", q: "Parafoudre pour ce logement (AQ1, souterrain, sans paratonnerre) ?", options: ["Obligatoire", "Non obligatoire", "Interdit", "Obligatoire en TT"], answer: 1 },
        { type: "open", q: "Tu constates que le plan architectural met 9 points lumineux sur le circuit L1, protégé par un seul disjoncteur 10 A sur l'unifilaire. Rédige en 3 à 4 phrases ta note au chef de chantier.", hint: "Le constat, la règle (8 points maximum), ta proposition, et le fait que tu attends sa décision avant de câbler." }
      ]
    }
  ]
};
