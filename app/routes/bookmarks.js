import Route from '@ember/routing/route';

export default Route.extend({
    bookmarks: Ember.inject.service(),
    model(params, transition){  
        //console.log(transition.queryParams['q']);
        console.log(this.get('bookmarks').getItems() );
        return this.get('bookmarks').getItems(); 
    },
    actions:{
        deleteImagen(href){
            this.get('bookmarks').remove(href);
        }
    }
});
