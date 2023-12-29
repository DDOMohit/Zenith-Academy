import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className="row" style={{ backgroundColor: "#7EC029" }}>
        <div className="container row d-flex justify-content-between">
          <div><img src="/logo_zenith.png" alt="" /></div>

          <div>
            <button type="button" class="btn btn-danger">
              Registration
            </button>
          </div>

          <div >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-facebook fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-twitter fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-whatsapp fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
          </div>
        </div>
      </div> */}
      <div className="d-flex justify-content-between " style={{ backgroundColor: "#7EC029",height:"60px" }}>
        {/* <div className="" style={{objectFit:"contain"}}>
          <img src="/logo_zenith.png" alt="" />
        </div> */}
        <img src="/logo_zenith.png" alt=""  style={{objectFit:"cover" }}/>
       
        {/* <div className="" >
        
        </div> */}
        <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "#7EC029",width:"400px" }}>
            <div>
            <button type="button" class="btn btn-danger ">
            Registration
          </button>
            </div>
              <div>
              <a
              href="https://www.facebook.com/"
              target="_blank"
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
              href="https://twitter.com/"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-twitter fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
              </div>
              <div>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#165216" }}
              />
            </a>
              </div>
              <div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="text-decoration-none me-3"
            >
              <i
                className="fab fa-whatsapp fa-2x"
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
