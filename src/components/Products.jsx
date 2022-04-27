import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  padding: 20px;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
