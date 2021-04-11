import React, { useState } from "react"
import Footer from "../../Common/Footer/Footer"
import Header from "../../Common/Header/Header"
import { Auth } from 'aws-amplify';
import { useSelector, useDispatch } from "react-redux";
import { setloginValue, setUserData } from "../../Redux/Actions/auth";
import { useHistory, Link } from "react-router-dom";
const SignUp = () => {
  const loginVal = useSelector(({authReducer}) => authReducer.loginVal);
  const history = useHistory();
 
  const dispatch = useDispatch();
  async function signIn() {
    try {
        const user = await Auth.signIn(loginVal.username, loginVal.password);
       //  const user = await Auth.signIn("shamshir@greyskymedia.com", "12345678");

       dispatch(setUserData(user.attributes))
       history.push(`/`);
        console.log("userrrr",user.attributes);
        
    } catch (error) {
        console.log('error signing in', error);
    }
}
  const onValueChange=(typ,val)=>{
console.log("======",val.target.value);

    dispatch(setloginValue({value:val.target.value, name: typ}))
  }
  return (
    <div id="main-wrapper">
      <Header />
      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="property_block_wrap style-2 p-4">
                <h4 class="modal-header-title">Login</h4>
                <div class="login-form">
                  <form>
                    <div class="form-group">
                      <label>User Name</label>
                      <div class="input-with-icon">
                        <input
                        onChange={(val)=>onValueChange('username',val)}
                        value={loginVal.username}
                          type="text"
                          class="form-control"
                          placeholder="Username"
                        />
                        <i class="ti-user"></i>
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Password</label>
                      <div class="input-with-icon">
                        <input
                        onChange={(val)=>onValueChange('password',val)}
                        value={loginVal.password}
                          type="password"
                          class="form-control"
                          placeholder="*******"
                        />
                        <i class="ti-unlock"></i>
                      </div>
                    </div>

                    {/* <div class="form-group"> */}
                      <button
                      onClick={signIn}
                      type="button"
                         class="btn btn-md full-width btn-theme-light-2 rounded"
                      >
                        Login
                      </button>
                    {/* </div> */}
                  </form>
                  <p>don't have a account? <Link to={'/signup'} >SignUp</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SignUp
