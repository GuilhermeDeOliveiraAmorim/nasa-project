import Logout from "./logout";
import MenuAside from "./menu-aside";
import { AiFillSignal, AiFillHome, AiFillTrophy } from "react-icons/ai";

const menu = [
  {
    title: "Home",
    bgColor: "bg-blue-200",
    color: "text-blue-900",
    icon: <AiFillHome />,
  },
  {
    title: "Gráficos",
    bgColor: "bg-blue-200",
    color: "text-blue-900",
    icon: <AiFillSignal />,
  },
  {
    title: "Campeonatos",
    bgColor: "bg-blue-200",
    color: "text-blue-900",
    icon: <AiFillTrophy />,
  },
];

export default function Aside() {
  return (
    <aside className="flex flex-col gap-2 pt-2 pb-2 rounded-lg sm:flex sm:flex-col sm:justify-between md:flex md:flex-col md:justify-between lg:flex lg:flex-col lg:justify-between sm:col-span-1 md:col-span-1 lg:col-span-1 pl-2 pr-2 sm:p-2 md:p-2 lg:p-2 bg-slate-400">
      <MenuAside menu={menu} />
      <Logout />
    </aside>
  );
}
