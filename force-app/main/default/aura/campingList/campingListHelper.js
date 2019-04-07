({
    createItem : function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("State: " + state);
            if (state === "SUCCESS") {
                console.log("Success: " + items);
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                console.log("Success: " + items);
            }
        });
        $A.enqueueAction(action);
    }
})