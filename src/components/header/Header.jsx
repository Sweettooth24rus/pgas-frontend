import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return(
        <div className={'Header'}>
            <Link to={'/'} className={'Header__title'}>ПГАС</Link>
            <div>
            <table cellpadding="10">
            <tr>
            <td><Link to={'/recipe/add'} className="Header__modules">Заявки по
            учебной деятельности</Link></td>
            <td><Link to={'/recipe/add'} className="Header__modules">Заявки по
            научно-исследовательской деятельности</Link></td>
            <td><Link to={'/recipe/add'} className="Header__modules">Заявки по
            общественной деятельности</Link></td>
            <td><Link to={'/recipe/add'} className="Header__modules">Заявки по
            культурно-творческой деятельности</Link></td>
            <td><Link to={'/recipe/add'} className="Header__modules">Заявки по
            спортивной деятельности</Link></td>
            <td><Link to={'/modules'} className={'Header__modules'}>
            Рейтинг</Link></td>
            <td><Link to={'/modules'} className={'Header__modules'}>
            Личный кабинет</Link></td>
            </tr>
            </table>
            </div>
        </div>
    )
}

export default Header;
