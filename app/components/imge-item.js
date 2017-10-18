import Component from '@ember/component';

export default Component.extend({
    hide:true,
    actions:{
        hideImg(){
            this.toggleProperty('hide');
            
        }
    }

});
