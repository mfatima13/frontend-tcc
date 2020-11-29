import React from 'react';
import { MdHome, MdPerson, MdDateRange, MdArrowDropDown, MdArrowBack, MdPersonOutline } from 'react-icons/md'
import { 
    Header,
    TopBar,
    LogoBar,
    ButtonsBar,
    Dropdown,
} from './styles';

import { Link } from 'react-router-dom';
import api from '../../services/api';

function PageHeader() {

    const token = localStorage.getItem("token");

    async function logout() {
        await api.post("/users-api/rest-auth/logout/", {
            token
        });

        localStorage.removeItem("token");
    };

    return (
        <>
            <Header>
                <TopBar>
                    <LogoBar>
                        <span>TCC</span>
                    </LogoBar>
                    <ButtonsBar>
                        <Link to="/home">Home <MdHome /></Link>
                        <Link to="/home">Calendário <MdDateRange /></Link>
                        
                        <Dropdown>
                            <button><MdPerson /><MdArrowDropDown /></button>
                            <div className='dropdown-content'>
                                <Link to="/" onClick={logout}>
                                    <MdPersonOutline />
                                    Perfil
                                </Link>
                                <Link to="/" onClick={logout}>
                                    <MdArrowBack />
                                    Logout
                                </Link>
                            </div>
                        </Dropdown>
                        
                        
                    </ButtonsBar>
                </TopBar>
            </Header>
            
        </>
    );
}

export default PageHeader;