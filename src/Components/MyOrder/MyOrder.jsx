import { useEffect, useState } from 'react';
import UseHooks from '../Hook/UseHooks';
import ViewOrder from '../ViewOrder/ViewOrder';

const MyOrder = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const { user } = UseHooks();
  useEffect(() => {
    fetch(
      `https://assignment-11-server-site-xi.vercel.app/myorder/${user?.email}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);
  return (
    <section className="container px-4 mx-auto pt-12 mb-5 mt-5">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Order</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          Order {items.length}
        </span>
      </div>
      {items.map(card => (
        <ViewOrder key={card._id} card={card}></ViewOrder>
      ))}
    </section>
  );
};

export default MyOrder;
