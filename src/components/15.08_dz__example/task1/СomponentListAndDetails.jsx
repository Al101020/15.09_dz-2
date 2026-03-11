import './componenlistAndDetails.css';
import { useEffect, useState } from 'react';

import ShowUsers from './ShowUsers';
import UserDetails from './UserDetails';

function СomponentListAndDetails() {
  
  const [list, setList] = useState([]);
  const [idDetails, setIdDetails] = useState(0);
  const [divDetails, setDivDetails] = useState('');
  const [Details, setDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => {
        setList(data);
      })
      .catch(error => console.error('Fetch error:', error));
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // console.log(divDetails);
  // }, [divDetails]);

  useEffect(() => {
    if (divDetails === '') {
      return
    }

    async function fetchData() {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${idDetails}.json`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setDetails(data);
      })
      .catch(error => console.error('Fetch error:', error));
    };
    fetchData();
  }, [idDetails]);

  return (
    <div className='task1'>
      <h1 className='titleTask'>Список с пользователей</h1>
      <div className='users'>
        <ShowUsers 
          users={list}
          idDetails={idDetails}
          setIdDetails={setIdDetails}
          setDivDetails={setDivDetails}
        />
        <UserDetails
          info={Details}
          divDetails={divDetails}
        />
      </div>
    </div>
  )
}

export default СomponentListAndDetails;