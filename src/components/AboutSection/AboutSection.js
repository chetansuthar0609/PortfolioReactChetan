
import style from "./AboutSection.module.css"
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import Footer from '../Footer/Footer';
import { SiExpress } from "react-icons/si";
import resume from '../../utils/resume.pdf'
import toast, { Toaster } from 'react-hot-toast';

const AboutSection = () => {

    const notify = () => toast('✅ Resume downloaded successfully!');

    return (
        <div className={` ${style.main}`}>
            <Header />
            <div className={`container ${style.aboutSection} py-5`}>
                <div className='row justify-content-center text-center text-md-start'>
                    <div className='col-12'>
                        <h1 className={`m-0 ${style.selfname}`}>Hi I'm Chetan Suthar</h1>
                        <h4 className={`m-0 mb-4 ${style.position}`}>Get to know me</h4>
                    </div>

                    <div className='col-12'>
                        <p className={`${style.aboutText}`}>
                            I’m a motivated and detail-oriented Full Stack Developer with a passion for building modern, responsive web applications. I have hands-on experience with HTML, CSS, JavaScript, React, Node.js, Express, and both SQL and NoSQL databases, including MySQL and MongoDB.
                        </p>
                    </div>

                    <div className='col-12  text-center text-md-start'>
                           <a href={resume} download="ChetanSutharResume.pdf"> 
                        <Button variant="outline-secondary" className={style.btn} onClick={notify}>
                            Download Resume
                        </Button>
                        <Toaster position="bottom-right"/>
                            </a>
                    </div>

                    <div className='col-12  mt-5'>
                        <h2 className='text-white'>Skills</h2>
                        <h4 className={`mb-3 ${style.position}`}>
                            The skills, tools & technologies I am really good at:
                        </h4>

                        <div className='row g-3 justify-content-center'>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.htmltag} text-center`}>
                                    <FaHtml5 />
                                    <p>HTML5</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.csstag} text-center`}>
                                    <IoLogoCss3 />
                                    <p>CSS3</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.bootstraptag} text-center`}>
                                    <DiBootstrap />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.jstag} text-center`}>
                                    <TbBrandJavascript />
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.reactjstag} text-center`}>
                                    <RiReactjsFill />
                                    <p>ReactJS</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.nodejstag} text-center`}>
                                    <IoLogoNodejs />
                                    <p>NodeJS</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.nodejstag} text-center`}>
                                    <SiPostman />
                                    <p>Postman</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.mysqltag} text-center`}>
                                    <SiMysql />
                                    <p>MySQL</p>
                                </div>
                            </div>
                            <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.mongotag} text-center`}>
                                    <SiMongodb />
                                    <p>MongoDB</p>
                                </div>
                            </div>
                             <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                                <div className={`${style.expresstag} text-center`}>
                                    <SiExpress />
                                    <p>Express JS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    )
}

export default AboutSection