import { useMutation, useQuery } from "react-query";
import { getApod } from "../src/services/nasa/nasa";
import Aside from "../components/home/aside";
import Footer from "../components/home/footer";
import Nav from "../components/home/nav";
import Section from "../components/home/section";

interface IApod {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export default function Home() {
  // const getApodQuery = useMutation(getApod);
  // console.log(getApodQuery);
  return (
    <div className="flex flex-col justify-between h-screen sm:gap-2 md:gap-2 lg:gap-2">
      <Nav />
      <div className="flex flex-col justify-between h-full p-2 gap-2 sm:pt-0 sm:pb-0 sm:grid sm:grid-cols-4 md:pt-0 md:pb-0 md:grid-cols-5 lg:pt-0 lg:pb-0 lg:grid-cols-6">
        <main className="sm:col-span-3 md:col-span-4 lg:col-span-5 h-full">
          <Section />
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
