const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">10</h3>
              <span className="experience">Years of Faithful Missions</span>
              <h3 className="name">Chance</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About us</span>
              </h3>
            </div>
            <div className="text">
              <p>
             We are a group of Christian volunteers from
               different states of America and local churches of the area
                where our camps take place, whose hearts are burning with
                 love for young people. The main goal is to spread the <b>Gospel</b> by
                  word and deed. Being taught an important principle of living on the
                   basis of the Word, they strive to tell others about it.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download Brochure{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              <img src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default About;
