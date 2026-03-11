import { useEffect, useState } from 'react';

function UserDetails(props) {

  const info = props.info;
  const divDetails = props.divDetails;

  useEffect(() => {
    if (!info.id) {
      return;
    };
    
    const name = info.name;
    const city = info.details.city;
    const company = info.details.company;
    const position = info.details.position;
    divDetails.innerHTML = `
      <img src=${info.avatar}  class='img-avatar' alt="Аватар">
      <h4 class='infoName'>${name}</h4>
      <div class='infoCity'>City: ${city}</div>
      <div class='infoCompany'>${company}</div>
      <div class='infoPosition'>${position}</div>
      `
  } , [info])

  return (
    <div className='user-details'></div>
  );
};

export default UserDetails;
