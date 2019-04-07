({
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
            var campingItems = component.get("v.items");
            var anItem = JSON.parse(JSON.stringify(newItem));
            campingItems.push(anItem);
            component.set("v.items", campingItems);
            component.set("v.newItem", {'sObjectType' : 'Camping_Item__c',
                                        'Name' : '',
                                        'Quantity__c' : 0,
                                        'Price__c' : 0,
                                        'Packed__c' : false })

        }
    }
})