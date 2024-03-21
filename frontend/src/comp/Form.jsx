import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import getToken from "./getToken";
const Form = () => {
  const [user, setUser] = useState()

  let name = useRef();
  let price = useRef();
  let quantity = useRef();
  let expiry = useRef();

  let token = getToken();

  const [data, setdata] = useState([]);

  useEffect(() => {

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    axios.get("http://localhost:5000/api/user/getmedicine", config).then((res) => {
      setdata(res.data.medicine)
      setUser(res.data.user.data)
      // console.log(res.data.user.data)

    });
  }, []);


  const hendelSubmit = (e) => {
    e.preventDefault();

    let obj = {
      name: name.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      expiry: expiry.current.value,
    };


    axios
      .post("http://localhost:5000/api/user/addmedicine", obj)
      .then((res) => {
        setdata([...data, res.data.medicine]);
      });
  };

  return (
    <div>
      <h1>Wellcome Back : {user?.name}</h1>
      <form onSubmit={hendelSubmit}>
        <input type="text" name="name" ref={name} />
        <input type="number" name="price" ref={price} />
        <input type="number" name="quantity" ref={quantity} />
        <input type="date" name="expiry" ref={expiry} />
        <button type="submit">Submit</button>
      </form>
      <div className="d-flex flex-wrap">
        {data?.map((medicine, index) => {
          return (
            <div key={index}>
              <div className="card d-flex m-3" style={{ width: "18rem" }}>
                <img
                  src="https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg?width=900"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="card-title text-xs">Name: {medicine.name}</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5>Price:{medicine.price}</h5>
                  <h6>Quantity:{medicine.quantity}</h6>
                  <p>Expiry:{medicine.expiry}</p>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <h1></h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
