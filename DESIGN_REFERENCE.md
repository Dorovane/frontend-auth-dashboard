# Obsidian Nexus — Référence Design System

---

## COULEURS

### Fonds & Surfaces

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `background` | `#0b1326` | `body` — fond global de la page |
| `surface` | `#0b1326` | identique à background, rarement utilisé seul |
| `surface-dim` | `#0b1326` | overlay derrière un modal/drawer |
| `surface-bright` | `#31394d` | hover d'une card, élément mis en avant |
| `surface-container-lowest` | `#060e20` | fond le plus profond, derrière tout |
| `surface-container-low` | `#131b2e` | sidebar, panneau secondaire |
| `surface-container` | `#171f33` | **card standard** |
| `surface-container-high` | `#222a3d` | **input, dropdown** à l'intérieur d'une card |
| `surface-container-highest` | `#2d3449` | tooltip, popover |
| `surface-variant` | `#2d3449` | badge, chip, tag |
| `surface-tint` | `#c0c1ff` | reflet primaire sur une surface active |

### Textes

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `on-background` | `#dae2fd` | `body` — texte global |
| `on-surface` | `#dae2fd` | texte principal dans une card |
| `on-surface-variant` | `#c7c4d7` | texte secondaire, placeholder, label |
| `inverse-surface` | `#dae2fd` | texte sombre sur fond clair (cas rare) |
| `inverse-on-surface` | `#283044` | fond sombre pour tooltip clair |

### Bordures

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `outline` | `#908fa0` | bordure visible — input non focalisé |
| `outline-variant` | `#464554` | séparateur discret entre sections |

### Primaire — Indigo

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `primary` | `#c0c1ff` | lien actif, icône active, texte accent |
| `on-primary` | `#1000a9` | texte **sur** fond primary |
| `primary-container` | `#8083ff` | **fond du bouton principal** |
| `on-primary-container` | `#0d0096` | texte sur le bouton principal |
| `inverse-primary` | `#494bd6` | bouton primary sur fond clair |
| `primary-fixed` | `#e1e0ff` | état désactivé du bouton primary |
| `primary-fixed-dim` | `#c0c1ff` | variante atténuée |
| `on-primary-fixed` | `#07006c` | texte sur état désactivé |
| `on-primary-fixed-variant` | `#2f2ebe` | texte variante sur état désactivé |

### Secondaire — Violet

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `secondary` | `#ddb7ff` | accent décoratif, gradient |
| `on-secondary` | `#490080` | texte sur fond secondary |
| `secondary-container` | `#6f00be` | fond badge/notification secondaire |
| `on-secondary-container` | `#d6a9ff` | texte sur ce badge |
| `secondary-fixed` | `#f0dbff` | état désactivé secondary |
| `secondary-fixed-dim` | `#ddb7ff` | variante atténuée |
| `on-secondary-fixed` | `#2c0051` | texte sur état désactivé |
| `on-secondary-fixed-variant` | `#6900b3` | texte variante |

### Tertiaire — Teal

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `tertiary` | `#4fdbc8` | stat positive, indicateur succès |
| `on-tertiary` | `#003731` | texte sur fond tertiary |
| `tertiary-container` | `#00a392` | fond badge succès/vérifié |
| `on-tertiary-container` | `#00302a` | texte sur ce badge |
| `tertiary-fixed` | `#71f8e4` | état désactivé tertiary |
| `tertiary-fixed-dim` | `#4fdbc8` | variante atténuée |
| `on-tertiary-fixed` | `#00201c` | texte sur état désactivé |
| `on-tertiary-fixed-variant` | `#005048` | texte variante |

### États

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `error` | `#ffb4ab` | texte d'erreur sous un input |
| `on-error` | `#690005` | texte sur fond erreur |
| `error-container` | `#93000a` | fond alerte erreur |
| `on-error-container` | `#ffdad6` | texte dans l'alerte erreur |

---

## TYPOGRAPHIE

| Variable | Utilisé sur |
|---|---|
| `font-geist` | `h1`, `h2`, labels, badges, code |
| `font-inter` | `body` — tout le texte courant |
| `headline-lg` | Titre principal de page (desktop) |
| `headline-lg-mobile` | Titre principal de page (mobile) |
| `headline-md` | Titre de section, titre de card |
| `body-lg` | Texte courant, descriptions |
| `body-md` | Texte secondaire, sous-titres |
| `label-md` | Labels de formulaire, badges, boutons |
| `code` | Blocs de code, tokens, données techniques |

---

## ARRONDIS

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `rounded-sm` | `0.25rem` | petits éléments, badges inline |
| `rounded` | `0.5rem` | inputs, petits boutons |
| `rounded-md` | `0.75rem` | boutons moyens |
| `rounded-lg` | `1rem` | cards |
| `rounded-xl` | `1.5rem` | bouton hero principal |
| `rounded-full` | `9999px` | avatars, icônes encerclées |

---

## ESPACEMENT

| Variable | Valeur | Utilisé sur |
|---|---|---|
| `spacing-xs` | `8px` | gap entre éléments proches (icône + texte) |
| `spacing-sm` | `16px` | padding interne d'un input ou bouton |
| `spacing-md` | `24px` | padding interne d'une card, gap form groups |
| `spacing-lg` | `40px` | espacement entre sections |
| `spacing-xl` | `64px` | marges latérales desktop |
| `spacing-gutter` | `20px` | gouttière entre colonnes |
