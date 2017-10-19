import { Spent } from "./Spent";


export class App{
    
    private budget :number;
    private spents: Spent[];

    public $budget:JQuery<HTMLSpanElement>;
    public $add:JQuery<HTMLElement>;
    public $depenses: JQuery<HTMLElement>;
    public $titre:JQuery<HTMLElement>;
    public $form:JQuery<HTMLElement>;
    public $raison:JQuery<HTMLElement>;
    public $valeur: JQuery<HTMLElement>;
    public $description:JQuery<HTMLElement>;
    public $category:JQuery<HTMLElement>;
   

    constructor (budget: number ){
            this.budget = budget ;
            this.spents = [];           
            this.$add=$("#add");
            this.$depenses=$("#depenses");
            this.$titre=$("#titre");
            this.$budget = $("h1 span");
            this.$form = $("#form");
            this.$raison = $("#raison");
            this.$valeur = $("#valeur");
            this.$description = $("#description");
            this.$category = $("#category");

            this.init();
    }

    init(): void {
        this.$budget.html(""+this.budget);
    }

    createSpent(): void {
        let spent: Spent = new Spent(
            this.$raison.val() as string,
            this.$valeur.val() as number,
            this.$description.val() as string,
            this.$category.val() as string         
        );
        this.spents.push( spent );

        spent.display(this.$depenses);
    }

}