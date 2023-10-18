import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OptionField from "./OptionField";

describe("OptionField component", () => {
	const mockHandleSelection = jest.fn();
	const props = {
		description: "Test Description",
		title: "Test Title",
		id: 1,
		selected: 1,
		onHandleSelection: mockHandleSelection
	};

	it("renders the component correctly", () => {
		const { getByText } = render(<OptionField {...props} />);
		expect(getByText("Test Title")).toBeDefined();
		expect(getByText("Test Description")).toBeDefined();
	});

	it("calls onHandleSelection when pressed", () => {
		const { getByText } = render(<OptionField {...props} />);
		const component = getByText("Test Title");
		fireEvent.press(component);
		expect(mockHandleSelection).toHaveBeenCalledWith(1, "Test Title");
	});
});
