var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("JsonSerializable", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Model", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Model;
    return {
        setters: [],
        execute: function () {
            Model = (function () {
                function Model() {
                }
                return Model;
            }());
            exports_2("Model", Model);
        }
    };
});
System.register("User", ["Model"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Model_1, User, user, user;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }
        ],
        execute: function () {
            User = (function (_super) {
                __extends(User, _super);
                function User(name, id, password) {
                    var _this = _super.call(this) || this;
                    _this.name = name;
                    _this.id = id;
                    _this.password = password;
                    return _this;
                }
                User.prototype.jsonSerialize = function () {
                    return {};
                };
                User.prototype.getModel = function () {
                    throw new Error("Method not implemented.");
                };
                return User;
            }(Model_1.Model));
            exports_3("User", User);
            user = new User("test", 1, "wwww");
            console.log(user);
        }
    };
});
System.register("main", ["User"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var User_1, user, user;
    return {
        setters: [
            function (User_1_1) {
                User_1 = User_1_1;
            }
        ],
        execute: function () {
            user = new User_1.User("test", 1, "wwww");
            console.log(user);
        }
    };
});
//# sourceMappingURL=main.js.map