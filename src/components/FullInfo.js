import { useContext } from "react";
import Card from "./Card";
import AppContext from "../context";

const FullInfo = () => {
  const { users } = useContext(AppContext);

  console.log("users", users);
  return (
    <div className="wrapper">
      <section className="people">
        <div className="row">
          <Card />
        </div>
      </section>
    </div>
  );
};

export default FullInfo;
