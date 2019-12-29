import React from 'react';
import {Redirect} from "react-router-native";
import {Container, Header, Content, Title, Left, Right, Body, Text, Button, Icon, FooterTab, Footer} from 'native-base';


const User = (props) => {
    if (props.user.isAuth ==false) {
        return <Redirect to={"/login"} />;
    }
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Ваш профиль</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>Логин: {props.user.user.login}</Text>
                <Text>Имя: {props.user.user.firstname}</Text>
                <Text>Фамилия: {props.user.user.secondname}</Text>
                <Text>Отчество: {props.user.user.patronymic}</Text>
                <Text>Почта: {props.user.user.email}</Text>
                <Text>Баланс: {props.user.user.balance}</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full info onPress={() => props.logout()}>
                        <Text>Logout</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
};
export default User;