import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import AppContext from "../context";

const FullInfo = () => {
  const { users } = useContext(AppContext);
  const { name } = useParams();
  const firstName = name.split("-")[0];

  const user = users.filter(
    (user) => user.name.first.toLowerCase() === firstName
  );

  return (
    <div className="wrapper">
      <section className="people">
        <div className="row">
          <Card data={user[0]} isSingle />
        </div>
      </section>
    </div>
  );
};

export default FullInfo;
