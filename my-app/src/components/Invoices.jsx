import {Helmet} from "react-helmet";
import ListBook from "./ListBook";

export default function Invoices() {
  

  
  return (
      <main style={{ padding: "1rem 0", marginLeft: '10px' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Invoices</title>
            </Helmet>
            
        
        <h3>Invoices</h3>

        <ListBook />

      </main>
    );
  }