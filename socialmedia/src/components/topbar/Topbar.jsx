import "./topbar.css"

export default function Topbar() {
  return (
    <div  className="topbarContainer">
            <div className="topbarLeft">
              <span className="logo">Azaasocial</span>
            </div>
            <div className="topbarCenter">
              <div className="searchbar">
                <Search className="searchIcon"/>
                <input 
                  placeholder="Search for friend, post or video" 
                  className="searchInput"
                />
              </div>
            </div>
            <div className="topbarRight">
              <div className="topbarLinks">
                <span className="topbarLinks">Homepage</span>
                <span className="topbarLinks">Timeline</span>
              </div>  
  )
}
