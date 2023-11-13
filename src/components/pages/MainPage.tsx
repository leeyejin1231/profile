import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";
import "../../assets/fonts/Font.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const MainPage = () => {
	return (
		<Wrapper>
			<TitleWrapper>
				<TitleText>It's me</TitleText>
				<TitleText2>LEEYEJIN</TitleText2>
				<TitleText3>더 알아보기</TitleText3>
				<img
					src={require("../../assets/images/arrow.png")}
					width={"20rem"}
				></img>
			</TitleWrapper>
			<MediumWrapper>
				<SubTitleWrapper>
					<SubTitleText>일단 소개부터.</SubTitleText>
				</SubTitleWrapper>
				<ImageWrapper>
					<img
						src={require("../../assets/images/school.png")}
						width={"573rem"}
						style={{ marginRight: "30rem" }}
					></img>
					<img
						src={require("../../assets/images/git.png")}
						width={"573rem"}
						style={{ marginRight: "30rem" }}
					></img>
					<img
						src={require("../../assets/images/blog.png")}
						width={"573rem"}
					></img>
				</ImageWrapper>
				<Padding src={"100rem"} />
				<ContentText>성균관대학교 소프트웨어학과</ContentText>
				<Padding src={"10rem"} />
				<ContentText>boostcamp AI Tech 3기</ContentText>
				<Padding src={"10rem"} />
				<ContentText>CROIS AI Research Inter</ContentText>
				<Padding src={"70rem"} />
				<ContentText>ssgyejin@gmail.com</ContentText>
				<Padding src={"100rem"} />
			</MediumWrapper>
		</Wrapper>
	);
};

export default MainPage;

interface PaddingSize {
	src: string;
}

const Wrapper = styled.div`
	width: 100%;
	/* height: 100%; */
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleText = styled.span`
	font-family: "RacingSansOne";
	color: white;
	font-size: 70rem;
`;

const TitleText2 = styled.span`
	font-family: "RacingSansOne";
	color: white;
	font-size: 150rem;
`;

const TitleText3 = styled.span`
	font-family: "RacingSansOne";
	color: #db00ff;
	font-size: 30rem;
	margin-top: 51rem;
	margin-bottom: 18rem;
`;

const SubTitleText = styled.span`
	font-family: "Pretendard-Bold";
	color: #c7c7c7;
	font-size: 60rem;
`;

const ContentText = styled.span`
	font-family: "Pretendard-Bold";
	color: #c7c7c7;
	font-size: 30rem;
`;

const TitleWrapper = styled.div`
	background-color: black;
	width: 100%;
	height: 800rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MediumWrapper = styled.div`
	background-color: #1c1c1c;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubTitleWrapper = styled.div`
	width: 80%;
	display: flex;
	margin-bottom: 80rem;
	margin-top: 300rem;
`;

const ImageWrapper = styled.div`
	width: 90%;
	height: 730rem;
	display: flex;
	flex-direction: row;
	overflow: scroll;
`;

const Padding = styled.div<PaddingSize>`
	height: ${(props) => props.src};
`;
