const BasePage = require("./base.page");

class LoginPage extends BasePage {
   constructor(){
      super("https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F");
   }

   get inputUsername () {
      return $('#login-username');
  }

  get inputPassword () {
      return $('#login-password');
  }

  get btnLogin () {
      return $('#login-button');
  }
  get userNameError () {
    return $('#username-error');
}
get passwordError () {
    return $('#password-error');
}

get errorBanner(){
    return $("[data-encore-id='banner']");
}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

module.exports = LoginPage;
