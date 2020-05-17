import React from "react"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div className="site-footer">
      <h4 className="text-center">Code Blog</h4>
      <p className="text-center">Follow us on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FontAwesomeIcon className="fa-2x" icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="google"
            >
              <FontAwesomeIcon className="fa-2x" icon={faGoogle} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
