import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    };
    fetchExchanges();
  }, [])

  if (error) return <ErrorComponent />

  return (
    <Container maxW={"container.xl"}>{loading ? <Loader /> :
      <>

        <HStack wrap={"wrap"} marginTop={"10"} justifyContent={"space-evenly"}>
          {exchanges.map((i) => (
            <ExchangesCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url} />
          ))}
          {/* {exchanges.map((i)=>(
            <div>{i.name}</div>
          ))
          } */}
        </HStack>

      </>}
    </Container>
  )
};

const ExchangesCard = ({ name, img, rank, url }) => {
  return (

    <a href={url} target={"blank"}>
      <VStack w={"52"} shadow={"lg"} padding={"8"} borderRadius={"lg"} transition={"all 0.3s"}
        margin={"4"}
        css={{
          "&:hover": { transform: "scale(1.1)" }
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchanges"}
        />
        <Heading size={"md"} noOfLines={1}>{rank}</Heading>

        <Text noOfLines={1}>{name}</Text>
      </VStack>


    </a>
  )
};


export default Exchanges;