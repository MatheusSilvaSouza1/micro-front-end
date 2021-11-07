import * as singleSpa from "single-spa";

function Nav() {
  return (
    <div
      style={{
        border: "2px solid red",
        textAlign: "center",
      }}
    >
      <h1>Nav</h1>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <button onClick={() => singleSpa.navigateToUrl("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => singleSpa.navigateToUrl("/app1")}>App1</button>
        </li>
        <li>
          <button onClick={() => singleSpa.navigateToUrl("/app2")}>App2</button>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
