import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function InterviewEtiquette() {
  const etiquettePoints = [
    {
      title: "Ubiór",
      text: "Zadbaj o schludny, czysty i dopasowany do kultury firmy strój. Jeśli nie masz pewności, postaw na lekko formalny styl: koszula, ciemne spodnie, stonowane kolory. Unikaj sportowych bluz, mocnych perfum i ekstrawaganckich dodatków. Twoje ubranie nie powinno rozpraszać – ma podkreślać profesjonalizm.",
    },
    {
      title: "Punktualność",
      text: "Przyjdź lub zaloguj się 5–10 minut wcześniej. Sprawdź sprzęt: kamera, mikrofon, internet – najlepiej dzień wcześniej. Miej przy sobie naładowany telefon jako backup. Jeśli coś Cię opóźnia – uprzedź rekrutera. Punktualność to pierwsze wrażenie – nie zaczynaj go od wymówek.",
    },
    {
      title: "Profesjonalizm (także online)",
      text: "W rozmowie zdalnej ustaw kamerę na wysokości oczu, zadbaj o ciche, jasne otoczenie i neutralne tło. Upewnij się, że nikt nie będzie Ci przeszkadzał – wycisz telefon, zamknij okna z mediami społecznościowymi. Traktuj spotkanie zdalne z taką samą powagą jak stacjonarne.",
    },
    {
      title: "Komunikacja",
      text: "Odpowiadaj zwięźle, ale konkretnie. Używaj przykładów i nie przesadzaj z ogólnikami. Unikaj przerywania. Jeśli nie rozumiesz pytania – poproś o doprecyzowanie. Pokazujesz w ten sposób kulturę dialogu i szacunek. Patrz w kamerę – to tworzy wrażenie kontaktu wzrokowego.",
    },
    {
      title: "Język ciała",
      text: "Nawet przez ekran kamera pokazuje Twoją postawę. Nie garb się, nie ruszaj nerwowo rękami. Uśmiech, otwarta postawa, lekkie skinienie głową podczas słuchania – to wszystko sygnały, że jesteś zaangażowany i pozytywnie nastawiony.",
    },
    {
      title: "Pytania od Ciebie",
      text: "Zawsze przygotuj minimum 2–3 pytania do rekrutera. Może to być: „Jak wygląda typowy dzień w tej roli?”, „Jakie są możliwości rozwoju?”, „Jak działa zespół projektowy?”. To pokazuje, że traktujesz rozmowę poważnie i myślisz o długofalowej współpracy.",
    },
    {
      title: "Czego unikać",
      text: "Nie krytykuj byłych pracodawców – nawet jeśli masz rację, to źle wygląda. Nie kłam – rekruterzy szybko to wyczują. Nie bądź zbyt luźny ani zbyt spięty. Unikaj języka potocznego, skrótów myślowych, „yyy...”. Nie rozpraszaj się telefonem, zegarkiem czy otwartymi oknami na ekranie.",
    },
    {
      title: "Po rozmowie",
      text: "Dobrze jest wysłać krótkiego maila z podziękowaniem – najlepiej jeszcze tego samego dnia. Możesz napisać np.: „Dziękuję za rozmowę i możliwość poznania firmy. Jestem jeszcze bardziej zmotywowany do dołączenia do Waszego zespołu.” Taki gest zapada w pamięć i wyróżnia Cię spośród kandydatów.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Etykieta na rozmowie rekrutacyjnej
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center text-muted-foreground mb-6">
          <p>
            Dobre wrażenie to nie przypadek. To efekt przygotowania, kultury osobistej i świadomości, jak jesteś odbierany.
            Poniżej znajdziesz najważniejsze zasady, które pomogą Ci zachować profesjonalizm i pewność siebie podczas rozmowy rekrutacyjnej.
          </p>
        </CardContent>

        {etiquettePoints.map((item, index) => (
          <div key={index}>
            <CardHeader className="flex flex-row items-center justify-between pt-2 pb-0">
              <CardTitle className="text-base font-semibold">
                <strong>{index + 1}. {item.title}</strong>
              </CardTitle>
              <Button variant="outline" size="sm" onClick={() => toggle(index)}>
                {openIndexes.includes(index) ? "Ukryj" : "Pokaż"}
              </Button>
            </CardHeader>
            {openIndexes.includes(index) && (
              <CardContent className="pb-4 pt-0">
                <p>{item.text}</p>
              </CardContent>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default InterviewEtiquette;
