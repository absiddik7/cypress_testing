Feature: User Login

	Scenario: User should be able to login with valid user name and password. 
    Given I go to the url https://cypress-dashboard.onrender.com/login/?next=/dashboard/
    When I enter valid email
    And I enter valid password
    And I click on the Log in button
    Then I land on organization dashboard page