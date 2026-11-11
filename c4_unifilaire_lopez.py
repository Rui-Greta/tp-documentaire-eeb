"""TP EEB — CP4 — Schéma n°2 : unifilaire du tableau de la maison de Mme Lopez après mise en sécurité."""
from symboles_teeb import *
from symboles_melec import PriseTerre

GRIS = '#777777'
ANC = '#8a8a8a'   # circuits existants conservés

# (x, calibre, courbe, section, repère, points, désignation, existant)
G1 = [(3.4, '10 A', 'C', '1,5 mm²', 'L1', '6 points', 'Éclairage jour', False),
      (5.7, '16 A', 'C', '1,5 mm²', 'P2', '7 socles', 'Prises chambres', True),
      (8.0, '2 A', 'C', '1,5 mm²', 'S3', '1 appareil', 'VMC', False)]
G2 = [(10.6, '32 A', 'C', '6 mm²', 'S1', '1 appareil', 'Plaque de cuisson', False),
      (12.9, '20 A', 'C', '2,5 mm²', 'S2', '1 appareil', 'Lave-linge', False)]
G3 = [(15.5, '10 A', 'C', '1,5 mm²', 'L2', '5 points', 'Éclairage nuit', True),
      (17.8, '20 A', 'C', '2,5 mm²', 'P1', '8 socles', 'Prises séjour', False),
      (20.1, '20 A', 'C', '2,5 mm²', 'P3', '6 socles', 'Prises cuisine', False)]
GROUPES = [(G1, 'ID1', 'type AC'), (G2, 'ID2', 'type A'), (G3, 'ID3', 'type AC')]

config()
with schemdraw.Drawing(show=False) as d:
    xa = 1.6
    # --- Arrivée : réseau -> AGCP ---
    elm.Dot(open=True).at((xa, 1.4)).label('Réseau BT 230 V', loc='right', ofst=(0.15, 0))
    elm.Line().at((xa, 1.4)).to((xa, 0))
    AGCPUni().right().at((xa, 0))
    elm.Label().at((xa + 0.35, -0.9)).label('AGCP 500 mA', halign='left')
    elm.Label().at((xa + 0.35, -1.45)).label('sélectif — calibre selon abonnement', halign='left', fontsize=9, color=GRIS)
    ypp = -3.7
    elm.Line().at((xa, -3.0)).to((xa, ypp))
    xc_last = (G3[0][0] + G3[-1][0]) / 2
    elm.Line().at((xa, ypp)).to((xc_last, ypp)).linewidth(3.2)
    elm.Dot().at((xa, ypp))

    for grp, nom, typ in GROUPES:
        xs = [g[0] for g in grp]
        xc = (xs[0] + xs[-1]) / 2
        elm.Line().at((xc, ypp)).to((xc, ypp - 0.5))
        elm.Dot().at((xc, ypp))
        IDUni().right().at((xc, ypp - 0.5))
        elm.Label().at((xc + 0.35, ypp - 1.25)).label(f'{nom}  40 A', halign='left')
        elm.Label().at((xc + 0.35, ypp - 1.8)).label(f'30 mA  {typ}', halign='left')
        yps = ypp - 4.1
        elm.Line().at((xc, ypp - 3.5)).to((xc, yps))
        elm.Line().at((xs[0], yps)).to((xs[-1], yps)).linewidth(2.4)
        elm.Dot().at((xc, yps))
        for (x, cal, courbe, sec, rep, pts, des, exist) in grp:
            col = ANC if exist else 'black'
            elm.Line().at((x, yps)).to((x, yps - 0.4))
            DisjUni().right().at((x, yps - 0.4))
            elm.Label().at((x + 0.3, yps - 1.3)).label(cal, halign='left', fontsize=10)
            elm.Label().at((x + 0.3, yps - 1.8)).label(courbe, halign='left', fontsize=9, color=GRIS)
            ytop = yps - 2.6
            if exist:
                elm.Line().at((x, ytop)).to((x, ytop - 2.0)).color(col).linestyle('--')
            else:
                elm.Line().at((x, ytop)).to((x, ytop - 2.0))
            traits_conducteurs(x, ytop - 0.75, n=3, col=col)
            elm.Label().at((x + 0.3, ytop - 1.45)).label(sec, halign='left', fontsize=9, color=col)
            yb = ytop - 2.0
            elm.Line().at((x - 0.25, yb)).to((x + 0.25, yb)).color(col)
            elm.Label().at((x, yb - 0.4)).label(rep, fontsize=11, color=col)
            elm.Label().at((x, yb - 0.85)).label(pts, fontsize=8, color=GRIS)
            elm.Label().at((x, yb - 1.15 - 0.075 * len(des))).label(des, fontsize=9, rotate=90, halign='center', valign='center', color=col)

    # --- Bloc terre (bas gauche) ---
    xt = 0.2
    yb0 = -9.0
    elm.Line().at((xt - 0.6, yb0)).to((xt + 0.6, yb0)).linewidth(3.2).color(PE)
    elm.Label().at((xt - 0.75, yb0 - 0.45)).label('Bornier de terre', halign='right', fontsize=9, color=PE)
    elm.Label().at((xt - 0.75, yb0 - 0.9)).label('(PE de tous les circuits)', halign='right', fontsize=8, color=GRIS)
    # LES salle de bains
    elm.Line().at((xt - 0.3, yb0)).to((xt - 0.3, yb0 + 1.6)).color(PE)
    elm.Line().tox(-1.6).color(PE)
    elm.Label().at((-1.7, yb0 + 1.85)).label('LEP (eau, gaz)', halign='right', fontsize=8, color=PE)
    elm.Label().at((-1.7, yb0 + 1.4)).label('LES salle de bains', halign='right', fontsize=8, color=PE)
    # conducteur principal -> barrette -> prise de terre
    elm.Line().at((xt + 0.3, yb0)).to((xt + 0.3, yb0 - 1.6)).color(PE)
    elm.Label().at((xt + 0.5, yb0 - 0.8)).label('16 mm²', halign='left', fontsize=8, color=PE)
    yr = yb0 - 1.6
    elm.Line().at((xt + 0.05, yr)).to((xt + 0.55, yr)).color(PE)
    elm.Line().at((xt + 0.05, yr - 0.35)).to((xt + 0.55, yr - 0.35)).color(PE)
    elm.Label().at((xt - 0.05, yr - 0.17)).label('Barrette de coupure', halign='right', fontsize=8, color=GRIS)
    elm.Line().at((xt + 0.3, yr - 0.35)).to((xt + 0.3, yr - 1.4)).color(PE)
    PriseTerre().right().at((xt + 0.3, yr - 1.4)).color(PE)
    elm.Label().at((xt - 0.4, yr - 1.85)).label('RA reprise : ≤ 100 Ω visé', halign='right', fontsize=9, color=PE)
    elm.Label().at((xt - 0.4, yr - 2.35)).label('(140 Ω mesurés avant travaux)', halign='right', fontsize=8, color=GRIS)

    # --- Légende ---
    yl = -17.0
    elm.Line().at((-4.4, yl)).to((-3.2, yl))
    elm.Label().at((-3.0, yl)).label('circuit neuf', halign='left', fontsize=9)
    elm.Line().at((0.4, yl)).to((1.6, yl)).color(ANC).linestyle('--')
    elm.Label().at((1.8, yl)).label('conducteurs existants conservés (protection adaptée à la section réelle)', halign='left', fontsize=9, color=ANC)
    traits_conducteurs(-3.8, yl - 0.9, n=3)
    elm.Label().at((-3.0, yl - 0.9)).label('câble 3G = phase · neutre (trait + point) · PE', halign='left', fontsize=9)

    # --- Titres / cartouche ---
    elm.Label().at((-4.6, 3.7)).label('Maison de Mme Lopez — tableau après mise en sécurité', halign='left', fontsize=14)
    elm.Label().at((-4.6, 3.1)).label('Schéma unifilaire · 90 m², chauffage gaz, schéma TT · 3 ID 30 mA (dont 1 type A), éclairage et prises d’une même zone sur des ID différents', halign='left', fontsize=10)
    cartouche(-4.6, 21.6, yl - 1.8, 'TP EEB — CP4 — Schéma n°2')
exporter(d, 'eeb_c4_unifilaire')
