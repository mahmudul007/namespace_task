import React from "react";

function Table({ getlinks }) {
  return (
    <>
      <h5>total:{getlinks.length}</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ShortLink</th>
            <th scope="col">link</th>
          </tr>
        </thead>
        {getlinks.map((data) => {
          return (
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>
                  <a href={data.link}> {data.shortlink}</a>{" "}
                </td>

                <td>{data.link}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Table;
