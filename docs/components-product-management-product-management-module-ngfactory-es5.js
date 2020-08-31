function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-product-management-product-management-module-ngfactory"], {
  /***/
  "./node_modules/@angular/common/fesm2015/http.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/http.js ***!
    \*******************************************************/

  /*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */

  /***/
  function node_modulesAngularCommonFesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license Angular v9.1.11
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/backend.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {
      _classCallCheck(this, HttpHandler);
    };

    if (false) {}
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {
      _classCallCheck(this, HttpBackend);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/headers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @record
     */


    function Update() {}

    if (false) {}
    /**
     * Represents the header configuration options for an HTTP request.
     * Instances are immutable. Modifying methods return a cloned
     * instance with the change. The original object is never changed.
     *
     * \@publicApi
     */


    var HttpHeaders = /*#__PURE__*/function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this = this;

        _classCallCheck(this, HttpHeaders);

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this.maybeSetNormalizedName(name, key);

                if (_this.headers.has(key)) {
                  /** @type {?} */
                  _this.headers.get(key).push(value);
                } else {
                  _this.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this.headers.set(key, values);

                _this.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} True if the header exists, false otherwise.
       */


      _createClass(HttpHeaders, [{
        key: "has",
        value: function has(name) {
          this.init();
          return this.headers.has(name.toLowerCase());
        }
        /**
         * Retrieves the first value of a given header.
         *
         * @param {?} name The header name.
         *
         * @return {?} The value string if the header exists, null otherwise
         */

      }, {
        key: "get",
        value: function get(name) {
          this.init();
          /** @type {?} */

          var values = this.headers.get(name.toLowerCase());
          return values && values.length > 0 ? values[0] : null;
        }
        /**
         * Retrieves the names of the headers.
         *
         * @return {?} A list of header names.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        /**
         * Retrieves a list of values for a given header.
         *
         * @param {?} name The header name from which to retrieve values.
         *
         * @return {?} A string of values if the header exists, null otherwise.
         */

      }, {
        key: "getAll",
        value: function getAll(name) {
          this.init();
          return this.headers.get(name.toLowerCase()) || null;
        }
        /**
         * Appends a new value to the existing set of values for a header
         * and returns them in a clone of the original instance.
         *
         * @param {?} name The header name for which to append the values.
         * @param {?} value The value to append.
         *
         * @return {?} A clone of the HTTP headers object with the value appended to the given header.
         */

      }, {
        key: "append",
        value: function append(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'a'
          });
        }
        /**
         * Sets or modifies a value for a given header in a clone of the original instance.
         * If the header already exists, its value is replaced with the given value
         * in the returned object.
         *
         * @param {?} name The header name.
         * @param {?} value The value or values to set or overide for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the newly set header value.
         */

      }, {
        key: "set",
        value: function set(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 's'
          });
        }
        /**
         * Deletes values for a given header in a clone of the original instance.
         *
         * @param {?} name The header name.
         * @param {?=} value The value or values to delete for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the given value deleted.
         */

      }, {
        key: "delete",
        value: function _delete(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'd'
          });
        }
        /**
         * @private
         * @param {?} name
         * @param {?} lcName
         * @return {?}
         */

      }, {
        key: "maybeSetNormalizedName",
        value: function maybeSetNormalizedName(name, lcName) {
          if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this2 = this;

          if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }

            this.lazyInit = null;

            if (!!this.lazyUpdate) {
              this.lazyUpdate.forEach(
              /**
              * @param {?} update
              * @return {?}
              */
              function (update) {
                return _this2.applyUpdate(update);
              });
              this.lazyUpdate = null;
            }
          }
        }
        /**
         * @private
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "copyFrom",
        value: function copyFrom(other) {
          var _this3 = this;

          other.init();
          Array.from(other.headers.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this3.headers.set(key,
            /** @type {?} */
            other.headers.get(key));

            _this3.normalizedNames.set(key,
            /** @type {?} */
            other.normalizedNames.get(key));
          });
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpHeaders();
          clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
          clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "applyUpdate",
        value: function applyUpdate(update) {
          /** @type {?} */
          var key = update.name.toLowerCase();

          switch (update.op) {
            case 'a':
            case 's':
              /** @type {?} */
              var value =
              /** @type {?} */
              update.value;

              if (typeof value === 'string') {
                value = [value];
              }

              if (value.length === 0) {
                return;
              }

              this.maybeSetNormalizedName(update.name, key);
              /** @type {?} */

              var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
              base.push.apply(base, _toConsumableArray(value));
              this.headers.set(key, base);
              break;

            case 'd':
              /** @type {?} */
              var toDelete =
              /** @type {?} */
              update.value;

              if (!toDelete) {
                this.headers["delete"](key);
                this.normalizedNames["delete"](key);
              } else {
                /** @type {?} */
                var existing = this.headers.get(key);

                if (!existing) {
                  return;
                }

                existing = existing.filter(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  return toDelete.indexOf(value) === -1;
                });

                if (existing.length === 0) {
                  this.headers["delete"](key);
                  this.normalizedNames["delete"](key);
                } else {
                  this.headers.set(key, existing);
                }
              }

              break;
          }
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          var _this4 = this;

          this.init();
          Array.from(this.normalizedNames.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return fn(
            /** @type {?} */
            _this4.normalizedNames.get(key),
            /** @type {?} */
            _this4.headers.get(key));
          });
        }
      }]);

      return HttpHeaders;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/params.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A codec for encoding and decoding parameters in URLs.
     *
     * Used by `HttpParams`.
     *
     * \@publicApi
     *
     * @record
     */


    function HttpParameterCodec() {}

    if (false) {}
    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec = /*#__PURE__*/function () {
      function HttpUrlEncodingCodec() {
        _classCallCheck(this, HttpUrlEncodingCodec);
      }

      _createClass(HttpUrlEncodingCodec, [{
        key: "encodeKey",

        /**
         * Encodes a key name for a URL parameter or query-string.
         * @param {?} key The key name.
         * @return {?} The encoded key name.
         */
        value: function encodeKey(key) {
          return standardEncoding(key);
        }
        /**
         * Encodes the value of a URL parameter or query-string.
         * @param {?} value The value.
         * @return {?} The encoded value.
         */

      }, {
        key: "encodeValue",
        value: function encodeValue(value) {
          return standardEncoding(value);
        }
        /**
         * Decodes an encoded URL parameter or query-string key.
         * @param {?} key The encoded key name.
         * @return {?} The decoded key name.
         */

      }, {
        key: "decodeKey",
        value: function decodeKey(key) {
          return decodeURIComponent(key);
        }
        /**
         * Decodes an encoded URL parameter or query-string value.
         * @param {?} value The encoded value.
         * @return {?} The decoded value.
         */

      }, {
        key: "decodeValue",
        value: function decodeValue(value) {
          return decodeURIComponent(value);
        }
      }]);

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * @record
     */


    function Update$1() {}

    if (false) {}
    /**
     * Options used to construct an `HttpParams` instance.
     *
     * \@publicApi
     * @record
     */


    function HttpParamsOptions() {}

    if (false) {}
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams = /*#__PURE__*/function () {
      /**
       * @param {?=} options
       */
      function HttpParams() {
        var _this5 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
        /** @type {?} */
        {};

        _classCallCheck(this, HttpParams);

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this5.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      _createClass(HttpParams, [{
        key: "has",
        value: function has(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.has(param)
          );
        }
        /**
         * Retrieves the first value for a parameter.
         * @param {?} param The parameter name.
         * @return {?} The first value of the given parameter,
         * or `null` if the parameter is not present.
         */

      }, {
        key: "get",
        value: function get(param) {
          this.init();
          /** @type {?} */

          var res =
          /** @type {?} */
          this.map.get(param);
          return !!res ? res[0] : null;
        }
        /**
         * Retrieves all values for a  parameter.
         * @param {?} param The parameter name.
         * @return {?} All values in a string array,
         * or `null` if the parameter not present.
         */

      }, {
        key: "getAll",
        value: function getAll(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.get(param) || null
          );
        }
        /**
         * Retrieves all the parameters for this body.
         * @return {?} The parameter names in a string array.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(
          /** @type {?} */
          this.map.keys());
        }
        /**
         * Appends a new value to existing values for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value to add.
         * @return {?} A new body with the appended value.
         */

      }, {
        key: "append",
        value: function append(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'a'
          });
        }
        /**
         * Replaces the value for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value.
         * @return {?} A new body with the new value.
         */

      }, {
        key: "set",
        value: function set(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 's'
          });
        }
        /**
         * Removes a given value or all values from a parameter.
         * @param {?} param The parameter name.
         * @param {?=} value The value to remove, if provided.
         * @return {?} A new body with the given value removed, or with all values
         * removed if no value is specified.
         */

      }, {
        key: "delete",
        value: function _delete(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'd'
          });
        }
        /**
         * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
         * separated by `&`s.
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          var _this6 = this;

          this.init();
          return this.keys().map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var eKey = _this6.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`


            return (
              /** @type {?} */

              /** @type {?} */
              _this6.map.get(key).map(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return eKey + '=' + _this6.encoder.encodeValue(value);
              }).join('&')
            );
          }) // filter out empty values because `b: []` produces `''`
          // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
          .filter(
          /**
          * @param {?} param
          * @return {?}
          */
          function (param) {
            return param !== '';
          }).join('&');
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpParams(
          /** @type {?} */
          {
            encoder: this.encoder
          });
          clone.cloneFrom = this.cloneFrom || this;
          clone.updates = (this.updates || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this7 = this;

          if (this.map === null) {
            this.map = new Map();
          }

          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return (
                /** @type {?} */
                _this7.map.set(key,
                /** @type {?} */

                /** @type {?} */

                /** @type {?} */
                _this7.cloneFrom.map.get(key))
              );
            });

            /** @type {?} */
            this.updates.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              switch (update.op) {
                case 'a':
                case 's':
                  /** @type {?} */
                  var base = (update.op === 'a' ?
                  /** @type {?} */
                  _this7.map.get(update.param) : undefined) || [];
                  base.push(
                  /** @type {?} */
                  update.value);

                  /** @type {?} */
                  _this7.map.set(update.param, base);

                  break;

                case 'd':
                  if (update.value !== undefined) {
                    /** @type {?} */
                    var _base =
                    /** @type {?} */
                    _this7.map.get(update.param) || [];
                    /** @type {?} */


                    var idx = _base.indexOf(update.value);

                    if (idx !== -1) {
                      _base.splice(idx, 1);
                    }

                    if (_base.length > 0) {
                      /** @type {?} */
                      _this7.map.set(update.param, _base);
                    } else {
                      /** @type {?} */
                      _this7.map["delete"](update.param);
                    }
                  } else {
                    /** @type {?} */
                    _this7.map["delete"](update.param);

                    break;
                  }

              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }]);

      return HttpParams;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/request.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Construction interface for `HttpRequest`s.
     *
     * All values are optional and will override default values if provided.
     * @record
     */


    function HttpRequestInit() {}

    if (false) {}
    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest = /*#__PURE__*/function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        _classCallCheck(this, HttpRequest);

        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      _createClass(HttpRequest, [{
        key: "serializeBody",
        value: function serializeBody() {
          // If no body is present, no need to serialize it.
          if (this.body === null) {
            return null;
          } // Check whether the body is already in a serialized form. If so,
          // it can just be returned directly.


          if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
            return this.body;
          } // Check whether the body is an instance of HttpUrlEncodedParams.


          if (this.body instanceof HttpParams) {
            return this.body.toString();
          } // Check whether the body is an object or array, and serialize with JSON if so.


          if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
            return JSON.stringify(this.body);
          } // Fall back on toString() for everything else.


          return (
            /** @type {?} */
            this.body.toString()
          );
        }
        /**
         * Examine the body and attempt to infer an appropriate MIME type
         * for it.
         *
         * If no such type can be inferred, this method will return `null`.
         * @return {?}
         */

      }, {
        key: "detectContentTypeHeader",
        value: function detectContentTypeHeader() {
          // An empty body has no content type.
          if (this.body === null) {
            return null;
          } // FormData bodies rely on the browser's content type assignment.


          if (isFormData(this.body)) {
            return null;
          } // Blobs usually have their own content type. If it doesn't, then
          // no type can be inferred.


          if (isBlob(this.body)) {
            return this.body.type || null;
          } // Array buffers have unknown contents and thus no type can be inferred.


          if (isArrayBuffer(this.body)) {
            return null;
          } // Technically, strings could be a form of JSON data, but it's safe enough
          // to assume they're plain strings.


          if (typeof this.body === 'string') {
            return 'text/plain';
          } // `HttpUrlEncodedParams` has its own content-type.


          if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } // Arrays, objects, and numbers will be encoded as JSON.


          if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
            return 'application/json';
          } // No type could be inferred.


          return null;
        }
        /**
         * @param {?=} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // For method, url, and responseType, take the current value unless
          // it is overridden in the update hash.

          /** @type {?} */
          var method = update.method || this.method;
          /** @type {?} */

          var url = update.url || this.url;
          /** @type {?} */

          var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
          // whatever current body is present is being overridden with an empty
          // body, whereas an `undefined` value in update.body implies no
          // override.

          /** @type {?} */

          var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
          // `false` and `undefined` in the update args.

          /** @type {?} */

          var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
          /** @type {?} */

          var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
          // `setParams` are used.

          /** @type {?} */

          var headers = update.headers || this.headers;
          /** @type {?} */

          var params = update.params || this.params; // Check whether the caller has asked to add headers.

          if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers = Object.keys(update.setHeaders).reduce(
            /**
            * @param {?} headers
            * @param {?} name
            * @return {?}
            */
            function (headers, name) {
              return headers.set(name,
              /** @type {?} */
              update.setHeaders[name]);
            }, headers);
          } // Check whether the caller has asked to set params.


          if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams).reduce(
            /**
            * @param {?} params
            * @param {?} param
            * @return {?}
            */
            function (params, param) {
              return params.set(param,
              /** @type {?} */
              update.setParams[param]);
            }, params);
          } // Finally, construct the new HttpRequest using the pieces from above.


          return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials
          });
        }
      }]);

      return HttpRequest;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/response.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base interface for progress events.
     *
     * \@publicApi
     * @record
     */

    function HttpProgressEvent() {}

    if (false) {}
    /**
     * A download progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpDownloadProgressEvent() {}

    if (false) {}
    /**
     * An upload progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpUploadProgressEvent() {}

    if (false) {}
    /**
     * An event indicating that the request was sent to the server. Useful
     * when a request may be retried multiple times, to distinguish between
     * retries on the final event stream.
     *
     * \@publicApi
     * @record
     */


    function HttpSentEvent() {}

    if (false) {}
    /**
     * A user-defined event.
     *
     * Grouping all custom events under this type ensures they will be handled
     * and forwarded by all implementations of interceptors.
     *
     * \@publicApi
     * @record
     * @template T
     */


    function HttpUserEvent() {}

    if (false) {}
    /**
     * An error that represents a failed attempt to JSON.parse text coming back
     * from the server.
     *
     * It bundles the Error object with the actual response body that failed to parse.
     *
     *
     * @record
     */


    function HttpJsonParseError() {}

    if (false) {}
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */


    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init) {
      var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

      _classCallCheck(this, HttpResponseBase);

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };

    if (false) {}
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase) {
      _inherits(HttpHeaderResponse, _HttpResponseBase);

      var _super = _createSuper(HttpHeaderResponse);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse() {
        var _this8;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpHeaderResponse);

        _this8 = _super.call(this, init);
        _this8.type = HttpEventType.ResponseHeader;
        return _this8;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpHeaderResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Perform a straightforward initialization of the new HttpHeaderResponse,
          // overriding the current parameters with new ones if given.
          return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpHeaderResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse = /*#__PURE__*/function (_HttpResponseBase2) {
      _inherits(HttpResponse, _HttpResponseBase2);

      var _super2 = _createSuper(HttpResponse);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse() {
        var _this9;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpResponse);

        _this9 = _super2.call(this, init);
        _this9.type = HttpEventType.Response;
        _this9.body = init.body !== undefined ? init.body : null;
        return _this9;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new HttpResponse({
            body: update.body !== undefined ? update.body : this.body,
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase3) {
      _inherits(HttpErrorResponse, _HttpResponseBase3);

      var _super3 = _createSuper(HttpErrorResponse);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this10;

        _classCallCheck(this, HttpErrorResponse);

        // Initialize with a default status of 0 / Unknown Error.
        _this10 = _super3.call(this, init, 0, 'Unknown Error');
        _this10.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this10.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this10.status >= 200 && _this10.status < 300) {
          _this10.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
        } else {
          _this10.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
        }

        _this10.error = init.error || null;
        return _this10;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/client.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient = /*#__PURE__*/function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        _classCallCheck(this, HttpClient);

        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      _createClass(HttpClient, [{
        key: "request",
        value: function request(first, url) {
          var _this11 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var req; // First, check whether the primary argument is an instance of `HttpRequest`.

          if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
          } else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.

            /** @type {?} */
            var headers = undefined;

            if (options.headers instanceof HttpHeaders) {
              headers = options.headers;
            } else {
              headers = new HttpHeaders(options.headers);
            } // Sort out parameters.

            /** @type {?} */


            var params = undefined;

            if (!!options.params) {
              if (options.params instanceof HttpParams) {
                params = options.params;
              } else {
                params = new HttpParams(
                /** @type {?} */
                {
                  fromObject: options.params
                });
              }
            } // Construct the request.


            req = new HttpRequest(first,
            /** @type {?} */
            url, options.body !== undefined ? options.body : null, {
              headers: headers,
              params: params,
              reportProgress: options.reportProgress,
              // By default, JSON is assumed to be returned for all calls.
              responseType: options.responseType || 'json',
              withCredentials: options.withCredentials
            });
          } // Start with an Observable.of() the initial request, and run the handler (which
          // includes all interceptors) inside a concatMap(). This way, the handler runs
          // inside an Observable chain, which causes interceptors to be re-run on every
          // subscription (this also makes retries re-run the handler, including interceptors).

          /** @type {?} */


          var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
          /**
          * @param {?} req
          * @return {?}
          */
          function (req) {
            return _this11.handler.handle(req);
          })); // If coming via the API signature which accepts a previously constructed HttpRequest,
          // the only option is to get the event stream. Otherwise, return the event stream if
          // that is what was requested.

          if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
          } // The requested stream contains either the full response or the body. In either
          // case, the first step is to filter the event stream to extract a stream of
          // responses(s).

          /** @type {?} */


          var res$ =
          /** @type {?} */
          events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof HttpResponse;
          })); // Decide which stream to return.

          switch (options.observe || 'body') {
            case 'body':
              // The requested stream is the body. Map the response stream to the response
              // body. This could be done more simply, but a misbehaving interceptor might
              // transform the response body into a different format and ignore the requested
              // responseType. Guard against this by validating that the response is of the
              // requested type.
              switch (req.responseType) {
                case 'arraybuffer':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is an ArrayBuffer.
                    if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                      throw new Error('Response is not an ArrayBuffer.');
                    }

                    return res.body;
                  }));

                case 'blob':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a Blob.
                    if (res.body !== null && !(res.body instanceof Blob)) {
                      throw new Error('Response is not a Blob.');
                    }

                    return res.body;
                  }));

                case 'text':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a string.
                    if (res.body !== null && typeof res.body !== 'string') {
                      throw new Error('Response is not a string.');
                    }

                    return res.body;
                  }));

                case 'json':
                default:
                  // No validation needed for JSON responses, as they can be of any type.
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return res.body;
                  }));
              }

            case 'response':
              // The response stream was requested directly, so return it.
              return res$;

            default:
              // Guard against new future observe types being added.
              throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
          }
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `DELETE` request to execute on the server. See the individual overloads for
         * details on the return type.
         *
         * @param {?} url     The endpoint URL.
         * @param {?=} options The HTTP options to send with the request.
         *
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('DELETE', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `GET` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('GET', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `HEAD` request to execute on the server. The `HEAD` method returns
         * meta information about the resource without transferring the
         * resource itself. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "head",
        value: function head(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('HEAD', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes a request with the special method
         * `JSONP` to be dispatched via the interceptor pipeline.
         * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
         * API endpoints that don't support newer,
         * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
         * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
         * requests even if the API endpoint is not located on the same domain (origin) as the client-side
         * application making the request.
         * The endpoint API must support JSONP callback for JSONP requests to work.
         * The resource API returns the JSON response wrapped in a callback function.
         * You can pass the callback function name as one of the query parameters.
         * Note that JSONP requests can only be used with `GET` requests.
         *
         * @template T
         * @param {?} url The resource URL.
         * @param {?} callbackParam The callback function name.
         *
         * @return {?}
         */

      }, {
        key: "jsonp",
        value: function jsonp(url, callbackParam) {
          return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes the configured
         * `OPTIONS` request to execute on the server. This method allows the client
         * to determine the supported HTTP methods and other capabilites of an endpoint,
         * without implying a resource action. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "options",
        value: function options(url) {
          var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.request('OPTIONS', url,
          /** @type {?} */
          _options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PATCH` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patch",
        value: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PATCH', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `POST` request to execute on the server. The server responds with the location of
         * the replaced resource. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "post",
        value: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('POST', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
         * with a new set of values.
         * See the individual overloads for details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "put",
        value: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PUT', url, addBody(options, body));
        }
      }]);

      return HttpClient;
    }();

    HttpClient.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Intercepts and handles an `HttpRequest` or `HttpResponse`.
     *
     * Most interceptors transform the outgoing request before passing it to the
     * next interceptor in the chain, by calling `next.handle(transformedReq)`.
     * An interceptor may transform the
     * response event stream as well, by applying additional RxJS operators on the stream
     * returned by `next.handle()`.
     *
     * More rarely, an interceptor may handle the request entirely,
     * and compose a new event stream instead of invoking `next.handle()`. This is an
     * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
     *
     * It is also rare but valid for an interceptor to return multiple responses on the
     * event stream for a single request.
     *
     * \@publicApi
     *
     * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
     *
     * \@usageNotes
     *
     * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
     * only in your `AppModule`, and add the interceptors to the root application injector .
     * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
     * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
     * interceptors provided in the root module.
     *
     * @record
     */


    function HttpInterceptor() {}

    if (false) {}
    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler = /*#__PURE__*/function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        _classCallCheck(this, HttpInterceptorHandler);

        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptorHandler, [{
        key: "handle",
        value: function handle(req) {
          return this.interceptor.intercept(req, this.next);
        }
      }]);

      return HttpInterceptorHandler;
    }();

    if (false) {}
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor = /*#__PURE__*/function () {
      function NoopInterceptor() {
        _classCallCheck(this, NoopInterceptor);
      }

      _createClass(NoopInterceptor, [{
        key: "intercept",

        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        value: function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return NoopInterceptor;
    }();

    NoopInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/jsonp.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */

    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {
      _classCallCheck(this, JsonpCallbackContext);
    };
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend = /*#__PURE__*/function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        _classCallCheck(this, JsonpClientBackend);

        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      _createClass(JsonpClientBackend, [{
        key: "nextCallback",
        value: function nextCallback() {
          return "ng_jsonp_callback_".concat(nextRequestId++);
        }
        /**
         * Processes a JSONP request and returns an event stream of the results.
         * @param {?} req The request object.
         * @return {?} An observable of the response events.
         *
         */

      }, {
        key: "handle",
        value: function handle(req) {
          var _this12 = this;

          // Firstly, check both the method and response type. If either doesn't match
          // then the request was improperly routed here and cannot be handled.
          if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
          } else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
          } // Everything else happens inside the Observable boundary.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.

            /** @type {?} */
            var callback = _this12.nextCallback();
            /** @type {?} */


            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

            /** @type {?} */

            var node = _this12.document.createElement('script');

            node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.

            /** @type {?} */

            var body = null; // Whether the response callback has been called.

            /** @type {?} */

            var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.

            /** @type {?} */

            var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.

            _this12.callbackMap[callback] =
            /**
            * @param {?=} data
            * @return {?}
            */
            function (data) {
              // Data has been received from the JSONP script. Firstly, delete this callback.
              delete _this12.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

              if (cancelled) {
                return;
              } // Set state to indicate data was received.


              body = data;
              finished = true;
            }; // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.

            /** @type {?} */


            var cleanup =
            /**
            * @return {?}
            */
            function cleanup() {
              // Remove the <script> tag if it's still on the page.
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              } // Remove the response callback from the callbackMap (window object in the
              // browser).


              delete _this12.callbackMap[callback];
            }; // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.

            /** @type {?} */


            var onLoad =
            /**
            * @param {?} event
            * @return {?}
            */
            function onLoad(event) {
              // Do nothing if the request has been cancelled.
              if (cancelled) {
                return;
              } // Cleanup the page.


              cleanup(); // Check whether the response callback has run.

              if (!finished) {
                // It hasn't, something went wrong with the request. Return an error via
                // the Observable error path. All JSONP errors have status 0.
                observer.error(new HttpErrorResponse({
                  url: url,
                  status: 0,
                  statusText: 'JSONP Error',
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              } // Success. body either contains the response body or null if none was
              // returned.


              observer.next(new HttpResponse({
                body: body,
                status: 200,
                statusText: 'OK',
                url: url
              })); // Complete the stream, the response is over.

              observer.complete();
            }; // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              // If the request was already cancelled, no need to emit anything.
              if (cancelled) {
                return;
              }

              cleanup(); // Wrap the error in a HttpErrorResponse.

              observer.error(new HttpErrorResponse({
                error: error,
                status: 0,
                statusText: 'JSONP Error',
                url: url
              }));
            }; // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.


            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);

            _this12.document.body.appendChild(node); // The request has now been successfully sent.


            observer.next({
              type: HttpEventType.Sent
            }); // Cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              }
            );
          });
        }
      }]);

      return JsonpClientBackend;
    }();

    JsonpClientBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    if (false) {}
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        _classCallCheck(this, JsonpInterceptor);

        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      _createClass(JsonpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method === 'JSONP') {
            return this.jsonp.handle(
            /** @type {?} */
            req);
          } // Fall through for normal HTTP requests.


          return next.handle(req);
        }
      }]);

      return JsonpInterceptor;
    }();

    JsonpInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/xhr.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {
      _classCallCheck(this, XhrFactory);
    };

    if (false) {}
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr = /*#__PURE__*/function () {
      function BrowserXhr() {
        _classCallCheck(this, BrowserXhr);
      }
      /**
       * @return {?}
       */


      _createClass(BrowserXhr, [{
        key: "build",
        value: function build() {
          return (
            /** @type {?} */
            new XMLHttpRequest()
          );
        }
      }]);

      return BrowserXhr;
    }();

    BrowserXhr.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /**
     * Tracks a response from the server that does not yet have a body.
     * @record
     */


    function PartialResponse() {}

    if (false) {}
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend = /*#__PURE__*/function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        _classCallCheck(this, HttpXhrBackend);

        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      _createClass(HttpXhrBackend, [{
        key: "handle",
        value: function handle(req) {
          var _this13 = this;

          // Quick check to give a better error message when a user attempts to use
          // HttpClient.jsonp() without installing the JsonpClientModule
          if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
          } // Everything happens on Observable subscription.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.

            /** @type {?} */
            var xhr = _this13.xhrFactory.build();

            xhr.open(req.method, req.urlWithParams);

            if (!!req.withCredentials) {
              xhr.withCredentials = true;
            } // Add all the requested headers.


            req.headers.forEach(
            /**
            * @param {?} name
            * @param {?} values
            * @return {?}
            */
            function (name, values) {
              return xhr.setRequestHeader(name, values.join(','));
            }); // Add an Accept header if one isn't present already.

            if (!req.headers.has('Accept')) {
              xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            } // Auto-detect the Content-Type header if one isn't present already.


            if (!req.headers.has('Content-Type')) {
              /** @type {?} */
              var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

              if (detectedType !== null) {
                xhr.setRequestHeader('Content-Type', detectedType);
              }
            } // Set the responseType if one was requested.


            if (req.responseType) {
              /** @type {?} */
              var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
              // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
              // xhr.response will be null, and xhr.responseText cannot be accessed to
              // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
              // is parsed by first requesting text and then applying JSON.parse.

              xhr.responseType =
              /** @type {?} */
              responseType !== 'json' ? responseType : 'text';
            } // Serialize the request body if one is present. If not, this will be set to null.

            /** @type {?} */


            var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.

            /** @type {?} */

            var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.

            /** @type {?} */

            var partialFromXhr =
            /**
            * @return {?}
            */
            function partialFromXhr() {
              if (headerResponse !== null) {
                return headerResponse;
              } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

              /** @type {?} */


              var status = xhr.status === 1223 ? 204 : xhr.status;
              /** @type {?} */

              var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

              /** @type {?} */

              var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
              // request URL.

              /** @type {?} */

              var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

              headerResponse = new HttpHeaderResponse({
                headers: headers,
                status: status,
                statusText: statusText,
                url: url
              });
              return headerResponse;
            }; // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.

            /** @type {?} */


            var onLoad =
            /**
            * @return {?}
            */
            function onLoad() {
              // Read response state from the memoized partial data.
              var _partialFromXhr = partialFromXhr(),
                  headers = _partialFromXhr.headers,
                  status = _partialFromXhr.status,
                  statusText = _partialFromXhr.statusText,
                  url = _partialFromXhr.url; // The body will be read out if present.

              /** @type {?} */


              var body = null;

              if (status !== 204) {
                // Use XMLHttpRequest.response if set, responseText otherwise.
                body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
              } // Normalize another potential bug (this one comes from CORS).


              if (status === 0) {
                status = !!body ? 200 : 0;
              } // ok determines whether the response will be transmitted on the event or
              // error channel. Unsuccessful status codes (not 2xx) will always be errors,
              // but a successful status code can still result in an error if the user
              // asked for JSON data and the body cannot be parsed as such.

              /** @type {?} */


              var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
              // will have done that already).

              if (req.responseType === 'json' && typeof body === 'string') {
                // Save the original body, before attempting XSSI prefix stripping.

                /** @type {?} */
                var originalBody = body;
                body = body.replace(XSSI_PREFIX, '');

                try {
                  // Attempt the parse. If it fails, a parse error should be delivered to the user.
                  body = body !== '' ? JSON.parse(body) : null;
                } catch (error) {
                  // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                  // JSON response. Restore the original body (including any XSSI prefix) to deliver
                  // a better error response.
                  body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                  // just isn't JSON. Otherwise, deliver the parsing error to the user.

                  if (ok) {
                    // Even though the response status was 2xx, this is still an error.
                    ok = false; // The parse error contains the text of the body that failed to parse.

                    body =
                    /** @type {?} */
                    {
                      error: error,
                      text: body
                    };
                  }
                }
              }

              if (ok) {
                // A successful response is delivered on the event stream.
                observer.next(new HttpResponse({
                  body: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                })); // The full body has been received and delivered, no further events
                // are possible. This request is complete.

                observer.complete();
              } else {
                // An unsuccessful request is delivered on the error channel.
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                }));
              }
            }; // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              var _partialFromXhr2 = partialFromXhr(),
                  url = _partialFromXhr2.url;
              /** @type {?} */


              var res = new HttpErrorResponse({
                error: error,
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Unknown Error',
                url: url || undefined
              });
              observer.error(res);
            }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.

            /** @type {?} */


            var sentHeaders = false; // The download progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */

            var onDownProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onDownProgress(event) {
              // Send the HttpResponseHeaders event if it hasn't been sent already.
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              } // Start building the download progress event to deliver on the response
              // event stream.

              /** @type {?} */


              var progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              }; // Set the total number of bytes in the event if it's available.

              if (event.lengthComputable) {
                progressEvent.total = event.total;
              } // If the request was for text content and a partial response is
              // available on XMLHttpRequest, include it in the progress event
              // to allow for streaming reads.


              if (req.responseType === 'text' && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              } // Finally, fire the event.


              observer.next(progressEvent);
            }; // The upload progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */


            var onUpProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onUpProgress(event) {
              // Upload progress events are simpler. Begin building the progress
              // event.

              /** @type {?} */
              var progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              }; // If the total number of bytes being uploaded is available, include
              // it.

              if (event.lengthComputable) {
                progress.total = event.total;
              } // Send the event.


              observer.next(progress);
            }; // By default, register for load and error events.


            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

            if (req.reportProgress) {
              // Download progress is always enabled if requested.
              xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener('progress', onUpProgress);
              }
            } // Fire the request, and notify the event stream that it was fired.


            xhr.send(
            /** @type {?} */
            reqBody);
            observer.next({
              type: HttpEventType.Sent
            }); // This is the return from the Observable function, which is the
            // request cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                xhr.abort();
              }
            );
          });
        }
      }]);

      return HttpXhrBackend;
    }();

    HttpXhrBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/xsrf.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
      _classCallCheck(this, HttpXsrfTokenExtractor);
    };

    if (false) {}
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        _classCallCheck(this, HttpXsrfCookieExtractor);

        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      _createClass(HttpXsrfCookieExtractor, [{
        key: "getToken",
        value: function getToken() {
          if (this.platform === 'server') {
            return null;
          }
          /** @type {?} */


          var cookieString = this.doc.cookie || '';

          if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
          }

          return this.lastToken;
        }
      }]);

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        _classCallCheck(this, HttpXsrfInterceptor);

        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      _createClass(HttpXsrfInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          /** @type {?} */
          var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
          // Non-mutating requests don't require a token, and absolute URLs require special handling
          // anyway as the cookie set
          // on our origin is not the same as the token expected by another origin.

          if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
            return next.handle(req);
          }
          /** @type {?} */


          var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

          if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({
              headers: req.headers.set(this.headerName, token)
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/src/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler = /*#__PURE__*/function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        _classCallCheck(this, HttpInterceptingHandler);

        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptingHandler, [{
        key: "handle",
        value: function handle(req) {
          if (this.chain === null) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(
            /**
            * @param {?} next
            * @param {?} interceptor
            * @return {?}
            */
            function (next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.backend);
          }

          return this.chain.handle(req);
        }
      }]);

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    if (false) {}
    /**
     * Constructs an `HttpHandler` that applies interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * Use as a factory function within `HttpClientModule`.
     *
     *
     * @param {?} backend
     * @param {?=} interceptors
     * @return {?}
     */


    function interceptingHandler(backend) {
      var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!interceptors) {
        return backend;
      }

      return interceptors.reduceRight(
      /**
      * @param {?} next
      * @param {?} interceptor
      * @return {?}
      */
      function (next, interceptor) {
        return new HttpInterceptorHandler(next, interceptor);
      }, backend);
    }
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule = /*#__PURE__*/function () {
      function HttpClientXsrfModule() {
        _classCallCheck(this, HttpClientXsrfModule);
      }

      _createClass(HttpClientXsrfModule, null, [{
        key: "disable",

        /**
         * Disable the default XSRF protection.
         * @return {?}
         */
        value: function disable() {
          return {
            ngModule: HttpClientXsrfModule,
            providers: [{
              provide: HttpXsrfInterceptor,
              useClass: NoopInterceptor
            }]
          };
        }
        /**
         * Configure XSRF protection.
         * @param {?=} options An object that can specify either or both
         * cookie name or header name.
         * - Cookie name default is `XSRF-TOKEN`.
         * - Header name default is `X-XSRF-TOKEN`.
         *
         * @return {?}
         */

      }, {
        key: "withOptions",
        value: function withOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: HttpClientXsrfModule,
            providers: [options.cookieName ? {
              provide: XSRF_COOKIE_NAME,
              useValue: options.cookieName
            } : [], options.headerName ? {
              provide: XSRF_HEADER_NAME,
              useValue: options.headerName
            } : []]
          };
        }
      }]);

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientModule = function HttpClientModule() {
      _classCallCheck(this, HttpClientModule);
    };

    HttpClientModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        /**
         * Optional configuration for XSRF protection.
         */
        imports: [HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })],

        /**
         * Configures the [dependency injector](guide/glossary#injector) where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientJsonpModule = function HttpClientJsonpModule() {
      _classCallCheck(this, HttpClientJsonpModule);
    };

    HttpClientJsonpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: packages/common/http/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/
  },

  /***/
  "./src/app/components/product-management/GetProductResolver.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/product-management/GetProductResolver.ts ***!
    \*********************************************************************/

  /*! exports provided: GetProductResolver */

  /***/
  function srcAppComponentsProductManagementGetProductResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetProductResolver", function () {
      return GetProductResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/components/product-management/services/product.service.ts");

    var GetProductResolver = /*#__PURE__*/function () {
      function GetProductResolver(productService) {
        _classCallCheck(this, GetProductResolver);

        this.productService = productService;
      }

      _createClass(GetProductResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = +route.paramMap.get('id');
          var pr = this.productService.getProduct(id);
          console.log("this id is: ".concat(id, ". the product is: ").concat(pr));
          return pr;
        }
      }]);

      return GetProductResolver;
    }();

    GetProductResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function GetProductResolver_Factory() {
        return new GetProductResolver(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
      },
      token: GetProductResolver,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/components/product-management/add-product/add-product.component.css.shim.ngstyle.js":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/components/product-management/add-product/add-product.component.css.shim.ngstyle.js ***!
    \*****************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsProductManagementAddProductAddProductComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1tYW5hZ2VtZW50L2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/components/product-management/add-product/add-product.component.ngfactory.js":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/product-management/add-product/add-product.component.ngfactory.js ***!
    \**********************************************************************************************/

  /*! exports provided: RenderType_AddProductComponent, View_AddProductComponent_0, View_AddProductComponent_Host_0, AddProductComponentNgFactory */

  /***/
  function srcAppComponentsProductManagementAddProductAddProductComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AddProductComponent", function () {
      return RenderType_AddProductComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AddProductComponent_0", function () {
      return View_AddProductComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AddProductComponent_Host_0", function () {
      return View_AddProductComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponentNgFactory", function () {
      return AddProductComponentNgFactory;
    });
    /* harmony import */


    var _add_product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-product.component.css.shim.ngstyle */
    "./src/app/components/product-management/add-product/add-product.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_no_space_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/no-space.directive */
    "./src/app/shared/no-space.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-product.component */
    "./src/app/components/product-management/add-product/add-product.component.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/components/product-management/services/product.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AddProductComponent = [_add_product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AddProductComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AddProductComponent,
      data: {}
    });

    function View_AddProductComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_AddProductComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[2, 0], ["forTag", 1]], null, 0, "input", [["maxlength", "10"], ["minlength", "3"], ["required", ""], ["type", "text"]], [[8, "value", 0]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_AddProductComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_AddProductComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) {
        var currVal_7 = _v.context.index;

        _ck(_v, 4, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_AddProductComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        productForm: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        tagsTD: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 58, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.submitTheForm() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, [[1, 4], ["productForm", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["for", "productName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "input", [["appNoSpace", "3"], ["autocomplete", "off"], ["id", "productName"], ["maxlength", "10"], ["minlength", "3"], ["name", "productName"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.product.name = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _shared_no_space_directive__WEBPACK_IMPORTED_MODULE_3__["NoSpaceDirective"], [], {
        num: [0, "num"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], {
        minlength: [0, "minlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0, p2_0, p3_0) {
        return [p0_0, p1_0, p2_0, p3_0];
      }, [_shared_no_space_directive__WEBPACK_IMPORTED_MODULE_3__["NoSpaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [["productName", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is required"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is less than 3 characters long"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name cannot be just spaces"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [["for", "brandDD"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Brand"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 10, "select", [["id", "productBrandDD"], ["name", "productBrandDD"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.product.brand = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, [["productBrand", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_AddProductComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product brand is invalid"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "label", [["for", "productFragile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "input", [["id", "productFragile"], ["name", "productFragile"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.product.fragile = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, [["productFragile", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.addTagTD() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddProductComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "input", [["type", "submit"], ["value", "Submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, [" ", "\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.submitTheFormRF() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "label", [["for", "productName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 5, "input", [["autocomplete", "off"], ["formControlName", "name"], ["id", "productName"], ["name", "productName"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is required"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is less than 3 characters long"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name cannot be just spaces"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "label", [["for", "brandDD"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Brand"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 8, "select", [["formControlName", "brand"], ["id", "productBrandDD"], ["name", "productBrandDD"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_AddProductComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "div", [["style", "color:red;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product brand is invalid"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "label", [["for", "productFragile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 5, "input", [["formControlName", "fragile"], ["id", "productFragile"], ["name", "productFragile"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 10, "div", [["formArrayName", "tags"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.addTag() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddProductComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 0, "input", [["type", "submit"], ["value", "Submit"]], [[8, "disabled", 0]], null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_17 = "3";

        _ck(_v, 10, 0, currVal_17);

        var currVal_18 = "";

        _ck(_v, 12, 0, currVal_18);

        var currVal_19 = "3";

        _ck(_v, 13, 0, currVal_19);

        var currVal_20 = "10";

        _ck(_v, 14, 0, currVal_20);

        var currVal_21 = "productName";
        var currVal_22 = _co.product.name;

        _ck(_v, 17, 0, currVal_21, currVal_22);

        var currVal_34 = "";

        _ck(_v, 31, 0, currVal_34);

        var currVal_35 = "productBrandDD";
        var currVal_36 = _co.product.brand;

        _ck(_v, 34, 0, currVal_35, currVal_36);

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).transform(_co.brands$));

        _ck(_v, 38, 0, currVal_37);

        var currVal_46 = "productFragile";
        var currVal_47 = _co.product.fragile;

        _ck(_v, 48, 0, currVal_46, currVal_47);

        var currVal_48 = _co.tagArray;

        _ck(_v, 59, 0, currVal_48);

        var currVal_58 = _co.addProductForm;

        _ck(_v, 67, 0, currVal_58);

        var currVal_66 = "name";

        _ck(_v, 75, 0, currVal_66);

        var currVal_77 = "brand";

        _ck(_v, 90, 0, currVal_77);

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 94, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).transform(_co.brands$));

        _ck(_v, 94, 0, currVal_78);

        var currVal_87 = "fragile";

        _ck(_v, 104, 0, currVal_87);

        var currVal_95 = "tags";

        _ck(_v, 109, 0, currVal_95);

        var currVal_96 = _co.tags.controls;

        _ck(_v, 118, 0, currVal_96);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required ? "" : null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).minlength : null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).maxlength : null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;

        _ck(_v, 9, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_23 = !(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors.required);

        _ck(_v, 20, 0, currVal_23);

        var currVal_24 = !(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors.minlength);

        _ck(_v, 22, 0, currVal_24);

        var currVal_25 = !(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).errors.somekey);

        _ck(_v, 24, 0, currVal_25);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).required ? "" : null;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending;

        _ck(_v, 29, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).pristine || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).valid;

        _ck(_v, 40, 0, currVal_38);

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassUntouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassTouched;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPristine;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassDirty;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassValid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassInvalid;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ngClassPending;

        _ck(_v, 45, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45);

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).invalid;

        _ck(_v, 60, 0, currVal_49);

        var currVal_50 = _co.message;

        _ck(_v, 61, 0, currVal_50);

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassUntouched;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassTouched;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPristine;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassDirty;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassValid;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassInvalid;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPending;

        _ck(_v, 65, 0, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57);

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassUntouched;

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassTouched;

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPristine;

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassDirty;

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassValid;

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassInvalid;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPending;

        _ck(_v, 72, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65);

        var currVal_67 = !(_co.name.errors == null ? null : _co.name.errors.required);

        _ck(_v, 78, 0, currVal_67);

        var currVal_68 = !(_co.name.errors == null ? null : _co.name.errors.minlength);

        _ck(_v, 80, 0, currVal_68);

        var currVal_69 = !(_co.name.errors == null ? null : _co.name.errors.somekey);

        _ck(_v, 82, 0, currVal_69);

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassUntouched;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassTouched;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassPristine;

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassDirty;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassValid;

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassInvalid;

        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 92).ngClassPending;

        _ck(_v, 87, 0, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76);

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).pristine || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).valid;

        _ck(_v, 96, 0, currVal_79);

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassUntouched;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassTouched;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassPristine;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassDirty;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassValid;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassInvalid;

        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ngClassPending;

        _ck(_v, 101, 0, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86);

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassUntouched;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassTouched;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassPristine;

        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassDirty;

        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassValid;

        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassInvalid;

        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ngClassPending;

        _ck(_v, 108, 0, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94);

        var currVal_97 = _co.addProductForm.invalid;

        _ck(_v, 119, 0, currVal_97);
      });
    }

    function View_AddProductComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-product", [], null, null, null, View_AddProductComponent_0, RenderType_AddProductComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"], [_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AddProductComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-product", _add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"], View_AddProductComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/product-management/add-product/add-product.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/product-management/add-product/add-product.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppComponentsProductManagementAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(productService, formBuilder) {
        _classCallCheck(this, AddProductComponent);

        this.productService = productService;
        this.formBuilder = formBuilder;
        this.tagArray = ['init'];
      }

      _createClass(AddProductComponent, [{
        key: "canComponentBeDeactivated",
        value: function canComponentBeDeactivated() {
          var b = this.productForm.dirty && !this.productForm.submitted;

          if (b) {
            return confirm('Unsaved changes!! do you still want to navigate away?');
          }

          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.product = { id: 0, name: '', brand: null, likeCount: 0 };
          this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          console.log(this.product.fragile);
          this.brands$ = this.productService.getBrands();
          this.addProductForm = this.formBuilder.group({
            name: [{
              value: 'dd',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), Object(_shared_custom_validators__WEBPACK_IMPORTED_MODULE_2__["noSpaces2"])(3)]],
            brand: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fragile: [],
            tags: this.formBuilder.array([this.formBuilder.control('init', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])])
          });
        }
      }, {
        key: "addTag",
        value: function addTag() {
          this.tags.push(this.formBuilder.control('new', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]));
          console.log(this.addProductForm.value);
          console.log(this.tags.value);
          console.log(this.tags.status);
        }
      }, {
        key: "addTagTD",
        value: function addTagTD() {
          this.tagArray.push('new');
          console.log(this.productForm);
          console.log(this.tagsTD);
        }
      }, {
        key: "submitTheFormRF",
        value: function submitTheFormRF() {
          this.productRF = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          this.productRF.name = this.addProductForm.get('name').value;
          this.productRF.brand = this.addProductForm.get('brand').value;
          this.productRF.fragile = this.addProductForm.get('fragile').value;
          console.log(this.productRF);
          this.productService.addProduct(this.productRF);
          this.message = "The product was added.";
        }
      }, {
        key: "submitTheForm",
        value: function submitTheForm() {
          this.productService.addProduct(this.product);
          this.message = "The product was added.";
        }
      }, {
        key: "tags",
        get: function get() {
          return this.addProductForm.get('tags');
        }
      }, {
        key: "name",
        get: function get() {
          return this.addProductForm.get('name');
        }
      }]);

      return AddProductComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/product-management/edit-product/edit-product.component.css.shim.ngstyle.js":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/product-management/edit-product/edit-product.component.css.shim.ngstyle.js ***!
    \*******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsProductManagementEditProductEditProductComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1tYW5hZ2VtZW50L2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/components/product-management/edit-product/edit-product.component.ngfactory.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/product-management/edit-product/edit-product.component.ngfactory.js ***!
    \************************************************************************************************/

  /*! exports provided: RenderType_EditProductComponent, View_EditProductComponent_0, View_EditProductComponent_Host_0, EditProductComponentNgFactory */

  /***/
  function srcAppComponentsProductManagementEditProductEditProductComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_EditProductComponent", function () {
      return RenderType_EditProductComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EditProductComponent_0", function () {
      return View_EditProductComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EditProductComponent_Host_0", function () {
      return View_EditProductComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponentNgFactory", function () {
      return EditProductComponentNgFactory;
    });
    /* harmony import */


    var _edit_product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./edit-product.component.css.shim.ngstyle */
    "./src/app/components/product-management/edit-product/edit-product.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-product.component */
    "./src/app/components/product-management/edit-product/edit-product.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/components/product-management/services/product.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_EditProductComponent = [_edit_product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_EditProductComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_EditProductComponent,
      data: {}
    });

    function View_EditProductComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["style", "color:red;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is invalid"]))], null, null);
    }

    function View_EditProductComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_EditProductComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["style", "color:red;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["product name is invalid"]))], null, null);
    }

    function View_EditProductComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.submitTheForm() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "label", [["for", "productName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "input", [["autocomplete", "off"], ["formControlName", "name"], ["id", "productName"], ["maxlength", "10"], ["minlength", "3"], ["type", "text"]], [[1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], {
        minlength: [0, "minlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EditProductComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [["for", "brandDD"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Brand"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 8, "select", [["formControlName", "brand"], ["id", "productBrandDD"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_EditProductComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EditProductComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "label", [["for", "productFragile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 5, "input", [["formControlName", "fragile"], ["id", "productFragile"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "input", [["type", "submit"], ["value", "Submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, [" ", "\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "div", [["style", "color: green;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.productFormGroup;

        _ck(_v, 2, 0, currVal_7);

        var currVal_17 = "3";

        _ck(_v, 9, 0, currVal_17);

        var currVal_18 = "10";

        _ck(_v, 10, 0, currVal_18);

        var currVal_19 = "name";

        _ck(_v, 13, 0, currVal_19);

        var currVal_20 = _co.productFormGroup.get("name").errors;

        _ck(_v, 17, 0, currVal_20);

        var currVal_28 = "brand";

        _ck(_v, 24, 0, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).transform(_co.brands$));

        _ck(_v, 28, 0, currVal_29);

        var currVal_30 = _co.productFormGroup.get("brand").errors;

        _ck(_v, 31, 0, currVal_30);

        var currVal_38 = "fragile";

        _ck(_v, 38, 0, currVal_38);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).minlength : null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).maxlength : null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 7, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending;

        _ck(_v, 21, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending;

        _ck(_v, 35, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

        var currVal_39 = _co.productFormGroup.errors;

        _ck(_v, 43, 0, currVal_39);

        var currVal_40 = _co.message;

        _ck(_v, 45, 0, currVal_40);
      });
    }

    function View_EditProductComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-edit-product", [], null, null, null, View_EditProductComponent_0, RenderType_EditProductComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var EditProductComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-edit-product", _edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"], View_EditProductComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/product-management/edit-product/edit-product.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/product-management/edit-product/edit-product.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: EditProductComponent */

  /***/
  function srcAppComponentsProductManagementEditProductEditProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditProductComponent = /*#__PURE__*/function () {
      function EditProductComponent(route, productService, fb) {
        _classCallCheck(this, EditProductComponent);

        this.route = route;
        this.productService = productService;
        this.fb = fb;
      }

      _createClass(EditProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.id = this.route.snapshot.params['id'];
          // this.product$ = this.productService.getProduct(this.id);
          this.brands$ = this.productService.getBrands();
          this.product = this.route.snapshot.data['retrievedProduct'];
          this.productFormGroup = this.fb.group({
            name: [{
              value: this.product.name,
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]],
            brand: [{
              value: this.product.brand,
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            fragile: [{
              value: this.product.fragile,
              disabled: false
            }]
          });
          this.productFormGroup.patchValue({
            name: 'test',
            brand: this.product.brand
          });
          console.log(this.product);
        }
      }, {
        key: "submitTheForm",
        value: function submitTheForm() {
          console.log(this.product);
          console.log(this.productFormGroup.value); // this.product.name = this.productFormGroup.get('name').value;
          // this.product.brand = this.productFormGroup.get('brand').value;
          // this.product.fragile = this.productFormGroup.get('fragile').value;

          var id = this.product.id;
          this.product = this.productFormGroup.value;
          this.product.id = id;
          console.log(this.product);
          console.log(this.productFormGroup.value);
          this.productService.updateProduct(this.product);
          this.message = "The product was updated.";
        }
      }]);

      return EditProductComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/product-management/product-management.module.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/product-management/product-management.module.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: ProductManagementModuleNgFactory */

  /***/
  function srcAppComponentsProductManagementProductManagementModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductManagementModuleNgFactory", function () {
      return ProductManagementModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-management.module */
    "./src/app/components/product-management/product-management.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _products_products_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products/products.component.ngfactory */
    "./src/app/components/product-management/products/products.component.ngfactory.js");
    /* harmony import */


    var _add_product_add_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-product/add-product.component.ngfactory */
    "./src/app/components/product-management/add-product/add-product.component.ngfactory.js");
    /* harmony import */


    var _edit_product_edit_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-product/edit-product.component.ngfactory */
    "./src/app/components/product-management/edit-product/edit-product.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _GetProductResolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./GetProductResolver */
    "./src/app/components/product-management/GetProductResolver.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/components/product-management/services/product.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/components/product-management/products/products.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/components/product-management/add-product/add-product.component.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/auth.guard */
    "./src/app/shared/auth.guard.ts");
    /* harmony import */


    var _shared_authorization_guard_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/authorization-guard.guard */
    "./src/app/shared/authorization-guard.guard.ts");
    /* harmony import */


    var _shared_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/can-deactivate.guard */
    "./src/app/shared/can-deactivate.guard.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/components/product-management/edit-product/edit-product.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ProductManagementModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _products_products_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ProductsComponentNgFactory"], _add_product_add_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AddProductComponentNgFactory"], _edit_product_edit_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EditProductComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _GetProductResolver__WEBPACK_IMPORTED_MODULE_9__["GetProductResolver"], _GetProductResolver__WEBPACK_IMPORTED_MODULE_9__["GetProductResolver"], [_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], _product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"]
        }, {
          path: "products",
          component: _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"]
        }, {
          path: "add",
          component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_14__["AddProductComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthenticationGuard"], _shared_authorization_guard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthorizationGuardGuard"]],
          canDeactivate: [_shared_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_17__["CanDeactivateGuard"]]
        }, {
          path: "edit/:id",
          component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_18__["EditProductComponent"],
          canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthenticationGuard"], _shared_authorization_guard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthorizationGuardGuard"]],
          canDeactivate: [_shared_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_17__["CanDeactivateGuard"]],
          resolve: {
            retrievedProduct: _GetProductResolver__WEBPACK_IMPORTED_MODULE_9__["GetProductResolver"]
          }
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/product-management/product-management.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/product-management/product-management.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductManagementModule */

  /***/
  function srcAppComponentsProductManagementProductManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductManagementModule", function () {
      return ProductManagementModule;
    });

    var ProductManagementModule = function ProductManagementModule() {
      _classCallCheck(this, ProductManagementModule);
    };
    /***/

  },

  /***/
  "./src/app/components/product-management/product/product.component.css.shim.ngstyle.js":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/product-management/product/product.component.css.shim.ngstyle.js ***!
    \*********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsProductManagementProductProductComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1tYW5hZ2VtZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/components/product-management/product/product.component.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/product-management/product/product.component.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: RenderType_ProductComponent, View_ProductComponent_0, View_ProductComponent_Host_0, ProductComponentNgFactory */

  /***/
  function srcAppComponentsProductManagementProductProductComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProductComponent", function () {
      return RenderType_ProductComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProductComponent_0", function () {
      return View_ProductComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProductComponent_Host_0", function () {
      return View_ProductComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponentNgFactory", function () {
      return ProductComponentNgFactory;
    });
    /* harmony import */


    var _product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product.component.css.shim.ngstyle */
    "./src/app/components/product-management/product/product.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_mixed_case_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/mixed-case.pipe */
    "./src/app/shared/mixed-case.pipe.ts");
    /* harmony import */


    var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product.component */
    "./src/app/components/product-management/product/product.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ProductComponent = [_product_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProductComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProductComponent,
      data: {}
    });

    function View_ProductComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_mixed_case_pipe__WEBPACK_IMPORTED_MODULE_3__["MixedCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "div", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.handleLikeClicked() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA0\xA0click to like"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "hr", [], null, null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.product.name));

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.product.brand == null ? null : _co.product.brand.name, "some input for the pipe"));

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _co.product.fragile;

        _ck(_v, 11, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2), _co.product.price));

        _ck(_v, 13, 0, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3), _co.product.sellBy, "dd/MM/yyyy"));

        _ck(_v, 16, 0, currVal_4);

        var currVal_5 = _co.product.likeCount;

        _ck(_v, 19, 0, currVal_5);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "products/edit/", _co.product.id, "");

        _ck(_v, 22, 0, currVal_6);
      });
    }

    function View_ProductComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-product", [], null, null, null, View_ProductComponent_0, RenderType_ProductComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ProductComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-product", _product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], View_ProductComponent_Host_0, {
      product: "product"
    }, {
      likeCountChanged: "likeCountChanged"
    }, []);
    /***/

  },

  /***/
  "./src/app/components/product-management/product/product.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/product-management/product/product.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductManagementProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);

        this.likeCountChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleLikeClicked",
        value: function handleLikeClicked() {
          this.product.likeCount++;
          this.likeCountChanged.emit(this.product);
        }
      }]);

      return ProductComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/product-management/products/products.component.css.shim.ngstyle.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/product-management/products/products.component.css.shim.ngstyle.js ***!
    \***********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsProductManagementProductsProductsComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1tYW5hZ2VtZW50L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/components/product-management/products/products.component.ngfactory.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/product-management/products/products.component.ngfactory.js ***!
    \****************************************************************************************/

  /*! exports provided: RenderType_ProductsComponent, View_ProductsComponent_0, View_ProductsComponent_Host_0, ProductsComponentNgFactory */

  /***/
  function srcAppComponentsProductManagementProductsProductsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProductsComponent", function () {
      return RenderType_ProductsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProductsComponent_0", function () {
      return View_ProductsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProductsComponent_Host_0", function () {
      return View_ProductsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponentNgFactory", function () {
      return ProductsComponentNgFactory;
    });
    /* harmony import */


    var _products_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./products.component.css.shim.ngstyle */
    "./src/app/components/product-management/products/products.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/product.component.ngfactory */
    "./src/app/components/product-management/product/product.component.ngfactory.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/components/product-management/product/product.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_hover_higlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/hover-higlight.directive */
    "./src/app/shared/hover-higlight.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/components/product-management/products/products.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/components/product-management/services/product.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ProductsComponent = [_products_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProductsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProductsComponent,
      data: {}
    });

    function View_ProductsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-product", [], null, [[null, "likeCountChanged"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("likeCountChanged" === en) {
          var pd_0 = _co.handleLikeCountChanged() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ProductComponent_0"], _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ProductComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], [], {
        product: [0, "product"]
      }, {
        likeCountChanged: "likeCountChanged"
      })], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ProductsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProductsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "a", [["appHoverHiglight", ""], ["routerLink", "add"]], [[1, "target", 0], [8, "href", 4]], [[null, "mouseenter"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mouseenter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseEnter() !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseLeave() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _shared_hover_higlight_directive__WEBPACK_IMPORTED_MODULE_5__["HoverHiglightDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        appHighlightColor: [0, "appHighlightColor"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        backColor: 0,
        foreColor: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "input", [["type", "button"], ["value", "Add default product"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.addDefaultProduct() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.products;

        _ck(_v, 1, 0, currVal_0);

        var currVal_3 = _ck(_v, 4, 0, "black", "wheat");

        _ck(_v, 3, 0, currVal_3);

        var currVal_4 = "add";

        _ck(_v, 5, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href;

        _ck(_v, 2, 0, currVal_1, currVal_2);
      });
    }

    function View_ProductsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-products", [], null, null, null, View_ProductsComponent_0, RenderType_ProductsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], _services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ProductsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-products", _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], View_ProductsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/product-management/products/products.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/product-management/products/products.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductManagementProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(titleService, productService) {
        _classCallCheck(this, ProductsComponent);

        this.titleService = titleService;
        this.productService = productService;
        this.products = [];
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.titleService.setTitle('Products');
          this.products$ = this.productService.getProducts();
          this.productSubscription = this.products$.subscribe(function (data) {
            _this14.products = data;
          }, function (err) {
            return console.error(err);
          }, function () {});
          this.products = this.products.sort(function (a, b) {
            return b.likeCount - a.likeCount;
          });
        }
      }, {
        key: "handleLikeCountChanged",
        value: function handleLikeCountChanged() {
          this.products = this.products.sort(function (a, b) {
            return b.likeCount - a.likeCount;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.productSubscription.unsubscribe();
        }
      }, {
        key: "addDefaultProduct",
        value: function addDefaultProduct() {
          var product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          product.name = "Fourth"; // product.brand = "Dell";

          this.productService.addProduct(product);
          this.message = "The product was added.";
        }
      }]);

      return ProductsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/product-management/services/product.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/product-management/services/product.service.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppComponentsProductManagementServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _product_management_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-management.module */
    "./src/app/components/product-management/product-management.module.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpClient) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.products = [];
        this.brands = [];
      }

      _createClass(ProductService, [{
        key: "addProduct",
        value: function addProduct(product) {
          var newid = this.products.sort(function (a, b) {
            return b.id - a.id;
          })[0] + 1;
          product.id = newid;
          this.products.push(product);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          var p = this.products.find(function (f) {
            return f.id === product.id;
          });
          p.brand = product.brand;
          p.name = product.name;
          p.fragile = product.fragile;
          return "Updated.";
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          if (this.products.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products);
          }

          var brands = [];
          this.getBrands().subscribe(function (data) {
            return brands = data;
          }, function (err) {
            return console.error(err);
          }, function () {});
          var p1 = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          p1.id = 1;
          p1.name = 'Laptop1';
          p1.brand = brands.find(function (b) {
            return b.name === 'Lenovo';
          });
          p1.price = 199;
          p1.sellBy = new Date();
          this.products.push(p1);
          var p2 = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
          p2.id = 2;
          p2.name = 'Laptop2';
          p2.brand = brands.find(function (b) {
            return b.name === 'Dell';
          });
          p2.likeCount = 1;
          p2.price = 199;
          p2.sellBy = new Date('30-DEC-2020');
          this.products.push(p2);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products);
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          this.getProducts().subscribe();

          if (this.products) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products.find(function (f) {
              return f.id === id;
            }));
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          if (this.brands.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.brands);
          }

          var p1 = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Brand"]();
          p1.id = 1;
          p1.name = 'Lenovo';
          this.brands.push(p1);
          var p2 = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Brand"]();
          p2.id = 2;
          p2.name = 'Dell';
          this.brands.push(p2);
          var p3 = new src_app_models_product__WEBPACK_IMPORTED_MODULE_0__["Brand"]();
          p3.id = 3;
          p3.name = 'Apple';
          this.brands.push(p3);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.brands);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function ProductService_Factory() {
        return new ProductService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      },
      token: ProductService,
      providedIn: _product_management_module__WEBPACK_IMPORTED_MODULE_4__["ProductManagementModule"]
    });
    /***/
  },

  /***/
  "./src/app/models/product.ts":
  /*!***********************************!*\
    !*** ./src/app/models/product.ts ***!
    \***********************************/

  /*! exports provided: Product, Brand */

  /***/
  function srcAppModelsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Brand", function () {
      return Brand;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);

      this.fragile = true;
      this.likeCount = 0;
    };

    var Brand = function Brand() {
      _classCallCheck(this, Brand);
    };
    /***/

  },

  /***/
  "./src/app/shared/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppSharedAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var AuthenticationGuard = /*#__PURE__*/function () {
      function AuthenticationGuard(userService) {
        _classCallCheck(this, AuthenticationGuard);

        this.userService = userService;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AuthenticationGuard_Factory() {
        return new AuthenticationGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      },
      token: AuthenticationGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/authorization-guard.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/authorization-guard.guard.ts ***!
    \*****************************************************/

  /*! exports provided: AuthorizationGuardGuard */

  /***/
  function srcAppSharedAuthorizationGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationGuardGuard", function () {
      return AuthorizationGuardGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthorizationGuardGuard = /*#__PURE__*/function () {
      function AuthorizationGuardGuard() {
        _classCallCheck(this, AuthorizationGuardGuard);
      }

      _createClass(AuthorizationGuardGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }]);

      return AuthorizationGuardGuard;
    }();

    AuthorizationGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AuthorizationGuardGuard_Factory() {
        return new AuthorizationGuardGuard();
      },
      token: AuthorizationGuardGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/can-deactivate.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/can-deactivate.guard.ts ***!
    \************************************************/

  /*! exports provided: CanDeactivateGuard */

  /***/
  function srcAppSharedCanDeactivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function () {
      return CanDeactivateGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CanDeactivateGuard = /*#__PURE__*/function () {
      function CanDeactivateGuard() {
        _classCallCheck(this, CanDeactivateGuard);
      }

      _createClass(CanDeactivateGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canComponentBeDeactivated ? component.canComponentBeDeactivated() : true;
        }
      }]);

      return CanDeactivateGuard;
    }();

    CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function CanDeactivateGuard_Factory() {
        return new CanDeactivateGuard();
      },
      token: CanDeactivateGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/custom-validators.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/custom-validators.ts ***!
    \*********************************************/

  /*! exports provided: noSpaces, noSpaces2 */

  /***/
  function srcAppSharedCustomValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noSpaces", function () {
      return noSpaces;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noSpaces2", function () {
      return noSpaces2;
    });

    function noSpaces(control) {
      var spacesRegex = "^\\s{".concat(3, ",}$");
      var regex = new RegExp(spacesRegex);
      var isJustSpaces = regex.test(control.value);

      if (isJustSpaces) {
        return {
          somekey: true
        };
      }

      return null;
    }

    function noSpaces2(num) {
      return function (c) {
        var spacesRegex = "^\\s{".concat(num, ",}$");
        var regex = new RegExp(spacesRegex);
        var isJustSpaces = regex.test(c.value);

        if (isJustSpaces) {
          return {
            somekey: true
          };
        }

        return null;
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/hover-higlight.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/hover-higlight.directive.ts ***!
    \****************************************************/

  /*! exports provided: HoverHiglightDirective */

  /***/
  function srcAppSharedHoverHiglightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverHiglightDirective", function () {
      return HoverHiglightDirective;
    });

    var HoverHiglightDirective = /*#__PURE__*/function () {
      function HoverHiglightDirective(element) {
        _classCallCheck(this, HoverHiglightDirective);

        this.element = element; // console.log(this.element);
        // console.log(this.element.nativeElement);
        // this.element.nativeElement.style.backgroundColor = 'yellow';    
      }

      _createClass(HoverHiglightDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.element.nativeElement.style.color = this.appHighlightColor.foreColor;
          this.element.nativeElement.style.backgroundColor = this.appHighlightColor.backColor;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.element.nativeElement.style.color = null;
          this.element.nativeElement.style.backgroundColor = null;
        }
      }]);

      return HoverHiglightDirective;
    }();
    /***/

  },

  /***/
  "./src/app/shared/mixed-case.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/mixed-case.pipe.ts ***!
    \*******************************************/

  /*! exports provided: MixedCasePipe */

  /***/
  function srcAppSharedMixedCasePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MixedCasePipe", function () {
      return MixedCasePipe;
    });

    var MixedCasePipe = /*#__PURE__*/function () {
      function MixedCasePipe() {
        _classCallCheck(this, MixedCasePipe);
      }

      _createClass(MixedCasePipe, [{
        key: "transform",
        value: function transform(value) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          console.log(args);

          var v = _toConsumableArray(value); // tslint:disable-next-line:prefer-for-of


          for (var i = 0; i < value.length; i++) {
            if (i % 2 === 0) {
              v[i] = value[i].toUpperCase();
            } else {
              v[i] = value[i].toLowerCase();
            }
          }

          return v.join('');
        }
      }]);

      return MixedCasePipe;
    }();
    /***/

  },

  /***/
  "./src/app/shared/no-space.directive.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/no-space.directive.ts ***!
    \**********************************************/

  /*! exports provided: NoSpaceDirective */

  /***/
  function srcAppSharedNoSpaceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoSpaceDirective", function () {
      return NoSpaceDirective;
    });
    /* harmony import */


    var _custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-validators */
    "./src/app/shared/custom-validators.ts");

    var NoSpaceDirective = /*#__PURE__*/function () {
      function NoSpaceDirective() {
        _classCallCheck(this, NoSpaceDirective);
      }

      _createClass(NoSpaceDirective, [{
        key: "validate",
        value: function validate(control) {
          // return noSpaces(control);
          return this.num ? Object(_custom_validators__WEBPACK_IMPORTED_MODULE_0__["noSpaces2"])(this.num)(control) : null;
        }
      }]);

      return NoSpaceDirective;
    }();
    /***/

  }
}]);
//# sourceMappingURL=components-product-management-product-management-module-ngfactory-es5.js.map