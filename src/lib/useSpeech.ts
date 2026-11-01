// src/lib/useSpeech.ts
'use client';

export function speakText(text: string, isCorrect: boolean, enabled: boolean = true) {
  if (!enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  // Bikin variasi kalimat pembuka yang natural dan tidak kaku
  let intro = '';
  if (isCorrect) {
    const praises = [
      "Keren banget! Jawabannya pas.",
      "Wah, mantap! Kamu bener.",
      "Hebat! Lanjutkan terus ya!"
    ];
    intro = praises[Math.floor(Math.random() * praises.length)];
  } else {
    const encouragements = [
      "Hampir bener, yuk kita lihat caranya.",
      "Jangan menyerah, coba perhatikan langkah ini ya.",
      "Belum tepat, tapi kita bisa pelajari sama-sama kok."
    ];
    intro = encouragements[Math.floor(Math.random() * encouragements.length)];
  }

  const fullText = `${intro} ${text}`;

  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = 'id-ID';
  utterance.pitch = 1.15; // Nada ceria dan bersahabat
  utterance.rate = 1.0;   // Kecepatan normal, tidak terburu-buru

  // Pilih suara bahasa Indonesia yang paling natural jika ada
  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(v => v.lang === 'id-ID' || v.lang.includes('id'));
  if (idVoice) {
    utterance.voice = idVoice;
  }

  window.speechSynthesis.speak(utterance);
}