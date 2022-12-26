import { Link } from 'react-router-dom';
import { NotFoundSection, NotFoundText } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundSection>
      <div>
        <img
          src="https://assets.codepen.io/5647096/backToTheHomepage.png"
          alt="Back to the Homepage"
        />
        <img
          src="https://assets.codepen.io/5647096/Delorean.png"
          alt="El Delorean, El Doc y Marti McFly"
        />
      </div>
      <NotFoundText>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link to="/">YES</Link>
        <Link to="/movies">NO</Link>
      </NotFoundText>
    </NotFoundSection>
  );
};

export default NotFound;
