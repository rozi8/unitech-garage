export const siteContent = {
  nav: [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Hasil Kerja', href: '#gallery' },
    { label: 'Keunggulan', href: '#why-us' },
    { label: 'Kontak', href: '#contact' }
  ],

  hero: {
    headline: 'Bengkel Generasi Baru untuk Semua Generasi Mobil.',
    supportingHeadline: 'Diagnosis akurat, pengerjaan presisi, harga transparan.',
    subheadline: 'Mau rawat mobil klasik kesayangan, peremajaan matic harian, atau optimasi sistem electric vehicle & hybrid? Kami tangani dari kelistrikan, kaki-kaki, hingga AC dengan transparansi penuh dari awal sampai serah terima kunci.',
    ctaPrimary: 'Booking via WhatsApp',
    ctaSecondary: 'Lihat Layanan',
    phoneNumber: '0812 3456 7890',
    whatsappNumber: '62895322312590',
    emergencyText: '24-HOUR EMERGENCY ASSISTANCE',
    bgImage: '/img/hero-bg.png',
    carsImage: '/img/hero-cars-transparent.png',
    marquee: [
      'DIAGNOSIS JELAS',
      'TEKNISI BERPENGALAMAN',
      'HASIL KERJA RAPI',
      'BERBASIS DI DEPOK'
    ]
  },

  about: {
    eyebrow: 'Karakter Bengkel',
    titleTop: 'Profesional saat mendiagnosis.',
    titleBottom: 'Antusias saat mengeksekusi.',
    body: 'Unitech Garage dibangun untuk pemilik mobil yang ingin proses servis terasa tenang: keluhan didengar, temuan dijelaskan, dan pengerjaan dilakukan dengan standar yang konsisten.',
    image: '/img/Karakter_Bengkel.webp',
    rating: '99% Pelanggan Puas',
    ratingDetail: '4.6 ★★★★★',
    features: [
      {
        title: 'Teknisi Berpengalaman',
        desc: 'Inspeksi & diagnosis akurat dari tim ahli yang paham detail teknis kendaraan.',
        color: 'orange'
      },
      {
        title: 'Peralatan & Tools Modern',
        desc: 'Penggunaan perlengkapan scanner & tools presisi untuk hasil mulus tahan lama.',
        color: 'blue'
      },
      {
        title: 'Servis Terpercaya & Garansi',
        desc: 'Penjelasan estimasi biaya transparan dengan jaminan garansi resmi pengerjaan.',
        color: 'emerald'
      }
    ]
  },

  services: {
    eyebrow: 'Layanan Kami',
    title: 'Solusi utama untuk menjaga mobil dalam kondisi prima',
    subtitle: 'Pilih layanan sesuai keluhan. Tim kami bantu cek prioritas supaya biaya dan waktu pengerjaan lebih terkendali.',
    items: [
      {
        title: 'Servis Mesin',
        desc: 'Diagnosis performa, tune-up, pengecekan kebocoran, dan perawatan komponen utama.',
        image: '/public/img/mesin.jpg'
      },
      {
        title: 'Kelistrikan',
        desc: 'Pemeriksaan aki, lampu, sensor, wiring, dan gangguan arus yang sulit dilacak.',
        image: '/public/img/elektrkal.jpeg'
      },
      {
        title: 'Kaki-Kaki & Suspensi',
        desc: 'Pengecekan bunyi, pengereman, shockbreaker, bushing, dan stabilitas kendaraan.',
        image: '/public/img/kaki-kaki 2.jpg'
      },
      {
        title: 'Servis Berkala',
        desc: 'Perawatan rutin untuk oli, filter, fluida, rem, ban, dan komponen fast moving.',
        image: '/public/img/servic mesin 2.webp'
      },
      {
        title: 'AC Mobil',
        desc: 'Pengecekan tekanan, kebocoran, evaporator, blower, dan performa pendinginan kabin.',
        image: '/public/img/ac.jpg'
      },
      {
        title: 'Detailing Ringan',
        desc: 'Perawatan tampilan agar eksterior dan interior kembali segar setelah pemakaian harian.',
        image: '/public/img/Workshop.webp'
      }
    ]
  },

  comparisons: {
    eyebrow: 'Before / After',
    title: 'Bukti visual dari proses kerja kami',
    subtitle: 'Geser slider pada tiap card untuk melihat perubahan kondisi sebelum dan sesudah layanan.',
    items: [
      {
        title: 'Restorasi & Perbaikan Eksterior',
        desc: 'Penanganan bodi dan eksterior kendaraan, mulai dari perbaikan bagian yang rusak hingga proses finishing untuk mengembalikan tampilan mobil agar lebih rapi dan menarik.',
        before: '/public/img/ringsek 3.webp',
        after: '/public/img/ft86 after.jpg'
      },
      {
        title: 'Restorasi & Repaint Bodi',
        desc: 'Proses restorasi bodi kendaraan melalui tahap persiapan permukaan, perbaikan panel, dan pengecatan untuk menghasilkan tampilan yang lebih rapi dan siap ke tahap finishing.',
        before: '/public/img/cat.jpg',
        after: '/public/img/Workshop.webp'
      },
      {
        title: 'Penyegaran Interior',
        desc: 'Membersihkan detail kabin dan area yang sering disentuh pengguna.',
        before: '/public/img/expander.jpeg',
        after: '/public/img/after expander.jpg'
      }
    ]
  },

  whyUs: {
    eyebrow: 'Kenapa Memilih Kami',
    title: 'Bengkel yang terasa cepat, jelas, dan bisa dipercaya',
    points: [
      {
        title: 'Diagnosis Terarah',
        desc: 'Keluhan dipetakan lebih dulu agar pengerjaan tidak menebak-nebak.',
        image: '/img/Diagnosis.webp'
      },
      {
        title: 'Estimasi Transparan',
        desc: 'Biaya dan prioritas perbaikan dijelaskan sebelum pekerjaan dimulai.',
        image: '/img/Estimasi.webp'
      },
      {
        title: 'Eksekusi Rapi',
        desc: 'Hasil kerja dicek ulang supaya mobil keluar bengkel dalam kondisi siap pakai.',
        image: '/img/Karakter_Bengkel.webp'
      },
      {
        title: 'Respons Cepat',
        desc: 'Booking, konsultasi, dan update pekerjaan bisa dilakukan lewat WhatsApp.',
        image: '/img/Response.webp'
      }
    ]
  },

  gallery: {
    eyebrow: 'Galeri Bengkel',
    title: 'Ruang kerja yang rapi, terang, dan siap menangani mobil Anda',
    items: [
      { src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop', alt: 'Area kerja bengkel' },
      { src: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c092bf?q=80&w=1200&auto=format&fit=crop', alt: 'Teknisi memeriksa kendaraan' },
      { src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop', alt: 'Mobil di area servis' }
    ]
  },

  location: {
    eyebrow: 'Lokasi',
    title: 'Datang langsung atau booking dulu lewat WhatsApp',
    address: 'Alamat asli Unitech Garage',
    mapsUrl: 'https://maps.app.goo.gl/XhV2AYPry2x5WgcBA',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278.11230986677054!2d106.83593547174839!3d-6.451476682689831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebfb88bb0827%3A0xc1324fab37c20e58!2sUnitech%20Garage!5e1!3m2!1sid!2sid!4v1788149566193!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
    cards: [
      {
        title: 'Konsultasi dulu',
        desc: 'Cocok untuk keluhan yang perlu dipetakan sebelum datang.'
      },
      {
        title: 'Datang ke bengkel',
        desc: 'Bawa mobil untuk pengecekan langsung oleh teknisi.'
      }
    ]
  },

  contact: {
    eyebrow: 'Kontak',
    title: 'Ceritakan keluhan mobil Anda, kami bantu cek langkah berikutnya.',
    subtitle: 'Kirim pesan WhatsApp untuk konsultasi awal, estimasi, atau jadwal kunjungan ke bengkel.',
    whatsappNumber: '6283171119994',
    whatsappMessage: 'Halo Unitech Garage, saya ingin konsultasi dan booking servis kendaraan.'
  },

  footer: {
  tagline: 'Bengkel mobil profesional untuk perawatan menyeluruh kendaraan Anda.',
  address: 'Depok, Jawa Barat',
  whatsappDisplay: [
    '+62 8953-2231-2590',
    '+62 831-7111-9994'
  ],
},

media: {
  instagram: 'https://www.instagram.com/unitechgarage/',
  // facebook: 'https://www.facebook.com/unitechgarage',
  // youtube: 'https://www.youtube.com/@unitechgarage'
}
}
