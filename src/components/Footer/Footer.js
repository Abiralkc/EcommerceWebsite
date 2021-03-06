import React from "react";
import { footerSocialData } from "../../data/FooterData";
import {data} from "../../data/NavbarData"
import { Container, Section } from "../../globalStyles";
import {
  FooterColumn,
  FooterCopyRight,
  FooterDescription,
  FooterItem,
  FooterLinks,
  FooterLogo,
  FooterMenu,
  FooterRow,
  FooterSocialIcon,
  FooterWrapper,
  LogoWrapper,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section padding="0px 0 0 0">
      <Container>
        <FooterRow>
          <FooterColumn>
            <FooterLogo>audiophile</FooterLogo>
          </FooterColumn>


          <FooterColumn>
          <FooterMenu>
            {data.map((e1, index) => (
              <FooterItem key={index}>
                {/* <NavLinks onClick={()=>closeMobileMenu(e1.to,e1.id)}></NavLinks> */}
                <FooterLinks>{e1.text}</FooterLinks>
                </FooterItem>
                ))}
</FooterMenu>


          </FooterColumn>
        </FooterRow>
        <FooterRow>
          <FooterColumn>
          <FooterDescription>
              Audiophile is an all in one stop to fulfill your audio needs.
              We’re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. COme
              and visit our demo facility -we’re open 7 days a week.{" "}
            </FooterDescription>
          </FooterColumn>
          <FooterColumn>
            <LogoWrapper>

         
          {footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
          </LogoWrapper>
          </FooterColumn>
        </FooterRow>
        <FooterRow>
        <FooterColumn>
            <FooterCopyRight>

            Copyright 2022. All right reserved @DBN
            </FooterCopyRight>

            </FooterColumn>
        </FooterRow>
      </Container>
    </Section>
  );
};

export default Footer;