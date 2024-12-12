//const pilihDoc  = require('../pageobjects/FileManager.page');

class docList {
    get tabBar(){
        return $('//XCUIElementTypeTabBar[@name="Tab Bar"]/XCUIElementTypeButton[2]');
    }

    get searchInput(){
        return $('//XCUIElementTypeSearchField[@name="Search"]');
    }
    // get searchButton() { 
    //     return $('button#searchButton');
    //  } // ganti lokator sesuai aplikasi
    
    get txtSearch () {
        return $('//XCUIElementTypeSearchField[@name="Search"]');
    }

    get sidebar(){
        return $('//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    get Opensidebar(){
        return $('//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]');
    }

    get selectSidebarMenu(){
        return $('(//XCUIElementTypeStaticText[@name="Inbox"])[2]');
    }


    async docList(){
        await this.tabBar.click();
    }

    async openSidebar(){
        // await this.sidebar.click();
        // await this.Opensidebar.click();
        await driver.execute('mobile: tap', {x: 52,y: 72});
        await browser.pause(1000);
        await this.selectSidebarMenu.click();
        await browser.pause(1000);

    }

   
    async searchActionRequired (SearchText) {
        await browser.pause(1000);
        await this.txtSearch.click();
        await browser.pause(1000);
        await this.txtSearch.setValue('note');
        await browser.keys('Enter');
        await browser.pause(1000);
       // await browser.execute('mobile: performEditorAction', { action: 'done' }); //fungtion dari UIautomator 2 appium
    }

    async searchInbox (SearchText) {
        await browser.pause(1000);
        await this.txtSearch.click();
        await browser.pause(1000);
        await this.txtSearch.setValue('note');
        await browser.keys('Enter');
        await browser.pause(1000);
       // await browser.execute('mobile: performEditorAction', { action: 'done' }); //fungtion dari UIautomator 2 appium
    }


    




}
module.exports = new docList();