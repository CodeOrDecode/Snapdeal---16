import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Women.module.css";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../Allsimilar/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Women = () => {

  const navigate = useNavigate();
  const [womendata, setWomendata] = useState(null);

  async function womenProductData() {
    try {
      let res = await fetch(
        "https://snapdeal-backend-1.onrender.com/women/getwomen"
      );
      let res2 = await res.json();
      // console.log(res2.products);
      setWomendata(res2.products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSingleproduct(pro) {
    localStorage.setItem("product", JSON.stringify(pro));
    navigate("/product");
  }

  useEffect(() => {
    womenProductData();
    navigate("/women")
  }, []);

  return (
    <>
      <Navbar />

      <div className={style.mendivmain}>
        <div className={style.insidemen}>
          <div className={style.inside1}>
            <div className={style.prsidepa1}>
              <p className={style.sideclo}>Women's Clothing</p>
              <p className={style.sideclo2}>Dresses, Gowns &amp; Jumpsuits</p>
              <p className={style.sideclo2}>Western Dresses For Women</p>
              <p className={style.sideclo2}>Jumpsuit For Women</p>
              <p className={style.sideclo2}>Co-Ords</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.brand}>
              <p className={style.sideclo}>Pattern</p>
              <p className={style.sideclo2}>Applique</p>
              <p className={style.sideclo2}>Checks</p>
              <p className={style.sideclo2}>Colorblock</p>
              <p className={style.sideclo2}>Cut Outs</p>
              <p className={style.sideclo2}>Dyed</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.color}>
              <p className={style.sideclo}>Color</p>

              <div className={style.colordiv}>
                <div className={style.colorfill1}></div>
                <p>Beige</p>
              </div>
              <div className={style.colordiv}>
                <div className={style.colorfill2}></div>
                <p>Black</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill3}></div>
                <p>Blue</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill4}></div>
                <p>Bronze</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill5}></div>
                <p>Brown</p>
              </div>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Neck Shape</p>
              <p className={style.sideclo2}>Asymmetric Neck</p>
              <p className={style.sideclo2}>Boat Neck</p>
              <p className={style.sideclo2}>Choker Neck</p>
              <p className={style.sideclo2}>Halter Neck</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Type</p>
              <p className={style.sideclo2}>A- line Dress</p>
              <p className={style.sideclo2}>Asymmetric Dress</p>
              <p className={style.sideclo2}>Basic Jumpsuit</p>
              <p className={style.sideclo2}>Blouson Dress</p>
              <p className={style.sideclo2}>A-line Dress</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Sleeves Length</p>
              <p className={style.sideclo2}>3/4th Sleeves</p>
              <p className={style.sideclo2}>Cap Sleeves</p>
              <p className={style.sideclo2}>Full Sleeves</p>
              <p className={style.sideclo2}>Half Sleeves</p>
              <p className={style.sideclo2}>Rollup Sleeves</p>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Brand</p>
              <p className={style.sideclo2}>9 Impression</p>
              <p className={style.sideclo2}>Aarika</p>
              <p className={style.sideclo2}>AARSHYA</p>
              <p className={style.sideclo2}>Aask</p>
              <p className={style.sideclo2}>Aatmik</p>
              <p className={style.sideclo2}>Addyvero</p>
              <p className={style.sideclo2}>ANNEIV</p>
              <p className={style.sideclo2}>AUSTIVO</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Discount %</p>
              <p className={style.sideclo2}>0 - 10</p>
              <p className={style.sideclo2}>10 - 20</p>
              <p className={style.sideclo2}>20 - 30</p>
              <p className={style.sideclo2}>30 - 40</p>
              <p className={style.sideclo2}>40 - 50</p>
            </div>
          </div>

          <div className={style.inside2}>
            <div className={style.inpart1}>
              <p className={style.inp1}>Dresses, Gowns & Jumpsuits</p>
              <div className={style.inp2}>
                Sort by : Popularity <FaAngleDown className={style.indown} />
              </div>
            </div>

            <div className={style.parti}></div>

            <div className={style.prolist}>
              {womendata &&
                womendata.map((ele) => {
                  return (
                    <div key={ele._id} onClick={()=>{handleSingleproduct(ele)}}>
                      <img src={ele.bigimg} alt="" />
                      <p className={style.protit}>{ele.title}</p>
                      <span className={style.proprice2}>Rs. {ele.price}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Women;
