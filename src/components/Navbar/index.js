import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, SwitchWrapper, SwitchLabel, SwitchInput, SwitchSlider, LabelContainer } from './NavbarStyledComponent'
import { FaBars, FaHome } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = (props) => {

  const { isDarkMode, handleToggle } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()


  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <FaHome size="3rem" />
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#articles'>Articles</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.resume} target="_blank">Download Resume</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content', textAlign: 'center' }} href={Bio.resume} target="_blank">Download Resume</GitHubButton>
          </MobileMenu>
        }
        <SwitchWrapper>
          <LabelContainer>
            <span>Light Mode</span>
            <SwitchLabel>
              <SwitchInput
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
              />
              <SwitchSlider />
            </SwitchLabel>
            <span>Dark Mode</span>
          </LabelContainer>
        </SwitchWrapper>
      </NavbarContainer>

    </Nav>

  )
}

export default Navbar