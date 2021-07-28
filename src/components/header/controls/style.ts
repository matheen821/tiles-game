import styled from "styled-components";

export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;

  .control-section {
    display: flex;
    flex-flow: column nowrap;
    border: 1.5px solid #2de7ba;
    border-radius: 8px;
    margin: 8px;

    .control-title {
      font-size: 13px;
      border-bottom: 1.5px solid #2de7ba;
      padding: 1px;
      padding-bottom: 3px;
    }
    .control-body {
      display: flex;
      justify-content: center;
      align-items: center;
      .control-count {
        font-size: 13px;
        margin-right: 4px;
        color: #2de7ba;
        font-weight: 500;
      }
      .MuiIconButton-root {
        background-color: #f5f5fa;
        color: #192330;
        margin: 5px;
        &:focus {
          background-color: #2de7ba;
        }
        .MuiSvgIcon-root {
          font-size: 1rem;
        }
      }
    }
  }
`;
