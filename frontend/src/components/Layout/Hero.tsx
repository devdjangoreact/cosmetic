import Image from "next/image";
import React, { useEffect, useState } from "react";
import { heroslider1, heroslider2 } from "@/images/index";

import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [heroslider1, heroslider2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="hero-slider-section">
        <div className="hero-slider-active swiper-container">
          <div className="swiper-wrapper">
            <Carousel autoPlay showStatus={false}>
              {images.map((image) => (
                <div className="hero-single-slider-item swiper-slide swiper-slide-duplicate-active">
                  <div className="hero-slider-bg">
                    <Image src={image} alt="" />
                  </div>

                  <div className="hero-slider-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-auto">
                          <div className="hero-slider-content">
                            <h4 className="subtitle">New collection</h4>
                            <h2 className="title">
                              Best Of NeoCon <br />
                              Gold Award
                            </h2>
                            <Link
                              href="/shop"
                              className="btn btn-lg btn-outline-golden"
                            >
                              shop now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
