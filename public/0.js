webpackJsonp([0],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(214)
/* template */
var __vue_template__ = __webpack_require__(215)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bdc8b8e", Component.options)
  } else {
    hotAPI.reload("data-v-6bdc8b8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("57d13055", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bdc8b8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bdc8b8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n#logo {\n    text-align: center;\n}\n.el-header{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_cookie_js__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validate = function validate(rule, value, callback) {
            if (value === '') {
                callback(new Error('内容不能为空'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                email: '',
                password: ''
            },
            rules2: {
                password: [{ validator: validatePass, trigger: 'blur' }],
                email: [{ validator: validate, trigger: 'blur' }]
            },
            loading: false,
            visible: false
        };
    },
    mounted: function mounted() {
        this.$emit('visible', false);
    },

    methods: {
        submitForm: function submitForm(formName) {
            var _this = this;

            this.loading = true, this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this.$ajax.post('/api/auth/login', {
                        email: _this.ruleForm2.email,
                        password: _this.ruleForm2.password
                    }).then(function (res) {
                        console.log(res);
                        if (res.data.code == 1) {

                            _this.$message.success("登陆成功！");
                            _this.$emit('child-say', false);
                            Object(__WEBPACK_IMPORTED_MODULE_0__js_cookie_js__["c" /* setCookie */])('username', _this.ruleForm2.email, 1000 * 60);
                            setTimeout(function () {
                                this.loading = false, this.$router.push('/');
                            }.bind(_this), 1000);
                        } else {
                            _this.loading = false, _this.$message.error("登陆失败！");
                        }
                    }).catch(function (error) {
                        _this.loading = false, _this.$message.error("登陆失败！");
                    });
                } else {
                    _this.loading = false, console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-main",
    [
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c("el-col", { attrs: { span: 12, offset: 10 } }, [
            _c("img", {
              attrs: { src: __webpack_require__(216), id: "logo" }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-col",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              attrs: { span: 12, offset: 6 }
            },
            [
              _c(
                "el-form",
                {
                  ref: "ruleForm2",
                  staticClass: "demo-ruleForm",
                  attrs: {
                    model: _vm.ruleForm2,
                    "status-icon": "",
                    rules: _vm.rules2,
                    "label-width": "100px"
                  }
                },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "邮箱", prop: "email" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.ruleForm2.email,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm2, "email", $$v)
                          },
                          expression: "ruleForm2.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "密码", prop: "password" } },
                    [
                      _c("el-input", {
                        attrs: { type: "password", "auto-complete": "off" },
                        model: {
                          value: _vm.ruleForm2.password,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm2, "password", $$v)
                          },
                          expression: "ruleForm2.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.submitForm("ruleForm2")
                            }
                          }
                        },
                        [_vm._v("提交")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          on: {
                            click: function($event) {
                              _vm.resetForm("ruleForm2")
                            }
                          }
                        },
                        [_vm._v("重置")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bdc8b8e", module.exports)
  }
}

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "/images/logo.png?82b9c7a5a3f405032b1db71a25f67021";

/***/ })

});