import styles from "./nav.module.css";
import ImageCarousel from "../Imagecarousel/ImageCarousel";
import Image1 from "../../public/images/qwiklif1.jpg";
import Image2 from "../../public/images/qwiklif2.jpg";
import Image3 from "../../public/images/qwiklif3.jpg";
import Image4 from "../../public/images/qwiklif4.jpg";
import Image5 from "../../public/images/qwiklif5.jpg";
import Image6 from "../../public/images/qwiklif6.jpg";
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Nav = () => {
  return (
    <div class="mb-70 mt-30">
      {/* <div className={`${styles.Nav_first} sm:hidden`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <g clip-path="url(#clip0_177_1304)">
            <path
              d="M11.2875 4.16671C12.02 4.32551 12.6932 4.72359 13.221 5.30999C13.7488 5.89639 14.107 6.64443 14.2499 7.45837M11.2875 0.833374C12.8094 1.02124 14.2286 1.77852 15.3121 2.98088C16.3956 4.18324 17.079 5.75922 17.2499 7.45004M16.4999 14.1V16.6C16.5008 16.8321 16.458 17.0618 16.3743 17.2745C16.2907 17.4871 16.1679 17.678 16.014 17.8349C15.8601 17.9918 15.6784 18.1113 15.4805 18.1856C15.2826 18.26 15.073 18.2876 14.8649 18.2667C12.5571 17.9881 10.3402 17.1118 8.39245 15.7084C6.58032 14.4289 5.04395 12.7219 3.89245 10.7084C2.62493 8.53438 1.83613 6.0592 1.58995 3.48337C1.57121 3.25293 1.59586 3.02067 1.66233 2.80139C1.72879 2.58211 1.83563 2.38061 1.97602 2.20972C2.11642 2.03883 2.2873 1.9023 2.47779 1.80881C2.66828 1.71532 2.87421 1.66693 3.08245 1.66671H5.33245C5.69643 1.66273 6.04929 1.80594 6.32527 2.06965C6.60125 2.33336 6.78151 2.69958 6.83245 3.10004C6.92742 3.9001 7.10354 4.68565 7.35745 5.44171C7.45836 5.73998 7.4802 6.06414 7.42038 6.37577C7.36056 6.68741 7.2216 6.97347 7.01995 7.20004L6.06745 8.25837C7.13512 10.3447 8.68979 12.0721 10.5675 13.2584L11.5199 12.2C11.7239 11.976 11.9813 11.8216 12.2618 11.7551C12.5423 11.6887 12.834 11.7129 13.1024 11.825C13.7829 12.1072 14.4899 12.3029 15.21 12.4084C15.5743 12.4655 15.907 12.6694 16.1448 12.9813C16.3827 13.2932 16.5091 13.6914 16.4999 14.1Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_177_1304">
              <rect width="18" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>180012345</p>
      </div>
      <img src="/images/logo.png" alt="logo" />
    
      <div className={`flex items-center sm:hidden` }>
        <p className={styles.Nav_btnChild1}>Login</p>
        <button className={styles.Nav_btnChild2}>Sign up</button>
      </div> */}
      <ImageCarousel images={images} />
    </div>
  );
};

export default Nav;
