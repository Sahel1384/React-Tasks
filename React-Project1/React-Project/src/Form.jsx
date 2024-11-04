function Form() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Profile</div>
              </div>
              <div className="card-body">
                <div className="form-div1">
                  <div>
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      placeholder="Moh Sahel"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label htmlFor=""></label>
                    <input
                      type="text"
                      placeholder="Yousufzoy"
                      className="form-control"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">User Image</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="card-btn">
                  <button type="button">Delete</button>
                </div>
                <div>
                  <label htmlFor="">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Web Developer"
                  />
                </div>
                <div>
                  <label htmlFor="">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kabul, Afg"
                  />
                </div>
                <div>
                  <label htmlFor="">Bio</label>
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="">Brief discription for your profile</label>
                </div>
                <div className="mt-3 mb-4">
                  <label htmlFor="">Birthday</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="card-btn">
                  <button type="button">Discard</button>
                  <button type="button" id="save">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Profile Setting</div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex gap-2 align-items-center">
                      <input type="radio" checked className="form-check" />
                      <label htmlFor="">Visible profile to everyone</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input type="radio" disabled className="form-check" />
                      <label htmlFor="">Disable adds</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Notifications</div>
                  </div>
                  <div className="card-body">
                    <label htmlFor="">
                      Choose type of notification you want to receive
                    </label>
                    <div>
                      <input type="checkbox" checked />
                      <label htmlFor="" className="ms-2">
                        Withdrwawal activity
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="" className="ms-2">
                        Weekly report
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" checked />
                      <label htmlFor="" className="ms-2">
                        Password change
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="" className="ms-2">
                        Data usage alert
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Deactive account</div>
                  </div>
                  <div className="card-body">
                    <label htmlFor="">Before you go...</label>
                    <ul>
                      <li>Take backup of your data</li>
                      <li>
                        Account deletion is final. There will be no way to
                        restore
                      </li>
                    </ul>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="" className="ms-2">
                        Yes, I&apos;d really want to delete my account
                      </label>
                    </div>
                    <div className="card-btn">
                      <button type="button" id="delete">
                        Delete account
                      </button>
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

export default Form;
