import { useEffect, useState } from 'react';
import UseHooks from '../Hook/UseHooks';
import ViewMyList from '../ViewMyList/ViewMyList';

const MyAddFood = () => {
  const { user } = UseHooks();
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch(`http://localhost:5000/myfood/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);
  return (
    <div>
      {items.map(i => (
        <ViewMyList key={i._id} item={i}></ViewMyList>
      ))}
    </div>
  );
};

export default MyAddFood;
