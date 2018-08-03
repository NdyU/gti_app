import styled from 'styled-components';

export const ChatboxContainer = styled.div`
  width:100%;
  position: relative;
  display: inline-flex;
`

export const ChatboxInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 80%;
  height: 2em;
  font-size: 18px;
  box-sizing: border-box;
`
export const ChatboxSubmit = styled.button`
  width: 20%;
  text-align: center;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.14);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #CFC9D8;
  background-color: inherit;
`
export const MentionContainer = styled.div`
  position: absolute;
  top: 0px;
  margin-top:-55px;
  min-height: 55px;
  margin-bottom: 55px;
  max-width: 200px;
  min-width: 100px;
  max-height: : 200px;
  font-size: 11px;
  background-color: grey;
  border: 1px solid rgba(0,0,0,0.14);
  box-sizing: border-box;
  background-color: #D9CECE;
`
export const Mention = styled.button`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 3px:
  box-sizing:border-box;
  border-bottom: 1px solid black;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14);
  background-color: inherit;
  overflow-y: auto;
`
