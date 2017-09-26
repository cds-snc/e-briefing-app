import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {DocumentsProvider} from "../../providers/documents/documents";
import {DocumentPage} from "../document/document";
// import { DocumentViewer } from '@ionic-native/document-viewer';
// import {GlobalsProvider} from "../../providers/globals/globals";

@Component({
    selector: 'page-documents',
    templateUrl: 'documents.html'
})
export class DocumentsPage {

    public documents: any;
    public selected_document: any;
    public keys: String[];

    constructor(public navCtrl: NavController, private documentsProvider: DocumentsProvider, public modalCtrl: ModalController) {
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
        this.navCtrl.push(DocumentPage, {
            documentId: id
        });
    }
}
