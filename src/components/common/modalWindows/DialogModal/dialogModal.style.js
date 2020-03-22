import styled from 'styled-components';

export const DialogModalOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 12;

  background-color: black;
  opacity: 0.72;
`;

export const DialogModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(39,39,39,0.91);

  width: 540px;
  height: 360px;
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 21;

  border-radius: 7px 7px 3px 3px;
`;

export const DialogModalHeader = styled.div`
  width: 100%;
  height: 54px;
  background-color: #233447;
  border-radius: 3px 3px 0 0;
  
  display: flex;
  justify-content: flex-end;
`;

export const CloseButtonContainer = styled.div`
    padding: 7px 9px 0 0;
    
        i {
        font-size: 21px;
        cursor: pointer;
        opacity: .54;
        
          &:hover {
            opacity: 1;
          }
        }
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 90px;
    padding-left: 54px;
    padding-top: 12px;
    display: flex;
`;

export const UserPhotoContainer = styled.div`
    width: 63px;
    height: 63px;
    
    img {
      width: 100%;
      border-radius: 50%;
    }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export const UserName = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #958775;
`;

export const UserStatus = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #5b5041;
`;

export const TextareaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 153px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 90%;
  resize: none;
  padding: 3px 9px;
  border-radius: 3px;
  background-color: #f2f1e7;
  
      &:focus {
        outline: 0;
      }
`;

export const SendButtonContainer = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;

export const SendButton = styled.button`
  width: 90px;
  height: 30px;
  font-size: 16px;
  text-transform:uppercase;
  border-radius: 3px;
  opacity: .72;
  
      &:hover {
      opacity: 1;
      cursor: pointer;
      border: 1px solid #b8b7ad;
      }
      
      &:disabled {
        opacity: .45;
        cursor: default;
      }
`;
