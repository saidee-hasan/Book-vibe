import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              Book Vibe is your go-to platform for discovering and managing your favorite reads. Explore curated collections and connect with fellow readers!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/listed-books" className="hover:text-green-400">
                  Listed Books
                </a>
              </li>
              <li>
                <a href="/pages-to-read" className="hover:text-green-400">
                  Pages to Read
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span>Email: </span>
                <a href="mailto:support@bookvibe.com" className="hover:text-green-400">
                  support@bookvibe.com
                </a>
              </li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Book Street, Novel City</li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
