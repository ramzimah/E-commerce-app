import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
      great news! shipping is available to all the 58 states{" "}
    </Container>
  );
};

export default Announcement;
