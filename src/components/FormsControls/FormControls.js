import React from 'react';

import {Item, Label, Input} from 'native-base';

export const MyInput = ({input, meta, ...props}) => {

    return (

        <Item floatingLabel>
            <Label>{props.placeholder}</Label>
            <Input {...input} {...props} />
        </Item>

    );
};