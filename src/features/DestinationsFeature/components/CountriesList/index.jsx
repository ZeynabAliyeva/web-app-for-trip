import { Link } from "react-router-dom";
import "./style.css"
function CountriesList() {
  return (
    <div className="countries-list_wrapper">
      <div className="country-wrapper">
        <h1>Europe</h1>
        <ul className="country-list">
          <li><Link>Azores</Link></li>
          <li><Link>Croatia</Link></li>
          <li><Link>Georgia</Link></li>
          <li><Link>Germany</Link></li>
          <li><Link>Greece</Link></li>
          <li><Link>Iceland</Link></li>
          <li><Link>Ireland</Link></li>
          <li><Link to="/destinationsDetail">Italy</Link></li>
          <li><Link>Portugal</Link></li>
          <li><Link>Scotland</Link></li>
          <li><Link>Spain</Link></li>
          <li><Link>United Kingdom</Link></li>
        </ul>
      </div>
      <div className="country-wrapper">
        <h1>Asia</h1>
        <ul className="country-list">
          <li><Link>Cambodia</Link></li>
          <li><Link>China</Link></li>
          <li><Link>India</Link></li>
          <li><Link>Indonesia</Link></li>
          <li><Link>Japan</Link></li>
          <li><Link>Jordan</Link></li>
          <li><Link>South Korea</Link></li>
          <li><Link>Sri Lanka</Link></li>
          <li><Link>Taiwan</Link></li>
          <li><Link>Thailand</Link></li>
          <li><Link>Turkey</Link></li>
          <li><Link>Vietnam</Link></li>
        </ul>
      </div>
      <div className="country-wrapper">
        <h1>Africa</h1>
        <ul className="country-list">
          <li><Link>Egypt</Link></li>
          <li><Link>Ethiopia</Link></li>
          <li><Link>Kenya</Link></li>
          <li><Link>Ghana</Link></li>
          <li><Link>Madagascar</Link></li>
          <li><Link>Mauritius</Link></li>
          <li><Link>Morocco</Link></li>
          <li><Link>Namibia</Link></li>
          <li><Link>Rwanda</Link></li>
          <li><Link>South Africa</Link></li>
          <li><Link>Uganda</Link></li>
          <li><Link>Tanzania & Zanzibar</Link></li>
        </ul>
      </div>
      <div className="country-wrapper">
        <h1>C/America</h1>
        <ul className="country-list">
          <li><Link>BeLinkze</Link></li>
          <li><Link>Costa Rica</Link></li>
          <li><Link>Cuba</Link></li>
          <li><Link>Dominican RepubLinkc</Link></li>
          <li><Link>Guatemala</Link></li>
          <li><Link>Honduras</Link></li>
          <li><Link>Jamaica</Link></li>
          <li><Link>Nicaragua</Link></li>
          <li><Link>Mexico</Link></li>
          <li><Link>Panama</Link></li>
          <li><Link>Puerto Rico</Link></li>
          <li><Link>Trinidad and Tobago</Link></li>
        </ul>
      </div>
      <div className="country-wrapper">
        <h1>S/America</h1>
        <ul className="country-list">
          <li><Link>Argentina</Link></li>
          <li><Link>BoLinkvia</Link></li>
          <li><Link>Brazil</Link></li>
          <li><Link>Chile</Link></li>
          <li><Link>Colombia</Link></li>
          <li><Link>Ecuador</Link></li>
          <li><Link>Peru</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CountriesList