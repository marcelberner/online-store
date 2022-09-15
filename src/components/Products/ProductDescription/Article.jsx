import "./Article.scss";

const Article = (props) => {
  return (
    <article className="article" key={Math.random()}>
      <h2 className="article__title article__item">{props.title}</h2>
      <p className="article__text article__item">{props.text}</p>
      <img src={`${props.img}`} alt="article img" className="article__img article__item"></img>
    </article>
  );
};

export default Article;
