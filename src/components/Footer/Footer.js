import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1(613)–879–7195">
          +1 (613) – 879 – 7195
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:mohamedabbasi@cmail.carleton.ca">
            mohamedabbasi@cmail.carleton.ca
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
