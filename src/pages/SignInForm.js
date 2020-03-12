// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// const SignInForm = ({toggle, loggedIn, setLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   handleSubmit(e) {
//         e.preventDefault()
//         axios({
//           method: "post"
//           url: "",
//           data: {
//             email: email,
//             password: password
//           }
//         })
//         .then(response => {
//           if(response.status === 201) {
//             toast.success(
//               `Successfully Login`,
//               toastSettings
//             );
//     //Insert JWT here
//             setLoggedIn(True)
//           }
//         })
// }



//     handleEmail = e=> {
//       const user = e.target.value;
//       setEmail(user);
//       console.log(email);
//     };

//     handlePassword = e=> {
//       const user1 = e.target.value;
//       setPassword(user1);
//       console.log(password);
//     };

    

//     render() {
//         return (
//         <div className="FormCenter">
//             <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
//             <div className="FormField">
//                 <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="password">Password</label>
//                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                   <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }


// export default SignInForm;