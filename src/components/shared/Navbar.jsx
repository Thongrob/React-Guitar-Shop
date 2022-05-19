import { NavLink} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { getUser, logout } from "../../services/authorize";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Music Zone <i className="bi bi-file-music-fill"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                หน้าหลัก
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                รายการสินค้า
              </NavLink>
            </li>
            <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        จัดการรายการGU
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="/insert">เพิ่มรายการ</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/delete">แก้ไขรายการ</NavLink></li>
                    </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                ติดต่อเรา
              </NavLink>
            </li>
            
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link">
                เข้าสู่ระบบ
              </Link>
            </li> */}
            
            {/* {getUser() && (
              <li className="nav-item">
                <button className="nav-link" onClick={()=>logout(()=>history.push("/"))}>ออกจากระบบ</button>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
