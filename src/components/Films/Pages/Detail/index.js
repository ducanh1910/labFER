import classnames from 'classnames/bind';
import styles from './MovieInfo.module.scss';
import { movieList } from '../../../asset/image/MovieList';

const cn = classnames.bind(styles);

function MovieInfo() {
    return (
        <div>
            {movieList.map((movie, idx) => (
                <div key={idx} className={cn('movie-detail')}>
                    <img src={movie.Image} alt={movie.Title}></img>
                    <div className={cn('details')}>
                        <div className={cn('headline')}>{movie.Title}</div>
                        <div className={cn('release')}>
                            <label>Release Year: </label>
                            {movie.Year}
                        </div>
                        <div className={cn('origin')}>
                            <label>Country: </label>
                            {movie.Nation}
                        </div>
                        <div className={cn('description')}>{movie.Description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieInfo;
