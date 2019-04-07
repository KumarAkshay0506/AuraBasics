({
    //Load Expenses from Salesforce
    doInit : function(component, event, helper) {
        //create the Action
        var action = component.get("c.getItems");
        //add a callback fron when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
                console.log("ReturnValue: " + response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        //Send action off to be executed
        $A.enqueueAction(action);
    },
    
    clickCreateItem : function(component, event, helper) {
        var validItem = component.find('campingForm').reduce(function (validSoFar, inputCmp) {
            //displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validItem){
            //create the camping item
            var newItem = component.get("v.newItem");
            console.log("Create Camping Item: " + JSON.stringify(newItem));  //todo remove after testing
            helper.createItem(component, newItem);
        }
    }
})