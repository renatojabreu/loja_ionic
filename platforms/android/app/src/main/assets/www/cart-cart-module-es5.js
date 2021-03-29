(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
    /***/
    "SNM6":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function SNM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "Xo8k":
    /*!***********************************!*\
      !*** ./src/app/cart/cart.page.ts ***!
      \***********************************/

    /*! exports provided: CartPage */

    /***/
    function Xo8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart.page.html */
      "ehlK");
      /* harmony import */


      var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.page.scss */
      "SNM6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CartPage = /*#__PURE__*/function () {
        function CartPage() {
          _classCallCheck(this, CartPage);
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CartPage);
      /***/
    },

    /***/
    "cP+M":
    /*!*********************************************!*\
      !*** ./src/app/cart/cart-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function cPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "Xo8k");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "ehlK":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function ehlK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"text-align: center;\">\n  <div class=\"container\">\n    <img src=\"assets/cart.jpg\" style=\"width: 40%;\"/>\n\n    <div style=\"margin-top: 30px;font-size: 20px;\">\n      Seu carrinho está vazio\n    </div>\n  </div>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "v35Q":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.module.ts ***!
      \*************************************/

    /*! exports provided: CartPageModule */

    /***/
    function v35Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "cP+M");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "Xo8k");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cart-cart-module-es5.js.map