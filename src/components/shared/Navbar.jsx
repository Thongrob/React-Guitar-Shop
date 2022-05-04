import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <NavLink to="/" className="navbar-brand">Music Zone</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">หน้าหลัก</NavLink>
                    
                </li>
                <li className="nav-item">
                    <NavLink to="/service" className="nav-link">รายการสินค้า</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">ติดต่อเรา</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">เข้าสู่ระบบ</NavLink>
                </li>
               
            </ul>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar;