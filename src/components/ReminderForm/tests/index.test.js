import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReminderForm from "../index";
import RemindersContext from '../../../context/remindersContext';

describe('Reminder Form ', () => {
  test("should be created correctly when required props are provided", () => {
    // When  
    render(<ReminderForm
      selectedDate={{}}
      handleClose={jest.fn()}
    />);
    const formTitle = screen.getByLabelText(/Title/);
    const formCity = screen.getByLabelText(/City/);
    const formTime = screen.getByLabelText(/Time/);

    // Then  
    expect(formTitle).toBeInTheDocument();
    expect(formCity).toBeInTheDocument();
    expect(formTime).toBeInTheDocument();
  });

  test("should allow the creation of a new reminder when its required fields are provided", () => {
    // Given  
    const correctTitle = 'This is a correct title';
    render(<ReminderForm
      selectedDate={{}}
      handleClose={jest.fn()}
    />);
    const formSaveButton = screen.getByTestId('form-save-button');
    const formTitle = screen.getByLabelText(/Title/);

    // When  
    fireEvent.change(formTitle, { target: { value: correctTitle } })

    // Then  
    expect(formTitle.value).toBe(correctTitle);
    expect(formSaveButton.disabled).toBe(false);
  });

  test("should not allow the creation of a new reminder when its required fields are wrong provided", () => {
    // Given  
    const incorrectTitle = 'This is an incorrect title which has more than thirty characters';
    render(<ReminderForm
      selectedDate={{}}
      handleClose={jest.fn()}
    />);
    const formSaveButton = screen.getByTestId('form-save-button');
    const formTitle = screen.getByLabelText(/Title/);

    // When  
    fireEvent.change(formTitle, { target: { value: incorrectTitle } })

    // Then  
    expect(formTitle.value).toBe(incorrectTitle);
    expect(formSaveButton.disabled).toBe(true);
  });

  test("should allow the creation of a new reminder when all the fields are provided", () => {
    // Given  
    const handleSaveReminderSpy = jest.fn();
    const selectedDate = { day: '9', month: '3', year: '2021' };
    const handleClose = jest.fn();

    render(
      <RemindersContext.Provider
        value={{
          reminders: [],
          handleRemindersChange: handleSaveReminderSpy,
        }}
      >
        <ReminderForm
          selectedDate={selectedDate}
          handleClose={handleClose}
        />
      </RemindersContext.Provider>
    );

    const formTitle = screen.getByLabelText(/Title/);
    const formCity = screen.getByLabelText(/City/);
    const formTime = screen.getByLabelText(/Time/);
    const formSaveButton = screen.getByTestId('form-save-button');

    fireEvent.change(formTitle, { target: { value: 'Reminder title' } });
    fireEvent.change(formCity, { type: 'click' }, 'Salta');
    fireEvent.change(formTime, { target: { value: {} } });

    // When  
    fireEvent.click(formSaveButton);

    // Then  
    expect(handleSaveReminderSpy).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
