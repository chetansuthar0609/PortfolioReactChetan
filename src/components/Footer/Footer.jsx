
import style from './Footer.module.css'

const Footer = () => {

    const handleWhatsApp = () => {
  const phone = "919998958207"; // your number with country code
  const message = encodeURIComponent("Hi Chetan, I visited your portfolio and I'm interested in discussing a project or opportunity with you")
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
};

    return (
        <footer className={`${style.footer} py-4`}>
            <div className="container text-center text-md-start">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <p className={`${style.footerText}`}>
                            © {new Date().getFullYear()} Chetan Suthar. All Rights Reserved.
                        </p>
                    </div>
                    <div className={`${style.ftSocial} col-md-6 text-md-end`}>
                        <a href="https://github.com/chetansuthar" target="_blank" rel="noreferrer" className={`${style.footerLink}`}>
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/chetansuthar" target="_blank" rel="noreferrer" className={`${style.footerLink} ms-3`}>
                            LinkedIn
                        </a>
                        <a onClick={handleWhatsApp} className={`${style.footerLink} ms-3`}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer