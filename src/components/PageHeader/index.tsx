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
import { useAuth } from '../../hooks/AuthContext';

function PageHeader() {

    const { signOut } = useAuth();

    async function logout() {
        signOut();
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
                                <Link to="/">
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