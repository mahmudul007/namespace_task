import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "./Table";

function Form() {
  const { register, handleSubmit } = useForm();
  const [getlinks, setGetlinks] = useState([]);

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8000/api/short", data)
      .then(function (response) {
        alert("submitted");
        console.log(response.data);
        window.location.reload();
      });
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/all")
      .then((resp) => {
        setGetlinks(resp.data.res);
        console.log(resp.data.res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="link" {...register("link")} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Table getlinks={getlinks}></Table>
    </>
  );
}

export default Form;
