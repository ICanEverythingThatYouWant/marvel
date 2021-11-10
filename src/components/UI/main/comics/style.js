/* eslint-disable */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  @media screen and (min-width: 1720px) {
    .slick-arrow{
      margin-right: 90px;

    }
  }
  @media screen and (max-width: 1700px) {
    .slick-arrow{
      margin-right: 90px;

    }
  }
  @media screen and (max-width: 1600px) {
    .slick-arrow{
      margin-right: 60px;

    }
  }
  @media screen and (max-width: 1420px) {
    .slick-arrow{
      margin-right: 70px;

    }
  }
  @media screen and (max-width: 1100px) {
    .slick-arrow{
      margin-right: 10px;

    }
  }
  @media screen and (max-width: 700px) {
    .slick-arrow{
      margin-right: -20px;

    }
  }
  
  .slick-arrow {
    margin-left: -20px;
    background-color: red;
    height: 35px;
    width: 35px;
    border-radius: 100px;
    display: block;
    position: absolute;
   
  }
  .slick-arrow:hover,
  .slick-arrow:active,
  .slick-arrow:focus {
    background-color: red !important;
  }
`;
