import styled from "styled-components";

export const CircleDesign = styled.div`
  background: rgba(15, 33, 56, 0.5);
  border-radius: 50%;
  height: ${props => props.size};
  left: ${props => props.left};
  position: absolute;
  top: ${props => props.top};
  width: ${props => props.size};
  transform: translate(-50%, -50%);
`;