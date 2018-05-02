import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArticlesProvider} from "@providers/articles/articles";
import {ArticlePage} from "@pages/article/article";

@Component({
    selector: 'page-articles',
    templateUrl: 'articles.html'
})
export class ArticlesPage {

    public articles: any;

    constructor(public navCtrl: NavController, private articlesProvider: ArticlesProvider) {
        this.loadArticles();
    }

    loadArticles() {
        this.articlesProvider.all()
            .then(data => {
                this.articles = data;
            });
    }

    showArticle(id) {
        this.navCtrl.push(ArticlePage, {
            article: id
        });
    }

}
