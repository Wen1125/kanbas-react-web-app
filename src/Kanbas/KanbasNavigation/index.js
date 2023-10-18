import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { AiOutlineClockCircle} from "react-icons/ai";
import { HiOutlineComputerDesktop} from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { BsQuestionCircleFill} from "react-icons/bs";

import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" style={{fontSize: "2.4em"}}/>,
        Dashboard: <AiOutlineDashboard className="wd-icon" style={{fontSize: "2.4em"}}/>,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <MdComputer className="wd-icon" style={{fontSize: "2.4em"}}/>,
        History: <AiOutlineClockCircle className="wd-icon" style={{fontSize: "2.4em"}}/>,
        Studio: <HiOutlineComputerDesktop className="wd-icon" style={{fontSize: "2.4em"}}/>,
        Commons: <PiUsersThreeFill className="wd-icon" style={{fontSize: "2.4em"}}/>,
        Help: <BsQuestionCircleFill className="wd-icon" style={{fontSize: "2.4em"}}/>,
    };
    const {pathname} = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation position-fixed" style={{width:110}}>
            <div className="block"><img src="/images/logo.jpg" style={{width: "90px"}}/></div>
            {links.map((link, index) => (
                <Link key={index} to={`/Kanbas/${link}`} className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {linkToIconMap[link]}
                    <br/>
                    {link}
                </Link>
            ))}
            <div className="block"></div>
        </div>
    );
}
export default KanbasNavigation;