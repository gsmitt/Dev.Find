import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);

  @media(min-width: 1800px){
    min-height: 750px;
   }
  
  @media(min-width: 360px){
  }
  
  @media(min-width: 768px){
  
  }
  
  @media(min-width: 1024px){
  
    }
    
  @media(min-width: 1800px){
       
    }
  @media(min-width: 1199px){
      
    
    }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  @media(max-width: 360px){
  }
  
  @media(min-width: 360px){

  }

  @media(max-width: 768px){
    flex-direction: column;
  }
  
  @media(min-width: 768px){
  
  }
  
  @media(min-width: 1024px){
  
    }
    
  @media(max-width: 1800px){
       
    }
  @media(min-width: 1199px){
        // top: 10px;
        // padding: 10px 19px;
        // font-size: 15px;
    }
`;

