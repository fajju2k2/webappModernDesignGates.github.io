import React from 'react';
import './About.css';
import About1 from './images/About/About1.jpeg';
import About2 from './images/About/About2.jpeg';
import About3 from './images/About/About3.jpeg';

const About = () => {
  return (
    <>
      <div className="about-section1" id="About">
        <h1>About Modern Design Gates</h1>
        <p>
          <h4>
            Modern Gates Design, MDG, is associated with the Iron Silver and
            Aluminum goods, and Industries all over Pakistan since 1980. We are
            the largest traders of components and accessories, along with being
            the top quality manufacturer of adhesives in Pakistan. With our vast
            range of over different products, 2 offices, strong with country
            wide distribution network we strive to provide the best and latest
            products and service to all our customers. -Over three generations
            of Experience - Complete range of products for Iron Silver and
            Aluminum industry - Wide Distribution Network
            We are eminent for making driving Iron Sliver and Aluminum glues and materials for top brands in Pakistan. We comprehend that each maker has a remarkable creation process. Along these lines, we engineer, create, and reformulate our items to guarantee they are customized to each client's singular cycle.
MDG ensures every one of your products are reinforced with their tough and arrangements. Our incredibly amazing items are great for holding different sorts of Iron Bit and Aluminum, including and that's only the tip of the iceberg. We are pleased to be the main organization in Pakistan and have our items utilized by 4+ brands.
Now is the ideal time to take the Choice! Here is your manual for the best for each kind of art or office project you work on.
          </h4>
        </p>
      </div>
      <div className="about-section2">
        <h3>Founder</h3>
        <p>
        As you explore our site, I genuinely want to believe that you get familiar with the characteristics that make our organization an extraordinary supplier of fundamental private and Corporate Area administrations and a superb spot to fabricate a profession.
We have gained the trust and appreciation of our clients for one basic explanation — we have incredible individuals. They are specialists in their fields. They carry serious areas of strength for an ethos to all that they do. They invest heavily and proprietorship in the positions they do. We bring enthusiasm, pride and experience together.
        </p>
        <p>CEO</p>
        <p>MUHAMMAD AKBAR SHEIKH </p>
      </div>
      <div className="about-section1">
        <h1>Mission</h1>
        <p>
          <h4>
            Our main goal is to lay out Pakistan iron Silver and Aluminum
            industry as the world's driving producer of value item through
            taking on inventive thoughts, most recent innovation and
            exploration. We attempt to turn into the exceptional unrefined
            substance provider for Iron and silver merchandise and unified
            businesses all over the planet. We are focused on giving new parts
            of care and attention to end clients, taking on fair practices,
            persistently further developing industry benchmarks, while being
            socially dependable and ecologically reasonable.
          </h4>
        </p>
      </div>

      <div className="about-section1">
        <h1>Vission</h1>
        <p>
          <h4>
            Our vision is to be relentlessly creative in investigating new
            business roads around us, supporting our driving situation in the
            Silver Aluminum industry and continue pushing limits to expand the
            developing modern worldwide impression of Pakistan.
          </h4>
        </p>
      </div>

      <div className="about-section1">
        <h1>Innovations</h1>
        <p>
          <h4>
            At MDG, the adhesive solutions division, innovation strategy and
            specialty materials are closely linked. We are working to develop
            smart, custom-designed products at the molecular or nanoscale level,
            pushing the boundaries of adhesive technologies ever further to turn
            adhesives into real specialty materials
          </h4>
        </p>
      </div>
      <div className="about-section1">
        <h1>Policy</h1>
        <p>
          <h4>
            To guarantee accessibility of our items as per the present as the
            need might arise of our significant customer base through sound
            relationship, perceiving our representatives potential and to be
            mindful corporate resident adding to the public development
          </h4>
        </p>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={About1} alt="About1" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={About2} alt="About2" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={About3} alt="about3" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className="mainourteam">
        <h2>Our Network </h2>
        <h4>
          Our broad information, experience, and skill have empowered us to grow
          to various districts of Pakistan. Today, we are fabricating excellent
          glues and answers for driving Iron-production, Aluminum merchandise,
          overlay, and Bit working organizations. With our demonstrated history
          in giving top notch cement arrangements, fantastic specialized help,
          and commendable client support, we are strategically situated to keep
          on fulfilling the needs of this quickly developing industry.
        </h4>
      </div>
    </>
  );
};

export default About;
