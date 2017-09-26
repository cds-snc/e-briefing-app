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

    public pdfDoc: any;
    public pageNum = 1;
    public numPages = 0;
    public pageRendering: boolean;
    public pageNumPending: any;
    public canvas: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public documentsProvider: DocumentsProvider, public globals: GlobalsProvider) {
        this.loadDocument(navParams.get('documentId'));
    }

    loadDocument(id) {

        var context = this;

        this.documentsProvider.get(id)
            .then(data => {
                this.selected_document = data;
                this.canvas = document.getElementById('doc-canvas');

                PDF.PDFJS.workerSrc = '/build/pdf.worker.js';
                PDF.getDocument(context.globals.dataDirectory + 'data/assets/' + context.selected_document.file).then(function(pdfDoc_) {
                    context.pdfDoc = pdfDoc_;
                    context.numPages = context.pdfDoc.numPages;
                    document.getElementById('page-count').textContent = context.pdfDoc.numPages;

                    context.renderPage(context.pageNum);
                });
            });
    }

    renderPage(num) {
        var context = this;

        this.pageRendering = true;

        this.pdfDoc.getPage(num).then(function(page) {

            var viewport = page.getViewport(1);
            context.canvas.height = viewport.height;
            context.canvas.width = viewport.width;

            var ctx = context.canvas.getContext('2d');

            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            var renderTask = page.render(renderContext);

            renderTask.promise.then(function () {
                context.pageRendering = false;
                if (typeof context.pageNumPending !== 'undefined' && context.pageNumPending !== null) {
                    context.renderPage(context.pageNumPending);
                    context.pageNumPending = null;
                }
            });

        });

        document.getElementById('page-num').textContent = '' + this.pageNum;
    }

    queueRenderPage(num) {
        if (this.pageRendering) {
            this.pageNumPending = num;
        } else {
            this.renderPage(num);
        }
    }

    onPrevPage() {
        if (this.pageNum <= 1) {
            return;
        }
        this.pageNum--;
        this.queueRenderPage(this.pageNum);
    }
    // add listeners to prev/next elements

    onNextPage() {
        console.log("Next page")
        if (this.pageNum >= this.pdfDoc.numPages) {
            return;
        }
        this.pageNum++;
        this.queueRenderPage(this.pageNum);
    }
    // add listeners to prev/next elements



    dismiss() {
        this.viewCtrl.dismiss();
    }
}
