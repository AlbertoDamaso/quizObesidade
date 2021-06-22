import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input,
    SubmitButton, SubmitText, Link, LinkText } from './styles';

function SignIn(){
    const navigation = useNavigation();
    console.disableYellowBox = true;
    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <Logo source={require('../../assets/Logo.png')}/>

                <AreaInput>
                <Input
                placeholder="Email"
                autoCorrect={false}
                cutoCapitalize="none"
                />
                </AreaInput>

                <AreaInput>
                <Input
                placeholder="Senha"
                autoCorrect={false}
                cutoCapitalize="none"
                />
                </AreaInput>
                
                <SubmitButton>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp')}>
                    <LinkText>Ciar uma Conta!</LinkText>
                </Link>
                
            </Container>
        </Background>
    )
}

export default SignIn;