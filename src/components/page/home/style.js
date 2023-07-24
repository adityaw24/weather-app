import { Container, Grid, Tab } from "semantic-ui-react";
import { styled } from "styled-components";

export const StyledContainer = styled(Container)`
  background: #f2fbff;
  padding: 2rem;
`;

export const Title = styled.div`
  font-size: 2rem;
`;

export const TitleBold = styled.span`
  font-weight: 900;
`;

export const StyledTab = styled(Tab)`
  margin: 1rem auto;
`;

export const StyledGrid = styled(Grid)`
  margin: 0 0 2rem 0 !important;
`;
