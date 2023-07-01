import styled from "styled-components";

const Wrapper = styled.nav`
  background: white;
  .nav-center {
    width: 90vw;
    max-width: 92vw;
    margin: 0 auto;
    display: flex;
    padding: 1rem 2rem;
    flex-direction: column;
  }
  .logo {
    color: #10b981;
    font-weight: 700;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    padding: 0.5rem 0.5rem 0.5rem 0;
    letter-spacing: 1.2px;
  }
  .active {
    color: #10b981;
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
