import { DefaultConfig } from './default.config';
declare var $:any,window:any,FB:any;

//Facebook Config


export const FBConfig= () => {
    var d = document;
    var s = 'script';
    var id = 'facebook-jssdk';
    window.fbAsyncInit = function() {
        FB.init({
            appId      : DefaultConfig.facebook.app_id,
            xfbml      : true,
            version    : 'v2.9'
        });
        FB.AppEvents.logPageView();
        $(window).trigger("innoway-chatbot.fbLoaded");
    };
    var js:any, fjs:any = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
};