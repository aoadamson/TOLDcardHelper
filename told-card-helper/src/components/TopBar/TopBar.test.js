import React from "react";
import {render, screen} from "@testing-library/react"
import store from "../../store";
import {Provider} from "react-redux";
import TopBar from "./TopBar";


it("renders WeatherItem",  () => {
    render(<Provider store={store}>
        <TopBar />
    </Provider>)
    const runway = screen.queryByText('Told Cards Shown: 0')
    expect(runway).toBeInTheDocument()
});