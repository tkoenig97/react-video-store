import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage, { allFilmsLoader } from './components/HomePage';
import DetailsPage, { filmLoader } from './components/DetailsPage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: allFilmsLoader,
            },
            {
                path: 'film/:filmId',
                element: <DetailsPage />,
                loader: filmLoader,
            },
        ],
    },
]);

export default router;

