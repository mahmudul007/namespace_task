import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";

function Form() {
  // const { register, handleSubmit } = useForm();

  const [getlinks, setGetlinks] = useState([]);
  const [data, setData] = useState([]);
  // const onSubmit = async (data, e) => {
  //   await axios
  //     .post("http://localhost:8000/api/short", data)
  //     .then(function (response) {
  //       alert("submitted");
  //       console.log(response.data);
  //     });
  //   e.preventDefault();
  // };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...data };
    newData[field] = value;

    setData(newData);
    console.log(newData);
  };
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/api/short", data)
      .then(function (response) {
        alert("submitted");
        setData(response.data);
        e.target.reset();
      });
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all")
      .then((resp) => {
        setGetlinks(resp.data.res);
        console.log(resp.data.res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="link"
            name="link"
            onChange={handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Table getlinks={getlinks}></Table>
    </>
  );
}

export default Form;
