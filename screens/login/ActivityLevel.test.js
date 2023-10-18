import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ActivityLevel from './ActivityLevel';
import { AuthContext } from '../../context/AuthContext';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('ActivityLevel screen', () => {
  const navigation = { navigate: jest.fn() };
  const setUserDetails = jest.fn();
  const userDetails = {};
  const contextValues = { userDetails, setUserDetails };

  it('renders the screen with options and a Next button', () => {
    const { getByText } = render(
      <AuthContext.Provider value={contextValues}>
        <ActivityLevel navigation={navigation} />
      </AuthContext.Provider>
    );
    expect(getByText('What is your activity level?')).toBeDefined();
    expect(getByText('Not very active')).toBeDefined();
    expect(getByText('Lightly active')).toBeDefined();
    expect(getByText('Active')).toBeDefined();
    expect(getByText('Very active')).toBeDefined();
    expect(getByText('Next')).toBeDefined();
  });


  it('navigates to the Height screen when Next is pressed after selecting an activity level', () => {
    const { getByText } = render(
      <AuthContext.Provider value={contextValues}>
        <ActivityLevel navigation={navigation} />
      </AuthContext.Provider>
    );
    const activityLevelButton = getByText('Not very active');
    fireEvent.press(activityLevelButton);
    const nextButton = getByText('Next');
    fireEvent.press(nextButton);
    expect(setUserDetails).toHaveBeenCalledWith({ ...userDetails, activityLevel: 'Not very active' });
    expect(navigation.navigate).toHaveBeenCalledWith('Height');
  });
});
