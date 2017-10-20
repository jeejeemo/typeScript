import { Spent } from "./Spent";
import { Category } from './Category';


export class App{    display: any;

    
    private budget :number;
    private spents: Spent[];

    public $budget:JQuery<HTMLSpanElement>;
    public $add:JQuery<HTMLElement>;
    public $depenses: JQuery<HTMLElement>;
    public $form:JQuery<HTMLElement>;
    public $raison:JQuery<HTMLElement>;
    public $valeur: JQuery<HTMLElement>;
    public $description:JQuery<HTMLElement>;
    public $category:JQuery<HTMLElement>;
   

    constructor (budget: number){
            this.budget = budget ;
            this.spents = [];
             
            this.$budget = $("h1 span");
            this.$add=$("#add");
            this.$depenses=$("#depenses");
            this.$form = $("form");
            this.$raison = $("#raison");
            this.$valeur = $("#valeur");
            this.$description = $("#description");
            this.$category = $("#category");

            this.init();
    }

    init(): void {
        this.$budget.html(""+this.budget);
        for (let item in Category  ){
            let optionHtml: String = "<option value='"+ item +"'>"+item+ "</option>"
            const option:JQuery = $( optionHtml );
            this.$category.append( option );
        }
    

    }

    createSpent(): void {
        let spent: Spent = new Spent(
            this.$raison.val() as string,
            this.$valeur.val() as number,
            this.$description.val() as string,
            this.$category.val() as string         
        );
        this.budget -= spent.getValeur();
        this.$budget.html(""+this.budget);
        
        this.spents.push( spent );
        spent.display(this.$depenses);
    }

    clearForm(): void{
        this.$raison.val("");
        this.$valeur.val("");
        this.$description.val("")
    }
    
    
}