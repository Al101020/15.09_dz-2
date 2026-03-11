import { v4 as uuidv4 } from 'uuid';
import User from './User';

function showUsers(props) {
  const idDetails = props.idDetails
  const setIdDetails = props.setIdDetails;
  const setDivDetails = props.setDivDetails;

  const users = props.users;

  if (users.length === 0) {
    return (
      <>
        <div className='users-list download'>Загрузка...</div>
      </>
    )
  }

  return (
    <div className='users-list'>
      {users.map(item =>
        <User key={uuidv4()} 
          item={item} 
          idDetails={idDetails} 
          setIdDetails={setIdDetails}
          setDivDetails={setDivDetails}
        />
      )}
    </div>
  );
};

export default showUsers;