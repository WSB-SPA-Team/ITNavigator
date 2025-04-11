import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function LinkedInProfile() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Jak skonfigurować LinkedIn?</h1>
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Przewodnik po profilu LinkedIn dla programistów</CardTitle>
        </CardHeader>
        <CardContent>
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Zdjęcie profilowe i baner</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Zdjęcie profilowe:</strong> Profesjonalne, ale niezbyt formalne. Uśmiech, dobra jakość, neutralne tło.</li>
              <li><strong>Baner:</strong> Dodaj coś związanego z programowaniem – kod, laptop, lub swoje logo/pseudonim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🏷️ 2. Nagłówek</h2>
            <p className="text-gray-700 mb-2">Zamiast domyślnego “Software Developer w XYZ”, napisz coś takiego:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Backend Developer | Python & Django | Tworzę skalowalne API</li>
              <li>Frontend Developer | React, TypeScript | Perfekcyjny UI/UX</li>
            </ul>
            <p className="text-gray-700 mt-2">Dodaj swoje najmocniejsze strony + główne technologie.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">📝 3. Sekcja „O mnie”</h2>
            <p className="text-gray-700 mb-2">Kilka zdań o Tobie. Idealna struktura: Kim jesteś, czym się zajmujesz, co Cię ekscytuje, jakie masz cele.</p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              Jestem programistą z 3-letnim doświadczeniem w Pythonie i Django. Lubię tworzyć backendowe rozwiązania, które są szybkie, skalowalne i dobrze przemyślane. Skupiam się na czystym kodzie, testowaniu i dobrej komunikacji. Po godzinach uczę się Go i udzielam się w projektach open-source.
            </blockquote>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">💼 4. Doświadczenie</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Tworzenie i utrzymanie REST API przy użyciu Django</li>
              <li>Integracja zewnętrznych systemów (np. Stripe, AWS S3)</li>
              <li>Udział w projektowaniu architektury mikroserwisowej</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🧪 5. Umiejętności</h2>
            <p className="text-gray-700 mb-2">Dodaj konkretne technologie:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Python</li>
              <li>Django</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Docker</li>
              <li>Git</li>
              <li>PostgreSQL</li>
            </ul>
            <p className="text-gray-700 mt-2">Wskazówka: Uporządkuj je według ważności.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🎓 6. Edukacja</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Szkoła/uczelnie + kursy (np. Udemy, bootcampy)</li>
              <li>Jeśli jesteś samoukiem – też warto wspomnieć</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">📂 7. Projekty / Portfolio</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Dodaj linki do GitHub, portfolio, bloga – przypnij je w sekcji „Polecane”</li>
              <li>Opisz swoje projekty w sekcji Doświadczenie lub stwórz osobne wpisy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🌟 8. Polecenia / Potwierdzenia umiejętności</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Poproś współpracowników/znajomych o rekomendacje (możecie się wymienić)</li>
              <li>Zbieraj potwierdzenia umiejętności</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🚀 Pro tipy</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Ustaw profil jako „Open to Work” (widoczne dla rekruterów)</li>
              <li>Używaj słów kluczowych, których szukają rekruterzy (np. „React Developer”, „REST API”, „CI/CD”)</li>
              <li>Publikuj od czasu do czasu – nowe projekty, wrażenia z nauki, a nawet dev memy 😄</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default LinkedInProfile;
