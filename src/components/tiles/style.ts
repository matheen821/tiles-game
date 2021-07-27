import styled from "styled-components";

export const TilesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  .tile {
    border-spacing: 5px;

    td div {
      width: 40px;
      height: 35px;
      cursor: pointer;
    }

    td.origin div {
      border: 2px solid;
    }
  }
`;
