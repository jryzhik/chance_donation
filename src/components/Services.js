import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";
import Counter from "./Counter";

const counts = [
  { name: "Orphan Camp Left", value: 15300 },
  { name: "Youth Camp Left", value: 11250 },
  { name: "Raised", value: 5800 },
  // { name: "Own Projects", value: 12 },
];


const serviceData = [
  {
    name: "Orphan Camp",
    img: "img/service/1.jpg",
    description: [
      "Children left without parental care are the unprotected and vulnerable part of society. These kids are no worse than those who live in families, but left without a family or being brought up by inadequate parents, they lose the habit of social life and close in on themselves. Over time, they convince themselves that they are second-class and that an ordinary, full life with all its prospects and customs is not for them.",
      "They, while still living in a boarding school, set themselves up for a criminal, rampant, irresponsible life, since this, in their opinion, is the only thing they are capable of.",
      "For many years we have been running seven-day camps for teenagers aged 12-16. We tell them the Gospel and by our own example we show a new life with Christ. The Lord works miracles! He destroys the devil-built lies in their hearts, making them new creations in Jesus Christ.",
    ],
  },
  {
    name: "National Youth Camp",
    img: "img/service/2.jpg",
    description: [
      "In every new generation there are future doers of God’s work that need to be trained up. Who will follow our generation and carry the banner of faith, preaching the Gospel to the ends of the earth? Those, who in their youth, were trained up and instructed in the teachings of the Lord, which the Scripture says will stay faithful even in their old age.",
      "In organizing our youth camps, we hold several goals: " ,
      "1. Strengthening the Christian youth in the foundation and sound doctrine of the Lord", 
      "2. Preaching the Gospel to the unbelieving youth. Usually, these are the friends of the Christian youth who they invite the the camps, and those who we evangelize to on streets, restaurants, and other common locations." ,
      "3. We introduce orphans who are aging out of their orphanages (which we’ve worked with for many years) to Christian youth, hoping to connect them to their local churches and youth groups. This is a new ministry for Chance, but already over a few years it has reaped its own effectiveness and need.",
    ],
  },
  {
    name: "Mission Scholarship",
    img: "img/service/3.jpg",
    description: [
      "Our team consists of 100% volunteers. Quite often, we have young people with a great zeal for ministry but the expenses of the trip can be too large to cary oneself. With the Mission Scholarship Fund, we are able to partially cover some mission expenses for volonteers from all across the globe!"
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="projects">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Summer
                  <br />Projects
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
      {/* COUNTER */}
      <div className="mobileRow">
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
              
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        $<Counter end={count.value} /> 
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default Services;
