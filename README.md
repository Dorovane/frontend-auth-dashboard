# auth-dashboard

Interface frontend pour un système d'authentification fullstack avec gestion des rôles, routes protégées et refresh token automatique.

> Stack : **React + Vite** — Design system : **Obsidian Nexus** (thème cybersécurité dark)

---

## ✨ Fonctionnalités

- **Authentification complète** — Login, logout, register
- **Gestion des rôles** — `user`, `admin` avec accès différenciés
- **Routes protégées** — Redirection automatique si non authentifié
- **Refresh token automatique** — Retry silencieux si 401, logout si échec
- **Intercepteur HTTP** — Ajout automatique du Bearer token sur chaque requête
- **Synchronisation multi-onglets** — Déconnexion propagée via BroadcastChannel
- **Auth Context/Store** — État global : `user`, `login()`, `logout()`, `isLoading`

### Bonus
- [ ] Remember me (refresh token longue durée)
- [ ] Auto-logout sur inactivité
- [ ] Historique des connexions

---

## 🗂️ Structure du projet

```
auth-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/               # Composants réutilisables (Button, Input, Badge...)
│   │   └── layout/           # Navbar, Sidebar, PageWrapper...
│   ├── context/
│   │   └── AuthContext.jsx   # Contexte global d'authentification
│   ├── hooks/
│   │   └── useAuth.js        # Hook pour consommer l'AuthContext
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── AdminPage.jsx
│   ├── routes/
│   │   ├── ProtectedRoute.jsx   # Redirige si non authentifié
│   │   └── AdminRoute.jsx       # Redirige si pas admin
│   ├── services/
│   │   └── api.js            # Instance axios + intercepteurs
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/ton-username/auth-dashboard.git
cd auth-dashboard

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
```

Renseigner le fichier `.env` :

```env
VITE_API_URL=http://localhost:3000/api
```

```bash
# Lancer en développement
npm run dev
```

---

## 🔐 Logique d'authentification

```
Login
  └─> POST /auth/login
        └─> Stockage du accessToken + refreshToken
              └─> Mise à jour de l'AuthContext (user, isLoading)

Requête protégée
  └─> Intercepteur axios ajoute : Authorization: Bearer <accessToken>
        └─> Si réponse 401
              └─> Tentative de refresh (POST /auth/refresh)
                    ├─> Succès → retry de la requête originale
                    └─> Échec  → logout automatique

Multi-onglets
  └─> BroadcastChannel émet "logout"
        └─> Tous les onglets redirigent vers /login
```

---

## 👤 Rôles & Accès

| Page | Visiteur | User | Admin |
|------|----------|------|-------|
| `/` (accueil) | ✅ | ✅ | ✅ |
| `/login` | ✅ | ✅ | ✅ |
| `/dashboard` | ❌ | ✅ | ✅ |
| `/admin` | ❌ | ❌ | ✅ |

---

## 🛠️ Stack technique

| Outil | Usage |
|-------|-------|
| React 18 | UI |
| Vite | Build & dev server |
| React Router v6 | Routing & routes protégées |
| Axios | HTTP + intercepteurs |
| Tailwind CSS | Styling (thème Obsidian Nexus) |
| Context API | État global auth |

---

## 🎨 Design System — Obsidian Nexus

Thème dark "cyber-sécurité" avec :

- **Fond** : `#0b1326` (bleu nuit)
- **Primaire** : `#c0c1ff` (indigo électrique)
- **Secondaire** : `#ddb7ff` (violet)
- **Succès** : `#10b981` (émeraude)
- **Erreur** : `#ef4444` (rouge)
- **Typographie** : Geist (Google Fonts)

---

## 📄 Licence

MIT
