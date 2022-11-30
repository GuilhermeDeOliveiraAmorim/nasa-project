import Link from "next/link";

interface ICopyright {
  title: string;
  link: string;
}

export default function Copyright(props: ICopyright) {
  const { title, link } = props;
  return (
    <Link href={link} className="font-bold">
      {title}
    </Link>
  );
}
