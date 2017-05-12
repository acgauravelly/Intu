@manual,@testcases
Feature: Login
  As a user on Intu website
  I should be able to login to access various services

  Background:

    Given I visit "https://intu.co.uk/"
    And I click on "Sign In"

  @noValues
  Scenario: Just click sign in with empty fields

    And I click on Login
    Then I should see "This is a required field" alert below email and password

    @nodomain
      Scenario: Email without domain
      When I enter  email as "abc"
      And I enter  password as "password"
      And I click on Login
      Then I should see "Please enter a valid email address. For example johndoe@domain.com." alert below email
  @nopassword
  Scenario: Enter email and leave password blank
    When I enter  email as "successfullemail@email.com"
    And I click on Login
    Then I should see "This is a required field" alert below email and password

  @wrongpassword
  Scenario:correct email and wrong password
    When I enter  email as "successfullemail@email.com"
    And I enter password as "wrong password"
    And I click on Login
    Then I should see  Invalid login or password message

  @Success
  Scenario: Login with the correct credentials

    When I enter  email as "successfullemail@email.com"
    And I enter password as "correct password"
    And I click on Login
    Then I should see Account Dashboard with Account Information

  @Failure
  Scenario: Login with the incorrect credentials

    When I enter  email as "nonregistered@email.com"
    And I enter password as "wwrong password"
    And I click on Login
    Then I should see  Invalid login or password message


  @ForgotPassword

  Scenario: Request a new password via Forgot password link
    When I click on "Forgot Your Password"
    Then I should be redirected to the forgot password page


