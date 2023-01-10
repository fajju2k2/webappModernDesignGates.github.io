import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Work.css';
import './Navbar.css';
import Footer from './Footer';
import logo from './images/logo.png';

const GatesGallery = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    // const closeMenu = () => setClick(false);
    let data = [
        {
          id: 1,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178349/IMG_0130_zx40ir.jpg',
        },
    
        {
          id: 2,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178350/20150702_122420_vbhchz.jpg',
        },
        {
          id: 3,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178350/IMG_0077_cukgjd.jpg',
        },
        {
          id: 4,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178351/20150709_100332_ibxzf7.jpg',
        },
        {
          id: 5,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178351/20150725_122300_fmx2uj.jpg',
        },
        {
          id: 6,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178353/20150725_122226_o8bpzo.jpg',
        },
        {
          id: 7,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178387/IMG-20150831-WA0005_ptavtb.jpg',
        },
        {
          id: 8,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178354/20150728_122505_tdalox.jpg',
        },
        {
          id: 9,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178387/IMG-20150831-WA0002_gpxnmr.jpg',
        },
        {
          id: 10,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178355/IMG_0131_pxpmle.jpg',
        },
        {
          id: 11,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178357/20150831_184921_fgth62.jpg',
        },
        {
          id: 12,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178386/IMG-20150709-WA0001_n02csr.jpg',
        },
        {
          id: 14,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178359/20150831_184929_q6adm1.jpg',
        },
        {
          id: 15,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178359/IMG_0133_sfpyxq.jpg',
        },
        {
          id: 16,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178359/IMG_0133_sfpyxq.jpg',
        },
        {
          id: 17,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178385/IMG_0351_qjknrf.jpg',
        },
        {
          id: 18,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178361/IMG_0134_k7skus.jpg',
        },
        {
          id: 19,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178363/IMG_0135_zc4bjy.jpg',
        },
        {
          id: 20,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178363/IMG_0135_zc4bjy.jpg',
        },
        {
          id: 21,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178380/IMG_0307_rxtxzy.jpg',
        },
        {
          id: 22,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178375/IMG_0302_djy3sg.jpg',
        },
        {
          id: 23,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178365/IMG_0151_h1to8i.jpg',
        },
        {
          id: 24,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178366/IMG_0150_ttdras.jpg',
        },
        {
          id: 25,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178368/IMG_0136_mpnfp6.jpg',
        },
        {
          id: 26,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178368/IMG_0181_bjwi2q.jpg',
        },
        {
          id: 27,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178365/IMG_0151_h1to8i.jpg',
        },
        {
          id: 28,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178375/IMG_0302_djy3sg.jpg',
        },
        {
          id: 29,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178378/IMG_0305_b942aw.jpg',
        },
        {
          id: 30,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178380/IMG_0307_rxtxzy.jpg',
        },
        {
          id: 31,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178385/IMG_0303_uutpnx.jpg',
        },
        {
          id: 32,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178385/IMG_0346_ylcmvt.jpg',
        },
        {
          id: 33,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178385/IMG_0351_qjknrf.jpg',
        },
        {
          id: 34,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178355/IMG_0131_pxpmle.jpg',
        },
        {
          id: 35,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178386/IMG_0350_lakte2.jpg',
        },
        {
          id: 36,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178354/20150728_122505_tdalox.jpg',
        },
        {
          id: 37,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178386/IMG_0354_ytl44j.jpg',
        },
        {
          id: 38,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178386/IMG-20150709-WA0001_n02csr.jpg',
        },
        {
          id: 39,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178386/IMG-20150709-WA0002_xx1bug.jpg',
        },
        {
          id: 40,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178387/IMG-20150831-WA0000_cm0pmg.jpg',
        },
        {
          id: 41,
          imgSrc:
            'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178387/IMG-20150831-WA0002_gpxnmr.jpg',
        },
        {
            id: 42,
            imgSrc:
              'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178388/Photo0455_mgbwcw.jpg',
          },
          {
            id: 43,
            imgSrc:
              'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178388/Photo0462_vd6g3p.jpg',
          },
          { 
            id: 44,
            imgSrc:
              'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178395/IMG_0352_qzim2y.jpg',
          },
          {
            id: 45,
            imgSrc:
              'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178403/IMG_0958_qw5cow.jpg',
          },
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
                <img src={item.imgSrc} style={{ width: '100%', maxHeight: '450px' }} alt="img" />
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

export default GatesGallery;
