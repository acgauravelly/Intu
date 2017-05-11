package Pages;


import com.gargoylesoftware.htmlunit.WebClient;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.util.List;

import static Utils.WebConnector.getCurrentDriver;

@SuppressWarnings("ALL")
public class BasePage {

    //Opens a URL
    public void goToUrl(String url) {

        getCurrentDriver().get(url);
    }

    //    Navigates to a url
    public void navigateToUrl(String url) {

        getCurrentDriver().navigate().to(url);
    }

    //    Find element by locator
    public WebElement findElement(By locator) {

        return getCurrentDriver().findElement(locator);
    }

    //    Find element by linktext
    public WebElement findElement(String linktext) {

        return getCurrentDriver().findElement(By.linkText(linktext));
    }

    //    Find elements by locator
    public List<WebElement> findElements(By locator) {

        return getCurrentDriver().findElements(locator);
    }

    //    Click an element by locator
    public void click(By locator) {
        waitForElement(locator);
        findElement(locator).click();

    }

    //Input a text to a field
    public void writetoField(By locator, String text) {
//
        findElement(locator).sendKeys(text);
    }

    //    clear an Input field
    public void clearField(By locator) {
        findElement(locator).clear();
    }

    //    Verify if an element is present on a page
    public boolean isElementPresent(String  linktext) {

        if (findElements(By.linkText(linktext)).size() == 0) {
            return false;
        } else {
            return true;
        }
    }

    public boolean isElementPresent(By locator) {

        if (findElements(locator).size() == 0) {
            return false;
        } else {
            return true;
        }
    }


    //Verify if an element is displayed or not
    public boolean isElementDisplayed(By locator) {

        return findElement(locator).isDisplayed();
    }

    //    Click a link
    public void clickaLink(String linktext) {
        findElement(linktext).click();
    }

    //Gets the text and asserts for exact required text
    public void verifyTextofaField(By locator, String text) {
        waitForElement(locator);
        System.out.println(findElement(locator).getText());
//        Assert.assertTrue(findElement(locator).getText().equalsIgnoreCase(text));
        Assert.assertEquals(text, findElement(locator).getText());

    }

    //    Asserts a String  contains String
    public void verifyFieldContainsText(By locator, String text) {
        waitForElement(locator);
        System.out.println(findElement(locator).getText());
        Assert.assertTrue(findElement(locator).getText().contains(text));


    }

    //explicitly wait for element
    public void waitForElement(By locator) {

        WebDriverWait wait = new WebDriverWait(getCurrentDriver(), 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }


    //    Gets and confirms the http status
    public void confirm200HttpCode() throws IOException

    {
        WebClient webClient = new WebClient();
        int code = webClient.getPage(getCurrentDriver().getCurrentUrl()).getWebResponse().getStatusCode();
        System.out.println(code);
        int expCode = 200;
        Assert.assertEquals(expCode, code);

    }

    public void assertForCondition(String message, Boolean condition) {
        Assert.assertTrue(message, condition);
    }

    public String getCurrentURL() {
        return getCurrentDriver().getCurrentUrl();
    }

}
