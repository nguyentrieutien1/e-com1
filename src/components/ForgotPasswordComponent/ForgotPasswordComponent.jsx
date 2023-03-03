import React from "react"
import "./forgotPassword.scss"

const ForgotPasswordComponent = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="login_form">
                <div className="d-flex flex-column justify-content-lg-start login_title">
                  <p className="lead fw-bold fs-1 mb-0 me-3">
                    Forgot password?
                  </p>
                  <span className="text-secondary mb-3">
                    No worries, we'll send you reset instructions.
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

                <div className="text-center text-lg-start mt-4 pt-2 d-flex flex-column">
                  <button
                    type="button"
                    className="btn forgot_btn-reset mb-4 text-white"
                  >
                    Reset password
                  </button>
                  <button
                    type="button"
                    className="btn forgot_btn-back-login bg-white text-dark mb-5"
                  >
                    Back to login
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

export default ForgotPasswordComponent
