RID.start = function(){
    var mainModule = RID.getModule("Main");
    RID.main = new mainModule();
    RID.main.init(!0);
    RID.isRunning = true;
};