import styled from "styled-components";

export const MovesContainer = styled.div`
  margin-top: 0.35rem;

  .moves-section {
    border: 1.5px solid #2de7ba;
    border-radius: 8px;
    padding: 3px 6px;
    margin: 0px 8px;

    .moves-title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      border-bottom: 1.5px solid #2de7ba;
      padding: 1px;
      padding-bottom: 4px;
      background-color: #f5f5fa;
      border-radius: 5px;
      .MuiSvgIcon-root {
        color: #2de7ba;
      }
    }
    .moves-count {
      font-weight: bold;
    }
  }
`;
