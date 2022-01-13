exports.id = "component---src-pages-gui-pack-tsx";
exports.ids = ["component---src-pages-gui-pack-tsx"];
exports.modules = {

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "noAuto": () => (/* binding */ noAuto),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "toHtml": () => (/* binding */ toHtml),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "library": () => (/* binding */ library),
/* harmony export */   "dom": () => (/* binding */ dom),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition)
/* harmony export */ });
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.4\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};




/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeIcon": () => (/* binding */ FontAwesomeIcon)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([0, 90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, (react__WEBPACK_IMPORTED_MODULE_2___default().createElement));




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/fslightbox-react/index.js":
/*!************************************************!*\
  !*** ./node_modules/fslightbox-react/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=__webpack_require__(/*! react */ "react")},function(e,t){e.exports=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")},function(e,t,n){"use strict";n.r(t);var r="fslightbox-",o="".concat(r,"styles"),i="".concat(r,"cursor-grabbing"),a="".concat(r,"full-dimension"),s="".concat(r,"flex-centered"),c="".concat(r,"open"),l="".concat(r,"transform-transition"),u="".concat(r,"absoluted"),d="".concat(r,"fade-in"),f="".concat(r,"fade-out"),p=d+"-strong",h=f+"-strong",g="".concat(r,"opacity-1"),m="".concat(r,"source"),v="".concat(m,"-inner");function b(){var e=document.createElement("style");e.className=o,e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader .fslightbox-loader-child-1{animation-delay:-.45s}.fslightbox-loader .fslightbox-loader-child-2{animation-delay:-.3s}.fslightbox-loader .fslightbox-loader-child-3{animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")),document.head.appendChild(e)}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"object"===("undefined"==typeof document?"undefined":x(document))&&b();var y=n(0),S=n.n(y),w=n(1),L=n.n(w),A=function(e){var t=e.size,n=e.viewBox,o=e.d;return S.a.createElement("svg",{width:t,height:t,viewBox:n,xmlns:"http://www.w3.org/2000/svg"},S.a.createElement("path",{className:"".concat(r,"svg-path"),d:o}))},E=function(e){var t=e.onClick,n=e.viewBox,o=e.size,i=e.d,a=e.title;return S.a.createElement("div",{onClick:t,className:"".concat(r,"toolbar-button ").concat(s),title:a},S.a.createElement(A,{viewBox:n,size:o,d:i}))};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(e){var t=e.fsLightbox,n=t.componentsServices.toolbarButtons.fullscreen,r=t.core.fullscreenToggler,o=r.enterFullscreen,i=r.exitFullscreen,a=O(Object(y.useState)(!1),2),s=a[0],c=a[1];return n.get=function(){return s},n.set=c,S.a.createElement(E,{onClick:function(){s?i():o()},viewBox:s?"0 0 950 1024":"0 0 18 18",size:s?"24px":"20px",d:s?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:s?"Exit fullscreen":"Enter fullscreen"})},F=function(e){var t=e.fsLightbox.core.lightboxCloser.closeLightbox;return S.a.createElement(E,{onClick:t,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},T=function(e){var t=e.fsLightbox;return S.a.createElement("div",{className:"".concat(r,"toolbar")},S.a.createElement(I,{fsLightbox:t}),S.a.createElement(F,{fsLightbox:t}))};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=function(e){var t=e.fsLightbox,n=t.componentsServices,o=t.props.sources,i=t.stageIndexes,a=j(Object(y.useState)(i.current+1),2),s=a[0],c=a[1];n.setSlideNumber=function(e){c(e)};var l=S.a.createRef(),u=S.a.createRef();return Object(y.useEffect)((function(){u.current.offsetWidth>55&&(l.current.style.justifyContent="flex-start")}),[]),S.a.createElement("div",{ref:l,className:"".concat(r,"slide-number-container")},S.a.createElement("div",{ref:u,className:"fslightbox-flex-centered"},S.a.createElement("span",null,s),S.a.createElement("span",{className:"".concat(r,"slash")}),S.a.createElement("span",null,o.length)))},W=function(e){var t=e.fsLightbox;return S.a.createElement("div",{className:"".concat(r,"nav")},S.a.createElement(T,{fsLightbox:t}),t.props.sources.length>1&&S.a.createElement(M,{fsLightbox:t}))},k=function(){return S.a.createElement("div",{className:"".concat(r,"loader")},S.a.createElement("div",{className:"".concat(r,"loader-child-1")}),S.a.createElement("div",{className:"".concat(r,"loader-child-2")}),S.a.createElement("div",{className:"".concat(r,"loader-child-3")}),S.a.createElement("div",{className:"".concat(r,"loader-child-4")}))};function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=function(e){var t=e.fsLightbox,n=t.componentsServices.updateSourceDirectWrapperCollection,r=t.core.stageManager.isSourceInStage,o=t.elements,i=o.sourcesComponents,a=o.sourceAnimationWrappers,s=t.props.loadOnlyCurrentSource,c=t.stageIndexes.current,l=e.i,u=N(Object(y.useState)(!1),2),d=u[0],f=u[1];return n[l]=function(){f(!d)},S.a.createElement("div",{ref:a[l],className:v},l===c||!s&&r(l)?i[l]:null)};function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var U=function(e){var t=e.fsLightbox,n=e.i,r=t.componentsServices.hideSourceLoaderCollection,o=t.elements.sourceMainWrappers,i=H(Object(y.useState)(!1),2),c=i[0],l=i[1];return r[n]=function(){return l(!0)},S.a.createElement("div",{ref:o[n],className:"".concat(u," ").concat(a," ").concat(s)},!c&&S.a.createElement(k,null),S.a.createElement(R,{fsLightbox:t,i:n}))},X=function(e){for(var t=e.fsLightbox,n=t.core.slideSwipingDown.listener,r=t.elements.sourceMainWrappersWrapper,o=t.props.sources,i=[],s=0;s<o.length;s++)i.push(S.a.createElement(U,{fsLightbox:t,i:s,key:s}));return S.a.createElement("div",{className:"".concat(u," ").concat(a),ref:r,onMouseDown:n,onTouchStart:n},i)};function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e){var t=e.fsLightbox.componentsServices,n=B(Object(y.useState)(!1),2),o=n[0],i=n[1];return t.showSlideSwipingHovererIfNotYet=function(){o||i(!0)},t.hideSlideSwipingHovererIfShown=function(){o&&i(!1)},o&&S.a.createElement("div",{className:"".concat(r,"slide-swiping-hoverer ").concat(a," ").concat(u)})};function Y(e){var t=e.props.disableLocalStorage;if(!t){var n=localStorage.getItem("fslightbox-scrollbar-width");if(n)return n}var r=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),o=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(r);var i=r.offsetWidth;r.appendChild(o);var a=o.offsetWidth;document.body.removeChild(r);var s=i-a;return t||localStorage.setItem("fslightbox-scrollbar-width",s.toString()),s}function q(e){var t=e.core.lightboxOpener,n=e.data,r=e.props.openOnMount;document.getElementsByClassName(o).length||b(),n.scrollbarWidth=Y(e),r&&t.initializeAndOpenLightbox()}var $=function(e){var t=e.onClick,n=e.name,o=e.d,i=n.charAt(0).toUpperCase()+n.slice(1),a="".concat(r,"slide-btn");return S.a.createElement("div",{onClick:t,title:"".concat(i," slide"),className:"".concat(a,"-container ").concat(a,"-").concat(n,"-container")},S.a.createElement("div",{className:"".concat(a," ").concat(s)},S.a.createElement(A,{viewBox:"0 0 20 20",size:"20px",d:o})))};function Q(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.lightboxCloser,o=n.lightboxOpener,i=n.slideIndexChanger,a=e.data,s=e.stageIndexes;this.runTogglerUpdateActions=function(){t.get()?r.closeLightbox():a.isInitialized?o.openLightbox():o.initializeAndOpenLightbox()},this.runCurrentStageIndexUpdateActionsFor=function(e){e!==s.current&&(t.get()?i.jumpTo(e):s.current=e)}}function J(e){var t=e.core.lightboxUpdater,n=(0,e.resolve)(Q);t.handleUpdate=function(t){var r=e.props;void 0!==r.source?n.runCurrentStageIndexUpdateActionsFor(r.sources.indexOf(r.source)):void 0!==r.sourceIndex?n.runCurrentStageIndexUpdateActionsFor(r.sourceIndex):void 0!==r.slide&&n.runCurrentStageIndexUpdateActionsFor(r.slide-1),t.toggler!==r.toggler&&n.runTogglerUpdateActions()}}function G(e){var t,n=e.props,r=0,o={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:i(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===o[n]&&(r--,"invalid"!==e?o[n]=e:delete o[n],0===r&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,o),localStorage.setItem("fslightbox-types",JSON.stringify(t))))};var i=function(e){r++,o[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=i)}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props,i=o.customAttributes,a=o.sources,s=e.i;return S.a.createElement("img",Z({onLoad:n[s].handleImageLoad,className:m,ref:r[s],src:a[s]},i&&i[s]?i[s]:{}))};function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var te=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,o=t.elements.sources,i=t.props,a=i.customAttributes,s=i.sources,c=t.timeout,l=e.i;return c(n[l].handleNotMetaDatedVideoLoad,3e3),S.a.createElement("video",ee({onLoadedMetadata:n[l].handleVideoLoad,className:"".concat(m," ").concat(r,"video"),controls:!0,ref:o[l]},a&&a[l]?a[l]:{}),S.a.createElement("source",{src:s[l]}))};function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var re=function(e){var t,n=e.fsLightbox,o=n.elements.sources,i=n.collections.sourceLoadHandlers,a=n.props,s=a.customAttributes,c=a.sources,l=e.i;return Object(y.useEffect)(i[l].handleYoutubeLoad),S.a.createElement("iframe",ne({ref:o[l],className:"".concat(m," ").concat(r,"youtube-iframe"),src:"https://www.youtube.com/embed/".concat((t=c[l],t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2])),allowFullScreen:!0},s&&s[l]?s[l]:{}))},oe=function(e){var t=e.fsLightbox,n=t.componentsServices.hideSourceLoaderCollection,o=t.elements.sourceMainWrappers,i=e.i;return Object(y.useEffect)((function(){n[i](),o[i].current.classList.add(p)})),S.a.createElement("div",{className:"".concat(r,"invalid-file-wrapper ").concat(s)},"Invalid source")},ie=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props.sources,i=e.i;Object(y.useEffect)(n[i].handleCustomLoad);var a=o[i].props.className;return S.a.cloneElement(o[i],{ref:r[i],className:a?"".concat(a," ").concat(m):m})};function ae(e){var t=e.componentsServices,n=t.isLightboxOpenManager,r=t.updateSourceDirectWrapperCollection,o=e.elements.sourcesComponents;this.runActionsForSourceTypeAndIndex=function(t,i){var a;switch(t){case"image":a=K;break;case"video":a=te;break;case"youtube":a=re;break;case"custom":a=ie;break;default:a=oe}o[i]=S.a.createElement(a,{fsLightbox:e,i:i}),n.get()&&r[i]()}}function se(){var e,t,n,r={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function o(){if(4!==n.readyState){if(2===n.readyState){var e;switch(r.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(i){if(r.isUrlYoutubeOne(e))return i("youtube");t=i,(n=new XMLHttpRequest).onreadystatechange=o,n.open("GET",e,!0),n.send()}}function ce(e,t,n){var r=e.props,o=r.types,i=r.type,a=r.sources,s=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return o&&o[e]?t=o[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){var r=s(se);r.setUrlToCheck(a[e]),r.getSourceType((function(r){t.handleReceivedSourceTypeForUrl(r,a[e]),n.runActionsForSourceTypeAndIndex(r,e)}))}}function le(e,t){var n=e.current.classList;n.contains(t)&&n.remove(t)}function ue(e){var t=e.core,n=t.lightboxCloser,r=t.fullscreenToggler,o=t.slideChangeFacade;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),r.enterFullscreen()}}}function de(e){return e.touches?e.touches[0].screenX:e.screenX}function fe(e){var t=e.collections.sourceMainWrapperTransformers,n=e.componentsServices,r=e.elements.container,o=e.slideSwipingProps,a=e.stageIndexes;this.runActionsForEvent=function(e){n.showSlideSwipingHovererIfNotYet(),r.current.classList.add(i),o.swipedX=de(e)-o.downScreenX,s(a.current,"zero"),void 0!==a.previous&&o.swipedX>0?s(a.previous,"negative"):void 0!==a.next&&o.swipedX<0&&s(a.next,"positive")};var s=function(e,n){t[e].byValue(o.swipedX)[n]()}}function pe(e){var t,n=e.props.sources,r=e.resolve,o=e.slideSwipingProps,i=r(fe),a=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isSwiping&&a()&&i.runActionsForEvent(e)}}function he(e){var t=e.collections.sourceMainWrapperTransformers,n=e.core.slideIndexChanger,r=e.elements.sourceMainWrappers,o=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===o.previous||(i("positive"),n.changeTo(o.previous)),i("zero")},this.runNegativeSwipedXActions=function(){void 0===o.next||(i("negative"),n.changeTo(o.next)),i("zero")};var i=function(e){r[o.current].current.classList.add(l),t[o.current][e]()}}function ge(e){var t=e.componentsServices,n=e.core.lightboxCloser,r=e.elements.container,o=e.resolve,a=e.slideSwipingProps,s=o(he);this.runNoSwipeActions=function(){t.hideSlideSwipingHovererIfShown(),a.isSourceDownEventTarget||n.closeLightbox(),a.isSwiping=!1},this.runActions=function(){a.swipedX>0?s.runPositiveSwipedXActions():s.runNegativeSwipedXActions(),t.hideSlideSwipingHovererIfShown(),r.current.classList.remove(i),a.isSwiping=!1}}function me(e){var t=e.resolve,n=e.slideSwipingProps,r=t(ge);this.listener=function(){n.isSwiping&&(n.swipedX?r.runActions():r.runNoSwipeActions())}}function ve(e){return!e.touches||e.touches.length<=1}function be(e){var t=e.core.classFacade,n=e.elements.sources,r=e.slideSwipingProps,o=e.stageIndexes;this.runActions=function(e){"VIDEO"===e.target.tagName||e.touches||e.preventDefault(),r.isSwiping=!0,r.downScreenX=de(e),r.swipedX=0;var i=n[o.current].current;i&&i.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1,t.removeFromEachElementClassIfContains("sourceMainWrappers",l)}}function xe(e){var t,n,r;n=(t=e).core.classFacade,r=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<r[e].length;n++)le(r[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices.toolbarButtons.fullscreen,n=e.core.fullscreenToggler;n.enterFullscreen=function(){t.set(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.set(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t,n=e.core,r=n.globalEventsController,o=n.windowResizeActioner,i=e.resolve,a=i(ue),s=i(pe),c=i(me);r.attachListeners=function(){t=function(e,t){return function(){t.apply(void 0,arguments)&&e.apply(void 0,arguments)}}(s.listener,ve),document.addEventListener("mousemove",s.listener),document.addEventListener("touchmove",t,{passive:!0}),document.addEventListener("mouseup",c.listener),document.addEventListener("touchend",c.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",a.listener)},r.removeListeners=function(){document.removeEventListener("mousemove",s.listener),document.removeEventListener("touchmove",t),document.removeEventListener("mouseup",c.listener),document.removeEventListener("touchend",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",a.listener)}}(e),function(e){var t=e.core,n=t.lightboxCloser,r=t.lightboxCloseActioner;n.closeLightbox=function(){r.isLightboxFadingOut||r.runActions()}}(e),function(e){var t=e.componentsServices,n=t.toolbarButtons.fullscreen,r=t.isLightboxOpenManager,o=e.core,i=o.eventsDispatcher,a=o.fullscreenToggler,s=o.globalEventsController,l=o.lightboxCloseActioner,u=o.scrollbarRecompensor,d=e.elements.container,f=e.props,p=e.slideSwipingProps,g=e.timeout;l.isLightboxFadingOut=!1,l.runActions=function(){l.isLightboxFadingOut=!0,d.current.classList.add(h),s.removeListeners(),f.exitFullscreenOnClose&&n.get()&&a.exitFullscreen(),g((function(){l.isLightboxFadingOut=!1,p.isSwiping=!1,d.current.classList.remove(h),document.documentElement.classList.remove(c),u.removeRecompense(),r.set(!1),i.dispatch("onClose")}),250)}}(e),Oe(e),function(e){var t=e.collections.sourceMainWrapperTransformers,n=e.core,r=n.eventsDispatcher,o=n.lightboxOpenActioner,i=n.globalEventsController,a=n.scrollbarRecompensor,s=n.sourceDisplayFacade,l=n.stageManager,u=n.windowResizeActioner,d=e.stageIndexes;o.runInitializedLightboxActions=function(){l.updateStageIndexes(),s.displaySourcesWhichShouldBeDisplayed(),document.documentElement.classList.add(c),a.addRecompense(),i.attachListeners(),u.runActions(),t[d.current].zero(),r.dispatch("onOpen")}}(e),J(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?r():window.addEventListener("load",(function(){r(),n.addRecompense=r}))};var r=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,r=t.slideIndexChanger,o=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){r.jumpTo(o.getPreviousSlideIndex())},n.changeToNext=function(){r.jumpTo(o.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.collections.sourceMainWrapperTransformers,n=e.componentsServices,r=e.core,o=r.classFacade,i=r.slideIndexChanger,a=r.sourceDisplayFacade,s=r.stageManager,c=e.elements.sourceAnimationWrappers,u=e.getQueuedAction,h=e.stageIndexes,g=e.timeout,m=u((function(){o.removeFromEachElementClassIfContains("sourceAnimationWrappers",f)}),250);i.changeTo=function(e){h.current=e,s.updateStageIndexes(),n.setSlideNumber(e+1),a.displaySourcesWhichShouldBeDisplayed()},i.jumpTo=function(e){var n=h.current;i.changeTo(e),o.removeFromEachElementClassIfContains("sourceMainWrappers",l),le(c[n],p),le(c[n],d),c[n].current.classList.add(f),le(c[e],p),le(c[e],f),c[e].current.classList.add(d),m(),t[e].zero(),g((function(){n!==h.current&&t[n].negative()}),220)}}(e),function(e){var t=e.core.slideSwipingDown,n=e.resolve,r=e.slideSwipingProps,o=n(be);t.listener=function(e){e.touches&&e.touches.length>1?r.isSwiping=!1:o.runActions(e)}}(e),function(e){var t=e.core.sourceDisplayFacade,n=e.componentsServices.updateSourceDirectWrapperCollection,r=e.stageIndexes,o=e.props.loadOnlyCurrentSource;t.displaySourcesWhichShouldBeDisplayed=function(){if(o)n[r.current]();else for(var e in r)void 0!==r[e]&&n[r[e]]()}}(e),function(e){var t=e.core.stageManager,n=e.props.sources,r=e.stageIndexes,o=n.length-1;t.getPreviousSlideIndex=function(){return 0===r.current?o:r.current-1},t.getNextSlideIndex=function(){return r.current===o?0:r.current+1},t.updateStageIndexes=0===o?function(){}:1===o?function(){0===r.current?(r.next=1,delete r.previous):(r.previous=0,delete r.next)}:function(){r.previous=t.getPreviousSlideIndex(),r.next=t.getNextSlideIndex()},t.isSourceInStage=o<=2?function(){return!0}:function(e){var t=r.current;if(0===t&&e===o||t===o&&0===e)return!0;var n=t-e;return-1===n||0===n||1===n}}(e),function(e){var t=e.collections,n=t.sourceMainWrapperTransformers,r=t.sourceSizers,o=e.core.windowResizeActioner,i=e.data,a=e.elements,s=a.sources,c=a.sourceMainWrappers,u=e.stageIndexes;o.runActions=function(){innerWidth<992?i.maxSourceWidth=innerWidth:i.maxSourceWidth=.9*innerWidth,i.maxSourceHeight=.9*innerHeight;for(var e=0;e<s.length;e++)le(c[e],l),e!==u.current&&n[e].negative(),r[e]&&s[e].current&&r[e].adjustSize()}}(e)}function ye(e){for(var t=e.props.sources,n=[],r=0;r<t.length;r++)n.push(S.a.createRef());return n}function Se(e,t,n){for(var r=0;r<e.props.sources.length;r++)e.collections[t][r]=e.resolve(n,[r])}function we(e,t){var n=this,r=e.elements.sourceMainWrappers,o=e.props.slideDistance+1,i=0;this.byValue=function(e){return i=e,n},this.negative=function(){a(-s())},this.zero=function(){a(0)},this.positive=function(){a(s())};var a=function(e){r[t].current.style.transform="translateX(".concat(e+i,"px)"),i=0},s=function(){return o*innerWidth}}function Le(e,t,n,r){var o=e.data,i=e.elements.sources,a=n/r,s=0;this.adjustSize=function(){if((s=o.maxSourceWidth/a)<o.maxSourceHeight)return n<o.maxSourceWidth&&(s=r),c();s=r>o.maxSourceHeight?o.maxSourceHeight:r,c()};var c=function(){var e=i[t].current.style;e.width=s*a+"px",e.height=s+"px"}}function Ae(e,t){var n=this,r=e.collections.sourceSizers,o=e.componentsServices.hideSourceLoaderCollection,i=e.elements,a=i.sourceAnimationWrappers,s=i.sources,c=e.resolve;function l(e,n){r[t]=c(Le,[t,e,n]),r[t].adjustSize()}this.runActions=function(e,r){s[t].current.classList.add(g),a[t].current.classList.add(p),o[t](),l(e,r),n.runActions=l}}function Ee(e,t){var n,r=this,o=e.elements.sources,i=e.props,a=e.resolve,s=e.timeout,c=a(Ae,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,r=t.naturalHeight;c.runActions(n,r)},this.handleVideoLoad=function(e){var t=e.target,r=t.videoWidth,o=t.videoHeight;n=!0,c.runActions(r,o)},this.handleNotMetaDatedVideoLoad=function(){n||r.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeVideoDimensions&&(e=i.maxYoutubeVideoDimensions.width,t=i.maxYoutubeVideoDimensions.height),c.runActions(e,t)},this.handleCustomLoad=function(){s((function(){var e=o[t].current;c.runActions(e.offsetWidth,e.offsetHeight)}))}}function Oe(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.eventsDispatcher,o=n.lightboxOpener,i=n.lightboxOpenActioner,a=e.data,s=e.elements;o.openLightbox=function(){r.dispatch("onShow"),Se(e,"sourceLoadHandlers",Ee),t.set(!0,i.runInitializedLightboxActions)},o.initializeAndOpenLightbox=function(){a.isInitialized=!0,s.sourceAnimationWrappers=ye(e),s.sourceMainWrappers=ye(e),s.sources=ye(e),Se(e,"sourceLoadHandlers",Ee),Se(e,"sourceMainWrapperTransformers",we),xe(e),r.dispatch("onInit"),t.set(!0,(function(){i.runInitializedLightboxActions(),function(e){for(var t=e.props.sources,n=e.resolve,r=n(G),o=n(ae),i=n(ce,[r,o]),a=0;a<t.length;a++)if("string"==typeof t[a]){var s=i.getTypeSetByClientForIndex(a);if(s)o.runActionsForSourceTypeAndIndex(s,a);else{var c=r.getSourceTypeFromLocalStorageByUrl(t[a]);c?o.runActionsForSourceTypeAndIndex(c,a):i.retrieveTypeWithXhrForIndex(a)}}else o.runActionsForSourceTypeAndIndex("custom",a)}(e)}))}}function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t,n){return(Ie=ke()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&ze(o,n.prototype),o}).apply(null,arguments)}function Fe(e){return function(e){if(Array.isArray(e))return Te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ze(e,t){return(ze=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Me(e,t){return!t||"object"!==Ce(t)&&"function"!=typeof t?We(e):t}function We(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ze(e,t)}(l,e);var t,n,o,i,s,c=(t=l,n=ke(),function(){var e,r=Ne(t);if(n){var o=Ne(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Me(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={isOpen:!1},t.data={isInitialized:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},t.slideSwipingProps={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},t.stageIndexes={current:0},t.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isFullscreenOpen:{},hideSourceLoaderCollection:[],updateSourceDirectWrapperCollection:[],toolbarButtons:{fullscreen:{}},isLightboxOpenManager:{get:function(){return t.state.isOpen},set:function(e,n){t.setState({isOpen:e},n)}}},t.elements={container:S.a.createRef(),sourceMainWrappersWrapper:S.a.createRef(),sources:null,sourceMainWrappers:null,sourceAnimationWrappers:null,sourcesComponents:[]},t.collections={sourceMainWrapperTransformers:[],sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},t.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxOpener:{},lightboxOpenActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},t.getQueuedAction=t.getQueuedAction.bind(We(t)),t.resolve=t.resolve.bind(We(t)),t.timeout=t.timeout.bind(We(t)),J(We(t)),Oe(We(t)),t}return o=l,(i=[{key:"getQueuedAction",value:function(e,t){var n=this,r=[];return function(){r.push(!0),n.timeout((function(){r.pop(),r.length||e()}),t)}}},{key:"resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.unshift(this),Ie(e,Fe(t))}},{key:"timeout",value:function(e,t){var n=this;setTimeout((function(){n.elements.container.current&&e()}),t)}},{key:"componentDidUpdate",value:function(e,t,n){this.core.lightboxUpdater.handleUpdate(e)}},{key:"componentDidMount",value:function(){q(this)}},{key:"componentWillUnmount",value:function(){!function(e){for(var t=e.collections.xhrs,n=e.componentsServices.isLightboxOpenManager,r=e.core.globalEventsController,o=0;o<t.length;o++)t[o].abort();n.get()&&r.removeListeners()}(this)}},{key:"render",value:function(){return this.state.isOpen?S.a.createElement("div",{ref:this.elements.container,className:"".concat(r,"container ").concat(a," ").concat(p)},S.a.createElement(_,{fsLightbox:this}),S.a.createElement(W,{fsLightbox:this}),this.props.sources.length>1?S.a.createElement(S.a.Fragment,null,S.a.createElement($,{onClick:this.core.slideChangeFacade.changeToPrevious,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),S.a.createElement($,{onClick:this.core.slideChangeFacade.changeToNext,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,S.a.createElement(X,{fsLightbox:this})):null}}])&&je(o.prototype,i),s&&je(o,s),l}(y.Component);De.propTypes={toggler:L.a.bool,sources:L.a.array,slide:L.a.number,source:L.a.string,sourceIndex:L.a.number,onOpen:L.a.func,onClose:L.a.func,onInit:L.a.func,onShow:L.a.func,disableLocalStorage:L.a.bool,types:L.a.array,type:L.a.string,customAttributes:L.a.array,maxYoutubeVideoDimensions:L.a.object,exitFullscreenOnClose:L.a.bool,loadOnlyCurrentSource:L.a.bool,openOnMount:L.a.bool,slideDistance:L.a.number},De.defaultProps={slideDistance:.3};t.default=De}]);

/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep),
/* harmony export */   "trimProtocol": () => (/* binding */ trimProtocol),
/* harmony export */   "trimProtocolAndQueryString": () => (/* binding */ trimProtocolAndQueryString),
/* harmony export */   "Nbsp": () => (/* binding */ Nbsp),
/* harmony export */   "getImgurUrl": () => (/* binding */ getImgurUrl),
/* harmony export */   "getYoutubeUrl": () => (/* binding */ getYoutubeUrl),
/* harmony export */   "getYoutubeThumbnailUrl": () => (/* binding */ getYoutubeThumbnailUrl),
/* harmony export */   "waitForElem": () => (/* binding */ waitForElem),
/* harmony export */   "waitForElemAndDelete": () => (/* binding */ waitForElemAndDelete),
/* harmony export */   "scrollToElementSmooth": () => (/* binding */ scrollToElementSmooth),
/* harmony export */   "animateCSS": () => (/* binding */ animateCSS)
/* harmony export */ });
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function trimProtocol(url) {
  return url.replace(/(^\w+:|^)\/\//, "");
}
function trimProtocolAndQueryString(url) {
  let trimmed = trimProtocol(url).split("?")[0];
  trimmed = trimmed[trimmed.length - 1] === "/" ? trimmed.substring(0, trimmed.length - 1) : trimmed;
  return trimmed;
}
function Nbsp() {
  return "\u00A0";
}
function getImgurUrl(id, suffix = "", extension = ".jpg") {
  const url = `https://i.imgur.com/${id}${suffix}${extension}`;
  return url;
}
function getYoutubeUrl(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0`;
}
function getYoutubeThumbnailUrl(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
} // https://stackoverflow.com/a/61511955

function waitForElem(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
async function waitForElemAndDelete(selector) {
  var _elem$parentNode;

  const elem = await waitForElem(selector);
  elem === null || elem === void 0 ? void 0 : (_elem$parentNode = elem.parentNode) === null || _elem$parentNode === void 0 ? void 0 : _elem$parentNode.removeChild(elem);
}
function scrollToElementSmooth(selector) {
  var _element$getBoundingC;

  if (!windowDefined()) {
    return;
  }

  const yOffset = -100;
  const element = document.querySelector(selector);
  const y = ((element === null || element === void 0 ? void 0 : (_element$getBoundingC = element.getBoundingClientRect()) === null || _element$getBoundingC === void 0 ? void 0 : _element$getBoundingC.top) || 0) + window.pageYOffset + yOffset;
  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}
async function animateCSS(selector, animation, prefix = "animate__") {
  const animationName = `${prefix}${animation}`;
  const nodes = document.querySelectorAll(selector);
  nodes.forEach(node => {
    const handleAnimationEnd = event => {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      return "Animation ended";
    };

    node.classList.add(`${prefix}animated`, animationName);
    node.addEventListener("animationend", handleAnimationEnd, {
      once: true
    });
  });
}

const windowDefined = () => {
  return typeof window !== "undefined";
};

/***/ }),

/***/ "./src/components/Gallery/GallerySection.tsx":
/*!***************************************************!*\
  !*** ./src/components/Gallery/GallerySection.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lightbox */ "./src/components/Gallery/Lightbox.tsx");
/* harmony import */ var _hooks_useLightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLightbox */ "./src/hooks/useLightbox.ts");
/* harmony import */ var _GalleryTiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryTiles */ "./src/components/Gallery/GalleryTiles.tsx");




const USE_LIGHTBOX_VIDEO_PLAYER = false;

const GallerySection = ({
  media,
  direction = "row",
  thumbnailSize = "large",
  header,
  id
}) => {
  const [lightboxToggler, lightboxIndex, openLightbox] = (0,_hooks_useLightbox__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-2",
    id: loading ? undefined : id
  }, header ? /*#__PURE__*/React.createElement("h3", {
    className: "mb-4"
  }, header) : null, /*#__PURE__*/React.createElement(_GalleryTiles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sourceImages: media,
    onClick: (_, {
      index
    }) => openLightbox(index),
    direction: direction,
    thumbnailSize: thumbnailSize,
    youtubeAsIframe: !USE_LIGHTBOX_VIDEO_PLAYER,
    onLoad: () => setLoading(false)
  }), /*#__PURE__*/React.createElement(_Lightbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    toggler: lightboxToggler,
    index: lightboxIndex,
    sourceMedias: media,
    enableCustomSources: USE_LIGHTBOX_VIDEO_PLAYER
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GallerySection);

/***/ }),

/***/ "./src/components/Gallery/GalleryTiles.tsx":
/*!*************************************************!*\
  !*** ./src/components/Gallery/GalleryTiles.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var _MediaComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaComponent */ "./src/components/Gallery/MediaComponent.tsx");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./src/hooks/useWindowDimensions.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils */ "./src/Utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const MOBILE_BREAKPOINT = 768;
const THUMBNAILS = {
  small: "t",
  medium: "m",
  large: "l",
  huge: "h"
};

const GalleryTiles = ({
  sourceImages,
  onClick,
  direction,
  thumbnailSize,
  youtubeAsIframe = true,
  onLoad
}) => {
  const {
    width: windowWidth
  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setTimeout(onLoad, 50);
  }, [onLoad]);
  return /*#__PURE__*/React.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_0__["default"], {
    photos: formatGalleryMedia(sourceImages, thumbnailSize, youtubeAsIframe),
    margin: direction === "column" ? 10 : 3,
    renderImage: RenderImage,
    onClick: onClick,
    direction: direction,
    columns: isMobile ? 1 : 2
  });
};

const RenderImage = ({
  margin,
  index,
  photo,
  onClick,
  direction,
  top,
  left
}) => {
  const props = {
    src: photo.src,
    posterSrc: photo.posterSrc,
    desc: photo.alt || "",
    width: photo.width,
    height: photo.height,
    id: photo.id || photo.key || photo.src,
    provider: photo.provider || "imgur",
    type: photo.type || "jpg",
    onClick: e => onClick && onClick(e, {
      index
    }),
    direction: direction,
    thumbnailSize: photo.thumbnailSize,
    style: {
      margin,
      top,
      left
    }
  };
  return /*#__PURE__*/React.createElement(_MediaComponent__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    key: photo.key
  }, props));
};

const formatGalleryMedia = (mediaSources, thumbnailSize, youtubeAsIframe) => {
  return mediaSources.map(media => {
    let galleryPhoto = {
      // CustomRenderImageProps
      id: media.id,
      thumbnailSize: thumbnailSize,
      provider: media.provider,
      type: media.provider === "youtube" && !youtubeAsIframe ? "jpg" : media.type,
      posterSrc: media.posterSrcId ? (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getImgurUrl)(media.posterSrcId, THUMBNAILS[thumbnailSize]) : undefined,
      // PhotoProps
      src: "",
      width: media.width,
      height: media.height,
      alt: media.desc,
      key: media.id + media.desc
    };

    if (media.provider === "youtube") {
      if (youtubeAsIframe) {
        galleryPhoto.src = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getYoutubeUrl)(media.id);
      } else {
        galleryPhoto.src = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getYoutubeThumbnailUrl)(media.id);
        galleryPhoto.width = 480;
        galleryPhoto.height = 360;
      }
    } else if (media.type === "mp4") {
      galleryPhoto.src = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getImgurUrl)(media.id, "", ".mp4");
    } else {
      galleryPhoto.src = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getImgurUrl)(media.id, THUMBNAILS[thumbnailSize], media.type === "png" ? ".png" : ".jpg");
    }

    return galleryPhoto;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryTiles);

/***/ }),

/***/ "./src/components/Gallery/Lightbox.tsx":
/*!*********************************************!*\
  !*** ./src/components/Gallery/Lightbox.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fslightbox-react */ "./node_modules/fslightbox-react/index.js");
/* harmony import */ var fslightbox_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fslightbox_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ "./src/Utils.ts");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");



const HAS_BACKDROP_FILTER_BUG = react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isOpera || react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isEdge || react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isChrome || react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isChromium;

const Lightbox = ({
  toggler,
  sourceMedias,
  index,
  enableCustomSources = false
}) => {
  return /*#__PURE__*/React.createElement((fslightbox_react__WEBPACK_IMPORTED_MODULE_0___default()), {
    toggler: toggler,
    sources: formatLightboxMedia(sourceMedias),
    customSources: enableCustomSources ? formatLightboxCustomMedia(sourceMedias) : undefined,
    types: sourceMedias.map(media => media.provider === "youtube" ? "youtube" : "image"),
    sourceIndex: index,
    onClose: HAS_BACKDROP_FILTER_BUG ? addBackDropBlur : undefined,
    onOpen: HAS_BACKDROP_FILTER_BUG ? hideBackDropBlur : undefined,
    exitFullscreenOnClose: true
  });
};

const formatLightboxMedia = mediaSources => {
  return mediaSources.map(media => {
    return media.provider === "youtube" ? (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getYoutubeUrl)(media.id) : (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getImgurUrl)(media.id);
  });
};

const formatLightboxCustomMedia = mediaSources => {
  return mediaSources.filter(media => media.provider === "youtube").map(media => {
    return /*#__PURE__*/React.createElement("iframe", {
      src: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getYoutubeUrl)(media.id),
      title: media.desc,
      width: "1920px",
      height: "1080px",
      frameBorder: "0",
      allow: "autoplay; fullscreen",
      allowFullScreen: true
    });
  });
};

function addBackDropBlur() {
  const wrappers = document.querySelectorAll(".wrapper");
  wrappers.forEach(wrapper => {
    wrapper.className += " back-blur";
  });
}

function hideBackDropBlur() {
  const wrappers = document.querySelectorAll(".wrapper");
  wrappers.forEach(wrapper => {
    wrapper.classList.remove("back-blur");
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lightbox);

/***/ }),

/***/ "./src/components/Gallery/MediaComponent.tsx":
/*!***************************************************!*\
  !*** ./src/components/Gallery/MediaComponent.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tilty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tilty */ "./node_modules/react-tilty/dist/react-tilty.modern.js");



const MediaComponent = props => {
  var _props$style, _props$style2, _props$style3;

  const baseStyle = {
    width: props.width,
    height: props.height,
    margin: (_props$style = props.style) === null || _props$style === void 0 ? void 0 : _props$style.margin,
    position: props.direction === "column" ? "absolute" : "initial",
    left: props.direction === "column" ? (_props$style2 = props.style) === null || _props$style2 === void 0 ? void 0 : _props$style2.left : "initial",
    top: props.direction === "column" ? (_props$style3 = props.style) === null || _props$style3 === void 0 ? void 0 : _props$style3.top : "initial"
  };

  switch (props.type) {
    case "mp4":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MediaVideo, Object.assign({}, props, {
          style: baseStyle
        }));
      }

    case "jpg":
    case "png":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MediaTiltableImage, Object.assign({}, props, {
          style: baseStyle
        }));
      }

    case "iframe":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MediaIframe, Object.assign({}, props, {
          style: baseStyle
        }));
      }

    default:
      throw Error(`Not supported media type: ${props.type}`);
  }
};

const MediaVideo = props => {
  var _props$style4, _props$style4$margin, _props$style5, _props$style6, _props$style7;

  const {
    0: captionVisible,
    1: setCaptionVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (videoRef.current) {
      videoRef.current.onplay = () => setTimeout(hideCaption, 500);

      videoRef.current.onpause = showCaption;
      videoRef.current.onmouseenter = showCaption;
      videoRef.current.onmouseleave = hideCaption;
    }
  }, []);

  const showCaption = () => {
    setCaptionVisible(true);
  };

  const hideCaption = () => {
    var _videoRef$current;

    if ((_videoRef$current = videoRef.current) !== null && _videoRef$current !== void 0 && _videoRef$current.paused) {
      return;
    }

    setCaptionVisible(false);
  };

  const captionStyle = {
    opacity: captionVisible ? 1 : 0,
    margin: parseInt(((_props$style4 = props.style) === null || _props$style4 === void 0 ? void 0 : (_props$style4$margin = _props$style4.margin) === null || _props$style4$margin === void 0 ? void 0 : _props$style4$margin.toString()) || "0") + 10,
    position: (_props$style5 = props.style) === null || _props$style5 === void 0 ? void 0 : _props$style5.position,
    left: (_props$style6 = props.style) === null || _props$style6 === void 0 ? void 0 : _props$style6.left,
    top: (_props$style7 = props.style) === null || _props$style7 === void 0 ? void 0 : _props$style7.top
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    ref: videoRef,
    controls: true,
    poster: props.posterSrc,
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: props.src,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "gallery-video-caption",
    style: captionStyle
  }, props.desc));
};

const MediaTiltableImage = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tilty__WEBPACK_IMPORTED_MODULE_1__["default"], {
    max: 25,
    perspective: 1500,
    speed: 1000,
    className: "gallery-tilty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: props.src,
    alt: props.desc,
    onClick: props.onClick,
    style: props.style
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "gallery-tilty-inner"
  }, props.desc));
};

const MediaIframe = props => {
  const iFrameStyle = Object.assign({
    border: 0
  }, props.style);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: props.src,
    title: props.desc,
    style: iFrameStyle,
    allowFullScreen: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaComponent);

/***/ }),

/***/ "./src/components/PageComponents/GuiPack.tsx":
/*!***************************************************!*\
  !*** ./src/components/PageComponents/GuiPack.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GuiPack)
/* harmony export */ });
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _MediaSources_gui_pack_images_sources_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MediaSources/gui-pack-images-sources.json */ "./src/MediaSources/gui-pack-images-sources.json");
/* harmony import */ var _Gallery_GallerySection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gallery/GallerySection */ "./src/components/Gallery/GallerySection.tsx");





const images = _MediaSources_gui_pack_images_sources_json__WEBPACK_IMPORTED_MODULE_2__;
const DL_LINK = "https://drive.google.com/uc?export=download&id=1XtGaMgX7xDzrKSGYGvLHWIMSIVJZHdBs";

const GuiPackIcon = () => {
  return /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/GQOoX1c.png",
    alt: "GUI-pack icon",
    className: "d-block mx-auto"
  });
};

function GuiPack() {
  return /*#__PURE__*/React.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], null, /*#__PURE__*/React.createElement("h1", null, "GUI-Pack"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: 9
  }, /*#__PURE__*/React.createElement("p", null, "GUI Pack on Minecraft-resurssipaketti. GUI Pack muuttaa ainoastaan pelin valikkojen, fonttien ja muun k\xE4ytt\xF6liittym\xE4n piirteit\xE4. Ajatus", " ", /*#__PURE__*/React.createElement("em", null, "hentai"), "-tauluista ja -skineist\xE4 voidaan siis unohtaa."), /*#__PURE__*/React.createElement("p", null, "GUI Packin v\xE4s\xE4\xE4misest\xE4 on kulunut jo useampi vuosi, joten pelin uusimpien ja hienoimpien tekstuureiden kanssa saattaa mahdollisesti, ehk\xE4 jopa luultavasti tai kaiketi olla joitain yhteensopivuusongelmia,", " ", /*#__PURE__*/React.createElement("small", null, "joista MOLO Gaming\u2122 -organisaatio, sen toimihenkil\xF6t saatikka tyt\xE4ryhti\xF6t, kuten Markkinarako Oy eiv\xE4t ole lakiteknisesti vastuussa."))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: 3
  }, /*#__PURE__*/React.createElement(GuiPackIcon, null))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement("h3", null, "Asentaminen"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Lataa ", /*#__PURE__*/React.createElement("em", null, "GUI-Pack.zip")), /*#__PURE__*/React.createElement("li", null, "K\xE4ynnist\xE4 mine"), /*#__PURE__*/React.createElement("li", null, "Avaa ", /*#__PURE__*/React.createElement("em", null, "Options")), /*#__PURE__*/React.createElement("li", null, "Avaa ", /*#__PURE__*/React.createElement("em", null, "Resource packs"), ", jonka j\xE4lkeen paina", " ", /*#__PURE__*/React.createElement("em", null, "Open Pack Folder")), /*#__PURE__*/React.createElement("li", null, "Nyt ", /*#__PURE__*/React.createElement("em", null, "resourcepacks"), " -nimisen kansion pit\xE4isi (l)aueta", /*#__PURE__*/React.createElement("sup", null, " :D"), " ruutuun"), /*#__PURE__*/React.createElement("li", null, "Poista ", /*#__PURE__*/React.createElement("code", null, "C:\\Windows\\System32"), " -kansio"), /*#__PURE__*/React.createElement("li", null, "Siirr\xE4 ladattu .zip-tiedosto juuri avautuneseen", " ", /*#__PURE__*/React.createElement("em", null, "resource packs"), "-kansioon"), /*#__PURE__*/React.createElement("li", null, "Jos omaat lukih\xE4iri\xF6n tai olet muuten vain hieman hidas p\xE4\xE4st\xE4si, voit lukea tarkemmat ohjeet", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://minecraft.fandom.com/fi/wiki/Tekstuuripaketit#Tekstuuripaketin_asentaminen",
    target: "_blank",
    rel: "noreferrer"
  }, "t\xE4st\xE4"))))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-warning",
    href: DL_LINK,
    role: "button",
    download: true
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "save"
  }), "\xA0\xA0Lataa"))), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_Gallery_GallerySection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "images",
    media: images,
    direction: "row",
    thumbnailSize: "huge"
  }))));
}

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Wrapper = ({
  children,
  id
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    className: "wrapper back-blur"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/hooks/useLightbox.ts":
/*!**********************************!*\
  !*** ./src/hooks/useLightbox.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useLightbox = () => {
  const {
    0: lightboxController,
    1: setLightboxController
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    toggler: false,
    sourceIndex: 0
  });

  const openOnIndex = index => {
    setLightboxController(prev => ({
      toggler: !prev.toggler,
      sourceIndex: index
    }));
  };

  return [lightboxController.toggler, lightboxController.sourceIndex, openOnIndex];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLightbox);

/***/ }),

/***/ "./src/hooks/useWindowDimensions.ts":
/*!******************************************!*\
  !*** ./src/hooks/useWindowDimensions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowDimensions);

/***/ }),

/***/ "./src/pages/gui-pack.tsx":
/*!********************************!*\
  !*** ./src/pages/gui-pack.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GuiPackPage)
/* harmony export */ });
/* harmony import */ var _components_PageComponents_GuiPack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageComponents/GuiPack */ "./src/components/PageComponents/GuiPack.tsx");

function GuiPackPage() {
  return /*#__PURE__*/React.createElement(_components_PageComponents_GuiPack__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");


var _excluded = ["bsPrefix", "className", "as"];



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default().apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Row.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");


var _excluded = ["bsPrefix", "className", "noGutters", "as"];



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default().apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ThemeProvider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBootstrapPrefix": () => (/* binding */ useBootstrapPrefix),
/* harmony export */   "createBootstrapComponent": () => (/* binding */ createBootstrapComponent),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Consumer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prefixes);
  }, [prefixes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  var Wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (_ref2, ref) {
    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref2);

    props[forwardRefAs] = ref;
    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      bsPrefix: bsPrefix
    }));
  });
  Wrapped.displayName = "Bootstrap(" + (Component.displayName || Component.name) + ")";
  return Wrapped;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./node_modules/react-device-detect/main.js":
/*!**************************************************!*\
  !*** ./node_modules/react-device-detect/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var UA = new UAParser();
var browser = UA.getBrowser();
var cpu = UA.getCPU();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Browser: undefined
};
var BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: 'IE',
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: 'Samsung Browser'
};
var OsTypes = {
  IOS: 'iOS',
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: 'Windows',
  MAC_OS: 'Mac OS'
};
var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkType = function checkType(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };

    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };

    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };

    case DeviceTypes.Console:
      return {
        isConsole: true
      };

    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };

    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

var isMobileType = function isMobileType() {
  return device.type === DeviceTypes.Mobile;
};

var isTabletType = function isTabletType() {
  return device.type === DeviceTypes.Tablet;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case DeviceTypes.Mobile:
    case DeviceTypes.Tablet:
      return true;

    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === DeviceTypes.SmartTv;
};

var isBrowserType = function isBrowserType() {
  return device.type === DeviceTypes.Browser;
};

var isWearableType = function isWearableType() {
  return device.type === DeviceTypes.Wearable;
};

var isConsoleType = function isConsoleType() {
  return device.type === DeviceTypes.Console;
};

var isAndroidType = function isAndroidType() {
  return os.name === OsTypes.Android;
};

var isWindowsType = function isWindowsType() {
  return os.name === OsTypes.Windows;
};

var isMacOsType = function isMacOsType() {
  return os.name === OsTypes.MAC_OS;
};

var isWinPhoneType = function isWinPhoneType() {
  return os.name === OsTypes.WindowsPhone;
};

var isIOSType = function isIOSType() {
  return os.name === OsTypes.IOS;
};

var isChromeType = function isChromeType() {
  return browser.name === BrowserTypes.Chrome;
};

var isFirefoxType = function isFirefoxType() {
  return browser.name === BrowserTypes.Firefox;
};

var isChromiumType = function isChromiumType() {
  return browser.name === BrowserTypes.Chromium;
};

var isEdgeType = function isEdgeType() {
  return browser.name === BrowserTypes.Edge;
};

var isYandexType = function isYandexType() {
  return browser.name === BrowserTypes.Yandex;
};

var isSafariType = function isSafariType() {
  return browser.name === BrowserTypes.Safari || browser.name === BrowserTypes.MobileSafari;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === BrowserTypes.MobileSafari;
};

var isOperaType = function isOperaType() {
  return browser.name === BrowserTypes.Opera;
};

var isIEType = function isIEType() {
  return browser.name === BrowserTypes.InternetExplorer || browser.name === BrowserTypes.Ie;
};

var isMIUIType = function isMIUIType() {
  return browser.name === BrowserTypes.MIUI;
};

var isSamsungBrowserType = function isSamsungBrowserType() {
  return browser.name === BrowserTypes.SamsungBrowser;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};

var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};

var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return setDefaults(browser.version);
};

var getBrowserVersion = function getBrowserVersion() {
  return setDefaults(browser.major);
};

var getOsVersion = function getOsVersion() {
  return setDefaults(os.version);
};

var getOsName = function getOsName() {
  return setDefaults(os.name);
};

var getBrowserName = function getBrowserName() {
  return setDefaults(browser.name);
};

var getMobileVendor = function getMobileVendor() {
  return setDefaults(device.vendor);
};

var getMobileModel = function getMobileModel() {
  return setDefaults(device.model);
};

var getEngineName = function getEngineName() {
  return setDefaults(engine.name);
};

var getEngineVersion = function getEngineVersion() {
  return setDefaults(engine.version);
};

var getUseragent = function getUseragent() {
  return setDefaults(ua);
};

var getDeviceType = function getDeviceType() {
  return setDefaults(device.type, 'browser');
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isDesktop = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();
var isMIUI = isMIUIType();
var isSamsungBrowser = isSamsungBrowserType();

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style,
      props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style,
      props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style,
      props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style,
      props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style,
      props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style,
      props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style,
      props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style,
      props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style,
      props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition,
      props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);

  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", _extends({
    className: viewClassName,
    style: style
  }, props), children) : null;
};

function withOrientationChange(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.isEventListenerAdded = false;
        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
        _this.state = {
          isLandscape: false,
          isPortrait: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "handleOrientationChange",
        value: function handleOrientationChange() {
          if (!this.isEventListenerAdded) {
            this.isEventListenerAdded = true;
          }

          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: orientation === 0,
            isLandscape: orientation === 90
          });
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function onPageLoad() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
            if (!this.isEventListenerAdded) {
              this.handleOrientationChange();
              window.addEventListener("load", this.onPageLoad, false);
            } else {
              window.removeEventListener("load", this.onPageLoad, false);
            }

            window.addEventListener("resize", this.onOrientationChange, false);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onOrientationChange, false);
        }
      }, {
        key: "render",
        value: function render() {
          return React__default.createElement(WrappedComponent, _extends({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]);

      return _class;
    }(React__default.Component)
  );
}

exports.AndroidView = AndroidView;
exports.BrowserTypes = BrowserTypes;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.OsTypes = OsTypes;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isDesktop = isDesktop;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSamsungBrowser = isSamsungBrowser;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Photo": () => (/* binding */ Photo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var imgWithClick = {
  cursor: 'pointer'
};

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left,
      key = _ref.key;
  var imgStyle = {
    margin: margin,
    display: 'block'
  };

  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  var handleClick = function handleClick(event) {
    onClick(event, {
      photo: photo,
      index: index
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", _extends({
    key: key,
    style: onClick ? _objectSpread({}, imgStyle, imgWithClick) : imgStyle
  }, photo, {
    onClick: onClick ? handleClick : null
  }));
};

var photoPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
  key: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)])
});
Photo.propTypes = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  photo: photoPropType.isRequired,
  margin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  top: function top(props) {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: function left(props) {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

var round = function round(value, decimals) {
  if (!decimals) decimals = 0;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

var computeColumnLayout = function computeColumnLayout(_ref) {
  var photos = _ref.photos,
      columns = _ref.columns,
      containerWidth = _ref.containerWidth,
      margin = _ref.margin;
  // calculate each colWidth based on total width and column amount
  var colWidth = (containerWidth - margin * 2 * columns) / columns; // map through each photo to assign adjusted height and width based on colWidth

  var photosWithSizes = photos.map(function (photo) {
    var newHeight = photo.height / photo.width * colWidth;
    return _objectSpread({}, photo, {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  }); // store all possible left positions
  // and current top positions for each column

  var colLeftPositions = [];
  var colCurrTopPositions = [];

  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  } // map through each photo, then reduce thru each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height


  var photosPositioned = photosWithSizes.map(function (photo) {
    var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item < colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2; // store the tallest col to use for gallery height because of abs positioned elements

    var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item > colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
};

var ratio = function ratio(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return round(width / height, 2);
};

/*
Copyright 2007-2013 Marijn Haverbeke frin "Eloquent Javascript, 1st Edition"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function BinaryHeap(scoreFunction) {
  this.content = [];
  this.scoreFunction = scoreFunction;
}
BinaryHeap.prototype = {
  push: function push(element) {
    // Add the new element to the end of the array.
    this.content.push(element); // Allow it to bubble up.

    this.bubbleUp(this.content.length - 1);
  },
  pop: function pop() {
    // Store the first element so we can return it later.
    var result = this.content[0]; // Get the element at the end of the array.

    var end = this.content.pop(); // If there are any elements left, put the end element at the
    // start, and let it sink down.

    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }

    return result;
  },
  remove: function remove(node) {
    var length = this.content.length; // To remove a value, we must search through the array to find
    // it.

    for (var i = 0; i < length; i++) {
      if (this.content[i] != node) continue; // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.

      var end = this.content.pop(); // If the element we popped was the one we needed to remove,
      // we're done.

      if (i == length - 1) break; // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.

      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },
  size: function size() {
    return this.content.length;
  },
  bubbleUp: function bubbleUp(n) {
    // Fetch the element that has to be moved.
    var element = this.content[n],
        score = this.scoreFunction(element); // When at 0, an element can not go up any further.

    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1,
          parent = this.content[parentN]; // If the parent has a lesser score, things are in order and we
      // are done.

      if (score >= this.scoreFunction(parent)) break; // Otherwise, swap the parent with the current element and
      // continue.

      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },
  sinkDown: function sinkDown(n) {
    // Look up the target element and its score.
    var length = this.content.length,
        element = this.content[n],
        elemScore = this.scoreFunction(element);

    while (true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2,
          child1N = child2N - 1; // This is used to store the new position of the element,
      // if any.

      var swap = null; // If the first child exists (is inside the array)...

      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.content[child1N],
            child1Score = this.scoreFunction(child1); // If the score is less than our element's, we need to swap.

        if (child1Score < elemScore) swap = child1N;
      } // Do the same checks for the other child.


      if (child2N < length) {
        var child2 = this.content[child2N],
            child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N;
      } // No need to swap further, we are done.


      if (swap == null) break; // Otherwise, swap and continue.

      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};

var buildPrecedentsMap = function buildPrecedentsMap(graph, startNode, endNode) {
  // store the previous vertex of the shortest path of arrival
  var precedentsMap = {}; // store nodes already visited

  var visited = {}; // store/update only the shortest edge weights measured
  // the purpose of this is object is constant time lookup vs. binary heap lookup O(n)

  var storedShortestPaths = {};
  storedShortestPaths[startNode] = 0; // priority queue of ALL nodes and storedShortestPaths
  // don't bother to delete them because it's faster to look at visited?

  var pQueue = new BinaryHeap(function (n) {
    return n.weight;
  });
  pQueue.push({
    id: startNode,
    weight: 0
  });

  while (pQueue.size()) {
    // pop node with shortest total weight from start node
    var shortestNode = pQueue.pop();
    var shortestNodeId = shortestNode.id; // if already visited, continue

    if (visited[shortestNodeId]) continue; // visit neighboring nodes

    var neighboringNodes = graph(shortestNodeId) || {};
    visited[shortestNodeId] = 1; // meet the neighbors, looking for shorter paths

    for (var neighbor in neighboringNodes) {
      // weight of path from startNode to this neighbor
      var newTotalWeight = shortestNode.weight + neighboringNodes[neighbor]; // if this is the first time meeting the neighbor OR if the new total weight from
      // start node to this neighbor node is greater than the old weight path, update it,
      // and update precedent node

      if (typeof storedShortestPaths[neighbor] === 'undefined' || storedShortestPaths[neighbor] > newTotalWeight) {
        storedShortestPaths[neighbor] = newTotalWeight;
        pQueue.push({
          id: neighbor,
          weight: newTotalWeight
        });
        precedentsMap[neighbor] = shortestNodeId;
      }
    }
  }

  if (typeof storedShortestPaths[endNode] === 'undefined') {
    throw new Error("There is no path from ".concat(startNode, " to ").concat(endNode));
  }

  return precedentsMap;
}; // build the route from precedent node vertices


var getPathFromPrecedentsMap = function getPathFromPrecedentsMap(precedentsMap, endNode) {
  var nodes = [];
  var n = endNode;
  var precedent;

  while (n) {
    nodes.push(n);
    precedent = precedentsMap[n];
    n = precedentsMap[n];
  }

  return nodes.reverse();
}; // build the precedentsMap and find the shortest path from it


var findShortestPath = function findShortestPath(graph, startNode, endNode) {
  var precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
  return getPathFromPrecedentsMap(precedentsMap, endNode);
};

// to calculate the single best layout using Dijkstra's findShortestPat
// get the height for a set of photos in a potential row

var getCommonHeight = function getCommonHeight(row, containerWidth, margin) {
  var rowWidth = containerWidth - row.length * (margin * 2);
  var totalAspectRatio = row.reduce(function (acc, photo) {
    return acc + ratio(photo);
  }, 0);
  return rowWidth / totalAspectRatio;
}; // calculate the cost of breaking at this node (edge weight)


var cost = function cost(photos, i, j, width, targetHeight, margin) {
  var row = photos.slice(i, j);
  var commonHeight = getCommonHeight(row, width, margin);
  return Math.pow(Math.abs(commonHeight - targetHeight), 2);
}; // return function that gets the neighboring nodes of node and returns costs


var makeGetNeighbors = function makeGetNeighbors(targetHeight, containerWidth, photos, limitNodeSearch, margin) {
  return function (start) {
    var results = {};
    start = +start;
    results[+start] = 0;

    for (var i = start + 1; i < photos.length + 1; ++i) {
      if (i - start > limitNodeSearch) break;
      results[i.toString()] = cost(photos, start, i, containerWidth, targetHeight, margin);
    }

    return results;
  };
};

var computeRowLayout = function computeRowLayout(_ref) {
  var containerWidth = _ref.containerWidth,
      limitNodeSearch = _ref.limitNodeSearch,
      targetRowHeight = _ref.targetRowHeight,
      margin = _ref.margin,
      photos = _ref.photos;
  // const t = +new Date();
  var getNeighbors = makeGetNeighbors(targetRowHeight, containerWidth, photos, limitNodeSearch, margin);
  var path = findShortestPath(getNeighbors, '0', photos.length);
  path = path.map(function (node) {
    return +node;
  }); // console.log(`time to find the shortest path: ${(+new Date() - t)} ms`);

  for (var i = 1; i < path.length; ++i) {
    var row = photos.slice(path[i - 1], path[i]);
    var height = getCommonHeight(row, containerWidth, margin);

    for (var j = path[i - 1]; j < path[i]; ++j) {
      photos[j].width = round(height * ratio(photos[j]), 1);
      photos[j].height = height;
    }
  }

  return photos;
};

// the aspect ratio of the container with images having an avg AR of 1.5
// as the minimum amount of photos per row, plus some nodes

var findIdealNodeSearch = function findIdealNodeSearch(_ref) {
  var targetRowHeight = _ref.targetRowHeight,
      containerWidth = _ref.containerWidth;
  var rowAR = containerWidth / targetRowHeight;
  return round(rowAR / 1.5) + 8;
};

var Gallery = react__WEBPACK_IMPORTED_MODULE_0___default().memo(function Gallery(_ref) {
  var photos = _ref.photos,
      onClick = _ref.onClick,
      direction = _ref.direction,
      margin = _ref.margin,
      limitNodeSearch = _ref.limitNodeSearch,
      targetRowHeight = _ref.targetRowHeight,
      columns = _ref.columns,
      renderImage = _ref.renderImage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      containerWidth = _useState2[0],
      setContainerWidth = _useState2[1];

  var galleryEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var animationFrameID = null;
    var observer = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function (entries) {
      // only do something if width changes
      var newWidth = entries[0].contentRect.width;

      if (containerWidth !== newWidth) {
        // put in an animation frame to stop "benign errors" from
        // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
        animationFrameID = window.requestAnimationFrame(function () {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(galleryEl.current);
    return function () {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });

  var handleClick = function handleClick(event, _ref2) {
    var index = _ref2.index;
    onClick(event, {
      index: index,
      photo: photos[index],
      previous: photos[index - 1] || null,
      next: photos[index + 1] || null
    });
  }; // no containerWidth until after first render with refs, skip calculations and render nothing


  if (!containerWidth) return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: galleryEl
  }, "\xA0"); // subtract 1 pixel because the browser may round up a pixel

  var width = containerWidth - 1;
  var galleryStyle, thumbs;

  if (direction === 'row') {
    // allow user to calculate limitNodeSearch from containerWidth
    if (typeof limitNodeSearch === 'function') {
      limitNodeSearch = limitNodeSearch(containerWidth);
    }

    if (typeof targetRowHeight === 'function') {
      targetRowHeight = targetRowHeight(containerWidth);
    } // set how many neighboring nodes the graph will visit


    if (limitNodeSearch === undefined) {
      limitNodeSearch = 2;

      if (containerWidth >= 450) {
        limitNodeSearch = findIdealNodeSearch({
          containerWidth: containerWidth,
          targetRowHeight: targetRowHeight
        });
      }
    }

    galleryStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    };
    thumbs = computeRowLayout({
      containerWidth: width,
      limitNodeSearch: limitNodeSearch,
      targetRowHeight: targetRowHeight,
      margin: margin,
      photos: photos
    });
  }

  if (direction === 'column') {
    // allow user to calculate columns from containerWidth
    if (typeof columns === 'function') {
      columns = columns(containerWidth);
    } // set default breakpoints if user doesn't specify columns prop


    if (columns === undefined) {
      columns = 1;
      if (containerWidth >= 500) columns = 2;
      if (containerWidth >= 900) columns = 3;
      if (containerWidth >= 1500) columns = 4;
    }

    galleryStyle = {
      position: 'relative'
    };
    thumbs = computeColumnLayout({
      containerWidth: width,
      columns: columns,
      margin: margin,
      photos: photos
    });
    galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
  }

  var renderComponent = renderImage || Photo;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-photo-gallery--gallery"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: galleryEl,
    style: galleryStyle
  }, thumbs.map(function (thumb, index) {
    var left = thumb.left,
        top = thumb.top,
        containerHeight = thumb.containerHeight,
        photo = _objectWithoutProperties(thumb, ["left", "top", "containerHeight"]);

    return renderComponent({
      left: left,
      top: top,
      key: thumb.key || thumb.src,
      containerHeight: containerHeight,
      index: index,
      margin: margin,
      direction: direction,
      onClick: onClick ? handleClick : null,
      photo: photo
    });
  })));
});
Gallery.propTypes = {
  photos: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(photoPropType).isRequired,
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  targetRowHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  limitNodeSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  margin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  renderImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Gallery.defaultProps = {
  margin: 2,
  direction: 'row',
  targetRowHeight: 300
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);



/***/ }),

/***/ "./node_modules/react-tilty/dist/react-tilty.modern.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-tilty/dist/react-tilty.modern.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c({style:c={},className:s="",reverse:l=!1,max:u=35,perspective:d=1e3,easing:f="cubic-bezier(.03,.98,.52,.99)",scale:g=1,speed:m=300,axis:p="",reset:w=!0,glare:v=!1,maxGlare:h=1,glareStyle:y={},gyroscope:M=!0,gyroscopeMinAngleX:E=-45,gyroscopeMaxAngleX:x=45,gyroscopeMinAngleY:b=-45,gyroscopeMaxAngleY:Y=45,onMouseEnter:A=(()=>{}),onMouseMove:X=(()=>{}),onMouseLeave:$=(()=>{}),onTiltChange:F=(()=>{}),children:L}){const[C,W]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({position:"relative",willChange:"transform"}),[N,O]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({position:"absolute",top:"50%",left:"50%",pointerEvents:"none",backgroundImage:"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)",transformOrigin:"0% 0%",opacity:"0"}),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),k=l?1:-1,B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>{clearTimeout(I.current),"undefined"!=typeof window&&window.cancelAnimationFrame(P.current)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!v||"undefined"==typeof window)return()=>{};const e=()=>{O(e=>a({},e,{width:2*B.current.offsetWidth,height:2*B.current.offsetWidth}))};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[v]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{O(e=>a({},e,{width:2*B.current.offsetWidth,height:2*B.current.offsetWidth}))},[]);const G=()=>{const e=B.current.getBoundingClientRect();T.current=B.current.offsetWidth,q.current=B.current.offsetHeight,z.current=e.left,j.current=e.top},H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{let t=(e.nativeEvent.clientX-z.current)/T.current,n=(e.nativeEvent.clientY-j.current)/q.current;return t=Math.min(Math.max(t,0),1),n=Math.min(Math.max(n,0),1),{tiltX:(k*(u/2-t*u)).toFixed(2),tiltY:(k*(n*u-u/2)).toFixed(2),percentageX:100*t,percentageY:100*n,angle:Math.atan2(e.nativeEvent.clientX-(z.current+T.current/2),-(e.nativeEvent.clientY-(j.current+q.current/2)))*(180/Math.PI)}},[u,k]),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{const t=H(e);W(e=>a({},e,{transform:`perspective(${d}px) rotateX(${"x"===p.toLowerCase()?0:t.tiltY}deg) rotateY(${"y"===p.toLowerCase()?0:t.tiltX}deg) scale3d(${g}, ${g}, ${g})`})),v&&O(e=>a({},e,{transform:`rotate(${t.angle}deg) translate(-50%, -50%)`,opacity:t.percentageY*h/100})),B.current.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),F({detail:t}),P.current=null},[p,H,v,h,d,g,F]),S=()=>{clearTimeout(I.current),W(e=>a({},e,{transition:`${m}ms ${f}`})),I.current=setTimeout(()=>{W(e=>a({},e,{transition:""}))},m)};return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!M)return()=>{};const e=e=>{if(null===e.gamma||null===e.beta||"undefined"==typeof window)return;G();const t=(e.gamma-E)/((x-E)/T.current),n=(e.beta-b)/((Y-b)/q.current);null!==P.current&&"undefined"!=typeof window&&window.cancelAnimationFrame(P.current),e.nativeEvent={clientX:t+z.current,clientY:n+j.current},P.current=requestAnimationFrame(()=>R(e))};return window.addEventListener("deviceorientation",e),()=>{window.removeEventListener("deviceorientation",e)}},[M,x,Y,E,b,R]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:B,style:a({},c,C),className:s,onMouseEnter:e=>(G(),S(),A(e)),onMouseMove:e=>(e.persist(),null!==P.current&&"undefined"!=typeof window&&window.cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>R(e)),X(e)),onMouseLeave:e=>(S(),w&&"undefined"!=typeof window&&window.requestAnimationFrame(()=>{W(e=>a({},e,{transform:`perspective(${d}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})),v&&O(e=>a({},e,{transform:"rotate(180deg) translate(-50%, -50%)",opacity:0}))}),$(e))},v&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tilty-glare-wrapper",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tilty-glare",style:a({},y,N)})),L)}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);
//# sourceMappingURL=react-tilty.modern.js.map


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.28",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){return typeof str1===STR_TYPE?str2.toLowerCase().indexOf(str1.toLowerCase())!==-1:false},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str,len){str=str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/\s]+([\w\.]+)/i],[VERSION,[NAME,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[VERSION,[NAME,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure Browser"],VERSION],[/focus\/([\w\.]+)/i],[VERSION,[NAME,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[VERSION,[NAME,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Browser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[NAME],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+)\s.*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,"Chrome WebView"],VERSION],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\s\w]*);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/droid.+;\s(pixel\sc)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,"Sony"],[TYPE,TABLET]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,"Fire Phone"],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((playbook);[\w\s\),;-]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[MODEL,[VENDOR,"ASUS"],[TYPE,TABLET]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[MODEL,[VENDOR,"ASUS"],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(surface\sduo)\s/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/\s(u304aa)\sbuild/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/[;\/]\s?(rct\w+)\sbuild/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/;\s(nx\d{3}j)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/[;\/]\s?(zur\d{3})\sbuild/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/;\s(ph-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/[;\/]\s?tu_(1491)\sbuild/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w\s]+)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint)\s(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[345portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[VENDOR,"LG"],[TYPE,SMARTTV]],[/(apple)\s?tv/i],[VENDOR,[MODEL,"Apple TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/droid.+aft([\w])(\sbuild\/|\))/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[TYPE,SMARTTV]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,WEARABLE]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]],[/(phone)/i],[[TYPE,MOBILE]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[NAME,VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua==="object"){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!=="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={name:undefined,version:undefined};mapper.rgx.call(_browser,_ua,_rgxmap.browser);_browser.major=util.major(_browser.version);return _browser};this.getCPU=function(){var _cpu={architecture:undefined};mapper.rgx.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={name:undefined,version:undefined};mapper.rgx.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={name:undefined,version:undefined};mapper.rgx.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?util.trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if("object"!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}}var $=typeof window!=="undefined"&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./src/MediaSources/gui-pack-images-sources.json":
/*!*******************************************************!*\
  !*** ./src/MediaSources/gui-pack-images-sources.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"fs2LcD2","provider":"imgur","type":"jpg","desc":"Enchanttaus","width":620,"height":620},{"id":"hhibZxd","provider":"imgur","type":"jpg","desc":"Inva","width":1202,"height":578},{"id":"eE2IvN7","provider":"imgur","type":"png","desc":"Hotbar","width":1920,"height":1080},{"id":"6JP38am","provider":"imgur","type":"jpg","desc":"Päävalikko","width":1920,"height":1080},{"id":"SJeyq08","provider":"imgur","type":"jpg","desc":"Asetukset-valikko","width":1074,"height":839}]');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-gui-pack-tsx.js.map