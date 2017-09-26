import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {DocumentsProvider} from "../../providers/documents/documents";
import {GlobalsProvider} from "../../providers/globals/globals";
import PDF from 'pdfjs-dist';

/**
 * Generated class for the DocumentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-document',
    templateUrl: 'document.html',
})
export class DocumentPage {

    public selected_document: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public documentsProvider: DocumentsProvider, public globals: GlobalsProvider) {
        this.loadDocument(navParams.get('documentId'));
    }

    loadDocument(id) {
        this.documentsProvider.get(id)
            .then(data => {
                this.selected_document = data;

                PDF.PDFJS.workerSrc = '/build/pdf.worker.js';
                PDF.getDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file).then(function(pdfDocument) {
                    
                    pdfDocument.getPage(1).then(function(page) {

                        var viewport = page.getViewport(1);
                        var canvas: any = document.getElementById('doc-canvas');

                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        var context = canvas.getContext('2d');
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);

                    });

                });
            });
    }

    nextPage() {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
