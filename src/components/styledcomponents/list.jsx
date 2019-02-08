import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  h1 {
    font-family: "Sigmar One", cursive;
  }
  p {
    font-family: "Open Sans", sans-serif;
  }
`;
const ListItem = styled.div`
  width: 250px;
  text-align: left;
  margin: 15px 35px 15px 35px;
  h1 {
    width: 100%;
    text-align: center;
  }
  .icon {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const List = {
  Container: ListContainer,
  Item: ListItem
};

export default List;
