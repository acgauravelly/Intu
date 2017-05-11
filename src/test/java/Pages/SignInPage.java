package Pages;

import org.openqa.selenium.By;

@SuppressWarnings("ALL")
public class SignInPage extends BasePage {


    private By emailField = By.id("email");
    private By passwordField = By.id("pass");
    private By loginButton = By.cssSelector("button[title='Login']");
    private String dashboardURL = "https://intu.co.uk/customer/account/";
    private By emailAdressFieldinforgotPassPage = By.id("email_address");
    private By alertmessage = By.cssSelector(".alert-box__message");


    public void navigateToIntuWebsite(String url) {
        if (getCurrentURL().equals(dashboardURL)) {
            clickSignInLink("Sign out");
        }
        navigateToUrl(url);
    }

    public void enterEmail(String email) {
        if (isLoggedIn()) {
            clickaLink("Sign out");
            writetoField(emailField, email);
        } else {
            writetoField(emailField, email);
        }


    }

    public void enterPassword(String password) {
        writetoField(passwordField, password);
    }

    public void clickLogin() {
        click(loginButton);
    }

    public void clickSignInLink(String linktext) {

        clickaLink(linktext);

    }

    public void assertSuccessfullLogin() {
        assertForCondition("User could not Login", isElementPresent("Sign out"));


    }

    public void assertFailedLogin() {
        verifyTextofaField(alertmessage, "Invalid login or password.");

    }

    public void verifyOnForgotPasswordPage() {
        if (getCurrentURL().endsWith("forgotpassword/")) {
            assertForCondition("email adress field is not present", isElementDisplayed(emailAdressFieldinforgotPassPage));
        }
    }

    public boolean isLoggedIn() {
        if (isElementPresent("Sign out")) {

            return true;
        } else
            return false;
    }

}
