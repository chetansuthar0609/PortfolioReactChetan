import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import style from './SkillSection.module.css'


const SkillSection = () => {
    return (
        <div className={`${style.main} w-100`}>
            <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
                <h1 className={`m-0 ${style.selfname}`}>My Skills</h1>
                <h4 className={`m-0 ${style.position}`}>What I Know</h4>
            </div>
            <marquee behavior='alternate'>
                <div className='d-flex justify-content-between align-items-center m-3'>
                    <div className={`${style.htmltag} text-center`}>
                        <FaHtml5 />
                        <p>HTML5</p>
                    </div>
                    <div className={`${style.csstag} text-center`}>
                        <IoLogoCss3 />
                        <p>CSS3</p>
                    </div>
                    <div className={`${style.bootstraptag} text-center`}>
                        <DiBootstrap />
                        <p>BootStrap</p>
                    </div>
                    <div className={`${style.jstag} text-center`}>
                        <TbBrandJavascript />
                        <p>JavaScript</p>
                    </div>
                    <div className={`${style.reactjstag} text-center`}>
                        <RiReactjsFill />
                        <p>ReactJS</p>
                    </div>
                    <div className={`${style.nodejstag} text-center`}>
                        <IoLogoNodejs />
                        <p>NodeJS</p>
                    </div>
                    <div className={`${style.nodejstag} text-center`}>
                        <SiPostman />
                        <p>Postman</p>
                    </div>
                </div>
            </marquee>
        </div>
    )
}

export default SkillSection