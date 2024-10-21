import "./content.css";
import { Link } from "react-router-dom";
function Content() {
  return (
    <section>
      <div >
        <div className="containerheader">
          <div className="title">
            <div className="header">
              <h1>An online store that makes selling easy</h1>
            </div>
            <div className="header1">
              Sell anything from your Podia store. Upload your content and leave
              the hosting, checkout, and delivery to us.
            </div>
            <div className="b">
            <button> <Link to="/s">      Get your free online store</Link></button>
            </div>
          </div>
          <div>
            <img src="//images.ctfassets.net/svo3kge9wizu/2ZYnqDrtFL75TCx8wx0VG4/626ef0a9695d406b54c38fc6a0d3832f/online-store-hero.svg?" alt=""  />
          </div>
          <div className="oval">
          <svg viewBox="0 0 1900 190" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 147.245C243.686 56.2419 579.592 0 950.494 0C1320.89 0 1656.39 56.0901 1900 146.877V190H0V147.245Z" fill="white"/></svg>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
