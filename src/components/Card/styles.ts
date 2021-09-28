import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    .card {
      position: relative;
      margin: 14px;
      font-size: 1.5rem;
    }
    .card__wrapper {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      grid-template-columns: 1fr 120px;
      position: relative;
      display: grid;
      min-height: 147px;
      background: transparent;
      padding: 20px;
      text-decoration: none;
      transition: 200ms;
      overflow: hidden;
      height: 100%;
      border: 0.15rem ${theme.colors.primary} solid;
      background-color: transparent;
    }
    .card__info {
      display: grid;
      grid-template-rows: 1fr 20px;
      margin: 0;
    }
    .card__content {
      margin-bottom: 23px;
      font-weight: lighter;
      color: ${theme.colors.black};
      word-break: break-word;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      font-size: 0.875rem;
      height: 105px;
    }
    .card__title {
      color: ${theme.colors.black};
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.25rem;
      margin-top: 0;
      margin-bottom: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      box-orient: vertical;
      display: -webkit-box;
      line-clamp: 2;
    }
    .card__description {
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 1.2rem;
      font-weight: lighter;
      color: ${theme.colors.black};
      word-break: break-word;
      padding: 0.5rem;
    }
    .card__price {
      line-height: 0;
      font-weight: 400;
      color: ${theme.colors.black};
      padding: 1rem 0;
    }
    .card__image {
      position: relative;
      width: 120px;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      pointer-events: none;
      align-self: flex-start;
      border-style: none;
    }
    img,
    .card__wrapper {
      border-radius: 10px;
    }

    * {
      font-family: 'Verdana';
    }

    .active {
      background-color: #000;
      color: #fff;
    }
    .active span,
    .active div,
    .active h3 {
      color: #fff;
    }
  `}
`;
