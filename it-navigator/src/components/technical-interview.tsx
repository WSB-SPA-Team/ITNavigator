import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function TechnicalInterviewTips() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Porady do Rozmowy Technicznej</h1>
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>1. Opanuj podstawy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Solidna znajomość struktur danych, algorytmów i podstaw projektowania systemów to podstawa. Powtórz tablice, listy, drzewa, algorytmy sortowania oraz notację Big O.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>2. Ćwicz rozwiązywanie problemów</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Korzystaj z platform takich jak LeetCode, HackerRank czy CodeSignal, aby poprawić swoje umiejętności kodowania pod presją czasu.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>3. Komunikuj tok myślenia</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Myśl na głos podczas rozwiązywania problemów. Rekruterzy doceniają możliwość usłyszenia, jak podchodzisz do zagadnienia i jakie decyzje podejmujesz.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>4. Bądź szczery w kwestii swoich umiejętności</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Jeśli utkniesz, przyznaj to otwarcie. Ważniejszy jest sposób, w jaki próbujesz rozwiązać problem, niż natychmiastowa poprawna odpowiedź.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>5. Przygotuj się na pytania z projektowania systemów</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Na wyższe stanowiska przygotuj się do projektowania skalowalnych systemów. Zapoznaj się z pojęciami takimi jak load balancing, caching, sharding baz danych i mikroserwisy.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>6. Frontend Developer - na co zwrócić uwagę</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Opanuj JavaScript, HTML, CSS oraz popularne frameworki takie jak React, Angular lub Vue. Przygotuj się do rozmowy o optymalizacji wydajności, dostępności oraz zarządzaniu stanem aplikacji.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>7. Backend Developer - na co zwrócić uwagę</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Znajomość języków backendowych (np. Node.js, Python, Java), baz danych SQL/NoSQL oraz zasad REST API to podstawa. Przygotuj się do rozmów o bezpieczeństwie aplikacji i skalowalności backendu.</p>
        </CardContent>

        <CardHeader>
          <CardTitle>8. Full Stack Developer - na co zwrócić uwagę</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Fullstack wymaga biegłości zarówno w frontendzie, jak i backendzie. Skup się na integracji systemów, architekturze aplikacji oraz znajomości DevOps (np. CI/CD, konteneryzacja).</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default TechnicalInterviewTips;
