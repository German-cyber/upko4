// @ts-ignore
import React from "react";
import "../components/products/ProductsGrid/ProductsGrid.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "../store/cartSlice";
import { removeFromWishlist } from "../store/wishlistSlice";
import { RootState } from "../store/store";

// Тип продукта из productData

const ProductsGrid: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    dispatch(
    addItem({
      id: product.index,
      selectedBesidesIndex: 0,
      title: product.title,
      price: product.newPrice ?? product.price ?? "",
      quantity: 1,
      image: product.img,
    })
  );
    dispatch(toggleCart());
  };

  const handleRemoveFromWishlist = (e: React.MouseEvent, productIndex: number) => {
    e.preventDefault();
    dispatch(removeFromWishlist(productIndex));
  };

  return (
    <main className="container" style={{ background: "#fff", width: "100%", minHeight: "60vh" }}>
      {wishlistItems.length > 0 ? (
        <div className="products-grid">
          {wishlistItems.map((p) => (
            <Link to={`/product/${p.slug}/${p.index}`} key={p.index}>
              <div className="product-card" data-index={p.index}>
                <div className="product-img-wrapper" style={{ position: "relative" }}>
                  <button
                    className="remove-from-wishlist-button"
                    onClick={(e) => handleRemoveFromWishlist(e, p.index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
</svg>
                  </button>

                  <img
                    src={p.img}
                    alt={p.title}
                    className={p.imgHover ? "product-img main-img" : "product-img"}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />

                  {p.imgHover && (
                    <img
                      src={p.imgHover}
                      alt={p.title}
                      className="product-img hover-img"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                  )}

                  <div className="product-hover-buttons">
                    <button onClick={(e) => handleAddToCart(e, p)}>Add to cart</button>
                  </div>
                </div>

                <div className="product-info">
                  <div className="product-title">{p.title}</div>
                  <div className="product-price">
                    {p.newPrice ? (
                      <>
                        <span className="price">
                          <span className="strike">{p.price}</span>
                        </span>
                        <span className="new-price">{p.newPrice}</span>
                      </>
                    ) : (
                      <span className="price">{p.price}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="wishlist-empty-wrapepr">
          <div className="wishlist-empty-inner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M298.7 97.64L257 143.7L213.5 97.91C173.6 57.42 110 52.6 70.71 86.82L70.53 86.97C21.8 128.7 19.4 203.3 62.71 248.2L62.73 248.2L256.4 447.9C256.5 447.9 256.6 447.8 256.7 447.7L269.1 434.8C273.4 445.3 278.7 455.3 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C102.8 16.41 184.1 24.47 234.3 73.46C235 74.19 235.7 74.92 236.5 75.67L256.4 96.64L275.4 75.67C276.3 74.76 277.2 73.87 278.1 72.99C328.3 24.42 408.3 16.56 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C497.4 204.2 487.3 200.5 476.8 197.8C486.3 158.8 474.8 115.3 442.4 87C400.9 52.33 338.2 57.7 298.7 97.64V97.64zM454.6 368L491.3 404.7C497.6 410.9 497.6 421.1 491.3 427.3C485.1 433.6 474.9 433.6 468.7 427.3L432 390.6L395.3 427.3C389.1 433.6 378.9 433.6 372.7 427.3C366.4 421.1 366.4 410.9 372.7 404.7L409.4 368L372.7 331.3C366.4 325.1 366.4 314.9 372.7 308.7C378.9 302.4 389.1 302.4 395.3 308.7L432 345.4L468.7 308.7C474.9 302.4 485.1 302.4 491.3 308.7C497.6 314.9 497.6 325.1 491.3 331.3L454.6 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z"></path></svg>
            <h2>Wishlist is empty.</h2>
            <p>You don't have any products in the wishlist yet.
You will find a lot of interesting products on our "Shop" page.</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductsGrid;
