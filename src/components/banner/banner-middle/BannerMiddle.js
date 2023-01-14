import React from 'react'
import "./BannerMiddle.css"
import "./Middle-media.css"
import {CARDS, STATISTIKA} from "../../../static/index"
function BannerMiddle() {
  return (
    <div className='banner__middle'>
        <h1>PORTFOLIO</h1>
                <div id='portfolio' className="card_main">
                    {
                        CARDS?.map((item,inx)=><div key={inx} className='card'>
                            <img src={item.url} width={280} alt="" />
                            <h3>{item.title}</h3>
                            <p>
                                <span>UX Design</span>
                                <span>Universty</span>
                                <span>JavaScript</span>
                            </p>
                            <button
                            >{item.btn}</button>
                        </div>)
                    }
                </div>

        <div id='skill' className="skills">
                    <h1>SKILLS</h1>
                    <div className="diogram">
                            {
                                STATISTIKA?.map((i,b)=><div key={b} className="card-2">
                                    <h4 className='absolute'>97%</h4>
                                    
                                    
                                    <div className="flex">
                                    <img src={i.url} alt="" />
                                    <div className="flex_title">
                                    <h3>{i.title}</h3>
                                    <p>{i.desc}</p>
                                    </div>
                                    </div>
                                </div>)
                            }
                    </div>
        </div>   

     
            
    </div>
  )
}

export default BannerMiddle