/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: ${colors.primary};
	align-items: center;
`;

export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding-horizontal: ${metrics.basePadding * 2};
`;

export const Title = styled.Text`
font-size: 32
color: ${colors.white};
font-weight: bold;
`;
export const Description = styled.Text`
font-size: 14
color: ${colors.white};
line-height: 20
margin-top: ${metrics.baseMargin / 2};
text-align: center
`;
export const Form = styled.View`
	margin-top: ${metrics.baseMargin * 2};
	align-self: stretch;
`;
export const Input = styled.TextInput`
	height: 50;
	background: ${colors.white};
	border-radius: ${metrics.baseRadius};
	padding-horizontal: ${metrics.basePadding};
`;
export const Button = styled.TouchableOpacity`
	height: 50;
	background: ${colors.secondary};
	border-radius: ${metrics.baseRadius};
	padding-horizontal: ${metrics.basePadding};
	justify-content: center;
	align-items: center;
	margin-top: ${metrics.baseMargin};
`;
export const ButtonText = styled.Text`
	color: ${colors.darkTransparent}
	font-weight: bold;
	font-size: 15
`;
export const Footer = styled.View`
	padding-bottom: ${metrics.basePadding};
`;

export const FooterButton = styled.TouchableOpacity``;

export const FooterLink = styled.Text`
	color: ${colors.white};
	font-weight: bold;
	font-size: 14;
`;

export const Error = styled.Text`
	color: ${colors.danger};
	font-size: 14;
	font-weight: bold;
	margin-top: ${metrics.baseMargin};
`;

export const Loading = styled.ActivityIndicator``;
