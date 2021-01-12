import styled from '@emotion/styled';

export const VCardContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mono};
  height: 100%;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const VCardInner = styled.div`
  display: flex;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const VCardMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  padding-top: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding-left: 40px;
    padding-top: 0;
  }
`;

export const VCardName = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 35px;
  font-weight: 400;
  margin: 0;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 60px;
    text-align: left;
  }
`;

export const VCardRole = styled.h2`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  margin-top: 0;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 30px;
    text-align: left;
  }
`;
