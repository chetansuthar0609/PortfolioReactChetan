import React from 'react';
import work1 from './work1.png'
import work2 from './work2.png'
import work3 from './work3.png'
import work4 from './UntitleUI.png'
import Header from '../Header/Header';
import style from './ProjectSection.module.css'
import Footer from '../Footer/Footer';


const Projects = () => {
  const projects = [
    {
      image: work1,
      title: 'Travel Blog',
      year: '2025',
      description: `Begin an expedition that nurtures the spirit and broadens your perspective. Whether you are traversing stunning vistas or delving into your own reflections, each journey presents a chance for personal development and exploration.`,
      link: `https://3z2uhgnzi2zksqsmyfnviw.on.drv.tw/trip&mind.com/`
    },
    {
      image: work2,
      title: 'E-commerce Clothing Store',
      year: '2025',
      description: `Elevate your fashion game with MEJIWOO — where comfort seamlessly blends with style! From timeless staples to contemporary trends, our collection ensures you radiate confidence and comfort.`,
      link: 'https://3z2uhgnzi2zksqsmyfnviw.on.drv.tw/mejiwoo.com/'
    },
    {
      image: work3,
      title: 'Interior Design Collaboration',
      year: '2025',
      description: `A design furniture website offering high-quality, customizable, and stylish furniture that prioritizes both function and aesthetics.`,
      link: 'https://3z2uhgnzi2zksqsmyfnviw.on.drv.tw/solve.com/'
    },
    {
      image: work4,
      title: 'Simple UI',
      year: '2025',
      description: `Discover simple, transparent business credit cards designed to help entrepreneurs grow. No hidden fees, easy management, and full control.`,
      link: 'https://3z2uhgnzi2zksqsmyfnviw.on.drv.tw/sampleui.com/'
    }, 
  ];

  return (
    <div className={`${style.project}`}>
      <Header />
      <section
        id="section2"
        className="w-100 d-flex justify-content-center py-5"
        style={{ backgroundColor: 'rgb(14, 12, 12)', color: 'white' }}
      >
        <div className="w-100 px-3" style={{ maxWidth: '1200px' }}>
          <div>
            <h1 className="text-start mb-4">Featured Works</h1>

            {projects.map((proj, index) => (
              <div key={index} className="d-md-flex my-4 gap-4 align-items-start">
                <div className="w-100 w-md-50 mb-3 mb-md-0">
                  <a href={proj.link}><img
                    src={proj.image}
                    alt={proj.title}
                    className={`${style.project_img} img-fluid rounded-2`}
                  /></a>

                </div>
                <div className="w-100 w-md-50">
                  <h3 className="fw-bold my-2 d-flex align-items-center gap-2">
                    <a href={proj.link} className="text-decoration-none text-white">{proj.title}</a>
                    <span className="badge bg-light text-dark">{proj.year}</span>
                  </h3>
                  <h4 className="fw-semibold fs-5 ms-1 opacity-75">Description</h4>
                  <p className="ms-1" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
