import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const categories = [
  "Ogólne dane",
  "Specjalizacja",
  "Miasta",
  "Typ umowy",
  "Doświadczenie",
];

function ITSalaryReport() {
  const [selectedCategory, setSelectedCategory] = useState("Ogólne dane");

  const renderContent = () => {
    switch (selectedCategory) {
      case "Ogólne dane":
        return (
          <>
            <CardHeader>
              <CardTitle>Wynagrodzenia w IT 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Według raportu Bulldogjob średnie zarobki w IT w Polsce w 2025 roku
                nieco spadły względem roku 2024. Zauważalny jest trend stagnacji,
                a w niektórych przypadkach – obniżek wynagrodzeń, szczególnie w
                modelu B2B. Umowy o pracę trzymają stabilny poziom. Pracownicy w
                największych miastach nadal zarabiają więcej.
              </p>
            </CardContent>
          </>
        );
      case "Specjalizacja":
        return (
          <>
            <CardHeader>
              <CardTitle>Średnie wynagrodzenia wg specjalizacji (UoP)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Architekt IT:</strong> 16 663 PLN (16 636 PLN w 2024)<br />
                <strong>Project Manager / Product Owner:</strong> 13 817 PLN (11 392 PLN w 2024)<br />
                <strong>Programista:</strong> 10 849 PLN (9 756 PLN w 2024)<br />
                <strong>Data Science / ML / AI:</strong> 10 617 PLN (9 686 PLN w 2024)<br />
                <strong>Administrator IT / DevOps:</strong> 10 210 PLN (9 153 PLN w 2024)<br />
                <strong>Analityk IT / BI:</strong> 9 105 PLN (8 525 PLN w 2024)<br />
                <strong>Inne specjalizacje:</strong> 9 899 PLN (10 160 PLN w 2024)<br />
                <strong>UX / UI:</strong> 9 182 PLN (8 095 PLN w 2024)<br />
                <strong>Tester / QA:</strong> 8 304 PLN (7 554 PLN w 2024)
              </p>
            </CardContent>
            <CardHeader>
              <CardTitle>Średnie wynagrodzenia wg specjalizacji (B2B)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Architekt IT:</strong> 30 934 PLN (34 564 PLN w 2024)<br />
                <strong>Administrator IT / DevOps:</strong> 24 725 PLN (24 437 PLN w 2024)<br />
                <strong>Data Science / ML / AI:</strong> 24 118 PLN (22 887 PLN w 2024)<br />
                <strong>Analityk IT / BI:</strong> 21 730 PLN (21 767 PLN w 2024)<br />
                <strong>Programista:</strong> 22 068 PLN (22 032 PLN w 2024)<br />
                <strong>Project Manager / Product Owner:</strong> 23 431 PLN (23 453 PLN w 2024)<br />
                <strong>Inne specjalizacje:</strong> 25 326 PLN (24 812 PLN w 2024)<br />
                <strong>Tester / QA:</strong> 17 755 PLN (18 664 PLN w 2024)<br />
                <strong>UX / UI:</strong> 15 918 PLN (15 893 PLN w 2024)
              </p>
            </CardContent>
          </>
        );
      case "Miasta":
        return (
          <>
            <CardHeader>
              <CardTitle>Średnie zarobki w wybranych miastach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Umowa o pracę:</strong><br />
                <strong>Kraków:</strong> 11 511 PLN<br />
                <strong>Warszawa:</strong> 10 743 PLN<br />
                <strong>Wrocław:</strong> 10 137 PLN<br />
                <strong>Białystok:</strong> 6 617 PLN<br />
                <strong>Rzeszów:</strong> 6 619 PLN<br />
                <strong>Toruń:</strong> 6 811 PLN<br />
              </p>
              <p><br />
                <strong>Kontrakty B2B:</strong><br />
                <strong>Wrocław:</strong> 22 583 PLN<br />
                <strong>Trójmiasto:</strong> 22 503 PLN<br />
                <strong>Warszawa:</strong> 21 575 PLN<br />
                <strong>Bydgoszcz:</strong> 17 992 PLN<br />
                <strong>Poznań:</strong> 18 371 PLN<br />
                <strong>Rzeszów:</strong> 18 610 PLN<br />
              </p>
            </CardContent>
          </>
        );
      case "Typ umowy":
        return (
          <>
            <CardHeader>
              <CardTitle>Różnice w wynagrodzeniach UoP vs B2B</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                W 2025 roku B2B nadal oferuje wyższe stawki, ale spadki względem 2024
                roku są najbardziej zauważalne właśnie w tej formie zatrudnienia.
                Umowa o pracę pozostaje bardziej stabilna pod względem wynagrodzeń.
              </p>
            </CardContent>
          </>
        );
      case "Doświadczenie":
        return (
          <>
            <CardHeader>
              <CardTitle>Wynagrodzenia a doświadczenie</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Umowa o pracę:</strong><br />
                <strong>Junior:</strong> 5 995 PLN<br />
                <strong>Mid / Regular:</strong> 8 849 PLN<br />
                <strong>Senior:</strong> 12 516 PLN<br />
                <strong>Tech Lead / Team Lead:</strong> 15 002 PLN<br />
                <strong>Mid-level Manager:</strong> 16 345 PLN<br />
                <strong>Director / C-level:</strong> 22 455 PLN<br />
              </p>
              <p><br />
                <strong>Kontrakty B2B:</strong><br />
                <strong>Junior:</strong> 9 736 PLN<br />
                <strong>Mid / Regular:</strong> 16 573 PLN<br />
                <strong>Senior:</strong> 25 467 PLN<br />
                <strong>Tech Lead / Team Lead:</strong> 26 971 PLN<br />
                <strong>Mid-level Manager:</strong> 28 472 PLN<br />
                <strong>Director / C-level:</strong> 31 659 PLN<br />
              </p>
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-6">
      <h1 className="text-3xl font-bold mb-6">Wynagrodzenia w IT – Polska 2025</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="text-sm px-4 py-2 bg-gray-800 text-white hover:bg-gray-700"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Card className="w-full md:w-3/4">
        {renderContent()}
        <CardContent className="pt-6 text-sm text-gray-500">
          Źródło: <a href="https://bulldogjob.pl/readme/wynagrodzenia-w-it-na-co-moga-liczyc-polscy-pracownicy" className="underline">Raport Bulldogjob 2025</a>
        </CardContent>
      </Card>
    </div>
  );
}

export default ITSalaryReport;
