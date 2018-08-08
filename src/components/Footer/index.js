import React, { Component } from 'react';

import {
  FooterContainer,
  PrimarySectionContainer,
  Section,
  SectionItem,
  SectionLink,
  MentionContainer,
  Color1,
  Color2,
} from 'components/Footer/styles';

class Footer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <FooterContainer>
        <PrimarySectionContainer>
          <Section>
            <SectionItem>
              <SectionLink href="#">
                About
              </SectionLink>
            </SectionItem>
            <SectionItem>
              <SectionLink href="#">
                Contact
              </SectionLink>
            </SectionItem>
            <SectionItem>
              <SectionLink href="#">
                Help
              </SectionLink>
            </SectionItem>
            <SectionItem>
              <SectionLink href="#">
                Contribute
              </SectionLink>
            </SectionItem>
          </Section>
        </PrimarySectionContainer>
        <MentionContainer>
          Powered by 🐭 and crafted with <Color1>Hand</Color1> and <Color2>Keyboard</Color2>
        </MentionContainer>
      </FooterContainer>
    )
  }
}

export default Footer;
