import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function CVTemplateGuide() {
  const [showCreative, setShowCreative] = useState(false);
  const [showClassic, setShowClassic] = useState(false);
  const [showMinimal, setShowMinimal] = useState(false);
  const [showChronological, setShowChronological] = useState(false);
  const [showFunctional, setShowFunctional] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-3/4 my-5">
      <h1 className="text-3xl font-bold mb-6">Jaki wybrać template do CV i dlaczego?</h1>

      <Card className="w-3/4">
        <CardHeader>
          <CardTitle className="text-sm text-center">
            Szablon CV to coś więcej niż tylko wygląd – to strategia prezentacji siebie. Wybór odpowiedniego może zadecydować, czy rekruter zatrzyma się na Twojej aplikacji choćby na chwilę.
          </CardTitle>
        </CardHeader>

        {/* Kreatywny template */}
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>🎨 Kreatywny / Nowoczesny</span>
            <Button variant="outline" size="sm" onClick={() => setShowCreative(!showCreative)}>
              {showCreative ? "Ukryj" : "Pokaż"}
            </Button>
          </CardTitle>
        </CardHeader>
        {showCreative && (
          <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Dla kogo:</strong><br />
                <span className="ml-4">Marketing, design, media, IT – branże kreatywne.</span>
              </li>
              <li>
                <strong>Dlaczego warto:</strong><br />
                <span className="ml-4">Przykuwa uwagę, pozwala pokazać osobowość, idealny do pokazania portfolio lub projektów.</span>
              </li>
            </ul>
          </CardContent>
        )}

        {/* Klasyczny template */}
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>🧑‍💼 Klasyczny / Formalny</span>
            <Button variant="outline" size="sm" onClick={() => setShowClassic(!showClassic)}>
              {showClassic ? "Ukryj" : "Pokaż"}
            </Button>
          </CardTitle>
        </CardHeader>
        {showClassic && (
          <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Dla kogo:</strong><br />
                <span className="ml-4">Prawo, finanse, administracja, edukacja – branże tradycyjne.</span>
              </li>
              <li>
                <strong>Dlaczego warto:</strong><br />
                <span className="ml-4">Bezpieczny wybór – skupienie na doświadczeniu, klarowna struktura, profesjonalizm w czystej postaci.</span>
              </li>
            </ul>
          </CardContent>
        )}

        {/* Minimalistyczny template */}
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>✨ Minimalistyczny</span>
            <Button variant="outline" size="sm" onClick={() => setShowMinimal(!showMinimal)}>
              {showMinimal ? "Ukryj" : "Pokaż"}
            </Button>
          </CardTitle>
        </CardHeader>
        {showMinimal && (
          <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Dla kogo:</strong><br />
                <span className="ml-4">Uniwersalny wybór – dobry zarówno dla juniora, jak i specjalisty.</span>
              </li>
              <li>
                <strong>Dlaczego warto:</strong><br />
                <span className="ml-4">Prosty, przejrzysty, szybki do odczytu – idealny do aplikacji online i druku.</span>
              </li>
            </ul>
          </CardContent>
        )}

        {/* Chronologiczny template */}
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>🕒 Chronologiczny</span>
            <Button variant="outline" size="sm" onClick={() => setShowChronological(!showChronological)}>
              {showChronological ? "Ukryj" : "Pokaż"}
            </Button>
          </CardTitle>
        </CardHeader>
        {showChronological && (
          <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Dla kogo:</strong><br />
                <span className="ml-4">Osoby z ciągłym, bogatym doświadczeniem zawodowym.</span>
              </li>
              <li>
                <strong>Dlaczego warto:</strong><br />
                <span className="ml-4">Pokazuje rozwój kariery – idealny, gdy chcesz opowiedzieć historię swojej pracy.</span>
              </li>
            </ul>
          </CardContent>
        )}

        {/* Funkcjonalny template */}
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>🧩 Funkcjonalny / Kompetencyjny</span>
            <Button variant="outline" size="sm" onClick={() => setShowFunctional(!showFunctional)}>
              {showFunctional ? "Ukryj" : "Pokaż"}
            </Button>
          </CardTitle>
        </CardHeader>
        {showFunctional && (
          <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Dla kogo:</strong><br />
                <span className="ml-4">Osoby zmieniające branżę, z przerwami zawodowymi lub świeżo po studiach.</span>
              </li>
              <li>
                <strong>Dlaczego warto:</strong><br />
                <span className="ml-4">Skupia się na umiejętnościach i mocnych stronach – nie na chronologii.</span>
              </li>
            </ul>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default CVTemplateGuide;
