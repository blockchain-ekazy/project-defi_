function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-bg"><img src={process.env.PUBLIC_URL + "/images/navbar/HeroMenuBar.png"} alt="" /></div>
            <div className="navbar-container">
            <div className="navbar-logo"><img src={process.env.PUBLIC_URL + "/images/navbar/MenuProjectDefiLogo.png"} alt="" /></div>
            <div className="navbar-menu-item">Home</div>
            <div className="navbar-menu-item">About</div>
            <div className="navbar-menu-item">Roadmap</div>
            <div className="navbar-menu-item">Follow&nbsp;Us</div>
            <div className="navbar-menu-item">Founder</div>
            <div className="navbar-menu-item">Contact</div>
            
            <div className="navbar-menu-icon-holder">
            <div className="navbar-menu-icon-first"><img src={process.env.PUBLIC_URL + "/images/navbar/WalletMenuIcon.png"} alt="" /></div>
            <div className="navbar-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/DicordMenuIcon.png"} alt="" /></div>
            <div className="navbar-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/TwitterMenuIcon.png"} alt="" /></div>
            <div className="navbar-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/YoutubeMenuIcon.png"} alt="" /></div>
            <div className="navbar-menu-icon"><img src={process.env.PUBLIC_URL + "/images/navbar/Instagram Menu Icon.png"} alt="" /></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;