webpackJsonp([1],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(217)
/* template */
var __vue_template__ = __webpack_require__(220)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/components/UserList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c9e9bf4", Component.options)
  } else {
    hotAPI.reload("data-v-3c9e9bf4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_UserList_css__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_UserList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_UserList_css__);
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

/*引入公共样式*/

//import UserEdit from './UserEdit.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'UserList',
    /*   components: {
           UserEdit
       },*/
    data: function data() {
        return {
            userList: [],
            dialogFormVisible: false,
            formLabelWidth: '120px',
            dialogVisible: false,
            user_id: '',
            loading: false
        };
    },

    mounted: function mounted() {
        this.userdata();
    },
    methods: {
        userdata: function userdata() {
            var _this = this;

            this.loading = true;
            this.userList = [];
            this.$ajax({
                method: 'get',
                url: '/api/auth/userList'
            }).then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    _this.userList.push({
                        'id': data[i].id,
                        'name': data[i].name,
                        'role': "管理员",
                        'email': data[i].email,
                        'creat_time': data[i].created_at,
                        'update_time': data[i].updated_at,
                        'desc': data[i].portrait
                    });
                }
                _this.loading = false;
            });
        },
        handleEdit: function handleEdit(index, row) {
            this.user_id = row.id;
            this.dialogFormVisible = true;
        },
        handleDelete: function handleDelete() {
            var _this2 = this;

            this.$ajax({
                method: 'get',
                url: '/api/auth/userDel?userid=' + this.user_id
            }).then(function (res) {
                _this2.$message.success("冻结成功！");
            }).catch(function (error) {
                console.log(error);
                _this2.$message.error(error);
            });
            this.dialogVisible = false;
            this.userdata();
        },
        open_DialogVisible: function open_DialogVisible(index, row) {
            this.dialogVisible = true;
            this.user_id = row.id;
        },
        handleClose: function handleClose(done) {
            this.$confirm('确认关闭？').then(function (_) {
                done();
            }).catch(function (_) {});
        }
    }
});

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(81)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./UserList.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./UserList.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".demo-table-expand {\r\n    font-size: 0;\r\n}\r\n.demo-table-expand label {\r\n    width: 90px;\r\n    color: #99a9bf;\r\n}\r\n.demo-table-expand .el-form-item {\r\n    margin-right: 0;\r\n    margin-bottom: 0;\r\n    width: 50%;\r\n}", ""]);

// exports


/***/ }),

/***/ 220:
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
          _c(
            "el-header",
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    {
                      staticStyle: { "margin-top": "15px" },
                      attrs: { span: 24 }
                    },
                    [
                      _c(
                        "el-breadcrumb",
                        { attrs: { separator: "/" } },
                        [
                          _c(
                            "el-breadcrumb-item",
                            { attrs: { to: { path: "/" } } },
                            [_vm._v("首页")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-breadcrumb-item",
                            { attrs: { to: { path: "/UserList" } } },
                            [_vm._v("系统中心")]
                          ),
                          _vm._v(" "),
                          _c("el-breadcrumb-item", [_vm._v("用户列表")])
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
          ),
          _vm._v(" "),
          _c(
            "el-main",
            [
              _c(
                "el-table",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ],
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.userList }
                },
                [
                  _c("el-table-column", {
                    attrs: { type: "expand" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c(
                              "el-form",
                              {
                                staticClass: "demo-table-expand",
                                attrs: { "label-position": "left", inline: "" }
                              },
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "用户账号" } },
                                  [_c("span", [_vm._v(_vm._s(props.row.name))])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "用户ID" } },
                                  [_c("span", [_vm._v(_vm._s(props.row.id))])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "用户角色" } },
                                  [_c("span", [_vm._v(_vm._s(props.row.role))])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "邮箱地址" } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(props.row.email))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "生成时间" } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(props.row.creat_time))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "修改时间" } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(props.row.update_time))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "描述" } },
                                  [_c("span", [_vm._v(_vm._s(props.row.desc))])]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", { attrs: { label: "ID", prop: "id" } }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "账号", prop: "name" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "创建时间", prop: "creat_time" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "操作" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "el-button",
                              {
                                attrs: { type: "danger", size: "mini" },
                                on: {
                                  click: function($event) {
                                    _vm.open_DialogVisible(
                                      scope.$index,
                                      scope.row
                                    )
                                  }
                                }
                              },
                              [_vm._v("删除")]
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-dialog",
                {
                  attrs: {
                    title: "提示",
                    visible: _vm.dialogVisible,
                    width: "30%",
                    "before-close": _vm.handleClose
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.dialogVisible = $event
                    }
                  }
                },
                [
                  _c("span", [_vm._v("是否确认冻结改用户")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer"
                    },
                    [
                      _c(
                        "el-button",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialogVisible = false
                            }
                          }
                        },
                        [_vm._v("取 消")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.handleDelete()
                            }
                          }
                        },
                        [_vm._v("确 定")]
                      )
                    ],
                    1
                  )
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-3c9e9bf4", module.exports)
  }
}

/***/ })

});