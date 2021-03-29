(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <img style=\"height: 55px;\" slot=\"start\" src=\"assets/logo.png\">\n    \n     <p style=\"margin-left: 10px;\">Início</p> \n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div style=\"display: flex; flex-wrap: wrap;justify-content: space-evenly;margin-top: 20px;\">\n  <div class=\"grid-container\" *ngFor=\"let product of products\" >\n    <div>\n      <ion-card style=\"padding: 10px;width: 150px;\">\n        <div class=\"img-div\">\n          \n          <img [src]=getURL(product) >\n        </div>\n        \n        <div style=\"font-weight:bold;font-size: 20px;margin-top: 10px;border-top: 1px solid gray ;padding-top: 5px;\">\n          R$ {{product.price}}\n        </div>\n        <div style=\"margin-top: 5px;font-size: 15px;\">{{product.name}}</div>\n      </ion-card>\n        \n    </div>\n  </div>\n</div>\n  \n \n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #0056a6;\n  color: white;\n}\n\n.grid-container {\n  grid-column: 2;\n}\n\nion-card {\n  padding: 0px;\n  margin: 5px;\n  height: 210px;\n}\n\nimg {\n  max-height: 125px;\n  align-self: center;\n}\n\n.img-div {\n  text-align: center;\n  height: 130px;\n}\n\np {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogIzAwNTZhNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3JpZC1jb250YWluZXJ7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG5pb24tY2FyZHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAyMTBweDtcbn1cblxuaW1ne1xuICBtYXgtaGVpZ2h0OiAxMjVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW1nLWRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG5we1xuICBmb250LXNpemU6IDIwcHg7XG4gIFxufVxuIl19 */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);

          this.products = [{
            name: "Chaleira Elétrica",
            price: "90,00",
            photo: "1.jpg"
          }, {
            name: "Camiseta Azul",
            price: "40,00",
            photo: "2.jpeg"
          }, {
            name: "Camiseta Vermelha",
            price: "39,00",
            photo: "3.jpg"
          }, {
            name: "Lava e Seca LG",
            price: "1900,00",
            photo: "4.jpg"
          }, {
            name: "Apple iPhone 11",
            price: "4499,00",
            photo: "5.jpg"
          }, {
            name: "Violão",
            price: "499,00",
            photo: "6.png"
          }, {
            name: "Notebook Dell",
            price: "2900,00",
            photo: "7.jpg"
          }, {
            name: "Tablet Galaxy Tab",
            price: "999,00",
            photo: "8.jpg"
          }, {
            name: "Apple Watch 3",
            price: "1399,00",
            photo: "9.jpg"
          }, {
            name: "Cadeira Gamer",
            price: "1090,00",
            photo: "10.jpg"
          }];
        }

        _createClass(HomePage, [{
          key: "getURL",
          value: function getURL(product) {
            return "assets/products/" + product.photo;
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map