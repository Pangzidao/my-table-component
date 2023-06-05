"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EmployeeTableModule = _interopRequireDefault(require("./EmployeeTable.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function EmployeeTable(props) {
  var _useState = (0, _react.useState)(5),
    _useState2 = _slicedToArray(_useState, 2),
    numberOfEmployeesDisplay = _useState2[0],
    setNumberOfEmployeesDisplay = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    orderBy = _useState6[0],
    setOrderBy = _useState6[1];
  var _useState7 = (0, _react.useState)("asc"),
    _useState8 = _slicedToArray(_useState7, 2),
    orderDirection = _useState8[0],
    setOrderDirection = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    filteredEmployees = _useState12[0],
    setFilteredEmployees = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    storedEmployees = _useState14[0],
    setStoredEmployees = _useState14[1];
  var mockedEmployees = props.employees;
  (0, _react.useEffect)(function () {
    var storedData = JSON.parse(localStorage.getItem('employees'));
    mockedEmployees ? setStoredEmployees(mockedEmployees) : storedData ? setStoredEmployees(storedData) : setStoredEmployees([]);
  }, []);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [numberOfEmployeesDisplay]);
  var handleOrderChange = function handleOrderChange(column) {
    if (orderBy === column) {
      // If the same column is clicked again, toggle the order direction
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set it as the order column and set the order direction to ascending
      setOrderBy(column);
      setOrderDirection("asc");
    }
  };
  var handleSearch = function handleSearch(e) {
    var value = e.target.value;
    setSearchValue(value);
    var filtered = storedEmployees.filter(function (employee) {
      for (var property in employee) {
        if (employee[property].toString().toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    setFilteredEmployees(filtered);
  };
  var orderedEmployees = _toConsumableArray(storedEmployees).sort(function (a, b) {
    if (orderBy) {
      var valueA = a[orderBy];
      var valueB = b[orderBy];
      if (valueA < valueB) return orderDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return orderDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
  var filteredAndOrderedEmployees = searchValue ? filteredEmployees : orderedEmployees;
  var totalEmployees = filteredAndOrderedEmployees.length;
  var totalPages = Math.ceil(totalEmployees / numberOfEmployeesDisplay);
  var handlePageChange = function handlePageChange(page) {
    setCurrentPage(page);
  };
  var startEntryIndex = (currentPage - 1) * numberOfEmployeesDisplay;
  var endEntryIndex = currentPage * numberOfEmployeesDisplay;
  var displayEmployees = filteredAndOrderedEmployees.slice(startEntryIndex, endEntryIndex);
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  };
  console.log(displayEmployees);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.tableOptions
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "numbersOfEmployeesDisplay"
  }, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    name: "numbersOfEmployeesDisplay",
    id: "numbersOfEmployeesDisplay",
    onChange: function onChange(e) {
      return setNumberOfEmployeesDisplay(parseInt(e.target.value));
    },
    defaultValue: "5"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/_react.default.createElement("option", {
    value: "20"
  }, "20")), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "numbersOfEmployeesDisplay"
  }, " entries")), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: searchValue,
    onChange: handleSearch,
    placeholder: "Search employees"
  })), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: _EmployeeTableModule.default.tableHead
  }, /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("firstName");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, /*#__PURE__*/_react.default.createElement("span", null, "First Name", " "), orderBy === "firstName" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("lastName");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Last Name", " ", orderBy === "lastName" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("startDate");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Start Date", " ", orderBy === "startDate" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("department");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Department", " ", orderBy === "department" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange('dateOfBirth');
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Date of Birth", ' ', orderBy === 'dateOfBirth' ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === 'asc' ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("street");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Street", " ", orderBy === "street" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("city");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "City", " ", orderBy === "city" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("state");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "State", " ", orderBy === "state" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))), /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleOrderChange("zipCode");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.headings
  }, "Zip Code", " ", orderBy === "zipCode" ? /*#__PURE__*/_react.default.createElement("span", null, orderDirection === "asc" ? /*#__PURE__*/_react.default.createElement("span", null, "\u25B2") : /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")) : /*#__PURE__*/_react.default.createElement("span", {
    className: _EmployeeTableModule.default.orderingArrows
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u25B2"), /*#__PURE__*/_react.default.createElement("span", null, "\u25BC")))))), /*#__PURE__*/_react.default.createElement("tbody", null, displayEmployees.map(function (employee, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("td", null, employee.firstName), /*#__PURE__*/_react.default.createElement("td", null, employee.lastName), /*#__PURE__*/_react.default.createElement("td", null, formatDate(employee.startDate)), /*#__PURE__*/_react.default.createElement("td", null, employee.department), /*#__PURE__*/_react.default.createElement("td", null, formatDate(employee.dateOfBirth)), /*#__PURE__*/_react.default.createElement("td", null, employee.street), /*#__PURE__*/_react.default.createElement("td", null, employee.city), /*#__PURE__*/_react.default.createElement("td", null, employee.state), /*#__PURE__*/_react.default.createElement("td", null, employee.zipCode));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.tableContainer
  }, /*#__PURE__*/_react.default.createElement("table", null), /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.pagination
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.pageInfo
  }, "Showing ", startEntryIndex + 1, " to ", Math.min(endEntryIndex, totalEmployees), " of ", totalEmployees, " entries"), /*#__PURE__*/_react.default.createElement("div", {
    className: _EmployeeTableModule.default.pageNavigation
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    },
    disabled: currentPage === 1,
    className: "".concat(_EmployeeTableModule.default.navigationButton, " ").concat(currentPage === 1 && _EmployeeTableModule.default.buttonDisabled)
  }, "Previous"), Array.from({
    length: totalPages
  }, function (_, index) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: index,
      className: "".concat(_EmployeeTableModule.default.pageButton, " ").concat(currentPage === index + 1 ? _EmployeeTableModule.default.activePage : ''),
      onClick: function onClick() {
        return handlePageChange(index + 1);
      }
    }, index + 1);
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages,
    className: "".concat(_EmployeeTableModule.default.navigationButton, " ").concat(currentPage === totalPages && _EmployeeTableModule.default.buttonDisabled)
  }, "Next")))));
}
var _default = EmployeeTable;
exports.default = _default;