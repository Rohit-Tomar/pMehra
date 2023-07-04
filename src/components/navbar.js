import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function Navbar() {
  return (
    <Nav variant="pills" defaultActiveKey="/activity">
      <div
        style={{
          display: "flex",
          margin: "auto",
          fontSize: "12px",
          width: "70%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <Nav.Item>
            <Nav.Link href="/help" style={{ color: "white" }}>
              {" "}
              <i className="bi bi-paypal"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/home" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/finances" style={{ color: "white" }}>
              Finances
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/send_request" style={{ color: "white" }}>
              Send and Request
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/deals" style={{ color: "white" }}>
              Deals
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/wallet" style={{ color: "white" }}>
              Wallet
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/activity" style={{ color: "white" }}>
              Activity
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/help" style={{ color: "white" }}>
              Help
            </Nav.Link>
          </Nav.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Nav.Item>
            <Nav.Link href="/help" style={{ color: "white" }}>
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/help" style={{ color: "white" }}>
              <i className="bi bi-gear-fill"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/help" style={{ color: "white" }}>
              LOGOUT
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
