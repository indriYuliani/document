
const tabBar  = require('../pageobjects/documentList.page');
const txtSearch = require('../pageobjects/documentList.page')

describe('My Login application', () => {
   
    it('Tab bar menu', async() => {
        const MenuTabBar = await tabBar.docList();
        await browser.pause(3000);
        console.log(MenuTabBar);
    })

    // it('should search for a specific item', async () => {
    //     const isResultCorrect = await searchPage.verifySearchResult('retract');
    //     await docList.searchActionRequired('retract');
        
    //     expect(isResultCorrect).toBe(true);

        
    // });

    // it('search document alphabet and number ', async () => {
    //     const txtSearch = 'Alphabet and 1234567890'
    //     await browser.pause(3000);
    //     const result = await txtSearch.searchActionRequired();
    //     console.log(result);
    //     // const inputSearchText = process.SearchText;
    //     // const SearchText = 'Alphabet and 1234567890'
    //     // await searchBar.searchActionRequired(SearchText);
    // });

    it('search document action required', async () => {
        await txtSearch.docList();
        await txtSearch.searchActionRequired();
        await browser.pause(3000);


    });


})