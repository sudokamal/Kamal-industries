const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const src = path.join(__dirname, '..', 'src');

const referencedImages = new Set();

function scanDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.match(/\.(ts|tsx|js|jsx|html|css)$/)) {
      const content = fs.readFileSync(full, 'utf8');
      const regex = /(?:\/|['"])([\w\-\/\s()%]+\.(?:jpeg|jpg|png|webp|pdf))/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        let fileRef = match[1];
        if (!fileRef.startsWith('/')) {
          fileRef = '/' + fileRef;
        }
        referencedImages.add(fileRef);
      }
    }
  }
}

scanDir(src);

console.log(`Total referenced images/assets found in src: ${referencedImages.size}`);

const missing = [];
for (const ref of referencedImages) {
  if (ref.startsWith('http') || ref.includes('api/')) continue;
  const fullPath = path.join(pub, ref);
  if (!fs.existsSync(fullPath)) {
    missing.push(ref);
  }
}

if (missing.length === 0) {
  console.log('SUCCESS! ALL REFERENCED IMAGES EXIST ON DISK. ZERO BROKEN IMAGE LINKS!');
} else {
  console.log(`MISSING IMAGE REFERENCES FOUND (${missing.length}):`);
  missing.forEach(m => console.log(' - ' + m));
}
