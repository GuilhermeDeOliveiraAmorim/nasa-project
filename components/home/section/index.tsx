import { useQuery } from "react-query";

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

export default function Section() {
  const { isLoading, error, data } = useQuery<IApod>("repoData", () =>
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Gh7LsoD40iqLGmkwbaiEHPiy5KHMvbpNCr4pM5Ec"
    ).then((res) => res.json())
  );

  return (
    <section
      className="flex flex-col-reverse bg-center bg-fixed bg-cover h-full rounded-xl"
      style={{ backgroundImage: `url(${data?.url})` }}
    >
      <div className="p-2 bg-slate-900 rounded-bl-xl rounded-br-xl bg-opacity-50 text-white">
        INFOS
      </div>
    </section>
  );
}
