function Navbar() {
  return (
    <>
      <div className="navbar1">
        <div className="navbar-left">
          <div>
            <img
              src="images/guilherme-vasconcelos-560064-unsplash (1).jpg"
              alt=""
            />
          </div>
          <div className="navbar-left-sub">
            <h5>
              Moh Sahel&nbsp; <span className="bi bi-check"></span>
            </h5>

            <p>
              <i className="bio bi-person-fill"></i>&nbsp; Lorem ipsum dolor sit
              amet. <span className="bi bi-house"></span>&nbsp;Kabul &nbsp;
              <span className="bi bi-map"></span>&nbsp;12/10/2024
            </p>
          </div>
        </div>
        <div className="navbar-left-btn">
          <button type="button">Follow</button>&nbsp;
          <i className="bi bi-three-dots"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
