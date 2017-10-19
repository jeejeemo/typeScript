import { Model } from './Model';
import { JsonSerializable } from './JsonSerializable';






export class User extends Model implements JsonSerializable {
    jsonSerialize(): {} {
        return {};
    }
    getModel(): string {
        throw new Error("Method not implemented.");
    }

    public name: string;

    private id: number;

    protected password: string;

    constructor(name: string, id: number, password: string){
        super();

        this.name = name;
        this.id = id;
        this.password = password;
    }

    // getId(): number {

    // }

}
//var user: User = new User("test", 1,"wwww");
/*ou*/
var user: User;
var user = new User("test", 1,"wwww");
console.log(user);