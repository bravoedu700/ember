import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('favorite');
    },
    actions:{
        deleteFavorite(favorite){
            this.store.deleteRecord('favorite',favorite);
            
        }
    }
});
