import { css } from "@acab/ecsstatic";
import { useState } from "react";
import { Link } from "react-router";
import { useColorList } from "../hooks/use-color-list";
import { Button, ButtonGroup } from "./Button";
import {
	FormWrapper,
	Form,
	FormControl,
	controlMargin,
	Select,
} from "./FormElements";
import Box from "./Box";

const FLEX_WRAP_VALUES = ["nowrap", "wrap", "wrap-reverse"];
const FLEX_DIRECTION_VALLUES = [
	"row",
	"column",
	"row-reverse",
	"column-reverse",
];
const JUSTIFY_CONTENT_VALUES = [
	"start",
	"end",
	"center",
	"space-between",
	"space-around",
	"space-evenly",
];
const ALIGN_ITEMS_VALUES = ["stretch", "center", "start", "end", "baseline"];

const range = (num) => {
	const result = [];
	for (let i = 0; i < num; i++) {
		result.push(i);
	}
	return result;
};

export default function FlexboxTester() {
	const [numBoxes, setNumBoxes] = useState(3);
	const [wrap, setWrap] = useState("nowrap");
	const [direction, setDirection] = useState("row");
	const [justifyContent, setJustifyContent] = useState("start");
	const [alignItems, setAlignItems] = useState("stretch");

	const flexStyles = {
		border: "1px solid black",
		overflow: "auto", // scrollbars when many boxes
		display: "flex",
		flexWrap: wrap,
		flexDirection: direction,
		justifyContent,
		alignItems,
	};

	return (
		<FormWrapper>
			<Box style={flexStyles}>
				{range(numBoxes).map((index) => (
					<div className={flexChild} key={index}>
						{index}
					</div>
				))}
			</Box>
			<Form>
				<ButtonGroup className={controlMargin}>
					<Button onClick={() => setNumBoxes(numBoxes + 1)}>
						Add box
					</Button>
					<Button onClick={() => setNumBoxes(numBoxes - 1)}>
						Remove box
					</Button>
				</ButtonGroup>
				<FormControl>
					<label htmlFor="flex-wrap">flex-wrap</label>
					<Select
						id="flex-wrap"
						value={wrap}
						onChange={(e) => setWrap(e.target.value)}
						options={FLEX_WRAP_VALUES}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor="flex-direction">flex-direction</label>
					<Select
						id="flex-direction"
						value={direction}
						onChange={(e) => setDirection(e.target.value)}
						options={FLEX_DIRECTION_VALLUES}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor="justify-content">justify-content</label>
					<Select
						id="justify-content"
						value={justifyContent}
						onChange={(e) => setJustifyContent(e.target.value)}
						options={JUSTIFY_CONTENT_VALUES}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor="align-items">align-items</label>
					<Select
						id="align-items"
						value={alignItems}
						onChange={(e) => setAlignItems(e.target.value)}
						options={ALIGN_ITEMS_VALUES}
					/>
				</FormControl>
			</Form>
			<p>
				<Link to="/">Back to index</Link>
			</p>
		</FormWrapper>
	);
}

const flexChild = css`
	font-size: 110%;
	border: 1px solid hsl(0deg 0% 60%);
	background-color: hsl(0deg 0% 95%);
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
