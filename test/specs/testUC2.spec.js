const{pages}=require('../pages');


describe("Tests for UC2: verify wrong credentials",()=> {
    beforeEach(async ()=> {
    await pages('home').open();
    });
   
    it("Test error message when Login with incorrect credentials",async()=>{
        await pages('home').item('loginBtn').click();
        await pages('loginPage').login('name','pwd');  
        await expect (await pages('loginPage').errorBanner).toHaveText('Incorrect username or password.');
    })

})