//Import Config
import { DefaultConfig } from './configs/default.config';
import { URL } from './utils/helper';
import { Page} from './page';

declare var $:any,FB:any;

export class Story {
    _page: Page
    _token:string;
    _cards:[any];
    _keys:[any];
    _story:any;

    public static EventTypes = {
        CARDS_CHANGE: "innoway_chatbot.story.card_change",
        KEYS_CHANGE: "innoway_chatbot.story.key_change",
    }

    constructor(page:Page,story:any){
        this._page = page;
        this._token = page._token;
        this._story = story;
    }

    //Author: Dương Jerry
    //Description: Get story cards
    public getCards(callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/cards",null,{story_id:self._story._id}),
            "method": "GET",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "processData": false
        }

        $.ajax(settings).done((response:any) => {
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Add Card
    public addCard(card:any,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/cards",null,{
                        story_id:self._story._id
                    }),
            "method": "POST",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify(card)
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.CARDS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Remove Card
    public removeCard(card_id:string,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/cards/{{card_id}}",null,{
                        story_id:self._story._id, card_id: card_id
                    }),
            "method": "DELETE",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            }
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.CARDS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Update Card
    public updateCard(card:any,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/cards/{{card_id}}",null,{
                        story_id:self._story._id, card_id: card._id
                    }),
            "method": "PUT",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "data": JSON.stringify(card)
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.CARDS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Get Story Keys
    public getKeys(callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/keys",null,{story_id:self._story._id}),
            "method": "GET",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "processData": false
        }

        $.ajax(settings).done((response:any) => {
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Add Key
    public addKey(key:string,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/keys",null,{
                        story_id:self._story._id
                    }),
            "method": "POST",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify({ key: key})
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.KEYS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Remove Key
    public removeKey(key_id:string,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/keys/{{key_id}}",null,{
                        story_id:self._story._id, key_id: key_id
                    }),
            "method": "DELETE",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            }
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.KEYS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Update Key
    public updateKey(key:any,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/keys/{{key_id}}",null,{
                        story_id:self._story._id, key_id: key._id
                    }),
            "method": "PUT",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "data": JSON.stringify(key)
        }

        $.ajax(settings).done((response:any) => {
            $(self).trigger(Story.EventTypes.KEYS_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }
    
    //Author: Dương Jerry
    //Description: Remove Story
    public destroy(callback:any =()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}",null,{story_id:self._story._id}),
            "method": "DELETE",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            }
        }
        $.ajax(settings).done((response:any) => {
            $(self._page).trigger(Page.EventTypes.STORY_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Update Story
    public update(title:string,callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}",null,{story_id:self._story._id}),
            "method": "PUT",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            },
            "data": JSON.stringify({ title: title})
        }
        $.ajax(settings).done((response:any) => {
            $(self._page).trigger(Page.EventTypes.STORY_CHANGE,response);
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }

    //Author: Dương Jerry
    //Description: Add Key
    public setAsGetStarted(callback:any = ()=>{}){
        var self = this;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": URL.apiUrl("api/page/stories/{{story_id}}/setStarted",null,{story_id:self._story._id}),
            "method": "POST",
            "headers": {
                "access_token": self._token,
                "content-type": "application/json",
            }
        }
        $.ajax(settings).done((response:any) => {
            callback(null,response);
        }).fail((request:any,err:any,status:any) => {
            callback(err,status);
        });
    }
}