const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Life-Changing
                <br />
                Testimonies
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/testimonials/${dark ? 2 : 1}.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “From the bottom of my heart I want to say thank you for all 
                  your efforts that you've put to create such a powerful spiritual 
                  place. I loved absolutely every activity
                     we have done and every second I spent there! And I also made a 
                     lot of new friends. The camp has filled me both mentally and spiritually, 
                     because you showed the greatest kindness and interest literally to every 
                     child in the camp. Furthermore, I'd like to express special gratitude to 
                     my teachers during our Bible study, Nadia, Sergey and Lena. I should say
                     I was really blessed to have you in my life for this week, because you've 
                     taught me so much that now I look at life from a different angle. 
                     Thanks a lot. I am truly grateful to all the chance team. ”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Liza</span>
                </h3>
                <span className="job">Orphan Camp 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
