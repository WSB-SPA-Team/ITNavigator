import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function EducationInCV() {
    const [showWhenToAdd, setShowWhenToAdd] = useState(false);
    const [showWhenToSkip, setShowWhenToSkip] = useState(false);
  
    return (
      <div className="flex flex-col items-center justify-center w-3/4 my-5">
        <h1 className="text-3xl font-bold mb-6">Wykształcenie w CV w branży IT – warto czy nie?</h1>
  
        <Card className="w-3/4 ">
          <CardHeader>
            <CardTitle className="text-sm text-center">Edukacja może być atutem, ale nie zawsze musi się znaleźć w CV. W branży IT często ważniejsze są umiejętności i konkretne projekty.</CardTitle>
          </CardHeader>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Kiedy warto dodać wykształcenie?</span>
              <Button variant="outline" size="sm" onClick={() => setShowWhenToAdd(!showWhenToAdd)}>
                {showWhenToAdd ? "Ukryj" : "Pokaż"}
              </Button>
            </CardTitle>
          </CardHeader>
          {showWhenToAdd && (
            <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Studia kierunkowe:</strong><br />
                <span className="ml-4">Informatyka, matematyka czy automatyka mogą świadczyć o solidnym przygotowaniu technicznym.</span>
              </li>
              <li>
                <strong>Renomowana uczelnia:</strong><br />
                <span className="ml-4">Dyplom z uczelni o dobrej opinii może zwiększyć szanse, szczególnie w rekrutacjach korporacyjnych.</span>
              </li>
              <li>
                <strong>Brak doświadczenia:</strong><br />
                <span className="ml-4">Dla juniorów edukacja to często jeden z głównych punktów zaczepienia w CV.</span>
              </li>
              <li>
                <strong>Studia ścisłe:</strong><br />
                <span className="ml-4">Fizyka, ekonometria czy analiza danych mogą sugerować dobre umiejętności analityczne.</span>
              </li>
            </ul>
            </CardContent>
          )}
  
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Kiedy można pominąć?</span>
              <Button variant="outline" size="sm" onClick={() => setShowWhenToSkip(!showWhenToSkip)}>
                {showWhenToSkip ? "Ukryj" : "Pokaż"}
              </Button>
            </CardTitle>
          </CardHeader>
          {showWhenToSkip && (
            <CardContent className="space-y-2">
            <ul className="list-none space-y-2 pl-5">
              <li>
                <strong>Doświadczenie komercyjne:</strong><br />
                <span className="ml-4">Kilka lat pracy w branży zazwyczaj mówi więcej niż sam dyplom, szczególnie w dynamicznych zespołach IT.</span>
              </li>
              <li>
                <strong>Rozwinięte portfolio:</strong><br />
                <span className="ml-4">Aktywność na GitHubie, projekty open-source czy zaawansowane aplikacje, które zbudowałeś, mogą skutecznie zastąpić formalne wykształcenie w oczach rekruterów.</span>
              </li>
              <li>
                <strong>Brak związku z branżą:</strong><br />
                <span className="ml-4">Jeśli Twoje wykształcenie nie ma związku z branżą IT (np. turystyka czy zarządzanie), może nie być konieczne uwzględnianie go w CV.</span>
              </li>
              <li>
                <strong>Samouk lub bootcamp:</strong><br />
                <span className="ml-4">Jeśli uczysz się na własną rękę lub ukończyłeś bootcamp, który daje praktyczną wiedzę, dyplom akademicki nie musi być istotny.</span>
              </li>
            </ul>
            </CardContent>
          )}

        </Card>
      </div>
    );
  }
  
  export default EducationInCV;
