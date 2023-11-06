const{pages}=require('../pages');


describe("Tests for UC1: verify correct credentials",()=> {
    beforeEach(async ()=> {
    await pages('home').open();
    });

    it("Verify profile name Test123 after login with correct credentials",async()=>{
        await pages('home').item('loginBtn').click();
        await pages('loginPage').login('iryna.zhytnikovska@gmail.com','password!@#');  
        await expect (await pages('home').item('avatar')).toHaveAttribute('title', 'Test123')
    })
})