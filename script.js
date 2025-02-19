document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const progressBars = document.querySelectorAll(".progress-bar");

  // Fungsi untuk menghitung warna berdasarkan persentase
  function getColor(percentage) {
    const red = Math.max(255 - (percentage * 2.55), 0); // Merah menurun
    const green = Math.min(percentage * 2.55, 255); // Hijau meningkat
    return `rgb(${red}, ${green}, 0)`; // Warna kombinasi RGB
  }

  // Fungsi untuk memperbarui warna progress bar
  function updateProgressBar(bar) {
    const percentage = parseInt(bar.textContent.replace("%", ""), 10); // Ambil persentase dari teks
    bar.style.backgroundColor = getColor(percentage); // Atur warna berdasarkan persentase
  }

  // Perbarui warna untuk setiap progress bar
  progressBars.forEach((bar) => {
    updateProgressBar(bar); // Perbarui warna saat pertama kali dimuat
    
    // Gunakan MutationObserver untuk memantau perubahan style
    const observer = new MutationObserver(() => updateProgressBar(bar));
    observer.observe(bar, { attributes: true, attributeFilter: ["style"] });
  });

  // Form submission alert
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    alert("Thank you for contacting me!");
  });

  // SCROLL Halus
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Mencegah default action (perpindahan langsung)
      
      const targetId = this.getAttribute("href").substring(1); // Ambil target id dari href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Melakukan scroll halus ke elemen target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Efek animasi
  });
});

//ANIMASI SAAT HALAMAN DI SCROLL

document.addEventListener("DOMContentLoaded", () => {
  AOS.init(); // Inisialisasi animasi AOS

  const bars = document.querySelectorAll(".progress-bar");

  window.addEventListener("scroll", () => {
      bars.forEach((bar) => {
          const value = bar.innerText;
          bar.style.width = value; 
      });
  });
});

