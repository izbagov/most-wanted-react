import Card from "./Card";

const Cards = () => {
  return (
    <div className="wrapper">
      <section className="people">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Cards;
