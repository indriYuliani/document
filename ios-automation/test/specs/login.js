loginPage = require('../pageobjects/login.page.js');
 


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const result = await loginPage.login();
        console.log(result);
        
    })
})


