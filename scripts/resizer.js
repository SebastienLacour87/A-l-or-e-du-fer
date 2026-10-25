import sharp from "sharp";
import fs from "fs";
import path from "path";
// Mettre dans un  dossier et faire un npm install
// Lancer avec npm run start

const inputDir = "./";
const sizes = [400, 800, 1200];

// Récupère toutes les images du dossier récursivement
function getImages(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getImages(fullPath));
    } else if (
      /\.(jpg|jpeg|png|webp)$/i.test(file) &&
      !/-\d+w\.(webp|jpg|jpeg|png)$/i.test(file)
    ) {
      files.push(fullPath);
    }
  });
  return files;
}

const images = getImages(inputDir);

images.forEach((imgPath) => {
  const ext = path.extname(imgPath);
  const base = imgPath.replace(ext, "");

  sizes.forEach((width) => {
    const outputPath = `${base}-${width}w${ext}`;

    sharp(imgPath)
      .resize({ width, withoutEnlargement: true }) // ne pas agrandir si image plus petite
      .toFile(outputPath)
      .then(() => console.log(`✅ ${outputPath}`))
      .catch((err) => console.error(`❌ ${imgPath}`, err));
  });
});
