import React, { Fragment } from "react"

const Achievements = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center mb-4">
                <h2>Achievement</h2>
                <p>
                  After a lot of effort and team work we, the FarmDigital team of farmers and investors, achieved the success.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <h4>7600+</h4>
                  <p>Active Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <h4>12300+</h4>
                  <p>Completed Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <h4>15200+</h4>
                  <p>Fund Raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </Fragment>
  )
}

export default Achievements
