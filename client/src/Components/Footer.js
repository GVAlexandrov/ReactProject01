import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <NavLink to="/"> &uarr; Back to top &uarr;</NavLink>
            <img src="https://softuni.bg/Content/images/about-page/softuni.png" alt="" />
            <p>Software University - JavaScript Back-End February 2021</p>
            <p>@All Rights Reserved &copy;</p>
        </footer>
    );
};

export default Footer;