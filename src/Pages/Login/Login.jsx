import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = event => {
        event.preventDefault(); 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace: true});
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
                setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    return (<>
        <Helmet>
                    <title>Bistro || SignUp</title>
        </Helmet>

        <div>
         <div className="hero min-h-screen ">
            <div className="hero-content md:flex">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                          <LoadCanvasTemplate />
                    </label>
                    <input  onBlur  ={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the Text Above" className="input input-bordered" />
                    </div> 

                    <div className="form-control mt-6">
                    <input type="submit" value='Login' className='btn btn-primary' disabled={disabled}/>
                    </div>
                </form>
                <p className='text-center my-2 mt-[-10px]'><small>New Here? <Link to='/signup' className='text-blue-600 text-[16px]'>Create a Account</Link> </small></p>
                <div className='divider mt-[-10px] '></div>
                <SocialLogin></SocialLogin>
                </div>
            </div>
           
             </div>
            
        </div>
        </>
    );
};

export default Login;