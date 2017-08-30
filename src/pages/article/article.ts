import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticlesProvider} from "../../providers/articles/articles";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private articlesProvider: ArticlesProvider) {
    this.loadArticle();
  }

  loadArticle() {
    this.articlesProvider.get(this.navParams.get('article'))
        .then(data => {
          this.article = data;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
