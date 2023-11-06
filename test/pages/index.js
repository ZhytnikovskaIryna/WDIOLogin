const HomePage = require("./home.page");
const LoginPage = require("./login.page");

/**
 * @param name {'home'|'loginPage'} 
 * @returns {HomePage|LoginPage}
 */
function pages(name){
    const items ={
        home: new HomePage(),
        loginPage: new LoginPage(),
    }
    return items[name];
}

module.exports = {
    HomePage,
    LoginPage,
    pages
}