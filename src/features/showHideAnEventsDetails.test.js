import React from "react";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import { mockEvents } from "../mock-events";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({
    given,
    and,
    when,
    then,
  }) => {
    given("the list of events has been loaded", () => {});

    let AppWrapper;

    and("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user did not click the „Show Details“ yet", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(10);
    });

    then("the event elements are collapsed", () => {
      expect(AppWrapper.find("showDetails")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    and("the list of events has been loaded", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(10);
    });

    when("the user clicks the button „show Details“", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event element should expand and show more information", () => {
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(0);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    and("event element is expanded and shows details", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(0);
    });

    when("the user clicks the „hide details“ button", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event element details should collapse", () => {
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(0);
    });
  });
});
