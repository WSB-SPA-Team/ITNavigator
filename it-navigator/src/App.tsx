import { ThemeProvider } from "./components/theme-provider";
import CreatingCV from "./components/creating-cv";
import LinkedInProfile from "./components/linked-profile";
import CertificatesOnResume from "./components/certificates-on-resume";
import TechnicalInterview from "./components/technical-interview";
import EducationInCV from "./components/education-in-cv";
import UsefulCertificates from "./components/useful-certificates";
import CVTemplateGuide from "./components/template-cv";
import ITSalaryOverview from "./components/it-salary-overview";
import HRquestions from "./components/HR-questions";
import InterviewEtiquete from "./components/interview-etiquete";


function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center w-12/12 mx-auto">
        <CreatingCV />
        <LinkedInProfile />
        <CertificatesOnResume/>
        <TechnicalInterview/>
        <EducationInCV/>
        <CVTemplateGuide/>
        <UsefulCertificates/>
        <ITSalaryOverview/>
        <HRquestions/>
        <InterviewEtiquete/>
      </div>
    </ThemeProvider>
  );
}

export default App;
