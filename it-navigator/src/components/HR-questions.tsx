import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function HRQuestions() {
  const sections = [
    {
      icon: "🧠",
      title: "Klasyczne pytania HR",
      questions: [
        {
          question: "Opowiedz coś o sobie.",
          answer:
            "Skup się na edukacji, doświadczeniu i projektach, które realizowałeś. Unikaj wątków prywatnych i przypadkowego wyliczania faktów z CV. Pokaż, co Cię pasjonuje w IT i jak rozwijasz swoje umiejętności.",
        },
        {
          question: "Dlaczego chcesz u nas pracować?",
          answer:
            "Pokaż, że znasz firmę – odwołaj się do jej misji, projektów lub kultury. Powiąż swoje cele zawodowe z tym, co oferuje pracodawca. Podkreśl, że zależy Ci na rozwoju i długofalowej współpracy.",
        },
        {
          question: "Jakie są Twoje mocne strony?",
          answer:
            "Wymień 2–3 konkretne cechy i poprzyj je krótkimi przykładami. Postaw na to, co może się przydać w zespole, np. komunikatywność, sumienność, organizacja pracy. Unikaj ogólników typu „jestem pracowity”.",
        },
        {
          question: "Jakie są Twoje słabości?",
          answer:
            "Wskaż realną słabość, ale zaznacz, że nad nią pracujesz. Przykład: „Zdarzało mi się przeceniać swoje możliwości, ale nauczyłem się planować zadania realistycznie.” Pokaż autorefleksję, nie perfekcję.",
        },
        {
          question: "Co Cię najbardziej interesuje w branży IT?",
          answer:
            "Wybierz obszar, który Cię ciekawi – np. frontend, backend, chmura, AI. Opowiedz, co Cię w tym pociąga i co już robisz w tym kierunku. To pokaże Twoją pasję i zaangażowanie.",
        },
        {
          question: "Czy masz pytania do nas?",
          answer:
            "Zawsze warto coś zapytać – np. o zespół, ścieżkę rozwoju, kulturę pracy. To pokazuje, że jesteś zaangażowany i poważnie traktujesz ofertę. Brak pytań może sugerować brak zainteresowania.",
        },
      ],
    },
    {
      icon: "⚠️",
      title: "Trudne pytania rekrutacyjne",
      questions: [
        {
          question: "Dlaczego zmieniasz branżę / zawód?",
          answer:
            "Pokaż, że to świadoma decyzja wynikająca z Twoich zainteresowań i analiz. Opowiedz, jak zdobywasz nowe kompetencje i jak możesz je wykorzystać. Rekruter szuka spójności i motywacji.",
        },
        {
          question: "Dlaczego nie masz doświadczenia komercyjnego?",
          answer:
            "Nie miałem jeszcze okazji pracować komercyjnie, ale mam za sobą projekty akademickie i własne. Skupiam się na nauce, praktyce i ciągłym rozwoju. Jestem zmotywowany, by zdobywać doświadczenie i uczyć się od zespołu.",
        },
        {
          question: "Dlaczego odszedłeś z poprzedniej pracy?",
          answer:
            "Skup się na pozytywach – chęć rozwoju, zmiana kierunku, nowe wyzwania. Unikaj krytykowania byłego pracodawcy. Pokaż, że była to przemyślana decyzja.",
        },
        {
          question: "Jakie masz oczekiwania finansowe?",
          answer:
            "Podaj widełki na podstawie rynku i swojego doświadczenia. Zaznacz, że poza wynagrodzeniem zależy Ci też na rozwoju i atmosferze. Unikaj mówienia „nie wiem” – bądź przygotowany.",
        },
        {
          question: "Dlaczego powinniśmy Cię zatrudnić?",
          answer:
            "Podkreśl swoje dopasowanie do roli, chęć nauki i zaangażowanie. Pokaż, że możesz wnieść wartość do zespołu, nawet jako junior. Nie musisz być idealny – ważna jest postawa.",
        },
      ],
    },
    {
      icon: "💬",
      title: "Pytania o zachowanie i zespół",
      questions: [
        {
          question: "Jak radzisz sobie ze stresem?",
          answer:
            "Opisując strategię, pokaż dojrzałość emocjonalną. Może to być dzielenie zadań, rozmowa z zespołem lub aktywne planowanie. Unikaj stwierdzeń typu „nie stresuję się nigdy”.",
        },
        {
          question: "Jak reagujesz na krytykę?",
          answer:
            "Traktuję krytykę jako szansę na rozwój. Staram się słuchać ze zrozumieniem i wyciągać wnioski. Ważne, by nie traktować jej personalnie, tylko jako informację zwrotną.",
        },
        {
          question: "Czy miałeś kiedyś konflikt w pracy?",
          answer:
            "Tak, ale staram się je rozwiązywać spokojnie i konstruktywnie. Kluczowa jest rozmowa, zrozumienie drugiej strony i wspólne szukanie rozwiązania. Zawsze zależy mi na dobrej atmosferze.",
        },
        {
          question: "Jak radzisz sobie z nudnymi zadaniami?",
          answer:
            "Traktuję je jako część procesu – nawet jeśli nie są ekscytujące, są potrzebne. Staram się je planować na konkretne momenty dnia i wykonać z pełnym zaangażowaniem. Czasem słucham muzyki, by się nie znudzić.",
        },
      ],
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<Record<string, number[]>>({});

  const toggleAnswer = (section: string, index: number) => {
    setOpenIndexes((prev) => {
      const current = prev[section] || [];
      return {
        ...prev,
        [section]: current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index],
      };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Jak zachowywać się na rozmowie HR?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center text-muted-foreground mb-6">
          <p>
            Rozmowa z HR to coś więcej niż odpowiedzi – to pokazanie swojego podejścia i charakteru.
            Mów szczerze, konkretnie i z kulturą. Rekruter zwraca uwagę na to, jak się komunikujesz i czy pasujesz do zespołu.
          </p>
        </CardContent>

        {sections.map((section, secIndex) => (
          <div key={secIndex} className="mb-4">
            <h2 className="text-xl font-semibold text-center mb-2">
              {section.icon} {section.title}
            </h2>
            {section.questions.map((q, index) => (
              <div key={index}>
                <CardHeader className="flex flex-row items-center justify-between pt-2 pb-0">
                  <CardTitle className="text-base font-semibold">
                    <strong>{index + 1}. {q.question}</strong>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleAnswer(section.title, index)}
                  >
                    {openIndexes[section.title]?.includes(index) ? "Ukryj" : "Pokaż"}
                  </Button>
                </CardHeader>
                {openIndexes[section.title]?.includes(index) && (
                  <CardContent className="pb-4 pt-0">
                    <p>{q.answer}</p>
                  </CardContent>
                )}
              </div>
            ))}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default HRQuestions;
