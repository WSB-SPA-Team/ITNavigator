import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Separator } from "./ui/separator";
import { InfoIcon, CheckCircle } from "lucide-react";

function CreatingCV() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">
        Jak stworzyć profesjonalne CV?
      </h1>

      <Card className="w-3/4 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <InfoIcon className="mr-2 h-6 w-6 text-blue-500" />
            Dlaczego dobre CV jest ważne?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="mb-4">
            CV to Twoja pierwsza szansa na zrobienie dobrego wrażenia na
            rekruterze. Dobrze przygotowane CV znacząco zwiększa Twoje szanse na
            zaproszenie na rozmowę kwalifikacyjną.
          </p>
          <Alert>
            <AlertTitle>Uwaga!</AlertTitle>
            <AlertDescription>
              Rekruter poświęca średnio tylko 7 sekund na przejrzenie CV!
              Dlatego ważne jest, aby było ono przejrzyste i zawierało
              najważniejsze informacje.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Kluczowe elementy CV</CardTitle>
        </CardHeader>

        <CardContent className="pt-4">
          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Dane osobowe i kontaktowe
            </h3>
            <Separator className="my-2" />
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Imię i nazwisko (wyraźnie wyeksponowane, większą czcionką)
              </li>
              <li>
                Adres e-mail (profesjonalny, najlepiej opierający się na Twoim
                imieniu i nazwisku)
              </li>
              <li>Numer telefonu (z kierunkowym kraju)</li>
              <li>Link do profilu LinkedIn (zoptymalizowany i aktualny)</li>
              <li>
                Link do konta GitHub (jeśli zawiera projekty warte pokazania)
              </li>
              <li>Opcjonalnie: miasto zamieszkania (bez dokładnego adresu)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Professional Summary
            </h3>
            <Separator className="my-2" />
            <p className="mb-2">
              Krótkie (3-5 zdań) podsumowanie Twojego doświadczenia,
              umiejętności i celów zawodowych. Powinno być dopasowane do
              stanowiska, na które aplikujesz.
            </p>
            <Alert className="my-2">
              <AlertDescription>
                Zamiast pisać ogólne stwierdzenia jak "jestem zmotywowany",
                podaj konkretne osiągnięcia np. "Full Stack Developer z 3-letnim
                doświadczeniem w budowaniu aplikacji SaaS, który zwiększył
                wydajność kodu o 40%".
              </AlertDescription>
            </Alert>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Edukacja
            </h3>
            <Separator className="my-2" />
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Nazwa uczelni/szkoły</li>
              <li>Kierunek studiów i specjalizacja</li>
              <li>
                Lata studiów (od-do)
                <Alert className="my-2">
                  <AlertDescription>
                    Uwaga! Gdy ukończyłeś uczelnię w ciągu ostatnich 15 lat, to
                    warto podać lata studiów. Jeśli jednak minęło więcej czasu,
                    lepiej pominąć tę informację.
                  </AlertDescription>
                </Alert>
              </li>
              <li>
                Opcjonalnie: najważniejsze przedmioty, projekty, średnia ocen
                (jeśli jest wysoka)
                <Alert className="my-2">
                  <AlertDescription>
                    Projekty, które były realizowane w trakcie studiów, mogą być
                    istotne gdy nie masz żadnego doświadczenia komercyjnego.
                    Warto wtedy podać ogólne tematy projektu (zamiast nazw
                    własnych), podać krótki opis i technologie, które zostały
                    wykorzystane. Najlepiej podawać projekty, w których
                    wykorzystane zostały technologie związane ze stanowiskiem na
                    które aplikujesz, lub projekty mają podobny charakter do
                    tego czym będziesz się zajmować.
                  </AlertDescription>
                </Alert>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Umiejętności
            </h3>
            <Separator className="my-2" />

            <div className="ml-4 mt-3">
              <h4 className="font-medium mb-1">Tech Stack:</h4>
              <p>
                Wymień technologie, języki programowania, frameworki, bazy
                danych i narzędzia, które znasz. Grupuj je logicznie, np.:
              </p>
              <ul className="list-disc pl-6 mt-1 mb-4">
                <li>
                  Frontend: React, Angular, Vue.js, HTML5, CSS3, JavaScript
                </li>
                <li>Backend: Node.js, Express, Django, Flask</li>
                <li>Bazy danych: PostgreSQL, MongoDB, Redis</li>
                <li>DevOps: Docker, Kubernetes, CI/CD, AWS</li>
              </ul>
              <p className="mb-2">
                lub jeśli nie masz miejsca na grupowanie, to wymień je po
                przecinku w jednej/dwóch liniach.
              </p>

              <h4 className="font-medium mb-1">Certyfikaty:</h4>
              <p>Wymień posiadane certyfikaty wraz z datą uzyskania, np.:</p>
              <ul className="list-disc pl-6 mt-1 mb-4">
                <li>AWS Certified Developer – Associate (2023)</li>
                <li>Microsoft Certified: Azure Developer Associate (2022)</li>
              </ul>

              <h4 className="font-medium mb-1">Języki obce:</h4>
              <p>
                Podaj poziom znajomości języków wg europejskiej skali (A1-C2),
                np.:
              </p>
              <ul className="list-disc pl-6 mt-1 mb-4">
                <li>Angielski - C1 (zaawansowany)</li>
                <li>Niemiecki - B1 (średnio zaawansowany)</li>
              </ul>

              <h4 className="font-medium mb-1">Zainteresowania:</h4>
              <p>
                Wymień 3-5 zainteresowań, które pokazują Twoje pozytywne cechy
                lub są związane z branżą:
              </p>
              <ul className="list-disc pl-6 mt-1">
                <li>Udział w hackathonach i meetupach programistycznych</li>
                <li>Rozwiązywanie problemów algorytmicznych</li>
                <li>Open source contributions</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <AlertTitle>Wskazówki końcowe:</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>CV powinno mieć maksymalnie 1-2 strony, ale najlepiej jedną chyba, że masz więcej niż 10 lat doświadczenia</li>
                <li>Używaj punktów zamiast długich paragrafów w opisie doświadczenia</li>
                <li>Zawsze dostosuj CV do konkretnego stanowiska -- spray and pray tutaj nie zadziała i tylko doda frustracji </li>
                <li>Sprawdź błędy ortograficzne i gramatyczne</li>
                <li>Używaj czystego, profesjonalnego formatu</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatingCV;
