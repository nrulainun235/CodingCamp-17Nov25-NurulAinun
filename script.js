document.addEventListener("DOMContentLoaded", () => {
    
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    
    faders.forEach(fader => appearOnScroll.observe(fader));
        
    const gateModal = document.getElementById("gate-modal");
    const gateForm = document.getElementById("gate-form");
    const nameInput = document.getElementById("visitor-name");
    
    const savedName = localStorage.getItem("visitorName");
   if (!savedName) {
    gateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
} else {
    gateModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

gateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    
    if (!name) return alert("Nama tidak boleh kosong 😊");

    localStorage.setItem("visitorName", name);
    gateModal.style.opacity = "0";
    gateModal.style.pointerEvents = "none";

    setTimeout(() => {
        gateModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        alert(`👋 Halo, ${name}! Selamat datang di website saya 😊`);
    }, 400);
});
    
});
