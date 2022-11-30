import Button from "../../../util/button";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Logout() {
  return (
    <div>
      <Button
        title="Logout"
        bgColor="bg-red-200"
        color="text-red-900"
        icon={<AiFillCloseCircle />}
      />
    </div>
  );
}
