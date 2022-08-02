import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
function Register() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then(function (response) {
        alert("registered");
        console.log(response.data);
        history.push("/login");
        window.location.reload();
      });
  };
  return (
    <div>
      <div>
        <h4> Register</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="input-group-text form-control"
                placeholder="email"
                {...register("email")}
              />
              <input
                type="text"
                className="input-group-text form-control"
                placeholder="name"
                {...register("name")}
              />
              <input
                type="text"
                className="input-group-text form-control"
                placeholder="password"
                {...register("password")}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col-4">Register</div>
        </div>
      </div>
    </div>
  );
}

export default Register;
