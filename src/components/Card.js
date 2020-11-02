import person from "../assets/img/people/h1.png";

const Card = () => {
  return (
    <div class="col">
      <article class="card">
        <div class="card__image">
          <img src={person} alt="People 1" />
        </div>
        <div class="card__content">
          <div class="card__title">
            <div class="card__name">Leslie Burke</div>
            <div class="card__gender card__gender-male"></div>
          </div>
          <div class="card__info">
            <div class="card__item">
              <div class="card__label">email</div>
              <div class="card__text">charlotter@example.com</div>
            </div>
            <div class="card__item">
              <div class="card__label">адрес</div>
              <div class="card__text">9278 new road kilcoole</div>
            </div>
            <div class="card__item">
              <div class="card__label">возраст</div>
              <div class="card__text">30 лет</div>
            </div>
            <div class="card__item">
              <div class="card__label">телефон</div>
              <div class="card__text">730-468-4848</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
