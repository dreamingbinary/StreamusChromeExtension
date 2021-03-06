﻿define(function (require) {
    'use strict';

    var ListItemButtonView = require('foreground/view/listItemButton/listItemButtonView');
    var DeleteListItemButtonTemplate = require('text!template/listItemButton/deleteListItemButton.html');
    var DeleteIconTemplate = require('text!template/icon/deleteIcon_18.svg');

    var DeleteSongButtonView = ListItemButtonView.extend({
        template: _.template(DeleteListItemButtonTemplate),
        templateHelpers: {
            deleteIcon: _.template(DeleteIconTemplate)()
        },
        
        attributes: {
            title: chrome.i18n.getMessage('delete')
        },
        
        initialize: function() {
            ListItemButtonView.prototype.initialize.apply(this, arguments);
        },
        
        doOnClickAction: function () {
            this.model.destroy();
        }
    });

    return DeleteSongButtonView;
});