import Route from '@ember/routing/route';

export default Route.extend({
    ajax: Ember.inject.service(),
    model(params, transition){

        console.log(transition.queryParams['q']);

        return this.get('ajax').request('https://images-api.nasa.gov/search?media_type=image&q=' + transition.queryParams['q']);

        //return transition.queryParams['q'];
        /*
        return {titulo:transition.queryParams['q'], lista:[
            {name:'imagen1',descripcion:'Descripcion imagen 1'},
            {name:'imagen2',descripcion:'Descripcion imagen 2'},
            {name:'imagen3',descripcion:'Descripcion imagen 3'},
            {name:'imagen4',descripcion:'Descripcion imagen 4'},
            {name:'imagen5',descripcion:'Descripcion imagen 5'}

        ]}
        */

    }
});
