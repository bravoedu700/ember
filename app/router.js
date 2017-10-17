import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search');
  this.route('images');
  this.route('favorites', function() {
    this.route('new');
  });
  this.route('bookmarks');
});

export default Router;
