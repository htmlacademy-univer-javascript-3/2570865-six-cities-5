import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export function NotFoundScreen() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Go to main screen</Link>
    </>
  );
}
