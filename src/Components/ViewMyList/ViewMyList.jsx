import { Link } from 'react-router-dom';

const ViewMyList = ({ item, handleDelete }) => {
  console.log(item);
  const { _id, food_name, category } = item;

  return (
    <div>
      <div className="overflow-x-auto mb-4 mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>

              <th>Btn</th>
              <th>BTn</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <td>{food_name}</td>
              <td>{category}</td>

              <th>
                <Link to={`/updateFood/${_id}`}>
                  <button>Update</button>
                </Link>
              </th>
              <th>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMyList;
