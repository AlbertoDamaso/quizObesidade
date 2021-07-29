import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #0072BB;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 130px;
    margin-top: 65px;
`;

export const Efect = styled.Image`
    position: absolute;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 55.73%;
    height: 55px;
    align-items: center;
    justify-content: center;
    background-color: #00C864;
    border-radius: 20;
    margin-top: 130px;
`;

export const SubmitText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000000;
`;

export const Logout = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LogoutText = styled.Text`
    color: #c62c36;
`;