import Route from '@ember/routing/route';
export default Route.extend({
    ver:true,
    actions:{
        doSearch(searchTerm){
            //console.log(searchTerm);
            this.transitionTo('images',{queryParams:{ q: searchTerm}});
        },
        doHide(){
            this.toggleProperty('ver');
            console.log(this.get('ver'));
        }
    }
});
