



/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    /**
     * define selectors using getter methods
     */

    get Login(){
        return $('id:Log in');
    }
    get inputPID () {
        return $('XCUIElementTypeTextField');
    }
    get btnContinue(){
        return $('id:Continue');
    }

    get inputPassword () {
        return $('XCUIElementTypeSecureTextField');
    }

    get btnSubmit () {
        return $('//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.Login.click();
        await this.inputPID.addValue('SLY5278');
        await this.btnContinue.click();
        await this.inputPassword.addValue('Akuntes1');
        await this.btnSubmit.click();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

module.exports = new LoginPage();
