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
  this.route('image',{ path: '/image/:nasa_id'});
  this.route('favorite',{ path: 'favorite/:id'});
});

export default Router;
