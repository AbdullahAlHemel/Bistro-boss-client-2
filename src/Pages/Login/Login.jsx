import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6); // initialize captcha
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    setDisabled(!validateCaptcha(user_captcha_value));
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFF9DB" }}>
        <div className="hero-content flex-col md:flex-row-reverse w-full max-w-5xl p-6">
          {/* Login Form Card */}
          <div className="card w-full max-w-sm shadow-2xl bg-white rounded-xl">
            <h1 className="text-4xl font-bold text-center mt-6">Login Now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>

              {/* Captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Submit */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary transition-all hover:scale-105"
                  disabled={disabled}
                >
                  Login
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <p className="text-center my-4 text-sm">
              New Here?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Create an Account
              </Link>
            </p>

            <div className="divider">OR</div>

            {/* Social Login */}
            <SocialLogin />
          </div>

          {/* Hero Info */}
          <div className="text-center md:text-left md:mr-10 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">
              Welcome Back to Bistro!
            </h2>
            <p className="text-gray-700">
              Login to access your account and explore our delicious menu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
