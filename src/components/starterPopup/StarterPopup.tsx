import { useDispatch } from "react-redux";
import "./starterPopup.css";
import { addItem, toggleCart } from "../../store/cartSlice";

type StarterPopupProps = {
  isMounted: boolean;
  setIsMounted: (val: boolean) => void;
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
  handleClose: () => void;
  timeLeft: number;
  formatTime: (seconds: number) => string;
};

const starterProduct = {
  index: 88,
  title: `Starter Kit "Maximum Pleasure"`,
  price: "$75.00",
  newPrice: "$9.99",
  img: "/images/starter-pack.jpg",
};

const StarterPopup = ({
  isMounted,
  isVisible,
  handleClose,
  timeLeft,
  formatTime,
}: StarterPopupProps) => {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(
      addItem({
        id: starterProduct.index,
        selectedBesidesIndex: 0,
        title: starterProduct.title,
        price: starterProduct.newPrice,
        quantity: 1,
        image: starterProduct.img,
      })
    );
    dispatch(toggleCart());
    handleClose(); // закрываем попап
  };

  if (!isMounted) return null;

  return (
    <div className={`starter-popup-overlay ${isVisible ? "show" : ""}`}>
      <div className="starter-popup-inner">
        <div className="starter-popup-closeX-button" onClick={handleClose}>X</div>
        <h2 className="starter-popup-title">
          🔥 Unlock the Pleasure <br /> Starter Kit - $9.99
        </h2>
        <p className="starter-popup-subtitle">
          $75+ value members-only price ships 100% discreetly
        </p>

        <ul className="starter-popup-list">
          <li className="starter-popup-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
            </svg>
            <p>Private HD Masterclass: <span>4 bite-size videos for scene-building, safety & skin
            care</span></p>
          </li>

          <li className="starter-popup-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="22"
              height="22"
              viewBox="0 0 50 50"
            >
              <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
            </svg>
            <p>2 Luxe Satin Ribbons: <span>blindfold, bind, of glam-up any look</span></p>
          </li>

          <li className="starter-popup-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 50 50"
            >
              <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
            </svg>
            <p>Mystery Mini Accessory: <span>surprise treat worth $30 - $50 - guaranteed thrill</span></p>
          </li>
        </ul>

        <div className="starter-popup-timer">
          Offer ends in <span>{formatTime(timeLeft)}</span>
        </div>
        <br />

        <button className="starter-popup-buy-button" onClick={handleBuyClick}>
          YES - Unlock My Kit For $9.99
        </button>
        <button className="starter-popup-close-button" onClick={handleClose}>
          No, I`ll miss the $65+ savings
        </button>
      </div>
    </div>
  );
};

export default StarterPopup;
