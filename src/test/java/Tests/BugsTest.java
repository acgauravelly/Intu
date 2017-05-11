package Tests;

import Pages.BugsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by ajay on 11/05/2017.
 */
public class BugsTest {
    BugsPage bugsPage = new BugsPage();

    @And("^I am on women category$")
    public void iAmOnWomenCategory() throws Throwable {
        bugsPage.chooseWomenCategory();
        Thread.sleep(5000);

    }

    @When("^I remove the filter$")
    public void iRemoveTheFilter() throws Throwable {
        bugsPage.cancelFilter();
        Thread.sleep(3000);

    }

    @But("^Iam redirected to the \"([^\"]*)\" page$")
    public void iamRedirectedToThePage(String arg0) throws Throwable {

    }

    @When("^I click \"([^\"]*)\" menu Link$")
    public void iClickMenuLink(String arg0) throws Throwable {
        bugsPage.clickBrandLink();
//        bugsPage.clickMenuLink(arg0);
    }

    @And("^I enter \"([^\"]*)\" as brand$")
    public void iEnterAsBrand(String arg0) throws Throwable {

        bugsPage.enterBrandToSearch(arg0);
    }


    @Then("^only one adidias option should be present$")
    public void onlyOneAdidiasOptionShouldBePresent() throws Throwable {
        bugsPage.checkForBrand();

    }

    @And("^I select adidas from autosuggest$")
    public void iSelectAdidasFromAutosuggest() throws Throwable {
        bugsPage.clickAdidiasLink();
    }
}
