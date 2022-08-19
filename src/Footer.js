function Footer() {
    return (
        <div className="footer">
            <img className="footer-bg" src={process.env.PUBLIC_URL + "/images/footer/BottomMenuBar.png"} alt="" />
            <div className="footer-container">
            <div className="footer-logo"><img src={process.env.PUBLIC_URL + "/images/footer/LogoTextBottomMenuBar.png"} alt="" /></div>
            <div className="footer-menu-item">Home</div>
            <div className="footer-menu-item">About</div>
            <div className="footer-menu-item">Roadmap</div>
            <div className="footer-menu-item">Follow&nbsp;Us</div>
            <div className="footer-menu-item">Founder</div>
            <div className="footer-menu-item">Contact</div>
            
            <div className="footer-menu-icon-holder">
            <div className="footer-menu-icon-first"><img src={process.env.PUBLIC_URL + "/images/navbar/WalletMenuIcon.png"} alt="" /></div>
            <div className="footer-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/DicordMenuIcon.png"} alt="" /></div>
            <div className="footer-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/TwitterMenuIcon.png"} alt="" /></div>
            <div className="footer-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/YoutubeMenuIcon.png"} alt="" /></div>
            <div className="footer-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/Instagram Menu Icon.png"} alt="" /></div>
            </div>
            </div>
        </div>
    )
}

export default Footer;