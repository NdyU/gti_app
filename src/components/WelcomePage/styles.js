import styled from 'styled-components';

export const WelcomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;

  background-color: #3E3434;
  ${'' /* background-image: url("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif");
  background-repeat: no-repeat;
  background-clip: border-box;
  background-size: cover */}
`
export const LinkText = styled.a`

  &:hover {
    cursor: pointer;
  }
`
