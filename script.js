document.querySelectorAll('.random-img').forEach((img, i) => {
    img.src = `https://random-image-pepebigotes.vercel.app/api/random-image?unique=${Date.now()}_${i}`;
});
