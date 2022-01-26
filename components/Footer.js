import styled from 'styled-components'
import Link from 'next/link'

const FooterSection = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #24243557;
    border-top: 1px solid #ffffff14;
    padding-right: 3rem;
    padding-left: 3rem;
    font-size: 16px;
    font-weight: 400;
    color:#acacac;
`
const StyleLink = styled.a`
    padding: 0rem .5rem;`

const FooterLeftArea = styled.div`
    display:flex;
    align-items: center;`

const FooterLinkLeftArea = styled.div`
    margin-left:30px;   `

const FooterRightArea = styled.div`
    display:flex;
    align-items: center;   
    justify-content: space-around; 
`

export const Footer = () => {
  return <FooterSection>
      <FooterLeftArea>
        <p>© COVEST, Inc. All rights reserved.</p>
        <FooterLinkLeftArea>
            <Link href="/" passHref><StyleLink>Terms</StyleLink></Link>
            <Link href="/" passHref><StyleLink>Privacy Policy</StyleLink></Link>
        </FooterLinkLeftArea>
      </FooterLeftArea>
      <FooterRightArea>

      </FooterRightArea>
  </FooterSection>;
};

export default Footer;
