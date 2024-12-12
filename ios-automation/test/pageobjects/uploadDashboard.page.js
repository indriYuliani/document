const pilihDoc  = require('../pageobjects/FileManager.page');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//fungtion random generate PID
function generateRandomTitle() {
   // const timestamp = Date.now();
    const randomTitle = Math.floor(Math.random() * characters.length); // angka acak antara 0 dan 999
    return `${randomTitle}`;
}

const randomTitleDoc = generateRandomTitle();

class uploadDasboardPage{

    get uploadDashboard(){
    return $('//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[4]/XCUIElementTypeOther/XCUIElementTypeImage');
    }

    optionEnterprise(enterprise_number){
        return $(`//XCUIElementTypeApplication[@name="PrivyID Dev"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeCell[${enterprise_number}]/XCUIElementTypeOther/XCUIElementTypeOther`);
    }
    get optionPersonal(){
        return $('id: Personal account');
    }
    

    selectDokumen(fileName) {
        return $(`//XCUIElementTypeCell[@name="${fileName}, pdf"]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeImage`);
    }
    

   

    get titleDokumen(){
        return $('XCUIElementTypeTextView');
    }

    get btnUpload(){
        return $('id:Continue');
    }

    


    async uploadPersonal () {
        await this.uploadDashboard.click();

        await this.optionEnterprise.click();
        await browser.pause(3000);
        //pilih akun
       await this.optionPersonal.click();
       await browser.pause(5000);
        await option.click();
        console.log(option);

        //pilih dokumen
        const fileName = 'kalibrator';
       
        await this.selectDokumen(fileName).click();

        //Edit title dokumen
        await this.titleDokumen.click();
        const textField = await $('XCUIElementTypeTextView');
        await textField.setValue(randomTitleDoc);

        const createdTitle = await $('XCUIElementTypeTextView').getText();
        expect(createdTitle).toBe(fileName + randomTitleDoc);
    
        await this.btnUpload.click();
        
        //validasi seal or sign
        const valDok = await $('accessibility id');
        await valDok.setValue('Replace');
        await valDok.click();
        console.log(valDok);
        
    }


    async uploadEnterprise (enterprise_number) {
        await this.uploadDashboard.click();
        await this.optionEnterprise(enterprise_number).click();
        await browser.pause(3000);
        //pilih dokumen
        const fileName = 'kalibrator';
       
        await this.selectDokumen(fileName).click();
        //Edit title dokumen
        await this.titleDokumen.click();
        const textField = await $('XCUIElementTypeTextView');
        await textField.setValue(fileName + randomTitleDoc);
        //verifikasi title dokumen
        const verifEdit = await $('XCUIElementTypeTextView');
        const value = await verifEdit.getText();
        console.log(value); // Harus sesuai dengan yang di edit
        await this.btnUpload.click();
        
        //validasi seal or sign
        const valDok = await $('accessibility id');
        await valDok.setValue('Replace');
        await valDok.click();
        console.log(valDok);
        
    }
    





}
module.exports = new uploadDasboardPage();