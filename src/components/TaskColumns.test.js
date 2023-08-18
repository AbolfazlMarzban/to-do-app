/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskColumns from "./TaskColumns";

describe("TaskColumns", () => {
  it("renders all task columns", () => {
    render(<TaskColumns />);

    const todoColumn = screen.getByTestId("Todo");
    const doingColumn = screen.getByTestId("Doing");
    const doneColumn = screen.getByTestId("Done");

    expect(todoColumn).toBeInTheDocument();
    expect(doingColumn).toBeInTheDocument();
    expect(doneColumn).toBeInTheDocument();
  });

  it('adds a new task to "Todo" column', () => {
    render(<TaskColumns />);

    const todoColumn = screen.getByTestId("Todo");
    const newTaskButton = screen.getByTestId("newTodo");

    fireEvent.click(newTaskButton);

    expect(todoColumn).toHaveTextContent("1 Tasks");
  });

  it('moves a task from "Todo" to "Doing" column', () => {
    render(<TaskColumns />);

    const newTaskButton = screen.getByTestId("newTodo");

    fireEvent.click(newTaskButton);

    const todoTask = screen.getByText("YourTaskText"); // Replace with the actual text you expect

    fireEvent.dragStart(todoTask);

    const doingColumn = screen.getByLabelText("Doing 💪");
    fireEvent.dragOver(doingColumn);
    fireEvent.drop(doingColumn);

    const todoColumn = screen.getByLabelText("Todo");
    const doingColumnAfterDrop = screen.getByLabelText("Doing 💪");

    expect(todoColumn).toHaveTextContent("0 Tasks");
    expect(doingColumnAfterDrop).toHaveTextContent("1 Tasks");
  });

  // Add more test cases for other interactions and behaviors
});
