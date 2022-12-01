import Logo from "./logo";
import MenuNav from "./menu-nav";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-2 bg-slate-900">
      <Logo />
      {/* <MenuNav /> */}
    </nav>
  );
}
