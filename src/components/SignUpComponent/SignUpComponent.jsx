import React from "react"
import "./signUp.scss"

const LoginComponent = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="login_form">
                <div className="d-flex flex-column justify-content-lg-start signUp_title">
                  <p className="lead fw-bold fs-1 mb-0 me-3">Sign Up</p>
                  <span className="text-secondary mb-3">
                    Please fill in this form to create an account!
                  </span>
                </div>

                <div className="d-flex justify-space-between">
                  <div className="form-outline signUp_form-input-name">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control form-control-lg signUp_form-input"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-outline">
                    <label
                      className="form-label fw-semibold"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control form-control-lg signUp_form-input"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="form-outline">
                  <label className="form-label fw-semibold" htmlFor="userName">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="form-control form-control-lg signUp_form-input"
                    placeholder="User Name"
                  />
                </div>

                <div className="form-outline">
                  <label className="form-label fw-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg signUp_form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-outline">
                  <label className="form-label fw-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg signUp_form-input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="form-outline">
                  <label
                    className="form-label fw-semibold"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control form-control-lg signUp_form-input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="text-center text-lg-start mt-2 pt-2 d-flex flex-column">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input me-2 signUp_form-checkbox"
                      type="checkbox"
                      value=""
                      id="checkbox"
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      I accept the
                    </label>
                    <a
                      href="#!"
                      className="text-body text-decoration-none fw-bold"
                    >
                      {" "}
                      Terms of Use{" "}
                    </a>
                    &
                    <a
                      href="#!"
                      className="text-body text-decoration-none fw-bold"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </div>

                  <button
                    type="button"
                    className="btn signUp_btn-login text-white"
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    className="btn signUp_btn-google bg-white text-dark mb-5"
                  >
                    Sign up with google
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                className="img-fluid login_image"
                alt="imageLogin"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/3d-casual-life-boy-with-suitcase-and-door-travel.png"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginComponent
