import Swal from "sweetalert2";

const AddUser = () => {
  const hangleInsertUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const city = form.city.value;
    const country = form.country.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const user = { name, email, city, country, gender, status };

    fetch("http://localhost:5300/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Usser Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="w-full">
      <form
        onSubmit={hangleInsertUser}
        className="rounded-lg shadow-lg bg-white border-2 flex flex-col items-center my-20 py-4 w-[50%] mx-auto"
      >
        <div className="py-10 text-center">
          <h1 className="text-3xl font-semibold">New User</h1>
          <p className="text-slate-400">
            use the bellow form to create a new account
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
              id="Active"
              className="radio me-2 radio-primary"
            />

            <label for="active">Active</label>
          </div>
           
          <div className="flex items-center">
            <input
              type="radio"
              id="Inactive"
              name="status"
              value="Inactive"
              className="radio me-2 radio-primary"
            />
              <label for="inactive">Inactive</label>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h2 className="text-2xl capitalize text-slate-400"> gander</h2>
          <div className="flex items-center">
            <input
              type="radio"
              value="male"
              name="gender"
              id="male"
              className="radio me-2 radio-primary"
            />

            <label for="male">Male</label>
          </div>
           
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="radio me-2 radio-primary"
            />
              <label for="female">Female</label>
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

export default AddUser;
