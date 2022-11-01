import React from 'react';
import {FiDownloadCloud} from 'react-icons/fi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import {side, socialIcon} from '../data/data';
import sideImg from "./../../images/side.jpg";
import "./../../scss/side.scss";

let Progress = ({done,title,back}) => {
    return (
        <div className="progress">
            <div className={`progress_done ${back}`} style={{opacity: 1, width: `${done}%`}}></div>
            <div className="progress_num">
                <h4>{done}.</h4>
            </div>
            <div className="progress_title">
                <h3>{title}.</h3>
            </div>
        </div>
    )
}

const Sidebar = () => {
    return ( <> <section className="sidebar">
        <div className="sidebar_top">
            <div className="sidebar_top_img">
                <img src={sideImg} alt="person"/>
                <div className="sidebar_top_img_name">
                    <h3>Linda M. Bellamy</h3>
                    <span>Sr. Developer</span>
                </div>
            </div>
            <div className="sidebar_top_social">
                {socialIcon.map((icon) => (
                    <div className={icon.class}>
                        <span>{icon.icon}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="sidebar_bottom">
            <div className="sidebar_bottom_skill">
                {side.map((item) => (
                    <div className="sidebar_skill_box">
                        <Progress title={item.text} done={item.num} back={item.class}/>
                    </div>
                ))}
            </div>
            <div className="sidebar_bottom_buttonGroup">
                <button className="sm_button">
                    <span>
                        <FiDownloadCloud className="button_bicon"/>
                    </span>
                </button>
                <button className="button">
                    <span>
                        <RiMoneyDollarCircleLine  className="button_bicon"/>
                        <span>Hire Me</span>
                    </span>
                </button>
            </div>
        </div>
    </section> </>
  );
}

export default Sidebar