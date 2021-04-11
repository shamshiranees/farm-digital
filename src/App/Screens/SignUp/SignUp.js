import React, { useState } from "react";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSignupValue } from "../../Redux/Actions/auth";
const SignUp = () => {
  const signUpVal = useSelector(({ authReducer }) => authReducer.signUpVal);
  const history = useHistory();
  const [level, setlevel] = useState("signUp");
  const dispatch = useDispatch();

  async function signUp() {
    const {
      username,
      password,
      email,
      phone_number,
      fullName,
      type,
    } = signUpVal;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
      });
      setlevel("sss");
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  async function confirmSignUp() {
    const { username, code } = signUpVal;

    try {
      await Auth.confirmSignUp(username, code);
      history.push(`/home`);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
  const onValueChange = (typ, val) => {
    dispatch(setSignupValue({ value: val.target.value, name: typ }));
  };
  return (
    <div id="main-wrapper">
      <Header />
      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="property_block_wrap style-2 p-4">
                <h4 class="modal-header-title">Sign Up</h4>
                <div class="login-form">
                  {level === "signUp" ? (
                    <form>
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <input
                                type="text"
                                class="form-control"
                                onChange={(val) =>
                                  onValueChange("fullName", val)
                                }
                                value={signUpVal.fullName}
                                placeholder="Full Name"
                              />
                              <i class="ti-user"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <input
                                type="email"
                                onChange={(val) => onValueChange("email", val)}
                                value={signUpVal.email}
                                class="form-control"
                                placeholder="Email"
                              />
                              <i class="ti-email"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <input
                                onChange={(val) =>
                                  onValueChange("username", val)
                                }
                                value={signUpVal.username}
                                type="text"
                                class="form-control"
                                placeholder="Username"
                              />
                              <i class="ti-user"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <input
                                type="password"
                                onChange={(val) =>
                                  onValueChange("password", val)
                                }
                                value={signUpVal.password}
                                class="form-control"
                                placeholder="*******"
                              />
                              <i class="ti-unlock"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <input
                                onChange={(val) => onValueChange("mobile", val)}
                                value={signUpVal.mobile}
                                class="form-control"
                                placeholder="123 546 5847"
                              />
                              <i class="lni-phone-handset"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <div class="input-with-icon">
                              <select
                                class="form-control"
                                onChange={(val) => onValueChange("type", val)}
                                value={signUpVal.type}
                              >
                                <option>Investor</option>

                                <option>Farmer</option>
                                
                              </select>
                              <i class="ti-briefcase"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          type="button"
                          onClick={signUp}
                          class="btn btn-md full-width btn-theme-light-2 rounded"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form>
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <input
                              type="email"
                              disabled
                              value={signUpVal.email}
                              class="form-control"
                              placeholder="Email"
                            />
                            <i class="ti-email"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <input
                              onChange={(val) => onValueChange("code", val)}
                              value={signUpVal.code}
                              type="text"
                              class="form-control"
                              placeholder="Code"
                            />
                            <i class="ti-user"></i>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          type="button"
                          onClick={confirmSignUp}
                          class="btn btn-md full-width btn-theme-light-2 rounded"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
