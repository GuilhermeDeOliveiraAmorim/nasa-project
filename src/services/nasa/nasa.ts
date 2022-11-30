import axios from "axios";

type IApod = {
  id: string;
  username: string;
  account: {
    id: string;
    balance: number;
  };
};

const getApod = async (): Promise<IApod> => {
  const res = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=Gh7LsoD40iqLGmkwbaiEHPiy5KHMvbpNCr4pM5Ec"
  );

  console.log(res.data);

  return res.data;
};

export { getApod };
