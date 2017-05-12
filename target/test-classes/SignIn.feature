@All

Feature: Login
  As a user of Intu website
  I should be able to login to access various services

  @signin
  Scenario Outline: Sign in
    Given I visit "https://intu.co.uk/customer/account/login"
    When I enter email as "<email>"
    And I enter password as "<password>"
    And I click loginButton
    Then the login should be "<result>"

    Examples:
      | email                    | password          | result  |
      | correctemail@email.com   | correctpassword   | success |
      | incorrectemail@email.com | incorrectpassword | failure |

  @forgotpassword
  Scenario:Forgot password
    Given I visit "https://intu.co.uk/customer/account/login"
    And I click "Forgot Your Password?" Link
    Then I should be redirected to "forgot password" page