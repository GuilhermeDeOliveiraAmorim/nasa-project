interface IButton {
  bgColor: string;
  color: string;
  icon?: any;
  title: string;
}

export default function Button(props: IButton) {
  const { bgColor, color, icon, title } = props;
  return (
    <button
      className={`flex gap-2 justify-center items-center font-bold p-2 rounded-md w-full ${bgColor} ${color} cursor-pointer hover:bg-opacity-90`}
    >
      {icon} {title}
    </button>
  );
}
