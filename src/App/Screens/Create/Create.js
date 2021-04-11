import React, { useState } from "react"
import Footer from "../../Common/Footer/Footer"
import Header from "../../Common/Header/Header"

const Create = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="property_block_wrap style-2 p-4">
                <h4 class="modal-header-title">Create Project</h4>
                <div class="login-form">
                  <form>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Location</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Minimum Fund Required</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Fund</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Start Date</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>End Date</label>
                      <input type="text" class="form-control" />
                    </div>

                    {/* <div class="form-group">
                      <label>Status</label>
                      <select class="form-control">
                        <option value="">Choose One</option>
                        <option value="">Fund Awaiting</option>
                      </select>
                    </div> */}
                    <div class="form-group">
                      <label>Portions</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Crops</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Description</label>
                      <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                      <label>Detailed Description</label>
                      <textarea class="form-control"></textarea>
                    </div>

                    {/* <div class="form-group"> */}
                    <button
                      type="button"
                      class="btn btn-md btn-theme-light-2 rounded"
                    >
                      Create
                    </button>
                    {/* </div> */}
                  </form>
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

export default Create
