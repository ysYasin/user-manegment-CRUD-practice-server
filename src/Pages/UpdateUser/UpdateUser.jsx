import { data } from "autoprefixer";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const hangleUpdateUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const city = form.city.value;
    const country = form.country.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const updatedUser = { name, email, city, country, gender, status };

    fetch(`http://localhost:5300/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "User updated!",
            text: "User information is successfully updated",
            icon: "success",
            confirmButtonText: "Go Home",
          }).then(() => {
            navigate("/");
          });
        }
      });
  };

  return (
    <div className="w-full">
      <div className="text-center py-4 pt-7">
        <h1 className="text-center text-5xl font-semibold">User Update</h1>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi
          nulla in natus animi,
        </p>

        <div className="w-[70%] mx-auto">
          <button
            className="flex bg-fuchsia-300 py-2 px-4 rounded-md hover:bg-fuchsia-400 gap-2 items-center"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            <FaArrowLeft /> Go Home
          </button>
        </div>
      </div>
      <form
        onSubmit={hangleUpdateUser}
        className="rounded-lg shadow-lg bg-white border-2 flex flex-col items-center py-4 w-[50%] mx-auto"
      >
        <div className="py-10 text-center">
          <h1 className="text-3xl font-semibold">Update User</h1>
          <p className="text-slate-400">
            use the bellow form to Update your account
          </p>
        </div>
        <div>
          <label className="block capitalize mb-1" htmlFor="name">
            Name*
          </label>
          <input
            type="text"
            placeholder="Type your Name"
            name="name"
            defaultValue={user.name}
            required
            className="input w-[500px] mb-4 input-bordered max-w-xs"
          />
        </div>
        <div>
          <label className="block capitalize mb-1" htmlFor="email">
            email*
          </label>
          <input
            type="email"
            placeholder="Type your email"
            name="email"
            defaultValue={user.email}
            required
            className="input w-[500px] mb-4 input-bordered max-w-xs"
          />
        </div>
        <div>
          <label className="block capitalize mb-1" htmlFor="city">
            city*
          </label>
          <input
            type="text"
            placeholder="Type your city"
            name="city"
            defaultValue={user.city}
            required
            className="input w-[500px] mb-4 input-bordered max-w-xs"
          />
        </div>
        <div>
          <label className="block capitalize mb-1" htmlFor="contry">
            country*
          </label>
          <input
            type="text"
            placeholder="Type your country"
            name="country"
            defaultValue={user.country}
            required
            className="input w-[500px] mb-4 input-bordered max-w-xs"
          />
        </div>
        <div className="flex mb-4 items-center gap-8">
          <h2 className="text-2xl capitalize text-slate-400"> Status</h2>
          <div className="flex items-center">
            <input
              type="radio"
              value="Active"
              name="status"
              defaultChecked={user.status === "Active"}
              id="Active"
              className="radio me-2 radio-primary"
            />

            <label htmlFor="active">Active</label>
          </div>
           
          <div className="flex items-center">
            <input
              type="radio"
              id="Inactive"
              name="status"
              defaultChecked={user.status === "Inactive"}
              value="Inactive"
              className="radio me-2 radio-primary"
            />
              <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h2 className="text-2xl capitalize text-slate-400"> gander</h2>
          <div className="flex items-center">
            <input
              type="radio"
              value="male"
              name="gender"
              defaultChecked={user.gender === "male"}
              id="male"
              className="radio me-2 radio-primary"
            />

            <label htmlFor="male">Male</label>
          </div>
           
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              defaultChecked={user.gender === "female"}
              name="gender"
              value="female"
              className="radio me-2 radio-primary"
            />
              <label htmlFor="female">Female</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-xs my-6 w-[50%] sm:btn-sm hover:bg-green-500 bg-green-400 md:btn-md "
        >
          Add new user
        </button>
      </form>
      <div className="py5 h-6"></div>
    </div>
  );
};

export default UpdateUser;
