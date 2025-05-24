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
                    🗑
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="100">
              <path d="M298.7 97.64L257 143.7L213.5 97.91C173.6 57.42 110 52.6..." />
            </svg>
            <p>Your wishlist is empty.</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductsGrid;