import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        class="fixed-top"
        style={{
          backgroundColor: "#f2f2f2",
          paddingBottom: "1rem"
        }}
        >
        <ul style={{marginTop: '4px', marginBottom: '-8px'}}>
            <Link to="/" style={{margin: '1.5rem', fontWeight: 'bold', color: '#262626', fontSize: '30px', marginRight: '35%' }}>ThoGus</Link>
            <Link to="/invoices" style={{ marginBottom: '3rem' }}>Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link> |{" "}
            
            <li>
                <a>
                    <Link to="/welcome">Welcome</Link>
                </a>
            </li>
        </ul>
      </nav>

    </div>
  );
}