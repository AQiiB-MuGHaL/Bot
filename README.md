# ZAMI-MD · Pair Code System

## ⚡ Setup

```bash
npm install
npm start
```
Open → http://localhost:3000

---

## ❌ "Baileys work nahi kar raha" — FIXES

### 1️⃣ Node version
Baileys ko **Node 20+** chahiye.
```bash
node -v
```
Agar 16/18 hai → Node 20 ya 22 install karo.

### 2️⃣ Package ka naam badal gaya hai
Purana: `@whiskeysockets/baileys` (ab update nahi hota)
Naya: **`baileys`**

Agar `baileys` install na ho to fallback:
```bash
npm uninstall baileys
npm install @whiskeysockets/baileys@6.7.9
```
aur `server.js` line me:
```js
require('baileys')  →  require('@whiskeysockets/baileys')
```

### 3️⃣ Common errors

| Error | Fix |
|---|---|
| `Cannot find module 'baileys'` | `npm install baileys` |
| `Connection Closed (515)` | Normal hai — code already mil chuka hota hai |
| `Precondition Required (428)` | `await delay(3000)` zaroori — already added |
| `requestPairingCode is not a function` | Purana version — `npm i baileys@latest` |
| `crypto is not defined` | Node 20+ use karo |
| Code aata hai par connect nahi hota | Number format galat. **923001234567** (no +, no 0) |

### 4️⃣ Clean reinstall
```bash
rm -rf node_modules package-lock.json sessions
npm install
npm start
```

---

## 🌐 Hosting

❌ **Vercel / Netlify par NAHI chalega** — WebSocket support nahi hai.

✅ Ye use karo:
- **Railway** → railway.app
- **Render** → render.com (Web Service)
- **Koyeb** / **Fly.io**
- Koi bhi **VPS** (Ubuntu + pm2)

VPS par:
```bash
npm i -g pm2
pm2 start server.js --name zami-md
pm2 save
```

Host karne ke baad `index.html` me:
```js
const API_BASE = "https://your-app.up.railway.app";
```

---

## 🔄 Flow

1. User number daalta hai → `/api/pair?number=923...`
2. Baileys WhatsApp se **asli pair code** leta hai
3. User WhatsApp → Linked Devices → Link with phone number → code daalta hai
4. Connect hote hi server **Session ID khud user ke number par** bhej deta hai
5. Server se local session delete ho jaati hai (security)
