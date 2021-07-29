import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Logo, Efect, SubmitButton,
     SubmitText, Logout, LogoutText} from './styles';

export default function Home(){
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext);

    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <Efect source={require('../../assets/Efeitos.png')}/>
                <Logo source={require('../../assets/Logo.png')}/>
                
                <SubmitButton onPress={ () => navigation.navigate('Quiz')}>
                    <SubmitText>Começar Quiz</SubmitText>
                </SubmitButton>

                <Logout onPress={ () => signOut()}>
                    <LogoutText>Sair</LogoutText>
                </Logout>
            </Container>
        </Background>
    )
}
