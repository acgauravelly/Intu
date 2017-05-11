$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignIn.feature");
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
        "acgauravelly@gmail.com",
        "Pass123",
        "success"
      ],
      "line": 17,
      "id": "login;sign-in;;2"
    },
    {
      "cells": [
        "correctemail@email.com",
        "correctpassword",
        "success"
      ],
      "line": 18,
      "id": "login;sign-in;;3"
    },
    {
      "cells": [
        "incorrectemail@email.com",
        "incorrectpassword",
        "failure"
      ],
      "line": 19,
      "id": "login;sign-in;;4"
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
  "name": "I enter email as \"acgauravelly@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"Pass123\"",
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
  "duration": 10780309629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acgauravelly@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInTest.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 7355576652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass123",
      "offset": 21
    }
  ],
  "location": "SignInTest.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 65455428,
  "status": "passed"
});
formatter.match({
  "location": "SignInTest.iClickLoginButton()"
});
formatter.result({
  "duration": 2319577240,
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
  "duration": 1811439981,
  "status": "passed"
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
  "duration": 7499370432,
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
  "duration": 6740853310,
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
  "duration": 70894574,
  "status": "passed"
});
formatter.match({
  "location": "SignInTest.iClickLoginButton()"
});
formatter.result({
  "duration": 1631563282,
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
  "duration": 6605094389,
  "error_message": "java.lang.AssertionError: User could not Login\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Pages.BasePage.assertForCondition(BasePage.java:137)\r\n\tat Pages.SignInPage.assertSuccessfullLogin(SignInPage.java:50)\r\n\tat Tests.SignInTest.iShouldSeeThe(SignInTest.java:44)\r\n\tat ✽.Then the login should be \"success\"(SignIn.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Sign in",
  "description": "",
  "id": "login;sign-in;;4",
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
  "duration": 1081515814,
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
  "duration": 6493326678,
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
  "duration": 72297396,
  "status": "passed"
});
formatter.match({
  "location": "SignInTest.iClickLoginButton()"
});
formatter.result({
  "duration": 1273148327,
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
  "duration": 51783,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Forgot password",
  "description": "",
  "id": "login;forgot-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@forgotpassword"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I visit \"https://intu.co.uk/customer/account/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click \"Forgot Your Password?\" Link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "duration": 1125233784,
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
  "duration": 2721963485,
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
  "duration": 205126579,
  "status": "passed"
});
});