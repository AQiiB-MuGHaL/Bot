/**
 * ZAMI-MD · Setup Checker
 * -----------------------
 * Chalao:  node test.js
 * Ye check karega ke sab kuch sahi hai ya nahi (WhatsApp connect kiye bina).
 */

const c = { g:'\x1b[32m', r:'\x1b[31m', y:'\x1b[33m', b:'\x1b[36m', x:'\x1b[0m' };
const ok   = m => console.log(`${c.g}✅ ${m}${c.x}`);
const bad  = m => console.log(`${c.r}❌ ${m}${c.x}`);
const warn = m => console.log(`${c.y}⚠️  ${m}${c.x}`);
const head = m => console.log(`\n${c.b}━━━ ${m} ━━━${c.x}`);

let fails = 0;

(async () => {
console.log(`${c.b}
╭━━━━━━━━━━━━━━━━━━━━━━━━╮
   ZAMI-MD SETUP CHECKER
╰━━━━━━━━━━━━━━━━━━━━━━━━╯${c.x}`);

/* 1 ── NODE VERSION ── */
head('1. Node version');
const major = parseInt(process.version.slice(1));
if (major >= 20) ok(`Node ${process.version}`);
else { bad(`Node ${process.version} — Baileys ko Node 20+ chahiye!`); fails++;
       warn('Fix: https://nodejs.org se Node 20 ya 22 install karo'); }

/* 2 ── PACKAGES ── */
head('2. Packages installed?');
let Baileys = null, pkgName = '';
for (const name of ['baileys', '@whiskeysockets/baileys']) {
  try { Baileys = require(name); pkgName = name; break; } catch {}
}
if (Baileys) ok(`Baileys mila → "${pkgName}"`);
else { bad('Baileys nahi mila'); fails++; warn('Fix: npm install baileys'); }

for (const p of ['express', 'cors', 'pino']) {
  try { require(p); ok(`${p}`); }
  catch { bad(`${p} missing`); fails++; warn(`Fix: npm install ${p}`); }
}

/* 3 ── BAILEYS FUNCTIONS ── */
head('3. Baileys API check');
if (Baileys) {
  const need = ['default','useMultiFileAuthState','fetchLatestBaileysVersion',
                'makeCacheableSignalKeyStore','DisconnectReason','Browsers','delay'];
  for (const f of need) {
    if (Baileys[f]) ok(f);
    else { bad(`${f} missing — purana version`); fails++; }
  }
}

/* 4 ── WHATSAPP VERSION FETCH ── */
head('4. WhatsApp se connection test');
if (Baileys?.fetchLatestBaileysVersion) {
  try {
    const { version, isLatest } = await Baileys.fetchLatestBaileysVersion();
    ok(`WA version ${version.join('.')} ${isLatest ? '(latest)' : '(cached)'}`);
  } catch (e) {
    bad('WhatsApp server se connect nahi hua — internet/firewall check karo');
    fails++;
  }
}

/* 5 ── FILES ── */
head('5. Files');
const fs = require('fs');
for (const f of ['server.js','index.html','package.json']) {
  fs.existsSync(f) ? ok(f) : (bad(`${f} missing`), fails++);
}

/* 6 ── PORT ── */
head('6. Port 3000 free hai?');
await new Promise(r => {
  const s = require('net').createServer();
  s.once('error', e => {
    if (e.code === 'EADDRINUSE') { warn('Port 3000 busy hai — PORT=4000 npm start karo'); }
    r();
  });
  s.once('listening', () => { ok('Port 3000 free'); s.close(); r(); });
  s.listen(3000);
});

/* RESULT */
head('RESULT');
if (fails === 0) {
  console.log(`${c.g}
🎉 SAB THEEK HAI!

Ab chalao:
   npm start

Phir browser me kholo:
   http://localhost:3000
${c.x}`);
} else {
  console.log(`${c.r}
${fails} problem(s) mili. Upar ke "Fix:" steps follow karo.

Sabse pehle ye try karo:
   rm -rf node_modules package-lock.json
   npm install
   node test.js
${c.x}`);
}
})();
