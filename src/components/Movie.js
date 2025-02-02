import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie({  id, coverImage , title, summary , genres}) {
    return (
        <div>
            <Link to = {`movie/${id}`}><h2>{title}</h2></Link>
            <img src = {coverImage} alt = {title} />
            <p>{summary}</p>
            <ul>
            {genres.length && genres.map((genre) => (
                <li key = {genre}>
                    {genre}
                </li>
                ))}
            </ul>
        </div>
    )    
}

Movie.propTypes = {
    id : PropTypes.string.isRequired,
    coverImage : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;