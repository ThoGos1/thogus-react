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
        <Link to="/" style={{margin: '1.5rem', fontWeight: 'bold', color: '#262626', fontSize: '30px', marginRight: '35%', marginTop: '1rem'}}>ThoGus</Link>
        <Link to="/invoices" style={{ marginBottom: '3rem' }}>Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/welcome">Welcome</Link>
      </nav>

    </div>
  );
}