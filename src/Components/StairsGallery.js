import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Work.css';
import './Navbar.css';
import Footer from './Footer';
import logo from './images/logo.png';

const  StairsGallery = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    
  let data = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578517/20150725_172104_fquorx.jpg',
    },

    {
      id: 2,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578517/20150725_172242_daljle.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578518/IMG_0034_biqe82.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578519/20150707_202755_bfl6lg.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578519/20150725_172336_jdmxea.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578522/20150821_150715_r3eu5d.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578522/IMG_0036_oyfjjv.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578523/20150830_131033_ifa4ea.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578523/IMG_0035_sa7azr.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578525/IMG_0037_dk4kbn.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578525/IMG_0033_ch8y6p.jpg',
    },
    {
      id: 11,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578526/20150830_131044_ozazai.jpg',
    },
    {
      id: 12,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578526/20150821_150720_tpzpk6.jpg',
    },
    {
      id: 13,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578526/20150830_131058_qfp5zx.jpg',
    },
    {
      id: 14,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578527/IMG_0039_uhr6ba.jpg',
    },
    {
      id: 15,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578530/IMG_0041_on4d4d.jpg',
    },
    {
      id: 16,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578531/IMG_0030_star9y.jpg',
    },
    {
      id: 17,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578533/IMG_0083_oqz5kl.jpg',
    },
    {
      id: 18,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578535/IMG_0031_kii57k.jpg',
    },
    {
      id: 19,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578537/IMG_0279_lz50yj.jpg',
    },
    {
      id: 20,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578538/IMG_0085_p2nboj.jpg',
    },
    {
      id: 21,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178371/IMG_0182_mrek2k.jpg',
    },
    {
      id: 22,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578538/IMG_0084_kcs7re.jpg',
    },
    {
      id: 23,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578538/IMG_0032_tbjcfp.jpg',
    },
    {
      id: 24,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578541/IMG_0281_bgxe8h.jpg',
    },
    {
      id: 25,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578541/IMG_0282_jvbowb.jpg',
    },
    {
      id: 26,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578541/IMG_0280_wudzyw.jpg',
    },
    {
      id: 27,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578544/IMG_0283_r8xvnw.jpg',
    },
    {
      id: 28,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578544/IMG_0285_hpv8ay.jpg',
    },
    {
      id: 29,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578545/IMG_0284_hxkrzp.jpg',
    },
    {
      id: 30,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578546/IMG_0296_rdpmo7.jpg',
    },
    {
      id: 31,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578546/IMG_0288_u8qe9w.jpg',
    },
    {
      id: 32,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178355/IMG_0131_pxpmle.jpg',
    },
    {
      id: 33,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578550/IMG_0369_edhp7o.jpg',
    },
    {
      id: 34,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578550/IMG_0370_bc8pi6.jpg',
    },
    {
      id: 35,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578552/IMG_0355_zbjvfl.jpg',
    },
    {
      id: 36,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578553/IMG_0933_c4fgr4.jpg',
    },
    {
      id: 37,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578554/Photo0080_lybbxm.jpg',
    },
    {
      id: 38,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578554/Photo0081_yeqjf4.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578554/Photo0082_hmhwwx.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578556/IMG_0935_i4ttyj.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0088_bcir43.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0090_vpe2qm.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0451_jhpusj.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0452_g4qklt.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/IMG_0936_wtupsl.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0453_ik9usi.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0459_y01fgl.jpg',
    },
    {
      id: 39,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0454_fwajub.jpg',
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
                <img src={item.imgSrc} style={{ width: '100%' , maxHeight: '600px' }} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-section1">
        <h1> STAIRS </h1>
        <p>
        Current spaces are characterized by their effortlessness and straight forward plans. Our cutting edge straight flights of stairs includes the spotless lines and mathematical shapes that are normally tracked down in these spaces. The drifting step outline considers an open floorplan, one more staple of present day home plan Current flights of stairs aren't one note in shape or plan. Paragon Steps offers open casing current straight flights of stairs that feature the effortlessness of present day plans. Our advanced winding flights of stairs highlight clean lines and smooth bends to complement your generally sharp edges. Paragon's consultative creators can turn out each of your choices during your free meeting. You give an image of your space and can perceive how your picked present day flight of stairs fits with its environmental elements.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default StairsGallery;
