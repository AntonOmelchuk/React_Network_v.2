import styled from 'styled-components';


export const Container = styled.div`
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    
    width: 360px;
    height: 54px;
    padding: 12px;
    
    display: flex;
    flex-direction: column;
    
    background-color: #272727;
    border-radius: 3px;
`;

export const Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    
    span {
      font-weight: 700;
      color: #fff;
    }
    
    i {
      opacity: .72;
      color: #fff;
      transition: all .1s linear;
      
      &:hover {
        opacity: 1;
      }
    }
`;

export const Content = styled.div`
    width: 100%;
    margin-top: 18px;
    display: flex;
    
    span {
      color: #fff;
    }
`;

export const Name = styled.div`
  font-weight: 700;
  margin-left: 9px;
  
  A {
    color: #4c6b7b;
    
    &:hover {
     text-decoration: underline;
     cursor: pointer;
    }
  }
`;