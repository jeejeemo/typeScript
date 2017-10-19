// import{ Test} from "./Test";
System.register("App", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters: [],
        execute: function () {// import{ Test} from "./Test";
            App = class App {
                constructor(budget) {
                    this.budget = budget;
                    this.spents = [];
                    this.$add = $("#add");
                    this.$depenses = $("#depenses");
                    this.$titre = $("#titre");
                    this.$budget = $("h1 span");
                    this.$form = $("#form");
                    this.$raison = $("#raison");
                    this.$valeur = $("#valeur");
                    this.$description = $("#description");
                    this.$category = $("#category");
                    this.init();
                }
                init() {
                    this.$budget.html("" + this.budget);
                }
                createSpent() {
                    let spent = new Spent(this.$raison.val(), this.$valeur.val(), this.$description.val(), this.$category.val());
                    this.createSpent.push(spent);
                    spent.display(this.$depenses);
                }
            };
            exports_1("App", App);
        }
    };
});
System.register("Category", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Category;
    return {
        setters: [],
        execute: function () {
            (function (Category) {
                Category["Nourriture"] = "nourriture";
                Category["Sortie"] = "sortie";
                Category["Courses"] = "courses";
                Category["Sport"] = "sport";
            })(Category || (Category = {}));
            exports_2("Category", Category);
        }
    };
});
System.register("JsonSerializable", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("main", ["App"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var App_1, app;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            app = new App_1.App(2500);
            app.$add.click(function () {
                app.$form.fadeIn();
            });
            app.$form.submit(function (event) {
                event.preventDefault();
                app.createSpent();
            });
        }
    };
});
class Spent {
    constructor($raison, $valeur, $description, $category) {
        this.raison = $raison;
        this.valeur = $valeur;
        this.description = $description;
        this.category = $category;
    }
    display() {
        var div = "<div class='spent'>";
        div += "<h3>" + this.raison + "</h3>";
        div += "<h4>" + this.valeur + "</h4>";
        div += "</div>";
        this.$dom = $(div);
        $parent.append(this.$dom);
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0FwcC50cyIsIlRTL0NhdGVnb3J5LnRzIiwiVFMvSnNvblNlcmlhbGl6YWJsZS50cyIsIlRTL21haW4udHMiLCJUUy9TcGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7Ozs7Ozs7OEJBQS9CLCtCQUErQjtZQUcvQixNQUFBO2dCQWdCSSxZQUFhLE1BQWM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFFO29CQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELElBQUk7b0JBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLElBQUksS0FBSyxHQUFVLElBQUksS0FBSyxDQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBWSxFQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBWSxFQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBWSxFQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBWSxDQUNqQyxDQUFDO29CQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO29CQUUvQixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsQ0FBQzthQUVKLENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7OztZQ25ERixXQUFZLFFBQVE7Z0JBQ2hCLHFDQUF5QixDQUFBO2dCQUN6Qiw2QkFBaUIsQ0FBQTtnQkFDakIsK0JBQW1CLENBQUE7Z0JBQ25CLDJCQUFlLENBQUE7WUFHbkIsQ0FBQyxFQVBXLFFBQVEsS0FBUixRQUFRLFFBT25COztRQUFBLENBQUM7Ozs7Ozs7OztRQ0hGLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDREcsR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNYLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLEtBQUs7Z0JBRTNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXRCLENBQUMsQ0FBQyxDQUFBO1FBT0YsQ0FBQzs7O0FDckJEO0lBVUMsWUFBWSxPQUFlLEVBQUUsT0FBZSxFQUFFLFlBQW9CLEVBQUUsU0FBaUI7UUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVFLE9BQU87UUFDSCxJQUFJLEdBQUcsR0FBVyxxQkFBcUIsQ0FBQztRQUNwQyxHQUFHLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDO1FBQ2xDLEdBQUcsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFDbEMsR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydHsgVGVzdH0gZnJvbSBcIi4vVGVzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgYnVkZ2V0IDpudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZW50czogU3BlbnRbXTtcclxuXHJcbiAgICBwdWJsaWMgJGJ1ZGdldDpKUXVlcnk8SFRNTFNwYW5FbGVtZW50PjtcclxuICAgIHB1YmxpYyAkYWRkOkpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJGRlcGVuc2VzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICR0aXRyZTpKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICRmb3JtOkpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJHJhaXNvbjpKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljICR2YWxldXI6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJGRlc2NyaXB0aW9uOkpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgJGNhdGVnb3J5OkpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChidWRnZXQ6IG51bWJlciApe1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldCA9IGJ1ZGdldCA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlbnRzID0gW107ICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy4kYWRkPSQoXCIjYWRkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLiRkZXBlbnNlcz0kKFwiI2RlcGVuc2VzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLiR0aXRyZT0kKFwiI3RpdHJlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLiRidWRnZXQgPSAkKFwiaDEgc3BhblwiKTtcclxuICAgICAgICAgICAgdGhpcy4kZm9ybSA9ICQoXCIjZm9ybVwiKTtcclxuICAgICAgICAgICAgdGhpcy4kcmFpc29uID0gJChcIiNyYWlzb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuJHZhbGV1ciA9ICQoXCIjdmFsZXVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLiRkZXNjcmlwdGlvbiA9ICQoXCIjZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhdGVnb3J5ID0gJChcIiNjYXRlZ29yeVwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kYnVkZ2V0Lmh0bWwoXCJcIit0aGlzLmJ1ZGdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU3BlbnQoKTogdm9pZHtcclxuICAgICAgICBsZXQgc3BlbnQ6IFNwZW50ID0gbmV3IFNwZW50KFxyXG4gICAgICAgICAgICB0aGlzLiRyYWlzb24udmFsKCkgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICB0aGlzLiR2YWxldXIudmFsKCkgYXMgbnVtYmVyLFxyXG4gICAgICAgICAgICB0aGlzLiRkZXNjcmlwdGlvbi52YWwoKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRoaXMuJGNhdGVnb3J5LnZhbCgpIGFzIHN0cmluZyAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTcGVudC5wdXNoKCBzcGVudCApO1xyXG5cclxuICAgICAgICBzcGVudC5kaXNwbGF5KHRoaXMuJGRlcGVuc2VzKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZW51bSBDYXRlZ29yeSB7XHJcbiAgICBOb3Vycml0dXJlID0gXCJub3Vycml0dXJlXCIsXHJcbiAgICBTb3J0aWUgPSBcInNvcnRpZVwiLFxyXG4gICAgQ291cnNlcyA9IFwiY291cnNlc1wiLFxyXG4gICAgU3BvcnQgPSBcInNwb3J0XCJcclxuXHJcblxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBKc29uU2VyaWFsaXphYmxlIHtcclxuICAgIFxyXG4gICAganNvblNlcmlhbGl6ZSgpOiB7fTtcclxufVxyXG4iLCJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vQ2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcblxyXG52YXIgYXBwID0gbmV3IEFwcCgyNTAwKTtcclxuXHJcbmFwcC4kYWRkLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuJGZvcm0uZmFkZUluKCk7XHJcbn0pO1xyXG5cclxuYXBwLiRmb3JtLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFwcC5jcmVhdGVTcGVudCgpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY2xhc3MgU3BlbnR7XHJcblxyXG4gICAgcHJpdmF0ZSByYWlzb246IHN0cmluZztcclxuICAgIHByaXZhdGUgdmFsZXVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljICRkb206SlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCRyYWlzb246IHN0cmluZywgJHZhbGV1cjogbnVtYmVyLCAkZGVzY3JpcHRpb246IHN0cmluZywgJGNhdGVnb3J5OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucmFpc29uID0gJHJhaXNvbjtcclxuXHRcdHRoaXMudmFsZXVyID0gJHZhbGV1cjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSAkZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmNhdGVnb3J5ID0gJGNhdGVnb3J5O1xyXG5cdH1cclxuICAgIFxyXG4gICAgZGlzcGxheSgpOnZvaWQge1xyXG4gICAgICAgIHZhciBkaXY6IHN0cmluZyA9IFwiPGRpdiBjbGFzcz0nc3BlbnQnPlwiO1xyXG4gICAgICAgICAgICBkaXYgKz0gXCI8aDM+XCIrdGhpcy5yYWlzb24rXCI8L2gzPlwiO1xyXG4gICAgICAgICAgICBkaXYgKz0gXCI8aDQ+XCIrdGhpcy52YWxldXIrXCI8L2g0PlwiO1xyXG4gICAgICAgICAgICBkaXYgKz0gXCI8L2Rpdj5cIjtcclxuICAgICAgICB0aGlzLiRkb20gPSAkKGRpdik7XHJcblxyXG4gICAgICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGRvbSk7XHJcbiAgICB9XHJcbn0iXX0=
