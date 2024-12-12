const addRecipient  = require('../pageobjects/addRecipient.page');
const uploadDoc  = require('../pageobjects/uploadDashboard.page');

describe('My Login application', () => {
    it.skip('Upload Enterprise 1', async () => {
        const enterprise_number = 1;
        await browser.pause(3000);
        const result = await uploadDoc.uploadEnterprise(enterprise_number);
        console.log(result);
        
    })
    it('add recipient', async() => {
        const resultRecipien = await addRecipient.addRecipientPage();
        await browser.pause(3000);
        console.log(resultRecipien);
    })
})