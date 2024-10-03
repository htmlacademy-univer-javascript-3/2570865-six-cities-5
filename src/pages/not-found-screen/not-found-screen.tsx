import {Link} from 'react-router-dom';

export function NotFoundScreen() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={'/'}>Go to main screen</Link>
    </>
  );
}
