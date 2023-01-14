import React from 'react'
import "./BannerTop.css"
import colorful from "../../../asset/colorful.png"
import portal from "../../../asset/Portal.svg"
import {BsInstagram} from "react-icons/bs"
import {FaFigma} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import inLogo from "../../../asset/in.jpg"
import last from "../../../asset/last.jpg"
import dawn from "../../../asset/Dawn.svg"
import { IoIosArrowForward} from "react-icons/io"
import "./Banner-media.css"
function BannerTop() {
  return (
    <div id='banner-top' className='banner__top'>
        <div className="main__top">
            <div className="left__top">
                <h1 className='anton'>PRODUCT DESIGNER</h1>
                <img className='portal' src={portal} alt="" />
                <h1 className='gradient'>CRISTIAN MUÑOZ</h1>
                <div className="socials">
                    <BsInstagram/>
                    <FaFigma/>
                    <img src={inLogo} alt="" />
                    <FaTwitter/>
                    <FaTelegram/>
                    <img src={last} alt="" />
                </div>
                <button className='dowload'>Download Curriculum Vitae</button>
            </div>
            <div className="right__top">
                <img src={colorful} width={550} alt="" />
            </div>
        </div>

        <div className="persent">
            <div className="persent_item">
                <h1>90%</h1>
                <h3>Job Success Score on Upwork</h3>    
            </div>    
            <div className="persent_item">
                <img src={dawn} alt="" />
            </div>    
            <div className="persent_item">
                <h1><IoIosArrowForward/> 25.000</h1>
                <h3 className='h3'>Duplicates on Figma Community</h3>
            </div>    
            <div className="persent_item">
                <img src={dawn} alt="" /> 
            </div>    
            <div className="persent_item">
                <h1><IoIosArrowForward/> 2K</h1>
                <h3 className='h3_2'>In Finished Works</h3>
            </div>
        </div>        
    </div>  
  )
}

export default BannerTop