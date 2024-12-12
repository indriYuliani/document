
const docList = require('../pageobjects/documentList.page');
const tabBar  = require('../pageobjects/documentList.page');
const selectSidebarMenu  = require('../pageobjects/documentList.page');


describe('My Login application', () => {
   
    it('Tab bar menu', async() => {
        const MenuTabBar = await tabBar.docList();
        await browser.pause(3000);
        console.log(MenuTabBar);

    })


    it('search document  inbox', async () => {
        
       const opensidebar = await docList.openSidebar();
       await browser.pause(3000);
       const searchinbox = await docList.searchInbox();
        // await selectSidebarMenu.searchInbox();
        // await browser.pause(3000);

    });


})