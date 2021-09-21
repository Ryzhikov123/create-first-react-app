import React, { useState } from 'react';
import { UsersPage } from '.';

export const UsersPageContainer = () => {
  const [userList, setUserList] = useState([
    {
      name: 'Alex',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
    },
    {
      name: 'Bella',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
    },
    {
      name: 'Vendetta',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
    },
    {
      name: 'John',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
    },
    {
      name: 'Tim',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
    },
    {
      name: 'GRISHA',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
    },
  ]);
  const handleUserRemove = (index) => {
    const stateCopy = [...userList];
    stateCopy.splice(index, 1);
    setUserList(stateCopy);
  };
  return <UsersPage users={userList} onCardClick={handleUserRemove} />;
};
