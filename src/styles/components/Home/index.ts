import { IThemeInterface } from "@/types/styles";
import styled from "styled-components";

const STitle = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	text-align: center;
	margin: 0;
	box-shadow: 0 0 0.5rem 0.25rem
		${({ theme }: { theme: IThemeInterface }) => theme.colors.secondary};
	color: ${({ theme }: { theme: IThemeInterface }) => theme.colors.primary};
`;

const SBody = styled.p`
	font-size: 2rem;
	font-weight: 400;
	text-align: center;
	margin: 0;
	border: solid 2px
		${({ theme }: { theme: IThemeInterface }) => theme.colors.primary};
	color: ${({ theme }: { theme: IThemeInterface }) => theme.colors.secondary};
`;

export { STitle, SBody };
