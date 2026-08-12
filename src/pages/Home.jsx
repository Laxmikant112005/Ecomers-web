import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import "../styles/Home.css";

const Home = () => {

  const categories = [
    {
      id: 1,
      title: "Jackets",
      image: assets.Jacket_1,
      link: "/collection/1",
    },
    {
      id: 2,
      title: "Winter Wear",
      image: assets.Jacket_B1,
      link: "/collection/2",
    },
    {
      id: 3,
      title: "Shirts",
      image: assets.Shirt_1,
      link: "/collection/3",
    },
    {
      id: 4,
      title: "T-Shirts",
      image: assets.tshert,
      link: "/collection/4",
    },
  ];


  const featuredProducts = [
    {
      id: 1,
      name: "Classic Jacket",
      category: "Outerwear",
      price: "₹2,499",
      image: assets.Jacket_1,
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "Winter Essential",
      category: "Winter Wear",
      price: "₹3,299",
      image: assets.Jacket_B1,
      badge: "TRENDING",
    },
    {
      id: 3,
      name: "Premium Shirt",
      category: "Shirts",
      price: "₹1,799",
      image: assets.Shirt_1,
      badge: "NEW",
    },
    {
      id: 4,
      name: "Everyday Tee",
      category: "T-Shirts",
      price: "₹899",
      image: assets.tshert,
      badge: "POPULAR",
    },
  ];


  return (
    <main className="home-page">

      {/* =========================================
          HERO / BANNER
      ========================================= */}

      <Banner />


      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="home-intro">

        <span className="home-label">
          WELCOME TO OUR WORLD
        </span>

        <h1>
          Fashion made for
          <span> your everyday.</span>
        </h1>

        <p>
          Discover thoughtfully designed clothing that combines
          modern style, comfort and timeless appeal. From everyday
          essentials to statement pieces, find something that feels
          uniquely yours.
        </p>

        <Link
          to="/collection"
          className="home-primary-button"
        >
          Explore Collections
          <span>→</span>
        </Link>

      </section>


      {/* =========================================
          CATEGORY SECTION
      ========================================= */}

      <section className="home-categories">

        <div className="home-section-heading">

          <div>
            <span className="home-label">
              SHOP BY CATEGORY
            </span>

            <h2>
              Find your essentials.
            </h2>
          </div>

          <Link
            to="/collection"
            className="home-view-link"
          >
            View All
            <span>→</span>
          </Link>

        </div>


        <div className="home-category-grid">

          {categories.map((category) => (

            <Link
              to={category.link}
              key={category.id}
              className="home-category-card"
            >

              <div className="home-category-image">

                <img
                  src={category.image}
                  alt={category.title}
                />

                <div className="home-category-overlay">

                  <span>
                    0{category.id}
                  </span>

                  <h3>
                    {category.title}
                  </h3>

                  <div className="home-category-arrow">
                    →
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================================
          FEATURED PRODUCTS
      ========================================= */}

      <section className="home-products">

        <div className="home-section-heading">

          <div>

            <span className="home-label">
              THIS SEASON
            </span>

            <h2>
              Featured pieces.
            </h2>

          </div>

          <Link
            to="/collection"
            className="home-view-link"
          >
            Shop All
            <span>→</span>
          </Link>

        </div>


        <div className="home-product-grid">

          {featuredProducts.map((product) => (

            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="home-product-card"
            >

              <div className="home-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="home-product-badge">
                  {product.badge}
                </span>

                <button
                  className="home-product-favorite"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

              </div>


              <div className="home-product-info">

                <div>

                  <span className="home-product-category">
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                </div>

                <strong>
                  {product.price}
                </strong>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================================
          EDITORIAL / COLLECTION
      ========================================= */}

      <section className="home-editorial">

        <div className="home-editorial-image">

          <img
            src={assets.Jacket_B1}
            alt="Winter collection"
          />

          <div className="home-editorial-number">
            01
          </div>

        </div>


        <div className="home-editorial-content">

          <span className="home-label">
            THE WINTER EDIT
          </span>

          <h2>
            Layers that
            <span> define you.</span>
          </h2>

          <p>
            Discover our latest winter collection featuring
            versatile jackets, refined silhouettes and
            comfortable layers designed for colder days.
          </p>


          <div className="home-editorial-details">

            <div>
              <span>COLLECTION</span>
              <strong>Winter 2026</strong>
            </div>

            <div>
              <span>PIECES</span>
              <strong>18 Styles</strong>
            </div>

            <div>
              <span>STYLE</span>
              <strong>Modern / Casual</strong>
            </div>

          </div>


          <Link
            to="/collection/2"
            className="home-primary-button"
          >
            Explore Winter Collection
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =========================================
          WHY US
      ========================================= */}

      <section className="home-benefits">

        <div className="home-benefits-heading">

          <span className="home-label">
            WHY CHOOSE US
          </span>

          <h2>
            Designed with
            <span> you in mind.</span>
          </h2>

        </div>


        <div className="home-benefits-grid">

          <div className="home-benefit">

            <div className="home-benefit-icon">
              ✦
            </div>

            <h3>
              Thoughtful Design
            </h3>

            <p>
              Every piece is designed with attention to
              silhouette, comfort and everyday versatility.
            </p>

          </div>


          <div className="home-benefit">

            <div className="home-benefit-icon">
              ◇
            </div>

            <h3>
              Quality Materials
            </h3>

            <p>
              We focus on materials that feel comfortable,
              look refined and are made to last.
            </p>

          </div>


          <div className="home-benefit">

            <div className="home-benefit-icon">
              ♧
            </div>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Discover collections, explore products and
              shop your favourites with a simple experience.
            </p>

          </div>


          <div className="home-benefit">

            <div className="home-benefit-icon">
              ♡
            </div>

            <h3>
              Customer First
            </h3>

            <p>
              We're here to help before, during and after
              your purchase whenever you need us.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          BRAND STATEMENT
      ========================================= */}

      <section className="home-statement">

        <span className="home-statement-mark">
          "
        </span>

        <h2>
          Style isn't about
          <span> following trends.</span>
          <br />
          It's about
          <span> expressing yourself.</span>
        </h2>

        <p>
          Timeless pieces. Modern design. Your style.
        </p>

      </section>


      {/* =========================================
          NEW ARRIVALS
      ========================================= */}

      <section className="home-new-arrivals">

        <div className="home-section-heading">

          <div>

            <span className="home-label">
              JUST DROPPED
            </span>

            <h2>
              New arrivals.
            </h2>

          </div>

          <Link
            to="/collection/4"
            className="home-view-link"
          >
            Explore New
            <span>→</span>
          </Link>

        </div>


        <div className="home-new-arrival">

          <div className="home-new-image">

            <img
              src={assets.tshert}
              alt="New arrivals"
            />

          </div>


          <div className="home-new-content">

            <span className="home-new-number">
              04 / NEW
            </span>

            <h2>
              Something
              <span> new.</span>
            </h2>

            <p>
              Fresh silhouettes, effortless fits and new
              colours have arrived. Explore the latest
              pieces before they're gone.
            </p>

            <Link
              to="/collection/4"
              className="home-primary-button"
            >
              Shop New Arrivals
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          NEWSLETTER
      ========================================= */}

      <section className="home-newsletter">

        <div className="home-newsletter-content">

          <span className="home-label">
            STAY IN THE LOOP
          </span>

          <h2>
            Get the latest
            <span> from us.</span>
          </h2>

          <p>
            Be the first to know about new collections,
            exclusive drops and special offers.
          </p>

          <form
            className="home-newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>

          </form>

          <small>
            By subscribing, you agree to receive our
            occasional updates.
          </small>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="home-final-cta">

        <span className="home-label">
          YOUR STYLE AWAITS
        </span>

        <h2>
          Ready to find
          <span> your next favourite?</span>
        </h2>

        <p>
          Explore our collections and discover pieces
          made for your everyday.
        </p>

        <Link
          to="/collection"
          className="home-primary-button"
        >
          Explore Collections
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Home;