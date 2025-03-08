import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="border p-4">
          <h3 className="text-xl font-bold mb-2">Ci4 Web Kepegawaian</h3>
          <p className="mb-2">Sistem kepegawaian yang dibangun menggunakan CodeIgniter 4 dan Admin LTE, lengkap dengan fitur manajemen pegawai, kehadiran, cuti, dan gaji.</p>
          <a href='https://sendy063.github.io/Kewirausahaan/' className="text-blue-500 hover:underline">View Project</a>
        </li>
        <li className="border p-4">
          <h3 className="text-xl font-bold mb-2">Web Cek Khodam</h3>
          <p className="mb-2">Website interaktif untuk mengecek khodam dengan fitur-fitur unik dan antarmuka yang ramah pengguna.</p>
          <a href='https://sendy063.github.io/cek/' className="text-blue-500 hover:underline">View Project</a>
        </li>
        <li className="border p-4">
          <h3 className="text-xl font-bold mb-2">Web Gabut</h3>
          <p className="mb-2">Proyek web yang menampilkan konsep gak jelas.</p>
          <a href='https://sendy063.github.io/1/' className="text-blue-500 hover:underline">View Project</a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
