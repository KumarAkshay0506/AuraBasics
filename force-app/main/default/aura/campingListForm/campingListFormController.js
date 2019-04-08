({
    clickCreateItem: function(component, event, helper) {
            var addItm = event.getParam("v.newItem");
            helper.createItem(component, addItm);
        }
    
})