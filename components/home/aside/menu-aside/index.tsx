import Button from "../../../util/button";

interface IAiFillHomeItem {
  title: string;
  color: string;
  bgColor: string;
  icon: JSX.Element;
}

interface IMenuAside {
  menu: IAiFillHomeItem[];
}

export default function MenuAside(props: IMenuAside) {
  const { menu } = props;
  return (
    <div className="flex flex-col gap-2">
      {menu.map((item) => (
        <Button
          key={item.title}
          title={item.title}
          color={item.color}
          bgColor={item.bgColor}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
