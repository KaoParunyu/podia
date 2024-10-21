import "./NavBar.css"
function NavBar() {
  return (
    <section id="NavBar">
      <div className="bgnav">
        <div className="navtab">
            <div>Website</div>
            <div>Email</div>
            <div>Onile store</div>
            <div>switch to podia</div>
            <div>pricing</div>
        </div>
        <div className="ls">
          <div style={{paddingTop:"20px"}}>Login</div>
          <div className="su"> <button>Sign up free</button></div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
