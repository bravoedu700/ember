import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('favorite');
    },
    actions:{
        doAdd(favorite){
           
            favorite.save().then(()=> this.transitionTo('favorites'));

           /*
            var newFavorite = this.store.createRecord('favorite',{
                url:'rtgfd',
                title:'efewf',
                description:'ewffwe'
            });
            newFavorite.save();
            */

        }
    }
    
});
