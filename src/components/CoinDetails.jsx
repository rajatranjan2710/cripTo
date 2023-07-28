import { Badge, Box, Button, Container, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Loader from './Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../index';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import { HStack, RadioGroup, Radio, Image } from '@chakra-ui/react';
import CustomBar from './CustomBar';
import Item from './Item';
import Chart from './Chart';




const CoinDetails = () => {

    const [coins, setCoins] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");
    const [days, setDays] = useState("24h");
    const [chartArray, setChartArray] = useState([]);

    const params = useParams();

    const currrencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

    const switchChart = (key) => {
        switch (key) {
            case "24h":
                setDays("24h")
                setLoading(true)
                break;
            case "7d":
                setDays("7d")
                setLoading(true)
                break;
            case "14d":
                setDays("14d")
                setLoading(true)
                break;
            case "30d":
                setDays("30d")
                setLoading(true)
                break;
            case "60d":
                setDays("60d")
                setLoading(true)
                break;
            case "200d":
                setDays("200d")
                setLoading(true)
                break;
            case "1y":
                setDays("1y")
                setLoading(true)
                break;






            default:
                break;
        }
    }

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/${params.id}`);

                const { data: chartData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

                setCoins(data);
                // console.log(chartData.prices)
                setChartArray(chartData.prices)
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        };
        fetchCoin();
    }, [params.id, currency, days])

    if (error) return <ErrorComponent />

    return (

        <Container maxW={"container.lg"}>
            {
                loading ? (<Loader />) :
                    <>
                        <Box width={"full"} borderWidth={"1"} marginTop={"3"}>
                            <Chart arr={chartArray} currency={currrencySymbol} days={days} />
                        </Box>

                        <HStack p={"4"} wrap={"wrap"}>
                            {
                                btns.map((i) => (
                                    <Button key={i} onClick={() => switchChart(i)} css={{
                                        "&:hover" :{transform:"scale(1.1)"}
                                      }}>{i}</Button>
                                ))

                            }
                        </HStack>

                        <RadioGroup value={currency} onChange={setCurrency}>
                            <HStack spacing={"5"} marginLeft={"7"} marginTop={"5"}>
                                <Radio value={"inr"} >INR</Radio>
                                <Radio value={"usd"}>USD</Radio>
                                <Radio value={"eur"}>EUR</Radio>
                            </HStack>
                        </RadioGroup>

                        <VStack alignItems={"flex-start"} spacing={"4"} padding={"12"} >
                            <Text fontSize={"small"}
                                opacity={"0.6"}
                                alignSelf={"center"}>
                                Last Updated on {Date(coins.market_data.last_updated).split("G")[0]}
                            </Text>
                            <Image src={coins.image.large} width={"24"} height={"24"} objectFit={"contain"}
                            />

                            <Stat>

                                <StatLabel>{coins.name}</StatLabel>
                                <StatNumber>
                                    {currrencySymbol}{coins.market_data.current_price[currency]}
                                </StatNumber>
                                <StatHelpText>
                                    <StatArrow type={coins.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                                    {coins.market_data.price_change_percentage_24h}%
                                </StatHelpText>
                            </Stat>
                            <Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>
                                {`#${coins.market_cap_rank}`}
                            </Badge>
                            <CustomBar high={`${currrencySymbol}${coins.market_data.high_24h[currency]}`}
                                low={`${currrencySymbol}${coins.market_data.low_24h[currency]}`}
                            />
                            <Box w={"full"} p={"1"} >
                                <Item title={"Max Supply"} value={coins.market_data.max_supply} />
                                <Item title={"Circulating Supply"} value={coins.market_data.circulating_supply} />
                                <Item title={"Market Capital"} value={`${currrencySymbol}${coins.market_data.market_cap[currency]}`} />
                                <Item title={"All time low"} value={`${currrencySymbol}${coins.market_data.atl[currency]}`} />
                                <Item title={"All time high"} value={`${currrencySymbol}${coins.market_data.ath[currency]}`} />
                            </Box>
                        </VStack>
                    </>
            }
        </Container>
    )
}

export default CoinDetails