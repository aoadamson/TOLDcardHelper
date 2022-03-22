import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";

let update_form_input = (placeholder, value) => {
    const airport_input = screen.getByPlaceholderText(placeholder)
    fireEvent.change(airport_input, {target: {value}})
}

it("App.js integration test", async () => {
    const render_var = render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    update_form_input("airport", "KDSM")
    update_form_input("runway", 31)
    update_form_input("wind", 330)
    update_form_input("headwind", 10)
    update_form_input("altimeter", 30.11)
    const grass = screen.getByText("Is the runway grass?")
    fireEvent.click(grass)
    const button = screen.getByText("Calculate Told")
    fireEvent.click(button)
    render_var.debug()
    // const buttonClicked = await screen.findByText('')
    // expect(buttonClicked).toBeInTheDocument()
});