import styled from 'styled-components';

export const PostThumbnailContainer = styled.div`
  width: 290px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`
export const ThumbnailHeader = styled.div`
  height: 25px;
  color: #DBD5D5;
`
export const ThumbnailImageContainer = styled.div`
  position: relative;
`
export const ThumbnailImage = styled.img`
  width: 220px;
  height: 150px;
  border: 2px solid #DBD5D5;
`
export const ThumbnailFooter = styled.div`
  height: 20px;
`
export const GotoLink = styled.a`
  color: #DBD5D5;
  text-decoration: none;
`
export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top:0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
