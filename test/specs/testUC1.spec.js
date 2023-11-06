const{pages}=require('../pages');


describe("Tests for UC1: verify empty credentials",()=> {
    beforeEach(async ()=> {
    await pages('home').open();
    });

    it("Verify correct error message for User Name when the field was populated and after cleared",async()=>{
        await pages('home').item('loginBtn').click();
        await pages('loginPage').inputUsername.setValue('a');  
        await browser.keys('Backspace');
        await expect (await pages('loginPage').userNameError).toHaveText('Please enter your Spotify username or email address.');
    })

        
    it("Verify correct error message for Password when the field was populated and after cleared",async()=>{
        await pages('home').item('loginBtn').click();  
        await browser.keys('Backspace');
        await pages('loginPage').inputPassword.setValue('a');
        await browser.keys('Backspace');
        await expect (await pages('loginPage').passwordError).toHaveText('Please enter your password.');
    })
})