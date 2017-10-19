import { Category } from './Category';
import { App } from './App';

var app = new App(2500);

app.$add.click(function(){
    app.$form.fadeIn();
});

app.$form.submit(function(event){

    event.preventDefault();
    app.createSpent();

})






