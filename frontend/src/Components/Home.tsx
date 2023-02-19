import { useContext } from "react";
import { ListingsContext } from "../store/ListingsContext";
import Card from "./Card";

const Home = () => {
  const data = useContext(ListingsContext).listings;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-10">
      {data.map((card) => {
        return <Card data={card} />;
      })}
    </div>
  );
};

export default Home;
