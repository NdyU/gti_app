import styled from 'styled-components';

export const CommentsModalContainer = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  background-color: white;
  z-index: 10;
  box-sizing: border-box;
`
export const CommentsModalHeader = styled.div`
  padding: 1em;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14);
  height: 2em;
  font-size: 36px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`
export const ModalHeaderImage = styled.img`
  height: 1.1em;
  margin-left: 20px;
`
export const ModalHeaderText = styled.div`
  margin-left: 30px;
`
export const ModalContent = styled.div`
  position: relative;
  width: 87%;
  margin: 25px auto 25px auto;
`
export const CommentContainer = styled.div`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  box-shadow: 0 0px 1px 0 #A3A2A2;
  border-radius: 10px;
`
export const Comment = styled.div`

`
export const CommentFooter = styled.div`
font-size: 0.7em;
position: relative;
height: 1em;
`
export const CommentUser = styled.div`
  position: absolute;
  right: 0;
`
export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: 1.2em;
  width: 100%;
  padding: 2.4em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
export const CloseButton = styled.button`
  background-color: #91E8F4;
  padding: 1.4em 3em 1.4em 3em;
  border-radius: 1em;
`
