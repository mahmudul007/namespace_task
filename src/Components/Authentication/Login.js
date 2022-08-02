import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then(function (response) {
        alert("registered");
        console.log(response.data);
        history.push("/");
        window.location.reload();
      });
  };
  return (
    <>
      <div>Login</div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="input-group-text form-control"
                placeholder="email"
                {...register("password")}
              />{" "}
              <input
                type="text"
                className="input-group-text form-control"
                placeholder="password"
                {...register("password")}
              />
              <button type="submit">login</button>
            </form>
          </div>
          <div className="col-4">
            <h5>Login form</h5>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
