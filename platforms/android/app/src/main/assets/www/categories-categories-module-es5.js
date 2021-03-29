(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
    /***/
    "1n1Y":
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function n1Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categories.page.html */
      "zDdw");
      /* harmony import */


      var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categories.page.scss */
      "ArCr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage() {
          _classCallCheck(this, CategoriesPage);

          this.categories = [{
            name: "Utilidades domésticas"
          }, {
            name: "Telefonia"
          }, {
            name: "Pet"
          }, {
            name: "Papelaria"
          }, {
            name: "Móveis"
          }, {
            name: "Instrumentos Musicais"
          }, {
            name: "Informática"
          }, {
            name: "Infantil"
          }, {
            name: "Ferramentas"
          }, {
            name: "Esporte e Lazer"
          }];
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ctorParameters = function () {
        return [];
      };

      CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoriesPage);
      /***/
    },

    /***/
    "1qrh":
    /*!*********************************************************!*\
      !*** ./src/app/categories/categories-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CategoriesPageRoutingModule */

    /***/
    function qrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
        return CategoriesPageRoutingModule;
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


      var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories.page */
      "1n1Y");

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
      }];

      var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesPageRoutingModule);
      /***/
    },

    /***/
    "ArCr":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ArCr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "kMJQ":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /*! exports provided: CategoriesPageModule */

    /***/
    function kMJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories-routing.module */
      "1qrh");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categories.page */
      "1n1Y");

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
      })], CategoriesPageModule);
      /***/
    },

    /***/
    "zDdw":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zDdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-list >\n    <ion-item *ngFor=\"let category of categories\">\n      <ion-label>{{category.name}}</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=categories-categories-module-es5.js.map