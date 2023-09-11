"use client"
import { data } from 'autoprefixer';
import { useState, useEffect } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your API when the component mounts
    console.log("this is is data variable 22222222222222222222222");
    console.log(users);
    console.log("this is user 11111111111111111111")
    console.log(users);
    fetch('/api/users/list') 
   
      .then((response) => response.json())
     
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* {users.map((user) => (
          <li key={user?._id}>{user?.username}</li>
          
        ))} */}
       
      </ul>
    </div>
  );
}

export default UsersPage;
