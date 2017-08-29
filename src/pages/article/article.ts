import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticleProvider} from "../../providers/article/article";

/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  public article: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private articleProvider: ArticleProvider) {
    this.loadArticle();
  }

  loadArticle() {
    this.articleProvider.load(this.navParams.get('article'))
        .then(data => {
          this.article = data;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
