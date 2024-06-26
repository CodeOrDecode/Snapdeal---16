import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Product.module.css";
import Footer from "../Allsimilar/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Afterloginnavbar from "../Allsimilar/Afterloginnavbar"

const Product = () => {
  const navigate = useNavigate();
  const [changco1, setChangco1] = useState(false);
  const [changco2, setChangco2] = useState(false);
  const [changco3, setChangco3] = useState(false);
  const [changco4, setChangco4] = useState(false);
  const [changco5, setChangco5] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [bigimg, setBigimg] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  function handleImage(event) {
    setBigimg(event.target.src);
  }

  useEffect(() => {
    let prodata = JSON.parse(localStorage.getItem("product"));
    // console.log(prodata);
    setTitle(prodata.title);
    setPrice(prodata.price);
    setBigimg(prodata.bigimg);
    setImage1(prodata.smallimg1);
    setImage2(prodata.smallimg2);
    setImage3(prodata.smallimg3);
    setImage4(prodata.smallimg4);
    navigate("/product");
  }, []);

  return (
    <>
      <Afterloginnavbar />

      <div className={style.mainprodiv}>
        <div className={style.insidemain}>
          <div className={style.leftdiv1}>
            <div className={style.leftin1}>
              <div>
                <img onClick={handleImage} src={image1} alt="" />
              </div>
              <div>
                <img onClick={handleImage} src={image2} alt="" />
              </div>
              <div>
                <img onClick={handleImage} src={image3} alt="" />
              </div>
              <div>
                <img onClick={handleImage} src={image4} alt="" />
              </div>
            </div>
            <div className={style.leftin2}>
              <img src={bigimg} alt="" />
            </div>
          </div>

          <div className={style.rightdiv1}>
            <p className={style.prodes1}>{title}</p>
            <div className={style.rullerco}></div>
            <span className={style.prodes3}>MRP</span>
            <span className={style.prodes2}>Rs. 1,199</span>
            <span className={style.prodes3}>(Inclusive of all taxes)</span>
            <p className={style.prodes4}>Rs. {price}</p>

            <div className={style.sizepro}>
              <p>Size : </p>
              <div
                className={changco1 ? style.initialtwo : style.initialone}
                onClick={() => {
                  setChangco1(true);
                }}
              >
                S
              </div>
              <div
                className={changco2 ? style.initialtwo : style.initialone}
                onClick={() => {
                  setChangco2(true);
                }}
              >
                M
              </div>
              <div
                className={changco3 ? style.initialtwo : style.initialone}
                onClick={() => {
                  setChangco3(true);
                }}
              >
                L
              </div>
              <div
                className={changco4 ? style.initialtwo : style.initialone}
                onClick={() => {
                  setChangco4(true);
                }}
              >
                XL
              </div>
              <div
                className={changco5 ? style.initialtwo : style.initialone}
                onClick={() => {
                  setChangco5(true);
                }}
              >
                2XL
              </div>
            </div>

            <div className={style.buttons}>
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </div>

            <div className={style.sizepro2}>
              <p>Delivery:</p>

              <div>
                <p>Delivery in 6-8 days Free</p>
                <p>
                  7 Days Easy Returns We assure easy return exchange of
                  purchased items within 7 days of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
