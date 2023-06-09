import styled from "styled-components";

export const ContainerForm = styled.form`
  max-width: 700px;
  min-width: 500px;
  //background-color: #181818; */
  color: #beb8b8;
  display: flex;
  font-size: 22px;
  margin-top: 100px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    min-width: 100%;
    text-align: center;
  }
`;

export const style = {
  img: {
    width: "322px",
  },
};
