package Pages;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;
@SuppressWarnings("ALL")
public class BugsPage extends BasePage {

    private By hoverOverMenu = By.id("global-nav_shop");
    private By removeButton = By.cssSelector(".ii-cross");
    private String womenCategoryUrl = "https://intu.co.uk/shop/category/women";
    private By sideMenu = By.cssSelector(".facets.js-facets");
    private By menus = By.className(".facet__heading");
    private By brandLink = By.xpath("//*[@id='facet__brand']");
    private By brandField = By.xpath("//*[@id='facet__brand']/div/input");
    private By brandsAutoSuggest = By.xpath("//*[@id='facet__brand']/div/ul");
    private By deliveryLink = By.xpath("//*[@id='facet__delivery']");
    private By clickAdidiasLink = By.xpath("//a[@data-ga-label='Adidas']");

    //chooses women from mouse over menu
    public void chooseWomenCategory() throws InterruptedException {

        hoverOver("shop online");
        Thread.sleep(5000);
        WebElement menuContainer = findElement(hoverOverMenu);
        List<WebElement> menuOptions = menuContainer.findElements(By.tagName("a"));
        for (WebElement option : menuOptions) {
            if (option.getText().equalsIgnoreCase("women")) {
                option.click();
                break;

            }
            Thread.sleep(5000);

        }

        Assert.assertTrue("Not on womens cat", getCurrentURL().endsWith("women"));

    }

    //Removes filter
    public void cancelFilter() {
        click(removeButton);
    }

    //Verify if on women category page
    public void verifyOnWomensCategoryPage() {
        System.out.println(getCurrentURL());
        Assert.assertEquals(getCurrentURL(), womenCategoryUrl);

    }

    //    Clicks menu by name
    public void clickMenuLink(String menuitem) {
        List<WebElement> menu = findElement(sideMenu).findElements(menus);
        System.out.println("*************************************" + menu.size());
        for (WebElement eachMenu : menu) {
            if (eachMenu.getText().equalsIgnoreCase(menuitem)) {
                System.out.println(eachMenu);
                eachMenu.click();
                break;
            }
        }

    }

    //Enters brand in Brand search field
    public void enterBrandToSearch(String brand) {
        moveToElement(brandField);

        writetoField(brandField, brand);
    }


    //    Verify the number of brand sin the selection
    public void checkForBrand() {
        moveToElement(brandsAutoSuggest);
        List<WebElement> brandsinFacet = findElement(brandsAutoSuggest).findElements(By.tagName("li"));
        System.out.println(brandsinFacet.size());
        Assert.assertEquals(2, brandsinFacet.size());

    }

    //click brand
    public void clickBrandLink() {
        moveToElement(brandLink);
        click(brandLink);
    }

    //Click on adidas link
    public void clickAdidiasLink() {
        click(clickAdidiasLink);
    }
}
