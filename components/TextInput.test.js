import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './TextInput';

describe('Input component', () => {
  const mockOnChangeText = jest.fn();
  const placeholderText = 'Test placeholder';
  const testValue = 'Test input value';

  it('renders the component correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} onChangeText={mockOnChangeText} />
    );
    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeDefined();
  });

  it('triggers onChangeText when input value changes', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} onChangeText={mockOnChangeText} />
    );
    const inputElement = getByPlaceholderText(placeholderText);
    fireEvent.changeText(inputElement, testValue);
    expect(mockOnChangeText).toHaveBeenCalledWith(testValue);
  });

  it('matches snapshot', () => {
    const { toJSON } = render(
      <Input placeholder={placeholderText} onChangeText={mockOnChangeText} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
