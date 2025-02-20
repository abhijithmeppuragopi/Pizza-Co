import { useNavigate, useRouteError } from 'react-router-dom';
import Backbutton from './Backbutton';

function Error() {
  const navigate = useNavigate();
  const err=useRouteError();
  

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>
      <Backbutton to={'-1'}>
      &larr; Go Back</Backbutton>
    </div>
  );
}

export default Error;
