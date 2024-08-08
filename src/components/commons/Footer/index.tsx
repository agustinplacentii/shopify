import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your E-commerce Website. All Rights Reserved.
        </p>
        <ul className="social-links">
          {/* Add social media links here */}
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          {/* Add links for other social media platforms as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer