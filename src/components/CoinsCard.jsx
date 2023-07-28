import React from "react";
import {Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const CoinsCard = ({ id, name, img, symbol, price, currrencySymbol= "₹"}) => {
    return(
  
      <Link to={`/coins/${id}`}>
      <VStack w={"52"} shadow={"lg"} padding={"8"} borderRadius={"lg"} transition={"all 0.3s"}
      margin={"4"}
      css={{
        "&:hover" :{transform:"scale(1.1)"}
      }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchanges"}
          />
        <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
  
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currrencySymbol}${price}`: "NA"}</Text>
      </VStack>
  
  
    </Link>
          )
  };
  
  
  export default CoinsCard;
