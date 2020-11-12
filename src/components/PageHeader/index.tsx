import React from 'react';
import { MdHome, MdPerson, MdDateRange } from 'react-icons/md'
import { 
    Header,
    TopBar,
    LogoBar,
    ButtonsBar
} from './styles';

import { Link } from 'react-router-dom';

function PageHeader() {
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
                        <Link to="/home"><MdPerson /></Link>
                    </ButtonsBar>
                </TopBar>
            </Header>
            
        </>
    );
}

export default PageHeader;