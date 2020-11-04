import { Link } from "react-router-dom";
import slugify from "slugify";

const Card = ({ data, isSingle }) => {
  const {
    name: { first, last },
    picture,
    email,
    location: { city, country, postcode },
    dob: { age },
    cell,
    nat,
    login: { password },
  } = data;
  const fullName = `${first} ${last}`;
  const url = slugify(fullName, {
    lower: true,
  });
  const address = `${postcode} ${country} ${city}`;

  return (
    <div className={`col ${isSingle && "fullwide"}`}>
      <article className="card">
        <div className="card__image">
          <img src={picture.large} alt="People 1" />
        </div>
        <div className="card__content">
          <div className="card__title">
            <div className="card__name">
              {isSingle ? (
                fullName
              ) : (
                <Link to={`/chel/${url}`}>{fullName}</Link>
              )}
            </div>
            <div className="card__gender card__gender-male"></div>
          </div>
          <div className="card__info">
            <div className="card__item">
              <div className="card__label">email</div>
              <div className="card__text">{email}</div>
            </div>
            <div className="card__item">
              <div className="card__label">адрес</div>
              <div className="card__text">{address}</div>
            </div>
            <div className="card__item">
              <div className="card__label">возраст</div>
              <div className="card__text">{age} лет</div>
            </div>
            <div className="card__item">
              <div className="card__label">телефон</div>
              <div className="card__text">{cell}</div>
            </div>
            {isSingle && (
              <>
                <div className="card__item">
                  <div className="card__label">национальность</div>
                  <div className="card__text">{nat}</div>
                </div>
                <div className="card__item">
                  <div className="card__label">пароль</div>
                  <div className="card__text">{password}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
