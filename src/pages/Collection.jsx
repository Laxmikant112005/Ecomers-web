import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "../styles/Collection.css";

const Collection = () => {
  const collections = [
    {
      id: 1,
      image: assets.Jacket_1,
      title: "Jacket Collection",
      subtitle: "THE SIGNATURE EDIT",
      description:
        "Structured layers and timeless silhouettes designed to elevate everyday outfits.",
      category: "Outerwear",
      season: "AW 2026",
      pieces: "12 Pieces",
      badge: "FEATURED",
    },

    {
      id: 2,
      image: assets.Jacket_B1,
      title: "Winter Collection",
      subtitle: "COLD WEATHER EDIT",
      description:
        "Warm textures, comfortable layers and refined winter essentials.",
      category: "Winter",
      season: "WINTER 2026",
      pieces: "18 Pieces",
      badge: "TRENDING",
    },

    {
      id: 3,
      image: assets.Shirt_1,
      title: "Premium Collection",
      subtitle: "THE REFINED EDIT",
      description:
        "Premium shirts created for effortless looks, from workdays to evenings.",
      category: "Premium",
      season: "ALL SEASON",
      pieces: "16 Pieces",
      badge: "PREMIUM",
    },

    {
      id: 4,
      image: assets.tshert,
      title: "New Arrivals",
      subtitle: "JUST IN",
      description:
        "Fresh silhouettes and contemporary essentials from our latest drop.",
      category: "New",
      season: "NEW SEASON",
      pieces: "24 Pieces",
      badge: "NEW",
    },

    {
      id: 5,
      image: assets.Jacket_1,
      title: "Urban Essentials",
      subtitle: "EVERYDAY EDIT",
      description:
        "Minimal everyday pieces designed for modern city life.",
      category: "Casual",
      season: "EVERYDAY",
      pieces: "20 Pieces",
      badge: "ESSENTIAL",
    },

    {
      id: 6,
      image: assets.Shirt_1,
      title: "Classic Series",
      subtitle: "TIMELESS EDIT",
      description:
        "Clean cuts and timeless colours that never go out of style.",
      category: "Classic",
      season: "TIMELESS",
      pieces: "14 Pieces",
      badge: "CLASSIC",
    },

    {
      id: 7,
      image: assets.tshert,
      title: "Weekend Collection",
      subtitle: "OFF-DUTY STYLE",
      description:
        "Relaxed fits and versatile pieces made for your weekends.",
      category: "Lifestyle",
      season: "WEEKEND",
      pieces: "15 Pieces",
      badge: "CASUAL",
    },

    {
      id: 8,
      image: assets.Jacket_B1,
      title: "Limited Edition",
      subtitle: "EXCLUSIVE DROP",
      description:
        "A carefully selected collection of limited pieces created for those who want something different.",
      category: "Limited",
      season: "LIMITED",
      pieces: "08 Pieces",
      badge: "LIMITED",
    },
  ];

  return (
    <main className="collection-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="collection-hero">

        <div className="collection-hero-content">

          <span className="collection-eyebrow">
            CURATED FOR YOU
          </span>

          <h1>
            Discover your
            <span> signature style.</span>
          </h1>

          <p>
            Explore carefully curated collections designed around
            modern lifestyles, timeless silhouettes and effortless
            everyday fashion.
          </p>

          <div className="collection-hero-meta">
            <span>08 Collections</span>
            <span className="meta-dot"></span>
            <span>100+ Styles</span>
            <span className="meta-dot"></span>
            <span>New Season</span>
          </div>

        </div>

      </section>


      {/* =========================================
          FEATURED COLLECTION
      ========================================= */}

      <section className="featured-collection">

        <div className="featured-image">

          <img
            src={assets.Jacket_1}
            alt="Featured fashion collection"
          />

          <div className="featured-image-label">
            <span>01</span>
            <span>EDITOR'S PICK</span>
          </div>

        </div>


        <div className="featured-content">

          <span className="collection-small-label">
            FEATURED COLLECTION
          </span>

          <h2>
            The Signature
            <span> Edit.</span>
          </h2>

          <p className="featured-description">
            Our signature collection brings together the pieces
            that define our design philosophy — clean silhouettes,
            premium textures and effortless versatility.
          </p>

          <div className="featured-details">

            <div>
              <span>COLLECTION</span>
              <strong>Jacket Collection</strong>
            </div>

            <div>
              <span>SEASON</span>
              <strong>Autumn / Winter 2026</strong>
            </div>

            <div>
              <span>AVAILABLE</span>
              <strong>12 Pieces</strong>
            </div>

          </div>

          <Link
            to="/collection/1"
            className="featured-button"
          >
            Explore Collection
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =========================================
          COLLECTION HEADER
      ========================================= */}

      <section className="all-collections">

        <div className="collections-heading">

          <div>
            <span className="collection-small-label">
              EXPLORE OUR WORLD
            </span>

            <h2>
              All Collections
            </h2>
          </div>

          <p>
            From everyday essentials to limited releases,
            discover a collection for every mood and moment.
          </p>

        </div>


        {/* =========================================
            COLLECTION GRID
        ========================================= */}

        <div className="collection-grid">

          {collections.map((item, index) => (

            <Link
              to={`/collection/${item.id}`}
              key={item.id}
              className={`collection-card ${
                index === 0 ? "collection-card-featured" : ""
              }`}
            >

              <div className="collection-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="collection-image"
                />

                {/* Badge */}

                <div className="collection-badge">
                  {item.badge}
                </div>


                {/* Number */}

                <div className="collection-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* Image Overlay */}

                <div className="collection-overlay">

                  <div className="collection-overlay-content">

                    <span className="collection-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <div className="collection-card-meta">

                      <span>
                        {item.season}
                      </span>

                      <span>
                        {item.pieces}
                      </span>

                    </div>

                  </div>


                  <div className="collection-explore">
                    <span>Explore</span>

                    <span className="collection-arrow">
                      →
                    </span>
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================================
          CATEGORY STRIP
      ========================================= */}

      <section className="collection-categories">

        <div className="categories-heading">

          <span className="collection-small-label">
            FIND YOUR STYLE
          </span>

          <h2>
            Shop by mood.
          </h2>

        </div>


        <div className="category-list">

          <Link to="/collection/1">
            <span>01</span>
            <strong>Outerwear</strong>
            <span>→</span>
          </Link>

          <Link to="/collection/3">
            <span>02</span>
            <strong>Premium</strong>
            <span>→</span>
          </Link>

          <Link to="/collection/4">
            <span>03</span>
            <strong>New Arrivals</strong>
            <span>→</span>
          </Link>

          <Link to="/collection/7">
            <span>04</span>
            <strong>Casual</strong>
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =========================================
          BRAND STATEMENT
      ========================================= */}

      <section className="collection-statement">

        <div className="statement-mark">
          "
        </div>

        <h2>
          Style isn't about
          <span> wearing more.</span>
          <br />
          It's about wearing
          <span> better.</span>
        </h2>

        <p>
          Thoughtfully designed pieces made to become
          part of your everyday story.
        </p>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="collection-cta">

        <span className="collection-small-label">
          YOUR NEXT LOOK
        </span>

        <h2>
          Find something
          <span> that feels like you.</span>
        </h2>

        <p>
          Explore our complete collection and discover
          pieces made for your style.
        </p>

        <Link
          to="/collection/4"
          className="collection-cta-button"
        >
          Shop New Arrivals
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Collection;