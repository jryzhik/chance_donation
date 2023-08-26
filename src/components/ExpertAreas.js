import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import ProgressBar from "./ProgressBar";
import { checkout } from "../../checkout";
import Image from "next/image";
import ButtonSelect from "./buttonSelect";



const skills = [
  { name: "Support 1 Orphan", value: "160", icon: "img/svg/1.svg", quantity: 1 },
  { name: "Support 2 Orphans", value: "320", icon: "img/svg/2.svg", quantity: 2 },
  { name: "Support 3 Orphans", value: "480", icon: "img/svg/3.svg", quantity: 3 },
  { name: "Support 4 Orphans", value: "640", icon: "img/svg/4.svg", quantity: 4 },
  { name: "Support 5 Orphans", value: "800", icon: "img/svg/5.svg", quantity: 5 },
  { name: "Donate Custom", value: "", icon: "img/svg/enter.svg", quantity: 0, override: 'https://donate.stripe.com/14kaGd0yS362aA0aEE' },
];

const experiences = [
  { name: "Bring 1 Young Person", value: "95", icon: "img/svg/1.svg", quantity: 1 },
  { name: "Bring 2 Young People", value: "190", icon: "img/svg/2.svg", quantity: 2 },
  { name: "Bring 3 Young People", value: "285", icon: "img/svg/3.svg", quantity: 3 },
  { name: "Bring 4 Young People", value: "380", icon: "img/svg/4.svg", quantity: 4 },
  { name: "Bring 5 Young People", value: "475", icon: "img/svg/5.svg", quantity: 5 },
  { name: "Donate Custom", value: "", icon: "img/svg/enter.svg", quantity: 0, override: 'https://buy.stripe.com/fZe5lT4P8dKGgYo6op' },
];

// const experiences = [
//   {
//     company: "Bauen Software Inc.",
//     designation: "Product Designer",
//     time: "2021 - Present",
//   },
//   {
//     company: "Bauen Software Inc.",
//     designation: "UX Designer",
//     time: "2020 - 2021",
//   },
//   {
//     company: "Bauen Software Inc.",
//     designation: "UI Designer",
//     time: "2018 - 2020",
//   },
//   {
//     company: "Bauen Software Inc.",
//     designation: "Web Designer",
//     time: "2016 - 2018",
//   },
// ];

const educations = [
  {
    institution: "Stanford Univercity",
    certificate: "Web Design Course",
    time: "2021 - Present",
  },
  {
    institution: "Art Univercity of New York",
    certificate: "Art Director Course",
    time: "2020 - 2021",
  },
  {
    institution: "Amazon College",
    certificate: "IOS Development",
    time: "2018 - 2020",
  },
  {
    institution: "Univercity of Texas",
    certificate: "UX Expert",
    time: "2017 - 2018",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      Please Donate!
                      <br />
                      Make this happen
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    As volunteers with no designated funding, every year preparing for 2 large summer projects with 500+ attendees is
                    an enormous <b>leap of faith</b>.
                  </p>
                  <p>
                    We are praying that God makes another miracle and through you, we will be able to serve in 2023.
                  </p>
                </div>
                <ProgressBar />
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Orphans</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Youth </span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Scholarship</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner" onClick={(() => {
                              skill.quantity === 0 ?
                                location.href = 'https://donate.stripe.com/14kaGd0yS362aA0aEE' :
                                checkout({
                                  lineItems: [
                                    {
                                      price: String(process.env.NEXT_PUBLIC_ORPHAN_SUPPORT_PRICE),
                                      quantity: skill.quantity,
                                    }
                                  ]
                                }, 0)
                            })}>
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}$)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <div id="tab_1" className={`wrapper ${activeContentTab(2)}`}>
                      <div className="youthexp">
                        <ul>
                          {experiences.map((skill, i) => (
                            <li key={i}>
                              <div className="list_inner" onClick={(() => {
                                skill.quantity === 0 ?
                                  location.href = 'https://buy.stripe.com/fZe5lT4P8dKGgYo6op' :
                                  checkout({
                                    lineItems: [
                                      {
                                        price: String(process.env.NEXT_PUBLIC_YOUTH_SUPPORT_PRICE),
                                        quantity: skill.quantity,
                                      }
                                    ]
                                  }, 1)
                              })}>
                                <span className="icon">
                                  <span className="in">
                                    <img
                                      className="svg"
                                      src={skill.icon}
                                      alt=""
                                    />
                                  </span>
                                </span>
                                <p className="name">
                                  {skill.name} <span>({skill.value}$)</span>
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>

                    <div className="scholaButton">
                      <div className="orido_tm_boxed_buttonschol">
                        <a className="anchor" href="https://buy.stripe.com/bIY15DbdwbCygYo7su">
                          Give to Scholarship FUND{" "}
                          <img className="svg" src="img/svg/donate.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
    </Fragment>
  );
};
export default ExpertAreas;
