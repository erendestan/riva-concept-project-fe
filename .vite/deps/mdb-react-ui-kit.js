import {
  require_react_dom
} from "./chunk-MKG3NT3Y.js";
import {
  require_jsx_runtime
} from "./chunk-YXFRQVRS.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it2;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// node_modules/mdb-react-ui-kit/node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min3, value, max3) {
  return max(min3, min(value, max3));
}
function withinMaxClamp(min3, value, max3) {
  var v = within(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets3) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets3[axis] - state.rects.popper[len];
  var startDiff = popperOffsets3[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper3 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper3);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper3)) {
      offsetParent = getDocumentElement(popper3);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper3)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents3 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents3.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents3 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents3[0];
  var clippingRect = clippingParents3.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference3 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference3.x + reference3.width / 2 - element.width / 2;
  var commonY = reference3.y + reference3.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference3.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference3.y + reference3.height
      };
      break;
    case right:
      offsets = {
        x: reference3.x + reference3.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference3.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference3.x,
        y: reference3.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference3[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference3[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets3 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets3));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset3) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets3) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets3[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min3, tetherMin) : min3, offset3, tether ? max(max3, tetherMax) : max3);
    popperOffsets3[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets3[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets3[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers5 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper7(reference3, popper3, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference3,
        popper: popper3
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference3) ? listScrollParents(reference3) : reference3.contextElement ? listScrollParents(reference3.contextElement) : [],
          popper: listScrollParents(popper3)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers5, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference4 = _state$elements.reference, popper4 = _state$elements.popper;
        if (!areValidElements(reference4, popper4)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference4, getOffsetParent(popper4), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper4)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference3, popper3)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect7 = _ref.effect;
        if (typeof effect7 === "function") {
          var cleanupFn = effect7({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn3(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper7 = options.createPopper || createPopper3;
    var popperInstance = createPopper7(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/enums.js
var top2 = "top";
var bottom2 = "bottom";
var right2 = "right";
var left2 = "left";
var auto2 = "auto";
var basePlacements2 = [top2, bottom2, right2, left2];
var start2 = "start";
var end2 = "end";
var clippingParents2 = "clippingParents";
var viewport2 = "viewport";
var popper2 = "popper";
var reference2 = "reference";
var variationPlacements2 = basePlacements2.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start2, placement + "-" + end2]);
}, []);
var placements2 = [].concat(basePlacements2, [auto2]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start2, placement + "-" + end2]);
}, []);
var beforeRead2 = "beforeRead";
var read2 = "read";
var afterRead2 = "afterRead";
var beforeMain2 = "beforeMain";
var main2 = "main";
var afterMain2 = "afterMain";
var beforeWrite2 = "beforeWrite";
var write2 = "write";
var afterWrite2 = "afterWrite";
var modifierPhases2 = [beforeRead2, read2, afterRead2, beforeMain2, main2, afterMain2, beforeWrite2, write2, afterWrite2];

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName2(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow2(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement2(node) {
  var OwnElement = getWindow2(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement2(node) {
  var OwnElement = getWindow2(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles2(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement2(element) || !getNodeName2(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect4(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement2(element) || !getNodeName2(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default2 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles2,
  effect: effect4,
  requires: ["computeStyles"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/math.js
var max2 = Math.max;
var min2 = Math.min;
var round2 = Math.round;

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect2(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement2(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round2(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round2(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect2(element) {
  var clientRect = getBoundingClientRect2(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains2(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot2(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle3(element) {
  return getWindow2(element).getComputedStyle(element);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement2(element) {
  return ["table", "td", "th"].indexOf(getNodeName2(element)) >= 0;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement2(element) {
  return ((isElement2(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode2(element) {
  if (getNodeName2(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot2(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement2(element)
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent2(element) {
  if (!isHTMLElement2(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle3(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock2(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle3(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  if (isShadowRoot2(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName2(currentNode)) < 0) {
    var css = getComputedStyle3(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent2(element) {
  var window2 = getWindow2(element);
  var offsetParent = getTrueOffsetParent2(element);
  while (offsetParent && isTableElement2(offsetParent) && getComputedStyle3(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent2(offsetParent);
  }
  if (offsetParent && (getNodeName2(offsetParent) === "html" || getNodeName2(offsetParent) === "body" && getComputedStyle3(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock2(element) || window2;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement2(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/within.js
function within2(min3, value, max3) {
  return max2(min3, min2(value, max3));
}
function withinMaxClamp2(min3, value, max3) {
  var v = within2(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject2(paddingObject) {
  return Object.assign({}, getFreshSideObject2(), paddingObject);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap2(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject3 = function toPaddingObject4(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject2(typeof padding !== "number" ? padding : expandToHashMap2(padding, basePlacements2));
};
function arrow2(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement2(state.placement);
  var axis = getMainAxisFromPlacement2(basePlacement);
  var isVertical = [left2, right2].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets3) {
    return;
  }
  var paddingObject = toPaddingObject3(options.padding, state);
  var arrowRect = getLayoutRect2(arrowElement);
  var minProp = axis === "y" ? top2 : left2;
  var maxProp = axis === "y" ? bottom2 : right2;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets3[axis] - state.rects.popper[len];
  var startDiff = popperOffsets3[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent2(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within2(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect5(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement2(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains2(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default2 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow2,
  effect: effect5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation2(placement) {
  return placement.split("-")[1];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides2 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR2(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round2(x * dpr) / dpr || 0,
    y: round2(y * dpr) / dpr || 0
  };
}
function mapToStyles2(_ref2) {
  var _Object$assign2;
  var popper3 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left2;
  var sideY = top2;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent2(popper3);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow2(popper3)) {
      offsetParent = getDocumentElement2(popper3);
      if (getComputedStyle3(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top2 || (placement === left2 || placement === right2) && variation === end2) {
      sideY = bottom2;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left2 || (placement === top2 || placement === bottom2) && variation === end2) {
      sideX = right2;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides2);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR2({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles2(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle3(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement2(state.placement),
    variation: getVariation2(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles2(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles2(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default2 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles2,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive2 = {
  passive: true
};
function effect6(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow2(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive2);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive2);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive2);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive2);
    }
  };
}
var eventListeners_default2 = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn2() {
  },
  effect: effect6,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement2(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash3[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash4 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement2(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash4[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll2(node) {
  var win = getWindow2(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX2(element) {
  return getBoundingClientRect2(getDocumentElement2(element)).left + getWindowScroll2(element).scrollLeft;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect2(element) {
  var win = getWindow2(element);
  var html = getDocumentElement2(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX2(element),
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect2(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement2(element);
  var winScroll = getWindowScroll2(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX2(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle3(body || html).direction === "rtl") {
    x += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent2(element) {
  var _getComputedStyle = getComputedStyle3(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent2(node) {
  if (["html", "body", "#document"].indexOf(getNodeName2(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement2(node) && isScrollParent2(node)) {
    return node;
  }
  return getScrollParent2(getParentNode2(node));
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents2(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow2(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent2(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents2(getParentNode2(target)))
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect2(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect2(element) {
  var rect = getBoundingClientRect2(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType2(element, clippingParent) {
  return clippingParent === viewport2 ? rectToClientRect2(getViewportRect2(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect2(clippingParent) : rectToClientRect2(getDocumentRect2(getDocumentElement2(element)));
}
function getClippingParents2(element) {
  var clippingParents3 = listScrollParents2(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle3(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent2(element) : element;
  if (!isElement2(clipperElement)) {
    return [];
  }
  return clippingParents3.filter(function(clippingParent) {
    return isElement2(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName2(clippingParent) !== "body";
  });
}
function getClippingRect2(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents2(element) : [].concat(boundary);
  var clippingParents3 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents3[0];
  var clippingRect = clippingParents3.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType2(element, clippingParent);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType2(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets2(_ref) {
  var reference3 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement2(placement) : null;
  var variation = placement ? getVariation2(placement) : null;
  var commonX = reference3.x + reference3.width / 2 - element.width / 2;
  var commonY = reference3.y + reference3.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top2:
      offsets = {
        x: commonX,
        y: reference3.y - element.height
      };
      break;
    case bottom2:
      offsets = {
        x: commonX,
        y: reference3.y + reference3.height
      };
      break;
    case right2:
      offsets = {
        x: reference3.x + reference3.width,
        y: commonY
      };
      break;
    case left2:
      offsets = {
        x: reference3.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference3.x,
        y: reference3.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement2(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start2:
        offsets[mainAxis] = offsets[mainAxis] - (reference3[len] / 2 - element[len] / 2);
        break;
      case end2:
        offsets[mainAxis] = offsets[mainAxis] + (reference3[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow2(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents2 : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport2 : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper2 : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject2(typeof padding !== "number" ? padding : expandToHashMap2(padding, basePlacements2));
  var altContext = elementContext === popper2 ? reference2 : popper2;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect2(isElement2(element) ? element : element.contextElement || getDocumentElement2(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect2(state.elements.reference);
  var popperOffsets3 = computeOffsets2({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect2(Object.assign({}, popperRect, popperOffsets3));
  var elementClientRect = elementContext === popper2 ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper2 && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right2, bottom2].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top2, bottom2].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement2(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements2 : _options$allowedAutoP;
  var variation = getVariation2(placement);
  var placements3 = variation ? flipVariations ? variationPlacements2 : variationPlacements2.filter(function(placement2) {
    return getVariation2(placement2) === variation;
  }) : basePlacements2;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow2(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement2(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements2(placement) {
  if (getBasePlacement2(placement) === auto2) {
    return [];
  }
  var oppositePlacement = getOppositePlacement2(placement);
  return [getOppositeVariationPlacement2(placement), oppositePlacement, getOppositeVariationPlacement2(oppositePlacement)];
}
function flip2(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement2(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement2(preferredPlacement)] : getExpandedFallbackPlacements2(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement2(placement2) === auto2 ? computeAutoPlacement2(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement2(placement);
    var isStartVariation = getVariation2(placement) === start2;
    var isVertical = [top2, bottom2].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow2(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right2 : left2 : isStartVariation ? bottom2 : top2;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement2(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement2(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default2 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip2,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets2(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped2(overflow) {
  return [top2, right2, bottom2, left2].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide2(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow2(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow2(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets2(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets2(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped2(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped2(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default2 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide2
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY2(placement, rects, offset3) {
  var basePlacement = getBasePlacement2(placement);
  var invertDistance = [left2, top2].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left2, right2].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset2(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements2.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY2(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default2 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset2
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets2(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets2({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default2 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets2,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis2(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow2(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow2(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement2(state.placement);
  var variation = getVariation2(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement2(basePlacement);
  var altAxis = getAltAxis2(mainAxis);
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets3) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top2 : left2;
    var altSide = mainAxis === "y" ? bottom2 : right2;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets3[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start2 ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start2 ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect2(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject2();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within2(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent2(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within2(tether ? min2(min3, tetherMin) : min3, offset3, tether ? max2(max3, tetherMax) : max3);
    popperOffsets3[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top2 : left2;
    var _altSide = mainAxis === "x" ? bottom2 : right2;
    var _offset = popperOffsets3[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top2, left2].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp2(_tetherMin, _offset, _tetherMax) : within2(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets3[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default2 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow2,
  requiresIfExists: ["offset"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll2(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll2(node) {
  if (node === getWindow2(node) || !isHTMLElement2(node)) {
    return getWindowScroll2(node);
  } else {
    return getHTMLElementScroll2(node);
  }
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled2(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round2(rect.width) / element.offsetWidth || 1;
  var scaleY = round2(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect2(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent);
  var offsetParentIsScaled = isHTMLElement2(offsetParent) && isElementScaled2(offsetParent);
  var documentElement = getDocumentElement2(offsetParent);
  var rect = getBoundingClientRect2(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName2(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent2(documentElement)) {
      scroll = getNodeScroll2(offsetParent);
    }
    if (isHTMLElement2(offsetParent)) {
      offsets = getBoundingClientRect2(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX2(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order2(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers2(modifiers) {
  var orderedModifiers = order2(modifiers);
  return modifierPhases2.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce2(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases2.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases2.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn3) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn3(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName2(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS2 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator2(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers5 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS2 : _generatorOptions$def2;
  return function createPopper7(reference3, popper3, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS2, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference3,
        popper: popper3
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement2(reference3) ? listScrollParents2(reference3) : reference3.contextElement ? listScrollParents2(reference3.contextElement) : [],
          popper: listScrollParents2(popper3)
        };
        var orderedModifiers = orderModifiers2(mergeByName2([].concat(defaultModifiers5, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement2(state.options.placement) === auto2) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle3(popper3), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference4 = _state$elements.reference, popper4 = _state$elements.popper;
        if (!areValidElements2(reference4, popper4)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect2(reference4, getOffsetParent2(popper4), state.options.strategy === "fixed"),
          popper: getLayoutRect2(popper4)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements2(reference3, popper3)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect7 = _ref3.effect;
        if (typeof effect7 === "function") {
          var cleanupFn = effect7({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper4 = popperGenerator2();

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers3 = [eventListeners_default2, popperOffsets_default2, computeStyles_default2, applyStyles_default2];
var createPopper5 = popperGenerator2({
  defaultModifiers: defaultModifiers3
});

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers4 = [eventListeners_default2, popperOffsets_default2, computeStyles_default2, applyStyles_default2, offset_default2, flip_default2, preventOverflow_default2, arrow_default2, hide_default2];
var createPopper6 = popperGenerator2({
  defaultModifiers: defaultModifiers4
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")), document.head.appendChild(o);
    }
  } catch (d) {
    console.error("vite-plugin-css-injected-by-js", d);
  }
})();
var nt = import_react.default.forwardRef(
  ({ breakpoint: e, fluid: t, children: s, className: n, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, n);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: s });
  }
);
var rt = import_react.default.forwardRef(
  ({
    center: e,
    children: t,
    className: s,
    end: n,
    lg: r,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: i,
    order: u,
    size: d,
    sm: p,
    start: f,
    tag: g = "div",
    xl: b,
    xxl: h,
    xs: v,
    ...M
  }, $) => {
    const B = clsx_m_default(
      d && `col-${d}`,
      v && `col-xs-${v}`,
      p && `col-sm-${p}`,
      a && `col-md-${a}`,
      r && `col-lg-${r}`,
      b && `col-xl-${b}`,
      h && `col-xxl-${h}`,
      !d && !v && !p && !a && !r && !b && !h ? "col" : "",
      u && `order-${u}`,
      f && "align-self-start",
      e && "align-self-center",
      n && "align-self-end",
      i && `offset-sm-${i}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      s
    );
    return (0, import_jsx_runtime.jsx)(g, { className: B, ref: $, ...M, children: t });
  }
);
var at = import_react.default.forwardRef(
  ({ className: e, color: t = "primary", pill: s, light: n, dot: r, tag: a = "span", children: c, notification: o, ...i }, u) => {
    const d = clsx_m_default(
      "badge",
      n ? t && `badge-${t}` : t && `bg-${t}`,
      r && "badge-dot",
      s && "rounded-pill",
      o && "badge-notification",
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: d, ref: u, ...i, children: c });
  }
);
var Me = ({ ...e }) => {
  const [t, s] = (0, import_react.useState)(false), n = clsx_m_default("ripple-wave", t && "active");
  return (0, import_react.useEffect)(() => {
    const r = setTimeout(() => {
      s(true);
    }, 50);
    return () => {
      clearTimeout(r);
    };
  }, []), (0, import_jsx_runtime.jsx)("div", { className: n, ...e });
};
var $e = (...e) => {
  const t = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((s) => {
      s && (typeof s == "function" ? s(t.current) : s.current = t.current);
    });
  }, [e]), t;
};
var Re = import_react.default.forwardRef(
  ({
    className: e,
    rippleTag: t = "div",
    rippleCentered: s,
    rippleDuration: n = 500,
    rippleUnbound: r,
    rippleRadius: a = 0,
    rippleColor: c = "dark",
    children: o,
    onMouseDown: i,
    ...u
  }, d) => {
    const p = (0, import_react.useRef)(null), f = $e(d, p), g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", b = [0, 0, 0], h = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [v, M] = (0, import_react.useState)([]), [$, B] = (0, import_react.useState)(false), x = clsx_m_default(
      "ripple",
      "ripple-surface",
      r && "ripple-surface-unbound",
      $ && `ripple-surface-${c}`,
      e
    ), y = () => {
      if (h.find((E) => E === (c == null ? void 0 : c.toLowerCase())))
        return B(true);
      {
        const E = k(c).join(",");
        return `radial-gradient(circle, ${g.split("{{color}}").join(`${E}`)})`;
      }
    }, k = (w) => {
      const E = (D) => (D.length < 7 && (D = `#${D[1]}${D[1]}${D[2]}${D[2]}${D[3]}${D[3]}`), [parseInt(D.substr(1, 2), 16), parseInt(D.substr(3, 2), 16), parseInt(D.substr(5, 2), 16)]), R = (D) => {
        const S = document.body.appendChild(document.createElement("fictum")), j = "rgb(1, 2, 3)";
        return S.style.color = j, S.style.color !== j || (S.style.color = D, S.style.color === j || S.style.color === "") ? b : (D = getComputedStyle(S).color, document.body.removeChild(S), D);
      }, W = (D) => (D = D.match(/[.\d]+/g).map((S) => +Number(S)), D.length = 3, D);
      return w.toLowerCase() === "transparent" ? b : w[0] === "#" ? E(w) : (w.indexOf("rgb") === -1 && (w = R(w)), w.indexOf("rgb") === 0 ? W(w) : b);
    }, L = (w) => {
      const { offsetX: E, offsetY: R, height: W, width: D } = w, S = R <= W / 2, j = E <= D / 2, O = (X, Z) => Math.sqrt(X ** 2 + Z ** 2), _ = R === W / 2 && E === D / 2, q = {
        first: S === true && j === false,
        second: S === true && j === true,
        third: S === false && j === true,
        fourth: S === false && j === false
      }, Y = {
        topLeft: O(E, R),
        topRight: O(D - E, R),
        bottomLeft: O(E, W - R),
        bottomRight: O(D - E, W - R)
      };
      let U = 0;
      return _ || q.fourth ? U = Y.topLeft : q.third ? U = Y.topRight : q.second ? U = Y.bottomRight : q.first && (U = Y.bottomLeft), U * 2;
    }, F = (w) => {
      var U;
      const E = (U = f.current) == null ? void 0 : U.getBoundingClientRect(), R = w.clientX - E.left, W = w.clientY - E.top, D = E.height, S = E.width, j = {
        offsetX: s ? D / 2 : R,
        offsetY: s ? S / 2 : W,
        height: D,
        width: S
      }, O = {
        delay: n && n * 0.5,
        duration: n && n - n * 0.5
      }, _ = L(j), q = a || _ / 2, Y = {
        left: s ? `${S / 2 - q}px` : `${R - q}px`,
        top: s ? `${D / 2 - q}px` : `${W - q}px`,
        height: a ? `${a * 2}px` : `${_}px`,
        width: a ? `${a * 2}px` : `${_}px`,
        transitionDelay: `0s, ${O.delay}ms`,
        transitionDuration: `${n}ms, ${O.duration}ms`
      };
      return $ ? Y : { ...Y, backgroundImage: `${y()}` };
    }, P = (w) => {
      const E = F(w), R = v.concat(E);
      M(R), i && i(w);
    };
    return (0, import_react.useEffect)(() => {
      const w = setTimeout(() => {
        v.length > 0 && M(v.splice(1, v.length - 1));
      }, n);
      return () => {
        clearTimeout(w);
      };
    }, [n, v]), (0, import_jsx_runtime.jsxs)(t, { className: x, onMouseDown: (w) => P(w), ref: f, ...u, children: [
      o,
      v.map((w, E) => (0, import_jsx_runtime.jsx)(Me, { style: w }, E))
    ] });
  }
);
var ue = import_react.default.forwardRef(
  ({
    className: e,
    color: t = "primary",
    outline: s,
    children: n,
    rounded: r,
    disabled: a,
    floating: c,
    size: o,
    href: i,
    block: u,
    active: d,
    toggle: p,
    noRipple: f,
    tag: g = "button",
    role: b = "button",
    ...h
  }, v) => {
    const [M, $] = (0, import_react.useState)(d || false);
    let B;
    const x = t && ["light", "link"].includes(t) || s ? "dark" : "light";
    t !== "none" ? s ? t ? B = `btn-outline-${t}` : B = "btn-outline-primary" : t ? B = `btn-${t}` : B = "btn-primary" : B = "";
    const y = clsx_m_default(
      t !== "none" && "btn",
      B,
      r && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(i || g !== "button") && a ? "disabled" : ""}`,
      u && "btn-block",
      M && "active",
      e
    );
    return i && g !== "a" && (g = "a"), ["hr", "img", "input"].includes(g) || f ? (0, import_jsx_runtime.jsx)(
      g,
      {
        className: y,
        onClick: p ? () => {
          $(!M);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: n
      }
    ) : (0, import_jsx_runtime.jsx)(
      Re,
      {
        rippleTag: g,
        rippleColor: x,
        className: y,
        onClick: p ? () => {
          $(!M);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: n
      }
    );
  }
);
var ot = import_react.default.forwardRef(
  ({ className: e, children: t, shadow: s, toolbar: n, size: r, vertical: a, tag: c = "div", role: o = "group", ...i }, u) => {
    let d;
    n ? d = "btn-toolbar" : a ? d = "btn-group-vertical" : d = "btn-group";
    const p = clsx_m_default(d, s && `shadow-${s}`, r && `btn-group-${r}`, e);
    return (0, import_jsx_runtime.jsx)(c, { className: p, ref: u, role: o, ...i, children: t });
  }
);
var ct = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", color: n, grow: r, size: a, ...c }, o) => {
    const i = clsx_m_default(
      `${r ? "spinner-grow" : "spinner-border"}`,
      n && `text-${n}`,
      `${a ? r ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(s, { className: i, ref: o, ...c, children: t });
  }
);
var lt = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", shadow: a, alignment: c, ...o }, i) => {
    const u = clsx_m_default(
      "card",
      s && `border border-${s}`,
      n && `bg-${n}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(r, { className: u, ref: i, ...o, children: t });
  }
);
var it = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default("card-header", s && `border-${s}`, n && `bg-${n}`, e);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: t });
  }
);
var ut = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...n }, r) => {
    const a = clsx_m_default("card-subtitle", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var dt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...n }, r) => {
    const a = clsx_m_default("card-title", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var ft = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...n }, r) => {
    const a = clsx_m_default("card-text", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var mt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("card-body", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var pt = import_react.default.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default("card-footer", s && `border-${s}`, n && `bg-${n}`, e);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: t });
  }
);
var gt = ({ className: e, children: t, overlay: s, position: n, fluid: r, ...a }) => {
  const c = clsx_m_default(n && `card-img-${n}`, r && "img-fluid", s && "card-img", e);
  return (0, import_jsx_runtime.jsx)("img", { className: c, ...a, children: t });
};
var bt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("card-img-overlay", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var vt = ({ className: e, children: t, ...s }) => {
  const n = clsx_m_default("card-link", e);
  return (0, import_jsx_runtime.jsx)("a", { className: n, ...s, children: t });
};
var ht = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("card-group", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var yt = import_react.default.forwardRef(
  ({ className: e, tag: t = "ul", horizontal: s, horizontalSize: n, light: r, numbered: a, children: c, small: o, ...i }, u) => {
    const d = clsx_m_default(
      "list-group",
      s && (n ? `list-group-horizontal-${n}` : "list-group-horizontal"),
      r && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: d, ref: u, ...i, children: c });
  }
);
var Nt = import_react.default.forwardRef(
  ({ className: e, tag: t = "li", active: s, disabled: n, action: r, color: a, children: c, noBorders: o, ...i }, u) => {
    const d = t === "button", p = clsx_m_default(
      "list-group-item",
      s && "active",
      n && !d && "disabled",
      r && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: p, disabled: d && n, ref: u, ...i, children: c });
  }
);
var wt = ({
  className: e,
  children: t,
  disableMouseDown: s,
  tag: n = ue,
  tooltipTag: r = "div",
  options: a,
  placement: c = "top",
  title: o,
  wrapperProps: i,
  wrapperClass: u,
  onShow: d,
  onHide: p,
  onMouseEnter: f,
  onMouseLeave: g,
  ...b
}) => {
  const [h, v] = (0, import_react.useState)(null), [M, $] = (0, import_react.useState)(null), [B, x] = (0, import_react.useState)(false), [y, k] = (0, import_react.useState)(false), [L, F] = (0, import_react.useState)(false), [P, w] = (0, import_react.useState)(false), E = clsx_m_default("tooltip", L && "show", "fade", `bs-tooltip-${c}`, e), { styles: R, attributes: W } = usePopper(h, M, {
    placement: c,
    ...a
  });
  (0, import_react.useEffect)(() => {
    let O, _;
    return B || y ? (w(true), O = setTimeout(() => {
      F(true);
    }, 4)) : (F(false), _ = setTimeout(() => {
      w(false);
    }, 300)), () => {
      clearTimeout(O), clearTimeout(_);
    };
  }, [B, y]);
  const D = (O) => {
    d == null || d(O), !O.defaultPrevented && x(true), f == null || f(O);
  }, S = (O) => {
    p == null || p(O), !O.defaultPrevented && x(false), g == null || g(O);
  }, j = (0, import_react.useCallback)(
    (O) => {
      O.target === h ? k(true) : k(false);
    },
    [h]
  );
  return (0, import_react.useEffect)(() => {
    if (!s)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [j, s]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      n,
      {
        className: u,
        onMouseEnter: D,
        onMouseLeave: S,
        ref: v,
        ...i,
        children: t
      }
    ),
    P && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        r,
        {
          ref: $,
          className: E,
          style: R.popper,
          ...W.popper,
          role: "tooltip",
          ...b,
          children: (0, import_jsx_runtime.jsx)("div", { className: "tooltip-inner", children: o })
        }
      ),
      document.body
    )
  ] });
};
var Tt = import_react.default.forwardRef(
  ({
    around: e,
    between: t,
    bottom: s,
    center: n,
    children: r,
    className: a,
    evenly: c,
    end: o,
    middle: i,
    start: u,
    tag: d = "div",
    top: p,
    ...f
  }, g) => {
    const b = clsx_m_default(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      s && "align-self-end",
      n && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      i && "align-self-center",
      u && "justify-content-start",
      p && "align-self-start",
      a
    );
    return (0, import_jsx_runtime.jsx)(d, { className: b, ...f, ref: g, children: r });
  }
);
var Bt = ({
  animate: e,
  className: t,
  icon: s,
  fab: n,
  fas: r,
  fal: a,
  far: c,
  flag: o,
  spin: i,
  fixed: u,
  flip: d,
  list: p,
  size: f,
  pull: g,
  pulse: b,
  color: h,
  border: v,
  rotate: M,
  inverse: $,
  stack: B,
  iconType: x,
  children: y,
  ...k
}) => {
  let L;
  o ? L = "flag" : n ? L = "fab" : r ? L = "fas" : c ? L = "far" : a ? L = "fal" : L = "fa";
  const F = clsx_m_default(
    x ? `fa-${x}` : L,
    e && `fa-${e}`,
    o ? `flag-${o}` : s && `fa-${s}`,
    f && `fa-${f}`,
    h && `text-${h}`,
    v && "fa-border",
    M && `fa-rotate-${M}`,
    g && `fa-pull-${g}`,
    i && !e && "fa-spin",
    p && "fa-li",
    u && "fa-fw",
    b && !e && "fa-pulse",
    $ && "fa-inverse",
    d && `fa-flip-${d}`,
    B && `fa-stack-${B}`,
    t
  );
  return (0, import_jsx_runtime.jsx)("i", { className: F, ...k, children: y });
};
var Dt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    tag: s = "p",
    variant: n,
    color: r,
    blockquote: a,
    note: c,
    noteColor: o,
    listUnStyled: i,
    listInLine: u,
    ...d
  }, p) => {
    const f = clsx_m_default(
      n && n,
      a && "blockquote",
      c && "note",
      r && `text-${r}`,
      o && `note-${o}`,
      i && "list-unstyled",
      u && "list-inline",
      e
    );
    return a && (s = "blockquote"), (i || u) && (s = "ul"), (0, import_jsx_runtime.jsx)(s, { className: f, ref: p, ...d, children: t });
  }
);
var Mt = import_react.default.forwardRef(
  ({ className: e, color: t, uppercase: s, bold: n, children: r, ...a }, c) => {
    const o = clsx_m_default(
      "breadcrumb",
      n && "font-weight-bold",
      t && `text-${t}`,
      s && "text-uppercase",
      e
    );
    return (0, import_jsx_runtime.jsx)("nav", { "aria-label": "breadcrumb", children: (0, import_jsx_runtime.jsx)("ol", { className: o, ref: c, ...a, children: r }) });
  }
);
var $t = import_react.default.forwardRef(
  ({ className: e, active: t, current: s = "page", children: n, ...r }, a) => {
    const c = clsx_m_default("breadcrumb-item", t && "active", e);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ref: a, "aria-current": t && s, ...r, children: n });
  }
);
var Ee = (e) => {
  if (e !== false)
    return `navbar-expand-${e}`;
};
var Rt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    light: s,
    dark: n,
    scrolling: r,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: i,
    transparent: u,
    expand: d,
    tag: p = "nav",
    bgColor: f,
    ...g
  }, b) => {
    const [h, v] = (0, import_react.useState)(false), M = clsx_m_default(
      {
        "navbar-light": s,
        "navbar-dark": n,
        "scrolling-navbar": r || o,
        "top-nav-collapse": h,
        [`text-${i}`]: i && u ? h : i
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      d && Ee(d),
      f && `bg-${f}`,
      e
    ), $ = (0, import_react.useCallback)(() => {
      o && window.pageYOffset > o ? v(true) : v(false);
    }, [o]);
    return (0, import_react.useEffect)(() => ((r || o) && window.addEventListener("scroll", $), () => {
      window.removeEventListener("scroll", $);
    }), [$, r, o]), (0, import_jsx_runtime.jsx)(p, { className: M, role: "navigation", ...g, ref: b, children: t });
  }
);
var Et = import_react.default.forwardRef(
  ({ children: e, className: t = "", disabled: s = false, active: n = false, tag: r = "a", ...a }, c) => {
    const o = clsx_m_default("nav-link", s ? "disabled" : n ? "active" : "", t);
    return (0, import_jsx_runtime.jsx)(r, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
);
var Ct = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "a", ...n }, r) => {
    const a = clsx_m_default("navbar-brand", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ref: r, ...n, children: t });
  }
);
var It = import_react.default.forwardRef(
  ({ children: e, className: t, active: s, text: n, tag: r = "li", ...a }, c) => {
    const o = clsx_m_default("nav-item", s && "active", n && "navbar-text", t);
    return (0, import_jsx_runtime.jsx)(r, { ...a, className: o, ref: c, children: e });
  }
);
var xt = import_react.default.forwardRef(
  ({ children: e, className: t, right: s, fullWidth: n = true, left: r, tag: a = "ul", ...c }, o) => {
    const i = clsx_m_default("navbar-nav", n && "w-100", s && "ms-auto", r && "me-auto", t);
    return (0, import_jsx_runtime.jsx)(a, { className: i, ref: o, ...c, children: e });
  }
);
var Lt = import_react.default.forwardRef(
  ({ children: e, className: t, tag: s = "button", ...n }, r) => {
    const a = clsx_m_default("navbar-toggler", t);
    return (0, import_jsx_runtime.jsx)(s, { ...n, className: a, ref: r, children: e });
  }
);
var kt = import_react.default.forwardRef(
  ({ children: e, bgColor: t, color: s, className: n, ...r }, a) => {
    const c = clsx_m_default(t && `bg-${t}`, s && `text-${s}`, n);
    return (0, import_jsx_runtime.jsx)("footer", { className: c, ...r, ref: a, children: e });
  }
);
var Ot = import_react.default.forwardRef(
  ({ children: e, size: t, circle: s, center: n, end: r, start: a, className: c, ...o }, i) => {
    const u = clsx_m_default(
      "pagination",
      n && "justify-content-center",
      s && "pagination-circle",
      r && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: u, ...o, ref: i, children: e });
  }
);
var At = import_react.default.forwardRef(
  ({ children: e, className: t, tag: s = "a", ...n }, r) => {
    const a = clsx_m_default("page-link", t);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: e });
  }
);
var Pt = import_react.default.forwardRef(
  ({ children: e, className: t, active: s, disabled: n, ...r }, a) => {
    const c = clsx_m_default("page-item", s && "active", n && "disabled", t);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ...r, ref: a, children: e });
  }
);
var St = ({
  className: e,
  classNameResponsive: t,
  responsive: s,
  align: n,
  borderColor: r,
  bordered: a,
  borderless: c,
  children: o,
  color: i,
  hover: u,
  small: d,
  striped: p,
  ...f
}) => {
  const g = clsx_m_default(
    "table",
    n && `align-${n}`,
    r && `border-${r}`,
    a && "table-bordered",
    c && "table-borderless",
    i && `table-${i}`,
    u && "table-hover",
    d && "table-sm",
    p && "table-striped",
    e
  ), b = (0, import_react.useMemo)(() => (0, import_jsx_runtime.jsx)("table", { className: g, ...f, children: o }), [o, g, f]);
  if (s) {
    const h = clsx_m_default(
      typeof s == "string" ? `table-responsive-${s}` : "table-responsive",
      t
    );
    return (0, import_jsx_runtime.jsx)("div", { className: h, children: b });
  } else
    return b;
};
var Ft = ({ className: e, children: t, dark: s, light: n, ...r }) => {
  const a = clsx_m_default(s && "table-dark", n && "table-light", e);
  return (0, import_jsx_runtime.jsx)("thead", { className: a, ...r, children: t });
};
var Wt = ({ className: e, children: t, ...s }) => {
  const n = clsx_m_default(e);
  return (0, import_jsx_runtime.jsx)("tbody", { className: n, ...s, children: t });
};
var Ce = import_react.default.forwardRef(
  ({
    animated: e,
    children: t,
    className: s,
    style: n,
    tag: r = "div",
    valuenow: a,
    valuemax: c,
    striped: o,
    bgColor: i,
    valuemin: u,
    width: d,
    ...p
  }, f) => {
    const g = clsx_m_default(
      "progress-bar",
      i && `bg-${i}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      s
    ), b = { width: `${d}%`, ...n };
    return (0, import_jsx_runtime.jsx)(
      r,
      {
        className: g,
        style: b,
        ref: f,
        role: "progressbar",
        ...p,
        "aria-valuenow": Number(d) ?? a,
        "aria-valuemin": Number(u),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
);
var Xt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", height: n, style: r, ...a }, c) => {
    const o = clsx_m_default("progress", e), i = { height: `${n}px`, ...r };
    return (0, import_jsx_runtime.jsx)(s, { className: o, ref: c, style: i, ...a, children: import_react.default.Children.map(t, (u) => {
      if (!import_react.default.isValidElement(u) || u.type !== Ce) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return u;
    }) });
  }
);
var Ie = (e) => {
  const [t, s] = (0, import_react.useState)(false), n = (0, import_react.useMemo)(() => new IntersectionObserver(([r]) => {
    s(r.isIntersecting);
  }), []);
  return (0, import_react.useEffect)(() => {
    if (e.current)
      return n.observe(e.current), () => n.disconnect();
  }, [n, e]), t;
};
var _t = import_react.default.forwardRef(
  ({
    className: e,
    size: t,
    contrast: s,
    value: n,
    defaultValue: r,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: i,
    wrapperTag: u = "div",
    label: d,
    onChange: p,
    children: f,
    labelRef: g,
    labelStyle: b,
    type: h,
    onBlur: v,
    readonly: M = false,
    ...$
  }, B) => {
    var Y, U;
    const [x, y] = (0, import_react.useState)(n || r), [k, L] = (0, import_react.useState)(0), [F, P] = (0, import_react.useState)(false), w = (0, import_react.useRef)(null), E = Ie(w);
    (0, import_react.useImperativeHandle)(B, () => w.current);
    const R = (0, import_react.useRef)(null), W = g || R, D = clsx_m_default("form-outline", s && "form-white", o), S = clsx_m_default(
      "form-control",
      F && "active",
      h === "date" && "active",
      t && `form-control-${t}`,
      e
    ), j = clsx_m_default("form-label", c);
    (0, import_react.useEffect)(() => {
      if (!w.current)
        return;
      const { value: X } = w.current;
      X != "" ? P(true) : P(false);
    }, [(Y = w.current) == null ? void 0 : Y.value]), (0, import_react.useEffect)(() => {
      n !== void 0 && (n != "" ? P(true) : P(false));
    }, [n]), (0, import_react.useEffect)(() => {
      r !== void 0 && (r != "" ? P(true) : P(false));
    }, [r]);
    const O = (0, import_react.useCallback)(() => {
      var X;
      (X = W.current) != null && X.clientWidth && L(W.current.clientWidth * 0.8 + 8);
    }, [W]);
    (0, import_react.useEffect)(() => {
      O();
    }, [(U = W.current) == null ? void 0 : U.clientWidth, O, E]);
    const _ = (X) => {
      y(X.target.value), p == null || p(X);
    }, q = (0, import_react.useCallback)(
      (X) => {
        w.current && (x !== void 0 && x != "" || n !== void 0 && n != "" || w.current.value != "" ? P(true) : P(false), v && v(X));
      },
      [x, n, v]
    );
    return (0, import_jsx_runtime.jsxs)(u, { className: D, style: i, children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: h,
          readOnly: M,
          className: S,
          onBlur: q,
          onChange: _,
          onFocus: O,
          value: n,
          defaultValue: r,
          id: a,
          ref: w,
          ...$
        }
      ),
      d && (0, import_jsx_runtime.jsx)("label", { className: j, style: b, htmlFor: a, ref: W, children: d }),
      (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: k } }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
      ] }),
      f
    ] });
  }
);
var de = ({
  className: e,
  inputRef: t,
  labelClass: s,
  wrapperClass: n,
  labelStyle: r,
  wrapperTag: a = "div",
  wrapperStyle: c,
  label: o,
  inline: i,
  btn: u,
  id: d,
  btnColor: p,
  disableWrapper: f,
  toggleSwitch: g,
  ...b
}) => {
  let h = "form-check-input", v = "form-check-label";
  u && (h = "btn-check", p ? v = `btn btn-${p}` : v = "btn btn-primary");
  const M = clsx_m_default(
    o && !u && "form-check",
    i && !u && "form-check-inline",
    g && "form-switch",
    n
  ), $ = clsx_m_default(h, e), B = clsx_m_default(v, s), x = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)("input", { className: $, id: d, ref: t, ...b }),
    o && (0, import_jsx_runtime.jsx)("label", { className: B, style: r, htmlFor: d, children: o })
  ] });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: f ? x : (0, import_jsx_runtime.jsx)(a, { style: c, className: M, children: x }) });
};
var jt = ({ ...e }) => (0, import_jsx_runtime.jsx)(de, { type: "checkbox", ...e });
var Yt = ({ ...e }) => (0, import_jsx_runtime.jsx)(de, { type: "radio", ...e });
var xe = ({
  className: e,
  children: t,
  show: s = false,
  id: n,
  navbar: r,
  tag: a = "div",
  collapseRef: c,
  style: o,
  onShow: i,
  onHide: u,
  ...d
}) => {
  const [p, f] = (0, import_react.useState)(false), [g, b] = (0, import_react.useState)(void 0), [h, v] = (0, import_react.useState)(false), M = clsx_m_default(
    h ? "collapsing" : "collapse",
    !h && p && "show",
    r && "navbar-collapse",
    e
  ), $ = (0, import_react.useRef)(null), B = c ?? $, x = (0, import_react.useCallback)(() => {
    p && b(void 0);
  }, [p]);
  return (0, import_react.useEffect)(() => {
    var y;
    g === void 0 && p && b((y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight);
  }, [g, p, B]), (0, import_react.useEffect)(() => {
    p !== s && (s ? i == null || i() : u == null || u(), f(s)), p && v(true);
    const y = setTimeout(() => {
      v(false);
    }, 350);
    return () => {
      clearTimeout(y);
    };
  }, [s, p, i, u]), (0, import_react.useEffect)(() => {
    var y;
    b(p ? (y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight : 0);
  }, [p, B, t]), (0, import_react.useEffect)(() => (window.addEventListener("resize", x), () => {
    window.removeEventListener("resize", x);
  }), [x]), (0, import_jsx_runtime.jsx)(a, { style: { height: g, ...o }, id: n, className: M, ...d, ref: B, children: t });
};
var ye = (0, import_react.createContext)(null);
var Le = ({
  children: e,
  isOpen: t = false,
  options: s,
  animation: n = true,
  dropup: r,
  dropright: a,
  dropleft: c,
  onHide: o,
  onShow: i
}) => {
  const [u, d] = (0, import_react.useState)(t), [p, f] = (0, import_react.useState)(null), [g, b] = (0, import_react.useState)(null), [h, v] = (0, import_react.useState)(-1);
  return (0, import_jsx_runtime.jsx)(
    ye.Provider,
    {
      value: {
        animation: n,
        activeIndex: h,
        isOpenState: u,
        setReferenceElement: f,
        setPopperElement: b,
        setActiveIndex: v,
        popperElement: g,
        setIsOpenState: d,
        referenceElement: p,
        onHide: o,
        onShow: i,
        dropup: r,
        options: s,
        dropright: a,
        dropleft: c
      },
      children: e
    }
  );
};
var ke = (e) => e instanceof HTMLElement;
var Oe = (e) => e instanceof Node;
var ne = () => {
  const e = (0, import_react.useContext)(ye);
  if (!e)
    throw new Error("Missing context data");
  return e;
};
var Ae = () => {
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: s, popperElement: n, referenceElement: r, onHide: a } = ne(), c = (0, import_react.useCallback)(
    (o) => {
      a == null || a(o), !(!e || !Oe(o.target) || n && n.contains(o.target) || r && r.contains(o.target) || o.defaultPrevented) && (t(false), setTimeout(() => s(-1), 300));
    },
    [e, t, s, n, r, a]
  );
  (0, import_react.useEffect)(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
};
var Pe = ({
  className: e,
  tag: t = "div",
  group: s,
  children: n,
  dropup: r,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  Ae();
  const i = clsx_m_default(
    s ? "btn-group" : "dropdown",
    r && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return (0, import_jsx_runtime.jsx)(t, { className: i, ...o, children: n });
};
var Vt = ({ animation: e, onHide: t, onShow: s, ...n }) => (0, import_jsx_runtime.jsx)(Le, { animation: e, onHide: t, onShow: s, ...n, children: (0, import_jsx_runtime.jsx)(Pe, { ...n }) });
var Se = ({
  childTag: e,
  children: t,
  disabled: s,
  link: n,
  divider: r,
  header: a,
  href: c = "#"
}) => {
  const o = clsx_m_default("dropdown-item", s && "disabled");
  return n ? e ? (0, import_jsx_runtime.jsx)(e, { className: o, children: t }) : (0, import_jsx_runtime.jsx)("a", { href: c, className: o, children: t }) : r ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-divider", children: t }) : (0, import_jsx_runtime.jsx)("hr", { className: "dropdown-divider" }) : a ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)("h6", { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t });
};
var qt = ({
  onClick: e,
  tag: t = "li",
  childTag: s,
  children: n,
  style: r,
  link: a,
  divider: c,
  header: o,
  disabled: i,
  href: u,
  preventCloseOnClick: d,
  ...p
}) => {
  const { setIsOpenState: f, onHide: g, setActiveIndex: b } = ne();
  return (0, import_jsx_runtime.jsx)(t, { style: r, onClick: (v) => {
    g == null || g(v), e == null || e(v), !(i || d || v.defaultPrevented) && (setTimeout(() => b(-1), 300), f(false));
  }, ...p, children: (0, import_jsx_runtime.jsx)(
    Se,
    {
      link: a,
      divider: c,
      header: o,
      disabled: i,
      href: u,
      childTag: s,
      children: n
    }
  ) });
};
var ge = (e, t, s) => s === "up" ? e <= 0 ? t[t.length - 1].props.divider === true || t[t.length - 1].props.disabled === true : t[e - 1].props.divider === true || t[e - 1].props.disabled === true : e === t.length - 1 ? t[0].props.divider === true || t[0].props.disabled === true : t[e + 1].props.divider === true || t[e + 1].props.disabled === true;
var Fe = (e) => {
  const { activeIndex: t, isOpenState: s, setIsOpenState: n, setActiveIndex: r, onHide: a } = ne(), c = (0, import_react.useCallback)(
    (o) => {
      const i = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !i.includes(o.key))) {
        if (ke(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const u = ge(t, e, "up");
          if (t === 1) {
            r(u ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            r(u ? e.length - 2 : e.length - 1);
            return;
          }
          r((d) => u ? d - 2 : d - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const u = ge(t, e, "down");
          if (t === e.length - 2) {
            r((d) => u ? 0 : d + 1);
            return;
          }
          if (t === e.length - 1) {
            r(u ? 1 : 0);
            return;
          }
          r((d) => u ? d + 2 : d + 1);
        }
        if (o.key === "Enter") {
          const u = document.querySelector('[data-active="true"]'), d = u == null ? void 0 : u.firstElementChild;
          if (d)
            return d.click();
          if (a == null || a(o), o.defaultPrevented)
            return;
          n(false), setTimeout(() => r(-1), 300);
        }
        if (o.key === "Escape") {
          if (a == null || a(o), o.defaultPrevented)
            return;
          n(false), setTimeout(() => r(-1), 300);
        }
      }
    },
    [e, n, r, t, a]
  );
  (0, import_react.useEffect)(() => (s && document.addEventListener("keydown", c), () => {
    s && document.removeEventListener("keydown", c);
  }), [s, c]), (0, import_react.useEffect)(() => {
    const o = document.querySelector('[data-active="true"]'), i = o == null ? void 0 : o.firstElementChild;
    return i == null || i.focus(), () => i == null ? void 0 : i.blur();
  }, [t]);
};
var We = () => {
  const { isOpenState: e } = ne(), [t, s] = (0, import_react.useState)(false), [n, r] = (0, import_react.useState)(false), [a, c] = (0, import_react.useState)(e);
  return (0, import_react.useEffect)(() => {
    let o;
    return e || (r(true), s(false), o = setTimeout(() => {
      r(false), c(false);
    }, 300)), e && (s(true), r(false), c(true), o = setTimeout(() => {
      s(false);
    }, 300)), () => clearTimeout(o);
  }, [e]), { show: a, isFadeIn: t, isFadeOut: n };
};
var Gt = ({
  className: e,
  tag: t = "ul",
  children: s,
  style: n,
  dark: r,
  responsive: a = "",
  appendToBody: c = false,
  alwaysOpen: o,
  ...i
}) => {
  const {
    activeIndex: u,
    setPopperElement: d,
    isOpenState: p,
    animation: f,
    referenceElement: g,
    popperElement: b,
    options: h,
    dropleft: v,
    dropup: M,
    dropright: $
  } = ne(), { show: B, isFadeIn: x, isFadeOut: y } = We();
  Fe(s);
  const k = () => {
    if ($)
      return "right-start";
    if (v)
      return "left-start";
    const w = b && getComputedStyle(b).getPropertyValue("--mdb-position").trim() === "end";
    return M ? w ? "top-end" : "top-start" : w ? "bottom-end" : "bottom-start";
  }, { styles: L } = usePopper(g, b, {
    placement: k(),
    modifiers: [flip_default2],
    ...h
  }), F = clsx_m_default(
    "dropdown-menu",
    r && "dropdown-menu-dark",
    p && "show",
    f && "animation",
    x && "fade-in",
    y && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!B && !o)
    return null;
  const P = (0, import_jsx_runtime.jsx)(
    t,
    {
      className: F,
      style: { position: "absolute", zIndex: 1e3, ...L.popper, ...n },
      ref: d,
      ...i,
      children: import_react.Children.map(
        s,
        (w, E) => (0, import_react.cloneElement)(w, {
          tabIndex: 1,
          "data-active": u === E && true,
          className: clsx_m_default(u === E ? "active" : "", w.props.className)
        })
      )
    }
  );
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: c ? (0, import_react_dom.createPortal)(P, document.body) : P });
};
var Kt = ({
  className: e,
  tag: t = ue,
  children: s,
  onClick: n,
  split: r,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: i, setActiveIndex: u, onHide: d, onShow: p } = ne(), f = clsx_m_default("dropdown-toggle", r && "dropdown-toggle-split", e);
  return (0, import_jsx_runtime.jsx)(
    t,
    {
      onClick: (b) => {
        n == null || n(b), i ? d == null || d(b) : p == null || p(b), !b.defaultPrevented && (c((h) => !h), setTimeout(() => u(-1), 300));
      },
      ref: o,
      className: f,
      "aria-expanded": !!i,
      ...a,
      children: s
    }
  );
};
var Ut = ({
  className: e,
  btnClassName: t,
  btnChildren: s,
  children: n,
  tag: r = ue,
  onShow: a,
  onHide: c,
  popperTag: o = "div",
  isOpen: i,
  placement: u = "bottom",
  dismiss: d,
  options: p,
  poperStyle: f,
  onClick: g,
  ...b
}) => {
  const [h, v] = (0, import_react.useState)(), [M, $] = (0, import_react.useState)(), { styles: B, attributes: x } = usePopper(h, M, { placement: u, ...p }), [y, k] = (0, import_react.useState)(i ?? false), [L, F] = (0, import_react.useState)(false), [P, w] = (0, import_react.useState)(false), E = clsx_m_default(
    "popover fade",
    L && y && "show",
    `bs-popover-${u === "left" ? "start" : u === "right" ? "end" : u}`,
    e
  ), R = (D) => {
    y && !d ? c == null || c() : y || a == null || a(), d ? (w(true), k(true)) : k(!y), g && g(D);
  };
  (0, import_react.useEffect)(() => {
    i || k(false);
  }, [i]);
  const W = (0, import_react.useCallback)(
    (D) => {
      P && M && M !== null && y && h && h !== null && (h.contains(D.target) || (k(false), c == null || c()));
    },
    [P, y, M, h, c]
  );
  return (0, import_react.useEffect)(() => {
    const D = setTimeout(() => {
      F(y);
    }, 150);
    return () => {
      clearTimeout(D);
    };
  }, [y]), (0, import_react.useEffect)(() => (y && document.addEventListener("mousedown", W), () => {
    document.removeEventListener("mousedown", W);
  }), [W, y]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(r, { onClick: R, className: t, ...b, ref: v, children: s }),
    (L || y) && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        o,
        {
          className: E,
          ref: $,
          style: { ...B.popper, ...f },
          ...x.popper,
          children: n
        }
      ),
      document.body
    )
  ] });
};
var Jt = ({
  className: e,
  children: t,
  tag: s = "div",
  ...n
}) => {
  const r = clsx_m_default("popover-body", e);
  return (0, import_jsx_runtime.jsx)(s, { className: r, ...n, children: t });
};
var Qt = ({
  className: e,
  children: t,
  tag: s = "h3",
  ...n
}) => {
  const r = clsx_m_default("popover-header", e);
  return (0, import_jsx_runtime.jsx)(s, { className: r, ...n, children: t });
};
var Zt = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: s = true,
  children: n,
  className: r,
  closeOnEsc: a = true,
  setShow: c,
  leaveHiddenModal: o = true,
  modalRef: i,
  onHide: u,
  onHidePrevented: d,
  onShow: p,
  show: f,
  staticBackdrop: g,
  nonInvasive: b = false,
  tag: h = "div",
  ...v
}) => {
  const [M, $] = (0, import_react.useState)(f), [B, x] = (0, import_react.useState)(f), [y, k] = (0, import_react.useState)(f), [L, F] = (0, import_react.useState)(false), [P, w] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)([]), W = (0, import_react.useRef)(null), D = i || W, S = clsx_m_default(
    "modal",
    L && "modal-static",
    e,
    "fade",
    B && "show",
    M && b && "modal-non-invasive-show",
    r
  ), j = clsx_m_default("modal-backdrop", "fade", M && "show"), O = (0, import_react.useCallback)(() => {
    x((X) => (X && (u == null || u()), false)), setTimeout(() => {
      $(false), c == null || c(false);
    }, 150), setTimeout(() => {
      k(false);
    }, 350);
  }, [u, c]), _ = (0, import_react.useCallback)(
    (X) => {
      b || B && X.target === D.current && (g ? (F(true), d == null || d(), setTimeout(() => {
        F(false);
      }, 300)) : O());
    },
    [B, D, g, O, d, b]
  ), q = (0, import_react.useCallback)(
    (X) => {
      B && X.key === "Tab" && (X.preventDefault(), w(P + 1)), a && B && X.key === "Escape" && (g ? (F(true), d == null || d(), setTimeout(() => {
        F(false);
      }, 300)) : O());
    },
    [B, a, P, g, O, d]
  );
  (0, import_react.useEffect)(() => {
    var z;
    const X = (z = D.current) == null ? void 0 : z.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), Z = Array.from(X).filter((C) => C.tabIndex !== -1).sort((C, A) => C.tabIndex === A.tabIndex ? 0 : A.tabIndex === null ? -1 : C.tabIndex === null ? 1 : C.tabIndex - A.tabIndex);
    R(Z), w(Z.length - 1);
  }, [D]), (0, import_react.useEffect)(() => {
    E && E.length > 0 && (P === E.length ? (E[0].focus(), w(0)) : E[P].focus());
  }, [P, E]), (0, import_react.useEffect)(() => {
    const X = () => {
      const z = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - z);
    }, Z = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (y && Z && !b) {
      const z = X();
      document.body.classList.add("modal-open"), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${z}px`;
    } else
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    return () => {
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    };
  }, [y, b]), (0, import_react.useEffect)(() => {
    f ? (p == null || p(), k(true), setTimeout(() => {
      $(true);
    }, 0), setTimeout(() => {
      x(true), c == null || c(true);
    }, 150)) : O();
  }, [f, O, c, p]), (0, import_react.useEffect)(() => {
    const X = (Z) => {
      Z.target.closest(".modal-dialog") || window.addEventListener("mouseup", _, { once: true });
    };
    return window.addEventListener("mousedown", X), window.addEventListener("keydown", q), () => {
      window.removeEventListener("mousedown", X), window.removeEventListener("keydown", q);
    };
  }, [q, _]);
  const Y = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || f || y) && import_react_dom.default.createPortal(
    (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      (0, import_jsx_runtime.jsx)(
        h,
        {
          className: S,
          ref: D,
          style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
          ...v,
          children: n
        }
      ),
      import_react_dom.default.createPortal(
        s && y && !b && (0, import_jsx_runtime.jsx)("div", { className: j }),
        document.body
      )
    ] }),
    document.body
  ) }), U = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || f || y) && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      h,
      {
        className: S,
        ref: D,
        style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
        ...v,
        children: n
      }
    ),
    import_react_dom.default.createPortal(
      s && y && !b && (0, import_jsx_runtime.jsx)("div", { onClick: O, className: j }),
      document.body
    )
  ] }) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t ? Y : U });
};
var zt = import_react.default.forwardRef(
  ({ className: e, centered: t, children: s, size: n, scrollable: r, tag: a = "div", ...c }, o) => {
    const i = clsx_m_default(
      "modal-dialog",
      r && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      n && `modal-${n}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: i, ...c, ref: o, children: s });
  }
);
var Ht = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("modal-content", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var es = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("modal-header", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var ts = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...n }, r) => {
    const a = clsx_m_default("modal-title", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var ss = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("modal-body", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var ns = import_react.default.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = clsx_m_default("modal-footer", e);
    return (0, import_jsx_runtime.jsx)(s, { className: a, ...n, ref: r, children: t });
  }
);
var fe = import_react.default.createContext({
  activeElement: null,
  setTargets: null
});
var rs = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: s,
  offset: n = 10,
  ...r
}) => {
  const a = clsx_m_default("sticky-top", t), [c, o] = (0, import_react.useState)(null), [i, u] = (0, import_react.useState)([]), d = e instanceof Window, p = (0, import_react.useCallback)(() => {
    var M, $, B;
    if (!i.length)
      return;
    const f = d ? window.pageYOffset : (M = e == null ? void 0 : e.current) == null ? void 0 : M.scrollTop, g = Number(n), b = ($ = i[i.length - 1]) == null ? void 0 : $.current, h = (B = i[0]) == null ? void 0 : B.current;
    f + g < h.offsetTop && o(null), i.forEach((x, y) => {
      var P;
      const k = (P = i[y + 1]) == null ? void 0 : P.current, L = x.current;
      if (f > L.offsetTop - g && f < (k == null ? void 0 : k.offsetTop) - g) {
        o(L);
        return;
      }
    }), f > b.offsetTop - g && o(b);
  }, [n, i, d, e]);
  return (0, import_react.useEffect)(() => {
    const f = d ? e : e == null ? void 0 : e.current;
    return p(), f == null || f.addEventListener("scroll", p), () => {
      f == null || f.removeEventListener("scroll", p);
    };
  }, [p, e, d]), (0, import_jsx_runtime.jsx)("div", { className: a, ...r, children: (0, import_jsx_runtime.jsx)("ul", { className: "nav flex-column nav-pills menu-sidebar", children: (0, import_jsx_runtime.jsx)(fe.Provider, { value: { activeElement: c, setTargets: u }, children: s }) }) });
};
var as = ({
  className: e,
  collapsible: t,
  targetRef: s,
  children: n,
  subsections: r,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var h;
  const { activeElement: i, setTargets: u } = (0, import_react.useContext)(fe), d = () => r == null ? void 0 : r.some((v) => v.current.id === (i == null ? void 0 : i.id)), p = (i == null ? void 0 : i.id) === ((h = s.current) == null ? void 0 : h.id), f = p || d();
  p && (c == null || c(i == null ? void 0 : i.id));
  const g = clsx_m_default("nav-link", t && "collapsible-scrollspy", f && "active", e), b = (v) => {
    const M = s == null ? void 0 : s.current;
    M == null || M.scrollIntoView({ behavior: "smooth" }), a == null || a(v);
  };
  return (0, import_react.useEffect)(() => {
    u((v) => [...v, s]);
  }, [u, s]), (0, import_jsx_runtime.jsx)("li", { className: "nav-item", style: { cursor: "pointer" }, children: (0, import_jsx_runtime.jsx)("a", { className: g, onClick: b, ...o, children: n }) });
};
var os = ({
  collapsible: e,
  className: t,
  children: s,
  style: n,
  ...r
}) => {
  const [a, c] = (0, import_react.useState)("0px"), { activeElement: o } = (0, import_react.useContext)(fe), i = clsx_m_default("nav flex-column", t), u = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const p = () => e == null ? void 0 : e.some((g) => g.current.id === (o == null ? void 0 : o.id)), f = u.current;
    p() ? c(`${f == null ? void 0 : f.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const d = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...n
  };
  return (0, import_jsx_runtime.jsx)("ul", { className: i, ref: u, style: e ? d : n, ...r, children: s });
};
var cs = ({ ...e }) => (0, import_jsx_runtime.jsx)(de, { type: "checkbox", toggleSwitch: true, ...e });
var Xe = ({ value: e, min: t = "0", max: s = "100", showThumb: n }) => {
  const r = Number(e), [a, c] = (0, import_react.useState)(
    (r || 0 - Number(t)) * 100 / (Number(s) - Number(t))
  ), o = clsx_m_default("thumb", n && "thumb-active");
  return (0, import_react.useEffect)(() => {
    c((Number(e) - Number(t)) * 100 / (Number(s) - Number(t)));
  }, [e, s, t]), (0, import_jsx_runtime.jsx)("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: (0, import_jsx_runtime.jsx)("span", { className: "thumb-value", children: e }) });
};
var ls = ({
  className: e,
  defaultValue: t = 0,
  disableTooltip: s,
  labelId: n,
  max: r,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: i,
  onTouchEnd: u,
  onChange: d,
  labelClass: p,
  value: f,
  label: g,
  id: b,
  inputRef: h,
  ...v
}) => {
  const [M, $] = (0, import_react.useState)(t), [B, x] = (0, import_react.useState)(false), y = clsx_m_default("form-range", e), k = clsx_m_default("form-label", p);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    g && (0, import_jsx_runtime.jsx)("label", { className: k, id: n, htmlFor: b, children: g }),
    (0, import_jsx_runtime.jsxs)("div", { className: "range", children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "range",
          onMouseDown: (R) => {
            x(true), c && c(R);
          },
          onMouseUp: (R) => {
            x(false), o && o(R);
          },
          onTouchStart: (R) => {
            x(true), i && i(R);
          },
          onTouchEnd: (R) => {
            x(false), u && u(R);
          },
          onChange: (R) => {
            $(R.target.value), d && d(R);
          },
          className: y,
          value: f || M,
          id: b,
          min: a,
          max: r,
          ref: h,
          ...v
        }
      ),
      !s && (0, import_jsx_runtime.jsx)(Xe, { value: f || M, showThumb: B, min: a, max: r })
    ] })
  ] });
};
var is = ({ className: e, labelClass: t, labelStyle: s, inputRef: n, size: r, label: a, id: c, ...o }) => {
  const i = clsx_m_default("form-control", `form-control-${r}`, e), u = clsx_m_default("form-label", t);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    a && (0, import_jsx_runtime.jsx)("label", { className: u, style: s, htmlFor: c, children: a }),
    (0, import_jsx_runtime.jsx)("input", { className: i, type: "file", id: c, ref: n, ...o })
  ] });
};
var us = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: s,
    textBefore: n,
    textAfter: r,
    noWrap: a,
    tag: c = "div",
    textTag: o = "span",
    textClass: i,
    size: u,
    textProps: d,
    ...p
  }, f) => {
    const g = clsx_m_default("input-group", a && "flex-nowrap", u && `input-group-${u}`, e), b = clsx_m_default("input-group-text", s && "border-0", i), h = (v) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: v && Array.isArray(v) ? v.map((M, $) => (0, import_jsx_runtime.jsx)(o, { className: b, ...d, children: M }, $)) : (0, import_jsx_runtime.jsx)(o, { className: b, ...d, children: v }) });
    return (0, import_jsx_runtime.jsxs)(c, { className: g, ref: f, ...p, children: [
      n && h(n),
      t,
      r && h(r)
    ] });
  }
);
var ds = import_react.default.forwardRef(
  ({ className: e, children: t, isValidated: s = false, onReset: n, onSubmit: r, noValidate: a = true, ...c }, o) => {
    const [i, u] = (0, import_react.useState)(s), d = clsx_m_default("needs-validation", i && "was-validated", e), p = (g) => {
      g.preventDefault(), u(true), r && r(g);
    }, f = (g) => {
      g.preventDefault(), u(false), n && n(g);
    };
    return (0, import_react.useEffect)(() => {
      u(s);
    }, [s]), (0, import_jsx_runtime.jsx)(
      "form",
      {
        className: d,
        onSubmit: p,
        onReset: f,
        ref: o,
        noValidate: a,
        ...c,
        children: t
      }
    );
  }
);
var fs = import_react.default.forwardRef(
  ({ className: e, fill: t, pills: s, justify: n, children: r, ...a }, c) => {
    const o = clsx_m_default(
      "nav",
      s ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      n && "nav-justified",
      e
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: o, ref: c, ...a, children: r });
  }
);
var ms = import_react.default.forwardRef(
  ({ className: e, children: t, style: s, tag: n = "li", ...r }, a) => {
    const c = clsx_m_default("nav-item", e);
    return (0, import_jsx_runtime.jsx)(n, { className: c, style: { cursor: "pointer", ...s }, role: "presentation", ref: a, ...r, children: t });
  }
);
var ps = import_react.default.forwardRef(
  ({ className: e, color: t, active: s, onShow: n, onHide: r, children: a, ...c }, o) => {
    const i = clsx_m_default("nav-link", s && "active", t && `bg-${t}`, e);
    return (0, import_react.useEffect)(() => {
      s ? n == null || n() : r == null || r();
    }, [s]), (0, import_jsx_runtime.jsx)("a", { className: i, ref: o, ...c, children: a });
  }
);
var gs = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", children: s, ...n }, r) => {
    const a = clsx_m_default("tab-content", e);
    return (0, import_jsx_runtime.jsx)(t, { className: a, ref: r, ...n, children: s });
  }
);
var bs = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", show: s, children: n, ...r }, a) => {
    const [c, o] = (0, import_react.useState)(false), i = clsx_m_default("tab-pane", "fade", c && "show", s && "active", e);
    return (0, import_react.useEffect)(() => {
      let u;
      return s ? u = setTimeout(() => {
        o(true);
      }, 100) : o(false), () => {
        clearTimeout(u);
      };
    }, [s]), (0, import_jsx_runtime.jsx)(t, { className: i, role: "tabpanel", ref: a, ...r, children: n });
  }
);
var me = (0, import_react.createContext)({
  active: 0
});
var _e = ({ imagesCount: e, to: t }) => {
  const { active: s } = (0, import_react.useContext)(me);
  return (0, import_jsx_runtime.jsx)("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((n, r) => (0, import_jsx_runtime.jsx)("li", { "data-mdb-target": r, className: clsx_m_default(s === r && "active"), onClick: () => t(r) }, r)) });
};
var je = ({ move: e }) => (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-prev", onClick: () => e("prev"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-prev-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Previous" })
  ] }),
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-next", onClick: () => e("next"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-next-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Next" })
  ] })
] });
var Ye = (e) => {
  const t = getComputedStyle(e), s = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && s.display !== "none" && t.visibility !== "hidden";
};
var Ve = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item"));
var qe = (e) => e.offsetHeight;
var Ge = (e, t, s = true) => {
  if (!s) {
    be(e);
    return;
  }
  const n = Ke(t);
  t.addEventListener("transitionend", () => be(e), { once: true }), Je(t, n);
};
var be = (e) => {
  typeof e == "function" && e();
};
var Ke = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: s } = window.getComputedStyle(e);
  const n = Number.parseFloat(t), r = Number.parseFloat(s);
  return !n && !r ? 0 : (t = t.split(",")[0], s = s.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(s)) * 1e3);
};
var Ue = (e) => {
  e.dispatchEvent(new Event("transitionend"));
};
var Je = (e, t) => {
  let s = false;
  const r = t + 5;
  function a() {
    s = true, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    s || Ue(e);
  }, r);
};
var vs = ({
  fade: e = false,
  className: t,
  carouselInnerClassName: s,
  dark: n,
  children: r,
  interval: a = 5e3,
  keyboard: c = false,
  touch: o = true,
  showControls: i,
  showIndicators: u,
  onSlide: d,
  ...p
}) => {
  const f = (0, import_react.useRef)([]), g = (0, import_react.useRef)(null), b = (0, import_react.useRef)(0), h = (0, import_react.useRef)(false), [v, M] = (0, import_react.useState)(0), [$, B] = (0, import_react.useState)(0), [x, y] = (0, import_react.useState)({ initialX: 0, initialY: 0 }), [k, L] = (0, import_react.useState)(false), F = (0, import_react.useRef)(null), P = clsx_m_default("carousel", "slide", e && "carousel-fade", n && "carousel-dark", t), w = clsx_m_default("carousel-inner", s), E = (0, import_react.useCallback)(
    (C, A) => {
      if (A !== void 0)
        b.current = A, M(A);
      else {
        const J = v === $ - 1 ? 0 : v + 1, ee = v === 0 ? $ - 1 : v - 1;
        b.current = C === "next" ? J : ee, M(C === "next" ? J : ee);
      }
    },
    [v, $]
  ), R = (0, import_react.useCallback)(() => {
    g.current && (clearInterval(g.current), g.current = null);
  }, []), W = (0, import_react.useCallback)(
    (C, A, J) => {
      var pe;
      if (!f.current || f.current.length < 2)
        return;
      L(true);
      const H = f.current[v], te = Boolean(g.current), ae = C === "next", oe = ae ? "carousel-item-start" : "carousel-item-end", le = ae ? "carousel-item-next" : "carousel-item-prev";
      if (A.classList.contains("active")) {
        h.current = false;
        return;
      }
      E(C, J), !(!H || !A) && (h.current = true, te && R(), (pe = F.current) != null && pe.classList.contains("slide") ? (A.classList.add(le), qe(A), H.classList.add(oe), A.classList.add(oe), Ge(() => {
        L(false), A.classList.remove(oe, le), A.classList.add("active"), H.classList.remove("active", le, oe), h.current = false;
      }, H, true)) : (H.classList.remove("active"), A.classList.add("active"), h.current = false));
    },
    [F, v, E, R]
  ), D = (C) => {
    h.current || (h.current = true, setTimeout(() => {
      h.current = false;
    }, C));
  }, S = (0, import_react.useCallback)(
    (C) => {
      const A = C === "prev", H = (b.current + (A ? -1 : 1)) % $, te = f.current;
      return H === -1 ? te[$ - 1] : te[H];
    },
    [$]
  ), j = (C) => {
    const A = b.current, J = C > A ? "next" : "prev", ee = f.current;
    return { direction: J, nextElement: ee[C] };
  }, O = (C) => {
    if (h.current || (D(700), C > $ - 1 || C < 0))
      return;
    const { direction: A, nextElement: J } = j(C);
    W(A, J, C);
  }, _ = (0, import_react.useCallback)(
    (C) => {
      if (h.current)
        return;
      D(600);
      const A = S(C);
      W(C, A);
    },
    [S, W]
  ), q = (0, import_react.useCallback)(() => {
    const { visibilityState: C, hidden: A } = document;
    if (C)
      return A || !Ye(F.current) ? void 0 : _("next");
    _("next");
  }, [F, _]), Y = (0, import_react.useCallback)(() => {
    var A, J;
    const C = (J = (A = r == null ? void 0 : r[v]) == null ? void 0 : A.props) == null ? void 0 : J.interval;
    g.current && (clearInterval(g.current), g.current = null), g.current = setInterval(q, C || a);
  }, [q, a, r, v]), U = (C) => {
    o && y({ initialX: C.touches[0].clientX, initialY: C.touches[0].clientY });
  }, X = (C) => {
    h.current = true;
    const { initialX: A, initialY: J } = x;
    if (!A || !J)
      return;
    const ee = C.touches[0].clientX, H = C.touches[0].clientY, te = A - ee, ae = J - H;
    Math.abs(te) > Math.abs(ae) && (te > 0 ? _("prev") : _("next")), y({ initialX: 0, initialY: 0 });
  }, Z = () => {
    h.current = false;
  }, z = (0, import_react.useCallback)(
    (C) => {
      switch (C.key) {
        case "ArrowLeft":
          C.preventDefault(), _("prev");
          break;
        case "ArrowRight":
          C.preventDefault(), _("next");
          break;
      }
    },
    [_]
  );
  return (0, import_react.useEffect)(() => {
    if (c)
      return window.addEventListener("keydown", z), () => {
        window.removeEventListener("keydown", z);
      };
  }, [z, c]), (0, import_react.useEffect)(() => {
    const C = F.current, A = Ve(C);
    f.current = A, B(A.length);
  }, [F]), (0, import_react.useEffect)(() => {
    k && (d == null || d());
  }, [k, d]), (0, import_react.useEffect)(() => (Y(), () => {
    R();
  }), [Y, R]), (0, import_jsx_runtime.jsx)(
    "div",
    {
      onTouchStart: U,
      onTouchMove: X,
      onTouchEnd: Z,
      onMouseEnter: R,
      onMouseLeave: Y,
      className: P,
      ref: F,
      ...p,
      children: (0, import_jsx_runtime.jsx)("div", { className: w, children: (0, import_jsx_runtime.jsxs)(me.Provider, { value: { active: v }, children: [
        u && (0, import_jsx_runtime.jsx)(_e, { to: O, imagesCount: $ }),
        r,
        i && (0, import_jsx_runtime.jsx)(je, { move: _ })
      ] }) })
    }
  );
};
var hs = ({
  className: e,
  captionClassName: t,
  children: s,
  src: n,
  alt: r,
  itemId: a,
  video: c,
  ...o
}) => {
  const { active: i } = (0, import_react.useContext)(me), u = (0, import_react.useRef)(true), d = (0, import_react.useRef)(null), p = clsx_m_default("carousel-caption d-none d-md-block", t);
  return (0, import_react.useEffect)(() => {
    if (u.current && i === a - 1) {
      const f = d.current;
      f == null || f.classList.add("active");
    }
    u.current = false;
  }, [i, a]), (0, import_jsx_runtime.jsxs)("div", { className: "carousel-item", ref: d, children: [
    c ? (0, import_jsx_runtime.jsx)("video", { className: e, autoPlay: true, loop: true, muted: true, ...o, children: (0, import_jsx_runtime.jsx)("source", { src: n, type: "video/mp4" }) }) : (0, import_jsx_runtime.jsx)("img", { className: e, src: n, alt: r, ...o }),
    (0, import_jsx_runtime.jsx)("div", { className: p, children: s })
  ] });
};
var Ne = import_react.default.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0
});
var ys = import_react.default.forwardRef(
  ({
    alwaysOpen: e,
    borderless: t,
    className: s,
    flush: n,
    active: r,
    initialActive: a = 0,
    tag: c = "div",
    children: o,
    onChange: i,
    ...u
  }, d) => {
    const p = (0, import_react.useMemo)(() => typeof r < "u", [r]), f = clsx_m_default("accordion", n && "accordion-flush", t && "accordion-borderless", s), [g, b] = (0, import_react.useState)(a);
    return (0, import_jsx_runtime.jsx)(c, { className: f, ref: d, ...u, children: (0, import_jsx_runtime.jsx)(
      Ne.Provider,
      {
        value: { activeItem: p ? r : g, setActiveItem: b, alwaysOpen: e, initialActive: a, onChange: i },
        children: o
      }
    ) });
  }
);
var Ns = import_react.default.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: s,
    headerClassName: n,
    collapseId: r,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: i = "div",
    children: u,
    ...d
  }, p) => {
    const { activeItem: f, setActiveItem: g, alwaysOpen: b, onChange: h } = (0, import_react.useContext)(Ne), v = (0, import_react.useMemo)(() => Array.isArray(f) ? f.includes(r) : f === r, [f, r]), M = clsx_m_default("accordion-item", e), $ = clsx_m_default("accordion-header", n), B = clsx_m_default("accordion-body", t), x = clsx_m_default("accordion-button", !v && "collapsed", o), y = (0, import_react.useCallback)(
      (k) => {
        let L = k;
        Array.isArray(f) ? f.includes(k) ? L = f.filter((P) => P !== k) : L = b ? [...f, k] : [k] : (L = f === k ? 0 : k, b && (L = [L])), h == null || h(L), g(L);
      },
      [h, f, g, b]
    );
    return (0, import_jsx_runtime.jsxs)(i, { className: M, ref: p, ...d, children: [
      (0, import_jsx_runtime.jsx)("h2", { className: $, style: c, children: (0, import_jsx_runtime.jsx)("button", { onClick: () => y(r), className: x, type: "button", children: a }) }),
      (0, import_jsx_runtime.jsx)(xe, { id: r.toString(), show: v, children: (0, import_jsx_runtime.jsx)("div", { className: B, style: s, children: u }) })
    ] });
  }
);
var ws = ({
  className: e,
  size: t,
  contrast: s,
  value: n,
  defaultValue: r,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: i,
  wrapperTag: u = "div",
  label: d,
  onChange: p,
  children: f,
  labelRef: g,
  labelStyle: b,
  inputRef: h,
  onBlur: v,
  readonly: M = false,
  ...$
}) => {
  var q;
  const B = (0, import_react.useRef)(null), x = (0, import_react.useRef)(null), y = g || B, k = h || x, [L, F] = (0, import_react.useState)(n || r), [P, w] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)(
    n !== void 0 && n.length > 0 || r !== void 0 && r.length > 0
  ), W = clsx_m_default("form-outline", s && "form-white", o), D = clsx_m_default("form-control", E && "active", t && `form-control-${t}`, e), S = clsx_m_default("form-label", c);
  (0, import_react.useEffect)(() => {
    var Y;
    y.current && ((Y = y.current) == null ? void 0 : Y.clientWidth) !== 0 && w(y.current.clientWidth * 0.8 + 8);
  }, [y, (q = y.current) == null ? void 0 : q.clientWidth]);
  const j = () => {
    y.current && w(y.current.clientWidth * 0.8 + 8);
  };
  (0, import_react.useEffect)(() => {
    n !== void 0 && (n.length > 0 ? R(true) : R(false));
  }, [n]), (0, import_react.useEffect)(() => {
    r !== void 0 && (r.length > 0 ? R(true) : R(false));
  }, [r]);
  const O = (Y) => {
    F(Y.currentTarget.value), p && p(Y);
  }, _ = (0, import_react.useCallback)(
    (Y) => {
      L !== void 0 && L.length > 0 || n !== void 0 && n.length > 0 ? R(true) : R(false), v && v(Y);
    },
    [L, n, v]
  );
  return (0, import_jsx_runtime.jsxs)(u, { className: W, style: { ...i }, children: [
    (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        readOnly: M,
        className: D,
        onBlur: _,
        onChange: O,
        onFocus: j,
        defaultValue: r,
        value: n,
        id: a,
        ref: k,
        ...$
      }
    ),
    d && (0, import_jsx_runtime.jsx)("label", { className: S, style: b, htmlFor: a, ref: y, children: d }),
    (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: P } }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
    ] }),
    f
  ] });
};
var Ts = ({
  children: e,
  invalid: t,
  feedback: s = "Looks good!",
  tooltip: n,
  tag: r = "div",
  ...a
}) => {
  const [c, o] = (0, import_react.useState)(null), i = (0, import_react.useRef)(null), u = clsx_m_default(
    t ? `invalid-${n ? "tooltip" : "feedback"}` : `valid-${n ? "tooltip" : "feedback"}`
  );
  return (0, import_react.useEffect)(() => {
    var p, f;
    const d = (f = (p = i.current) == null ? void 0 : p.querySelector("input, textarea")) == null ? void 0 : f.parentElement;
    d && o(d);
  }, []), (0, import_jsx_runtime.jsxs)(r, { ref: i, ...a, children: [
    c && (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsx)("div", { className: u, children: s }), c),
    e
  ] });
};
export {
  ys as MDBAccordion,
  Ns as MDBAccordionItem,
  at as MDBBadge,
  Mt as MDBBreadcrumb,
  $t as MDBBreadcrumbItem,
  ue as MDBBtn,
  ot as MDBBtnGroup,
  lt as MDBCard,
  mt as MDBCardBody,
  pt as MDBCardFooter,
  ht as MDBCardGroup,
  it as MDBCardHeader,
  gt as MDBCardImage,
  vt as MDBCardLink,
  bt as MDBCardOverlay,
  ut as MDBCardSubTitle,
  ft as MDBCardText,
  dt as MDBCardTitle,
  vs as MDBCarousel,
  hs as MDBCarouselItem,
  jt as MDBCheckbox,
  rt as MDBCol,
  xe as MDBCollapse,
  nt as MDBContainer,
  Vt as MDBDropdown,
  qt as MDBDropdownItem,
  Gt as MDBDropdownMenu,
  Kt as MDBDropdownToggle,
  is as MDBFile,
  kt as MDBFooter,
  Bt as MDBIcon,
  _t as MDBInput,
  us as MDBInputGroup,
  yt as MDBListGroup,
  Nt as MDBListGroupItem,
  Zt as MDBModal,
  ss as MDBModalBody,
  Ht as MDBModalContent,
  zt as MDBModalDialog,
  ns as MDBModalFooter,
  es as MDBModalHeader,
  ts as MDBModalTitle,
  Rt as MDBNavbar,
  Ct as MDBNavbarBrand,
  It as MDBNavbarItem,
  Et as MDBNavbarLink,
  xt as MDBNavbarNav,
  Lt as MDBNavbarToggler,
  Ot as MDBPagination,
  Pt as MDBPaginationItem,
  At as MDBPaginationLink,
  Ut as MDBPopover,
  Jt as MDBPopoverBody,
  Qt as MDBPopoverHeader,
  Xt as MDBProgress,
  Ce as MDBProgressBar,
  Yt as MDBRadio,
  ls as MDBRange,
  Re as MDBRipple,
  Tt as MDBRow,
  rs as MDBScrollspy,
  as as MDBScrollspyLink,
  os as MDBScrollspySubList,
  ct as MDBSpinner,
  cs as MDBSwitch,
  St as MDBTable,
  Wt as MDBTableBody,
  Ft as MDBTableHead,
  fs as MDBTabs,
  gs as MDBTabsContent,
  ms as MDBTabsItem,
  ps as MDBTabsLink,
  bs as MDBTabsPane,
  ws as MDBTextArea,
  wt as MDBTooltip,
  Dt as MDBTypography,
  ds as MDBValidation,
  Ts as MDBValidationItem
};
//# sourceMappingURL=mdb-react-ui-kit.js.map
