import React from 'react';
import { MdHome, MdPerson, MdDateRange, MdAdd } from 'react-icons/md'
import { 
    Header,
    TopBar,
    LogoBar,
    ButtonsBar,
    Section,
    BtnContainer
} from './styles';

import { Link } from 'react-router-dom';

const PageHeader: React.FC = (props) => {
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
            <Section>
                <BtnContainer>
                    <button>
                        <MdAdd />
                        Novo
                    </button>
                    <hr/>
                </BtnContainer>
                <div></div>                
            </Section>
        </>
    );
}

export default PageHeader;