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
    margin-bottom: 15px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#C0C0C0'
})`
    
    background: #fff;
    color: #000000;
    width: 72.8%;
    font-size: 14px;
    margin-bottom: 15px;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 55.73%;
    height: 55px;
    align-items: center;
    justify-content: center;
    background-color: #00C864;
    border-radius: 20;
    margin-top: 20px;
`;

export const SubmitText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000000;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #000000;
`;