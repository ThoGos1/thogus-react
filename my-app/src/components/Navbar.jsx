import { Link } from "react-router-dom";
import favlogo from '../images/favlogo.png';

export default function Navbar() {
  return (
    <div>
      <nav class="fixed-top navshade" style={{backgroundColor: 'white' }}>
        <ul>


          <Link to="/" style={{ float: 'left', margin: '20px', marginBottom: '7px', marginTop: '7px', marginRight: '20px'}}>
            <img src={favlogo} alt='navlogo' style={{ width: '45px'}}/>
          </Link>

            
          <div>
              <li>
                <a href="invoices">
                  <Link to="/invoices">Invoices</Link>
                </a>
              </li>

              <li>
                <a href="expenses">
                    <Link to="/expenses">Expenses</Link>
                </a>
              </li>

          </div>
        </ul>
      </nav>

    </div>
  );
}