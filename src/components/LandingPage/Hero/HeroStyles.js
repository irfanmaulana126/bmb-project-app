import styled from "styled-components";
import { Button } from "../../../globalStyles";

export const HeroSection = styled.section`
	background-color: lightskyblue;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 15vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;


export const Image = styled.img`
    width: 375px;
    margin-left: 40px;
	@media screen and (max-width: 960px) {
        margin:40px 30px;
		width: 80%;
    }
`

export const HeroText = styled.div`
	color: #fff;	
	p{
		margin-bottom: 35px;
		font-size: clamp(0.9rem, 1.5vw, 1.3rem);
		line-height: 24px;
		letter-spacing: 2px;
		text-align:justify;
	}
	h1{
		margin: 1rem 0;
	}
`;
export const HeroButton = styled(Button)`
	border-radius: 50px;
	border:none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor:pointer;
	font-size: 16px;
	font-weight: 700;
	padding:15px 60px;
    background-color: #fff;
	color: #333;;
	margin: 1rem auto;
	&:hover{
        opacity: 0.9;
        transform: scale(0.98);
    }
`;