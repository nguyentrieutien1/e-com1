import React from "react"
import "./login.scss"

const LoginComponent = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="login_form">
                <div className="d-flex flex-column justify-content-lg-start login_title">
                  <p className="lead fw-bold fs-1 mb-0 me-3">Welcome back</p>
                  <span className="text-secondary mb-3">
                    Welcome back! Please enter your details.
                  </span>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label fw-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg login_form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label fw-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg login_form-input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="checkbox"
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      Remember for 30 days
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-body text-decoration-none fw-bold"
                  >
                    Forgot password
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 d-flex flex-column">
                  <button
                    type="button"
                    className="btn login_btn-login mb-4 text-white"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="btn login_btn-google bg-white text-dark mb-5"
                  >
                    Sign in with google
                  </button>
                  <p className="small text-secondary mt-2 pt-1 mb-0 text-center">
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      className="fw-bold text-dark text-decoration-none"
                    >
                      Sign up for free
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                className="img-fluid"
                alt="imageLogin"
                src="../../../public/assets/images/3d-casual-life-boy-with-suitcase-and-door-travel.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginComponent
