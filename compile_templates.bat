@echo off
call handlebars templates\app.handlebars -f src\template\app.tpl.js
call handlebars templates\components.handlebars -f src\template\components.tpl.js
call handlebars templates\confirmBox.handlebars -f src\template\confirmBox.tpl.js
call handlebars templates\game.handlebars -f src\template\game.tpl.js
call handlebars templates\help.handlebars -f src\template\help.tpl.js
call handlebars templates\info.handlebars -f src\template\info.tpl.js
call handlebars templates\overview.handlebars -f src\template\overview.tpl.js
call handlebars templates\reactors.handlebars -f src\template\reactors.tpl.js
call handlebars templates\research.handlebars -f src\template\research.tpl.js
call handlebars templates\settings.handlebars -f src\template\settings.tpl.js
call handlebars templates\upgrades.handlebars -f src\template\upgrades.tpl.js
