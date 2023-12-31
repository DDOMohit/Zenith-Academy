import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between "
        style={{ backgroundColor: "#7EC029", height: "60px" }}
      >
        {/* <div className="" style={{objectFit:"contain"}}>
          <img src="/logo_zenith.png" alt="" />
        </div> */}
        <img src="/Logo_Zenith.jpg" alt="" style={{ objectFit: "cover" }} />

        {/* <div className="" >
        
        </div> */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#7EC029", width: "400px" }}
        >
          <div>
            <button type="button" class="btn btn-danger ">
            Registration
          </button>
            </div>
            <div>
            <a 
              href="https://www.facebook.com/ZenithAcademyPvtLtd/"
              target=""
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-facebook fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
            </div>
          <div>
            <a
              href="https://www.youtube.com/@zenithacademysince95"
              target=""
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-youtube fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
          </div>
          <div style={{marginRight:"1rem"}}>
            <a
              href="https://www.instagram.com/zenithacademysince95/"
              target=""
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Header;
