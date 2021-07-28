import styled from "styled-components";

export const TilesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;

  .tile {
    border-spacing: 5px;

    td div {
      width: 40px;
      height: 35px;
      cursor: pointer;
      border-radius: 8px;
    }

    td.origin div {
      border: 2px solid;
    }

    td.disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
