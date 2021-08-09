Feature 1: Filter events by city

User Story
As a user,
I should be able to filter events by city
So that I can see the list of events that take place in that city.

Scenarios
Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities.
Given the user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open
When the user starts typing in the city textbox
Then the user should see a list of city suggestions that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g. “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e. “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

Feature 2: Show/Hide an event’s details

User Story
As a user
I should be able to show and hide an events details
So that I can see more or less details about that event.

Scenarios
Scenario 1: An event element is collapsed by default
Given The main page has loaded events
When the user selects a city
Then The user should see a list of events but are collapsed to hide details.


Scenario 2: User can expand an event to see its details.
Given The user can see a list of events
When the user clicks an event
Then the event expands to show further detail about that event.

Scenario 3: User can collapse an event to hide its details
Given There is an expanded event with its details
When the user clicks on the expanded event
Then the event collapses, hiding the extra details

Feature 3: Specify number of events

User Story
As a user
I should be able to select how many events to view
So that I can choose the number of events I see on the screen at a time.

Scenarios
Scenario 1: When a user hasn’t specified a number, 32 is the default number
Given the main page shows events from a city
When the events are loaded
Then 32 events are loaded by default.

Scenario 2: User can change the number of events they want to see
Given the main page shows events from a city 
When the user inputs the number of events they want to see per page
Then the number of events on the page matches what the user decided

Feature 4: Use the App when offline

User Story
As a user,
I should be able to use the app when offline
So that I don’t need internet access to see the events I was viewing previously

Scenarios
Scenario 1: Show cached data when there’s no internet connection
Given the user is not connected to the internet
When the user opens the app
Then the user is shown the events in the city they were seeing last.

Scenario 2: Show error when user changes the settings (city, time range)
Given the user is not connected to the internet and the app is open
When the user tries to change the settings to data they do not have cached
Then the app displays an error saying that they must reconnect to the internet to access that data

Feature 5: Data visualization

User Story
As a user,
I should be able to see a chart with event data
So that I can see the all events happening in the city at one time

Scenarios
Scenario 1: Show a chart with the number of upcoming events in each city
Given the user has inputted their city
When the user clicks on a chart
Then the user should see a chart displaying the number of events in that city and be
able to click on other cities to see their charts as well

