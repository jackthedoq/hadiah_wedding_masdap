// Fungsi untuk memuat halaman secara dinamis
async function loadPage(pageFile) {
    const container = document.getElementById('app-container');
    
    try {
        const response = await fetch(pageFile);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error("Gagal memuat halaman:", error);
    }
}

// Jalankan Page 1 saat pertama kali dibuka
window.onload = () => loadPage('page1.html');

async function loadPage(pageFile) {
    // Tambahkan getaran singkat (hanya jalan di Android)
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10); // getar 10ms
    }

    const container = document.getElementById('app-container');
    try {
        const response = await fetch(pageFile);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error("Gagal memuat:", error);
    }
}

async function loadPage(pageFile) {
    const container = document.getElementById('app-container');
    const response = await fetch(pageFile);
    const html = await response.text();
    container.innerHTML = html;

    // CEK: Jika yang dibuka adalah page2, jalankan renderCards
    if (pageFile === 'page2.html') {
        // Pastikan script cards.js sudah di-load di index.html atau di sini
        if (typeof renderCards === "function") {
            renderCards();
        }
    }
}