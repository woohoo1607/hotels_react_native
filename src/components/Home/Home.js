import {Image } from 'react-native';
import React from 'react';
import HomeStyles from "./HomeStyles";
import {Link, Redirect} from "react-router-native";
import { Container, Header, Content, H1, Title, Card, CardItem, Left, Right, Body, Text } from 'native-base';

function HomeCard({data}) {
    return (
        <Card style={HomeStyles.card}>
            <CardItem bordered>
                <Left/>
                <Link to={`/hotel/${data._id}`}>
                    <H1 style={HomeStyles.title}>{data.name}</H1>
                </Link>
                <Right/>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Image
                        style={{width: "100%", height: 200, marginBottom: 20}}
                        source={{uri: data.img}}
                    />
                    <Text style={HomeStyles.description}>{data.description}</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const Home = (props) => {
    if (props.user.isAuth ==false) {
        return <Redirect to={"/login"} />;
    }
    return (
        <Container>
            <Header>
                <Left/>
                <Body>
                    <Title>Наши отели</Title>
                </Body>
                <Right>
                    <Link to={`/user`}>
                        <Text>{props.user.user.login}</Text>
                    </Link>
                </Right>
            </Header>
            <Content>
                {props.hotels.hotels.map((data) => <HomeCard key={data._id} data={data}/>)}
            </Content>
        </Container>

    )
};
export default Home;