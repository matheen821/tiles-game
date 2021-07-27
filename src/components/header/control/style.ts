import styled from "styled-components";

export const NoteStyle = styled.div`
  .tittle {
    text-align: center;
    color: ${(p) => p.theme.colors.secondary};
    height: 35px;
    border-bottom: 1px solid ${(p) => p.theme.colors.grey};
  }
`;
