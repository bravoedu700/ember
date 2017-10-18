import Route from '@ember/routing/route';

export default Route.extend({
    ajax: Ember.inject.service(),
    bookmarks: Ember.inject.service(),
    model(params, transition){

        return this.get('ajax').request('https://images-api.nasa.gov/search?media_type=image&q=' + transition.queryParams['q']);
    },
    actions:{
        saveImagen(href){
            //console.log(href);
            this.get('bookmarks').add(href);
        }

    }
});
