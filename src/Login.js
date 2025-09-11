import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";

const Login = () => {
  const [singInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!singInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  const handleClick = () => {
    setSignInForm(!singInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="background"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mt-50">
        <form
          className="z-10 p-12 bg-black bg-opacity-80 w-3/12 min-h-[600px] rounded-lg shadow-lg flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="text-white font-bold text-3xl p-3 mb-10">
            {" "}
            {singInForm ? "Sign In" : "Sign Up"}{" "}
          </div>
          {!singInForm && (
            <input
              type="text"
              placeholder="Username"
              className="p-3 mb-4 w-full rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 w-full rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full rounded"
          />
          <div className="p-3 text-red-500 font-size">{errorMessage}</div>
          <button
            className="p-3 bg-red-500 rounded-lg text-white font-semibold w-full"
            onClick={handleButtonClick}
          >
            {singInForm ? "Sign In" : "SignUp"}
          </button>
          <div
            className="p-4 m-4 text-white cursor-pointer"
            onClick={handleClick}
          >
            {" "}
            {singInForm
              ? "New to MovieStream? Sign Up now"
              : "Already Registered? Sign In now"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
