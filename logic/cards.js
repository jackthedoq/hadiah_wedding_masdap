function renderCards() {
    // 1. Data ucapan (tambah di sini sesukamu)
    const dataUcapan = [
        {
            pesan: "Semoga sakinah mawadah warohmahtullahiwabarokatuh. Semoga anaknya cepat diupload dan didownload",
            dari: "Alif"
        },
        {
            pesan: "Semoga rumah tangganya ke depan bisa sehat terus dan dilimpahkan rejeki",
            dari: "Will"
        },
        {
            pesan: "Semoga langgeng dan bahagia sampai maut memisahkan",
            dari: "Fernando"
        },
        {
            pesan: "Semoga Sakinah Mawadah Wagacor",
            dari: "Ghazi"
        },
        {
            pesan: "Selamat menempuh hidup baru, semoga bahagia dan langgeng selalu",
            dari: "Ipeh"
        },
        {
            pesan: "Wishing you both endless joy, love, and a lifetime of cherished memories.",
            dari: "Olip"
        },
        {
            pesan: "Happy wedding!, semoga selalu harmonis dan bahagia",
            dari: "Arfan"
        },
        {
            pesan: "Selamat menempuh hidup baru sebagai pasangan suami istri mas daf & mbak salma. Sing penting Bahagia Selalu sampai maut memisahkan!",
            dari: "Jordan"
        },
        {
            pesan: "祝你们新婚快乐，百年好合，幸福美满！ आप दोनों को शादी की हार्दिक शुभकामनाएं, आपका जीवन प्रेम और खुशियों से भरा रहे! Поздравляю вас с бракосочетанием, желаю любви, счастья и долгой совместной жизни!",
            dari: "dyt"
        },
        {
            pesan: "Weddingtulation Mas Dapp Mba Salmaaa! Best wishes to both of u!",
            dari: "chania"
        },
        {
            pesan: "CIEEE UDAH JADI PASUTRI EAAA EAAA EAAA! semoga langgeng sampe tua luv",
            dari: "Andre"
        }
    ];

    const wrapper = document.getElementById('cards-wrapper');
    if (!wrapper) return;

    // 2. Mapping data ke dalam HTML template
    const cardsHTML = dataUcapan.map(item => `
        <div class="card-item relative w-full max-w-[340px] aspect-[3/4] flex flex-col items-center justify-center mx-auto bg-transparent shrink-0">
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="assets/card-frame.svg" class="w-full h-full object-contain" alt="Frame Border">
            </div>

            <div class="relative z-10 px-10 text-center">
                <p class="text-[#E7E7E7] text-lg leading-relaxed mb-4">
                    "${item.pesan}"
                </p>
                <p class="text-sm italic text-white/60">
                    — ${item.dari}
                </p>
            </div>
        </div>
    `).join('');

    // 3. Masukkan ke dalam wrapper
    wrapper.innerHTML = cardsHTML;
}