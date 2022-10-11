import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Slider,
} from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../component/card";
import data from "../../data.json";
import { Container } from "./resorts.style";

interface IData {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const Resorts: React.FC = () => {
  const [countPaginat, setCountPaginat] = useState<number>();
  const [currentpage, setCurrentPage] = useState<number>(1);
  const [indexOfLastTodo, setIndexOfLastTodo] = useState<number>();
  const [indexOfFirstTodo, setIndexOfFirstTodo] = useState<number>();
  const [filteredData, setFilteredData] = useState<IData[]>(data);
  const [currentData, setCurrentData] = useState<IData[]>();
  const [filterValue, setFilterValue] = useState<number[]>([1, 3000]);
  const [sortByPrice, setSortByPrice] = useState("none");

  useEffect(() => {
    const numberOfOerPage = 20;
    setCountPaginat(Math.ceil(filteredData!.length / numberOfOerPage));
    setIndexOfLastTodo(currentpage * numberOfOerPage);
    setIndexOfFirstTodo(indexOfLastTodo! - numberOfOerPage);
    const newdata = filteredData!.slice(indexOfFirstTodo, indexOfLastTodo);
    setCurrentData(newdata);
  }, [currentpage, filteredData, indexOfFirstTodo, indexOfLastTodo]);

  function valuetext(value: number) {
    return `${value}$`;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const minDistance = 2;

  const handleFilterValue = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setFilterValue([
        Math.min(newValue[0], filterValue[1] - minDistance),
        filterValue[1],
      ]);
    } else {
      setFilterValue([
        filterValue[0],
        Math.max(newValue[1], filterValue[0] + minDistance),
      ]);
    }
  };

  const handleFilterSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (sortByPrice === "least") {
      const sortLessData = filteredData.sort((a, b) => {
        return +a.price.split("$", 1) - +b.price.split("$", 1);
      });
      const filteredDataBetween = sortLessData?.filter(
        (item) =>
          +item.price.split("$", 1) > filterValue[0] &&
          +item.price.split("$", 1) < filterValue[1],
      );
      setFilteredData(filteredDataBetween!);
    }
    if (sortByPrice === "none") {
      const filteredDataBetween = data?.filter(
        (item) =>
          +item.price.split("$", 1) > filterValue[0] &&
          +item.price.split("$", 1) < filterValue[1],
      );
      setFilteredData(filteredDataBetween!);
    }
    // const filteredDataBetween = data?.filter(
    //   (item) =>
    //     +item.price.split("$", 1) > filterValue[0] &&
    //     +item.price.split("$", 1) < filterValue[1],
    // );
    // setFilteredData(filteredDataBetween!);
    // console.log(sortByPrice);
  };
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortByPrice(event.target.value);
  };

  return (
    <Container>
      <div className="filter">
        <Box
          component={"form"}
          sx={{ width: "300px" }}
          onSubmit={handleFilterSubmit}
        >
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={filterValue}
            onChange={handleFilterValue}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            max={3000}
          />
          <p>
            {valuetext(filterValue[0])} between {valuetext(filterValue[1])}
          </p>
          <br />
          <InputLabel id="demo-select-small">Price sort</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={sortByPrice}
            onChange={handleChangeSort}
            label="Price"
          >
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"most"}>Most Price</MenuItem>
            <MenuItem value={"least"}>Least Price</MenuItem>
          </Select>
          <Button type="submit" variant="contained">
            filter by price
          </Button>
        </Box>

        <FormControl sx={{ m: 1, minWidth: 80 }}></FormControl>
      </div>

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
