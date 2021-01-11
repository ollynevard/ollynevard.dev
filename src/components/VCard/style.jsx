import styled from '@emotion/styled';

export const VCardContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  display: flex;
  height: 100%;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0;
    padding-top: 20px;
  }
`;

export const VCardName = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 60px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

export const VCardRole = styled.h2`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 0;

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;
