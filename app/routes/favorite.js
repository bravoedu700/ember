import Route from '@ember/routing/route';

export default Route.extend({
    model(params, transition){
        return this.store.findRecord('favorite',params.id);
    }
});
