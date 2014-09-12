define(function(require, exports, module){
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager   = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus"),
        AppInit = brackets.getModule("utils/AppInit");
    
    function check508() {
        var editor = EditorManager.getFocusedEditor(),
            text = editor.getSelectedText(),
            document = editor.document;
    }
    
    AppInit.appReady(function(){
        
        var execute_app = '508-checks.execute';
        CommandManager.register('Run 508 Checks', execute_app, check508);
        var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
        menu.addMenuItem(execute_app);
    });
});
