// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const slihhh = "SLIHHH(formal).jpg"
const slihhh_student = "SLIHHH(student).png"
const slihhh_ipb = "mtk(ipb).jpg"
const slihhh_njp = "muslih(expe).jpg"
const mikrotik = "mikrotik.png"
const linux = "debian.jpg"
const ftth = "ftth.webp"
const aws = "aws.jpg"
const pnet = "pnet.png"
const keamanan = "keamanan-jaringan.jpg"
const adinusa = "Adinusa1.png"
const bssn = "BSSN1.png"
const mtcna = "MTCNA.png"
const eth = "ETH.png"
const dacenn = "dacenn.png"
const dacen1 = "dacen1.jpg"
const dacen2 = "dacen2.jpg"
const musang = "musang.jpg"

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic loading of content
window.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadStudent();
    loadExperience();
    loadProjects();
    loadCertifications();
    loadContact();
});

function loadProfile() {
    const profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = `
        <h2>Profil</h2>
        <div class="profile-content">
            <div class="profile-photo">
                <img src="${musang}" alt="Muhamad Muslih" />
            </div>
            <div class="profile-text">
                <h3>Tentang Saya</h3>
                <p>Saya adalah lulusan SMK Wikrama Bogor, jurusan Teknik Jaringan Komputer dan Telekomunikasi, dengan passion besar di bidang teknologi informasi. Selama masa studi, saya mengerjakan berbagai proyek seperti konfigurasi dasar Mikrotik dan Linux, pengelolaan Cloud Computing, serta penerapan dasar Cyber Security untuk menjaga keamanan jaringan.</p>
                <p>Bagi saya, teknologi bukan hanya alat, tetapi jembatan yang menghubungkan ide dan solusi. Dengan keterampilan ini, saya berkomitmen untuk terus belajar, berinovasi, dan memberikan kontribusi nyata di dunia IT.</p>
            </div>
        </div>
    `;
}

function loadStudent() {
    const studentContent = document.getElementById('studentContent');
    studentContent.innerHTML = `
    <h2>Pendidikan</h2>
        <div class="student-card">
            <div class="student-image">
                <img src="${slihhh_student}" alt="Muhamad Muslih" />
            </div>
            <div class="student-details">
                <h3>Teknik Jaringan Komputer dan Telekomunikasi</h3>
                <p class="experience-company"><a href="https://smkwikrama.sch.id/" target="_blank">SMK Wikrama Bogor</a></p>
                <p class="experience-duration">Juni 2022 - Juni 2025</p>
                <p>SMK Wikrama Bogor bukan hanya tempat belajar, tetapi juga tempat membentuk pribadi. Di sini, siswa dididik untuk memiliki disiplin tinggi, akhlak yang mulia, sopan santun, serta kemandirian. Dengan lingkungan yang positif dan pembelajaran yang terarah, SMK Wikrama Bogor telah melahirkan lulusan berkompeten dan berkarakter, siap menghadapi dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>
            </div>
        </div>
    `;
}

function loadExperience() {
    const experienceContent = document.getElementById('experienceContent');
    experienceContent.innerHTML = `
        <h2>Pengalaman Kerja</h2>
        <div class="experience-card">
            <div class="experience-image">
                <img src="${slihhh_ipb}" alt="Modern data center interior with rows of server racks and blue ambient lighting" />
            </div>
            <div class="experience-details">
                <h3>IT Support</h3>
                <p class="experience-company"><a href="https://www.ipb.ac.id/page/math2/" target="_blank">Departemen Matematika IPB</a></p>
                <p class="experience-duration">Januari 2024 - Juni 2024</p>
                <p>Selama magang sebagai IT Support di Departemen Matematika IPB, saya bertanggung jawab menjaga kinerja komputer staf, mengatasi permasalahan seperti sistem lambat atau gangguan jaringan, serta memberikan bantuan kepada mahasiswa dalam instalasi software praktikum. Saya juga menyiapkan laboratorium sebelum kegiatan praktikum dan menangani gangguan koneksi mahasiswa agar tetap terhubung dengan jaringan dan server.</p>
            </div>
        </div>
        <div class="experience-card">
            <div class="experience-image">
                <img src="${slihhh_njp}" alt="PT Nusa Jaya Prasetyo" />
            </div>
            <div class="experience-details">
                <h3>Field Technician</h3>
                <p class="experience-company"><a href="https://njp.ebilling.co.id/" target="_blank">PT Nusa Jaya Prasetyo</a></p>
                <p class="experience-duration">Juni 2025 - Agustus 2025</p>
                <p>Bertugas menangani kebutuhan pelanggan di berbagai lokasi, mulai dari pemasangan jaringan baru hingga penanganan gangguan. Memastikan setiap instalasi berjalan dengan standar kualitas tinggi dan memberikan solusi cepat ketika terjadi kendala, demi menjaga konektivitas pelanggan tetap optimal.</p>
            </div>
        </div>
        <div class="experience-card">
            <div class="experience-image">
                <img src="${dacen1}" alt="PT RackH Lintas Asia" />
            </div>
            <div class="experience-details">
                <h3>System Engineer</h3>
                <p class="experience-company"><a href="https://www.rackh.com/about/#:~:text=Hadir%20sebagai%20salah%20satu%20Perusahaan%20IT%20Terbaik%20di,Service%20Provider%20%28ISP%29%20yang%20terbukti%20berpengalaman%20sejak%20lama" target="_blank">PT RackH Lintas Asia</a></p>
                <p class="experience-duration">Agustus 2025 - Sekarang</p>
                <p>Menangani setup dan instalasi server sesuai kebutuhan customer, termasuk instalasi OS hingga server siap diakses. Bertanggung jawab melakukan pemasangan kabel saat proses interkoneksi dengan pihak lain di Data Center.</p>
            </div>
        </div>
        
    `;
}

function loadProjects() {
    const projectsContent = document.getElementById('projectsContent');
    projectsContent.innerHTML = `
        <h2>Projek</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <img src="${mikrotik}" alt="MikroTik" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1Fwo9r9Cudv_0gKaX7k-Oojp2abddW-48?usp=sharing" target="_blank">Office Network Setup with MikroTik</a></h3>
                    <p>Menyiapkan jaringan kecil menggunakan dua router dengan routing static, load balance, OSPF, Queue Manajement, Firewall, dan Hotspot. </p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src="${linux}" alt="Linux Debian" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1wqo_AjkrXlaRMm2vGtBfVDSW66AidTbv?usp=sharing">Linux Server</a></h3>
                    <p>Mengonfigurasi layanan DHCP, DNS, FTP, gateway NAT menggunakan IPTables, Samba, HTTPS, Nginx, dan Apache2. Menerapkan server berbasis Linux dengan LEMP stack, WordPress, autentikasi kunci SSH, mail server dengan webmail, virtual host, serta layanan VoIP untuk mendukung kebutuhan jaringan dan komunikasi.</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src="${slihhh_njp}" alt="FTTH Projek" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1RnLHrJH6ZnLwsJhMGog4OyXKX61eBrzf?usp=sharing">FTTH Projek with MikroTik</a></h3>
                    <p>Mengimplementasikan PPPoE dan hotspot pada router MikroTik, serta melakukan instalasi kabel Fiber Optic (FO) lengkap dengan konfigurasi OLT dan ONT untuk memastikan konektivitas jaringan yang optimal.</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src="${aws}" alt="AWS Projek" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1lfgnl5-vbzpLhPhmGZeyGYT53X75IflA?usp=sharing">AWS Infrastructure Project</a>   </h3>
                    <p>Membangun infrastruktur yang dapat diskalakan menggunakan ELB, Auto Scaling, RDS, Zabbix dan Nagios untuk pemantauan, dan mengkonfigurasi VPC dan instans EC2.</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src="${pnet}" alt="Fiber optic cable installation with technician working in a data center environment" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1Vrwt_-qTFz9OtSA9ydrdLCQMhILEf3bG?usp=sharing">Office Network Setup with PNETLab</a></h3>
                    <p>Menyiapkan jaringan kecil menggunakan dua router dengan routing static, konfigurasi VLAN dan Firewall.</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src="${keamanan}" alt="Network monitoring dashboard showing real-time metrics and alerts on multiple screens" />
                </div>
                <div class="project-info">
                    <h3><a href="https://drive.google.com/drive/folders/1MTenORL8YI8q6ViMl07al59mptuOtlAx?usp=sharing">Keamanan Jaringan</a></h3>
                    <p>Melindungi data dan sistem komputer dari akses, gangguan, atau serangan yang tidak sah agar informasi tetap aman, tersedia, dan terpercaya.</p>
                </div>
            </div>
        </div>
    `;
}

function loadCertifications() {
    const certificationsContent = document.getElementById('certificationsContent');
    certificationsContent.innerHTML = `
        <h2>Sertifikasi</h2>
        <div class="certifications-grid">
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${adinusa}" alt="ADINUSA" />
                </div>
                <h3><b>Linux System Administration</b></h3>
                <p>2024</p>
            </div>
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${bssn}" alt="BSSN" />
                </div>
                <h3><b>Workshop Cybersecurity Awareness dan Ethical Hacking</b></h3>
                <p>2024</p>
            </div>
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${mtcna}" alt="MikroTik Certified Network Associate" />
                </div>
                <h3><b>MikroTik Certified Network Associate (MTCNA)</b></h3>
                <p>2025</p>
            </div>
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${eth}" alt="Ethical Hacking" />
                </div>
                <h3><b>Ethical Hacking</b></h3>
                <p>2024</p>
            </div>
        </div>
    `;
}

function loadContact() {
    const contactContent = document.getElementById('contactContent');
    contactContent.innerHTML = `
        <h2>Hubungi Saya</h2>
        <div class="contact-form">
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Nama Lengkap</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subjek</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn">Kirim Pesan</button>
            </form>
        </div>
    `;

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.send("service_7oxc5aa", "template_aksit6n", {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        })
        .then(() => {
            alert('Pesan Anda berhasil dikirim!');
            contactForm.reset();
        }, (err) => {
            alert('Gagal mengirim pesan: ' + JSON.stringify(err));
        });
    });
}