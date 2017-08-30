import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DocumentsProvider} from "../../providers/documents/documents";

@Component({
    selector: 'page-documents',
    templateUrl: 'documents.html',
    providers: [DocumentsProvider]
})
export class DocumentsPage {

    public documents: any;
    public keys: String[];

    constructor(public navCtrl: NavController, private documentsProvider: DocumentsProvider) {
        this.loadDocuments();
    }

    loadDocuments() {
        this.documentsProvider.load()
            .then(data => {
                this.documents = data;
                this.keys = Object.keys(this.documents);
            });
    }

    showDocument(id) {
        console.log(id);
    }
}
