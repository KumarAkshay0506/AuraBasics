({
    addItem : function(component, item, callback) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("State: " + state);
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);  
    }
})