(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "singleUpload",
  props: {
    value: String,
    type: String
  },
  computed: {
    imageUrl: function imageUrl() {
      return this.value;
    },
    imageName: function imageName() {
      if (this.value != null && this.value !== "") {
        return this.value.substr(this.value.lastIndexOf("/") + 1);
      } else {
        return null;
      }
    },
    fileList: function fileList() {
      return [{
        name: this.imageName,
        url: this.imageUrl
      }];
    },
    showFileList: {
      get: function get() {
        return this.value !== null && this.value !== "" && this.value !== undefined;
      },
      set: function set(newValue) {}
    }
  },
  data: function data() {
    return {
      url: "",
      headers: {},
      imagData: {},
      dialogVisible: false,
      uploading: false
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var token = this.$store.getters.token.token;
      this.headers = {
        Authorization: "Bearer ".concat(token)
      };
      this.imagData = {
        type: this.type
      };
      this.url = '/api/image';
    },
    emitInput: function emitInput(val) {
      this.$emit("input", val);
    },
    handleRemove: function handleRemove(file, fileList) {
      this.emitInput("");
    },
    handlePreview: function handlePreview(file) {
      this.dialogVisible = true;
    },
    handelBeforeUpload: function handelBeforeUpload(file) {
      this.uploading = true;
    },
    handleUploadSuccess: function handleUploadSuccess(res, file) {
      this.uploading = false;
      this.showFileList = true;
      this.fileList.pop();
      this.fileList.push({
        name: file.name,
        url: file.response.data
      });
      this.emitInput(this.fileList[0].url);
    },
    handleProgress: function handleProgress(event, file, fileList) {
      console.log('event', fileList);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_senior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/senior */ "./resources/js/api/senior.js");
/* harmony import */ var _libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/tableDataHandle */ "./resources/js/libs/tableDataHandle.js");
/* harmony import */ var _mixins_queryParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/queryParams */ "./resources/js/mixins/queryParams.js");
/* harmony import */ var _libs_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/permission */ "./resources/js/libs/permission.js");
/* harmony import */ var _seniorAddOrUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seniorAddOrUpdate */ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "senior",
  mixins: [_mixins_queryParams__WEBPACK_IMPORTED_MODULE_2__["queryParams"]],
  computed: {
    addSenior: function addSenior() {
      return Object(_libs_permission__WEBPACK_IMPORTED_MODULE_3__["hasPermission"])('senior.store');
    },
    updateSenior: function updateSenior() {
      return Object(_libs_permission__WEBPACK_IMPORTED_MODULE_3__["hasPermission"])('senior.update');
    },
    deleteSenior: function deleteSenior() {
      return Object(_libs_permission__WEBPACK_IMPORTED_MODULE_3__["hasPermission"])('senior.destroy');
    }
  },
  components: {
    AddOrUpdate: _seniorAddOrUpdate__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return _objectSpread(_objectSpread({}, Object(_libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_1__["tableDefaultData"])()), {}, {
      addOrUpdateVisible: false
    });
  },
  created: function created() {
    this.requestData();
  },
  methods: {
    requestData: function requestData() {
      var _this = this;

      this.loading = true;
      Object(_api_senior__WEBPACK_IMPORTED_MODULE_0__["getSeniorList"])(_objectSpread(_objectSpread({}, this.queryParams), {}, {
        page: this.queryPage
      })).then(function (response) {
        Object(_libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_1__["responseDataFormat"])(response, _this);
      });
    },
    // 新增-修改
    addOrUpdateHandle: function addOrUpdateHandle(id) {
      var _this2 = this;

      this.addOrUpdateVisible = true;
      this.$nextTick(function () {
        _this2.$refs.addOrUpdate.init(id);
      });
    },
    handleDelete: function handleDelete(index, row) {
      var that = this;
      this.$confirm("确定删除该条数据吗，删除后将无法找回？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function (_) {
        Object(_api_senior__WEBPACK_IMPORTED_MODULE_0__["deleteSenior"])(row.id).then(function (response) {
          Object(_libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_1__["deleteSuccess"])(index, that);
          that.requestData();
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_senior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/senior */ "./resources/js/api/senior.js");
/* harmony import */ var _components_upload_singleUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/upload/singleUpload */ "./resources/js/components/upload/singleUpload.vue");
/* harmony import */ var _libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/tableDataHandle */ "./resources/js/libs/tableDataHandle.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SeniorAddOrUpdate",
  components: {
    SingleUpload: _components_upload_singleUpload__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      visible: false,
      submitLoading: false,
      dataForm: {
        id: 0,
        name: "",
        intro: "",
        cover: "",
        regular: "",
        type: "1",
        status: "1",
        sequence: 0
      },
      dataRule: {
        name: [{
          required: true,
          message: '项目名不能为空',
          trigger: 'blur'
        }],
        intro: [{
          required: true,
          message: "简介不能为空",
          trigger: 'blur'
        }],
        cover: [{
          required: true,
          message: "图片不能为空",
          trigger: 'blur'
        }],
        regular: [{
          required: true,
          message: "规则与方法不能为空",
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    init: function init(id) {
      var _this = this;

      this.dataForm.id = id || 0;
      this.visible = true;
      this.$nextTick(function () {
        _this.$refs["dataForm"].resetFields();

        if (_this.dataForm.id) {
          _this.getData();
        }
      });
    },
    getData: function getData() {
      var _this2 = this;

      var loading = this.$loading({
        target: ".add-update",
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      Object(_api_senior__WEBPACK_IMPORTED_MODULE_0__["getSenior"])(this.dataForm.id).then(function (response) {
        _this2.dataForm.id = response.data.data.id;
        _this2.dataForm.name = response.data.data.name;
        _this2.dataForm.intro = response.data.data.intro;
        _this2.dataForm.cover = response.data.data.cover;
        _this2.dataForm.regular = response.data.data.regular;
        _this2.dataForm.sequence = response.data.data.sequence;
        _this2.dataForm.status = response.data.data.status.toString();
        loading.close();
      });
    },
    dataFormSubmit: function dataFormSubmit() {
      var _this3 = this;

      var that = this;
      this.$refs["dataForm"].validate(function (valid) {
        if (valid) {
          _this3.submitLoading = true;

          if (!_this3.dataForm.id) {
            _this3.handleAdd();
          } else {
            _this3.handleEdit();
          }
        }
      });
    },
    handleAdd: function handleAdd() {
      var _this4 = this;

      Object(_api_senior__WEBPACK_IMPORTED_MODULE_0__["addSenior"])(this.dataForm).then(function (response) {
        Object(_libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_2__["addOrUpdateSuccess"])(_this4, 'add');
      });
    },
    handleEdit: function handleEdit() {
      var _this5 = this;

      Object(_api_senior__WEBPACK_IMPORTED_MODULE_0__["editSenior"])(this.dataForm.id, this.dataForm).then(function (response) {
        Object(_libs_tableDataHandle__WEBPACK_IMPORTED_MODULE_2__["addOrUpdateSuccess"])(_this5, 'edit');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-upload",
        {
          attrs: {
            action: _vm.url,
            accept: "image/jpeg,image/png,image/gif",
            "list-type": "picture",
            name: "image",
            multiple: false,
            headers: _vm.headers,
            "show-file-list": _vm.showFileList,
            "file-list": _vm.fileList,
            "on-remove": _vm.handleRemove,
            "before-upload": _vm.handelBeforeUpload,
            "on-success": _vm.handleUploadSuccess,
            "on-preview": _vm.handlePreview,
            "on-progress": _vm.handleProgress,
            data: _vm.imagData
          }
        },
        [
          _c(
            "el-button",
            {
              attrs: { size: "small", type: "primary", loading: _vm.uploading }
            },
            [_vm._v("点击上传")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png/gif文件，且不超过10MB")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogVisible, "append-to-body": "" },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("img", {
            attrs: { width: "100%", src: _vm.fileList[0].url, alt: "" }
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-form",
        {
          attrs: { inline: true, model: _vm.queryParams, size: "mini" },
          nativeOn: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.requestData($event)
            }
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "关键字" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.queryParams.keyword,
                  callback: function($$v) {
                    _vm.$set(_vm.queryParams, "keyword", $$v)
                  },
                  expression: "queryParams.keyword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "状态" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择" },
                  model: {
                    value: _vm.queryParams.status,
                    callback: function($$v) {
                      _vm.$set(_vm.queryParams, "status", $$v)
                    },
                    expression: "queryParams.status"
                  }
                },
                [
                  _c("el-option", { attrs: { label: "全部", value: "" } }, [
                    _vm._v("全部")
                  ]),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "显示", value: "1" } }, [
                    _vm._v("显示")
                  ]),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "隐藏", value: "0" } }, [
                    _vm._v("隐藏")
                  ])
                ],
                1
              )
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
                  attrs: { type: "primary", icon: "el-icon-search" },
                  on: { click: _vm.requestData }
                },
                [_vm._v(_vm._s(_vm.$t("search")))]
              ),
              _vm._v(" "),
              _vm.addSenior
                ? _c(
                    "el-button",
                    {
                      attrs: { type: "primary", icon: "el-icon-plus" },
                      on: {
                        click: function($event) {
                          return _vm.addOrUpdateHandle()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("add")) + "\n            ")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
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
          attrs: { data: _vm.tableData, border: "" }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "name", label: _vm.$t("name") }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "intro", "show-overflow-tooltip": "", label: "简介" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "url",
              label: "图片",
              align: "center",
              width: "300px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("img", {
                      attrs: {
                        src: scope.row.cover,
                        "min-width": "90",
                        height: "70",
                        alt: ""
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "status",
              label: "状态",
              align: "center",
              width: "100px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.status === 1
                      ? _c(
                          "el-tag",
                          { attrs: { effect: "plain", type: "success" } },
                          [_vm._v("显示")]
                        )
                      : _c(
                          "el-tag",
                          { attrs: { effect: "plain", type: "info" } },
                          [_vm._v("隐藏")]
                        )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              prop: "sequence",
              label: "排序值",
              align: "center",
              width: "80"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { width: "180px", prop: "created_at", label: "创建时间" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              align: "center",
              fixed: "right",
              width: "180px",
              label: _vm.$t("actions")
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm.updateSenior
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "mini" },
                            on: {
                              click: function($event) {
                                return _vm.addOrUpdateHandle(scope.row.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("edit")) + "\n                "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.deleteSenior
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                return _vm.handleDelete(scope.$index, scope.row)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("delete")) + "\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.addOrUpdateVisible
        ? _c("add-or-update", {
            ref: "addOrUpdate",
            on: { refreshDataList: _vm.requestData }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      staticClass: "add-update",
      attrs: {
        title: !_vm.dataForm.id ? "新增" : "修改",
        "close-on-click-modal": false,
        visible: _vm.visible
      },
      on: {
        "update:visible": function($event) {
          _vm.visible = $event
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "dataForm",
          attrs: {
            model: _vm.dataForm,
            rules: _vm.dataRule,
            "label-width": "80px"
          },
          nativeOn: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.dataFormSubmit()
            }
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "项目名", prop: "name" } },
            [
              _c("el-input", {
                attrs: { placeholder: "项目名" },
                model: {
                  value: _vm.dataForm.name,
                  callback: function($$v) {
                    _vm.$set(_vm.dataForm, "name", $$v)
                  },
                  expression: "dataForm.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "简介", prop: "intro" } },
            [
              _c("el-input", {
                attrs: { placeholder: "简介" },
                model: {
                  value: _vm.dataForm.intro,
                  callback: function($$v) {
                    _vm.$set(_vm.dataForm, "intro", $$v)
                  },
                  expression: "dataForm.intro"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "图片", prop: "cover" } },
            [
              _c("single-upload", {
                attrs: { type: "senior" },
                model: {
                  value: _vm.dataForm.cover,
                  callback: function($$v) {
                    _vm.$set(_vm.dataForm, "cover", $$v)
                  },
                  expression: "dataForm.cover"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "规则与方法", prop: "regular" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.dataForm.regular,
                  callback: function($$v) {
                    _vm.$set(_vm.dataForm, "regular", $$v)
                  },
                  expression: "dataForm.regular"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "排序值", prop: "sequence" } },
            [
              _c("el-input", {
                attrs: { placeholder: "排序值", type: "number" },
                model: {
                  value: _vm.dataForm.sequence,
                  callback: function($$v) {
                    _vm.$set(_vm.dataForm, "sequence", $$v)
                  },
                  expression: "dataForm.sequence"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "状态", prop: "status" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择" },
                  model: {
                    value: _vm.dataForm.status,
                    callback: function($$v) {
                      _vm.$set(_vm.dataForm, "status", $$v)
                    },
                    expression: "dataForm.status"
                  }
                },
                [
                  _c("el-option", { attrs: { label: "显示", value: "1" } }),
                  _vm._v(" "),
                  _c("el-option", { attrs: { label: "隐藏", value: "0" } })
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
                  _vm.visible = false
                }
              }
            },
            [_vm._v("取消")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.submitLoading },
              on: {
                click: function($event) {
                  return _vm.dataFormSubmit()
                }
              }
            },
            [_vm._v("确定")]
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



/***/ }),

/***/ "./resources/js/api/senior.js":
/*!************************************!*\
  !*** ./resources/js/api/senior.js ***!
  \************************************/
/*! exports provided: getSeniorList, getSenior, addSenior, editSenior, deleteSenior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeniorList", function() { return getSeniorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSenior", function() { return getSenior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSenior", function() { return addSenior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSenior", function() { return editSenior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSenior", function() { return deleteSenior; });
/* harmony import */ var _libs_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/http */ "./resources/js/libs/http.js");

var basicRoute = '/api/senior';
var getSeniorList = function getSeniorList(params) {
  return _libs_http__WEBPACK_IMPORTED_MODULE_0__["default"].get(basicRoute, {
    params: params
  });
};
var getSenior = function getSenior(id) {
  return _libs_http__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(basicRoute, "/").concat(id));
};
var addSenior = function addSenior(data) {
  return _libs_http__WEBPACK_IMPORTED_MODULE_0__["default"].post(basicRoute, data);
};
var editSenior = function editSenior(id, data) {
  return _libs_http__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(basicRoute, "/").concat(id), data);
};
var deleteSenior = function deleteSenior(id) {
  return _libs_http__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(basicRoute, "/").concat(id));
};

/***/ }),

/***/ "./resources/js/components/upload/singleUpload.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/upload/singleUpload.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleUpload.vue?vue&type=template&id=3e41a83c& */ "./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c&");
/* harmony import */ var _singleUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _singleUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/upload/singleUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./singleUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/singleUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./singleUpload.vue?vue&type=template&id=3e41a83c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/singleUpload.vue?vue&type=template&id=3e41a83c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleUpload_vue_vue_type_template_id_3e41a83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/libs/permission.js":
/*!*****************************************!*\
  !*** ./resources/js/libs/permission.js ***!
  \*****************************************/
/*! exports provided: hasPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPermission", function() { return hasPermission; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");

var hasPermission = function hasPermission(name) {
  return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.permissions.indexOf(name) >= 0;
};

/***/ }),

/***/ "./resources/js/libs/tableDataHandle.js":
/*!**********************************************!*\
  !*** ./resources/js/libs/tableDataHandle.js ***!
  \**********************************************/
/*! exports provided: responseDataFormat, editSuccess, addSuccess, addOrUpdateSuccess, deleteSuccess, tableDefaultData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseDataFormat", function() { return responseDataFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSuccess", function() { return editSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return addSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateSuccess", function() { return addOrUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableDefaultData", function() { return tableDefaultData; });
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify */ "./resources/js/libs/notify.js");

function responseDataFormat(response, th) {
  th.tableData = response.data.data;
  var meta = response.data.meta;
  th.pagination = {
    currentPage: meta.current_page,
    pageSize: meta.per_page,
    total: meta.total,
    from: meta.from,
    lastPage: meta.last_page,
    to: meta.to
  };
  th.loading = false;
  th.queryParamsChange = false;
}
var editSuccess = function editSuccess(th) {
  _notify__WEBPACK_IMPORTED_MODULE_0__["default"].editSuccess(th);
  th.dialogEditFormVisible = false;
  Object.assign(th.nowRowData.row, th.editForm);
  th.tableData[th.nowRowData.index] = th.nowRowData.row;
  th.$refs['editForm'].resetFields();
};
var addSuccess = function addSuccess(th) {
  th.dialogAddFormVisible = false;
  _notify__WEBPACK_IMPORTED_MODULE_0__["default"].createSuccess(th);
  th.$refs['addForm'].resetFields();
};
var addOrUpdateSuccess = function addOrUpdateSuccess(th, type) {
  th.visible = false;
  th.submitLoading = false;

  if (type === 'add') {
    _notify__WEBPACK_IMPORTED_MODULE_0__["default"].createSuccess(th);
  } else {
    _notify__WEBPACK_IMPORTED_MODULE_0__["default"].editSuccess(th);
  }

  th.$refs['dataForm'].resetFields();
  th.$emit("refreshDataList");
};
var deleteSuccess = function deleteSuccess(index, th) {
  th.tableData.splice(index, 1);
  _notify__WEBPACK_IMPORTED_MODULE_0__["default"].deleteSuccess(th);
};
var tableDefaultData = function tableDefaultData() {
  return {
    queryParams: {},
    tableData: [],
    pagination: {
      currentPage: 1,
      pageSize: 15,
      total: 0,
      from: 1,
      lastPage: 1,
      to: 1
    },
    nowRowData: {
      index: 0,
      row: {}
    },
    dialogAddFormVisible: false,
    dialogEditFormVisible: false,
    formLabelWidth: '120px',
    loading: false
  };
};

/***/ }),

/***/ "./resources/js/mixins/queryParams.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/queryParams.js ***!
  \********************************************/
/*! exports provided: queryParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return queryParams; });
var queryParams = {
  data: function data() {
    return {
      queryParamsChange: false
    };
  },
  methods: {},
  watch: {
    queryParams: {
      handler: function handler() {
        this.queryParamsChange = true;
      },
      deep: true
    }
  },
  computed: {
    queryPage: function queryPage() {
      return this.queryParamsChange ? 1 : this.pagination.currentPage;
    }
  }
};

/***/ }),

/***/ "./resources/js/views/admin/senior/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/senior/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0db0ae9c& */ "./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/senior/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0db0ae9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/index.vue?vue&type=template&id=0db0ae9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0db0ae9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/admin/senior/seniorAddOrUpdate.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true& */ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true&");
/* harmony import */ var _seniorAddOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seniorAddOrUpdate.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _seniorAddOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d212a5d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/senior/seniorAddOrUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seniorAddOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./seniorAddOrUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seniorAddOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/senior/seniorAddOrUpdate.vue?vue&type=template&id=5d212a5d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seniorAddOrUpdate_vue_vue_type_template_id_5d212a5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);