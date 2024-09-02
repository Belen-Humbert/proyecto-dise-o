import "./Styles/App.css";
import Pie from "./components/footer.jsx";

function App() {
  return (
    <>
      {/* Update 29.9.2015: <head></head> and <body></body> tags are included in this pen for quick copy/paste in case you to try this challenge offline */}
      <title>Infinito Web Design Studio</title>
      {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
      {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
      {/*[if lt IE 9]>
  
  
    <![endif]*/}
      {/* Navigation */}

      {/* Header */}
      <a name="home" />
      <div className="intro-header">
        <div className="bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>Infinito Web Design Studio</h1>
                  <h3>Where Awesomeness Is Brought To Life.</h3>
                  <hr className="intro-divider" />
                  <ul className="list-inline intro-social-buttons">
                    <li>
                      <a
                        href="https://twitter.com/Ferreir4Thiago"
                        target="_blank"
                        className="btn btn-default btn-lg"
                      >
                        <i className="fa fa-twitter fa-fw" />{" "}
                        <span className="network-name">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ThiagoFerreir4"
                        target="_blank"
                        className="btn btn-default btn-lg "
                      >
                        <i className="fa fa-github fa-fw" />{" "}
                        <span className="network-name">Github</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/thiagoferreir4"
                        target="_blank"
                        className="btn btn-default btn-lg"
                      >
                        <i className="fa fa-linkedin fa-fw" />{" "}
                        <span className="network-name">Linkedin</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.freecodecamp.com/thiagoferreira"
                        target="_blank"
                        className="btn btn-default btn-lg"
                      >
                        <i className="fa fa-free-code-camp fa-fw" />{" "}
                        <span className="network-name">freeCodeCamp</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* /.intro-header */}
      {/* Page Content */}
      <a name="about" />
      <div className="content-section-a">
        <div className="bg-overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="clearfix" />
                <h2 className="section-heading">Infinito Web Design Studio.</h2>
                <br />
                <p className="lead">
                  I'm a{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://www.freecodecamp.com/thiagoferreira"
                  >
                    self taught
                  </a>{" "}
                  web designer, developer, co-founder and entrepreneur based in
                  Finland.
                  <br />
                  I'm currently part of a small VR(Virtual Reality) development
                  team in an upcoming{" "}
                  <a
                    className="link"
                    target="_blank"
                    href="https://www.facebook.com/Virtual-Dawn-802163799892155/"
                  >
                    start-up called Virtual-Dawn
                  </a>
                  , developing awesome VR games. I'm also responsible for all of
                  my company's web development needs.
                  <br />
                  My passion is to use technology based solutions, to help solve
                  real world challenges.
                  <br />
                  Competences:
                  <br />
                  Languages and Frameworks:
                  <br />
                  Javascript, C#m HTML5, CSS3, jQuery, Bootstrap3, Angular.js,
                  Meteor.js.
                  <br />
                  Tools &amp; expertise:
                  <br />
                  Git, Responsive Web Design, Agile Methodologies, Unity5 3D,
                  Photoshop, VR Level Design, and Unity Generalist.
                </p>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                <img
                  className="img-circle img-responsive"
                  src="https://68.media.tumblr.com/ccd0e1b1bdb3492eecdac39b8d42d7ad/tumblr_nwh4pmSv8k1ud7rr3o1_400.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* Portfolio Grid Section */}
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Awesomeness Portfolio.</h2>
              <h3 id="below-section" className="section-subheading text-muted">
                Below you'll find some of my recent work.
              </h3>
            </div>
          </div>
          {/* Portfolio img1 */}
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/gpvJOK"
                target="_blank"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://68.media.tumblr.com/a4a06b925ad2ad936ba2ce6c3343c444/tumblr_nwh4epTtMV1ud7rr3o1_1280.jpg"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Twitch.tv API project</h4>
                <p id="small-text" className="text-muted">
                  Bootstrap and Angularjs
                </p>
              </div>
            </div>
            {/* End of Portfolio img1 */}
            {/* Portfolio img2 */}
            <div className="col-md-4 col-sm-6 portfolio-item portfolio2">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/vOyXre"
                className="portfolio-link"
                target="_blank"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://40.media.tumblr.com/a73e79ce9844761d7cdc93d202b5cea1/tumblr_nwh4iomduD1ud7rr3o1_1280.jpg"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Wikipedia Search Engine</h4>
                <p id="small-text" className="text-muted">
                  Bootstrap and jQuery
                </p>
              </div>
            </div>
            {/* End of Portfolio img2 */}
            {/* Portfolio img3 */}
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/QbKWGO"
                target="_blank"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://68.media.tumblr.com/5abea52ea28e9ea20ab995ebd23299a1/tumblr_nwh4iomduD1ud7rr3o2_1280.jpg"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Stainless Steel Calculator</h4>
                <p id="small-text" className="text-muted">
                  SCSS and Vanilla Javascript
                </p>
              </div>
            </div>
            {/* End of Portfolio img3 */}
            {/* Portfolio img4 */}
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/vOaRQz/"
                target="_blank"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://40.media.tumblr.com/7512ad23b7e68304a65182988b9c804a/tumblr_nwy76xfEXi1ud7rr3o1_1280.png"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Pomodoro Timer Zipline</h4>
                <p id="small-text" className="text-muted">
                  Bootstrap and Angular.js
                </p>
              </div>
            </div>
            {/* End of Portfolio img4 */}
            {/* Portfolio img5 */}
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/oXwKJV"
                target="_blank"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://68.media.tumblr.com/59b50efb8f7435fef9f87fd871b90d7a/tumblr_nxhm4k1jI81ud7rr3o1_1280.jpg"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Weather App</h4>
                <p id="small-text" className="text-muted">
                  Bootstrap and Vanilla Javascript
                </p>
              </div>
            </div>
            {/* End of Portfolio img5 */}
            {/* Portfolio img6 */}
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://codepen.io/ThiagoFerreir4/full/EjwGoX/"
                target="_blank"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-fire fa-3x" />
                  </div>
                </div>
                <img
                  src="https://68.media.tumblr.com/030b4966650a0d1dac0bbcca6fe572e8/tumblr_nxhm7qz6Y91ud7rr3o1_1280.jpg"
                  className="img-responsive"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Pacman Tic Tac Toe</h4>
                <p id="small-text" className="text-muted">
                  CSS and jQuery
                </p>
              </div>
            </div>
            {/* End of Portfolio img6 */}
          </div>
        </div>
      </section>
      <a name="contact" />
      <div className="banner">
        <div className="bg-overlay4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="connect">
                  Check out some of my latest work at{" "}
                  <a
                    className="link-footer"
                    target="_blank"
                    href="https://www.facebook.com/Virtual-Dawn-802163799892155/"
                  >
                    Virtual-Dawn's Facebook page.
                  </a>
                </h2>
              </div>
              <br />
              <div className="col-lg-6">
                <ul className="list-inline banner-social-buttons">
                  <li>
                    <a
                      href="https://twitter.com/Ferreir4Thiago"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-twitter fa-fw" />{" "}
                      <span className="network-name">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ThiagoFerreir4"
                      target="_blank"
                      className="btn btn-default btn-lg "
                    >
                      <i className="fa fa-github fa-fw" />{" "}
                      <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/thiagoferreir4"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-linkedin fa-fw" />{" "}
                      <span className="network-name">Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.com/thiagoferreira"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-free-code-camp fa-fw" />{" "}
                      <span className="network-name">freeCodeCamp</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.container */}
          </div>
        </div>
      </div>
      {/* /.banner */}
      {/* Footer */}
      <Pie />
      {/* */}
    </>
  );
}

export default App;
