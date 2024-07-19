export default function Subject() {
  return (
    <main className="subject container">
      <div className="subject-content">
        <h1>YOUR HEALTH DESERVES THE BEST</h1>
        <p>
          DISCOVER ULTIMATE REFRESHMENT WITH OUR SODA. CRAFTED FOR TASTE AND
          QUALITY, EACH SIP DELIVERS UNMATCHED FLAVOR. ELEVATE YOUR BEVERAGE
          EXPERIENCE WITH OUR DELICIOUS SODAS.
        </p>

        <div className="sub-btn">
          <button>Order Now</button>
          <button className="sec-btn">Category</button>
        </div>

        <div className="shop-by">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.jpg" alt="amazon-logo" />
            <img src="/images/flipkart.jpg" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="subject-image">
        <img src="/images/sub-img.webp" alt="sub-img" />
      </div>
    </main>
  );
}
