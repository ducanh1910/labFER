import { useParams } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './FilmDetail.module.scss';
import { listFilms } from '../../asset/image/ListOfFilms';

const cn = classnames.bind(styles);

function FilmDetail() {
    const movieId = useParams();
    const currentMovie = listFilms[movieId.movieId - 1];
    
    return (
        <div className={cn('movie-detail')}>
            <img src={currentMovie.Image} alt={currentMovie.Title}></img>
            <div className={cn('details')}>
                <div className={cn('headline')}>{currentMovie.Title}</div>
                <div className={cn('release')}>
                    <label>Release Year: </label>
                    {currentMovie.Year}
                </div>
                <div className={cn('origin')}>
                    <label>Country: </label>
                    {currentMovie.Nation}
                </div>
                <div className={cn('description')}>{currentMovie.Description}</div>
            </div>
        </div>
    );
}

export default FilmDetail;