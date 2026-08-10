export interface DusunHistory {
  id: string;
  name: string;
  type: "Wilayah Lama" | "Permukiman Baru";
  badge: string;
  etymology: {
    breakdown: string;
    meaning: string;
  };
  paragraphs: string[];
  keyFiguresOrPlaces: string[];
  establishedYear?: string;
}

export interface HistoryLeader {
  period: string;
  name: string;
  role: string;
  context: string;
}

export interface HistorySource {
  name: string;
  date: string;
  topic: string;
  medium: string;
}

export const desaHistoryData = {
  title: "Sejarah Desa Genengsari",
  subtitle: "Jejak Rekam Perkembangan Wilayah, Kebayanan, Waduk Kedung Ombo, hingga Pembentukan 5 Dusun Definitif",
  
  asalUsul: {
    title: "Asal-Usul & Perkembangan Awal Desa",
    paragraphs: [
      "Sejarah Desa Genengsari tidak dapat dilepaskan dari perkembangan wilayah Kemusu dan kawasan di sekitar Sungai Serang. Sebelum menggunakan nama Genengsari, wilayah ini dikenal sebagai bagian dari Kemusu Wetan, yang secara administratif pada masa sebelumnya berpasangan dengan Kemusu Kulon. Perubahan nama dan penataan wilayah kemudian berlangsung seiring dengan perkembangan administrasi pemerintahan pada masa setelah kemerdekaan.",
      "Nama Genengsari dapat dimaknai dari unsur kata geneng dan sari. Dalam pemaknaan lokal, geneng merujuk pada tempat yang lebih tinggi, sedangkan sari dimaknai sebagai inti atau tempat. Nama tersebut berkaitan dengan kondisi geografis wilayah yang relatif lebih tinggi dibandingkan kawasan di sekitarnya.",
      "Wilayah awal Genengsari berkembang di sekitar kawasan Sungai Serang. Sungai tersebut memiliki arti penting bagi kehidupan masyarakat, baik sebagai sumber air maupun sebagai bagian dari lingkungan tempat masyarakat bermukim dan menjalankan aktivitas pertanian. Perkembangan permukiman berlangsung secara bertahap dan kemudian membentuk beberapa kebayanan atau dusun.",
      "Pada masa awal perkembangan desa, terdapat empat kebayanan, yaitu Genengsari, Grogol, Sarean, dan Karang. Keberadaan wilayah-wilayah tersebut juga diperkuat oleh peta tahun 1927 yang telah ditemukan dalam penelitian ini. Peta tersebut menunjukkan penggunaan nama dan pembagian wilayah yang menjadi bagian penting dalam merekonstruksi perkembangan administratif kawasan Genengsari pada masa sebelum pembangunan Waduk Kedung Ombo."
    ],
    etymology: [
      { word: "Geneng", meaning: "Merujuk pada tempat yang relatif lebih tinggi secara geografis." },
      { word: "Sari", meaning: "Dimaknai sebagai inti, kedudukan, atau kebaikan tempat." }
    ],
    kebayananAwal: ["Genengsari", "Grogol", "Sarean", "Karang"]
  },

  leaders: [
    { period: "Masa Kolonial", name: "Mbah Podono", role: "Kepala Desa Masa Kolonial", context: "Dikenal dari tuturan sejarah lisan masyarakat lokal." },
    { period: "s.d. ~1966", name: "Purwodiharjo", role: "Kepala Desa", context: "Melanjutkan kepemimpinan pasca era Mbah Podono." },
    { period: "~1966 – ~1974", name: "Sudarto", role: "Kepala Desa", context: "Memimpin desa pada era 1960-an pertengahan hingga 1970-an awal." },
    { period: "~1974 – ~1990", name: "S. Cipto Suroso", role: "Kepala Desa (Periode Pertama)", context: "Memimpin dalam periode awal termasuk masa awal perencanaan waduk. Kembali mengikuti Pilkades 1982." },
    { period: "~1990 – 1993", name: "Pejabat Desa (Pj)", role: "Pejabat Sementara", context: "Menjalankan pemerintahan dalam masa transisi administratif." },
    { period: "1993 – ~1997", name: "S. Cipto Suroso", role: "Kepala Desa (Periode Kedua)", context: "Terpilih kembali dalam Pilkades 1993 dan memimpin pasca peresmian waduk." },
    { period: "~1998 – 2007", name: "Ahmad Yani", role: "Kepala Desa", context: "Memimpin penataan desa pada era reformasi hingga pertengahan 2000-an." },
    { period: "~2008 – 2013", name: "Sumarji", role: "Kepala Desa", context: "Melanjutkan pemantapan administrasi dan potensi lima dusun desa." }
  ],

  kedungOmbo: {
    title: "Perubahan Wilayah & Waduk Kedung Ombo",
    paragraphs: [
      "Perubahan terbesar dalam sejarah Desa Genengsari terjadi pada dekade 1980-an seiring dengan pembangunan Waduk Kedung Ombo. Pembangunan waduk merupakan bagian dari proyek pengelolaan sumber daya air di wilayah Jawa Tengah. Secara umum, proyek ini dirancang untuk kepentingan irigasi, pengendalian banjir, penyediaan air, pembangkit listrik, serta kebutuhan lainnya. Pembangunan fisiknya berlangsung pada 1985–1989 dan waduk kemudian diresmikan pada 14 Januari 1989.",
      "Pembangunan Waduk Kedung Ombo membawa perubahan besar terhadap masyarakat di Kecamatan Kemusu. Wilayah permukiman, lahan pertanian, dan ruang kehidupan masyarakat terdampak oleh pembangunan dan penggenangan. Proses pembebasan tanah dan penetapan ganti rugi kemudian menimbulkan persoalan antara masyarakat dan pemerintah. Di Kecamatan Kemusu, persoalan tersebut berkembang menjadi gerakan penolakan masyarakat yang berlangsung hingga awal 1990-an.",
      "Kajian mengenai konflik Kedung Ombo menunjukkan bahwa masyarakat tidak hanya menghadapi kehilangan tanah dan sumber penghidupan, tetapi juga mengalami perubahan hubungan sosial. Sebagian masyarakat menolak pindah dan menolak bentuk ganti rugi yang ditawarkan, sementara sebagian lainnya memilih pindah ke wilayah lain. Perbedaan pilihan tersebut bahkan berdampak terhadap hubungan kekerabatan dan kehidupan sosial masyarakat.",
      "Dampak pembangunan waduk juga sangat terasa dalam perkembangan wilayah Desa Genengsari. Sebelum penggenangan, desa terdiri atas empat kebayanan, yaitu Genengsari, Grogol, Sarean, dan Karang. Penggenangan menyebabkan sebagian wilayah Sarean dan Karang kehilangan kawasan permukiman dan lahan yang sebelumnya menjadi ruang hidup masyarakat. Sebagian penduduk berpindah ke wilayah lain, termasuk ke luar Jawa, sedangkan sebagian lainnya berpindah atau membeli tanah di wilayah yang kemudian berkembang menjadi permukiman baru.",
      "Perpindahan tersebut menjadi salah satu faktor terbentuknya wilayah-wilayah permukiman baru di Desa Genengsari. Balirejo, misalnya, berkembang dari kawasan tegalan dan sawah yang sebelumnya berkaitan dengan wilayah Karang, Mlangi, Sarean, dan sekitarnya. Masyarakat yang menempati wilayah tersebut berasal dari beberapa dusun, termasuk masyarakat yang terdampak pembangunan waduk. Nama Balirejo kemudian dimaknai sebagai bali rejo, yakni kembali kepada keadaan yang ramai atau berkembang kembali.",
      "Hal yang serupa terjadi di Salamsari. Kawasan ini pada awalnya berupa hutan dan lahan pertanian. Setelah pembangunan dan penggenangan Waduk Kedung Ombo, sebagian masyarakat yang kehilangan tempat tinggal kemudian menempati kawasan tersebut. Pada awal 1990-an jumlah penduduknya berkembang cukup pesat. Wilayah yang sebelumnya masih menjadi bagian dari Genengsari kemudian ditetapkan secara definitif sebagai Dusun Salamsari pada 1997.",
      "Perubahan juga terjadi di wilayah Ngargotirto. Kawasan ini berkembang sebagai permukiman baru yang dihuni masyarakat dari berbagai latar belakang. Nama Ngargotirto dikaitkan dengan kata argo yang berarti gunung dan tirto yang berarti air, berkaitan dengan keberadaan sumber air di kawasan tersebut. Salah satu sumber air yang dikenal masyarakat adalah Sumur Tumpang, yang menjadi bagian dari ingatan geografis masyarakat setempat.",
      "Dengan demikian, pembangunan Waduk Kedung Ombo menjadi titik balik penting dalam sejarah Desa Genengsari. Peristiwa tersebut bukan hanya mengubah bentang alam, tetapi juga mengubah susunan permukiman, persebaran penduduk, hubungan antarwilayah, dan struktur administratif desa. Dari empat kebayanan, perkembangan penduduk dan munculnya kawasan permukiman baru kemudian mendorong terbentuknya lima dusun, yaitu Genengsari, Grogol, Balirejo, Salamsari, dan Ngargotirto."
    ],
    milestones: [
      { year: "1985 – 1989", label: "Pembangunan Fisik Waduk", detail: "Pembangunan bendungan Kedung Ombo di Jawa Tengah." },
      { year: "14 Jan 1989", label: "Peresmian Waduk", detail: "Waduk resmi diresmikan, memulai era penggenangan kawasan." },
      { year: "1997", label: "Penetapan Salamsari", detail: "Dusun Salamsari dimekarkan definitif dari Genengsari." },
      { year: "Masa Kini", label: "Transformasi 5 Dusun", detail: "Terbentuk 5 dusun: Genengsari, Grogol, Balirejo, Salamsari, Ngargotirto." }
    ]
  },

  dusunList: [
    {
      id: "genengsari",
      name: "Dusun Genengsari",
      type: "Wilayah Lama" as const,
      badge: "Pusat Awal Desa",
      etymology: {
        breakdown: "Geneng (Tempat Tinggi) + Sari (Inti / Tempat)",
        meaning: "Pusat awal pemukiman yang berada di lokasi berketinggian relatif lebih tinggi."
      },
      paragraphs: [
        "Genengsari merupakan salah satu wilayah lama yang menjadi bagian dari struktur awal Desa Genengsari. Nama Genengsari berkaitan dengan kondisi geografis wilayah yang relatif tinggi. Kata geneng dipahami sebagai tempat yang tinggi, sedangkan sari merujuk pada inti atau tempat.",
        "Sebagai wilayah yang telah ada sebelum pembangunan Waduk Kedung Ombo, Genengsari menjadi salah satu bagian penting dari pusat kehidupan masyarakat desa. Perkembangan desa, pemerintahan, serta perubahan administratif pada masa berikutnya kemudian berlangsung dari kawasan ini.",
        "Dalam perkembangan sejarahnya, Genengsari juga berkaitan dengan keberadaan tokoh-tokoh masyarakat dan tempat yang dianggap memiliki nilai sejarah. Salah satunya adalah Mbah Banteng Iropotro, yang makamnya dikenal sebagai Makam Ngawen. Nama Mbah Banteng disebut dalam ingatan masyarakat sebagai salah satu tokoh lama yang berkaitan dengan sejarah awal desa.",
        "Genengsari juga menjadi bagian dari perubahan besar yang terjadi setelah pembangunan Waduk Kedung Ombo. Ketika permukiman baru berkembang, sejumlah wilayah yang pada awalnya secara administratif masih mengikuti Genengsari kemudian mengalami penataan. Salah satunya adalah Salamsari yang pada 1997 ditetapkan sebagai dusun tersendiri."
      ],
      keyFiguresOrPlaces: ["Makam Ngawen (Mbah Banteng Iropotro)", "Pusat Administrasi Awal Desa"]
    },
    {
      id: "grogol",
      name: "Dusun Grogol",
      type: "Wilayah Lama" as const,
      badge: "Dusun Historis",
      etymology: {
        breakdown: "Berasal dari istilah lokal 'grogolan'",
        meaning: "Merujuk pada bentuk lingkungan alam tertentu yang menjadi bagian dari penamaan kawasan."
      },
      paragraphs: [
        "Grogol merupakan salah satu dusun yang telah ada dalam struktur wilayah Desa Genengsari sebelum pembangunan Waduk Kedung Ombo. Nama Grogol berkaitan dengan istilah lokal grogolan, yang merujuk pada kondisi atau bentuk lingkungan tertentu yang menjadi bagian dari penamaan wilayah.",
        "Kawasan Grogol juga memiliki hubungan erat dengan keberadaan sumber-sumber air dan lingkungan alam. Salah satu tempat yang dikenal masyarakat adalah Sendang Jajar, yang hingga kini menjadi bagian dari ingatan sejarah dan kehidupan sosial masyarakat. Keberadaan sendang menunjukkan pentingnya sumber air dalam kehidupan masyarakat desa pada masa lalu.",
        "Di sekitar wilayah Grogol juga terdapat berbagai cerita mengenai tokoh masyarakat dan sejarah lokal yang diwariskan secara lisan. Salah satunya berkaitan dengan Mbah Podrono, yang disebut dalam cerita masyarakat sebagai salah satu tokoh lama yang berkaitan dengan kawasan tersebut."
      ],
      keyFiguresOrPlaces: ["Sendang Jajar", "Mbah Podrono"]
    },
    {
      id: "balirejo",
      name: "Dusun Balirejo",
      type: "Permukiman Baru" as const,
      badge: "Kawasan Pemulihan",
      etymology: {
        breakdown: "Bali (Kembali) + Rejo (Ramai / Makmur)",
        meaning: "Harapan agar kawasan yang ditinggalkan dapat kembali berkembang dan menjadi tempat kehidupan baru yang ramai."
      },
      paragraphs: [
        "Balirejo merupakan salah satu dusun yang berkembang sebagai permukiman baru setelah terjadinya perubahan besar akibat pembangunan Waduk Kedung Ombo. Sebelum menjadi permukiman, kawasan ini berupa sawah dan tegalan yang berkaitan dengan wilayah Karang, Mlangi, Sarean, dan sekitarnya.",
        "Masyarakat yang kemudian menetap di Balirejo berasal dari berbagai wilayah. Sebagian berasal dari Karang, Sarean, Mlangi, Nglempong, dan daerah lainnya. Sebagian telah memiliki tanah atau tegalan di kawasan tersebut, sedangkan sebagian lainnya memperoleh atau membeli tanah setelah terdampak pembangunan waduk.",
        "Keadaan tersebut menyebabkan masyarakat Balirejo memiliki latar belakang yang beragam. Permukiman baru tersebut kemudian berkembang menjadi komunitas yang lebih teratur dan secara administratif ditetapkan sebagai dusun.",
        "Nama Balirejo dimaknai dari kata bali yang berarti kembali dan rejo yang bermakna ramai atau makmur. Nama tersebut menggambarkan harapan agar kawasan yang sebelumnya pernah ditinggalkan dapat kembali berkembang dan menjadi tempat kehidupan masyarakat."
      ],
      keyFiguresOrPlaces: ["Eks Tegalan Karang, Mlangi, Sarean & Nglempong"]
    },
    {
      id: "salamsari",
      name: "Dusun Salamsari",
      type: "Permukiman Baru" as const,
      badge: "Pemekaran 1997",
      establishedYear: "1997",
      etymology: {
        breakdown: "Salam (Keselamatan) + Sari (Harapan / Inti)",
        meaning: "Mencerminkan harapan masyarakat terhadap keselamatan dalam kehidupan baru pasca perpindahan."
      },
      paragraphs: [
        "Salamsari berkembang dari kawasan yang sebelumnya berupa hutan, tegalan, dan lahan pertanian. Perkembangan permukiman di wilayah ini berkaitan erat dengan dua peristiwa penting, yaitu banjir bandang sekitar 1982 dan pembangunan Waduk Kedung Ombo pada dekade yang sama.",
        "Banjir bandang yang terjadi sekitar Februari 1982 menjadi salah satu peristiwa yang diingat masyarakat. Peristiwa tersebut menyebabkan sebagian masyarakat berpindah dari wilayah terdampak dan mulai menempati kawasan yang kemudian berkembang menjadi Salamsari. Catatan pemberitaan sezaman yang ditemukan dalam penelitian turut memperkuat keberadaan peristiwa banjir tersebut pada awal dekade 1980-an.",
        "Beberapa tahun kemudian, pembangunan dan penggenangan Waduk Kedung Ombo kembali menyebabkan perpindahan penduduk. Sebagian masyarakat yang kehilangan permukiman dan lahan kemudian menempati kawasan Salamsari. Pada awal 1990-an kawasan ini berkembang menjadi permukiman dengan jumlah penduduk yang semakin besar.",
        "Nama Salamsari dimaknai dari kata salam dan sari, yang dalam pemaknaan masyarakat dikaitkan dengan keselamatan atau harapan memperoleh keselamatan. Nama tersebut mencerminkan harapan masyarakat terhadap kehidupan baru setelah mengalami berbagai perubahan dan perpindahan.",
        "Pada awalnya Salamsari masih menjadi bagian dari wilayah Genengsari. Seiring pertumbuhan penduduk, pada 1997 wilayah tersebut ditetapkan secara definitif sebagai dusun tersendiri. Kepala dusun pertama kemudian bertugas menata wilayah dan kehidupan sosial masyarakat yang sebelumnya masih berupa permukiman baru."
      ],
      keyFiguresOrPlaces: ["Peristiwa Banjir Bandang Feb 1982", "Resmi Dusun Tahun 1997"]
    },
    {
      id: "ngargotirto",
      name: "Dusun Ngargotirto",
      type: "Permukiman Baru" as const,
      badge: "Kawasan Sumber Air",
      etymology: {
        breakdown: "Argo (Gunung) + Tirto (Air)",
        meaning: "Kondisi alam perbukitan yang menyimpan sumber-sumber mata air vital bagi warga."
      },
      paragraphs: [
        "Ngargotirto merupakan salah satu dusun yang berkembang sebagai kawasan permukiman baru. Perkembangannya tidak terlepas dari perubahan wilayah setelah pembangunan Waduk Kedung Ombo dan perpindahan masyarakat dari kawasan terdampak.",
        "Nama Ngargotirto dikaitkan dengan kata argo yang berarti gunung dan tirto yang berarti air. Penamaan tersebut berhubungan dengan kondisi alam kawasan yang memiliki sumber air di sekitar wilayah perbukitan. Salah satu sumber air yang dikenal dalam sejarah lokal adalah Sumur Tumpang.",
        "Pada masa awal perkembangannya, Ngargotirto dihuni masyarakat dari berbagai daerah sehingga memiliki karakter masyarakat yang majemuk. Kawasan permukiman tersebut kemudian berkembang dan memperoleh status administratif sebagai salah satu dusun di Desa Genengsari.",
        "Di bagian wilayah Ngargotirto juga berkembang kawasan yang dikenal sebagai Kaplingan, yaitu kawasan permukiman yang pada awalnya merupakan lahan yang dibagi dalam bentuk kapling untuk ditempati masyarakat. Kawasan ini kemudian berkembang menjadi Luarrejo. Perkembangan Luarrejo berlangsung sekitar pertengahan dekade 2000-an dan berkaitan dengan pembukaan kawasan yang sebelumnya masih berupa hutan. Nama Luarrejo dikaitkan dengan tokoh yang dikenal sebagai salah satu pelopor pembukaan kawasan tersebut."
      ],
      keyFiguresOrPlaces: ["Sumur Tumpang", "Kawasan Kaplingan / Luarrejo (~mid 2000-an)"]
    }
  ],

  budayaDanSitus: {
    title: "Warisan Budaya & Ingatan Sejarah",
    paragraphs: [
      "Sejarah Desa Genengsari tidak hanya tersimpan melalui perubahan wilayah dan pemerintahan, tetapi juga melalui tradisi, kesenian, serta tempat-tempat yang memiliki arti bagi masyarakat."
    ],
    reog: {
      title: "Kesenian Reog Turangga Muda",
      description: "Kesenian reog lokal khas Desa Genengsari yang diwariskan dari generasi ke generasi. Memiliki makna mendalam sebagai simbol tunas muda yang melestarikan kebudayaan leluhur.",
      elements: ["Kuda Kepang / Jathilan", "Barongan", "Ganongan"]
    },
    bersihDusun: {
      title: "Tradisi Bersih Dusun",
      description: "Kegiatan kebudayaan dan doa bersama sebagai ungkapan syukur atas kelimpahan rezeki serta permohonan keselamatan dan ketentraman hidup masyarakat."
    },
    situsList: [
      { name: "Gunung Tugel", category: "Landmark Alam", desc: "Perbukitan bersejarah dalam memori kolektif masyarakat lokal." },
      { name: "Sumur Tumpang", category: "Sumber Mata Air", desc: "Mata air vital di wilayah Dusun Ngargotirto." },
      { name: "Sendang Jajar", category: "Situs Air & Budaya", desc: "Sendang bersejarah yang ada di wilayah Dusun Grogol." },
      { name: "Sendang Petel", category: "Situs Mata Air", desc: "Sendang legendaris sumber kehidupan warga." },
      { name: "Makam Ngawen", category: "Situs Tokoh Historis", desc: "Makam Mbah Banteng Iropotro di Dusun Genengsari." }
    ]
  },

  penutup: [
    "Perjalanan sejarah Desa Genengsari memperlihatkan bahwa perkembangan sebuah desa tidak berlangsung secara linier. Wilayah yang pada awalnya tersusun atas kebayanan Genengsari, Grogol, Sarean, dan Karang mengalami perubahan besar akibat pembangunan Waduk Kedung Ombo. Perpindahan penduduk, hilangnya sejumlah permukiman lama, munculnya kawasan permukiman baru, serta penataan administrasi kemudian membentuk struktur desa yang dikenal sekarang.",
    "Perubahan tersebut sekaligus memperlihatkan kemampuan masyarakat untuk membangun kembali kehidupan sosialnya. Balirejo, Salamsari, dan Ngargotirto berkembang sebagai ruang kehidupan baru bagi masyarakat dengan latar belakang yang beragam, sementara Genengsari dan Grogol mempertahankan jejak sejarah wilayah yang telah lebih dahulu berkembang.",
    "Oleh karena itu, sejarah Genengsari tidak hanya merupakan catatan mengenai pergantian nama wilayah atau pemerintahan, tetapi juga merupakan sejarah tentang ruang, perpindahan, lingkungan, masyarakat, dan usaha untuk mempertahankan ingatan masa lalu. Berbagai sumber tertulis, arsip, peta, serta kesaksian masyarakat menjadi bagian penting dalam merekonstruksi perjalanan tersebut agar sejarah desa dapat terus dikenali oleh generasi berikutnya."
  ],

  sources: {
    wawancara: [
      { name: "Badi", date: "2 Agustus 2026", topic: "Sejarah & Perkembangan Kesenian Reog Turangga Muda", medium: "Wawancara Lisan" },
      { name: "Darso", date: "4 Agustus 2026", topic: "Sejarah Dusun Grogol & Perkembangan Wilayah Desa Genengsari", medium: "Wawancara Lisan" },
      { name: "Edo", date: "3 Agustus 2026", topic: "Sejarah Dusun Ngargotirto & Perkembangan Wilayah Luarrejo", medium: "Wawancara Lisan" },
      { name: "Badrun", date: "5 Agustus 2026", topic: "Sejarah Dusun Balirejo", medium: "Wawancara Lisan" },
      { name: "Sofyan", date: "4 Agustus 2026", topic: "Sejarah Dusun Salamsari", medium: "Wawancara Lisan" },
      { name: "Warno", date: "5 Agustus 2026", topic: "Sejarah Desa Genengsari & Perkembangan Dusun Genengsari", medium: "Wawancara Lisan" }
    ],
    arsipPeta: [
      {
        institution: "Topografische Dienst Weltevreden (Batavia)",
        year: "1927",
        title: "[Nglandi]: Opgenomen door den Topografischen Dienst in 1924–1925",
        publisher: "Reproductiebedrijf Topografische Dienst, Weltevreden (Batavia)",
        location: "Koleksi Perpustakaan Universitas Leiden (Leiden University Libraries)"
      }
    ],
    suratKabar: [
      {
        publisher: "Berita Yudha",
        year: "1983",
        title: "Pemberitaan Peristiwa Banjir Bandang di Wilayah Genengsari dan Sekitarnya (Februari 1982)",
        medium: "Arsip Surat Kabar Sezaman"
      }
    ]
  }
};
