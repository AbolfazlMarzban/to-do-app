/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  queryByAttribute,
} from "@testing-library/react";
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

    const todoTask = screen.getByTestId("item-0");

    fireEvent.dragStart(todoTask);

    const doingColumn = screen.getByTestId("Doing");
    fireEvent.dragOver(doingColumn);
    fireEvent.drop(doingColumn);

    const todoColumn = screen.getByTestId("todo-length");
    const doingColumnAfterDrop = screen.getByTestId("doing-length");

    expect(todoColumn).toHaveTextContent("2 Tasks");
    expect(doingColumnAfterDrop).toHaveTextContent("1 Tasks");
  });
});
