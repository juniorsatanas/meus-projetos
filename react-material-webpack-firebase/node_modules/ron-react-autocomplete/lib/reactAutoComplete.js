(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactAutocomplete"] = factory(require("react"));
	else
		root["ReactAutocomplete"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	"use strict";

	var React = __webpack_require__(1);
	var joinClasses = __webpack_require__(2);

	var Autocomplete = React.createClass({ displayName: "Autocomplete",

	  propTypes: {
	    options: React.PropTypes.any,
	    search: React.PropTypes.func,
	    resultRenderer: React.PropTypes.oneOfType([React.PropTypes.component, React.PropTypes.func]),
	    value: React.PropTypes.object,
	    onChange: React.PropTypes.func,
	    onError: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return { search: searchArray };
	  },

	  getInitialState: function () {
	    var searchTerm = this.props.searchTerm ? this.props.searchTerm : this.props.value ? this.props.value.title : "";
	    return {
	      results: [],
	      showResults: false,
	      showResultsInProgress: false,
	      searchTerm: searchTerm,
	      focusedValue: null
	    };
	  },

	  getResultIdentifier: function (result) {
	    if (this.props.resultIdentifier === undefined) {
	      return result.id;
	    } else {
	      return result[this.props.resultIdentifier];
	    }
	  },


	  render: function () {
	    var className = joinClasses(this.props.className, "react-autocomplete-Autocomplete", this.state.showResults ? "react-autocomplete-Autocomplete--resultsShown" : undefined);
	    var style = {
	      position: "relative",
	      outline: "none"
	    };
	    return React.createElement("div", {
	      tabIndex: "1",
	      className: className,
	      onFocus: this.onFocus,
	      onBlur: this.onBlur,
	      style: style }, React.createElement("input", {
	      ref: "search",
	      className: "react-autocomplete-Autocomplete__search",
	      style: { width: "100%" },
	      onClick: this.showAllResults,
	      onChange: this.onQueryChange,
	      onFocus: this.showAllResults,
	      onBlur: this.onQueryBlur,
	      onKeyDown: this.onQueryKeyDown,
	      value: this.state.searchTerm }), React.createElement(Results, {
	      className: "react-autocomplete-Autocomplete__results",
	      onSelect: this.onValueChange,
	      onFocus: this.onValueFocus,
	      results: this.state.results,
	      focusedValue: this.state.focusedValue,
	      show: this.state.showResults,
	      renderer: this.props.resultRenderer,
	      label: this.props.label,
	      resultIdentifier: this.props.resultIdentifier }));
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var searchTerm = nextProps.searchTerm ? nextProps.searchTerm : nextProps.value ? nextProps.value.title : "";
	    this.setState({ searchTerm: searchTerm });
	  },

	  componentWillMount: function () {
	    this.blurTimer = null;
	  },

	  /**
	    * Show results for a search term value.
	    *
	    * This method doesn't update search term value itself.
	    *
	    * @param {Search} searchTerm
	    */
	  showResults: function (searchTerm) {
	    this.setState({ showResultsInProgress: true });
	    this.props.search(this.props.options, searchTerm.trim(), this.onSearchComplete);
	  },

	  showAllResults: function () {
	    if (!this.state.showResultsInProgress && !this.state.showResults) {
	      this.showResults("");
	    }
	  },

	  onValueChange: function (value) {
	    var state = {
	      value: value,
	      showResults: false
	    };

	    if (value) {
	      state.searchTerm = value.title;
	    }

	    this.setState(state);

	    if (this.props.onChange) {
	      this.props.onChange(value);
	    }
	  },

	  onSearchComplete: function (err, results) {
	    if (err) {
	      if (this.props.onError) {
	        this.props.onError(err);
	      } else {
	        throw err;
	      }
	    }

	    this.setState({
	      showResultsInProgress: false,
	      showResults: true,
	      results: results
	    });
	  },

	  onValueFocus: function (value) {
	    this.setState({ focusedValue: value });
	  },

	  onQueryChange: function (e) {
	    var searchTerm = e.target.value;
	    this.setState({
	      searchTerm: searchTerm,
	      focusedValue: null
	    });
	    this.showResults(searchTerm);
	  },

	  onFocus: function () {
	    if (this.blurTimer) {
	      clearTimeout(this.blurTimer);
	      this.blurTimer = null;
	    }
	    this.refs.search.getDOMNode().focus();
	  },

	  onBlur: function () {
	    // wrap in setTimeout so we can catch a click on results
	    this.blurTimer = setTimeout((function () {
	      if (this.isMounted()) {
	        this.setState({ showResults: false });
	      }
	    }).bind(this), 100);
	  },

	  onQueryKeyDown: function (e) {
	    if (e.key === "Enter") {
	      e.preventDefault();
	      if (this.state.focusedValue) {
	        this.onValueChange(this.state.focusedValue);
	      }
	    } else if (e.key === "ArrowUp" && this.state.showResults) {
	      e.preventDefault();
	      var prevIdx = Math.max(this.focusedValueIndex() - 1, 0);
	      this.setState({
	        focusedValue: this.state.results[prevIdx]
	      });
	    } else if (e.key === "ArrowDown") {
	      e.preventDefault();
	      if (this.state.showResults) {
	        var nextIdx = Math.min(this.focusedValueIndex() + (this.state.showResults ? 1 : 0), this.state.results.length - 1);
	        this.setState({
	          showResults: true,
	          focusedValue: this.state.results[nextIdx]
	        });
	      } else {
	        this.showAllResults();
	      }
	    }
	  },

	  focusedValueIndex: function () {
	    if (!this.state.focusedValue) {
	      return -1;
	    }
	    for (var i = 0, len = this.state.results.length; i < len; i++) {
	      if (this.getResultIdentifier(this.state.results[i]) === this.getResultIdentifier(this.state.focusedValue)) {
	        return i;
	      }
	    }
	    return -1;
	  }
	});

	var Results = React.createClass({ displayName: "Results",

	  getResultIdentifier: function (result) {
	    if (this.props.resultIdentifier === undefined) {
	      if (!result.id) {
	        throw "id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component";
	      }
	      return result.id;
	    } else {
	      return result[this.props.resultIdentifier];
	    }
	  },

	  render: function () {
	    var style = {
	      display: this.props.show ? "block" : "none",
	      position: "absolute",
	      listStyleType: "none"
	    };
	    var $__0 = this.props,
	        className = $__0.className,
	        props = (function (source, exclusion) {
	      var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {
	        throw new TypeError();
	      }for (var key in source) {
	        if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {
	          rest[key] = source[key];
	        }
	      }return rest;
	    })($__0, { className: 1 });

	    return React.createElement("ul", React.__spread({}, props, { style: style, className: className + " react-autocomplete-Results" }), this.props.results.map(this.renderResult));
	  },

	  renderResult: function (result) {
	    var focused = this.props.focusedValue && this.getResultIdentifier(this.props.focusedValue) === this.getResultIdentifier(result);
	    var Renderer = this.props.renderer || Result;
	    return React.createElement(Renderer, {
	      ref: focused ? "focused" : undefined,
	      key: this.getResultIdentifier(result),
	      result: result,
	      focused: focused,
	      onMouseEnter: this.onMouseEnterResult,
	      onClick: this.props.onSelect,
	      label: this.props.label });
	  },

	  componentDidUpdate: function () {
	    this.scrollToFocused();
	  },

	  componentDidMount: function () {
	    this.scrollToFocused();
	  },

	  componentWillMount: function () {
	    this.ignoreFocus = false;
	  },

	  scrollToFocused: function () {
	    var focused = this.refs && this.refs.focused;
	    if (focused) {
	      var containerNode = this.getDOMNode();
	      var scroll = containerNode.scrollTop;
	      var height = containerNode.offsetHeight;

	      var node = focused.getDOMNode();
	      var top = node.offsetTop;
	      var bottom = top + node.offsetHeight;

	      // we update ignoreFocus to true if we change the scroll position so
	      // the mouseover event triggered because of that won't have an
	      // effect
	      if (top < scroll) {
	        this.ignoreFocus = true;
	        containerNode.scrollTop = top;
	      } else if (bottom - scroll > height) {
	        this.ignoreFocus = true;
	        containerNode.scrollTop = bottom - height;
	      }
	    }
	  },

	  onMouseEnterResult: function (e, result) {
	    // check if we need to prevent the next onFocus event because it was
	    // probably caused by a mouseover due to scroll position change
	    if (this.ignoreFocus) {
	      this.ignoreFocus = false;
	    } else {
	      // we need to make sure focused node is visible
	      // for some reason mouse events fire on visible nodes due to
	      // box-shadow
	      var containerNode = this.getDOMNode();
	      var scroll = containerNode.scrollTop;
	      var height = containerNode.offsetHeight;

	      var node = e.target;
	      var top = node.offsetTop;
	      var bottom = top + node.offsetHeight;

	      if (bottom > scroll && top < scroll + height) {
	        this.props.onFocus(result);
	      }
	    }
	  }
	});

	var Result = React.createClass({ displayName: "Result",

	  getDefaultProps: function () {
	    return {
	      label: function (result) {
	        return result.title;
	      }
	    };
	  },

	  getLabel: function (result) {
	    if (typeof this.props.label === "function") {
	      return this.props.label(result);
	    } else if (typeof this.props.label === "string") {
	      return result[this.props.label];
	    }
	  },

	  render: function () {
	    var className = joinClasses({
	      "react-autocomplete-Result": true,
	      "react-autocomplete-Result--active": this.props.focused
	    });

	    return React.createElement("li", {
	      style: { listStyleType: "none" },
	      className: className,
	      onClick: this.onClick,
	      onMouseEnter: this.onMouseEnter }, React.createElement("a", null, this.getLabel(this.props.result)));
	  },

	  onClick: function () {
	    this.props.onClick(this.props.result);
	  },

	  onMouseEnter: function (e) {
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e, this.props.result);
	    }
	  },

	  shouldComponentUpdate: function (nextProps) {
	    return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;
	  }
	});

	/**
	* Search options using specified search term treating options as an array
	* of candidates.
	*
	* @param {Array.<Object>} options
	* @param {String} searchTerm
	* @param {Callback} cb
	*/
	function searchArray(options, searchTerm, cb) {
	  if (!options) {
	    return cb(null, []);
	  }

	  searchTerm = new RegExp(searchTerm, "i");

	  var results = [];

	  for (var i = 0, len = options.length; i < len; i++) {
	    if (searchTerm.exec(options[i].title)) {
	      results.push(options[i]);
	    }
	  }

	  cb(null, results);
	}

	module.exports = Autocomplete;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }
/******/ ])
});
;