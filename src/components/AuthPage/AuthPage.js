import React from 'react';
import {reduxForm, Field} from "redux-form";
import { Container, Header, Title, Content, Form, Button, Body, Text } from 'native-base';
import AuthPageStyles from "./AuthPageStyles";
import {MyInput} from "../FormsControls/FormControls";
import {Redirect} from "react-router-native";

const AuthForm = (props) => {

  return (
      <Form style={AuthPageStyles.form} onSubmit={props.handleSubmit}>

          <Field name="login" component={MyInput}  placeholder="login"/>
          <Field name="password" component={MyInput}  placeholder="Password" secureTextEntry={true}/>

          <Button rounded style={AuthPageStyles.buttonAuth} onPress={props.handleSubmit}>
              <Text>Sign in</Text>
          </Button>
      </Form>
  )
};

const AuthFormReduxForm = reduxForm({form: 'AuthFormS'})(AuthForm);

const AuthPage = (props) => {
    if (props.user.isAuth ==true) {
        return <Redirect to={"/"} />;
    }
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    };
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Log in</Title>
                </Body>
            </Header>
            <Content>
                <AuthFormReduxForm onSubmit={onSubmit}/>
            </Content>
        </Container>
    )
};
export default AuthPage;