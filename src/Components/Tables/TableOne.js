import React, {useEffect} from "react";

const TableOne = () => {

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("http://localhost:8080/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    };
    datafetch();
  }, []);

    return(

        <div>
        <h1>Table one</h1>
          <table class="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">first</th>
              <th scope="col">second</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>fjklsa</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          </table>
      </div>
      
    )
}

export default TableOne