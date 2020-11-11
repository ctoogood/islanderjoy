/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer
      className="uk-text-center uk-margin-large uk-background-none uk-width-1-1"
      style={{ marginTop: "15rem" }}
    >
      <hr />

      <div className="uk-child-width-expand@s" data-uk-grid>
        <div>
          <h2 className="uk-text-bold uk-text-muted">Islander Joy</h2>
        </div>
        <ul className="uk-list uk-flex-last@s">
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Printing</li>
          </Link>
          <Link>
            <li>Delivery</li>
          </Link>
        </ul>
        <div>
          {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/islanderjoy/"
        className="uk-icon-button uk-margin-small-right"
        uk-icon="facebook"
      ></a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/islanderjoy/"
            className="uk-icon-button uk-margin-small-right"
            uk-icon="instagram"
          ></a>
          <div>
            <button
              data-uk-toggle="target: #contactForm"
              type="button"
              className="uk-button uk-button-secondary uk-margin-top uk-margin-bottom"
            >
              Contact
            </button>
            <div id="contactForm" data-uk-modal>
              <div className="uk-modal-dialog">
                <button
                  className="uk-modal-close-default"
                  type="button"
                  data-uk-close
                ></button>
                <div className="uk-modal-header">
                  <h2 className="uk-modal-title uk-text-bold uk-text-primary">
                    Get in Touch
                  </h2>
                </div>
                <div className="uk-modal-body">
                  <form>
                    <fieldset class="uk-fieldset">
                      <div class="uk-margin">
                        <input
                          class="uk-input"
                          type="email"
                          placeholder="Your Email Address"
                        />
                      </div>
                      <div class="uk-margin">
                        <textarea
                          class="uk-textarea"
                          rows="5"
                          placeholder="Enter Your Message Here..."
                        ></textarea>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="uk-modal-footer uk-text-right">
                  <button
                    className="uk-button uk-button-default uk-modal-close"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="uk-button uk-button-primary uk-margin-left"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
