import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/signin-style.css";
import Photo from "../assets/images/11.jpg";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
// import { postUser } from "../api/UserApi";
import UserAPI from "../api/UserApi";
import { toast } from "react-hot-toast";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [isActive, setIsActive] = useState("");
  // const [role, setRole] = useState("");

  const [passwordMatch, setPasswordMatch] = useState(true); // Password match state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      repeatPassword: repeatPassword,
      role: "CUSTOMER",
      active: true,
    };

    // try {
    if (newUser.password === newUser.repeatPassword) {
      setPasswordMatch(true);

      UserAPI.postUser(newUser)
        .then(() => {
          toast.success("Account Created Successfuly!");
          navigate("/login");
        })
        .catch((error) => {
          if (
            error.response.status == 400
            //&&  error.response.data.errors[0].error == "EMAIL_ALREADY_IN_SYSTEM"
          ) {
            toast.error("The email you entered is already in our system.");
          } else {
            toast.error("The email you entered is already in our system.");
          }
        });
    } else {
      setPasswordMatch(false);
      toast.error("Passwords do not match!");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          {/* <form onSubmit={handleSubmit}> */}
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
          </div>
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 mt-5 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Create Account
            </h3>
            <MDBInput
              name="firstName"
              label="First Name"
              //placeholder="First Name"
              type="text"
              wrapperClass="mb-4 mx-5 w-100"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="firstName"
            />
            <MDBInput
              name="lastName"
              label="Last Name"
              type="text"
              wrapperClass="mb-4 mx-5 w-100"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="lastName"
            />
            <MDBInput
              name="email"
              label="Email Address"
              type="email"
              wrapperClass="mb-4 mx-5 w-100"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="email"
            />
            <MDBInput
              name="phoneNumber"
              label="Phone Number"
              type="number"
              wrapperClass="mb-4 mx-5 w-100"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="phoneNumber"
            />
            <MDBInput
              name="password"
              label="Password"
              type="password"
              wrapperClass="mb-4 mx-5 w-100"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="password"
            />
            <MDBInput
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              wrapperClass="mb-4 mx-5 w-100"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
              // onChange={handleInputChange}
              // id="formControlDefault"
              id="repeatPassword"
            />

            {/* Display a message if passwords do not match */}
            {!passwordMatch && (
              <p className="text-danger ms-5">Passwords do not match.</p>
            )}

            {/* <MDBBtn
              data-testid="create-account-button"
              onClick={handleSubmit}
              className="mb-4 px-5 mx-5 w-100"
              color="info"
              size="lg"
            >
              Create Account
            </MDBBtn> */}

            <button
              data-testid="create-account-button"
              onClick={handleSubmit}
              className="mb-4 px-5 mx-5 w-100 btn btn-info btn-lg" // Adjust class names as needed
            >
              Create Account
            </button>

            <p className="ms-5">
              Already have an account?{" "}
              <a href="/login" className="link-info">
                Login here
              </a>
            </p>
          </div>
          {/* </form> */}
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
// }
export default CreateAccount;
