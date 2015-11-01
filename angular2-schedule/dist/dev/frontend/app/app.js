var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../components/home/home');
var about_1 = require('../components/about/about');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: "\n      <div class=\"layout-transparent mdl-layout mdl-js-layout\">\n          <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n              <div class=\"mdl-layout__header-row\">\n                  <span class=\"mdl-layout-title\">Menu</span>\n                  <div class=\"mdl-layout-spacer\"></div>\n              </div>\n          </header>\n          <div class=\"mdl-layout__drawer\">\n              <span class=\"mdl-layout-title\">Menu</span>\n              <nav class=\"mdl-navigation\">\n                  <a class=\"mdl-navigation__link\" [router-link]=\"['/Home']\">Home</a>\n                  <a class=\"mdl-navigation__link\" [router-link]=\"['/About']\">About</a>\n              </nav>\n          </div>\n           <router-outlet></router-outlet>\n      </div>\n    ",
            styles: ["\n      .layout-transparent .mdl-layout__header,\n      .layout-transparent .mdl-layout__drawer-button {\n          background-color: #045FB4;\n          color: #FFF;\n      }\n    "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, as: 'Home' },
            { path: '/about', component: about_1.About, as: 'About' },
            { path: '/', redirectTo: '/home' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUEyQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRS9ELHVCQUdPLGlCQUFpQixDQUFDLENBQUE7QUFFekIscUJBQW1CLHlCQUF5QixDQUFDLENBQUE7QUFDN0Msc0JBQW9CLDJCQUEyQixDQUFDLENBQUE7QUFFaEQ7SUFBQUE7SUF1Q0FDLENBQUNBO0lBdkNERDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsUUFBUUEsRUFBRUEsd3lCQWlCVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsdUxBTVJBLENBQUNBO1lBQ0ZBLGFBQWFBLEVBQUVBLDRCQUFpQkEsQ0FBQ0EsSUFBSUE7WUFDckNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDbENBLENBQUNBO1FBRURBLG9CQUFXQSxDQUFDQTtZQUNUQSxFQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUM1Q0EsRUFBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBQ0E7WUFDL0NBLEVBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLE9BQU9BLEVBQUNBO1NBQ25DQSxDQUFDQTs7WUFJREE7SUFBREEsVUFBQ0E7QUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7QUFGWSxXQUFHLE1BRWYsQ0FBQSIsImZpbGUiOiJmcm9udGVuZC9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7XG4gICAgUm91dGVDb25maWcsXG4gICAgUk9VVEVSX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0fSBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXRyYW5zcGFyZW50IG1kbC1sYXlvdXQgbWRsLWpzLWxheW91dFwiPlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyLS10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9faGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+TWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LXNwYWNlclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9fZHJhd2VyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dC10aXRsZVwiPk1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJtZGwtbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXItbGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiIFtyb3V0ZXItbGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgIC5sYXlvdXQtdHJhbnNwYXJlbnQgLm1kbC1sYXlvdXRfX2hlYWRlcixcbiAgICAgIC5sYXlvdXQtdHJhbnNwYXJlbnQgLm1kbC1sYXlvdXRfX2RyYXdlci1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDVGQjQ7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICB9XG4gICAgYF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnSG9tZSd9LFxuICAgIHtwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgYXM6ICdBYm91dCd9LFxuICAgIHtwYXRoOiAnLycsIHJlZGlyZWN0VG86ICcvaG9tZSd9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9