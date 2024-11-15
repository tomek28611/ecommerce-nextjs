import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
  text-align: center;
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 5px;
  height: 200px;
  width: 220px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 auto; 

  img {
    max-width: 100%;
    max-height: 320px;
  }

  @media (max-width: 768px) {
    width: 320px; 
    height: auto; 
    margin: 0 auto; 
  }
`;


const Title = styled(Link)`
  font-weight: normal;
  font-size:1.2rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  console.log("Rendering ProductBox with:", { _id, title, description, price, images })
  const {addProduct} = useContext(CartContext);
  const url = '/nahradni-dily/'+_id;
  return (
 
    <div>
    <Link href={url}>
        <div className="product-card">
            <img src={images?.[0]}
            width={250} height={250} className="product-image" alt="" />
            <p className="product-name">{title}</p>
            <p className="product-price">CZK {price}</p>
        </div>

    </Link>
</div>

  );
}