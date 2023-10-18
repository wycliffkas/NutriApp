import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./Button";

describe("Button component", () => {
	const mockOnHandlePress = jest.fn();
	const title = "Test Button";

	it("renders the button correctly", () => {
		const { getByText } = render(
			<Button title={title} onHandlePress={mockOnHandlePress} />
		);
		const buttonElement = getByText(title);
		expect(buttonElement).toBeDefined();
	});

	it("handles press event correctly", () => {
		const { getByText } = render(
			<Button title={title} onHandlePress={mockOnHandlePress} />
		);
		const buttonElement = getByText(title);
		fireEvent.press(buttonElement);
		expect(mockOnHandlePress).toHaveBeenCalledTimes(1);
	});

	it("matches snapshot", () => {
		const { baseElement } = render(
			<Button title={title} onHandlePress={mockOnHandlePress} />
		);
		expect(baseElement).toMatchSnapshot();
	});
});
