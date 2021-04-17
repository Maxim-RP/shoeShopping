public with sharing class StockController {
    @AuraEnabled(cacheable=true)
    public static List<Stock__c> getStockList(List<String> par, List<String> parr) {


        return [
            SELECT Name, Brand__c, Category__c, Color__c, Image__c, id__c, 	Model__c, Price__c, Size__c 
            FROM Stock__c
            WHERE Color__c IN :par AND Category__c IN :parr
            WITH SECURITY_ENFORCED 
            LIMIT 10];
    }
}
