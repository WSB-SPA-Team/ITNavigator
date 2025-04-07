import { ThemeProvider } from "./components/theme-provider";
import CreatingCV from "./components/creating-cv";
import LinkedInProfile from "./components/linked-profile";
import CertificatesOnResume from "./components/certificates-on-resume";
import EducationInCV from "./components/education-in-cv";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center w-12/12 mx-auto">
        <CreatingCV />
        <LinkedInProfile />
        <CertificatesOnResume/>
        <EducationInCV/>
      </div>
    </ThemeProvider>
  );
}

export default App;
