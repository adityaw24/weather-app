import { Grid, Tab } from "semantic-ui-react";
import { styled } from "styled-components";

export const StyledContainer = styled.div`
  background: #f2fbff;
  ${"" /* padding: 2rem; */}
`;

export const Title = styled.div`
  font-size: 2rem;
`;

export const TitleBold = styled.span`
  font-weight: 900;
`;

export const StyledTab = styled(Tab)`
  margin: 1rem;
`;

export const StyledGrid = styled(Grid)`
  margin: 0 0 2rem 0 !important;
`;
