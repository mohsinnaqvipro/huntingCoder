import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.warn(name, email, password, phone, country);

    const data = { name, email, password, phone, country };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.warn(`Success:` + data);
        alert("Submitted Success");
        setname("");
        setemail("");
        setpassword("");
        setphone("");
        setcountry("");
      })
      .catch((error) => {
        console.warn(`Error:` + error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "country") {
      setcountry(e.target.value);
    }
  };
  // <div className={styles.margin}>t</div>;
  return (
    <div className={styles.container}>
      {/* <h1>Contact Us</h1> */}

      <form onSubmit={handleSubmit} className={styles.margin}>
        <div className={styles.mb_3}>
          <label htmlFor="name">
            Name <br />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.mb_3}>
          <label htmlFor="exampleInputEmail1">
            Email address <br />{" "}
          </label>
          <input
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <div id="emailHelp" className={styles.mb_3}>
            Well never share your email with anyone else.
            <br />
            <br />
          </div>
        </div>
        <div className={styles.mb_3}>
          <label htmlFor="exampleInputPassword1">
            Password <br />
          </label>
          <input
            type="password"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.mb_3}>
          <label htmlFor="phone">
            Phone <br />{" "}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.mb_3}>
          <label htmlFor="country">
            Country <br />
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.flex}>
          <button
            type="submit"
            // onClick={() => {
            //   alert("Submitted Successfully");
            // }}
            className={styles.button}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
