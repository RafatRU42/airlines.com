import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";
import SmallSpinner from "../Shared/Spinner/SmallSpinner";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider } from "firebase/auth";
import { Fade } from "react-awesome-reveal";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [createdEmail, setCreatedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // const googleProvider = new GoogleAuthProvider()

  const [token] = useToken(createdEmail);

  if (token) {
    navigate("/");
  }

  // const handleGoogleLogin = () =>{
  //   googleSignIn(googleProvider)
  //   .then(result =>{
  //     console.log('successfullly google sing in',result);
  //   })
  //   .catch(err =>{
  //     console.log('googleerr',err);
  //   })
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  const onSubmit = (data) => {
    setSignUpError("");
    setLoading(true);

    const email = data.email;
    const name = data.name;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        // setLoading(false);

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then((res) => {
            console.log(res);
            toast.success("You Successfully Register An Account");
            saveUser(name, email);
          })
          .catch((err) => {
            console.log("object", err);
          });
      })
      .catch((err) => {
        setLoading(false);
        setSignUpError(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(" https://airlines-server.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedEmail(email);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Airlines.com | Sign Up</title>
      </Helmet>
      <div className="flex items-center md:-my-12 my-0">
        <div className="w-full md:w-1/2">
          <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl shadow-xl">
            <h1 className="text-2xl font-bold text-center text-secondary">
              Sign Up
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Username</label>
                <input
                  {...register("name", { required: "Username is Required" })}
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="input input-bordered input-success w-full"
                />

                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Email</label>
                <input
                  {...register("email", { required: "Email is Required" })}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="input input-bordered input-success w-full"
                />

                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Password</label>
                <input
                  {...register("password", {
                    required: "Password Is Required",
                    minLength: {
                      value: 6,
                      message: "Password Must Be 6 Characters or Longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[0-9])/,
                      message: "Use Uppercase And Number",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="input input-bordered input-success w-full"
                />

                {errors.password && (
                  <span className="text-red-500">
                    {errors?.password?.message}
                  </span>
                )}

                <div className="flex justify-end text-xs dark:text-gray-400">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>

                <div>
                  {signUpError && <p className="text-red-500">{signUpError}</p>}
                </div>
              </div>
              <button className="btn btn-secondary w-full mt-5 text-white">
                {loading ? <SmallSpinner></SmallSpinner> : "Sign Up"}
              </button>
            </form>
            {/* <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleLogin}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div> */}
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Already Have an Account?
              <Link className="text-success font-bold" to={"/login"}>
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="w-1/2 h-1/2 hidden md:flex">
            <Fade direction="right">
          <img src="https://i.ibb.co/5v1YKSC/new-image.jpg" alt="" />

            </Fade>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
