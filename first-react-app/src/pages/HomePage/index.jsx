import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routesNames';
import './styles.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home page</h1>
      {Object.entries(ROUTES).map(([routerName, path]) => (
        <Link to={path} key={routerName}>
          <button className="switcher">{routerName}</button>
        </Link>
      ))}
    </div>
  );
};
