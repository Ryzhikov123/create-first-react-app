import { Link } from 'react-router-dom';
import { UserCard } from '../../common/UserCard';
import { ROUTES } from '../../routes/routesNames';
import './styles.scss';

export const UsersPage = (props) => {
  return (
    <div className="users-page">
      <h1>Users Page</h1>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="return-btn">Get back</button>
      </Link>
      <div>
        {props.users.map((user, index) => (
          <UserCard
            avatar={user.avatar}
            key={user.name}
            name={user.name}
            age={user.age}
            phone={user.phone}
            onCardClick={() => props.onCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
