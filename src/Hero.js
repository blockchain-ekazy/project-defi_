function Hero() {
    return (
        <div className="hero">
            <div className="hero-bg">
            <img src={process.env.PUBLIC_URL + "/images/hero/HeroPageBacground.png"} alt="" /></div>
            <div className="hero-container">
            <div className="hero-left">
            <div className="pink supersize">ALWAYS</div>
            <div className="supersize">TALK</div> 
            <div className="supersize">ABOUT</div>
            <div className="supersize">PROJECT</div>
            <div className="supersize">DEFI</div> 
            <div className="hero-text">Project Defi is a unique set of - NFT’s available for minting. Join our movement and become the owner of a hand crafted artwork illustrated by an anonymous illustrative genius. Keep up to date and watch our collection grow. Tell everyone about Project Defi!</div>
            <button type="button" className="button-pink" ><div className="button-text">JOIN&nbsp;DISCORD</div><img className="discord-button" src={process.env.PUBLIC_URL + "/images/hero/DiscordLogoHeroPageButton.png"} alt="" /></button>
            </div>
            
            <div className="hero-right">
            <img className="hero-smiley" src={process.env.PUBLIC_URL + "/images/hero/HeroPageSmileyLogo.png"} alt="" />
            </div>

            </div>
            
            
            
            
            
        </div>
    )
}    
 
export default Hero;