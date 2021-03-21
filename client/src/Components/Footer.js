import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <NavLink to="/"> &uarr; Back to top &uarr;</NavLink>
            <img src="https://www.iconninja.com/files/521/347/770/euro-currency-symbol-icon.png" alt="" />
            <p>GVA Finance 2021</p>
            <p>@All Rights Reserved &copy;</p>
        </footer>
    );
};

export default Footer;