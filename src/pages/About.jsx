import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="about-hero">

        <div className="about-hero-content">
          <span className="about-label">OUR STORY</span>

          <h1>
            Designed for
            <span> Everyday Confidence.</span>
          </h1>

          <p>
            We believe great fashion is more than what you wear.
            It is how you express yourself, how you move through
            the world, and how you feel when you do it.
          </p>

          <Link to="/collection" className="about-hero-button">
            Explore Collection
            <span>→</span>
          </Link>
        </div>

        <div className="about-hero-image">
          <img
            src={assets.Jacket_1}
            alt="Fashion collection"
          />

          <div className="about-floating-card">
            <span>EST.</span>
            <strong>2024</strong>
            <small>Modern Fashion</small>
          </div>
        </div>

      </section>


      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="about-intro">

        <div className="about-section-heading">
          <span>WHO WE ARE</span>
          <h2>
            Fashion that feels
            <br />
            <strong>personal.</strong>
          </h2>
        </div>

        <div className="about-intro-content">
          <p>
            We are an independent fashion brand focused on creating
            timeless pieces for modern lifestyles. Our collections
            combine clean design, comfortable materials, and
            thoughtful details to create clothing that works beyond
            a single season.
          </p>

          <p>
            From everyday essentials to statement pieces, every item
            is designed with one simple idea in mind — fashion should
            make you feel confident without making you feel
            uncomfortable.
          </p>
        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="about-stats">

        <div className="about-stat">
          <strong>50+</strong>
          <span>Unique Styles</span>
        </div>

        <div className="about-stat">
          <strong>10K+</strong>
          <span>Happy Customers</span>
        </div>

        <div className="about-stat">
          <strong>25+</strong>
          <span>Collections</span>
        </div>

        <div className="about-stat">
          <strong>100%</strong>
          <span>Quality Focused</span>
        </div>

      </section>


      {/* =========================================
          PHILOSOPHY
      ========================================= */}

      <section className="about-philosophy">

        <div className="about-philosophy-image">
          <img
            src={assets.Shirt_1}
            alt="Our fashion philosophy"
          />
        </div>

        <div className="about-philosophy-content">

          <span className="about-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Less noise.
            <br />
            <span>More expression.</span>
          </h2>

          <p>
            Modern fashion doesn't need to be complicated.
            We focus on clean silhouettes, balanced colours,
            versatile designs, and details that quietly stand out.
          </p>

          <div className="about-values">

            <div className="about-value">
              <div className="value-number">01</div>

              <div>
                <h3>Thoughtful Design</h3>
                <p>
                  Every detail has a purpose, from the cut
                  and fabric to the smallest finishing touch.
                </p>
              </div>
            </div>

            <div className="about-value">
              <div className="value-number">02</div>

              <div>
                <h3>Quality First</h3>
                <p>
                  We believe good design should be supported
                  by materials and craftsmanship you can trust.
                </p>
              </div>
            </div>

            <div className="about-value">
              <div className="value-number">03</div>

              <div>
                <h3>Made to Last</h3>
                <p>
                  Our goal is to create pieces that remain
                  relevant long after a trend has disappeared.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          COLLECTION SHOWCASE
      ========================================= */}

      <section className="about-showcase">

        <div className="about-showcase-header">
          <span className="about-label">
            OUR COLLECTIONS
          </span>

          <h2>
            Find your
            <span> signature style.</span>
          </h2>

          <p>
            Explore carefully curated collections created for
            different moods, moments, and personalities.
          </p>
        </div>

        <div className="about-showcase-grid">

          <div className="showcase-card showcase-large">
            <img
              src={assets.Jacket_B1}
              alt="Winter collection"
            />

            <div className="showcase-overlay">
              <span>01</span>
              <h3>Winter Edit</h3>
              <p>Warm layers. Strong silhouettes.</p>
            </div>
          </div>

          <div className="showcase-card">
            <img
              src={assets.Shirt_1}
              alt="Premium collection"
            />

            <div className="showcase-overlay">
              <span>02</span>
              <h3>Premium Essentials</h3>
              <p>Clean. Refined. Effortless.</p>
            </div>
          </div>

          <div className="showcase-card">
            <img
              src={assets.tshert}
              alt="New collection"
            />

            <div className="showcase-overlay">
              <span>03</span>
              <h3>New Arrivals</h3>
              <p>Fresh pieces for a new season.</p>
            </div>
          </div>

        </div>

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="about-process">

        <div className="about-process-heading">
          <span className="about-label">
            HOW WE WORK
          </span>

          <h2>
            From an idea
            <br />
            <span>to your wardrobe.</span>
          </h2>
        </div>

        <div className="process-grid">

          <div className="process-item">
            <span>01</span>

            <h3>Discover</h3>

            <p>
              We explore new ideas, materials, colours and
              silhouettes to understand what modern customers
              actually want to wear.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>

            <h3>Design</h3>

            <p>
              Concepts are refined into practical designs that
              balance visual appeal, comfort and everyday use.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>

            <h3>Create</h3>

            <p>
              Each piece goes through careful development and
              quality checks before becoming part of a collection.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              Finally, your chosen pieces make their way from
              our collection to your wardrobe.
            </p>
          </div>

        </div>

      </section>


      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="about-quote">

        <div className="quote-mark">“</div>

        <blockquote>
          Style is not about following every trend.
          It is about knowing what feels like you.
        </blockquote>

        <span>— Our Design Philosophy</span>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <div className="about-cta-content">

          <span className="about-label">
            READY TO EXPLORE?
          </span>

          <h2>
            Your next favourite
            <span> piece is waiting.</span>
          </h2>

          <p>
            Discover the latest collection and find pieces
            designed to become part of your everyday style.
          </p>

          <Link
            to="/collection"
            className="about-cta-button"
          >
            Explore Collections
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
};

export default About;