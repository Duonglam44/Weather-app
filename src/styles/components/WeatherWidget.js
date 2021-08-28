import styled from "styled-components"
import background from '../../assets/weather-bg.jpg'

export const WidgetWrap = styled.div`
     margin-top: 30px;
     width: 770px;
     max-width: 100%;
     height: 350px;
     padding: 30px 10px;
     background-image: url(${background});
     background-position: center;
     background-repeat: no-repeat;
     overflow: hidden;
     border-radius: 5px;
     position: relative;
     z-index: 0;
     &:before{
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          opacity: .5;
          z-index: -1;
     }
`

export const WidgetLocation = styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     h1, p{
          color: white ;
     }
     h1{
          font-size: 25px; 
          font-weight: 400;
          margin-bottom: 5px;
     }
`
export const WidgetInfo = styled.div`
     margin-top: 20px;
     display: flex; 
     justify-content: center;
     align-items: center;
`
export const WidgetInfoTemp = styled.p`
     width: 30%;
     font-size: 80px;
     color: white;
     font-weight: 400;
     align-self: start;
`

export const WidgetInfoCenter = styled.div`
     width: 30%;
     & img{
          width: 100%;
          height: 160px;
     }
     & p{
          margin-top: 10px;
          text-align: center;
          color: white;
          font-size: 16px;
          font-weight: 400;
     }
`
export const WidgetInfoRight = styled.div`
     width: 30%;
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     flex-direction: column;
     padding-left: 40px;
     font-size: 16px;
     div {
          margin-bottom: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 30px;
          P {
               margin-left: 10px;
               font-size: 16px;
          }
     }
`
