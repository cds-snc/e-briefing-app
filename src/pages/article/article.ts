import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ArticlesProvider} from "@providers/articles/articles";

@Component({
    selector: 'page-article',
    templateUrl: 'article.html',
})
export class ArticlePage {

    public article: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private articlesProvider: ArticlesProvider) {
        this.loadArticle();
    }

    loadArticle() {
        this.articlesProvider.get(this.navParams.get('article'))
            .then(data => {
                this.article = data;
            });
    }
}
