import { v4 as uuidv4 } from 'uuid';

function User(props) {
  const item = props.item;
  const idDetails = Number(props.idDetails);
  const setIdDetails = props.setIdDetails;
  const setDivDetails = props.setDivDetails;

  const changeColor = (e) => {
    if (item.id === idDetails) {
      return;
    }
    const divDetails = e.target.parentElement.parentElement.parentElement.children[1];
    divDetails.innerHTML = `<p class='download'>Загрузка...</p>`;

    setIdDetails(e.target.parentElement.children[0].textContent);
    setDivDetails(divDetails);
  };
  return (
    <>
      <div key={uuidv4()} className={item.id === idDetails ? 'user blue' : 'user'}
      onClick={changeColor}
      >
        <div className='user-id displayNone'>{item.id}</div>
        <div className='user-name'>{item.name}</div>
      </div>
    </>
  );
};

export default User;