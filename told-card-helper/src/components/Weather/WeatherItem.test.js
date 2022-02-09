import React from "react";
import {render, screen} from "@testing-library/react"

import WeatherItem from "./WeatherItem";

it("renders WeatherItem", async () => {
    render(<WeatherItem
        runway={"31"}
        windDirection={330}
        headwind={3}
        altimeter={29.22}
        fieldElevation={958}
        pressureAltitude={654}
        headwindComponent={2}
        crosswindComponent={1}
        takeOff={1234}/>
    );
    const runway = await screen.findByText('Runway: 31')
    expect(runway).toBeInTheDocument()
});