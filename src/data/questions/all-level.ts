// src/data/questions/all-levels.ts
import { Question } from '@/types/game';

export const ALL_LEVEL_QUESTIONS: Question[] = [
  // --- WILAYAH 1: HUTAN BENTUK (Level 1 - 4) ---
  {
    id: 'l1-q1',
    levelId: 'level-1',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Berapa Bintang Selanjutnya?',
    prompt: 'Perhatikan jumlah bintang yang bertambah di setiap tahap. Berapa jumlah bintang pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 2, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 2, count: 4, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 3, count: 6, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 4, count: 0, config: { shape: 'star', color: '#94a3b8' } },
    ],
    options: ['6', '7', '8', '10'],
    correctAnswer: '8',
    hint: 'Amati penambahan jumlah bintang dari Tahap 1 ke Tahap 2, lalu ke Tahap 3 (+2 setiap tahap).',
    explanationSteps: [
      'Tahap 1 memiliki 2 bintang.',
      'Tahap 2 memiliki 4 bintang (bertambah 2).',
      'Tahap 3 memiliki 6 bintang (bertambah 2).',
      'Maka, Tahap 4 adalah 6 + 2 = 8 bintang.'
    ],
    points: 10,
  },
  {
    id: 'l2-q1',
    levelId: 'level-2',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kristal yang Menyusut',
    prompt: 'Kristal ajaib mencair seiring waktu. Berapa jumlah kristal pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 10, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 2, count: 8, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 3, count: 6, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 4, count: 0, config: { shape: 'gem', color: '#94a3b8' } },
    ],
    options: ['2', '4', '5', '6'],
    correctAnswer: '4',
    hint: 'Perhatikan pengurangan jumlah kristal di setiap tahap berturut-turut (-2 setiap tahap).',
    explanationSteps: [
      'Tahap 1 ada 10 kristal.',
      'Tahap 2 ada 8 kristal (berkurang 2).',
      'Tahap 3 ada 6 kristal (berkurang 2).',
      'Maka, Tahap 4 adalah 6 - 2 = 4 kristal.'
    ],
    points: 10,
  },
  {
    id: 'l3-q1',
    levelId: 'level-3',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Formasi Bunga Ajaib',
    prompt: 'Bunga di taman mekar dengan pola tertentu. Berapa jumlah bunga pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 3, config: { shape: 'flower', color: '#f43f5e' } },
      { stepIndex: 2, count: 5, config: { shape: 'flower', color: '#f43f5e' } },
      { stepIndex: 3, count: 7, config: { shape: 'flower', color: '#f43f5e' } },
      { stepIndex: 4, count: 0, config: { shape: 'flower', color: '#94a3b8' } },
    ],
    options: ['8', '9', '10', '12'],
    correctAnswer: '9',
    hint: 'Hitung penambahan jumlah bunga dari satu tahap ke tahap berikutnya (+2).',
    explanationSteps: [
      'Tahap 1 ada 3 bunga.',
      'Tahap 2 ada 5 bunga (bertambah 2).',
      'Tahap 3 ada 7 bunga (bertambah 2).',
      'Maka, Tahap 4 adalah 7 + 2 = 9 bunga.'
    ],
    points: 10,
  },
  {
    id: 'l4-q1',
    levelId: 'level-4',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Rahasia Batuan Pola',
    prompt: 'Tumpukan batuan ajaib bertambah secara teratur. Berapa jumlah batu pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 4, config: { shape: 'square', color: '#64748b' } },
      { stepIndex: 2, count: 7, config: { shape: 'square', color: '#64748b' } },
      { stepIndex: 3, count: 10, config: { shape: 'square', color: '#64748b' } },
      { stepIndex: 4, count: 0, config: { shape: 'square', color: '#94a3b8' } },
    ],
    options: ['11', '12', '13', '15'],
    correctAnswer: '13',
    hint: 'Cari selisih antara Tahap 2 dan Tahap 1 (7 - 4 = ?).',
    explanationSteps: [
      'Tahap 1 = 4 batu.',
      'Tahap 2 = 7 batu (selisih +3).',
      'Tahap 3 = 10 batu (selisih +3).',
      'Maka, Tahap 4 adalah 10 + 3 = 13 batu.'
    ],
    points: 10,
  },

  // --- WILAYAH 2: LEMBAH ANGKA (Level 5 - 8) ---
  {
    id: 'l5-q1',
    levelId: 'level-5',
    mode: 'NUMBER_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Jembatan Penjumlahan',
    prompt: 'Tentukan angka selanjutnya dari pola bilangan berikut: 4, 7, 10, 13, ...',
    numberSequence: [4, 7, 10, 13, null],
    options: ['14', '15', '16', '17'],
    correctAnswer: '16',
    hint: 'Setiap bilangan bertambah dengan jumlah yang sama (+3).',
    explanationSteps: [
      '4 ke 7 bertambah 3.',
      '7 ke 10 bertambah 3.',
      '10 ke 13 bertambah 3.',
      'Maka angka berikutnya adalah 13 + 3 = 16.'
    ],
    points: 10,
  },
  {
    id: 'l6-q1',
    levelId: 'level-6',
    mode: 'NUMBER_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Tangga Pengurangan',
    prompt: 'Tentukan angka selanjutnya dari pola bilangan berikut: 25, 21, 17, 13, ...',
    numberSequence: [25, 21, 17, 13, null],
    options: ['9', '10', '11', '8'],
    correctAnswer: '9',
    hint: 'Setiap bilangan berkurang dengan jumlah yang tetap (-4).',
    explanationSteps: [
      '25 ke 21 berkurang 4.',
      '21 ke 17 berkurang 4.',
      '17 ke 13 berkurang 4.',
      'Maka angka berikutnya adalah 13 - 4 = 9.'
    ],
    points: 10,
  },
  {
    id: 'l7-q1',
    levelId: 'level-7',
    mode: 'NUMBER_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Gua Angka Tersembunyi',
    prompt: 'Cari bilangan yang hilang di tengah urutan: 5, 10, __, 20, 25',
    numberSequence: [5, 10, null, 20, 25],
    options: ['12', '14', '15', '18'],
    correctAnswer: '15',
    hint: 'Pola bilangan ini melompat bertambah 5 setiap langkah.',
    explanationSteps: [
      'Bilangan bertambah 5 setiap langkah.',
      'Setelah 10, jika ditambah 5 hasilnya adalah 15.',
      'Pembuktian: 15 ditambah 5 menjadi 20 (sesuai urutan).'
    ],
    points: 10,
  },
  {
    id: 'l8-q1',
    levelId: 'level-8',
    mode: 'NUMBER_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Teka-Teki Aturan Pola',
    prompt: 'Berapakah aturan penambahan untuk pola berikut: 3, 8, 13, 18, 23?',
    numberSequence: [3, 8, 13, 18, 23],
    options: ['Tambah 3', 'Tambah 4', 'Tambah 5', 'Tambah 6'],
    correctAnswer: 'Tambah 5',
    hint: 'Kurangi angka kedua dengan angka pertama (8 - 3).',
    explanationSteps: [
      '8 dikurangi 3 hasilnya 5.',
      '13 dikurangi 8 hasilnya 5.',
      'Maka aturan polanya adalah selalu ditambah 5.'
    ],
    points: 10,
  },

  // --- WILAYAH 3: ISTANA LOGIKA (Level 9 - 12) ---
  {
    id: 'l9-q1',
    levelId: 'level-9',
    mode: 'WORD_PROBLEM',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Pasar Polaria: Panen Apel',
    prompt: 'Pak Budi memetik 6 buah apel pada hari pertama. Setiap hari, jumlah apel yang dipetik bertambah 2 buah. Berapa apel yang dipetik pada hari keempat?',
    options: ['10', '11', '12', '14'],
    correctAnswer: '12',
    hint: 'Buat urutan jumlah apel dari hari pertama sampai hari keempat (+2 setiap hari).',
    explanationSteps: [
      'Hari ke-1: 6 apel',
      'Hari ke-2: 6 + 2 = 8 apel',
      'Hari ke-3: 8 + 2 = 10 apel',
      'Hari ke-4: 10 + 2 = 12 apel'
    ],
    points: 10,
  },
  {
    id: 'l10-q1',
    levelId: 'level-10',
    mode: 'WORD_PROBLEM',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Menara Kelereng Ajaib',
    prompt: 'Siti memiliki 20 kelereng di dalam kotak. Setiap minggu, ia memberikan 3 kelereng kepada adiknya. Berapa sisa kelereng Siti pada minggu keempat?',
    options: ['5', '8', '11', '14'],
    correctAnswer: '8',
    hint: 'Kurangi jumlah kelereng sebanyak 3 buah setiap minggu selama 4 minggu.',
    explanationSteps: [
      'Mula-mula: 20 kelereng',
      'Minggu 1: 20 - 3 = 17 kelereng',
      'Minggu 2: 17 - 3 = 14 kelereng',
      'Minggu 3: 14 - 3 = 11 kelereng',
      'Minggu 4: 11 - 3 = 8 kelereng'
    ],
    points: 10,
  },
  {
    id: 'l11-q1',
    levelId: 'level-11',
    mode: 'WORD_PROBLEM',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Labirin Waktu & Langkah',
    prompt: 'Lampu menara menyala setiap 4 menit sekali secara teratur (menit ke-4, ke-8, ke-12, dst). Pada menit ke berapakah lampu tersebut menyala untuk kelima kalinya?',
    options: ['16', '20', '24', '28'],
    correctAnswer: '20',
    hint: 'Lanjutkan urutan kelipatan 4 sebanyak 5 tahap.',
    explanationSteps: [
      'Menyala ke-1: Menit ke-4',
      'Menyala ke-2: Menit ke-8',
      'Menyala ke-3: Menit ke-12',
      'Menyala ke-4: Menit ke-16',
      'Menyala ke-5: Menit ke-20'
    ],
    points: 10,
  },
  {
    id: 'l12-q1',
    levelId: 'level-12',
    mode: 'WORD_PROBLEM',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Ujian Agung Mahkota Polaria',
    prompt: 'Dalam sebuah barisan prajurit, baris pertama ada 5 orang, baris kedua 9 orang, baris ketiga 13 orang. Berapa jumlah prajurit pada baris kelima?',
    options: ['17', '21', '25', '27'],
    correctAnswer: '21',
    hint: 'Cari selisih penambahan antar baris, lalu teruskan sampai baris kelima.',
    explanationSteps: [
      'Baris 1 = 5',
      'Baris 2 = 9 (bertambah 4)',
      'Baris 3 = 13 (bertambah 4)',
      'Baris 4 = 13 + 4 = 17',
      'Baris 5 = 17 + 4 = 21 orang'
    ],
    points: 10,
  },
  {
    id: 'level-1-1',
    levelId: 'level-1',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Pola Bintang Berkelanjutan',
    prompt: 'Perhatikan pola gambar bintang dan lingkaran di atas. Apa bentuk selanjutnya dari pola tersebut?',
    imageSteps: [
      { stepIndex: 1, count: 2, config: { shape: 'star', color: '#f59e0b' } },
      { stepIndex: 2, count: 4, config: { shape: 'circle', color: '#38bdf8' } }
    ],
    options: ['Bintang', 'Lingkaran', 'Segitiga', 'Kotak'],
    correctAnswer: 'Bintang',
    hint: 'Perhatikan pergantian bentuk secara bergantian antara bintang dan lingkaran.',
    explanationSteps: [
      'Pola pertama adalah bentuk bintang.',
      'Pola kedua adalah bentuk lingkaran.',
      'Maka setelah lingkaran, pola berulang kembali ke bentuk bintang.'
    ],
    points: 10
  },
  {
    id: 'level-2-1',
    levelId: 'level-2',
    mode: 'NUMBER_PATTERN',
    questionType: 'FILL_BLANK',
    title: 'Loncat Angka Misterius',
    prompt: 'Tentukan angka yang tepat untuk mengisi tanda tanya (?) pada barisan bilangan di bawah ini:',
    numberSequence: [2, 4, 6, 8, null],
    options: ['9', '10', '12', '14'],
    correctAnswer: '10',
    hint: 'Perhatikan selisih pertambahan dari setiap angka yang berurutan!',
    explanationSteps: [
      'Setiap angka bertambah 2 dari angka sebelumnya (2 ke 4, 4 ke 6).',
      'Maka setelah angka 8, kita tambahkan 2.',
      '8 ditambah 2 hasilnya adalah 10.'
    ],
    points: 10
  },
  {
    id: 'level-3-1',
    levelId: 'level-3',
    mode: 'WORD_PROBLEM',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kue Paman Ali',
    prompt: 'Paman Ali memiliki 3 kotak kue. Setiap kotak berisi 5 buah kue lapis. Berapa total seluruh kue lapis Paman Ali?',
    options: ['12 Kue', '15 Kue', '18 Kue', '20 Kue'],
    correctAnswer: '15 Kue',
    hint: 'Gunakan operasi perkalian antara jumlah kotak dengan isi kue di dalamnya.',
    explanationSteps: [
      'Terdapat 3 kotak kue.',
      'Masing-masing kotak berisi 5 kue.',
      '3 dikali 5 sama dengan 15 kue.'
    ],
    points: 10
  },

  // ==========================================
  // LEVEL 13: Menghitung Luas Petak Satuan (Bab 4)
  // ==========================================
 {
    id: 'level-13-1',
    levelId: 'level-13',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Petak Kotak Peta',
    prompt: 'Berapakah luas bangun datar persegi panjang pada peta jika memiliki panjang 4 petak dan lebar 3 petak satuan?',
    imageSteps: [
      { stepIndex: 1, count: 12, config: { shape: 'square', color: '#38bdf8' } }
    ],
    options: ['10 Petak', '12 Petak', '14 Petak', '16 Petak'],
    correctAnswer: '12 Petak',
    hint: 'Gunakan rumus luas persegi panjang: Panjang dikali Lebar (4 x 3).',
    explanationSteps: [
      'Panjang bangun memiliki 4 petak satuan.',
      'Lebar bangun memiliki 3 petak satuan.',
      'Luas = 4 x 3 = 12 petak satuan.'
    ],
    points: 10
  },
  {
    id: 'level-13-2',
    levelId: 'level-13',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Luas Karpet Bermain',
    prompt: 'Sebuah karpet lantai berbentuk persegi panjang memiliki panjang 5 petak satuan dan lebar 3 petak satuan. Berapakah luas seluruh permukaan karpet tersebut?',
    imageSteps: [
      { stepIndex: 1, count: 15, config: { shape: 'square', color: '#38bdf8' } }
    ],
    options: ['12 Petak', '15 Petak', '16 Petak', '18 Petak'],
    correctAnswer: '15 Petak',
    hint: 'Gunakan rumus luas persegi panjang: Panjang dikali Lebar (5 x 3).',
    explanationSteps: [
      'Panjang karpet = 5 petak.',
      'Lebar karpet = 3 petak.',
      'Luas = 5 x 3 = 15 petak satuan.'
    ],
    points: 10
  },
  {
    id: 'level-13-3',
    levelId: 'level-13',
    mode: 'AREA_MEASUREMENT',
    questionType: 'FILL_BLANK',
    title: 'Ubin Lantai Kelas',
    prompt: 'Lantai kelas Siti berbentuk persegi panjang dengan panjang 6 ubin dan lebar 4 ubin. Berapakah total ubin keramik yang menutupi lantai tersebut?',
    options: ['20 Petak', '22 Petak', '24 Petak', '28 Petak'],
    correctAnswer: '24 Petak',
    hint: 'Gunakan rumus luas persegi panjang: Panjang dikali Lebar (6 x 4).',
    explanationSteps: [
      'Panjang lantai = 6 ubin.',
      'Lebar lantai = 4 ubin.',
      '6 dikali 4 sama dengan 24 petak ubin.'
    ],
    points: 15
  },

  // --- LEVEL 14: Estimasi Luas Permukaan Tidak Beraturan ---
  {
    id: 'level-14-1',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Estimasi Sehelai Daun',
    prompt: 'Budi menempelkan daun di atas kertas berpetak. Ada 8 petak tertutup penuh dan 6 petak tertutup setengah (2 petak setengah dihitung 1 petak utuh). Berapa estimasi luas daun?',
    options: ['10 Petak', '11 Petak', '12 Petak', '14 Petak'],
    correctAnswer: '11 Petak',
    hint: '6 petak setengah setara dengan 3 petak utuh (6 dibagi 2). Lalu tambahkan dengan 8 petak utuh.',
    explanationSteps: [
      'Petak utuh yang tertutup = 8 petak.',
      '6 petak setengah jika digabung = 3 petak utuh.',
      'Total estimasi luas = 8 + 3 = 11 petak.'
    ],
    points: 15
  },
  {
    id: 'level-14-2',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Telapak Tangan Ajaib',
    prompt: 'Siti menjiplak telapak tangannya di kertas berpetak. Hasilnya ada 15 petak utuh dan 10 petak setengah. Berapa perkiraan luasjiplakan tangan Siti?',
    options: ['18 Petak', '20 Petak', '22 Petak', '25 Petak'],
    correctAnswer: '20 Petak',
    hint: '10 petak setengah sama dengan 5 petak penuh.',
    explanationSteps: [
      'Petak utuh = 15 petak.',
      '10 petak setengah = 5 petak utuh.',
      'Total luas = 15 + 5 = 20 petak.'
    ],
    points: 15
  },
  {
    id: 'level-14-3',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'FILL_BLANK',
    title: 'Genangan Air Daun Talas',
    prompt: 'Tetesan air di daun talas menutupi 12 petak penuh dan 4 petak setengah. Berapa perkiraan total luas genangan tersebut?',
    options: ['12 Petak', '13 Petak', '14 Petak', '16 Petak'],
    correctAnswer: '14 Petak',
    hint: '4 petak setengah sama dengan 2 petak penuh.',
    explanationSteps: [
      'Petak utuh = 12 petak.',
      '4 petak setengah = 2 petak utuh.',
      'Total luas = 12 + 2 = 14 petak.'
    ],
    points: 15
  },

  // --- LEVEL 15: Menghitung Volume Kubus Satuan ---
  {
    id: 'level-15-1',
    levelId: 'level-15',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kotak Mainan Balok',
    prompt: 'Sebuah kardus mainan tersusun dari kubus satuan. Panjangnya 3 kubus, lebarnya 2 kubus, dan tingginya 2 kubus. Berapakah volume kardus tersebut?',
    options: ['10 Kubus', '12 Kubus', '14 Kubus', '16 Kubus'],
    correctAnswer: '12 Kubus',
    hint: 'Gunakan rumus Volume Balok = Panjang x Lebar x Tinggi (3 x 2 x 2).',
    explanationSteps: [
      'Diketahui Panjang = 3, Lebar = 2, Tinggi = 2.',
      'Kalikan semua ukuran: 3 x 2 x 2.',
      'Hasilnya adalah 12 kubus satuan.'
    ],
    points: 15
  },
  {
    id: 'level-15-2',
    levelId: 'level-15',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kubus Ajaib Rubik',
    prompt: 'Sebuah mainan rubik tersusun dari kubus satuan dengan panjang 3 kubus, lebar 3 kubus, dan tinggi 3 kubus. Berapa volume total rubik?',
    options: ['9 Kubus', '18 Kubus', '27 Kubus', '36 Kubus'],
    correctAnswer: '27 Kubus',
    hint: 'Kalikan ketiga sisinya: 3 x 3 x 3.',
    explanationSteps: [
      'Panjang = 3, Lebar = 3, Tinggi = 3.',
      '3 dikali 3 dikali 3 sama dengan 27.',
      'Volume total adalah 27 kubus satuan.'
    ],
    points: 15
  },
  {
    id: 'level-15-3',
    levelId: 'level-15',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'FILL_BLANK',
    title: 'Tumpukan Bata Mainan',
    prompt: 'Udin menyusun balok mainan dengan bagian alas berisi 4 kubus satuan dan tinggi tumpukan 3 tingkat. Berapa volume seluruh susunan?',
    options: ['10 Kubus', '12 Kubus', '14 Kubus', '15 Kubus'],
    correctAnswer: '12 Kubus',
    hint: 'Kalikan luas alas dengan tinggi tumpukan (4 x 3).',
    explanationSteps: [
      'Luas alas = 4 kubus.',
      'Tinggi tumpukan = 3 tingkat.',
      'Volume = 4 x 3 = 12 kubus satuan.'
    ],
    points: 15
  },

  // --- LEVEL 16: Volume dengan Satuan Tidak Baku ---
  {
    id: 'level-16-1',
    levelId: 'level-16',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Mengisi Teko Air',
    prompt: 'Ibu menuangkan 4 gelas air untuk mengisi 1 teko hingga penuh. Jika 1 gelas setara dengan 2 cangkir kecil, berapa cangkir air yang dibutuhkan untuk mengisi penuh teko?',
    options: ['6 Cangkir', '8 Cangkir', '10 Cangkir', '12 Cangkir'],
    correctAnswer: '8 Cangkir',
    hint: 'Kalikan jumlah gelas dengan isi cangkir per gelas (4 x 2).',
    explanationSteps: [
      'Dibutuhkan 4 gelas air.',
      '1 gelas = 2 cangkir kecil.',
      '4 x 2 = 8 cangkir kecil.'
    ],
    points: 15
  },
  {
    id: 'level-16-2',
    levelId: 'level-16',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Ember Mandi Botol',
    prompt: 'Sebuah ember kecil diisi penuh oleh 5 botol air besar. Jika 1 botol air besar setara dengan 3 gayung air, berapa gayung air yang dibutuhkan untuk memenuhi ember?',
    options: ['10 Gayung', '12 Gayung', '15 Gayung', '18 Gayung'],
    correctAnswer: '15 Gayung',
    hint: 'Kalikan jumlah botol besar dengan isi gayungnya (5 x 3).',
    explanationSteps: [
      'Jumlah botol = 5 buah.',
      '1 botol = 3 gayung.',
      '5 x 3 = 15 gayung air.'
    ],
    points: 20
  },
  {
    id: 'level-16-3',
    levelId: 'level-16',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'FILL_BLANK',
    title: 'Sirup Botol Keluarga',
    prompt: '1 botol sirup dapat menghasilkan 20 gelas es sirup manis. Jika Ibu membuat 2 botol sirup, berapa total gelas es sirup yang dihasilkan?',
    options: ['30 Gelas', '35 Gelas', '40 Gelas', '45 Gelas'],
    correctAnswer: '40 Gelas',
    hint: 'Kalikan jumlah botol sirup dengan kapasitas gelas per botol (2 x 20).',
    explanationSteps: [
      '1 botol = 20 gelas.',
      'Tersedia 2 botol sirup.',
      '2 x 20 = 40 gelas es sirup.'
    ],
    points: 20
  }

];