// src/data/questions/bab4-luas-volume.ts
import { Question } from '@/types/game';

export const BAB4_QUESTIONS: Question[] = [
  // ==========================================
  // LEVEL 13: Menghitung Luas Petak Satuan (Dasar)
  // ==========================================
  {
    id: 'level-13-1',
    levelId: 'level-13',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Petak Kotak Peta',
    prompt: 'Berapakah luas bangun datar persegi panjang di atas jika dihitung menggunakan petak satuan berukuran 1x1 cm?',
    imageSteps: [
      { stepIndex: 1, count: 12, config: { shape: 'square', color: '#38bdf8' } }
    ],
    options: ['10 Petak', '12 Petak', '14 Petak', '16 Petak'],
    correctAnswer: '12 Petak',
    hint: 'Hitung jumlah kotak baris ke samping dikali jumlah baris ke bawah!',
    explanationSteps: [
      'Panjang bangun memiliki 4 kotak satuan.',
      'Lebar bangun memiliki 3 kotak satuan.',
      'Luas = 4 x 3 = 12 petak satuan.'
    ],
    points: 10
  },
  {
    id: 'level-13-2',
    levelId: 'level-13',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Luas Bentuk Huruf L',
    prompt: 'Sebuah bidang berbentuk huruf L tersusun dari petak-petak satuan. Jika bagian bawah ada 5 petak dan bagian atas menjorok ke samping 2 petak, berapa total luasnya?',
    options: ['5 Petak', '6 Petak', '7 Petak', '8 Petak'],
    correctAnswer: '7 Petak',
    hint: 'Jumlahkan petak bagian bawah dan petak tambahan di atasnya.',
    explanationSteps: [
      'Bagian dasar bawah terdiri dari 5 petak satuan.',
      'Bagian atas tambahan terdiri dari 2 petak satuan.',
      'Total luas = 5 + 2 = 7 petak satuan.'
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
    options: ['20 Ubin', '22 Ubin', '24 Ubin', '28 Ubin'],
    correctAnswer: '24 Ubin',
    hint: 'Gunakan rumus luas persegi panjang: Panjang dikali Lebar.',
    explanationSteps: [
      'Panjang lantai = 6 ubin.',
      'Lebar lantai = 4 ubin.',
      '6 dikali 4 sama dengan 24 ubin.'
    ],
    points: 15
  },

  // ==========================================
  // LEVEL 14: Estimasi Luas Permukaan Tidak Beraturan
  // ==========================================
  {
    id: 'level-14-1',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Estimasi Sehelai Daun',
    prompt: 'Budi menempelkan daun di atas kertas berpetak. Ada 8 petak yang tertutup penuh dan 6 petak tertutup setengah (dianggap 3 petak penuh). Berapa estimasi luas daun?',
    options: ['10 Petak', '11 Petak', '12 Petak', '14 Petak'],
    correctAnswer: '11 Petak',
    hint: 'Jumlahkan petak penuh dengan hasil perkiraan petak setengah.',
    explanationSteps: [
      'Petak utuh yang tertutup ada 8 buah.',
      '6 petak setengah jika digabung bernilai 3 petak utuh.',
      '8 + 3 = 11 petak satuan.'
    ],
    points: 15
  },
  {
    id: 'level-14-2',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Telapak Tangan Ajaib',
    prompt: 'Siti menjiplak telapak tangannya di kertas berpetak. Hasilnya ada 15 petak utuh dan 10 petak setengah. Jika 2 petak setengah dihitung 1 petak utuh, berapa luasnya?',
    options: ['18 Petak', '20 Petak', '22 Petak', '25 Petak'],
    correctAnswer: '20 Petak',
    hint: '10 petak setengah setara dengan berapa petak penuh?',
    explanationSteps: [
      'Petak utuh = 15 petak.',
      '10 petak setengah dibagi 2 = 5 petak utuh.',
      '15 + 5 = 20 petak satuan.'
    ],
    points: 15
  },
  {
    id: 'level-14-3',
    levelId: 'level-14',
    mode: 'AREA_MEASUREMENT',
    questionType: 'FILL_BLANK',
    title: 'Genangan Air Daun Talas',
    prompt: 'Tetesan air di daun talas menutupi 12 petak penuh dan 4 petak kecil (setengah). Berapa perkiraan total luas genangan tersebut?',
    options: ['12 Petak', '13 Petak', '14 Petak', '16 Petak'],
    correctAnswer: '14 Petak',
    hint: '4 petak setengah sama dengan 2 petak penuh.',
    explanationSteps: [
      'Petak utuh = 12.',
      '4 petak setengah = 2 petak.',
      '12 + 2 = 14 petak satuan.'
    ],
    points: 15
  },

  // ==========================================
  // LEVEL 15: Menghitung Volume Kubus Satuan
  // ==========================================
  {
    id: 'level-15-1',
    levelId: 'level-15',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kotak Mainan Balok',
    prompt: 'Sebuah kardus mainan tersusun dari kubus satuan. Panjangnya 3 kubus, lebarnya 2 kubus, dan tingginya 2 kubus. Berapakah volumenya?',
    options: ['10 Kubus', '12 Kubus', '14 Kubus', '16 Kubus'],
    correctAnswer: '12 Kubus',
    hint: 'Gunakan rumus Volume Balok = Panjang x Lebar x Tinggi.',
    explanationSteps: [
      'Diketahui P = 3, L = 2, T = 2.',
      'Kalikan semua sisi: 3 x 2 x 2.',
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
    prompt: 'Sebuah rubik besar tersusun rapi dengan ukuran rusuk 3 kubus satuan ke samping, 3 ke depan, dan 3 ke atas. Berapa volume total kub tersebut?',
    options: ['9 Kubus', '18 Kubus', '27 Kubus', '36 Kubus'],
    correctAnswer: '27 Kubus',
    hint: 'Ini adalah kubus satuan: Sisi x Sisi x Sisi (3 x 3 x 3).',
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
    prompt: 'Udin menyusun balok mainan dengan alas berisi 4 kubus dan tinggi tumpukan mencapai 3 tingkat ke atas. Berapa volume seluruh susunan?',
    options: ['10 Kubus', '12 Kubus', '14 Kubus', '15 Kubus'],
    correctAnswer: '12 Kubus',
    hint: 'Luas alas dikalikan dengan tinggi tumpukan.',
    explanationSteps: [
      'Luas alas = 4 kubus satuan.',
      'Tinggi tumpukan = 3 tingkat.',
      '4 x 3 = 12 kubus satuan.'
    ],
    points: 15
  },

  // ==========================================
  // LEVEL 16: Volume dengan Satuan Tidak Baku (Air & Wadah)
  // ==========================================
  {
    id: 'level-16-1',
    levelId: 'level-16',
    mode: 'VOLUME_MEASUREMENT',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Mengisi Teko Air',
    prompt: 'Ibu menuangkan 4 gelas air penuh ke dalam teko hingga penuh. Jika 1 gelas setara dengan 2 cangkir kecil, berapa cangkir air untuk mengisi teko?',
    options: ['6 Cangkir', '8 Cangkir', '10 Cangkir', '12 Cangkir'],
    correctAnswer: '8 Cangkir',
    hint: 'Kalikan jumlah gelas dengan nilai tukar cangkirnya.',
    explanationSteps: [
      'Dibutuhkan 4 gelas air.',
      '1 gelas = 2 cangkir.',
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
    prompt: 'Sebuah ember kecil dapat diisi penuh oleh 5 botol air berukuran besar. Jika 1 botol besar setara dengan 3 gayung air, berapa gayung air isi ember tersebut?',
    options: ['10 Gayung', '12 Gayung', '15 Gayung', '18 Gayung'],
    correctAnswer: '15 Gayung',
    hint: 'Kalikan jumlah botol besar dengan isi gayungnya.',
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
    prompt: '1 botol sirup besar dapat menghasilkan 20 gelas es sirup manis. Jika ada 2 botol sirup yang dicampur, berapa total gelas es sirup yang dihasilkan?',
    options: ['30 Gelas', '35 Gelas', '40 Gelas', '45 Gelas'],
    correctAnswer: '40 Gelas',
    hint: 'Kalikan jumlah botol sirup dengan kapasitas gelas per botol.',
    explanationSteps: [
      '1 botol menghasilkan 20 gelas.',
      'Tersedia 2 botol sirup.',
      '2 x 20 = 40 gelas es sirup.'
    ],
    points: 20
  }
];