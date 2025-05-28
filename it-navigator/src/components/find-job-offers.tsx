import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function FindJobOffers() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Jak znaleźć oferty pracy i gdzie aplikować?</h1>
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Przeglądaj różne źródła ofert</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Portale ogłoszeniowe:</strong> JustJoin.it, NoFluffJobs, Pracuj.pl, LinkedIn, Bulldogjob, RocketJobs.</li>
            <li><strong>LinkedIn:</strong> Używaj filtrów (remote, junior/regular, konkretne technologie), dołączaj do grup związanych z IT.</li>
            <li><strong>Strony firmowe:</strong> Wiele firm IT publikuje oferty tylko na własnych stronach – warto stworzyć listę interesujących firm i zaglądać tam regularnie.</li>
            <li><strong>Grupy Facebook, Discord, Slack:</strong> Wyszukuj grupy tematyczne np. "Praca IT Polska", "ReactJS Polska", "Frontend/Backend Jobs".</li>
            <li><strong>Networking:</strong> Daj znać znajomym z branży, że szukasz pracy, udzielaj się na meet-upach i wydarzeniach online/offline.</li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle>Jak aplikować skutecznie?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Dopasuj CV i list motywacyjny</strong> do konkretnej oferty – pokaż, że rozumiesz wymagania firmy.</li>
            <li><strong>Personalizuj wiadomości</strong> na LinkedIn – napisz krótko, dlaczego aplikujesz i co możesz wnieść do zespołu.</li>
            <li><strong>Dbaj o porządek</strong> – notuj gdzie i kiedy aplikowałeś, zapisuj kontakty do rekruterów, ustaw przypomnienia o follow-up.</li>
            <li><strong>Wysyłaj aplikacje regularnie</strong> – lepiej kilka dobrze przygotowanych aplikacji niż kilkadziesiąt masowych.</li>
            <li><strong>Bądź responsywny</strong> – sprawdzaj maila i LinkedIn, szybko odpowiadaj na wiadomości od rekruterów.</li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle>Pro tipy 💡</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Załóż alerty o ofertach na portalach – szybciej dostaniesz info o nowych rekrutacjach.</li>
            <li>Dbaj o wizerunek online – aktywny, profesjonalny LinkedIn zwiększa szanse na zaproszenie do procesu.</li>
            <li>Po każdej rekrutacji poproś o feedback – nawet jeśli nie dostałeś pracy, dowiesz się co poprawić.</li>
            <li>Bądź cierpliwy – rekrutacja w IT bywa długa, a feedback przychodzi z opóźnieniem.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default FindJobOffers;
