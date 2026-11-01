// src/data/levels.ts

export interface LevelMeta {
  id: string;
  levelNumber: number;
  title: string;
  region: string;
  regionId: 'forest' | 'valley' | 'palace';
  description: string;
  icon?: string; // Opsional atau bisa langsung disertakan
}

export interface ChapterSection {
  chapterId: string;
  chapterTitle: string;
  chapterSubtitle: string;
  levels: LevelMeta[];
}

export const GAME_CHAPTERS: ChapterSection[] = [
  {
    chapterId: 'chapter-1',
    chapterTitle: 'Bab 1: Petualangan Pola & Angka',
    chapterSubtitle: 'Jelajahi hutan bentuk, lembah bilangan, dan istana logika dasar.',
    levels: [
      { 
        id: 'level-1', 
        levelNumber: 1, 
        region: 'Hutan Bentuk', 
        regionId: 'forest', 
        title: 'Taman Bintang Awal', 
        description: 'Mengenal pola gambar bintang yang bertambah banyak.', 
        icon: '⭐' 
      },
      { 
        id: 'level-2', 
        levelNumber: 2, 
        region: 'Hutan Bentuk', 
        regionId: 'forest', 
        title: 'Hutan Kristal Menyusut', 
        description: 'Menjelajahi pola pengurangan kristal ajaib.', 
        icon: '💎' 
      },
      { 
        id: 'level-3', 
        levelNumber: 3, 
        region: 'Hutan Bentuk', 
        regionId: 'forest', 
        title: 'Formasi Bunga Ajaib', 
        description: 'Menghitung objek dalam formasi bunga membesar.', 
        icon: '🌸' 
      },
      { 
        id: 'level-4', 
        levelNumber: 4, 
        region: 'Hutan Bentuk', 
        regionId: 'forest', 
        title: 'Rahasia Batuan Pola', 
        description: 'Menentukan selisih pertambahan objek dengan tepat.', 
        icon: '🪨' 
      },
      { 
        id: 'level-5', 
        levelNumber: 5, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Jembatan Penjumlahan', 
        description: 'Menyeberang jurang dengan pola bilangan bertambah.', 
        icon: '🌉' 
      },
      { 
        id: 'level-6', 
        levelNumber: 6, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Tangga Pengurangan', 
        description: 'Menurun tebing dengan pola bilangan berkurang.', 
        icon: '📉' 
      },
      { 
        id: 'level-7', 
        levelNumber: 7, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Gua Angka Tersembunyi', 
        description: 'Mencari bilangan yang hilang di tengah urutan.', 
        icon: '🦇' 
      },
      { 
        id: 'level-8', 
        levelNumber: 8, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Teka-Teki Aturan Pola', 
        description: 'Menyimpulkan aturan operasi matematika tersembunyi.', 
        icon: '🔮' 
      },
      { 
        id: 'level-9', 
        levelNumber: 9, 
        region: 'Istana Logika', 
        regionId: 'palace', 
        title: 'Pasar Polaria', 
        description: 'Menyelesaikan soal cerita buah dan hasil panen.', 
        icon: '🍎' 
      },
      { 
        id: 'level-10', 
        levelNumber: 10, 
        region: 'Istana Logika', 
        regionId: 'palace', 
        title: 'Menara Tabungan Kelereng', 
        description: 'Soal cerita pengurangan dan pembagian koleksi mainan.', 
        icon: '🏰' 
      },
      { 
        id: 'level-11', 
        levelNumber: 11, 
        region: 'Istana Logika', 
        regionId: 'palace', 
        title: 'Labirin Waktu & Jarak', 
        description: 'Tantangan logika bertahap dengan aktivitas harian.', 
        icon: '⏳' 
      },
      { 
        id: 'level-12', 
        levelNumber: 12, 
        region: 'Istana Logika', 
        regionId: 'palace', 
        title: 'Ujian Agung Mahkota', 
        description: 'Master level campuran seluruh konsep Polaria.', 
        icon: '👑' 
      },
    ]
  },
  {
    chapterId: 'chapter-2',
    chapterTitle: 'Bab 2: Pengukuran Luas & Volume',
    chapterSubtitle: 'Kuasai perhitungan petak satuan, estimasi daun, dan kubus ruang!',
    levels: [
      { 
        id: 'level-13', 
        levelNumber: 1, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Petualangan Menghitung Luas', 
        description: 'Menghitung luas bangun datar menggunakan petak satuan.', 
        icon: '📐' 
      },
      { 
        id: 'level-14', 
        levelNumber: 2, 
        region: 'Hutan Bentuk', 
        regionId: 'forest', 
        title: 'Estimasi Daun Misterius', 
        description: 'Memperkirakan luas permukaan bidang tidak beraturan.', 
        icon: '🍃' 
      },
      { 
        id: 'level-15', 
        levelNumber: 3, 
        region: 'Istana Logika', 
        regionId: 'palace', 
        title: 'Istana Kubus Satuan', 
        description: 'Menghitung volume ruang menggunakan kubus satuan balok.', 
        icon: '🧊' 
      },
      { 
        id: 'level-16', 
        levelNumber: 4, 
        region: 'Lembah Angka', 
        regionId: 'valley', 
        title: 'Sumur Volume Cairan', 
        description: 'Mengukur volume menggunakan satuan tidak baku (gelas, botol, gayung).', 
        icon: '🥤' 
      },
    ]
  }
];

// Helper datar untuk pencarian cepat di komponen game / halaman play
export const LEVELS_META: LevelMeta[] = GAME_CHAPTERS.flatMap(chap => chap.levels);