import styled from "styled-components"

export const FormWrapper = styled.div`  
     width: 500px;
     max-width: 70%;
`
export const Form = styled.form`
     width: 100%;
     height: 50px;
     border: 1px solid #4c4b4b;
     overflow: hidden;
     position: relative;
     border-radius: 5px ;
`
export const Input = styled.input`
     width: 100%;
     height: 100%;
     padding: 5px 55px 5px 10px;
     outline: none ;
     border: none ;
`
export const SearchButton = styled.button`
     width: 50px;
     height: 50px ;
     background: none;
     position: absolute ;
     top: 0;
     right: 0;
     outline: none ;
     border: none ;
     font-size: 20px;
     font-weight: 400 ;
     transition: background .5s ease ;
     border-radius: 5px;
     &:hover{
          color: white;
          background: #03a9f4 ;
     }
`

