package Tests;

import Pages.BugsPage;
import Pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by ajay on 11/05/2017.
 */
public class SignInTest {
    SignInPage signInPage = new SignInPage();
    BugsPage bugsPage = new BugsPage();

    @Given("^I visit \"([^\"]*)\"$")
    public void iVisit(String arg0) throws Throwable {
        signInPage.navigateToIntuWebsite(arg0);
    }

    @And("^I click \"([^\"]*)\" Link$")
    public void iClickLink(String arg0) throws Throwable {

        signInPage.clickSignInLink(arg0);
    }


    @When("^I enter email as \"([^\"]*)\"$")
    public void iEnterEmailAs(String arg0) throws Throwable {
        signInPage.enterEmail(arg0);
    }

    @And("^I enter password as \"([^\"]*)\"$")
    public void iEnterPasswordAs(String arg0) throws Throwable {
        signInPage.enterPassword(arg0);
    }

    @And("^I click loginButton$")
    public void iClickLoginButton() throws Throwable {
        signInPage.clickLogin();
    }

    @Then("^the login should be \"([^\"]*)\"$")
    public void iShouldSeeThe(String arg0) throws Throwable {
        if (arg0.equalsIgnoreCase("success")) {
            signInPage.assertSuccessfullLogin();
        } else if (arg0.equalsIgnoreCase("failure")) {

        }
    }


    @Then("^I should be redirected to \"([^\"]*)\" page$")
    public void iShouldBeRedirectedToPage(String arg0) throws Throwable {
        if (arg0.contains("forgot password")) {
            signInPage.verifyOnForgotPasswordPage();
        } else if (arg0.contains("forgot password")) {
            bugsPage.verifyOnWomensCategoryPage();
        } else if (arg0.equalsIgnoreCase("women category")) {
            bugsPage.verifyOnWomensCategoryPage();
        }


    }


}
