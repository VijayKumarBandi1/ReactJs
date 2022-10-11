import { useState } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });//[e.target.name]:e.target.value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div className="container" >
      {isSubmit?<div className="ui message success"><h1>Login Success</h1><h1>{formValues.username}</h1></div>:null}
     
      <form onSubmit={handleSubmit} >
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form" >
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
         
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
