# 📱 ZAMI-MD — Kahan aur Kaise Chalayein

Aapke paas 3 options hain. **Sabse aasan = Option 1 (Mobile)**

---

# 🟢 OPTION 1 — MOBILE PHONE (Termux) — Sabse aasan

### Step 1: Termux install karo
Play Store wala **purana** hai. Ye use karo:
👉 https://f-droid.org/packages/com.termux/

### Step 2: Termux kholo aur ye likho (ek ek karke, har line ke baad Enter)

```bash
pkg update -y && pkg upgrade -y
```
```bash
pkg install nodejs-lts git -y
```
```bash
node -v
```
👆 `v20` ya usse upar aana chahiye

### Step 3: Folder banao
```bash
mkdir zami-md
cd zami-md
```

### Step 4: Files daalo
Apni `server.js`, `index.html`, `package.json`, `test.js` files
phone ke **Download** folder me rakho, phir:

```bash
termux-setup-storage
cp /sdcard/Download/server.js .
cp /sdcard/Download/index.html .
cp /sdcard/Download/package.json .
cp /sdcard/Download/test.js .
```

### Step 5: Install + Run
```bash
npm install
```
(5-10 minute lagenge, sabr karo)

```bash
npm start
```

### Step 6: Browser kholo
Phone ke Chrome me:
```
http://localhost:3000
```

✅ Ho gaya!

---

# 🔵 OPTION 2 — LAPTOP / PC (Windows)

### Step 1: Node.js install karo
👉 https://nodejs.org → **LTS** version download karo → install

### Step 2: Folder banao
Desktop par folder banao: `zami-md`
Usme saari files daalo (server.js, index.html, package.json, test.js)

### Step 3: Terminal kholo
Folder ke andar **khali jagah pe Right Click** → **"Open in Terminal"**
(ya folder ke address bar me `cmd` likh ke Enter)

### Step 4: Likho
```bash
npm install
npm start
```

### Step 5: Browser
```
http://localhost:3000
```

---

# 🟣 OPTION 3 — ONLINE HOSTING (24/7 chalega, PC band bhi ho)

## 🚂 Railway (recommended, free)

1. Files ko **GitHub** par upload karo (nayi repository banao)
2. https://railway.app → **Login with GitHub**
3. **New Project** → **Deploy from GitHub repo**
4. Apni repo select karo
5. Railway khud `npm install` + `npm start` chala dega
6. **Settings → Networking → Generate Domain**
7. Jo link mile use kholo ✅

## 🎨 Render (free alternative)

1. GitHub par files upload karo
2. https://render.com → **New → Web Service**
3. Repo connect karo
4. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Create Web Service** → link mil jayega

> ⚠️ **Vercel / Netlify par ye NAHI chalega** — WhatsApp ko WebSocket chahiye hota hai, wahan support nahi.

---

# ❓ Common Sawal

**Q: Termux band kar dun to?**
Bot band ho jayega. 24/7 ke liye Railway/Render use karo.

**Q: "npm: command not found"**
Node install nahi hua. Step 2 dobara karo.

**Q: "Cannot find module"**
```bash
npm install
```
dobara chalao.

**Q: Kuch bhi kaam nahi kar raha**
```bash
rm -rf node_modules package-lock.json
npm install
node test.js
```

**Q: Number ka format?**
`923001234567` — country code ke saath, **`+` aur shuru ka `0` nahi**

---

# 🎯 Poora Flow (jab chal jaye)

1. Website kholo → **Get Pair Code**
2. Apna number daalo → button dabao
3. 8-digit code milega (jaise `ABCD-EFGH`)
4. WhatsApp → **Settings → Linked Devices → Link a Device**
5. Neeche → **"Link with phone number instead"**
6. Code daalo
7. 🎉 Aapki apni WhatsApp chat me **Session ID** ka message aa jayega
