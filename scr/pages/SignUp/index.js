import React from 'react';
import { Platform } from 'react-native';
import { Background, Container, AreaInput,
     Input, SubmitButton, SubmitText} from '../SignIn/styles';

function SignUp(){
    return(
        <Background>
            <Container 
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <AreaInput>
                <Input
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"

                />    
                </AreaInput>    

                <AreaInput>
                <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                
                />    
                </AreaInput>  

                <AreaInput>
                <Input
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                
                />    
                </AreaInput>      

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>  

            </Container>
        </Background>
    )
}

export default SignUp;