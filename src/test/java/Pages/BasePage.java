package Pages;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

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
//        waitForElement(locator);
        findElement(locator).click();

    }

    //Input a text to a field
    public void writetoField(By locator, String text) {
        findElement(locator).clear();
        findElement(locator).sendKeys(text);
    }

    //    clear an Input field
    public void clearField(By locator) {
        findElement(locator).clear();
    }

    //    Verify if an element is present on a page
    public boolean isElementPresent(String linktext) {

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
    public void clickaLink(String linktext) throws InterruptedException {
//        waitForElement(linktext);
        findElement(linktext).click();

    }


//    Login to the application


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

    public void waitForElement(String linktext) {
        WebDriverWait wait = new WebDriverWait(getCurrentDriver(), 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(linktext)));
    }

    //Mouse over an element
    public void hoverOver(String linktext) {
        Actions actions = new Actions(getCurrentDriver());
        actions.moveToElement(findElement(linktext)).build().perform();
    }

    //    Move to an element
    public void moveToElement(By locator) {
        WebElement element = findElement(locator);
        Actions actions = new Actions(getCurrentDriver());
        actions.moveToElement(element).build().perform();
        actions.moveToElement(element).build().perform();
    }

    //Wait for an element to be Visible
    public void waitForVisiblilityofElement(By locator) {
        WebDriverWait wait = new WebDriverWait((getCurrentDriver()), 20);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(locator));
    }

    public void assertForCondition(String message, Boolean condition) {
        Assert.assertTrue(message, condition);
    }

    public String getCurrentURL() {
        return getCurrentDriver().getCurrentUrl();
    }

}
