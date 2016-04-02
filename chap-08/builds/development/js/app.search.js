System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArtistPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Tell Angular2 we're creating a Pipe with TypeScript decorators
            ArtistPipe = (function () {
                function ArtistPipe() {
                }
                // Transform is the new "return function(value, args)" in Angular 1.x
                ArtistPipe.prototype.transform = function (value) {
                    // ES6 array destructuring
                    return "Hello  " + value;
                };
                ArtistPipe = __decorate([
                    core_1.Pipe({
                        name: 'ArtistPipe'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtistPipe);
                return ArtistPipe;
            }());
            exports_1("ArtistPipe", ArtistPipe);
        }
    }
});

//# sourceMappingURL=app.search.js.map
