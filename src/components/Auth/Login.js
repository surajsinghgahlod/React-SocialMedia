import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      // Fetch user data from JSON Server based on the entered name
      const response = await axios.get(`http://localhost:3001/users?name=${formData.name}`);
      const user = response.data[0]; // Assuming that there is only one user with a unique name

      if (user && user.password === formData.password) {
        alert('Successfully Login');
        // Redirect to Home page
        navigate('/home');
      } else if (!user) {
        alert('Enter correct name');
      } else {
        alert('Enter correct password');
      }
    } catch (error) {
      console.error('Login failed', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Log in to Account</h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                      <label className="form-label" htmlFor="name">Your Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        onChange={handleInputChange}
                        value={formData.password}
                      />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/signup" className="fw-bold text-body"><u>SignUp here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
