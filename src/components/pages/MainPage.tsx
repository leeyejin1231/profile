import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";
import { Col, Text } from "@nextui-org/react";
import "../../assets/fonts/Font.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { assert } from "console";

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
			<GreyWrapper>
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
				<ContentText>CROIS AI Research Intern</ContentText>
				<Padding src={"70rem"} />
				<ContentText>ssgyejin@gmail.com</ContentText>
				<Padding src={"100rem"} />
			</GreyWrapper>
			<BlackWrapper>
				<SubTitleWrapper>
					<SubTitleText>보다 자세히 들여다보기.</SubTitleText>
				</SubTitleWrapper>
				<Padding src={"100rem"} />
				<BoxTitleText>엄청난 수상경력.</BoxTitleText>
				<Padding src={"150rem"} />
				<ColumnWrapper>
					<AwardsWrapper>
						<AwradBox>
							<AwardSubText>2023.08</AwardSubText>
							<AwardTitleText>AI HACKATHON</AwardTitleText>
							<AwardSubText>3등</AwardSubText>
							<AwardCommentText>
								udemy 큐레이션, wanted, 조코딩
							</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentText>
									인공지능 기반 개인형 맞춤 커리큘럼 추천
									서비스 &nbsp;
								</AwardCommentText>
								<AwardCommentWhiteText>
									SKILLLINK &nbsp;
								</AwardCommentWhiteText>
								<AwardCommentText>개발.</AwardCommentText>
							</RowTextWrapper>
						</AwradBox>
						<Padding src={"130rem"} />
						<AwradBox>
							<AwardSubText>2023.01</AwardSubText>
							<AwardTitleText>
								제 4회 대학생 AI x BOOKATHON 대회
							</AwardTitleText>
							<AwardSubText>장려상</AwardSubText>
							<AwardCommentText>
								성균관대학교, 산학연기술혁신공유협의회
							</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentWhiteText>
									AI를 활용한 수필 생성.
								</AwardCommentWhiteText>
							</RowTextWrapper>
						</AwradBox>
						<Padding src={"130rem"} />
						<AwradBox>
							<AwardSubText>2022.09</AwardSubText>
							<AwardTitleText>
								2022 제주 ICT 이노베이션스퀘어
							</AwardTitleText>
							<AwardTitleText>아이디어 공모전</AwardTitleText>
							<AwardSubText>동상</AwardSubText>
							<AwardCommentText>제주산학융합원</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentText>
									제주 비상품 귤 문제 해결을 위한 사용자 위치
									기반 감귤 나눔 서비스 &nbsp;
								</AwardCommentText>
								<AwardCommentWhiteText>
									귤러가요.
								</AwardCommentWhiteText>
								<AwardCommentText>개발.</AwardCommentText>
							</RowTextWrapper>
						</AwradBox>
					</AwardsWrapper>
					<AwardsWrapper>
						<Padding src={"150rem"} />
						<AwradBox>
							<AwardSubText>2023.05</AwardSubText>
							<AwardTitleText>
								2023학년도 1학기 소프트웨어학과/
							</AwardTitleText>
							<AwardTitleText>
								컴퓨터공학과 연구논문·작품 발표회
							</AwardTitleText>
							<AwardSubText>우수발표상</AwardSubText>
							<AwardCommentText>
								성균관대학교 소프트웨어융합대학
							</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentWhiteText>
									음성 회의록 요약 및 검색 시스템 &nbsp;
								</AwardCommentWhiteText>
								<AwardCommentText>개발.</AwardCommentText>
							</RowTextWrapper>
						</AwradBox>
						<Padding src={"130rem"} />
						<AwradBox>
							<AwardSubText>2023.01</AwardSubText>
							<AwardTitleText>
								오픈소스 SW개발 활동 우수학생
							</AwardTitleText>
							<AwardSubText>장려상</AwardSubText>
							<AwardCommentText>
								성균관대학교 소프트웨어대학
							</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentText>
									오픈소스 SW개발 활동 우수학생 선정.
								</AwardCommentText>
							</RowTextWrapper>
						</AwradBox>
						<Padding src={"150rem"} />
						<AwradBox>
							<AwardSubText>2022.08</AwardSubText>
							<AwardTitleText>
								제 1회 구름톤 (9oormthon)
							</AwardTitleText>
							<AwardSubText>최우수상</AwardSubText>
							<AwardCommentText>kakao, 9oorm</AwardCommentText>
							<Padding src={"5rem"} />
							<RowTextWrapper>
								<AwardCommentText>
									제주 비상품 귤 문제 해결을 위한 사용자 위치
									기반 감귤 나눔 서비스 &nbsp;
								</AwardCommentText>
								<AwardCommentWhiteText>
									귤러가요.
								</AwardCommentWhiteText>
								<AwardCommentText>개발.</AwardCommentText>
							</RowTextWrapper>
						</AwradBox>
					</AwardsWrapper>
				</ColumnWrapper>
				<Padding src={"100rem"} />
			</BlackWrapper>
			<GreyWrapper>
				<SubTitleWrapper>
					<SubTitleText>본격적으로 탐구하기.</SubTitleText>
				</SubTitleWrapper>
				<Padding src={"100rem"} />
				<SubTitleWrapperX>
					<BoxTitleText>상상 이상의 다양한</BoxTitleText>
					<BoxTitleText>프로젝트.</BoxTitleText>
				</SubTitleWrapperX>
				<Padding src={"150rem"} />
				<ProjectBox>
					<img
						src={require("../../assets/images/aeye.png")}
						width={"300rem"}
					/>
					<Padding src={"110rem"} />
					<AwardTitleText>
						시각장애인들을 위한 가전제품 사용 음성 안내
						애플리케이션.
					</AwardTitleText>
					<Padding src={"20rem"} />
					<ProjectTagText>
						# Object Detection # Flutter # TTS/STT
					</ProjectTagText>
				</ProjectBox>
				<Padding src={"250rem"} />
				<ProjectBox>
					<img
						src={require("../../assets/images/skillink.png")}
						width={"300rem"}
					/>
					<Padding src={"110rem"} />
					<AwardTitleText>
						시각장애인들을 위한 가전제품 사용 음성 안내.
						애플리케이션.
					</AwardTitleText>
					<Padding src={"20rem"} />
					<ProjectTagText># React # OpenAI API</ProjectTagText>
				</ProjectBox>
				<Padding src={"250rem"} />
				<ProjectBox>
					<img
						src={require("../../assets/images/system.png")}
						width={"70%"}
					/>
					<Padding src={"110rem"} />
					<AwardTitleText>
						음성 회의록 요약 및 검색 시스템.
					</AwardTitleText>
					<Padding src={"20rem"} />
					<ProjectTagText>
						# React # OpenAI API # Summary model
					</ProjectTagText>
				</ProjectBox>
				<Padding src={"100rem"} />
			</GreyWrapper>
		</Wrapper>
	);
};

export default MainPage;

interface Size {
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
	margin-top: 100rem;
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

const BoxTitleText = styled.span`
	font-family: "Pretendard-Bold";
	color: white;
	font-size: 90rem;
`;

const AwardSubText = styled.span`
	font-family: "Pretendard-Bold";
	color: #c7c7c7;
	font-size: 30rem;
	margin-bottom: 13rem;
`;

const AwardTitleText = styled.span`
	font-family: "Pretendard-Bold";
	color: white;
	font-size: 45rem;
	margin-bottom: 13rem;
`;

const AwardCommentText = styled.span`
	font-family: "Pretendard-Bold";
	color: #c7c7c7;
	font-size: 20rem;
`;

const AwardCommentWhiteText = styled.span`
	font-family: "Pretendard-Bold";
	color: white;
	font-size: 20rem;
`;

const ProjectTagText = styled.span`
	font-family: "Pretendard-Bold";
	color: #c7c7c7;
	font-size: 30rem;
`;

const TitleWrapper = styled.div`
	background-color: black;
	width: 100%;
	height: 850rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BlackWrapper = styled.div`
	background-color: black;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const GreyWrapper = styled.div`
	background-color: #1c1c1c;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubTitleWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-bottom: 80rem;
	margin-top: 250rem;
`;

const SubTitleWrapperX = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-bottom: 150rem;
`;

const ImageWrapper = styled.div`
	width: 90%;
	height: 730rem;
	display: flex;
	flex-direction: row;
	overflow: scroll;
`;

const Padding = styled.div<Size>`
	height: ${(props) => props.src};
`;

const PaddingX = styled.div<Size>`
	width: ${(props) => props.src};
`;

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	overflow: visible;
	width: 70%;
`;

const AwardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: visible;
`;
const AwradBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	overflow: visible;
`;

const RowTextWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
