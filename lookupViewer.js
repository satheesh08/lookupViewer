import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class LookupViewer extends LightningElement {
    @api recordId;
    @api objectApiName; 

    parentRecord;
    recordUrl;
    error;

    get fields() {
        if (this.objectApiName === 'Account') {
            return [
                'Account.Custom_Standard_Object__c',
                'Account.Custom_Standard_Object__r.First_Name__c',
                'Account.Custom_Standard_Object__r.Last_Name__c'
            ];
        } else if (this.objectApiName === 'Contact') {
            return [
                'Contact.Custom_Standard_Object__c',
                'Contact.Custom_Standard_Object__r.FirstName__c',
                'Contact.Custom_Standard_Object__r.LastName__c'
            ];
        }
        return [];
    }

    @wire(getRecord, {
        recordId: '$recordId',
        fields: '$fields'
    })
    wiredRecord({ error, data }) {
        if (data) {
            const recId = data.fields?.Custom_Standard_Object__r?.value;
            const related = data.fields?.Custom_Standard_Object__r?.value;

            const firstName = related?.fields?.First_Name__c?.value || '';
            const lastName = related?.fields?.Last_Name__c?.value || '';

            if (recId && (firstName || lastName)) {
                this.parentRecord = {
                    Id: recId,
                    Name: `${firstName} ${lastName}`.trim()
                };
                this.recordUrl = '/' + dupId;
                this.error = null;
            } else {
                this.parentRecord = null;
                this.error = 'No parent record found.';
            }
        } else if (error) {
            this.parentRecord = null;
            this.error = 'Unable to fetch parent record data.';
        }
    }
}
