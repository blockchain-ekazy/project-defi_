function About() {
    return (
        <div className="about">
            <img className="about-bg" src={process.env.PUBLIC_URL + "/images/about/AboutUsBackground.png"} alt="" />
            <img className="about-splash" src={process.env.PUBLIC_URL + "/images/about/AboutUsPaintSplatter.png"} alt="" />
            <div className="about-content"><div className="about-story"> <div className="pink about-our">OUR</div> STORY</div>
            <div className="about-text">An anonymous soap salesman starts Projeect Defi. It's goal is to disrupt the current fiat system.
            <br /><br />
            An extremely unique 10k nft project. With the focus being on bars of Project Defi soap. Uniting like minded people thhat are frustrated with conventional banking and the manipulation of fiat currency. Focusing on community and a unique approach on how to properly create a Blue-chip NFT. </div> 
            <img className="about-brad-pitt"src={process.env.PUBLIC_URL + "/images/about/AboutUsBradPittImage.png"} alt="" />
            </div>
        </div>
    )
}    
 
export default About;