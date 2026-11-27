import sharp from 'sharp';

async function main() {
  const meta = await sharp('assets-src/photos/home-hero-session.jpg').metadata();
  const size = Math.min(meta.width, meta.height);
  await sharp('assets-src/photos/home-hero-session.jpg')
    .extract({ left: Math.floor((meta.width - size) / 2), top: 0, width: size, height: size })
    .jpeg({ quality: 90 })
    .toFile('assets-src/photos/svc-pro-room.jpg');

  const meta2 = await sharp('assets-src/photos/svc-psychiatry.jpg').metadata();
  const size2 = Math.min(meta2.width, meta2.height);
  await sharp('assets-src/photos/svc-psychiatry.jpg')
    .extract({ left: 0, top: Math.floor((meta2.height - size2) / 2), width: size2, height: size2 })
    .jpeg({ quality: 90 })
    .toFile('assets-src/photos/svc-pro-notes.jpg');

  console.log('Successfully prepared svc-pro-room.jpg and svc-pro-notes.jpg');
}

main().catch(console.error);
