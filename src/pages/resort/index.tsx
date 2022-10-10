import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./resort.style";
import data from "../../data.json";
const Resort: React.FC = () => {
  const [newData, setNewData] = useState<{
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  }>();
  const { resortsID } = useParams<string>();

  useEffect(() => {
    const single = data.find((element) => {
      return element.id === +resortsID!;
    });

    setNewData(single);
  }, [resortsID, newData]);
  return (
    <Container>
      <div className="img">
        <img src={newData && newData.imageUrl} alt="" />
      </div>
      <div className="text">
      
        <div className="footer">
          
        </div>
      </div>
    </Container>
  );
};

export default Resort;
