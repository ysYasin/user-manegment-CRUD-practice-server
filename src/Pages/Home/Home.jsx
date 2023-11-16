import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [users, setUsers] = useState([]);
  let count = 1;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5300/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ff40f3",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5300/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remain = users.filter((user) => user._id !== id);
              setUsers(remain);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center py-4 pt-7">
        <h1 className="text-center text-5xl font-semibold">User List</h1>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi
          nulla in natus animi,
        </p>

        <div className="w-[70%] mx-auto">
          <button
            className="flex bg-fuchsia-300 py-2 px-4 rounded-md hover:bg-fuchsia-400 gap-2 items-center"
            onClick={() => {
              navigate("/add-user");
            }}
          >
            {" "}
            <FaArrowLeft /> Add User
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mx-auto my-10 w-[90%]">
        <table className="table">
          {/* head */}
          <thead className="bg-black text-slate-200">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Country</th>
              <th>Status</th>
              <th>Gander</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <th>{count++}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>{user.country}</td>
                  <td>{user.status}</td>
                  <td>{user.gender}</td>
                  <td className="flex items-center">
                    {" "}
                    <div className="flex items-center gap-2">
                      <Link to={`edit-user/${user._id}`}>
                        {" "}
                        <button className="px-3 py-2 bg-slate-400 hover:bg-slate-700">
                          {" "}
                          <FaPen className="text-slate-100" />{" "}
                        </button>{" "}
                      </Link>
                      <button
                        onClick={() => handleDelet(user._id)}
                        className="px-3 py-2 bg-slate-400 hover:bg-slate-700"
                      >
                        {" "}
                        <FaTrashAlt className="text-slate-100" />{" "}
                      </button>
                    </div>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
