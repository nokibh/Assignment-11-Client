import { useEffect, useState } from 'react';
import UseHooks from '../Hook/UseHooks';
import ViewMyList from '../ViewMyList/ViewMyList';
import Swal from 'sweetalert2';

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
  const handleDelete = id => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myfood/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Food has been deleted.',
                icon: 'success',
              });
              const remaining = items.filter(item => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {items.map(i => (
        <ViewMyList
          key={i._id}
          item={i}
          handleDelete={handleDelete}
        ></ViewMyList>
      ))}
    </div>
  );
};

export default MyAddFood;
