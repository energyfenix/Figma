import React from 'react'
import "./Footer.css"
import baby from "../../asset/baby.png"
import child from "../../asset/child.png"
import adult from "../../asset/adult.png"
import zigzag from "../../asset/zigzag.png"
import wepik from "../../asset/wepik.png"
import "./Footer-media.css"
function Footer() {
  return (
    <div className='footer'>
        <div className="about">
                <div className="about__child">
                    <div className="child__text">
                        <h1>ABOUT ME  <img src={zigzag} width={200} alt="" /></h1>
                        <p>
                        I am a <span>Product Designer</span>  and Frontend Developer, I fully understand the process of design and development of a digital product, my job is to make a product usable and visually appealing, through the <span>Design Thinking</span>  methodology I manage to create products that are endearing to users.

                        </p>
                    </div>
                    <div className="child__img">
                        <img src={baby} width={600} alt="" />
                    </div>

                </div>  
                <div className="about__child">
                    <div className="child__img">
                        <img src={child} width={600} alt="" />
                    </div>
                    <div className="child__text">
                        <p>
                        I am passionate about <span>never stop learning</span> , I am constantly training and learning about new and changing 
                         <span>technology</span>  trends that way I bring an updated opinion of the Tech industry.

                        </p>
                    </div>

                </div> 
                <div className="about__child">
                    <div className="child__text">
                        <p>
                        My full name is <span>Cristian David Muñoz Camayo</span>  and more than what I said before I am a dreamer, I am proudly Colombian and in me you will find a human being with the desire to do his best to help others.

                        </p>
                    </div>
                    <div className="child__img">
                        <img src={adult} width={600} alt="" />
                    </div>

                </div> 
        </div>  

        <div className="purple">
                <div className="purple__img">
                    <img src={wepik} width={250} alt="" />
                </div>
                <div className="purple__text">
                    <p>Thanks for visit to my website</p>
                    <p>If you have any questions you can write me to any of my social networks, I am sure I will answer you.</p>
                </div>
        </div>
    </div>
  )
}

export default Footer