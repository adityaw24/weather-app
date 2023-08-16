import { Grid } from "semantic-ui-react";
import { styled } from "styled-components";

export const StyledContainer = styled.div`
  background: #211d79;
  padding: 2rem;
  ${"" /* height: 100vh; */}
  overflow: auto;
`;

export const StyledGrid = styled(Grid)`
  margin: 2rem auto !important;
`;

export const RowWrapper = styled(Grid.Row)`
  margin: 2rem auto !important;
`;
