import MovieDetail from '../components/MovieDetail';
import MoviesList from '../components/MoviesList';
import InfoPage from '../components/pages/InfoPage';
import Connect from '../components/pages/Connect';
import MovieInfo from '../components/pages/MovieInfo';
import Updates from '../components/pages/Updates';

export const publicRoutes = [
    { path: '/movie/:movieId', component: MovieDetail },
    { path: '/', component: MoviesList },
    { path: '/info', component: MovieInfo },
    { path: '/about-us', component: InfoPage },
    { path: '/latest-updates', component: Updates },
    { path: '/get-in-touch', component: Connect },
];
