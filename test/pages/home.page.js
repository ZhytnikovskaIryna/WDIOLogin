const BasePage = require("./base.page");

class HomePage extends BasePage{
   constructor(){
      super("https://open.spotify.com/");
   }

   item(param){
      const selectors = {
          loginBtn:"[data-testid='login-button']",
          //userIcon:"[data-testid='user-icon']",
          avatar: "[data-testid='user-widget-avatar']",
          
      };
      return $(selectors[param]);
  }
}

module.exports = HomePage;