import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-left">
          <img src="/icons8-nike-48.png" alt="nike" />
          <h1 className="logo">Nike</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">AboutUs</a></li>
          <li><a href="#">ContactUs</a></li>
        </ul>
      </nav>
      <div className="left-section">
        <h6>Our Summer Collection</h6>
        <h1><span className="item">The New Arrival</span><span className="logo">Nike</span>Shoes</h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <button>
          Shop Now <FontAwesomeIcon icon={faArrowRight} />
        </button>
        
        <div className="rate">
          <div className="rating">
          <span>1K+</span>
          <p>Brands</p>
          </div>
          <div className="rating">
          <span>500+</span>
          <p>Shops</p>
        </div>
        <div className="rating">
          <span>250K+</span>
          <p>Customers</p>
        </div>
        </div>
      </div>
      <div className="right-section">
        <img className="selected" src="/shoes1.png" alt="" />

        <div className="menu">
          <img className="select" src="/shoes1.png" alt="" />
          <img src="/shoes2.png" alt="" />
          <img src="/shoes3.png" alt="" />
        </div>
      </div>
    </div>
  );
}