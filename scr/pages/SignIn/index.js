import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input,
    SubmitButton, SubmitText, Link, LinkText } from './styles';
import { AuthContext } from '../../contexts/auth';

function SignIn(){
    console.disableYellowBox = true;

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    function handleLogin(){
        signIn(email, password);
    }

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
                autoCapitalize="none"
                value={email}
                onChangeText={ (text) => setEmail(text) }
                />
                </AreaInput>

                <AreaInput>
                <Input
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={true}
                />
                </AreaInput>
                
                <SubmitButton onPress={handleLogin}>
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