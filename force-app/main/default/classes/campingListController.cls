public with sharing class campingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        //Check to make sure that all fields are updateable to this user
        String[] fieldsToCheck = new String[] {
            'Id', 'Name', 'Price__c', 'Quantity__c', 'Packed__c'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens = 
            Schema.SObjectType.Camping_Item__c.fields.getMap();

        for(String field : fieldsToCheck) {
            if( !fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }    
        } 
        return [SELECT Id, 
                       Name,
                       Price__c,
                       Quantity__c,
                       Packed__c,
                       CreatedDate
                FROM Camping_Item__c];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item){
        upsert item;
        return item;
    }
}
