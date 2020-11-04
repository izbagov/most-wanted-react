import { useContext } from "react";
import Card from "./Card";
import AppContext from "../context";

const Cards = () => {
  const { users } = useContext(AppContext);

  return (
    <div className="wrapper">
      <section className="people">
        <div className="row">
          {users.map((user) => (
            <Card key={user.login.uuid} data={user} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
