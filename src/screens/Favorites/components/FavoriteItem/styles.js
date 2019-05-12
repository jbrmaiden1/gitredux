/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../../../styles';

export const Container = styled.View`
	background: ${colors.white};
	padding: ${metrics.basePadding}px;
	border-radius: ${metrics.baseRadius};
	margin-top: ${metrics.baseMargin};
	margin-horizontal: ${metrics.baseMargin};
	flex-direction: row;
	align-items: center;
`;

export const Info = styled.View`
	margin-left: ${metrics.baseMargin};
	flex: 1;
`;

export const Title = styled.Text`
	color: ${colors.darker};
	font-weight: bold;
`;

export const Description = styled.Text`
	color: ${colors.darker};
	margin-top: ${metrics.baseMargin};
	font-size: 12;
`;

export const Avatar = styled.Image`
	width: 54;
	height: 54;
`;
