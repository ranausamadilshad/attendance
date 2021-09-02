import React from 'react'
import './Login.css';

const LoginScreen = () => {
    return (
        <>
            <section class="create_department_section">
            <section class="create_department_form">
              <div class="create_department_container">
                <form>
                  <div class="create_department_form_fields">
                    <div class="input_field">
                      <label>
                        Email <span class="mandatory"> *</span>
                      </label>
                      {/* <FormikControl control="input" type="text" name="dName" /> */}
                      
                      <input type="text" placeholder="" required />
                    </div>
                    <div class="input_field">
                      <label>
                        Password <span class="mandatory"> * </span>
                      </label>
                      {/* <FormikControl
                        control="input"
                        type="number"
                        name="Phone"
                      /> */}
                      <input type="password" placeholder="" required />
                    </div>
                    <div class="submit_btn">
                      <button type="submit">Login</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </section> 
        </>
    )
}

export default LoginScreen
