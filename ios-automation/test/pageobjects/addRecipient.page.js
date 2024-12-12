//const pilihDoc  = require('../pageobjects/FileManager.page');

class addRecipient {
    get documentView() {
        return $('//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther');
    }

    get btnContinue(){
        return $('id:Continue');
    }
    get addRecipient () {
        return $('id:Add Recipient');
    }
    get searchPrivyID () {
        return $('//XCUIElementTypeTextField[@value="Type PrivyID or email"]');
    }
    get fieldPrivyIDEmail () {
        return $('id:PrivyID or email');
    }
    get firstResult () {
        return $('//XCUIElementTypeApplication[@name="DocumentApp"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    get accountType () {
        return $('//XCUIElementTypeTextField[@value="Select account"]');
    }
    get optionEnterprise () {
        return $('id:Enterprise');
    }
    get selectEnterprise () {
        return $('//XCUIElementTypeTextField[@value="Select enterprise"]');
    }
    get ptPadangPagi () {
        return $('id:PT Padang Pagi Sore');
    }
    get actionType () {
        return $('//XCUIElementTypeTextField[@value="Select action"]');
    }
    get radioSign () {
        return $('id:Sign');
    }
    get addBtn () {
        return $('id:Add');
    }
    get signaturePlacement () {
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther');
    }
    get firstRecipient () {
        return $('//XCUIElementTypeCell/XCUIElementTypeOther[1]/XCUIElementTypeOther');
    }
    get doneBtn () {
        return $('id:Done');
    }
    get shareBtn () {
        return $('id:Share');
    }
    get confirmBtn () {
        return $('id:Confirm');
    }
    get pagePDF () {
        return $('id:Page 1 of 1');
    }

    async addRecipientPage(){
        await this.documentView.waitForDisplayed();
        await browser.pause(5000);
        await this.btnContinue.click();
        await this.addRecipient.click();
        await this.searchPrivyID.click();
        await this.fieldPrivyIDEmail.addValue('SAD1111');
        await this.firstResult.click();
        await this.accountType.click();
        await this.optionEnterprise.click();
        await this.selectEnterprise.click();
        await this.ptPadangPagi.click();
        await this.actionType.click();
        await this.radioSign.click();
        await driver.execute('mobile: tap', {x: 190,y: 750});
        await this.addBtn.click();
        await this.continueBtn.click();
        await this.signaturePlacement.click();
        await this.firstRecipient.click();
        await this.doneBtn.click();
        await this.shareBtn.click();
        await this.confirmBtn.click();
        
    }
}
module.exports = new addRecipient();