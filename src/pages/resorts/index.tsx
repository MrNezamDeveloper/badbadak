import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../component/card";
import data from "../../data.json";
import { Container } from "./resorts.style";

const Resorts: React.FC = () => {
  const [countPaginat, setCountPaginat] = useState<number>();
  const [currentpage, setCurrentPage] = useState<number>(1);
  const [indexOfLastTodo, setIndexOfLastTodo] = useState<number>();
  const [indexOfFirstTodo, setIndexOfFirstTodo] = useState<number>();
  const [currentData, setCurrentData] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: string;
      imageUrl: string;
    }[]
  >();

  useEffect(() => {
    const numberOfOerPage = 20;
    setCountPaginat(Math.ceil(data.length / numberOfOerPage));
    setIndexOfLastTodo(currentpage * numberOfOerPage);
    setIndexOfFirstTodo(indexOfLastTodo! - numberOfOerPage);
    const newdata = data.slice(indexOfFirstTodo, indexOfLastTodo);
    setCurrentData(newdata);
  }, [currentpage, indexOfFirstTodo, indexOfLastTodo]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <div className="filter">filter</div>
      <div>
        {currentData &&
          currentData.map((data) => (
            <Card
              key={data.id}
              description={data.description}
              image={data.imageUrl}
              price={data.price}
              title={data.title.split("—", 1).toString()}
              id={data.id}
            ></Card>
          ))}
      </div>
      <Pagination
        className="pagination"
        count={countPaginat}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Resorts;
