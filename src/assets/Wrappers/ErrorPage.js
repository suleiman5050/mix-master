import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 90vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 2rem;
    height: 70vh;
    max-width: 600px;
    display: block;
    object-fit: cover;
    color: #10b981;
  }
  p {
    margin: 2rem;
    color: #10b981;
  }
`;

export default Wrapper;
