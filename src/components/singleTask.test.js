/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleTask from "./singleTask";

describe("SingleTask", () => {
  const mockSendText = jest.fn();
  const mockSendCheck = jest.fn();
  const mockDeleteTask = jest.fn();

  beforeEach(() => {
    render(
      <SingleTask
        index={0}
        checked={false}
        state="todo"
        deleteTask={mockDeleteTask}
        sendText={mockSendText}
        sendCheck={mockSendCheck}
        id={1}
        itemText="Your Task Text"
      />
    );
  });

  it("renders the task text", () => {
    const taskText = screen.getByDisplayValue("YourTaskText");
    expect(taskText).toBeInTheDocument();
  });

  it("updates task text when changed", () => {
    const textInput = screen.getByDisplayValue("YourTaskText");
    fireEvent.change(textInput, { target: { value: "UpdatedTaskText" } });
    expect(mockSendText).toHaveBeenCalledWith("UpdatedTaskText");
  });

  it("updates task completion state when checkbox is clicked", () => {
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockSendCheck).toHaveBeenCalledWith(true);
  });

  it("calls deleteTask function when delete icon is clicked", () => {
    fireEvent.mouseEnter(screen.getByTestId("task-box"));
    const deleteIcon = screen.getByTestId("delete-icon");
    fireEvent.click(deleteIcon);
    expect(mockDeleteTask).toHaveBeenCalledWith("todo", 1);
  });
});
