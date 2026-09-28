# 📱 TERMUX — Sahi Commands

## ❓ Pehle ye samjho: cd aur cp ka farq

| Command | Matlab | Kaam |
|---|---|---|
| **cd** | **c**hange **d**irectory | Folder ke **andar jana** |
| **cp** | **c**o**p**y | File ko **copy karna** |
| **ls** | list | Folder me kya kya hai **dekhna** |
| **pwd** | print working dir | **Abhi kahan ho** ye batata hai |

👉 Dono alag hain. **cd** = jana, **cp** = copy karna.
Aapko **dono** chahiye — pehle `cd` se folder me jao, phir `cp` se files copy karo.

---

# ✅ POORI COMMAND LIST (order me)

## 1️⃣ Setup
```
pkg update -y && pkg upgrade -y
```
```
pkg install nodejs-lts -y
```
```
node -v
```
> `v20` ya upar aana chahiye

---

## 2️⃣ Storage permission
```
termux-setup-storage
```
> Popup aayega → **Allow** dabao

---

## 3️⃣ Folder banao aur andar jao
```
mkdir zami
```
```
cd zami
```
> `cd` = folder ke **andar** gaye
> Ab prompt me `~/zami $` dikhega ✅

Confirm karo:
```
pwd
```
> `/data/data/com.termux/files/home/zami` aana chahiye

---

## 4️⃣ Files copy karo (yahan `cp` use hoga)

Pehle files phone ke **Download** folder me rakho, phir:

```
cp /sdcard/Download/server.js .
```
```
cp /sdcard/Download/index.html .
```
```
cp /sdcard/Download/package.json .
```
```
cp /sdcard/Download/test.js .
```

> ⚠️ Har command ke **aakhir me space + dot (` .`)** zaroori hai!
> Dot ka matlab = "yahin par copy karo"

### Ya ek hi baar me sab:
```
cp /sdcard/Download/{server.js,index.html,package.json,test.js} .
```

---

## 5️⃣ Check karo files aayi ya nahi
```
ls
```
> Ye 4 naam dikhne chahiye:
> `index.html  package.json  server.js  test.js` ✅

---

## 6️⃣ Install
```
npm install
```
> ⏳ 5-15 minute. Screen band mat karo.

---

## 7️⃣ Test
```
node test.js
```

## 8️⃣ Chalao
```
npm start
```

## 9️⃣ Chrome me kholo
```
localhost:3000
```

---

# 🆘 Copy ke Errors

### `cp: cannot stat '/sdcard/Download/server.js': No such file`
File Download folder me nahi hai. Ye chala ke dekho:
```
ls /sdcard/Download
```
Agar naam alag hai (jaise `server (1).js`) to:
```
cp "/sdcard/Download/server (1).js" server.js
```

### `Permission denied`
```
termux-setup-storage
```
dobara chalao aur **Allow** dabao.

### File `Downloads` me hai `Download` me nahi?
```
cp /sdcard/Downloads/server.js .
```
ya
```
cp /storage/emulated/0/Download/server.js .
```

---

# 🔥 BEST TARIQA — Copy hi mat karo!

Files GitHub pe daal do, phir **ek hi command**:

```
cd ~
```
```
git clone https://github.com/APNA-NAAM/APNI-REPO.git zami
```
```
cd zami
```
```
npm install && npm start
```

Bas! Koi `cp` ki zaroorat nahi 🎉

---

# 🔁 Agli baar sirf ye 2 lines
```
cd zami
```
```
npm start
```
