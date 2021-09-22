import React, { useState } from 'react';
import { UsersPage } from '.';

export const UsersPageContainer = () => {
  const [userList, setUserList] = useState([
    {
      name: 'Alex',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
      isActive: false,
    },
    {
      name: 'Bella',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
      isActive: false,
    },
    {
      name: 'Vendetta',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
      isActive: false,
    },
    {
      name: 'John',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
      isActive: false,
    },
    {
      name: 'Tim',
      age: 27,
      phone: '+3752993847474',
      avatar: 'http://archilab.online/images/1/123.jpg',
      isActive: false,
    },
    {
      name: 'GRISHA',
      age: 23,
      phone: '+3752974756674',
      avatar: 'https://www.blast.hk/attachments/64805/',
      isActive: false,
    },
  ]);
  const [isSortMaxMin, setIsSortMaxMin] = useState(false);
  const handleUserActive = (user) => {
    const stateCopy = [...userList];
    stateCopy.map((item) => {
      if (item === user) {
        item.isActive = !item.isActive;
      }
    });
    setUserList(stateCopy);
  };
  const handleUserSort = () => {
    const stateCopy = [...userList];
    stateCopy.sort((a, b) => (isSortMaxMin ? b.age - a.age : a.age - b.age));
    setUserList(stateCopy);
    setIsSortMaxMin(!isSortMaxMin);
  };
  return (
    <UsersPage
      users={userList}
      onSortClick={handleUserSort}
      onCardClick={handleUserActive}
    />
  );
};
