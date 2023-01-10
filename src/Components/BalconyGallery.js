import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Work.css';
import './Navbar.css';
import Footer from './Footer';
import logo from './images/logo.png';

const BalconyGallery = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    
  let data = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305098/22_xcgbr1.jpg',
    },

    {
      id: 2,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/17_hfloax.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/10_t3xjsn.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/4_rxxefz.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/3_zsraw3.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/1_iwxnby.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/2_cujptv.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305100/20150702_142538_ssft4c.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305103/IMG_0045_rxvlh6.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305103/20150805_105802_wwqlg0.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305104/20150703_144751_rqykms.jpg',
    },
    {
      id: 11,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305105/20150805_105657_ocrqk9.jpg',
    },
    {
      id: 12,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578556/Photo0085_qbuo4k.jpg',
    },
    {
      id: 13,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305105/IMG_0025_aozxe6.jpg',
    },
    {
      id: 14,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305107/IMG_0024_qpomrn.jpg',
    },
    {
      id: 15,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305107/IMG_0057_z7akoz.jpg',
    },
    {
      id: 16,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305108/IMG_0056_nl0iwk.jpg',
    },
    {
      id: 17,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305111/IMG_0053_kukkpr.jpg',
    },
    {
      id: 18,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305111/IMG_0049_ob7ytw.jpg',
    },
    {
      id: 19,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305111/IMG_0054_y4izzk.jpg',
    },
    {
      id: 20,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305112/IMG_0058_cyre3s.jpg',
    },
    {
      id: 21,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305113/IMG_0055_h6hbbm.jpg',
    },
    {
      id: 22,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178370/IMG_0183_azxxhg.jpg',
    },
    {
      id: 23,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305113/IMG_0052_alpbnc.jpg',
    },
    {
      id: 24,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178366/IMG_0150_ttdras.jpg',
    },
    {
      id: 25,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178365/IMG_0151_h1to8i.jpg',
    },
    {
      id: 26,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305117/IMG_0062_llzujh.jpg',
    },
    {
      id: 27,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305118/IMG_0064_l0tpjr.jpg',
    },
    {
      id: 28,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305119/IMG_0061_lopixf.jpg',
    },
    {
      id: 29,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305121/IMG_0070_iecpy2.jpg',
    },
    {
      id: 30,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305122/IMG_0069_vm67dc.jpg',
    },
    {
      id: 31,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305122/IMG_0067_mmugru.jpg',
    },
    {
      id: 32,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305124/IMG_0066_tz56ll.jpg',
    },
    {
      id: 33,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305125/IMG_0065_pdgp5r.jpg',
    },
    {
      id: 34,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305125/IMG_0074_vpgn9f.jpg',
    },
    {
      id: 35,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305126/IMG_0073_q45cfv.jpg',
    },
    {
      id: 36,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305126/IMG_0072_yzwlyv.jpg',
    },
    {
      id: 37,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305129/IMG_0087_vb20kg.jpg',
    },
    {
      id: 38,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305130/IMG_0075_jcujkl.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305131/IMG_0088_bpxu7h.jpg',
    },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305132/IMG_0079_ccbfdy.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305133/IMG_0086_htk12s.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305134/Photo0075_ghyhgs.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305134/Photo0076_gdxvni.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305135/Photo0078_k3pubn.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305135/Photo0077_ugcwjr.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305135/IMG_0289_hnh9rj.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305136/IMG_0172_zhcjyi.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305136/20_eupsni.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305137/IMG_0291_jmoqk9.jpg',
  },
  {
    id: 40,
    imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305138/IMG_0290_dqpbhj.jpg',
  }
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };

  
  return (
    <>
    <div className="header">


      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
             
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
             
              
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
             
            >
              Our Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
            
              
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      <div id="gates">
        <div className={model ? 'model open' : 'model'}>
          <img src={tempimgSrc} alt="" />
          <CloseOutlined onClick={() => setModel(false)} />
        </div>

        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: '100%' }} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-section1">
        <h1> GATES </h1>
        <p>
          Aluminum configuration doors framework is rely upon client's interest
          plan and assembling. This aluminum entryway and window frame are
          various execution is incredible fluctuated door types to meet
          different building needs consultative fashioners can turn out each of
          your choices during your free counsel. You give an image of your space
          and can perceive how your picked present day flight of stairs fits
          with its environmental factors.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default BalconyGallery;
