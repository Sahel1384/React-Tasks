function Personal() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="colmd-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Personal information</div>
                  </div>
                  <div className="card-body">
                    <div>
                      <label htmlFor="">Skype</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="How to use it"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="pbsyousufzoydreaminghigh@gmail.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dehbore, Kabul, Afghanistan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Update Password</div>
                  </div>
                  <div className="card-body">
                    <div>
                      <label htmlFor="">Current password</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control mt-4"
                        placeholder="Enter New Password"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Confirm New Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter New Password"
                      />
                    </div>
                    <div className="card-btn">
                      <button type="button" id="save">
                        Change password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Linked account</div>
              </div>
              <div className="card-body">
                <div className="google">
                  <div>
                    <span className="bi bi-google"></span>
                  </div>
                  <div>
                    <h6>Google Account</h6>
                    <p>You are successfully connected to your Google Account</p>
                    <div className="card-btn">
                      <button type="button" id="delete">
                        Google
                      </button>
                      <button type="button">Learn More</button>
                    </div>
                  </div>
                </div>

                <div className="facebook mt-3">
                  <div>
                    <span className="bi bi-facebook"></span>
                  </div>
                  <div>
                    <h6>Facebook Account</h6>
                    <p>You are successfully connected to your Google Account</p>
                    <div className="card-btn">
                      <button type="button" id="save">
                        Facebook
                      </button>
                      <button type="button">Learn More</button>
                    </div>
                  </div>
                </div>

                <div className="instagram mt-3">
                  <div>
                    <span className="bi bi-instagram"></span>
                  </div>
                  <div>
                    <h6>instagram Account</h6>
                    <p>You are successfully connected to your Google Account</p>
                    <div className="card-btn">
                      <button type="button" id="save">
                        Facebook
                      </button>
                      <button type="button">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;
