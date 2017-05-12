$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bugs.feature");
formatter.feature({
  "line": 2,
  "name": "Bugs Found",
  "description": "As a QA who found the bugs\r\nI want to now automate them",
  "id": "bugs-found",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I visit \"https://intu.co.uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on women category",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 7880853988,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.iAmOnWomenCategory()"
});
formatter.result({
  "duration": 12257812005,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Navigation back from workout wear",
  "description": "",
  "id": "bugs-found;navigation-back-from-workout-wear",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@bugone"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I visit \"https://intu.co.uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I am on women category",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click \"Workout wear picks\" Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I remove the filter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should be redirected to \"women category\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 978936746,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.iAmOnWomenCategory()"
});
formatter.result({
  "duration": 11487243736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Workout wear picks",
      "offset": 9
    }
  ],
  "location": "SignInTest.iClickLink(String)"
});
formatter.result({
  "duration": 1986887309,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.iRemoveTheFilter()"
});
formatter.result({
  "duration": 6538664407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "women category",
      "offset": 27
    }
  ],
  "location": "SignInTest.iShouldBeRedirectedToPage(String)"
});
formatter.result({
  "duration": 75336273,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...s://intu.co.uk/shop/[]\u003e but was:\u003c...s://intu.co.uk/shop/[category/women]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat Pages.BugsPage.verifyOnWomensCategoryPage(BugsPage.java:52)\r\n\tat Tests.SignInTest.iShouldBeRedirectedToPage(SignInTest.java:61)\r\n\tat ✽.Then I should be redirected to \"women category\" page(Bugs.feature:17)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I visit \"https://intu.co.uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am on women category",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 1009863793,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.iAmOnWomenCategory()"
});
formatter.result({
  "duration": 11210729574,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "bugs-found;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@bugtwo"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click \"Brand\" menu Link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Adidas\" as brand",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select adidas from autosuggest",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "only one adidias option should be present",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 9
    }
  ],
  "location": "BugsTest.iClickMenuLink(String)"
});
formatter.result({
  "duration": 371466053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 9
    }
  ],
  "location": "BugsTest.iEnterAsBrand(String)"
});
formatter.result({
  "duration": 347431952,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.iSelectAdidasFromAutosuggest()"
});
formatter.result({
  "duration": 1044723666,
  "status": "passed"
});
formatter.match({
  "location": "BugsTest.onlyOneAdidiasOptionShouldBePresent()"
});
formatter.result({
  "duration": 214654938,
  "error_message": "java.lang.AssertionError: expected:\u003c2\u003e but was:\u003c3\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat Pages.BugsPage.checkForBrand(BugsPage.java:83)\r\n\tat Tests.BugsTest.onlyOneAdidiasOptionShouldBePresent(BugsTest.java:49)\r\n\tat ✽.Then only one adidias option should be present(Bugs.feature:27)\r\n",
  "status": "failed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 3,
  "name": "Login",
  "description": "As a user of Intu website\r\nI should be able to login to access various services",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Sign in",
  "description": "",
  "id": "login;sign-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I visit \"https://intu.co.uk/customer/account/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click loginButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the login should be \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;sign-in;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "result"
      ],
      "line": 16,
      "id": "login;sign-in;;1"
    },
    {
      "cells": [
        "correctemail@email.com",
        "correctpassword",
        "success"
      ],
      "line": 17,
      "id": "login;sign-in;;2"
    },
    {
      "cells": [
        "incorrectemail@email.com",
        "incorrectpassword",
        "failure"
      ],
      "line": 18,
      "id": "login;sign-in;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Sign in",
  "description": "",
  "id": "login;sign-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@signin"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I visit \"https://intu.co.uk/customer/account/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter email as \"correctemail@email.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"correctpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click loginButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the login should be \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk/customer/account/login",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 1306240833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "correctemail@email.com",
      "offset": 18
    }
  ],
  "location": "SignInTest.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 5156128119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "correctpassword",
      "offset": 21
    }
  ],
  "location": "SignInTest.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 93488395,
  "status": "passed"
});
formatter.match({
  "location": "SignInTest.iClickLoginButton()"
});
formatter.result({
  "duration": 6153318690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 21
    }
  ],
  "location": "SignInTest.iShouldSeeThe(String)"
});
formatter.result({
  "duration": 5114594102,
  "error_message": "java.lang.AssertionError: User could not Login\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Pages.BasePage.assertForCondition(BasePage.java:154)\r\n\tat Pages.SignInPage.assertSuccessfullLogin(SignInPage.java:50)\r\n\tat Tests.SignInTest.iShouldSeeThe(SignInTest.java:47)\r\n\tat ✽.Then the login should be \"success\"(SignIn.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "Sign in",
  "description": "",
  "id": "login;sign-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@signin"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I visit \"https://intu.co.uk/customer/account/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter email as \"incorrectemail@email.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"incorrectpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click loginButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the login should be \"failure\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk/customer/account/login",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 800854305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incorrectemail@email.com",
      "offset": 18
    }
  ],
  "location": "SignInTest.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 5163095709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incorrectpassword",
      "offset": 21
    }
  ],
  "location": "SignInTest.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 98306691,
  "status": "passed"
});
formatter.match({
  "location": "SignInTest.iClickLoginButton()"
});
formatter.result({
  "duration": 866095855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 21
    }
  ],
  "location": "SignInTest.iShouldSeeThe(String)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Forgot password",
  "description": "",
  "id": "login;forgot-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@forgotpassword"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I visit \"https://intu.co.uk/customer/account/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click \"Forgot Your Password?\" Link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be redirected to \"forgot password\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://intu.co.uk/customer/account/login",
      "offset": 9
    }
  ],
  "location": "SignInTest.iVisit(String)"
});
formatter.result({
  "duration": 769103371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forgot Your Password?",
      "offset": 9
    }
  ],
  "location": "SignInTest.iClickLink(String)"
});
formatter.result({
  "duration": 678475258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forgot password",
      "offset": 27
    }
  ],
  "location": "SignInTest.iShouldBeRedirectedToPage(String)"
});
formatter.result({
  "duration": 284500648,
  "status": "passed"
});
});