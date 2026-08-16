import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Laxmikant Sangolagi",
    email: "laxmikant@gmail.com",
    phone: "+91 98765 43210",
    location: "Karnataka, India",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      {/* BACK BUTTON */}

      <div className="profile-top">
        <Link to="/" className="back-home">
          <span>←</span>
          Back to Home
        </Link>
      </div>

      {/* PROFILE HEADER */}

      <section className="profile-hero">

        <div className="profile-avatar">
          <img
            src={assets.User}
            alt="Profile"
          />

          <button className="camera-btn">
            📷
          </button>
        </div>

        <div className="profile-heading">
          <p className="profile-label">
            MY ACCOUNT
          </p>

          <h1>
            {user.name}
          </h1>

          <p>
            {user.email}
          </p>
        </div>

      </section>

      {/* MAIN CONTENT */}

      <main className="profile-content">

        {/* PERSONAL INFORMATION */}

        <section className="profile-card">

          <div className="card-header">

            <div>
              <p className="section-label">
                ACCOUNT
              </p>

              <h2>
                Personal Information
              </h2>
            </div>

            {!isEditing && (
              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                ✎ Edit Profile
              </button>
            )}

          </div>

          <div className="profile-details">

            {/* NAME */}

            <div className="detail-item">

              <span className="detail-icon">
                👤
              </span>

              <div className="detail-content">
                <label>
                  Full Name
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                ) : (
                  <p>
                    {user.name}
                  </p>
                )}
              </div>

            </div>

            {/* EMAIL */}

            <div className="detail-item">

              <span className="detail-icon">
                ✉
              </span>

              <div className="detail-content">
                <label>
                  Email Address
                </label>

                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p>
                    {user.email}
                  </p>
                )}
              </div>

            </div>

            {/* PHONE */}

            <div className="detail-item">

              <span className="detail-icon">
                ☎
              </span>

              <div className="detail-content">
                <label>
                  Phone Number
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={editData.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <p>
                    {user.phone}
                  </p>
                )}
              </div>

            </div>

            {/* LOCATION */}

            <div className="detail-item">

              <span className="detail-icon">
                📍
              </span>

              <div className="detail-content">
                <label>
                  Location
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={editData.location}
                    onChange={handleChange}
                  />
                ) : (
                  <p>
                    {user.location}
                  </p>
                )}
              </div>

            </div>

          </div>

          {/* EDIT ACTIONS */}

          {isEditing && (
            <div className="edit-actions">

              <button
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>
          )}

        </section>

        {/* ACCOUNT OPTIONS */}

        <section className="profile-card">

          <div className="card-header">

            <div>
              <p className="section-label">
                SETTINGS
              </p>

              <h2>
                Account Settings
              </h2>
            </div>

          </div>

          <div className="settings-list">

            <Link to="/orders" className="setting-item">
              <div className="setting-icon">
                📦
              </div>

              <div>
                <h3>
                  My Orders
                </h3>

                <p>
                  View your recent purchases and orders
                </p>
              </div>

              <span className="arrow">
                →
              </span>
            </Link>

            <Link to="/cart" className="setting-item">
              <div className="setting-icon">
                🛒
              </div>

              <div>
                <h3>
                  Shopping Cart
                </h3>

                <p>
                  Check the items currently in your cart
                </p>
              </div>

              <span className="arrow">
                →
              </span>
            </Link>

            <Link to="/collection" className="setting-item">
              <div className="setting-icon">
                ♡
              </div>

              <div>
                <h3>
                  Explore Collection
                </h3>

                <p>
                  Discover the latest ECART fashion
                </p>
              </div>

              <span className="arrow">
                →
              </span>
            </Link>

          </div>

        </section>

        {/* LOGOUT */}

        <button className="logout-btn">
          Log Out
        </button>

      </main>

      {/* FOOTER */}

      <footer className="profile-footer">
        <p>
          © 2026 ECART. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Profile;