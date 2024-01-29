// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     repeatPassword: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleRegistration = async () => {
//     // Validate form fields before submitting
//     if (!formData.name.trim()) {
//       alert('Please enter your name');
//       return;
//     }

//     if (!formData.email.trim()) {
//       alert('Please enter your email');
//       return;
//     }

//     if (!validateEmail(formData.email)) {
//       alert('Please enter a valid email address');
//       return;
//     }

//     if (!formData.password.trim()) {
//       alert('Please enter your password');
//       return;
//     }

//     if (formData.password.length < 8) {
//       alert('Password must be 8 characters or longer');
//       return;
//     }

//     if (formData.password !== formData.repeatPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     try {
//       // Post data to JSON Server
//       const response = await axios.post('http://localhost:3001/users', formData);
//       console.log(response.data);

//       // Handle success, e.g., redirect to login page or show a success message

//       // Clear form inputs
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         repeatPassword: '',
//       });
//     } catch (error) {
//       console.error('Registration failed', error.response.data);
//       // Handle error, show an error message, etc.
//     }
//     alert("Registered Successfully!")
//     // Redirect to Login page
//     navigate('/login');
//   };

//   return (
//     <div>
//       <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
//         <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//           <div className="container h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                 <div className="card" style={{borderRadius: '15px'}}>
//                   <div className="card-body p-5">
//                     <h2 className="text-uppercase text-center mb-5">Create an account</h2>

//                     <form>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="text"
//                           id="name"
//                           className="form-control form-control-lg"
//                           onChange={handleInputChange}
//                           value={formData.name}
//                         />
//                         <label className="form-label" htmlFor="name">Your Name</label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           id="email"
//                           className="form-control form-control-lg"
//                           onChange={handleInputChange}
//                           value={formData.email}
//                         />
//                         <label className="form-label" htmlFor="email">Your Email</label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           id="password"
//                           className="form-control form-control-lg"
//                           onChange={handleInputChange}
//                           value={formData.password}
//                         />
//                         <label className="form-label" htmlFor="password">Password</label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           id="repeatPassword"
//                           className="form-control form-control-lg"
//                           onChange={handleInputChange}
//                           value={formData.repeatPassword}
//                         />
//                         <label className="form-label" htmlFor="repeatPassword">Repeat your password</label>
//                       </div>

//                       <div className="d-flex justify-content-center">
//                         <button
//                           type="button"
//                           className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
//                           onClick={handleRegistration}
//                         >
//                           Register
//                         </button>
//                       </div>

//                       <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignUp;



import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegistration = async () => {
    // Validate form fields before submitting
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!formData.password.trim()) {
      alert('Please enter your password');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be 8 characters or longer');
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Post data to JSON Server
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log(response.data);

      // Handle success, e.g., redirect to login page or show a success message

      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      });

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.response.data);
      // Handle error, show an error message, etc.
    }
    alert("Registered Successfully!");
  };

  return (
    <div>
    <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

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
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                      <label className="form-label" htmlFor="email">Your Email</label>
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

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="repeatPassword"
                        className="form-control form-control-lg"
                        onChange={handleInputChange}
                        value={formData.repeatPassword}
                      />
                      <label className="form-label" htmlFor="repeatPassword">Repeat your password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleRegistration}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default SignUp;
