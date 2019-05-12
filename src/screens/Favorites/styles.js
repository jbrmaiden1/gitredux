/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: ${colors.primary};
`;

export const Empty = styled.Text`
	align-self: center;
	color: ${colors.white};
	font-size: 14;
	margin-top: ${metrics.baseMargin * 2};
`;

export const RepoList = styled.FlatList``;
