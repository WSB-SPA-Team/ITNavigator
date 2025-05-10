import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function UsefulCertificates() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Jakie certyfikaty mogą być przydatne?</h1>

      <Card className="w-3/4">
        {/* Krok 1 */}
        <CardHeader>
          <CardTitle>Krok 1: Rozważ swoją ścieżkę kariery w IT</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Branża IT oferuje wiele możliwości zawodowych, które różnią się wymaganymi umiejętnościami i specjalizacjami. Wybór odpowiedniej ścieżki powinien zależeć od Twoich zainteresowań, predyspozycji oraz aktualnych trendów na rynku pracy. Oto najważniejsze kierunki w IT:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Frontend Developer:</strong> HTML, CSS, JavaScript, React, Angular, Vue.js.</li>
            <li><strong>Backend Developer:</strong> Node.js, Python (Django, Flask), Java (Spring), PHP, Ruby on Rails.</li>
            <li><strong>Full-Stack Developer:</strong> Frontend + Backend = kompletne aplikacje.</li>
            <li><strong>DevOps Engineer:</strong> Docker, Kubernetes, CI/CD, AWS, Azure.</li>
            <li><strong>Cloud Engineer:</strong> Architektura chmurowa – AWS, Google Cloud, Azure.</li>
            <li><strong>Data Scientist / Analyst:</strong> Python, SQL, R, Pandas, TensorFlow.</li>
            <li><strong>Cybersecurity Specialist:</strong> Kali Linux, firewalle, szyfrowanie, pentesting.</li>
            <li><strong>AI / ML Engineer:</strong> TensorFlow, PyTorch, scikit-learn.</li>
            <li><strong>Game Developer:</strong> Unity, Unreal Engine.</li>
            <li><strong>Software Tester (QA Engineer):</strong> Selenium, Jest, Cypress.</li>
          </ul>
        </CardContent>

        {/* Krok 2 */}
        <CardHeader>
          <CardTitle>Krok 2: Uniwersalne platformy i kursy IT</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Niezależnie od wybranej specjalizacji, kluczowe jest zdobywanie nowych umiejętności. Oto najlepsze platformy i kursy dla osób rozwijających się w IT:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Udemy:</strong> Kursy z programowania, DevOps, analizy danych, cyberbezpieczeństwa.</li>
            <li><strong>Coursera:</strong> Kursy Google, IBM, Meta – np. Data Science, Cloud Computing.</li>
            <li><strong>edX:</strong> Kursy akademickie – AI, analiza danych, programowanie.</li>
            <li><strong>Pluralsight:</strong> Kursy dla programistów i DevOpsów.</li>
            <li><strong>Codecademy:</strong> Interaktywna nauka JS, Pythona, SQL, Java.</li>
            <li><strong>The Odin Project:</strong> Darmowy kurs Full-Stack (HTML, CSS, JS, React, Node).</li>
            <li><strong>CS50 (Harvard):</strong> Darmowy kurs podstaw informatyki.</li>
            <li><strong>freeCodeCamp:</strong> Darmowe kursy z frontend, backend, data analysis.</li>
          </ul>
          <p className="font-semibold mt-4">Najbardziej przydatne certyfikaty i kursy:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Podstawy programowania:</strong> CS50, Python for Beginners (Udemy).</li>
            <li><strong>Web Development:</strong> The Odin Project, Full-Stack Web Development (Coursera).</li>
            <li><strong>DevOps i chmura:</strong> AWS Certified Cloud Practitioner, Docker & Kubernetes.</li>
            <li><strong>Analiza danych i ML:</strong> Data Science with Python (Coursera), Machine Learning by Andrew Ng.</li>
            <li><strong>Cybersecurity:</strong> Introduction to Cyber Security, Ethical Hacking (Udemy).</li>
            <li><strong>Testowanie oprogramowania:</strong> Software Testing and Automation (Pluralsight).</li>
          </ol>
          <p>
            Te kursy pomogą Ci zbudować portfolio, zdobyć kompetencje i zwiększyć swoją atrakcyjność na rynku pracy. Pamiętaj, że certyfikat to tylko narzędzie – najważniejsze są umiejętności i praktyka.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default UsefulCertificates;
