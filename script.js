const letters = document.querySelectorAll('.letter');

// Fungsi untuk memunculkan huruf satu per satu
letters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.animationDelay = `${index * 0.5}s`; // Menunda setiap huruf
        letter.style.opacity = '1';
    }, index * 500);
});
