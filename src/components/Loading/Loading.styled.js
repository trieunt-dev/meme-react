import styled from "styled-components";

const LoadingContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	z-index: 1000;
	${(props) => {
		if (props.isLoading) {
			return `
                opacity: 1;
                visibility: visible;
            `;
		} else {
			return `
                opacity: 0;
                visibility: hidden;
            `;
		}
	}}
	background-color: rgb(255 255 255 / 0.4);
	opacity: 1;
	transition: all 0.3s ease;
`;

const LoadingSvg = styled.svg`
	display: block;
	margin: auto;
	width: 120px;
	heigh: 120px;
`;

export { LoadingContainer, LoadingSvg };
