import React from "react";
import windComponents from "./WindComponents";

it("renders WeatherItem", () => {
    const result = windComponents(31, 330,5)
    expect(result).toEqual({"crosswindComp": 1.7101007166283435, "headwindComp": 4.698463103929543})
});