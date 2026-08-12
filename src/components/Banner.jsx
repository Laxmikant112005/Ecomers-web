import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import '../styles/Banner.css';
const Banner = () => {
  return (
    <main className="home">

      {/* ================= HERO BANNER ================= */}
      <section className="hero">

        {/* Left Content */}
        <div className="hero-content">

          <span className="hero-small-title">
            NEW COLLECTION 2026
          </span>

          <h1>
            Style That
            <span> Speaks </span>
            For You.
          </h1>

          <p>
            Discover premium fashion, timeless designs and
            everyday essentials curated just for you.
          </p>

          <div className="hero-buttons">

            <Link to="/collection" className="hero-primary-btn">
              Shop Collection
              <span>→</span>
            </Link>

            <Link to="/about" className="hero-secondary-btn">
              Explore More
            </Link>

          </div>

          {/* Small information */}
          <div className="hero-info">

            <div>
              <strong>500+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Customers</span>
            </div>

            <div>
              <strong>4.9</strong>
              <span>Rating</span>
            </div>

          </div>

        </div>


        {/* Right Visual */}
        <div className="hero-visual">

          {/* Decorative Circle */}
          <div className="hero-circle"></div>

          {/* Main Product Image */}
          <div className="hero-product">

            {assets.Jacket_1 ? (
              <img
                src={assets.Jacket_1}
                alt="Featured fashion"
              />
            ) : (
              <div className="product-placeholder">
                ECART
              </div>
            )}

          </div>


          {/* Discount Badge */}
          <div className="discount-badge">

            <span>UP TO</span>

            <strong>50%</strong>

            <span>OFF</span>

          </div>


          {/* Floating Card */}
          <div className="floating-card">

            <div className="floating-card-icon">
              ✦
            </div>

            <div>
              <strong>Premium</strong>
              <span>Quality Products</span>
            </div>

          </div>


          {/* Small Decorative Dot */}
          <div className="decorative-dot dot-one"></div>
          <div className="decorative-dot dot-two"></div>

        </div>

      </section>


      {/* ================= FEATURE STRIP ================= */}

      <section className="feature-strip">

        <div className="feature-item">
          <div className="feature-icon">✓</div>

          <div>
            <strong>Premium Quality</strong>
            <span>Carefully selected products</span>
          </div>
        </div>


        <div className="feature-item">
          <div className="feature-icon">↗</div>

          <div>
            <strong>Fast Delivery</strong>
            <span>Quick & secure shipping</span>
          </div>
        </div>


        <div className="feature-item">
          <div className="feature-icon">♢</div>

          <div>
            <strong>Secure Payment</strong>
            <span>100% protected checkout</span>
          </div>
        </div>


        <div className="feature-item">
          <div className="feature-icon">♡</div>

          <div>
            <strong>Customer Support</strong>
            <span>We're here for you</span>
          </div>
        </div>

      </section>

    </main>
  );
}

export default Banner