import { Link } from "react-router-dom";
import person from "../assets/img/people/h1.png";

const Card = () => {
  return (
    <div className="col">
      <article className="card">
        <div className="card__image">
          <img src={person} alt="People 1" />
        </div>
        <div className="card__content">
          <div className="card__title">
            <div className="card__name">
              <Link to="/chel/leslie">Leslie Burke</Link>
            </div>
            <div className="card__gender card__gender-male"></div>
          </div>
          <div className="card__info">
            <div className="card__item">
              <div className="card__label">email</div>
              <div className="card__text">charlotter@example.com</div>
            </div>
            <div className="card__item">
              <div className="card__label">адрес</div>
              <div className="card__text">9278 new road kilcoole</div>
            </div>
            <div className="card__item">
              <div className="card__label">возраст</div>
              <div className="card__text">30 лет</div>
            </div>
            <div className="card__item">
              <div className="card__label">телефон</div>
              <div className="card__text">730-468-4848</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
