import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DocumentsProvider} from "@providers/documents/documents";
import { DocumentViewer } from '@ionic-native/document-viewer';
import {GlobalsProvider} from "@providers/globals/globals";

@Component({
    selector: 'page-documents',
    templateUrl: 'documents.html'
})
export class DocumentsPage {

    public documents: any;
    public selected_document: any;
    public keys: String[];

    constructor(public navCtrl: NavController, private documentsProvider: DocumentsProvider, private document: DocumentViewer, private globals: GlobalsProvider) {
        this.loadDocuments();
    }

    loadDocuments() {
        this.documentsProvider.all()
            .then(data => {
                this.documents = data;
                this.keys = Object.keys(this.documents);
            });
    }

    showDocument(id) {
        var options = {
            title: 'PDF'
        }

        this.documentsProvider.get(id)
            .then(data => {
                this.selected_document = data;
                this.document.viewDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file, 'application/pdf', options);
            });
    }
}
