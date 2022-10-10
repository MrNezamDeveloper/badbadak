import { Container } from "./card.style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BucketContext } from "../store/bucket";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  price,
  description,
}) => {
  const navigate = useNavigate();
  const { setContent } = useContext(BucketContext);

  const handleNavigate = () => {
    navigate(`/resort/${id}`);
  };
  const handleAddBucket = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setContent!((prv) => ({ ...prv, id }));
    console.log(id);
  };
  return (
    <Container onClick={handleNavigate}>
      <img className="image" src={image} alt="iamge about this news" />
      <h3 className="title">{title}</h3>
      <div className="time">
        <p className="minute">{price}</p>
        <p>$</p>
      </div>
      <span className="desc">{description}</span>
      <div className="more-conainer">
        <div className="more" onClick={handleAddBucket}>
          add
        </div>
      </div>
    </Container>
  );
};

export default Card;
