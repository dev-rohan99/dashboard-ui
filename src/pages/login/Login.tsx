import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../assets/styles/login.scss";


const Login: React.FC = () => {

    const [hide, setHide] = useState(true);

    const handleHideAndShow = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setHide(!hide);
    }

    return (
        <>
        

        <div className="container-fluid mainElement d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row shadow-lg">
                        <div className="col-md-6 d-flex justify-content-center text-center align-items-center signupRight rounded-start">
                            <div className="padddddding px-3 w-100">
                                <h3>Login</h3>
                                <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
                                    <a href="#" className="loginWith">
                                        <FaFacebookF className="text-center" />
                                    </a>
                                    <a href="#" className="loginWith">
                                        <FaGoogle className="text-center" />
                                    </a>
                                    <a href="#" className="loginWith">
                                        <FaLinkedinIn className="text-center" />
                                    </a>
                                </div>
                                <p className="-mb-4">Or use you email for registration</p>

                                <form action="">
                                    <div className="mb-3 text-start">
                                        <input type="email" className="form-control py-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3 text-start position-relative">
                                        <input type={hide ? "password" : "text"} className="form-control py-2" id="password" placeholder="Password"/>
                                        <a onClick={handleHideAndShow} href="/" className="text-decoration-none position-absolute hidePass">{hide ? <FaRegEyeSlash className="h4" /> : <FaRegEye className="h4" />}</a>
                                    </div>

                                    <button className="buttonTwo" type="submit">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center text-center align-items-center signupLeft rounded-end">
                            <div className="py-5 px-3">
                                <h3>Hey hello,</h3>
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore rerum enim repellendus ratione fuga reprehenderit.</p>

                                <Link to={"/signup"} className="button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default Login;
