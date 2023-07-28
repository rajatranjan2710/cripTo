import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinsCard';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currrencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);



  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        console.log(data)
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    };
    fetchCoins();
  }, [currency, page])

  if (error) return <ErrorComponent />

  return (
    <Container maxW={"container.xl"}>{loading ? <Loader /> :
      <>
        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={"5"} marginLeft={"7"} marginTop={"5"}>
            <Radio value={"inr"} >INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} marginTop={"3"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinsCard
              id={i.id}
              key={i.id}
              name={i.name}
              img={i.image}
              symbol={i.symbol}
              price={i.current_price}
              currrencySymbol={currrencySymbol} />
          ))}
          {/* {exchanges.map((i)=>(
            <div>{i.name}</div>
          ))
          } */}
        </HStack>

        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {
            btns.map((items,index)=>(
              <Button 
              key={index}
              bgColor={"blackAlpha.900"} 
              color={"white"} 
              onClick={() => changePage(index+1)}
            >
                {index+1}
            </Button>
            ))
          }
        </HStack>

      </>}
    </Container>
  )
};

export default Coins;