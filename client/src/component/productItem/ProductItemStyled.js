import styled from "styled-components";
const ProductItemStyled = styled.li`
  width: 30%;
  margin-right: 15px;
  margin-bottom: 40px;
  transition: all 0.6s cubic-bezier(0.18, 0.74, 0.58, 1.2);
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    transition: all 0.4s cubic-bezier(0.18, 0.74, 0.58, 1.2);
    transform: scale(1.05) translateY(-8px);
  }
  .product-item__name {
    margin: 10px 0;

    font-weight: 400;
  }
  .product-item__name a {
    text-decoration: none;
    color: #0c0c0c;
  }
  .product-item__price {
  }
  .product-item__link {
    text-decoration: none;
  }
`;
export default ProductItemStyled;
