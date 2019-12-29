import {Image} from 'react-native';
import {Icon} from "native-base";
import {Link} from "react-router-native";
import React from 'react';
import { Container, Header, Content, H1, Title, Card, CardItem, Left, Right, Body, Text, Button } from 'native-base';
import HotelStyles from "./HotelStyles";

function HotelCard({data, idHotel}) {
    return (
        <Card style={HotelStyles.card}>
            <CardItem bordered>
                <Left/>
                <Link to={`/hotel/${idHotel}/hotelrooms/${data["_id"]}`}>
                    <H1>{data.number} - {data.type}</H1>
                </Link>
                <Right/>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>Номер: {data.number}</Text>
                    <Text>Категория номера: {data.type}</Text>
                    <Text>Описание: {data.description}</Text>
                    <Text>Стоимость: {data.cost}</Text>
                </Body>
            </CardItem>
        </Card>

    );
}

const Hotel = (props) => {

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{props.hotel.name}</Title>
                </Body>
                <Right>
                    <Link to={`/user`}>
                        <Text>{props.user.user.login}</Text>
                    </Link>
                </Right>
            </Header>
            <Content>
                <Image
                    style={{width: "100%", height: 200, marginBottom: 20}}
                    source={{uri: props.hotel.img}}/>
                {props.hotelRooms.map((data) => <HotelCard key={data["_id"]} data={data} idHotel={props.hotel["_id"]}/>)}
            </Content>
        </Container>

    )
};
export default Hotel;