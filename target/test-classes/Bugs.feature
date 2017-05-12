@All
Feature:Bugs Found
  As a QA who found the bugs
  I want to now automate them

  Background:
    Given I visit "https://intu.co.uk"
    And  I am on women category

  @bugone
  Scenario: Navigation back from workout wear

    Given I visit "https://intu.co.uk"
    And  I am on women category
    And I click "Workout wear picks" Link
    When I remove the filter
    Then I should be redirected to "women category" page


  @bugtwo

  Scenario:

    When  I click "Brand" menu Link
    And I enter "Adidas" as brand
    And I select adidas from autosuggest
    Then only one adidias option should be present



