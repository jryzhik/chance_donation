import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="gallery">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Some photos from
                  <br />
                  our recent trips
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Camp 2021</span>
                      <h3 className="title">
                        <span>Orphan Fathership</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=YD-q5dcGCSg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youth Camp 2022</span>
                      <h3 className="title">
                        <span>Pre-Service</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Orphan Camp 2022</span>
                      <h3 className="title">
                        <span>Sharing the Gospel</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youth Camp 2022</span>
                      <h3 className="title">
                        <span>Girl Talks</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Orphan Camp 2021</span>
                      <h3 className="title">
                        <span>Firepit Fellowship</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link zoom"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
