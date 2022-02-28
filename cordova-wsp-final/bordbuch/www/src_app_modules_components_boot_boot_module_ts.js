(self["webpackChunkbordbuch_wsp_final"] = self["webpackChunkbordbuch_wsp_final"] || []).push([["src_app_modules_components_boot_boot_module_ts"],{

/***/ 64216:
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function (global, factory) {
   true ? factory(exports) : 0;
})(this, function (exports) {
  'use strict';

  var version = "1.7.1";
  /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */
  // @function extend(dest: Object, src?: Object): Object
  // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.

  function extend(dest) {
    var i, j, len, src;

    for (j = 1, len = arguments.length; j < len; j++) {
      src = arguments[j];

      for (i in src) {
        dest[i] = src[i];
      }
    }

    return dest;
  } // @function create(proto: Object, properties?: Object): Object
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


  var create = Object.create || function () {
    function F() {}

    return function (proto) {
      F.prototype = proto;
      return new F();
    };
  }(); // @function bind(fn: Function, …): Function
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
  // Has a `L.bind()` shortcut.


  function bind(fn, obj) {
    var slice = Array.prototype.slice;

    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }

    var args = slice.call(arguments, 2);
    return function () {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  } // @property lastId: Number
  // Last unique ID used by [`stamp()`](#util-stamp)


  var lastId = 0; // @function stamp(obj: Object): Number
  // Returns the unique ID of an object, assigning it one if it doesn't have it.

  function stamp(obj) {
    /*eslint-disable */
    obj._leaflet_id = obj._leaflet_id || ++lastId;
    return obj._leaflet_id;
    /* eslint-enable */
  } // @function throttle(fn: Function, time: Number, context: Object): Function
  // Returns a function which executes function `fn` with the given scope `context`
  // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
  // `fn` will be called no more than one time per given amount of `time`. The arguments
  // received by the bound function will be any arguments passed when binding the
  // function, followed by any arguments passed when invoking the bound function.
  // Has an `L.throttle` shortcut.


  function throttle(fn, time, context) {
    var lock, args, wrapperFn, later;

    later = function () {
      // reset lock and call if queued
      lock = false;

      if (args) {
        wrapperFn.apply(context, args);
        args = false;
      }
    };

    wrapperFn = function () {
      if (lock) {
        // called too soon, queue to call later
        args = arguments;
      } else {
        // call and lock until later
        fn.apply(context, arguments);
        setTimeout(later, time);
        lock = true;
      }
    };

    return wrapperFn;
  } // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
  // Returns the number `num` modulo `range` in such a way so it lies within
  // `range[0]` and `range[1]`. The returned value will be always smaller than
  // `range[1]` unless `includeMax` is set to `true`.


  function wrapNum(x, range, includeMax) {
    var max = range[1],
        min = range[0],
        d = max - min;
    return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
  } // @function falseFn(): Function
  // Returns a function which always returns `false`.


  function falseFn() {
    return false;
  } // @function formatNum(num: Number, digits?: Number): Number
  // Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.


  function formatNum(num, digits) {
    var pow = Math.pow(10, digits === undefined ? 6 : digits);
    return Math.round(num * pow) / pow;
  } // @function trim(str: String): String
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)


  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  } // @function splitWords(str: String): String[]
  // Trims and splits the string on whitespace and returns the array of parts.


  function splitWords(str) {
    return trim(str).split(/\s+/);
  } // @function setOptions(obj: Object, options: Object): Object
  // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.


  function setOptions(obj, options) {
    if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {
      obj.options = obj.options ? create(obj.options) : {};
    }

    for (var i in options) {
      obj.options[i] = options[i];
    }

    return obj.options;
  } // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
  // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
  // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
  // be appended at the end. If `uppercase` is `true`, the parameter names will
  // be uppercased (e.g. `'?A=foo&B=bar'`)


  function getParamString(obj, existingUrl, uppercase) {
    var params = [];

    for (var i in obj) {
      params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
    }

    return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
  }

  var templateRe = /\{ *([\w_-]+) *\}/g; // @function template(str: String, data: Object): String
  // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
  // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
  // `('Hello foo, bar')`. You can also specify functions instead of strings for
  // data values — they will be evaluated passing `data` as an argument.

  function template(str, data) {
    return str.replace(templateRe, function (str, key) {
      var value = data[key];

      if (value === undefined) {
        throw new Error('No value provided for variable ' + str);
      } else if (typeof value === 'function') {
        value = value(data);
      }

      return value;
    });
  } // @function isArray(obj): Boolean
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }; // @function indexOf(array: Array, el: Object): Number
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)


  function indexOf(array, el) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === el) {
        return i;
      }
    }

    return -1;
  } // @property emptyImageUrl: String
  // Data URI string containing a base64-encoded empty GIF image.
  // Used as a hack to free memory from unused images on WebKit-powered
  // mobile devices (by setting image `src` to this string).


  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  function getPrefixed(name) {
    return window['webkit' + name] || window['moz' + name] || window['ms' + name];
  }

  var lastTime = 0; // fallback for IE 7-8

  function timeoutDefer(fn) {
    var time = +new Date(),
        timeToCall = Math.max(0, 16 - (time - lastTime));
    lastTime = time + timeToCall;
    return window.setTimeout(fn, timeToCall);
  }

  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;

  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
    window.clearTimeout(id);
  }; // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
  // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
  // `context` if given. When `immediate` is set, `fn` is called immediately if
  // the browser doesn't have native support for
  // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.


  function requestAnimFrame(fn, context, immediate) {
    if (immediate && requestFn === timeoutDefer) {
      fn.call(context);
    } else {
      return requestFn.call(window, bind(fn, context));
    }
  } // @function cancelAnimFrame(id: Number): undefined
  // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).


  function cancelAnimFrame(id) {
    if (id) {
      cancelFn.call(window, id);
    }
  }

  var Util = {
    extend: extend,
    create: create,
    bind: bind,
    lastId: lastId,
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  }; // @class Class
  // @aka L.Class
  // @section
  // @uninheritable
  // Thanks to John Resig and Dean Edwards for inspiration!

  function Class() {}

  Class.extend = function (props) {
    // @function extend(props: Object): Function
    // [Extends the current class](#class-inheritance) given the properties to be included.
    // Returns a Javascript function that is a class constructor (to be called with `new`).
    var NewClass = function () {
      // call the constructor
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      } // call all constructor hooks


      this.callInitHooks();
    };

    var parentProto = NewClass.__super__ = this.prototype;
    var proto = create(parentProto);
    proto.constructor = NewClass;
    NewClass.prototype = proto; // inherit parent's statics

    for (var i in this) {
      if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {
        NewClass[i] = this[i];
      }
    } // mix static properties into the class


    if (props.statics) {
      extend(NewClass, props.statics);
      delete props.statics;
    } // mix includes into the prototype


    if (props.includes) {
      checkDeprecatedMixinEvents(props.includes);
      extend.apply(null, [proto].concat(props.includes));
      delete props.includes;
    } // merge options


    if (proto.options) {
      props.options = extend(create(proto.options), props.options);
    } // mix given properties into the prototype


    extend(proto, props);
    proto._initHooks = []; // add method for calling all hooks

    proto.callInitHooks = function () {
      if (this._initHooksCalled) {
        return;
      }

      if (parentProto.callInitHooks) {
        parentProto.callInitHooks.call(this);
      }

      this._initHooksCalled = true;

      for (var i = 0, len = proto._initHooks.length; i < len; i++) {
        proto._initHooks[i].call(this);
      }
    };

    return NewClass;
  }; // @function include(properties: Object): this
  // [Includes a mixin](#class-includes) into the current class.


  Class.include = function (props) {
    extend(this.prototype, props);
    return this;
  }; // @function mergeOptions(options: Object): this
  // [Merges `options`](#class-options) into the defaults of the class.


  Class.mergeOptions = function (options) {
    extend(this.prototype.options, options);
    return this;
  }; // @function addInitHook(fn: Function): this
  // Adds a [constructor hook](#class-constructor-hooks) to the class.


  Class.addInitHook = function (fn) {
    // (Function) || (String, args...)
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === 'function' ? fn : function () {
      this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];

    this.prototype._initHooks.push(init);

    return this;
  };

  function checkDeprecatedMixinEvents(includes) {
    if (typeof L === 'undefined' || !L || !L.Mixin) {
      return;
    }

    includes = isArray(includes) ? includes : [includes];

    for (var i = 0; i < includes.length; i++) {
      if (includes[i] === L.Mixin.Events) {
        console.warn('Deprecated include of L.Mixin.Events: ' + 'this property will be removed in future releases, ' + 'please inherit from L.Evented instead.', new Error().stack);
      }
    }
  }
  /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */


  var Events = {
    /* @method on(type: String, fn: Function, context?: Object): this
     * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
     *
     * @alternative
     * @method on(eventMap: Object): this
     * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
     */
    on: function (types, fn, context) {
      // types can be a map of types/handlers
      if (typeof types === 'object') {
        for (var type in types) {
          // we don't process space-separated events here for performance;
          // it's a hot path since Layer uses the on(obj) syntax
          this._on(type, types[type], fn);
        }
      } else {
        // types can be a string of space-separated words
        types = splitWords(types);

        for (var i = 0, len = types.length; i < len; i++) {
          this._on(types[i], fn, context);
        }
      }

      return this;
    },

    /* @method off(type: String, fn?: Function, context?: Object): this
     * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
     *
     * @alternative
     * @method off(eventMap: Object): this
     * Removes a set of type/listener pairs.
     *
     * @alternative
     * @method off: this
     * Removes all listeners to all events on the object. This includes implicitly attached events.
     */
    off: function (types, fn, context) {
      if (!types) {
        // clear all listeners if called without arguments
        delete this._events;
      } else if (typeof types === 'object') {
        for (var type in types) {
          this._off(type, types[type], fn);
        }
      } else {
        types = splitWords(types);

        for (var i = 0, len = types.length; i < len; i++) {
          this._off(types[i], fn, context);
        }
      }

      return this;
    },
    // attach listener (without syntactic sugar now)
    _on: function (type, fn, context) {
      this._events = this._events || {};
      /* get/init listeners for type */

      var typeListeners = this._events[type];

      if (!typeListeners) {
        typeListeners = [];
        this._events[type] = typeListeners;
      }

      if (context === this) {
        // Less memory footprint.
        context = undefined;
      }

      var newListener = {
        fn: fn,
        ctx: context
      },
          listeners = typeListeners; // check if fn already there

      for (var i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i].fn === fn && listeners[i].ctx === context) {
          return;
        }
      }

      listeners.push(newListener);
    },
    _off: function (type, fn, context) {
      var listeners, i, len;

      if (!this._events) {
        return;
      }

      listeners = this._events[type];

      if (!listeners) {
        return;
      }

      if (!fn) {
        // Set all removed listeners to noop so they are not called if remove happens in fire
        for (i = 0, len = listeners.length; i < len; i++) {
          listeners[i].fn = falseFn;
        } // clear all listeners for a type if function isn't specified


        delete this._events[type];
        return;
      }

      if (context === this) {
        context = undefined;
      }

      if (listeners) {
        // find fn and remove it
        for (i = 0, len = listeners.length; i < len; i++) {
          var l = listeners[i];

          if (l.ctx !== context) {
            continue;
          }

          if (l.fn === fn) {
            // set the removed listener to noop so that's not called if remove happens in fire
            l.fn = falseFn;

            if (this._firingCount) {
              /* copy array in case events are being fired */
              this._events[type] = listeners = listeners.slice();
            }

            listeners.splice(i, 1);
            return;
          }
        }
      }
    },
    // @method fire(type: String, data?: Object, propagate?: Boolean): this
    // Fires an event of the specified type. You can optionally provide an data
    // object — the first argument of the listener function will contain its
    // properties. The event can optionally be propagated to event parents.
    fire: function (type, data, propagate) {
      if (!this.listens(type, propagate)) {
        return this;
      }

      var event = extend({}, data, {
        type: type,
        target: this,
        sourceTarget: data && data.sourceTarget || this
      });

      if (this._events) {
        var listeners = this._events[type];

        if (listeners) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var i = 0, len = listeners.length; i < len; i++) {
            var l = listeners[i];
            l.fn.call(l.ctx || this, event);
          }

          this._firingCount--;
        }
      }

      if (propagate) {
        // propagate the event to parents (set with addEventParent)
        this._propagateEvent(event);
      }

      return this;
    },
    // @method listens(type: String): Boolean
    // Returns `true` if a particular event type has any listeners attached to it.
    listens: function (type, propagate) {
      var listeners = this._events && this._events[type];

      if (listeners && listeners.length) {
        return true;
      }

      if (propagate) {
        // also check parents for listeners if event propagates
        for (var id in this._eventParents) {
          if (this._eventParents[id].listens(type, propagate)) {
            return true;
          }
        }
      }

      return false;
    },
    // @method once(…): this
    // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
    once: function (types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this.once(type, types[type], fn);
        }

        return this;
      }

      var handler = bind(function () {
        this.off(types, fn, context).off(types, handler, context);
      }, this); // add a listener that's executed once and removed after that

      return this.on(types, fn, context).on(types, handler, context);
    },
    // @method addEventParent(obj: Evented): this
    // Adds an event parent - an `Evented` that will receive propagated events
    addEventParent: function (obj) {
      this._eventParents = this._eventParents || {};
      this._eventParents[stamp(obj)] = obj;
      return this;
    },
    // @method removeEventParent(obj: Evented): this
    // Removes an event parent, so it will stop receiving propagated events
    removeEventParent: function (obj) {
      if (this._eventParents) {
        delete this._eventParents[stamp(obj)];
      }

      return this;
    },
    _propagateEvent: function (e) {
      for (var id in this._eventParents) {
        this._eventParents[id].fire(e.type, extend({
          layer: e.target,
          propagatedFrom: e.target
        }, e), true);
      }
    }
  }; // aliases; we should ditch those eventually
  // @method addEventListener(…): this
  // Alias to [`on(…)`](#evented-on)

  Events.addEventListener = Events.on; // @method removeEventListener(…): this
  // Alias to [`off(…)`](#evented-off)
  // @method clearAllEventListeners(…): this
  // Alias to [`off()`](#evented-off)

  Events.removeEventListener = Events.clearAllEventListeners = Events.off; // @method addOneTimeEventListener(…): this
  // Alias to [`once(…)`](#evented-once)

  Events.addOneTimeEventListener = Events.once; // @method fireEvent(…): this
  // Alias to [`fire(…)`](#evented-fire)

  Events.fireEvent = Events.fire; // @method hasEventListeners(…): Boolean
  // Alias to [`listens(…)`](#evented-listens)

  Events.hasEventListeners = Events.listens;
  var Evented = Class.extend(Events);
  /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Point(x, y, round) {
    // @property x: Number; The `x` coordinate of the point
    this.x = round ? Math.round(x) : x; // @property y: Number; The `y` coordinate of the point

    this.y = round ? Math.round(y) : y;
  }

  var trunc = Math.trunc || function (v) {
    return v > 0 ? Math.floor(v) : Math.ceil(v);
  };

  Point.prototype = {
    // @method clone(): Point
    // Returns a copy of the current point.
    clone: function () {
      return new Point(this.x, this.y);
    },
    // @method add(otherPoint: Point): Point
    // Returns the result of addition of the current and the given points.
    add: function (point) {
      // non-destructive, returns a new point
      return this.clone()._add(toPoint(point));
    },
    _add: function (point) {
      // destructive, used directly for performance in situations where it's safe to modify existing point
      this.x += point.x;
      this.y += point.y;
      return this;
    },
    // @method subtract(otherPoint: Point): Point
    // Returns the result of subtraction of the given point from the current.
    subtract: function (point) {
      return this.clone()._subtract(toPoint(point));
    },
    _subtract: function (point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    },
    // @method divideBy(num: Number): Point
    // Returns the result of division of the current point by the given number.
    divideBy: function (num) {
      return this.clone()._divideBy(num);
    },
    _divideBy: function (num) {
      this.x /= num;
      this.y /= num;
      return this;
    },
    // @method multiplyBy(num: Number): Point
    // Returns the result of multiplication of the current point by the given number.
    multiplyBy: function (num) {
      return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function (num) {
      this.x *= num;
      this.y *= num;
      return this;
    },
    // @method scaleBy(scale: Point): Point
    // Multiply each coordinate of the current point by each coordinate of
    // `scale`. In linear algebra terms, multiply the point by the
    // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
    // defined by `scale`.
    scaleBy: function (point) {
      return new Point(this.x * point.x, this.y * point.y);
    },
    // @method unscaleBy(scale: Point): Point
    // Inverse of `scaleBy`. Divide each coordinate of the current point by
    // each coordinate of `scale`.
    unscaleBy: function (point) {
      return new Point(this.x / point.x, this.y / point.y);
    },
    // @method round(): Point
    // Returns a copy of the current point with rounded coordinates.
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    // @method floor(): Point
    // Returns a copy of the current point with floored coordinates (rounded down).
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    // @method ceil(): Point
    // Returns a copy of the current point with ceiled coordinates (rounded up).
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    // @method trunc(): Point
    // Returns a copy of the current point with truncated coordinates (rounded towards zero).
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      this.x = trunc(this.x);
      this.y = trunc(this.y);
      return this;
    },
    // @method distanceTo(otherPoint: Point): Number
    // Returns the cartesian distance between the current and the given points.
    distanceTo: function (point) {
      point = toPoint(point);
      var x = point.x - this.x,
          y = point.y - this.y;
      return Math.sqrt(x * x + y * y);
    },
    // @method equals(otherPoint: Point): Boolean
    // Returns `true` if the given point has the same coordinates.
    equals: function (point) {
      point = toPoint(point);
      return point.x === this.x && point.y === this.y;
    },
    // @method contains(otherPoint: Point): Boolean
    // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
    contains: function (point) {
      point = toPoint(point);
      return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    // @method toString(): String
    // Returns a string representation of the point for debugging purposes.
    toString: function () {
      return 'Point(' + formatNum(this.x) + ', ' + formatNum(this.y) + ')';
    }
  }; // @factory L.point(x: Number, y: Number, round?: Boolean)
  // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
  // @alternative
  // @factory L.point(coords: Number[])
  // Expects an array of the form `[x, y]` instead.
  // @alternative
  // @factory L.point(coords: Object)
  // Expects a plain object of the form `{x: Number, y: Number}` instead.

  function toPoint(x, y, round) {
    if (x instanceof Point) {
      return x;
    }

    if (isArray(x)) {
      return new Point(x[0], x[1]);
    }

    if (x === undefined || x === null) {
      return x;
    }

    if (typeof x === 'object' && 'x' in x && 'y' in x) {
      return new Point(x.x, x.y);
    }

    return new Point(x, y, round);
  }
  /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function Bounds(a, b) {
    if (!a) {
      return;
    }

    var points = b ? [a, b] : a;

    for (var i = 0, len = points.length; i < len; i++) {
      this.extend(points[i]);
    }
  }

  Bounds.prototype = {
    // @method extend(point: Point): this
    // Extends the bounds to contain the given point.
    extend: function (point) {
      // (Point)
      point = toPoint(point); // @property min: Point
      // The top left corner of the rectangle.
      // @property max: Point
      // The bottom right corner of the rectangle.

      if (!this.min && !this.max) {
        this.min = point.clone();
        this.max = point.clone();
      } else {
        this.min.x = Math.min(point.x, this.min.x);
        this.max.x = Math.max(point.x, this.max.x);
        this.min.y = Math.min(point.y, this.min.y);
        this.max.y = Math.max(point.y, this.max.y);
      }

      return this;
    },
    // @method getCenter(round?: Boolean): Point
    // Returns the center point of the bounds.
    getCenter: function (round) {
      return new Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    // @method getBottomLeft(): Point
    // Returns the bottom-left point of the bounds.
    getBottomLeft: function () {
      return new Point(this.min.x, this.max.y);
    },
    // @method getTopRight(): Point
    // Returns the top-right point of the bounds.
    getTopRight: function () {
      // -> Point
      return new Point(this.max.x, this.min.y);
    },
    // @method getTopLeft(): Point
    // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
    getTopLeft: function () {
      return this.min; // left, top
    },
    // @method getBottomRight(): Point
    // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
    getBottomRight: function () {
      return this.max; // right, bottom
    },
    // @method getSize(): Point
    // Returns the size of the given bounds
    getSize: function () {
      return this.max.subtract(this.min);
    },
    // @method contains(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains(point: Point): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function (obj) {
      var min, max;

      if (typeof obj[0] === 'number' || obj instanceof Point) {
        obj = toPoint(obj);
      } else {
        obj = toBounds(obj);
      }

      if (obj instanceof Bounds) {
        min = obj.min;
        max = obj.max;
      } else {
        min = max = obj;
      }

      return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
    },
    // @method intersects(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds
    // intersect if they have at least one point in common.
    intersects: function (bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xIntersects = max2.x >= min.x && min2.x <= max.x,
          yIntersects = max2.y >= min.y && min2.y <= max.y;
      return xIntersects && yIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds
    // overlap if their intersection is an area.
    overlaps: function (bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xOverlaps = max2.x > min.x && min2.x < max.x,
          yOverlaps = max2.y > min.y && min2.y < max.y;
      return xOverlaps && yOverlaps;
    },
    isValid: function () {
      return !!(this.min && this.max);
    }
  }; // @factory L.bounds(corner1: Point, corner2: Point)
  // Creates a Bounds object from two corners coordinate pairs.
  // @alternative
  // @factory L.bounds(points: Point[])
  // Creates a Bounds object from the given array of points.

  function toBounds(a, b) {
    if (!a || a instanceof Bounds) {
      return a;
    }

    return new Bounds(a, b);
  }
  /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function LatLngBounds(corner1, corner2) {
    // (LatLng, LatLng) or (LatLng[])
    if (!corner1) {
      return;
    }

    var latlngs = corner2 ? [corner1, corner2] : corner1;

    for (var i = 0, len = latlngs.length; i < len; i++) {
      this.extend(latlngs[i]);
    }
  }

  LatLngBounds.prototype = {
    // @method extend(latlng: LatLng): this
    // Extend the bounds to contain the given point
    // @alternative
    // @method extend(otherBounds: LatLngBounds): this
    // Extend the bounds to contain the given bounds
    extend: function (obj) {
      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;

      if (obj instanceof LatLng) {
        sw2 = obj;
        ne2 = obj;
      } else if (obj instanceof LatLngBounds) {
        sw2 = obj._southWest;
        ne2 = obj._northEast;

        if (!sw2 || !ne2) {
          return this;
        }
      } else {
        return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
      }

      if (!sw && !ne) {
        this._southWest = new LatLng(sw2.lat, sw2.lng);
        this._northEast = new LatLng(ne2.lat, ne2.lng);
      } else {
        sw.lat = Math.min(sw2.lat, sw.lat);
        sw.lng = Math.min(sw2.lng, sw.lng);
        ne.lat = Math.max(ne2.lat, ne.lat);
        ne.lng = Math.max(ne2.lng, ne.lng);
      }

      return this;
    },
    // @method pad(bufferRatio: Number): LatLngBounds
    // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
    // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
    // Negative values will retract the bounds.
    pad: function (bufferRatio) {
      var sw = this._southWest,
          ne = this._northEast,
          heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
          widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
      return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    // @method getCenter(): LatLng
    // Returns the center point of the bounds.
    getCenter: function () {
      return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    // @method getSouthWest(): LatLng
    // Returns the south-west point of the bounds.
    getSouthWest: function () {
      return this._southWest;
    },
    // @method getNorthEast(): LatLng
    // Returns the north-east point of the bounds.
    getNorthEast: function () {
      return this._northEast;
    },
    // @method getNorthWest(): LatLng
    // Returns the north-west point of the bounds.
    getNorthWest: function () {
      return new LatLng(this.getNorth(), this.getWest());
    },
    // @method getSouthEast(): LatLng
    // Returns the south-east point of the bounds.
    getSouthEast: function () {
      return new LatLng(this.getSouth(), this.getEast());
    },
    // @method getWest(): Number
    // Returns the west longitude of the bounds
    getWest: function () {
      return this._southWest.lng;
    },
    // @method getSouth(): Number
    // Returns the south latitude of the bounds
    getSouth: function () {
      return this._southWest.lat;
    },
    // @method getEast(): Number
    // Returns the east longitude of the bounds
    getEast: function () {
      return this._northEast.lng;
    },
    // @method getNorth(): Number
    // Returns the north latitude of the bounds
    getNorth: function () {
      return this._northEast.lat;
    },
    // @method contains(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains (latlng: LatLng): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function (obj) {
      // (LatLngBounds) or (LatLng) -> Boolean
      if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
        obj = toLatLng(obj);
      } else {
        obj = toLatLngBounds(obj);
      }

      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;

      if (obj instanceof LatLngBounds) {
        sw2 = obj.getSouthWest();
        ne2 = obj.getNorthEast();
      } else {
        sw2 = ne2 = obj;
      }

      return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
    },
    // @method intersects(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
    intersects: function (bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
          lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
      return latIntersects && lngIntersects;
    },
    // @method overlaps(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
    overlaps: function (bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat,
          lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
      return latOverlaps && lngOverlaps;
    },
    // @method toBBoxString(): String
    // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
    toBBoxString: function () {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
    },
    // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
    // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function (bounds, maxMargin) {
      if (!bounds) {
        return false;
      }

      bounds = toLatLngBounds(bounds);
      return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
    },
    // @method isValid(): Boolean
    // Returns `true` if the bounds are properly initialized.
    isValid: function () {
      return !!(this._southWest && this._northEast);
    }
  }; // TODO International date line?
  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
  // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
  // @alternative
  // @factory L.latLngBounds(latlngs: LatLng[])
  // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).

  function toLatLngBounds(a, b) {
    if (a instanceof LatLngBounds) {
      return a;
    }

    return new LatLngBounds(a, b);
  }
  /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function LatLng(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    } // @property lat: Number
    // Latitude in degrees


    this.lat = +lat; // @property lng: Number
    // Longitude in degrees

    this.lng = +lng; // @property alt: Number
    // Altitude in meters (optional)

    if (alt !== undefined) {
      this.alt = +alt;
    }
  }

  LatLng.prototype = {
    // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
    // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function (obj, maxMargin) {
      if (!obj) {
        return false;
      }

      obj = toLatLng(obj);
      var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
      return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
    },
    // @method toString(): String
    // Returns a string representation of the point (for debugging purposes).
    toString: function (precision) {
      return 'LatLng(' + formatNum(this.lat, precision) + ', ' + formatNum(this.lng, precision) + ')';
    },
    // @method distanceTo(otherLatLng: LatLng): Number
    // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
    distanceTo: function (other) {
      return Earth.distance(this, toLatLng(other));
    },
    // @method wrap(): LatLng
    // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
    wrap: function () {
      return Earth.wrapLatLng(this);
    },
    // @method toBounds(sizeInMeters: Number): LatLngBounds
    // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
    toBounds: function (sizeInMeters) {
      var latAccuracy = 180 * sizeInMeters / 40075017,
          lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
      return toLatLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
    },
    clone: function () {
      return new LatLng(this.lat, this.lng, this.alt);
    }
  }; // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
  // @alternative
  // @factory L.latLng(coords: Array): LatLng
  // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
  // @alternative
  // @factory L.latLng(coords: Object): LatLng
  // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

  function toLatLng(a, b, c) {
    if (a instanceof LatLng) {
      return a;
    }

    if (isArray(a) && typeof a[0] !== 'object') {
      if (a.length === 3) {
        return new LatLng(a[0], a[1], a[2]);
      }

      if (a.length === 2) {
        return new LatLng(a[0], a[1]);
      }

      return null;
    }

    if (a === undefined || a === null) {
      return a;
    }

    if (typeof a === 'object' && 'lat' in a) {
      return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
    }

    if (b === undefined) {
      return null;
    }

    return new LatLng(a, b, c);
  }
  /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */


  var CRS = {
    // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
    // Projects geographical coordinates into pixel coordinates for a given zoom.
    latLngToPoint: function (latlng, zoom) {
      var projectedPoint = this.projection.project(latlng),
          scale = this.scale(zoom);
      return this.transformation._transform(projectedPoint, scale);
    },
    // @method pointToLatLng(point: Point, zoom: Number): LatLng
    // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
    // zoom into geographical coordinates.
    pointToLatLng: function (point, zoom) {
      var scale = this.scale(zoom),
          untransformedPoint = this.transformation.untransform(point, scale);
      return this.projection.unproject(untransformedPoint);
    },
    // @method project(latlng: LatLng): Point
    // Projects geographical coordinates into coordinates in units accepted for
    // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
    project: function (latlng) {
      return this.projection.project(latlng);
    },
    // @method unproject(point: Point): LatLng
    // Given a projected coordinate returns the corresponding LatLng.
    // The inverse of `project`.
    unproject: function (point) {
      return this.projection.unproject(point);
    },
    // @method scale(zoom: Number): Number
    // Returns the scale used when transforming projected coordinates into
    // pixel coordinates for a particular zoom. For example, it returns
    // `256 * 2^zoom` for Mercator-based CRS.
    scale: function (zoom) {
      return 256 * Math.pow(2, zoom);
    },
    // @method zoom(scale: Number): Number
    // Inverse of `scale()`, returns the zoom level corresponding to a scale
    // factor of `scale`.
    zoom: function (scale) {
      return Math.log(scale / 256) / Math.LN2;
    },
    // @method getProjectedBounds(zoom: Number): Bounds
    // Returns the projection's bounds scaled and transformed for the provided `zoom`.
    getProjectedBounds: function (zoom) {
      if (this.infinite) {
        return null;
      }

      var b = this.projection.bounds,
          s = this.scale(zoom),
          min = this.transformation.transform(b.min, s),
          max = this.transformation.transform(b.max, s);
      return new Bounds(min, max);
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates.
    // @property code: String
    // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
    //
    // @property wrapLng: Number[]
    // An array of two numbers defining whether the longitude (horizontal) coordinate
    // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
    // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
    //
    // @property wrapLat: Number[]
    // Like `wrapLng`, but for the latitude (vertical) axis.
    // wrapLng: [min, max],
    // wrapLat: [min, max],
    // @property infinite: Boolean
    // If true, the coordinate space will be unbounded (infinite in both axes)
    infinite: false,
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where lat and lng has been wrapped according to the
    // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
    wrapLatLng: function (latlng) {
      var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
          lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
          alt = latlng.alt;
      return new LatLng(lat, lng, alt);
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring
    // that its center is within the CRS's bounds.
    // Only accepts actual `L.LatLngBounds` instances, not arrays.
    wrapLatLngBounds: function (bounds) {
      var center = bounds.getCenter(),
          newCenter = this.wrapLatLng(center),
          latShift = center.lat - newCenter.lat,
          lngShift = center.lng - newCenter.lng;

      if (latShift === 0 && lngShift === 0) {
        return bounds;
      }

      var sw = bounds.getSouthWest(),
          ne = bounds.getNorthEast(),
          newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
          newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
      return new LatLngBounds(newSw, newNe);
    }
  };
  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
    wrapLng: [-180, 180],
    // Mean Earth Radius, as recommended for use by
    // the International Union of Geodesy and Geophysics,
    // see http://rosettacode.org/wiki/Haversine_formula
    R: 6371000,
    // distance between two geographical points using spherical law of cosines approximation
    distance: function (latlng1, latlng2) {
      var rad = Math.PI / 180,
          lat1 = latlng1.lat * rad,
          lat2 = latlng2.lat * rad,
          sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
          sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
          a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return this.R * c;
    }
  });
  /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

  var earthRadius = 6378137;
  var SphericalMercator = {
    R: earthRadius,
    MAX_LATITUDE: 85.0511287798,
    project: function (latlng) {
      var d = Math.PI / 180,
          max = this.MAX_LATITUDE,
          lat = Math.max(Math.min(max, latlng.lat), -max),
          sin = Math.sin(lat * d);
      return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
    },
    unproject: function (point) {
      var d = 180 / Math.PI;
      return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
    },
    bounds: function () {
      var d = earthRadius * Math.PI;
      return new Bounds([-d, -d], [d, d]);
    }()
  };
  /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */
  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
  // Creates a `Transformation` object with the given coefficients.

  function Transformation(a, b, c, d) {
    if (isArray(a)) {
      // use array properties
      this._a = a[0];
      this._b = a[1];
      this._c = a[2];
      this._d = a[3];
      return;
    }

    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
  }

  Transformation.prototype = {
    // @method transform(point: Point, scale?: Number): Point
    // Returns a transformed point, optionally multiplied by the given scale.
    // Only accepts actual `L.Point` instances, not arrays.
    transform: function (point, scale) {
      // (Point, Number) -> Point
      return this._transform(point.clone(), scale);
    },
    // destructive transform (faster)
    _transform: function (point, scale) {
      scale = scale || 1;
      point.x = scale * (this._a * point.x + this._b);
      point.y = scale * (this._c * point.y + this._d);
      return point;
    },
    // @method untransform(point: Point, scale?: Number): Point
    // Returns the reverse transformation of the given point, optionally divided
    // by the given scale. Only accepts actual `L.Point` instances, not arrays.
    untransform: function (point, scale) {
      scale = scale || 1;
      return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
  }; // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // Instantiates a Transformation object with the given coefficients.
  // @alternative
  // @factory L.transformation(coefficients: Array): Transformation
  // Expects an coefficients array of the form
  // `[a: Number, b: Number, c: Number, d: Number]`.

  function toTransformation(a, b, c, d) {
    return new Transformation(a, b, c, d);
  }
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */


  var EPSG3857 = extend({}, Earth, {
    code: 'EPSG:3857',
    projection: SphericalMercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * SphericalMercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });
  var EPSG900913 = extend({}, EPSG3857, {
    code: 'EPSG:900913'
  }); // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:
  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).

  function svgCreate(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  } // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions


  function pointsToPath(rings, closed) {
    var str = '',
        i,
        j,
        len,
        len2,
        points,
        p;

    for (i = 0, len = rings.length; i < len; i++) {
      points = rings[i];

      for (j = 0, len2 = points.length; j < len2; j++) {
        p = points[j];
        str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
      } // closes the ring for polygons; "x" is VML syntax


      str += closed ? svg ? 'z' : 'x' : '';
    } // SVG complains about empty path strings


    return str || 'M0 0';
  }
  /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */


  var style$1 = document.documentElement.style; // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).

  var ie = ('ActiveXObject' in window); // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.

  var ielt9 = ie && !document.addEventListener; // @property edge: Boolean; `true` for the Edge web browser.

  var edge = 'msLaunchUri' in navigator && !('documentMode' in document); // @property webkit: Boolean;
  // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).

  var webkit = userAgentContains('webkit'); // @property android: Boolean
  // `true` for any browser running on an Android platform.

  var android = userAgentContains('android'); // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.

  var android23 = userAgentContains('android 2') || userAgentContains('android 3');
  /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */

  var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
  // @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)

  var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window); // @property opera: Boolean; `true` for the Opera browser

  var opera = !!window.opera; // @property chrome: Boolean; `true` for the Chrome browser.

  var chrome = !edge && userAgentContains('chrome'); // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.

  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie; // @property safari: Boolean; `true` for the Safari browser.

  var safari = !chrome && userAgentContains('safari');
  var phantom = userAgentContains('phantom'); // @property opera12: Boolean
  // `true` for the Opera browser supporting CSS transforms (version 12 or later).

  var opera12 = ('OTransition' in style$1); // @property win: Boolean; `true` when the browser is running in a Windows platform

  var win = navigator.platform.indexOf('Win') === 0; // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.

  var ie3d = ie && 'transition' in style$1; // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.

  var webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23; // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.

  var gecko3d = ('MozPerspective' in style$1); // @property any3d: Boolean
  // `true` for all browsers supporting CSS transforms.

  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom; // @property mobile: Boolean; `true` for all browsers running in a mobile device.

  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile'); // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.

  var mobileWebkit = mobile && webkit; // @property mobileWebkit3d: Boolean
  // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.

  var mobileWebkit3d = mobile && webkit3d; // @property msPointer: Boolean
  // `true` for browsers implementing the Microsoft touch events model (notably IE10).

  var msPointer = !window.PointerEvent && window.MSPointerEvent; // @property pointer: Boolean
  // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).

  var pointer = !!(window.PointerEvent || msPointer); // @property touch: Boolean
  // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
  // This does not necessarily mean that the browser is running in a computer with
  // a touchscreen, it only means that the browser is capable of understanding
  // touch events.

  var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch); // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.

  var mobileOpera = mobile && opera; // @property mobileGecko: Boolean
  // `true` for gecko-based browsers running in a mobile device.

  var mobileGecko = mobile && gecko; // @property retina: Boolean
  // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.

  var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1; // @property passiveEvents: Boolean
  // `true` for browsers that support passive events.

  var passiveEvents = function () {
    var supportsPassiveOption = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          // eslint-disable-line getter-return
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('testPassiveEventSupport', falseFn, opts);
      window.removeEventListener('testPassiveEventSupport', falseFn, opts);
    } catch (e) {// Errors can safely be ignored since this is only a browser support test.
    }

    return supportsPassiveOption;
  }(); // @property canvas: Boolean
  // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).


  var canvas = function () {
    return !!document.createElement('canvas').getContext;
  }(); // @property svg: Boolean
  // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).


  var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect); // @property vml: Boolean
  // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).

  var vml = !svg && function () {
    try {
      var div = document.createElement('div');
      div.innerHTML = '<v:shape adj="1"/>';
      var shape = div.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      return shape && typeof shape.adj === 'object';
    } catch (e) {
      return false;
    }
  }();

  function userAgentContains(str) {
    return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
  }

  var Browser = {
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    androidStock: androidStock,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    passiveEvents: passiveEvents,
    canvas: canvas,
    svg: svg,
    vml: vml
  };
  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */

  var POINTER_DOWN = msPointer ? 'MSPointerDown' : 'pointerdown';
  var POINTER_MOVE = msPointer ? 'MSPointerMove' : 'pointermove';
  var POINTER_UP = msPointer ? 'MSPointerUp' : 'pointerup';
  var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
  var _pointers = {};
  var _pointerDocListener = false; // Provides a touch events wrapper for (ms)pointer events.
  // ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler, id) {
    if (type === 'touchstart') {
      _addPointerStart(obj, handler, id);
    } else if (type === 'touchmove') {
      _addPointerMove(obj, handler, id);
    } else if (type === 'touchend') {
      _addPointerEnd(obj, handler, id);
    }

    return this;
  }

  function removePointerListener(obj, type, id) {
    var handler = obj['_leaflet_' + type + id];

    if (type === 'touchstart') {
      obj.removeEventListener(POINTER_DOWN, handler, false);
    } else if (type === 'touchmove') {
      obj.removeEventListener(POINTER_MOVE, handler, false);
    } else if (type === 'touchend') {
      obj.removeEventListener(POINTER_UP, handler, false);
      obj.removeEventListener(POINTER_CANCEL, handler, false);
    }

    return this;
  }

  function _addPointerStart(obj, handler, id) {
    var onDown = bind(function (e) {
      // IE10 specific: MsTouch needs preventDefault. See #2000
      if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
        preventDefault(e);
      }

      _handlePointer(e, handler);
    });
    obj['_leaflet_touchstart' + id] = onDown;
    obj.addEventListener(POINTER_DOWN, onDown, false); // need to keep track of what pointers and how many are active to provide e.touches emulation

    if (!_pointerDocListener) {
      // we listen document as any drags that end by moving the touch off the screen get fired there
      document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
      document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
      document.addEventListener(POINTER_UP, _globalPointerUp, true);
      document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
      _pointerDocListener = true;
    }
  }

  function _globalPointerDown(e) {
    _pointers[e.pointerId] = e;
  }

  function _globalPointerMove(e) {
    if (_pointers[e.pointerId]) {
      _pointers[e.pointerId] = e;
    }
  }

  function _globalPointerUp(e) {
    delete _pointers[e.pointerId];
  }

  function _handlePointer(e, handler) {
    e.touches = [];

    for (var i in _pointers) {
      e.touches.push(_pointers[i]);
    }

    e.changedTouches = [e];
    handler(e);
  }

  function _addPointerMove(obj, handler, id) {
    var onMove = function (e) {
      // don't fire touch moves when mouse isn't down
      if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || 'mouse') && e.buttons === 0) {
        return;
      }

      _handlePointer(e, handler);
    };

    obj['_leaflet_touchmove' + id] = onMove;
    obj.addEventListener(POINTER_MOVE, onMove, false);
  }

  function _addPointerEnd(obj, handler, id) {
    var onUp = function (e) {
      _handlePointer(e, handler);
    };

    obj['_leaflet_touchend' + id] = onUp;
    obj.addEventListener(POINTER_UP, onUp, false);
    obj.addEventListener(POINTER_CANCEL, onUp, false);
  }
  /*
   * Extends the event handling code with double tap support for mobile browsers.
   */


  var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';

  var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';

  var _pre = '_leaflet_'; // inspired by Zepto touch code by Thomas Fuchs

  function addDoubleTapListener(obj, handler, id) {
    var last,
        touch$$1,
        doubleTap = false,
        delay = 250;

    function onTouchStart(e) {
      if (pointer) {
        if (!e.isPrimary) {
          return;
        }

        if (e.pointerType === 'mouse') {
          return;
        } // mouse fires native dblclick

      } else if (e.touches.length > 1) {
        return;
      }

      var now = Date.now(),
          delta = now - (last || now);
      touch$$1 = e.touches ? e.touches[0] : e;
      doubleTap = delta > 0 && delta <= delay;
      last = now;
    }

    function onTouchEnd(e) {
      if (doubleTap && !touch$$1.cancelBubble) {
        if (pointer) {
          if (e.pointerType === 'mouse') {
            return;
          } // work around .type being readonly with MSPointer* events


          var newTouch = {},
              prop,
              i;

          for (i in touch$$1) {
            prop = touch$$1[i];
            newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
          }

          touch$$1 = newTouch;
        }

        touch$$1.type = 'dblclick';
        touch$$1.button = 0;
        handler(touch$$1);
        last = null;
      }
    }

    obj[_pre + _touchstart + id] = onTouchStart;
    obj[_pre + _touchend + id] = onTouchEnd;
    obj[_pre + 'dblclick' + id] = handler;
    obj.addEventListener(_touchstart, onTouchStart, passiveEvents ? {
      passive: false
    } : false);
    obj.addEventListener(_touchend, onTouchEnd, passiveEvents ? {
      passive: false
    } : false); // On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
    // the browser doesn't fire touchend/pointerup events but does fire
    // native dblclicks. See #4127.
    // Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.

    obj.addEventListener('dblclick', handler, false);
    return this;
  }

  function removeDoubleTapListener(obj, id) {
    var touchstart = obj[_pre + _touchstart + id],
        touchend = obj[_pre + _touchend + id],
        dblclick = obj[_pre + 'dblclick' + id];
    obj.removeEventListener(_touchstart, touchstart, passiveEvents ? {
      passive: false
    } : false);
    obj.removeEventListener(_touchend, touchend, passiveEvents ? {
      passive: false
    } : false);
    obj.removeEventListener('dblclick', dblclick, false);
    return this;
  }
  /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */
  // @property TRANSFORM: String
  // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).


  var TRANSFORM = testProp(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']); // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser
  // @property TRANSITION: String
  // Vendor-prefixed transition style name.

  var TRANSITION = testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']); // @property TRANSITION_END: String
  // Vendor-prefixed transitionend event name.

  var TRANSITION_END = TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend'; // @function get(id: String|HTMLElement): HTMLElement
  // Returns an element given its DOM id, or returns the element itself
  // if it was passed directly.

  function get(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
  } // @function getStyle(el: HTMLElement, styleAttrib: String): String
  // Returns the value for a certain style attribute on an element,
  // including computed values or values set through CSS.


  function getStyle(el, style) {
    var value = el.style[style] || el.currentStyle && el.currentStyle[style];

    if ((!value || value === 'auto') && document.defaultView) {
      var css = document.defaultView.getComputedStyle(el, null);
      value = css ? css[style] : null;
    }

    return value === 'auto' ? null : value;
  } // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
  // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.


  function create$1(tagName, className, container) {
    var el = document.createElement(tagName);
    el.className = className || '';

    if (container) {
      container.appendChild(el);
    }

    return el;
  } // @function remove(el: HTMLElement)
  // Removes `el` from its parent element


  function remove(el) {
    var parent = el.parentNode;

    if (parent) {
      parent.removeChild(el);
    }
  } // @function empty(el: HTMLElement)
  // Removes all of `el`'s children elements from `el`


  function empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  } // @function toFront(el: HTMLElement)
  // Makes `el` the last child of its parent, so it renders in front of the other children.


  function toFront(el) {
    var parent = el.parentNode;

    if (parent && parent.lastChild !== el) {
      parent.appendChild(el);
    }
  } // @function toBack(el: HTMLElement)
  // Makes `el` the first child of its parent, so it renders behind the other children.


  function toBack(el) {
    var parent = el.parentNode;

    if (parent && parent.firstChild !== el) {
      parent.insertBefore(el, parent.firstChild);
    }
  } // @function hasClass(el: HTMLElement, name: String): Boolean
  // Returns `true` if the element's class attribute contains `name`.


  function hasClass(el, name) {
    if (el.classList !== undefined) {
      return el.classList.contains(name);
    }

    var className = getClass(el);
    return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  } // @function addClass(el: HTMLElement, name: String)
  // Adds `name` to the element's class attribute.


  function addClass(el, name) {
    if (el.classList !== undefined) {
      var classes = splitWords(name);

      for (var i = 0, len = classes.length; i < len; i++) {
        el.classList.add(classes[i]);
      }
    } else if (!hasClass(el, name)) {
      var className = getClass(el);
      setClass(el, (className ? className + ' ' : '') + name);
    }
  } // @function removeClass(el: HTMLElement, name: String)
  // Removes `name` from the element's class attribute.


  function removeClass(el, name) {
    if (el.classList !== undefined) {
      el.classList.remove(name);
    } else {
      setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
    }
  } // @function setClass(el: HTMLElement, name: String)
  // Sets the element's class.


  function setClass(el, name) {
    if (el.className.baseVal === undefined) {
      el.className = name;
    } else {
      // in case of SVG element
      el.className.baseVal = name;
    }
  } // @function getClass(el: HTMLElement): String
  // Returns the element's class.


  function getClass(el) {
    // Check if the element is an SVGElementInstance and use the correspondingElement instead
    // (Required for linked SVG elements in IE11.)
    if (el.correspondingElement) {
      el = el.correspondingElement;
    }

    return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  } // @function setOpacity(el: HTMLElement, opacity: Number)
  // Set the opacity of an element (including old IE support).
  // `opacity` must be a number from `0` to `1`.


  function setOpacity(el, value) {
    if ('opacity' in el.style) {
      el.style.opacity = value;
    } else if ('filter' in el.style) {
      _setOpacityIE(el, value);
    }
  }

  function _setOpacityIE(el, value) {
    var filter = false,
        filterName = 'DXImageTransform.Microsoft.Alpha'; // filters collection throws an error if we try to retrieve a filter that doesn't exist

    try {
      filter = el.filters.item(filterName);
    } catch (e) {
      // don't set opacity to 1 if we haven't already set an opacity,
      // it isn't needed and breaks transparent pngs.
      if (value === 1) {
        return;
      }
    }

    value = Math.round(value * 100);

    if (filter) {
      filter.Enabled = value !== 100;
      filter.Opacity = value;
    } else {
      el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
    }
  } // @function testProp(props: String[]): String|false
  // Goes through the array of style names and returns the first name
  // that is a valid style name for an element. If no such name is found,
  // it returns false. Useful for vendor-prefixed styles like `transform`.


  function testProp(props) {
    var style = document.documentElement.style;

    for (var i = 0; i < props.length; i++) {
      if (props[i] in style) {
        return props[i];
      }
    }

    return false;
  } // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
  // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
  // and optionally scaled by `scale`. Does not have an effect if the
  // browser doesn't support 3D CSS transforms.


  function setTransform(el, offset, scale) {
    var pos = offset || new Point(0, 0);
    el.style[TRANSFORM] = (ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
  } // @function setPosition(el: HTMLElement, position: Point)
  // Sets the position of `el` to coordinates specified by `position`,
  // using CSS translate or top/left positioning depending on the browser
  // (used by Leaflet internally to position its layers).


  function setPosition(el, point) {
    /*eslint-disable */
    el._leaflet_pos = point;
    /* eslint-enable */

    if (any3d) {
      setTransform(el, point);
    } else {
      el.style.left = point.x + 'px';
      el.style.top = point.y + 'px';
    }
  } // @function getPosition(el: HTMLElement): Point
  // Returns the coordinates of an element previously positioned with setPosition.


  function getPosition(el) {
    // this method is only used for elements previously positioned using setPosition,
    // so it's safe to cache the position for performance
    return el._leaflet_pos || new Point(0, 0);
  } // @function disableTextSelection()
  // Prevents the user from generating `selectstart` DOM events, usually generated
  // when the user drags the mouse through a page with text. Used internally
  // by Leaflet to override the behaviour of any click-and-drag interaction on
  // the map. Affects drag interactions on the whole document.
  // @function enableTextSelection()
  // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).


  var disableTextSelection;
  var enableTextSelection;

  var _userSelect;

  if ('onselectstart' in document) {
    disableTextSelection = function () {
      on(window, 'selectstart', preventDefault);
    };

    enableTextSelection = function () {
      off(window, 'selectstart', preventDefault);
    };
  } else {
    var userSelectProperty = testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

    disableTextSelection = function () {
      if (userSelectProperty) {
        var style = document.documentElement.style;
        _userSelect = style[userSelectProperty];
        style[userSelectProperty] = 'none';
      }
    };

    enableTextSelection = function () {
      if (userSelectProperty) {
        document.documentElement.style[userSelectProperty] = _userSelect;
        _userSelect = undefined;
      }
    };
  } // @function disableImageDrag()
  // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
  // for `dragstart` DOM events, usually generated when the user drags an image.


  function disableImageDrag() {
    on(window, 'dragstart', preventDefault);
  } // @function enableImageDrag()
  // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).


  function enableImageDrag() {
    off(window, 'dragstart', preventDefault);
  }

  var _outlineElement, _outlineStyle; // @function preventOutline(el: HTMLElement)
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
  // of the element `el` invisible. Used internally by Leaflet to prevent
  // focusable elements from displaying an outline when the user performs a
  // drag interaction on them.


  function preventOutline(element) {
    while (element.tabIndex === -1) {
      element = element.parentNode;
    }

    if (!element.style) {
      return;
    }

    restoreOutline();
    _outlineElement = element;
    _outlineStyle = element.style.outline;
    element.style.outline = 'none';
    on(window, 'keydown', restoreOutline);
  } // @function restoreOutline()
  // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().


  function restoreOutline() {
    if (!_outlineElement) {
      return;
    }

    _outlineElement.style.outline = _outlineStyle;
    _outlineElement = undefined;
    _outlineStyle = undefined;
    off(window, 'keydown', restoreOutline);
  } // @function getSizedParentNode(el: HTMLElement): HTMLElement
  // Finds the closest parent node which size (width and height) is not null.


  function getSizedParentNode(element) {
    do {
      element = element.parentNode;
    } while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);

    return element;
  } // @function getScale(el: HTMLElement): Object
  // Computes the CSS scale currently applied on the element.
  // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
  // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).


  function getScale(element) {
    var rect = element.getBoundingClientRect(); // Read-only in old browsers.

    return {
      x: rect.width / element.offsetWidth || 1,
      y: rect.height / element.offsetHeight || 1,
      boundingClientRect: rect
    };
  }

  var DomUtil = {
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    disableTextSelection: disableTextSelection,
    enableTextSelection: enableTextSelection,
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline,
    getSizedParentNode: getSizedParentNode,
    getScale: getScale
  };
  /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */
  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Adds a listener function (`fn`) to a particular DOM event type of the
  // element `el`. You can optionally specify the context of the listener
  // (object the `this` keyword will point to). You can also pass several
  // space-separated types (e.g. `'click dblclick'`).
  // @alternative
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
  // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

  function on(obj, types, fn, context) {
    if (typeof types === 'object') {
      for (var type in types) {
        addOne(obj, type, types[type], fn);
      }
    } else {
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        addOne(obj, types[i], fn, context);
      }
    }

    return this;
  }

  var eventsKey = '_leaflet_events'; // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Removes a previously added listener function.
  // Note that if you passed a custom context to on, you must pass the same
  // context to `off` in order to remove the listener.
  // @alternative
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
  // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

  function off(obj, types, fn, context) {
    if (typeof types === 'object') {
      for (var type in types) {
        removeOne(obj, type, types[type], fn);
      }
    } else if (types) {
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        removeOne(obj, types[i], fn, context);
      }
    } else {
      for (var j in obj[eventsKey]) {
        removeOne(obj, j, obj[eventsKey][j]);
      }

      delete obj[eventsKey];
    }

    return this;
  }

  function browserFiresNativeDblClick() {
    // See https://github.com/w3c/pointerevents/issues/171
    if (pointer) {
      return !(edge || safari);
    }
  }

  var mouseSubst = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    wheel: !('onwheel' in window) && 'mousewheel'
  };

  function addOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

    if (obj[eventsKey] && obj[eventsKey][id]) {
      return this;
    }

    var handler = function (e) {
      return fn.call(context || obj, e || window.event);
    };

    var originalHandler = handler;

    if (pointer && type.indexOf('touch') === 0) {
      // Needs DomEvent.Pointer.js
      addPointerListener(obj, type, handler, id);
    } else if (touch && type === 'dblclick' && !browserFiresNativeDblClick()) {
      addDoubleTapListener(obj, handler, id);
    } else if ('addEventListener' in obj) {
      if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' || type === 'mousewheel') {
        obj.addEventListener(mouseSubst[type] || type, handler, passiveEvents ? {
          passive: false
        } : false);
      } else if (type === 'mouseenter' || type === 'mouseleave') {
        handler = function (e) {
          e = e || window.event;

          if (isExternalTarget(obj, e)) {
            originalHandler(e);
          }
        };

        obj.addEventListener(mouseSubst[type], handler, false);
      } else {
        obj.addEventListener(type, originalHandler, false);
      }
    } else if ('attachEvent' in obj) {
      obj.attachEvent('on' + type, handler);
    }

    obj[eventsKey] = obj[eventsKey] || {};
    obj[eventsKey][id] = handler;
  }

  function removeOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
        handler = obj[eventsKey] && obj[eventsKey][id];

    if (!handler) {
      return this;
    }

    if (pointer && type.indexOf('touch') === 0) {
      removePointerListener(obj, type, id);
    } else if (touch && type === 'dblclick' && !browserFiresNativeDblClick()) {
      removeDoubleTapListener(obj, id);
    } else if ('removeEventListener' in obj) {
      obj.removeEventListener(mouseSubst[type] || type, handler, false);
    } else if ('detachEvent' in obj) {
      obj.detachEvent('on' + type, handler);
    }

    obj[eventsKey][id] = null;
  } // @function stopPropagation(ev: DOMEvent): this
  // Stop the given event from propagation to parent elements. Used inside the listener functions:
  // ```js
  // L.DomEvent.on(div, 'click', function (ev) {
  // 	L.DomEvent.stopPropagation(ev);
  // });
  // ```


  function stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (e.originalEvent) {
      // In case of Leaflet event.
      e.originalEvent._stopped = true;
    } else {
      e.cancelBubble = true;
    }

    skipped(e);
    return this;
  } // @function disableScrollPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).


  function disableScrollPropagation(el) {
    addOne(el, 'wheel', stopPropagation);
    return this;
  } // @function disableClickPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
  // `'mousedown'` and `'touchstart'` events (plus browser variants).


  function disableClickPropagation(el) {
    on(el, 'mousedown touchstart dblclick', stopPropagation);
    addOne(el, 'click', fakeStop);
    return this;
  } // @function preventDefault(ev: DOMEvent): this
  // Prevents the default action of the DOM Event `ev` from happening (such as
  // following a link in the href of the a element, or doing a POST request
  // with page reload when a `<form>` is submitted).
  // Use it inside listener functions.


  function preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }

    return this;
  } // @function stop(ev: DOMEvent): this
  // Does `stopPropagation` and `preventDefault` at the same time.


  function stop(e) {
    preventDefault(e);
    stopPropagation(e);
    return this;
  } // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
  // Gets normalized mouse position from a DOM event relative to the
  // `container` (border excluded) or to the whole page if not specified.


  function getMousePosition(e, container) {
    if (!container) {
      return new Point(e.clientX, e.clientY);
    }

    var scale = getScale(container),
        offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

    return new Point( // offset.left/top values are in page scale (like clientX/Y),
    // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
    (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
  } // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
  // and Firefox scrolls device pixels, not CSS pixels


  var wheelPxFactor = win && chrome ? 2 * window.devicePixelRatio : gecko ? window.devicePixelRatio : 1; // @function getWheelDelta(ev: DOMEvent): Number
  // Gets normalized wheel delta from a wheel DOM event, in vertical
  // pixels scrolled (negative if scrolling down).
  // Events from pointing devices without precise scrolling are mapped to
  // a best guess of 60 pixels.

  function getWheelDelta(e) {
    return edge ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
    e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : // Pixels
    e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : // Lines
    e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : // Pages
    e.deltaX || e.deltaZ ? 0 : // Skip horizontal/depth wheel events
    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
    e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : // Legacy Moz lines
    e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
    0;
  }

  var skipEvents = {};

  function fakeStop(e) {
    // fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
    skipEvents[e.type] = true;
  }

  function skipped(e) {
    var events = skipEvents[e.type]; // reset when checking, as it's only used in map container and propagates outside of the map

    skipEvents[e.type] = false;
    return events;
  } // check if element really left/entered the event target (for mouseenter/mouseleave)


  function isExternalTarget(el, e) {
    var related = e.relatedTarget;

    if (!related) {
      return true;
    }

    try {
      while (related && related !== el) {
        related = related.parentNode;
      }
    } catch (err) {
      return false;
    }

    return related !== el;
  }

  var DomEvent = {
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    fakeStop: fakeStop,
    skipped: skipped,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  };
  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

  var PosAnimation = Evented.extend({
    // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
    // Run an animation of a given element to a new position, optionally setting
    // duration in seconds (`0.25` by default) and easing linearity factor (3rd
    // argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
    // `0.5` by default).
    run: function (el, newPos, duration, easeLinearity) {
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._duration = duration || 0.25;
      this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
      this._startPos = getPosition(el);
      this._offset = newPos.subtract(this._startPos);
      this._startTime = +new Date(); // @event start: Event
      // Fired when the animation starts

      this.fire('start');

      this._animate();
    },
    // @method stop()
    // Stops the animation (if currently running).
    stop: function () {
      if (!this._inProgress) {
        return;
      }

      this._step(true);

      this._complete();
    },
    _animate: function () {
      // animation loop
      this._animId = requestAnimFrame(this._animate, this);

      this._step();
    },
    _step: function (round) {
      var elapsed = +new Date() - this._startTime,
          duration = this._duration * 1000;

      if (elapsed < duration) {
        this._runFrame(this._easeOut(elapsed / duration), round);
      } else {
        this._runFrame(1);

        this._complete();
      }
    },
    _runFrame: function (progress, round) {
      var pos = this._startPos.add(this._offset.multiplyBy(progress));

      if (round) {
        pos._round();
      }

      setPosition(this._el, pos); // @event step: Event
      // Fired continuously during the animation.

      this.fire('step');
    },
    _complete: function () {
      cancelAnimFrame(this._animId);
      this._inProgress = false; // @event end: Event
      // Fired when the animation ends.

      this.fire('end');
    },
    _easeOut: function (t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  });
  /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

  var Map = Evented.extend({
    options: {
      // @section Map State Options
      // @option crs: CRS = L.CRS.EPSG3857
      // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
      // sure what it means.
      crs: EPSG3857,
      // @option center: LatLng = undefined
      // Initial geographic center of the map
      center: undefined,
      // @option zoom: Number = undefined
      // Initial map zoom level
      zoom: undefined,
      // @option minZoom: Number = *
      // Minimum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the lowest of their `minZoom` options will be used instead.
      minZoom: undefined,
      // @option maxZoom: Number = *
      // Maximum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the highest of their `maxZoom` options will be used instead.
      maxZoom: undefined,
      // @option layers: Layer[] = []
      // Array of layers that will be added to the map initially
      layers: [],
      // @option maxBounds: LatLngBounds = null
      // When this option is set, the map restricts the view to the given
      // geographical bounds, bouncing the user back if the user tries to pan
      // outside the view. To set the restriction dynamically, use
      // [`setMaxBounds`](#map-setmaxbounds) method.
      maxBounds: undefined,
      // @option renderer: Renderer = *
      // The default method for drawing vector layers on the map. `L.SVG`
      // or `L.Canvas` by default depending on browser support.
      renderer: undefined,
      // @section Animation Options
      // @option zoomAnimation: Boolean = true
      // Whether the map zoom animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      zoomAnimation: true,
      // @option zoomAnimationThreshold: Number = 4
      // Won't animate zoom if the zoom difference exceeds this value.
      zoomAnimationThreshold: 4,
      // @option fadeAnimation: Boolean = true
      // Whether the tile fade animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      fadeAnimation: true,
      // @option markerZoomAnimation: Boolean = true
      // Whether markers animate their zoom with the zoom animation, if disabled
      // they will disappear for the length of the animation. By default it's
      // enabled in all browsers that support CSS3 Transitions except Android.
      markerZoomAnimation: true,
      // @option transform3DLimit: Number = 2^23
      // Defines the maximum size of a CSS translation transform. The default
      // value should not be changed unless a web browser positions layers in
      // the wrong place after doing a large `panBy`.
      transform3DLimit: 8388608,
      // Precision limit of a 32-bit float
      // @section Interaction Options
      // @option zoomSnap: Number = 1
      // Forces the map's zoom level to always be a multiple of this, particularly
      // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
      // By default, the zoom level snaps to the nearest integer; lower values
      // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
      // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
      zoomSnap: 1,
      // @option zoomDelta: Number = 1
      // Controls how much the map's zoom level will change after a
      // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
      // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
      // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
      zoomDelta: 1,
      // @option trackResize: Boolean = true
      // Whether the map automatically handles browser window resize to update itself.
      trackResize: true
    },
    initialize: function (id, options) {
      // (HTMLElement or String, Object)
      options = setOptions(this, options); // Make sure to assign internal flags at the beginning,
      // to avoid inconsistent state in some edge cases.

      this._handlers = [];
      this._layers = {};
      this._zoomBoundLayers = {};
      this._sizeChanged = true;

      this._initContainer(id);

      this._initLayout(); // hack for https://github.com/Leaflet/Leaflet/issues/1980


      this._onResize = bind(this._onResize, this);

      this._initEvents();

      if (options.maxBounds) {
        this.setMaxBounds(options.maxBounds);
      }

      if (options.zoom !== undefined) {
        this._zoom = this._limitZoom(options.zoom);
      }

      if (options.center && options.zoom !== undefined) {
        this.setView(toLatLng(options.center), options.zoom, {
          reset: true
        });
      }

      this.callInitHooks(); // don't animate on browsers without hardware-accelerated transitions or old Android/Opera

      this._zoomAnimated = TRANSITION && any3d && !mobileOpera && this.options.zoomAnimation; // zoom transitions run with the same duration for all layers, so if one of transitionend events
      // happens after starting zoom animation (propagating to the map pane), we know that it ended globally

      if (this._zoomAnimated) {
        this._createAnimProxy();

        on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
      }

      this._addLayers(this.options.layers);
    },
    // @section Methods for modifying map state
    // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) with the given
    // animation options.
    setView: function (center, zoom, options) {
      zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
      center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
      options = options || {};

      this._stop();

      if (this._loaded && !options.reset && options !== true) {
        if (options.animate !== undefined) {
          options.zoom = extend({
            animate: options.animate
          }, options.zoom);
          options.pan = extend({
            animate: options.animate,
            duration: options.duration
          }, options.pan);
        } // try animating pan or zoom


        var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);

        if (moved) {
          // prevent resize handler call, the view will refresh after animation anyway
          clearTimeout(this._sizeTimer);
          return this;
        }
      } // animation didn't start, just reset the map view


      this._resetView(center, zoom);

      return this;
    },
    // @method setZoom(zoom: Number, options?: Zoom/pan options): this
    // Sets the zoom of the map.
    setZoom: function (zoom, options) {
      if (!this._loaded) {
        this._zoom = zoom;
        return this;
      }

      return this.setView(this.getCenter(), zoom, {
        zoom: options
      });
    },
    // @method zoomIn(delta?: Number, options?: Zoom options): this
    // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomIn: function (delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom + delta, options);
    },
    // @method zoomOut(delta?: Number, options?: Zoom options): this
    // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomOut: function (delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom - delta, options);
    },
    // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified geographical point on the map
    // stationary (e.g. used internally for scroll zoom and double-click zoom).
    // @alternative
    // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
    setZoomAround: function (latlng, zoom, options) {
      var scale = this.getZoomScale(zoom),
          viewHalf = this.getSize().divideBy(2),
          containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),
          centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
          newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
      return this.setView(newCenter, zoom, {
        zoom: options
      });
    },
    _getBoundsCenterZoom: function (bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
      var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
          paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
          zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
      zoom = typeof options.maxZoom === 'number' ? Math.min(options.maxZoom, zoom) : zoom;

      if (zoom === Infinity) {
        return {
          center: bounds.getCenter(),
          zoom: zoom
        };
      }

      var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
          swPoint = this.project(bounds.getSouthWest(), zoom),
          nePoint = this.project(bounds.getNorthEast(), zoom),
          center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      return {
        center: center,
        zoom: zoom
      };
    },
    // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets a map view that contains the given geographical bounds with the
    // maximum zoom level possible.
    fitBounds: function (bounds, options) {
      bounds = toLatLngBounds(bounds);

      if (!bounds.isValid()) {
        throw new Error('Bounds are not valid.');
      }

      var target = this._getBoundsCenterZoom(bounds, options);

      return this.setView(target.center, target.zoom, options);
    },
    // @method fitWorld(options?: fitBounds options): this
    // Sets a map view that mostly contains the whole world with the maximum
    // zoom level possible.
    fitWorld: function (options) {
      return this.fitBounds([[-90, -180], [90, 180]], options);
    },
    // @method panTo(latlng: LatLng, options?: Pan options): this
    // Pans the map to a given center.
    panTo: function (center, options) {
      // (LatLng)
      return this.setView(center, this._zoom, {
        pan: options
      });
    },
    // @method panBy(offset: Point, options?: Pan options): this
    // Pans the map by a given number of pixels (animated).
    panBy: function (offset, options) {
      offset = toPoint(offset).round();
      options = options || {};

      if (!offset.x && !offset.y) {
        return this.fire('moveend');
      } // If we pan too far, Chrome gets issues with tiles
      // and makes them disappear or appear in the wrong place (slightly offset) #2602


      if (options.animate !== true && !this.getSize().contains(offset)) {
        this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());

        return this;
      }

      if (!this._panAnim) {
        this._panAnim = new PosAnimation();

        this._panAnim.on({
          'step': this._onPanTransitionStep,
          'end': this._onPanTransitionEnd
        }, this);
      } // don't fire movestart if animating inertia


      if (!options.noMoveStart) {
        this.fire('movestart');
      } // animate pan unless animate: false specified


      if (options.animate !== false) {
        addClass(this._mapPane, 'leaflet-pan-anim');

        var newPos = this._getMapPanePos().subtract(offset).round();

        this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
      } else {
        this._rawPanBy(offset);

        this.fire('move').fire('moveend');
      }

      return this;
    },
    // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) performing a smooth
    // pan-zoom animation.
    flyTo: function (targetCenter, targetZoom, options) {
      options = options || {};

      if (options.animate === false || !any3d) {
        return this.setView(targetCenter, targetZoom, options);
      }

      this._stop();

      var from = this.project(this.getCenter()),
          to = this.project(targetCenter),
          size = this.getSize(),
          startZoom = this._zoom;
      targetCenter = toLatLng(targetCenter);
      targetZoom = targetZoom === undefined ? startZoom : targetZoom;
      var w0 = Math.max(size.x, size.y),
          w1 = w0 * this.getZoomScale(startZoom, targetZoom),
          u1 = to.distanceTo(from) || 1,
          rho = 1.42,
          rho2 = rho * rho;

      function r(i) {
        var s1 = i ? -1 : 1,
            s2 = i ? w1 : w0,
            t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
            b1 = 2 * s2 * rho2 * u1,
            b = t1 / b1,
            sq = Math.sqrt(b * b + 1) - b; // workaround for floating point precision bug when sq = 0, log = -Infinite,
        // thus triggering an infinite loop in flyTo

        var log = sq < 0.000000001 ? -18 : Math.log(sq);
        return log;
      }

      function sinh(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2;
      }

      function cosh(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2;
      }

      function tanh(n) {
        return sinh(n) / cosh(n);
      }

      var r0 = r(0);

      function w(s) {
        return w0 * (cosh(r0) / cosh(r0 + rho * s));
      }

      function u(s) {
        return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
      }

      function easeOut(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }

      var start = Date.now(),
          S = (r(1) - r0) / rho,
          duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

      function frame() {
        var t = (Date.now() - start) / duration,
            s = easeOut(t) * S;

        if (t <= 1) {
          this._flyToFrame = requestAnimFrame(frame, this);

          this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
            flyTo: true
          });
        } else {
          this._move(targetCenter, targetZoom)._moveEnd(true);
        }
      }

      this._moveStart(true, options.noMoveStart);

      frame.call(this);
      return this;
    },
    // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
    // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
    flyToBounds: function (bounds, options) {
      var target = this._getBoundsCenterZoom(bounds, options);

      return this.flyTo(target.center, target.zoom, options);
    },
    // @method setMaxBounds(bounds: LatLngBounds): this
    // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
    setMaxBounds: function (bounds) {
      bounds = toLatLngBounds(bounds);

      if (!bounds.isValid()) {
        this.options.maxBounds = null;
        return this.off('moveend', this._panInsideMaxBounds);
      } else if (this.options.maxBounds) {
        this.off('moveend', this._panInsideMaxBounds);
      }

      this.options.maxBounds = bounds;

      if (this._loaded) {
        this._panInsideMaxBounds();
      }

      return this.on('moveend', this._panInsideMaxBounds);
    },
    // @method setMinZoom(zoom: Number): this
    // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
    setMinZoom: function (zoom) {
      var oldZoom = this.options.minZoom;
      this.options.minZoom = zoom;

      if (this._loaded && oldZoom !== zoom) {
        this.fire('zoomlevelschange');

        if (this.getZoom() < this.options.minZoom) {
          return this.setZoom(zoom);
        }
      }

      return this;
    },
    // @method setMaxZoom(zoom: Number): this
    // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
    setMaxZoom: function (zoom) {
      var oldZoom = this.options.maxZoom;
      this.options.maxZoom = zoom;

      if (this._loaded && oldZoom !== zoom) {
        this.fire('zoomlevelschange');

        if (this.getZoom() > this.options.maxZoom) {
          return this.setZoom(zoom);
        }
      }

      return this;
    },
    // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
    // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
    panInsideBounds: function (bounds, options) {
      this._enforcingBounds = true;

      var center = this.getCenter(),
          newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

      if (!center.equals(newCenter)) {
        this.panTo(newCenter, options);
      }

      this._enforcingBounds = false;
      return this;
    },
    // @method panInside(latlng: LatLng, options?: options): this
    // Pans the map the minimum amount to make the `latlng` visible. Use
    // `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
    // the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
    // If `latlng` is already within the (optionally padded) display bounds,
    // the map will not be panned.
    panInside: function (latlng, options) {
      options = options || {};
      var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
          paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
          center = this.getCenter(),
          pixelCenter = this.project(center),
          pixelPoint = this.project(latlng),
          pixelBounds = this.getPixelBounds(),
          halfPixelBounds = pixelBounds.getSize().divideBy(2),
          paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

      if (!paddedBounds.contains(pixelPoint)) {
        this._enforcingBounds = true;
        var diff = pixelCenter.subtract(pixelPoint),
            newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

        if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
          newCenter.x = pixelCenter.x - diff.x;

          if (diff.x > 0) {
            newCenter.x += halfPixelBounds.x - paddingTL.x;
          } else {
            newCenter.x -= halfPixelBounds.x - paddingBR.x;
          }
        }

        if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
          newCenter.y = pixelCenter.y - diff.y;

          if (diff.y > 0) {
            newCenter.y += halfPixelBounds.y - paddingTL.y;
          } else {
            newCenter.y -= halfPixelBounds.y - paddingBR.y;
          }
        }

        this.panTo(this.unproject(newCenter), options);
        this._enforcingBounds = false;
      }

      return this;
    },
    // @method invalidateSize(options: Zoom/pan options): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default. If `options.pan` is `false`, panning will not occur.
    // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
    // that it doesn't happen often even if the method is called many
    // times in a row.
    // @alternative
    // @method invalidateSize(animate: Boolean): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default.
    invalidateSize: function (options) {
      if (!this._loaded) {
        return this;
      }

      options = extend({
        animate: false,
        pan: true
      }, options === true ? {
        animate: true
      } : options);
      var oldSize = this.getSize();
      this._sizeChanged = true;
      this._lastCenter = null;
      var newSize = this.getSize(),
          oldCenter = oldSize.divideBy(2).round(),
          newCenter = newSize.divideBy(2).round(),
          offset = oldCenter.subtract(newCenter);

      if (!offset.x && !offset.y) {
        return this;
      }

      if (options.animate && options.pan) {
        this.panBy(offset);
      } else {
        if (options.pan) {
          this._rawPanBy(offset);
        }

        this.fire('move');

        if (options.debounceMoveend) {
          clearTimeout(this._sizeTimer);
          this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
        } else {
          this.fire('moveend');
        }
      } // @section Map state change events
      // @event resize: ResizeEvent
      // Fired when the map is resized.


      return this.fire('resize', {
        oldSize: oldSize,
        newSize: newSize
      });
    },
    // @section Methods for modifying map state
    // @method stop(): this
    // Stops the currently running `panTo` or `flyTo` animation, if any.
    stop: function () {
      this.setZoom(this._limitZoom(this._zoom));

      if (!this.options.zoomSnap) {
        this.fire('viewreset');
      }

      return this._stop();
    },
    // @section Geolocation methods
    // @method locate(options?: Locate options): this
    // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
    // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
    // and optionally sets the map view to the user's location with respect to
    // detection accuracy (or to the world view if geolocation failed).
    // Note that, if your page doesn't use HTTPS, this method will fail in
    // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
    // See `Locate options` for more details.
    locate: function (options) {
      options = this._locateOptions = extend({
        timeout: 10000,
        watch: false // setView: false
        // maxZoom: <Number>
        // maximumAge: 0
        // enableHighAccuracy: false

      }, options);

      if (!('geolocation' in navigator)) {
        this._handleGeolocationError({
          code: 0,
          message: 'Geolocation not supported.'
        });

        return this;
      }

      var onResponse = bind(this._handleGeolocationResponse, this),
          onError = bind(this._handleGeolocationError, this);

      if (options.watch) {
        this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
      } else {
        navigator.geolocation.getCurrentPosition(onResponse, onError, options);
      }

      return this;
    },
    // @method stopLocate(): this
    // Stops watching location previously initiated by `map.locate({watch: true})`
    // and aborts resetting the map view if map.locate was called with
    // `{setView: true}`.
    stopLocate: function () {
      if (navigator.geolocation && navigator.geolocation.clearWatch) {
        navigator.geolocation.clearWatch(this._locationWatchId);
      }

      if (this._locateOptions) {
        this._locateOptions.setView = false;
      }

      return this;
    },
    _handleGeolocationError: function (error) {
      var c = error.code,
          message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');

      if (this._locateOptions.setView && !this._loaded) {
        this.fitWorld();
      } // @section Location events
      // @event locationerror: ErrorEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method) failed.


      this.fire('locationerror', {
        code: c,
        message: 'Geolocation error: ' + message + '.'
      });
    },
    _handleGeolocationResponse: function (pos) {
      var lat = pos.coords.latitude,
          lng = pos.coords.longitude,
          latlng = new LatLng(lat, lng),
          bounds = latlng.toBounds(pos.coords.accuracy * 2),
          options = this._locateOptions;

      if (options.setView) {
        var zoom = this.getBoundsZoom(bounds);
        this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
      }

      var data = {
        latlng: latlng,
        bounds: bounds,
        timestamp: pos.timestamp
      };

      for (var i in pos.coords) {
        if (typeof pos.coords[i] === 'number') {
          data[i] = pos.coords[i];
        }
      } // @event locationfound: LocationEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method)
      // went successfully.


      this.fire('locationfound', data);
    },
    // TODO Appropriate docs section?
    // @section Other Methods
    // @method addHandler(name: String, HandlerClass: Function): this
    // Adds a new `Handler` to the map, given its name and constructor function.
    addHandler: function (name, HandlerClass) {
      if (!HandlerClass) {
        return this;
      }

      var handler = this[name] = new HandlerClass(this);

      this._handlers.push(handler);

      if (this.options[name]) {
        handler.enable();
      }

      return this;
    },
    // @method remove(): this
    // Destroys the map and clears all related event listeners.
    remove: function () {
      this._initEvents(true);

      this.off('moveend', this._panInsideMaxBounds);

      if (this._containerId !== this._container._leaflet_id) {
        throw new Error('Map container is being reused by another instance');
      }

      try {
        // throws error in IE6-8
        delete this._container._leaflet_id;
        delete this._containerId;
      } catch (e) {
        /*eslint-disable */
        this._container._leaflet_id = undefined;
        /* eslint-enable */

        this._containerId = undefined;
      }

      if (this._locationWatchId !== undefined) {
        this.stopLocate();
      }

      this._stop();

      remove(this._mapPane);

      if (this._clearControlPos) {
        this._clearControlPos();
      }

      if (this._resizeRequest) {
        cancelAnimFrame(this._resizeRequest);
        this._resizeRequest = null;
      }

      this._clearHandlers();

      if (this._loaded) {
        // @section Map state change events
        // @event unload: Event
        // Fired when the map is destroyed with [remove](#map-remove) method.
        this.fire('unload');
      }

      var i;

      for (i in this._layers) {
        this._layers[i].remove();
      }

      for (i in this._panes) {
        remove(this._panes[i]);
      }

      this._layers = [];
      this._panes = [];
      delete this._mapPane;
      delete this._renderer;
      return this;
    },
    // @section Other Methods
    // @method createPane(name: String, container?: HTMLElement): HTMLElement
    // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
    // then returns it. The pane is created as a child of `container`, or
    // as a child of the main map pane if not set.
    createPane: function (name, container) {
      var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
          pane = create$1('div', className, container || this._mapPane);

      if (name) {
        this._panes[name] = pane;
      }

      return pane;
    },
    // @section Methods for Getting Map State
    // @method getCenter(): LatLng
    // Returns the geographical center of the map view
    getCenter: function () {
      this._checkIfLoaded();

      if (this._lastCenter && !this._moved()) {
        return this._lastCenter;
      }

      return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    // @method getZoom(): Number
    // Returns the current zoom level of the map view
    getZoom: function () {
      return this._zoom;
    },
    // @method getBounds(): LatLngBounds
    // Returns the geographical bounds visible in the current map view
    getBounds: function () {
      var bounds = this.getPixelBounds(),
          sw = this.unproject(bounds.getBottomLeft()),
          ne = this.unproject(bounds.getTopRight());
      return new LatLngBounds(sw, ne);
    },
    // @method getMinZoom(): Number
    // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
    getMinZoom: function () {
      return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    // @method getMaxZoom(): Number
    // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
    getMaxZoom: function () {
      return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
    },
    // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
    // Returns the maximum zoom level on which the given bounds fit to the map
    // view in its entirety. If `inside` (optional) is set to `true`, the method
    // instead returns the minimum zoom level on which the map view fits into
    // the given bounds in its entirety.
    getBoundsZoom: function (bounds, inside, padding) {
      // (LatLngBounds[, Boolean, Point]) -> Number
      bounds = toLatLngBounds(bounds);
      padding = toPoint(padding || [0, 0]);
      var zoom = this.getZoom() || 0,
          min = this.getMinZoom(),
          max = this.getMaxZoom(),
          nw = bounds.getNorthWest(),
          se = bounds.getSouthEast(),
          size = this.getSize().subtract(padding),
          boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
          snap = any3d ? this.options.zoomSnap : 1,
          scalex = size.x / boundsSize.x,
          scaley = size.y / boundsSize.y,
          scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
      zoom = this.getScaleZoom(scale, zoom);

      if (snap) {
        zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level

        zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
      }

      return Math.max(min, Math.min(max, zoom));
    },
    // @method getSize(): Point
    // Returns the current size of the map container (in pixels).
    getSize: function () {
      if (!this._size || this._sizeChanged) {
        this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
        this._sizeChanged = false;
      }

      return this._size.clone();
    },
    // @method getPixelBounds(): Bounds
    // Returns the bounds of the current map view in projected pixel
    // coordinates (sometimes useful in layer and overlay implementations).
    getPixelBounds: function (center, zoom) {
      var topLeftPoint = this._getTopLeftPoint(center, zoom);

      return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
    // the map pane? "left point of the map layer" can be confusing, specially
    // since there can be negative offsets.
    // @method getPixelOrigin(): Point
    // Returns the projected pixel coordinates of the top left point of
    // the map layer (useful in custom layer and overlay implementations).
    getPixelOrigin: function () {
      this._checkIfLoaded();

      return this._pixelOrigin;
    },
    // @method getPixelWorldBounds(zoom?: Number): Bounds
    // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
    // If `zoom` is omitted, the map's current zoom level is used.
    getPixelWorldBounds: function (zoom) {
      return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
    },
    // @section Other Methods
    // @method getPane(pane: String|HTMLElement): HTMLElement
    // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
    getPane: function (pane) {
      return typeof pane === 'string' ? this._panes[pane] : pane;
    },
    // @method getPanes(): Object
    // Returns a plain object containing the names of all [panes](#map-pane) as keys and
    // the panes as values.
    getPanes: function () {
      return this._panes;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the map.
    getContainer: function () {
      return this._container;
    },
    // @section Conversion Methods
    // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
    // Returns the scale factor to be applied to a map transition from zoom level
    // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
    getZoomScale: function (toZoom, fromZoom) {
      // TODO replace with universal implementation after refactoring projections
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      return crs.scale(toZoom) / crs.scale(fromZoom);
    },
    // @method getScaleZoom(scale: Number, fromZoom: Number): Number
    // Returns the zoom level that the map would end up at, if it is at `fromZoom`
    // level and everything is scaled by a factor of `scale`. Inverse of
    // [`getZoomScale`](#map-getZoomScale).
    getScaleZoom: function (scale, fromZoom) {
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      var zoom = crs.zoom(scale * crs.scale(fromZoom));
      return isNaN(zoom) ? Infinity : zoom;
    },
    // @method project(latlng: LatLng, zoom: Number): Point
    // Projects a geographical coordinate `LatLng` according to the projection
    // of the map's CRS, then scales it according to `zoom` and the CRS's
    // `Transformation`. The result is pixel coordinate relative to
    // the CRS origin.
    project: function (latlng, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
    },
    // @method unproject(point: Point, zoom: Number): LatLng
    // Inverse of [`project`](#map-project).
    unproject: function (point, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.pointToLatLng(toPoint(point), zoom);
    },
    // @method layerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding geographical coordinate (for the current zoom level).
    layerPointToLatLng: function (point) {
      var projectedPoint = toPoint(point).add(this.getPixelOrigin());
      return this.unproject(projectedPoint);
    },
    // @method latLngToLayerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the [origin pixel](#map-getpixelorigin).
    latLngToLayerPoint: function (latlng) {
      var projectedPoint = this.project(toLatLng(latlng))._round();

      return projectedPoint._subtract(this.getPixelOrigin());
    },
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
    // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
    // CRS's bounds.
    // By default this means longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees.
    wrapLatLng: function (latlng) {
      return this.options.crs.wrapLatLng(toLatLng(latlng));
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring that
    // its center is within the CRS's bounds.
    // By default this means the center longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees, and the majority of the bounds
    // overlaps the CRS's bounds.
    wrapLatLngBounds: function (latlng) {
      return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates according to
    // the map's CRS. By default this measures distance in meters.
    distance: function (latlng1, latlng2) {
      return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
    },
    // @method containerPointToLayerPoint(point: Point): Point
    // Given a pixel coordinate relative to the map container, returns the corresponding
    // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
    containerPointToLayerPoint: function (point) {
      // (Point)
      return toPoint(point).subtract(this._getMapPanePos());
    },
    // @method layerPointToContainerPoint(point: Point): Point
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding pixel coordinate relative to the map container.
    layerPointToContainerPoint: function (point) {
      // (Point)
      return toPoint(point).add(this._getMapPanePos());
    },
    // @method containerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the map container, returns
    // the corresponding geographical coordinate (for the current zoom level).
    containerPointToLatLng: function (point) {
      var layerPoint = this.containerPointToLayerPoint(toPoint(point));
      return this.layerPointToLatLng(layerPoint);
    },
    // @method latLngToContainerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the map container.
    latLngToContainerPoint: function (latlng) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
    },
    // @method mouseEventToContainerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to the
    // map container where the event took place.
    mouseEventToContainerPoint: function (e) {
      return getMousePosition(e, this._container);
    },
    // @method mouseEventToLayerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to
    // the [origin pixel](#map-getpixelorigin) where the event took place.
    mouseEventToLayerPoint: function (e) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    // @method mouseEventToLatLng(ev: MouseEvent): LatLng
    // Given a MouseEvent object, returns geographical coordinate where the
    // event took place.
    mouseEventToLatLng: function (e) {
      // (MouseEvent)
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    // map initialization methods
    _initContainer: function (id) {
      var container = this._container = get(id);

      if (!container) {
        throw new Error('Map container not found.');
      } else if (container._leaflet_id) {
        throw new Error('Map container is already initialized.');
      }

      on(container, 'scroll', this._onScroll, this);
      this._containerId = stamp(container);
    },
    _initLayout: function () {
      var container = this._container;
      this._fadeAnimated = this.options.fadeAnimation && any3d;
      addClass(container, 'leaflet-container' + (touch ? ' leaflet-touch' : '') + (retina ? ' leaflet-retina' : '') + (ielt9 ? ' leaflet-oldie' : '') + (safari ? ' leaflet-safari' : '') + (this._fadeAnimated ? ' leaflet-fade-anim' : ''));
      var position = getStyle(container, 'position');

      if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        container.style.position = 'relative';
      }

      this._initPanes();

      if (this._initControlPos) {
        this._initControlPos();
      }
    },
    _initPanes: function () {
      var panes = this._panes = {};
      this._paneRenderers = {}; // @section
      //
      // Panes are DOM elements used to control the ordering of layers on the map. You
      // can access panes with [`map.getPane`](#map-getpane) or
      // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
      // [`map.createPane`](#map-createpane) method.
      //
      // Every map has the following default panes that differ only in zIndex.
      //
      // @pane mapPane: HTMLElement = 'auto'
      // Pane that contains all other map panes

      this._mapPane = this.createPane('mapPane', this._container);
      setPosition(this._mapPane, new Point(0, 0)); // @pane tilePane: HTMLElement = 200
      // Pane for `GridLayer`s and `TileLayer`s

      this.createPane('tilePane'); // @pane overlayPane: HTMLElement = 400
      // Pane for overlay shadows (e.g. `Marker` shadows)

      this.createPane('shadowPane'); // @pane shadowPane: HTMLElement = 500
      // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s

      this.createPane('overlayPane'); // @pane markerPane: HTMLElement = 600
      // Pane for `Icon`s of `Marker`s

      this.createPane('markerPane'); // @pane tooltipPane: HTMLElement = 650
      // Pane for `Tooltip`s.

      this.createPane('tooltipPane'); // @pane popupPane: HTMLElement = 700
      // Pane for `Popup`s.

      this.createPane('popupPane');

      if (!this.options.markerZoomAnimation) {
        addClass(panes.markerPane, 'leaflet-zoom-hide');
        addClass(panes.shadowPane, 'leaflet-zoom-hide');
      }
    },
    // private methods that modify map state
    // @section Map state change events
    _resetView: function (center, zoom) {
      setPosition(this._mapPane, new Point(0, 0));
      var loading = !this._loaded;
      this._loaded = true;
      zoom = this._limitZoom(zoom);
      this.fire('viewprereset');
      var zoomChanged = this._zoom !== zoom;

      this._moveStart(zoomChanged, false)._move(center, zoom)._moveEnd(zoomChanged); // @event viewreset: Event
      // Fired when the map needs to redraw its content (this usually happens
      // on map zoom or load). Very useful for creating custom overlays.


      this.fire('viewreset'); // @event load: Event
      // Fired when the map is initialized (when its center and zoom are set
      // for the first time).

      if (loading) {
        this.fire('load');
      }
    },
    _moveStart: function (zoomChanged, noMoveStart) {
      // @event zoomstart: Event
      // Fired when the map zoom is about to change (e.g. before zoom animation).
      // @event movestart: Event
      // Fired when the view of the map starts changing (e.g. user starts dragging the map).
      if (zoomChanged) {
        this.fire('zoomstart');
      }

      if (!noMoveStart) {
        this.fire('movestart');
      }

      return this;
    },
    _move: function (center, zoom, data) {
      if (zoom === undefined) {
        zoom = this._zoom;
      }

      var zoomChanged = this._zoom !== zoom;
      this._zoom = zoom;
      this._lastCenter = center;
      this._pixelOrigin = this._getNewPixelOrigin(center); // @event zoom: Event
      // Fired repeatedly during any change in zoom level, including zoom
      // and fly animations.

      if (zoomChanged || data && data.pinch) {
        // Always fire 'zoom' if pinching because #3530
        this.fire('zoom', data);
      } // @event move: Event
      // Fired repeatedly during any movement of the map, including pan and
      // fly animations.


      return this.fire('move', data);
    },
    _moveEnd: function (zoomChanged) {
      // @event zoomend: Event
      // Fired when the map has changed, after any animations.
      if (zoomChanged) {
        this.fire('zoomend');
      } // @event moveend: Event
      // Fired when the center of the map stops changing (e.g. user stopped
      // dragging the map).


      return this.fire('moveend');
    },
    _stop: function () {
      cancelAnimFrame(this._flyToFrame);

      if (this._panAnim) {
        this._panAnim.stop();
      }

      return this;
    },
    _rawPanBy: function (offset) {
      setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function () {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function () {
      if (!this._enforcingBounds) {
        this.panInsideBounds(this.options.maxBounds);
      }
    },
    _checkIfLoaded: function () {
      if (!this._loaded) {
        throw new Error('Set map center and zoom first.');
      }
    },
    // DOM event handling
    // @section Interaction events
    _initEvents: function (remove$$1) {
      this._targets = {};
      this._targets[stamp(this._container)] = this;
      var onOff = remove$$1 ? off : on; // @event click: MouseEvent
      // Fired when the user clicks (or taps) the map.
      // @event dblclick: MouseEvent
      // Fired when the user double-clicks (or double-taps) the map.
      // @event mousedown: MouseEvent
      // Fired when the user pushes the mouse button on the map.
      // @event mouseup: MouseEvent
      // Fired when the user releases the mouse button on the map.
      // @event mouseover: MouseEvent
      // Fired when the mouse enters the map.
      // @event mouseout: MouseEvent
      // Fired when the mouse leaves the map.
      // @event mousemove: MouseEvent
      // Fired while the mouse moves over the map.
      // @event contextmenu: MouseEvent
      // Fired when the user pushes the right mouse button on the map, prevents
      // default browser context menu from showing if there are listeners on
      // this event. Also fired on mobile when the user holds a single touch
      // for a second (also called long press).
      // @event keypress: KeyboardEvent
      // Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
      // @event keydown: KeyboardEvent
      // Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
      // the `keydown` event is fired for keys that produce a character value and for keys
      // that do not produce a character value.
      // @event keyup: KeyboardEvent
      // Fired when the user releases a key from the keyboard while the map is focused.

      onOff(this._container, 'click dblclick mousedown mouseup ' + 'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);

      if (this.options.trackResize) {
        onOff(window, 'resize', this._onResize, this);
      }

      if (any3d && this.options.transform3DLimit) {
        (remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      }
    },
    _onResize: function () {
      cancelAnimFrame(this._resizeRequest);
      this._resizeRequest = requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: true
        });
      }, this);
    },
    _onScroll: function () {
      this._container.scrollTop = 0;
      this._container.scrollLeft = 0;
    },
    _onMoveEnd: function () {
      var pos = this._getMapPanePos();

      if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
        // a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
        this._resetView(this.getCenter(), this.getZoom());
      }
    },
    _findEventTargets: function (e, type) {
      var targets = [],
          target,
          isHover = type === 'mouseout' || type === 'mouseover',
          src = e.target || e.srcElement,
          dragging = false;

      while (src) {
        target = this._targets[stamp(src)];

        if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
          // Prevent firing click after you just dragged an object.
          dragging = true;
          break;
        }

        if (target && target.listens(type, true)) {
          if (isHover && !isExternalTarget(src, e)) {
            break;
          }

          targets.push(target);

          if (isHover) {
            break;
          }
        }

        if (src === this._container) {
          break;
        }

        src = src.parentNode;
      }

      if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
        targets = [this];
      }

      return targets;
    },
    _handleDOMEvent: function (e) {
      if (!this._loaded || skipped(e)) {
        return;
      }

      var type = e.type;

      if (type === 'mousedown' || type === 'keypress' || type === 'keyup' || type === 'keydown') {
        // prevents outline when clicking on keyboard-focusable element
        preventOutline(e.target || e.srcElement);
      }

      this._fireDOMEvent(e, type);
    },
    _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
    _fireDOMEvent: function (e, type, targets) {
      if (e.type === 'click') {
        // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
        // @event preclick: MouseEvent
        // Fired before mouse click on the map (sometimes useful when you
        // want something to happen on click before any existing click
        // handlers start running).
        var synth = extend({}, e);
        synth.type = 'preclick';

        this._fireDOMEvent(synth, synth.type, targets);
      }

      if (e._stopped) {
        return;
      } // Find the layer the event is propagating from and its parents.


      targets = (targets || []).concat(this._findEventTargets(e, type));

      if (!targets.length) {
        return;
      }

      var target = targets[0];

      if (type === 'contextmenu' && target.listens(type, true)) {
        preventDefault(e);
      }

      var data = {
        originalEvent: e
      };

      if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {
        var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
        data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
        data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
        data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
      }

      for (var i = 0; i < targets.length; i++) {
        targets[i].fire(type, data, true);

        if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
          return;
        }
      }
    },
    _draggableMoved: function (obj) {
      obj = obj.dragging && obj.dragging.enabled() ? obj : this;
      return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function () {
      for (var i = 0, len = this._handlers.length; i < len; i++) {
        this._handlers[i].disable();
      }
    },
    // @section Other Methods
    // @method whenReady(fn: Function, context?: Object): this
    // Runs the given function `fn` when the map gets initialized with
    // a view (center and zoom) and at least one layer, or immediately
    // if it's already initialized, optionally passing a function context.
    whenReady: function (callback, context) {
      if (this._loaded) {
        callback.call(context || this, {
          target: this
        });
      } else {
        this.on('load', callback, context);
      }

      return this;
    },
    // private methods for getting map state
    _getMapPanePos: function () {
      return getPosition(this._mapPane) || new Point(0, 0);
    },
    _moved: function () {
      var pos = this._getMapPanePos();

      return pos && !pos.equals([0, 0]);
    },
    _getTopLeftPoint: function (center, zoom) {
      var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
      return pixelOrigin.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function (center, zoom) {
      var viewHalf = this.getSize()._divideBy(2);

      return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function (latlng, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);

      return this.project(latlng, zoom)._subtract(topLeft);
    },
    _latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);

      return toBounds([this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)]);
    },
    // layer point of the current center
    _getCenterLayerPoint: function () {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    // offset of the specified place to the current center in pixels
    _getCenterOffset: function (latlng) {
      return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    // adjust center for view to get inside bounds
    _limitCenter: function (center, zoom, bounds) {
      if (!bounds) {
        return center;
      }

      var centerPoint = this.project(center, zoom),
          viewHalf = this.getSize().divideBy(2),
          viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
          offset = this._getBoundsOffset(viewBounds, bounds, zoom); // If offset is less than a pixel, ignore.
      // This prevents unstable projections from getting into
      // an infinite loop of tiny offsets.


      if (offset.round().equals([0, 0])) {
        return center;
      }

      return this.unproject(centerPoint.add(offset), zoom);
    },
    // adjust offset for view to get inside bounds
    _limitOffset: function (offset, bounds) {
      if (!bounds) {
        return offset;
      }

      var viewBounds = this.getPixelBounds(),
          newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
      return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
    _getBoundsOffset: function (pxBounds, maxBounds, zoom) {
      var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)),
          minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
          maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),
          dx = this._rebound(minOffset.x, -maxOffset.x),
          dy = this._rebound(minOffset.y, -maxOffset.y);

      return new Point(dx, dy);
    },
    _rebound: function (left, right) {
      return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function (zoom) {
      var min = this.getMinZoom(),
          max = this.getMaxZoom(),
          snap = any3d ? this.options.zoomSnap : 1;

      if (snap) {
        zoom = Math.round(zoom / snap) * snap;
      }

      return Math.max(min, Math.min(max, zoom));
    },
    _onPanTransitionStep: function () {
      this.fire('move');
    },
    _onPanTransitionEnd: function () {
      removeClass(this._mapPane, 'leaflet-pan-anim');
      this.fire('moveend');
    },
    _tryAnimatedPan: function (center, options) {
      // difference between the new and current centers in pixels
      var offset = this._getCenterOffset(center)._trunc(); // don't animate too far unless animate: true specified in options


      if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
        return false;
      }

      this.panBy(offset, options);
      return true;
    },
    _createAnimProxy: function () {
      var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');

      this._panes.mapPane.appendChild(proxy);

      this.on('zoomanim', function (e) {
        var prop = TRANSFORM,
            transform = this._proxy.style[prop];
        setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)); // workaround for case when transform is the same and so transitionend event is not fired

        if (transform === this._proxy.style[prop] && this._animatingZoom) {
          this._onZoomTransitionEnd();
        }
      }, this);
      this.on('load moveend', this._animMoveEnd, this);

      this._on('unload', this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function () {
      remove(this._proxy);
      this.off('load moveend', this._animMoveEnd, this);
      delete this._proxy;
    },
    _animMoveEnd: function () {
      var c = this.getCenter(),
          z = this.getZoom();
      setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
    },
    _catchTransitionEnd: function (e) {
      if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
        this._onZoomTransitionEnd();
      }
    },
    _nothingToAnimate: function () {
      return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
    },
    _tryAnimatedZoom: function (center, zoom, options) {
      if (this._animatingZoom) {
        return true;
      }

      options = options || {}; // don't animate if disabled, not supported or zoom difference is too large

      if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
        return false;
      } // offset is the pixel coords of the zoom origin relative to the current center


      var scale = this.getZoomScale(zoom),
          offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale); // don't animate if the zoom origin isn't within one screen from the current center, unless forced


      if (options.animate !== true && !this.getSize().contains(offset)) {
        return false;
      }

      requestAnimFrame(function () {
        this._moveStart(true, false)._animateZoom(center, zoom, true);
      }, this);
      return true;
    },
    _animateZoom: function (center, zoom, startAnim, noUpdate) {
      if (!this._mapPane) {
        return;
      }

      if (startAnim) {
        this._animatingZoom = true; // remember what center/zoom to set after animation

        this._animateToCenter = center;
        this._animateToZoom = zoom;
        addClass(this._mapPane, 'leaflet-zoom-anim');
      } // @section Other Events
      // @event zoomanim: ZoomAnimEvent
      // Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.


      this.fire('zoomanim', {
        center: center,
        zoom: zoom,
        noUpdate: noUpdate
      }); // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693

      setTimeout(bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function () {
      if (!this._animatingZoom) {
        return;
      }

      if (this._mapPane) {
        removeClass(this._mapPane, 'leaflet-zoom-anim');
      }

      this._animatingZoom = false;

      this._move(this._animateToCenter, this._animateToZoom); // This anim frame should prevent an obscure iOS webkit tile loading race condition.


      requestAnimFrame(function () {
        this._moveEnd(true);
      }, this);
    }
  }); // @section
  // @factory L.map(id: String, options?: Map options)
  // Instantiates a map object given the DOM ID of a `<div>` element
  // and optionally an object literal with `Map options`.
  //
  // @alternative
  // @factory L.map(el: HTMLElement, options?: Map options)
  // Instantiates a map object given an instance of a `<div>` HTML element
  // and optionally an object literal with `Map options`.

  function createMap(id, options) {
    return new Map(id, options);
  }
  /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */


  var Control = Class.extend({
    // @section
    // @aka Control options
    options: {
      // @option position: String = 'topright'
      // The position of the control (one of the map corners). Possible values are `'topleft'`,
      // `'topright'`, `'bottomleft'` or `'bottomright'`
      position: 'topright'
    },
    initialize: function (options) {
      setOptions(this, options);
    },

    /* @section
     * Classes extending L.Control will inherit the following methods:
     *
     * @method getPosition: string
     * Returns the position of the control.
     */
    getPosition: function () {
      return this.options.position;
    },
    // @method setPosition(position: string): this
    // Sets the position of the control.
    setPosition: function (position) {
      var map = this._map;

      if (map) {
        map.removeControl(this);
      }

      this.options.position = position;

      if (map) {
        map.addControl(this);
      }

      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTMLElement that contains the control.
    getContainer: function () {
      return this._container;
    },
    // @method addTo(map: Map): this
    // Adds the control to the given map.
    addTo: function (map) {
      this.remove();
      this._map = map;
      var container = this._container = this.onAdd(map),
          pos = this.getPosition(),
          corner = map._controlCorners[pos];
      addClass(container, 'leaflet-control');

      if (pos.indexOf('bottom') !== -1) {
        corner.insertBefore(container, corner.firstChild);
      } else {
        corner.appendChild(container);
      }

      this._map.on('unload', this.remove, this);

      return this;
    },
    // @method remove: this
    // Removes the control from the map it is currently active on.
    remove: function () {
      if (!this._map) {
        return this;
      }

      remove(this._container);

      if (this.onRemove) {
        this.onRemove(this._map);
      }

      this._map.off('unload', this.remove, this);

      this._map = null;
      return this;
    },
    _refocusOnMap: function (e) {
      // if map exists and event is not a keyboard event
      if (this._map && e && e.screenX > 0 && e.screenY > 0) {
        this._map.getContainer().focus();
      }
    }
  });

  var control = function (options) {
    return new Control(options);
  };
  /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */

  /* @namespace Map
   * @section Methods for Layers and Controls
   */


  Map.include({
    // @method addControl(control: Control): this
    // Adds the given control to the map
    addControl: function (control) {
      control.addTo(this);
      return this;
    },
    // @method removeControl(control: Control): this
    // Removes the given control from the map
    removeControl: function (control) {
      control.remove();
      return this;
    },
    _initControlPos: function () {
      var corners = this._controlCorners = {},
          l = 'leaflet-',
          container = this._controlContainer = create$1('div', l + 'control-container', this._container);

      function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = create$1('div', className, container);
      }

      createCorner('top', 'left');
      createCorner('top', 'right');
      createCorner('bottom', 'left');
      createCorner('bottom', 'right');
    },
    _clearControlPos: function () {
      for (var i in this._controlCorners) {
        remove(this._controlCorners[i]);
      }

      remove(this._controlContainer);
      delete this._controlCorners;
      delete this._controlContainer;
    }
  });
  /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */

  var Layers = Control.extend({
    // @section
    // @aka Control.Layers options
    options: {
      // @option collapsed: Boolean = true
      // If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
      collapsed: true,
      position: 'topright',
      // @option autoZIndex: Boolean = true
      // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
      autoZIndex: true,
      // @option hideSingleBase: Boolean = false
      // If `true`, the base layers in the control will be hidden when there is only one.
      hideSingleBase: false,
      // @option sortLayers: Boolean = false
      // Whether to sort the layers. When `false`, layers will keep the order
      // in which they were added to the control.
      sortLayers: false,
      // @option sortFunction: Function = *
      // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
      // that will be used for sorting the layers, when `sortLayers` is `true`.
      // The function receives both the `L.Layer` instances and their names, as in
      // `sortFunction(layerA, layerB, nameA, nameB)`.
      // By default, it sorts layers alphabetically by their name.
      sortFunction: function (layerA, layerB, nameA, nameB) {
        return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
      }
    },
    initialize: function (baseLayers, overlays, options) {
      setOptions(this, options);
      this._layerControlInputs = [];
      this._layers = [];
      this._lastZIndex = 0;
      this._handlingClick = false;

      for (var i in baseLayers) {
        this._addLayer(baseLayers[i], i);
      }

      for (i in overlays) {
        this._addLayer(overlays[i], i, true);
      }
    },
    onAdd: function (map) {
      this._initLayout();

      this._update();

      this._map = map;
      map.on('zoomend', this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on('add remove', this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function (map) {
      Control.prototype.addTo.call(this, map); // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.

      return this._expandIfNotCollapsed();
    },
    onRemove: function () {
      this._map.off('zoomend', this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.off('add remove', this._onLayerChange, this);
      }
    },
    // @method addBaseLayer(layer: Layer, name: String): this
    // Adds a base layer (radio button entry) with the given name to the control.
    addBaseLayer: function (layer, name) {
      this._addLayer(layer, name);

      return this._map ? this._update() : this;
    },
    // @method addOverlay(layer: Layer, name: String): this
    // Adds an overlay (checkbox entry) with the given name to the control.
    addOverlay: function (layer, name) {
      this._addLayer(layer, name, true);

      return this._map ? this._update() : this;
    },
    // @method removeLayer(layer: Layer): this
    // Remove the given layer from the control.
    removeLayer: function (layer) {
      layer.off('add remove', this._onLayerChange, this);

      var obj = this._getLayer(stamp(layer));

      if (obj) {
        this._layers.splice(this._layers.indexOf(obj), 1);
      }

      return this._map ? this._update() : this;
    },
    // @method expand(): this
    // Expand the control container if collapsed.
    expand: function () {
      addClass(this._container, 'leaflet-control-layers-expanded');
      this._section.style.height = null;
      var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);

      if (acceptableHeight < this._section.clientHeight) {
        addClass(this._section, 'leaflet-control-layers-scrollbar');
        this._section.style.height = acceptableHeight + 'px';
      } else {
        removeClass(this._section, 'leaflet-control-layers-scrollbar');
      }

      this._checkDisabledLayers();

      return this;
    },
    // @method collapse(): this
    // Collapse the control container if expanded.
    collapse: function () {
      removeClass(this._container, 'leaflet-control-layers-expanded');
      return this;
    },
    _initLayout: function () {
      var className = 'leaflet-control-layers',
          container = this._container = create$1('div', className),
          collapsed = this.options.collapsed; // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released

      container.setAttribute('aria-haspopup', true);
      disableClickPropagation(container);
      disableScrollPropagation(container);
      var section = this._section = create$1('section', className + '-list');

      if (collapsed) {
        this._map.on('click', this.collapse, this);

        if (!android) {
          on(container, {
            mouseenter: this.expand,
            mouseleave: this.collapse
          }, this);
        }
      }

      var link = this._layersLink = create$1('a', className + '-toggle', container);
      link.href = '#';
      link.title = 'Layers';

      if (touch) {
        on(link, 'click', stop);
        on(link, 'click', this.expand, this);
      } else {
        on(link, 'focus', this.expand, this);
      }

      if (!collapsed) {
        this.expand();
      }

      this._baseLayersList = create$1('div', className + '-base', section);
      this._separator = create$1('div', className + '-separator', section);
      this._overlaysList = create$1('div', className + '-overlays', section);
      container.appendChild(section);
    },
    _getLayer: function (id) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && stamp(this._layers[i].layer) === id) {
          return this._layers[i];
        }
      }
    },
    _addLayer: function (layer, name, overlay) {
      if (this._map) {
        layer.on('add remove', this._onLayerChange, this);
      }

      this._layers.push({
        layer: layer,
        name: name,
        overlay: overlay
      });

      if (this.options.sortLayers) {
        this._layers.sort(bind(function (a, b) {
          return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
        }, this));
      }

      if (this.options.autoZIndex && layer.setZIndex) {
        this._lastZIndex++;
        layer.setZIndex(this._lastZIndex);
      }

      this._expandIfNotCollapsed();
    },
    _update: function () {
      if (!this._container) {
        return this;
      }

      empty(this._baseLayersList);
      empty(this._overlaysList);
      this._layerControlInputs = [];
      var baseLayersPresent,
          overlaysPresent,
          i,
          obj,
          baseLayersCount = 0;

      for (i = 0; i < this._layers.length; i++) {
        obj = this._layers[i];

        this._addItem(obj);

        overlaysPresent = overlaysPresent || obj.overlay;
        baseLayersPresent = baseLayersPresent || !obj.overlay;
        baseLayersCount += !obj.overlay ? 1 : 0;
      } // Hide base layers section if there's only one layer.


      if (this.options.hideSingleBase) {
        baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
        this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
      }

      this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
      return this;
    },
    _onLayerChange: function (e) {
      if (!this._handlingClick) {
        this._update();
      }

      var obj = this._getLayer(stamp(e.target)); // @namespace Map
      // @section Layer events
      // @event baselayerchange: LayersControlEvent
      // Fired when the base layer is changed through the [layers control](#control-layers).
      // @event overlayadd: LayersControlEvent
      // Fired when an overlay is selected through the [layers control](#control-layers).
      // @event overlayremove: LayersControlEvent
      // Fired when an overlay is deselected through the [layers control](#control-layers).
      // @namespace Control.Layers


      var type = obj.overlay ? e.type === 'add' ? 'overlayadd' : 'overlayremove' : e.type === 'add' ? 'baselayerchange' : null;

      if (type) {
        this._map.fire(type, obj);
      }
    },
    // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
    _createRadioElement: function (name, checked) {
      var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : '') + '/>';
      var radioFragment = document.createElement('div');
      radioFragment.innerHTML = radioHtml;
      return radioFragment.firstChild;
    },
    _addItem: function (obj) {
      var label = document.createElement('label'),
          checked = this._map.hasLayer(obj.layer),
          input;

      if (obj.overlay) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'leaflet-control-layers-selector';
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);
      }

      this._layerControlInputs.push(input);

      input.layerId = stamp(obj.layer);
      on(input, 'click', this._onInputClick, this);
      var name = document.createElement('span');
      name.innerHTML = ' ' + obj.name; // Helps from preventing layer control flicker when checkboxes are disabled
      // https://github.com/Leaflet/Leaflet/issues/2771

      var holder = document.createElement('div');
      label.appendChild(holder);
      holder.appendChild(input);
      holder.appendChild(name);
      var container = obj.overlay ? this._overlaysList : this._baseLayersList;
      container.appendChild(label);

      this._checkDisabledLayers();

      return label;
    },
    _onInputClick: function () {
      var inputs = this._layerControlInputs,
          input,
          layer;
      var addedLayers = [],
          removedLayers = [];
      this._handlingClick = true;

      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;

        if (input.checked) {
          addedLayers.push(layer);
        } else if (!input.checked) {
          removedLayers.push(layer);
        }
      } // Bugfix issue 2318: Should remove all old layers before readding new ones


      for (i = 0; i < removedLayers.length; i++) {
        if (this._map.hasLayer(removedLayers[i])) {
          this._map.removeLayer(removedLayers[i]);
        }
      }

      for (i = 0; i < addedLayers.length; i++) {
        if (!this._map.hasLayer(addedLayers[i])) {
          this._map.addLayer(addedLayers[i]);
        }
      }

      this._handlingClick = false;

      this._refocusOnMap();
    },
    _checkDisabledLayers: function () {
      var inputs = this._layerControlInputs,
          input,
          layer,
          zoom = this._map.getZoom();

      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function () {
      if (this._map && !this.options.collapsed) {
        this.expand();
      }

      return this;
    },
    _expand: function () {
      // Backward compatibility, remove me in 1.1.
      return this.expand();
    },
    _collapse: function () {
      // Backward compatibility, remove me in 1.1.
      return this.collapse();
    }
  }); // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
  // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.

  var layers = function (baseLayers, overlays, options) {
    return new Layers(baseLayers, overlays, options);
  };
  /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */


  var Zoom = Control.extend({
    // @section
    // @aka Control.Zoom options
    options: {
      position: 'topleft',
      // @option zoomInText: String = '+'
      // The text set on the 'zoom in' button.
      zoomInText: '+',
      // @option zoomInTitle: String = 'Zoom in'
      // The title set on the 'zoom in' button.
      zoomInTitle: 'Zoom in',
      // @option zoomOutText: String = '&#x2212;'
      // The text set on the 'zoom out' button.
      zoomOutText: '&#x2212;',
      // @option zoomOutTitle: String = 'Zoom out'
      // The title set on the 'zoom out' button.
      zoomOutTitle: 'Zoom out'
    },
    onAdd: function (map) {
      var zoomName = 'leaflet-control-zoom',
          container = create$1('div', zoomName + ' leaflet-bar'),
          options = this.options;
      this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + '-in', container, this._zoomIn);
      this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + '-out', container, this._zoomOut);

      this._updateDisabled();

      map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      return container;
    },
    onRemove: function (map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },
    disable: function () {
      this._disabled = true;

      this._updateDisabled();

      return this;
    },
    enable: function () {
      this._disabled = false;

      this._updateDisabled();

      return this;
    },
    _zoomIn: function (e) {
      if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
        this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _zoomOut: function (e) {
      if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
        this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _createButton: function (html, title, className, container, fn) {
      var link = create$1('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;
      /*
       * Will force screen readers like VoiceOver to read this as "Zoom in - button"
       */

      link.setAttribute('role', 'button');
      link.setAttribute('aria-label', title);
      disableClickPropagation(link);
      on(link, 'click', stop);
      on(link, 'click', fn, this);
      on(link, 'click', this._refocusOnMap, this);
      return link;
    },
    _updateDisabled: function () {
      var map = this._map,
          className = 'leaflet-disabled';
      removeClass(this._zoomInButton, className);
      removeClass(this._zoomOutButton, className);

      if (this._disabled || map._zoom === map.getMinZoom()) {
        addClass(this._zoomOutButton, className);
      }

      if (this._disabled || map._zoom === map.getMaxZoom()) {
        addClass(this._zoomInButton, className);
      }
    }
  }); // @namespace Map
  // @section Control options
  // @option zoomControl: Boolean = true
  // Whether a [zoom control](#control-zoom) is added to the map by default.

  Map.mergeOptions({
    zoomControl: true
  });
  Map.addInitHook(function () {
    if (this.options.zoomControl) {
      // @section Controls
      // @property zoomControl: Control.Zoom
      // The default zoom control (only available if the
      // [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
      this.zoomControl = new Zoom();
      this.addControl(this.zoomControl);
    }
  }); // @namespace Control.Zoom
  // @factory L.control.zoom(options: Control.Zoom options)
  // Creates a zoom control

  var zoom = function (options) {
    return new Zoom(options);
  };
  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */


  var Scale = Control.extend({
    // @section
    // @aka Control.Scale options
    options: {
      position: 'bottomleft',
      // @option maxWidth: Number = 100
      // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
      maxWidth: 100,
      // @option metric: Boolean = True
      // Whether to show the metric scale line (m/km).
      metric: true,
      // @option imperial: Boolean = True
      // Whether to show the imperial scale line (mi/ft).
      imperial: true // @option updateWhenIdle: Boolean = false
      // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).

    },
    onAdd: function (map) {
      var className = 'leaflet-control-scale',
          container = create$1('div', className),
          options = this.options;

      this._addScales(options, className + '-line', container);

      map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      map.whenReady(this._update, this);
      return container;
    },
    onRemove: function (map) {
      map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },
    _addScales: function (options, className, container) {
      if (options.metric) {
        this._mScale = create$1('div', className, container);
      }

      if (options.imperial) {
        this._iScale = create$1('div', className, container);
      }
    },
    _update: function () {
      var map = this._map,
          y = map.getSize().y / 2;
      var maxMeters = map.distance(map.containerPointToLatLng([0, y]), map.containerPointToLatLng([this.options.maxWidth, y]));

      this._updateScales(maxMeters);
    },
    _updateScales: function (maxMeters) {
      if (this.options.metric && maxMeters) {
        this._updateMetric(maxMeters);
      }

      if (this.options.imperial && maxMeters) {
        this._updateImperial(maxMeters);
      }
    },
    _updateMetric: function (maxMeters) {
      var meters = this._getRoundNum(maxMeters),
          label = meters < 1000 ? meters + ' m' : meters / 1000 + ' km';

      this._updateScale(this._mScale, label, meters / maxMeters);
    },
    _updateImperial: function (maxMeters) {
      var maxFeet = maxMeters * 3.2808399,
          maxMiles,
          miles,
          feet;

      if (maxFeet > 5280) {
        maxMiles = maxFeet / 5280;
        miles = this._getRoundNum(maxMiles);

        this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);
      } else {
        feet = this._getRoundNum(maxFeet);

        this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
      }
    },
    _updateScale: function (scale, text, ratio) {
      scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
      scale.innerHTML = text;
    },
    _getRoundNum: function (num) {
      var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
          d = num / pow10;
      d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
      return pow10 * d;
    }
  }); // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.

  var scale = function (options) {
    return new Scale(options);
  };
  /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */


  var Attribution = Control.extend({
    // @section
    // @aka Control.Attribution options
    options: {
      position: 'bottomright',
      // @option prefix: String = 'Leaflet'
      // The HTML text shown before the attributions. Pass `false` to disable.
      prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function (options) {
      setOptions(this, options);
      this._attributions = {};
    },
    onAdd: function (map) {
      map.attributionControl = this;
      this._container = create$1('div', 'leaflet-control-attribution');
      disableClickPropagation(this._container); // TODO ugly, refactor

      for (var i in map._layers) {
        if (map._layers[i].getAttribution) {
          this.addAttribution(map._layers[i].getAttribution());
        }
      }

      this._update();

      return this._container;
    },
    // @method setPrefix(prefix: String): this
    // Sets the text before the attributions.
    setPrefix: function (prefix) {
      this.options.prefix = prefix;

      this._update();

      return this;
    },
    // @method addAttribution(text: String): this
    // Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
    addAttribution: function (text) {
      if (!text) {
        return this;
      }

      if (!this._attributions[text]) {
        this._attributions[text] = 0;
      }

      this._attributions[text]++;

      this._update();

      return this;
    },
    // @method removeAttribution(text: String): this
    // Removes an attribution text.
    removeAttribution: function (text) {
      if (!text) {
        return this;
      }

      if (this._attributions[text]) {
        this._attributions[text]--;

        this._update();
      }

      return this;
    },
    _update: function () {
      if (!this._map) {
        return;
      }

      var attribs = [];

      for (var i in this._attributions) {
        if (this._attributions[i]) {
          attribs.push(i);
        }
      }

      var prefixAndAttribs = [];

      if (this.options.prefix) {
        prefixAndAttribs.push(this.options.prefix);
      }

      if (attribs.length) {
        prefixAndAttribs.push(attribs.join(', '));
      }

      this._container.innerHTML = prefixAndAttribs.join(' | ');
    }
  }); // @namespace Map
  // @section Control options
  // @option attributionControl: Boolean = true
  // Whether a [attribution control](#control-attribution) is added to the map by default.

  Map.mergeOptions({
    attributionControl: true
  });
  Map.addInitHook(function () {
    if (this.options.attributionControl) {
      new Attribution().addTo(this);
    }
  }); // @namespace Control.Attribution
  // @factory L.control.attribution(options: Control.Attribution options)
  // Creates an attribution control.

  var attribution = function (options) {
    return new Attribution(options);
  };

  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;
  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;
  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */
  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
    initialize: function (map) {
      this._map = map;
    },
    // @method enable(): this
    // Enables the handler
    enable: function () {
      if (this._enabled) {
        return this;
      }

      this._enabled = true;
      this.addHooks();
      return this;
    },
    // @method disable(): this
    // Disables the handler
    disable: function () {
      if (!this._enabled) {
        return this;
      }

      this._enabled = false;
      this.removeHooks();
      return this;
    },
    // @method enabled(): Boolean
    // Returns `true` if the handler is enabled
    enabled: function () {
      return !!this._enabled;
    } // @section Extension methods
    // Classes inheriting from `Handler` must implement the two following methods:
    // @method addHooks()
    // Called when the handler is enabled, should add event hooks.
    // @method removeHooks()
    // Called when the handler is disabled, should remove the event hooks added previously.

  }); // @section There is static function which can be called without instantiating L.Handler:
  // @function addTo(map: Map, name: String): this
  // Adds a new Handler to the given map with the given name.

  Handler.addTo = function (map, name) {
    map.addHandler(name, this);
    return this;
  };

  var Mixin = {
    Events: Events
  };
  /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */

  var START = touch ? 'touchstart mousedown' : 'mousedown';
  var END = {
    mousedown: 'mouseup',
    touchstart: 'touchend',
    pointerdown: 'touchend',
    MSPointerDown: 'touchend'
  };
  var MOVE = {
    mousedown: 'mousemove',
    touchstart: 'touchmove',
    pointerdown: 'touchmove',
    MSPointerDown: 'touchmove'
  };
  var Draggable = Evented.extend({
    options: {
      // @section
      // @aka Draggable options
      // @option clickTolerance: Number = 3
      // The max number of pixels a user can shift the mouse pointer during a click
      // for it to be considered a valid click (as opposed to a mouse drag).
      clickTolerance: 3
    },
    // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
    // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
    initialize: function (element, dragStartTarget, preventOutline$$1, options) {
      setOptions(this, options);
      this._element = element;
      this._dragStartTarget = dragStartTarget || element;
      this._preventOutline = preventOutline$$1;
    },
    // @method enable()
    // Enables the dragging ability
    enable: function () {
      if (this._enabled) {
        return;
      }

      on(this._dragStartTarget, START, this._onDown, this);
      this._enabled = true;
    },
    // @method disable()
    // Disables the dragging ability
    disable: function () {
      if (!this._enabled) {
        return;
      } // If we're currently dragging this draggable,
      // disabling it counts as first ending the drag.


      if (Draggable._dragging === this) {
        this.finishDrag();
      }

      off(this._dragStartTarget, START, this._onDown, this);
      this._enabled = false;
      this._moved = false;
    },
    _onDown: function (e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      this._moved = false;

      if (hasClass(this._element, 'leaflet-zoom-anim')) {
        return;
      }

      if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
        return;
      }

      Draggable._dragging = this; // Prevent dragging multiple objects at once.

      if (this._preventOutline) {
        preventOutline(this._element);
      }

      disableImageDrag();
      disableTextSelection();

      if (this._moving) {
        return;
      } // @event down: Event
      // Fired when a drag is about to start.


      this.fire('down');
      var first = e.touches ? e.touches[0] : e,
          sizedParent = getSizedParentNode(this._element);
      this._startPoint = new Point(first.clientX, first.clientY); // Cache the scale, so that we can continuously compensate for it during drag (_onMove).

      this._parentScale = getScale(sizedParent);
      on(document, MOVE[e.type], this._onMove, this);
      on(document, END[e.type], this._onUp, this);
    },
    _onMove: function (e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      if (e.touches && e.touches.length > 1) {
        this._moved = true;
        return;
      }

      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
          offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

      if (!offset.x && !offset.y) {
        return;
      }

      if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
        return;
      } // We assume that the parent container's position, border and scale do not change for the duration of the drag.
      // Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
      // and we can use the cached value for the scale.


      offset.x /= this._parentScale.x;
      offset.y /= this._parentScale.y;
      preventDefault(e);

      if (!this._moved) {
        // @event dragstart: Event
        // Fired when a drag starts
        this.fire('dragstart');
        this._moved = true;
        this._startPos = getPosition(this._element).subtract(offset);
        addClass(document.body, 'leaflet-dragging');
        this._lastTarget = e.target || e.srcElement; // IE and Edge do not give the <use> element, so fetch it
        // if necessary

        if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
          this._lastTarget = this._lastTarget.correspondingUseElement;
        }

        addClass(this._lastTarget, 'leaflet-drag-target');
      }

      this._newPos = this._startPos.add(offset);
      this._moving = true;
      cancelAnimFrame(this._animRequest);
      this._lastEvent = e;
      this._animRequest = requestAnimFrame(this._updatePosition, this, true);
    },
    _updatePosition: function () {
      var e = {
        originalEvent: this._lastEvent
      }; // @event predrag: Event
      // Fired continuously during dragging *before* each corresponding
      // update of the element's position.

      this.fire('predrag', e);
      setPosition(this._element, this._newPos); // @event drag: Event
      // Fired continuously during dragging.

      this.fire('drag', e);
    },
    _onUp: function (e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      this.finishDrag();
    },
    finishDrag: function () {
      removeClass(document.body, 'leaflet-dragging');

      if (this._lastTarget) {
        removeClass(this._lastTarget, 'leaflet-drag-target');
        this._lastTarget = null;
      }

      for (var i in MOVE) {
        off(document, MOVE[i], this._onMove, this);
        off(document, END[i], this._onUp, this);
      }

      enableImageDrag();
      enableTextSelection();

      if (this._moved && this._moving) {
        // ensure drag is not fired after dragend
        cancelAnimFrame(this._animRequest); // @event dragend: DragEndEvent
        // Fired when the drag ends.

        this.fire('dragend', {
          distance: this._newPos.distanceTo(this._startPos)
        });
      }

      this._moving = false;
      Draggable._dragging = false;
    }
  });
  /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */
  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
  // Improves rendering performance dramatically by lessening the number of points to draw.
  // @function simplify(points: Point[], tolerance: Number): Point[]
  // Dramatically reduces the number of points in a polyline while retaining
  // its shape and returns a new array of simplified points, using the
  // [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
  // Used for a huge performance boost when processing/displaying Leaflet polylines for
  // each zoom level and also reducing visual noise. tolerance affects the amount of
  // simplification (lesser value means higher quality but slower and with more points).
  // Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).

  function simplify(points, tolerance) {
    if (!tolerance || !points.length) {
      return points.slice();
    }

    var sqTolerance = tolerance * tolerance; // stage 1: vertex reduction

    points = _reducePoints(points, sqTolerance); // stage 2: Douglas-Peucker simplification

    points = _simplifyDP(points, sqTolerance);
    return points;
  } // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
  // Returns the distance between point `p` and segment `p1` to `p2`.


  function pointToSegmentDistance(p, p1, p2) {
    return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
  } // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
  // Returns the closest point from a point `p` on a segment `p1` to `p2`.


  function closestPointOnSegment(p, p1, p2) {
    return _sqClosestPointOnSegment(p, p1, p2);
  } // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm


  function _simplifyDP(points, sqTolerance) {
    var len = points.length,
        ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
        markers = new ArrayConstructor(len);
    markers[0] = markers[len - 1] = 1;

    _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

    var i,
        newPoints = [];

    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i]);
      }
    }

    return newPoints;
  }

  function _simplifyDPStep(points, markers, sqTolerance, first, last) {
    var maxSqDist = 0,
        index,
        i,
        sqDist;

    for (i = first + 1; i <= last - 1; i++) {
      sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

      if (sqDist > maxSqDist) {
        index = i;
        maxSqDist = sqDist;
      }
    }

    if (maxSqDist > sqTolerance) {
      markers[index] = 1;

      _simplifyDPStep(points, markers, sqTolerance, first, index);

      _simplifyDPStep(points, markers, sqTolerance, index, last);
    }
  } // reduce points that are too close to each other to a single point


  function _reducePoints(points, sqTolerance) {
    var reducedPoints = [points[0]];

    for (var i = 1, prev = 0, len = points.length; i < len; i++) {
      if (_sqDist(points[i], points[prev]) > sqTolerance) {
        reducedPoints.push(points[i]);
        prev = i;
      }
    }

    if (prev < len - 1) {
      reducedPoints.push(points[len - 1]);
    }

    return reducedPoints;
  }

  var _lastCode; // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
  // Clips the segment a to b by rectangular bounds with the
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
  // (modifying the segment points directly!). Used by Leaflet to only show polyline
  // points that are on the screen or near, increasing performance.


  function clipSegment(a, b, bounds, useLastCode, round) {
    var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
        codeB = _getBitCode(b, bounds),
        codeOut,
        p,
        newCode; // save 2nd code to avoid calculating it on the next segment


    _lastCode = codeB;

    while (true) {
      // if a,b is inside the clip window (trivial accept)
      if (!(codeA | codeB)) {
        return [a, b];
      } // if a,b is outside the clip window (trivial reject)


      if (codeA & codeB) {
        return false;
      } // other cases


      codeOut = codeA || codeB;
      p = _getEdgeIntersection(a, b, codeOut, bounds, round);
      newCode = _getBitCode(p, bounds);

      if (codeOut === codeA) {
        a = p;
        codeA = newCode;
      } else {
        b = p;
        codeB = newCode;
      }
    }
  }

  function _getEdgeIntersection(a, b, code, bounds, round) {
    var dx = b.x - a.x,
        dy = b.y - a.y,
        min = bounds.min,
        max = bounds.max,
        x,
        y;

    if (code & 8) {
      // top
      x = a.x + dx * (max.y - a.y) / dy;
      y = max.y;
    } else if (code & 4) {
      // bottom
      x = a.x + dx * (min.y - a.y) / dy;
      y = min.y;
    } else if (code & 2) {
      // right
      x = max.x;
      y = a.y + dy * (max.x - a.x) / dx;
    } else if (code & 1) {
      // left
      x = min.x;
      y = a.y + dy * (min.x - a.x) / dx;
    }

    return new Point(x, y, round);
  }

  function _getBitCode(p, bounds) {
    var code = 0;

    if (p.x < bounds.min.x) {
      // left
      code |= 1;
    } else if (p.x > bounds.max.x) {
      // right
      code |= 2;
    }

    if (p.y < bounds.min.y) {
      // bottom
      code |= 4;
    } else if (p.y > bounds.max.y) {
      // top
      code |= 8;
    }

    return code;
  } // square distance (to avoid unnecessary Math.sqrt calls)


  function _sqDist(p1, p2) {
    var dx = p2.x - p1.x,
        dy = p2.y - p1.y;
    return dx * dx + dy * dy;
  } // return closest point on segment or distance to that point


  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
    var x = p1.x,
        y = p1.y,
        dx = p2.x - x,
        dy = p2.y - y,
        dot = dx * dx + dy * dy,
        t;

    if (dot > 0) {
      t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }

    dx = p.x - x;
    dy = p.y - y;
    return sqDist ? dx * dx + dy * dy : new Point(x, y);
  } // @function isFlat(latlngs: LatLng[]): Boolean
  // Returns true if `latlngs` is a flat array, false is nested.


  function isFlat(latlngs) {
    return !isArray(latlngs[0]) || typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined';
  }

  function _flat(latlngs) {
    console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
    return isFlat(latlngs);
  }

  var LineUtil = {
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat
  };
  /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */

  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */

  function clipPolygon(points, bounds, round) {
    var clippedPoints,
        edges = [1, 4, 2, 8],
        i,
        j,
        k,
        a,
        b,
        len,
        edge,
        p;

    for (i = 0, len = points.length; i < len; i++) {
      points[i]._code = _getBitCode(points[i], bounds);
    } // for each edge (left, bottom, right, top)


    for (k = 0; k < 4; k++) {
      edge = edges[k];
      clippedPoints = [];

      for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        a = points[i];
        b = points[j]; // if a is inside the clip window

        if (!(a._code & edge)) {
          // if b is outside the clip window (a->b goes out of screen)
          if (b._code & edge) {
            p = _getEdgeIntersection(b, a, edge, bounds, round);
            p._code = _getBitCode(p, bounds);
            clippedPoints.push(p);
          }

          clippedPoints.push(a); // else if b is inside the clip window (a->b enters the screen)
        } else if (!(b._code & edge)) {
          p = _getEdgeIntersection(b, a, edge, bounds, round);
          p._code = _getBitCode(p, bounds);
          clippedPoints.push(p);
        }
      }

      points = clippedPoints;
    }

    return points;
  }

  var PolyUtil = {
    clipPolygon: clipPolygon
  };
  /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */

  var LonLat = {
    project: function (latlng) {
      return new Point(latlng.lng, latlng.lat);
    },
    unproject: function (point) {
      return new LatLng(point.y, point.x);
    },
    bounds: new Bounds([-180, -90], [180, 90])
  };
  /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */

  var Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function (latlng) {
      var d = Math.PI / 180,
          r = this.R,
          y = latlng.lat * d,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          con = e * Math.sin(y);
      var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
      y = -r * Math.log(Math.max(ts, 1E-10));
      return new Point(latlng.lng * d * r, y);
    },
    unproject: function (point) {
      var d = 180 / Math.PI,
          r = this.R,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          ts = Math.exp(-point.y / r),
          phi = Math.PI / 2 - 2 * Math.atan(ts);

      for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
        con = e * Math.sin(phi);
        con = Math.pow((1 - con) / (1 + con), e / 2);
        dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
        phi += dphi;
      }

      return new LatLng(phi * d, point.x * d / r);
    }
  };
  /*
   * @class Projection
    * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).
    * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid
    * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.
    * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.
    * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
    */

  var index = {
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  };
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */

  var EPSG3395 = extend({}, Earth, {
    code: 'EPSG:3395',
    projection: Mercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * Mercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */

  var EPSG4326 = extend({}, Earth, {
    code: 'EPSG:4326',
    projection: LonLat,
    transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
  });
  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
    projection: LonLat,
    transformation: toTransformation(1, 0, -1, 0),
    scale: function (zoom) {
      return Math.pow(2, zoom);
    },
    zoom: function (scale) {
      return Math.log(scale) / Math.LN2;
    },
    distance: function (latlng1, latlng2) {
      var dx = latlng2.lng - latlng1.lng,
          dy = latlng2.lat - latlng1.lat;
      return Math.sqrt(dx * dx + dy * dy);
    },
    infinite: true
  });
  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;
  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */

  var Layer = Evented.extend({
    // Classes extending `L.Layer` will inherit the following options:
    options: {
      // @option pane: String = 'overlayPane'
      // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
      pane: 'overlayPane',
      // @option attribution: String = null
      // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
      attribution: null,
      bubblingMouseEvents: true
    },

    /* @section
     * Classes extending `L.Layer` will inherit the following methods:
     *
     * @method addTo(map: Map|LayerGroup): this
     * Adds the layer to the given map or layer group.
     */
    addTo: function (map) {
      map.addLayer(this);
      return this;
    },
    // @method remove: this
    // Removes the layer from the map it is currently active on.
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    // @method removeFrom(map: Map): this
    // Removes the layer from the given map
    //
    // @alternative
    // @method removeFrom(group: LayerGroup): this
    // Removes the layer from the given `LayerGroup`
    removeFrom: function (obj) {
      if (obj) {
        obj.removeLayer(this);
      }

      return this;
    },
    // @method getPane(name? : String): HTMLElement
    // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
    getPane: function (name) {
      return this._map.getPane(name ? this.options[name] || name : this.options.pane);
    },
    addInteractiveTarget: function (targetEl) {
      this._map._targets[stamp(targetEl)] = this;
      return this;
    },
    removeInteractiveTarget: function (targetEl) {
      delete this._map._targets[stamp(targetEl)];
      return this;
    },
    // @method getAttribution: String
    // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (e) {
      var map = e.target; // check in case layer gets added and then removed before the map is ready

      if (!map.hasLayer(this)) {
        return;
      }

      this._map = map;
      this._zoomAnimated = map._zoomAnimated;

      if (this.getEvents) {
        var events = this.getEvents();
        map.on(events, this);
        this.once('remove', function () {
          map.off(events, this);
        }, this);
      }

      this.onAdd(map);

      if (this.getAttribution && map.attributionControl) {
        map.attributionControl.addAttribution(this.getAttribution());
      }

      this.fire('add');
      map.fire('layeradd', {
        layer: this
      });
    }
  });
  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */

  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */

  Map.include({
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the map
    addLayer: function (layer) {
      if (!layer._layerAdd) {
        throw new Error('The provided object is not a Layer.');
      }

      var id = stamp(layer);

      if (this._layers[id]) {
        return this;
      }

      this._layers[id] = layer;
      layer._mapToAdd = this;

      if (layer.beforeAdd) {
        layer.beforeAdd(this);
      }

      this.whenReady(layer._layerAdd, layer);
      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the map.
    removeLayer: function (layer) {
      var id = stamp(layer);

      if (!this._layers[id]) {
        return this;
      }

      if (this._loaded) {
        layer.onRemove(this);
      }

      if (layer.getAttribution && this.attributionControl) {
        this.attributionControl.removeAttribution(layer.getAttribution());
      }

      delete this._layers[id];

      if (this._loaded) {
        this.fire('layerremove', {
          layer: layer
        });
        layer.fire('remove');
      }

      layer._map = layer._mapToAdd = null;
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the map
    hasLayer: function (layer) {
      return !!layer && stamp(layer) in this._layers;
    },

    /* @method eachLayer(fn: Function, context?: Object): this
     * Iterates over the layers of the map, optionally specifying context of the iterator function.
     * ```
     * map.eachLayer(function(layer){
     *     layer.bindPopup('Hello');
     * });
     * ```
     */
    eachLayer: function (method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }

      return this;
    },
    _addLayers: function (layers) {
      layers = layers ? isArray(layers) ? layers : [layers] : [];

      for (var i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    },
    _addZoomLimit: function (layer) {
      if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
        this._zoomBoundLayers[stamp(layer)] = layer;

        this._updateZoomLevels();
      }
    },
    _removeZoomLimit: function (layer) {
      var id = stamp(layer);

      if (this._zoomBoundLayers[id]) {
        delete this._zoomBoundLayers[id];

        this._updateZoomLevels();
      }
    },
    _updateZoomLevels: function () {
      var minZoom = Infinity,
          maxZoom = -Infinity,
          oldZoomSpan = this._getZoomSpan();

      for (var i in this._zoomBoundLayers) {
        var options = this._zoomBoundLayers[i].options;
        minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
        maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
      }

      this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
      this._layersMinZoom = minZoom === Infinity ? undefined : minZoom; // @section Map state change events
      // @event zoomlevelschange: Event
      // Fired when the number of zoomlevels on the map is changed due
      // to adding or removing a layer.

      if (oldZoomSpan !== this._getZoomSpan()) {
        this.fire('zoomlevelschange');
      }

      if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
        this.setZoom(this._layersMaxZoom);
      }

      if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
        this.setZoom(this._layersMinZoom);
      }
    }
  });
  /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */

  var LayerGroup = Layer.extend({
    initialize: function (layers, options) {
      setOptions(this, options);
      this._layers = {};
      var i, len;

      if (layers) {
        for (i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      }
    },
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the group.
    addLayer: function (layer) {
      var id = this.getLayerId(layer);
      this._layers[id] = layer;

      if (this._map) {
        this._map.addLayer(layer);
      }

      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the group.
    // @alternative
    // @method removeLayer(id: Number): this
    // Removes the layer with the given internal ID from the group.
    removeLayer: function (layer) {
      var id = layer in this._layers ? layer : this.getLayerId(layer);

      if (this._map && this._layers[id]) {
        this._map.removeLayer(this._layers[id]);
      }

      delete this._layers[id];
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the group.
    // @alternative
    // @method hasLayer(id: Number): Boolean
    // Returns `true` if the given internal ID is currently added to the group.
    hasLayer: function (layer) {
      if (!layer) {
        return false;
      }

      var layerId = typeof layer === 'number' ? layer : this.getLayerId(layer);
      return layerId in this._layers;
    },
    // @method clearLayers(): this
    // Removes all the layers from the group.
    clearLayers: function () {
      return this.eachLayer(this.removeLayer, this);
    },
    // @method invoke(methodName: String, …): this
    // Calls `methodName` on every layer contained in this group, passing any
    // additional parameters. Has no effect if the layers contained do not
    // implement `methodName`.
    invoke: function (methodName) {
      var args = Array.prototype.slice.call(arguments, 1),
          i,
          layer;

      for (i in this._layers) {
        layer = this._layers[i];

        if (layer[methodName]) {
          layer[methodName].apply(layer, args);
        }
      }

      return this;
    },
    onAdd: function (map) {
      this.eachLayer(map.addLayer, map);
    },
    onRemove: function (map) {
      this.eachLayer(map.removeLayer, map);
    },
    // @method eachLayer(fn: Function, context?: Object): this
    // Iterates over the layers of the group, optionally specifying context of the iterator function.
    // ```js
    // group.eachLayer(function (layer) {
    // 	layer.bindPopup('Hello');
    // });
    // ```
    eachLayer: function (method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }

      return this;
    },
    // @method getLayer(id: Number): Layer
    // Returns the layer with the given internal ID.
    getLayer: function (id) {
      return this._layers[id];
    },
    // @method getLayers(): Layer[]
    // Returns an array of all the layers added to the group.
    getLayers: function () {
      var layers = [];
      this.eachLayer(layers.push, layers);
      return layers;
    },
    // @method setZIndex(zIndex: Number): this
    // Calls `setZIndex` on every layer contained in this group, passing the z-index.
    setZIndex: function (zIndex) {
      return this.invoke('setZIndex', zIndex);
    },
    // @method getLayerId(layer: Layer): Number
    // Returns the internal ID for a layer
    getLayerId: function (layer) {
      return stamp(layer);
    }
  }); // @factory L.layerGroup(layers?: Layer[], options?: Object)
  // Create a layer group, optionally given an initial set of layers and an `options` object.

  var layerGroup = function (layers, options) {
    return new LayerGroup(layers, options);
  };
  /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */


  var FeatureGroup = LayerGroup.extend({
    addLayer: function (layer) {
      if (this.hasLayer(layer)) {
        return this;
      }

      layer.addEventParent(this);
      LayerGroup.prototype.addLayer.call(this, layer); // @event layeradd: LayerEvent
      // Fired when a layer is added to this `FeatureGroup`

      return this.fire('layeradd', {
        layer: layer
      });
    },
    removeLayer: function (layer) {
      if (!this.hasLayer(layer)) {
        return this;
      }

      if (layer in this._layers) {
        layer = this._layers[layer];
      }

      layer.removeEventParent(this);
      LayerGroup.prototype.removeLayer.call(this, layer); // @event layerremove: LayerEvent
      // Fired when a layer is removed from this `FeatureGroup`

      return this.fire('layerremove', {
        layer: layer
      });
    },
    // @method setStyle(style: Path options): this
    // Sets the given path options to each layer of the group that has a `setStyle` method.
    setStyle: function (style) {
      return this.invoke('setStyle', style);
    },
    // @method bringToFront(): this
    // Brings the layer group to the top of all other layers
    bringToFront: function () {
      return this.invoke('bringToFront');
    },
    // @method bringToBack(): this
    // Brings the layer group to the back of all other layers
    bringToBack: function () {
      return this.invoke('bringToBack');
    },
    // @method getBounds(): LatLngBounds
    // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
    getBounds: function () {
      var bounds = new LatLngBounds();

      for (var id in this._layers) {
        var layer = this._layers[id];
        bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
      }

      return bounds;
    }
  }); // @factory L.featureGroup(layers?: Layer[], options?: Object)
  // Create a feature group, optionally given an initial set of layers and an `options` object.

  var featureGroup = function (layers, options) {
    return new FeatureGroup(layers, options);
  };
  /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */


  var Icon = Class.extend({
    /* @section
     * @aka Icon options
     *
     * @option iconUrl: String = null
     * **(required)** The URL to the icon image (absolute or relative to your script path).
     *
     * @option iconRetinaUrl: String = null
     * The URL to a retina sized version of the icon image (absolute or relative to your
     * script path). Used for Retina screen devices.
     *
     * @option iconSize: Point = null
     * Size of the icon image in pixels.
     *
     * @option iconAnchor: Point = null
     * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
     * will be aligned so that this point is at the marker's geographical location. Centered
     * by default if size is specified, also can be set in CSS with negative margins.
     *
     * @option popupAnchor: Point = [0, 0]
     * The coordinates of the point from which popups will "open", relative to the icon anchor.
     *
     * @option tooltipAnchor: Point = [0, 0]
     * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
     *
     * @option shadowUrl: String = null
     * The URL to the icon shadow image. If not specified, no shadow image will be created.
     *
     * @option shadowRetinaUrl: String = null
     *
     * @option shadowSize: Point = null
     * Size of the shadow image in pixels.
     *
     * @option shadowAnchor: Point = null
     * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
     * as iconAnchor if not specified).
     *
     * @option className: String = ''
     * A custom class name to assign to both icon and shadow images. Empty by default.
     */
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0]
    },
    initialize: function (options) {
      setOptions(this, options);
    },
    // @method createIcon(oldIcon?: HTMLElement): HTMLElement
    // Called internally when the icon has to be shown, returns a `<img>` HTML element
    // styled according to the options.
    createIcon: function (oldIcon) {
      return this._createIcon('icon', oldIcon);
    },
    // @method createShadow(oldIcon?: HTMLElement): HTMLElement
    // As `createIcon`, but for the shadow beneath it.
    createShadow: function (oldIcon) {
      return this._createIcon('shadow', oldIcon);
    },
    _createIcon: function (name, oldIcon) {
      var src = this._getIconUrl(name);

      if (!src) {
        if (name === 'icon') {
          throw new Error('iconUrl not set in Icon options (see the docs).');
        }

        return null;
      }

      var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);

      this._setIconStyles(img, name);

      return img;
    },
    _setIconStyles: function (img, name) {
      var options = this.options;
      var sizeOption = options[name + 'Size'];

      if (typeof sizeOption === 'number') {
        sizeOption = [sizeOption, sizeOption];
      }

      var size = toPoint(sizeOption),
          anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
      img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

      if (anchor) {
        img.style.marginLeft = -anchor.x + 'px';
        img.style.marginTop = -anchor.y + 'px';
      }

      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    _createImg: function (src, el) {
      el = el || document.createElement('img');
      el.src = src;
      return el;
    },
    _getIconUrl: function (name) {
      return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
    }
  }); // @factory L.icon(options: Icon options)
  // Creates an icon instance with the given options.

  function icon(options) {
    return new Icon(options);
  }
  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */


  var IconDefault = Icon.extend({
    options: {
      iconUrl: 'marker-icon.png',
      iconRetinaUrl: 'marker-icon-2x.png',
      shadowUrl: 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function (name) {
      if (!IconDefault.imagePath) {
        // Deprecated, backwards-compatibility only
        IconDefault.imagePath = this._detectIconPath();
      } // @option imagePath: String
      // `Icon.Default` will try to auto-detect the location of the
      // blue icon images. If you are placing these images in a non-standard
      // way, set this option to point to the right path.


      return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
    },
    _detectIconPath: function () {
      var el = create$1('div', 'leaflet-default-icon-path', document.body);
      var path = getStyle(el, 'background-image') || getStyle(el, 'backgroundImage'); // IE8

      document.body.removeChild(el);

      if (path === null || path.indexOf('url') !== 0) {
        path = '';
      } else {
        path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
      }

      return path;
    }
  });
  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */

  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
    initialize: function (marker) {
      this._marker = marker;
    },
    addHooks: function () {
      var icon = this._marker._icon;

      if (!this._draggable) {
        this._draggable = new Draggable(icon, icon, true);
      }

      this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable();

      addClass(icon, 'leaflet-marker-draggable');
    },
    removeHooks: function () {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable();

      if (this._marker._icon) {
        removeClass(this._marker._icon, 'leaflet-marker-draggable');
      }
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function (e) {
      var marker = this._marker,
          map = marker._map,
          speed = this._marker.options.autoPanSpeed,
          padding = this._marker.options.autoPanPadding,
          iconPos = getPosition(marker._icon),
          bounds = map.getPixelBounds(),
          origin = map.getPixelOrigin();
      var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));

      if (!panBounds.contains(iconPos)) {
        // Compute incremental movement
        var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
        map.panBy(movement, {
          animate: false
        });

        this._draggable._newPos._add(movement);

        this._draggable._startPos._add(movement);

        setPosition(marker._icon, this._draggable._newPos);

        this._onDrag(e);

        this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
      }
    },
    _onDragStart: function () {
      // @section Dragging events
      // @event dragstart: Event
      // Fired when the user starts dragging the marker.
      // @event movestart: Event
      // Fired when the marker starts moving (because of dragging).
      this._oldLatLng = this._marker.getLatLng(); // When using ES6 imports it could not be set when `Popup` was not imported as well

      this._marker.closePopup && this._marker.closePopup();

      this._marker.fire('movestart').fire('dragstart');
    },
    _onPreDrag: function (e) {
      if (this._marker.options.autoPan) {
        cancelAnimFrame(this._panRequest);
        this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
      }
    },
    _onDrag: function (e) {
      var marker = this._marker,
          shadow = marker._shadow,
          iconPos = getPosition(marker._icon),
          latlng = marker._map.layerPointToLatLng(iconPos); // update shadow position


      if (shadow) {
        setPosition(shadow, iconPos);
      }

      marker._latlng = latlng;
      e.latlng = latlng;
      e.oldLatLng = this._oldLatLng; // @event drag: Event
      // Fired repeatedly while the user drags the marker.

      marker.fire('move', e).fire('drag', e);
    },
    _onDragEnd: function (e) {
      // @event dragend: DragEndEvent
      // Fired when the user stops dragging the marker.
      cancelAnimFrame(this._panRequest); // @event moveend: Event
      // Fired when the marker stops moving (because of dragging).

      delete this._oldLatLng;

      this._marker.fire('moveend').fire('dragend', e);
    }
  });
  /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */

  var Marker = Layer.extend({
    // @section
    // @aka Marker options
    options: {
      // @option icon: Icon = *
      // Icon instance to use for rendering the marker.
      // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
      // If not specified, a common instance of `L.Icon.Default` is used.
      icon: new IconDefault(),
      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option keyboard: Boolean = true
      // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
      keyboard: true,
      // @option title: String = ''
      // Text for the browser tooltip that appear on marker hover (no tooltip by default).
      title: '',
      // @option alt: String = ''
      // Text for the `alt` attribute of the icon image (useful for accessibility).
      alt: '',
      // @option zIndexOffset: Number = 0
      // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
      zIndexOffset: 0,
      // @option opacity: Number = 1.0
      // The opacity of the marker.
      opacity: 1,
      // @option riseOnHover: Boolean = false
      // If `true`, the marker will get on top of others when you hover the mouse over it.
      riseOnHover: false,
      // @option riseOffset: Number = 250
      // The z-index offset used for the `riseOnHover` feature.
      riseOffset: 250,
      // @option pane: String = 'markerPane'
      // `Map pane` where the markers icon will be added.
      pane: 'markerPane',
      // @option shadowPane: String = 'shadowPane'
      // `Map pane` where the markers shadow will be added.
      shadowPane: 'shadowPane',
      // @option bubblingMouseEvents: Boolean = false
      // When `true`, a mouse event on this marker will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: false,
      // @section Draggable marker options
      // @option draggable: Boolean = false
      // Whether the marker is draggable with mouse/touch or not.
      draggable: false,
      // @option autoPan: Boolean = false
      // Whether to pan the map when dragging this marker near its edge or not.
      autoPan: false,
      // @option autoPanPadding: Point = Point(50, 50)
      // Distance (in pixels to the left/right and to the top/bottom) of the
      // map edge to start panning the map.
      autoPanPadding: [50, 50],
      // @option autoPanSpeed: Number = 10
      // Number of pixels the map should pan by.
      autoPanSpeed: 10
    },

    /* @section
     *
     * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
     */
    initialize: function (latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
    },
    onAdd: function (map) {
      this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

      if (this._zoomAnimated) {
        map.on('zoomanim', this._animateZoom, this);
      }

      this._initIcon();

      this.update();
    },
    onRemove: function (map) {
      if (this.dragging && this.dragging.enabled()) {
        this.options.draggable = true;
        this.dragging.removeHooks();
      }

      delete this.dragging;

      if (this._zoomAnimated) {
        map.off('zoomanim', this._animateZoom, this);
      }

      this._removeIcon();

      this._removeShadow();
    },
    getEvents: function () {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    // @method getLatLng: LatLng
    // Returns the current geographical position of the marker.
    getLatLng: function () {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Changes the marker position to the given point.
    setLatLng: function (latlng) {
      var oldLatLng = this._latlng;
      this._latlng = toLatLng(latlng);
      this.update(); // @event move: Event
      // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.

      return this.fire('move', {
        oldLatLng: oldLatLng,
        latlng: this._latlng
      });
    },
    // @method setZIndexOffset(offset: Number): this
    // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
    setZIndexOffset: function (offset) {
      this.options.zIndexOffset = offset;
      return this.update();
    },
    // @method getIcon: Icon
    // Returns the current icon used by the marker
    getIcon: function () {
      return this.options.icon;
    },
    // @method setIcon(icon: Icon): this
    // Changes the marker icon.
    setIcon: function (icon) {
      this.options.icon = icon;

      if (this._map) {
        this._initIcon();

        this.update();
      }

      if (this._popup) {
        this.bindPopup(this._popup, this._popup.options);
      }

      return this;
    },
    getElement: function () {
      return this._icon;
    },
    update: function () {
      if (this._icon && this._map) {
        var pos = this._map.latLngToLayerPoint(this._latlng).round();

        this._setPos(pos);
      }

      return this;
    },
    _initIcon: function () {
      var options = this.options,
          classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      var icon = options.icon.createIcon(this._icon),
          addIcon = false; // if we're not reusing the icon, remove the old one and init new one

      if (icon !== this._icon) {
        if (this._icon) {
          this._removeIcon();
        }

        addIcon = true;

        if (options.title) {
          icon.title = options.title;
        }

        if (icon.tagName === 'IMG') {
          icon.alt = options.alt || '';
        }
      }

      addClass(icon, classToAdd);

      if (options.keyboard) {
        icon.tabIndex = '0';
      }

      this._icon = icon;

      if (options.riseOnHover) {
        this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }

      var newShadow = options.icon.createShadow(this._shadow),
          addShadow = false;

      if (newShadow !== this._shadow) {
        this._removeShadow();

        addShadow = true;
      }

      if (newShadow) {
        addClass(newShadow, classToAdd);
        newShadow.alt = '';
      }

      this._shadow = newShadow;

      if (options.opacity < 1) {
        this._updateOpacity();
      }

      if (addIcon) {
        this.getPane().appendChild(this._icon);
      }

      this._initInteraction();

      if (newShadow && addShadow) {
        this.getPane(options.shadowPane).appendChild(this._shadow);
      }
    },
    _removeIcon: function () {
      if (this.options.riseOnHover) {
        this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }

      remove(this._icon);
      this.removeInteractiveTarget(this._icon);
      this._icon = null;
    },
    _removeShadow: function () {
      if (this._shadow) {
        remove(this._shadow);
      }

      this._shadow = null;
    },
    _setPos: function (pos) {
      if (this._icon) {
        setPosition(this._icon, pos);
      }

      if (this._shadow) {
        setPosition(this._shadow, pos);
      }

      this._zIndex = pos.y + this.options.zIndexOffset;

      this._resetZIndex();
    },
    _updateZIndex: function (offset) {
      if (this._icon) {
        this._icon.style.zIndex = this._zIndex + offset;
      }
    },
    _animateZoom: function (opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

      this._setPos(pos);
    },
    _initInteraction: function () {
      if (!this.options.interactive) {
        return;
      }

      addClass(this._icon, 'leaflet-interactive');
      this.addInteractiveTarget(this._icon);

      if (MarkerDrag) {
        var draggable = this.options.draggable;

        if (this.dragging) {
          draggable = this.dragging.enabled();
          this.dragging.disable();
        }

        this.dragging = new MarkerDrag(this);

        if (draggable) {
          this.dragging.enable();
        }
      }
    },
    // @method setOpacity(opacity: Number): this
    // Changes the opacity of the marker.
    setOpacity: function (opacity) {
      this.options.opacity = opacity;

      if (this._map) {
        this._updateOpacity();
      }

      return this;
    },
    _updateOpacity: function () {
      var opacity = this.options.opacity;

      if (this._icon) {
        setOpacity(this._icon, opacity);
      }

      if (this._shadow) {
        setOpacity(this._shadow, opacity);
      }
    },
    _bringToFront: function () {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function () {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function () {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function () {
      return this.options.icon.options.tooltipAnchor;
    }
  }); // factory L.marker(latlng: LatLng, options? : Marker options)
  // @factory L.marker(latlng: LatLng, options? : Marker options)
  // Instantiates a Marker object given a geographical point and optionally an options object.

  function marker(latlng, options) {
    return new Marker(latlng, options);
  }
  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */


  var Path = Layer.extend({
    // @section
    // @aka Path options
    options: {
      // @option stroke: Boolean = true
      // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
      stroke: true,
      // @option color: String = '#3388ff'
      // Stroke color
      color: '#3388ff',
      // @option weight: Number = 3
      // Stroke width in pixels
      weight: 3,
      // @option opacity: Number = 1.0
      // Stroke opacity
      opacity: 1,
      // @option lineCap: String= 'round'
      // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
      lineCap: 'round',
      // @option lineJoin: String = 'round'
      // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
      lineJoin: 'round',
      // @option dashArray: String = null
      // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashArray: null,
      // @option dashOffset: String = null
      // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashOffset: null,
      // @option fill: Boolean = depends
      // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
      fill: false,
      // @option fillColor: String = *
      // Fill color. Defaults to the value of the [`color`](#path-color) option
      fillColor: null,
      // @option fillOpacity: Number = 0.2
      // Fill opacity.
      fillOpacity: 0.2,
      // @option fillRule: String = 'evenodd'
      // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
      fillRule: 'evenodd',
      // className: '',
      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option bubblingMouseEvents: Boolean = true
      // When `true`, a mouse event on this path will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: true
    },
    beforeAdd: function (map) {
      // Renderer is set here because we need to call renderer.getEvents
      // before this.getEvents.
      this._renderer = map.getRenderer(this);
    },
    onAdd: function () {
      this._renderer._initPath(this);

      this._reset();

      this._renderer._addPath(this);
    },
    onRemove: function () {
      this._renderer._removePath(this);
    },
    // @method redraw(): this
    // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
    redraw: function () {
      if (this._map) {
        this._renderer._updatePath(this);
      }

      return this;
    },
    // @method setStyle(style: Path options): this
    // Changes the appearance of a Path based on the options in the `Path options` object.
    setStyle: function (style) {
      setOptions(this, style);

      if (this._renderer) {
        this._renderer._updateStyle(this);

        if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, 'weight')) {
          this._updateBounds();
        }
      }

      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all path layers.
    bringToFront: function () {
      if (this._renderer) {
        this._renderer._bringToFront(this);
      }

      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all path layers.
    bringToBack: function () {
      if (this._renderer) {
        this._renderer._bringToBack(this);
      }

      return this;
    },
    getElement: function () {
      return this._path;
    },
    _reset: function () {
      // defined in child classes
      this._project();

      this._update();
    },
    _clickTolerance: function () {
      // used when doing hit detection for Canvas layers
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    }
  });
  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */

  var CircleMarker = Path.extend({
    // @section
    // @aka CircleMarker options
    options: {
      fill: true,
      // @option radius: Number = 10
      // Radius of the circle marker, in pixels
      radius: 10
    },
    initialize: function (latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
      this._radius = this.options.radius;
    },
    // @method setLatLng(latLng: LatLng): this
    // Sets the position of a circle marker to a new location.
    setLatLng: function (latlng) {
      var oldLatLng = this._latlng;
      this._latlng = toLatLng(latlng);
      this.redraw(); // @event move: Event
      // Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.

      return this.fire('move', {
        oldLatLng: oldLatLng,
        latlng: this._latlng
      });
    },
    // @method getLatLng(): LatLng
    // Returns the current geographical position of the circle marker
    getLatLng: function () {
      return this._latlng;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle marker. Units are in pixels.
    setRadius: function (radius) {
      this.options.radius = this._radius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of the circle
    getRadius: function () {
      return this._radius;
    },
    setStyle: function (options) {
      var radius = options && options.radius || this._radius;
      Path.prototype.setStyle.call(this, options);
      this.setRadius(radius);
      return this;
    },
    _project: function () {
      this._point = this._map.latLngToLayerPoint(this._latlng);

      this._updateBounds();
    },
    _updateBounds: function () {
      var r = this._radius,
          r2 = this._radiusY || r,
          w = this._clickTolerance(),
          p = [r + w, r2 + w];

      this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
    },
    _update: function () {
      if (this._map) {
        this._updatePath();
      }
    },
    _updatePath: function () {
      this._renderer._updateCircle(this);
    },
    _empty: function () {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function (p) {
      return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  }); // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.

  function circleMarker(latlng, options) {
    return new CircleMarker(latlng, options);
  }
  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */


  var Circle = CircleMarker.extend({
    initialize: function (latlng, options, legacyOptions) {
      if (typeof options === 'number') {
        // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
        options = extend({}, legacyOptions, {
          radius: options
        });
      }

      setOptions(this, options);
      this._latlng = toLatLng(latlng);

      if (isNaN(this.options.radius)) {
        throw new Error('Circle radius cannot be NaN');
      } // @section
      // @aka Circle options
      // @option radius: Number; Radius of the circle, in meters.


      this._mRadius = this.options.radius;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle. Units are in meters.
    setRadius: function (radius) {
      this._mRadius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of a circle. Units are in meters.
    getRadius: function () {
      return this._mRadius;
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function () {
      var half = [this._radius, this._radiusY || this._radius];
      return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
    },
    setStyle: Path.prototype.setStyle,
    _project: function () {
      var lng = this._latlng.lng,
          lat = this._latlng.lat,
          map = this._map,
          crs = map.options.crs;

      if (crs.distance === Earth.distance) {
        var d = Math.PI / 180,
            latR = this._mRadius / Earth.R / d,
            top = map.project([lat + latR, lng]),
            bottom = map.project([lat - latR, lng]),
            p = top.add(bottom).divideBy(2),
            lat2 = map.unproject(p).lat,
            lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

        if (isNaN(lngR) || lngR === 0) {
          lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
        }

        this._point = p.subtract(map.getPixelOrigin());
        this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
        this._radiusY = p.y - top.y;
      } else {
        var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = map.latLngToLayerPoint(this._latlng);
        this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
      }

      this._updateBounds();
    }
  }); // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.

  function circle(latlng, options, legacyOptions) {
    return new Circle(latlng, options, legacyOptions);
  }
  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */


  var Polyline = Path.extend({
    // @section
    // @aka Polyline options
    options: {
      // @option smoothFactor: Number = 1.0
      // How much to simplify the polyline on each zoom level. More means
      // better performance and smoother look, and less means more accurate representation.
      smoothFactor: 1.0,
      // @option noClip: Boolean = false
      // Disable polyline clipping.
      noClip: false
    },
    initialize: function (latlngs, options) {
      setOptions(this, options);

      this._setLatLngs(latlngs);
    },
    // @method getLatLngs(): LatLng[]
    // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
    getLatLngs: function () {
      return this._latlngs;
    },
    // @method setLatLngs(latlngs: LatLng[]): this
    // Replaces all the points in the polyline with the given array of geographical points.
    setLatLngs: function (latlngs) {
      this._setLatLngs(latlngs);

      return this.redraw();
    },
    // @method isEmpty(): Boolean
    // Returns `true` if the Polyline has no LatLngs.
    isEmpty: function () {
      return !this._latlngs.length;
    },
    // @method closestLayerPoint(p: Point): Point
    // Returns the point closest to `p` on the Polyline.
    closestLayerPoint: function (p) {
      var minDistance = Infinity,
          minPoint = null,
          closest = _sqClosestPointOnSegment,
          p1,
          p2;

      for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
        var points = this._parts[j];

        for (var i = 1, len = points.length; i < len; i++) {
          p1 = points[i - 1];
          p2 = points[i];
          var sqDist = closest(p, p1, p2, true);

          if (sqDist < minDistance) {
            minDistance = sqDist;
            minPoint = closest(p, p1, p2);
          }
        }
      }

      if (minPoint) {
        minPoint.distance = Math.sqrt(minDistance);
      }

      return minPoint;
    },
    // @method getCenter(): LatLng
    // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
    getCenter: function () {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }

      var i,
          halfDist,
          segDist,
          dist,
          p1,
          p2,
          ratio,
          points = this._rings[0],
          len = points.length;

      if (!len) {
        return null;
      } // polyline centroid algorithm; only uses the first ring if there are multiple


      for (i = 0, halfDist = 0; i < len - 1; i++) {
        halfDist += points[i].distanceTo(points[i + 1]) / 2;
      } // The line is so small in the current view that all points are on the same pixel.


      if (halfDist === 0) {
        return this._map.layerPointToLatLng(points[0]);
      }

      for (i = 0, dist = 0; i < len - 1; i++) {
        p1 = points[i];
        p2 = points[i + 1];
        segDist = p1.distanceTo(p2);
        dist += segDist;

        if (dist > halfDist) {
          ratio = (dist - halfDist) / segDist;
          return this._map.layerPointToLatLng([p2.x - ratio * (p2.x - p1.x), p2.y - ratio * (p2.y - p1.y)]);
        }
      }
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function () {
      return this._bounds;
    },
    // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
    // Adds a given point to the polyline. By default, adds to the first ring of
    // the polyline in case of a multi-polyline, but can be overridden by passing
    // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
    addLatLng: function (latlng, latlngs) {
      latlngs = latlngs || this._defaultShape();
      latlng = toLatLng(latlng);
      latlngs.push(latlng);

      this._bounds.extend(latlng);

      return this.redraw();
    },
    _setLatLngs: function (latlngs) {
      this._bounds = new LatLngBounds();
      this._latlngs = this._convertLatLngs(latlngs);
    },
    _defaultShape: function () {
      return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
    _convertLatLngs: function (latlngs) {
      var result = [],
          flat = isFlat(latlngs);

      for (var i = 0, len = latlngs.length; i < len; i++) {
        if (flat) {
          result[i] = toLatLng(latlngs[i]);

          this._bounds.extend(result[i]);
        } else {
          result[i] = this._convertLatLngs(latlngs[i]);
        }
      }

      return result;
    },
    _project: function () {
      var pxBounds = new Bounds();
      this._rings = [];

      this._projectLatlngs(this._latlngs, this._rings, pxBounds);

      if (this._bounds.isValid() && pxBounds.isValid()) {
        this._rawPxBounds = pxBounds;

        this._updateBounds();
      }
    },
    _updateBounds: function () {
      var w = this._clickTolerance(),
          p = new Point(w, w);

      this._pxBounds = new Bounds([this._rawPxBounds.min.subtract(p), this._rawPxBounds.max.add(p)]);
    },
    // recursively turns latlngs into a set of rings with projected coordinates
    _projectLatlngs: function (latlngs, result, projectedBounds) {
      var flat = latlngs[0] instanceof LatLng,
          len = latlngs.length,
          i,
          ring;

      if (flat) {
        ring = [];

        for (i = 0; i < len; i++) {
          ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
          projectedBounds.extend(ring[i]);
        }

        result.push(ring);
      } else {
        for (i = 0; i < len; i++) {
          this._projectLatlngs(latlngs[i], result, projectedBounds);
        }
      }
    },
    // clip polyline by renderer bounds so that we have less to render for performance
    _clipPoints: function () {
      var bounds = this._renderer._bounds;
      this._parts = [];

      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }

      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }

      var parts = this._parts,
          i,
          j,
          k,
          len,
          len2,
          segment,
          points;

      for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
        points = this._rings[i];

        for (j = 0, len2 = points.length; j < len2 - 1; j++) {
          segment = clipSegment(points[j], points[j + 1], bounds, j, true);

          if (!segment) {
            continue;
          }

          parts[k] = parts[k] || [];
          parts[k].push(segment[0]); // if segment goes out of screen, or it's the last one, it's the end of the line part

          if (segment[1] !== points[j + 1] || j === len2 - 2) {
            parts[k].push(segment[1]);
            k++;
          }
        }
      }
    },
    // simplify each clipped part of the polyline for performance
    _simplifyPoints: function () {
      var parts = this._parts,
          tolerance = this.options.smoothFactor;

      for (var i = 0, len = parts.length; i < len; i++) {
        parts[i] = simplify(parts[i], tolerance);
      }
    },
    _update: function () {
      if (!this._map) {
        return;
      }

      this._clipPoints();

      this._simplifyPoints();

      this._updatePath();
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function (p, closed) {
      var i,
          j,
          k,
          len,
          len2,
          part,
          w = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(p)) {
        return false;
      } // hit detection for polylines


      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];

        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          if (!closed && j === 0) {
            continue;
          }

          if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
            return true;
          }
        }
      }

      return false;
    }
  }); // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a `Polyline` object with
  // multiple separate lines (`MultiPolyline`) by passing an array of arrays
  // of geographic points.

  function polyline(latlngs, options) {
    return new Polyline(latlngs, options);
  } // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.


  Polyline._flat = _flat;
  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */

  var Polygon = Polyline.extend({
    options: {
      fill: true
    },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }

      var i,
          j,
          p1,
          p2,
          f,
          area,
          x,
          y,
          center,
          points = this._rings[0],
          len = points.length;

      if (!len) {
        return null;
      } // polygon centroid algorithm; only uses the first ring if there are multiple


      area = x = y = 0;

      for (i = 0, j = len - 1; i < len; j = i++) {
        p1 = points[i];
        p2 = points[j];
        f = p1.y * p2.x - p2.y * p1.x;
        x += (p1.x + p2.x) * f;
        y += (p1.y + p2.y) * f;
        area += f * 3;
      }

      if (area === 0) {
        // Polygon is so small that all points are on same pixel.
        center = points[0];
      } else {
        center = [x / area, y / area];
      }

      return this._map.layerPointToLatLng(center);
    },
    _convertLatLngs: function (latlngs) {
      var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
          len = result.length; // remove last point if it equals first one


      if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
        result.pop();
      }

      return result;
    },
    _setLatLngs: function (latlngs) {
      Polyline.prototype._setLatLngs.call(this, latlngs);

      if (isFlat(this._latlngs)) {
        this._latlngs = [this._latlngs];
      }
    },
    _defaultShape: function () {
      return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function () {
      // polygons need a different clipping algorithm so we redefine that
      var bounds = this._renderer._bounds,
          w = this.options.weight,
          p = new Point(w, w); // increase clip padding by stroke width to avoid stroke on clip edges

      bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
      this._parts = [];

      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }

      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }

      for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
        clipped = clipPolygon(this._rings[i], bounds, true);

        if (clipped.length) {
          this._parts.push(clipped);
        }
      }
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, true);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function (p) {
      var inside = false,
          part,
          p1,
          p2,
          i,
          j,
          k,
          len,
          len2;

      if (!this._pxBounds || !this._pxBounds.contains(p)) {
        return false;
      } // ray casting algorithm for detecting if point is in polygon


      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];

        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          p1 = part[j];
          p2 = part[k];

          if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
            inside = !inside;
          }
        }
      } // also check if it's on polygon stroke


      return inside || Polyline.prototype._containsPoint.call(this, p, true);
    }
  }); // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)

  function polygon(latlngs, options) {
    return new Polygon(latlngs, options);
  }
  /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */


  var GeoJSON = FeatureGroup.extend({
    /* @section
     * @aka GeoJSON options
     *
     * @option pointToLayer: Function = *
     * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
     * called when data is added, passing the GeoJSON point feature and its `LatLng`.
     * The default is to spawn a default `Marker`:
     * ```js
     * function(geoJsonPoint, latlng) {
     * 	return L.marker(latlng);
     * }
     * ```
     *
     * @option style: Function = *
     * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
     * called internally when data is added.
     * The default value is to not override any defaults:
     * ```js
     * function (geoJsonFeature) {
     * 	return {}
     * }
     * ```
     *
     * @option onEachFeature: Function = *
     * A `Function` that will be called once for each created `Feature`, after it has
     * been created and styled. Useful for attaching events and popups to features.
     * The default is to do nothing with the newly created layers:
     * ```js
     * function (feature, layer) {}
     * ```
     *
     * @option filter: Function = *
     * A `Function` that will be used to decide whether to include a feature or not.
     * The default is to include all features:
     * ```js
     * function (geoJsonFeature) {
     * 	return true;
     * }
     * ```
     * Note: dynamically changing the `filter` option will have effect only on newly
     * added data. It will _not_ re-evaluate already included features.
     *
     * @option coordsToLatLng: Function = *
     * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
     * The default is the `coordsToLatLng` static method.
     *
     * @option markersInheritOptions: Boolean = false
     * Whether default Markers for "Point" type Features inherit from group options.
     */
    initialize: function (geojson, options) {
      setOptions(this, options);
      this._layers = {};

      if (geojson) {
        this.addData(geojson);
      }
    },
    // @method addData( <GeoJSON> data ): this
    // Adds a GeoJSON object to the layer.
    addData: function (geojson) {
      var features = isArray(geojson) ? geojson : geojson.features,
          i,
          len,
          feature;

      if (features) {
        for (i = 0, len = features.length; i < len; i++) {
          // only add this if geometry or geometries are set and not null
          feature = features[i];

          if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
            this.addData(feature);
          }
        }

        return this;
      }

      var options = this.options;

      if (options.filter && !options.filter(geojson)) {
        return this;
      }

      var layer = geometryToLayer(geojson, options);

      if (!layer) {
        return this;
      }

      layer.feature = asFeature(geojson);
      layer.defaultOptions = layer.options;
      this.resetStyle(layer);

      if (options.onEachFeature) {
        options.onEachFeature(geojson, layer);
      }

      return this.addLayer(layer);
    },
    // @method resetStyle( <Path> layer? ): this
    // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
    // If `layer` is omitted, the style of all features in the current layer is reset.
    resetStyle: function (layer) {
      if (layer === undefined) {
        return this.eachLayer(this.resetStyle, this);
      } // reset any custom styles


      layer.options = extend({}, layer.defaultOptions);

      this._setLayerStyle(layer, this.options.style);

      return this;
    },
    // @method setStyle( <Function> style ): this
    // Changes styles of GeoJSON vector layers with the given style function.
    setStyle: function (style) {
      return this.eachLayer(function (layer) {
        this._setLayerStyle(layer, style);
      }, this);
    },
    _setLayerStyle: function (layer, style) {
      if (layer.setStyle) {
        if (typeof style === 'function') {
          style = style(layer.feature);
        }

        layer.setStyle(style);
      }
    }
  }); // @section
  // There are several static functions which can be called without instantiating L.GeoJSON:
  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
  // Creates a `Layer` from a given GeoJSON feature. Can use a custom
  // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
  // functions if provided as options.

  function geometryToLayer(geojson, options) {
    var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
        coords = geometry ? geometry.coordinates : null,
        layers = [],
        pointToLayer = options && options.pointToLayer,
        _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
        latlng,
        latlngs,
        i,
        len;

    if (!coords && !geometry) {
      return null;
    }

    switch (geometry.type) {
      case 'Point':
        latlng = _coordsToLatLng(coords);
        return _pointToLayer(pointToLayer, geojson, latlng, options);

      case 'MultiPoint':
        for (i = 0, len = coords.length; i < len; i++) {
          latlng = _coordsToLatLng(coords[i]);
          layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
        }

        return new FeatureGroup(layers);

      case 'LineString':
      case 'MultiLineString':
        latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
        return new Polyline(latlngs, options);

      case 'Polygon':
      case 'MultiPolygon':
        latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
        return new Polygon(latlngs, options);

      case 'GeometryCollection':
        for (i = 0, len = geometry.geometries.length; i < len; i++) {
          var layer = geometryToLayer({
            geometry: geometry.geometries[i],
            type: 'Feature',
            properties: geojson.properties
          }, options);

          if (layer) {
            layers.push(layer);
          }
        }

        return new FeatureGroup(layers);

      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }

  function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
    return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
  } // @function coordsToLatLng(coords: Array): LatLng
  // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.


  function coordsToLatLng(coords) {
    return new LatLng(coords[1], coords[0], coords[2]);
  } // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
  // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
  // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
  // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.


  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
    var latlngs = [];

    for (var i = 0, len = coords.length, latlng; i < len; i++) {
      latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
      latlngs.push(latlng);
    }

    return latlngs;
  } // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
  // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)


  function latLngToCoords(latlng, precision) {
    precision = typeof precision === 'number' ? precision : 6;
    return latlng.alt !== undefined ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
  } // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
  // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
  // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.


  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
    var coords = [];

    for (var i = 0, len = latlngs.length; i < len; i++) {
      coords.push(levelsDeep ? latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
    }

    if (!levelsDeep && closed) {
      coords.push(coords[0]);
    }

    return coords;
  }

  function getFeature(layer, newGeometry) {
    return layer.feature ? extend({}, layer.feature, {
      geometry: newGeometry
    }) : asFeature(newGeometry);
  } // @function asFeature(geojson: Object): Object
  // Normalize GeoJSON geometries/features into GeoJSON features.


  function asFeature(geojson) {
    if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
      return geojson;
    }

    return {
      type: 'Feature',
      properties: {},
      geometry: geojson
    };
  }

  var PointToGeoJSON = {
    toGeoJSON: function (precision) {
      return getFeature(this, {
        type: 'Point',
        coordinates: latLngToCoords(this.getLatLng(), precision)
      });
    }
  }; // @namespace Marker
  // @section Other methods
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).

  Marker.include(PointToGeoJSON); // @namespace CircleMarker
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).

  Circle.include(PointToGeoJSON);
  CircleMarker.include(PointToGeoJSON); // @namespace Polyline
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).

  Polyline.include({
    toGeoJSON: function (precision) {
      var multi = !isFlat(this._latlngs);
      var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'LineString',
        coordinates: coords
      });
    }
  }); // @namespace Polygon
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).

  Polygon.include({
    toGeoJSON: function (precision) {
      var holes = !isFlat(this._latlngs),
          multi = holes && !isFlat(this._latlngs[0]);
      var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

      if (!holes) {
        coords = [coords];
      }

      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'Polygon',
        coordinates: coords
      });
    }
  }); // @namespace LayerGroup

  LayerGroup.include({
    toMultiPoint: function (precision) {
      var coords = [];
      this.eachLayer(function (layer) {
        coords.push(layer.toGeoJSON(precision).geometry.coordinates);
      });
      return getFeature(this, {
        type: 'MultiPoint',
        coordinates: coords
      });
    },
    // @method toGeoJSON(precision?: Number): Object
    // `precision` is the number of decimal places for coordinates.
    // The default value is 6 places.
    // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
    toGeoJSON: function (precision) {
      var type = this.feature && this.feature.geometry && this.feature.geometry.type;

      if (type === 'MultiPoint') {
        return this.toMultiPoint(precision);
      }

      var isGeometryCollection = type === 'GeometryCollection',
          jsons = [];
      this.eachLayer(function (layer) {
        if (layer.toGeoJSON) {
          var json = layer.toGeoJSON(precision);

          if (isGeometryCollection) {
            jsons.push(json.geometry);
          } else {
            var feature = asFeature(json); // Squash nested feature collections

            if (feature.type === 'FeatureCollection') {
              jsons.push.apply(jsons, feature.features);
            } else {
              jsons.push(feature);
            }
          }
        }
      });

      if (isGeometryCollection) {
        return getFeature(this, {
          geometries: jsons,
          type: 'GeometryCollection'
        });
      }

      return {
        type: 'FeatureCollection',
        features: jsons
      };
    }
  }); // @namespace GeoJSON
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
  // Creates a GeoJSON layer. Optionally accepts an object in
  // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
  // (you can alternatively add it later with `addData` method) and an `options` object.

  function geoJSON(geojson, options) {
    return new GeoJSON(geojson, options);
  } // Backward compatibility.


  var geoJson = geoJSON;
  /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */

  var ImageOverlay = Layer.extend({
    // @section
    // @aka ImageOverlay options
    options: {
      // @option opacity: Number = 1.0
      // The opacity of the image overlay.
      opacity: 1,
      // @option alt: String = ''
      // Text for the `alt` attribute of the image (useful for accessibility).
      alt: '',
      // @option interactive: Boolean = false
      // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
      interactive: false,
      // @option crossOrigin: Boolean|String = false
      // Whether the crossOrigin attribute will be added to the image.
      // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
      // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
      crossOrigin: false,
      // @option errorOverlayUrl: String = ''
      // URL to the overlay image to show in place of the overlay that failed to load.
      errorOverlayUrl: '',
      // @option zIndex: Number = 1
      // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
      zIndex: 1,
      // @option className: String = ''
      // A custom class name to assign to the image. Empty by default.
      className: ''
    },
    initialize: function (url, bounds, options) {
      // (String, LatLngBounds, Object)
      this._url = url;
      this._bounds = toLatLngBounds(bounds);
      setOptions(this, options);
    },
    onAdd: function () {
      if (!this._image) {
        this._initImage();

        if (this.options.opacity < 1) {
          this._updateOpacity();
        }
      }

      if (this.options.interactive) {
        addClass(this._image, 'leaflet-interactive');
        this.addInteractiveTarget(this._image);
      }

      this.getPane().appendChild(this._image);

      this._reset();
    },
    onRemove: function () {
      remove(this._image);

      if (this.options.interactive) {
        this.removeInteractiveTarget(this._image);
      }
    },
    // @method setOpacity(opacity: Number): this
    // Sets the opacity of the overlay.
    setOpacity: function (opacity) {
      this.options.opacity = opacity;

      if (this._image) {
        this._updateOpacity();
      }

      return this;
    },
    setStyle: function (styleOpts) {
      if (styleOpts.opacity) {
        this.setOpacity(styleOpts.opacity);
      }

      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all overlays.
    bringToFront: function () {
      if (this._map) {
        toFront(this._image);
      }

      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all overlays.
    bringToBack: function () {
      if (this._map) {
        toBack(this._image);
      }

      return this;
    },
    // @method setUrl(url: String): this
    // Changes the URL of the image.
    setUrl: function (url) {
      this._url = url;

      if (this._image) {
        this._image.src = url;
      }

      return this;
    },
    // @method setBounds(bounds: LatLngBounds): this
    // Update the bounds that this ImageOverlay covers
    setBounds: function (bounds) {
      this._bounds = toLatLngBounds(bounds);

      if (this._map) {
        this._reset();
      }

      return this;
    },
    getEvents: function () {
      var events = {
        zoom: this._reset,
        viewreset: this._reset
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @method setZIndex(value: Number): this
    // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
    setZIndex: function (value) {
      this.options.zIndex = value;

      this._updateZIndex();

      return this;
    },
    // @method getBounds(): LatLngBounds
    // Get the bounds that this ImageOverlay covers
    getBounds: function () {
      return this._bounds;
    },
    // @method getElement(): HTMLElement
    // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
    // used by this overlay.
    getElement: function () {
      return this._image;
    },
    _initImage: function () {
      var wasElementSupplied = this._url.tagName === 'IMG';
      var img = this._image = wasElementSupplied ? this._url : create$1('img');
      addClass(img, 'leaflet-image-layer');

      if (this._zoomAnimated) {
        addClass(img, 'leaflet-zoom-animated');
      }

      if (this.options.className) {
        addClass(img, this.options.className);
      }

      img.onselectstart = falseFn;
      img.onmousemove = falseFn; // @event load: Event
      // Fired when the ImageOverlay layer has loaded its image

      img.onload = bind(this.fire, this, 'load');
      img.onerror = bind(this._overlayOnError, this, 'error');

      if (this.options.crossOrigin || this.options.crossOrigin === '') {
        img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
      }

      if (this.options.zIndex) {
        this._updateZIndex();
      }

      if (wasElementSupplied) {
        this._url = img.src;
        return;
      }

      img.src = this._url;
      img.alt = this.options.alt;
    },
    _animateZoom: function (e) {
      var scale = this._map.getZoomScale(e.zoom),
          offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

      setTransform(this._image, offset, scale);
    },
    _reset: function () {
      var image = this._image,
          bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          size = bounds.getSize();
      setPosition(image, bounds.min);
      image.style.width = size.x + 'px';
      image.style.height = size.y + 'px';
    },
    _updateOpacity: function () {
      setOpacity(this._image, this.options.opacity);
    },
    _updateZIndex: function () {
      if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._image.style.zIndex = this.options.zIndex;
      }
    },
    _overlayOnError: function () {
      // @event error: Event
      // Fired when the ImageOverlay layer fails to load its image
      this.fire('error');
      var errorUrl = this.options.errorOverlayUrl;

      if (errorUrl && this._url !== errorUrl) {
        this._url = errorUrl;
        this._image.src = errorUrl;
      }
    }
  }); // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
  // Instantiates an image overlay object given the URL of the image and the
  // geographical bounds it is tied to.

  var imageOverlay = function (url, bounds, options) {
    return new ImageOverlay(url, bounds, options);
  };
  /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */


  var VideoOverlay = ImageOverlay.extend({
    // @section
    // @aka VideoOverlay options
    options: {
      // @option autoplay: Boolean = true
      // Whether the video starts playing automatically when loaded.
      autoplay: true,
      // @option loop: Boolean = true
      // Whether the video will loop back to the beginning when played.
      loop: true,
      // @option keepAspectRatio: Boolean = true
      // Whether the video will save aspect ratio after the projection.
      // Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
      keepAspectRatio: true,
      // @option muted: Boolean = false
      // Whether the video starts on mute when loaded.
      muted: false
    },
    _initImage: function () {
      var wasElementSupplied = this._url.tagName === 'VIDEO';
      var vid = this._image = wasElementSupplied ? this._url : create$1('video');
      addClass(vid, 'leaflet-image-layer');

      if (this._zoomAnimated) {
        addClass(vid, 'leaflet-zoom-animated');
      }

      if (this.options.className) {
        addClass(vid, this.options.className);
      }

      vid.onselectstart = falseFn;
      vid.onmousemove = falseFn; // @event load: Event
      // Fired when the video has finished loading the first frame

      vid.onloadeddata = bind(this.fire, this, 'load');

      if (wasElementSupplied) {
        var sourceElements = vid.getElementsByTagName('source');
        var sources = [];

        for (var j = 0; j < sourceElements.length; j++) {
          sources.push(sourceElements[j].src);
        }

        this._url = sourceElements.length > 0 ? sources : [vid.src];
        return;
      }

      if (!isArray(this._url)) {
        this._url = [this._url];
      }

      if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, 'objectFit')) {
        vid.style['objectFit'] = 'fill';
      }

      vid.autoplay = !!this.options.autoplay;
      vid.loop = !!this.options.loop;
      vid.muted = !!this.options.muted;

      for (var i = 0; i < this._url.length; i++) {
        var source = create$1('source');
        source.src = this._url[i];
        vid.appendChild(source);
      }
    } // @method getElement(): HTMLVideoElement
    // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
    // used by this overlay.

  }); // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
  // geographical bounds it is tied to.

  function videoOverlay(video, bounds, options) {
    return new VideoOverlay(video, bounds, options);
  }
  /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */


  var SVGOverlay = ImageOverlay.extend({
    _initImage: function () {
      var el = this._image = this._url;
      addClass(el, 'leaflet-image-layer');

      if (this._zoomAnimated) {
        addClass(el, 'leaflet-zoom-animated');
      }

      if (this.options.className) {
        addClass(el, this.options.className);
      }

      el.onselectstart = falseFn;
      el.onmousemove = falseFn;
    } // @method getElement(): SVGElement
    // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
    // used by this overlay.

  }); // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
  // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
  // A viewBox attribute is required on the SVG element to zoom in and out properly.

  function svgOverlay(el, bounds, options) {
    return new SVGOverlay(el, bounds, options);
  }
  /*
   * @class DivOverlay
   * @inherits Layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
   */
  // @namespace DivOverlay


  var DivOverlay = Layer.extend({
    // @section
    // @aka DivOverlay options
    options: {
      // @option offset: Point = Point(0, 7)
      // The offset of the popup position. Useful to control the anchor
      // of the popup when opening it on some overlays.
      offset: [0, 7],
      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: '',
      // @option pane: String = 'popupPane'
      // `Map pane` where the popup will be added.
      pane: 'popupPane'
    },
    initialize: function (options, source) {
      setOptions(this, options);
      this._source = source;
    },
    onAdd: function (map) {
      this._zoomAnimated = map._zoomAnimated;

      if (!this._container) {
        this._initLayout();
      }

      if (map._fadeAnimated) {
        setOpacity(this._container, 0);
      }

      clearTimeout(this._removeTimeout);
      this.getPane().appendChild(this._container);
      this.update();

      if (map._fadeAnimated) {
        setOpacity(this._container, 1);
      }

      this.bringToFront();
    },
    onRemove: function (map) {
      if (map._fadeAnimated) {
        setOpacity(this._container, 0);
        this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
      } else {
        remove(this._container);
      }
    },
    // @namespace Popup
    // @method getLatLng: LatLng
    // Returns the geographical point of popup.
    getLatLng: function () {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Sets the geographical point where the popup will open.
    setLatLng: function (latlng) {
      this._latlng = toLatLng(latlng);

      if (this._map) {
        this._updatePosition();

        this._adjustPan();
      }

      return this;
    },
    // @method getContent: String|HTMLElement
    // Returns the content of the popup.
    getContent: function () {
      return this._content;
    },
    // @method setContent(htmlContent: String|HTMLElement|Function): this
    // Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
    setContent: function (content) {
      this._content = content;
      this.update();
      return this;
    },
    // @method getElement: String|HTMLElement
    // Returns the HTML container of the popup.
    getElement: function () {
      return this._container;
    },
    // @method update: null
    // Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
    update: function () {
      if (!this._map) {
        return;
      }

      this._container.style.visibility = 'hidden';

      this._updateContent();

      this._updateLayout();

      this._updatePosition();

      this._container.style.visibility = '';

      this._adjustPan();
    },
    getEvents: function () {
      var events = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @method isOpen: Boolean
    // Returns `true` when the popup is visible on the map.
    isOpen: function () {
      return !!this._map && this._map.hasLayer(this);
    },
    // @method bringToFront: this
    // Brings this popup in front of other popups (in the same map pane).
    bringToFront: function () {
      if (this._map) {
        toFront(this._container);
      }

      return this;
    },
    // @method bringToBack: this
    // Brings this popup to the back of other popups (in the same map pane).
    bringToBack: function () {
      if (this._map) {
        toBack(this._container);
      }

      return this;
    },
    _prepareOpen: function (parent, layer, latlng) {
      if (!(layer instanceof Layer)) {
        latlng = layer;
        layer = parent;
      }

      if (layer instanceof FeatureGroup) {
        for (var id in parent._layers) {
          layer = parent._layers[id];
          break;
        }
      }

      if (!latlng) {
        if (layer.getCenter) {
          latlng = layer.getCenter();
        } else if (layer.getLatLng) {
          latlng = layer.getLatLng();
        } else {
          throw new Error('Unable to get source layer LatLng.');
        }
      } // set overlay source to this layer


      this._source = layer; // update the overlay (content, layout, ect...)

      this.update();
      return latlng;
    },
    _updateContent: function () {
      if (!this._content) {
        return;
      }

      var node = this._contentNode;
      var content = typeof this._content === 'function' ? this._content(this._source || this) : this._content;

      if (typeof content === 'string') {
        node.innerHTML = content;
      } else {
        while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
        }

        node.appendChild(content);
      }

      this.fire('contentupdate');
    },
    _updatePosition: function () {
      if (!this._map) {
        return;
      }

      var pos = this._map.latLngToLayerPoint(this._latlng),
          offset = toPoint(this.options.offset),
          anchor = this._getAnchor();

      if (this._zoomAnimated) {
        setPosition(this._container, pos.add(anchor));
      } else {
        offset = offset.add(pos).add(anchor);
      }

      var bottom = this._containerBottom = -offset.y,
          left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x; // bottom position the popup in case the height of the popup changes (images loading etc)

      this._container.style.bottom = bottom + 'px';
      this._container.style.left = left + 'px';
    },
    _getAnchor: function () {
      return [0, 0];
    }
  });
  /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   * Here's a more complicated way to open a popup on a map:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */
  // @namespace Popup

  var Popup = DivOverlay.extend({
    // @section
    // @aka Popup options
    options: {
      // @option maxWidth: Number = 300
      // Max width of the popup, in pixels.
      maxWidth: 300,
      // @option minWidth: Number = 50
      // Min width of the popup, in pixels.
      minWidth: 50,
      // @option maxHeight: Number = null
      // If set, creates a scrollable container of the given height
      // inside a popup if its content exceeds it.
      maxHeight: null,
      // @option autoPan: Boolean = true
      // Set it to `false` if you don't want the map to do panning animation
      // to fit the opened popup.
      autoPan: true,
      // @option autoPanPaddingTopLeft: Point = null
      // The margin between the popup and the top left corner of the map
      // view after autopanning was performed.
      autoPanPaddingTopLeft: null,
      // @option autoPanPaddingBottomRight: Point = null
      // The margin between the popup and the bottom right corner of the map
      // view after autopanning was performed.
      autoPanPaddingBottomRight: null,
      // @option autoPanPadding: Point = Point(5, 5)
      // Equivalent of setting both top left and bottom right autopan padding to the same value.
      autoPanPadding: [5, 5],
      // @option keepInView: Boolean = false
      // Set it to `true` if you want to prevent users from panning the popup
      // off of the screen while it is open.
      keepInView: false,
      // @option closeButton: Boolean = true
      // Controls the presence of a close button in the popup.
      closeButton: true,
      // @option autoClose: Boolean = true
      // Set it to `false` if you want to override the default behavior of
      // the popup closing when another popup is opened.
      autoClose: true,
      // @option closeOnEscapeKey: Boolean = true
      // Set it to `false` if you want to override the default behavior of
      // the ESC key for closing of the popup.
      closeOnEscapeKey: true,
      // @option closeOnClick: Boolean = *
      // Set it if you want to override the default behavior of the popup closing when user clicks
      // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: ''
    },
    // @namespace Popup
    // @method openOn(map: Map): this
    // Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
    openOn: function (map) {
      map.openPopup(this);
      return this;
    },
    onAdd: function (map) {
      DivOverlay.prototype.onAdd.call(this, map); // @namespace Map
      // @section Popup events
      // @event popupopen: PopupEvent
      // Fired when a popup is opened in the map

      map.fire('popupopen', {
        popup: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupopen: PopupEvent
        // Fired when a popup bound to this layer is opened
        this._source.fire('popupopen', {
          popup: this
        }, true); // For non-path layers, we toggle the popup when clicking
        // again the layer, so prevent the map to reopen it.


        if (!(this._source instanceof Path)) {
          this._source.on('preclick', stopPropagation);
        }
      }
    },
    onRemove: function (map) {
      DivOverlay.prototype.onRemove.call(this, map); // @namespace Map
      // @section Popup events
      // @event popupclose: PopupEvent
      // Fired when a popup in the map is closed

      map.fire('popupclose', {
        popup: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupclose: PopupEvent
        // Fired when a popup bound to this layer is closed
        this._source.fire('popupclose', {
          popup: this
        }, true);

        if (!(this._source instanceof Path)) {
          this._source.off('preclick', stopPropagation);
        }
      }
    },
    getEvents: function () {
      var events = DivOverlay.prototype.getEvents.call(this);

      if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
        events.preclick = this._close;
      }

      if (this.options.keepInView) {
        events.moveend = this._adjustPan;
      }

      return events;
    },
    _close: function () {
      if (this._map) {
        this._map.closePopup(this);
      }
    },
    _initLayout: function () {
      var prefix = 'leaflet-popup',
          container = this._container = create$1('div', prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-animated');
      var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
      this._contentNode = create$1('div', prefix + '-content', wrapper);
      disableClickPropagation(container);
      disableScrollPropagation(this._contentNode);
      on(container, 'contextmenu', stopPropagation);
      this._tipContainer = create$1('div', prefix + '-tip-container', container);
      this._tip = create$1('div', prefix + '-tip', this._tipContainer);

      if (this.options.closeButton) {
        var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
        closeButton.href = '#close';
        closeButton.innerHTML = '&#215;';
        on(closeButton, 'click', this._onCloseButtonClick, this);
      }
    },
    _updateLayout: function () {
      var container = this._contentNode,
          style = container.style;
      style.width = '';
      style.whiteSpace = 'nowrap';
      var width = container.offsetWidth;
      width = Math.min(width, this.options.maxWidth);
      width = Math.max(width, this.options.minWidth);
      style.width = width + 1 + 'px';
      style.whiteSpace = '';
      style.height = '';
      var height = container.offsetHeight,
          maxHeight = this.options.maxHeight,
          scrolledClass = 'leaflet-popup-scrolled';

      if (maxHeight && height > maxHeight) {
        style.height = maxHeight + 'px';
        addClass(container, scrolledClass);
      } else {
        removeClass(container, scrolledClass);
      }

      this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function (e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
          anchor = this._getAnchor();

      setPosition(this._container, pos.add(anchor));
    },
    _adjustPan: function () {
      if (!this.options.autoPan) {
        return;
      }

      if (this._map._panAnim) {
        this._map._panAnim.stop();
      }

      var map = this._map,
          marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
          containerHeight = this._container.offsetHeight + marginBottom,
          containerWidth = this._containerWidth,
          layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

      layerPos._add(getPosition(this._container));

      var containerPos = map.layerPointToContainerPoint(layerPos),
          padding = toPoint(this.options.autoPanPadding),
          paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
          paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
          size = map.getSize(),
          dx = 0,
          dy = 0;

      if (containerPos.x + containerWidth + paddingBR.x > size.x) {
        // right
        dx = containerPos.x + containerWidth - size.x + paddingBR.x;
      }

      if (containerPos.x - dx - paddingTL.x < 0) {
        // left
        dx = containerPos.x - paddingTL.x;
      }

      if (containerPos.y + containerHeight + paddingBR.y > size.y) {
        // bottom
        dy = containerPos.y + containerHeight - size.y + paddingBR.y;
      }

      if (containerPos.y - dy - paddingTL.y < 0) {
        // top
        dy = containerPos.y - paddingTL.y;
      } // @namespace Map
      // @section Popup events
      // @event autopanstart: Event
      // Fired when the map starts autopanning when opening a popup.


      if (dx || dy) {
        map.fire('autopanstart').panBy([dx, dy]);
      }
    },
    _onCloseButtonClick: function (e) {
      this._close();

      stop(e);
    },
    _getAnchor: function () {
      // Where should we anchor the popup on the source layer?
      return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  }); // @namespace Popup
  // @factory L.popup(options?: Popup options, source?: Layer)
  // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.

  var popup = function (options, source) {
    return new Popup(options, source);
  };
  /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */


  Map.mergeOptions({
    closePopupOnClick: true
  }); // @namespace Map
  // @section Methods for Layers and Controls

  Map.include({
    // @method openPopup(popup: Popup): this
    // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
    // @alternative
    // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
    // Creates a popup with the specified content and options and opens it in the given point on a map.
    openPopup: function (popup, latlng, options) {
      if (!(popup instanceof Popup)) {
        popup = new Popup(options).setContent(popup);
      }

      if (latlng) {
        popup.setLatLng(latlng);
      }

      if (this.hasLayer(popup)) {
        return this;
      }

      if (this._popup && this._popup.options.autoClose) {
        this.closePopup();
      }

      this._popup = popup;
      return this.addLayer(popup);
    },
    // @method closePopup(popup?: Popup): this
    // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
    closePopup: function (popup) {
      if (!popup || popup === this._popup) {
        popup = this._popup;
        this._popup = null;
      }

      if (popup) {
        this.removeLayer(popup);
      }

      return this;
    }
  });
  /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */
  // @section Popup methods

  Layer.include({
    // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
    // Binds a popup to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindPopup: function (content, options) {
      if (content instanceof Popup) {
        setOptions(content, options);
        this._popup = content;
        content._source = this;
      } else {
        if (!this._popup || options) {
          this._popup = new Popup(options, this);
        }

        this._popup.setContent(content);
      }

      if (!this._popupHandlersAdded) {
        this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = true;
      }

      return this;
    },
    // @method unbindPopup(): this
    // Removes the popup previously bound with `bindPopup`.
    unbindPopup: function () {
      if (this._popup) {
        this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = false;
        this._popup = null;
      }

      return this;
    },
    // @method openPopup(latlng?: LatLng): this
    // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
    openPopup: function (layer, latlng) {
      if (this._popup && this._map) {
        latlng = this._popup._prepareOpen(this, layer, latlng); // open the popup on the map

        this._map.openPopup(this._popup, latlng);
      }

      return this;
    },
    // @method closePopup(): this
    // Closes the popup bound to this layer if it is open.
    closePopup: function () {
      if (this._popup) {
        this._popup._close();
      }

      return this;
    },
    // @method togglePopup(): this
    // Opens or closes the popup bound to this layer depending on its current state.
    togglePopup: function (target) {
      if (this._popup) {
        if (this._popup._map) {
          this.closePopup();
        } else {
          this.openPopup(target);
        }
      }

      return this;
    },
    // @method isPopupOpen(): boolean
    // Returns `true` if the popup bound to this layer is currently open.
    isPopupOpen: function () {
      return this._popup ? this._popup.isOpen() : false;
    },
    // @method setPopupContent(content: String|HTMLElement|Popup): this
    // Sets the content of the popup bound to this layer.
    setPopupContent: function (content) {
      if (this._popup) {
        this._popup.setContent(content);
      }

      return this;
    },
    // @method getPopup(): Popup
    // Returns the popup bound to this layer.
    getPopup: function () {
      return this._popup;
    },
    _openPopup: function (e) {
      var layer = e.layer || e.target;

      if (!this._popup) {
        return;
      }

      if (!this._map) {
        return;
      } // prevent map click


      stop(e); // if this inherits from Path its a vector and we can just
      // open the popup at the new location

      if (layer instanceof Path) {
        this.openPopup(e.layer || e.target, e.latlng);
        return;
      } // otherwise treat it like a marker and figure out
      // if we should toggle it open/closed


      if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
        this.closePopup();
      } else {
        this.openPopup(layer, e.latlng);
      }
    },
    _movePopup: function (e) {
      this._popup.setLatLng(e.latlng);
    },
    _onKeyPress: function (e) {
      if (e.originalEvent.keyCode === 13) {
        this._openPopup(e);
      }
    }
  });
  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */
  // @namespace Tooltip

  var Tooltip = DivOverlay.extend({
    // @section
    // @aka Tooltip options
    options: {
      // @option pane: String = 'tooltipPane'
      // `Map pane` where the tooltip will be added.
      pane: 'tooltipPane',
      // @option offset: Point = Point(0, 0)
      // Optional offset of the tooltip position.
      offset: [0, 0],
      // @option direction: String = 'auto'
      // Direction where to open the tooltip. Possible values are: `right`, `left`,
      // `top`, `bottom`, `center`, `auto`.
      // `auto` will dynamically switch between `right` and `left` according to the tooltip
      // position on the map.
      direction: 'auto',
      // @option permanent: Boolean = false
      // Whether to open the tooltip permanently or only on mouseover.
      permanent: false,
      // @option sticky: Boolean = false
      // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
      sticky: false,
      // @option interactive: Boolean = false
      // If true, the tooltip will listen to the feature events.
      interactive: false,
      // @option opacity: Number = 0.9
      // Tooltip container opacity.
      opacity: 0.9
    },
    onAdd: function (map) {
      DivOverlay.prototype.onAdd.call(this, map);
      this.setOpacity(this.options.opacity); // @namespace Map
      // @section Tooltip events
      // @event tooltipopen: TooltipEvent
      // Fired when a tooltip is opened in the map.

      map.fire('tooltipopen', {
        tooltip: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipopen: TooltipEvent
        // Fired when a tooltip bound to this layer is opened.
        this._source.fire('tooltipopen', {
          tooltip: this
        }, true);
      }
    },
    onRemove: function (map) {
      DivOverlay.prototype.onRemove.call(this, map); // @namespace Map
      // @section Tooltip events
      // @event tooltipclose: TooltipEvent
      // Fired when a tooltip in the map is closed.

      map.fire('tooltipclose', {
        tooltip: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipclose: TooltipEvent
        // Fired when a tooltip bound to this layer is closed.
        this._source.fire('tooltipclose', {
          tooltip: this
        }, true);
      }
    },
    getEvents: function () {
      var events = DivOverlay.prototype.getEvents.call(this);

      if (touch && !this.options.permanent) {
        events.preclick = this._close;
      }

      return events;
    },
    _close: function () {
      if (this._map) {
        this._map.closeTooltip(this);
      }
    },
    _initLayout: function () {
      var prefix = 'leaflet-tooltip',
          className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = create$1('div', className);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (pos) {
      var subX,
          subY,
          map = this._map,
          container = this._container,
          centerPoint = map.latLngToContainerPoint(map.getCenter()),
          tooltipPoint = map.layerPointToContainerPoint(pos),
          direction = this.options.direction,
          tooltipWidth = container.offsetWidth,
          tooltipHeight = container.offsetHeight,
          offset = toPoint(this.options.offset),
          anchor = this._getAnchor();

      if (direction === 'top') {
        subX = tooltipWidth / 2;
        subY = tooltipHeight;
      } else if (direction === 'bottom') {
        subX = tooltipWidth / 2;
        subY = 0;
      } else if (direction === 'center') {
        subX = tooltipWidth / 2;
        subY = tooltipHeight / 2;
      } else if (direction === 'right') {
        subX = 0;
        subY = tooltipHeight / 2;
      } else if (direction === 'left') {
        subX = tooltipWidth;
        subY = tooltipHeight / 2;
      } else if (tooltipPoint.x < centerPoint.x) {
        direction = 'right';
        subX = 0;
        subY = tooltipHeight / 2;
      } else {
        direction = 'left';
        subX = tooltipWidth + (offset.x + anchor.x) * 2;
        subY = tooltipHeight / 2;
      }

      pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
      removeClass(container, 'leaflet-tooltip-right');
      removeClass(container, 'leaflet-tooltip-left');
      removeClass(container, 'leaflet-tooltip-top');
      removeClass(container, 'leaflet-tooltip-bottom');
      addClass(container, 'leaflet-tooltip-' + direction);
      setPosition(container, pos);
    },
    _updatePosition: function () {
      var pos = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(pos);
    },
    setOpacity: function (opacity) {
      this.options.opacity = opacity;

      if (this._container) {
        setOpacity(this._container, opacity);
      }
    },
    _animateZoom: function (e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);

      this._setPosition(pos);
    },
    _getAnchor: function () {
      // Where should we anchor the tooltip on the source layer?
      return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  }); // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.

  var tooltip = function (options, source) {
    return new Tooltip(options, source);
  }; // @namespace Map
  // @section Methods for Layers and Controls


  Map.include({
    // @method openTooltip(tooltip: Tooltip): this
    // Opens the specified tooltip.
    // @alternative
    // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
    // Creates a tooltip with the specified content and options and open it.
    openTooltip: function (tooltip, latlng, options) {
      if (!(tooltip instanceof Tooltip)) {
        tooltip = new Tooltip(options).setContent(tooltip);
      }

      if (latlng) {
        tooltip.setLatLng(latlng);
      }

      if (this.hasLayer(tooltip)) {
        return this;
      }

      return this.addLayer(tooltip);
    },
    // @method closeTooltip(tooltip?: Tooltip): this
    // Closes the tooltip given as parameter.
    closeTooltip: function (tooltip) {
      if (tooltip) {
        this.removeLayer(tooltip);
      }

      return this;
    }
  });
  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */
  // @section Tooltip methods

  Layer.include({
    // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
    // Binds a tooltip to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindTooltip: function (content, options) {
      if (content instanceof Tooltip) {
        setOptions(content, options);
        this._tooltip = content;
        content._source = this;
      } else {
        if (!this._tooltip || options) {
          this._tooltip = new Tooltip(options, this);
        }

        this._tooltip.setContent(content);
      }

      this._initTooltipInteractions();

      if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
        this.openTooltip();
      }

      return this;
    },
    // @method unbindTooltip(): this
    // Removes the tooltip previously bound with `bindTooltip`.
    unbindTooltip: function () {
      if (this._tooltip) {
        this._initTooltipInteractions(true);

        this.closeTooltip();
        this._tooltip = null;
      }

      return this;
    },
    _initTooltipInteractions: function (remove$$1) {
      if (!remove$$1 && this._tooltipHandlersAdded) {
        return;
      }

      var onOff = remove$$1 ? 'off' : 'on',
          events = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      };

      if (!this._tooltip.options.permanent) {
        events.mouseover = this._openTooltip;
        events.mouseout = this.closeTooltip;

        if (this._tooltip.options.sticky) {
          events.mousemove = this._moveTooltip;
        }

        if (touch) {
          events.click = this._openTooltip;
        }
      } else {
        events.add = this._openTooltip;
      }

      this[onOff](events);
      this._tooltipHandlersAdded = !remove$$1;
    },
    // @method openTooltip(latlng?: LatLng): this
    // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
    openTooltip: function (layer, latlng) {
      if (this._tooltip && this._map) {
        latlng = this._tooltip._prepareOpen(this, layer, latlng); // open the tooltip on the map

        this._map.openTooltip(this._tooltip, latlng); // Tooltip container may not be defined if not permanent and never
        // opened.


        if (this._tooltip.options.interactive && this._tooltip._container) {
          addClass(this._tooltip._container, 'leaflet-clickable');
          this.addInteractiveTarget(this._tooltip._container);
        }
      }

      return this;
    },
    // @method closeTooltip(): this
    // Closes the tooltip bound to this layer if it is open.
    closeTooltip: function () {
      if (this._tooltip) {
        this._tooltip._close();

        if (this._tooltip.options.interactive && this._tooltip._container) {
          removeClass(this._tooltip._container, 'leaflet-clickable');
          this.removeInteractiveTarget(this._tooltip._container);
        }
      }

      return this;
    },
    // @method toggleTooltip(): this
    // Opens or closes the tooltip bound to this layer depending on its current state.
    toggleTooltip: function (target) {
      if (this._tooltip) {
        if (this._tooltip._map) {
          this.closeTooltip();
        } else {
          this.openTooltip(target);
        }
      }

      return this;
    },
    // @method isTooltipOpen(): boolean
    // Returns `true` if the tooltip bound to this layer is currently open.
    isTooltipOpen: function () {
      return this._tooltip.isOpen();
    },
    // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
    // Sets the content of the tooltip bound to this layer.
    setTooltipContent: function (content) {
      if (this._tooltip) {
        this._tooltip.setContent(content);
      }

      return this;
    },
    // @method getTooltip(): Tooltip
    // Returns the tooltip bound to this layer.
    getTooltip: function () {
      return this._tooltip;
    },
    _openTooltip: function (e) {
      var layer = e.layer || e.target;

      if (!this._tooltip || !this._map) {
        return;
      }

      this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
    },
    _moveTooltip: function (e) {
      var latlng = e.latlng,
          containerPoint,
          layerPoint;

      if (this._tooltip.options.sticky && e.originalEvent) {
        containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
        layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        latlng = this._map.layerPointToLatLng(layerPoint);
      }

      this._tooltip.setLatLng(latlng);
    }
  });
  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
    options: {
      // @section
      // @aka DivIcon options
      iconSize: [12, 12],
      // also can be set through CSS
      // iconAnchor: (Point),
      // popupAnchor: (Point),
      // @option html: String|HTMLElement = ''
      // Custom HTML code to put inside the div element, empty by default. Alternatively,
      // an instance of `HTMLElement`.
      html: false,
      // @option bgPos: Point = [0, 0]
      // Optional relative position of the background, in pixels
      bgPos: null,
      className: 'leaflet-div-icon'
    },
    createIcon: function (oldIcon) {
      var div = oldIcon && oldIcon.tagName === 'DIV' ? oldIcon : document.createElement('div'),
          options = this.options;

      if (options.html instanceof Element) {
        empty(div);
        div.appendChild(options.html);
      } else {
        div.innerHTML = options.html !== false ? options.html : '';
      }

      if (options.bgPos) {
        var bgPos = toPoint(options.bgPos);
        div.style.backgroundPosition = -bgPos.x + 'px ' + -bgPos.y + 'px';
      }

      this._setIconStyles(div, 'icon');

      return div;
    },
    createShadow: function () {
      return null;
    }
  }); // @factory L.divIcon(options: DivIcon options)
  // Creates a `DivIcon` instance with the given options.

  function divIcon(options) {
    return new DivIcon(options);
  }

  Icon.Default = IconDefault;
  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */

  var GridLayer = Layer.extend({
    // @section
    // @aka GridLayer options
    options: {
      // @option tileSize: Number|Point = 256
      // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
      tileSize: 256,
      // @option opacity: Number = 1.0
      // Opacity of the tiles. Can be used in the `createTile()` function.
      opacity: 1,
      // @option updateWhenIdle: Boolean = (depends)
      // Load new tiles only when panning ends.
      // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
      // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
      // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
      updateWhenIdle: mobile,
      // @option updateWhenZooming: Boolean = true
      // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
      updateWhenZooming: true,
      // @option updateInterval: Number = 200
      // Tiles will not update more than once every `updateInterval` milliseconds when panning.
      updateInterval: 200,
      // @option zIndex: Number = 1
      // The explicit zIndex of the tile layer.
      zIndex: 1,
      // @option bounds: LatLngBounds = undefined
      // If set, tiles will only be loaded inside the set `LatLngBounds`.
      bounds: null,
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = undefined
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: undefined,
      // @option maxNativeZoom: Number = undefined
      // Maximum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
      // from `maxNativeZoom` level and auto-scaled.
      maxNativeZoom: undefined,
      // @option minNativeZoom: Number = undefined
      // Minimum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
      // from `minNativeZoom` level and auto-scaled.
      minNativeZoom: undefined,
      // @option noWrap: Boolean = false
      // Whether the layer is wrapped around the antimeridian. If `true`, the
      // GridLayer will only be displayed once at low zoom levels. Has no
      // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
      // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
      // tiles outside the CRS limits.
      noWrap: false,
      // @option pane: String = 'tilePane'
      // `Map pane` where the grid layer will be added.
      pane: 'tilePane',
      // @option className: String = ''
      // A custom class name to assign to the tile layer. Empty by default.
      className: '',
      // @option keepBuffer: Number = 2
      // When panning the map, keep this many rows and columns of tiles before unloading them.
      keepBuffer: 2
    },
    initialize: function (options) {
      setOptions(this, options);
    },
    onAdd: function () {
      this._initContainer();

      this._levels = {};
      this._tiles = {};

      this._resetView();

      this._update();
    },
    beforeAdd: function (map) {
      map._addZoomLimit(this);
    },
    onRemove: function (map) {
      this._removeAllTiles();

      remove(this._container);

      map._removeZoomLimit(this);

      this._container = null;
      this._tileZoom = undefined;
    },
    // @method bringToFront: this
    // Brings the tile layer to the top of all tile layers.
    bringToFront: function () {
      if (this._map) {
        toFront(this._container);

        this._setAutoZIndex(Math.max);
      }

      return this;
    },
    // @method bringToBack: this
    // Brings the tile layer to the bottom of all tile layers.
    bringToBack: function () {
      if (this._map) {
        toBack(this._container);

        this._setAutoZIndex(Math.min);
      }

      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the tiles for this layer.
    getContainer: function () {
      return this._container;
    },
    // @method setOpacity(opacity: Number): this
    // Changes the [opacity](#gridlayer-opacity) of the grid layer.
    setOpacity: function (opacity) {
      this.options.opacity = opacity;

      this._updateOpacity();

      return this;
    },
    // @method setZIndex(zIndex: Number): this
    // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
    setZIndex: function (zIndex) {
      this.options.zIndex = zIndex;

      this._updateZIndex();

      return this;
    },
    // @method isLoading: Boolean
    // Returns `true` if any tile in the grid layer has not finished loading.
    isLoading: function () {
      return this._loading;
    },
    // @method redraw: this
    // Causes the layer to clear all the tiles and request them again.
    redraw: function () {
      if (this._map) {
        this._removeAllTiles();

        this._update();
      }

      return this;
    },
    getEvents: function () {
      var events = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };

      if (!this.options.updateWhenIdle) {
        // update tiles on move, but not more often than once per given interval
        if (!this._onMove) {
          this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
        }

        events.move = this._onMove;
      }

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @section Extension methods
    // Layers extending `GridLayer` shall reimplement the following method.
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, must be overridden by classes extending `GridLayer`.
    // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
    // is specified, it must be called when the tile has finished loading and drawing.
    createTile: function () {
      return document.createElement('div');
    },
    // @section
    // @method getTileSize: Point
    // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
    getTileSize: function () {
      var s = this.options.tileSize;
      return s instanceof Point ? s : new Point(s, s);
    },
    _updateZIndex: function () {
      if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._container.style.zIndex = this.options.zIndex;
      }
    },
    _setAutoZIndex: function (compare) {
      // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
      var layers = this.getPane().children,
          edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

      for (var i = 0, len = layers.length, zIndex; i < len; i++) {
        zIndex = layers[i].style.zIndex;

        if (layers[i] !== this._container && zIndex) {
          edgeZIndex = compare(edgeZIndex, +zIndex);
        }
      }

      if (isFinite(edgeZIndex)) {
        this.options.zIndex = edgeZIndex + compare(-1, 1);

        this._updateZIndex();
      }
    },
    _updateOpacity: function () {
      if (!this._map) {
        return;
      } // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles


      if (ielt9) {
        return;
      }

      setOpacity(this._container, this.options.opacity);
      var now = +new Date(),
          nextFrame = false,
          willPrune = false;

      for (var key in this._tiles) {
        var tile = this._tiles[key];

        if (!tile.current || !tile.loaded) {
          continue;
        }

        var fade = Math.min(1, (now - tile.loaded) / 200);
        setOpacity(tile.el, fade);

        if (fade < 1) {
          nextFrame = true;
        } else {
          if (tile.active) {
            willPrune = true;
          } else {
            this._onOpaqueTile(tile);
          }

          tile.active = true;
        }
      }

      if (willPrune && !this._noPrune) {
        this._pruneTiles();
      }

      if (nextFrame) {
        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      }
    },
    _onOpaqueTile: falseFn,
    _initContainer: function () {
      if (this._container) {
        return;
      }

      this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));

      this._updateZIndex();

      if (this.options.opacity < 1) {
        this._updateOpacity();
      }

      this.getPane().appendChild(this._container);
    },
    _updateLevels: function () {
      var zoom = this._tileZoom,
          maxZoom = this.options.maxZoom;

      if (zoom === undefined) {
        return undefined;
      }

      for (var z in this._levels) {
        z = Number(z);

        if (this._levels[z].el.children.length || z === zoom) {
          this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);

          this._onUpdateLevel(z);
        } else {
          remove(this._levels[z].el);

          this._removeTilesAtZoom(z);

          this._onRemoveLevel(z);

          delete this._levels[z];
        }
      }

      var level = this._levels[zoom],
          map = this._map;

      if (!level) {
        level = this._levels[zoom] = {};
        level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
        level.el.style.zIndex = maxZoom;
        level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
        level.zoom = zoom;

        this._setZoomTransform(level, map.getCenter(), map.getZoom()); // force the browser to consider the newly added element for transition


        falseFn(level.el.offsetWidth);

        this._onCreateLevel(level);
      }

      this._level = level;
      return level;
    },
    _onUpdateLevel: falseFn,
    _onRemoveLevel: falseFn,
    _onCreateLevel: falseFn,
    _pruneTiles: function () {
      if (!this._map) {
        return;
      }

      var key, tile;

      var zoom = this._map.getZoom();

      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        this._removeAllTiles();

        return;
      }

      for (key in this._tiles) {
        tile = this._tiles[key];
        tile.retain = tile.current;
      }

      for (key in this._tiles) {
        tile = this._tiles[key];

        if (tile.current && !tile.active) {
          var coords = tile.coords;

          if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
            this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
          }
        }
      }

      for (key in this._tiles) {
        if (!this._tiles[key].retain) {
          this._removeTile(key);
        }
      }
    },
    _removeTilesAtZoom: function (zoom) {
      for (var key in this._tiles) {
        if (this._tiles[key].coords.z !== zoom) {
          continue;
        }

        this._removeTile(key);
      }
    },
    _removeAllTiles: function () {
      for (var key in this._tiles) {
        this._removeTile(key);
      }
    },
    _invalidateAll: function () {
      for (var z in this._levels) {
        remove(this._levels[z].el);

        this._onRemoveLevel(Number(z));

        delete this._levels[z];
      }

      this._removeAllTiles();

      this._tileZoom = undefined;
    },
    _retainParent: function (x, y, z, minZoom) {
      var x2 = Math.floor(x / 2),
          y2 = Math.floor(y / 2),
          z2 = z - 1,
          coords2 = new Point(+x2, +y2);
      coords2.z = +z2;

      var key = this._tileCoordsToKey(coords2),
          tile = this._tiles[key];

      if (tile && tile.active) {
        tile.retain = true;
        return true;
      } else if (tile && tile.loaded) {
        tile.retain = true;
      }

      if (z2 > minZoom) {
        return this._retainParent(x2, y2, z2, minZoom);
      }

      return false;
    },
    _retainChildren: function (x, y, z, maxZoom) {
      for (var i = 2 * x; i < 2 * x + 2; i++) {
        for (var j = 2 * y; j < 2 * y + 2; j++) {
          var coords = new Point(i, j);
          coords.z = z + 1;

          var key = this._tileCoordsToKey(coords),
              tile = this._tiles[key];

          if (tile && tile.active) {
            tile.retain = true;
            continue;
          } else if (tile && tile.loaded) {
            tile.retain = true;
          }

          if (z + 1 < maxZoom) {
            this._retainChildren(i, j, z + 1, maxZoom);
          }
        }
      }
    },
    _resetView: function (e) {
      var animating = e && (e.pinch || e.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
    },
    _animateZoom: function (e) {
      this._setView(e.center, e.zoom, true, e.noUpdate);
    },
    _clampZoom: function (zoom) {
      var options = this.options;

      if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
        return options.minNativeZoom;
      }

      if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
        return options.maxNativeZoom;
      }

      return zoom;
    },
    _setView: function (center, zoom, noPrune, noUpdate) {
      var tileZoom = Math.round(zoom);

      if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) {
        tileZoom = undefined;
      } else {
        tileZoom = this._clampZoom(tileZoom);
      }

      var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;

      if (!noUpdate || tileZoomChanged) {
        this._tileZoom = tileZoom;

        if (this._abortLoading) {
          this._abortLoading();
        }

        this._updateLevels();

        this._resetGrid();

        if (tileZoom !== undefined) {
          this._update(center);
        }

        if (!noPrune) {
          this._pruneTiles();
        } // Flag to prevent _updateOpacity from pruning tiles during
        // a zoom anim or a pinch gesture


        this._noPrune = !!noPrune;
      }

      this._setZoomTransforms(center, zoom);
    },
    _setZoomTransforms: function (center, zoom) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], center, zoom);
      }
    },
    _setZoomTransform: function (level, center, zoom) {
      var scale = this._map.getZoomScale(zoom, level.zoom),
          translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();

      if (any3d) {
        setTransform(level.el, translate, scale);
      } else {
        setPosition(level.el, translate);
      }
    },
    _resetGrid: function () {
      var map = this._map,
          crs = map.options.crs,
          tileSize = this._tileSize = this.getTileSize(),
          tileZoom = this._tileZoom;

      var bounds = this._map.getPixelWorldBounds(this._tileZoom);

      if (bounds) {
        this._globalTileRange = this._pxBoundsToTileRange(bounds);
      }

      this._wrapX = crs.wrapLng && !this.options.noWrap && [Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x), Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)];
      this._wrapY = crs.wrapLat && !this.options.noWrap && [Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x), Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)];
    },
    _onMoveEnd: function () {
      if (!this._map || this._map._animatingZoom) {
        return;
      }

      this._update();
    },
    _getTiledPixelBounds: function (center) {
      var map = this._map,
          mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
          scale = map.getZoomScale(mapZoom, this._tileZoom),
          pixelCenter = map.project(center, this._tileZoom).floor(),
          halfSize = map.getSize().divideBy(scale * 2);
      return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
    },
    // Private method to load tiles in the grid's active zoom level according to map bounds
    _update: function (center) {
      var map = this._map;

      if (!map) {
        return;
      }

      var zoom = this._clampZoom(map.getZoom());

      if (center === undefined) {
        center = map.getCenter();
      }

      if (this._tileZoom === undefined) {
        return;
      } // if out of minzoom/maxzoom


      var pixelBounds = this._getTiledPixelBounds(center),
          tileRange = this._pxBoundsToTileRange(pixelBounds),
          tileCenter = tileRange.getCenter(),
          queue = [],
          margin = this.options.keepBuffer,
          noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]), tileRange.getTopRight().add([margin, -margin])); // Sanity check: panic if the tile range contains Infinity somewhere.


      if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
        throw new Error('Attempted to load an infinite number of tiles');
      }

      for (var key in this._tiles) {
        var c = this._tiles[key].coords;

        if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
          this._tiles[key].current = false;
        }
      } // _update just loads more tiles. If the tile zoom level differs too much
      // from the map's, let _setView reset levels and prune old tiles.


      if (Math.abs(zoom - this._tileZoom) > 1) {
        this._setView(center, zoom);

        return;
      } // create a queue of coordinates to load tiles from


      for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
        for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
          var coords = new Point(i, j);
          coords.z = this._tileZoom;

          if (!this._isValidTile(coords)) {
            continue;
          }

          var tile = this._tiles[this._tileCoordsToKey(coords)];

          if (tile) {
            tile.current = true;
          } else {
            queue.push(coords);
          }
        }
      } // sort tile queue to load tiles in order of their distance to center


      queue.sort(function (a, b) {
        return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
      });

      if (queue.length !== 0) {
        // if it's the first batch of tiles to load
        if (!this._loading) {
          this._loading = true; // @event loading: Event
          // Fired when the grid layer starts loading tiles.

          this.fire('loading');
        } // create DOM fragment to append tiles in one batch


        var fragment = document.createDocumentFragment();

        for (i = 0; i < queue.length; i++) {
          this._addTile(queue[i], fragment);
        }

        this._level.el.appendChild(fragment);
      }
    },
    _isValidTile: function (coords) {
      var crs = this._map.options.crs;

      if (!crs.infinite) {
        // don't load tile if it's out of bounds and not wrapped
        var bounds = this._globalTileRange;

        if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
          return false;
        }
      }

      if (!this.options.bounds) {
        return true;
      } // don't load tile if it doesn't intersect the bounds in options


      var tileBounds = this._tileCoordsToBounds(coords);

      return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
    },
    _keyToBounds: function (key) {
      return this._tileCoordsToBounds(this._keyToTileCoords(key));
    },
    _tileCoordsToNwSe: function (coords) {
      var map = this._map,
          tileSize = this.getTileSize(),
          nwPoint = coords.scaleBy(tileSize),
          sePoint = nwPoint.add(tileSize),
          nw = map.unproject(nwPoint, coords.z),
          se = map.unproject(sePoint, coords.z);
      return [nw, se];
    },
    // converts tile coordinates to its geographical bounds
    _tileCoordsToBounds: function (coords) {
      var bp = this._tileCoordsToNwSe(coords),
          bounds = new LatLngBounds(bp[0], bp[1]);

      if (!this.options.noWrap) {
        bounds = this._map.wrapLatLngBounds(bounds);
      }

      return bounds;
    },
    // converts tile coordinates to key for the tile cache
    _tileCoordsToKey: function (coords) {
      return coords.x + ':' + coords.y + ':' + coords.z;
    },
    // converts tile cache key to coordinates
    _keyToTileCoords: function (key) {
      var k = key.split(':'),
          coords = new Point(+k[0], +k[1]);
      coords.z = +k[2];
      return coords;
    },
    _removeTile: function (key) {
      var tile = this._tiles[key];

      if (!tile) {
        return;
      }

      remove(tile.el);
      delete this._tiles[key]; // @event tileunload: TileEvent
      // Fired when a tile is removed (e.g. when a tile goes off the screen).

      this.fire('tileunload', {
        tile: tile.el,
        coords: this._keyToTileCoords(key)
      });
    },
    _initTile: function (tile) {
      addClass(tile, 'leaflet-tile');
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 'px';
      tile.style.height = tileSize.y + 'px';
      tile.onselectstart = falseFn;
      tile.onmousemove = falseFn; // update opacity on tiles in IE7-8 because of filter inheritance problems

      if (ielt9 && this.options.opacity < 1) {
        setOpacity(tile, this.options.opacity);
      } // without this hack, tiles disappear after zoom on Chrome for Android
      // https://github.com/Leaflet/Leaflet/issues/2078


      if (android && !android23) {
        tile.style.WebkitBackfaceVisibility = 'hidden';
      }
    },
    _addTile: function (coords, container) {
      var tilePos = this._getTilePos(coords),
          key = this._tileCoordsToKey(coords);

      var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

      this._initTile(tile); // if createTile is defined with a second argument ("done" callback),
      // we know that tile is async and will be ready later; otherwise


      if (this.createTile.length < 2) {
        // mark tile as ready, but delay one frame for opacity animation to happen
        requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
      }

      setPosition(tile, tilePos); // save tile in cache

      this._tiles[key] = {
        el: tile,
        coords: coords,
        current: true
      };
      container.appendChild(tile); // @event tileloadstart: TileEvent
      // Fired when a tile is requested and starts loading.

      this.fire('tileloadstart', {
        tile: tile,
        coords: coords
      });
    },
    _tileReady: function (coords, err, tile) {
      if (err) {
        // @event tileerror: TileErrorEvent
        // Fired when there is an error loading a tile.
        this.fire('tileerror', {
          error: err,
          tile: tile,
          coords: coords
        });
      }

      var key = this._tileCoordsToKey(coords);

      tile = this._tiles[key];

      if (!tile) {
        return;
      }

      tile.loaded = +new Date();

      if (this._map._fadeAnimated) {
        setOpacity(tile.el, 0);
        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      } else {
        tile.active = true;

        this._pruneTiles();
      }

      if (!err) {
        addClass(tile.el, 'leaflet-tile-loaded'); // @event tileload: TileEvent
        // Fired when a tile loads.

        this.fire('tileload', {
          tile: tile.el,
          coords: coords
        });
      }

      if (this._noTilesToLoad()) {
        this._loading = false; // @event load: Event
        // Fired when the grid layer loaded all visible tiles.

        this.fire('load');

        if (ielt9 || !this._map._fadeAnimated) {
          requestAnimFrame(this._pruneTiles, this);
        } else {
          // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
          // to trigger a pruning.
          setTimeout(bind(this._pruneTiles, this), 250);
        }
      }
    },
    _getTilePos: function (coords) {
      return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (coords) {
      var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
      newCoords.z = coords.z;
      return newCoords;
    },
    _pxBoundsToTileRange: function (bounds) {
      var tileSize = this.getTileSize();
      return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function () {
      for (var key in this._tiles) {
        if (!this._tiles[key].loaded) {
          return false;
        }
      }

      return true;
    }
  }); // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.

  function gridLayer(options) {
    return new GridLayer(options);
  }
  /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */


  var TileLayer = GridLayer.extend({
    // @section
    // @aka TileLayer options
    options: {
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = 18
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: 18,
      // @option subdomains: String|String[] = 'abc'
      // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
      subdomains: 'abc',
      // @option errorTileUrl: String = ''
      // URL to the tile image to show in place of the tile that failed to load.
      errorTileUrl: '',
      // @option zoomOffset: Number = 0
      // The zoom number used in tile URLs will be offset with this value.
      zoomOffset: 0,
      // @option tms: Boolean = false
      // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
      tms: false,
      // @option zoomReverse: Boolean = false
      // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
      zoomReverse: false,
      // @option detectRetina: Boolean = false
      // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
      detectRetina: false,
      // @option crossOrigin: Boolean|String = false
      // Whether the crossOrigin attribute will be added to the tiles.
      // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
      // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
      crossOrigin: false
    },
    initialize: function (url, options) {
      this._url = url;
      options = setOptions(this, options); // detecting retina displays, adjusting tileSize and zoom levels

      if (options.detectRetina && retina && options.maxZoom > 0) {
        options.tileSize = Math.floor(options.tileSize / 2);

        if (!options.zoomReverse) {
          options.zoomOffset++;
          options.maxZoom--;
        } else {
          options.zoomOffset--;
          options.minZoom++;
        }

        options.minZoom = Math.max(0, options.minZoom);
      }

      if (typeof options.subdomains === 'string') {
        options.subdomains = options.subdomains.split('');
      } // for https://github.com/Leaflet/Leaflet/issues/137


      if (!android) {
        this.on('tileunload', this._onTileRemove);
      }
    },
    // @method setUrl(url: String, noRedraw?: Boolean): this
    // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
    // If the URL does not change, the layer will not be redrawn unless
    // the noRedraw parameter is set to false.
    setUrl: function (url, noRedraw) {
      if (this._url === url && noRedraw === undefined) {
        noRedraw = true;
      }

      this._url = url;

      if (!noRedraw) {
        this.redraw();
      }

      return this;
    },
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
    // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
    // callback is called when the tile has been loaded.
    createTile: function (coords, done) {
      var tile = document.createElement('img');
      on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
      on(tile, 'error', bind(this._tileOnError, this, done, tile));

      if (this.options.crossOrigin || this.options.crossOrigin === '') {
        tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
      }
      /*
       Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
       http://www.w3.org/TR/WCAG20-TECHS/H67
      */


      tile.alt = '';
      /*
       Set role="presentation" to force screen readers to ignore this
       https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
      */

      tile.setAttribute('role', 'presentation');
      tile.src = this.getTileUrl(coords);
      return tile;
    },
    // @section Extension methods
    // @uninheritable
    // Layers extending `TileLayer` might reimplement the following method.
    // @method getTileUrl(coords: Object): String
    // Called only internally, returns the URL for a tile given its coordinates.
    // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
    getTileUrl: function (coords) {
      var data = {
        r: retina ? '@2x' : '',
        s: this._getSubdomain(coords),
        x: coords.x,
        y: coords.y,
        z: this._getZoomForUrl()
      };

      if (this._map && !this._map.options.crs.infinite) {
        var invertedY = this._globalTileRange.max.y - coords.y;

        if (this.options.tms) {
          data['y'] = invertedY;
        }

        data['-y'] = invertedY;
      }

      return template(this._url, extend(data, this.options));
    },
    _tileOnLoad: function (done, tile) {
      // For https://github.com/Leaflet/Leaflet/issues/3332
      if (ielt9) {
        setTimeout(bind(done, this, null, tile), 0);
      } else {
        done(null, tile);
      }
    },
    _tileOnError: function (done, tile, e) {
      var errorUrl = this.options.errorTileUrl;

      if (errorUrl && tile.getAttribute('src') !== errorUrl) {
        tile.src = errorUrl;
      }

      done(e, tile);
    },
    _onTileRemove: function (e) {
      e.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var zoom = this._tileZoom,
          maxZoom = this.options.maxZoom,
          zoomReverse = this.options.zoomReverse,
          zoomOffset = this.options.zoomOffset;

      if (zoomReverse) {
        zoom = maxZoom - zoom;
      }

      return zoom + zoomOffset;
    },
    _getSubdomain: function (tilePoint) {
      var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
      return this.options.subdomains[index];
    },
    // stops loading all tiles in the background layer
    _abortLoading: function () {
      var i, tile;

      for (i in this._tiles) {
        if (this._tiles[i].coords.z !== this._tileZoom) {
          tile = this._tiles[i].el;
          tile.onload = falseFn;
          tile.onerror = falseFn;

          if (!tile.complete) {
            tile.src = emptyImageUrl;
            remove(tile);
            delete this._tiles[i];
          }
        }
      }
    },
    _removeTile: function (key) {
      var tile = this._tiles[key];

      if (!tile) {
        return;
      } // Cancels any pending http requests associated with the tile
      // unless we're on Android's stock browser,
      // see https://github.com/Leaflet/Leaflet/issues/137


      if (!androidStock) {
        tile.el.setAttribute('src', emptyImageUrl);
      }

      return GridLayer.prototype._removeTile.call(this, key);
    },
    _tileReady: function (coords, err, tile) {
      if (!this._map || tile && tile.getAttribute('src') === emptyImageUrl) {
        return;
      }

      return GridLayer.prototype._tileReady.call(this, coords, err, tile);
    }
  }); // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
  // Instantiates a tile layer object given a `URL template` and optionally an options object.

  function tileLayer(url, options) {
    return new TileLayer(url, options);
  }
  /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */


  var TileLayerWMS = TileLayer.extend({
    // @section
    // @aka TileLayer.WMS options
    // If any custom options not documented here are used, they will be sent to the
    // WMS server as extra parameters in each request URL. This can be useful for
    // [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      // @option layers: String = ''
      // **(required)** Comma-separated list of WMS layers to show.
      layers: '',
      // @option styles: String = ''
      // Comma-separated list of WMS styles.
      styles: '',
      // @option format: String = 'image/jpeg'
      // WMS image format (use `'image/png'` for layers with transparency).
      format: 'image/jpeg',
      // @option transparent: Boolean = false
      // If `true`, the WMS service will return images with transparency.
      transparent: false,
      // @option version: String = '1.1.1'
      // Version of the WMS service to use
      version: '1.1.1'
    },
    options: {
      // @option crs: CRS = null
      // Coordinate Reference System to use for the WMS requests, defaults to
      // map CRS. Don't change this if you're not sure what it means.
      crs: null,
      // @option uppercase: Boolean = false
      // If `true`, WMS request parameter keys will be uppercase.
      uppercase: false
    },
    initialize: function (url, options) {
      this._url = url;
      var wmsParams = extend({}, this.defaultWmsParams); // all keys that are not TileLayer options go to WMS params

      for (var i in options) {
        if (!(i in this.options)) {
          wmsParams[i] = options[i];
        }
      }

      options = setOptions(this, options);
      var realRetina = options.detectRetina && retina ? 2 : 1;
      var tileSize = this.getTileSize();
      wmsParams.width = tileSize.x * realRetina;
      wmsParams.height = tileSize.y * realRetina;
      this.wmsParams = wmsParams;
    },
    onAdd: function (map) {
      this._crs = this.options.crs || map.options.crs;
      this._wmsVersion = parseFloat(this.wmsParams.version);
      var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      this.wmsParams[projectionKey] = this._crs.code;
      TileLayer.prototype.onAdd.call(this, map);
    },
    getTileUrl: function (coords) {
      var tileBounds = this._tileCoordsToNwSe(coords),
          crs = this._crs,
          bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
          min = bounds.min,
          max = bounds.max,
          bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [min.y, min.x, max.y, max.x] : [min.x, min.y, max.x, max.y]).join(','),
          url = TileLayer.prototype.getTileUrl.call(this, coords);

      return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
    },
    // @method setParams(params: Object, noRedraw?: Boolean): this
    // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
    setParams: function (params, noRedraw) {
      extend(this.wmsParams, params);

      if (!noRedraw) {
        this.redraw();
      }

      return this;
    }
  }); // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.

  function tileLayerWMS(url, options) {
    return new TileLayerWMS(url, options);
  }

  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;
  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({
    // @section
    // @aka Renderer options
    options: {
      // @option padding: Number = 0.1
      // How much to extend the clip area around the map view (relative to its size)
      // e.g. 0.1 would be 10% of map view in each direction
      padding: 0.1,
      // @option tolerance: Number = 0
      // How much to extend click tolerance round a path/object on the map
      tolerance: 0
    },
    initialize: function (options) {
      setOptions(this, options);
      stamp(this);
      this._layers = this._layers || {};
    },
    onAdd: function () {
      if (!this._container) {
        this._initContainer(); // defined by renderer implementations


        if (this._zoomAnimated) {
          addClass(this._container, 'leaflet-zoom-animated');
        }
      }

      this.getPane().appendChild(this._container);

      this._update();

      this.on('update', this._updatePaths, this);
    },
    onRemove: function () {
      this.off('update', this._updatePaths, this);

      this._destroyContainer();
    },
    getEvents: function () {
      var events = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._onAnimZoom;
      }

      return events;
    },
    _onAnimZoom: function (ev) {
      this._updateTransform(ev.center, ev.zoom);
    },
    _onZoom: function () {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function (center, zoom) {
      var scale = this._map.getZoomScale(zoom, this._zoom),
          position = getPosition(this._container),
          viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          currentCenterPoint = this._map.project(this._center, zoom),
          destCenterPoint = this._map.project(center, zoom),
          centerOffset = destCenterPoint.subtract(currentCenterPoint),
          topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

      if (any3d) {
        setTransform(this._container, topLeftOffset, scale);
      } else {
        setPosition(this._container, topLeftOffset);
      }
    },
    _reset: function () {
      this._update();

      this._updateTransform(this._center, this._zoom);

      for (var id in this._layers) {
        this._layers[id]._reset();
      }
    },
    _onZoomEnd: function () {
      for (var id in this._layers) {
        this._layers[id]._project();
      }
    },
    _updatePaths: function () {
      for (var id in this._layers) {
        this._layers[id]._update();
      }
    },
    _update: function () {
      // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
      // Subclasses are responsible of firing the 'update' event.
      var p = this.options.padding,
          size = this._map.getSize(),
          min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

      this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
      this._center = this._map.getCenter();
      this._zoom = this._map.getZoom();
    }
  });
  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var Canvas = Renderer.extend({
    getEvents: function () {
      var events = Renderer.prototype.getEvents.call(this);
      events.viewprereset = this._onViewPreReset;
      return events;
    },
    _onViewPreReset: function () {
      // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
      this._postponeUpdatePaths = true;
    },
    onAdd: function () {
      Renderer.prototype.onAdd.call(this); // Redraw vectors since canvas is cleared upon removal,
      // in case of removing the renderer itself from the map.

      this._draw();
    },
    _initContainer: function () {
      var container = this._container = document.createElement('canvas');
      on(container, 'mousemove', this._onMouseMove, this);
      on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
      on(container, 'mouseout', this._handleMouseOut, this);
      this._ctx = container.getContext('2d');
    },
    _destroyContainer: function () {
      cancelAnimFrame(this._redrawRequest);
      delete this._ctx;
      remove(this._container);
      off(this._container);
      delete this._container;
    },
    _updatePaths: function () {
      if (this._postponeUpdatePaths) {
        return;
      }

      var layer;
      this._redrawBounds = null;

      for (var id in this._layers) {
        layer = this._layers[id];

        layer._update();
      }

      this._redraw();
    },
    _update: function () {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }

      Renderer.prototype._update.call(this);

      var b = this._bounds,
          container = this._container,
          size = b.getSize(),
          m = retina ? 2 : 1;
      setPosition(container, b.min); // set canvas size (also clearing it); use double size on retina

      container.width = m * size.x;
      container.height = m * size.y;
      container.style.width = size.x + 'px';
      container.style.height = size.y + 'px';

      if (retina) {
        this._ctx.scale(2, 2);
      } // translate so we use the same path coordinates after canvas element moves


      this._ctx.translate(-b.min.x, -b.min.y); // Tell paths to redraw themselves


      this.fire('update');
    },
    _reset: function () {
      Renderer.prototype._reset.call(this);

      if (this._postponeUpdatePaths) {
        this._postponeUpdatePaths = false;

        this._updatePaths();
      }
    },
    _initPath: function (layer) {
      this._updateDashArray(layer);

      this._layers[stamp(layer)] = layer;
      var order = layer._order = {
        layer: layer,
        prev: this._drawLast,
        next: null
      };

      if (this._drawLast) {
        this._drawLast.next = order;
      }

      this._drawLast = order;
      this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function (layer) {
      this._requestRedraw(layer);
    },
    _removePath: function (layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;

      if (next) {
        next.prev = prev;
      } else {
        this._drawLast = prev;
      }

      if (prev) {
        prev.next = next;
      } else {
        this._drawFirst = next;
      }

      delete layer._order;
      delete this._layers[stamp(layer)];

      this._requestRedraw(layer);
    },
    _updatePath: function (layer) {
      // Redraw the union of the layer's old pixel
      // bounds and the new pixel bounds.
      this._extendRedrawBounds(layer);

      layer._project();

      layer._update(); // The redraw will extend the redraw bounds
      // with the new pixel bounds.


      this._requestRedraw(layer);
    },
    _updateStyle: function (layer) {
      this._updateDashArray(layer);

      this._requestRedraw(layer);
    },
    _updateDashArray: function (layer) {
      if (typeof layer.options.dashArray === 'string') {
        var parts = layer.options.dashArray.split(/[, ]+/),
            dashArray = [],
            dashValue,
            i;

        for (i = 0; i < parts.length; i++) {
          dashValue = Number(parts[i]); // Ignore dash array containing invalid lengths

          if (isNaN(dashValue)) {
            return;
          }

          dashArray.push(dashValue);
        }

        layer.options._dashArray = dashArray;
      } else {
        layer.options._dashArray = layer.options.dashArray;
      }
    },
    _requestRedraw: function (layer) {
      if (!this._map) {
        return;
      }

      this._extendRedrawBounds(layer);

      this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
    },
    _extendRedrawBounds: function (layer) {
      if (layer._pxBounds) {
        var padding = (layer.options.weight || 0) + 1;
        this._redrawBounds = this._redrawBounds || new Bounds();

        this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));

        this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
      }
    },
    _redraw: function () {
      this._redrawRequest = null;

      if (this._redrawBounds) {
        this._redrawBounds.min._floor();

        this._redrawBounds.max._ceil();
      }

      this._clear(); // clear layers in redraw bounds


      this._draw(); // draw layers


      this._redrawBounds = null;
    },
    _clear: function () {
      var bounds = this._redrawBounds;

      if (bounds) {
        var size = bounds.getSize();

        this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
      } else {
        this._ctx.save();

        this._ctx.setTransform(1, 0, 0, 1, 0, 0);

        this._ctx.clearRect(0, 0, this._container.width, this._container.height);

        this._ctx.restore();
      }
    },
    _draw: function () {
      var layer,
          bounds = this._redrawBounds;

      this._ctx.save();

      if (bounds) {
        var size = bounds.getSize();

        this._ctx.beginPath();

        this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);

        this._ctx.clip();
      }

      this._drawing = true;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
          layer._updatePath();
        }
      }

      this._drawing = false;

      this._ctx.restore(); // Restore state before clipping.

    },
    _updatePoly: function (layer, closed) {
      if (!this._drawing) {
        return;
      }

      var i,
          j,
          len2,
          p,
          parts = layer._parts,
          len = parts.length,
          ctx = this._ctx;

      if (!len) {
        return;
      }

      ctx.beginPath();

      for (i = 0; i < len; i++) {
        for (j = 0, len2 = parts[i].length; j < len2; j++) {
          p = parts[i][j];
          ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
        }

        if (closed) {
          ctx.closePath();
        }
      }

      this._fillStroke(ctx, layer); // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature

    },
    _updateCircle: function (layer) {
      if (!this._drawing || layer._empty()) {
        return;
      }

      var p = layer._point,
          ctx = this._ctx,
          r = Math.max(Math.round(layer._radius), 1),
          s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

      if (s !== 1) {
        ctx.save();
        ctx.scale(1, s);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

      if (s !== 1) {
        ctx.restore();
      }

      this._fillStroke(ctx, layer);
    },
    _fillStroke: function (ctx, layer) {
      var options = layer.options;

      if (options.fill) {
        ctx.globalAlpha = options.fillOpacity;
        ctx.fillStyle = options.fillColor || options.color;
        ctx.fill(options.fillRule || 'evenodd');
      }

      if (options.stroke && options.weight !== 0) {
        if (ctx.setLineDash) {
          ctx.setLineDash(layer.options && layer.options._dashArray || []);
        }

        ctx.globalAlpha = options.opacity;
        ctx.lineWidth = options.weight;
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineJoin = options.lineJoin;
        ctx.stroke();
      }
    },
    // Canvas obviously doesn't have mouse events for individual drawn objects,
    // so we emulate that by calculating what's under the mouse on mousemove/click manually
    _onClick: function (e) {
      var point = this._map.mouseEventToLayerPoint(e),
          layer,
          clickedLayer;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (layer.options.interactive && layer._containsPoint(point)) {
          if (!(e.type === 'click' || e.type !== 'preclick') || !this._map._draggableMoved(layer)) {
            clickedLayer = layer;
          }
        }
      }

      if (clickedLayer) {
        fakeStop(e);

        this._fireEvent([clickedLayer], e);
      }
    },
    _onMouseMove: function (e) {
      if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
        return;
      }

      var point = this._map.mouseEventToLayerPoint(e);

      this._handleMouseHover(e, point);
    },
    _handleMouseOut: function (e) {
      var layer = this._hoveredLayer;

      if (layer) {
        // if we're leaving the layer, fire mouseout
        removeClass(this._container, 'leaflet-interactive');

        this._fireEvent([layer], e, 'mouseout');

        this._hoveredLayer = null;
        this._mouseHoverThrottled = false;
      }
    },
    _handleMouseHover: function (e, point) {
      if (this._mouseHoverThrottled) {
        return;
      }

      var layer, candidateHoveredLayer;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (layer.options.interactive && layer._containsPoint(point)) {
          candidateHoveredLayer = layer;
        }
      }

      if (candidateHoveredLayer !== this._hoveredLayer) {
        this._handleMouseOut(e);

        if (candidateHoveredLayer) {
          addClass(this._container, 'leaflet-interactive'); // change cursor

          this._fireEvent([candidateHoveredLayer], e, 'mouseover');

          this._hoveredLayer = candidateHoveredLayer;
        }
      }

      if (this._hoveredLayer) {
        this._fireEvent([this._hoveredLayer], e);
      }

      this._mouseHoverThrottled = true;
      setTimeout(bind(function () {
        this._mouseHoverThrottled = false;
      }, this), 32);
    },
    _fireEvent: function (layers, e, type) {
      this._map._fireDOMEvent(e, type || e.type, layers);
    },
    _bringToFront: function (layer) {
      var order = layer._order;

      if (!order) {
        return;
      }

      var next = order.next;
      var prev = order.prev;

      if (next) {
        next.prev = prev;
      } else {
        // Already last
        return;
      }

      if (prev) {
        prev.next = next;
      } else if (next) {
        // Update first entry unless this is the
        // single entry
        this._drawFirst = next;
      }

      order.prev = this._drawLast;
      this._drawLast.next = order;
      order.next = null;
      this._drawLast = order;

      this._requestRedraw(layer);
    },
    _bringToBack: function (layer) {
      var order = layer._order;

      if (!order) {
        return;
      }

      var next = order.next;
      var prev = order.prev;

      if (prev) {
        prev.next = next;
      } else {
        // Already first
        return;
      }

      if (next) {
        next.prev = prev;
      } else if (prev) {
        // Update last entry unless this is the
        // single entry
        this._drawLast = prev;
      }

      order.prev = null;
      order.next = this._drawFirst;
      this._drawFirst.prev = order;
      this._drawFirst = order;

      this._requestRedraw(layer);
    }
  }); // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.

  function canvas$1(options) {
    return canvas ? new Canvas(options) : null;
  }
  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */


  var vmlCreate = function () {
    try {
      document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
      return function (name) {
        return document.createElement('<lvml:' + name + ' class="lvml">');
      };
    } catch (e) {
      return function (name) {
        return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }();
  /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */
  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences


  var vmlMixin = {
    _initContainer: function () {
      this._container = create$1('div', 'leaflet-vml-container');
    },
    _update: function () {
      if (this._map._animatingZoom) {
        return;
      }

      Renderer.prototype._update.call(this);

      this.fire('update');
    },
    _initPath: function (layer) {
      var container = layer._container = vmlCreate('shape');
      addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));
      container.coordsize = '1 1';
      layer._path = vmlCreate('path');
      container.appendChild(layer._path);

      this._updateStyle(layer);

      this._layers[stamp(layer)] = layer;
    },
    _addPath: function (layer) {
      var container = layer._container;

      this._container.appendChild(container);

      if (layer.options.interactive) {
        layer.addInteractiveTarget(container);
      }
    },
    _removePath: function (layer) {
      var container = layer._container;
      remove(container);
      layer.removeInteractiveTarget(container);
      delete this._layers[stamp(layer)];
    },
    _updateStyle: function (layer) {
      var stroke = layer._stroke,
          fill = layer._fill,
          options = layer.options,
          container = layer._container;
      container.stroked = !!options.stroke;
      container.filled = !!options.fill;

      if (options.stroke) {
        if (!stroke) {
          stroke = layer._stroke = vmlCreate('stroke');
        }

        container.appendChild(stroke);
        stroke.weight = options.weight + 'px';
        stroke.color = options.color;
        stroke.opacity = options.opacity;

        if (options.dashArray) {
          stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
        } else {
          stroke.dashStyle = '';
        }

        stroke.endcap = options.lineCap.replace('butt', 'flat');
        stroke.joinstyle = options.lineJoin;
      } else if (stroke) {
        container.removeChild(stroke);
        layer._stroke = null;
      }

      if (options.fill) {
        if (!fill) {
          fill = layer._fill = vmlCreate('fill');
        }

        container.appendChild(fill);
        fill.color = options.fillColor || options.color;
        fill.opacity = options.fillOpacity;
      } else if (fill) {
        container.removeChild(fill);
        layer._fill = null;
      }
    },
    _updateCircle: function (layer) {
      var p = layer._point.round(),
          r = Math.round(layer._radius),
          r2 = Math.round(layer._radiusY || r);

      this._setPath(layer, layer._empty() ? 'M0 0' : 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + 65535 * 360);
    },
    _setPath: function (layer, path) {
      layer._path.v = path;
    },
    _bringToFront: function (layer) {
      toFront(layer._container);
    },
    _bringToBack: function (layer) {
      toBack(layer._container);
    }
  };
  var create$2 = vml ? vmlCreate : svgCreate;
  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var SVG = Renderer.extend({
    getEvents: function () {
      var events = Renderer.prototype.getEvents.call(this);
      events.zoomstart = this._onZoomStart;
      return events;
    },
    _initContainer: function () {
      this._container = create$2('svg'); // makes it possible to click through svg root; we'll reset it back in individual paths

      this._container.setAttribute('pointer-events', 'none');

      this._rootGroup = create$2('g');

      this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function () {
      remove(this._container);
      off(this._container);
      delete this._container;
      delete this._rootGroup;
      delete this._svgSize;
    },
    _onZoomStart: function () {
      // Drag-then-pinch interactions might mess up the center and zoom.
      // In this case, the easiest way to prevent this is re-do the renderer
      //   bounds and padding when the zooming starts.
      this._update();
    },
    _update: function () {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }

      Renderer.prototype._update.call(this);

      var b = this._bounds,
          size = b.getSize(),
          container = this._container; // set size of svg-container if changed

      if (!this._svgSize || !this._svgSize.equals(size)) {
        this._svgSize = size;
        container.setAttribute('width', size.x);
        container.setAttribute('height', size.y);
      } // movement: update container viewBox so that we don't have to change coordinates of individual layers


      setPosition(container, b.min);
      container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
      this.fire('update');
    },
    // methods below are called by vector layers implementations
    _initPath: function (layer) {
      var path = layer._path = create$2('path'); // @namespace Path
      // @option className: String = null
      // Custom class name set on an element. Only for SVG renderer.

      if (layer.options.className) {
        addClass(path, layer.options.className);
      }

      if (layer.options.interactive) {
        addClass(path, 'leaflet-interactive');
      }

      this._updateStyle(layer);

      this._layers[stamp(layer)] = layer;
    },
    _addPath: function (layer) {
      if (!this._rootGroup) {
        this._initContainer();
      }

      this._rootGroup.appendChild(layer._path);

      layer.addInteractiveTarget(layer._path);
    },
    _removePath: function (layer) {
      remove(layer._path);
      layer.removeInteractiveTarget(layer._path);
      delete this._layers[stamp(layer)];
    },
    _updatePath: function (layer) {
      layer._project();

      layer._update();
    },
    _updateStyle: function (layer) {
      var path = layer._path,
          options = layer.options;

      if (!path) {
        return;
      }

      if (options.stroke) {
        path.setAttribute('stroke', options.color);
        path.setAttribute('stroke-opacity', options.opacity);
        path.setAttribute('stroke-width', options.weight);
        path.setAttribute('stroke-linecap', options.lineCap);
        path.setAttribute('stroke-linejoin', options.lineJoin);

        if (options.dashArray) {
          path.setAttribute('stroke-dasharray', options.dashArray);
        } else {
          path.removeAttribute('stroke-dasharray');
        }

        if (options.dashOffset) {
          path.setAttribute('stroke-dashoffset', options.dashOffset);
        } else {
          path.removeAttribute('stroke-dashoffset');
        }
      } else {
        path.setAttribute('stroke', 'none');
      }

      if (options.fill) {
        path.setAttribute('fill', options.fillColor || options.color);
        path.setAttribute('fill-opacity', options.fillOpacity);
        path.setAttribute('fill-rule', options.fillRule || 'evenodd');
      } else {
        path.setAttribute('fill', 'none');
      }
    },
    _updatePoly: function (layer, closed) {
      this._setPath(layer, pointsToPath(layer._parts, closed));
    },
    _updateCircle: function (layer) {
      var p = layer._point,
          r = Math.max(Math.round(layer._radius), 1),
          r2 = Math.max(Math.round(layer._radiusY), 1) || r,
          arc = 'a' + r + ',' + r2 + ' 0 1,0 '; // drawing a circle with two half-arcs

      var d = layer._empty() ? 'M0 0' : 'M' + (p.x - r) + ',' + p.y + arc + r * 2 + ',0 ' + arc + -r * 2 + ',0 ';

      this._setPath(layer, d);
    },
    _setPath: function (layer, path) {
      layer._path.setAttribute('d', path);
    },
    // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
    _bringToFront: function (layer) {
      toFront(layer._path);
    },
    _bringToBack: function (layer) {
      toBack(layer._path);
    }
  });

  if (vml) {
    SVG.include(vmlMixin);
  } // @namespace SVG
  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.


  function svg$1(options) {
    return svg || vml ? new SVG(options) : null;
  }

  Map.include({
    // @namespace Map; @method getRenderer(layer: Path): Renderer
    // Returns the instance of `Renderer` that should be used to render the given
    // `Path`. It will ensure that the `renderer` options of the map and paths
    // are respected, and that the renderers do exist on the map.
    getRenderer: function (layer) {
      // @namespace Path; @option renderer: Renderer
      // Use this specific instance of `Renderer` for this path. Takes
      // precedence over the map's [default renderer](#map-renderer).
      var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

      if (!renderer) {
        renderer = this._renderer = this._createRenderer();
      }

      if (!this.hasLayer(renderer)) {
        this.addLayer(renderer);
      }

      return renderer;
    },
    _getPaneRenderer: function (name) {
      if (name === 'overlayPane' || name === undefined) {
        return false;
      }

      var renderer = this._paneRenderers[name];

      if (renderer === undefined) {
        renderer = this._createRenderer({
          pane: name
        });
        this._paneRenderers[name] = renderer;
      }

      return renderer;
    },
    _createRenderer: function (options) {
      // @namespace Map; @option preferCanvas: Boolean = false
      // Whether `Path`s should be rendered on a `Canvas` renderer.
      // By default, all `Path`s are rendered in a `SVG` renderer.
      return this.options.preferCanvas && canvas$1(options) || svg$1(options);
    }
  });
  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */

  var Rectangle = Polygon.extend({
    initialize: function (latLngBounds, options) {
      Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
    },
    // @method setBounds(latLngBounds: LatLngBounds): this
    // Redraws the rectangle with the passed bounds.
    setBounds: function (latLngBounds) {
      return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
    },
    _boundsToLatLngs: function (latLngBounds) {
      latLngBounds = toLatLngBounds(latLngBounds);
      return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
    }
  }); // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)

  function rectangle(latLngBounds, options) {
    return new Rectangle(latLngBounds, options);
  }

  SVG.create = create$2;
  SVG.pointsToPath = pointsToPath;
  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;
  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option boxZoom: Boolean = true
    // Whether the map can be zoomed to a rectangular area specified by
    // dragging the mouse while pressing the shift key.
    boxZoom: true
  });
  var BoxZoom = Handler.extend({
    initialize: function (map) {
      this._map = map;
      this._container = map._container;
      this._pane = map._panes.overlayPane;
      this._resetStateTimeout = 0;
      map.on('unload', this._destroy, this);
    },
    addHooks: function () {
      on(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function () {
      off(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      remove(this._pane);
      delete this._pane;
    },
    _resetState: function () {
      this._resetStateTimeout = 0;
      this._moved = false;
    },
    _clearDeferredResetState: function () {
      if (this._resetStateTimeout !== 0) {
        clearTimeout(this._resetStateTimeout);
        this._resetStateTimeout = 0;
      }
    },
    _onMouseDown: function (e) {
      if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
        return false;
      } // Clear the deferred resetState if it hasn't executed yet, otherwise it
      // will interrupt the interaction and orphan a box element in the container.


      this._clearDeferredResetState();

      this._resetState();

      disableTextSelection();
      disableImageDrag();
      this._startPoint = this._map.mouseEventToContainerPoint(e);
      on(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function (e) {
      if (!this._moved) {
        this._moved = true;
        this._box = create$1('div', 'leaflet-zoom-box', this._container);
        addClass(this._container, 'leaflet-crosshair');

        this._map.fire('boxzoomstart');
      }

      this._point = this._map.mouseEventToContainerPoint(e);
      var bounds = new Bounds(this._point, this._startPoint),
          size = bounds.getSize();
      setPosition(this._box, bounds.min);
      this._box.style.width = size.x + 'px';
      this._box.style.height = size.y + 'px';
    },
    _finish: function () {
      if (this._moved) {
        remove(this._box);
        removeClass(this._container, 'leaflet-crosshair');
      }

      enableTextSelection();
      enableImageDrag();
      off(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function (e) {
      if (e.which !== 1 && e.button !== 1) {
        return;
      }

      this._finish();

      if (!this._moved) {
        return;
      } // Postpone to next JS tick so internal click event handling
      // still see it as "moved".


      this._clearDeferredResetState();

      this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
      var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));

      this._map.fitBounds(bounds).fire('boxzoomend', {
        boxZoomBounds: bounds
      });
    },
    _onKeyDown: function (e) {
      if (e.keyCode === 27) {
        this._finish();
      }
    }
  }); // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.

  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);
  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option doubleClickZoom: Boolean|String = true
    // Whether the map can be zoomed in by double clicking on it and
    // zoomed out by double clicking while holding shift. If passed
    // `'center'`, double-click zoom will zoom to the center of the
    //  view regardless of where the mouse was.
    doubleClickZoom: true
  });
  var DoubleClickZoom = Handler.extend({
    addHooks: function () {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function (e) {
      var map = this._map,
          oldZoom = map.getZoom(),
          delta = map.options.zoomDelta,
          zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

      if (map.options.doubleClickZoom === 'center') {
        map.setZoom(zoom);
      } else {
        map.setZoomAround(e.containerPoint, zoom);
      }
    }
  }); // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see `Handler` methods). For example:
  //
  // ```js
  // map.doubleClickZoom.disable();
  // ```
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.

  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);
  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option dragging: Boolean = true
    // Whether the map be draggable with mouse/touch or not.
    dragging: true,
    // @section Panning Inertia Options
    // @option inertia: Boolean = *
    // If enabled, panning of the map will have an inertia effect where
    // the map builds momentum while dragging and continues moving in
    // the same direction for some time. Feels especially nice on touch
    // devices. Enabled by default unless running on old Android devices.
    inertia: !android23,
    // @option inertiaDeceleration: Number = 3000
    // The rate with which the inertial movement slows down, in pixels/second².
    inertiaDeceleration: 3400,
    // px/s^2
    // @option inertiaMaxSpeed: Number = Infinity
    // Max speed of the inertial movement, in pixels/second.
    inertiaMaxSpeed: Infinity,
    // px/s
    // @option easeLinearity: Number = 0.2
    easeLinearity: 0.2,
    // TODO refactor, move to CRS
    // @option worldCopyJump: Boolean = false
    // With this option enabled, the map tracks when you pan to another "copy"
    // of the world and seamlessly jumps to the original one so that all overlays
    // like markers and vector layers are still visible.
    worldCopyJump: false,
    // @option maxBoundsViscosity: Number = 0.0
    // If `maxBounds` is set, this option will control how solid the bounds
    // are when dragging the map around. The default value of `0.0` allows the
    // user to drag outside the bounds at normal speed, higher values will
    // slow down map dragging outside bounds, and `1.0` makes the bounds fully
    // solid, preventing the user from dragging outside the bounds.
    maxBoundsViscosity: 0.0
  });
  var Drag = Handler.extend({
    addHooks: function () {
      if (!this._draggable) {
        var map = this._map;
        this._draggable = new Draggable(map._mapPane, map._container);

        this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this);

        this._draggable.on('predrag', this._onPreDragLimit, this);

        if (map.options.worldCopyJump) {
          this._draggable.on('predrag', this._onPreDragWrap, this);

          map.on('zoomend', this._onZoomEnd, this);
          map.whenReady(this._onZoomEnd, this);
        }
      }

      addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');

      this._draggable.enable();

      this._positions = [];
      this._times = [];
    },
    removeHooks: function () {
      removeClass(this._map._container, 'leaflet-grab');
      removeClass(this._map._container, 'leaflet-touch-drag');

      this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var map = this._map;

      map._stop();

      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var bounds = toLatLngBounds(this._map.options.maxBounds);
        this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
        this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
      } else {
        this._offsetLimit = null;
      }

      map.fire('movestart').fire('dragstart');

      if (map.options.inertia) {
        this._positions = [];
        this._times = [];
      }
    },
    _onDrag: function (e) {
      if (this._map.options.inertia) {
        var time = this._lastTime = +new Date(),
            pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

        this._positions.push(pos);

        this._times.push(time);

        this._prunePositions(time);
      }

      this._map.fire('move', e).fire('drag', e);
    },
    _prunePositions: function (time) {
      while (this._positions.length > 1 && time - this._times[0] > 50) {
        this._positions.shift();

        this._times.shift();
      }
    },
    _onZoomEnd: function () {
      var pxCenter = this._map.getSize().divideBy(2),
          pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
      this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function (value, threshold) {
      return value - (value - threshold) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (!this._viscosity || !this._offsetLimit) {
        return;
      }

      var offset = this._draggable._newPos.subtract(this._draggable._startPos);

      var limit = this._offsetLimit;

      if (offset.x < limit.min.x) {
        offset.x = this._viscousLimit(offset.x, limit.min.x);
      }

      if (offset.y < limit.min.y) {
        offset.y = this._viscousLimit(offset.y, limit.min.y);
      }

      if (offset.x > limit.max.x) {
        offset.x = this._viscousLimit(offset.x, limit.max.x);
      }

      if (offset.y > limit.max.y) {
        offset.y = this._viscousLimit(offset.y, limit.max.y);
      }

      this._draggable._newPos = this._draggable._startPos.add(offset);
    },
    _onPreDragWrap: function () {
      // TODO refactor to be able to adjust map pane position after zoom
      var worldWidth = this._worldWidth,
          halfWidth = Math.round(worldWidth / 2),
          dx = this._initialWorldOffset,
          x = this._draggable._newPos.x,
          newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
          newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
          newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
      this._draggable._absPos = this._draggable._newPos.clone();
      this._draggable._newPos.x = newX;
    },
    _onDragEnd: function (e) {
      var map = this._map,
          options = map.options,
          noInertia = !options.inertia || this._times.length < 2;
      map.fire('dragend', e);

      if (noInertia) {
        map.fire('moveend');
      } else {
        this._prunePositions(+new Date());

        var direction = this._lastPos.subtract(this._positions[0]),
            duration = (this._lastTime - this._times[0]) / 1000,
            ease = options.easeLinearity,
            speedVector = direction.multiplyBy(ease / duration),
            speed = speedVector.distanceTo([0, 0]),
            limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
            limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
            decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
            offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

        if (!offset.x && !offset.y) {
          map.fire('moveend');
        } else {
          offset = map._limitOffset(offset, map.options.maxBounds);
          requestAnimFrame(function () {
            map.panBy(offset, {
              duration: decelerationDuration,
              easeLinearity: ease,
              noMoveStart: true,
              animate: true
            });
          });
        }
      }
    }
  }); // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).

  Map.addInitHook('addHandler', 'dragging', Drag);
  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */
  // @namespace Map
  // @section Keyboard Navigation Options

  Map.mergeOptions({
    // @option keyboard: Boolean = true
    // Makes the map focusable and allows users to navigate the map with keyboard
    // arrows and `+`/`-` keys.
    keyboard: true,
    // @option keyboardPanDelta: Number = 80
    // Amount of pixels to pan when pressing an arrow key.
    keyboardPanDelta: 80
  });
  var Keyboard = Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function (map) {
      this._map = map;

      this._setPanDelta(map.options.keyboardPanDelta);

      this._setZoomDelta(map.options.zoomDelta);
    },
    addHooks: function () {
      var container = this._map._container; // make the container focusable by tabbing

      if (container.tabIndex <= 0) {
        container.tabIndex = '0';
      }

      on(container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);

      this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function () {
      this._removeHooks();

      off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);

      this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function () {
      if (this._focused) {
        return;
      }

      var body = document.body,
          docEl = document.documentElement,
          top = body.scrollTop || docEl.scrollTop,
          left = body.scrollLeft || docEl.scrollLeft;

      this._map._container.focus();

      window.scrollTo(left, top);
    },
    _onFocus: function () {
      this._focused = true;

      this._map.fire('focus');
    },
    _onBlur: function () {
      this._focused = false;

      this._map.fire('blur');
    },
    _setPanDelta: function (panDelta) {
      var keys = this._panKeys = {},
          codes = this.keyCodes,
          i,
          len;

      for (i = 0, len = codes.left.length; i < len; i++) {
        keys[codes.left[i]] = [-1 * panDelta, 0];
      }

      for (i = 0, len = codes.right.length; i < len; i++) {
        keys[codes.right[i]] = [panDelta, 0];
      }

      for (i = 0, len = codes.down.length; i < len; i++) {
        keys[codes.down[i]] = [0, panDelta];
      }

      for (i = 0, len = codes.up.length; i < len; i++) {
        keys[codes.up[i]] = [0, -1 * panDelta];
      }
    },
    _setZoomDelta: function (zoomDelta) {
      var keys = this._zoomKeys = {},
          codes = this.keyCodes,
          i,
          len;

      for (i = 0, len = codes.zoomIn.length; i < len; i++) {
        keys[codes.zoomIn[i]] = zoomDelta;
      }

      for (i = 0, len = codes.zoomOut.length; i < len; i++) {
        keys[codes.zoomOut[i]] = -zoomDelta;
      }
    },
    _addHooks: function () {
      on(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function () {
      off(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      var key = e.keyCode,
          map = this._map,
          offset;

      if (key in this._panKeys) {
        if (!map._panAnim || !map._panAnim._inProgress) {
          offset = this._panKeys[key];

          if (e.shiftKey) {
            offset = toPoint(offset).multiplyBy(3);
          }

          map.panBy(offset);

          if (map.options.maxBounds) {
            map.panInsideBounds(map.options.maxBounds);
          }
        }
      } else if (key in this._zoomKeys) {
        map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
      } else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
        map.closePopup();
      } else {
        return;
      }

      stop(e);
    }
  }); // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.

  Map.addInitHook('addHandler', 'keyboard', Keyboard);
  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @section Mouse wheel options
    // @option scrollWheelZoom: Boolean|String = true
    // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
    // it will zoom to the center of the view regardless of where the mouse was.
    scrollWheelZoom: true,
    // @option wheelDebounceTime: Number = 40
    // Limits the rate at which a wheel can fire (in milliseconds). By default
    // user can't zoom via wheel more often than once per 40 ms.
    wheelDebounceTime: 40,
    // @option wheelPxPerZoomLevel: Number = 60
    // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
    // mean a change of one full zoom level. Smaller values will make wheel-zooming
    // faster (and vice versa).
    wheelPxPerZoomLevel: 60
  });
  var ScrollWheelZoom = Handler.extend({
    addHooks: function () {
      on(this._map._container, 'wheel', this._onWheelScroll, this);
      this._delta = 0;
    },
    removeHooks: function () {
      off(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function (e) {
      var delta = getWheelDelta(e);
      var debounce = this._map.options.wheelDebounceTime;
      this._delta += delta;
      this._lastMousePos = this._map.mouseEventToContainerPoint(e);

      if (!this._startTime) {
        this._startTime = +new Date();
      }

      var left = Math.max(debounce - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer);
      this._timer = setTimeout(bind(this._performZoom, this), left);
      stop(e);
    },
    _performZoom: function () {
      var map = this._map,
          zoom = map.getZoom(),
          snap = this._map.options.zoomSnap || 0;

      map._stop(); // stop panning and fly animations if any
      // map the delta with a sigmoid function to -4..4 range leaning on -1..1


      var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
          d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
          delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
      this._delta = 0;
      this._startTime = null;

      if (!delta) {
        return;
      }

      if (map.options.scrollWheelZoom === 'center') {
        map.setZoom(zoom + delta);
      } else {
        map.setZoomAround(this._lastMousePos, zoom + delta);
      }
    }
  }); // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.

  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);
  /*
   * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @section Touch interaction options
    // @option tap: Boolean = true
    // Enables mobile hacks for supporting instant taps (fixing 200ms click
    // delay on iOS/Android) and touch holds (fired as `contextmenu` events).
    tap: true,
    // @option tapTolerance: Number = 15
    // The max number of pixels a user can shift his finger during touch
    // for it to be considered a valid tap.
    tapTolerance: 15
  });
  var Tap = Handler.extend({
    addHooks: function () {
      on(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function () {
      off(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function (e) {
      if (!e.touches) {
        return;
      }

      preventDefault(e);
      this._fireClick = true; // don't simulate click or track longpress if more than 1 touch

      if (e.touches.length > 1) {
        this._fireClick = false;
        clearTimeout(this._holdTimeout);
        return;
      }

      var first = e.touches[0],
          el = first.target;
      this._startPos = this._newPos = new Point(first.clientX, first.clientY); // if touching a link, highlight it

      if (el.tagName && el.tagName.toLowerCase() === 'a') {
        addClass(el, 'leaflet-active');
      } // simulate long hold but setting a timeout


      this._holdTimeout = setTimeout(bind(function () {
        if (this._isTapValid()) {
          this._fireClick = false;

          this._onUp();

          this._simulateEvent('contextmenu', first);
        }
      }, this), 1000);

      this._simulateEvent('mousedown', first);

      on(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
    },
    _onUp: function (e) {
      clearTimeout(this._holdTimeout);
      off(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);

      if (this._fireClick && e && e.changedTouches) {
        var first = e.changedTouches[0],
            el = first.target;

        if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
          removeClass(el, 'leaflet-active');
        }

        this._simulateEvent('mouseup', first); // simulate click if the touch didn't move too much


        if (this._isTapValid()) {
          this._simulateEvent('click', first);
        }
      }
    },
    _isTapValid: function () {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function (e) {
      var first = e.touches[0];
      this._newPos = new Point(first.clientX, first.clientY);

      this._simulateEvent('mousemove', first);
    },
    _simulateEvent: function (type, e) {
      var simulatedEvent = document.createEvent('MouseEvents');
      simulatedEvent._simulated = true;
      e.target._simulatedClick = true;
      simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
      e.target.dispatchEvent(simulatedEvent);
    }
  }); // @section Handlers
  // @property tap: Handler
  // Mobile touch hacks (quick tap and touch hold) handler.

  if (touch && (!pointer || safari)) {
    Map.addInitHook('addHandler', 'tap', Tap);
  }
  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */
  // @namespace Map
  // @section Interaction Options


  Map.mergeOptions({
    // @section Touch interaction options
    // @option touchZoom: Boolean|String = *
    // Whether the map can be zoomed by touch-dragging with two fingers. If
    // passed `'center'`, it will zoom to the center of the view regardless of
    // where the touch events (fingers) were. Enabled for touch-capable web
    // browsers except for old Androids.
    touchZoom: touch && !android23,
    // @option bounceAtZoomLimits: Boolean = true
    // Set it to false if you don't want the map to zoom beyond min/max zoom
    // and then bounce back when pinch-zooming.
    bounceAtZoomLimits: true
  });
  var TouchZoom = Handler.extend({
    addHooks: function () {
      addClass(this._map._container, 'leaflet-touch-zoom');
      on(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function () {
      removeClass(this._map._container, 'leaflet-touch-zoom');
      off(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function (e) {
      var map = this._map;

      if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
        return;
      }

      var p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]);
      this._centerPoint = map.getSize()._divideBy(2);
      this._startLatLng = map.containerPointToLatLng(this._centerPoint);

      if (map.options.touchZoom !== 'center') {
        this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
      }

      this._startDist = p1.distanceTo(p2);
      this._startZoom = map.getZoom();
      this._moved = false;
      this._zooming = true;

      map._stop();

      on(document, 'touchmove', this._onTouchMove, this);
      on(document, 'touchend', this._onTouchEnd, this);
      preventDefault(e);
    },
    _onTouchMove: function (e) {
      if (!e.touches || e.touches.length !== 2 || !this._zooming) {
        return;
      }

      var map = this._map,
          p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]),
          scale = p1.distanceTo(p2) / this._startDist;

      this._zoom = map.getScaleZoom(scale, this._startZoom);

      if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) {
        this._zoom = map._limitZoom(this._zoom);
      }

      if (map.options.touchZoom === 'center') {
        this._center = this._startLatLng;

        if (scale === 1) {
          return;
        }
      } else {
        // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
        var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);

        if (scale === 1 && delta.x === 0 && delta.y === 0) {
          return;
        }

        this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
      }

      if (!this._moved) {
        map._moveStart(true, false);

        this._moved = true;
      }

      cancelAnimFrame(this._animRequest);
      var moveFn = bind(map._move, map, this._center, this._zoom, {
        pinch: true,
        round: false
      });
      this._animRequest = requestAnimFrame(moveFn, this, true);
      preventDefault(e);
    },
    _onTouchEnd: function () {
      if (!this._moved || !this._zooming) {
        this._zooming = false;
        return;
      }

      this._zooming = false;
      cancelAnimFrame(this._animRequest);
      off(document, 'touchmove', this._onTouchMove, this);
      off(document, 'touchend', this._onTouchEnd, this); // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.

      if (this._map.options.zoomAnimation) {
        this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
      } else {
        this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    }
  }); // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.

  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);
  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.Tap = Tap;
  Map.TouchZoom = TouchZoom;
  exports.version = version;
  exports.Control = Control;
  exports.control = control;
  exports.Browser = Browser;
  exports.Evented = Evented;
  exports.Mixin = Mixin;
  exports.Util = Util;
  exports.Class = Class;
  exports.Handler = Handler;
  exports.extend = extend;
  exports.bind = bind;
  exports.stamp = stamp;
  exports.setOptions = setOptions;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.PosAnimation = PosAnimation;
  exports.Draggable = Draggable;
  exports.LineUtil = LineUtil;
  exports.PolyUtil = PolyUtil;
  exports.Point = Point;
  exports.point = toPoint;
  exports.Bounds = Bounds;
  exports.bounds = toBounds;
  exports.Transformation = Transformation;
  exports.transformation = toTransformation;
  exports.Projection = index;
  exports.LatLng = LatLng;
  exports.latLng = toLatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.latLngBounds = toLatLngBounds;
  exports.CRS = CRS;
  exports.GeoJSON = GeoJSON;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.layerGroup = layerGroup;
  exports.FeatureGroup = FeatureGroup;
  exports.featureGroup = featureGroup;
  exports.ImageOverlay = ImageOverlay;
  exports.imageOverlay = imageOverlay;
  exports.VideoOverlay = VideoOverlay;
  exports.videoOverlay = videoOverlay;
  exports.SVGOverlay = SVGOverlay;
  exports.svgOverlay = svgOverlay;
  exports.DivOverlay = DivOverlay;
  exports.Popup = Popup;
  exports.popup = popup;
  exports.Tooltip = Tooltip;
  exports.tooltip = tooltip;
  exports.Icon = Icon;
  exports.icon = icon;
  exports.DivIcon = DivIcon;
  exports.divIcon = divIcon;
  exports.Marker = Marker;
  exports.marker = marker;
  exports.TileLayer = TileLayer;
  exports.tileLayer = tileLayer;
  exports.GridLayer = GridLayer;
  exports.gridLayer = gridLayer;
  exports.SVG = SVG;
  exports.svg = svg$1;
  exports.Renderer = Renderer;
  exports.Canvas = Canvas;
  exports.canvas = canvas$1;
  exports.Path = Path;
  exports.CircleMarker = CircleMarker;
  exports.circleMarker = circleMarker;
  exports.Circle = Circle;
  exports.circle = circle;
  exports.Polyline = Polyline;
  exports.polyline = polyline;
  exports.Polygon = Polygon;
  exports.polygon = polygon;
  exports.Rectangle = Rectangle;
  exports.rectangle = rectangle;
  exports.Map = Map;
  exports.map = createMap;
  var oldL = window.L;

  exports.noConflict = function () {
    window.L = oldL;
    return this;
  }; // Always export us to window global (see #2364)


  window.L = exports;
}); //# sourceMappingURL=leaflet-src.js.map

/***/ }),

/***/ 17159:
/*!***********************************************************!*\
  !*** ./src/app/modules/components/boot/boot.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootComponent": () => (/* binding */ BootComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class BootComponent {
}
BootComponent.ɵfac = function BootComponent_Factory(t) { return new (t || BootComponent)(); };
BootComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootComponent, selectors: [["app-boot"]], decls: 1, vars: 0, template: function BootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib290LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 42195:
/*!********************************************************!*\
  !*** ./src/app/modules/components/boot/boot.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "BootModule": () => (/* binding */ BootModule)
/* harmony export */ });
/* harmony import */ var _boot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.component */ 17159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_store_ship_store_ship_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store/ship.resolver */ 25311);
/* harmony import */ var src_app_store_ship_store_ship_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/ship-store/ship.module */ 13021);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_store_positionreport_store_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/positionreport-store/data.module */ 95810);
/* harmony import */ var src_app_store_zaehlerstand_store_data_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/zaehlerstand-store/data.module */ 89465);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ 74805);
/* harmony import */ var _streife_streife_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./streife/streife.component */ 30869);
/* harmony import */ var _streife_streife_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./streife/streife.module */ 2377);
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./positions/positions.component */ 80449);
/* harmony import */ var src_app_store_lastposition_store_data_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/lastposition-store/data.module */ 87781);
/* harmony import */ var src_app_store_ship_selection_store_ship_selection_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/ship-selection-store/ship-selection.resolver */ 8065);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var src_app_store_ship_selection_store_ship_selection_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/store/ship-selection-store/ship-selection.module */ 95162);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/map.module */ 90353);
/* harmony import */ var _positions_positions_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./positions/positions.module */ 28850);
/* harmony import */ var src_app_store_spec_store_spec_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/store/spec-store/spec.module */ 31279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);




















const routes = [
    { path: ':id', component: _boot_component__WEBPACK_IMPORTED_MODULE_0__.BootComponent, data: { param: 'id' }, resolve: { data: src_app_store_ship_store_ship_resolver__WEBPACK_IMPORTED_MODULE_1__.ShipResolver },
        children: [
            { path: '', component: _streife_streife_component__WEBPACK_IMPORTED_MODULE_7__.StreifeComponent },
            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__.MapComponent },
            { path: 'positions', component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_9__.PositionsComponent }
        ],
    }
];
class BootModule {
}
BootModule.ɵfac = function BootModule_Factory(t) { return new (t || BootModule)(); };
BootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: BootModule });
BootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        src_app_store_ship_selection_store_ship_selection_resolver__WEBPACK_IMPORTED_MODULE_11__.ShipSelectionResolver,
        src_app_store_ship_store_ship_resolver__WEBPACK_IMPORTED_MODULE_1__.ShipResolver,
        src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_12__.AppService
    ], imports: [[
            _streife_streife_module__WEBPACK_IMPORTED_MODULE_8__.StreifeModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_14__.MapModule,
            _positions_positions_module__WEBPACK_IMPORTED_MODULE_15__.PositionsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            // router
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes),
            // store
            src_app_store_positionreport_store_data_module__WEBPACK_IMPORTED_MODULE_4__.DataModule,
            src_app_store_lastposition_store_data_module__WEBPACK_IMPORTED_MODULE_10__.LastPositionModule,
            src_app_store_ship_selection_store_ship_selection_module__WEBPACK_IMPORTED_MODULE_13__.ShipSelectionModule,
            src_app_store_ship_store_ship_module__WEBPACK_IMPORTED_MODULE_2__.ShipModule,
            src_app_store_zaehlerstand_store_data_module__WEBPACK_IMPORTED_MODULE_5__.ZaehlerstandModule,
            src_app_store_spec_store_spec_module__WEBPACK_IMPORTED_MODULE_16__.SpecModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](BootModule, { declarations: [_boot_component__WEBPACK_IMPORTED_MODULE_0__.BootComponent], imports: [_streife_streife_module__WEBPACK_IMPORTED_MODULE_8__.StreifeModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_14__.MapModule,
        _positions_positions_module__WEBPACK_IMPORTED_MODULE_15__.PositionsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, 
        // store
        src_app_store_positionreport_store_data_module__WEBPACK_IMPORTED_MODULE_4__.DataModule,
        src_app_store_lastposition_store_data_module__WEBPACK_IMPORTED_MODULE_10__.LastPositionModule,
        src_app_store_ship_selection_store_ship_selection_module__WEBPACK_IMPORTED_MODULE_13__.ShipSelectionModule,
        src_app_store_ship_store_ship_module__WEBPACK_IMPORTED_MODULE_2__.ShipModule,
        src_app_store_zaehlerstand_store_data_module__WEBPACK_IMPORTED_MODULE_5__.ZaehlerstandModule,
        src_app_store_spec_store_spec_module__WEBPACK_IMPORTED_MODULE_16__.SpecModule] }); })();


/***/ }),

/***/ 74805:
/*!**************************************************************!*\
  !*** ./src/app/modules/components/boot/map/map.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/state/actions */ 34622);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 64216);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/positionreport-store */ 36205);
/* harmony import */ var src_app_store_lastposition_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/lastposition-store */ 42513);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);















class MapComponent {
  constructor(store, appService, locationService, modalService) {
    this.store = store;
    this.appService = appService;
    this.locationService = locationService;
    this.modalService = modalService; // view

    this.positionToggle = true;
    this.allPositionToggle = true;
    this.positionSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(2); // positionForm: FormGroup

    this.positionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.currentPositionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.positions = [];
    this.arr = [];
    this.standort_marker = [];
    this.lastPosition_marker = []; // Position from all ships

    this.allShips = [];
    this.allShippsGroup = leaflet__WEBPACK_IMPORTED_MODULE_2__.layerGroup();
    this.positions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_3__.PositionSelectors.selectAllData));
    this.lastPositions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_lastposition_store__WEBPACK_IMPORTED_MODULE_4__.LastPositionSelectors.selectAllData));
  }

  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_5__.ShipSelectors.selectedShip)).subscribe(ship => {
      this.id_ship = ship === null || ship === void 0 ? void 0 : ship.id;
      this.name = ship === null || ship === void 0 ? void 0 : ship.name;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_5__.ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) {
        this.id_streife = id_streife;
        this.positions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_3__.PositionSelectors.selectDataByPatrol(this.id_streife)));
        this.lastPositions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_store_lastposition_store__WEBPACK_IMPORTED_MODULE_4__.LastPositionSelectors.selectDataWithoutPatrol(this.id_streife))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(data => console.log(`lastPositions - data: ${data}`)));
      }
    });
    leaflet__WEBPACK_IMPORTED_MODULE_2__.Icon.Default.imagePath = "assets/leaflet/";
  }

  ngAfterViewInit() {
    this.createMap();
    this.mark_current_position();
    this.positions$.subscribe(positions => {
      if (positions) this.set_standort_marker(positions);
    });
    this.lastPositions$.subscribe(positions => {
      if (positions) this.set_lastPosition_marker(positions);
    }); // this.positionSubscription
    //   .add(
    //     this.positions$.subscribe((data: any) => {
    //       this.positions = []
    //       this.positions = data
    //       data.forEach((pos: PositionReport, index: number) => {
    //         var svgIcon = L.divIcon({
    //           html: `
    //           <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
    //             <path fill="#414141" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
    //             <g>
    //               <circle fill="#FFF" cx="74" cy="75" r="48"/>
    //               <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="64" fill="#000">${index+1}</text>
    //             </g>
    //           </svg>
    //           `,
    //           className: "svg-icon",
    //           iconSize: [24, 40],
    //           iconAnchor: [12, 40],
    //           popupAnchor: [12, -40]
    //         });
    //         this.arr.push(L.marker([pos.location.latitude, pos.location.longitude], { icon: svgIcon }).bindPopup(`Beschreibung: ${pos.description}<br>Datum: ${pos.date}`))
    //       })
    //       this.markergroup = L.layerGroup(this.arr)
    //     })
    //   )
    //   .add(
    //     this.lastPositions$.subscribe((data: any) => {
    //   
    //       this.allShips.length = 0
    //       data.forEach((ship: any) => {
    //         console.log(ship)
    //         var svgIcon = L.divIcon({
    //           html: `
    //           <div class="relative">
    //             <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
    //               <path fill="#4287f5" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
    //               <g>
    //                 <circle fill="#FFF" cx="74" cy="75" r="48"/>
    //                 <svg x="22%" y="20%" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    //                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    //                   <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
    //                   <path d="M4 18l-1 -5h18l-2 4" />
    //                   <path d="M5 13v-6h8l4 6" />
    //                   <path d="M7 7v-4h-1" />
    //                 </svg>
    //               </g>
    //             </svg>
    //             <p class="absolute -left-5 p-1 text-center bg-gray-200 text-base bg-opacity-60 whitespace-nowrap">${ship.name}</p>
    //           </div>
    //           `,
    //           className: "svg-icon",
    //           iconSize: [24, 40],
    //           iconAnchor: [12, 40],
    //           popupAnchor: [12, -40]
    //         });
    //         this.allShips.push(L.marker([ship.location.latitude, ship.location.longitude], { icon: svgIcon }).bindPopup(`Datum: ${ship.date}`))
    //         console.log(this.allShips)
    //       })
    //       if (this.map && this.allShips.length > 0) {
    //         this.map.removeLayer(this.allShippsGroup)
    //         this.allShippsGroup = L.layerGroup(this.allShips)
    //       }
    //     })
    //   )
  }

  ngOnDestroy() {
    this.map.remove();
  }

  set_standort_marker(standorte) {
    this.standort_marker = [];
    if (!standorte) return;
    standorte.forEach((standort, index) => {
      var svgIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.divIcon({
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
            <path fill="#414141" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
            <g>
              <circle fill="#FFF" cx="74" cy="75" r="48"/>
              <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="64" fill="#000">${index + 1}</text>
            </g>
          </svg>
        `,
        className: "svg-icon",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12, -40]
      });
      this.standort_marker.push(leaflet__WEBPACK_IMPORTED_MODULE_2__.marker([standort.location.latitude, standort.location.longitude], {
        icon: svgIcon
      }).bindPopup(`<u>${standort.name}</u><br><br>Datum: ${standort.date}<br>Beschreibung: ${standort.description}`));
    });
    this.standort_marker_group = leaflet__WEBPACK_IMPORTED_MODULE_2__.layerGroup(this.standort_marker);
    this.standort_marker_group.addTo(this.map);
  }

  set_lastPosition_marker(standorte) {
    this.lastPosition_marker = [];
    if (!standorte) return;
    standorte.forEach(standort => {
      var svgIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.divIcon({
        html: `
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
              <path fill="#4287f5" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
              <g>
                <circle fill="#FFF" cx="74" cy="75" r="48"/>
                <svg x="22%" y="20%" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                  <path d="M4 18l-1 -5h18l-2 4" />
                  <path d="M5 13v-6h8l4 6" />
                  <path d="M7 7v-4h-1" />
                </svg>
              </g>
            </svg>
            <p class="absolute -left-5 p-1 text-center bg-gray-200 text-base bg-opacity-60 whitespace-nowrap">${standort.name}</p>
          </div>
        `,
        className: "svg-icon",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12, -40]
      });
      this.lastPosition_marker.push(leaflet__WEBPACK_IMPORTED_MODULE_2__.marker([standort.location.latitude, standort.location.longitude], {
        icon: svgIcon
      }).bindPopup(`<u>${standort.name}</u><br><br>Datum: ${standort.date}<br>Beschreibung: ${standort.description}`));
    });
    this.lastPosition_marker_group = leaflet__WEBPACK_IMPORTED_MODULE_2__.layerGroup(this.lastPosition_marker);
    this.lastPosition_marker_group.addTo(this.map);
  }

  toggleLastPositions() {
    if (this.map.hasLayer(this.lastPosition_marker_group)) {
      this.map.removeLayer(this.lastPosition_marker_group);
    } else {
      this.lastPosition_marker_group.addTo(this.map);
    }
  }

  toggleStandort() {
    if (this.map.hasLayer(this.standort_marker_group)) {
      this.map.removeLayer(this.standort_marker_group);
    } else {
      this.standort_marker_group.addTo(this.map);
    }
  }

  logout() {
    this.store.dispatch((0,src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
  }

  createMap() {
    const zoom = 12;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.positionSource$.next({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }

    this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__.map('map', {
      center: [52.5, 13.3],
      zoom: zoom,
      zoomControl: false
    }); // Layer: OpenStreetMap

    var OpenStreetMap_Mapnik = leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    OpenStreetMap_Mapnik.addTo(this.map); // Layer: OpenSeaMap

    var OpenSeaMap = leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
    });
    OpenSeaMap.addTo(this.map);
  }

  center_current_position() {
    this.locationService.getCurrentPosition().then(position => {
      this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__.LatLng(position.latitude, position.longitude));
    });

    if (this.map.hasLayer(this.marker_current_position)) {
      this.map.removeLayer(this.marker_current_position);
    } else {
      this.marker_current_position.addTo(this.map);
    }
  }

  mark_current_position() {
    var svgIcon = leaflet__WEBPACK_IMPORTED_MODULE_2__.divIcon({
      html: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 149 178">
        <path fill="#f55660" stroke="#FFF" stroke-width="5" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/>
        <g>
          <circle fill="#FFF" cx="74" cy="75" r="48"/>
          <svg xmlns="http://www.w3.org/2000/svg" x="22%" y="20%" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </g>
      </svg>
      `,
      className: "svg-icon",
      iconSize: [24, 40],
      iconAnchor: [12, 40],
      popupAnchor: [12, -40]
    });
    this.locationService.getCurrentPosition().then(position => {
      this.marker_current_position = leaflet__WEBPACK_IMPORTED_MODULE_2__.layerGroup([leaflet__WEBPACK_IMPORTED_MODULE_2__.marker([position.latitude, position.longitude], {
        icon: svgIcon
      }).bindPopup('Aktuelle Position')]);
      this.marker_current_position.addTo(this.map);
    });
  }

  centerMapOnPosition(position) {
    this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__.LatLng(position.latitude, position.longitude));
  }

  setToLocalPosition() {
    this.positionSource$.subscribe({
      next: pos => {
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__.LatLng(pos.latitude, pos.longitude));
      },
      error: err => console.log(`error: ${err}`),
      complete: () => console.log(`complete`)
    });
  }

  openPositionModal() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log('open');
      let position;
      const {
        PositionComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../positions/position/position.component */ 97202));

      _this.locationService.getCurrentPosition().then(data => {
        position = {
          id_ship: _this.id_ship,
          id_streife: _this.id_streife,
          date: new Date().toISOString(),
          location: {
            latitude: data.latitude,
            longitude: data.longitude
          },
          description: ''
        };

        _this.modalService.open(PositionComponent, {
          data: {
            title: 'Position hinzufügen',
            position
          }
        });
      }, error => console.error(error));
    })();
  }

}

MapComponent.ɵfac = function MapComponent_Factory(t) {
  return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_6__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_7__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService));
};

MapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: MapComponent,
  selectors: [["app-map"]],
  decls: 13,
  vars: 0,
  consts: [[1, "map_content"], [1, "absolute", "w-screen", "h-screen", "-m-px", "top-0", "right-0", "bottom-0", "left-0"], ["id", "map"], [1, "absolute", "flex", "flex-col", "bottom-8", "right-0", "z-40"], [1, "flex", "items-center", "p-3", "mr-3", "mb-3", "bg-gray-100", "opacity-75", "rounded-full", "shadow-md", "cursor-pointer", 3, "click"], [1, "w-8", "h-8"], ["name", "location-marker", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["name", "map-pins", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["name", "ship", 1, "w-8", "h-8", "stroke-1", "stroke-current"]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MapComponent_Template_button_click_4_listener() {
        return ctx.center_current_position();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "icons", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MapComponent_Template_button_click_7_listener() {
        return ctx.toggleStandort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "icons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MapComponent_Template_button_click_10_listener() {
        return ctx.toggleLastPositions();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "icons", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
  },
  directives: [_projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_9__.IconLibraryComponent],
  styles: [".map_content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: auto;\n  padding-top: 0.5rem;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.map_content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n#map[_ngcontent-%COMP%] {\n  z-index: 30;\n  height: 100%;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBQUE7QUFTQSxZQUFBO0FDWkE7RUFBQSxtQkFBQTtFQUFBLFNBQUE7RUFBQSxXQUFBO0VBQUEsWUFBQTtFQUFBLFVBQUE7RUFBQSxlQUFBO0VBQUEsb0JBQUE7RURlRSxpQ0FBQTtFQUNBO0NDaEJGO0FEa0JFO0VBQ0UsYUFBQTtBQVRKO0FDVkE7RUFBQSxZQUFBO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQTtDQUFBIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250ZW50XHJcbi8vICAgICBAYXBwbHkgYWJzb2x1dGUgaC1mdWxsIHctZnVsbCB0b3AtMCBiZy1yZWQtNDAwXHJcbiAgICBcclxuLypcclxuICBNYXBcclxuICAqL1xyXG4vLyAubWFwLWNvbnRhaW5lclxyXG4vLyAgICAgQGFwcGx5IHJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXIteWVsbG93LTUwMFxyXG5cclxuLy8gLm1hcC1mcmFtZVxyXG4vLyAgICAgQGFwcGx5IG92ZXJmbG93LWhpZGRlbiBoLWZ1bGwgdy1mdWxsIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWdyZWVuLTUwMFxyXG5cclxuLyogY29udGVudCAqL1xyXG4ubWFwX2NvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgcHQtMiBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcbiNtYXBcclxuICAgIEBhcHBseSBoLWZ1bGwgdy1mdWxsIHotMzAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZS01MDAiLG51bGxdfQ== */"]
});

/***/ }),

/***/ 90353:
/*!***********************************************************!*\
  !*** ./src/app/modules/components/boot/map/map.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ 74805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class MapModule {
}
MapModule.ɵfac = function MapModule_Factory(t) { return new (t || MapModule)(); };
MapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 97202:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/components/boot/positions/position/position.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionComponent": () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/positionreport-store */ 36205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);












const _c0 = ["modalComponent"];
function PositionComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function PositionComponent_ng_template_50_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_ng_template_50_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PositionComponent_ng_template_50_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_ng_template_50_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Speichern");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PositionComponent_ng_template_50_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_ng_template_50_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PositionComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_ng_template_50_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PositionComponent_ng_template_50_button_4_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PositionComponent_ng_template_50_button_6_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PositionComponent_ng_template_50_button_7_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.positionForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.positionForm.pristine && ctx_r3.positionForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.positionForm.value.id);
} }
class PositionComponent {
    constructor(store, _formBuilder, locationService, modalService) {
        this.store = store;
        this._formBuilder = _formBuilder;
        this.locationService = locationService;
        this.modalService = modalService;
        this.title = '';
        this.edit = false;
        this.positionForm = this._formBuilder.group({
            id: [],
            id_streife: [],
            id_ship: [],
            date: [],
            location: this._formBuilder.group({
                latitude: [],
                longitude: []
            }),
            description: []
        });
    }
    ngOnInit() {
        this.modalService.getData().then((data) => {
            this.title = data.data.title;
            this.positionForm.patchValue(data.data.position);
        });
    }
    setCurrentLocation() {
        this.locationService.getCurrentPosition().then(position => {
            this.positionForm.patchValue({ location: { latitude: position.latitude, longitude: position.longitude } });
        });
    }
    setDate() {
        this.positionForm.patchValue({ date: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date()) });
        // this.positionForm.patchValue({ date: new Date().toISOString().substring(0,16) })
        this.positionForm.controls['date'].markAsDirty();
    }
    create() {
        var _a;
        console.log(this.positionForm.value);
        const positionReport = this.positionForm.value;
        this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__.PositionActions.insertData({ positionReport }));
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
    update() {
        var _a;
        console.log(this.positionForm.value);
        const update = {
            id: this.positionForm.value.id,
            changes: this.positionForm.value
        };
        this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__.PositionActions.updateData({ update }));
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
    delete() {
        var _a;
        const id = this.positionForm.value.id;
        this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__.PositionActions.deleteData({ id }));
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
    cancel() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
}
PositionComponent.ɵfac = function PositionComponent_Factory(t) { return new (t || PositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService)); };
PositionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PositionComponent, selectors: [["app-position"]], viewQuery: function PositionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 52, vars: 16, consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "main_content", "mx-5"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_streife", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_ship", "readonly", ""], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "date", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["formGroupName", "location", 1, "grid", "grid-cols-2", "gap-3"], ["matInput", "", "type", "text", "formControlName", "latitude", 3, "value"], ["matInput", "", "type", "text", "formControlName", "longitude", 3, "value"], ["name", "map", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["matInput", "", "type", "text", "rows", "5", "formControlName", "description"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], [1, "py-3", "flex", "justify-between"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 mr-3 bg-red-400 text-black rounded", 3, "click", 4, "ngIf"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "mr-3", "bg-red-400", "text-black", "rounded", 3, "click"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]], template: function PositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "icons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "id_streife");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Id_Schiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Datum/Uhrzeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_Template_button_click_28_listener() { return ctx.setDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "icons", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionComponent_Template_button_click_42_listener() { return ctx.setCurrentLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "icons", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Beschreibung");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, PositionComponent_ng_container_49_Template, 1, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, PositionComponent_ng_template_50_Template, 8, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.positionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](27, 6, ctx.positionForm.value.date, "yyyy-MM-ddTHH:mm", "+1:00"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](36, 10, ctx.positionForm.value.location.latitude, "2.2-6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](41, 13, ctx.positionForm.value.location.longitude, "2.2-6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 80449:
/*!**************************************************************************!*\
  !*** ./src/app/modules/components/boot/positions/positions.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionsComponent": () => (/* binding */ PositionsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/state/actions */ 34622);
/* harmony import */ var src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/positionreport-store */ 36205);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);














function PositionsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "icons", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PositionsComponent_tr_21_Template_icons_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const position_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r3.openModal(position_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const position_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", position_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", position_r1.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 5, position_r1.date, "dd.MM.yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", position_r1.description, " ");
  }
}

class PositionsComponent {
  constructor(store, locationService, modalService) {
    this.store = store;
    this.locationService = locationService;
    this.modalService = modalService;
    this.allCheck = false;
    this.positions = [];
    this.isAllPositions = false;
    this._positionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.displayedColumns = ['Nr.', 'date', 'description', 'action'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
  }

  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_3__.ShipSelectors.selectedShip)).subscribe(ship => {
      this.id_ship = ship === null || ship === void 0 ? void 0 : ship.id;
      this.name = ship === null || ship === void 0 ? void 0 : ship.name;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_3__.ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) {
        this.id_streife = id_streife;

        this._positionSubscription.add(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_2__.PositionSelectors.selectDataByPatrol(this.id_streife))).subscribe(data => {
          this.positions = data;
        }));
      }
    });
  }

  ngOnDestroy() {
    this._positionSubscription.unsubscribe();
  }

  toggleCheck() {
    this.allCheck = !this.allCheck; // let items: Checklistitem[] = []
    // this.checklistKat.forEach(item => {
    //   items.push(Object.assign({}, item, { checked: this.allCheck }))
    // })
    // this.checklistKat = items
  }

  addPosition() {}

  delete(id) {
    this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_2__.PositionActions.deleteData({
      id
    }));
  }

  logout() {
    this.store.dispatch((0,src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
  }

  openModal(position) {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        PositionComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./position/position.component */ 97202));

      if (position) {
        _this.modalService.open(PositionComponent, {
          data: {
            title: 'Position bearbeiten',
            position
          }
        });
      } else {
        _this.locationService.getCurrentPosition().then(data => {
          console.info(`currentPosition | latitude: ${data.latitude}, longitude: ${data.longitude}`);
          position = {
            id_ship: _this.id_ship,
            id_streife: _this.id_streife,
            date: new Date().toISOString(),
            location: {
              latitude: data.latitude,
              longitude: data.longitude
            },
            description: ''
          };

          _this.modalService.open(PositionComponent, {
            data: {
              title: 'Position hinzufügen',
              position
            }
          });
        }, error => console.error(error));
      }
    })();
  }

}

PositionsComponent.ɵfac = function PositionsComponent_Factory(t) {
  return new (t || PositionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService));
};

PositionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PositionsComponent,
  selectors: [["app-positions"]],
  decls: 26,
  vars: 2,
  consts: [[1, "position_content"], [1, "text-lg", "m-3"], [1, "w-full", "bg-white", "rounded-lg", "py-2", "shadow-lg"], [1, "min-w-full", "bg-white", "dark:bg-gray-800", 2, "width", "100%"], [1, "w-full", "h-12", "border-gray-300", "border-b", "py-8"], [1, "text-gray-600", "dark:text-gray-400", "font-normal", "pr-6", "text-left", "text-md", "tracking-normal", "leading-4", "hidden"], [1, "px-2", "text-gray-600", "dark:text-gray-400", "font-normal", "text-left", "text-md", "tracking-normal", "leading-4", "hidden"], [1, "px-2", "text-gray-600", "dark:text-gray-400", "font-normal", "text-left", "text-md", "tracking-normal", "leading-4"], ["type", "checkbox", 1, "cursor-pointer", "relative", "w-5", "h-5", "border", "rounded", "border-gray-400", "bg-white", "dark:bg-gray-800", "outline-none", 3, "checked", "click"], [1, "text-gray-600", "dark:text-gray-400", "font-normal", "pr-2", "text-left", "text-md", "tracking-normal", "leading-4"], [1, "text-gray-600", "dark:text-gray-400", "font-normal", "pr-6", "text-left", "text-md", "tracking-normal", "leading-4"], ["class", "h-12 bg-gray-50 border-b border-gray-300 text-gray-800 dark:text-gray-100", 4, "ngFor", "ngForOf"], [1, "mt-5", "ml-5", "p-2", "flex", "items-center", "bg-gray-100", "border", "border-gray-300", "text-gray-600", "transition", "duration-150", "ease-in-out", "hover:bg-blue-600", "hover:text-white", "rounded", "cursor-pointer", 3, "click"], [1, "h-6", "w-6", "mr-2"], ["name", "add", 1, "w-6", "h-6", "stroke-1", "stroke-current"], [1, "h-12", "bg-gray-50", "border-b", "border-gray-300", "text-gray-800", "dark:text-gray-100"], [1, "w-12", "text-sm", "pr-6", "whitespace-no-wrap", "tracking-normal", "leading-4", "hidden"], [1, "text-sm", "px-2", "whitespace-no-wrap", "tracking-normal", "leading-4", "hidden"], [1, "px-2", "text-left", "whitespace-no-wrap", "text-sm", "tracking-normal", "leading-4"], ["type", "checkbox", 1, "cursor-pointer", "relative", "w-5", "h-5", "border", "rounded", "border-gray-400", "bg-white", "dark:bg-gray-800", "outline-none"], [1, "text-sm", "pr-2", "whitespace-no-wrap", "tracking-normal", "leading-4"], [1, "w-12", "text-sm", "pr-6", "whitespace-no-wrap", "tracking-normal", "leading-4"], [1, "w-6", "h-6"], ["name", "edit", 1, "w-6", "h-6", "stroke-1", "stroke-current", "cursor-pointer", 3, "click"]],
  template: function PositionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Gesetzte Positionen");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Datum ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Id ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PositionsComponent_Template_input_click_12_listener() {
        return ctx.toggleCheck();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Nr. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Datum ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Beschreibung ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PositionsComponent_tr_21_Template, 17, 8, "tr", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PositionsComponent_Template_button_click_22_listener() {
        return ctx.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "icons", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Position hinzuf\u00FCgen ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.allCheck);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.positions);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__.IconLibraryComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-demo-position[_ngcontent-%COMP%] {\n  width: 32px;\n  border-right: 1px solid currentColor;\n  padding-right: 24px;\n  text-align: center;\n}\n\n.mat-column-demo-name[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  font-size: 20px;\n}\n\n.mat-column-demo-weight[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.mat-column-demo-symbol[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.dropdown[_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown.open[_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.position_content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5rem;\n  right: 0.75rem;\n  bottom: 0px;\n  left: 0.75rem;\n  margin-bottom: 0.75rem;\n  overflow: auto;\n  padding-top: 0.5rem;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.position_content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2l0aW9ucy5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUN4QkE7RUFBQTtDQUFBOztBQUFBO0VBQUE7Q0FBQTs7QUQ0QkEsWUFBQTs7QUM1QkE7RUFBQSxtQkFBQTtFQUFBLFVBQUE7RUFBQSxlQUFBO0VBQUEsWUFBQTtFQUFBLGNBQUE7RUFBQSx1QkFBQTtFQUFBLGVBQUE7RUFBQSxvQkFBQTtFRCtCRSxpQ0FBQTtFQUNBO0NDaENGOztBRGtDRTtFQUNFLGFBQUE7QUFPSiIsImZpbGUiOiJwb3NpdGlvbnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWJsZVxyXG4uZGVtby10YWJsZSBcclxuICB3aWR0aDogMTAwJVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1wb3NpdGlvbiBcclxuICB3aWR0aDogMzJweFxyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvclxyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHhcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbi5tYXQtY29sdW1uLWRlbW8tbmFtZSBcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHhcclxuICBmb250LXNpemU6IDIwcHhcclxuXHJcbi5tYXQtY29sdW1uLWRlbW8td2VpZ2h0IFxyXG4gIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1zeW1ib2wgXHJcbiAgd2lkdGg6IDMycHhcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICBmb250LXdlaWdodDogYm9sZFxyXG5cclxuLmRyb3Bkb3dufmRpdlxyXG4gIEBhcHBseSBoaWRkZW5cclxuXHJcbi5kcm9wZG93bi5vcGVufmRpdlxyXG4gIEBhcHBseSBibG9ja1xyXG5cclxuLyogY29udGVudCAqL1xyXG4ucG9zaXRpb25fY29udGVudFxyXG4gIEBhcHBseSBhYnNvbHV0ZSB0b3AtMjAgcmlnaHQtMyBib3R0b20tMCBsZWZ0LTMgcHQtMiBtYi0zIG92ZXJmbG93LWF1dG9cclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2hcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhclxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhclxyXG4gICAgZGlzcGxheTogbm9uZSIsbnVsbF19 */"]
});

/***/ }),

/***/ 28850:
/*!***********************************************************************!*\
  !*** ./src/app/modules/components/boot/positions/positions.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionsModule": () => (/* binding */ PositionsModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position/position.component */ 97202);
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positions.component */ 80449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




class PositionsModule {
}
PositionsModule.ɵfac = function PositionsModule_Factory(t) { return new (t || PositionsModule)(); };
PositionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PositionsModule });
PositionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PositionsModule, { declarations: [_positions_component__WEBPACK_IMPORTED_MODULE_2__.PositionsComponent,
        _position_position_component__WEBPACK_IMPORTED_MODULE_1__.PositionComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 3566:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/besatzung/besatzung.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesatzungComponent": () => (/* binding */ BesatzungComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/kat-store */ 66704);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5015);
















const _c0 = ["modalComponent"];

function BesatzungComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const funktion_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", funktion_r5.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", funktion_r5.bezeichnung, " ");
  }
}

function BesatzungComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

function BesatzungComponent_ng_template_50_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_ng_template_50_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r9.delete(ctx_r9.besatzungForm.value.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function BesatzungComponent_ng_template_50_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_ng_template_50_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r11.update();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Speichern");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function BesatzungComponent_ng_template_50_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_ng_template_50_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r13.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function BesatzungComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_ng_template_50_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r15.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BesatzungComponent_ng_template_50_button_3_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, BesatzungComponent_ng_template_50_button_5_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BesatzungComponent_ng_template_50_button_6_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.besatzungForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.besatzungForm.pristine && ctx_r4.besatzungForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.besatzungForm.value.id);
  }
}

class BesatzungComponent {
  constructor(_formBuilder, store, modalService, appService) {
    this._formBuilder = _formBuilder;
    this.store = store;
    this.modalService = modalService;
    this.appService = appService;
    this.title = '';
    this.edit = false;
    this.funktionen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_1__.KatSelectors.selectAllFunktionen));
    this.besatzungForm = this._formBuilder.group({
      id: [],
      id_streife: [],
      funktion: [],
      persnr: [],
      name: [],
      an_bord: [''],
      von_bord: ['']
    });
  }

  get form() {
    return this.besatzungForm.controls;
  }

  ngOnInit() {
    this.modalService.getData().then(data => {
      this.title = data.data.title;
      console.log(data.data.besatzung);
      this.besatzungForm.patchValue(data.data.besatzung);
      console.log(this.besatzungForm.value); // this.besatzungForm.value.an_bord = data.data.besatzung.an_bord
    });
  }

  setAnBordDate() {
    this.besatzungForm.patchValue({
      an_bord: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date())
    }); // this.besatzungForm.patchValue({ an_bord: new Date().toISOString().substring(0,16) })

    this.besatzungForm.controls['an_bord'].markAsDirty();
  }

  setVonBordDate() {
    this.besatzungForm.patchValue({
      von_bord: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date())
    }); // this.besatzungForm.patchValue({ von_bord: new Date().toISOString().substring(0,16) })

    this.besatzungForm.controls['von_bord'].markAsDirty();
  }

  create() {
    var _a;

    const insert = this.besatzungForm.value;
    console.log(insert);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.insertPatrolBesatzung({
      insert
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  update() {
    var _a;

    const update = {
      id: this.besatzungForm.value.id_streife,
      changes: this.besatzungForm.value
    };
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.updatePatrolBesatzung({
      update
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  delete(id) {
    var _a;

    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.deletePatrolBesatzung({
      id
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  cancel() {
    var _a;

    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

}

BesatzungComponent.ɵfac = function BesatzungComponent_Factory(t) {
  return new (t || BesatzungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService));
};

BesatzungComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BesatzungComponent,
  selectors: [["app-besatzung"]],
  viewQuery: function BesatzungComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    }
  },
  decls: 52,
  vars: 16,
  consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_streife", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "text", "formControlName", "persnr"], ["formControlName", "funktion"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "an_bord", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["matInput", "", "type", "datetime-local", "formControlName", "von_bord", 3, "value"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], [3, "value"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 mr-3 bg-red-400 text-black rounded", 3, "click", 4, "ngIf"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "mr-3", "bg-red-400", "text-black", "rounded", 3, "click"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]],
  template: function BesatzungComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_Template_button_click_5_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "icons", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "id");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "id_streife");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Personalnummer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Funktion");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, BesatzungComponent_mat_option_30_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "An Bord");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_Template_button_click_38_listener() {
        return ctx.setAnBordDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "icons", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Von Bord");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BesatzungComponent_Template_button_click_46_listener() {
        return ctx.setVonBordDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "icons", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "footer", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, BesatzungComponent_ng_container_49_Template, 1, 0, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, BesatzungComponent_ng_template_50_Template, 7, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.besatzungForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 6, ctx.funktionen$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](37, 8, ctx.besatzungForm.value.an_bord, "yyyy-MM-ddTHH:mm", "+1:00"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](45, 12, ctx.besatzungForm.value.von_bord, "yyyy-MM-ddTHH:mm", "+1:00"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
  },
  directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: ["/* content */\n.content {\n  position: absolute;\n  top: 8rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content::-webkit-scrollbar {\n  display: none;\n}\n/* modal dark-theme*/\n.dark .mat-form-field-ripple {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark .mat-form-field-underline:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark mat-label {\n  color: lightgray !important;\n}\n.dark .mat-select-value {\n  color: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc2F0enVuZy5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUNBQTtFQUFBLG1CQUFBO0VBQUEsVUFBQTtFQUFBLFlBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RURHRSxpQ0FBQTtFQUNBO0NDSkY7QURNRTtFQUNFLGFBQUE7QUFDSjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxxREFBQTtBQUVGO0FBQ0U7RUFDRSxxREFBQTtBQUVKO0FBQUE7RUFDRSwyQkFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtBQUlGIiwiZmlsZSI6ImJlc2F0enVuZy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnRlbnQgKi9cclxuLmNvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTMyIHJpZ2h0LTggYm90dG9tLTE2IGxlZnQtOCBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcbi8qIG1vZGFsIGRhcmstdGhlbWUqL1xyXG4uZGFyayAubWF0LWZvcm0tZmllbGQtcmlwcGxlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmVcclxuICAmOmJlZm9yZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIG1hdC1sYWJlbFxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1zZWxlY3QtdmFsdWVcclxuICBjb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQiLG51bGxdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 65824:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/betankung/betankung.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetankungComponent": () => (/* binding */ BetankungComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/kat-store */ 66704);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/kat-store/kat.facade */ 49142);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5015);

















const _c0 = ["modalComponent"];

function BetankungComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const betriebsstoff_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", betriebsstoff_r5.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", betriebsstoff_r5.bezeichnung, " ");
  }
}

function BetankungComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function BetankungComponent_ng_template_56_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_ng_template_56_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r9.delete(ctx_r9.betankungForm.value.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BetankungComponent_ng_template_56_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_ng_template_56_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r11.update();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Speichern");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BetankungComponent_ng_template_56_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_ng_template_56_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r13.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function BetankungComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_ng_template_56_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BetankungComponent_ng_template_56_button_3_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BetankungComponent_ng_template_56_button_5_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BetankungComponent_ng_template_56_button_6_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.betankungForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.betankungForm.pristine && ctx_r4.betankungForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.betankungForm.value.id);
  }
}

class BetankungComponent {
  constructor(_formBuilder, store, modalService, locationService, _katFacade) {
    this._formBuilder = _formBuilder;
    this.store = store;
    this.modalService = modalService;
    this.locationService = locationService;
    this._katFacade = _katFacade;
    this.title = ''; // this.betriebsstoffe$ = this._katFacade.betriebsstoffe$

    this.betriebsstoffe$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_1__.KatSelectors.selectAllBetriebsstoffe));
    this.betankungForm = this._formBuilder.group({
      id: [],
      id_ship: [],
      date: [],
      location: this._formBuilder.group({
        latitude: [],
        longitude: []
      }),
      ort: [],
      fuel: [],
      fuelfillingquantity: []
    });
  }

  ngOnInit() {
    this.modalService.getData().then(data => {
      this.title = data.data.title;
      this.betankungForm.patchValue(data.data);
    });
  }

  setDate() {
    this.betankungForm.patchValue({
      date: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date())
    }); // this.betankungForm.patchValue({ date: new Date().toISOString().substring(0,16) })

    this.betankungForm.controls['date'].markAsDirty();
  }

  setCurrentLocation() {
    this.locationService.getCurrentPosition().then(position => {
      this.betankungForm.patchValue({
        location: {
          latitude: position.latitude,
          longitude: position.longitude
        }
      });
    });
  }

  create() {
    var _a;

    const insert = this.betankungForm.value;
    console.log(insert);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.insertBetankung({
      insert
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  update() {
    var _a;

    const update = {
      id: this.betankungForm.value.id_streife,
      changes: this.betankungForm.value
    };
    console.log(update);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.updateBetankung({
      update
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  delete(id) {
    var _a;

    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.deleteBetankung({
      id
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  cancel() {
    var _a;

    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

}

BetankungComponent.ɵfac = function BetankungComponent_Factory(t) {
  return new (t || BetankungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_5__.KatFacade));
};

BetankungComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BetankungComponent,
  selectors: [["app-betankung"]],
  viewQuery: function BetankungComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    }
  },
  decls: 58,
  vars: 19,
  consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_ship", "readonly", ""], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "date", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["formGroupName", "location", 1, "grid", "grid-cols-2", "gap-3"], ["matInput", "", "type", "text", "formControlName", "latitude", 3, "value"], ["matInput", "", "type", "text", "formControlName", "longitude", 3, "value"], ["name", "map", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["matInput", "", "type", "text", "formControlName", "ort"], ["formControlName", "fuel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "fuelfillingquantity"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], [3, "value"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 mr-3 bg-red-400 text-black rounded", 3, "click", 4, "ngIf"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "mr-3", "bg-red-400", "text-black", "rounded", 3, "click"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]],
  template: function BetankungComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-modal", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_Template_button_click_5_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "icons", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "id");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "id_ship");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Datum/Uhrzeit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_Template_button_click_24_listener() {
        return ctx.setDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "icons", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Latitude");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Longitude");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BetankungComponent_Template_button_click_38_listener() {
        return ctx.setCurrentLocation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "icons", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Ortsbezeichnung");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Was wurde getankt");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, BetankungComponent_mat_option_48_Template, 2, 2, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Menge (in Liter)");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "footer", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, BetankungComponent_ng_container_55_Template, 1, 0, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, BetankungComponent_ng_template_56_Template, 7, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](57);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.betankungForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](23, 7, ctx.betankungForm.value.date, "yyyy-MM-ddTHH:mm", "+1:00"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](32, 11, ctx.betankungForm.value.location.latitude, "2.2-6"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](37, 14, ctx.betankungForm.value.location.longitude, "2.2-6"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 17, ctx.betriebsstoffe$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
  },
  directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_7__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["/* content */\n.content {\n  position: absolute;\n  top: 8rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content::-webkit-scrollbar {\n  display: none;\n}\n/* modal dark-theme*/\n.dark .mat-form-field-ripple {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark .mat-form-field-underline:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark mat-label {\n  color: lightgray !important;\n}\n.dark .mat-select-value {\n  color: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldGFua3VuZy5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUNBQTtFQUFBLG1CQUFBO0VBQUEsVUFBQTtFQUFBLFlBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RURHRSxpQ0FBQTtFQUNBO0NDSkY7QURNRTtFQUNFLGFBQUE7QUFDSjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxxREFBQTtBQUVGO0FBQ0U7RUFDRSxxREFBQTtBQUVKO0FBQUE7RUFDRSwyQkFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtBQUlGIiwiZmlsZSI6ImJldGFua3VuZy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnRlbnQgKi9cclxuLmNvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTMyIHJpZ2h0LTggYm90dG9tLTE2IGxlZnQtOCBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcbi8qIG1vZGFsIGRhcmstdGhlbWUqL1xyXG4uZGFyayAubWF0LWZvcm0tZmllbGQtcmlwcGxlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmVcclxuICAmOmJlZm9yZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIG1hdC1sYWJlbFxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1zZWxlY3QtdmFsdWVcclxuICBjb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQiLG51bGxdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 64824:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/checkliste/checklist-items/checklist-items.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistItemsComponent": () => (/* binding */ ChecklistItemsComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_info_popup_info_button_info_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/directives/info-popup/info-button/info-button.component */ 3750);
/* harmony import */ var _shared_directives_info_popup_info_popup_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/directives/info-popup/info-popup.directive */ 22893);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











const _c0 = ["modalComponent"];

function ChecklistItemsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ChecklistItemsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ChecklistItemsComponent_tr_28_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r10.toggleitem(item_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "icons", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChecklistItemsComponent_tr_28_Template_icons_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r12.benachrichtigen(item_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r9.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r9.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", item_r9.relevant ? "underline" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r9.bezeichnung, " ");
  }
}

function ChecklistItemsComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ChecklistItemsComponent_tr_30_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r14.toggleitem(item_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r13.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r13.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r13.bezeichnung, " ");
  }
}

function ChecklistItemsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}

function ChecklistItemsComponent_ng_template_34_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChecklistItemsComponent_ng_template_34_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r17.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Speichern");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ChecklistItemsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChecklistItemsComponent_ng_template_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r19.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Schlie\u00DFen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChecklistItemsComponent_ng_template_34_button_4_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.edit);
  }
}

class ChecklistItemsComponent {
  constructor(store, modalService) {
    this.store = store;
    this.modalService = modalService;
    this.title = '';
    this.edit = false;
    this.allCheck = true;
    this.patrolId = '';
  }

  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectPatrolId)).subscribe(id => this.patrolId = id);
    this.checked$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectCheckedChecklistItems));
    this.unchecked$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectUncheckedChecklistItems));
    this.modalService.getData().then(data => {
      this.title = data.data.title;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectChecklist)).subscribe(checklist => {
      this.checklist = checklist;
    });
  }

  toggleCheck() {
    this.allCheck = !this.allCheck;

    if (this.allCheck) {
      this.unchecked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(items => {
        items.forEach(item => item.checked = this.allCheck);
      });
    } else {
      this.checked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(items => {
        items.forEach(item => item.checked = this.allCheck);
      });
    }
  }

  toggleitem(item) {
    var _a;

    this.edit = true;
    const newItem = Object.assign({}, item, {
      checked: !item.checked
    });
    const update = Object.assign({}, this.checklist);
    const cleared = (_a = this.checklist.checklistItems) === null || _a === void 0 ? void 0 : _a.filter(el => el.id != newItem.id);
    update.checklistItems = [...cleared, newItem];
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipAction.updateChecklist({
      update
    }));
  }

  getChecklistStatus(checklistItems) {
    let status = 'vollständig';
    checklistItems === null || checklistItems === void 0 ? void 0 : checklistItems.forEach(checklistItem => {
      switch (true) {
        case checklistItem.checked == false && checklistItem.relevant == false:
          status = 'unvollständig';
          break;

        case checklistItem.checked == false && checklistItem.relevant == true:
          status = 'Tätigkeit eingeschränkt';
          break;

        default:
          status = 'vollständig';
      }
    });
    return status;
  }

  benachrichtigen(item) {
    let message;
    let address = item.benachrichtigen.split(',');
    message = `Das Checklistenelement ${item.bezeichnung} ist defekt/verbraucht und muss erneuert/ausgetauscht werden.`;
    message = `mailto:${address.join('; ')}?subject=Information: Checkliste zu ${this.checklist.name}&body=${message}`;
    window.location.href = message;
  }

  create() {
    var _a;

    const status = this.getChecklistStatus(this.checklist.checklistItems);
    const insert = Object.assign({}, this.checklist, {
      id: this.patrolId,
      datum: new Date().toISOString().substring(0, 16),
      status
    });
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertChecklist({
      insert
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  cancel() {
    var _a;

    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

}

ChecklistItemsComponent.ɵfac = function ChecklistItemsComponent_Factory(t) {
  return new (t || ChecklistItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService));
};

ChecklistItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ChecklistItemsComponent,
  selectors: [["app-checklist-items"]],
  viewQuery: function ChecklistItemsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    }
  },
  decls: 36,
  vars: 11,
  consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "content-center", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "flex", "flex-row", "content-center"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer"], ["label", ""], [3, "appInfoPopup", "label"], ["name", "question-mark", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], ["question", ""], [1, "w-6", "h-6", "ml-2", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [1, "text-lg", "m-3"], [1, "w-full", "bg-white", "rounded-lg", "py-2", "shadow-lg"], [1, "min-w-full", "bg-white", "dark:bg-gray-800", 2, "width", "100%"], [1, "w-full", "h-12", "border-gray-300", "border-b", "py-8"], [1, "px-2", "text-gray-600", "dark:text-gray-400", "font-normal", "text-left", "text-md", "tracking-normal", "leading-4", "hidden"], [1, "px-2", "w-8", "text-gray-600", "dark:text-gray-400", "font-normal", "text-left", "text-md", "tracking-normal", "leading-4"], [1, "text-gray-600", "dark:text-gray-400", "font-normal", "pr-2", "text-left", "text-md", "tracking-normal", "leading-4"], ["class", "h-12 bg-gray-100 border-b border-gray-300", 4, "ngFor", "ngForOf"], ["class", "h-12 bg-gray-50 border-b border-gray-300", 4, "ngFor", "ngForOf"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], [1, "p-2", "ml-5", "mt-3", "min-w-min", "max-w-md", "bg-gray-100", "border", "border-gray-400", "break-words", "rounded", "shadow-lg"], [1, "h-12", "bg-gray-100", "border-b", "border-gray-300"], [1, "text-sm", "px-2", "whitespace-no-wrap", "text-gray-800", "dark:text-gray-100", "tracking-normal", "leading-4", "hidden"], [1, "px-2", "text-left", "whitespace-no-wrap", "text-sm", "text-gray-800", "dark:text-gray-100", "tracking-normal", "leading-4"], ["type", "checkbox", 1, "cursor-pointer", "relative", "w-5", "h-5", "border", "rounded", "border-gray-400", "bg-white", "dark:bg-gray-800", "outline-none", 3, "checked", "change"], [1, "text-sm", "pr-2", "whitespace-no-wrap", "text-gray-800", "dark:text-gray-100", "tracking-normal", "leading-4", 3, "ngClass"], [1, "pr-2", "leading-4"], [1, "w-6", "h-6"], ["name", "mail", 1, "w-6", "h-6", "stroke-1", "stroke-current", "cursor-pointer", 3, "click"], [1, "h-12", "bg-gray-50", "border-b", "border-gray-300"], [1, "text-sm", "pr-2", "whitespace-no-wrap", "text-gray-800", "dark:text-gray-100", "tracking-normal", "leading-4"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]],
  template: function ChecklistItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-info-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "icons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChecklistItemsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChecklistItemsComponent_Template_button_click_12_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "icons", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Id ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Bezeichnung ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ChecklistItemsComponent_tr_28_Template, 10, 4, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ChecklistItemsComponent_tr_30_Template, 8, 3, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "footer", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ChecklistItemsComponent_ng_container_33_Template, 1, 0, "ng-container", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ChecklistItemsComponent_ng_template_34_Template, 5, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appInfoPopup", _r2)("label", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Checkliste ", ctx.checklist.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 7, ctx.unchecked$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 9, ctx.checked$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
  },
  directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent, _shared_directives_info_popup_info_button_info_button_component__WEBPACK_IMPORTED_MODULE_3__.InfoButtonComponent, _shared_directives_info_popup_info_popup_directive__WEBPACK_IMPORTED_MODULE_4__.InfoPopupDirective, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__.IconLibraryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["/* content */\n.content {\n  position: absolute;\n  top: 5rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content::-webkit-scrollbar {\n  display: none;\n}\n/* modal dark-theme*/\n.dark .mat-form-field-ripple {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark .mat-form-field-underline:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark mat-label {\n  color: lightgray !important;\n}\n.dark .mat-select-value {\n  color: lightgray !important;\n}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: green;\n}\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element, .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC1pdGVtcy5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUNBQTtFQUFBLG1CQUFBO0VBQUEsVUFBQTtFQUFBLFlBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RURHRSxpQ0FBQTtFQUNBO0NDSkY7QURNRTtFQUNFLGFBQUE7QUFDSjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxxREFBQTtBQUVGO0FBQ0U7RUFDRSxxREFBQTtBQUVKO0FBQUE7RUFDRSwyQkFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtBQUlGO0FBRkE7RUFDSSx1QkFBQTtBQUtKO0FBSEE7RUFDSSx1QkFBQTtBQU1KIiwiZmlsZSI6ImNoZWNrbGlzdC1pdGVtcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnRlbnQgKi9cclxuLmNvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTIwIHJpZ2h0LTggYm90dG9tLTE2IGxlZnQtOCBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuICBcclxuLyogbW9kYWwgZGFyay10aGVtZSovXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC1yaXBwbGVcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZVxyXG4gICY6YmVmb3JlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgbWF0LWxhYmVsXHJcbiAgY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50XHJcblxyXG4uZGFyayAubWF0LXNlbGVjdC12YWx1ZVxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudFxyXG5cclxuLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblxyXG5cclxuLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnRcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IixudWxsXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 34962:
/*!************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/checkliste/checkliste.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklisteComponent": () => (/* binding */ ChecklisteComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = function (a0) {
  return {
    "text-red-600": a0
  };
};

function ChecklisteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, item_r1.relevant == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.bezeichnung, " ");
  }
}

class ChecklisteComponent {
  constructor(store, modalService) {
    this.store = store;
    this.modalService = modalService;
    this.unchecked$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectUncheckedChecklistItems));
  }

  ngOnInit() {}

  openChecklisteModal() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        ChecklistItemsComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./checklist-items/checklist-items.component */ 64824));

      _this.modalService.open(ChecklistItemsComponent, {
        data: {
          title: 'Checkliste kontrollieren'
        }
      });
    })();
  }

}

ChecklisteComponent.ɵfac = function ChecklisteComponent_Factory(t) {
  return new (t || ChecklisteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
};

ChecklisteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ChecklisteComponent,
  selectors: [["app-checkliste"]],
  decls: 14,
  vars: 3,
  consts: [[1, "w-full", "mt-4", "bg-white", "rounded-lg", "shadow-lg"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-gray-500"], [1, "mt-3", "text-sm", "text-gray-500"], [1, "w-10", "h-10", "m-2", "bg-gray-100", "hover:bg-gray-200", "text-blue-500", "shadow-inner", "rounded-full", "cursor-pointer", 3, "click"], ["name", "add", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["class", "p-4 border-b hover:bg-gray-50", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-4", "border-b", "hover:bg-gray-50", 3, "ngClass"]],
  template: function ChecklisteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Checkliste");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Durch die Zuhilfenahme der Checkliste konnen verbrauchte oder abhanden gekommene Ausstattungsgegenst\u00E4nde erkannt werden. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Die folgenden Gegenst\u00E4nde sind verbraucht oder nicht vorhanden und m\u00FCssen ersetzt werden. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChecklisteComponent_Template_button_click_10_listener() {
        return ctx.openChecklisteModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "icons", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ChecklisteComponent_div_12_Template, 2, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 1, ctx.unchecked$));
    }
  },
  directives: [_projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__.IconLibraryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2xpc3RlLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 11111:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/kontrolle/kontrolle.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KontrolleComponent": () => (/* binding */ KontrolleComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





function KontrolleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Besatzung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Es wurden keine Besatzungsmitglieder f\u00FCr diese Streife hinterlegt. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KontrolleComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.bezeichnung, " ");
} }
function KontrolleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Checkliste");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Die folgenden Gegenst\u00E4nde sind verbraucht oder nicht vorhanden und m\u00FCssen ersetzt werden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KontrolleComponent_div_1_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.unchecked);
} }
class KontrolleComponent {
    constructor(store) {
        this.store = store;
        this.besatzung = false;
        this.checkliste = false;
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectUncheckedChecklistItems)).subscribe(unchecked => {
            var _a;
            this.unchecked = unchecked === null || unchecked === void 0 ? void 0 : unchecked.filter(el => el.relevant == true);
            if (this.unchecked != undefined && ((_a = this.unchecked) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.checkliste = true;
            }
            else {
                this.checkliste = false;
            }
        });
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectBesatzung)).subscribe((besatzung) => {
            if (besatzung == undefined || besatzung.length < 1) {
                this.besatzung = true;
            }
            else {
                this.besatzung = false;
            }
        });
    }
}
KontrolleComponent.ɵfac = function KontrolleComponent_Factory(t) { return new (t || KontrolleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
KontrolleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KontrolleComponent, selectors: [["kontrolle"]], decls: 2, vars: 2, consts: [["class", "w-full mt-4 bg-white rounded-lg shadow-lg", 4, "ngIf"], [1, "w-full", "mt-4", "bg-white", "rounded-lg", "shadow-lg"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-lg", "font-medium"], [1, "mt-3", "text-sm", "text-gray-500"], ["class", "p-4 border-b hover:bg-gray-50 text-red-600", 4, "ngFor", "ngForOf"], [1, "p-4", "border-b", "hover:bg-gray-50", "text-red-600"]], template: function KontrolleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, KontrolleComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KontrolleComponent_div_1_Template, 8, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.besatzung);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkliste);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb250cm9sbGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 50733:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/peilung/peilung-modal/peilung-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeilungModalComponent": () => (/* binding */ PeilungModalComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);















const _c0 = ["modalComponent"];

function PeilungModalComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tank_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tank_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tank_r5.bezeichnung, " ");
  }
}

function PeilungModalComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}

function PeilungModalComponent_ng_template_45_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PeilungModalComponent_ng_template_45_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r7.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function PeilungModalComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PeilungModalComponent_ng_template_45_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PeilungModalComponent_ng_template_45_button_4_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.peilungForm.value.id);
  }
}

class PeilungModalComponent {
  constructor(_formBuilder, store, modalService, appService) {
    this._formBuilder = _formBuilder;
    this.store = store;
    this.modalService = modalService;
    this.appService = appService;
    this.title = '';
    this.id_ship = '';
    this.tanks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectTanks));
    this.peilungForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      id_tank: [],
      bezeichnung: [],
      max_vol: [],
      vol: [],
      date: [],
      schiffsname: []
    });
  }

  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectShipId)).subscribe(data => {
      this.peilungForm.patchValue({
        id_schiff: data
      });
    });
    this.modalService.getData().then(data => {
      this.title = data.data.title;
      this.peilungForm.patchValue({
        date: data.data.date
      });
    });
  }

  setDate() {
    this.peilungForm.patchValue({
      date: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date())
    }); // this.peilungForm.patchValue({ date: new Date().toISOString().substring(0,16) })

    this.peilungForm.controls['date'].markAsDirty();
  }

  selectTank(id_tank) {
    this.peilungForm.controls.id_tank.setValue(id_tank);
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectTankById(id_tank))).subscribe(data => {
      this.peilungForm.patchValue({
        max_vol: data === null || data === void 0 ? void 0 : data.max_vol,
        bezeichnung: data === null || data === void 0 ? void 0 : data.bezeichnung
      });
    });
  }

  create() {
    var _a;

    const insert = this.peilungForm.value;
    console.log(insert);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertPeilung({
      insert
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  update() {// const update: Update<Peilung> = {
    //   id: this.peilungForm.value.id,
    //   changes: this.peilungForm.value 
    // }
    // const peilung: Peilung = this.peilungForm.value
    // console.log(peilung)
    // this.store.dispatch(ShipAction.updatePeilung({ peilung }))
    // this.modal?.close()
  }

  cancel() {
    var _a;

    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

}

PeilungModalComponent.ɵfac = function PeilungModalComponent_Factory(t) {
  return new (t || PeilungModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService));
};

PeilungModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PeilungModalComponent,
  selectors: [["app-peilung-modal"]],
  viewQuery: function PeilungModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    }
  },
  decls: 47,
  vars: 11,
  consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], [1, "content"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_schiff", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "bezeichnung"], ["formControlName", "id_tank", 3, "selectionChange"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "date", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["matInput", "", "type", "number", "formControlName", "max_vol", "readonly", ""], ["matInput", "", "type", "number", "formControlName", "vol", "required", ""], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], ["required", "", 3, "value"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]],
  template: function PeilungModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PeilungModalComponent_Template_button_click_5_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "id");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "id_schiff");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Bezeichnung");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Bezeichnung");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function PeilungModalComponent_Template_mat_select_selectionChange_24_listener($event) {
        return ctx.selectTank($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, PeilungModalComponent_mat_option_25_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Datum/Uhrzeit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PeilungModalComponent_Template_button_click_33_listener() {
        return ctx.setDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "icons", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Maximalmenge (in L)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Menge (in Liter)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "footer", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, PeilungModalComponent_ng_container_44_Template, 1, 0, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, PeilungModalComponent_ng_template_45_Template, 5, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](46);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.peilungForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 5, ctx.tanks$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](32, 7, ctx.peilungForm.value.date, "yyyy-MM-ddTHH:mm", "+1:00"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
  },
  directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dark[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlaWx1bmctbW9kYWwuY29tcG9uZW50LnNhc3MiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FDQUE7RUFBQSxtQkFBQTtFQUFBLFVBQUE7RUFBQSxZQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxlQUFBO0VER0UsaUNBQUE7RUFDQTtDQ0pGO0FETUU7RUFDRSxhQUFBO0FBQ0o7QUFDQSxvQkFBQTtBQUNBO0VBQ0UscURBQUE7QUFFRjtBQUNFO0VBQ0UscURBQUE7QUFFSjtBQUFBO0VBQ0UsMkJBQUE7QUFHRjtBQURBO0VBQ0UsMkJBQUE7QUFJRiIsImZpbGUiOiJwZWlsdW5nLW1vZGFsLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29udGVudCAqL1xyXG4uY29udGVudFxyXG4gIEBhcHBseSBhYnNvbHV0ZSB0b3AtMzIgcmlnaHQtOCBib3R0b20tMTYgbGVmdC04IG92ZXJmbG93LWF1dG9cclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2hcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhclxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhclxyXG4gICAgZGlzcGxheTogbm9uZVxyXG5cclxuLyogbW9kYWwgZGFyay10aGVtZSovXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC1yaXBwbGVcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZVxyXG4gICY6YmVmb3JlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgbWF0LWxhYmVsXHJcbiAgY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50XHJcblxyXG4uZGFyayAubWF0LXNlbGVjdC12YWx1ZVxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudCIsbnVsbF19 */"]
});

/***/ }),

/***/ 54067:
/*!******************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/peilung/peilung.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeilungComponent": () => (/* binding */ PeilungComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/progress-bar/progress-bar.component */ 88632);
/* harmony import */ var _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/pipes/to-array/to-array.pipe */ 75003);











function PeilungComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Menge (in L): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Aktualisiert: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const peilung_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peilung_r1.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peilung_r1.vol);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 5, peilung_r1.date, "dd.MM.YYYY HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", peilung_r1.vol)("maxvalue", peilung_r1.max_vol);
  }
}

class PeilungComponent {
  constructor(store, modalService) {
    this.store = store;
    this.modalService = modalService;
    this.peilungen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectPeilungen));
  }

  openPeilungModal() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        PeilungModalComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./peilung-modal/peilung-modal.component */ 50733));

      _this.modalService.open(PeilungModalComponent, {
        data: {
          title: 'Peilung erstellen',
          date: new Date().toISOString().substring(0, 16)
        }
      });
    })();
  }

}

PeilungComponent.ɵfac = function PeilungComponent_Factory(t) {
  return new (t || PeilungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
};

PeilungComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PeilungComponent,
  selectors: [["peilung"]],
  decls: 13,
  vars: 5,
  consts: [[1, "w-full", "mt-4", "mb-3", "bg-white", "rounded-lg", "shadow-lg"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-gray-500"], [1, "w-10", "h-10", "m-2", "bg-gray-100", "hover:bg-gray-200", "text-blue-500", "shadow-inner", "rounded-full", "cursor-pointer", 3, "click"], ["name", "add", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["class", "p-4 border-b hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "p-4", "border-b", "hover:bg-gray-50"], [1, "mb-2", "text-xl"], [1, "my-2", "flex", "flex-wrap", "overflow-hidden"], [1, "my-1", "px-1", "w-1/3", "overflow-hidden", "text-gray-600"], [1, "my-1", "px-1", "w-2/3", "overflow-hidden"], [3, "value", "maxvalue"]],
  template: function PeilungComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Peilung");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Vor und nach jeder Betankung ist eine Peilung durchzuf\u00FChren. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PeilungComponent_Template_button_click_8_listener() {
        return ctx.openPeilungModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "icons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PeilungComponent_div_10_Template, 14, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 3, ctx.peilungen$)));
    }
  },
  directives: [_projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__.IconLibraryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent],
  pipes: [_shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_5__.ToArrayPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWlsdW5nLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 38227:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/pruefvermerk/pruefvermerk-modal/pruefvermerk-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PruefvermerkModalComponent": () => (/* binding */ PruefvermerkModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/kat-store */ 66704);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/kat-store/kat.facade */ 49142);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_image_base64_upload_image_base64_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/image-base64-upload/image-base64-upload.component */ 99705);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _shared_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/image-slider/image-slider.component */ 62817);
/* harmony import */ var _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/pipes/to-array/to-array.pipe */ 75003);




















const _c0 = ["modalComponent"];

function PruefvermerkModalComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const kategorie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", kategorie_r10.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", kategorie_r10.bezeichnung, " ");
  }
}

function PruefvermerkModalComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pruefvermerk_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", pruefvermerk_r11.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", pruefvermerk_r11.item, " ");
  }
}

function PruefvermerkModalComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const status_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", status_r12.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", status_r12.bezeichnung, " ");
  }
}

function PruefvermerkModalComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "icons", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_tr_65_Template_icons_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const foto_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r15.deleteFoto(foto_r13.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const foto_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r14 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", foto_r13.id_reparatur, " ");
  }
}

function PruefvermerkModalComponent_button_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_button_68_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r17.showGalerie = !ctx_r17.showGalerie;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r5.reparaturFotoCount$), " Fotos anzeigen ");
  }
}

function PruefvermerkModalComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}

function PruefvermerkModalComponent_ng_template_77_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_ng_template_77_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r21.update();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Speichern");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function PruefvermerkModalComponent_ng_template_77_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_ng_template_77_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r23.create();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function PruefvermerkModalComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_ng_template_77_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r25.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, PruefvermerkModalComponent_ng_template_77_button_2_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, PruefvermerkModalComponent_ng_template_77_button_3_Template, 2, 0, "button", 42);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.pruefvermerkForm.pristine && ctx_r8.pruefvermerkForm.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.pruefvermerkForm.value.id);
  }
}

function PruefvermerkModalComponent_app_image_slider_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-image-slider", 44);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("images", ctx_r9.images);
  }
}

class PruefvermerkModalComponent {
  constructor(store, _formBuilder, modalService, _katFacade) {
    // this.pruefvermerke$ = this.store.pipe(select(KatSelectors.selectpruefvermerke)) as Observable<Pruefvermerk[]>
    this.store = store;
    this._formBuilder = _formBuilder;
    this.modalService = modalService;
    this._katFacade = _katFacade;
    this.title = ''; // image-slider

    this.showGalerie = false;
    this.images = [];
    this.id = '';
    this.kategorien$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatSelectors.selectpruefvermerkkategorien));
    this.status$ = this._katFacade.status$;
    this.reparaturfotos$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectAllReparaturFotos));
    this.reparaturFotoCount$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectReparaturFotosCount));
    this.pruefvermerkForm = this._formBuilder.group({
      id: [''],
      id_ship: [''],
      id_status: [''],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      kategorie: [''],
      item: [''],
      description: [''],
      status: []
    });
  }

  ngOnInit() {
    this.modalService.getData().then(data => {
      this.title = data.data.title;
      this.pruefvermerkForm.patchValue({
        id_ship: data.data.id_ship,
        date: data.data.date
      });
      this.pruefvermerkForm.patchValue(data.data.reparatur);

      if (data.data.reparatur) {
        this.id = data.data.reparatur.id;
        this.selectKategorie(data.data.reparatur.kategorie);
        this.selectStatus(data.data.reparatur.status);
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectReparaturFotosById(data.data.reparatur.id))).subscribe(fotos => {
          console.log(`returned fotos: ${fotos}`);
          this.images = [];
          if (fotos && fotos.length > 0) this.decodeImages(fotos);
        });
        console.log(this.id);
        this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.downloadReparaturFotos({
          id: this.id
        }));
      }

      this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectAllReparaturFotos)).subscribe(data => console.log(data));
    });
  }

  selectKategorie(kategorie) {
    this.pruefvermerke$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatSelectors.selectpruefvermerkeByKategorie(kategorie)));
  }

  onChange($event) {
    this.pruefvermerkForm.controls.kategorie.setValue($event.kategorie);
  }

  selectStatus(status) {
    this._katFacade.getIdByStatus(status).subscribe(id => {
      this.pruefvermerkForm.patchValue({
        id_status: id
      });
    });
  }

  setDate() {
    this.pruefvermerkForm.patchValue({
      date: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__.dateToLocalISOString)(new Date())
    }); // this.pruefvermerkForm.patchValue({ date: new Date().toISOString().substring(0,16) })

    this.pruefvermerkForm.controls['date'].markAsDirty();
  }

  decodeImages(data) {
    console.log(data);
    data.forEach(el => {
      this.images.push(Object.assign({}, {
        path: el.foto
      }));
    });
  }

  uploadImage(imageBase64) {
    const upload = {
      id_reparatur: this.pruefvermerkForm.value.id,
      foto: imageBase64
    };
    console.log(upload);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.uploadReparaturFoto({
      upload
    }));
  }

  deleteFoto(id) {
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.deleteReparaturFoto({
      id
    }));
  }

  create() {
    var _a;

    const insert = this.pruefvermerkForm.value;
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertReparatur({
      insert
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  update() {
    var _a;

    let update = this.pruefvermerkForm.value;
    console.log(update);
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipAction.updateReparatur({
      update
    }));
    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

  cancel() {
    var _a;

    (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
  }

}

PruefvermerkModalComponent.ɵfac = function PruefvermerkModalComponent_Factory(t) {
  return new (t || PruefvermerkModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_4__.KatFacade));
};

PruefvermerkModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: PruefvermerkModalComponent,
  selectors: [["app-pruefvermerk"]],
  viewQuery: function PruefvermerkModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    }
  },
  decls: 80,
  vars: 30,
  consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_ship", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_status", "readonly", ""], ["formControlName", "kategorie", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "item"], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "date", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["formControlName", "status", 3, "selectionChange"], ["matInput", "", "type", "text", "rows", "5", "formControlName", "description"], [1, "xl:w-full", "border-b", "border-gray-300", "dark:border-gray-700", "py-5", "dark:bg-gray-800"], [1, "text-lg", "text-gray-800", "dark:text-gray-100", "font-bold"], [1, "min-w-full", "bg-white", "dark:bg-gray-800", 2, "width", "100%"], [1, "w-full", "h-12", "border-gray-300", "border-b", "py-8"], [1, "px-2", "text-gray-600", "dark:text-gray-400", "font-normal", "text-left", "text-md", "tracking-normal", "leading-4"], [1, "text-gray-600", "dark:text-gray-400", "font-normal", "pr-2", "text-left", "text-md", "tracking-normal", "leading-4"], ["class", "h-12 bg-gray-50 border-b border-gray-300", 4, "ngFor", "ngForOf"], ["class", "p-1 m-1 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], [3, "imageBase64"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], [3, "images", 4, "ngIf"], [3, "value"], [1, "h-12", "bg-gray-50", "border-b", "border-gray-300"], [1, "text-sm", "px-2", "whitespace-no-wrap", "text-gray-800", "dark:text-gray-100", "tracking-normal", "leading-4"], [1, "pr-2", "leading-4"], [1, "w-6", "h-6"], ["name", "trash", 1, "w-6", "h-6", "stroke-1", "stroke-current", "cursor-pointer", 3, "click"], [1, "p-1", "m-1", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"], ["type", "button", "class", "p-2 ml-3 bg-gray-800 text-white rounded", 3, "click", 4, "ngIf"], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"], [3, "images"]],
  template: function PruefvermerkModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-modal", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_Template_button_click_5_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "icons", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "id");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "id_ship");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "id_status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Kategorie");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function PruefvermerkModalComponent_Template_mat_select_selectionChange_25_listener($event) {
        return ctx.selectKategorie($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, PruefvermerkModalComponent_mat_option_26_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Bestandteil");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, PruefvermerkModalComponent_mat_option_32_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Datum/Uhrzeit");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PruefvermerkModalComponent_Template_button_click_40_listener() {
        return ctx.setDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "icons", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function PruefvermerkModalComponent_Template_mat_select_selectionChange_45_listener($event) {
        return ctx.selectStatus($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, PruefvermerkModalComponent_mat_option_46_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](47, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Beschreibung");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "textarea", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Bilder");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "table", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " Nr. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Bezeichnung ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, PruefvermerkModalComponent_tr_65_Template, 8, 2, "tr", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](67, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, PruefvermerkModalComponent_button_68_Template, 3, 3, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](70, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "h2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Bilder anzeigen/hinzuf\u00FCgen");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "image-base64-upload", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("imageBase64", function PruefvermerkModalComponent_Template_image_base64_upload_imageBase64_74_listener($event) {
        return ctx.uploadImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "footer", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, PruefvermerkModalComponent_ng_container_76_Template, 1, 0, "ng-container", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](77, PruefvermerkModalComponent_ng_template_77_Template, 4, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, PruefvermerkModalComponent_app_image_slider_79_Template, 1, 1, "app-image-slider", 33);
    }

    if (rf & 2) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](78);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.pruefvermerkForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 10, ctx.kategorien$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 12, ctx.pruefvermerke$));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](39, 14, ctx.pruefvermerkForm.value.date, "yyyy-MM-ddTHH:mm", "+1:00"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](47, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 20, ctx.status$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](67, 24, ctx.reparaturfotos$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](70, 28, ctx.reparaturFotoCount$)) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showGalerie);
    }
  },
  directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_image_base64_upload_image_base64_upload_component__WEBPACK_IMPORTED_MODULE_7__.ImageBase64UploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgTemplateOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _shared_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__.ImageSliderComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_9__.ToArrayPipe],
  styles: [".content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dark[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBydWVmdmVybWVyay1tb2RhbC5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUNBQTtFQUFBLG1CQUFBO0VBQUEsVUFBQTtFQUFBLFlBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RURHRSxpQ0FBQTtFQUNBO0NDSkY7QURNRTtFQUNFLGFBQUE7QUFDSjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxxREFBQTtBQUVGO0FBQ0U7RUFDRSxxREFBQTtBQUVKO0FBQUE7RUFDRSwyQkFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtBQUlGIiwiZmlsZSI6InBydWVmdmVybWVyay1tb2RhbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnRlbnQgKi9cclxuLmNvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTMyIHJpZ2h0LTggYm90dG9tLTE2IGxlZnQtOCBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcbi8qIG1vZGFsIGRhcmstdGhlbWUqL1xyXG4uZGFyayAubWF0LWZvcm0tZmllbGQtcmlwcGxlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmVcclxuICAmOmJlZm9yZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIG1hdC1sYWJlbFxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1zZWxlY3QtdmFsdWVcclxuICBjb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQiLG51bGxdfQ== */"]
});

/***/ }),

/***/ 60786:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/pruefvermerk/pruefvermerk.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PruefvermerkComponent": () => (/* binding */ PruefvermerkComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/pipes/to-array/to-array.pipe */ 75003);










function PruefvermerkComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PruefvermerkComponent_div_10_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const reparatur_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r3.openPruefvermerkModal(reparatur_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Kategorie: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Erstellt: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const reparatur_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reparatur_r1.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reparatur_r1.kategorie);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 5, reparatur_r1.date, "dd.MM.YYYY HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reparatur_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", reparatur_r1.description, " ");
  }
}

class PruefvermerkComponent {
  constructor(store, modalService) {
    this.store = store;
    this.modalService = modalService;
    this.reparaturen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectReparaturen));
  }

  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_1__.ShipSelectors.selectShipId)).subscribe(id_ship => {
      this.id_schiff = id_ship;
    });
  }

  openPruefvermerkModal(reparatur) {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        PruefvermerkModalComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pruefvermerk-modal/pruefvermerk-modal.component */ 38227));

      if (reparatur) {
        _this.modalService.open(PruefvermerkModalComponent, {
          data: {
            title: 'Prüfvermerk einsehen',
            reparatur
          }
        });
      } else {
        _this.modalService.open(PruefvermerkModalComponent, {
          data: {
            title: 'Prüfvermerk erstellen',
            id_ship: _this.id_schiff,
            date: new Date().toISOString().substring(0, 16)
          }
        });
      }
    })();
  }

}

PruefvermerkComponent.ɵfac = function PruefvermerkComponent_Factory(t) {
  return new (t || PruefvermerkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService));
};

PruefvermerkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PruefvermerkComponent,
  selectors: [["pruefvermerke"]],
  decls: 13,
  vars: 5,
  consts: [[1, "w-full", "mt-4", "mb-3", "bg-white", "rounded-lg", "shadow-lg"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-gray-500"], [1, "w-10", "h-10", "m-2", "bg-gray-100", "hover:bg-gray-200", "text-blue-500", "shadow-inner", "rounded-full", "cursor-pointer", 3, "click"], ["name", "add", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["class", "p-4 border-b hover:bg-gray-50", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-4", "border-b", "hover:bg-gray-50", 3, "click"], [1, "mb-2", "text-xl"], [1, "my-2", "flex", "flex-wrap", "overflow-hidden"], [1, "my-1", "px-1", "w-1/3", "overflow-hidden", "text-gray-600"], [1, "my-1", "px-1", "w-2/3", "overflow-hidden"], [1, "my-1", "px-1", "w-full", "overflow-hidden"]],
  template: function PruefvermerkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Gefertigte Pr\u00FCfvermerke");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Vor jeder und w\u00E4hrend jeder Fahrt ist das Fahrzeuk auf erkennbare Besch\u00E4digungen oder Defekte zu kontrollieren. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PruefvermerkComponent_Template_button_click_8_listener() {
        return ctx.openPruefvermerkModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "icons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PruefvermerkComponent_div_10_Template, 19, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 3, ctx.reparaturen$)));
    }
  },
  directives: [_projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__.IconLibraryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  pipes: [_shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_4__.ToArrayPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcnVlZnZlcm1lcmsuY29tcG9uZW50LnNhc3MifQ== */"]
});

/***/ }),

/***/ 30869:
/*!**********************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/streife.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreifeComponent": () => (/* binding */ StreifeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/state/actions */ 34622);
/* harmony import */ var src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/kat-store */ 66704);
/* harmony import */ var src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/positionreport-store */ 36205);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/zaehlerstand-store */ 6107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var _core_navbar_tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/navbar/tabbar/tabbar.component */ 64697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_headline_stepper_headline_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/headline-stepper/headline-stepper.component */ 96344);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/stepper */ 31394);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _pruefvermerk_pruefvermerk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pruefvermerk/pruefvermerk.component */ 60786);
/* harmony import */ var _peilung_peilung_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./peilung/peilung.component */ 54067);
/* harmony import */ var _checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkliste/checkliste.component */ 34962);
/* harmony import */ var _wartung_wartung_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wartung/wartung.component */ 43113);
/* harmony import */ var _kontrolle_kontrolle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kontrolle/kontrolle.component */ 11111);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/pipes/to-array/to-array.pipe */ 75003);






























function StreifeComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](17);

      return ctx_r18.initializePatrol(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Streife erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](17);

      return ctx_r20.initializePatrol(_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Streife erstellen");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.checkKontrolle())("ngClass", ctx_r1.checkKontrolle() ? "text-blue-500" : "text-gray-400");
  }
}

function StreifeComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r22.updatePatrol("aktiv");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Streife starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r2.checkKontrolle())("ngClass", ctx_r2.checkKontrolle() ? "text-blue-500" : "text-gray-400");
  }
}

function StreifeComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r24.updatePatrol("beendet");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Streife beenden");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r3.checkKontrolle())("ngClass", ctx_r3.checkKontrolle() ? "text-blue-500" : "text-gray-400");
  }
}

function StreifeComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Streife");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const kennung_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", kennung_r26.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", kennung_r26.bezeichnung, " ");
  }
}

function StreifeComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const zweck_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", zweck_r27.bezeichnung);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", zweck_r27.bezeichnung, " ");
  }
}

function StreifeComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Besatzung");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_div_59_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const mitglied_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r29.openBesatzungModal(mitglied_r28.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "von: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "PersNr.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "bis: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mitglied_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](mitglied_r28.funktion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](mitglied_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](12, 5, mitglied_r28.an_bord, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](mitglied_r28.persnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](21, 8, mitglied_r28.von_bord, "HH:mm"));
  }
}

function StreifeComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Z\u00E4hlerst\u00E4nde");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_div_71_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r34);
      const zaehlerstand_r31 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r33.openZaehlerstandModal(zaehlerstand_r31.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Einheiten: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Aktualisiert: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const zaehlerstand_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](zaehlerstand_r31.zaehlerstandstyp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](zaehlerstand_r31.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](12, 3, zaehlerstand_r31.date, "dd.MM.YYYY HH:mm"));
  }
}

function StreifeComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Pr\u00FCfvermerke");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Betankung und Peilung");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Menge (in L): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Aktualisiert: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const betankung_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](betankung_r35.fuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](betankung_r35.fuelfillingquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](12, 3, betankung_r35.date, "dd.MM.YYYY HH:mm"));
  }
}

function StreifeComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Checkliste");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Wartung");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function StreifeComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Kontrolle der Eingaben");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

class StreifeComponent {
  // start = ''
  constructor(store, _formBuilder, appService, modalService, modalServiceZ, modalServiceB, locationService) {
    this.store = store;
    this._formBuilder = _formBuilder;
    this.appService = appService;
    this.modalService = modalService;
    this.modalServiceZ = modalServiceZ;
    this.modalServiceB = modalServiceB;
    this.locationService = locationService; // status

    this.status = [{
      id: 1,
      bezeichnung: 'vorbereitend'
    }, {
      id: 2,
      bezeichnung: 'aktiv'
    }, {
      id: 3,
      bezeichnung: 'beendet'
    }]; // stepper

    this.isLinear = true;
    this.isEditable = true;
    this.kennung = '';
    this.zweck = ''; // list of tabs

    this.list = [{
      id: 1,
      label: 'Next'
    }, {
      id: 2,
      label: 'Prev'
    }]; // current Tab

    this.active = this.list[0];
    this.kennungen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_2__.KatSelectors.selectAllKennungen));
    this.zwecke$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_kat_store__WEBPACK_IMPORTED_MODULE_2__.KatSelectors.selectAllZwecke));
    this.ship$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectedShip));
    this.isPatrolActive$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.isPatrolActive));
    this.isPatrolBeendet$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.isPatrolBeendet));
    this.patrolStatus$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.patrolStatus));
    this.besatzung$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectBesatzung));
    this.zaehlerstaende$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_5__.ZaehlerstandSelectors.selectAllData));
    this.betankungen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectBetankungen));
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectShipId));
    this.checkFormGroup = this._formBuilder.group({
      check: [false]
    });
  }

  ngAfterViewInit() {// console.log(this.patrol)
  }

  ngOnInit() {
    this.zweckFormGroup = this._formBuilder.group({
      kennung: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
      zweck: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]
    });
    this.kontrollFormGroup = this._formBuilder.group({
      kontrolle: [false]
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectedShip)).subscribe(ship => {
      this.name = ship === null || ship === void 0 ? void 0 : ship.name;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectedPatrol)).subscribe(patrol => {
      if (patrol) {
        this.zweckFormGroup.patchValue(patrol);
        this.patrol = patrol;
      }

      if ((patrol === null || patrol === void 0 ? void 0 : patrol.status) == 'aktiv') {
        // auslagern und in den Store mit aufnehmen
        this.appService.checkPositionStart(patrol);
      } else {
        this.appService.checkPositionStop();
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectShipId)).subscribe(id_ship => {
      this.id_schiff = id_ship;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) this.id = id_streife;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectZaehlerstaende)).subscribe(zaehlerstaende => {
      this.zaehlerstaende = zaehlerstaende;
    });
  } // Invoked when Tab Changes


  changeTab(tab) {
    this.active = tab;
  }

  next(stepper) {
    if (stepper.selectedIndex == 0 && this.zweckFormGroup.valid) {
      if (this.id) this.updatePatrol();
      if (!this.id) this.erstellePatrol();
    }

    stepper.next();
  }

  previous(stepper) {
    stepper.previous();
  }

  stepperReset(stepper) {
    stepper.reset();
  }

  stepperIndex(stepper) {
    return stepper.selectedIndex == 0 ? true : false;
  }

  initializePatrol(stepper) {
    this.kontrollFormGroup.patchValue({
      kontrolle: false
    }); // automatische Initialisierung nach laden der (leeren | beendeten) Patrol

    this.stepperReset(stepper);
    const initialize = {
      besatzung: [],
      ende: '',
      id: '',
      id_schiff: this.id_schiff,
      kennung: '',
      start: new Date().toISOString().substring(0, 16),
      status: 'vorbereitend',
      zweck: ''
    };
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipAction.initializePatrol({
      initialize
    }));
  }

  erstellePatrol() {
    // autom. Erstellen der Patrol in Vorbereitung (u.A. um die Besatzung hinzuzufuegen), id der DB übernehmen
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectedPatrol)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1)).subscribe(patrol => {
      const insert = Object.assign({}, patrol, this.zweckFormGroup.value, {
        start: new Date().toISOString().substring(0, 16)
      });
      this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipAction.insertPatrol({
        insert
      }));
    });
  }

  updatePatrol(status) {
    this.kontrollFormGroup.patchValue({
      kontrolle: false
    });
    let update; // update zum eigentlichen Start oder beenden der Streife

    if (this.patrol.id == '' || this.patrol.id == undefined) {
      this.erstellePatrol();
    }

    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipSelectors.selectedPatrol)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1)).subscribe(patrol => {
      if (patrol === null || patrol === void 0 ? void 0 : patrol.id) {
        switch (status) {
          case 'aktiv':
            // startposition setzen
            this.locationService.getCurrentPosition().then(position => {
              const positionReport = {
                id_streife: this.patrol.id,
                id_ship: this.patrol.id_schiff,
                date: new Date().toISOString().substring(0, 16),
                location: {
                  latitude: position.latitude,
                  longitude: position.longitude
                },
                description: `Start der Streife`
              };
              this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_3__.PositionActions.insertData({
                positionReport
              }));
            });
            update = Object.assign({}, patrol, this.zweckFormGroup.value, {
              status: status,
              start: new Date().toISOString().substring(0, 16)
            });
            break;

          case 'beendet':
            update = Object.assign({}, patrol, this.zweckFormGroup.value, {
              status: status,
              ende: new Date().toISOString().substring(0, 16)
            });
            break;

          default:
            update = Object.assign({}, patrol, this.zweckFormGroup.value);
            break;
        }

        this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipAction.updatePatrol({
          update
        }));
      }
    });
  }

  deletePatrol() {
    const id = this.id;
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_4__.ShipAction.deletePatrol({
      id
    }));
    this.id = '';
  }

  checkKontrolle() {
    return this.kontrollFormGroup.value.kontrolle;
  }

  logout() {
    this.store.dispatch((0,src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
  }

  openBesatzungModal(id) {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let besatzung;
      const {
        BesatzungComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./besatzung/besatzung.component */ 3566));

      if (id) {
        besatzung = _this.patrol.besatzung.find(el => el.id == id);

        _this.modalService.open(BesatzungComponent, {
          data: {
            title: 'Besatzungsmitglied bearbeiten',
            besatzung
          }
        });
      } else {
        _this.modalService.open(BesatzungComponent, {
          data: {
            title: 'Besatzungsmitglied hinzufügen',
            besatzung: {
              id_streife: _this.id,
              persnr: '',
              funktion: '',
              an_bord: '',
              von_bord: ''
            }
          }
        });
      }
    })();
  }

  openZaehlerstandModal(id) {
    var _this2 = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let zaehlerstand;

      _this2.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_5__.ZaehlerstandSelectors.selectDataById(id))).subscribe(data => {
        zaehlerstand = data;
      });

      const {
        ZaehlerstandComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./zaehlerstand/zaehlerstand.component */ 51979));

      _this2.modalServiceZ.open(ZaehlerstandComponent, {
        data: {
          title: 'Zählerstand aktualisieren',
          zaehlerstand // zaehlerstand: Object.assign(zaehlerstand, { id_ship: this.id_ship }) 

        }
      });
    })();
  }

  openBetankungModal() {
    var _this3 = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        BetankungComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./betankung/betankung.component */ 65824));

      _this3.locationService.getCurrentPosition().then(data => {
        console.info(`currentPosition | latitude: ${data.latitude}, longitude: ${data.longitude}`);
        const position = {
          latitude: data.latitude,
          longitude: data.longitude
        };

        _this3.modalServiceB.open(BetankungComponent, {
          data: {
            title: 'Betankung durchführen',
            id_ship: _this3.id_schiff,
            date: new Date().toISOString().substring(0, 16),
            location: position
          }
        });
      }, error => console.error(error));
    })();
  }

}

StreifeComponent.ɵfac = function StreifeComponent_Factory(t) {
  return new (t || StreifeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_6__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_8__.LocationService));
};

StreifeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: StreifeComponent,
  selectors: [["app-streife"]],
  decls: 115,
  vars: 65,
  consts: [["labelField", "username", 1, "shadow-lg", "z-50", 3, "tabs", "active", "onTabSelect"], [1, "flex", "w-full"], [1, "p-2", "px-4", "bg-gray-100", "hover:bg-gray-200", "font-medium", "shadow-inner", "rounded-l-lg", 3, "ngClass", "disabled", "click"], [1, "p-2", "px-4", "bg-gray-100", "hover:bg-gray-200", "font-medium", "shadow-inner", "rounded-r-lg", 3, "click"], ["class", "flex-grow ml-4 p-2 px-8 bg-gray-100 text-blue-500 font-medium shadow-inner rounded-lg", 3, "click", 4, "ngIf"], ["class", "flex-grow ml-4 p-2 px-8 bg-gray-100 text-blue-500 font-medium shadow-inner rounded-lg", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "flex-grow ml-4 p-2 px-8 bg-gray-100 font-medium shadow-inner rounded-lg", 3, "disabled", "ngClass", "click", 4, "ngIf"], [1, "main_content", "overflow-hidden"], [3, "formGroup"], [3, "linear", "status"], ["headlineStepper", ""], [3, "editable", "optional", "stepControl"], ["cdkStepLabel", ""], [1, "w-full", "mt-4", "bg-white", "hover:bg-gray-50", "rounded-lg", "shadow-lg", "overflow-x-hidden"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-2xl"], [1, "text-sm", "text-gray-500"], [1, "w-8", "h-8", "m-2", "cursor-pointer", 3, "click"], ["name", "trash", 1, "w-8", "h-8", "stroke-1", "stroke-current", "text-gray-500"], [1, "p-4"], ["appearance", "fill"], ["formControlName", "kennung", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "zweck", 3, "disabled"], [3, "editable", "optional"], [1, "w-full", "mt-4", "mb-3", "bg-white", "rounded-lg", "shadow-lg"], [1, "text-2xl", "font-bold"], [1, "w-10", "h-10", "m-2", "bg-gray-100", "hover:bg-gray-200", "text-blue-500", "shadow-inner", "rounded-full", "cursor-pointer", 3, "click"], ["name", "add", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["class", "p-4 border-b hover:bg-gray-50", 3, "click", 4, "ngFor", "ngForOf"], ["class", "p-4 border-b hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "w-full", "mt-4", "bg-white", "rounded-lg", "shadow-lg"], [1, "p-4", "border-b", "hover:bg-gray-50"], [1, "flex", "flex-row", "items-center"], ["type", "checkbox", "formControlName", "kontrolle", 1, "mx-4", "cursor-pointer", "relative", "w-5", "h-5", "border", "rounded", "border-gray-400", "bg-white", "dark:bg-gray-800", "outline-none"], [1, "flex-grow", "ml-4", "p-2", "px-8", "bg-gray-100", "text-blue-500", "font-medium", "shadow-inner", "rounded-lg", 3, "click"], [1, "flex-grow", "ml-4", "p-2", "px-8", "bg-gray-100", "text-blue-500", "font-medium", "shadow-inner", "rounded-lg", 3, "disabled", "ngClass", "click"], [1, "flex-grow", "ml-4", "p-2", "px-8", "bg-gray-100", "font-medium", "shadow-inner", "rounded-lg", 3, "disabled", "ngClass", "click"], [1, "ml-5"], [1, "text-2xl", "text-blue-600"], [3, "value"], [1, "p-4", "border-b", "hover:bg-gray-50", 3, "click"], [1, "mb-2", "text-xl"], [1, "my-2", "flex", "flex-wrap", "overflow-hidden"], [1, "my-1", "px-1", "w-1/5", "overflow-hidden", "text-gray-600"], [1, "my-1", "px-1", "w-2/5", "overflow-hidden"], [1, "my-1", "px-1", "w-1/5", "overflow-hidden"], [1, "text-xl", "text-blue-600"], [1, "my-1", "px-1", "w-1/3", "overflow-hidden", "text-gray-600"], [1, "my-1", "px-1", "w-2/3", "overflow-hidden"]],
  template: function StreifeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tabbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onTabSelect", function StreifeComponent_Template_tabbar_onTabSelect_0_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](17);

        return ctx.previous(_r4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Zur\u00FCck");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_Template_button_click_4_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](17);

        return ctx.next(_r4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Weiter");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, StreifeComponent_button_6_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, StreifeComponent_button_8_Template, 2, 2, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, StreifeComponent_button_10_Template, 2, 2, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, StreifeComponent_button_12_Template, 2, 2, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "headline-stepper", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "cdk-step", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, StreifeComponent_ng_template_20_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "h2", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, "Streife");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_Template_button_click_30_listener() {
        return ctx.deletePatrol();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "icons", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Kennung");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "mat-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, StreifeComponent_mat_option_38_Template, 2, 2, "mat-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](42, "Fahrtzweck");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "mat-select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](44, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](45, StreifeComponent_mat_option_45_Template, 2, 2, "mat-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "cdk-step", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](48, StreifeComponent_ng_template_48_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](52, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](53, "Besatzung");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](55, " Der Status der Streife ist ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_Template_button_click_57_listener() {
        return ctx.openBesatzungModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "icons", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](59, StreifeComponent_div_59_Template, 22, 11, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](60, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](61, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "cdk-step", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, StreifeComponent_ng_template_63_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](68, "Z\u00E4hlerst\u00E4nde");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](70, " Vor jeder Fahrt sind die eingegebenen Z\u00E4hlerst\u00E4nde zu kontrollieren. Am Ende einer Fahrt sind diese dann auf den aktuellen Stand zu aktualisieren. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](71, StreifeComponent_div_71_Template, 13, 6, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](72, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](73, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "cdk-step", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](75, StreifeComponent_ng_template_75_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](76, "pruefvermerke");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "cdk-step", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](78, StreifeComponent_ng_template_78_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "peilung");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](81, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](83, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](84, "Betankung");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](85, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](86, " Jede Betankung zum Schiff kann hier hinterlegt werden. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](88, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function StreifeComponent_Template_button_click_88_listener() {
        return ctx.openBetankungModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](89, "icons", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](90, StreifeComponent_div_90_Template, 13, 6, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](91, "toArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](92, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](93, "cdk-step");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](94, StreifeComponent_ng_template_94_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](95, "app-checkliste");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](96, "cdk-step");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](97, StreifeComponent_ng_template_97_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](98, "wartung");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](99, "cdk-step", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](100, StreifeComponent_ng_template_100_Template, 3, 0, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](101, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](102, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](103, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "h2", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](105, "Kontrolle");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](106, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](107, " An dieser Stelle werden soweit alle Eingaben angezeigt. Diese m\u00FCssen zum Start und zur Beendigung der Streife best\u00E4tigt werden. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](108, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](109, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](110, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](111, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](112, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](113, "Kontrolle aller Eingaben durchgef\u00FChrt.");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](114, "kontrolle");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](17);

      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("tabs", ctx.list)("active", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx.stepperIndex(_r4) ? "text-gray-400" : "")("disabled", ctx.stepperIndex(_r4));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 33, ctx.patrolStatus$) == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 35, ctx.patrolStatus$) == "beendet");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 37, ctx.patrolStatus$) == "vorbereitend");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 39, ctx.patrolStatus$) == "aktiv");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.zweckFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("linear", ctx.isLinear)("status", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 41, ctx.patrolStatus$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false)("stepControl", ctx.zweckFormGroup.get("kennung"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" Der Status der Streife ist ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 43, ctx.patrolStatus$), ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 45, ctx.patrolStatus$) != "vorbereitend");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](39, 47, ctx.kennungen$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](44, 49, ctx.patrolStatus$) != "vorbereitend");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](46, 51, ctx.zwecke$));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](60, 53, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](61, 55, ctx.besatzung$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](72, 57, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](73, 59, ctx.zaehlerstaende$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](91, 61, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](92, 63, ctx.betankungen$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("editable", ctx.isEditable)("optional", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.kontrollFormGroup);
    }
  },
  directives: [_core_navbar_tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_9__.TabbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _shared_components_headline_stepper_headline_stepper_component__WEBPACK_IMPORTED_MODULE_10__.HeadlineStepperComponent, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStep, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStepLabel, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_11__.IconLibraryComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _pruefvermerk_pruefvermerk_component__WEBPACK_IMPORTED_MODULE_12__.PruefvermerkComponent, _peilung_peilung_component__WEBPACK_IMPORTED_MODULE_13__.PeilungComponent, _checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_14__.ChecklisteComponent, _wartung_wartung_component__WEBPACK_IMPORTED_MODULE_15__.WartungComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.CheckboxControlValueAccessor, _kontrolle_kontrolle_component__WEBPACK_IMPORTED_MODULE_16__.KontrolleComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _shared_pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_17__.ToArrayPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
  styles: [".box[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0px 30px 40px -20px #a3a5ae;\n  padding: 10px;\n  margin: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.blue[_ngcontent-%COMP%] {\n  border-top: 3px solid #549ef2;\n}\n.line[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: auto;\n  padding: 1rem;\n  padding-bottom: 2rem;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.line[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.line[_ngcontent-%COMP%]   .lineelement[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n}\n.line[_ngcontent-%COMP%]   .lineelement[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVpZmUuY29tcG9uZW50LnNhc3MiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQVBGO0FBU0U7RUFDRSwyQkFBQTtBQVBKO0FBU0E7RUFDRSw2QkFBQTtBQU5GO0FDZEE7RUFBQSxnQkFBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFBQSxjQUFBO0VBQUEscUJBQUE7RUR5QkksaUNBQUE7RUFDQTtDQzFCSjtBRDRCSTtFQUNJLGFBQUE7QUFOUjtBQ3ZCQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUFBLFdBQUE7RUFBQTtDQUFBO0FBQUE7RUFBQTtDQUFBIiwiZmlsZSI6InN0cmVpZmUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvKiBjb250ZW50ICovXHJcbi8vIC5jb250ZW50XHJcbi8vICAgQGFwcGx5IGFic29sdXRlIHctZnVsbCBtdC02IHB4LTUgdG9wLTE2IGJvdHRvbS0xNiBvdmVyZmxvdy1hdXRvXHJcblxyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbi8vICAgICBkaXNwbGF5OiBub25lXHJcblxyXG4vLyAvKiBibHVlLWNhcmRzICovXHJcbi5ib3hcclxuICBib3JkZXItcmFkaXVzOiA1cHhcclxuICBib3gtc2hhZG93OiAwcHggMzBweCA0MHB4IC0yMHB4IGhzbCgyMjksIDYlLCA2NiUpXHJcbiAgcGFkZGluZzogMTBweFxyXG4gIG1hcmdpbjogMTBweFxyXG4gIGN1cnNvcjogcG9pbnRlclxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XHJcblxyXG4gICY6aG92ZXJcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxyXG5cclxuLmJsdWUgXHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGhzbCgyMTIsIDg2JSwgNjQlKVxyXG5cclxuLy8gLyogdG91Y2gtc2Nyb2xsKi9cclxuLmxpbmVcclxuICAgIEBhcHBseSBmbGV4IGZsZXgtbm93cmFwIC1tLTIgcC00IHBiLTggb3ZlcmZsb3ctYXV0b1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhclxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG5cclxuICAgIC5saW5lZWxlbWVudFxyXG4gICAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGZsZXgtbm9uZSBtci0yXHJcbiAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGRcclxuICAgICAgICAgICAgQGFwcGx5IG1yLTBcclxuXHJcblxyXG4vLyAuZXhhbXBsZS1zZWN0aW9uXHJcbi8vICAgZGlzcGxheTogZmxleFxyXG4vLyAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlclxyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuLy8gICBoZWlnaHQ6IDYwcHhcclxuXHJcbi8vIC5leGFtcGxlLW1hcmdpblxyXG4vLyAgIG1hcmdpbjogMCAxMHB4XHJcblxyXG4iLG51bGxdfQ== */"]
});

/***/ }),

/***/ 2377:
/*!*******************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/streife.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreifeModule": () => (/* binding */ StreifeModule)
/* harmony export */ });
/* harmony import */ var _streife_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streife.component */ 30869);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _besatzung_besatzung_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./besatzung/besatzung.component */ 3566);
/* harmony import */ var _zaehlerstand_zaehlerstand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zaehlerstand/zaehlerstand.component */ 51979);
/* harmony import */ var _pruefvermerk_pruefvermerk_modal_pruefvermerk_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pruefvermerk/pruefvermerk-modal/pruefvermerk-modal.component */ 38227);
/* harmony import */ var _betankung_betankung_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./betankung/betankung.component */ 65824);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/stepper */ 31394);
/* harmony import */ var src_app_core_navbar_tabbar_tabbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/navbar/tabbar/tabbar.module */ 69162);
/* harmony import */ var src_app_shared_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/timeline/timeline.component */ 93514);
/* harmony import */ var _checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkliste/checkliste.component */ 34962);
/* harmony import */ var _checkliste_checklist_items_checklist_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkliste/checklist-items/checklist-items.component */ 64824);
/* harmony import */ var _peilung_peilung_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./peilung/peilung.component */ 54067);
/* harmony import */ var _peilung_peilung_modal_peilung_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./peilung/peilung-modal/peilung-modal.component */ 50733);
/* harmony import */ var _wartung_wartung_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wartung/wartung.component */ 43113);
/* harmony import */ var _pruefvermerk_pruefvermerk_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pruefvermerk/pruefvermerk.component */ 60786);
/* harmony import */ var _kontrolle_kontrolle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kontrolle/kontrolle.component */ 11111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);

















class StreifeModule {
}
StreifeModule.ɵfac = function StreifeModule_Factory(t) { return new (t || StreifeModule)(); };
StreifeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: StreifeModule });
StreifeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__.CdkStepperModule,
            src_app_core_navbar_tabbar_tabbar_module__WEBPACK_IMPORTED_MODULE_6__.TabbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](StreifeModule, { declarations: [_streife_component__WEBPACK_IMPORTED_MODULE_0__.StreifeComponent,
        _besatzung_besatzung_component__WEBPACK_IMPORTED_MODULE_2__.BesatzungComponent,
        _zaehlerstand_zaehlerstand_component__WEBPACK_IMPORTED_MODULE_3__.ZaehlerstandComponent,
        _betankung_betankung_component__WEBPACK_IMPORTED_MODULE_5__.BetankungComponent,
        src_app_shared_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__.TimelineComponent,
        _checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_8__.ChecklisteComponent,
        _checkliste_checklist_items_checklist_items_component__WEBPACK_IMPORTED_MODULE_9__.ChecklistItemsComponent,
        _peilung_peilung_component__WEBPACK_IMPORTED_MODULE_10__.PeilungComponent,
        _peilung_peilung_modal_peilung_modal_component__WEBPACK_IMPORTED_MODULE_11__.PeilungModalComponent,
        _wartung_wartung_component__WEBPACK_IMPORTED_MODULE_12__.WartungComponent,
        _pruefvermerk_pruefvermerk_component__WEBPACK_IMPORTED_MODULE_13__.PruefvermerkComponent,
        _pruefvermerk_pruefvermerk_modal_pruefvermerk_modal_component__WEBPACK_IMPORTED_MODULE_4__.PruefvermerkModalComponent,
        _kontrolle_kontrolle_component__WEBPACK_IMPORTED_MODULE_14__.KontrolleComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__.CdkStepperModule,
        src_app_core_navbar_tabbar_tabbar_module__WEBPACK_IMPORTED_MODULE_6__.TabbarModule] }); })();


/***/ }),

/***/ 43113:
/*!******************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/wartung/wartung.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WartungComponent": () => (/* binding */ WartungComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_store_ship_store___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/ship-store/ */ 28903);
/* harmony import */ var src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/zaehlerstand-store */ 6107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/progress-bar/progress-bar.component */ 88632);
/* harmony import */ var _shared_pipes_diffDateToToday_diff_date_to_today_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/pipes/diffDateToToday/diff-date-to-today.pipe */ 43794);









function WartungComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Vorf\u00FChrdatum: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Tage bis zur Wartung: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "diffDateToToday");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ship_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ship_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 3, ship_r2.durchsicht, "dd.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 6, ship_r2.durchsicht));
  }
}

function WartungComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Betriebsstunden: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Durchsicht bei: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const zaehlerstand_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](zaehlerstand_r3.zaehlerstandstyp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](zaehlerstand_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](zaehlerstand_r3.betriebsstunden - zaehlerstand_r3.value + 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", zaehlerstand_r3.value)("maxvalue", zaehlerstand_r3.betriebsstunden);
  }
}

class WartungComponent {
  constructor(store) {
    this.store = store;
    this.today = new Date();
    this.yesterday = new Date().setDate(new Date().getDate() - 1);
    this.ship$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_store_ship_store___WEBPACK_IMPORTED_MODULE_0__.ShipSelectors.selectShip));
    this.zaehlerstaende$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_1__.ZaehlerstandSelectors.selectAllData));
  }

  ngOnInit() {}

}

WartungComponent.ɵfac = function WartungComponent_Factory(t) {
  return new (t || WartungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};

WartungComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WartungComponent,
  selectors: [["wartung"]],
  decls: 11,
  vars: 6,
  consts: [[1, "w-full", "mt-4", "mb-3", "bg-white", "rounded-lg", "shadow-lg"], [1, "flex", "flex-row", "p-4", "justify-between", "border-b"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-gray-500"], ["class", "p-4 border-b hover:bg-gray-50", 4, "ngIf"], ["class", "p-4 border-b hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "p-4", "border-b", "hover:bg-gray-50"], [1, "mb-2", "text-xl"], [1, "my-2", "flex", "flex-wrap", "overflow-hidden"], [1, "my-1", "px-1", "w-2/3", "overflow-hidden", "text-gray-600"], [1, "my-1", "px-1", "w-1/3", "overflow-hidden"], [3, "value", "maxvalue"]],
  template: function WartungComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Wartung");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Anzeige der Betriebstunden und Tage bis zum n\u00E4chsten Durchsicht bei der Bootswerkstatt. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WartungComponent_div_7_Template, 14, 8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WartungComponent_div_9_Template, 13, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 2, ctx.ship$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 4, ctx.zaehlerstaende$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _shared_pipes_diffDateToToday_diff_date_to_today_pipe__WEBPACK_IMPORTED_MODULE_3__.DiffDateToTodayPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJ0dW5nLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 51979:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/components/boot/streife/zaehlerstand/zaehlerstand.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZaehlerstandComponent": () => (/* binding */ ZaehlerstandComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/zaehlerstand-store */ 6107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);













const _c0 = ["modalComponent"];
function ZaehlerstandComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function ZaehlerstandComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZaehlerstandComponent_ng_template_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZaehlerstandComponent_ng_template_36_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Z\u00E4hlerstand \u00FCbernehmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ZaehlerstandComponent {
    constructor(store, _formBuilder, modalServiceZ, appService) {
        this.store = store;
        this._formBuilder = _formBuilder;
        this.modalServiceZ = modalServiceZ;
        this.appService = appService;
        this.title = '';
        this.zaehlerstandSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription;
        this.zaehlerstandForm = this._formBuilder.group({
            id: [''],
            id_schiff: [''],
            zaehlerstandstyp: [''],
            date: [''],
            value: ['']
        });
    }
    ngOnInit() {
        this.modalServiceZ.getData().then((data) => {
            this.title = data.data.title;
            this.zaehlerstandForm.patchValue(data.data.zaehlerstand);
        });
    }
    ngOnDestroy() {
        this.zaehlerstandSubscription.unsubscribe();
    }
    setDate() {
        this.zaehlerstandForm.patchValue({ date: (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.dateToLocalISOString)(new Date()) });
        // this.zaehlerstandForm.patchValue({ date: new Date().toISOString().substring(0,16) })
        this.zaehlerstandForm.controls['date'].markAsDirty();
    }
    update() {
        var _a;
        console.log(this.zaehlerstandForm.value);
        const update = {
            id: this.zaehlerstandForm.value.id,
            changes: this.zaehlerstandForm.value
        };
        this.store.dispatch(src_app_store_zaehlerstand_store__WEBPACK_IMPORTED_MODULE_1__.ZaehlerstandAction.dataUpdate({ update }));
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
    cancel() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
}
ZaehlerstandComponent.ɵfac = function ZaehlerstandComponent_Factory(t) { return new (t || ZaehlerstandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService)); };
ZaehlerstandComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ZaehlerstandComponent, selectors: [["app-zaehlerstand"]], viewQuery: function ZaehlerstandComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 38, vars: 8, consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [3, "formGroup"], [1, "hidden"], ["appearance", "fill"], ["matInput", "", "type", "text", "formControlName", "id", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "id_schiff", "readonly", ""], ["matInput", "", "type", "text", "formControlName", "zaehlerstandstyp", "readonly", ""], [1, "flex", "flex-row", "items-center"], ["matInput", "", "type", "datetime-local", "formControlName", "date", 3, "value"], [1, "w-6", "h-6", "mx-3", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "calendar-event", 1, "w-6", "h-6", "stroke-1", "stroke-current", "text-black"], ["matInput", "", "type", "number", "formControlName", "value"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], ["type", "button", 1, "p-2", "ml-3", "bg-gray-800", "text-white", "rounded", 3, "click"]], template: function ZaehlerstandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZaehlerstandComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "icons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "id_schiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Einrichtung/Ger\u00E4t");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Datum/Uhrzeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZaehlerstandComponent_Template_button_click_28_listener() { return ctx.setDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "icons", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Einheiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ZaehlerstandComponent_ng_container_35_Template, 1, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ZaehlerstandComponent_ng_template_36_Template, 4, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.zaehlerstandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](27, 4, ctx.zaehlerstandForm.value.date, "yyyy-MM-ddTHH:mm", "+1:00"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_5__.IconLibraryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8rem;\n  right: 2rem;\n  bottom: 4rem;\n  left: 2rem;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dark[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]:before {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n.dark[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n.dark[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphZWhsZXJzdGFuZC5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQUE7QUNBQTtFQUFBLG1CQUFBO0VBQUEsVUFBQTtFQUFBLFlBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RURHRSxpQ0FBQTtFQUNBO0NDSkY7QURNRTtFQUNFLGFBQUE7QUFDSjtBQUNBLG9CQUFBO0FBQ0E7RUFDRSxxREFBQTtBQUVGO0FBQ0U7RUFDRSxxREFBQTtBQUVKO0FBQUE7RUFDRSwyQkFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtBQUlGIiwiZmlsZSI6InphZWhsZXJzdGFuZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnRlbnQgKi9cclxuLmNvbnRlbnRcclxuICBAYXBwbHkgYWJzb2x1dGUgdG9wLTMyIHJpZ2h0LTggYm90dG9tLTE2IGxlZnQtOCBvdmVyZmxvdy1hdXRvXHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXJcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuXHJcbi8qIG1vZGFsIGRhcmstdGhlbWUqL1xyXG4uZGFyayAubWF0LWZvcm0tZmllbGQtcmlwcGxlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmVcclxuICAmOmJlZm9yZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpICFpbXBvcnRhbnRcclxuXHJcbi5kYXJrIG1hdC1sYWJlbFxyXG4gIGNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudFxyXG5cclxuLmRhcmsgLm1hdC1zZWxlY3QtdmFsdWVcclxuICBjb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQiLG51bGxdfQ== */"] });


/***/ }),

/***/ 93514:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/timeline/timeline.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 85, vars: 0, consts: [[1, "relative", "mt-5"], [1, "streifeline"], [1, "relative", "px-4", "flex", "flex-col"], [1, "time"], [1, "time-item"], [1, "time-item-title"], [1, "time-item-content"], [1, "time", "mb-5"], [1, "keinestreife"], [1, "box"], ["id", "first-list"], [1, "title"], [1, "info"], [1, "name"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "09:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Titel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "10:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "09:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Titel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "10:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "09:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Titel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "10:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "09:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Titel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "comment #01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "the best animation , the best toturials you would ever see .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "- dr. mohamed -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "09:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "10:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "summery #01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "the best animation , the best toturials you would ever see here only . you can learn how to animate and how to use SVG . even else you can add your own animations .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "- eng. amr -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "10:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "11:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "comment #02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "the best animation , the best toturials you would ever see . what about canvas ?? do you like it ..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "- dr. ahmed -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "11:58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "12:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".streifeline[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  width: 0px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #3978d6;\n  content: \"\";\n}\n\n.keinestreife[_ngcontent-%COMP%]:before {\n  position: relative;\n  z-index: 20;\n  display: block;\n  height: 2.5rem;\n  width: 0px;\n  border-width: 1px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n  content: \"\";\n}\n\n.time[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 0.5rem;\n  width: 100%;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.time[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 0px;\n  left: 3.5rem;\n  top: 50%;\n  display: block;\n  height: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));\n  content: \"\";\n}\n\n.time-item[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0px;\n  left: 4rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.time-item[_ngcontent-%COMP%]   .time-item-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n}\n\n.time-item[_ngcontent-%COMP%]   .time-item-content[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.box[_ngcontent-%COMP%] {\n  height: 630px;\n  overflow: hidden;\n  padding: 10px 0 40px 60px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  transition: all 0.5s linear;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:last-of-type {\n  top: 80px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0px;\n  left: 1.25rem;\n  display: block;\n  height: 100%;\n  width: 0px;\n  border-width: 1px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n  content: \"\";\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n  margin: 20px 60px 60px;\n  position: relative;\n  background: rgba(255, 255, 255, 0.3);\n  line-height: 20px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: -2.5rem;\n  display: block;\n  height: 100%;\n  width: 0px;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n  content: \"\";\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  position: absolute;\n  left: -0.375rem;\n  display: block;\n  height: 0.75rem;\n  width: 0.75rem;\n  border-radius: 9999px;\n  border-width: 2px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n  content: \"\";\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  top: -10px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  top: 95%;\n}\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n\n.box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: capitalize;\n  font-style: italic;\n  text-align: right;\n  margin-right: 20px;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n  left: -100px;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  top: -16px;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  top: 94%;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 105%;\n  left: 22%;\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n}\n\n.arrow[_ngcontent-%COMP%]:hover {\n  -webkit-animation: arrow 1s linear infinite;\n  -webkit-animation--moz-animation: arrow 1s linear infinite;\n  -webkit-animation--moz-animation--o-animation: arrow 1s linear infinite;\n  -webkit-animation--moz-animation--o-animation-animation: arrow 1s linear infinite;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:last-of-type   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 105%;\n  left: 22%;\n  transform: rotateX(180deg);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+IiwidGltZWxpbmUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxtQkFBQTtFQUFBLFNBQUE7RUFBQSxlQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VDRUkscUJBQUE7RUFDQTtDREhKOztBQUFBO0VBQUEsbUJBQUE7RUFBQSxZQUFBO0VBQUEsZUFBQTtFQUFBLGVBQUE7RUFBQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSxxQkFBQTtFQUFBLHVCQUFBO0VBQUEsNERBQUE7RUNPSTtDRFBKOztBQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLFlBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEscUJBQUE7RUFBQTtDQUFBOztBQUFBO0VBQUEsbUJBQUE7RUFBQSxXQUFBO0VBQUEsYUFBQTtFQUFBLFNBQUE7RUFBQSxlQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsNERBQUE7RUNjSTtDRGRKOztBQUFBO0VBQUEsbUJBQUE7RUFBQSxXQUFBO0VBQUEsV0FBQTtFQUFBLGNBQUE7RUFBQTtDQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBO0NBQUE7O0FBQUE7RUFBQSxnQkFBQTtFQUFBO0NBQUE7O0FDeUJBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUQ1QkosbUJBQUE7RUFBQSw0REFBQTtBQ21DQTs7QUFKQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsTUFBQTtBQU9KOztBQUxBO0VBQ0ksU0FBQTtBQVFKOztBRGhEQTtFQUFBLG1CQUFBO0VBQUEsU0FBQTtFQUFBLGNBQUE7RUFBQSxlQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLHFCQUFBO0VBQUEsdUJBQUE7RUFBQSxzREFBQTtFQzZDSTtDRDdDSjs7QUFBQTtFQUFBLG1CQUFBO0VBQUEsc0JBQUE7RUFBQSxjQUFBO0VBQUEscUJBQUE7RUFBQSw2Q0FBQTtFQ2tESSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQTtDRHJESjs7QUFBQTtFQUFBLG1CQUFBO0VBQUEsU0FBQTtFQUFBLGNBQUE7RUFBQSxlQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxzREFBQTtFQzBESTtDRDFESjs7QUFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxzREFBQTtFQUFBLG1CQUFBO0VBQUEsNERBQUE7RUNzRUk7Q0R0RUo7O0FDZ0ZBO0VBQ0ksVUFBQTtBQU5KOztBQU9BO0VBQ0ksUUFBQTtBQUpKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FEN0ZBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHFCQUFBO0VBQUEsNkNBQUE7RUNxR0k7Q0RyR0o7O0FDMEdBO0VBQ0ksVUFBQTtBQUxKOztBQU1BO0VBQ0ksUUFBQTtBQUhKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlBO0VBQ0ksMkNBQUE7RUFDRywwREFBQTtFQUNFLHVFQUFBO0VBQ0csaUZBQUE7QUFEWjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLnN0cmVpZmVsaW5lOmJlZm9yZVxyXG4gICAgQGFwcGx5IGFic29sdXRlIGJsb2NrIGgtZnVsbCB3LTAgdG9wLTAgYm9yZGVyLXNvbGlkIGJvcmRlclxyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzk3OGQ2XHJcbiAgICBjb250ZW50OiBcIlwiXHJcblxyXG4ua2VpbmVzdHJlaWZlOmJlZm9yZVxyXG4gICAgQGFwcGx5IHJlbGF0aXZlIGJsb2NrIGgtMTAgdy0wIGJvcmRlci1kYXNoZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB6LTIwXHJcbiAgICBjb250ZW50OiBcIlwiXHJcblxyXG4udGltZVxyXG4gICAgQGFwcGx5IHJlbGF0aXZlIHctZnVsbCBtbC0yIHRleHQtc20gdGV4dC1ncmF5LTQwMFxyXG5cclxuLnRpbWU6OmFmdGVyXHJcbiAgICBAYXBwbHkgYWJzb2x1dGUgYmxvY2sgaC1weCByaWdodC0wIGxlZnQtMTQgYmctZ3JheS00MDAgdG9wLTEvMlxyXG4gICAgY29udGVudDogJydcclxuXHJcbi50aW1lLWl0ZW1cclxuICAgIEBhcHBseSByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHJpZ2h0LTAgbGVmdC0xNlxyXG5cclxuICAgIC50aW1lLWl0ZW0tdGl0bGVcclxuICAgICAgICBAYXBwbHkgdGV4dC1sZyBmb250LWJvbGRcclxuXHJcbiAgICAudGltZS1pdGVtLWNvbnRlbnRcclxuICAgICAgICBAYXBwbHkgdGV4dC1iYXNlXHJcblxyXG4uYm94XHJcbiAgICBoZWlnaHQ6IDYzMHB4XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgNDBweCA2MHB4XHJcbiAgICBAYXBwbHkgYmctZ3JheS0yMDBcclxuXHJcbi5ib3ggdWxcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxyXG4gICAgbWFyZ2luOiAwXHJcbiAgICBwYWRkaW5nOiAwXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhclxyXG4gICAgdG9wOjBcclxuXHJcbi5ib3ggdWw6bGFzdC1vZi10eXBlXHJcbiAgICB0b3A6ODBweFxyXG5cclxuLy8gZGFzaGxpbmVcclxuLmJveCB1bDpiZWZvcmVcclxuICAgIEBhcHBseSBhYnNvbHV0ZSBibG9jayBoLWZ1bGwgdy0wIHRvcC0wIGxlZnQtNSBib3JkZXItZGFzaGVkIGJvcmRlciBib3JkZXItYmxhY2tcclxuICAgIGNvbnRlbnQ6IFwiXCJcclxuXHJcbi8vIGNvbW1lbnRcclxuLmJveCB1bCBsaVxyXG4gICAgQGFwcGx5IHJlbGF0aXZlIHAtNCB0ZXh0LWJsYWNrIHJvdW5kZWQtbGdcclxuICAgIG1hcmdpbjogMjBweCA2MHB4IDYwcHhcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXHJcbiAgICBsaW5lLWhlaWdodDogMjBweFxyXG5cclxuLy8gc29saWRsaW5lXHJcbi5ib3ggdWwgbGkgPiBzcGFuXHJcbiAgICBAYXBwbHkgYWJzb2x1dGUgYmxvY2sgaC1mdWxsIHctMCB0b3AtMCAtbGVmdC0xMCBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1ibGFja1xyXG4gICAgY29udGVudDogXCJcIlxyXG4gICAgLy8gZGlzcGxheTogYmxvY2tcclxuICAgIC8vIHdpZHRoOiAwXHJcbiAgICAvLyBoZWlnaHQ6IDEwMCVcclxuICAgIC8vIGJvcmRlcjoxcHggc29saWQgIzAwMFxyXG4gICAgLy8gcG9zaXRpb246IFxyXG4gICAgLy8gdG9wOjBcclxuICAgIC8vIGxlZnQ6LTMwcHhcclxuXHJcbi8vIHRpbWVkb3RcclxuLmJveCB1bCBsaSA+IHNwYW46YmVmb3JlLC5ib3ggdWwgbGkgPiBzcGFuOmFmdGVyXHJcbiAgICBAYXBwbHkgYWJzb2x1dGUgYmxvY2sgaC0zIHctMyAtbGVmdC0xLjUgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItYmxhY2tcclxuICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAvLyB3aWR0aDogMTBweFxyXG4gICAgLy8gaGVpZ2h0OiAxMHB4XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCVcclxuICAgIC8vIGJhY2tncm91bmQ6I2ZmNmQ2ZFxyXG4gICAgLy8gYm9yZGVyOjJweCBzb2xpZCAjZmZmXHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIC8vIGxlZnQ6LTcuNXB4XHJcblxyXG4uYm94IHVsIGxpID4gc3BhbjpiZWZvcmVcclxuICAgIHRvcDotMTBweFxyXG4uYm94IHVsIGxpID4gc3BhbjphZnRlclxyXG4gICAgdG9wOjk1JVxyXG5cclxuLmJveCAudGl0bGVcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxuICAgIG1hcmdpbi1ib3R0b206IDVweFxyXG5cclxuLmJveCAubmFtZVxyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG5cclxuLy8gdGltZVxyXG4uYm94IC50aW1lIHNwYW5cclxuICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtXHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIGxlZnQ6IC0xMDBweFxyXG4gICAgLy8gY29sb3I6I2ZmZlxyXG4gICAgLy8gZm9udC1zaXplOjgwJVxyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbi5ib3ggLnRpbWUgc3BhbjpmaXJzdC1jaGlsZFxyXG4gICAgdG9wOi0xNnB4XHJcbi5ib3ggLnRpbWUgc3BhbjpsYXN0LWNoaWxkXHJcbiAgICB0b3A6OTQlXHJcblxyXG4uYXJyb3dcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiAxMDUlXHJcbiAgICBsZWZ0OiAyMiVcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgaGVpZ2h0OjIwcHhcclxuICAgIHdpZHRoOjIwcHhcclxuXHJcbi5hcnJvdzpob3ZlclxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFycm93IDFzIGxpbmVhciBpbmZpbml0ZVxyXG4gICAgICAgLW1vei1hbmltYXRpb246IGFycm93IDFzIGxpbmVhciBpbmZpbml0ZVxyXG4gICAgICAgICAtby1hbmltYXRpb246IGFycm93IDFzIGxpbmVhciBpbmZpbml0ZVxyXG4gICAgICAgICAgICBhbmltYXRpb246IGFycm93IDFzIGxpbmVhciBpbmZpbml0ZVxyXG5cclxuXHJcbi5ib3ggdWw6bGFzdC1vZi10eXBlIC5hcnJvd1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDEwNSVcclxuICAgIGxlZnQ6IDIyJVxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZylcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4iXX0= */"] });


/***/ }),

/***/ 87781:
/*!*********************************************************!*\
  !*** ./src/app/store/lastposition-store/data.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionModule": () => (/* binding */ LastPositionModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ 17047);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ 58363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class LastPositionModule {
}
LastPositionModule.ɵfac = function LastPositionModule_Factory(t) { return new (t || LastPositionModule)(); };
LastPositionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LastPositionModule });
LastPositionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.LastPosition, _reducers__WEBPACK_IMPORTED_MODULE_2__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_effects__WEBPACK_IMPORTED_MODULE_1__.Effects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LastPositionModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 17047:
/*!*****************************************************!*\
  !*** ./src/app/store/lastposition-store/effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effects": () => (/* binding */ Effects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 42513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);






class Effects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.LastPositionActions.loadData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getLastPositionsFromAllShips()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((lastPositions) => ___WEBPACK_IMPORTED_MODULE_0__.LastPositionActions.dataLoaded({ lastPositions }))));
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
Effects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });


/***/ }),

/***/ 58363:
/*!******************************************************!*\
  !*** ./src/app/store/lastposition-store/reducers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 82063);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter */ 52419);



const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_adapter__WEBPACK_IMPORTED_MODULE_1__.initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.dataLoaded, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_1__.adapter.addMany(action.lastPositions, Object.assign(Object.assign({}, state), { isAllDataLoaded: true }))));


/***/ }),

/***/ 95810:
/*!***********************************************************!*\
  !*** ./src/app/store/positionreport-store/data.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModule": () => (/* binding */ DataModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ 51996);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ 20739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class DataModule {
}
DataModule.ɵfac = function DataModule_Factory(t) { return new (t || DataModule)(); };
DataModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Positionreport, _reducers__WEBPACK_IMPORTED_MODULE_2__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_effects__WEBPACK_IMPORTED_MODULE_1__.Effects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 51996:
/*!*******************************************************!*\
  !*** ./src/app/store/positionreport-store/effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effects": () => (/* binding */ Effects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 36205);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 53288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);







class Effects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.loadAllData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(action => this.appService.getPosition(action.id_ship)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((positionReport) => (0,_actions__WEBPACK_IMPORTED_MODULE_1__.allDataLoaded)({ positionReport }))));
        this.insertDate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.insertData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(action => {
                return this.appService.insertPosition(action.positionReport).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(data => console.log(`insertPosition - ${data}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(positionReport => ___WEBPACK_IMPORTED_MODULE_0__.PositionActions.insertDataSuccess({ positionReport })));
            })
            // switchMap(action => {
            //     return this.appService.insertPeilung(action.insert).pipe(
            //         map(id => ShipAction.insertPeilungSuccess({ action, id }))
            //     )
            // })
            );
        });
        this.updateDate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.updateData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(action => {
            return this.appService.updatePosition(action.update.changes);
        })), { dispatch: false });
        this.deleteDate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.deleteData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(action => {
            return this.appService.deletePosition(action.id);
        })), { dispatch: false });
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService)); };
Effects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });


/***/ }),

/***/ 20739:
/*!********************************************************!*\
  !*** ./src/app/store/positionreport-store/reducers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 36205);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 53288);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter */ 11312);




const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(_adapter__WEBPACK_IMPORTED_MODULE_2__.initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.allDataLoaded, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_2__.adapter.addMany(action.positionReport, Object.assign(Object.assign({}, state), { isAllDataLoaded: true }))), 
// on(PositionActions.insertData, (state, action) => 
//     adapter.addOne(action.positionReport, state)
// ),
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.insertDataSuccess, (state, action) => {
    return _adapter__WEBPACK_IMPORTED_MODULE_2__.adapter.addOne(action.positionReport, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.updateData, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_2__.adapter.updateOne(action.update, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.deleteData, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_2__.adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.resetStore, (store, action) => _adapter__WEBPACK_IMPORTED_MODULE_2__.adapter.getInitialState()));


/***/ }),

/***/ 8065:
/*!***********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.resolver.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipSelectionResolver": () => (/* binding */ ShipSelectionResolver)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _kat_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kat-store */ 66704);
/* harmony import */ var _ship_selection_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-selection.selectors */ 68842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);






class ShipSelectionResolver {
    constructor(store) {
        this.store = store;
        this.loading = false;
    }
    resolve(route, state) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_ship_selection_selectors__WEBPACK_IMPORTED_MODULE_1__.isDataLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isDataLoaded => {
            if (!this.loading && !isDataLoaded) {
                this.loading = true;
                // kat
                setTimeout(() => {
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadAllShip());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadPruefvermerke());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadPruefvermerkKategorien());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadZaehlerstandstypen());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadDienststellen());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadBetriebsstoffe());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadFunktionen());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadKennungen());
                    this.store.dispatch(_kat_store__WEBPACK_IMPORTED_MODULE_0__.KatAction.loadZwecke());
                }, 1000);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(dataLoaded => dataLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loading = false));
    }
}
ShipSelectionResolver.ɵfac = function ShipSelectionResolver_Factory(t) { return new (t || ShipSelectionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
ShipSelectionResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ShipSelectionResolver, factory: ShipSelectionResolver.ɵfac });


/***/ }),

/***/ 68842:
/*!************************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.selectors.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectShipState": () => (/* binding */ selectShipState),
/* harmony export */   "isDataLoaded": () => (/* binding */ isDataLoaded),
/* harmony export */   "selectAllShip": () => (/* binding */ selectAllShip)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _ship_selection_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-selection.adapter */ 53452);



const selectShipState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.ShipSelection);
const isDataLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectShipState, state => state.isAllDataLoaded);
const selectAllShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectShipState, _ship_selection_adapter__WEBPACK_IMPORTED_MODULE_1__.selectAll);


/***/ }),

/***/ 31279:
/*!*************************************************!*\
  !*** ./src/app/store/spec-store/spec.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecModule": () => (/* binding */ SpecModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/effects */ 97454);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ 58836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);



// import { AppService } from 'src/app/core/services/app.service'





class SpecModule {
}
SpecModule.ɵfac = function SpecModule_Factory(t) { return new (t || SpecModule)(); };
SpecModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SpecModule });
SpecModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
    // AppService
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Spec, _store_reducers__WEBPACK_IMPORTED_MODULE_2__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_1__.Effects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SpecModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 97454:
/*!***************************************************!*\
  !*** ./src/app/store/spec-store/store/effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effects": () => (/* binding */ Effects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);



// import { deleteReparaturFoto, deleteReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess } from './actions'
class Effects {
    // reparaturfotos
    // downloadReparaturFotos$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(downloadReparaturFotos),
    //         concatMap(action => this.appService.downloadReparaturFoto(action.id)),
    //         map((fotos: any[]) => downloadReparaturFotosSuccess({ fotos }))
    //     )
    // })
    // uploadReparaturFoto$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(uploadReparaturFoto),
    //         switchMap(action => {
    //             return this.appService.uploadReparaturFoto(action.upload).pipe(
    //                 map((id: string) => uploadReparaturFotoSuccess({ action, id }))
    //             )
    //         })
    //     )
    // })
    // deleteReparaturFoto$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(deleteReparaturFoto),
    //         switchMap(action => {
    //             return this.appService.deleteReparaturFoto(action.id).pipe(
    //                 map(() => deleteReparaturFotoSuccess(action))
    //             )
    //         })
    //     )
    // })
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
Effects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });


/***/ }),

/***/ 58836:
/*!****************************************************!*\
  !*** ./src/app/store/spec-store/store/reducers.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

const initialDataState = {
    reparaturfotos: undefined,
    isAllDataLoaded: false
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialDataState);


/***/ }),

/***/ 89465:
/*!*********************************************************!*\
  !*** ./src/app/store/zaehlerstand-store/data.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZaehlerstandModule": () => (/* binding */ ZaehlerstandModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ 76903);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ 96357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class ZaehlerstandModule {
}
ZaehlerstandModule.ɵfac = function ZaehlerstandModule_Factory(t) { return new (t || ZaehlerstandModule)(); };
ZaehlerstandModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ZaehlerstandModule });
ZaehlerstandModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Zaehlerstand, _reducers__WEBPACK_IMPORTED_MODULE_2__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_effects__WEBPACK_IMPORTED_MODULE_1__.Effects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ZaehlerstandModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 76903:
/*!*****************************************************!*\
  !*** ./src/app/store/zaehlerstand-store/effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effects": () => (/* binding */ Effects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 8536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/app.service */ 84382);






class Effects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getZaehlerstaende(action.id_ship)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((zaehlerstand) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.allDataLoaded)({ zaehlerstand }))));
        this.updateData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.dataUpdate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(action => {
            return this.appService.updateZaehlerstand(action.update.id, action.update.changes);
        })), { dispatch: false });
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
Effects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });


/***/ }),

/***/ 96357:
/*!******************************************************!*\
  !*** ./src/app/store/zaehlerstand-store/reducers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 6107);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter */ 75249);



const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_adapter__WEBPACK_IMPORTED_MODULE_1__.initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_0__.ZaehlerstandAction.allDataLoaded, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_1__.adapter.addMany(action.zaehlerstand, Object.assign(Object.assign({}, state), { isAllDataLoaded: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_0__.ZaehlerstandAction.dataUpdate, (state, action) => _adapter__WEBPACK_IMPORTED_MODULE_1__.adapter.updateOne(action.update, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_0__.ZaehlerstandAction.resetStore, (store, action) => _adapter__WEBPACK_IMPORTED_MODULE_1__.initialDataState));


/***/ })

}]);
//# sourceMappingURL=src_app_modules_components_boot_boot_module_ts.js.map