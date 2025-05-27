import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function CompaniesKatowice() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Firmy w okolicy (Katowice)</h1>
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Przykładowe firmy IT oraz software house’y w Katowicach</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Future Processing</span> – duży software house, projekty dla klientów na całym świecie. <a href="https://www.future-processing.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">Sii Polska</span> – konsulting IT, outsourcing, rekrutują do różnych technologii. <a href="https://sii.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">Accenture</span> – globalna korporacja, Katowice to jedno z centrów technologicznych. <a href="https://www.accenture.com/pl-pl" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">eSKY.pl</span> – duży serwis travel/IT, rozwijają autorskie systemy, sporo ofert dla developerów. <a href="https://www.esky.pl/oferty-pracy" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">ING Tech Poland</span> – centrum technologiczne ING, nowoczesne projekty IT. <a href="https://www.ingtech.com.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">PwC Service Delivery Center</span> – consulting, systemy finansowe, BI, IT, SAP. <a href="https://www.pwc.pl/pl/kariera.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
            <li>
              <span className="font-semibold">EPAM Systems</span> – duży software house, sporo projektów międzynarodowych. <a href="https://www.epam.com/careers/job-listings" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Strona firmy</a>
            </li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle>Gdzie jeszcze szukać ofert?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Portale: <span className="font-medium">JustJoin.it, NoFluffJobs, Pracuj.pl, LinkedIn</span> (filtruj lokalizację na Katowice lub okolice, np. Gliwice, Tychy, Chorzów).</li>
            <li>Strony karierowe firm (warto je przejrzeć raz na jakiś czas).</li>
            <li>Grupy Facebook i LinkedIn: „Praca IT Śląsk”, „Programiści Katowice”, „Katowice IT Jobs”.</li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle>Tipy do aplikowania lokalnie</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Sprawdź możliwość pracy hybrydowej/zdalnej (wiele firm z Katowic daje taką opcję).</li>
            <li>Odwiedź meetupy IT w Katowicach – to szansa na poznanie firm i rekruterów.</li>
            <li>Pisz do lokalnych HR-ów bezpośrednio przez LinkedIn, nawet jeśli firma nie ma akurat ogłoszenia.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default CompaniesKatowice;
