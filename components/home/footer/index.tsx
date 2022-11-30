import Copyright from "./copyright";
import SocialMedia from "./social";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-2 bg-slate-900 text-white">
      <Copyright
        title="Guilherme Amorim"
        link="https://www.guilhermeamorim.com/"
      />
      <SocialMedia />
    </footer>
  );
}
