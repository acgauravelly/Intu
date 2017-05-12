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
    private String defemailadress = "defautemail@email.com";
    private String defPassword = "defaultpassword";

//Navigates to the Intu Website
    public void navigateToIntuWebsite(String url) throws InterruptedException {

        navigateToUrl(url);
    }
//writes to a  email field
    public void enterEmail(String email) throws InterruptedException {
        if (isLoggedIn()) {
            clickaLink("Sign out");
            writetoField(emailField, email);
        } else {
            writetoField(emailField, email);
        }


    }
//enter password
    public void enterPassword(String password) {
        writetoField(passwordField, password);
    }
//click logon
    public void clickLogin() {
        click(loginButton);
    }

//    clinks by SignIn link
    public void clickSignInLink(String linktext) throws InterruptedException {

        clickaLink(linktext);

    }
//Asserts successfull login
    public void assertSuccessfullLogin() {
        assertForCondition("User could not Login", isElementPresent("Sign out"));


    }
    //Assert for condition on Unsuccessfull login
    public void assertFailedLogin() {
        verifyTextofaField(alertmessage, "Invalid login or password.");

    }

//    Verify if the user is on forgot passwor dpage
    public void verifyOnForgotPasswordPage() {
        if (getCurrentURL().endsWith("forgotpassword/")) {
            assertForCondition("email adress field is not present", isElementDisplayed(emailAdressFieldinforgotPassPage));
        }
    }
// Cheks if a use ris logge din
    public boolean isLoggedIn() {
        if (isElementPresent("Sign out")) {

            return true;
        } else
            return false;
    }

    /*
        public void login(String email, String password) {
            writetoField(emailField, email);
            writetoField(passwordField, password);
            click(loginButton);
        }

        public void defaultLogin() {
            if (!isLoggedIn()) {
                login(defemailadress, defPassword);
            }
        }
    */


}
