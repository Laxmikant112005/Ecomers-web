import React, { useMemo, useState } from "react";
import "../styles/Orders.css";

const ordersData = [
  {
    id: "ORD-84291",
    date: "17 Aug 2026",
    status: "Delivered",
    total: 2499,
    payment: "Paid",
    items: [
      {
        name: "Premium Oversized T-Shirt",
        category: "T-Shirt",
        size: "L",
        color: "Black",
        price: 1299,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      },
      {
        name: "Classic Slim Fit Jeans",
        category: "Denim",
        size: "32",
        color: "Dark Blue",
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      },
    ],
  },
  {
    id: "ORD-84172",
    date: "12 Aug 2026",
    status: "Shipped",
    total: 1899,
    payment: "Paid",
    items: [
      {
        name: "Minimal Cotton Hoodie",
        category: "Hoodie",
        size: "M",
        color: "Grey",
        price: 1899,
        image:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      },
    ],
  },
  {
    id: "ORD-84031",
    date: "08 Aug 2026",
    status: "Processing",
    total: 3299,
    payment: "Paid",
    items: [
      {
        name: "Relaxed Linen Shirt",
        category: "Shirt",
        size: "L",
        color: "Cream",
        price: 1599,
        image:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
      },
      {
        name: "Straight Leg Trousers",
        category: "Trousers",
        size: "32",
        color: "Stone",
        price: 1700,
        image:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
      },
    ],
  },
  {
    id: "ORD-83942",
    date: "29 Jul 2026",
    status: "Cancelled",
    total: 1499,
    payment: "Refunded",
    items: [
      {
        name: "Essential Polo Shirt",
        category: "Polo",
        size: "M",
        color: "Olive",
        price: 1499,
        image:
          "https://images.unsplash.com/photo-1625910513413-5fc45c9c8c4f?w=500",
      },
    ],
  },
];

const filters = [
  "All",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const statusMatch =
        activeFilter === "All" || order.status === activeFilter;

      const searchMatch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.items.some((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

      return statusMatch && searchMatch;
    });
  }, [activeFilter, search]);

  const getStatusClass = (status) => {
    return status.toLowerCase();
  };

  const getStatusIcon = (status) => {
    if (status === "Delivered") return "✓";
    if (status === "Shipped") return "→";
    if (status === "Processing") return "◌";
    return "×";
  };

  return (
    <div className="orders-page">
      <div className="orders-background-glow glow-one" />
      <div className="orders-background-glow glow-two" />

      <div className="orders-wrapper">

        {/* HEADER */}
        <header className="orders-header">
          <div>
            <span className="orders-label">ACCOUNT / ORDERS</span>

            <h1>
              Your <span>Orders</span>
            </h1>

            <p>
              Keep track of your purchases and stay updated with every delivery.
            </p>
          </div>

          <div className="orders-count">
            <strong>{ordersData.length}</strong>
            <span>Total Orders</span>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="orders-summary">

          <div className="summary-box">
            <span className="summary-title">TOTAL</span>
            <strong>{ordersData.length}</strong>
            <small>Orders placed</small>
          </div>

          <div className="summary-box">
            <span className="summary-title">PROCESSING</span>
            <strong>
              {
                ordersData.filter(
                  (order) => order.status === "Processing"
                ).length
              }
            </strong>
            <small>Being prepared</small>
          </div>

          <div className="summary-box">
            <span className="summary-title">SHIPPED</span>
            <strong>
              {
                ordersData.filter(
                  (order) => order.status === "Shipped"
                ).length
              }
            </strong>
            <small>On the way</small>
          </div>

          <div className="summary-box">
            <span className="summary-title">DELIVERED</span>
            <strong>
              {
                ordersData.filter(
                  (order) => order.status === "Delivered"
                ).length
              }
            </strong>
            <small>Successfully received</small>
          </div>

        </section>

        {/* TOOLBAR */}
        <section className="orders-toolbar">

          <div className="order-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="order-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search order..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

        </section>

        {/* ORDER LIST */}
        <section className="orders-content">

          <div className="orders-section-title">
            <div>
              <span>RECENT ACTIVITY</span>
              <h2>Order History</h2>
            </div>

            <p>{filteredOrders.length} orders</p>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="orders-empty">
              <div className="empty-symbol">⌕</div>

              <h3>No orders found</h3>

              <p>
                We couldn't find any order matching your current search or
                filter.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="orders-list">

              {filteredOrders.map((order, index) => (
                <article
                  className="order-card"
                  key={order.id}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >

                  {/* CARD HEADER */}
                  <div className="order-top">

                    <div className="order-id">
                      <span>ORDER ID</span>
                      <strong>{order.id}</strong>
                    </div>

                    <div
                      className={`status-badge ${getStatusClass(
                        order.status
                      )}`}
                    >
                      <i>{getStatusIcon(order.status)}</i>
                      {order.status}
                    </div>

                  </div>

                  {/* PRODUCTS */}
                  <div className="order-main">

                    <div className="products-list">

                      {order.items.map((item) => (
                        <div className="order-product" key={item.name}>

                          <div className="product-image">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </div>

                          <div className="product-details">

                            <span>{item.category}</span>

                            <h3>{item.name}</h3>

                            <p>
                              {item.color} · Size {item.size}
                            </p>

                            <strong>
                              ₹{item.price.toLocaleString()}
                            </strong>

                          </div>

                        </div>
                      ))}

                    </div>

                    {/* SUMMARY */}
                    <div className="order-details">

                      <div>
                        <span>DATE</span>
                        <strong>{order.date}</strong>
                      </div>

                      <div>
                        <span>PAYMENT</span>
                        <strong>{order.payment}</strong>
                      </div>

                      <div>
                        <span>ITEMS</span>
                        <strong>{order.items.length}</strong>
                      </div>

                      <div className="total-price">
                        <span>TOTAL</span>
                        <strong>
                          ₹{order.total.toLocaleString()}
                        </strong>
                      </div>

                    </div>

                  </div>

                  {/* DELIVERY TRACKER */}
                  {order.status !== "Cancelled" && (
                    <div className="delivery-tracker">

                      <div className="tracker-step completed">
                        <div>✓</div>
                        <span>Ordered</span>
                      </div>

                      <div
                        className={`tracker-line ${
                          order.status !== "Processing"
                            ? "completed"
                            : ""
                        }`}
                      />

                      <div
                        className={`tracker-step ${
                          order.status === "Processing"
                            ? "current"
                            : "completed"
                        }`}
                      >
                        <div>
                          {order.status === "Processing" ? "2" : "✓"}
                        </div>
                        <span>Shipped</span>
                      </div>

                      <div
                        className={`tracker-line ${
                          order.status === "Delivered"
                            ? "completed"
                            : ""
                        }`}
                      />

                      <div
                        className={`tracker-step ${
                          order.status === "Delivered"
                            ? "completed"
                            : "pending"
                        }`}
                      >
                        <div>
                          {order.status === "Delivered" ? "✓" : "3"}
                        </div>
                        <span>Delivered</span>
                      </div>

                    </div>
                  )}

                  {/* CANCELLED */}
                  {order.status === "Cancelled" && (
                    <div className="cancelled-order">
                      <span>×</span>

                      <div>
                        <strong>Order Cancelled</strong>
                        <p>
                          Your payment has been refunded successfully.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* FOOTER */}
                  <div className="order-footer">

                    <span>
                      {order.status === "Delivered"
                        ? "Delivered successfully"
                        : order.status === "Shipped"
                        ? "Your package is on the way"
                        : order.status === "Processing"
                        ? "We're preparing your order"
                        : "This order has been closed"}
                    </span>

                    <div className="order-buttons">

                      <button className="outline-btn">
                        View Details
                      </button>

                      {order.status === "Delivered" && (
                        <button className="dark-btn">
                          Buy Again
                        </button>
                      )}

                      {order.status === "Shipped" && (
                        <button className="dark-btn">
                          Track Order
                        </button>
                      )}

                      {order.status === "Processing" && (
                        <button className="outline-btn">
                          Cancel
                        </button>
                      )}

                    </div>

                  </div>

                </article>
              ))}

            </div>
          )}

        </section>

      </div>
    </div>
  );
};

export default Orders;