import { Link } from 'react-router-dom';

const MovieWowCard = (props) => {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <article>
        <img
          src={props.movie.poster}
          alt={props.movie.movie}
          width="200"
          height="200"
        />
        <h4>{props.movie.movie}</h4>
        <p>{props.movie.line}</p>
        <p>{props.movie.year}</p>
      </article>
    </Link>
  );
};

export default MovieWowCard;