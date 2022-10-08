import "./home.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </> 
  )
}
