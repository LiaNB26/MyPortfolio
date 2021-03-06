import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2017 Nordic Giant</li>
              <li>
                Design by{" "}
                <a
                  title="Styleshout"
                  href="http://www.styleshout.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>

        <div>
          Main Icon made by{" "}
          <a
            href="https://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noreferrer"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
