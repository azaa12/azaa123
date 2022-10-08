import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

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
              <div className="topbarIcon">
            <div className="topbarIconItems">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItems">
              <Chat/>
              <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItems">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.png" alt="" className="topbarImg" />
        </div>
    </div>        
  )
}
