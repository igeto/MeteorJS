import { AccountsTemplates } from "meteor/accounts-base";

AccountsTemplates.configure({
    defaultTemplate: 'Auth_page',
    defaultLayout: 'App_body',
    defaultContentRegion: 'main',
    defaultLayoutRegions: {}
  });