import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/signin-style.css";
import Photo from "../assets/images/17.jpg";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import AuthAPI from "../api/AuthAPI";

// const LogIn = () => {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>
//         <MDBCol sm="6">
//           <div className="d-flex flex-row ps-5 pt-5">
//             <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
//           </div>

//           <div className="d-flex flex-column justify-content-center h-custom-2 w-75 mt-5 pt-4">
//             <h3
//               className="fw-normal mb-3 ps-5 pb-3"
//               style={{ letterSpacing: "1px" }}
//             >
//               Log in
//             </h3>

//             <MDBInput
//               wrapperClass="mb-4 mx-5 w-100"
//               label="Email address"
//               id="formControlLg"
//               type="email"
//               size="lg"
//             />
//             <MDBInput
//               wrapperClass="mb-4 mx-5 w-100"
//               label="Password"
//               id="formControlLg"
//               type="password"
//               size="lg"
//             />

//             <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
//               Login
//             </MDBBtn>
//             <p className="ms-5">
//               Don't have an account?{" "}
//               <a href="/createaccount" className="link-info">
//                 Register here
//               </a>
//             </p>
//           </div>
//         </MDBCol>

//         <MDBCol sm="6" id="image" className="d-none d-sm-block px-0">
//           <img
//             src={Photo}
//             alt="Login image"
//             className="w-100"
//             style={{ objectFit: "cover", objectPosition: "left" }}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default LogIn;

export default function LogIn(props) {
  const { userList, onLogin } = props;
  const { setLoginId } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password, "4r");

    AuthAPI.login(email, password)
      .then((response) => {
        alert("Login success!");
        navigate("/adminuserpanel");
      })
      .catch(() => alert("Login failed!"))
      .catch((error) => console.error(error));
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 mt-5 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>
            <form className="login-form" method="">
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg 1"
                type="password"
                size="lg"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
                onClick={handleLogin}
              >
                Login
              </MDBBtn>
              <p className="ms-5">
                Don't have an account?{" "}
                <a href="/createaccount" className="link-info">
                  Register here
                </a>
              </p>
            </form>
          </div>
        </MDBCol>

        <MDBCol sm="6" id="image" className="d-none d-sm-block px-0">
          <img
            src={Photo}
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
