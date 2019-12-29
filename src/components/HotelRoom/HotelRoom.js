import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

const HotelRoom = (props) => {
    const toOrder = () => {
        if (props.userBalance >= props.hotelRoom.cost) {
            let data = {
              _id: props.idHotelRoom,
                idhotel: props.idHotel,
                isAvailable: false
            };
            props.updateHotels(data);
            props.updateUser({cost: props.hotelRoom.cost});

        } else {
            alert("Недостаточно средств на счете");
        }

    };
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{props.hotelRoom.number} - {props.hotelRoom.type}</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <Text>Отель: {props.hotel.name}</Text>
                <Text>Номер: {props.hotelRoom.number}</Text>
                <Text>Тип: {props.hotelRoom.type}</Text>
                <Text>Стоимость: {props.hotelRoom.cost}</Text>
                <Text>Статус: {props.hotelRoom.isAvailable ? "Свободен" : "Занят"}</Text>
                <Text>Описание: {props.hotelRoom.description}</Text>
            </Content>
            <Footer>
                <FooterTab>
                    {props.hotelRoom.isAvailable && <Button full success onPress={() => toOrder()}>
                        <Text>Заказать</Text>
                        </Button>}
                    {!props.hotelRoom.isAvailable && <Button full danger onPress={() => alert('К сожалению данный номер уже заказан')} r>
                        <Text>Заказать</Text>
                    </Button>}
                </FooterTab>
            </Footer>
        </Container>
    )
};
export default HotelRoom;