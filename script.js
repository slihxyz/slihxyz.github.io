document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const progressBars = document.querySelectorAll(".progress-bar");


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

