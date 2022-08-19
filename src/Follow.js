function Follow() {
    return (
        <div className="follow">
            <img className="follow-bg" src={process.env.PUBLIC_URL + "/images/follow/ElementsPageBackground.png"} alt="" />
            <div className="follow-header"><div className="pink"> FOLLOW&nbsp;</div> PROJECT DEFI</div>
            <div className="follow-media-icon-container"> <img className="follow-media-icon" src={process.env.PUBLIC_URL + "/images/follow/InstagramFollowUsIcon.png"} alt="" />
            <img className="follow-media-icon" src={process.env.PUBLIC_URL + "/images/follow/YoutubeFollowUsIcon.png"} alt="" />
            <img className="follow-media-icon" src={process.env.PUBLIC_URL + "/images/follow/TwitterFollowUsIcon.png"} alt="" />
            </div></div>
    )
}    
 
export default Follow;