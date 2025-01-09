import { css } from "@acab/ecsstatic";

export function FormWrapper({ children, ...delegated }) {
	return (
		<div className={wrapper} {...delegated}>
			{children}
		</div>
	);
}

export function Form({ children, ...delegated }) {
	const defaultOnSubmit = (e) => e.preventDefault();

	return (
		<form className={form} onSubmit={defaultOnSubmit} {...delegated}>
			{children}
		</form>
	);
}

export function FormControl({ children, ...delegated }) {
	return (
		<div className={control} {...delegated}>
			{children}
		</div>
	);
}

export function Select({ options, ...delegated }) {
	return (
		<select {...delegated}>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

const wrapper = css`
	@media (min-width: 50rem) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

const form = css`
	padding-block: 3rem;
`;

const control = css`
	margin-bottom: 0.5rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
`;

export const controlMargin = css`
	margin-bottom: 0.5rem;
`;
