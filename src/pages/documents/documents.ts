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

        let modal = this.modalCtrl.create(DocumentPage, {
            documentId: id
        });
        modal.present();


        // var data = new Uint8Array(this.fs.readFileSync());

        /*
        PDF.PDFJS.workerSrc = '/build/pdf.worker.js';

        var options = {
            title: 'PDF'
        }

        this.documentsProvider.get(id)
            .then(data => {
                this.selected_document = data;

                PDF.getDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file).then(function(pdfDocument) {
                    console.log('Number of pages: ' + pdfDocument.numPages);

                    pdfDocument.getPage(1).then(function(page) {

                        var canvas: any = document.getElementById('doc-canvas');
                        console.log(canvas);

                        var scale = 1.5;
                        var viewport = page.getViewport(scale);

                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);

                    });

                });

                // this.document.viewDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file, 'application/pdf', options);
            });
            */
    }
}
