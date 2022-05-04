function Footer() {
    return (
      <section className="footer mt-3">
        <div className="container">
          <footer className="py-5">
            {/* <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5>Menu 1</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Home</li>
                  <li className="nav-item mb-2">Features</li>
                  <li className="nav-item mb-2">Pricing</li>
                  <li className="nav-item mb-2">FAQs</li>
                  <li className="nav-item mb-2">About</li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Menu 2</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Home</li>
                  <li className="nav-item mb-2">Features</li>
                  <li className="nav-item mb-2">Pricing</li>
                  <li className="nav-item mb-2">FAQs</li>
                  <li className="nav-item mb-2">About</li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Menu 3</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Home</li>
                  <li className="nav-item mb-2">Features</li>
                  <li className="nav-item mb-2">Pricing</li>
                  <li className="nav-item mb-2">FAQs</li>
                  <li className="nav-item mb-2">About</li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Menu 4</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">Home</li>
                  <li className="nav-item mb-2">Features</li>
                  <li className="nav-item mb-2">Pricing</li>
                  <li className="nav-item mb-2">FAQs</li>
                  <li className="nav-item mb-2">About</li>
                </ul>
              </div>
              <div className="col-md-4">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div> */}
            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p> © 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></li>
                <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></li>
                <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></li>
              </ul>
  
            </div>
          </footer>
        </div>
      </section>
    );
  }
  
  export default Footer;