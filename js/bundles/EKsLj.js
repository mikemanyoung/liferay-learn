var pageComponent=webpackJsonppageComponent([7],{264:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=o(l),u=a(3),h=o(u);a(7),a(8),a(9),a(10),a(11),a(12),a(13),a(14),a(15),a(16);var c=a(265),p=o(c),d=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(s.default);h.default.register(d,p.default),t.default=d},265:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.EKsLj=void 0;var l,s=a(1),u=o(s),h=a(3),c=o(h);goog.loadModule(function(e){function t(e,t,o){var l=function(){n("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),i("h6"),n("article",null,null,"id","1"),n("h2"),s("User Management"),i("h2"),n("p"),s("We didn’t do a lot in Liferay yet, but in order to change something, we’ll need to sign in - and that’s where User Management comes in. A platform like Liferay has you covered with User Management - and what you’ve seen is only the basics. We can do a lot more, but will only show this after introducing content-related topics. Why stick with user management for too long in the beginning, when there’s still no content? Well, we don’t."),i("p"),n("p"),s("Here’s your takeaway from this chapter, together with an outlook on the later chapters - to help you paint a mental picture."),i("p"),n("aside"),n("h3"),r("span",null,null,"class","icon-16-star"),s(" Pro Tip"),i("h3"),n("p"),s("Check your own installation for all the features that you've seen in the previous video. You should be able to find all of the different places, even though the layout might differ slightly because the video has been recorded on a previous version of Liferay (DXP 7.0)."),i("p"),i("aside"),i("article"),n("article",null,null,"id","2"),n("h3"),s("Your Takeaways"),i("h3"),n("h4"),s("User Management"),i("h4"),n("ul"),n("li"),s("Users always have an entry in Liferay’s Database"),i("li"),n("li"),s("It’s possible to interface with external user management system (not yet handled), but users will always be in Liferay’s Database"),i("li"),n("li"),s("User accounts may be active (e.g. can log in) or inactive (can’t log in)"),i("li"),n("li"),s("Users have almost no permissions by default, other than maintaining their own profile"),i("li"),n("li"),s("Later we’ll even introduce mechanics to follow individual users around when they’re not signed in."),i("li"),i("ul"),n("h4"),s("Grouping Users"),i("h4"),n("p"),s("In a sufficiently large installation (let’s say, more than 10 registered users) you probably do not want to grant permissions on a user-by-user-basis. This means that we’ll need a way to talk about multiple users at once. Liferay provides two mechanisms:"),i("p"),n("h5"),s("Organization:"),i("h5"),n("ul"),n("li"),s("can be arranged in a hierarchy. The hierarchy can have multiple root organizations - e.g. is not limited to a single root"),i("li"),n("li"),s("Membership in a child-organization (in a hierarchy) automatically implies membership in the parent organization"),i("li"),n("li"),s("can “have” a site (what’s a site you ask? One of the very next chapters - if not the next - will cover this)"),i("li"),n("li"),s("typically used for mirroring some underlying structure (potentially hierarchical) in the real world - e.g. a company and its departments or locations."),i("li"),i("ul"),n("h5"),s("User Groups:"),i("h5"),n("ul"),n("li"),s("No Hierarchy"),i("li"),n("li"),s("have as many as you like to handle groups of users, wherever you’d like to handle individual users"),i("li"),n("li"),s("Can have site templates to build personal sites (a feature that will be handled in a later chapter)"),i("li"),n("li"),s("are arbitrary collections that can be done for whatever reason - they might not even have equivalent natural groups in the physical world."),i("li"),n("li"),s("often User Groups are used to import LDAP-Groups (if you interface with LDAP, which we’ll cover in a later chapter)"),i("li"),i("ul"),n("p"),s("What you might find when you explore these options…"),i("p"),n("p"),s("You’ll see that you can also create a “Location” as an Organization. This is a special type of Organizations that can’t have any more siblings - e.g. it’s the lower end of the hierarchy. You may use it if you definitely want to document that there can’t be any more siblings. Note that you can’t change the organization type later on - you’ll stay more flexible when you just use the standard type (Organization) and simply not add any child sites to it)"),i("p"),i("article"),n("article",null,null,"id","3"),n("h3"),s("Exercise"),i("h3"),n("p"),s("Think of your usecase for Liferay and make a sketch for the structure of your user base. If you have only a manageable size of (known) users, you might choose to create accounts that you’ll use throughout this course for the various responsibilities that these users have. If you have a huge amount of users, you might want to choose 3-4 example personas and create accounts for them. For the purpose of this course, you'll be the one impersonating your users, so make use of their names, email addresses and passwords."),i("p"),n("aside"),n("p"),s('If you have an installation that actually sends out mails, and you\'re looking for actual mail addresses but don\'t want to create many, you may try out this trick that some providers (e.g. gmail) support: If your email address is example@gmail.com, then example+admin@gmail.com, example+regularuser@gmail.com etc will all be delivered to your main address - you can make up anything between the "+" and "@" sign.'),i("p"),i("aside"),n("p"),s("Then think of the content that you’ll have in your portal."),i("p"),n("ul"),n("li"),s("Will it be different content, e.g. department by department? Or for individual projects?"),i("li"),n("li"),s("Will the users be signing up for areas of their interest by themselves or will their access be centrally managed?"),i("li"),n("li"),s("Will you have largely public content, visible to everybody anyways?"),i("li"),n("li"),s("Or will it be largely private content, that requires logging in"),i("li"),n("li"),s("How many people will have write access - and will they have write access to individual areas, or to all of the content on your site?"),i("li"),i("ul"),n("p"),s("Sketch them out and have them ready when we build content for the site."),i("p"),i("article"),n("input",null,null,"type","hidden","value",e.page.title),i("input"),n("input",null,null,"type","hidden","value",e.site.title),i("input")};u(a.$$assignDefaults({content:l},e),null,o)}goog.module("EKsLj.incrementaldom");var a=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),n=o.elementOpen,i=o.elementClose,r=o.elementVoid,s=(o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="EKsLj.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var p=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(u.default);c.default.register(p,l),t.EKsLj=p,t.templates=l,t.default=l}},[264]);