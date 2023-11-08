import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";

const MainPage = () => {
	return (
		<>
			<Wrapper>
				<Text>홈페이지 입니다</Text>
			</Wrapper>
		</>
	);
};

export default MainPage;

const Text = styled.span`
	font-size: "50rem";
	font-family: "Pretendard-semibold";
	margin-top: 10rem;
	margin-bottom: 50rem;
`;

const Wrapper = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
