/**
 * Generate files specific to templates/templates
 */

'use strict';

var viewFiles = function viewFiles() {
    var viewRoot = this.useServer ? 'server/' : 'client/';

    if (this.htmlOption === 'jade') {
        this.template('client/templates/jade/index.jade', viewRoot + 'templates/index.jade');
        this.template('client/templates/jade/layouts/base.jade', viewRoot + 'templates/layouts/base.jade');
        if (this.useServer) {
            this.template('client/templates/jade/errors/error.jade', viewRoot + 'templates/error.jade');
        }
        if (this.useAuth) {
            // Account
            this.template('client/templates/jade/account/forgot.jade', viewRoot + 'templates/account/forgot.jade');
            this.template('client/templates/jade/account/login.jade', viewRoot + 'templates/account/login.jade');
            this.template('client/templates/jade/account/reset.jade', viewRoot + 'templates/account/reset.jade');
            this.template('client/templates/jade/account/signup.jade', viewRoot + 'templates/account/signup.jade');
            this.template('client/templates/jade/account/settings.jade', viewRoot + 'templates/account/settings.jade');

            // Partials
            this.template('client/templates/jade/partials/navbar.jade', viewRoot + 'templates/partials/navbar.jade');
            this.template('client/templates/jade/partials/messages.jade', viewRoot + 'templates/partials/messages.jade');

            // Layouts
            this.template('client/templates/jade/layouts/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
        }
    }
    else if (this.htmlOption === 'swig') {
        this.template('client/templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
        if (this.useServer) {
            this.template('client/templates/swig/errors/error.swig', viewRoot + 'templates/error.swig');
        }
        if (this.useAuth) {
            // Account
            this.template('client/templates/swig/account/forgot.swig', viewRoot + 'templates/account/forgot.swig');
            this.template('client/templates/swig/account/login.swig', viewRoot + 'templates/account/login.swig');
            this.template('client/templates/swig/account/reset.swig', viewRoot + 'templates/account/reset.swig');
            this.template('client/templates/swig/account/signup.swig', viewRoot + 'templates/account/signup.swig');
            this.template('client/templates/swig/account/settings.swig', viewRoot + 'templates/account/settings.swig');

            // Partials
            this.template('client/templates/swig/partials/navbar.swig', viewRoot + 'templates/partials/navbar.swig');
            this.template('client/templates/swig/partials/messages.swig', viewRoot + 'templates/partials/messages.swig');

            // Layouts
            this.template('client/templates/swig/layouts/one-column.swig', viewRoot + 'templates/layouts/one-column.swig');
        }
    }

    if (this.singlePageApplication) {
        this.template('client/templates/html/index.html', 'client/index.html');
        if (this.useServer) {
            this.template('client/templates/html/errors/error.html', 'server/templates/error.html');
        }
    }
};

module.exports = viewFiles;
