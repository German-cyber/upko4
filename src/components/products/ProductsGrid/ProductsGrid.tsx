import React from "react";
import "./ProductsGrid.css";
import productData from "./productData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "../../../store/cartSlice";
import { addToWishlist, toggleFilter } from "../../../store/wishlistSlice";
import { RootState } from "../../../store/store";
import { resetFilters } from "../../../store/filtersSlice";

const products = productData;

const ProductsGrid: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceRange = useSelector((state: RootState) => state.filters.priceRange);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isFilterVisible = useSelector((state: RootState) => state.filters.applied);

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.index === productId);
  };

  const handleAddToCart = (
    e: React.MouseEvent,
    product: (typeof products)[0]
  ) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: product.index,
        selectedBesidesIndex: 0, // ✅ добавь это поле
        title: product.title,
        price: product.newPrice || product.price || "",
        quantity: 1,
        image: product.img,
      })
    );
    dispatch(toggleCart());
  };

  const handleAddToWishlist = (
    e: React.MouseEvent,
    product: (typeof products)[0]
  ) => {
    e.preventDefault();
    e.stopPropagation();  // Останавливаем всплытие события
    if (isInWishlist(product.index)) {
      navigate("/wishlist");
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const filteredProducts = products.filter(product => {
    const priceStr = (product.newPrice ?? product.price) ?? "";
    const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return price >= priceRange[0] && price <= priceRange[1];
  });

  return (
    <div className="container">
      <div className="filter_wrapper">
        <div className="filter-button" onClick={() => dispatch(toggleFilter())}>
          {/* ... SVG ... */}
          Filter
        </div>
        <select name="featured" id="featured">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      {isFilterVisible && (
        <div className="filter-info">
          <p className="products-found">
            <span>{filteredProducts.length}</span> Products Found
          </p>
          <div className="filter-diapazone">
            <div className="filter-remove-button" onClick={() => dispatch(resetFilters())}>X</div>
            <p className="filter-diapazone-price">
              $<span>{priceRange[0]}.00</span> - $<span>{priceRange[1]}.00</span>
            </p>
          </div>
        </div>
      )}

      <div className="products-grid">
        {filteredProducts.map((p) => (
          <Link to={`/product/${p.slug}/${p.index}`} key={p.index}>
            <div className="product-card" data-index={p.index}>
              <div className="product-img-wrapper" style={{ position: "relative" }}>
                <div
                  className={`add-to-wishlist-button ${isInWishlist(p.index) ? "added" : ""}`}
                  onClick={(e) => handleAddToWishlist(e, p)}
                  style={{ cursor: "pointer" }}
                >
                  {/* ... Heart SVG ... */}
                </div>

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

      {filteredProducts.length < 1 && (
        <h1 className="error-text">
          {/* ... Error SVG ... */}
          No products were found matching your selection
        </h1>
      )}
    </div>
  );
};

export default ProductsGrid;