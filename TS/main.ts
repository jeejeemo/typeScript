
import { App } from './App';
import { Category } from './Category';


var app = new App(2000);

app.$add.click(function(){
    app.$form.fadeIn();
});

app.$form.submit(function(event){

    event.preventDefault();
    app.createSpent();
    app.clearForm();
    

});









