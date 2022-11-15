  import "./home.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { useEffect,useState } from "react";
import { sendRequest,urlLookup } from "../../settings/settings"

export default function Home() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const bodyChiglel = {
      action: "aimagsum",
    };

    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  },[]);

 
  return (
    <>
    <p>{datas && JSON.stringify(datas.data[9].sumduud[3])}; </p>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
