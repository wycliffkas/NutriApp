import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Gender from './Gender';
import { AuthContext } from '../../context/AuthContext';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('Gender screen', () => {
  const setUserDetails = jest.fn();
  const userDetails = {};
  const contextValues = { userDetails, setUserDetails };

  it('renders the screen with gender options and a Next button', () => {
    const { getByText } = render(
      <AuthContext.Provider value={contextValues}>
        <Gender />
      </AuthContext.Provider>
    );
    expect(getByText('How do you define yourself?')).toBeDefined();
    expect(getByText('Male')).toBeDefined();
    expect(getByText('Female')).toBeDefined();
    expect(getByText('Others')).toBeDefined();
    expect(getByText('Next')).toBeDefined();
  });


  it('calls setUserDetails when a gender is selected and Next is pressed', () => {
    const { getByText } = render(
      <AuthContext.Provider value={contextValues}>
        <Gender />
      </AuthContext.Provider>
    );
    const genderButton = getByText('Male');
    fireEvent.press(genderButton);
    const nextButton = getByText('Next');
    fireEvent.press(nextButton);
    expect(setUserDetails).toHaveBeenCalledWith({ ...userDetails, gender: 'Male' });
  });
});
