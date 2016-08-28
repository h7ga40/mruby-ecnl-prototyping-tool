var COMPILED = !0,
    goog = goog || {};
goog.global = this, goog.isDef = function(e) {
    return void 0 !== e
}, goog.exportPath_ = function(e, t, o) {
    e = e.split("."), o = o || goog.global, e[0] in o || !o.execScript || o.execScript("var " + e[0]);
    for (var n; e.length && (n = e.shift());) !e.length && goog.isDef(t) ? o[n] = t : o = o[n] ? o[n] : o[n] = {}
}, goog.define = function(e, t) {
    var o = t;
    COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, e) ? o = goog.global.CLOSURE_UNCOMPILED_DEFINES[e] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (o = goog.global.CLOSURE_DEFINES[e])), goog.exportPath_(e, o)
}, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.provide = function(e) {
    if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
    goog.constructNamespace_(e)
}, goog.constructNamespace_ = function(e, t) {
    if (!COMPILED) {
        delete goog.implicitNamespaces_[e];
        for (var o = e;
            (o = o.substring(0, o.lastIndexOf("."))) && !goog.getObjectByName(o);) goog.implicitNamespaces_[o] = !0
    }
    goog.exportPath_(e, t)
}, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(e) {
    if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
    if (!goog.isInModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly.");
    if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
    if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
        if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
        delete goog.implicitNamespaces_[e]
    }
}, goog.module.get = function(e) {
    return goog.module.getInternal_(e)
}, goog.module.getInternal_ = function(e) {
    return COMPILED ? void 0 : goog.isProvided_(e) ? e in goog.loadedModules_ ? goog.loadedModules_[e] : goog.getObjectByName(e) : null
}, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
    return null != goog.moduleLoaderState_
}, goog.module.declareTestMethods = function() {
    if (!goog.isInModuleLoader_()) throw Error("goog.module.declareTestMethods must be called from within a goog.module");
    goog.moduleLoaderState_.declareTestMethods = !0
}, goog.module.declareLegacyNamespace = function() {
    if (!COMPILED && !goog.isInModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
    if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
    goog.moduleLoaderState_.declareLegacyNamespace = !0
}, goog.setTestOnly = function(e) {
    if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
}, goog.forwardDeclare = function() {}, COMPILED || (goog.isProvided_ = function(e) {
    return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
}, goog.implicitNamespaces_ = {
    "goog.module": !0
}), goog.getObjectByName = function(e, t) {
    for (var o, n = e.split("."), i = t || goog.global; o = n.shift();) {
        if (!goog.isDefAndNotNull(i[o])) return null;
        i = i[o]
    }
    return i
}, goog.globalize = function(e, t) {
    var o, n = t || goog.global;
    for (o in e) n[o] = e[o]
}, goog.addDependency = function(e, t, o, n) {
    if (goog.DEPENDENCIES_ENABLED) {
        var i;
        e = e.replace(/\\/g, "/");
        for (var r = goog.dependencies_, s = 0; i = t[s]; s++) r.nameToPath[i] = e, r.pathIsModule[e] = !!n;
        for (n = 0; t = o[n]; n++) e in r.requires || (r.requires[e] = {}), r.requires[e][t] = !0
    }
}, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(e) {
    goog.global.console && goog.global.console.error(e)
}, goog.require = function(e) {
    if (!COMPILED) {
        if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(e), goog.isProvided_(e)) return goog.isInModuleLoader_() ? goog.module.getInternal_(e) : null;
        if (goog.ENABLE_DEBUG_LOADER) {
            var t = goog.getPathFromDeps_(e);
            if (t) return goog.included_[t] = !0, goog.writeScripts_(), null
        }
        throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e)
    }
}, goog.basePath = "", goog.nullFunction = function() {}, goog.identityFunction = function(e) {
    return e
}, goog.abstractMethod = function() {
    throw Error("unimplemented abstract method")
}, goog.addSingletonGetter = function(e) {
    e.getInstance = function() {
        return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
    }
}, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {
    pathIsModule: {},
    nameToPath: {},
    requires: {},
    visited: {},
    written: {},
    deferred: {}
}, goog.inHtmlDocument_ = function() {
    var e = goog.global.document;
    return "undefined" != typeof e && "write" in e
}, goog.findBasePath_ = function() {
    if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
    else if (goog.inHtmlDocument_())
        for (var e = goog.global.document.getElementsByTagName("script"), t = e.length - 1; t >= 0; --t) {
            var o = e[t].src,
                n = o.lastIndexOf("?"),
                n = -1 == n ? o.length : n;
            if ("base.js" == o.substr(n - 7, 7)) {
                goog.basePath = o.substr(0, n - 7);
                break
            }
        }
}, goog.importScript_ = function(e, t) {
    (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) && (goog.dependencies_.written[e] = !0)
}, goog.IS_OLD_IE_ = !goog.global.atob && goog.global.document && goog.global.document.all, goog.importModule_ = function(e) {
    goog.importScript_("", 'goog.retrieveAndExecModule_("' + e + '");') && (goog.dependencies_.written[e] = !0)
}, goog.queuedModules_ = [], goog.wrapModule_ = function(e, t) {
    return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + e + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + e + "\n"
}, goog.loadQueuedModules_ = function() {
    var e = goog.queuedModules_.length;
    if (e > 0) {
        var t = goog.queuedModules_;
        goog.queuedModules_ = [];
        for (var o = 0; e > o; o++) goog.maybeProcessDeferredPath_(t[o])
    }
}, goog.maybeProcessDeferredDep_ = function(e) {
    goog.isDeferredModule_(e) && goog.allDepsAreAvailable_(e) && (e = goog.getPathFromDeps_(e), goog.maybeProcessDeferredPath_(goog.basePath + e))
}, goog.isDeferredModule_ = function(e) {
    return (e = goog.getPathFromDeps_(e)) && goog.dependencies_.pathIsModule[e] ? goog.basePath + e in goog.dependencies_.deferred : !1
}, goog.allDepsAreAvailable_ = function(e) {
    if ((e = goog.getPathFromDeps_(e)) && e in goog.dependencies_.requires)
        for (var t in goog.dependencies_.requires[e])
            if (!goog.isProvided_(t) && !goog.isDeferredModule_(t)) return !1;
    return !0
}, goog.maybeProcessDeferredPath_ = function(e) {
    if (e in goog.dependencies_.deferred) {
        var t = goog.dependencies_.deferred[e];
        delete goog.dependencies_.deferred[e], goog.globalEval(t)
    }
}, goog.loadModule = function(e) {
    var t = goog.moduleLoaderState_;
    try {
        goog.moduleLoaderState_ = {
            moduleName: void 0,
            declareTestMethods: !1
        };
        var o;
        if (goog.isFunction(e)) o = e.call(goog.global, {});
        else {
            if (!goog.isString(e)) throw Error("Invalid module definition");
            o = goog.loadModuleFromSource_.call(goog.global, e)
        }
        var n = goog.moduleLoaderState_.moduleName;
        if (!goog.isString(n) || !n) throw Error('Invalid module name "' + n + '"');
        if (goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(n, o) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(o), goog.loadedModules_[n] = o, goog.moduleLoaderState_.declareTestMethods)
            for (var i in o)(0 === i.indexOf("test", 0) || "tearDown" == i || "setUp" == i || "setUpPage" == i || "tearDownPage" == i) && (goog.global[i] = o[i])
    } finally {
        goog.moduleLoaderState_ = t
    }
}, goog.loadModuleFromSource_ = function(a) {
    return eval(a), {}
}, goog.writeScriptTag_ = function(e, t) {
    if (goog.inHtmlDocument_()) {
        var o = goog.global.document;
        if ("complete" == o.readyState) {
            if (/\bdeps.js$/.test(e)) return !1;
            throw Error('Cannot write "' + e + '" after document load')
        }
        var n = goog.IS_OLD_IE_;
        return void 0 === t ? n ? (n = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", o.write('<script type="text/javascript" src="' + e + '"' + n + "></script>")) : o.write('<script type="text/javascript" src="' + e + '"></script>') : o.write('<script type="text/javascript">' + t + "</script>"), !0
    }
    return !1
}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(e, t) {
    return "complete" == e.readyState && goog.lastNonModuleScriptIndex_ == t && goog.loadQueuedModules_(), !0
}, goog.writeScripts_ = function() {
    function e(t) {
        if (!(t in i.written)) {
            if (!(t in i.visited) && (i.visited[t] = !0, t in i.requires))
                for (var r in i.requires[t])
                    if (!goog.isProvided_(r)) {
                        if (!(r in i.nameToPath)) throw Error("Undefined nameToPath for " + r);
                        e(i.nameToPath[r])
                    }
            t in n || (n[t] = !0, o.push(t))
        }
    }
    var t, o = [],
        n = {},
        i = goog.dependencies_;
    for (t in goog.included_) i.written[t] || e(t);
    for (var r = 0; r < o.length; r++) t = o[r], goog.dependencies_.written[t] = !0;
    var s = goog.moduleLoaderState_;
    for (goog.moduleLoaderState_ = null, r = 0; r < o.length; r++) {
        if (!(t = o[r])) throw goog.moduleLoaderState_ = s, Error("Undefined script input");
        i.pathIsModule[t] ? goog.importModule_(goog.basePath + t) : goog.importScript_(goog.basePath + t)
    }
    goog.moduleLoaderState_ = s
}, goog.getPathFromDeps_ = function(e) {
    return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.normalizePath_ = function(e) {
    e = e.split("/");
    for (var t = 0; t < e.length;) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
    return e.join("/")
}, goog.retrieveAndExecModule_ = function(e) {
    if (!COMPILED) {
        var t = e;
        e = goog.normalizePath_(e);
        var o = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
            n = null,
            i = new goog.global.XMLHttpRequest;
        if (i.onload = function() {
                n = this.responseText
            }, i.open("get", e, !1), i.send(), n = i.responseText, null == n) throw Error("load of " + e + "failed");
        i = goog.wrapModule_(e, n), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[t] = i, goog.queuedModules_.push(t)) : o(e, i)
    }
}, goog.typeOf = function(e) {
    var t = typeof e;
    if ("object" == t) {
        if (!e) return "null";
        if (e instanceof Array) return "array";
        if (e instanceof Object) return t;
        var o = Object.prototype.toString.call(e);
        if ("[object Window]" == o) return "object";
        if ("[object Array]" == o || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == o || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
    } else if ("function" == t && "undefined" == typeof e.call) return "object";
    return t
}, goog.isNull = function(e) {
    return null === e
}, goog.isDefAndNotNull = function(e) {
    return null != e
}, goog.isArray = function(e) {
    return "array" == goog.typeOf(e)
}, goog.isArrayLike = function(e) {
    var t = goog.typeOf(e);
    return "array" == t || "object" == t && "number" == typeof e.length
}, goog.isDateLike = function(e) {
    return goog.isObject(e) && "function" == typeof e.getFullYear
}, goog.isString = function(e) {
    return "string" == typeof e
}, goog.isBoolean = function(e) {
    return "boolean" == typeof e
}, goog.isNumber = function(e) {
    return "number" == typeof e
}, goog.isFunction = function(e) {
    return "function" == goog.typeOf(e)
}, goog.isObject = function(e) {
    var t = typeof e;
    return "object" == t && null != e || "function" == t
}, goog.getUid = function(e) {
    return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
}, goog.hasUid = function(e) {
    return !!e[goog.UID_PROPERTY_]
}, goog.removeUid = function(e) {
    "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete e[goog.UID_PROPERTY_]
    } catch (t) {}
}, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone) return e.clone();
        var o, t = "array" == t ? [] : {};
        for (o in e) t[o] = goog.cloneObject(e[o]);
        return t
    }
    return e
}, goog.bindNative_ = function(e) {
    return e.call.apply(e.bind, arguments)
}, goog.bindJs_ = function(e, t) {
    if (!e) throw Error();
    if (2 < arguments.length) {
        var o = Array.prototype.slice.call(arguments, 2);
        return function() {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, o), e.apply(t, n)
        }
    }
    return function() {
        return e.apply(t, arguments)
    }
}, goog.bind = function() {
    return goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_, goog.bind.apply(null, arguments)
}, goog.partial = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function() {
        var o = t.slice();
        return o.push.apply(o, arguments), e.apply(this, o)
    }
}, goog.mixin = function(e, t) {
    for (var o in t) e[o] = t[o]
}, goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date
}, goog.globalEval = function(e) {
    if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
    else {
        if (!goog.global.eval) throw Error("goog.globalEval not available");
        if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(e);
        else {
            var t = goog.global.document,
                o = t.createElement("script");
            o.type = "text/javascript", o.defer = !1, o.appendChild(t.createTextNode(e)), t.body.appendChild(o), t.body.removeChild(o)
        }
    }
}, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
    var o = function(e) {
            return goog.cssNameMapping_[e] || e
        },
        n = function(e) {
            e = e.split("-");
            for (var t = [], n = 0; n < e.length; n++) t.push(o(e[n]));
            return t.join("-")
        },
        n = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? o : n : function(e) {
            return e
        };
    return t ? e + "-" + n(t) : n(e)
}, goog.setCssNameMapping = function(e, t) {
    goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
}, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(e, t) {
    return t && (e = e.replace(/\{\$([^}]+)}/g, function(e, o) {
        return o in t ? t[o] : e
    })), e
}, goog.getMsgWithFallback = function(e) {
    return e
}, goog.exportSymbol = function(e, t, o) {
    goog.exportPath_(e, t, o)
}, goog.exportProperty = function(e, t, o) {
    e[t] = o
}, goog.inherits = function(e, t) {
    function o() {}
    o.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new o, e.prototype.constructor = e, e.base = function(e, o) {
        for (var n = Array(arguments.length - 2), i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return t.prototype[o].apply(e, n)
    }
}, goog.base = function(e, t) {
    var o = arguments.callee.caller;
    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !o) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (o.superClass_) {
        for (var n = Array(arguments.length - 1), i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
        return o.superClass_.constructor.apply(e, n)
    }
    for (n = Array(arguments.length - 2), i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    for (var i = !1, r = e.constructor; r; r = r.superClass_ && r.superClass_.constructor)
        if (r.prototype[t] === o) i = !0;
        else if (i) return r.prototype[t].apply(e, n);
    if (e[t] === o) return e.constructor.prototype[t].apply(e, n);
    throw Error("goog.base called from a method of one name to a method of a different name")
}, goog.scope = function(e) {
    e.call(goog.global)
}, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(e, t) {
    var o = t.constructor,
        n = t.statics;
    return o && o != Object.prototype.constructor || (o = function() {
        throw Error("cannot instantiate an interface (no constructor defined).")
    }), o = goog.defineClass.createSealingConstructor_(o, e), e && goog.inherits(o, e), delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(o.prototype, t), null != n && (n instanceof Function ? n(o) : goog.defineClass.applyProperties_(o, n)), o
}, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(e, t) {
    if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
        if (t && t.prototype && t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) return e;
        var o = function() {
            var t = e.apply(this, arguments) || this;
            return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_], this.constructor === o && Object.seal(t), t
        };
        return o
    }
    return e
}, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function(e, t) {
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    for (var n = 0; n < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; n++) o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[n], Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
}, goog.tagUnsealableClass = function(e) {
    !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
}, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", goog.debug = {}, goog.debug.Error = function(e) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
    else {
        var t = Error().stack;
        t && (this.stack = t)
    }
    e && (this.message = String(e))
}, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.dom = {}, goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
}, goog.string = {}, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {
    NBSP: " "
}, goog.string.startsWith = function(e, t) {
    return 0 == e.lastIndexOf(t, 0)
}, goog.string.endsWith = function(e, t) {
    var o = e.length - t.length;
    return o >= 0 && e.indexOf(t, o) == o
}, goog.string.caseInsensitiveStartsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
}, goog.string.caseInsensitiveEndsWith = function(e, t) {
    return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
}, goog.string.caseInsensitiveEquals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase()
}, goog.string.subs = function(e) {
    for (var t = e.split("%s"), o = "", n = Array.prototype.slice.call(arguments, 1); n.length && 1 < t.length;) o += t.shift() + n.shift();
    return o + t.join("%s")
}, goog.string.collapseWhitespace = function(e) {
    return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
}, goog.string.isEmptyOrWhitespace = function(e) {
    return /^[\s\xa0]*$/.test(e)
}, goog.string.isEmptyString = function(e) {
    return 0 == e.length
}, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(e) {
    return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
}, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(e) {
    return !/[^\t\n\r ]/.test(e)
}, goog.string.isAlpha = function(e) {
    return !/[^a-zA-Z]/.test(e)
}, goog.string.isNumeric = function(e) {
    return !/[^0-9]/.test(e)
}, goog.string.isAlphaNumeric = function(e) {
    return !/[^a-zA-Z0-9]/.test(e)
}, goog.string.isSpace = function(e) {
    return " " == e
}, goog.string.isUnicodeChar = function(e) {
    return 1 == e.length && e >= " " && "~" >= e || e >= "" && "�" >= e
}, goog.string.stripNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)+/g, " ")
}, goog.string.canonicalizeNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)/g, "\n")
}, goog.string.normalizeWhitespace = function(e) {
    return e.replace(/\xa0|\s/g, " ")
}, goog.string.normalizeSpaces = function(e) {
    return e.replace(/\xa0|[ \t]+/g, " ")
}, goog.string.collapseBreakingSpaces = function(e) {
    return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}, goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
    return e.trim()
} : function(e) {
    return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, goog.string.trimLeft = function(e) {
    return e.replace(/^[\s\xa0]+/, "")
}, goog.string.trimRight = function(e) {
    return e.replace(/[\s\xa0]+$/, "")
}, goog.string.caseInsensitiveCompare = function(e, t) {
    var o = String(e).toLowerCase(),
        n = String(t).toLowerCase();
    return n > o ? -1 : o == n ? 0 : 1
}, goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g, goog.string.numerateCompare = function(e, t) {
    if (e == t) return 0;
    if (!e) return -1;
    if (!t) return 1;
    for (var o = e.toLowerCase().match(goog.string.numerateCompareRegExp_), n = t.toLowerCase().match(goog.string.numerateCompareRegExp_), i = Math.min(o.length, n.length), r = 0; i > r; r++) {
        var s = o[r],
            l = n[r];
        if (s != l) return o = parseInt(s, 10), !isNaN(o) && (n = parseInt(l, 10), !isNaN(n) && o - n) ? o - n : l > s ? -1 : 1
    }
    return o.length != n.length ? o.length - n.length : t > e ? -1 : 1
}, goog.string.urlEncode = function(e) {
    return encodeURIComponent(String(e))
}, goog.string.urlDecode = function(e) {
    return decodeURIComponent(e.replace(/\+/g, " "))
}, goog.string.newLineToBr = function(e, t) {
    return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
}, goog.string.htmlEscape = function(e, t) {
    if (t) e = e.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;"));
    else {
        if (!goog.string.ALL_RE_.test(e)) return e; - 1 != e.indexOf("&") && (e = e.replace(goog.string.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\x00") && (e = e.replace(goog.string.NULL_RE_, "&#0;")), goog.string.DETECT_DOUBLE_ESCAPING && -1 != e.indexOf("e") && (e = e.replace(goog.string.E_RE_, "&#101;"))
    }
    return e
}, goog.string.AMP_RE_ = /&/g, goog.string.LT_RE_ = /</g, goog.string.GT_RE_ = />/g, goog.string.QUOT_RE_ = /"/g, goog.string.SINGLE_QUOTE_RE_ = /'/g, goog.string.NULL_RE_ = /\x00/g, goog.string.E_RE_ = /e/g, goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/, goog.string.unescapeEntities = function(e) {
    return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
}, goog.string.unescapeEntitiesWithDocument = function(e, t) {
    return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
}, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
    var o, n = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    return o = t ? t.createElement("div") : goog.global.document.createElement("div"), e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
        var i = n[e];
        if (i) return i;
        if ("#" == t.charAt(0)) {
            var r = Number("0" + t.substr(1));
            isNaN(r) || (i = String.fromCharCode(r))
        }
        return i || (o.innerHTML = e + " ", i = o.firstChild.nodeValue.slice(0, -1)), n[e] = i
    })
}, goog.string.unescapePureXmlEntities_ = function(e) {
    return e.replace(/&([^;]+);/g, function(e, t) {
        switch (t) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == t.charAt(0)) {
                    var o = Number("0" + t.substr(1));
                    if (!isNaN(o)) return String.fromCharCode(o)
                }
                return e
        }
    })
}, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
    return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
}, goog.string.preserveSpaces = function(e) {
    return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
}, goog.string.stripQuotes = function(e, t) {
    for (var o = t.length, n = 0; o > n; n++) {
        var i = 1 == o ? t : t.charAt(n);
        if (e.charAt(0) == i && e.charAt(e.length - 1) == i) return e.substring(1, e.length - 1)
    }
    return e
}, goog.string.truncate = function(e, t, o) {
    return o && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), o && (e = goog.string.htmlEscape(e)), e
}, goog.string.truncateMiddle = function(e, t, o, n) {
    if (o && (e = goog.string.unescapeEntities(e)), n && e.length > t) {
        n > t && (n = t);
        var i = e.length - n;
        e = e.substring(0, t - n) + "..." + e.substring(i)
    } else e.length > t && (n = Math.floor(t / 2), i = e.length - n, e = e.substring(0, n + t % 2) + "..." + e.substring(i));
    return o && (e = goog.string.htmlEscape(e)), e
}, goog.string.specialEscapeChars_ = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, goog.string.jsEscapeCache_ = {
    "'": "\\'"
}, goog.string.quote = function(e) {
    if (e = String(e), e.quote) return e.quote();
    for (var t = ['"'], o = 0; o < e.length; o++) {
        var n = e.charAt(o),
            i = n.charCodeAt(0);
        t[o + 1] = goog.string.specialEscapeChars_[n] || (i > 31 && 127 > i ? n : goog.string.escapeChar(n))
    }
    return t.push('"'), t.join("")
}, goog.string.escapeString = function(e) {
    for (var t = [], o = 0; o < e.length; o++) t[o] = goog.string.escapeChar(e.charAt(o));
    return t.join("")
}, goog.string.escapeChar = function(e) {
    if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
    if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
    var t = e,
        o = e.charCodeAt(0);
    return o > 31 && 127 > o ? t = e : (256 > o ? (t = "\\x", (16 > o || o > 256) && (t += "0")) : (t = "\\u", 4096 > o && (t += "0")), t += o.toString(16).toUpperCase()), goog.string.jsEscapeCache_[e] = t
}, goog.string.contains = function(e, t) {
    return -1 != e.indexOf(t)
}, goog.string.caseInsensitiveContains = function(e, t) {
    return goog.string.contains(e.toLowerCase(), t.toLowerCase())
}, goog.string.countOf = function(e, t) {
    return e && t ? e.split(t).length - 1 : 0
}, goog.string.removeAt = function(e, t, o) {
    var n = e;
    return t >= 0 && t < e.length && o > 0 && (n = e.substr(0, t) + e.substr(t + o, e.length - t - o)), n
}, goog.string.remove = function(e, t) {
    var o = new RegExp(goog.string.regExpEscape(t), "");
    return e.replace(o, "")
}, goog.string.removeAll = function(e, t) {
    var o = new RegExp(goog.string.regExpEscape(t), "g");
    return e.replace(o, "")
}, goog.string.regExpEscape = function(e) {
    return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}, goog.string.repeat = function(e, t) {
    return Array(t + 1).join(e)
}, goog.string.padNumber = function(e, t, o) {
    return e = goog.isDef(o) ? e.toFixed(o) : String(e), o = e.indexOf("."), -1 == o && (o = e.length), goog.string.repeat("0", Math.max(0, t - o)) + e
}, goog.string.makeSafe = function(e) {
    return null == e ? "" : String(e)
}, goog.string.buildString = function() {
    return Array.prototype.join.call(arguments, "")
}, goog.string.getRandomString = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
}, goog.string.compareVersions = function(e, t) {
    for (var o = 0, n = goog.string.trim(String(e)).split("."), i = goog.string.trim(String(t)).split("."), r = Math.max(n.length, i.length), s = 0; 0 == o && r > s; s++) {
        var l = n[s] || "",
            a = i[s] || "",
            c = RegExp("(\\d*)(\\D*)", "g"),
            g = RegExp("(\\d*)(\\D*)", "g");
        do {
            var u = c.exec(l) || ["", "", ""],
                h = g.exec(a) || ["", "", ""];
            if (0 == u[0].length && 0 == h[0].length) break;
            var o = 0 == u[1].length ? 0 : parseInt(u[1], 10),
                d = 0 == h[1].length ? 0 : parseInt(h[1], 10),
                o = goog.string.compareElements_(o, d) || goog.string.compareElements_(0 == u[2].length, 0 == h[2].length) || goog.string.compareElements_(u[2], h[2])
        } while (0 == o)
    }
    return o
}, goog.string.compareElements_ = function(e, t) {
    return t > e ? -1 : e > t ? 1 : 0
}, goog.string.HASHCODE_MAX_ = 4294967296, goog.string.hashCode = function(e) {
    for (var t = 0, o = 0; o < e.length; ++o) t = 31 * t + e.charCodeAt(o), t %= goog.string.HASHCODE_MAX_;
    return t
}, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
    return "goog_" + goog.string.uniqueStringCounter_++
}, goog.string.toNumber = function(e) {
    var t = Number(e);
    return 0 == t && goog.string.isEmptyOrWhitespace(e) ? 0 / 0 : t
}, goog.string.isLowerCamelCase = function(e) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
}, goog.string.isUpperCamelCase = function(e) {
    return /^([A-Z][a-z]*)+$/.test(e)
}, goog.string.toCamelCase = function(e) {
    return String(e).replace(/\-([a-z])/g, function(e, t) {
        return t.toUpperCase()
    })
}, goog.string.toSelectorCase = function(e) {
    return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
}, goog.string.toTitleCase = function(e, t) {
    var o = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
    return e.replace(new RegExp("(^" + (o ? "|[" + o + "]+" : "") + ")([a-z])", "g"), function(e, t, o) {
        return t + o.toUpperCase()
    })
}, goog.string.capitalize = function(e) {
    return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
}, goog.string.parseInt = function(e) {
    return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : 0 / 0
}, goog.string.splitLimit = function(e, t, o) {
    e = e.split(t);
    for (var n = []; o > 0 && e.length;) n.push(e.shift()), o--;
    return e.length && n.push(e.join(t)), n
}, goog.string.editDistance = function(e, t) {
    var o = [],
        n = [];
    if (e == t) return 0;
    if (!e.length || !t.length) return Math.max(e.length, t.length);
    for (var i = 0; i < t.length + 1; i++) o[i] = i;
    for (i = 0; i < e.length; i++) {
        n[0] = i + 1;
        for (var r = 0; r < t.length; r++) n[r + 1] = Math.min(n[r] + 1, o[r + 1] + 1, o[r] + (e[i] != t[r]));
        for (r = 0; r < o.length; r++) o[r] = n[r]
    }
    return n[t.length]
}, goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
    t.unshift(e), goog.debug.Error.call(this, goog.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
}, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
    throw e
}, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.doAssertFailure_ = function(e, t, o, n) {
    var i = "Assertion failed";
    if (o) var i = i + (": " + o),
        r = n;
    else e && (i += ": " + e, r = t);
    e = new goog.asserts.AssertionError("" + i, r || []), goog.asserts.errorHandler_(e)
}, goog.asserts.setErrorHandler = function(e) {
    goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
}, goog.asserts.assert = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.fail = function(e) {
    goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
}, goog.asserts.assertNumber = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertString = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertFunction = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertObject = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertArray = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertBoolean = function(e, t) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertElement = function(e, t) {
    return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
}, goog.asserts.assertInstanceof = function(e, t, o) {
    return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], o, Array.prototype.slice.call(arguments, 3)), e
}, goog.asserts.assertObjectPrototypeIsIntact = function() {
    for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
}, goog.asserts.getType_ = function(e) {
    return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
}, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, goog.array.peek = function(e) {
    return e[e.length - 1]
}, goog.array.last = goog.array.peek, goog.array.ARRAY_PROTOTYPE_ = Array.prototype, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.indexOf.call(e, t, o)
} : function(e, t, o) {
    if (o = null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, o) : -1;
    for (; o < e.length; o++)
        if (o in e && e[o] === t) return o;
    return -1
}, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
} : function(e, t, o) {
    if (o = null == o ? e.length - 1 : o, 0 > o && (o = Math.max(0, e.length + o)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, o) : -1;
    for (; o >= 0; o--)
        if (o in e && e[o] === t) return o;
    return -1
}, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(e, t, o) {
    goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.forEach.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++) r in i && t.call(o, i[r], r, e)
}, goog.array.forEachRight = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, n = n - 1; n >= 0; --n) n in i && t.call(o, i[n], n, e)
}, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.filter.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = [], r = 0, s = goog.isString(e) ? e.split("") : e, l = 0; n > l; l++)
        if (l in s) {
            var a = s[l];
            t.call(o, a, l, e) && (i[r++] = a)
        }
    return i
}, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.map.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = Array(n), r = goog.isString(e) ? e.split("") : e, s = 0; n > s; s++) s in r && (i[s] = t.call(o, r[s], s, e));
    return i
}, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(e, t, o, n) {
    return goog.asserts.assert(null != e.length), n && (t = goog.bind(t, n)), goog.array.ARRAY_PROTOTYPE_.reduce.call(e, t, o)
} : function(e, t, o, n) {
    var i = o;
    return goog.array.forEach(e, function(o, r) {
        i = t.call(n, i, o, r, e)
    }), i
}, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(e, t, o, n) {
    return goog.asserts.assert(null != e.length), n && (t = goog.bind(t, n)), goog.array.ARRAY_PROTOTYPE_.reduceRight.call(e, t, o)
} : function(e, t, o, n) {
    var i = o;
    return goog.array.forEachRight(e, function(o, r) {
        i = t.call(n, i, o, r, e)
    }), i
}, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.some.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && t.call(o, i[r], r, e)) return !0;
    return !1
}, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(e, t, o) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.every.call(e, t, o)
} : function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && !t.call(o, i[r], r, e)) return !1;
    return !0
}, goog.array.count = function(e, t, o) {
    var n = 0;
    return goog.array.forEach(e, function(e, i, r) {
        t.call(o, e, i, r) && ++n
    }, o), n
}, goog.array.find = function(e, t, o) {
    return t = goog.array.findIndex(e, t, o), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}, goog.array.findIndex = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, r = 0; n > r; r++)
        if (r in i && t.call(o, i[r], r, e)) return r;
    return -1
}, goog.array.findRight = function(e, t, o) {
    return t = goog.array.findIndexRight(e, t, o), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
}, goog.array.findIndexRight = function(e, t, o) {
    for (var n = e.length, i = goog.isString(e) ? e.split("") : e, n = n - 1; n >= 0; n--)
        if (n in i && t.call(o, i[n], n, e)) return n;
    return -1
}, goog.array.contains = function(e, t) {
    return 0 <= goog.array.indexOf(e, t)
}, goog.array.isEmpty = function(e) {
    return 0 == e.length
}, goog.array.clear = function(e) {
    if (!goog.isArray(e))
        for (var t = e.length - 1; t >= 0; t--) delete e[t];
    e.length = 0
}, goog.array.insert = function(e, t) {
    goog.array.contains(e, t) || e.push(t)
}, goog.array.insertAt = function(e, t, o) {
    goog.array.splice(e, o, 0, t)
}, goog.array.insertArrayAt = function(e, t, o) {
    goog.partial(goog.array.splice, e, o, 0).apply(null, t)
}, goog.array.insertBefore = function(e, t, o) {
    var n;
    2 == arguments.length || 0 > (n = goog.array.indexOf(e, o)) ? e.push(t) : goog.array.insertAt(e, t, n)
}, goog.array.remove = function(e, t) {
    var o, n = goog.array.indexOf(e, t);
    return (o = n >= 0) && goog.array.removeAt(e, n), o
}, goog.array.removeAt = function(e, t) {
    return goog.asserts.assert(null != e.length), 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1).length
}, goog.array.removeIf = function(e, t, o) {
    return t = goog.array.findIndex(e, t, o), t >= 0 ? (goog.array.removeAt(e, t), !0) : !1
}, goog.array.removeAllIf = function(e, t, o) {
    var n = 0;
    return goog.array.forEachRight(e, function(i, r) {
        t.call(o, i, r, e) && goog.array.removeAt(e, r) && n++
    }), n
}, goog.array.concat = function() {
    return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
}, goog.array.join = function() {
    return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
}, goog.array.toArray = function(e) {
    var t = e.length;
    if (t > 0) {
        for (var o = Array(t), n = 0; t > n; n++) o[n] = e[n];
        return o
    }
    return []
}, goog.array.clone = goog.array.toArray, goog.array.extend = function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        if (goog.isArrayLike(o)) {
            var n = e.length || 0,
                i = o.length || 0;
            e.length = n + i;
            for (var r = 0; i > r; r++) e[n + r] = o[r]
        } else e.push(o)
    }
}, goog.array.splice = function(e) {
    return goog.asserts.assert(null != e.length), goog.array.ARRAY_PROTOTYPE_.splice.apply(e, goog.array.slice(arguments, 1))
}, goog.array.slice = function(e, t, o) {
    return goog.asserts.assert(null != e.length), 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(e, t) : goog.array.ARRAY_PROTOTYPE_.slice.call(e, t, o)
}, goog.array.removeDuplicates = function(e, t, o) {
    t = t || e;
    var n = function() {
        return goog.isObject(s) ? "o" + goog.getUid(s) : (typeof s).charAt(0) + s
    };
    o = o || n;
    for (var n = {}, i = 0, r = 0; r < e.length;) {
        var s = e[r++],
            l = o(s);
        Object.prototype.hasOwnProperty.call(n, l) || (n[l] = !0, t[i++] = s)
    }
    t.length = i
}, goog.array.binarySearch = function(e, t, o) {
    return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
}, goog.array.binarySelect = function(e, t, o) {
    return goog.array.binarySearch_(e, t, !0, void 0, o)
}, goog.array.binarySearch_ = function(e, t, o, n, i) {
    for (var r, s = 0, l = e.length; l > s;) {
        var a, c = s + l >> 1;
        a = o ? t.call(i, e[c], c, e) : t(n, e[c]), a > 0 ? s = c + 1 : (l = c, r = !a)
    }
    return r ? s : ~s
}, goog.array.sort = function(e, t) {
    e.sort(t || goog.array.defaultCompare)
}, goog.array.stableSort = function(e, t) {
    for (var o = 0; o < e.length; o++) e[o] = {
        index: o,
        value: e[o]
    };
    var n = t || goog.array.defaultCompare;
    for (goog.array.sort(e, function(e, t) {
            return n(e.value, t.value) || e.index - t.index
        }), o = 0; o < e.length; o++) e[o] = e[o].value
}, goog.array.sortByKey = function(e, t, o) {
    var n = o || goog.array.defaultCompare;
    goog.array.sort(e, function(e, o) {
        return n(t(e), t(o))
    })
}, goog.array.sortObjectsByKey = function(e, t, o) {
    goog.array.sortByKey(e, function(e) {
        return e[t]
    }, o)
}, goog.array.isSorted = function(e, t, o) {
    t = t || goog.array.defaultCompare;
    for (var n = 1; n < e.length; n++) {
        var i = t(e[n - 1], e[n]);
        if (i > 0 || 0 == i && o) return !1
    }
    return !0
}, goog.array.equals = function(e, t, o) {
    if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
    var n = e.length;
    o = o || goog.array.defaultCompareEquality;
    for (var i = 0; n > i; i++)
        if (!o(e[i], t[i])) return !1;
    return !0
}, goog.array.compare3 = function(e, t, o) {
    o = o || goog.array.defaultCompare;
    for (var n = Math.min(e.length, t.length), i = 0; n > i; i++) {
        var r = o(e[i], t[i]);
        if (0 != r) return r
    }
    return goog.array.defaultCompare(e.length, t.length)
}, goog.array.defaultCompare = function(e, t) {
    return e > t ? 1 : t > e ? -1 : 0
}, goog.array.inverseDefaultCompare = function(e, t) {
    return -goog.array.defaultCompare(e, t)
}, goog.array.defaultCompareEquality = function(e, t) {
    return e === t
}, goog.array.binaryInsert = function(e, t, o) {
    return o = goog.array.binarySearch(e, t, o), 0 > o ? (goog.array.insertAt(e, t, -(o + 1)), !0) : !1
}, goog.array.binaryRemove = function(e, t, o) {
    return t = goog.array.binarySearch(e, t, o), t >= 0 ? goog.array.removeAt(e, t) : !1
}, goog.array.bucket = function(e, t, o) {
    for (var n = {}, i = 0; i < e.length; i++) {
        var r = e[i],
            s = t.call(o, r, i, e);
        goog.isDef(s) && (n[s] || (n[s] = [])).push(r)
    }
    return n
}, goog.array.toObject = function(e, t, o) {
    var n = {};
    return goog.array.forEach(e, function(i, r) {
        n[t.call(o, i, r, e)] = i
    }), n
}, goog.array.range = function(e, t, o) {
    var n = [],
        i = 0,
        r = e;
    if (o = o || 1, void 0 !== t && (i = e, r = t), 0 > o * (r - i)) return [];
    if (o > 0)
        for (e = i; r > e; e += o) n.push(e);
    else
        for (e = i; e > r; e += o) n.push(e);
    return n
}, goog.array.repeat = function(e, t) {
    for (var o = [], n = 0; t > n; n++) o[n] = e;
    return o
}, goog.array.flatten = function() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var o = arguments[t];
        if (goog.isArray(o))
            for (var n = 0; n < o.length; n += 8192)
                for (var i = goog.array.slice(o, n, n + 8192), i = goog.array.flatten.apply(null, i), r = 0; r < i.length; r++) e.push(i[r]);
        else e.push(o)
    }
    return e
}, goog.array.rotate = function(e, t) {
    return goog.asserts.assert(null != e.length), e.length && (t %= e.length, t > 0 ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(e, e.splice(-t, t)) : 0 > t && goog.array.ARRAY_PROTOTYPE_.push.apply(e, e.splice(0, -t))), e
}, goog.array.moveItem = function(e, t, o) {
    goog.asserts.assert(t >= 0 && t < e.length), goog.asserts.assert(o >= 0 && o < e.length), t = goog.array.ARRAY_PROTOTYPE_.splice.call(e, t, 1), goog.array.ARRAY_PROTOTYPE_.splice.call(e, o, 0, t[0])
}, goog.array.zip = function() {
    if (!arguments.length) return [];
    for (var e = [], t = 0;; t++) {
        for (var o = [], n = 0; n < arguments.length; n++) {
            var i = arguments[n];
            if (t >= i.length) return e;
            o.push(i[t])
        }
        e.push(o)
    }
}, goog.array.shuffle = function(e, t) {
    for (var o = t || Math.random, n = e.length - 1; n > 0; n--) {
        var i = Math.floor(o() * (n + 1)),
            r = e[n];
        e[n] = e[i], e[i] = r
    }
}, goog.array.copyByIndex = function(e, t) {
    var o = [];
    return goog.array.forEach(t, function(t) {
        o.push(e[t])
    }), o
}, goog.math = {}, goog.math.randomInt = function(e) {
    return Math.floor(Math.random() * e)
}, goog.math.uniformRandom = function(e, t) {
    return e + Math.random() * (t - e)
}, goog.math.clamp = function(e, t, o) {
    return Math.min(Math.max(e, t), o)
}, goog.math.modulo = function(e, t) {
    var o = e % t;
    return 0 > o * t ? o + t : o
}, goog.math.lerp = function(e, t, o) {
    return e + o * (t - e)
}, goog.math.nearlyEquals = function(e, t, o) {
    return Math.abs(e - t) <= (o || 1e-6)
}, goog.math.standardAngle = function(e) {
    return goog.math.modulo(e, 360)
}, goog.math.standardAngleInRadians = function(e) {
    return goog.math.modulo(e, 2 * Math.PI)
}, goog.math.toRadians = function(e) {
    return e * Math.PI / 180
}, goog.math.toDegrees = function(e) {
    return 180 * e / Math.PI
}, goog.math.angleDx = function(e, t) {
    return t * Math.cos(goog.math.toRadians(e))
}, goog.math.angleDy = function(e, t) {
    return t * Math.sin(goog.math.toRadians(e))
}, goog.math.angle = function(e, t, o, n) {
    return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(n - t, o - e)))
}, goog.math.angleDifference = function(e, t) {
    var o = goog.math.standardAngle(t) - goog.math.standardAngle(e);
    return o > 180 ? o -= 360 : -180 >= o && (o = 360 + o), o
}, goog.math.sign = function(e) {
    return 0 == e ? 0 : 0 > e ? -1 : 1
}, goog.math.longestCommonSubsequence = function(e, t, o, n) {
    o = o || function(e, t) {
        return e == t
    }, n = n || function(t) {
        return e[t]
    };
    for (var i = e.length, r = t.length, s = [], l = 0; i + 1 > l; l++) s[l] = [], s[l][0] = 0;
    for (var a = 0; r + 1 > a; a++) s[0][a] = 0;
    for (l = 1; i >= l; l++)
        for (a = 1; r >= a; a++) s[l][a] = o(e[l - 1], t[a - 1]) ? s[l - 1][a - 1] + 1 : Math.max(s[l - 1][a], s[l][a - 1]);
    for (var c = [], l = i, a = r; l > 0 && a > 0;) o(e[l - 1], t[a - 1]) ? (c.unshift(n(l - 1, a - 1)), l--, a--) : s[l - 1][a] > s[l][a - 1] ? l-- : a--;
    return c
}, goog.math.sum = function() {
    return goog.array.reduce(arguments, function(e, t) {
        return e + t
    }, 0)
}, goog.math.average = function() {
    return goog.math.sum.apply(null, arguments) / arguments.length
}, goog.math.sampleVariance = function() {
    var e = arguments.length;
    if (2 > e) return 0;
    var t = goog.math.average.apply(null, arguments);
    return goog.math.sum.apply(null, goog.array.map(arguments, function(e) {
        return Math.pow(e - t, 2)
    })) / (e - 1)
}, goog.math.standardDeviation = function() {
    return Math.sqrt(goog.math.sampleVariance.apply(null, arguments))
}, goog.math.isInt = function(e) {
    return isFinite(e) && 0 == e % 1
}, goog.math.isFiniteNumber = function(e) {
    return isFinite(e) && !isNaN(e)
}, goog.math.log10Floor = function(e) {
    if (e > 0) {
        var t = Math.round(Math.log(e) * Math.LOG10E);
        return t - (parseFloat("1e" + t) > e)
    }
    return 0 == e ? -1 / 0 : 0 / 0
}, goog.math.safeFloor = function(e, t) {
    return goog.asserts.assert(!goog.isDef(t) || t > 0), Math.floor(e + (t || 2e-15))
}, goog.math.safeCeil = function(e, t) {
    return goog.asserts.assert(!goog.isDef(t) || t > 0), Math.ceil(e - (t || 2e-15))
}, goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
    var e = goog.labs.userAgent.util.getNavigator_();
    return e && (e = e.userAgent) ? e : ""
}, goog.labs.userAgent.util.getNavigator_ = function() {
    return goog.global.navigator
}, goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(), goog.labs.userAgent.util.setUserAgent = function(e) {
    goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
}, goog.labs.userAgent.util.getUserAgent = function() {
    return goog.labs.userAgent.util.userAgent_
}, goog.labs.userAgent.util.matchUserAgent = function(e) {
    var t = goog.labs.userAgent.util.getUserAgent();
    return goog.string.contains(t, e)
}, goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
    var t = goog.labs.userAgent.util.getUserAgent();
    return goog.string.caseInsensitiveContains(t, e)
}, goog.labs.userAgent.util.extractVersionTuples = function(e) {
    for (var t, o = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), n = []; t = o.exec(e);) n.push([t[1], t[2], t[3] || void 0]);
    return n
}, goog.object = {}, goog.object.forEach = function(e, t, o) {
    for (var n in e) t.call(o, e[n], n, e)
}, goog.object.filter = function(e, t, o) {
    var n, i = {};
    for (n in e) t.call(o, e[n], n, e) && (i[n] = e[n]);
    return i
}, goog.object.map = function(e, t, o) {
    var n, i = {};
    for (n in e) i[n] = t.call(o, e[n], n, e);
    return i
}, goog.object.some = function(e, t, o) {
    for (var n in e)
        if (t.call(o, e[n], n, e)) return !0;
    return !1
}, goog.object.every = function(e, t, o) {
    for (var n in e)
        if (!t.call(o, e[n], n, e)) return !1;
    return !0
}, goog.object.getCount = function(e) {
    var t, o = 0;
    for (t in e) o++;
    return o
}, goog.object.getAnyKey = function(e) {
    for (var t in e) return t
}, goog.object.getAnyValue = function(e) {
    for (var t in e) return e[t]
}, goog.object.contains = function(e, t) {
    return goog.object.containsValue(e, t)
}, goog.object.getValues = function(e) {
    var t, o = [],
        n = 0;
    for (t in e) o[n++] = e[t];
    return o
}, goog.object.getKeys = function(e) {
    var t, o = [],
        n = 0;
    for (t in e) o[n++] = t;
    return o
}, goog.object.getValueByKeys = function(e, t) {
    for (var o = goog.isArrayLike(t), n = o ? t : arguments, o = o ? 0 : 1; o < n.length && (e = e[n[o]], goog.isDef(e)); o++);
    return e
}, goog.object.containsKey = function(e, t) {
    return t in e
}, goog.object.containsValue = function(e, t) {
    for (var o in e)
        if (e[o] == t) return !0;
    return !1
}, goog.object.findKey = function(e, t, o) {
    for (var n in e)
        if (t.call(o, e[n], n, e)) return n
}, goog.object.findValue = function(e, t, o) {
    return (t = goog.object.findKey(e, t, o)) && e[t]
}, goog.object.isEmpty = function(e) {
    for (var t in e) return !1;
    return !0
}, goog.object.clear = function(e) {
    for (var t in e) delete e[t]
}, goog.object.remove = function(e, t) {
    var o;
    return (o = t in e) && delete e[t], o
}, goog.object.add = function(e, t, o) {
    if (t in e) throw Error('The object already contains the key "' + t + '"');
    goog.object.set(e, t, o)
}, goog.object.get = function(e, t, o) {
    return t in e ? e[t] : o
}, goog.object.set = function(e, t, o) {
    e[t] = o
}, goog.object.setIfUndefined = function(e, t, o) {
    return t in e ? e[t] : e[t] = o
}, goog.object.setWithReturnValueIfNotSet = function(e, t, o) {
    return t in e ? e[t] : (o = o(), e[t] = o)
}, goog.object.equals = function(e, t) {
    for (var o in e)
        if (!(o in t) || e[o] !== t[o]) return !1;
    for (o in t)
        if (!(o in e)) return !1;
    return !0
}, goog.object.clone = function(e) {
    var t, o = {};
    for (t in e) o[t] = e[t];
    return o
}, goog.object.unsafeClone = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (e.clone) return e.clone();
        var o, t = "array" == t ? [] : {};
        for (o in e) t[o] = goog.object.unsafeClone(e[o]);
        return t
    }
    return e
}, goog.object.transpose = function(e) {
    var t, o = {};
    for (t in e) o[e[t]] = t;
    return o
}, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(e) {
    for (var t, o, n = 1; n < arguments.length; n++) {
        o = arguments[n];
        for (t in o) e[t] = o[t];
        for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++) t = goog.object.PROTOTYPE_FIELDS_[i], Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
    }
}, goog.object.create = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
    if (e % 2) throw Error("Uneven number of arguments");
    for (var t = {}, o = 0; e > o; o += 2) t[arguments[o]] = arguments[o + 1];
    return t
}, goog.object.createSet = function() {
    var e = arguments.length;
    if (1 == e && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
    for (var t = {}, o = 0; e > o; o++) t[arguments[o]] = !0;
    return t
}, goog.object.createImmutableView = function(e) {
    var t = e;
    return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
}, goog.object.isImmutableView = function(e) {
    return !!Object.isFrozen && Object.isFrozen(e)
}, goog.labs.userAgent.browser = {}, goog.labs.userAgent.browser.matchOpera_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR")
}, goog.labs.userAgent.browser.matchIE_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge") || goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
}, goog.labs.userAgent.browser.matchFirefox_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Firefox")
}, goog.labs.userAgent.browser.matchSafari_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchIE_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
}, goog.labs.userAgent.browser.matchCoast_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Coast")
}, goog.labs.userAgent.browser.matchIosWebview_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
}, goog.labs.userAgent.browser.matchChrome_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchOpera_() && !goog.labs.userAgent.browser.matchIE_()
}, goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
}, goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_, goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_, goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_, goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_, goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_, goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_, goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_, goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_, goog.labs.userAgent.browser.isSilk = function() {
    return goog.labs.userAgent.util.matchUserAgent("Silk")
}, goog.labs.userAgent.browser.getVersion = function() {
    function e(e) {
        return e = goog.array.find(e, n), o[e] || ""
    }
    var t = goog.labs.userAgent.util.getUserAgent();
    if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t);
    var t = goog.labs.userAgent.util.extractVersionTuples(t),
        o = {};
    goog.array.forEach(t, function(e) {
        o[e[0]] = e[1]
    });
    var n = goog.partial(goog.object.containsKey, o);
    return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS"]) : (t = t[2]) && t[1] || ""
}, goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
}, goog.labs.userAgent.browser.getIEVersion_ = function(e) {
    var t = /rv: *([\d\.]*)/.exec(e);
    if (t && t[1] || (t = /Edge\/([\d\.]+)/.exec(e))) return t[1];
    var t = "",
        o = /MSIE +([\d\.]+)/.exec(e);
    if (o && o[1])
        if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == o[1])
            if (e && e[1]) switch (e[1]) {
                case "4.0":
                    t = "8.0";
                    break;
                case "5.0":
                    t = "9.0";
                    break;
                case "6.0":
                    t = "10.0";
                    break;
                case "7.0":
                    t = "11.0"
            } else t = "7.0";
            else t = o[1];
    return t
}, goog.labs.userAgent.engine = {}, goog.labs.userAgent.engine.isPresto = function() {
    return goog.labs.userAgent.util.matchUserAgent("Presto")
}, goog.labs.userAgent.engine.isTrident = function() {
    return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
}, goog.labs.userAgent.engine.isEdge = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge")
}, goog.labs.userAgent.engine.isWebKit = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
}, goog.labs.userAgent.engine.isGecko = function() {
    return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
}, goog.labs.userAgent.engine.getVersion = function() {
    var e = goog.labs.userAgent.util.getUserAgent();
    if (e) {
        var e = goog.labs.userAgent.util.extractVersionTuples(e),
            t = goog.labs.userAgent.engine.getEngineTuple_(e);
        if (t) return "Gecko" == t[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : t[1];
        var o, e = e[0];
        if (e && (o = e[2]) && (o = /Trident\/([^\s;]+)/.exec(o))) return o[1]
    }
    return ""
}, goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
    if (!goog.labs.userAgent.engine.isEdge()) return e[1];
    for (var t = 0; t < e.length; t++) {
        var o = e[t];
        if ("Edge" == o[0]) return o
    }
}, goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
}, goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
    var o = goog.array.find(e, function(e) {
        return t == e[0]
    });
    return o && o[1] || ""
}, goog.labs.userAgent.platform = {}, goog.labs.userAgent.platform.isAndroid = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android")
}, goog.labs.userAgent.platform.isIpod = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPod")
}, goog.labs.userAgent.platform.isIphone = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
}, goog.labs.userAgent.platform.isIpad = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPad")
}, goog.labs.userAgent.platform.isIos = function() {
    return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
}, goog.labs.userAgent.platform.isMacintosh = function() {
    return goog.labs.userAgent.util.matchUserAgent("Macintosh")
}, goog.labs.userAgent.platform.isLinux = function() {
    return goog.labs.userAgent.util.matchUserAgent("Linux")
}, goog.labs.userAgent.platform.isWindows = function() {
    return goog.labs.userAgent.util.matchUserAgent("Windows")
}, goog.labs.userAgent.platform.isChromeOS = function() {
    return goog.labs.userAgent.util.matchUserAgent("CrOS")
}, goog.labs.userAgent.platform.getVersion = function() {
    var e = goog.labs.userAgent.util.getUserAgent(),
        t = "";
    return goog.labs.userAgent.platform.isWindows() ? (t = /Windows (?:NT|Phone) ([0-9.]+)/, t = (e = t.exec(e)) ? e[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, t = (e = t.exec(e)) && e[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (t = /Mac OS X ([0-9_.]+)/, t = (e = t.exec(e)) ? e[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isAndroid() ? (t = /Android\s+([^\);]+)(\)|;)/, t = (e = t.exec(e)) && e[1]) : goog.labs.userAgent.platform.isChromeOS() && (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, t = (e = t.exec(e)) && e[1]), t || ""
}, goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
}, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, goog.userAgent.getUserAgentString = function() {
    return goog.labs.userAgent.util.getUserAgent()
}, goog.userAgent.getNavigator = function() {
    return goog.global.navigator || null
}, goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(), goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(), goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(), goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(), goog.userAgent.isMobile_ = function() {
    return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
}, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(), goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
    var e = goog.userAgent.getNavigator();
    return e && e.platform || ""
}, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD, goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(), goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(), goog.userAgent.isLegacyLinux_ = function() {
    return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
}, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(), goog.userAgent.isX11_ = function() {
    var e = goog.userAgent.getNavigator();
    return !!e && goog.string.contains(e.appVersion || "", "X11")
}, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(), goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(), goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(), goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.determineVersion_ = function() {
    if (goog.userAgent.OPERA && goog.global.opera) {
        var e = goog.global.opera.version;
        return goog.isFunction(e) ? e() : e
    }
    var e = "",
        t = goog.userAgent.getVersionRegexResult_();
    return t && (e = t ? t[1] : ""), goog.userAgent.IE && !goog.labs.userAgent.engine.isEdge() && (t = goog.userAgent.getDocumentMode_(), t > parseFloat(e)) ? String(t) : e
}, goog.userAgent.getVersionRegexResult_ = function() {
    var e = goog.userAgent.getUserAgentString();
    return goog.userAgent.GECKO ? /rv\:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.IE && goog.labs.userAgent.engine.isEdge() ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : void 0
}, goog.userAgent.getDocumentMode_ = function() {
    var e = goog.global.document;
    return e ? e.documentMode : void 0
}, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(e, t) {
    return goog.string.compareVersions(e, t)
}, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(e) {
    return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[e] || (goog.userAgent.isVersionOrHigherCache_[e] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
}, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(e) {
    return goog.userAgent.IE && (goog.labs.userAgent.engine.isEdge() || goog.userAgent.DOCUMENT_MODE >= e)
}, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = function() {
    var e = goog.global.document,
        t = goog.userAgent.getDocumentMode_();
    return !e || !goog.userAgent.IE || !t && goog.labs.userAgent.engine.isEdge() ? void 0 : t || ("CSS1Compat" == e.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5)
}(), goog.dom.BrowserFeature = {
    CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    CAN_USE_CHILDREN_ATTRIBUTE: !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1"),
    CAN_USE_INNER_TEXT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    CAN_USE_PARENT_ELEMENT_PROPERTY: goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT,
    INNER_HTML_NEEDS_SCOPED_ELEMENT: goog.userAgent.IE,
    LEGACY_IE_RANGES: goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)
}, goog.dom.TagName = {
    A: "A",
    ABBR: "ABBR",
    ACRONYM: "ACRONYM",
    ADDRESS: "ADDRESS",
    APPLET: "APPLET",
    AREA: "AREA",
    ARTICLE: "ARTICLE",
    ASIDE: "ASIDE",
    AUDIO: "AUDIO",
    B: "B",
    BASE: "BASE",
    BASEFONT: "BASEFONT",
    BDI: "BDI",
    BDO: "BDO",
    BIG: "BIG",
    BLOCKQUOTE: "BLOCKQUOTE",
    BODY: "BODY",
    BR: "BR",
    BUTTON: "BUTTON",
    CANVAS: "CANVAS",
    CAPTION: "CAPTION",
    CENTER: "CENTER",
    CITE: "CITE",
    CODE: "CODE",
    COL: "COL",
    COLGROUP: "COLGROUP",
    COMMAND: "COMMAND",
    DATA: "DATA",
    DATALIST: "DATALIST",
    DD: "DD",
    DEL: "DEL",
    DETAILS: "DETAILS",
    DFN: "DFN",
    DIALOG: "DIALOG",
    DIR: "DIR",
    DIV: "DIV",
    DL: "DL",
    DT: "DT",
    EM: "EM",
    EMBED: "EMBED",
    FIELDSET: "FIELDSET",
    FIGCAPTION: "FIGCAPTION",
    FIGURE: "FIGURE",
    FONT: "FONT",
    FOOTER: "FOOTER",
    FORM: "FORM",
    FRAME: "FRAME",
    FRAMESET: "FRAMESET",
    H1: "H1",
    H2: "H2",
    H3: "H3",
    H4: "H4",
    H5: "H5",
    H6: "H6",
    HEAD: "HEAD",
    HEADER: "HEADER",
    HGROUP: "HGROUP",
    HR: "HR",
    HTML: "HTML",
    I: "I",
    IFRAME: "IFRAME",
    IMG: "IMG",
    INPUT: "INPUT",
    INS: "INS",
    ISINDEX: "ISINDEX",
    KBD: "KBD",
    KEYGEN: "KEYGEN",
    LABEL: "LABEL",
    LEGEND: "LEGEND",
    LI: "LI",
    LINK: "LINK",
    MAP: "MAP",
    MARK: "MARK",
    MATH: "MATH",
    MENU: "MENU",
    META: "META",
    METER: "METER",
    NAV: "NAV",
    NOFRAMES: "NOFRAMES",
    NOSCRIPT: "NOSCRIPT",
    OBJECT: "OBJECT",
    OL: "OL",
    OPTGROUP: "OPTGROUP",
    OPTION: "OPTION",
    OUTPUT: "OUTPUT",
    P: "P",
    PARAM: "PARAM",
    PRE: "PRE",
    PROGRESS: "PROGRESS",
    Q: "Q",
    RP: "RP",
    RT: "RT",
    RUBY: "RUBY",
    S: "S",
    SAMP: "SAMP",
    SCRIPT: "SCRIPT",
    SECTION: "SECTION",
    SELECT: "SELECT",
    SMALL: "SMALL",
    SOURCE: "SOURCE",
    SPAN: "SPAN",
    STRIKE: "STRIKE",
    STRONG: "STRONG",
    STYLE: "STYLE",
    SUB: "SUB",
    SUMMARY: "SUMMARY",
    SUP: "SUP",
    SVG: "SVG",
    TABLE: "TABLE",
    TBODY: "TBODY",
    TD: "TD",
    TEXTAREA: "TEXTAREA",
    TFOOT: "TFOOT",
    TH: "TH",
    THEAD: "THEAD",
    TIME: "TIME",
    TITLE: "TITLE",
    TR: "TR",
    TRACK: "TRACK",
    TT: "TT",
    U: "U",
    UL: "UL",
    VAR: "VAR",
    VIDEO: "VIDEO",
    WBR: "WBR"
}, goog.dom.tags = {}, goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), goog.dom.tags.isVoidTag = function(e) {
    return !0 === goog.dom.tags.VOID_TAGS_[e]
}, goog.string.TypedString = function() {}, goog.string.Const = function() {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "", this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
}, goog.string.Const.prototype.implementsGoogStringTypedString = !0, goog.string.Const.prototype.getTypedStringValue = function() {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
}, goog.string.Const.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
}, goog.string.Const.unwrap = function(e) {
    return e instanceof goog.string.Const && e.constructor === goog.string.Const && e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + e + "'"), "type_error:Const")
}, goog.string.Const.from = function(e) {
    return goog.string.Const.create__googStringSecurityPrivate_(e)
}, goog.string.Const.TYPE_MARKER_ = {}, goog.string.Const.create__googStringSecurityPrivate_ = function(e) {
    var t = new goog.string.Const;
    return t.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = e, t
}, goog.html = {}, goog.html.SafeStyle = function() {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "", this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
}, goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyle.fromConstant = function(e) {
    return e = goog.string.Const.unwrap(e), 0 === e.length ? goog.html.SafeStyle.EMPTY : (goog.html.SafeStyle.checkStyle_(e), goog.asserts.assert(goog.string.endsWith(e, ";"), "Last character of style string is not ';': " + e), goog.asserts.assert(goog.string.contains(e, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + e), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
}, goog.html.SafeStyle.checkStyle_ = function(e) {
    goog.asserts.assert(!/[<>]/.test(e), "Forbidden characters in style string: " + e)
}, goog.html.SafeStyle.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
}, goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
    return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
}), goog.html.SafeStyle.unwrap = function(e) {
    return e instanceof goog.html.SafeStyle && e.constructor === goog.html.SafeStyle && e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + e + "'"), "type_error:SafeStyle")
}, goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(e) {
    return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)
}, goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e, this
}, goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""), goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez", goog.html.SafeStyle.create = function(e) {
    var t, o = "";
    for (t in e) {
        if (!/^[-_a-zA-Z0-9]+$/.test(t)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
        var n = e[t];
        null != n && (n instanceof goog.string.Const ? (n = goog.string.Const.unwrap(n), goog.asserts.assert(!/[{;}]/.test(n), "Value does not allow [{;}].")) : goog.html.SafeStyle.VALUE_RE_.test(n) ? goog.html.SafeStyle.hasBalancedQuotes_(n) || (goog.asserts.fail("String value requires balanced quotes, got: " + n), n = goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + n), n = goog.html.SafeStyle.INNOCUOUS_STRING), o += t + ":" + n + ";")
    }
    return o ? (goog.html.SafeStyle.checkStyle_(o), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o)) : goog.html.SafeStyle.EMPTY
}, goog.html.SafeStyle.hasBalancedQuotes_ = function(e) {
    for (var t = !0, o = !0, n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        "'" == i && o ? t = !t : '"' == i && t && (o = !o)
    }
    return t && o
}, goog.html.SafeStyle.VALUE_RE_ = /^[-,."'%_!# a-zA-Z0-9]+$/, goog.html.SafeStyle.concat = function() {
    var e = "",
        t = function(o) {
            goog.isArray(o) ? goog.array.forEach(o, t) : e += goog.html.SafeStyle.unwrap(o)
        };
    return goog.array.forEach(arguments, t), e ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e) : goog.html.SafeStyle.EMPTY
}, goog.html.SafeStyleSheet = function() {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "", this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
}, goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyleSheet.concat = function() {
    var e = "",
        t = function(o) {
            goog.isArray(o) ? goog.array.forEach(o, t) : e += goog.html.SafeStyleSheet.unwrap(o)
        };
    return goog.array.forEach(arguments, t), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.SafeStyleSheet.fromConstant = function(e) {
    return e = goog.string.Const.unwrap(e), 0 === e.length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.contains(e, "<"), "Forbidden '<' character in style sheet string: " + e), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
}, goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
}, goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
    return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
}), goog.html.SafeStyleSheet.unwrap = function(e) {
    return e instanceof goog.html.SafeStyleSheet && e.constructor === goog.html.SafeStyleSheet && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + e + "'"), "type_error:SafeStyleSheet")
}, goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(e) {
    return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)
}, goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e, this
}, goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""), goog.fs = {}, goog.fs.url = {}, goog.fs.url.createObjectUrl = function(e) {
    return goog.fs.url.getUrlObject_().createObjectURL(e)
}, goog.fs.url.revokeObjectUrl = function(e) {
    goog.fs.url.getUrlObject_().revokeObjectURL(e)
}, goog.fs.url.getUrlObject_ = function() {
    var e = goog.fs.url.findUrlObject_();
    if (null != e) return e;
    throw Error("This browser doesn't seem to support blob URLs")
}, goog.fs.url.findUrlObject_ = function() {
    return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null
}, goog.fs.url.browserSupportsObjectUrls = function() {
    return null != goog.fs.url.findUrlObject_()
}, goog.i18n = {}, goog.i18n.bidi = {}, goog.i18n.bidi.FORCE_RTL = !1, goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)), goog.i18n.bidi.Format = {
    LRE: "‪",
    RLE: "‫",
    PDF: "‬",
    LRM: "‎",
    RLM: "‏"
}, goog.i18n.bidi.Dir = {
    LTR: 1,
    RTL: -1,
    NEUTRAL: 0
}, goog.i18n.bidi.RIGHT = "right", goog.i18n.bidi.LEFT = "left", goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT, goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, goog.i18n.bidi.toDir = function(e, t) {
    return "number" == typeof e ? e > 0 ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : t ? null : goog.i18n.bidi.Dir.NEUTRAL : null == e ? null : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
}, goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", goog.i18n.bidi.rtlChars_ = "֑-߿‏יִ-﷿ﹰ-ﻼ", goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g, goog.i18n.bidi.stripHtmlIfNeeded_ = function(e, t) {
    return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e
}, goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.hasAnyRtl = function(e, t) {
    return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl, goog.i18n.bidi.hasAnyLtr = function(e, t) {
    return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.isRtlChar = function(e) {
    return goog.i18n.bidi.rtlRe_.test(e)
}, goog.i18n.bidi.isLtrChar = function(e) {
    return goog.i18n.bidi.ltrRe_.test(e)
}, goog.i18n.bidi.isNeutralChar = function(e) {
    return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
}, goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.startsWithRtl = function(e, t) {
    return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl, goog.i18n.bidi.startsWithLtr = function(e, t) {
    return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr, goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/, goog.i18n.bidi.isNeutralText = function(e, t) {
    return e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t), goog.i18n.bidi.isRequiredLtrRe_.test(e) || !goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e)
}, goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"), goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"), goog.i18n.bidi.endsWithLtr = function(e, t) {
    return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr, goog.i18n.bidi.endsWithRtl = function(e, t) {
    return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
}, goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl, goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i, goog.i18n.bidi.isRtlLanguage = function(e) {
    return goog.i18n.bidi.rtlLocalesRe_.test(e)
}, goog.i18n.bidi.bracketGuardHtmlRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g, goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g, goog.i18n.bidi.guardBracketInHtml = function(e, t) {
    return (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t) ? e.replace(goog.i18n.bidi.bracketGuardHtmlRe_, "<span dir=rtl>$&</span>") : e.replace(goog.i18n.bidi.bracketGuardHtmlRe_, "<span dir=ltr>$&</span>")
}, goog.i18n.bidi.guardBracketInText = function(e, t) {
    var o = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
    return e.replace(goog.i18n.bidi.bracketGuardTextRe_, o + "$&" + o)
}, goog.i18n.bidi.enforceRtlInHtml = function(e) {
    return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
}, goog.i18n.bidi.enforceRtlInText = function(e) {
    return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
}, goog.i18n.bidi.enforceLtrInHtml = function(e) {
    return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
}, goog.i18n.bidi.enforceLtrInText = function(e) {
    return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
}, goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g, goog.i18n.bidi.leftRe_ = /left/gi, goog.i18n.bidi.rightRe_ = /right/gi, goog.i18n.bidi.tempRe_ = /%%%%/g, goog.i18n.bidi.mirrorCSS = function(e) {
    return e.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
}, goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g, goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g, goog.i18n.bidi.normalizeHebrewQuote = function(e) {
    return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
}, goog.i18n.bidi.wordSeparatorRe_ = /\s+/, goog.i18n.bidi.hasNumeralsRe_ = /\d/, goog.i18n.bidi.rtlDetectionThreshold_ = .4, goog.i18n.bidi.estimateDirection = function(e, t) {
    for (var o = 0, n = 0, i = !1, r = goog.i18n.bidi.stripHtmlIfNeeded_(e, t).split(goog.i18n.bidi.wordSeparatorRe_), s = 0; s < r.length; s++) {
        var l = r[s];
        goog.i18n.bidi.startsWithRtl(l) ? (o++, n++) : goog.i18n.bidi.isRequiredLtrRe_.test(l) ? i = !0 : goog.i18n.bidi.hasAnyLtr(l) ? n++ : goog.i18n.bidi.hasNumeralsRe_.test(l) && (i = !0)
    }
    return 0 == n ? i ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : o / n > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
}, goog.i18n.bidi.detectRtlDirectionality = function(e, t) {
    return goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
}, goog.i18n.bidi.setElementDirAndAlign = function(e, t) {
    e && (t = goog.i18n.bidi.toDir(t)) && (e.style.textAlign = t == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
}, goog.i18n.bidi.DirectionalString = function() {}, goog.html.SafeUrl = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "", this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
}, goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez", goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0, goog.html.SafeUrl.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
}, goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeUrl.prototype.getDirection = function() {
    return goog.i18n.bidi.Dir.LTR
}, goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
    return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
}), goog.html.SafeUrl.unwrap = function(e) {
    return e instanceof goog.html.SafeUrl && e.constructor === goog.html.SafeUrl && e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + e + "'"), "type_error:SafeUrl")
}, goog.html.SafeUrl.fromConstant = function(e) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
}, goog.html.SAFE_BLOB_TYPE_PATTERN_ = /^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)$/i, goog.html.SafeUrl.fromBlob = function(e) {
    return e = goog.html.SAFE_BLOB_TYPE_PATTERN_.test(e.type) ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, goog.html.SafeUrl.sanitize = function(e) {
    return e instanceof goog.html.SafeUrl ? e : (e = e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), e = goog.html.SAFE_URL_PATTERN_.test(e) ? goog.html.SafeUrl.normalize_(e) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
}, goog.html.SafeUrl.normalize_ = function(e) {
    try {
        var t = encodeURI(e)
    } catch (o) {
        return goog.html.SafeUrl.INNOCUOUS_STRING
    }
    return t.replace(goog.html.SafeUrl.NORMALIZE_MATCHER_, function(e) {
        return goog.html.SafeUrl.NORMALIZE_REPLACER_MAP_[e]
    })
}, goog.html.SafeUrl.NORMALIZE_MATCHER_ = /[()']|%5B|%5D|%25/g, goog.html.SafeUrl.NORMALIZE_REPLACER_MAP_ = {
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "%5B": "[",
    "%5D": "]",
    "%25": "%"
}, goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(e) {
    var t = new goog.html.SafeUrl;
    return t.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = e, t
}, goog.html.TrustedResourceUrl = function() {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "", this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
}, goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0, goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
}, goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.TrustedResourceUrl.prototype.getDirection = function() {
    return goog.i18n.bidi.Dir.LTR
}, goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
}), goog.html.TrustedResourceUrl.unwrap = function(e) {
    return e instanceof goog.html.TrustedResourceUrl && e.constructor === goog.html.TrustedResourceUrl && e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + e + "'"), "type_error:TrustedResourceUrl")
}, goog.html.TrustedResourceUrl.fromConstant = function(e) {
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
}, goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(e) {
    var t = new goog.html.TrustedResourceUrl;
    return t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = e, t
}, goog.html.SafeHtml = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "", this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_, this.dir_ = null
}, goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeHtml.prototype.getDirection = function() {
    return this.dir_
}, goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0, goog.html.SafeHtml.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
}, goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
    return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
}), goog.html.SafeHtml.unwrap = function(e) {
    return e instanceof goog.html.SafeHtml && e.constructor === goog.html.SafeHtml && e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + e + "'"), "type_error:SafeHtml")
}, goog.html.SafeHtml.htmlEscape = function(e) {
    if (e instanceof goog.html.SafeHtml) return e;
    var t = null;
    return e.implementsGoogI18nBidiDirectionalString && (t = e.getDirection()), e = e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.htmlEscape(e), t)
}, goog.html.SafeHtml.htmlEscapePreservingNewlines = function(e) {
    return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.newLineToBr(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
}, goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(e) {
    return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.whitespaceEscape(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
}, goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape, goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/, goog.html.SafeHtml.URL_ATTRIBUTES_ = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
}, goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
    embed: !0,
    iframe: !0,
    link: !0,
    object: !0,
    script: !0,
    style: !0,
    template: !0
}, goog.html.SafeHtml.create = function(e, t, o) {
    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toLowerCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(e, t, o)
}, goog.html.SafeHtml.createIframe = function(e, t, o, n) {
    var i = {};
    return i.src = e || null, i.srcdoc = t || null, e = goog.html.SafeHtml.combineAttributes(i, {
        sandbox: ""
    }, o), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, n)
}, goog.html.SafeHtml.createStyle = function(e, t) {
    var o = goog.html.SafeHtml.combineAttributes({
            type: "text/css"
        }, {}, t),
        n = "";
    e = goog.array.concat(e);
    for (var i = 0; i < e.length; i++) n += goog.html.SafeStyleSheet.unwrap(e[i]);
    return n = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", o, n)
}, goog.html.SafeHtml.getAttrNameAndValue_ = function(e, t, o) {
    if (o instanceof goog.string.Const) o = goog.string.Const.unwrap(o);
    else if ("style" == t.toLowerCase()) o = goog.html.SafeHtml.getStyleValue_(o);
    else {
        if (/^on/i.test(t)) throw Error('Attribute "' + t + '" requires goog.string.Const value, "' + o + '" given.');
        if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
            if (o instanceof goog.html.TrustedResourceUrl) o = goog.html.TrustedResourceUrl.unwrap(o);
            else {
                if (!(o instanceof goog.html.SafeUrl)) throw Error('Attribute "' + t + '" on tag "' + e + '" requires goog.html.SafeUrl or goog.string.Const value, "' + o + '" given.');
                o = goog.html.SafeUrl.unwrap(o)
            }
    }
    return o.implementsGoogStringTypedString && (o = o.getTypedStringValue()), goog.asserts.assert(goog.isString(o) || goog.isNumber(o), "String or number value expected, got " + typeof o + " with value: " + o), t + '="' + goog.string.htmlEscape(String(o)) + '"'
}, goog.html.SafeHtml.getStyleValue_ = function(e) {
    if (!goog.isObject(e)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e);
    return e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)), goog.html.SafeStyle.unwrap(e)
}, goog.html.SafeHtml.createWithDir = function(e, t, o, n) {
    return t = goog.html.SafeHtml.create(t, o, n), t.dir_ = e, t
}, goog.html.SafeHtml.concat = function() {
    var e = goog.i18n.bidi.Dir.NEUTRAL,
        t = "",
        o = function(n) {
            goog.isArray(n) ? goog.array.forEach(n, o) : (n = goog.html.SafeHtml.htmlEscape(n), t += goog.html.SafeHtml.unwrap(n), n = n.getDirection(), e == goog.i18n.bidi.Dir.NEUTRAL ? e = n : n != goog.i18n.bidi.Dir.NEUTRAL && e != n && (e = null))
        };
    return goog.array.forEach(arguments, o), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, e)
}, goog.html.SafeHtml.concatWithDir = function(e) {
    var t = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
    return t.dir_ = e, t
}, goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(e, t) {
    return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e, t)
}, goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e, t) {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = e, this.dir_ = t, this
}, goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(e, t, o) {
    var n = null,
        i = "<" + e;
    if (t)
        for (var r in t) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r)) throw Error('Invalid attribute name "' + r + '".');
            var s = t[r];
            goog.isDefAndNotNull(s) && (i += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, s))
        }
    return goog.isDef(o) ? goog.isArray(o) || (o = [o]) : o = [], goog.dom.tags.isVoidTag(e.toLowerCase()) ? (goog.asserts.assert(!o.length, "Void tag <" + e + "> does not allow content."), i += ">") : (n = goog.html.SafeHtml.concat(o), i += ">" + goog.html.SafeHtml.unwrap(n) + "</" + e + ">", n = n.getDirection()), (e = t && t.dir) && (n = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(i, n)
}, goog.html.SafeHtml.combineAttributes = function(e, t, o) {
    var n, i = {};
    for (n in e) goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"), i[n] = e[n];
    for (n in t) goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"), i[n] = t[n];
    for (n in o) {
        var r = n.toLowerCase();
        if (r in e) throw Error('Cannot override "' + r + '" attribute, got "' + n + '" with value "' + o[n] + '"');
        r in t && delete i[r], i[n] = o[n]
    }
    return i
}, goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL), goog.dom.safe = {}, goog.dom.safe.setInnerHtml = function(e, t) {
    e.innerHTML = goog.html.SafeHtml.unwrap(t)
}, goog.dom.safe.setOuterHtml = function(e, t) {
    e.outerHTML = goog.html.SafeHtml.unwrap(t)
}, goog.dom.safe.documentWrite = function(e, t) {
    e.write(goog.html.SafeHtml.unwrap(t))
}, goog.dom.safe.setAnchorHref = function(e, t) {
    var o;
    o = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitize(t), e.href = goog.html.SafeUrl.unwrap(o)
}, goog.dom.safe.setLocationHref = function(e, t) {
    var o;
    o = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitize(t), e.href = goog.html.SafeUrl.unwrap(o)
}, goog.math.Coordinate = function(e, t) {
    this.x = goog.isDef(e) ? e : 0, this.y = goog.isDef(t) ? t : 0
}, goog.math.Coordinate.prototype.clone = function() {
    return new goog.math.Coordinate(this.x, this.y)
}, goog.DEBUG && (goog.math.Coordinate.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
}), goog.math.Coordinate.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.x == t.x && e.y == t.y : !1
}, goog.math.Coordinate.distance = function(e, t) {
    var o = e.x - t.x,
        n = e.y - t.y;
    return Math.sqrt(o * o + n * n)
}, goog.math.Coordinate.magnitude = function(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
}, goog.math.Coordinate.azimuth = function(e) {
    return goog.math.angle(0, 0, e.x, e.y)
}, goog.math.Coordinate.squaredDistance = function(e, t) {
    var o = e.x - t.x,
        n = e.y - t.y;
    return o * o + n * n
}, goog.math.Coordinate.difference = function(e, t) {
    return new goog.math.Coordinate(e.x - t.x, e.y - t.y)
}, goog.math.Coordinate.sum = function(e, t) {
    return new goog.math.Coordinate(e.x + t.x, e.y + t.y)
}, goog.math.Coordinate.prototype.ceil = function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
}, goog.math.Coordinate.prototype.floor = function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
}, goog.math.Coordinate.prototype.round = function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
}, goog.math.Coordinate.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.x += e.x, this.y += e.y) : (this.x += e, goog.isNumber(t) && (this.y += t)), this
}, goog.math.Coordinate.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.x *= e, this.y *= o, this
}, goog.math.Coordinate.prototype.rotateRadians = function(e, t) {
    var o = t || new goog.math.Coordinate(0, 0),
        n = this.x,
        i = this.y,
        r = Math.cos(e),
        s = Math.sin(e);
    this.x = (n - o.x) * r - (i - o.y) * s + o.x, this.y = (n - o.x) * s + (i - o.y) * r + o.y
}, goog.math.Coordinate.prototype.rotateDegrees = function(e, t) {
    this.rotateRadians(goog.math.toRadians(e), t)
}, goog.math.Size = function(e, t) {
    this.width = e, this.height = t
}, goog.math.Size.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.width == t.width && e.height == t.height : !1
}, goog.math.Size.prototype.clone = function() {
    return new goog.math.Size(this.width, this.height)
}, goog.DEBUG && (goog.math.Size.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
}), goog.math.Size.prototype.getLongest = function() {
    return Math.max(this.width, this.height)
}, goog.math.Size.prototype.getShortest = function() {
    return Math.min(this.width, this.height)
}, goog.math.Size.prototype.area = function() {
    return this.width * this.height
}, goog.math.Size.prototype.perimeter = function() {
    return 2 * (this.width + this.height)
}, goog.math.Size.prototype.aspectRatio = function() {
    return this.width / this.height
}, goog.math.Size.prototype.isEmpty = function() {
    return !this.area()
}, goog.math.Size.prototype.ceil = function() {
    return this.width = Math.ceil(this.width), this.height = Math.ceil(this.height), this
}, goog.math.Size.prototype.fitsInside = function(e) {
    return this.width <= e.width && this.height <= e.height
}, goog.math.Size.prototype.floor = function() {
    return this.width = Math.floor(this.width), this.height = Math.floor(this.height), this
}, goog.math.Size.prototype.round = function() {
    return this.width = Math.round(this.width), this.height = Math.round(this.height), this
}, goog.math.Size.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.width *= e, this.height *= o, this
}, goog.math.Size.prototype.scaleToCover = function(e) {
    return e = this.aspectRatio() <= e.aspectRatio() ? e.width / this.width : e.height / this.height, this.scale(e)
}, goog.math.Size.prototype.scaleToFit = function(e) {
    return e = this.aspectRatio() > e.aspectRatio() ? e.width / this.width : e.height / this.height, this.scale(e)
}, goog.dom.ASSUME_QUIRKS_MODE = !1, goog.dom.ASSUME_STANDARDS_MODE = !1, goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE, goog.dom.getDomHelper = function(e) {
    return e ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(e)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
}, goog.dom.getDocument = function() {
    return document
}, goog.dom.getElement = function(e) {
    return goog.dom.getElementHelper_(document, e)
}, goog.dom.getElementHelper_ = function(e, t) {
    return goog.isString(t) ? e.getElementById(t) : t
}, goog.dom.getRequiredElement = function(e) {
    return goog.dom.getRequiredElementHelper_(document, e)
}, goog.dom.getRequiredElementHelper_ = function(e, t) {
    goog.asserts.assertString(t);
    var o = goog.dom.getElementHelper_(e, t);
    return o = goog.asserts.assertElement(o, "No element found with id: " + t)
}, goog.dom.$ = goog.dom.getElement, goog.dom.getElementsByTagNameAndClass = function(e, t, o) {
    return goog.dom.getElementsByTagNameAndClass_(document, e, t, o)
}, goog.dom.getElementsByClass = function(e, t) {
    var o = t || document;
    return goog.dom.canUseQuerySelector_(o) ? o.querySelectorAll("." + e) : goog.dom.getElementsByTagNameAndClass_(document, "*", e, t)
}, goog.dom.getElementByClass = function(e, t) {
    var o = t || document,
        n = null;
    return (n = o.getElementsByClassName ? o.getElementsByClassName(e)[0] : goog.dom.canUseQuerySelector_(o) ? o.querySelector("." + e) : goog.dom.getElementsByTagNameAndClass_(document, "*", e, t)[0]) || null
}, goog.dom.getRequiredElementByClass = function(e, t) {
    var o = goog.dom.getElementByClass(e, t);
    return goog.asserts.assert(o, "No element found with className: " + e)
}, goog.dom.canUseQuerySelector_ = function(e) {
    return !(!e.querySelectorAll || !e.querySelector)
}, goog.dom.getElementsByTagNameAndClass_ = function(e, t, o, n) {
    if (e = n || e, t = t && "*" != t ? t.toUpperCase() : "", goog.dom.canUseQuerySelector_(e) && (t || o)) return e.querySelectorAll(t + (o ? "." + o : ""));
    if (o && e.getElementsByClassName) {
        if (e = e.getElementsByClassName(o), t) {
            n = {};
            for (var i, r = 0, s = 0; i = e[s]; s++) t == i.nodeName && (n[r++] = i);
            return n.length = r, n
        }
        return e
    }
    if (e = e.getElementsByTagName(t || "*"), o) {
        for (n = {}, s = r = 0; i = e[s]; s++) t = i.className, "function" == typeof t.split && goog.array.contains(t.split(/\s+/), o) && (n[r++] = i);
        return n.length = r, n
    }
    return e
}, goog.dom.$$ = goog.dom.getElementsByTagNameAndClass, goog.dom.setProperties = function(e, t) {
    goog.object.forEach(t, function(t, o) {
        "style" == o ? e.style.cssText = t : "class" == o ? e.className = t : "for" == o ? e.htmlFor = t : o in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? e.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[o], t) : goog.string.startsWith(o, "aria-") || goog.string.startsWith(o, "data-") ? e.setAttribute(o, t) : e[o] = t
    })
}, goog.dom.DIRECT_ATTRIBUTE_MAP_ = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}, goog.dom.getViewportSize = function(e) {
    return goog.dom.getViewportSize_(e || window)
}, goog.dom.getViewportSize_ = function(e) {
    return e = e.document, e = goog.dom.isCss1CompatMode_(e) ? e.documentElement : e.body, new goog.math.Size(e.clientWidth, e.clientHeight)
}, goog.dom.getDocumentHeight = function() {
    return goog.dom.getDocumentHeight_(window)
}, goog.dom.getDocumentHeight_ = function(e) {
    var t = e.document,
        o = 0;
    if (t) {
        var o = t.body,
            n = t.documentElement;
        if (!n || !o) return 0;
        if (e = goog.dom.getViewportSize_(e).height, goog.dom.isCss1CompatMode_(t) && n.scrollHeight) o = n.scrollHeight != e ? n.scrollHeight : n.offsetHeight;
        else {
            var t = n.scrollHeight,
                i = n.offsetHeight;
            n.clientHeight != i && (t = o.scrollHeight, i = o.offsetHeight), o = t > e ? t > i ? t : i : i > t ? t : i
        }
    }
    return o
}, goog.dom.getPageScroll = function(e) {
    return goog.dom.getDomHelper((e || goog.global || window).document).getDocumentScroll()
}, goog.dom.getDocumentScroll = function() {
    return goog.dom.getDocumentScroll_(document)
}, goog.dom.getDocumentScroll_ = function(e) {
    var t = goog.dom.getDocumentScrollElement_(e);
    return e = goog.dom.getWindow_(e), goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && e.pageYOffset != t.scrollTop ? new goog.math.Coordinate(t.scrollLeft, t.scrollTop) : new goog.math.Coordinate(e.pageXOffset || t.scrollLeft, e.pageYOffset || t.scrollTop)
}, goog.dom.getDocumentScrollElement = function() {
    return goog.dom.getDocumentScrollElement_(document)
}, goog.dom.getDocumentScrollElement_ = function(e) {
    return !goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(e) ? e.documentElement : e.body || e.documentElement
}, goog.dom.getWindow = function(e) {
    return e ? goog.dom.getWindow_(e) : window
}, goog.dom.getWindow_ = function(e) {
    return e.parentWindow || e.defaultView
}, goog.dom.createDom = function() {
    return goog.dom.createDom_(document, arguments)
}, goog.dom.createDom_ = function(e, t) {
    var o = t[0],
        n = t[1];
    if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && n && (n.name || n.type)) {
        if (o = ["<", o], n.name && o.push(' name="', goog.string.htmlEscape(n.name), '"'), n.type) {
            o.push(' type="', goog.string.htmlEscape(n.type), '"');
            var i = {};
            goog.object.extend(i, n), delete i.type, n = i
        }
        o.push(">"), o = o.join("")
    }
    return o = e.createElement(o), n && (goog.isString(n) ? o.className = n : goog.isArray(n) ? o.className = n.join(" ") : goog.dom.setProperties(o, n)), 2 < t.length && goog.dom.append_(e, o, t, 2), o
}, goog.dom.append_ = function(e, t, o, n) {
    function i(o) {
        o && t.appendChild(goog.isString(o) ? e.createTextNode(o) : o)
    }
    for (; n < o.length; n++) {
        var r = o[n];
        goog.isArrayLike(r) && !goog.dom.isNodeLike(r) ? goog.array.forEach(goog.dom.isNodeList(r) ? goog.array.toArray(r) : r, i) : i(r)
    }
}, goog.dom.$dom = goog.dom.createDom, goog.dom.createElement = function(e) {
    return document.createElement(e)
}, goog.dom.createTextNode = function(e) {
    return document.createTextNode(String(e))
}, goog.dom.createTable = function(e, t, o) {
    return goog.dom.createTable_(document, e, t, !!o)
}, goog.dom.createTable_ = function(e, t, o, n) {
    for (var i = e.createElement(goog.dom.TagName.TABLE), r = i.appendChild(e.createElement(goog.dom.TagName.TBODY)), s = 0; t > s; s++) {
        for (var l = e.createElement(goog.dom.TagName.TR), a = 0; o > a; a++) {
            var c = e.createElement(goog.dom.TagName.TD);
            n && goog.dom.setTextContent(c, goog.string.Unicode.NBSP), l.appendChild(c)
        }
        r.appendChild(l)
    }
    return i
}, goog.dom.safeHtmlToNode = function(e) {
    return goog.dom.safeHtmlToNode_(document, e)
}, goog.dom.safeHtmlToNode_ = function(e, t) {
    var o = e.createElement("div");
    return goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (goog.dom.safe.setInnerHtml(o, goog.html.SafeHtml.concat(goog.html.SafeHtml.create("br"), t)), o.removeChild(o.firstChild)) : goog.dom.safe.setInnerHtml(o, t), goog.dom.childrenToNode_(e, o)
}, goog.dom.htmlToDocumentFragment = function(e) {
    return goog.dom.htmlToDocumentFragment_(document, e)
}, goog.dom.htmlToDocumentFragment_ = function(e, t) {
    var o = e.createElement("div");
    return goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (o.innerHTML = "<br>" + t, o.removeChild(o.firstChild)) : o.innerHTML = t, goog.dom.childrenToNode_(e, o)
}, goog.dom.childrenToNode_ = function(e, t) {
    if (1 == t.childNodes.length) return t.removeChild(t.firstChild);
    for (var o = e.createDocumentFragment(); t.firstChild;) o.appendChild(t.firstChild);
    return o
}, goog.dom.isCss1CompatMode = function() {
    return goog.dom.isCss1CompatMode_(document)
}, goog.dom.isCss1CompatMode_ = function(e) {
    return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == e.compatMode
}, goog.dom.canHaveChildren = function(e) {
    if (e.nodeType != goog.dom.NodeType.ELEMENT) return !1;
    switch (e.tagName) {
        case goog.dom.TagName.APPLET:
        case goog.dom.TagName.AREA:
        case goog.dom.TagName.BASE:
        case goog.dom.TagName.BR:
        case goog.dom.TagName.COL:
        case goog.dom.TagName.COMMAND:
        case goog.dom.TagName.EMBED:
        case goog.dom.TagName.FRAME:
        case goog.dom.TagName.HR:
        case goog.dom.TagName.IMG:
        case goog.dom.TagName.INPUT:
        case goog.dom.TagName.IFRAME:
        case goog.dom.TagName.ISINDEX:
        case goog.dom.TagName.KEYGEN:
        case goog.dom.TagName.LINK:
        case goog.dom.TagName.NOFRAMES:
        case goog.dom.TagName.NOSCRIPT:
        case goog.dom.TagName.META:
        case goog.dom.TagName.OBJECT:
        case goog.dom.TagName.PARAM:
        case goog.dom.TagName.SCRIPT:
        case goog.dom.TagName.SOURCE:
        case goog.dom.TagName.STYLE:
        case goog.dom.TagName.TRACK:
        case goog.dom.TagName.WBR:
            return !1
    }
    return !0
}, goog.dom.appendChild = function(e, t) {
    e.appendChild(t)
}, goog.dom.append = function(e) {
    goog.dom.append_(goog.dom.getOwnerDocument(e), e, arguments, 1)
}, goog.dom.removeChildren = function(e) {
    for (var t; t = e.firstChild;) e.removeChild(t)
}, goog.dom.insertSiblingBefore = function(e, t) {
    t.parentNode && t.parentNode.insertBefore(e, t)
}, goog.dom.insertSiblingAfter = function(e, t) {
    t.parentNode && t.parentNode.insertBefore(e, t.nextSibling)
}, goog.dom.insertChildAt = function(e, t, o) {
    e.insertBefore(t, e.childNodes[o] || null)
}, goog.dom.removeNode = function(e) {
    return e && e.parentNode ? e.parentNode.removeChild(e) : null
}, goog.dom.replaceNode = function(e, t) {
    var o = t.parentNode;
    o && o.replaceChild(e, t)
}, goog.dom.flattenElement = function(e) {
    var t, o = e.parentNode;
    if (o && o.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
        if (e.removeNode) return e.removeNode(!1);
        for (; t = e.firstChild;) o.insertBefore(t, e);
        return goog.dom.removeNode(e)
    }
}, goog.dom.getChildren = function(e) {
    return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != e.children ? e.children : goog.array.filter(e.childNodes, function(e) {
        return e.nodeType == goog.dom.NodeType.ELEMENT
    })
}, goog.dom.getFirstElementChild = function(e) {
    return void 0 != e.firstElementChild ? e.firstElementChild : goog.dom.getNextElementNode_(e.firstChild, !0)
}, goog.dom.getLastElementChild = function(e) {
    return void 0 != e.lastElementChild ? e.lastElementChild : goog.dom.getNextElementNode_(e.lastChild, !1)
}, goog.dom.getNextElementSibling = function(e) {
    return void 0 != e.nextElementSibling ? e.nextElementSibling : goog.dom.getNextElementNode_(e.nextSibling, !0)
}, goog.dom.getPreviousElementSibling = function(e) {
    return void 0 != e.previousElementSibling ? e.previousElementSibling : goog.dom.getNextElementNode_(e.previousSibling, !1)
}, goog.dom.getNextElementNode_ = function(e, t) {
    for (; e && e.nodeType != goog.dom.NodeType.ELEMENT;) e = t ? e.nextSibling : e.previousSibling;
    return e
}, goog.dom.getNextNode = function(e) {
    if (!e) return null;
    if (e.firstChild) return e.firstChild;
    for (; e && !e.nextSibling;) e = e.parentNode;
    return e ? e.nextSibling : null
}, goog.dom.getPreviousNode = function(e) {
    if (!e) return null;
    if (!e.previousSibling) return e.parentNode;
    for (e = e.previousSibling; e && e.lastChild;) e = e.lastChild;
    return e
}, goog.dom.isNodeLike = function(e) {
    return goog.isObject(e) && 0 < e.nodeType
}, goog.dom.isElement = function(e) {
    return goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT
}, goog.dom.isWindow = function(e) {
    return goog.isObject(e) && e.window == e
}, goog.dom.getParentElement = function(e) {
    var t;
    return !goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY || goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10") && goog.global.SVGElement && e instanceof goog.global.SVGElement || !(t = e.parentElement) ? (t = e.parentNode, goog.dom.isElement(t) ? t : null) : t
}, goog.dom.contains = function(e, t) {
    if (e.contains && t.nodeType == goog.dom.NodeType.ELEMENT) return e == t || e.contains(t);
    if ("undefined" != typeof e.compareDocumentPosition) return e == t || Boolean(16 & e.compareDocumentPosition(t));
    for (; t && e != t;) t = t.parentNode;
    return t == e
}, goog.dom.compareNodeOrder = function(e, t) {
    if (e == t) return 0;
    if (e.compareDocumentPosition) return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
        if (e.nodeType == goog.dom.NodeType.DOCUMENT) return -1;
        if (t.nodeType == goog.dom.NodeType.DOCUMENT) return 1
    }
    if ("sourceIndex" in e || e.parentNode && "sourceIndex" in e.parentNode) {
        var o = e.nodeType == goog.dom.NodeType.ELEMENT,
            n = t.nodeType == goog.dom.NodeType.ELEMENT;
        if (o && n) return e.sourceIndex - t.sourceIndex;
        var i = e.parentNode,
            r = t.parentNode;
        return i == r ? goog.dom.compareSiblingOrder_(e, t) : !o && goog.dom.contains(i, t) ? -1 * goog.dom.compareParentsDescendantNodeIe_(e, t) : !n && goog.dom.contains(r, e) ? goog.dom.compareParentsDescendantNodeIe_(t, e) : (o ? e.sourceIndex : i.sourceIndex) - (n ? t.sourceIndex : r.sourceIndex)
    }
    return n = goog.dom.getOwnerDocument(e), o = n.createRange(), o.selectNode(e), o.collapse(!0), n = n.createRange(), n.selectNode(t), n.collapse(!0), o.compareBoundaryPoints(goog.global.Range.START_TO_END, n)
}, goog.dom.compareParentsDescendantNodeIe_ = function(e, t) {
    var o = e.parentNode;
    if (o == t) return -1;
    for (var n = t; n.parentNode != o;) n = n.parentNode;
    return goog.dom.compareSiblingOrder_(n, e)
}, goog.dom.compareSiblingOrder_ = function(e, t) {
    for (var o = t; o = o.previousSibling;)
        if (o == e) return -1;
    return 1
}, goog.dom.findCommonAncestor = function() {
    var e, t = arguments.length;
    if (!t) return null;
    if (1 == t) return arguments[0];
    var o = [],
        n = 1 / 0;
    for (e = 0; t > e; e++) {
        for (var i = [], r = arguments[e]; r;) i.unshift(r), r = r.parentNode;
        o.push(i), n = Math.min(n, i.length)
    }
    for (i = null, e = 0; n > e; e++) {
        for (var r = o[0][e], s = 1; t > s; s++)
            if (r != o[s][e]) return i;
        i = r
    }
    return i
}, goog.dom.getOwnerDocument = function(e) {
    return goog.asserts.assert(e, "Node cannot be null or undefined."), e.nodeType == goog.dom.NodeType.DOCUMENT ? e : e.ownerDocument || e.document
}, goog.dom.getFrameContentDocument = function(e) {
    return e.contentDocument || e.contentWindow.document
}, goog.dom.getFrameContentWindow = function(e) {
    return e.contentWindow || goog.dom.getWindow(goog.dom.getFrameContentDocument(e))
}, goog.dom.setTextContent = function(e, t) {
    if (goog.asserts.assert(null != e, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in e) e.textContent = t;
    else if (e.nodeType == goog.dom.NodeType.TEXT) e.data = t;
    else if (e.firstChild && e.firstChild.nodeType == goog.dom.NodeType.TEXT) {
        for (; e.lastChild != e.firstChild;) e.removeChild(e.lastChild);
        e.firstChild.data = t
    } else {
        goog.dom.removeChildren(e);
        var o = goog.dom.getOwnerDocument(e);
        e.appendChild(o.createTextNode(String(t)))
    }
}, goog.dom.getOuterHtml = function(e) {
    if ("outerHTML" in e) return e.outerHTML;
    var t = goog.dom.getOwnerDocument(e).createElement("div");
    return t.appendChild(e.cloneNode(!0)), t.innerHTML
}, goog.dom.findNode = function(e, t) {
    var o = [];
    return goog.dom.findNodes_(e, t, o, !0) ? o[0] : void 0
}, goog.dom.findNodes = function(e, t) {
    var o = [];
    return goog.dom.findNodes_(e, t, o, !1), o
}, goog.dom.findNodes_ = function(e, t, o, n) {
    if (null != e)
        for (e = e.firstChild; e;) {
            if (t(e) && (o.push(e), n) || goog.dom.findNodes_(e, t, o, n)) return !0;
            e = e.nextSibling
        }
    return !1
}, goog.dom.TAGS_TO_IGNORE_ = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}, goog.dom.PREDEFINED_TAG_VALUES_ = {
    IMG: " ",
    BR: "\n"
}, goog.dom.isFocusableTabIndex = function(e) {
    return goog.dom.hasSpecifiedTabIndex_(e) && goog.dom.isTabIndexFocusable_(e)
}, goog.dom.setFocusableTabIndex = function(e, t) {
    t ? e.tabIndex = 0 : (e.tabIndex = -1, e.removeAttribute("tabIndex"))
}, goog.dom.isFocusable = function(e) {
    var t;
    return (t = goog.dom.nativelySupportsFocus_(e) ? !e.disabled && (!goog.dom.hasSpecifiedTabIndex_(e) || goog.dom.isTabIndexFocusable_(e)) : goog.dom.isFocusableTabIndex(e)) && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(e) : t
}, goog.dom.hasSpecifiedTabIndex_ = function(e) {
    return e = e.getAttributeNode("tabindex"), goog.isDefAndNotNull(e) && e.specified
}, goog.dom.isTabIndexFocusable_ = function(e) {
    return e = e.tabIndex, goog.isNumber(e) && e >= 0 && 32768 > e
}, goog.dom.nativelySupportsFocus_ = function(e) {
    return e.tagName == goog.dom.TagName.A || e.tagName == goog.dom.TagName.INPUT || e.tagName == goog.dom.TagName.TEXTAREA || e.tagName == goog.dom.TagName.SELECT || e.tagName == goog.dom.TagName.BUTTON
}, goog.dom.hasNonZeroBoundingRect_ = function(e) {
    return e = goog.isFunction(e.getBoundingClientRect) ? e.getBoundingClientRect() : {
        height: e.offsetHeight,
        width: e.offsetWidth
    }, goog.isDefAndNotNull(e) && 0 < e.height && 0 < e.width
}, goog.dom.getTextContent = function(e) {
    if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in e) e = goog.string.canonicalizeNewlines(e.innerText);
    else {
        var t = [];
        goog.dom.getTextContent_(e, t, !0), e = t.join("")
    }
    return e = e.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), e = e.replace(/\u200B/g, ""), goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || (e = e.replace(/ +/g, " ")), " " != e && (e = e.replace(/^\s*/, "")), e
}, goog.dom.getRawTextContent = function(e) {
    var t = [];
    return goog.dom.getTextContent_(e, t, !1), t.join("")
}, goog.dom.getTextContent_ = function(e, t, o) {
    if (!(e.nodeName in goog.dom.TAGS_TO_IGNORE_))
        if (e.nodeType == goog.dom.NodeType.TEXT) o ? t.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : t.push(e.nodeValue);
        else if (e.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) t.push(goog.dom.PREDEFINED_TAG_VALUES_[e.nodeName]);
    else
        for (e = e.firstChild; e;) goog.dom.getTextContent_(e, t, o), e = e.nextSibling
}, goog.dom.getNodeTextLength = function(e) {
    return goog.dom.getTextContent(e).length
}, goog.dom.getNodeTextOffset = function(e, t) {
    for (var o = t || goog.dom.getOwnerDocument(e).body, n = []; e && e != o;) {
        for (var i = e; i = i.previousSibling;) n.unshift(goog.dom.getTextContent(i));
        e = e.parentNode
    }
    return goog.string.trimLeft(n.join("")).replace(/ +/g, " ").length
}, goog.dom.getNodeAtOffset = function(e, t, o) {
    e = [e];
    for (var n = 0, i = null; 0 < e.length && t > n;)
        if (i = e.pop(), !(i.nodeName in goog.dom.TAGS_TO_IGNORE_))
            if (i.nodeType == goog.dom.NodeType.TEXT) var r = i.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                n = n + r.length;
            else if (i.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) n += goog.dom.PREDEFINED_TAG_VALUES_[i.nodeName].length;
    else
        for (r = i.childNodes.length - 1; r >= 0; r--) e.push(i.childNodes[r]);
    return goog.isObject(o) && (o.remainder = i ? i.nodeValue.length + t - n - 1 : 0, o.node = i), i
}, goog.dom.isNodeList = function(e) {
    if (e && "number" == typeof e.length) {
        if (goog.isObject(e)) return "function" == typeof e.item || "string" == typeof e.item;
        if (goog.isFunction(e)) return "function" == typeof e.item
    }
    return !1
}, goog.dom.getAncestorByTagNameAndClass = function(e, t, o, n) {
    if (!t && !o) return null;
    var i = t ? t.toUpperCase() : null;
    return goog.dom.getAncestor(e, function(e) {
        return (!i || e.nodeName == i) && (!o || goog.isString(e.className) && goog.array.contains(e.className.split(/\s+/), o))
    }, !0, n)
}, goog.dom.getAncestorByClass = function(e, t, o) {
    return goog.dom.getAncestorByTagNameAndClass(e, null, t, o)
}, goog.dom.getAncestor = function(e, t, o, n) {
    o || (e = e.parentNode), o = null == n;
    for (var i = 0; e && (o || n >= i);) {
        if (t(e)) return e;
        e = e.parentNode, i++
    }
    return null
}, goog.dom.getActiveElement = function(e) {
    try {
        return e && e.activeElement
    } catch (t) {}
    return null
}, goog.dom.getPixelRatio = function() {
    var e = goog.dom.getWindow(),
        t = goog.userAgent.GECKO && goog.userAgent.MOBILE;
    return goog.isDef(e.devicePixelRatio) && !t ? e.devicePixelRatio : e.matchMedia ? goog.dom.matchesPixelRatio_(.75) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(3) || 1 : 1
}, goog.dom.matchesPixelRatio_ = function(e) {
    return goog.dom.getWindow().matchMedia("(-webkit-min-device-pixel-ratio: " + e + "),(min--moz-device-pixel-ratio: " + e + "),(min-resolution: " + e + "dppx)").matches ? e : 0
}, goog.dom.DomHelper = function(e) {
    this.document_ = e || goog.global.document || document
}, goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper, goog.dom.DomHelper.prototype.setDocument = function(e) {
    this.document_ = e
}, goog.dom.DomHelper.prototype.getDocument = function() {
    return this.document_
}, goog.dom.DomHelper.prototype.getElement = function(e) {
    return goog.dom.getElementHelper_(this.document_, e)
}, goog.dom.DomHelper.prototype.getRequiredElement = function(e) {
    return goog.dom.getRequiredElementHelper_(this.document_, e)
}, goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement, goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(e, t, o) {
    return goog.dom.getElementsByTagNameAndClass_(this.document_, e, t, o)
}, goog.dom.DomHelper.prototype.getElementsByClass = function(e, t) {
    return goog.dom.getElementsByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.getElementByClass = function(e, t) {
    return goog.dom.getElementByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.getRequiredElementByClass = function(e, t) {
    return goog.dom.getRequiredElementByClass(e, t || this.document_)
}, goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass, goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties, goog.dom.DomHelper.prototype.getViewportSize = function(e) {
    return goog.dom.getViewportSize(e || this.getWindow())
}, goog.dom.DomHelper.prototype.getDocumentHeight = function() {
    return goog.dom.getDocumentHeight_(this.getWindow())
}, goog.dom.DomHelper.prototype.createDom = function() {
    return goog.dom.createDom_(this.document_, arguments)
}, goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom, goog.dom.DomHelper.prototype.createElement = function(e) {
    return this.document_.createElement(e)
}, goog.dom.DomHelper.prototype.createTextNode = function(e) {
    return this.document_.createTextNode(String(e))
}, goog.dom.DomHelper.prototype.createTable = function(e, t, o) {
    return goog.dom.createTable_(this.document_, e, t, !!o)
}, goog.dom.DomHelper.prototype.safeHtmlToNode = function(e) {
    return goog.dom.safeHtmlToNode_(this.document_, e)
}, goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(e) {
    return goog.dom.htmlToDocumentFragment_(this.document_, e)
}, goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
    return goog.dom.isCss1CompatMode_(this.document_)
}, goog.dom.DomHelper.prototype.getWindow = function() {
    return goog.dom.getWindow_(this.document_)
}, goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
    return goog.dom.getDocumentScrollElement_(this.document_)
}, goog.dom.DomHelper.prototype.getDocumentScroll = function() {
    return goog.dom.getDocumentScroll_(this.document_)
}, goog.dom.DomHelper.prototype.getActiveElement = function(e) {
    return goog.dom.getActiveElement(e || this.document_)
}, goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild, goog.dom.DomHelper.prototype.append = goog.dom.append, goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren, goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren, goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore, goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter, goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt, goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode, goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode, goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement, goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren, goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild, goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild, goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling, goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling, goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode, goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode, goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike, goog.dom.DomHelper.prototype.isElement = goog.dom.isElement, goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow, goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement, goog.dom.DomHelper.prototype.contains = goog.dom.contains, goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder, goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor, goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument, goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument, goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow, goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent, goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml, goog.dom.DomHelper.prototype.findNode = goog.dom.findNode, goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes, goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex, goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex, goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable, goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent, goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength, goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset, goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset, goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList, goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass, goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass, goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor, goog.dom.vendor = {}, goog.dom.vendor.getVendorJsPrefix = function() {
    return goog.userAgent.WEBKIT ? "Webkit" : goog.userAgent.GECKO ? "Moz" : goog.userAgent.IE ? "ms" : goog.userAgent.OPERA ? "O" : null
}, goog.dom.vendor.getVendorPrefix = function() {
    return goog.userAgent.WEBKIT ? "-webkit" : goog.userAgent.GECKO ? "-moz" : goog.userAgent.IE ? "-ms" : goog.userAgent.OPERA ? "-o" : null
}, goog.dom.vendor.getPrefixedPropertyName = function(e, t) {
    if (t && e in t) return e;
    var o = goog.dom.vendor.getVendorJsPrefix();
    return o ? (o = o.toLowerCase(), o += goog.string.toTitleCase(e), !goog.isDef(t) || o in t ? o : null) : null
}, goog.dom.vendor.getPrefixedEventType = function(e) {
    return ((goog.dom.vendor.getVendorJsPrefix() || "") + e).toLowerCase()
}, goog.math.Box = function(e, t, o, n) {
    this.top = e, this.right = t, this.bottom = o, this.left = n
}, goog.math.Box.boundingBox = function() {
    for (var e = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        e.top = Math.min(e.top, o.y), e.right = Math.max(e.right, o.x), e.bottom = Math.max(e.bottom, o.y), e.left = Math.min(e.left, o.x)
    }
    return e
}, goog.math.Box.prototype.getWidth = function() {
    return this.right - this.left
}, goog.math.Box.prototype.getHeight = function() {
    return this.bottom - this.top
}, goog.math.Box.prototype.clone = function() {
    return new goog.math.Box(this.top, this.right, this.bottom, this.left)
}, goog.DEBUG && (goog.math.Box.prototype.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
}), goog.math.Box.prototype.contains = function(e) {
    return goog.math.Box.contains(this, e)
}, goog.math.Box.prototype.expand = function(e, t, o, n) {
    return goog.isObject(e) ? (this.top -= e.top, this.right += e.right, this.bottom += e.bottom, this.left -= e.left) : (this.top -= e, this.right += t, this.bottom += o, this.left -= n), this
}, goog.math.Box.prototype.expandToInclude = function(e) {
    this.left = Math.min(this.left, e.left), this.top = Math.min(this.top, e.top), this.right = Math.max(this.right, e.right), this.bottom = Math.max(this.bottom, e.bottom)
}, goog.math.Box.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.top == t.top && e.right == t.right && e.bottom == t.bottom && e.left == t.left : !1
}, goog.math.Box.contains = function(e, t) {
    return e && t ? t instanceof goog.math.Box ? t.left >= e.left && t.right <= e.right && t.top >= e.top && t.bottom <= e.bottom : t.x >= e.left && t.x <= e.right && t.y >= e.top && t.y <= e.bottom : !1
}, goog.math.Box.relativePositionX = function(e, t) {
    return t.x < e.left ? t.x - e.left : t.x > e.right ? t.x - e.right : 0
}, goog.math.Box.relativePositionY = function(e, t) {
    return t.y < e.top ? t.y - e.top : t.y > e.bottom ? t.y - e.bottom : 0
}, goog.math.Box.distance = function(e, t) {
    var o = goog.math.Box.relativePositionX(e, t),
        n = goog.math.Box.relativePositionY(e, t);
    return Math.sqrt(o * o + n * n)
}, goog.math.Box.intersects = function(e, t) {
    return e.left <= t.right && t.left <= e.right && e.top <= t.bottom && t.top <= e.bottom
}, goog.math.Box.intersectsWithPadding = function(e, t, o) {
    return e.left <= t.right + o && t.left <= e.right + o && e.top <= t.bottom + o && t.top <= e.bottom + o
}, goog.math.Box.prototype.ceil = function() {
    return this.top = Math.ceil(this.top), this.right = Math.ceil(this.right), this.bottom = Math.ceil(this.bottom), this.left = Math.ceil(this.left), this
}, goog.math.Box.prototype.floor = function() {
    return this.top = Math.floor(this.top), this.right = Math.floor(this.right), this.bottom = Math.floor(this.bottom), this.left = Math.floor(this.left), this
}, goog.math.Box.prototype.round = function() {
    return this.top = Math.round(this.top), this.right = Math.round(this.right), this.bottom = Math.round(this.bottom), this.left = Math.round(this.left), this
}, goog.math.Box.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.left += e.x, this.right += e.x, this.top += e.y, this.bottom += e.y) : (this.left += e, this.right += e, goog.isNumber(t) && (this.top += t, this.bottom += t)), this
}, goog.math.Box.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.left *= e, this.right *= e, this.top *= o, this.bottom *= o, this
}, goog.math.Rect = function(e, t, o, n) {
    this.left = e, this.top = t, this.width = o, this.height = n
}, goog.math.Rect.prototype.clone = function() {
    return new goog.math.Rect(this.left, this.top, this.width, this.height)
}, goog.math.Rect.prototype.toBox = function() {
    return new goog.math.Box(this.top, this.left + this.width, this.top + this.height, this.left)
}, goog.math.Rect.createFromBox = function(e) {
    return new goog.math.Rect(e.left, e.top, e.right - e.left, e.bottom - e.top)
}, goog.DEBUG && (goog.math.Rect.prototype.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
}), goog.math.Rect.equals = function(e, t) {
    return e == t ? !0 : e && t ? e.left == t.left && e.width == t.width && e.top == t.top && e.height == t.height : !1
}, goog.math.Rect.prototype.intersection = function(e) {
    var t = Math.max(this.left, e.left),
        o = Math.min(this.left + this.width, e.left + e.width);
    if (o >= t) {
        var n = Math.max(this.top, e.top);
        if (e = Math.min(this.top + this.height, e.top + e.height), e >= n) return this.left = t, this.top = n, this.width = o - t, this.height = e - n, !0
    }
    return !1
}, goog.math.Rect.intersection = function(e, t) {
    var o = Math.max(e.left, t.left),
        n = Math.min(e.left + e.width, t.left + t.width);
    if (n >= o) {
        var i = Math.max(e.top, t.top),
            r = Math.min(e.top + e.height, t.top + t.height);
        if (r >= i) return new goog.math.Rect(o, i, n - o, r - i)
    }
    return null
}, goog.math.Rect.intersects = function(e, t) {
    return e.left <= t.left + t.width && t.left <= e.left + e.width && e.top <= t.top + t.height && t.top <= e.top + e.height
}, goog.math.Rect.prototype.intersects = function(e) {
    return goog.math.Rect.intersects(this, e)
}, goog.math.Rect.difference = function(e, t) {
    var o = goog.math.Rect.intersection(e, t);
    if (!o || !o.height || !o.width) return [e.clone()];
    var o = [],
        n = e.top,
        i = e.height,
        r = e.left + e.width,
        s = e.top + e.height,
        l = t.left + t.width,
        a = t.top + t.height;
    return t.top > e.top && (o.push(new goog.math.Rect(e.left, e.top, e.width, t.top - e.top)), n = t.top, i -= t.top - e.top), s > a && (o.push(new goog.math.Rect(e.left, a, e.width, s - a)), i = a - n), t.left > e.left && o.push(new goog.math.Rect(e.left, n, t.left - e.left, i)), r > l && o.push(new goog.math.Rect(l, n, r - l, i)), o
}, goog.math.Rect.prototype.difference = function(e) {
    return goog.math.Rect.difference(this, e)
}, goog.math.Rect.prototype.boundingRect = function(e) {
    var t = Math.max(this.left + this.width, e.left + e.width),
        o = Math.max(this.top + this.height, e.top + e.height);
    this.left = Math.min(this.left, e.left), this.top = Math.min(this.top, e.top), this.width = t - this.left, this.height = o - this.top
}, goog.math.Rect.boundingRect = function(e, t) {
    if (!e || !t) return null;
    var o = e.clone();
    return o.boundingRect(t), o
}, goog.math.Rect.prototype.contains = function(e) {
    return e instanceof goog.math.Rect ? this.left <= e.left && this.left + this.width >= e.left + e.width && this.top <= e.top && this.top + this.height >= e.top + e.height : e.x >= this.left && e.x <= this.left + this.width && e.y >= this.top && e.y <= this.top + this.height
}, goog.math.Rect.prototype.squaredDistance = function(e) {
    var t = e.x < this.left ? this.left - e.x : Math.max(e.x - (this.left + this.width), 0);
    return e = e.y < this.top ? this.top - e.y : Math.max(e.y - (this.top + this.height), 0), t * t + e * e
}, goog.math.Rect.prototype.distance = function(e) {
    return Math.sqrt(this.squaredDistance(e))
}, goog.math.Rect.prototype.getSize = function() {
    return new goog.math.Size(this.width, this.height)
}, goog.math.Rect.prototype.getTopLeft = function() {
    return new goog.math.Coordinate(this.left, this.top)
}, goog.math.Rect.prototype.getCenter = function() {
    return new goog.math.Coordinate(this.left + this.width / 2, this.top + this.height / 2)
}, goog.math.Rect.prototype.getBottomRight = function() {
    return new goog.math.Coordinate(this.left + this.width, this.top + this.height)
}, goog.math.Rect.prototype.ceil = function() {
    return this.left = Math.ceil(this.left), this.top = Math.ceil(this.top), this.width = Math.ceil(this.width), this.height = Math.ceil(this.height), this
}, goog.math.Rect.prototype.floor = function() {
    return this.left = Math.floor(this.left), this.top = Math.floor(this.top), this.width = Math.floor(this.width), this.height = Math.floor(this.height), this
}, goog.math.Rect.prototype.round = function() {
    return this.left = Math.round(this.left), this.top = Math.round(this.top), this.width = Math.round(this.width), this.height = Math.round(this.height), this
}, goog.math.Rect.prototype.translate = function(e, t) {
    return e instanceof goog.math.Coordinate ? (this.left += e.x, this.top += e.y) : (this.left += e, goog.isNumber(t) && (this.top += t)), this
}, goog.math.Rect.prototype.scale = function(e, t) {
    var o = goog.isNumber(t) ? t : e;
    return this.left *= e, this.width *= e, this.top *= o, this.height *= o, this
}, goog.style = {}, goog.style.setStyle = function(e, t, o) {
    if (goog.isString(t)) goog.style.setStyle_(e, o, t);
    else
        for (var n in t) goog.style.setStyle_(e, t[n], n)
}, goog.style.setStyle_ = function(e, t, o) {
    (o = goog.style.getVendorJsStyleName_(e, o)) && (e.style[o] = t)
}, goog.style.styleNameCache_ = {}, goog.style.getVendorJsStyleName_ = function(e, t) {
    var o = goog.style.styleNameCache_[t];
    if (!o) {
        var n = goog.string.toCamelCase(t),
            o = n;
        void 0 === e.style[n] && (n = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(n), void 0 !== e.style[n] && (o = n)), goog.style.styleNameCache_[t] = o
    }
    return o
}, goog.style.getVendorStyleName_ = function(e, t) {
    var o = goog.string.toCamelCase(t);
    return void 0 === e.style[o] && (o = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(o), void 0 !== e.style[o]) ? goog.dom.vendor.getVendorPrefix() + "-" + t : t
}, goog.style.getStyle = function(e, t) {
    var o = e.style[goog.string.toCamelCase(t)];
    return "undefined" != typeof o ? o : e.style[goog.style.getVendorJsStyleName_(e, t)] || ""
}, goog.style.getComputedStyle = function(e, t) {
    var o = goog.dom.getOwnerDocument(e);
    return o.defaultView && o.defaultView.getComputedStyle && (o = o.defaultView.getComputedStyle(e, null)) ? o[t] || o.getPropertyValue(t) || "" : ""
}, goog.style.getCascadedStyle = function(e, t) {
    return e.currentStyle ? e.currentStyle[t] : null
}, goog.style.getStyle_ = function(e, t) {
    return goog.style.getComputedStyle(e, t) || goog.style.getCascadedStyle(e, t) || e.style && e.style[t]
}, goog.style.getComputedBoxSizing = function(e) {
    return goog.style.getStyle_(e, "boxSizing") || goog.style.getStyle_(e, "MozBoxSizing") || goog.style.getStyle_(e, "WebkitBoxSizing") || null
}, goog.style.getComputedPosition = function(e) {
    return goog.style.getStyle_(e, "position")
}, goog.style.getBackgroundColor = function(e) {
    return goog.style.getStyle_(e, "backgroundColor")
}, goog.style.getComputedOverflowX = function(e) {
    return goog.style.getStyle_(e, "overflowX")
}, goog.style.getComputedOverflowY = function(e) {
    return goog.style.getStyle_(e, "overflowY")
}, goog.style.getComputedZIndex = function(e) {
    return goog.style.getStyle_(e, "zIndex")
}, goog.style.getComputedTextAlign = function(e) {
    return goog.style.getStyle_(e, "textAlign")
}, goog.style.getComputedCursor = function(e) {
    return goog.style.getStyle_(e, "cursor")
}, goog.style.getComputedTransform = function(e) {
    var t = goog.style.getVendorStyleName_(e, "transform");
    return goog.style.getStyle_(e, t) || goog.style.getStyle_(e, "transform")
}, goog.style.setPosition = function(e, t, o) {
    var n;
    t instanceof goog.math.Coordinate ? (n = t.x, t = t.y) : (n = t, t = o), e.style.left = goog.style.getPixelStyleValue_(n, !1), e.style.top = goog.style.getPixelStyleValue_(t, !1)
}, goog.style.getPosition = function(e) {
    return new goog.math.Coordinate(e.offsetLeft, e.offsetTop)
}, goog.style.getClientViewportElement = function(e) {
    return e = e ? goog.dom.getOwnerDocument(e) : goog.dom.getDocument(), !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9) || goog.dom.getDomHelper(e).isCss1CompatMode() ? e.documentElement : e.body
}, goog.style.getViewportPageOffset = function(e) {
    var t = e.body;
    return e = e.documentElement, new goog.math.Coordinate(t.scrollLeft || e.scrollLeft, t.scrollTop || e.scrollTop)
}, goog.style.getBoundingClientRect_ = function(e) {
    var t;
    try {
        t = e.getBoundingClientRect()
    } catch (o) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    return goog.userAgent.IE && e.ownerDocument.body && (e = e.ownerDocument, t.left -= e.documentElement.clientLeft + e.body.clientLeft, t.top -= e.documentElement.clientTop + e.body.clientTop), t
}, goog.style.getOffsetParent = function(e) {
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(8)) return e.offsetParent;
    var t = goog.dom.getOwnerDocument(e),
        o = goog.style.getStyle_(e, "position"),
        n = "fixed" == o || "absolute" == o;
    for (e = e.parentNode; e && e != t; e = e.parentNode)
        if (e.nodeType == goog.dom.NodeType.DOCUMENT_FRAGMENT && e.host && (e = e.host), o = goog.style.getStyle_(e, "position"), n = n && "static" == o && e != t.documentElement && e != t.body, !n && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight || "fixed" == o || "absolute" == o || "relative" == o)) return e;
    return null
}, goog.style.getVisibleRectForElement = function(e) {
    for (var t = new goog.math.Box(0, 1 / 0, 1 / 0, 0), o = goog.dom.getDomHelper(e), n = o.getDocument().body, i = o.getDocument().documentElement, r = o.getDocumentScrollElement(); e = goog.style.getOffsetParent(e);)
        if (!(goog.userAgent.IE && 0 == e.clientWidth || goog.userAgent.WEBKIT && 0 == e.clientHeight && e == n) && e != n && e != i && "visible" != goog.style.getStyle_(e, "overflow")) {
            var s = goog.style.getPageOffset(e),
                l = goog.style.getClientLeftTop(e);
            s.x += l.x, s.y += l.y, t.top = Math.max(t.top, s.y), t.right = Math.min(t.right, s.x + e.clientWidth), t.bottom = Math.min(t.bottom, s.y + e.clientHeight), t.left = Math.max(t.left, s.x)
        }
    return n = r.scrollLeft, r = r.scrollTop, t.left = Math.max(t.left, n), t.top = Math.max(t.top, r), o = o.getViewportSize(), t.right = Math.min(t.right, n + o.width), t.bottom = Math.min(t.bottom, r + o.height), 0 <= t.top && 0 <= t.left && t.bottom > t.top && t.right > t.left ? t : null
}, goog.style.getContainerOffsetToScrollInto = function(e, t, o) {
    var n = goog.style.getPageOffset(e),
        i = goog.style.getPageOffset(t),
        r = goog.style.getBorderBox(t),
        s = n.x - i.x - r.left,
        n = n.y - i.y - r.top,
        l = t.clientWidth - e.offsetWidth;
    e = t.clientHeight - e.offsetHeight;
    var a = t.scrollLeft,
        c = t.scrollTop;
    return (t == goog.dom.getDocument().body || t == goog.dom.getDocument().documentElement) && (a = i.x + r.left, c = i.y + r.top, goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(10) && (a += r.left, c += r.top)), o ? (a += s - l / 2, c += n - e / 2) : (a += Math.min(s, Math.max(s - l, 0)), c += Math.min(n, Math.max(n - e, 0))), new goog.math.Coordinate(a, c)
}, goog.style.scrollIntoContainerView = function(e, t, o) {
    e = goog.style.getContainerOffsetToScrollInto(e, t, o), t.scrollLeft = e.x, t.scrollTop = e.y
}, goog.style.getClientLeftTop = function(e) {
    return new goog.math.Coordinate(e.clientLeft, e.clientTop)
}, goog.style.getPageOffset = function(e) {
    var t = goog.dom.getOwnerDocument(e);
    goog.asserts.assertObject(e, "Parameter is required");
    var o = new goog.math.Coordinate(0, 0),
        n = goog.style.getClientViewportElement(t);
    return e == n ? o : (e = goog.style.getBoundingClientRect_(e), t = goog.dom.getDomHelper(t).getDocumentScroll(), o.x = e.left + t.x, o.y = e.top + t.y, o)
}, goog.style.getPageOffsetLeft = function(e) {
    return goog.style.getPageOffset(e).x
}, goog.style.getPageOffsetTop = function(e) {
    return goog.style.getPageOffset(e).y
}, goog.style.getFramedPageOffset = function(e, t) {
    var o = new goog.math.Coordinate(0, 0),
        n = goog.dom.getWindow(goog.dom.getOwnerDocument(e)),
        i = e;
    do {
        var r = n == t ? goog.style.getPageOffset(i) : goog.style.getClientPositionForElement_(goog.asserts.assert(i));
        o.x += r.x, o.y += r.y
    } while (n && n != t && n != n.parent && (i = n.frameElement) && (n = n.parent));
    return o
}, goog.style.translateRectForAnotherFrame = function(e, t, o) {
    if (t.getDocument() != o.getDocument()) {
        var n = t.getDocument().body;
        o = goog.style.getFramedPageOffset(n, o.getWindow()), o = goog.math.Coordinate.difference(o, goog.style.getPageOffset(n)), !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9) || t.isCss1CompatMode() || (o = goog.math.Coordinate.difference(o, t.getDocumentScroll())), e.left += o.x, e.top += o.y
    }
}, goog.style.getRelativePosition = function(e, t) {
    var o = goog.style.getClientPosition(e),
        n = goog.style.getClientPosition(t);
    return new goog.math.Coordinate(o.x - n.x, o.y - n.y)
}, goog.style.getClientPositionForElement_ = function(e) {
    return e = goog.style.getBoundingClientRect_(e), new goog.math.Coordinate(e.left, e.top)
}, goog.style.getClientPosition = function(e) {
    if (goog.asserts.assert(e), e.nodeType == goog.dom.NodeType.ELEMENT) return goog.style.getClientPositionForElement_(e);
    var t = goog.isFunction(e.getBrowserEvent),
        o = e;
    return e.targetTouches && e.targetTouches.length ? o = e.targetTouches[0] : t && e.getBrowserEvent().targetTouches && e.getBrowserEvent().targetTouches.length && (o = e.getBrowserEvent().targetTouches[0]), new goog.math.Coordinate(o.clientX, o.clientY)
}, goog.style.setPageOffset = function(e, t, o) {
    var n = goog.style.getPageOffset(e);
    t instanceof goog.math.Coordinate && (o = t.y, t = t.x), goog.style.setPosition(e, e.offsetLeft + (t - n.x), e.offsetTop + (o - n.y))
}, goog.style.setSize = function(e, t, o) {
    if (t instanceof goog.math.Size) o = t.height, t = t.width;
    else if (void 0 == o) throw Error("missing height argument");
    goog.style.setWidth(e, t), goog.style.setHeight(e, o)
}, goog.style.getPixelStyleValue_ = function(e, t) {
    return "number" == typeof e && (e = (t ? Math.round(e) : e) + "px"), e
}, goog.style.setHeight = function(e, t) {
    e.style.height = goog.style.getPixelStyleValue_(t, !0)
}, goog.style.setWidth = function(e, t) {
    e.style.width = goog.style.getPixelStyleValue_(t, !0)
}, goog.style.getSize = function(e) {
    return goog.style.evaluateWithTemporaryDisplay_(goog.style.getSizeWithDisplay_, e)
}, goog.style.evaluateWithTemporaryDisplay_ = function(e, t) {
    if ("none" != goog.style.getStyle_(t, "display")) return e(t);
    var o = t.style,
        n = o.display,
        i = o.visibility,
        r = o.position;
    o.visibility = "hidden", o.position = "absolute", o.display = "inline";
    var s = e(t);
    return o.display = n, o.position = r, o.visibility = i, s
}, goog.style.getSizeWithDisplay_ = function(e) {
    var t = e.offsetWidth,
        o = e.offsetHeight,
        n = goog.userAgent.WEBKIT && !t && !o;
    return goog.isDef(t) && !n || !e.getBoundingClientRect ? new goog.math.Size(t, o) : (e = goog.style.getBoundingClientRect_(e), new goog.math.Size(e.right - e.left, e.bottom - e.top))
}, goog.style.getTransformedSize = function(e) {
    return e.getBoundingClientRect ? (e = goog.style.evaluateWithTemporaryDisplay_(goog.style.getBoundingClientRect_, e), new goog.math.Size(e.right - e.left, e.bottom - e.top)) : null
}, goog.style.getBounds = function(e) {
    var t = goog.style.getPageOffset(e);
    return e = goog.style.getSize(e), new goog.math.Rect(t.x, t.y, e.width, e.height)
}, goog.style.toCamelCase = function(e) {
    return goog.string.toCamelCase(String(e))
}, goog.style.toSelectorCase = function(e) {
    return goog.string.toSelectorCase(e)
}, goog.style.getOpacity = function(e) {
    var t = e.style;
    return e = "", "opacity" in t ? e = t.opacity : "MozOpacity" in t ? e = t.MozOpacity : "filter" in t && (t = t.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (e = String(t[1] / 100)), "" == e ? e : Number(e)
}, goog.style.setOpacity = function(e, t) {
    var o = e.style;
    "opacity" in o ? o.opacity = t : "MozOpacity" in o ? o.MozOpacity = t : "filter" in o && (o.filter = "" === t ? "" : "alpha(opacity=" + 100 * t + ")")
}, goog.style.setTransparentBackgroundImage = function(e, t) {
    var o = e.style;
    goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? o.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + t + '", sizingMethod="crop")' : (o.backgroundImage = "url(" + t + ")", o.backgroundPosition = "top left", o.backgroundRepeat = "no-repeat")
}, goog.style.clearTransparentBackgroundImage = function(e) {
    e = e.style, "filter" in e ? e.filter = "" : e.backgroundImage = "none"
}, goog.style.showElement = function(e, t) {
    goog.style.setElementShown(e, t)
}, goog.style.setElementShown = function(e, t) {
    e.style.display = t ? "" : "none"
}, goog.style.isElementShown = function(e) {
    return "none" != e.style.display
}, goog.style.installStyles = function(e, t) {
    var o = goog.dom.getDomHelper(t),
        n = null,
        i = o.getDocument();
    return goog.userAgent.IE && i.createStyleSheet ? (n = i.createStyleSheet(), goog.style.setStyles(n, e)) : (i = o.getElementsByTagNameAndClass("head")[0], i || (n = o.getElementsByTagNameAndClass("body")[0], i = o.createDom("head"), n.parentNode.insertBefore(i, n)), n = o.createDom("style"), goog.style.setStyles(n, e), o.appendChild(i, n)), n
}, goog.style.uninstallStyles = function(e) {
    goog.dom.removeNode(e.ownerNode || e.owningElement || e)
}, goog.style.setStyles = function(e, t) {
    goog.userAgent.IE && goog.isDef(e.cssText) ? e.cssText = t : e.innerHTML = t
}, goog.style.setPreWrap = function(e) {
    e = e.style, goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? (e.whiteSpace = "pre", e.wordWrap = "break-word") : e.whiteSpace = goog.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap"
}, goog.style.setInlineBlock = function(e) {
    e = e.style, e.position = "relative", goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8") ? (e.zoom = "1", e.display = "inline") : e.display = "inline-block"
}, goog.style.isRightToLeft = function(e) {
    return "rtl" == goog.style.getStyle_(e, "direction")
}, goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null, goog.style.isUnselectable = function(e) {
    return goog.style.unselectableStyle_ ? "none" == e.style[goog.style.unselectableStyle_].toLowerCase() : goog.userAgent.IE || goog.userAgent.OPERA ? "on" == e.getAttribute("unselectable") : !1
}, goog.style.setUnselectable = function(e, t, o) {
    o = o ? null : e.getElementsByTagName("*");
    var n = goog.style.unselectableStyle_;
    if (n) {
        if (t = t ? "none" : "", e.style[n] = t, o) {
            e = 0;
            for (var i; i = o[e]; e++) i.style[n] = t
        }
    } else if ((goog.userAgent.IE || goog.userAgent.OPERA) && (t = t ? "on" : "", e.setAttribute("unselectable", t), o))
        for (e = 0; i = o[e]; e++) i.setAttribute("unselectable", t)
}, goog.style.getBorderBoxSize = function(e) {
    return new goog.math.Size(e.offsetWidth, e.offsetHeight)
}, goog.style.setBorderBoxSize = function(e, t) {
    var o = goog.dom.getOwnerDocument(e),
        n = goog.dom.getDomHelper(o).isCss1CompatMode();
    if (!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10") || n && goog.userAgent.isVersionOrHigher("8")) goog.style.setBoxSizingSize_(e, t, "border-box");
    else if (o = e.style, n) {
        var n = goog.style.getPaddingBox(e),
            i = goog.style.getBorderBox(e);
        o.pixelWidth = t.width - i.left - n.left - n.right - i.right, o.pixelHeight = t.height - i.top - n.top - n.bottom - i.bottom
    } else o.pixelWidth = t.width, o.pixelHeight = t.height
}, goog.style.getContentBoxSize = function(e) {
    var t = goog.dom.getOwnerDocument(e),
        o = goog.userAgent.IE && e.currentStyle;
    return o && goog.dom.getDomHelper(t).isCss1CompatMode() && "auto" != o.width && "auto" != o.height && !o.boxSizing ? (t = goog.style.getIePixelValue_(e, o.width, "width", "pixelWidth"), e = goog.style.getIePixelValue_(e, o.height, "height", "pixelHeight"), new goog.math.Size(t, e)) : (o = goog.style.getBorderBoxSize(e), t = goog.style.getPaddingBox(e), e = goog.style.getBorderBox(e), new goog.math.Size(o.width - e.left - t.left - t.right - e.right, o.height - e.top - t.top - t.bottom - e.bottom))
}, goog.style.setContentBoxSize = function(e, t) {
    var o = goog.dom.getOwnerDocument(e),
        n = goog.dom.getDomHelper(o).isCss1CompatMode();
    if (!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10") || n && goog.userAgent.isVersionOrHigher("8")) goog.style.setBoxSizingSize_(e, t, "content-box");
    else if (o = e.style, n) o.pixelWidth = t.width, o.pixelHeight = t.height;
    else {
        var n = goog.style.getPaddingBox(e),
            i = goog.style.getBorderBox(e);
        o.pixelWidth = t.width + i.left + n.left + n.right + i.right, o.pixelHeight = t.height + i.top + n.top + n.bottom + i.bottom
    }
}, goog.style.setBoxSizingSize_ = function(e, t, o) {
    e = e.style, goog.userAgent.GECKO ? e.MozBoxSizing = o : goog.userAgent.WEBKIT ? e.WebkitBoxSizing = o : e.boxSizing = o, e.width = Math.max(t.width, 0) + "px", e.height = Math.max(t.height, 0) + "px"
}, goog.style.getIePixelValue_ = function(e, t, o, n) {
    if (/^\d+px?$/.test(t)) return parseInt(t, 10);
    var i = e.style[o],
        r = e.runtimeStyle[o];
    return e.runtimeStyle[o] = e.currentStyle[o], e.style[o] = t, t = e.style[n], e.style[o] = i, e.runtimeStyle[o] = r, t
}, goog.style.getIePixelDistance_ = function(e, t) {
    var o = goog.style.getCascadedStyle(e, t);
    return o ? goog.style.getIePixelValue_(e, o, "left", "pixelLeft") : 0
}, goog.style.getBox_ = function(e, t) {
    if (goog.userAgent.IE) {
        var o = goog.style.getIePixelDistance_(e, t + "Left"),
            n = goog.style.getIePixelDistance_(e, t + "Right"),
            i = goog.style.getIePixelDistance_(e, t + "Top"),
            r = goog.style.getIePixelDistance_(e, t + "Bottom");
        return new goog.math.Box(i, n, r, o)
    }
    return o = goog.style.getComputedStyle(e, t + "Left"), n = goog.style.getComputedStyle(e, t + "Right"), i = goog.style.getComputedStyle(e, t + "Top"), r = goog.style.getComputedStyle(e, t + "Bottom"), new goog.math.Box(parseFloat(i), parseFloat(n), parseFloat(r), parseFloat(o))
}, goog.style.getPaddingBox = function(e) {
    return goog.style.getBox_(e, "padding")
}, goog.style.getMarginBox = function(e) {
    return goog.style.getBox_(e, "margin")
}, goog.style.ieBorderWidthKeywords_ = {
    thin: 2,
    medium: 4,
    thick: 6
}, goog.style.getIePixelBorder_ = function(e, t) {
    if ("none" == goog.style.getCascadedStyle(e, t + "Style")) return 0;
    var o = goog.style.getCascadedStyle(e, t + "Width");
    return o in goog.style.ieBorderWidthKeywords_ ? goog.style.ieBorderWidthKeywords_[o] : goog.style.getIePixelValue_(e, o, "left", "pixelLeft")
}, goog.style.getBorderBox = function(e) {
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
        var t = goog.style.getIePixelBorder_(e, "borderLeft"),
            o = goog.style.getIePixelBorder_(e, "borderRight"),
            n = goog.style.getIePixelBorder_(e, "borderTop");
        return e = goog.style.getIePixelBorder_(e, "borderBottom"), new goog.math.Box(n, o, e, t)
    }
    return t = goog.style.getComputedStyle(e, "borderLeftWidth"), o = goog.style.getComputedStyle(e, "borderRightWidth"), n = goog.style.getComputedStyle(e, "borderTopWidth"), e = goog.style.getComputedStyle(e, "borderBottomWidth"), new goog.math.Box(parseFloat(n), parseFloat(o), parseFloat(e), parseFloat(t))
}, goog.style.getFontFamily = function(e) {
    var t = goog.dom.getOwnerDocument(e),
        o = "";
    if (t.body.createTextRange && goog.dom.contains(t, e)) {
        t = t.body.createTextRange(), t.moveToElementText(e);
        try {
            o = t.queryCommandValue("FontName")
        } catch (n) {
            o = ""
        }
    }
    return o || (o = goog.style.getStyle_(e, "fontFamily")), e = o.split(","), 1 < e.length && (o = e[0]), goog.string.stripQuotes(o, "\"'")
}, goog.style.lengthUnitRegex_ = /[^\d]+$/, goog.style.getLengthUnits = function(e) {
    return (e = e.match(goog.style.lengthUnitRegex_)) && e[0] || null
}, goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
}, goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {
    em: 1,
    ex: 1
}, goog.style.getFontSize = function(e) {
    var t = goog.style.getStyle_(e, "fontSize"),
        o = goog.style.getLengthUnits(t);
    if (t && "px" == o) return parseInt(t, 10);
    if (goog.userAgent.IE) {
        if (o in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) return goog.style.getIePixelValue_(e, t, "left", "pixelLeft");
        if (e.parentNode && e.parentNode.nodeType == goog.dom.NodeType.ELEMENT && o in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) return e = e.parentNode, o = goog.style.getStyle_(e, "fontSize"), goog.style.getIePixelValue_(e, t == o ? "1em" : t, "left", "pixelLeft")
    }
    return o = goog.dom.createDom("span", {
        style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    }), goog.dom.appendChild(e, o), t = o.offsetHeight, goog.dom.removeNode(o), t
}, goog.style.parseStyleAttribute = function(e) {
    var t = {};
    return goog.array.forEach(e.split(/\s*;\s*/), function(e) {
        e = e.split(/\s*:\s*/), 2 == e.length && (t[goog.string.toCamelCase(e[0].toLowerCase())] = e[1])
    }), t
}, goog.style.toStyleAttribute = function(e) {
    var t = [];
    return goog.object.forEach(e, function(e, o) {
        t.push(goog.string.toSelectorCase(o), ":", e, ";")
    }), t.join("")
}, goog.style.setFloat = function(e, t) {
    e.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = t
}, goog.style.getFloat = function(e) {
    return e.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
}, goog.style.getScrollbarWidth = function(e) {
    var t = goog.dom.createElement("div");
    return e && (t.className = e), t.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px", e = goog.dom.createElement("div"), goog.style.setSize(e, "200px", "200px"), t.appendChild(e), goog.dom.appendChild(goog.dom.getDocument().body, t), e = t.offsetWidth - t.clientWidth, goog.dom.removeNode(t), e
}, goog.style.MATRIX_TRANSLATION_REGEX_ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/, goog.style.getCssTranslation = function(e) {
    return e = goog.style.getComputedTransform(e), e ? (e = e.match(goog.style.MATRIX_TRANSLATION_REGEX_)) ? new goog.math.Coordinate(parseFloat(e[1]), parseFloat(e[2])) : new goog.math.Coordinate(0, 0) : new goog.math.Coordinate(0, 0)
}, goog.debug.entryPointRegistry = {}, goog.debug.EntryPointMonitor = function() {}, goog.debug.entryPointRegistry.refList_ = [], goog.debug.entryPointRegistry.monitors_ = [], goog.debug.entryPointRegistry.monitorsMayExist_ = !1, goog.debug.entryPointRegistry.register = function(e) {
    if (goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = e, goog.debug.entryPointRegistry.monitorsMayExist_)
        for (var t = goog.debug.entryPointRegistry.monitors_, o = 0; o < t.length; o++) e(goog.bind(t[o].wrap, t[o]))
}, goog.debug.entryPointRegistry.monitorAll = function(e) {
    goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
    for (var t = goog.bind(e.wrap, e), o = 0; o < goog.debug.entryPointRegistry.refList_.length; o++) goog.debug.entryPointRegistry.refList_[o](t);
    goog.debug.entryPointRegistry.monitors_.push(e)
}, goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(e) {
    var t = goog.debug.entryPointRegistry.monitors_;
    goog.asserts.assert(e == t[t.length - 1], "Only the most recent monitor can be unwrapped."), e = goog.bind(e.unwrap, e);
    for (var o = 0; o < goog.debug.entryPointRegistry.refList_.length; o++) goog.debug.entryPointRegistry.refList_[o](e);
    t.length--
}, goog.events = {}, goog.events.BrowserFeature = {
    HAS_W3C_BUTTON: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    HAS_W3C_EVENT_SUPPORT: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
    SET_KEY_CODE_TO_PREVENT_DEFAULT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    HAS_NAVIGATOR_ONLINE_PROPERTY: !goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher("528"),
    HAS_HTML5_NETWORK_EVENT_SUPPORT: goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9b") || goog.userAgent.IE && goog.userAgent.isVersionOrHigher("8") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher("9.5") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("528"),
    HTML5_NETWORK_EVENTS_FIRE_ON_BODY: goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("8") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
    TOUCH_ENABLED: "ontouchstart" in goog.global || !!(goog.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!goog.global.navigator || !goog.global.navigator.msMaxTouchPoints)
}, goog.disposable = {}, goog.disposable.IDisposable = function() {}, goog.Disposable = function() {
    goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF && (goog.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack), goog.Disposable.instances_[goog.getUid(this)] = this), this.disposed_ = this.disposed_, this.onDisposeCallbacks_ = this.onDisposeCallbacks_
}, goog.Disposable.MonitoringMode = {
    OFF: 0,
    PERMANENT: 1,
    INTERACTIVE: 2
}, goog.Disposable.MONITORING_MODE = 0, goog.Disposable.INCLUDE_STACK_ON_CREATION = !0, goog.Disposable.instances_ = {}, goog.Disposable.getUndisposedObjects = function() {
    var e, t = [];
    for (e in goog.Disposable.instances_) goog.Disposable.instances_.hasOwnProperty(e) && t.push(goog.Disposable.instances_[Number(e)]);
    return t
}, goog.Disposable.clearUndisposedObjects = function() {
    goog.Disposable.instances_ = {}
}, goog.Disposable.prototype.disposed_ = !1, goog.Disposable.prototype.isDisposed = function() {
    return this.disposed_
}, goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed, goog.Disposable.prototype.dispose = function() {
    if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF)) {
        var e = goog.getUid(this);
        if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty(e)) throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
        delete goog.Disposable.instances_[e]
    }
}, goog.Disposable.prototype.registerDisposable = function(e) {
    this.addOnDisposeCallback(goog.partial(goog.dispose, e))
}, goog.Disposable.prototype.addOnDisposeCallback = function(e, t) {
    this.disposed_ ? e.call(t) : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(goog.isDef(t) ? goog.bind(e, t) : e))
}, goog.Disposable.prototype.disposeInternal = function() {
    if (this.onDisposeCallbacks_)
        for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
}, goog.Disposable.isDisposed = function(e) {
    return e && "function" == typeof e.isDisposed ? e.isDisposed() : !1
}, goog.dispose = function(e) {
    e && "function" == typeof e.dispose && e.dispose()
}, goog.disposeAll = function() {
    for (var e = 0, t = arguments.length; t > e; ++e) {
        var o = arguments[e];
        goog.isArrayLike(o) ? goog.disposeAll.apply(null, o) : goog.dispose(o)
    }
}, goog.events.EventId = function(e) {
    this.id = e
}, goog.events.EventId.prototype.toString = function() {
    return this.id
}, goog.events.Event = function(e, t) {
    this.type = e instanceof goog.events.EventId ? String(e) : e, this.currentTarget = this.target = t, this.defaultPrevented = this.propagationStopped_ = !1, this.returnValue_ = !0
}, goog.events.Event.prototype.stopPropagation = function() {
    this.propagationStopped_ = !0
}, goog.events.Event.prototype.preventDefault = function() {
    this.defaultPrevented = !0, this.returnValue_ = !1
}, goog.events.Event.stopPropagation = function(e) {
    e.stopPropagation()
}, goog.events.Event.preventDefault = function(e) {
    e.preventDefault()
}, goog.events.getVendorPrefixedName_ = function(e) {
    return goog.userAgent.WEBKIT ? "webkit" + e : goog.userAgent.OPERA ? "o" + e.toLowerCase() : e.toLowerCase()
}, goog.events.EventType = {
    CLICK: "click",
    RIGHTCLICK: "rightclick",
    DBLCLICK: "dblclick",
    MOUSEDOWN: "mousedown",
    MOUSEUP: "mouseup",
    MOUSEOVER: "mouseover",
    MOUSEOUT: "mouseout",
    MOUSEMOVE: "mousemove",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    SELECTSTART: "selectstart",
    WHEEL: "wheel",
    KEYPRESS: "keypress",
    KEYDOWN: "keydown",
    KEYUP: "keyup",
    BLUR: "blur",
    FOCUS: "focus",
    DEACTIVATE: "deactivate",
    FOCUSIN: goog.userAgent.IE ? "focusin" : "DOMFocusIn",
    FOCUSOUT: goog.userAgent.IE ? "focusout" : "DOMFocusOut",
    CHANGE: "change",
    SELECT: "select",
    SUBMIT: "submit",
    INPUT: "input",
    PROPERTYCHANGE: "propertychange",
    DRAGSTART: "dragstart",
    DRAG: "drag",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DRAGLEAVE: "dragleave",
    DROP: "drop",
    DRAGEND: "dragend",
    TOUCHSTART: "touchstart",
    TOUCHMOVE: "touchmove",
    TOUCHEND: "touchend",
    TOUCHCANCEL: "touchcancel",
    BEFOREUNLOAD: "beforeunload",
    CONSOLEMESSAGE: "consolemessage",
    CONTEXTMENU: "contextmenu",
    DOMCONTENTLOADED: "DOMContentLoaded",
    ERROR: "error",
    HELP: "help",
    LOAD: "load",
    LOSECAPTURE: "losecapture",
    ORIENTATIONCHANGE: "orientationchange",
    READYSTATECHANGE: "readystatechange",
    RESIZE: "resize",
    SCROLL: "scroll",
    UNLOAD: "unload",
    HASHCHANGE: "hashchange",
    PAGEHIDE: "pagehide",
    PAGESHOW: "pageshow",
    POPSTATE: "popstate",
    COPY: "copy",
    PASTE: "paste",
    CUT: "cut",
    BEFORECOPY: "beforecopy",
    BEFORECUT: "beforecut",
    BEFOREPASTE: "beforepaste",
    ONLINE: "online",
    OFFLINE: "offline",
    MESSAGE: "message",
    CONNECT: "connect",
    ANIMATIONSTART: goog.events.getVendorPrefixedName_("AnimationStart"),
    ANIMATIONEND: goog.events.getVendorPrefixedName_("AnimationEnd"),
    ANIMATIONITERATION: goog.events.getVendorPrefixedName_("AnimationIteration"),
    TRANSITIONEND: goog.events.getVendorPrefixedName_("TransitionEnd"),
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTERCANCEL: "pointercancel",
    POINTERMOVE: "pointermove",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    GOTPOINTERCAPTURE: "gotpointercapture",
    LOSTPOINTERCAPTURE: "lostpointercapture",
    MSGESTURECHANGE: "MSGestureChange",
    MSGESTUREEND: "MSGestureEnd",
    MSGESTUREHOLD: "MSGestureHold",
    MSGESTURESTART: "MSGestureStart",
    MSGESTURETAP: "MSGestureTap",
    MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
    MSINERTIASTART: "MSInertiaStart",
    MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
    MSPOINTERCANCEL: "MSPointerCancel",
    MSPOINTERDOWN: "MSPointerDown",
    MSPOINTERENTER: "MSPointerEnter",
    MSPOINTERHOVER: "MSPointerHover",
    MSPOINTERLEAVE: "MSPointerLeave",
    MSPOINTERMOVE: "MSPointerMove",
    MSPOINTEROUT: "MSPointerOut",
    MSPOINTEROVER: "MSPointerOver",
    MSPOINTERUP: "MSPointerUp",
    TEXT: "text",
    TEXTINPUT: "textInput",
    COMPOSITIONSTART: "compositionstart",
    COMPOSITIONUPDATE: "compositionupdate",
    COMPOSITIONEND: "compositionend",
    EXIT: "exit",
    LOADABORT: "loadabort",
    LOADCOMMIT: "loadcommit",
    LOADREDIRECT: "loadredirect",
    LOADSTART: "loadstart",
    LOADSTOP: "loadstop",
    RESPONSIVE: "responsive",
    SIZECHANGED: "sizechanged",
    UNRESPONSIVE: "unresponsive",
    VISIBILITYCHANGE: "visibilitychange",
    STORAGE: "storage",
    DOMSUBTREEMODIFIED: "DOMSubtreeModified",
    DOMNODEINSERTED: "DOMNodeInserted",
    DOMNODEREMOVED: "DOMNodeRemoved",
    DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
    DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
    DOMATTRMODIFIED: "DOMAttrModified",
    DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified"
}, goog.reflect = {}, goog.reflect.object = function(e, t) {
    return t
}, goog.reflect.sinkValue = function(e) {
    return goog.reflect.sinkValue[" "](e), e
}, goog.reflect.sinkValue[" "] = goog.nullFunction, goog.reflect.canAccessProperty = function(e, t) {
    try {
        return goog.reflect.sinkValue(e[t]), !0
    } catch (o) {}
    return !1
}, goog.events.BrowserEvent = function(e, t) {
    goog.events.Event.call(this, e ? e.type : ""), this.relatedTarget = this.currentTarget = this.target = null, this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0, this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.platformModifierKey = !1, this.event_ = null, e && this.init(e, t)
}, goog.inherits(goog.events.BrowserEvent, goog.events.Event), goog.events.BrowserEvent.MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}, goog.events.BrowserEvent.IEButtonMap = [1, 4, 2], goog.events.BrowserEvent.prototype.init = function(e, t) {
    var o = this.type = e.type,
        n = null;
    o == goog.events.EventType.TOUCHSTART || o == goog.events.EventType.TOUCHMOVE ? n = e.targetTouches[0] : (o == goog.events.EventType.TOUCHEND || o == goog.events.EventType.TOUCHCANCEL) && (n = e.changedTouches[0]), this.target = goog.isNull(n) ? e.target || e.srcElement : n.target, this.currentTarget = t;
    var i = e.relatedTarget;
    i ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty(i, "nodeName") || (i = null)) : o == goog.events.EventType.MOUSEOVER ? i = e.fromElement : o == goog.events.EventType.MOUSEOUT && (i = e.toElement), this.relatedTarget = i, goog.isNull(n) ? (this.offsetX = goog.userAgent.WEBKIT || void 0 !== e.offsetX ? e.offsetX : e.layerX, this.offsetY = goog.userAgent.WEBKIT || void 0 !== e.offsetY ? e.offsetY : e.layerY, this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== n.clientX ? n.clientX : n.pageX, this.clientY = void 0 !== n.clientY ? n.clientY : n.pageY, this.screenX = n.screenX || 0, this.screenY = n.screenY || 0), this.button = e.button, this.keyCode = e.keyCode || 0, this.charCode = e.charCode || ("keypress" == o ? e.keyCode : 0), this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey, this.state = e.state, this.event_ = e, e.defaultPrevented && this.preventDefault()
}, goog.events.BrowserEvent.prototype.isButton = function(e) {
    return goog.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == e : "click" == this.type ? e == goog.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[e])
}, goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
    return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
}, goog.events.BrowserEvent.prototype.stopPropagation = function() {
    goog.events.BrowserEvent.superClass_.stopPropagation.call(this), this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
}, goog.events.BrowserEvent.prototype.preventDefault = function() {
    goog.events.BrowserEvent.superClass_.preventDefault.call(this);
    var e = this.event_;
    if (e.preventDefault) e.preventDefault();
    else if (e.returnValue = !1, goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) try {
        (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) && (e.keyCode = -1)
    } catch (t) {}
}, goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
    return this.event_
}, goog.events.Listenable = function() {}, goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1e6 * Math.random() | 0), goog.events.Listenable.addImplementation = function(e) {
    e.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = !0
}, goog.events.Listenable.isImplementedBy = function(e) {
    return !(!e || !e[goog.events.Listenable.IMPLEMENTED_BY_PROP])
}, goog.events.ListenableKey = function() {}, goog.events.ListenableKey.counter_ = 0, goog.events.ListenableKey.reserveKey = function() {
    return ++goog.events.ListenableKey.counter_
}, goog.events.Listener = function(e, t, o, n, i, r) {
    goog.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack), this.listener = e, this.proxy = t, this.src = o, this.type = n, this.capture = !!i, this.handler = r, this.key = goog.events.ListenableKey.reserveKey(), this.removed = this.callOnce = !1
}, goog.events.Listener.ENABLE_MONITORING = !1, goog.events.Listener.prototype.markAsRemoved = function() {
    this.removed = !0, this.handler = this.src = this.proxy = this.listener = null
}, goog.events.ListenerMap = function(e) {
    this.src = e, this.listeners = {}, this.typeCount_ = 0
}, goog.events.ListenerMap.prototype.getTypeCount = function() {
    return this.typeCount_
}, goog.events.ListenerMap.prototype.getListenerCount = function() {
    var e, t = 0;
    for (e in this.listeners) t += this.listeners[e].length;
    return t
}, goog.events.ListenerMap.prototype.add = function(e, t, o, n, i) {
    var r = e.toString();
    e = this.listeners[r], e || (e = this.listeners[r] = [], this.typeCount_++);
    var s = goog.events.ListenerMap.findListenerIndex_(e, t, n, i);
    return s > -1 ? (t = e[s], o || (t.callOnce = !1)) : (t = new goog.events.Listener(t, null, this.src, r, !!n, i), t.callOnce = o, e.push(t)), t
}, goog.events.ListenerMap.prototype.remove = function(e, t, o, n) {
    if (e = e.toString(), !(e in this.listeners)) return !1;
    var i = this.listeners[e];
    return t = goog.events.ListenerMap.findListenerIndex_(i, t, o, n), t > -1 ? (i[t].markAsRemoved(), goog.array.removeAt(i, t), 0 == i.length && (delete this.listeners[e], this.typeCount_--), !0) : !1
}, goog.events.ListenerMap.prototype.removeByKey = function(e) {
    var t = e.type;
    if (!(t in this.listeners)) return !1;
    var o = goog.array.remove(this.listeners[t], e);
    return o && (e.markAsRemoved(), 0 == this.listeners[t].length && (delete this.listeners[t], this.typeCount_--)), o
}, goog.events.ListenerMap.prototype.removeAll = function(e) {
    e = e && e.toString();
    var t, o = 0;
    for (t in this.listeners)
        if (!e || t == e) {
            for (var n = this.listeners[t], i = 0; i < n.length; i++) ++o, n[i].markAsRemoved();
            delete this.listeners[t], this.typeCount_--
        }
    return o
}, goog.events.ListenerMap.prototype.getListeners = function(e, t) {
    var o = this.listeners[e.toString()],
        n = [];
    if (o)
        for (var i = 0; i < o.length; ++i) {
            var r = o[i];
            r.capture == t && n.push(r)
        }
    return n
}, goog.events.ListenerMap.prototype.getListener = function(e, t, o, n) {
    e = this.listeners[e.toString()];
    var i = -1;
    return e && (i = goog.events.ListenerMap.findListenerIndex_(e, t, o, n)), i > -1 ? e[i] : null
}, goog.events.ListenerMap.prototype.hasListener = function(e, t) {
    var o = goog.isDef(e),
        n = o ? e.toString() : "",
        i = goog.isDef(t);
    return goog.object.some(this.listeners, function(e) {
        for (var r = 0; r < e.length; ++r)
            if (!(o && e[r].type != n || i && e[r].capture != t)) return !0;
        return !1
    })
}, goog.events.ListenerMap.findListenerIndex_ = function(e, t, o, n) {
    for (var i = 0; i < e.length; ++i) {
        var r = e[i];
        if (!r.removed && r.listener == t && r.capture == !!o && r.handler == n) return i
    }
    return -1
}, goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1e6 * Math.random() | 0), goog.events.onString_ = "on", goog.events.onStringMap_ = {}, goog.events.CaptureSimulationMode = {
    OFF_AND_FAIL: 0,
    OFF_AND_SILENT: 1,
    ON: 2
}, goog.events.CAPTURE_SIMULATION_MODE = 2, goog.events.listenerCountEstimate_ = 0, goog.events.listen = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.listen(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.listen(t, o, n, i) : goog.events.listen_(e, t, o, !1, n, i)
}, goog.events.listen_ = function(e, t, o, n, i, r) {
    if (!t) throw Error("Invalid event type");
    var s = !!i;
    if (s && !goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_FAIL) return goog.asserts.fail("Can not register capture listener in IE8-."), null;
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_SILENT) return null
    }
    var l = goog.events.getListenerMap_(e);
    return l || (e[goog.events.LISTENER_MAP_PROP_] = l = new goog.events.ListenerMap(e)), o = l.add(t, o, n, i, r), o.proxy ? o : (n = goog.events.getProxy(), o.proxy = n, n.src = e, n.listener = o, e.addEventListener ? e.addEventListener(t.toString(), n, s) : e.attachEvent(goog.events.getOnString_(t.toString()), n), goog.events.listenerCountEstimate_++, o)
}, goog.events.getProxy = function() {
    var e = goog.events.handleBrowserEvent_,
        t = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(o) {
            return e.call(t.src, t.listener, o)
        } : function(o) {
            return o = e.call(t.src, t.listener, o), o ? void 0 : o
        };
    return t
}, goog.events.listenOnce = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.listenOnce(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.listenOnce(t, o, n, i) : goog.events.listen_(e, t, o, !0, n, i)
}, goog.events.listenWithWrapper = function(e, t, o, n, i) {
    t.listen(e, o, n, i)
}, goog.events.unlisten = function(e, t, o, n, i) {
    if (goog.isArray(t)) {
        for (var r = 0; r < t.length; r++) goog.events.unlisten(e, t[r], o, n, i);
        return null
    }
    return o = goog.events.wrapListener(o), goog.events.Listenable.isImplementedBy(e) ? e.unlisten(t, o, n, i) : e ? (n = !!n, (e = goog.events.getListenerMap_(e)) && (t = e.getListener(t, o, n, i)) ? goog.events.unlistenByKey(t) : !1) : !1
}, goog.events.unlistenByKey = function(e) {
    if (goog.isNumber(e) || !e || e.removed) return !1;
    var t = e.src;
    if (goog.events.Listenable.isImplementedBy(t)) return t.unlistenByKey(e);
    var o = e.type,
        n = e.proxy;
    return t.removeEventListener ? t.removeEventListener(o, n, e.capture) : t.detachEvent && t.detachEvent(goog.events.getOnString_(o), n), goog.events.listenerCountEstimate_--, (o = goog.events.getListenerMap_(t)) ? (o.removeByKey(e), 0 == o.getTypeCount() && (o.src = null, t[goog.events.LISTENER_MAP_PROP_] = null)) : e.markAsRemoved(), !0
}, goog.events.unlistenWithWrapper = function(e, t, o, n, i) {
    t.unlisten(e, o, n, i)
}, goog.events.removeAll = function(e, t) {
    if (!e) return 0;
    if (goog.events.Listenable.isImplementedBy(e)) return e.removeAllListeners(t);
    var o = goog.events.getListenerMap_(e);
    if (!o) return 0;
    var n, i = 0,
        r = t && t.toString();
    for (n in o.listeners)
        if (!r || n == r)
            for (var s = o.listeners[n].concat(), l = 0; l < s.length; ++l) goog.events.unlistenByKey(s[l]) && ++i;
    return i
}, goog.events.getListeners = function(e, t, o) {
    return goog.events.Listenable.isImplementedBy(e) ? e.getListeners(t, o) : e ? (e = goog.events.getListenerMap_(e)) ? e.getListeners(t, o) : [] : []
}, goog.events.getListener = function(e, t, o, n, i) {
    return o = goog.events.wrapListener(o), n = !!n, goog.events.Listenable.isImplementedBy(e) ? e.getListener(t, o, n, i) : e ? (e = goog.events.getListenerMap_(e)) ? e.getListener(t, o, n, i) : null : null
}, goog.events.hasListener = function(e, t, o) {
    return goog.events.Listenable.isImplementedBy(e) ? e.hasListener(t, o) : (e = goog.events.getListenerMap_(e), !!e && e.hasListener(t, o))
}, goog.events.expose = function(e) {
    var t, o = [];
    for (t in e) e[t] && e[t].id ? o.push(t + " = " + e[t] + " (" + e[t].id + ")") : o.push(t + " = " + e[t]);
    return o.join("\n")
}, goog.events.getOnString_ = function(e) {
    return e in goog.events.onStringMap_ ? goog.events.onStringMap_[e] : goog.events.onStringMap_[e] = goog.events.onString_ + e
}, goog.events.fireListeners = function(e, t, o, n) {
    return goog.events.Listenable.isImplementedBy(e) ? e.fireListeners(t, o, n) : goog.events.fireListeners_(e, t, o, n)
}, goog.events.fireListeners_ = function(e, t, o, n) {
    var i = !0;
    if ((e = goog.events.getListenerMap_(e)) && (t = e.listeners[t.toString()]))
        for (t = t.concat(), e = 0; e < t.length; e++) {
            var r = t[e];
            r && r.capture == o && !r.removed && (r = goog.events.fireListener(r, n), i = i && !1 !== r)
        }
    return i
}, goog.events.fireListener = function(e, t) {
    var o = e.listener,
        n = e.handler || e.src;
    return e.callOnce && goog.events.unlistenByKey(e), o.call(n, t)
}, goog.events.getTotalListenerCount = function() {
    return goog.events.listenerCountEstimate_
}, goog.events.dispatchEvent = function(e, t) {
    return goog.asserts.assert(goog.events.Listenable.isImplementedBy(e), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance."), e.dispatchEvent(t)
}, goog.events.protectBrowserEventEntryPoint = function(e) {
    goog.events.handleBrowserEvent_ = e.protectEntryPoint(goog.events.handleBrowserEvent_)
}, goog.events.handleBrowserEvent_ = function(e, t) {
    if (e.removed) return !0;
    if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        var o = t || goog.getObjectByName("window.event"),
            n = new goog.events.BrowserEvent(o, this),
            i = !0;
        if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
            if (!goog.events.isMarkedIeEvent_(o)) {
                goog.events.markIeEvent_(o);
                for (var o = [], r = n.currentTarget; r; r = r.parentNode) o.push(r);
                for (var r = e.type, s = o.length - 1; !n.propagationStopped_ && s >= 0; s--) {
                    n.currentTarget = o[s];
                    var l = goog.events.fireListeners_(o[s], r, !0, n),
                        i = i && l
                }
                for (s = 0; !n.propagationStopped_ && s < o.length; s++) n.currentTarget = o[s], l = goog.events.fireListeners_(o[s], r, !1, n), i = i && l
            }
        } else i = goog.events.fireListener(e, n);
        return i
    }
    return goog.events.fireListener(e, new goog.events.BrowserEvent(t, this))
}, goog.events.markIeEvent_ = function(e) {
    var t = !1;
    if (0 == e.keyCode) try {
        return e.keyCode = -1, void 0
    } catch (o) {
        t = !0
    }(t || void 0 == e.returnValue) && (e.returnValue = !0)
}, goog.events.isMarkedIeEvent_ = function(e) {
    return 0 > e.keyCode || void 0 != e.returnValue
}, goog.events.uniqueIdCounter_ = 0, goog.events.getUniqueId = function(e) {
    return e + "_" + goog.events.uniqueIdCounter_++
}, goog.events.getListenerMap_ = function(e) {
    return e = e[goog.events.LISTENER_MAP_PROP_], e instanceof goog.events.ListenerMap ? e : null
}, goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), goog.events.wrapListener = function(e) {
    return goog.asserts.assert(e, "Listener can not be null."), goog.isFunction(e) ? e : (goog.asserts.assert(e.handleEvent, "An object listener must have handleEvent method."), e[goog.events.LISTENER_WRAPPER_PROP_] || (e[goog.events.LISTENER_WRAPPER_PROP_] = function(t) {
        return e.handleEvent(t)
    }), e[goog.events.LISTENER_WRAPPER_PROP_])
}, goog.debug.entryPointRegistry.register(function(e) {
    goog.events.handleBrowserEvent_ = e(goog.events.handleBrowserEvent_)
}), goog.Thenable = function() {}, goog.Thenable.prototype.then = function() {}, goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable", goog.Thenable.addImplementation = function(e) {
    goog.exportProperty(e.prototype, "then", e.prototype.then), COMPILED ? e.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = !0 : e.prototype.$goog_Thenable = !0
}, goog.Thenable.isImplementedBy = function(e) {
    if (!e) return !1;
    try {
        return COMPILED ? !!e[goog.Thenable.IMPLEMENTED_BY_PROP] : !!e.$goog_Thenable
    } catch (t) {
        return !1
    }
}, goog.async = {}, goog.async.FreeList = function(e, t, o) {
    this.limit_ = o, this.create_ = e, this.reset_ = t, this.occupants_ = 0, this.head_ = null
}, goog.async.FreeList.prototype.get = function() {
    var e;
    return 0 < this.occupants_ ? (this.occupants_--, e = this.head_, this.head_ = e.next, e.next = null) : e = this.create_(), e
}, goog.async.FreeList.prototype.put = function(e) {
    this.reset_(e), this.occupants_ < this.limit_ && (this.occupants_++, e.next = this.head_, this.head_ = e)
}, goog.async.FreeList.prototype.occupants = function() {
    return this.occupants_
}, goog.async.WorkQueue = function() {
    this.workTail_ = this.workHead_ = null
}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED = 100, goog.async.WorkQueue.freelist_ = new goog.async.FreeList(function() {
    return new goog.async.WorkItem
}, function(e) {
    e.reset()
}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED), goog.async.WorkQueue.prototype.add = function(e, t) {
    var o = this.getUnusedItem_();
    o.set(e, t), this.workTail_ ? this.workTail_.next = o : (goog.asserts.assert(!this.workHead_), this.workHead_ = o), this.workTail_ = o
}, goog.async.WorkQueue.prototype.remove = function() {
    var e = null;
    return this.workHead_ && (e = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), e.next = null), e
}, goog.async.WorkQueue.prototype.returnUnused = function(e) {
    goog.async.WorkQueue.freelist_.put(e)
}, goog.async.WorkQueue.prototype.getUnusedItem_ = function() {
    return goog.async.WorkQueue.freelist_.get()
}, goog.async.WorkItem = function() {
    this.next = this.scope = this.fn = null
}, goog.async.WorkItem.prototype.set = function(e, t) {
    this.fn = e, this.scope = t, this.next = null
}, goog.async.WorkItem.prototype.reset = function() {
    this.next = this.scope = this.fn = null
}, goog.functions = {}, goog.functions.constant = function(e) {
    return function() {
        return e
    }
}, goog.functions.FALSE = goog.functions.constant(!1), goog.functions.TRUE = goog.functions.constant(!0), goog.functions.NULL = goog.functions.constant(null), goog.functions.identity = function(e) {
    return e
}, goog.functions.error = function(e) {
    return function() {
        throw Error(e)
    }
}, goog.functions.fail = function(e) {
    return function() {
        throw e
    }
}, goog.functions.lock = function(e, t) {
    return t = t || 0,
        function() {
            return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
        }
}, goog.functions.nth = function(e) {
    return function() {
        return arguments[e]
    }
}, goog.functions.withReturnValue = function(e, t) {
    return goog.functions.sequence(e, goog.functions.constant(t))
}, goog.functions.equalTo = function(e, t) {
    return function(o) {
        return t ? e == o : e === o
    }
}, goog.functions.compose = function() {
    var e = arguments,
        t = e.length;
    return function() {
        var o;
        t && (o = e[t - 1].apply(this, arguments));
        for (var n = t - 2; n >= 0; n--) o = e[n].call(this, o);
        return o
    }
}, goog.functions.sequence = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o, n = 0; t > n; n++) o = e[n].apply(this, arguments);
        return o
    }
}, goog.functions.and = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o = 0; t > o; o++)
            if (!e[o].apply(this, arguments)) return !1;
        return !0
    }
}, goog.functions.or = function() {
    var e = arguments,
        t = e.length;
    return function() {
        for (var o = 0; t > o; o++)
            if (e[o].apply(this, arguments)) return !0;
        return !1
    }
}, goog.functions.not = function(e) {
    return function() {
        return !e.apply(this, arguments)
    }
}, goog.functions.create = function(e) {
    var t = function() {};
    return t.prototype = e.prototype, t = new t, e.apply(t, Array.prototype.slice.call(arguments, 1)), t
}, goog.functions.CACHE_RETURN_VALUE = !0, goog.functions.cacheReturnValue = function(e) {
    var t, o = !1;
    return function() {
        return goog.functions.CACHE_RETURN_VALUE ? (o || (t = e(), o = !0), t) : e()
    }
}, goog.async.throwException = function(e) {
    goog.global.setTimeout(function() {
        throw e
    }, 0)
}, goog.async.nextTick = function(e, t, o) {
    var n = e;
    t && (n = goog.bind(e, t)), n = goog.async.nextTick.wrapCallback_(n), !goog.isFunction(goog.global.setImmediate) || !o && goog.global.Window && goog.global.Window.prototype && goog.global.Window.prototype.setImmediate == goog.global.setImmediate ? (goog.async.nextTick.setImmediate_ || (goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_()), goog.async.nextTick.setImmediate_(n)) : goog.global.setImmediate(n)
}, goog.async.nextTick.getSetImmediateEmulator_ = function() {
    var e = goog.global.MessageChannel;
    if ("undefined" == typeof e && "undefined" != typeof window && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto() && (e = function() {
            var e = document.createElement("iframe");
            e.style.display = "none", e.src = "", document.documentElement.appendChild(e);
            var t = e.contentWindow,
                e = t.document;
            e.open(), e.write(""), e.close();
            var o = "callImmediate" + Math.random(),
                n = "file:" == t.location.protocol ? "*" : t.location.protocol + "//" + t.location.host,
                e = goog.bind(function(e) {
                    "*" != n && e.origin != n || e.data != o || this.port1.onmessage()
                }, this);
            t.addEventListener("message", e, !1), this.port1 = {}, this.port2 = {
                postMessage: function() {
                    t.postMessage(o, n)
                }
            }
        }), "undefined" != typeof e && !goog.labs.userAgent.browser.isIE()) {
        var t = new e,
            o = {},
            n = o;
        return t.port1.onmessage = function() {
                if (goog.isDef(o.next)) {
                    o = o.next;
                    var e = o.cb;
                    o.cb = null, e()
                }
            },
            function(e) {
                n.next = {
                    cb: e
                }, n = n.next, t.port2.postMessage(0)
            }
    }
    return "undefined" != typeof document && "onreadystatechange" in document.createElement("script") ? function(e) {
        var t = document.createElement("script");
        t.onreadystatechange = function() {
            t.onreadystatechange = null, t.parentNode.removeChild(t), t = null, e(), e = null
        }, document.documentElement.appendChild(t)
    } : function(e) {
        goog.global.setTimeout(e, 0)
    }
}, goog.async.nextTick.wrapCallback_ = goog.functions.identity, goog.debug.entryPointRegistry.register(function(e) {
    goog.async.nextTick.wrapCallback_ = e
}), goog.testing = {}, goog.testing.watchers = {}, goog.testing.watchers.resetWatchers_ = [], goog.testing.watchers.signalClockReset = function() {
    for (var e = goog.testing.watchers.resetWatchers_, t = 0; t < e.length; t++) goog.testing.watchers.resetWatchers_[t]()
}, goog.testing.watchers.watchClockReset = function(e) {
    goog.testing.watchers.resetWatchers_.push(e)
}, goog.async.run = function(e, t) {
    goog.async.run.schedule_ || goog.async.run.initializeRunner_(), goog.async.run.workQueueScheduled_ || (goog.async.run.schedule_(), goog.async.run.workQueueScheduled_ = !0), goog.async.run.workQueue_.add(e, t)
}, goog.async.run.initializeRunner_ = function() {
    if (goog.global.Promise && goog.global.Promise.resolve) {
        var e = goog.global.Promise.resolve();
        goog.async.run.schedule_ = function() {
            e.then(goog.async.run.processWorkQueue)
        }
    } else goog.async.run.schedule_ = function() {
        goog.async.nextTick(goog.async.run.processWorkQueue)
    }
}, goog.async.run.forceNextTick = function() {
    goog.async.run.schedule_ = function() {
        goog.async.nextTick(goog.async.run.processWorkQueue)
    }
}, goog.async.run.workQueueScheduled_ = !1, goog.async.run.workQueue_ = new goog.async.WorkQueue, goog.DEBUG && (goog.async.run.resetQueue_ = function() {
    goog.async.run.workQueueScheduled_ = !1, goog.async.run.workQueue_ = new goog.async.WorkQueue
}, goog.testing.watchers.watchClockReset(goog.async.run.resetQueue_)), goog.async.run.processWorkQueue = function() {
    for (var e = null; e = goog.async.run.workQueue_.remove();) {
        try {
            e.fn.call(e.scope)
        } catch (t) {
            goog.async.throwException(t)
        }
        goog.async.run.workQueue_.returnUnused(e)
    }
    goog.async.run.workQueueScheduled_ = !1
}, goog.promise = {}, goog.promise.Resolver = function() {}, goog.Promise = function(e, t) {
    if (this.state_ = goog.Promise.State_.PENDING, this.result_ = void 0, this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null, this.executing_ = !1, 0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1), goog.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0), e == goog.Promise.RESOLVE_FAST_PATH_) this.resolve_(goog.Promise.State_.FULFILLED, t);
    else try {
        var o = this;
        e.call(t, function(e) {
            o.resolve_(goog.Promise.State_.FULFILLED, e)
        }, function(e) {
            if (goog.DEBUG && !(e instanceof goog.Promise.CancellationError)) try {
                if (e instanceof Error) throw e;
                throw Error("Promise rejected.")
            } catch (t) {}
            o.resolve_(goog.Promise.State_.REJECTED, e)
        })
    } catch (n) {
        this.resolve_(goog.Promise.State_.REJECTED, n)
    }
}, goog.Promise.LONG_STACK_TRACES = !1, goog.Promise.UNHANDLED_REJECTION_DELAY = 0, goog.Promise.State_ = {
    PENDING: 0,
    BLOCKED: 1,
    FULFILLED: 2,
    REJECTED: 3
}, goog.Promise.CallbackEntry_ = function() {
    this.next = this.context = this.onRejected = this.onFulfilled = this.child = null, this.always = !1
}, goog.Promise.CallbackEntry_.prototype.reset = function() {
    this.context = this.onRejected = this.onFulfilled = this.child = null, this.always = !1
}, goog.Promise.DEFAULT_MAX_UNUSED = 100, goog.Promise.freelist_ = new goog.async.FreeList(function() {
    return new goog.Promise.CallbackEntry_
}, function(e) {
    e.reset()
}, goog.Promise.DEFAULT_MAX_UNUSED), goog.Promise.getCallbackEntry_ = function(e, t, o) {
    var n = goog.Promise.freelist_.get();
    return n.onFulfilled = e, n.onRejected = t, n.context = o, n
}, goog.Promise.returnEntry_ = function(e) {
    goog.Promise.freelist_.put(e)
}, goog.Promise.RESOLVE_FAST_PATH_ = function() {}, goog.Promise.resolve = function(e) {
    return new goog.Promise(goog.Promise.RESOLVE_FAST_PATH_, e)
}, goog.Promise.reject = function(e) {
    return new goog.Promise(function(t, o) {
        o(e)
    })
}, goog.Promise.race = function(e) {
    return new goog.Promise(function(t, o) {
        e.length || t(void 0);
        for (var n, i = 0; n = e[i]; i++) goog.Promise.maybeThenVoid_(n, t, o)
    })
}, goog.Promise.all = function(e) {
    return new goog.Promise(function(t, o) {
        var n = e.length,
            i = [];
        if (n)
            for (var r, s = function(e, o) {
                    n--, i[e] = o, 0 == n && t(i)
                }, l = function(e) {
                    o(e)
                }, a = 0; r = e[a]; a++) goog.Promise.maybeThenVoid_(r, goog.partial(s, a), l);
        else t(i)
    })
}, goog.Promise.firstFulfilled = function(e) {
    return new goog.Promise(function(t, o) {
        var n = e.length,
            i = [];
        if (n)
            for (var r, s = function(e) {
                    t(e)
                }, l = function(e, t) {
                    n--, i[e] = t, 0 == n && o(i)
                }, a = 0; r = e[a]; a++) goog.Promise.maybeThenVoid_(r, s, goog.partial(l, a));
        else t(void 0)
    })
}, goog.Promise.withResolver = function() {
    var e, t, o = new goog.Promise(function(o, n) {
        e = o, t = n
    });
    return new goog.Promise.Resolver_(o, e, t)
}, goog.Promise.prototype.then = function(e, t, o) {
    return null != e && goog.asserts.assertFunction(e, "opt_onFulfilled should be a function."), null != t && goog.asserts.assertFunction(t, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then")), this.addChildPromise_(goog.isFunction(e) ? e : null, goog.isFunction(t) ? t : null, o)
}, goog.Thenable.addImplementation(goog.Promise), goog.Promise.prototype.thenVoid = function(e, t, o) {
    null != e && goog.asserts.assertFunction(e, "opt_onFulfilled should be a function."), null != t && goog.asserts.assertFunction(t, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then")), this.addCallbackEntry_(goog.Promise.getCallbackEntry_(e || goog.nullFunction, t || null, o))
}, goog.Promise.maybeThenVoid_ = function(e, t, o, n) {
    e instanceof goog.Promise ? e.thenVoid(t, o, n) : e.then(t, o, n)
}, goog.Promise.prototype.thenAlways = function(e, t) {
    goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways"));
    var o = function() {
            try {
                e.call(t)
            } catch (o) {
                goog.Promise.handleRejection_.call(null, o)
            }
        },
        o = goog.Promise.getCallbackEntry_(o, o, null);
    return o.always = !0, this.addCallbackEntry_(o), this
}, goog.Promise.prototype.thenCatch = function(e, t) {
    return goog.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch")), this.addChildPromise_(null, e, t)
}, goog.Promise.prototype.cancel = function(e) {
    this.state_ == goog.Promise.State_.PENDING && goog.async.run(function() {
        var t = new goog.Promise.CancellationError(e);
        this.cancelInternal_(t)
    }, this)
}, goog.Promise.prototype.cancelInternal_ = function(e) {
    this.state_ == goog.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, e), this.parent_ = null) : this.resolve_(goog.Promise.State_.REJECTED, e))
}, goog.Promise.prototype.cancelChild_ = function(e, t) {
    if (this.callbackEntries_) {
        for (var o = 0, n = null, i = null, r = this.callbackEntries_; r && (r.always || (o++, r.child == e && (n = r), !(n && o > 1))); r = r.next) n || (i = r);
        n && (this.state_ == goog.Promise.State_.PENDING && 1 == o ? this.cancelInternal_(t) : (i ? this.removeEntryAfter_(i) : this.popEntry_(), this.executeCallback_(n, goog.Promise.State_.REJECTED, t)))
    }
}, goog.Promise.prototype.addCallbackEntry_ = function(e) {
    this.hasEntry_() || this.state_ != goog.Promise.State_.FULFILLED && this.state_ != goog.Promise.State_.REJECTED || this.scheduleCallbacks_(), this.queueEntry_(e)
}, goog.Promise.prototype.addChildPromise_ = function(e, t, o) {
    var n = goog.Promise.getCallbackEntry_(null, null, null);
    return n.child = new goog.Promise(function(i, r) {
        n.onFulfilled = e ? function(t) {
            try {
                var n = e.call(o, t);
                i(n)
            } catch (s) {
                r(s)
            }
        } : i, n.onRejected = t ? function(e) {
            try {
                var n = t.call(o, e);
                !goog.isDef(n) && e instanceof goog.Promise.CancellationError ? r(e) : i(n)
            } catch (s) {
                r(s)
            }
        } : r
    }), n.child.parent_ = this, this.addCallbackEntry_(n), n.child
}, goog.Promise.prototype.unblockAndFulfill_ = function(e) {
    goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED), this.state_ = goog.Promise.State_.PENDING, this.resolve_(goog.Promise.State_.FULFILLED, e)
}, goog.Promise.prototype.unblockAndReject_ = function(e) {
    goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED), this.state_ = goog.Promise.State_.PENDING, this.resolve_(goog.Promise.State_.REJECTED, e)
}, goog.Promise.prototype.resolve_ = function(e, t) {
    if (this.state_ == goog.Promise.State_.PENDING) {
        if (this == t) e = goog.Promise.State_.REJECTED, t = new TypeError("Promise cannot resolve to itself");
        else {
            if (goog.Thenable.isImplementedBy(t)) return this.state_ = goog.Promise.State_.BLOCKED, goog.Promise.maybeThenVoid_(t, this.unblockAndFulfill_, this.unblockAndReject_, this), void 0;
            if (goog.isObject(t)) try {
                var o = t.then;
                if (goog.isFunction(o)) return this.tryThen_(t, o), void 0
            } catch (n) {
                e = goog.Promise.State_.REJECTED, t = n
            }
        }
        this.result_ = t, this.state_ = e, this.parent_ = null, this.scheduleCallbacks_(), e != goog.Promise.State_.REJECTED || t instanceof goog.Promise.CancellationError || goog.Promise.addUnhandledRejection_(this, t)
    }
}, goog.Promise.prototype.tryThen_ = function(e, t) {
    this.state_ = goog.Promise.State_.BLOCKED;
    var o = this,
        n = !1,
        i = function(e) {
            n || (n = !0, o.unblockAndFulfill_(e))
        },
        r = function(e) {
            n || (n = !0, o.unblockAndReject_(e))
        };
    try {
        t.call(e, i, r)
    } catch (s) {
        r(s)
    }
}, goog.Promise.prototype.scheduleCallbacks_ = function() {
    this.executing_ || (this.executing_ = !0, goog.async.run(this.executeCallbacks_, this))
}, goog.Promise.prototype.hasEntry_ = function() {
    return !!this.callbackEntries_
}, goog.Promise.prototype.queueEntry_ = function(e) {
    goog.asserts.assert(null != e.onFulfilled), this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = e : this.callbackEntries_ = e, this.callbackEntriesTail_ = e
}, goog.Promise.prototype.popEntry_ = function() {
    var e = null;
    return this.callbackEntries_ && (e = this.callbackEntries_, this.callbackEntries_ = e.next, e.next = null), this.callbackEntries_ || (this.callbackEntriesTail_ = null), null != e && goog.asserts.assert(null != e.onFulfilled), e
}, goog.Promise.prototype.removeEntryAfter_ = function(e) {
    goog.asserts.assert(this.callbackEntries_), goog.asserts.assert(null != e), e.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = e), e.next = e.next.next
}, goog.Promise.prototype.executeCallbacks_ = function() {
    for (var e = null; e = this.popEntry_();) goog.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_(e, this.state_, this.result_);
    this.executing_ = !1
}, goog.Promise.prototype.executeCallback_ = function(e, t, o) {
    e.child && (e.child.parent_ = null), t == goog.Promise.State_.FULFILLED ? e.onFulfilled.call(e.context, o) : null != e.onRejected && (e.always || this.removeUnhandledRejection_(), e.onRejected.call(e.context, o)), goog.Promise.returnEntry_(e)
}, goog.Promise.prototype.addStackTrace_ = function(e) {
    if (goog.Promise.LONG_STACK_TRACES && goog.isString(e.stack)) {
        var t = e.stack.split("\n", 4)[3];
        e = e.message, e += Array(11 - e.length).join(" "), this.stack_.push(e + t)
    }
}, goog.Promise.prototype.appendLongStack_ = function(e) {
    if (goog.Promise.LONG_STACK_TRACES && e && goog.isString(e.stack) && this.stack_.length) {
        for (var t = ["Promise trace:"], o = this; o; o = o.parent_) {
            for (var n = this.currentStep_; n >= 0; n--) t.push(o.stack_[n]);
            t.push("Value: [" + (o.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String(o.result_) + ">")
        }
        e.stack += "\n\n" + t.join("\n")
    }
}, goog.Promise.prototype.removeUnhandledRejection_ = function() {
    if (0 < goog.Promise.UNHANDLED_REJECTION_DELAY)
        for (var e = this; e && e.unhandledRejectionId_; e = e.parent_) goog.global.clearTimeout(e.unhandledRejectionId_), e.unhandledRejectionId_ = 0;
    else if (0 == goog.Promise.UNHANDLED_REJECTION_DELAY)
        for (e = this; e && e.hadUnhandledRejection_; e = e.parent_) e.hadUnhandledRejection_ = !1
}, goog.Promise.addUnhandledRejection_ = function(e, t) {
    0 < goog.Promise.UNHANDLED_REJECTION_DELAY ? e.unhandledRejectionId_ = goog.global.setTimeout(function() {
        e.appendLongStack_(t), goog.Promise.handleRejection_.call(null, t)
    }, goog.Promise.UNHANDLED_REJECTION_DELAY) : 0 == goog.Promise.UNHANDLED_REJECTION_DELAY && (e.hadUnhandledRejection_ = !0, goog.async.run(function() {
        e.hadUnhandledRejection_ && (e.appendLongStack_(t), goog.Promise.handleRejection_.call(null, t))
    }))
}, goog.Promise.handleRejection_ = goog.async.throwException, goog.Promise.setUnhandledRejectionHandler = function(e) {
    goog.Promise.handleRejection_ = e
}, goog.Promise.CancellationError = function(e) {
    goog.debug.Error.call(this, e)
}, goog.inherits(goog.Promise.CancellationError, goog.debug.Error), goog.Promise.CancellationError.prototype.name = "cancel", goog.Promise.Resolver_ = function(e, t, o) {
    this.promise = e, this.resolve = t, this.reject = o
}, goog.events.EventTarget = function() {
    goog.Disposable.call(this), this.eventTargetListeners_ = new goog.events.ListenerMap(this), this.actualEventTarget_ = this, this.parentEventTarget_ = null
}, goog.inherits(goog.events.EventTarget, goog.Disposable), goog.events.Listenable.addImplementation(goog.events.EventTarget), goog.events.EventTarget.MAX_ANCESTORS_ = 1e3, goog.events.EventTarget.prototype.getParentEventTarget = function() {
    return this.parentEventTarget_
}, goog.events.EventTarget.prototype.setParentEventTarget = function(e) {
    this.parentEventTarget_ = e
}, goog.events.EventTarget.prototype.addEventListener = function(e, t, o, n) {
    goog.events.listen(this, e, t, o, n)
}, goog.events.EventTarget.prototype.removeEventListener = function(e, t, o, n) {
    goog.events.unlisten(this, e, t, o, n)
}, goog.events.EventTarget.prototype.dispatchEvent = function(e) {
    this.assertInitialized_();
    var t, o = this.getParentEventTarget();
    if (o) {
        t = [];
        for (var n = 1; o; o = o.getParentEventTarget()) t.push(o), goog.asserts.assert(++n < goog.events.EventTarget.MAX_ANCESTORS_, "infinite loop")
    }
    return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, e, t)
}, goog.events.EventTarget.prototype.disposeInternal = function() {
    goog.events.EventTarget.superClass_.disposeInternal.call(this), this.removeAllListeners(), this.parentEventTarget_ = null
}, goog.events.EventTarget.prototype.listen = function(e, t, o, n) {
    return this.assertInitialized_(), this.eventTargetListeners_.add(String(e), t, !1, o, n)
}, goog.events.EventTarget.prototype.listenOnce = function(e, t, o, n) {
    return this.eventTargetListeners_.add(String(e), t, !0, o, n)
}, goog.events.EventTarget.prototype.unlisten = function(e, t, o, n) {
    return this.eventTargetListeners_.remove(String(e), t, o, n)
}, goog.events.EventTarget.prototype.unlistenByKey = function(e) {
    return this.eventTargetListeners_.removeByKey(e)
}, goog.events.EventTarget.prototype.removeAllListeners = function(e) {
    return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(e) : 0
}, goog.events.EventTarget.prototype.fireListeners = function(e, t, o) {
    if (e = this.eventTargetListeners_.listeners[String(e)], !e) return !0;
    e = e.concat();
    for (var n = !0, i = 0; i < e.length; ++i) {
        var r = e[i];
        if (r && !r.removed && r.capture == t) {
            var s = r.listener,
                l = r.handler || r.src;
            r.callOnce && this.unlistenByKey(r), n = !1 !== s.call(l, o) && n
        }
    }
    return n && 0 != o.returnValue_
}, goog.events.EventTarget.prototype.getListeners = function(e, t) {
    return this.eventTargetListeners_.getListeners(String(e), t)
}, goog.events.EventTarget.prototype.getListener = function(e, t, o, n) {
    return this.eventTargetListeners_.getListener(String(e), t, o, n)
}, goog.events.EventTarget.prototype.hasListener = function(e, t) {
    var o = goog.isDef(e) ? String(e) : void 0;
    return this.eventTargetListeners_.hasListener(o, t)
}, goog.events.EventTarget.prototype.setTargetForTesting = function(e) {
    this.actualEventTarget_ = e
}, goog.events.EventTarget.prototype.assertInitialized_ = function() {
    goog.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
}, goog.events.EventTarget.dispatchEventInternal_ = function(e, t, o) {
    var n = t.type || t;
    if (goog.isString(t)) t = new goog.events.Event(t, e);
    else if (t instanceof goog.events.Event) t.target = t.target || e;
    else {
        var i = t;
        t = new goog.events.Event(n, e), goog.object.extend(t, i)
    }
    var r, i = !0;
    if (o)
        for (var s = o.length - 1; !t.propagationStopped_ && s >= 0; s--) r = t.currentTarget = o[s], i = r.fireListeners(n, !0, t) && i;
    if (t.propagationStopped_ || (r = t.currentTarget = e, i = r.fireListeners(n, !0, t) && i, t.propagationStopped_ || (i = r.fireListeners(n, !1, t) && i)), o)
        for (s = 0; !t.propagationStopped_ && s < o.length; s++) r = t.currentTarget = o[s], i = r.fireListeners(n, !1, t) && i;
    return i
}, goog.Timer = function(e, t) {
    goog.events.EventTarget.call(this), this.interval_ = e || 1, this.timerObject_ = t || goog.Timer.defaultTimerObject, this.boundTick_ = goog.bind(this.tick_, this), this.last_ = goog.now()
}, goog.inherits(goog.Timer, goog.events.EventTarget), goog.Timer.MAX_TIMEOUT_ = 2147483647, goog.Timer.INVALID_TIMEOUT_ID_ = -1, goog.Timer.prototype.enabled = !1, goog.Timer.defaultTimerObject = goog.global, goog.Timer.intervalScale = .8, goog.Timer.prototype.timer_ = null, goog.Timer.prototype.getInterval = function() {
    return this.interval_
}, goog.Timer.prototype.setInterval = function(e) {
    this.interval_ = e, this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
}, goog.Timer.prototype.tick_ = function() {
    if (this.enabled) {
        var e = goog.now() - this.last_;
        e > 0 && e < this.interval_ * goog.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - e) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now()))
    }
}, goog.Timer.prototype.dispatchTick = function() {
    this.dispatchEvent(goog.Timer.TICK)
}, goog.Timer.prototype.start = function() {
    this.enabled = !0, this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = goog.now())
}, goog.Timer.prototype.stop = function() {
    this.enabled = !1, this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
}, goog.Timer.prototype.disposeInternal = function() {
    goog.Timer.superClass_.disposeInternal.call(this), this.stop(), delete this.timerObject_
}, goog.Timer.TICK = "tick", goog.Timer.callOnce = function(e, t, o) {
    if (goog.isFunction(e)) o && (e = goog.bind(e, o));
    else {
        if (!e || "function" != typeof e.handleEvent) throw Error("Invalid listener argument");
        e = goog.bind(e.handleEvent, e)
    }
    return t > goog.Timer.MAX_TIMEOUT_ ? goog.Timer.INVALID_TIMEOUT_ID_ : goog.Timer.defaultTimerObject.setTimeout(e, t || 0)
}, goog.Timer.clear = function(e) {
    goog.Timer.defaultTimerObject.clearTimeout(e)
}, goog.Timer.promise = function(e, t) {
    var o = null;
    return new goog.Promise(function(n, i) {
        o = goog.Timer.callOnce(function() {
            n(t)
        }, e), o == goog.Timer.INVALID_TIMEOUT_ID_ && i(Error("Failed to schedule timer."))
    }).thenCatch(function(e) {
        throw goog.Timer.clear(o), e
    })
}, goog.events.EventHandler = function(e) {
    goog.Disposable.call(this), this.handler_ = e, this.keys_ = {}
}, goog.inherits(goog.events.EventHandler, goog.Disposable), goog.events.EventHandler.typeArray_ = [], goog.events.EventHandler.prototype.listen = function(e, t, o, n) {
    return this.listen_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenWithScope = function(e, t, o, n, i) {
    return this.listen_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listen_ = function(e, t, o, n, i) {
    goog.isArray(t) || (t && (goog.events.EventHandler.typeArray_[0] = t.toString()), t = goog.events.EventHandler.typeArray_);
    for (var r = 0; r < t.length; r++) {
        var s = goog.events.listen(e, t[r], o || this.handleEvent, n || !1, i || this.handler_ || this);
        if (!s) break;
        this.keys_[s.key] = s
    }
    return this
}, goog.events.EventHandler.prototype.listenOnce = function(e, t, o, n) {
    return this.listenOnce_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenOnceWithScope = function(e, t, o, n, i) {
    return this.listenOnce_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listenOnce_ = function(e, t, o, n, i) {
    if (goog.isArray(t))
        for (var r = 0; r < t.length; r++) this.listenOnce_(e, t[r], o, n, i);
    else {
        if (e = goog.events.listenOnce(e, t, o || this.handleEvent, n, i || this.handler_ || this), !e) return this;
        this.keys_[e.key] = e
    }
    return this
}, goog.events.EventHandler.prototype.listenWithWrapper = function(e, t, o, n) {
    return this.listenWithWrapper_(e, t, o, n)
}, goog.events.EventHandler.prototype.listenWithWrapperAndScope = function(e, t, o, n, i) {
    return this.listenWithWrapper_(e, t, o, n, i)
}, goog.events.EventHandler.prototype.listenWithWrapper_ = function(e, t, o, n, i) {
    return t.listen(e, o, n, i || this.handler_ || this, this), this
}, goog.events.EventHandler.prototype.getListenerCount = function() {
    var e, t = 0;
    for (e in this.keys_) Object.prototype.hasOwnProperty.call(this.keys_, e) && t++;
    return t
}, goog.events.EventHandler.prototype.unlisten = function(e, t, o, n, i) {
    if (goog.isArray(t))
        for (var r = 0; r < t.length; r++) this.unlisten(e, t[r], o, n, i);
    else(e = goog.events.getListener(e, t, o || this.handleEvent, n, i || this.handler_ || this)) && (goog.events.unlistenByKey(e), delete this.keys_[e.key]);
    return this
}, goog.events.EventHandler.prototype.unlistenWithWrapper = function(e, t, o, n, i) {
    return t.unlisten(e, o, n, i || this.handler_ || this, this), this
}, goog.events.EventHandler.prototype.removeAll = function() {
    goog.object.forEach(this.keys_, goog.events.unlistenByKey), this.keys_ = {}
}, goog.events.EventHandler.prototype.disposeInternal = function() {
    goog.events.EventHandler.superClass_.disposeInternal.call(this), this.removeAll()
}, goog.events.EventHandler.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented")
}, goog.ui = {}, goog.ui.IdGenerator = function() {}, goog.addSingletonGetter(goog.ui.IdGenerator), goog.ui.IdGenerator.prototype.nextId_ = 0, goog.ui.IdGenerator.prototype.getNextUniqueId = function() {
    return ":" + (this.nextId_++).toString(36)
}, goog.ui.Component = function(e) {
    goog.events.EventTarget.call(this), this.dom_ = e || goog.dom.getDomHelper(), this.rightToLeft_ = goog.ui.Component.defaultRightToLeft_, this.id_ = null, this.inDocument_ = !1, this.element_ = null, this.googUiComponentHandler_ = void 0, this.childIndex_ = this.children_ = this.parent_ = this.model_ = null, this.wasDecorated_ = !1
}, goog.inherits(goog.ui.Component, goog.events.EventTarget), goog.ui.Component.ALLOW_DETACHED_DECORATION = !1, goog.ui.Component.prototype.idGenerator_ = goog.ui.IdGenerator.getInstance(), goog.ui.Component.DEFAULT_BIDI_DIR = 0, goog.ui.Component.defaultRightToLeft_ = 1 == goog.ui.Component.DEFAULT_BIDI_DIR ? !1 : -1 == goog.ui.Component.DEFAULT_BIDI_DIR ? !0 : null, goog.ui.Component.EventType = {
    BEFORE_SHOW: "beforeshow",
    SHOW: "show",
    HIDE: "hide",
    DISABLE: "disable",
    ENABLE: "enable",
    HIGHLIGHT: "highlight",
    UNHIGHLIGHT: "unhighlight",
    ACTIVATE: "activate",
    DEACTIVATE: "deactivate",
    SELECT: "select",
    UNSELECT: "unselect",
    CHECK: "check",
    UNCHECK: "uncheck",
    FOCUS: "focus",
    BLUR: "blur",
    OPEN: "open",
    CLOSE: "close",
    ENTER: "enter",
    LEAVE: "leave",
    ACTION: "action",
    CHANGE: "change"
}, goog.ui.Component.Error = {
    NOT_SUPPORTED: "Method not supported",
    DECORATE_INVALID: "Invalid element to decorate",
    ALREADY_RENDERED: "Component already rendered",
    PARENT_UNABLE_TO_BE_SET: "Unable to set parent component",
    CHILD_INDEX_OUT_OF_BOUNDS: "Child component index out of bounds",
    NOT_OUR_CHILD: "Child is not in parent component",
    NOT_IN_DOCUMENT: "Operation not supported while component is not in document",
    STATE_INVALID: "Invalid component state"
}, goog.ui.Component.State = {
    ALL: 255,
    DISABLED: 1,
    HOVER: 2,
    ACTIVE: 4,
    SELECTED: 8,
    CHECKED: 16,
    FOCUSED: 32,
    OPENED: 64
}, goog.ui.Component.getStateTransitionEvent = function(e, t) {
    switch (e) {
        case goog.ui.Component.State.DISABLED:
            return t ? goog.ui.Component.EventType.DISABLE : goog.ui.Component.EventType.ENABLE;
        case goog.ui.Component.State.HOVER:
            return t ? goog.ui.Component.EventType.HIGHLIGHT : goog.ui.Component.EventType.UNHIGHLIGHT;
        case goog.ui.Component.State.ACTIVE:
            return t ? goog.ui.Component.EventType.ACTIVATE : goog.ui.Component.EventType.DEACTIVATE;
        case goog.ui.Component.State.SELECTED:
            return t ? goog.ui.Component.EventType.SELECT : goog.ui.Component.EventType.UNSELECT;
        case goog.ui.Component.State.CHECKED:
            return t ? goog.ui.Component.EventType.CHECK : goog.ui.Component.EventType.UNCHECK;
        case goog.ui.Component.State.FOCUSED:
            return t ? goog.ui.Component.EventType.FOCUS : goog.ui.Component.EventType.BLUR;
        case goog.ui.Component.State.OPENED:
            return t ? goog.ui.Component.EventType.OPEN : goog.ui.Component.EventType.CLOSE
    }
    throw Error(goog.ui.Component.Error.STATE_INVALID)
}, goog.ui.Component.setDefaultRightToLeft = function(e) {
    goog.ui.Component.defaultRightToLeft_ = e
}, goog.ui.Component.prototype.getId = function() {
    return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId())
}, goog.ui.Component.prototype.setId = function(e) {
    this.parent_ && this.parent_.childIndex_ && (goog.object.remove(this.parent_.childIndex_, this.id_), goog.object.add(this.parent_.childIndex_, e, this)), this.id_ = e
}, goog.ui.Component.prototype.getElement = function() {
    return this.element_
}, goog.ui.Component.prototype.getElementStrict = function() {
    var e = this.element_;
    return goog.asserts.assert(e, "Can not call getElementStrict before rendering/decorating."), e
}, goog.ui.Component.prototype.setElementInternal = function(e) {
    this.element_ = e
}, goog.ui.Component.prototype.getElementsByClass = function(e) {
    return this.element_ ? this.dom_.getElementsByClass(e, this.element_) : []
}, goog.ui.Component.prototype.getElementByClass = function(e) {
    return this.element_ ? this.dom_.getElementByClass(e, this.element_) : null
}, goog.ui.Component.prototype.getRequiredElementByClass = function(e) {
    var t = this.getElementByClass(e);
    return goog.asserts.assert(t, "Expected element in component with class: %s", e), t
}, goog.ui.Component.prototype.getHandler = function() {
    return this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new goog.events.EventHandler(this)), this.googUiComponentHandler_
}, goog.ui.Component.prototype.setParent = function(e) {
    if (this == e) throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    if (e && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != e) throw Error(goog.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    this.parent_ = e, goog.ui.Component.superClass_.setParentEventTarget.call(this, e)
}, goog.ui.Component.prototype.getParent = function() {
    return this.parent_
}, goog.ui.Component.prototype.setParentEventTarget = function(e) {
    if (this.parent_ && this.parent_ != e) throw Error(goog.ui.Component.Error.NOT_SUPPORTED);
    goog.ui.Component.superClass_.setParentEventTarget.call(this, e)
}, goog.ui.Component.prototype.getDomHelper = function() {
    return this.dom_
}, goog.ui.Component.prototype.isInDocument = function() {
    return this.inDocument_
}, goog.ui.Component.prototype.createDom = function() {
    this.element_ = this.dom_.createElement("div")
}, goog.ui.Component.prototype.render = function(e) {
    this.render_(e)
}, goog.ui.Component.prototype.renderBefore = function(e) {
    this.render_(e.parentNode, e)
}, goog.ui.Component.prototype.render_ = function(e, t) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.element_ || this.createDom(), e ? e.insertBefore(this.element_, t || null) : this.dom_.getDocument().body.appendChild(this.element_), this.parent_ && !this.parent_.isInDocument() || this.enterDocument()
}, goog.ui.Component.prototype.decorate = function(e) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    if (!e || !this.canDecorate(e)) throw Error(goog.ui.Component.Error.DECORATE_INVALID);
    this.wasDecorated_ = !0;
    var t = goog.dom.getOwnerDocument(e);
    this.dom_ && this.dom_.getDocument() == t || (this.dom_ = goog.dom.getDomHelper(e)), this.decorateInternal(e), goog.ui.Component.ALLOW_DETACHED_DECORATION && !goog.dom.contains(t, e) || this.enterDocument()
}, goog.ui.Component.prototype.canDecorate = function() {
    return !0
}, goog.ui.Component.prototype.wasDecorated = function() {
    return this.wasDecorated_
}, goog.ui.Component.prototype.decorateInternal = function(e) {
    this.element_ = e
}, goog.ui.Component.prototype.enterDocument = function() {
    this.inDocument_ = !0, this.forEachChild(function(e) {
        !e.isInDocument() && e.getElement() && e.enterDocument()
    })
}, goog.ui.Component.prototype.exitDocument = function() {
    this.forEachChild(function(e) {
        e.isInDocument() && e.exitDocument()
    }), this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll(), this.inDocument_ = !1
}, goog.ui.Component.prototype.disposeInternal = function() {
    this.inDocument_ && this.exitDocument(), this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_), this.forEachChild(function(e) {
        e.dispose()
    }), !this.wasDecorated_ && this.element_ && goog.dom.removeNode(this.element_), this.parent_ = this.model_ = this.element_ = this.childIndex_ = this.children_ = null, goog.ui.Component.superClass_.disposeInternal.call(this)
}, goog.ui.Component.prototype.makeId = function(e) {
    return this.getId() + "." + e
}, goog.ui.Component.prototype.makeIds = function(e) {
    var t, o = {};
    for (t in e) o[t] = this.makeId(e[t]);
    return o
}, goog.ui.Component.prototype.getModel = function() {
    return this.model_
}, goog.ui.Component.prototype.setModel = function(e) {
    this.model_ = e
}, goog.ui.Component.prototype.getFragmentFromId = function(e) {
    return e.substring(this.getId().length + 1)
}, goog.ui.Component.prototype.getElementByFragment = function(e) {
    if (!this.inDocument_) throw Error(goog.ui.Component.Error.NOT_IN_DOCUMENT);
    return this.dom_.getElement(this.makeId(e))
}, goog.ui.Component.prototype.addChild = function(e, t) {
    this.addChildAt(e, this.getChildCount(), t)
}, goog.ui.Component.prototype.addChildAt = function(e, t, o) {
    if (goog.asserts.assert(!!e, "Provided element must not be null."), e.inDocument_ && (o || !this.inDocument_)) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    if (0 > t || t > this.getChildCount()) throw Error(goog.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
    this.childIndex_ && this.children_ || (this.childIndex_ = {}, this.children_ = []), e.getParent() == this ? (goog.object.set(this.childIndex_, e.getId(), e), goog.array.remove(this.children_, e)) : goog.object.add(this.childIndex_, e.getId(), e), e.setParent(this), goog.array.insertAt(this.children_, e, t), e.inDocument_ && this.inDocument_ && e.getParent() == this ? (o = this.getContentElement(), t = o.childNodes[t] || null, t != e.getElement() && o.insertBefore(e.getElement(), t)) : o ? (this.element_ || this.createDom(), t = this.getChildAt(t + 1), e.render_(this.getContentElement(), t ? t.element_ : null)) : this.inDocument_ && !e.inDocument_ && e.element_ && e.element_.parentNode && e.element_.parentNode.nodeType == goog.dom.NodeType.ELEMENT && e.enterDocument()
}, goog.ui.Component.prototype.getContentElement = function() {
    return this.element_
}, goog.ui.Component.prototype.isRightToLeft = function() {
    return null == this.rightToLeft_ && (this.rightToLeft_ = goog.style.isRightToLeft(this.inDocument_ ? this.element_ : this.dom_.getDocument().body)), this.rightToLeft_
}, goog.ui.Component.prototype.setRightToLeft = function(e) {
    if (this.inDocument_) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.rightToLeft_ = e
}, goog.ui.Component.prototype.hasChildren = function() {
    return !!this.children_ && 0 != this.children_.length
}, goog.ui.Component.prototype.getChildCount = function() {
    return this.children_ ? this.children_.length : 0
}, goog.ui.Component.prototype.getChildIds = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t.getId())
    }), e
}, goog.ui.Component.prototype.getChild = function(e) {
    return this.childIndex_ && e ? goog.object.get(this.childIndex_, e) || null : null
}, goog.ui.Component.prototype.getChildAt = function(e) {
    return this.children_ ? this.children_[e] || null : null
}, goog.ui.Component.prototype.forEachChild = function(e, t) {
    this.children_ && goog.array.forEach(this.children_, e, t)
}, goog.ui.Component.prototype.indexOfChild = function(e) {
    return this.children_ && e ? goog.array.indexOf(this.children_, e) : -1
}, goog.ui.Component.prototype.removeChild = function(e, t) {
    if (e) {
        var o = goog.isString(e) ? e : e.getId();
        e = this.getChild(o), o && e && (goog.object.remove(this.childIndex_, o), goog.array.remove(this.children_, e), t && (e.exitDocument(), e.element_ && goog.dom.removeNode(e.element_)), e.setParent(null))
    }
    if (!e) throw Error(goog.ui.Component.Error.NOT_OUR_CHILD);
    return e
}, goog.ui.Component.prototype.removeChildAt = function(e, t) {
    return this.removeChild(this.getChildAt(e), t)
}, goog.ui.Component.prototype.removeChildren = function(e) {
    for (var t = []; this.hasChildren();) t.push(this.removeChildAt(0, e));
    return t
}, goog.a11y = {}, goog.a11y.aria = {}, goog.a11y.aria.Role = {
    ALERT: "alert",
    ALERTDIALOG: "alertdialog",
    APPLICATION: "application",
    ARTICLE: "article",
    BANNER: "banner",
    BUTTON: "button",
    CHECKBOX: "checkbox",
    COLUMNHEADER: "columnheader",
    COMBOBOX: "combobox",
    COMPLEMENTARY: "complementary",
    CONTENTINFO: "contentinfo",
    DEFINITION: "definition",
    DIALOG: "dialog",
    DIRECTORY: "directory",
    DOCUMENT: "document",
    FORM: "form",
    GRID: "grid",
    GRIDCELL: "gridcell",
    GROUP: "group",
    HEADING: "heading",
    IMG: "img",
    LINK: "link",
    LIST: "list",
    LISTBOX: "listbox",
    LISTITEM: "listitem",
    LOG: "log",
    MAIN: "main",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    MENUBAR: "menubar",
    MENU_ITEM: "menuitem",
    MENU_ITEM_CHECKBOX: "menuitemcheckbox",
    MENU_ITEM_RADIO: "menuitemradio",
    NAVIGATION: "navigation",
    NOTE: "note",
    OPTION: "option",
    PRESENTATION: "presentation",
    PROGRESSBAR: "progressbar",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    REGION: "region",
    ROW: "row",
    ROWGROUP: "rowgroup",
    ROWHEADER: "rowheader",
    SCROLLBAR: "scrollbar",
    SEARCH: "search",
    SEPARATOR: "separator",
    SLIDER: "slider",
    SPINBUTTON: "spinbutton",
    STATUS: "status",
    TAB: "tab",
    TAB_LIST: "tablist",
    TAB_PANEL: "tabpanel",
    TEXTBOX: "textbox",
    TIMER: "timer",
    TOOLBAR: "toolbar",
    TOOLTIP: "tooltip",
    TREE: "tree",
    TREEGRID: "treegrid",
    TREEITEM: "treeitem"
}, goog.a11y.aria.State = {
    ACTIVEDESCENDANT: "activedescendant",
    ATOMIC: "atomic",
    AUTOCOMPLETE: "autocomplete",
    BUSY: "busy",
    CHECKED: "checked",
    CONTROLS: "controls",
    DESCRIBEDBY: "describedby",
    DISABLED: "disabled",
    DROPEFFECT: "dropeffect",
    EXPANDED: "expanded",
    FLOWTO: "flowto",
    GRABBED: "grabbed",
    HASPOPUP: "haspopup",
    HIDDEN: "hidden",
    INVALID: "invalid",
    LABEL: "label",
    LABELLEDBY: "labelledby",
    LEVEL: "level",
    LIVE: "live",
    MULTILINE: "multiline",
    MULTISELECTABLE: "multiselectable",
    ORIENTATION: "orientation",
    OWNS: "owns",
    POSINSET: "posinset",
    PRESSED: "pressed",
    READONLY: "readonly",
    RELEVANT: "relevant",
    REQUIRED: "required",
    SELECTED: "selected",
    SETSIZE: "setsize",
    SORT: "sort",
    VALUEMAX: "valuemax",
    VALUEMIN: "valuemin",
    VALUENOW: "valuenow",
    VALUETEXT: "valuetext"
}, goog.a11y.aria.AutoCompleteValues = {
    INLINE: "inline",
    LIST: "list",
    BOTH: "both",
    NONE: "none"
}, goog.a11y.aria.DropEffectValues = {
    COPY: "copy",
    MOVE: "move",
    LINK: "link",
    EXECUTE: "execute",
    POPUP: "popup",
    NONE: "none"
}, goog.a11y.aria.LivePriority = {
    OFF: "off",
    POLITE: "polite",
    ASSERTIVE: "assertive"
}, goog.a11y.aria.OrientationValues = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal"
}, goog.a11y.aria.RelevantValues = {
    ADDITIONS: "additions",
    REMOVALS: "removals",
    TEXT: "text",
    ALL: "all"
}, goog.a11y.aria.SortValues = {
    ASCENDING: "ascending",
    DESCENDING: "descending",
    NONE: "none",
    OTHER: "other"
}, goog.a11y.aria.CheckedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
}, goog.a11y.aria.ExpandedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.GrabbedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.InvalidValues = {
    FALSE: "false",
    TRUE: "true",
    GRAMMAR: "grammar",
    SPELLING: "spelling"
}, goog.a11y.aria.PressedValues = {
    TRUE: "true",
    FALSE: "false",
    MIXED: "mixed",
    UNDEFINED: "undefined"
}, goog.a11y.aria.SelectedValues = {
    TRUE: "true",
    FALSE: "false",
    UNDEFINED: "undefined"
}, goog.a11y.aria.datatables = {}, goog.a11y.aria.datatables.getDefaultValuesMap = function() {
    return goog.a11y.aria.DefaultStateValueMap_ || (goog.a11y.aria.DefaultStateValueMap_ = goog.object.create(goog.a11y.aria.State.ATOMIC, !1, goog.a11y.aria.State.AUTOCOMPLETE, "none", goog.a11y.aria.State.DROPEFFECT, "none", goog.a11y.aria.State.HASPOPUP, !1, goog.a11y.aria.State.LIVE, "off", goog.a11y.aria.State.MULTILINE, !1, goog.a11y.aria.State.MULTISELECTABLE, !1, goog.a11y.aria.State.ORIENTATION, "vertical", goog.a11y.aria.State.READONLY, !1, goog.a11y.aria.State.RELEVANT, "additions text", goog.a11y.aria.State.REQUIRED, !1, goog.a11y.aria.State.SORT, "none", goog.a11y.aria.State.BUSY, !1, goog.a11y.aria.State.DISABLED, !1, goog.a11y.aria.State.HIDDEN, !1, goog.a11y.aria.State.INVALID, "false")), goog.a11y.aria.DefaultStateValueMap_
}, goog.a11y.aria.ARIA_PREFIX_ = "aria-", goog.a11y.aria.ROLE_ATTRIBUTE_ = "role", goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = [goog.dom.TagName.A, goog.dom.TagName.AREA, goog.dom.TagName.BUTTON, goog.dom.TagName.HEAD, goog.dom.TagName.INPUT, goog.dom.TagName.LINK, goog.dom.TagName.MENU, goog.dom.TagName.META, goog.dom.TagName.OPTGROUP, goog.dom.TagName.OPTION, goog.dom.TagName.PROGRESS, goog.dom.TagName.STYLE, goog.dom.TagName.SELECT, goog.dom.TagName.SOURCE, goog.dom.TagName.TEXTAREA, goog.dom.TagName.TITLE, goog.dom.TagName.TRACK], goog.a11y.aria.setRole = function(e, t) {
    t ? (goog.asserts.ENABLE_ASSERTS && goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.Role, t), "No such ARIA role " + t), e.setAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_, t)) : goog.a11y.aria.removeRole(e)
}, goog.a11y.aria.getRole = function(e) {
    return e.getAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_) || null
}, goog.a11y.aria.removeRole = function(e) {
    e.removeAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_)
}, goog.a11y.aria.setState = function(e, t, o) {
    goog.isArray(o) && (o = o.join(" "));
    var n = goog.a11y.aria.getAriaAttributeName_(t);
    "" === o || void 0 == o ? (o = goog.a11y.aria.datatables.getDefaultValuesMap(), t in o ? e.setAttribute(n, o[t]) : e.removeAttribute(n)) : e.setAttribute(n, o)
}, goog.a11y.aria.toggleState = function(e, t) {
    var o = goog.a11y.aria.getState(e, t);
    goog.string.isEmptyOrWhitespace(goog.string.makeSafe(o)) || "true" == o || "false" == o ? goog.a11y.aria.setState(e, t, "true" == o ? "false" : "true") : goog.a11y.aria.removeState(e, t)
}, goog.a11y.aria.removeState = function(e, t) {
    e.removeAttribute(goog.a11y.aria.getAriaAttributeName_(t))
}, goog.a11y.aria.getState = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return null == o || void 0 == o ? "" : String(o)
}, goog.a11y.aria.getActiveDescendant = function(e) {
    var t = goog.a11y.aria.getState(e, goog.a11y.aria.State.ACTIVEDESCENDANT);
    return goog.dom.getOwnerDocument(e).getElementById(t)
}, goog.a11y.aria.setActiveDescendant = function(e, t) {
    var o = "";
    t && (o = t.id, goog.asserts.assert(o, "The active element should have an id.")), goog.a11y.aria.setState(e, goog.a11y.aria.State.ACTIVEDESCENDANT, o)
}, goog.a11y.aria.getLabel = function(e) {
    return goog.a11y.aria.getState(e, goog.a11y.aria.State.LABEL)
}, goog.a11y.aria.setLabel = function(e, t) {
    goog.a11y.aria.setState(e, goog.a11y.aria.State.LABEL, t)
}, goog.a11y.aria.assertRoleIsSetInternalUtil = function(e, t) {
    if (!goog.array.contains(goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_, e.tagName)) {
        var o = goog.a11y.aria.getRole(e);
        goog.asserts.assert(null != o, "The element ARIA role cannot be null."), goog.asserts.assert(goog.array.contains(t, o), 'Non existing or incorrect role set for element.The role set is "' + o + '". The role should be any of "' + t + '". Check the ARIA specification for more details http://www.w3.org/TR/wai-aria/roles.')
    }
}, goog.a11y.aria.getStateBoolean = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert(goog.isBoolean(o) || null == o || "true" == o || "false" == o), null == o ? o : goog.isBoolean(o) ? o : "true" == o
}, goog.a11y.aria.getStateNumber = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert(!(null != o && isNaN(Number(o)) || goog.isBoolean(o))), null == o ? null : Number(o)
}, goog.a11y.aria.getStateString = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.asserts.assert((null == o || goog.isString(o)) && isNaN(Number(o)) && "true" != o && "false" != o), null == o ? null : o
}, goog.a11y.aria.getStringArrayStateInternalUtil = function(e, t) {
    var o = e.getAttribute(goog.a11y.aria.getAriaAttributeName_(t));
    return goog.a11y.aria.splitStringOnWhitespace_(o)
}, goog.a11y.aria.splitStringOnWhitespace_ = function(e) {
    return e ? e.split(/\s+/) : []
}, goog.a11y.aria.getAriaAttributeName_ = function(e) {
    return goog.asserts.ENABLE_ASSERTS && (goog.asserts.assert(e, "ARIA attribute cannot be empty."), goog.asserts.assert(goog.object.containsValue(goog.a11y.aria.State, e), "No such ARIA attribute " + e)), goog.a11y.aria.ARIA_PREFIX_ + e
}, goog.events.KeyCodes = {
    WIN_KEY_FF_LINUX: 0,
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    FF_SEMICOLON: 59,
    FF_EQUALS: 61,
    FF_DASH: 173,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLL_LOCK: 145,
    FIRST_MEDIA_KEY: 166,
    LAST_MEDIA_KEY: 183,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    TILDE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    MAC_WK_CMD_LEFT: 91,
    MAC_WK_CMD_RIGHT: 93,
    WIN_IME: 229,
    VK_NONAME: 252,
    PHANTOM: 255
}, goog.events.KeyCodes.isTextModifyingKeyEvent = function(e) {
    if (e.altKey && !e.ctrlKey || e.metaKey || e.keyCode >= goog.events.KeyCodes.F1 && e.keyCode <= goog.events.KeyCodes.F12) return !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.ALT:
        case goog.events.KeyCodes.CAPS_LOCK:
        case goog.events.KeyCodes.CONTEXT_MENU:
        case goog.events.KeyCodes.CTRL:
        case goog.events.KeyCodes.DOWN:
        case goog.events.KeyCodes.END:
        case goog.events.KeyCodes.ESC:
        case goog.events.KeyCodes.HOME:
        case goog.events.KeyCodes.INSERT:
        case goog.events.KeyCodes.LEFT:
        case goog.events.KeyCodes.MAC_FF_META:
        case goog.events.KeyCodes.META:
        case goog.events.KeyCodes.NUMLOCK:
        case goog.events.KeyCodes.NUM_CENTER:
        case goog.events.KeyCodes.PAGE_DOWN:
        case goog.events.KeyCodes.PAGE_UP:
        case goog.events.KeyCodes.PAUSE:
        case goog.events.KeyCodes.PHANTOM:
        case goog.events.KeyCodes.PRINT_SCREEN:
        case goog.events.KeyCodes.RIGHT:
        case goog.events.KeyCodes.SCROLL_LOCK:
        case goog.events.KeyCodes.SHIFT:
        case goog.events.KeyCodes.UP:
        case goog.events.KeyCodes.VK_NONAME:
        case goog.events.KeyCodes.WIN_KEY:
        case goog.events.KeyCodes.WIN_KEY_RIGHT:
            return !1;
        case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
            return !goog.userAgent.GECKO;
        default:
            return e.keyCode < goog.events.KeyCodes.FIRST_MEDIA_KEY || e.keyCode > goog.events.KeyCodes.LAST_MEDIA_KEY
    }
}, goog.events.KeyCodes.firesKeyPressEvent = function(e, t, o, n, i) {
    if (!(goog.userAgent.IE || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("525"))) return !0;
    if (goog.userAgent.MAC && i) return goog.events.KeyCodes.isCharacterKey(e);
    if (i && !n) return !1;
    if (goog.isNumber(t) && (t = goog.events.KeyCodes.normalizeKeyCode(t)), !o && (t == goog.events.KeyCodes.CTRL || t == goog.events.KeyCodes.ALT || goog.userAgent.MAC && t == goog.events.KeyCodes.META)) return !1;
    if (goog.userAgent.WEBKIT && n && o) switch (e) {
        case goog.events.KeyCodes.BACKSLASH:
        case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
        case goog.events.KeyCodes.TILDE:
        case goog.events.KeyCodes.SEMICOLON:
        case goog.events.KeyCodes.DASH:
        case goog.events.KeyCodes.EQUALS:
        case goog.events.KeyCodes.COMMA:
        case goog.events.KeyCodes.PERIOD:
        case goog.events.KeyCodes.SLASH:
        case goog.events.KeyCodes.APOSTROPHE:
        case goog.events.KeyCodes.SINGLE_QUOTE:
            return !1
    }
    if (goog.userAgent.IE && n && t == e) return !1;
    switch (e) {
        case goog.events.KeyCodes.ENTER:
            return !0;
        case goog.events.KeyCodes.ESC:
            return !goog.userAgent.WEBKIT
    }
    return goog.events.KeyCodes.isCharacterKey(e)
}, goog.events.KeyCodes.isCharacterKey = function(e) {
    if (e >= goog.events.KeyCodes.ZERO && e <= goog.events.KeyCodes.NINE || e >= goog.events.KeyCodes.NUM_ZERO && e <= goog.events.KeyCodes.NUM_MULTIPLY || e >= goog.events.KeyCodes.A && e <= goog.events.KeyCodes.Z || goog.userAgent.WEBKIT && 0 == e) return !0;
    switch (e) {
        case goog.events.KeyCodes.SPACE:
        case goog.events.KeyCodes.QUESTION_MARK:
        case goog.events.KeyCodes.NUM_PLUS:
        case goog.events.KeyCodes.NUM_MINUS:
        case goog.events.KeyCodes.NUM_PERIOD:
        case goog.events.KeyCodes.NUM_DIVISION:
        case goog.events.KeyCodes.SEMICOLON:
        case goog.events.KeyCodes.FF_SEMICOLON:
        case goog.events.KeyCodes.DASH:
        case goog.events.KeyCodes.EQUALS:
        case goog.events.KeyCodes.FF_EQUALS:
        case goog.events.KeyCodes.COMMA:
        case goog.events.KeyCodes.PERIOD:
        case goog.events.KeyCodes.SLASH:
        case goog.events.KeyCodes.APOSTROPHE:
        case goog.events.KeyCodes.SINGLE_QUOTE:
        case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case goog.events.KeyCodes.BACKSLASH:
        case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
            return !0;
        default:
            return !1
    }
}, goog.events.KeyCodes.normalizeKeyCode = function(e) {
    return goog.userAgent.GECKO ? goog.events.KeyCodes.normalizeGeckoKeyCode(e) : goog.userAgent.MAC && goog.userAgent.WEBKIT ? goog.events.KeyCodes.normalizeMacWebKitKeyCode(e) : e
}, goog.events.KeyCodes.normalizeGeckoKeyCode = function(e) {
    switch (e) {
        case goog.events.KeyCodes.FF_EQUALS:
            return goog.events.KeyCodes.EQUALS;
        case goog.events.KeyCodes.FF_SEMICOLON:
            return goog.events.KeyCodes.SEMICOLON;
        case goog.events.KeyCodes.FF_DASH:
            return goog.events.KeyCodes.DASH;
        case goog.events.KeyCodes.MAC_FF_META:
            return goog.events.KeyCodes.META;
        case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
            return goog.events.KeyCodes.WIN_KEY;
        default:
            return e
    }
}, goog.events.KeyCodes.normalizeMacWebKitKeyCode = function(e) {
    switch (e) {
        case goog.events.KeyCodes.MAC_WK_CMD_RIGHT:
            return goog.events.KeyCodes.META;
        default:
            return e
    }
}, goog.events.KeyHandler = function(e, t) {
    goog.events.EventTarget.call(this), e && this.attach(e, t)
}, goog.inherits(goog.events.KeyHandler, goog.events.EventTarget), goog.events.KeyHandler.prototype.element_ = null, goog.events.KeyHandler.prototype.keyPressKey_ = null, goog.events.KeyHandler.prototype.keyDownKey_ = null, goog.events.KeyHandler.prototype.keyUpKey_ = null, goog.events.KeyHandler.prototype.lastKey_ = -1, goog.events.KeyHandler.prototype.keyCode_ = -1, goog.events.KeyHandler.prototype.altKey_ = !1, goog.events.KeyHandler.EventType = {
    KEY: "key"
}, goog.events.KeyHandler.safariKey_ = {
    3: goog.events.KeyCodes.ENTER,
    12: goog.events.KeyCodes.NUMLOCK,
    63232: goog.events.KeyCodes.UP,
    63233: goog.events.KeyCodes.DOWN,
    63234: goog.events.KeyCodes.LEFT,
    63235: goog.events.KeyCodes.RIGHT,
    63236: goog.events.KeyCodes.F1,
    63237: goog.events.KeyCodes.F2,
    63238: goog.events.KeyCodes.F3,
    63239: goog.events.KeyCodes.F4,
    63240: goog.events.KeyCodes.F5,
    63241: goog.events.KeyCodes.F6,
    63242: goog.events.KeyCodes.F7,
    63243: goog.events.KeyCodes.F8,
    63244: goog.events.KeyCodes.F9,
    63245: goog.events.KeyCodes.F10,
    63246: goog.events.KeyCodes.F11,
    63247: goog.events.KeyCodes.F12,
    63248: goog.events.KeyCodes.PRINT_SCREEN,
    63272: goog.events.KeyCodes.DELETE,
    63273: goog.events.KeyCodes.HOME,
    63275: goog.events.KeyCodes.END,
    63276: goog.events.KeyCodes.PAGE_UP,
    63277: goog.events.KeyCodes.PAGE_DOWN,
    63289: goog.events.KeyCodes.NUMLOCK,
    63302: goog.events.KeyCodes.INSERT
}, goog.events.KeyHandler.keyIdentifier_ = {
    Up: goog.events.KeyCodes.UP,
    Down: goog.events.KeyCodes.DOWN,
    Left: goog.events.KeyCodes.LEFT,
    Right: goog.events.KeyCodes.RIGHT,
    Enter: goog.events.KeyCodes.ENTER,
    F1: goog.events.KeyCodes.F1,
    F2: goog.events.KeyCodes.F2,
    F3: goog.events.KeyCodes.F3,
    F4: goog.events.KeyCodes.F4,
    F5: goog.events.KeyCodes.F5,
    F6: goog.events.KeyCodes.F6,
    F7: goog.events.KeyCodes.F7,
    F8: goog.events.KeyCodes.F8,
    F9: goog.events.KeyCodes.F9,
    F10: goog.events.KeyCodes.F10,
    F11: goog.events.KeyCodes.F11,
    F12: goog.events.KeyCodes.F12,
    "U+007F": goog.events.KeyCodes.DELETE,
    Home: goog.events.KeyCodes.HOME,
    End: goog.events.KeyCodes.END,
    PageUp: goog.events.KeyCodes.PAGE_UP,
    PageDown: goog.events.KeyCodes.PAGE_DOWN,
    Insert: goog.events.KeyCodes.INSERT
}, goog.events.KeyHandler.USES_KEYDOWN_ = goog.userAgent.IE || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("525"), goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ = goog.userAgent.MAC && goog.userAgent.GECKO, goog.events.KeyHandler.prototype.handleKeyDown_ = function(e) {
    goog.userAgent.WEBKIT && (this.lastKey_ == goog.events.KeyCodes.CTRL && !e.ctrlKey || this.lastKey_ == goog.events.KeyCodes.ALT && !e.altKey || goog.userAgent.MAC && this.lastKey_ == goog.events.KeyCodes.META && !e.metaKey) && (this.keyCode_ = this.lastKey_ = -1), -1 == this.lastKey_ && (e.ctrlKey && e.keyCode != goog.events.KeyCodes.CTRL ? this.lastKey_ = goog.events.KeyCodes.CTRL : e.altKey && e.keyCode != goog.events.KeyCodes.ALT ? this.lastKey_ = goog.events.KeyCodes.ALT : e.metaKey && e.keyCode != goog.events.KeyCodes.META && (this.lastKey_ = goog.events.KeyCodes.META)), goog.events.KeyHandler.USES_KEYDOWN_ && !goog.events.KeyCodes.firesKeyPressEvent(e.keyCode, this.lastKey_, e.shiftKey, e.ctrlKey, e.altKey) ? this.handleEvent(e) : (this.keyCode_ = goog.events.KeyCodes.normalizeKeyCode(e.keyCode), goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (this.altKey_ = e.altKey))
}, goog.events.KeyHandler.prototype.resetState = function() {
    this.keyCode_ = this.lastKey_ = -1
}, goog.events.KeyHandler.prototype.handleKeyup_ = function(e) {
    this.resetState(), this.altKey_ = e.altKey
}, goog.events.KeyHandler.prototype.handleEvent = function(e) {
    var t, o, n = e.getBrowserEvent(),
        i = n.altKey;
    goog.userAgent.IE && e.type == goog.events.EventType.KEYPRESS ? (t = this.keyCode_, o = t != goog.events.KeyCodes.ENTER && t != goog.events.KeyCodes.ESC ? n.keyCode : 0) : goog.userAgent.WEBKIT && e.type == goog.events.EventType.KEYPRESS ? (t = this.keyCode_, o = 0 <= n.charCode && 63232 > n.charCode && goog.events.KeyCodes.isCharacterKey(t) ? n.charCode : 0) : goog.userAgent.OPERA ? (t = this.keyCode_, o = goog.events.KeyCodes.isCharacterKey(t) ? n.keyCode : 0) : (t = n.keyCode || this.keyCode_, o = n.charCode || 0, goog.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (i = this.altKey_), goog.userAgent.MAC && o == goog.events.KeyCodes.QUESTION_MARK && t == goog.events.KeyCodes.WIN_KEY && (t = goog.events.KeyCodes.SLASH));
    var r = t = goog.events.KeyCodes.normalizeKeyCode(t),
        s = n.keyIdentifier;
    t ? t >= 63232 && t in goog.events.KeyHandler.safariKey_ ? r = goog.events.KeyHandler.safariKey_[t] : 25 == t && e.shiftKey && (r = 9) : s && s in goog.events.KeyHandler.keyIdentifier_ && (r = goog.events.KeyHandler.keyIdentifier_[s]), e = r == this.lastKey_, this.lastKey_ = r, n = new goog.events.KeyEvent(r, o, e, n), n.altKey = i, this.dispatchEvent(n)
}, goog.events.KeyHandler.prototype.getElement = function() {
    return this.element_
}, goog.events.KeyHandler.prototype.attach = function(e, t) {
    this.keyUpKey_ && this.detach(), this.element_ = e, this.keyPressKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYPRESS, this, t), this.keyDownKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYDOWN, this.handleKeyDown_, t, this), this.keyUpKey_ = goog.events.listen(this.element_, goog.events.EventType.KEYUP, this.handleKeyup_, t, this)
}, goog.events.KeyHandler.prototype.detach = function() {
    this.keyPressKey_ && (goog.events.unlistenByKey(this.keyPressKey_), goog.events.unlistenByKey(this.keyDownKey_), goog.events.unlistenByKey(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null), this.element_ = null, this.keyCode_ = this.lastKey_ = -1
}, goog.events.KeyHandler.prototype.disposeInternal = function() {
    goog.events.KeyHandler.superClass_.disposeInternal.call(this), this.detach()
}, goog.events.KeyEvent = function(e, t, o, n) {
    goog.events.BrowserEvent.call(this, n), this.type = goog.events.KeyHandler.EventType.KEY, this.keyCode = e, this.charCode = t, this.repeat = o
}, goog.inherits(goog.events.KeyEvent, goog.events.BrowserEvent), goog.dom.classlist = {}, goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = !1, goog.dom.classlist.get = function(e) {
    return goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList : (e = e.className, goog.isString(e) && e.match(/\S+/g) || [])
}, goog.dom.classlist.set = function(e, t) {
    e.className = t
}, goog.dom.classlist.contains = function(e, t) {
    return goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.contains(t) : goog.array.contains(goog.dom.classlist.get(e), t)
}, goog.dom.classlist.add = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.add(t) : goog.dom.classlist.contains(e, t) || (e.className += 0 < e.className.length ? " " + t : t)
}, goog.dom.classlist.addAll = function(e, t) {
    if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList) goog.array.forEach(t, function(t) {
        goog.dom.classlist.add(e, t)
    });
    else {
        var o = {};
        goog.array.forEach(goog.dom.classlist.get(e), function(e) {
            o[e] = !0
        }), goog.array.forEach(t, function(e) {
            o[e] = !0
        }), e.className = "";
        for (var n in o) e.className += 0 < e.className.length ? " " + n : n
    }
}, goog.dom.classlist.remove = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? e.classList.remove(t) : goog.dom.classlist.contains(e, t) && (e.className = goog.array.filter(goog.dom.classlist.get(e), function(e) {
        return e != t
    }).join(" "))
}, goog.dom.classlist.removeAll = function(e, t) {
    goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || e.classList ? goog.array.forEach(t, function(t) {
        goog.dom.classlist.remove(e, t)
    }) : e.className = goog.array.filter(goog.dom.classlist.get(e), function(e) {
        return !goog.array.contains(t, e)
    }).join(" ")
}, goog.dom.classlist.enable = function(e, t, o) {
    o ? goog.dom.classlist.add(e, t) : goog.dom.classlist.remove(e, t)
}, goog.dom.classlist.enableAll = function(e, t, o) {
    (o ? goog.dom.classlist.addAll : goog.dom.classlist.removeAll)(e, t)
}, goog.dom.classlist.swap = function(e, t, o) {
    return goog.dom.classlist.contains(e, t) ? (goog.dom.classlist.remove(e, t), goog.dom.classlist.add(e, o), !0) : !1
}, goog.dom.classlist.toggle = function(e, t) {
    var o = !goog.dom.classlist.contains(e, t);
    return goog.dom.classlist.enable(e, t, o), o
}, goog.dom.classlist.addRemove = function(e, t, o) {
    goog.dom.classlist.remove(e, t), goog.dom.classlist.add(e, o)
}, goog.ui.registry = {}, goog.ui.registry.getDefaultRenderer = function(e) {
    for (var t; e && (t = goog.getUid(e), !(t = goog.ui.registry.defaultRenderers_[t]));) e = e.superClass_ ? e.superClass_.constructor : null;
    return t ? goog.isFunction(t.getInstance) ? t.getInstance() : new t : null
}, goog.ui.registry.setDefaultRenderer = function(e, t) {
    if (!goog.isFunction(e)) throw Error("Invalid component class " + e);
    if (!goog.isFunction(t)) throw Error("Invalid renderer class " + t);
    var o = goog.getUid(e);
    goog.ui.registry.defaultRenderers_[o] = t
}, goog.ui.registry.getDecoratorByClassName = function(e) {
    return e in goog.ui.registry.decoratorFunctions_ ? goog.ui.registry.decoratorFunctions_[e]() : null
}, goog.ui.registry.setDecoratorByClassName = function(e, t) {
    if (!e) throw Error("Invalid class name " + e);
    if (!goog.isFunction(t)) throw Error("Invalid decorator function " + t);
    goog.ui.registry.decoratorFunctions_[e] = t
}, goog.ui.registry.getDecorator = function(e) {
    goog.asserts.assert(e);
    for (var t = goog.dom.classlist.get(e), o = 0, n = t.length; n > o; o++)
        if (e = goog.ui.registry.getDecoratorByClassName(t[o])) return e;
    return null
}, goog.ui.registry.reset = function() {
    goog.ui.registry.defaultRenderers_ = {}, goog.ui.registry.decoratorFunctions_ = {}
}, goog.ui.registry.defaultRenderers_ = {}, goog.ui.registry.decoratorFunctions_ = {}, goog.ui.ContainerRenderer = function(e) {
    this.ariaRole_ = e
}, goog.addSingletonGetter(goog.ui.ContainerRenderer), goog.ui.ContainerRenderer.getCustomRenderer = function(e, t) {
    var o = new e;
    return o.getCssClass = function() {
        return t
    }, o
}, goog.ui.ContainerRenderer.CSS_CLASS = "goog-container", goog.ui.ContainerRenderer.prototype.getAriaRole = function() {
    return this.ariaRole_
}, goog.ui.ContainerRenderer.prototype.enableTabIndex = function(e, t) {
    e && (e.tabIndex = t ? 0 : -1)
}, goog.ui.ContainerRenderer.prototype.createDom = function(e) {
    return e.getDomHelper().createDom("div", this.getClassNames(e).join(" "))
}, goog.ui.ContainerRenderer.prototype.getContentElement = function(e) {
    return e
}, goog.ui.ContainerRenderer.prototype.canDecorate = function(e) {
    return "DIV" == e.tagName
}, goog.ui.ContainerRenderer.prototype.decorate = function(e, t) {
    t.id && e.setId(t.id);
    var o = this.getCssClass(),
        n = !1,
        i = goog.dom.classlist.get(t);
    return i && goog.array.forEach(i, function(t) {
        t == o ? n = !0 : t && this.setStateFromClassName(e, t, o)
    }, this), n || goog.dom.classlist.add(t, o), this.decorateChildren(e, this.getContentElement(t)), t
}, goog.ui.ContainerRenderer.prototype.setStateFromClassName = function(e, t, o) {
    t == o + "-disabled" ? e.setEnabled(!1) : t == o + "-horizontal" ? e.setOrientation(goog.ui.Container.Orientation.HORIZONTAL) : t == o + "-vertical" && e.setOrientation(goog.ui.Container.Orientation.VERTICAL)
}, goog.ui.ContainerRenderer.prototype.decorateChildren = function(e, t, o) {
    if (t) {
        o = o || t.firstChild;
        for (var n; o && o.parentNode == t;) {
            if (n = o.nextSibling, o.nodeType == goog.dom.NodeType.ELEMENT) {
                var i = this.getDecoratorForChild(o);
                i && (i.setElementInternal(o), e.isEnabled() || i.setEnabled(!1), e.addChild(i), i.decorate(o))
            } else o.nodeValue && "" != goog.string.trim(o.nodeValue) || t.removeChild(o);
            o = n
        }
    }
}, goog.ui.ContainerRenderer.prototype.getDecoratorForChild = function(e) {
    return goog.ui.registry.getDecorator(e)
}, goog.ui.ContainerRenderer.prototype.initializeDom = function(e) {
    e = e.getElement(), goog.asserts.assert(e, "The container DOM element cannot be null."), goog.style.setUnselectable(e, !0, goog.userAgent.GECKO), goog.userAgent.IE && (e.hideFocus = !0);
    var t = this.getAriaRole();
    t && goog.a11y.aria.setRole(e, t)
}, goog.ui.ContainerRenderer.prototype.getKeyEventTarget = function(e) {
    return e.getElement()
}, goog.ui.ContainerRenderer.prototype.getCssClass = function() {
    return goog.ui.ContainerRenderer.CSS_CLASS
}, goog.ui.ContainerRenderer.prototype.getClassNames = function(e) {
    var t = this.getCssClass(),
        o = e.getOrientation() == goog.ui.Container.Orientation.HORIZONTAL,
        o = [t, o ? t + "-horizontal" : t + "-vertical"];
    return e.isEnabled() || o.push(t + "-disabled"), o
}, goog.ui.ContainerRenderer.prototype.getDefaultOrientation = function() {
    return goog.ui.Container.Orientation.VERTICAL
}, goog.ui.ControlRenderer = function() {}, goog.addSingletonGetter(goog.ui.ControlRenderer), goog.tagUnsealableClass(goog.ui.ControlRenderer), goog.ui.ControlRenderer.getCustomRenderer = function(e, t) {
    var o = new e;
    return o.getCssClass = function() {
        return t
    }, o
}, goog.ui.ControlRenderer.CSS_CLASS = "goog-control", goog.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [], goog.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_ = goog.object.create(goog.a11y.aria.Role.BUTTON, goog.a11y.aria.State.PRESSED, goog.a11y.aria.Role.CHECKBOX, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.MENU_ITEM, goog.a11y.aria.State.SELECTED, goog.a11y.aria.Role.MENU_ITEM_CHECKBOX, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.MENU_ITEM_RADIO, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.RADIO, goog.a11y.aria.State.CHECKED, goog.a11y.aria.Role.TAB, goog.a11y.aria.State.SELECTED, goog.a11y.aria.Role.TREEITEM, goog.a11y.aria.State.SELECTED), goog.ui.ControlRenderer.prototype.getAriaRole = function() {}, goog.ui.ControlRenderer.prototype.createDom = function(e) {
    return e.getDomHelper().createDom("div", this.getClassNames(e).join(" "), e.getContent())
}, goog.ui.ControlRenderer.prototype.getContentElement = function(e) {
    return e
}, goog.ui.ControlRenderer.prototype.enableClassName = function(e, t, o) {
    if (e = e.getElement ? e.getElement() : e) {
        var n = [t];
        goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7") && (n = this.getAppliedCombinedClassNames_(goog.dom.classlist.get(e), t), n.push(t)), goog.dom.classlist.enableAll(e, n, o)
    }
}, goog.ui.ControlRenderer.prototype.enableExtraClassName = function(e, t, o) {
    this.enableClassName(e, t, o)
}, goog.ui.ControlRenderer.prototype.canDecorate = function() {
    return !0
}, goog.ui.ControlRenderer.prototype.decorate = function(e, t) {
    t.id && e.setId(t.id);
    var o = this.getContentElement(t);
    o && o.firstChild ? e.setContentInternal(o.firstChild.nextSibling ? goog.array.clone(o.childNodes) : o.firstChild) : e.setContentInternal(null);
    var n = 0,
        i = this.getCssClass(),
        r = this.getStructuralCssClass(),
        s = !1,
        l = !1,
        a = !1,
        c = goog.array.toArray(goog.dom.classlist.get(t));
    goog.array.forEach(c, function(e) {
        s || e != i ? l || e != r ? n |= this.getStateFromClass(e) : l = !0 : (s = !0, r == i && (l = !0)), this.getStateFromClass(e) == goog.ui.Component.State.DISABLED && (goog.asserts.assertElement(o), goog.dom.isFocusableTabIndex(o) && goog.dom.setFocusableTabIndex(o, !1))
    }, this), e.setStateInternal(n), s || (c.push(i), r == i && (l = !0)), l || c.push(r);
    var g = e.getExtraClassNames();
    if (g && c.push.apply(c, g), goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7")) {
        var u = this.getAppliedCombinedClassNames_(c);
        0 < u.length && (c.push.apply(c, u), a = !0)
    }
    return s && l && !g && !a || goog.dom.classlist.set(t, c.join(" ")), t
}, goog.ui.ControlRenderer.prototype.initializeDom = function(e) {
    e.isRightToLeft() && this.setRightToLeft(e.getElement(), !0), e.isEnabled() && this.setFocusable(e, e.isVisible())
}, goog.ui.ControlRenderer.prototype.setAriaRole = function(e, t) {
    var o = t || this.getAriaRole();
    if (o) {
        goog.asserts.assert(e, "The element passed as a first parameter cannot be null.");
        var n = goog.a11y.aria.getRole(e);
        o != n && goog.a11y.aria.setRole(e, o)
    }
}, goog.ui.ControlRenderer.prototype.setAriaStates = function(e, t) {
    goog.asserts.assert(e), goog.asserts.assert(t);
    var o = e.getAriaLabel();
    goog.isDefAndNotNull(o) && this.setAriaLabel(t, o), e.isVisible() || goog.a11y.aria.setState(t, goog.a11y.aria.State.HIDDEN, !e.isVisible()), e.isEnabled() || this.updateAriaState(t, goog.ui.Component.State.DISABLED, !e.isEnabled()), e.isSupportedState(goog.ui.Component.State.SELECTED) && this.updateAriaState(t, goog.ui.Component.State.SELECTED, e.isSelected()), e.isSupportedState(goog.ui.Component.State.CHECKED) && this.updateAriaState(t, goog.ui.Component.State.CHECKED, e.isChecked()), e.isSupportedState(goog.ui.Component.State.OPENED) && this.updateAriaState(t, goog.ui.Component.State.OPENED, e.isOpen())
}, goog.ui.ControlRenderer.prototype.setAriaLabel = function(e, t) {
    goog.a11y.aria.setLabel(e, t)
}, goog.ui.ControlRenderer.prototype.setAllowTextSelection = function(e, t) {
    goog.style.setUnselectable(e, !t, !goog.userAgent.IE && !goog.userAgent.OPERA)
}, goog.ui.ControlRenderer.prototype.setRightToLeft = function(e, t) {
    this.enableClassName(e, this.getStructuralCssClass() + "-rtl", t)
}, goog.ui.ControlRenderer.prototype.isFocusable = function(e) {
    var t;
    return e.isSupportedState(goog.ui.Component.State.FOCUSED) && (t = e.getKeyEventTarget()) ? goog.dom.isFocusableTabIndex(t) : !1
}, goog.ui.ControlRenderer.prototype.setFocusable = function(e, t) {
    var o;
    if (e.isSupportedState(goog.ui.Component.State.FOCUSED) && (o = e.getKeyEventTarget())) {
        if (!t && e.isFocused()) {
            try {
                o.blur()
            } catch (n) {}
            e.isFocused() && e.handleBlur(null)
        }
        goog.dom.isFocusableTabIndex(o) != t && goog.dom.setFocusableTabIndex(o, t)
    }
}, goog.ui.ControlRenderer.prototype.setVisible = function(e, t) {
    goog.style.setElementShown(e, t), e && goog.a11y.aria.setState(e, goog.a11y.aria.State.HIDDEN, !t)
}, goog.ui.ControlRenderer.prototype.setState = function(e, t, o) {
    var n = e.getElement();
    if (n) {
        var i = this.getClassForState(t);
        i && this.enableClassName(e, i, o), this.updateAriaState(n, t, o)
    }
}, goog.ui.ControlRenderer.prototype.updateAriaState = function(e, t, o) {
    goog.ui.ControlRenderer.ariaAttributeMap_ || (goog.ui.ControlRenderer.ariaAttributeMap_ = goog.object.create(goog.ui.Component.State.DISABLED, goog.a11y.aria.State.DISABLED, goog.ui.Component.State.SELECTED, goog.a11y.aria.State.SELECTED, goog.ui.Component.State.CHECKED, goog.a11y.aria.State.CHECKED, goog.ui.Component.State.OPENED, goog.a11y.aria.State.EXPANDED)), goog.asserts.assert(e, "The element passed as a first parameter cannot be null."), (t = goog.ui.ControlRenderer.getAriaStateForAriaRole_(e, goog.ui.ControlRenderer.ariaAttributeMap_[t])) && goog.a11y.aria.setState(e, t, o)
}, goog.ui.ControlRenderer.getAriaStateForAriaRole_ = function(e, t) {
    var o = goog.a11y.aria.getRole(e);
    return o ? (o = goog.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_[o] || t, goog.ui.ControlRenderer.isAriaState_(t) ? o : t) : t
}, goog.ui.ControlRenderer.isAriaState_ = function(e) {
    return e == goog.a11y.aria.State.CHECKED || e == goog.a11y.aria.State.SELECTED
}, goog.ui.ControlRenderer.prototype.setContent = function(e, t) {
    var o = this.getContentElement(e);
    if (o && (goog.dom.removeChildren(o), t))
        if (goog.isString(t)) goog.dom.setTextContent(o, t);
        else {
            var n = function(e) {
                if (e) {
                    var t = goog.dom.getOwnerDocument(o);
                    o.appendChild(goog.isString(e) ? t.createTextNode(e) : e)
                }
            };
            goog.isArray(t) ? goog.array.forEach(t, n) : !goog.isArrayLike(t) || "nodeType" in t ? n(t) : goog.array.forEach(goog.array.clone(t), n)
        }
}, goog.ui.ControlRenderer.prototype.getKeyEventTarget = function(e) {
    return e.getElement()
}, goog.ui.ControlRenderer.prototype.getCssClass = function() {
    return goog.ui.ControlRenderer.CSS_CLASS
}, goog.ui.ControlRenderer.prototype.getIe6ClassCombinations = function() {
    return []
}, goog.ui.ControlRenderer.prototype.getStructuralCssClass = function() {
    return this.getCssClass()
}, goog.ui.ControlRenderer.prototype.getClassNames = function(e) {
    var t = this.getCssClass(),
        o = [t],
        n = this.getStructuralCssClass();
    return n != t && o.push(n), t = this.getClassNamesForState(e.getState()), o.push.apply(o, t), (e = e.getExtraClassNames()) && o.push.apply(o, e), goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("7") && o.push.apply(o, this.getAppliedCombinedClassNames_(o)), o
}, goog.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_ = function(e, t) {
    var o = [];
    return t && (e = e.concat([t])), goog.array.forEach(this.getIe6ClassCombinations(), function(n) {
        !goog.array.every(n, goog.partial(goog.array.contains, e)) || t && !goog.array.contains(n, t) || o.push(n.join("_"))
    }), o
}, goog.ui.ControlRenderer.prototype.getClassNamesForState = function(e) {
    for (var t = []; e;) {
        var o = e & -e;
        t.push(this.getClassForState(o)), e &= ~o
    }
    return t
}, goog.ui.ControlRenderer.prototype.getClassForState = function(e) {
    return this.classByState_ || this.createClassByStateMap_(), this.classByState_[e]
}, goog.ui.ControlRenderer.prototype.getStateFromClass = function(e) {
    return this.stateByClass_ || this.createStateByClassMap_(), e = parseInt(this.stateByClass_[e], 10), isNaN(e) ? 0 : e
}, goog.ui.ControlRenderer.prototype.createClassByStateMap_ = function() {
    var e = this.getStructuralCssClass(),
        t = !goog.string.contains(goog.string.normalizeWhitespace(e), " ");
    goog.asserts.assert(t, "ControlRenderer has an invalid css class: '" + e + "'"), this.classByState_ = goog.object.create(goog.ui.Component.State.DISABLED, e + "-disabled", goog.ui.Component.State.HOVER, e + "-hover", goog.ui.Component.State.ACTIVE, e + "-active", goog.ui.Component.State.SELECTED, e + "-selected", goog.ui.Component.State.CHECKED, e + "-checked", goog.ui.Component.State.FOCUSED, e + "-focused", goog.ui.Component.State.OPENED, e + "-open")
}, goog.ui.ControlRenderer.prototype.createStateByClassMap_ = function() {
    this.classByState_ || this.createClassByStateMap_(), this.stateByClass_ = goog.object.transpose(this.classByState_)
}, goog.ui.decorate = function(e) {
    var t = goog.ui.registry.getDecorator(e);
    return t && t.decorate(e), t
}, goog.ui.Control = function(e, t, o) {
    goog.ui.Component.call(this, o), this.renderer_ = t || goog.ui.registry.getDefaultRenderer(this.constructor), this.setContentInternal(goog.isDef(e) ? e : null), this.ariaLabel_ = null
}, goog.inherits(goog.ui.Control, goog.ui.Component), goog.tagUnsealableClass(goog.ui.Control), goog.ui.Control.registerDecorator = goog.ui.registry.setDecoratorByClassName, goog.ui.Control.getDecorator = goog.ui.registry.getDecorator, goog.ui.Control.decorate = goog.ui.decorate, goog.ui.Control.prototype.content_ = null, goog.ui.Control.prototype.state_ = 0, goog.ui.Control.prototype.supportedStates_ = goog.ui.Component.State.DISABLED | goog.ui.Component.State.HOVER | goog.ui.Component.State.ACTIVE | goog.ui.Component.State.FOCUSED, goog.ui.Control.prototype.autoStates_ = goog.ui.Component.State.ALL, goog.ui.Control.prototype.statesWithTransitionEvents_ = 0, goog.ui.Control.prototype.visible_ = !0, goog.ui.Control.prototype.extraClassNames_ = null, goog.ui.Control.prototype.handleMouseEvents_ = !0, goog.ui.Control.prototype.allowTextSelection_ = !1, goog.ui.Control.prototype.preferredAriaRole_ = null, goog.ui.Control.prototype.isHandleMouseEvents = function() {
    return this.handleMouseEvents_
}, goog.ui.Control.prototype.setHandleMouseEvents = function(e) {
    this.isInDocument() && e != this.handleMouseEvents_ && this.enableMouseEventHandling_(e), this.handleMouseEvents_ = e
}, goog.ui.Control.prototype.getKeyEventTarget = function() {
    return this.renderer_.getKeyEventTarget(this)
}, goog.ui.Control.prototype.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new goog.events.KeyHandler)
}, goog.ui.Control.prototype.getRenderer = function() {
    return this.renderer_
}, goog.ui.Control.prototype.setRenderer = function(e) {
    if (this.isInDocument()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.getElement() && this.setElementInternal(null), this.renderer_ = e
}, goog.ui.Control.prototype.getExtraClassNames = function() {
    return this.extraClassNames_
}, goog.ui.Control.prototype.addClassName = function(e) {
    e && (this.extraClassNames_ ? goog.array.contains(this.extraClassNames_, e) || this.extraClassNames_.push(e) : this.extraClassNames_ = [e], this.renderer_.enableExtraClassName(this, e, !0))
}, goog.ui.Control.prototype.removeClassName = function(e) {
    e && this.extraClassNames_ && goog.array.remove(this.extraClassNames_, e) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null), this.renderer_.enableExtraClassName(this, e, !1))
}, goog.ui.Control.prototype.enableClassName = function(e, t) {
    t ? this.addClassName(e) : this.removeClassName(e)
}, goog.ui.Control.prototype.createDom = function() {
    var e = this.renderer_.createDom(this);
    this.setElementInternal(e), this.renderer_.setAriaRole(e, this.getPreferredAriaRole()), this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1), this.isVisible() || this.renderer_.setVisible(e, !1)
}, goog.ui.Control.prototype.getPreferredAriaRole = function() {
    return this.preferredAriaRole_
}, goog.ui.Control.prototype.setPreferredAriaRole = function(e) {
    this.preferredAriaRole_ = e
}, goog.ui.Control.prototype.getAriaLabel = function() {
    return this.ariaLabel_
}, goog.ui.Control.prototype.setAriaLabel = function(e) {
    this.ariaLabel_ = e;
    var t = this.getElement();
    t && this.renderer_.setAriaLabel(t, e)
}, goog.ui.Control.prototype.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
}, goog.ui.Control.prototype.canDecorate = function(e) {
    return this.renderer_.canDecorate(e)
}, goog.ui.Control.prototype.decorateInternal = function(e) {
    e = this.renderer_.decorate(this, e), this.setElementInternal(e), this.renderer_.setAriaRole(e, this.getPreferredAriaRole()), this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1), this.visible_ = "none" != e.style.display
}, goog.ui.Control.prototype.enterDocument = function() {
    if (goog.ui.Control.superClass_.enterDocument.call(this), this.renderer_.setAriaStates(this, this.getElementStrict()), this.renderer_.initializeDom(this), this.supportedStates_ & ~goog.ui.Component.State.DISABLED && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0), this.isSupportedState(goog.ui.Component.State.FOCUSED))) {
        var e = this.getKeyEventTarget();
        if (e) {
            var t = this.getKeyHandler();
            t.attach(e), this.getHandler().listen(t, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(e, goog.events.EventType.FOCUS, this.handleFocus).listen(e, goog.events.EventType.BLUR, this.handleBlur)
        }
    }
}, goog.ui.Control.prototype.enableMouseEventHandling_ = function(e) {
    var t = this.getHandler(),
        o = this.getElement();
    e ? (t.listen(o, goog.events.EventType.MOUSEOVER, this.handleMouseOver).listen(o, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(o, goog.events.EventType.MOUSEUP, this.handleMouseUp).listen(o, goog.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != goog.nullFunction && t.listen(o, goog.events.EventType.CONTEXTMENU, this.handleContextMenu), goog.userAgent.IE && (t.listen(o, goog.events.EventType.DBLCLICK, this.handleDblClick), this.ieMouseEventSequenceSimulator_ || (this.ieMouseEventSequenceSimulator_ = new goog.ui.Control.IeMouseEventSequenceSimulator_(this), this.registerDisposable(this.ieMouseEventSequenceSimulator_)))) : (t.unlisten(o, goog.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(o, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).unlisten(o, goog.events.EventType.MOUSEUP, this.handleMouseUp).unlisten(o, goog.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != goog.nullFunction && t.unlisten(o, goog.events.EventType.CONTEXTMENU, this.handleContextMenu), goog.userAgent.IE && (t.unlisten(o, goog.events.EventType.DBLCLICK, this.handleDblClick), goog.dispose(this.ieMouseEventSequenceSimulator_), this.ieMouseEventSequenceSimulator_ = null))
}, goog.ui.Control.prototype.exitDocument = function() {
    goog.ui.Control.superClass_.exitDocument.call(this), this.keyHandler_ && this.keyHandler_.detach(), this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1)
}, goog.ui.Control.prototype.disposeInternal = function() {
    goog.ui.Control.superClass_.disposeInternal.call(this), this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_), delete this.renderer_, this.ieMouseEventSequenceSimulator_ = this.extraClassNames_ = this.content_ = null
}, goog.ui.Control.prototype.getContent = function() {
    return this.content_
}, goog.ui.Control.prototype.setContent = function(e) {
    this.renderer_.setContent(this.getElement(), e), this.setContentInternal(e)
}, goog.ui.Control.prototype.setContentInternal = function(e) {
    this.content_ = e
}, goog.ui.Control.prototype.getCaption = function() {
    var e = this.getContent();
    return e ? (e = goog.isString(e) ? e : goog.isArray(e) ? goog.array.map(e, goog.dom.getRawTextContent).join("") : goog.dom.getTextContent(e), goog.string.collapseBreakingSpaces(e)) : ""
}, goog.ui.Control.prototype.setCaption = function(e) {
    this.setContent(e)
}, goog.ui.Control.prototype.setRightToLeft = function(e) {
    goog.ui.Control.superClass_.setRightToLeft.call(this, e);
    var t = this.getElement();
    t && this.renderer_.setRightToLeft(t, e)
}, goog.ui.Control.prototype.isAllowTextSelection = function() {
    return this.allowTextSelection_
}, goog.ui.Control.prototype.setAllowTextSelection = function(e) {
    this.allowTextSelection_ = e;
    var t = this.getElement();
    t && this.renderer_.setAllowTextSelection(t, e)
}, goog.ui.Control.prototype.isVisible = function() {
    return this.visible_
}, goog.ui.Control.prototype.setVisible = function(e, t) {
    if (t || this.visible_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.SHOW : goog.ui.Component.EventType.HIDE)) {
        var o = this.getElement();
        return o && this.renderer_.setVisible(o, e), this.isEnabled() && this.renderer_.setFocusable(this, e), this.visible_ = e, !0
    }
    return !1
}, goog.ui.Control.prototype.isEnabled = function() {
    return !this.hasState(goog.ui.Component.State.DISABLED)
}, goog.ui.Control.prototype.isParentDisabled_ = function() {
    var e = this.getParent();
    return !!e && "function" == typeof e.isEnabled && !e.isEnabled()
}, goog.ui.Control.prototype.setEnabled = function(e) {
    !this.isParentDisabled_() && this.isTransitionAllowed(goog.ui.Component.State.DISABLED, !e) && (e || (this.setActive(!1), this.setHighlighted(!1)), this.isVisible() && this.renderer_.setFocusable(this, e), this.setState(goog.ui.Component.State.DISABLED, !e, !0))
}, goog.ui.Control.prototype.isHighlighted = function() {
    return this.hasState(goog.ui.Component.State.HOVER)
}, goog.ui.Control.prototype.setHighlighted = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.HOVER, e) && this.setState(goog.ui.Component.State.HOVER, e)
}, goog.ui.Control.prototype.isActive = function() {
    return this.hasState(goog.ui.Component.State.ACTIVE)
}, goog.ui.Control.prototype.setActive = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.ACTIVE, e) && this.setState(goog.ui.Component.State.ACTIVE, e)
}, goog.ui.Control.prototype.isSelected = function() {
    return this.hasState(goog.ui.Component.State.SELECTED)
}, goog.ui.Control.prototype.setSelected = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.SELECTED, e) && this.setState(goog.ui.Component.State.SELECTED, e)
}, goog.ui.Control.prototype.isChecked = function() {
    return this.hasState(goog.ui.Component.State.CHECKED)
}, goog.ui.Control.prototype.setChecked = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.CHECKED, e) && this.setState(goog.ui.Component.State.CHECKED, e)
}, goog.ui.Control.prototype.isFocused = function() {
    return this.hasState(goog.ui.Component.State.FOCUSED)
}, goog.ui.Control.prototype.setFocused = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.FOCUSED, e) && this.setState(goog.ui.Component.State.FOCUSED, e)
}, goog.ui.Control.prototype.isOpen = function() {
    return this.hasState(goog.ui.Component.State.OPENED)
}, goog.ui.Control.prototype.setOpen = function(e) {
    this.isTransitionAllowed(goog.ui.Component.State.OPENED, e) && this.setState(goog.ui.Component.State.OPENED, e)
}, goog.ui.Control.prototype.getState = function() {
    return this.state_
}, goog.ui.Control.prototype.hasState = function(e) {
    return !!(this.state_ & e)
}, goog.ui.Control.prototype.setState = function(e, t, o) {
    o || e != goog.ui.Component.State.DISABLED ? this.isSupportedState(e) && t != this.hasState(e) && (this.renderer_.setState(this, e, t), this.state_ = t ? this.state_ | e : this.state_ & ~e) : this.setEnabled(!t)
}, goog.ui.Control.prototype.setStateInternal = function(e) {
    this.state_ = e
}, goog.ui.Control.prototype.isSupportedState = function(e) {
    return !!(this.supportedStates_ & e)
}, goog.ui.Control.prototype.setSupportedState = function(e, t) {
    if (this.isInDocument() && this.hasState(e) && !t) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    !t && this.hasState(e) && this.setState(e, !1), this.supportedStates_ = t ? this.supportedStates_ | e : this.supportedStates_ & ~e
}, goog.ui.Control.prototype.isAutoState = function(e) {
    return !!(this.autoStates_ & e) && this.isSupportedState(e)
}, goog.ui.Control.prototype.setAutoStates = function(e, t) {
    this.autoStates_ = t ? this.autoStates_ | e : this.autoStates_ & ~e
}, goog.ui.Control.prototype.isDispatchTransitionEvents = function(e) {
    return !!(this.statesWithTransitionEvents_ & e) && this.isSupportedState(e)
}, goog.ui.Control.prototype.setDispatchTransitionEvents = function(e, t) {
    this.statesWithTransitionEvents_ = t ? this.statesWithTransitionEvents_ | e : this.statesWithTransitionEvents_ & ~e
}, goog.ui.Control.prototype.isTransitionAllowed = function(e, t) {
    return !(!this.isSupportedState(e) || this.hasState(e) == t || this.statesWithTransitionEvents_ & e && !this.dispatchEvent(goog.ui.Component.getStateTransitionEvent(e, t)) || this.isDisposed())
}, goog.ui.Control.prototype.handleMouseOver = function(e) {
    !goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0)
}, goog.ui.Control.prototype.handleMouseOut = function(e) {
    !goog.ui.Control.isMouseEventWithinElement_(e, this.getElement()) && this.dispatchEvent(goog.ui.Component.EventType.LEAVE) && (this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!1))
}, goog.ui.Control.prototype.handleContextMenu = goog.nullFunction, goog.ui.Control.isMouseEventWithinElement_ = function(e, t) {
    return !!e.relatedTarget && goog.dom.contains(t, e.relatedTarget)
}, goog.ui.Control.prototype.handleMouseDown = function(e) {
    this.isEnabled() && (this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0), e.isMouseActionButton() && (this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!0), this.renderer_ && this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus())), !this.isAllowTextSelection() && e.isMouseActionButton() && e.preventDefault()
}, goog.ui.Control.prototype.handleMouseUp = function(e) {
    this.isEnabled() && (this.isAutoState(goog.ui.Component.State.HOVER) && this.setHighlighted(!0), this.isActive() && this.performActionInternal(e) && this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1))
}, goog.ui.Control.prototype.handleDblClick = function(e) {
    this.isEnabled() && this.performActionInternal(e)
}, goog.ui.Control.prototype.performActionInternal = function(e) {
    this.isAutoState(goog.ui.Component.State.CHECKED) && this.setChecked(!this.isChecked()), this.isAutoState(goog.ui.Component.State.SELECTED) && this.setSelected(!0), this.isAutoState(goog.ui.Component.State.OPENED) && this.setOpen(!this.isOpen());
    var t = new goog.events.Event(goog.ui.Component.EventType.ACTION, this);
    return e && (t.altKey = e.altKey, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.shiftKey = e.shiftKey, t.platformModifierKey = e.platformModifierKey), this.dispatchEvent(t)
}, goog.ui.Control.prototype.handleFocus = function() {
    this.isAutoState(goog.ui.Component.State.FOCUSED) && this.setFocused(!0)
}, goog.ui.Control.prototype.handleBlur = function() {
    this.isAutoState(goog.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(goog.ui.Component.State.FOCUSED) && this.setFocused(!1)
}, goog.ui.Control.prototype.handleKeyEvent = function(e) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(e) ? (e.preventDefault(), e.stopPropagation(), !0) : !1
}, goog.ui.Control.prototype.handleKeyEventInternal = function(e) {
    return e.keyCode == goog.events.KeyCodes.ENTER && this.performActionInternal(e)
}, goog.ui.registry.setDefaultRenderer(goog.ui.Control, goog.ui.ControlRenderer), goog.ui.registry.setDecoratorByClassName(goog.ui.ControlRenderer.CSS_CLASS, function() {
    return new goog.ui.Control(null)
}), goog.ui.Control.IeMouseEventSequenceSimulator_ = function(e) {
    this.control_ = e, this.clickExpected_ = !1, this.handler_ = new goog.events.EventHandler(this), this.registerDisposable(this.handler_), e = this.control_.getElementStrict(), this.handler_.listen(e, goog.events.EventType.MOUSEDOWN, this.handleMouseDown_).listen(e, goog.events.EventType.MOUSEUP, this.handleMouseUp_).listen(e, goog.events.EventType.CLICK, this.handleClick_)
}, goog.inherits(goog.ui.Control.IeMouseEventSequenceSimulator_, goog.Disposable), goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseDown_ = function() {
    this.clickExpected_ = !1
}, goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseUp_ = function() {
    this.clickExpected_ = !0
}, goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleClick_ = function(e) {
    if (this.clickExpected_) this.clickExpected_ = !1;
    else {
        var t = e.getBrowserEvent(),
            o = t.button,
            n = t.type;
        t.button = goog.events.BrowserEvent.MouseButton.LEFT, t.type = goog.events.EventType.MOUSEDOWN, this.control_.handleMouseDown(new goog.events.BrowserEvent(t, e.currentTarget)), t.type = goog.events.EventType.MOUSEUP, this.control_.handleMouseUp(new goog.events.BrowserEvent(t, e.currentTarget)), t.button = o, t.type = n
    }
}, goog.ui.Control.IeMouseEventSequenceSimulator_.prototype.disposeInternal = function() {
    this.control_ = null, goog.ui.Control.IeMouseEventSequenceSimulator_.superClass_.disposeInternal.call(this)
}, goog.ui.Container = function(e, t, o) {
    goog.ui.Component.call(this, o), this.renderer_ = t || goog.ui.ContainerRenderer.getInstance(), this.orientation_ = e || this.renderer_.getDefaultOrientation()
}, goog.inherits(goog.ui.Container, goog.ui.Component), goog.tagUnsealableClass(goog.ui.Container), goog.ui.Container.EventType = {
    AFTER_SHOW: "aftershow",
    AFTER_HIDE: "afterhide"
}, goog.ui.Container.Orientation = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
}, goog.ui.Container.prototype.keyEventTarget_ = null, goog.ui.Container.prototype.keyHandler_ = null, goog.ui.Container.prototype.renderer_ = null, goog.ui.Container.prototype.orientation_ = null, goog.ui.Container.prototype.visible_ = !0, goog.ui.Container.prototype.enabled_ = !0, goog.ui.Container.prototype.focusable_ = !0, goog.ui.Container.prototype.highlightedIndex_ = -1, goog.ui.Container.prototype.openItem_ = null, goog.ui.Container.prototype.mouseButtonPressed_ = !1, goog.ui.Container.prototype.allowFocusableChildren_ = !1, goog.ui.Container.prototype.openFollowsHighlight_ = !0, goog.ui.Container.prototype.childElementIdMap_ = null, goog.ui.Container.prototype.getKeyEventTarget = function() {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
}, goog.ui.Container.prototype.setKeyEventTarget = function(e) {
    if (!this.focusable_) throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    var t = this.getKeyEventTarget(),
        o = this.isInDocument();
    this.keyEventTarget_ = e;
    var n = this.getKeyEventTarget();
    o && (this.keyEventTarget_ = t, this.enableFocusHandling_(!1), this.keyEventTarget_ = e, this.getKeyHandler().attach(n), this.enableFocusHandling_(!0))
}, goog.ui.Container.prototype.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new goog.events.KeyHandler(this.getKeyEventTarget()))
}, goog.ui.Container.prototype.getRenderer = function() {
    return this.renderer_
}, goog.ui.Container.prototype.setRenderer = function(e) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.renderer_ = e
}, goog.ui.Container.prototype.createDom = function() {
    this.setElementInternal(this.renderer_.createDom(this))
}, goog.ui.Container.prototype.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
}, goog.ui.Container.prototype.canDecorate = function(e) {
    return this.renderer_.canDecorate(e)
}, goog.ui.Container.prototype.decorateInternal = function(e) {
    this.setElementInternal(this.renderer_.decorate(this, e)), "none" == e.style.display && (this.visible_ = !1)
}, goog.ui.Container.prototype.enterDocument = function() {
    goog.ui.Container.superClass_.enterDocument.call(this), this.forEachChild(function(e) {
        e.isInDocument() && this.registerChildId_(e)
    }, this);
    var e = this.getElement();
    this.renderer_.initializeDom(this), this.setVisible(this.visible_, !0), this.getHandler().listen(this, goog.ui.Component.EventType.ENTER, this.handleEnterItem).listen(this, goog.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem).listen(this, goog.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem).listen(this, goog.ui.Component.EventType.OPEN, this.handleOpenItem).listen(this, goog.ui.Component.EventType.CLOSE, this.handleCloseItem).listen(e, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(goog.dom.getOwnerDocument(e), goog.events.EventType.MOUSEUP, this.handleDocumentMouseUp).listen(e, [goog.events.EventType.MOUSEDOWN, goog.events.EventType.MOUSEUP, goog.events.EventType.MOUSEOVER, goog.events.EventType.MOUSEOUT, goog.events.EventType.CONTEXTMENU], this.handleChildMouseEvents), this.isFocusable() && this.enableFocusHandling_(!0)
}, goog.ui.Container.prototype.enableFocusHandling_ = function(e) {
    var t = this.getHandler(),
        o = this.getKeyEventTarget();
    e ? t.listen(o, goog.events.EventType.FOCUS, this.handleFocus).listen(o, goog.events.EventType.BLUR, this.handleBlur).listen(this.getKeyHandler(), goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent) : t.unlisten(o, goog.events.EventType.FOCUS, this.handleFocus).unlisten(o, goog.events.EventType.BLUR, this.handleBlur).unlisten(this.getKeyHandler(), goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent)
}, goog.ui.Container.prototype.exitDocument = function() {
    this.setHighlightedIndex(-1), this.openItem_ && this.openItem_.setOpen(!1), this.mouseButtonPressed_ = !1, goog.ui.Container.superClass_.exitDocument.call(this)
}, goog.ui.Container.prototype.disposeInternal = function() {
    goog.ui.Container.superClass_.disposeInternal.call(this), this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = null), this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null
}, goog.ui.Container.prototype.handleEnterItem = function() {
    return !0
}, goog.ui.Container.prototype.handleHighlightItem = function(e) {
    var t = this.indexOfChild(e.target);
    if (t > -1 && t != this.highlightedIndex_) {
        var o = this.getHighlighted();
        o && o.setHighlighted(!1), this.highlightedIndex_ = t, o = this.getHighlighted(), this.isMouseButtonPressed() && o.setActive(!0), this.openFollowsHighlight_ && this.openItem_ && o != this.openItem_ && (o.isSupportedState(goog.ui.Component.State.OPENED) ? o.setOpen(!0) : this.openItem_.setOpen(!1))
    }
    t = this.getElement(), goog.asserts.assert(t, "The DOM element for the container cannot be null."), null != e.target.getElement() && goog.a11y.aria.setState(t, goog.a11y.aria.State.ACTIVEDESCENDANT, e.target.getElement().id)
}, goog.ui.Container.prototype.handleUnHighlightItem = function(e) {
    e.target == this.getHighlighted() && (this.highlightedIndex_ = -1), e = this.getElement(), goog.asserts.assert(e, "The DOM element for the container cannot be null."), goog.a11y.aria.removeState(e, goog.a11y.aria.State.ACTIVEDESCENDANT)
}, goog.ui.Container.prototype.handleOpenItem = function(e) {
    (e = e.target) && e != this.openItem_ && e.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1), this.openItem_ = e)
}, goog.ui.Container.prototype.handleCloseItem = function(e) {
    e.target == this.openItem_ && (this.openItem_ = null)
}, goog.ui.Container.prototype.handleMouseDown = function(e) {
    this.enabled_ && this.setMouseButtonPressed(!0);
    var t = this.getKeyEventTarget();
    t && goog.dom.isFocusableTabIndex(t) ? t.focus() : e.preventDefault()
}, goog.ui.Container.prototype.handleDocumentMouseUp = function() {
    this.setMouseButtonPressed(!1)
}, goog.ui.Container.prototype.handleChildMouseEvents = function(e) {
    var t = this.getOwnerControl(e.target);
    if (t) switch (e.type) {
        case goog.events.EventType.MOUSEDOWN:
            t.handleMouseDown(e);
            break;
        case goog.events.EventType.MOUSEUP:
            t.handleMouseUp(e);
            break;
        case goog.events.EventType.MOUSEOVER:
            t.handleMouseOver(e);
            break;
        case goog.events.EventType.MOUSEOUT:
            t.handleMouseOut(e);
            break;
        case goog.events.EventType.CONTEXTMENU:
            t.handleContextMenu(e)
    }
}, goog.ui.Container.prototype.getOwnerControl = function(e) {
    if (this.childElementIdMap_)
        for (var t = this.getElement(); e && e !== t;) {
            var o = e.id;
            if (o in this.childElementIdMap_) return this.childElementIdMap_[o];
            e = e.parentNode
        }
    return null
}, goog.ui.Container.prototype.handleFocus = function() {}, goog.ui.Container.prototype.handleBlur = function() {
    this.setHighlightedIndex(-1), this.setMouseButtonPressed(!1), this.openItem_ && this.openItem_.setOpen(!1)
}, goog.ui.Container.prototype.handleKeyEvent = function(e) {
    return this.isEnabled() && this.isVisible() && (0 != this.getChildCount() || this.keyEventTarget_) && this.handleKeyEventInternal(e) ? (e.preventDefault(), e.stopPropagation(), !0) : !1
}, goog.ui.Container.prototype.handleKeyEventInternal = function(e) {
    var t = this.getHighlighted();
    if (t && "function" == typeof t.handleKeyEvent && t.handleKeyEvent(e) || this.openItem_ && this.openItem_ != t && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(e)) return !0;
    if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.ESC:
            if (!this.isFocusable()) return !1;
            this.getKeyEventTarget().blur();
            break;
        case goog.events.KeyCodes.HOME:
            this.highlightFirst();
            break;
        case goog.events.KeyCodes.END:
            this.highlightLast();
            break;
        case goog.events.KeyCodes.UP:
            if (this.orientation_ != goog.ui.Container.Orientation.VERTICAL) return !1;
            this.highlightPrevious();
            break;
        case goog.events.KeyCodes.LEFT:
            if (this.orientation_ != goog.ui.Container.Orientation.HORIZONTAL) return !1;
            this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious();
            break;
        case goog.events.KeyCodes.DOWN:
            if (this.orientation_ != goog.ui.Container.Orientation.VERTICAL) return !1;
            this.highlightNext();
            break;
        case goog.events.KeyCodes.RIGHT:
            if (this.orientation_ != goog.ui.Container.Orientation.HORIZONTAL) return !1;
            this.isRightToLeft() ? this.highlightPrevious() : this.highlightNext();
            break;
        default:
            return !1
    }
    return !0
}, goog.ui.Container.prototype.registerChildId_ = function(e) {
    var t = e.getElement(),
        t = t.id || (t.id = e.getId());
    this.childElementIdMap_ || (this.childElementIdMap_ = {}), this.childElementIdMap_[t] = e
}, goog.ui.Container.prototype.addChild = function(e, t) {
    goog.asserts.assertInstanceof(e, goog.ui.Control, "The child of a container must be a control"), goog.ui.Container.superClass_.addChild.call(this, e, t)
}, goog.ui.Container.prototype.addChildAt = function(e, t, o) {
    goog.asserts.assertInstanceof(e, goog.ui.Control), e.setDispatchTransitionEvents(goog.ui.Component.State.HOVER, !0), e.setDispatchTransitionEvents(goog.ui.Component.State.OPENED, !0), !this.isFocusable() && this.isFocusableChildrenAllowed() || e.setSupportedState(goog.ui.Component.State.FOCUSED, !1), e.setHandleMouseEvents(!1);
    var n = e.getParent() == this ? this.indexOfChild(e) : -1;
    goog.ui.Container.superClass_.addChildAt.call(this, e, t, o), e.isInDocument() && this.isInDocument() && this.registerChildId_(e), this.updateHighlightedIndex_(n, t)
}, goog.ui.Container.prototype.updateHighlightedIndex_ = function(e, t) {
    -1 == e && (e = this.getChildCount()), e == this.highlightedIndex_ ? this.highlightedIndex_ = Math.min(this.getChildCount() - 1, t) : e > this.highlightedIndex_ && t <= this.highlightedIndex_ ? this.highlightedIndex_++ : e < this.highlightedIndex_ && t > this.highlightedIndex_ && this.highlightedIndex_--
}, goog.ui.Container.prototype.removeChild = function(e, t) {
    if (e = goog.isString(e) ? this.getChild(e) : e, goog.asserts.assertInstanceof(e, goog.ui.Control), e) {
        var o = this.indexOfChild(e); - 1 != o && (o == this.highlightedIndex_ ? (e.setHighlighted(!1), this.highlightedIndex_ = -1) : o < this.highlightedIndex_ && this.highlightedIndex_--), (o = e.getElement()) && o.id && this.childElementIdMap_ && goog.object.remove(this.childElementIdMap_, o.id)
    }
    return e = goog.ui.Container.superClass_.removeChild.call(this, e, t), e.setHandleMouseEvents(!0), e
}, goog.ui.Container.prototype.getOrientation = function() {
    return this.orientation_
}, goog.ui.Container.prototype.setOrientation = function(e) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.orientation_ = e
}, goog.ui.Container.prototype.isVisible = function() {
    return this.visible_
}, goog.ui.Container.prototype.setVisible = function(e, t) {
    if (t || this.visible_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.SHOW : goog.ui.Component.EventType.HIDE)) {
        this.visible_ = e;
        var o = this.getElement();
        return o && (goog.style.setElementShown(o, e), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_), t || this.dispatchEvent(this.visible_ ? goog.ui.Container.EventType.AFTER_SHOW : goog.ui.Container.EventType.AFTER_HIDE)), !0
    }
    return !1
}, goog.ui.Container.prototype.isEnabled = function() {
    return this.enabled_
}, goog.ui.Container.prototype.setEnabled = function(e) {
    this.enabled_ != e && this.dispatchEvent(e ? goog.ui.Component.EventType.ENABLE : goog.ui.Component.EventType.DISABLE) && (e ? (this.enabled_ = !0, this.forEachChild(function(e) {
        e.wasDisabled ? delete e.wasDisabled : e.setEnabled(!0)
    })) : (this.forEachChild(function(e) {
        e.isEnabled() ? e.setEnabled(!1) : e.wasDisabled = !0
    }), this.enabled_ = !1, this.setMouseButtonPressed(!1)), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), e && this.visible_))
}, goog.ui.Container.prototype.isFocusable = function() {
    return this.focusable_
}, goog.ui.Container.prototype.setFocusable = function(e) {
    e != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(e), this.focusable_ = e, this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), e)
}, goog.ui.Container.prototype.isFocusableChildrenAllowed = function() {
    return this.allowFocusableChildren_
}, goog.ui.Container.prototype.setFocusableChildrenAllowed = function(e) {
    this.allowFocusableChildren_ = e
}, goog.ui.Container.prototype.isOpenFollowsHighlight = function() {
    return this.openFollowsHighlight_
}, goog.ui.Container.prototype.setOpenFollowsHighlight = function(e) {
    this.openFollowsHighlight_ = e
}, goog.ui.Container.prototype.getHighlightedIndex = function() {
    return this.highlightedIndex_
}, goog.ui.Container.prototype.setHighlightedIndex = function(e) {
    (e = this.getChildAt(e)) ? e.setHighlighted(!0): -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1)
}, goog.ui.Container.prototype.setHighlighted = function(e) {
    this.setHighlightedIndex(this.indexOfChild(e))
}, goog.ui.Container.prototype.getHighlighted = function() {
    return this.getChildAt(this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightFirst = function() {
    this.highlightHelper(function(e, t) {
        return (e + 1) % t
    }, this.getChildCount() - 1)
}, goog.ui.Container.prototype.highlightLast = function() {
    this.highlightHelper(function(e, t) {
        return e--, 0 > e ? t - 1 : e
    }, 0)
}, goog.ui.Container.prototype.highlightNext = function() {
    this.highlightHelper(function(e, t) {
        return (e + 1) % t
    }, this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightPrevious = function() {
    this.highlightHelper(function(e, t) {
        return e--, 0 > e ? t - 1 : e
    }, this.highlightedIndex_)
}, goog.ui.Container.prototype.highlightHelper = function(e, t) {
    for (var o = 0 > t ? this.indexOfChild(this.openItem_) : t, n = this.getChildCount(), o = e.call(this, o, n), i = 0; n >= i;) {
        var r = this.getChildAt(o);
        if (r && this.canHighlightItem(r)) return this.setHighlightedIndexFromKeyEvent(o), !0;
        i++, o = e.call(this, o, n)
    }
    return !1
}, goog.ui.Container.prototype.canHighlightItem = function(e) {
    return e.isVisible() && e.isEnabled() && e.isSupportedState(goog.ui.Component.State.HOVER)
}, goog.ui.Container.prototype.setHighlightedIndexFromKeyEvent = function(e) {
    this.setHighlightedIndex(e)
}, goog.ui.Container.prototype.getOpenItem = function() {
    return this.openItem_
}, goog.ui.Container.prototype.isMouseButtonPressed = function() {
    return this.mouseButtonPressed_
}, goog.ui.Container.prototype.setMouseButtonPressed = function(e) {
    this.mouseButtonPressed_ = e
}, goog.ui.MenuHeaderRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.MenuHeaderRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuHeaderRenderer), goog.ui.MenuHeaderRenderer.CSS_CLASS = "goog-menuheader", goog.ui.MenuHeaderRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuHeaderRenderer.CSS_CLASS
}, goog.ui.MenuHeader = function(e, t, o) {
    goog.ui.Control.call(this, e, o || goog.ui.MenuHeaderRenderer.getInstance(), t), this.setSupportedState(goog.ui.Component.State.DISABLED, !1), this.setSupportedState(goog.ui.Component.State.HOVER, !1), this.setSupportedState(goog.ui.Component.State.ACTIVE, !1), this.setSupportedState(goog.ui.Component.State.FOCUSED, !1), this.setStateInternal(goog.ui.Component.State.DISABLED)
}, goog.inherits(goog.ui.MenuHeader, goog.ui.Control), goog.ui.registry.setDecoratorByClassName(goog.ui.MenuHeaderRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuHeader(null)
}), goog.ui.MenuItemRenderer = function() {
    goog.ui.ControlRenderer.call(this), this.classNameCache_ = []
}, goog.inherits(goog.ui.MenuItemRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuItemRenderer), goog.ui.MenuItemRenderer.CSS_CLASS = "goog-menuitem", goog.ui.MenuItemRenderer.CompositeCssClassIndex_ = {
    HOVER: 0,
    CHECKBOX: 1,
    CONTENT: 2
}, goog.ui.MenuItemRenderer.prototype.getCompositeCssClass_ = function(e) {
    var t = this.classNameCache_[e];
    if (!t) {
        switch (e) {
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:
                t = this.getStructuralCssClass() + "-highlight";
                break;
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:
                t = this.getStructuralCssClass() + "-checkbox";
                break;
            case goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:
                t = this.getStructuralCssClass() + "-content"
        }
        this.classNameCache_[e] = t
    }
    return t
}, goog.ui.MenuItemRenderer.prototype.getAriaRole = function() {
    return goog.a11y.aria.Role.MENU_ITEM
}, goog.ui.MenuItemRenderer.prototype.createDom = function(e) {
    var t = e.getDomHelper().createDom("div", this.getClassNames(e).join(" "), this.createContent(e.getContent(), e.getDomHelper()));
    return this.setEnableCheckBoxStructure(e, t, e.isSupportedState(goog.ui.Component.State.SELECTED) || e.isSupportedState(goog.ui.Component.State.CHECKED)), t
}, goog.ui.MenuItemRenderer.prototype.getContentElement = function(e) {
    return e && e.firstChild
}, goog.ui.MenuItemRenderer.prototype.decorate = function(e, t) {
    return goog.asserts.assert(t), this.hasContentStructure(t) || t.appendChild(this.createContent(t.childNodes, e.getDomHelper())), goog.dom.classlist.contains(t, "goog-option") && (e.setCheckable(!0), this.setCheckable(e, t, !0)), goog.ui.MenuItemRenderer.superClass_.decorate.call(this, e, t)
}, goog.ui.MenuItemRenderer.prototype.setContent = function(e, t) {
    var o = this.getContentElement(e),
        n = this.hasCheckBoxStructure(e) ? o.firstChild : null;
    goog.ui.MenuItemRenderer.superClass_.setContent.call(this, e, t), n && !this.hasCheckBoxStructure(e) && o.insertBefore(n, o.firstChild || null)
}, goog.ui.MenuItemRenderer.prototype.hasContentStructure = function(e) {
    e = goog.dom.getFirstElementChild(e);
    var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return !!e && goog.dom.classlist.contains(e, t)
}, goog.ui.MenuItemRenderer.prototype.createContent = function(e, t) {
    var o = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
    return t.createDom("div", o, e)
}, goog.ui.MenuItemRenderer.prototype.setSelectable = function(e, t, o) {
    e && t && this.setEnableCheckBoxStructure(e, t, o)
}, goog.ui.MenuItemRenderer.prototype.setCheckable = function(e, t, o) {
    e && t && this.setEnableCheckBoxStructure(e, t, o)
}, goog.ui.MenuItemRenderer.prototype.hasCheckBoxStructure = function(e) {
    if (e = this.getContentElement(e)) {
        e = e.firstChild;
        var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
        return !!e && goog.dom.isElement(e) && goog.dom.classlist.contains(e, t)
    }
    return !1
}, goog.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure = function(e, t, o) {
    this.setAriaRole(t, e.getPreferredAriaRole()), this.setAriaStates(e, t), o != this.hasCheckBoxStructure(t) && (goog.dom.classlist.enable(t, "goog-option", o), t = this.getContentElement(t), o ? (o = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX), t.insertBefore(e.getDomHelper().createDom("div", o), t.firstChild || null)) : t.removeChild(t.firstChild))
}, goog.ui.MenuItemRenderer.prototype.getClassForState = function(e) {
    switch (e) {
        case goog.ui.Component.State.HOVER:
            return this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
        case goog.ui.Component.State.CHECKED:
        case goog.ui.Component.State.SELECTED:
            return "goog-option-selected";
        default:
            return goog.ui.MenuItemRenderer.superClass_.getClassForState.call(this, e)
    }
}, goog.ui.MenuItemRenderer.prototype.getStateFromClass = function(e) {
    var t = this.getCompositeCssClass_(goog.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
    switch (e) {
        case "goog-option-selected":
            return goog.ui.Component.State.CHECKED;
        case t:
            return goog.ui.Component.State.HOVER;
        default:
            return goog.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this, e)
    }
}, goog.ui.MenuItemRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuItemRenderer.CSS_CLASS
}, goog.ui.MenuItem = function(e, t, o, n) {
    goog.ui.Control.call(this, e, n || goog.ui.MenuItemRenderer.getInstance(), o), this.setValue(t)
}, goog.inherits(goog.ui.MenuItem, goog.ui.Control), goog.tagUnsealableClass(goog.ui.MenuItem), goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_ = "goog-menuitem-mnemonic-separator", goog.ui.MenuItem.ACCELERATOR_CLASS = "goog-menuitem-accel", goog.ui.MenuItem.prototype.getValue = function() {
    var e = this.getModel();
    return null != e ? e : this.getCaption()
}, goog.ui.MenuItem.prototype.setValue = function(e) {
    this.setModel(e)
}, goog.ui.MenuItem.prototype.setSupportedState = function(e, t) {
    switch (goog.ui.MenuItem.superClass_.setSupportedState.call(this, e, t), e) {
        case goog.ui.Component.State.SELECTED:
            this.setSelectableInternal_(t);
            break;
        case goog.ui.Component.State.CHECKED:
            this.setCheckableInternal_(t)
    }
}, goog.ui.MenuItem.prototype.setSelectable = function(e) {
    this.setSupportedState(goog.ui.Component.State.SELECTED, e)
}, goog.ui.MenuItem.prototype.setSelectableInternal_ = function(e) {
    this.isChecked() && !e && this.setChecked(!1);
    var t = this.getElement();
    t && this.getRenderer().setSelectable(this, t, e)
}, goog.ui.MenuItem.prototype.setCheckable = function(e) {
    this.setSupportedState(goog.ui.Component.State.CHECKED, e)
}, goog.ui.MenuItem.prototype.setCheckableInternal_ = function(e) {
    var t = this.getElement();
    t && this.getRenderer().setCheckable(this, t, e)
}, goog.ui.MenuItem.prototype.getCaption = function() {
    var e = this.getContent();
    if (goog.isArray(e)) {
        var t = goog.ui.MenuItem.ACCELERATOR_CLASS,
            o = goog.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_,
            e = goog.array.map(e, function(e) {
                return goog.dom.isElement(e) && (goog.dom.classlist.contains(e, t) || goog.dom.classlist.contains(e, o)) ? "" : goog.dom.getRawTextContent(e)
            }).join("");
        return goog.string.collapseBreakingSpaces(e)
    }
    return goog.ui.MenuItem.superClass_.getCaption.call(this)
}, goog.ui.MenuItem.prototype.getAccelerator = function() {
    var e = this.getDomHelper(),
        t = this.getContent();
    return goog.isArray(t) && (t = goog.array.find(t, function(e) {
        return goog.dom.classlist.contains(e, goog.ui.MenuItem.ACCELERATOR_CLASS)
    })) ? e.getTextContent(t) : null
}, goog.ui.MenuItem.prototype.handleMouseUp = function(e) {
    var t = this.getParent();
    if (t) {
        var o = t.openingCoords;
        if (t.openingCoords = null, o && goog.isNumber(e.clientX) && (t = new goog.math.Coordinate(e.clientX, e.clientY), goog.math.Coordinate.equals(o, t))) return
    }
    goog.ui.MenuItem.superClass_.handleMouseUp.call(this, e)
}, goog.ui.MenuItem.prototype.handleKeyEventInternal = function(e) {
    return e.keyCode == this.getMnemonic() && this.performActionInternal(e) ? !0 : goog.ui.MenuItem.superClass_.handleKeyEventInternal.call(this, e)
}, goog.ui.MenuItem.prototype.setMnemonic = function(e) {
    this.mnemonicKey_ = e
}, goog.ui.MenuItem.prototype.getMnemonic = function() {
    return this.mnemonicKey_
}, goog.ui.registry.setDecoratorByClassName(goog.ui.MenuItemRenderer.CSS_CLASS, function() {
    return new goog.ui.MenuItem(null)
}), goog.ui.MenuItem.prototype.getPreferredAriaRole = function() {
    return this.isSupportedState(goog.ui.Component.State.CHECKED) ? goog.a11y.aria.Role.MENU_ITEM_CHECKBOX : this.isSupportedState(goog.ui.Component.State.SELECTED) ? goog.a11y.aria.Role.MENU_ITEM_RADIO : goog.ui.MenuItem.superClass_.getPreferredAriaRole.call(this)
}, goog.ui.MenuItem.prototype.getParent = function() {
    return goog.ui.Control.prototype.getParent.call(this)
}, goog.ui.MenuItem.prototype.getParentEventTarget = function() {
    return goog.ui.Control.prototype.getParentEventTarget.call(this)
}, goog.ui.MenuSeparatorRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.MenuSeparatorRenderer), goog.ui.MenuSeparatorRenderer.CSS_CLASS = "goog-menuseparator", goog.ui.MenuSeparatorRenderer.prototype.createDom = function(e) {
    return e.getDomHelper().createDom("div", this.getCssClass())
}, goog.ui.MenuSeparatorRenderer.prototype.decorate = function(e, t) {
    if (t.id && e.setId(t.id), "HR" == t.tagName) {
        var o = t;
        t = this.createDom(e), goog.dom.insertSiblingBefore(t, o), goog.dom.removeNode(o)
    } else goog.dom.classlist.add(t, this.getCssClass());
    return t
}, goog.ui.MenuSeparatorRenderer.prototype.setContent = function() {}, goog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuSeparatorRenderer.CSS_CLASS
}, goog.ui.Separator = function(e, t) {
    goog.ui.Control.call(this, null, e || goog.ui.MenuSeparatorRenderer.getInstance(), t), this.setSupportedState(goog.ui.Component.State.DISABLED, !1), this.setSupportedState(goog.ui.Component.State.HOVER, !1), this.setSupportedState(goog.ui.Component.State.ACTIVE, !1), this.setSupportedState(goog.ui.Component.State.FOCUSED, !1), this.setStateInternal(goog.ui.Component.State.DISABLED)
}, goog.inherits(goog.ui.Separator, goog.ui.Control), goog.ui.Separator.prototype.enterDocument = function() {
    goog.ui.Separator.superClass_.enterDocument.call(this);
    var e = this.getElement();
    goog.asserts.assert(e, "The DOM element for the separator cannot be null."), goog.a11y.aria.setRole(e, "separator")
}, goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
    return new goog.ui.Separator
}), goog.ui.MenuRenderer = function(e) {
    goog.ui.ContainerRenderer.call(this, e || goog.a11y.aria.Role.MENU)
}, goog.inherits(goog.ui.MenuRenderer, goog.ui.ContainerRenderer), goog.addSingletonGetter(goog.ui.MenuRenderer), goog.ui.MenuRenderer.CSS_CLASS = "goog-menu", goog.ui.MenuRenderer.prototype.canDecorate = function(e) {
    return "UL" == e.tagName || goog.ui.MenuRenderer.superClass_.canDecorate.call(this, e)
}, goog.ui.MenuRenderer.prototype.getDecoratorForChild = function(e) {
    return "HR" == e.tagName ? new goog.ui.Separator : goog.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this, e)
}, goog.ui.MenuRenderer.prototype.containsElement = function(e, t) {
    return goog.dom.contains(e.getElement(), t)
}, goog.ui.MenuRenderer.prototype.getCssClass = function() {
    return goog.ui.MenuRenderer.CSS_CLASS
}, goog.ui.MenuRenderer.prototype.initializeDom = function(e) {
    goog.ui.MenuRenderer.superClass_.initializeDom.call(this, e), e = e.getElement(), goog.asserts.assert(e, "The menu DOM element cannot be null."), goog.a11y.aria.setState(e, goog.a11y.aria.State.HASPOPUP, "true")
}, goog.ui.MenuSeparator = function(e) {
    goog.ui.Separator.call(this, goog.ui.MenuSeparatorRenderer.getInstance(), e)
}, goog.inherits(goog.ui.MenuSeparator, goog.ui.Separator), goog.ui.registry.setDecoratorByClassName(goog.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
    return new goog.ui.Separator
}), goog.ui.Menu = function(e, t) {
    goog.ui.Container.call(this, goog.ui.Container.Orientation.VERTICAL, t || goog.ui.MenuRenderer.getInstance(), e), this.setFocusable(!1)
}, goog.inherits(goog.ui.Menu, goog.ui.Container), goog.tagUnsealableClass(goog.ui.Menu), goog.ui.Menu.EventType = {
    BEFORE_SHOW: goog.ui.Component.EventType.BEFORE_SHOW,
    SHOW: goog.ui.Component.EventType.SHOW,
    BEFORE_HIDE: goog.ui.Component.EventType.HIDE,
    HIDE: goog.ui.Component.EventType.HIDE
}, goog.ui.Menu.CSS_CLASS = goog.ui.MenuRenderer.CSS_CLASS, goog.ui.Menu.prototype.allowAutoFocus_ = !0, goog.ui.Menu.prototype.allowHighlightDisabled_ = !1, goog.ui.Menu.prototype.getCssClass = function() {
    return this.getRenderer().getCssClass()
}, goog.ui.Menu.prototype.containsElement = function(e) {
    if (this.getRenderer().containsElement(this, e)) return !0;
    for (var t = 0, o = this.getChildCount(); o > t; t++) {
        var n = this.getChildAt(t);
        if ("function" == typeof n.containsElement && n.containsElement(e)) return !0
    }
    return !1
}, goog.ui.Menu.prototype.addItem = function(e) {
    this.addChild(e, !0)
}, goog.ui.Menu.prototype.addItemAt = function(e, t) {
    this.addChildAt(e, t, !0)
}, goog.ui.Menu.prototype.removeItem = function(e) {
    (e = this.removeChild(e, !0)) && e.dispose()
}, goog.ui.Menu.prototype.removeItemAt = function(e) {
    (e = this.removeChildAt(e, !0)) && e.dispose()
}, goog.ui.Menu.prototype.getItemAt = function(e) {
    return this.getChildAt(e)
}, goog.ui.Menu.prototype.getItemCount = function() {
    return this.getChildCount()
}, goog.ui.Menu.prototype.getItems = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t)
    }), e
}, goog.ui.Menu.prototype.setPosition = function(e, t) {
    var o = this.isVisible();
    o || goog.style.setElementShown(this.getElement(), !0), goog.style.setPageOffset(this.getElement(), e, t), o || goog.style.setElementShown(this.getElement(), !1)
}, goog.ui.Menu.prototype.getPosition = function() {
    return this.isVisible() ? goog.style.getPageOffset(this.getElement()) : null
}, goog.ui.Menu.prototype.setAllowAutoFocus = function(e) {
    (this.allowAutoFocus_ = e) && this.setFocusable(!0)
}, goog.ui.Menu.prototype.getAllowAutoFocus = function() {
    return this.allowAutoFocus_
}, goog.ui.Menu.prototype.setAllowHighlightDisabled = function(e) {
    this.allowHighlightDisabled_ = e
}, goog.ui.Menu.prototype.getAllowHighlightDisabled = function() {
    return this.allowHighlightDisabled_
}, goog.ui.Menu.prototype.setVisible = function(e, t, o) {
    return (t = goog.ui.Menu.superClass_.setVisible.call(this, e, t)) && e && this.isInDocument() && this.allowAutoFocus_ && this.getKeyEventTarget().focus(), this.openingCoords = e && o && goog.isNumber(o.clientX) ? new goog.math.Coordinate(o.clientX, o.clientY) : null, t
}, goog.ui.Menu.prototype.handleEnterItem = function(e) {
    return this.allowAutoFocus_ && this.getKeyEventTarget().focus(), goog.ui.Menu.superClass_.handleEnterItem.call(this, e)
}, goog.ui.Menu.prototype.highlightNextPrefix = function(e) {
    var t = new RegExp("^" + goog.string.regExpEscape(e), "i");
    return this.highlightHelper(function(e, o) {
        var n = 0 > e ? 0 : e,
            i = !1;
        do {
            ++e, e == o && (e = 0, i = !0);
            var r = this.getChildAt(e).getCaption();
            if (r && r.match(t)) return e
        } while (!i || e != n);
        return this.getHighlightedIndex()
    }, this.getHighlightedIndex())
}, goog.ui.Menu.prototype.canHighlightItem = function(e) {
    return (this.allowHighlightDisabled_ || e.isEnabled()) && e.isVisible() && e.isSupportedState(goog.ui.Component.State.HOVER)
}, goog.ui.Menu.prototype.decorateInternal = function(e) {
    this.decorateContent(e), goog.ui.Menu.superClass_.decorateInternal.call(this, e)
}, goog.ui.Menu.prototype.handleKeyEventInternal = function(e) {
    var t = goog.ui.Menu.superClass_.handleKeyEventInternal.call(this, e);
    return t || this.forEachChild(function(o) {
        !t && o.getMnemonic && o.getMnemonic() == e.keyCode && (this.isEnabled() && this.setHighlighted(o), t = o.handleKeyEvent(e))
    }, this), t
}, goog.ui.Menu.prototype.setHighlightedIndex = function(e) {
    goog.ui.Menu.superClass_.setHighlightedIndex.call(this, e), (e = this.getChildAt(e)) && goog.style.scrollIntoContainerView(e.getElement(), this.getElement())
}, goog.ui.Menu.prototype.decorateContent = function(e) {
    var t = this.getRenderer();
    e = this.getDomHelper().getElementsByTagNameAndClass("div", t.getCssClass() + "-content", e);
    for (var o = e.length, n = 0; o > n; n++) t.decorateChildren(this, e[n])
}, goog.color = {}, goog.color.names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
}, goog.color.parse = function(e) {
    var t = {};
    e = String(e);
    var o = goog.color.prependHashIfNecessaryHelper(e);
    if (goog.color.isValidHexColor_(o)) return t.hex = goog.color.normalizeHex(o), t.type = "hex", t;
    if (o = goog.color.isValidRgbColor_(e), o.length) return t.hex = goog.color.rgbArrayToHex(o), t.type = "rgb", t;
    if (goog.color.names && (o = goog.color.names[e.toLowerCase()])) return t.hex = o, t.type = "named", t;
    throw Error(e + " is not a valid color string")
}, goog.color.isValidColor = function(e) {
    var t = goog.color.prependHashIfNecessaryHelper(e);
    return !!(goog.color.isValidHexColor_(t) || goog.color.isValidRgbColor_(e).length || goog.color.names && goog.color.names[e.toLowerCase()])
}, goog.color.parseRgb = function(e) {
    var t = goog.color.isValidRgbColor_(e);
    if (!t.length) throw Error(e + " is not a valid RGB color");
    return t
}, goog.color.hexToRgbStyle = function(e) {
    return goog.color.rgbStyle_(goog.color.hexToRgb(e))
}, goog.color.hexTripletRe_ = /#(.)(.)(.)/, goog.color.normalizeHex = function(e) {
    if (!goog.color.isValidHexColor_(e)) throw Error("'" + e + "' is not a valid hex color");
    return 4 == e.length && (e = e.replace(goog.color.hexTripletRe_, "#$1$1$2$2$3$3")), e.toLowerCase()
}, goog.color.hexToRgb = function(e) {
    e = goog.color.normalizeHex(e);
    var t = parseInt(e.substr(1, 2), 16),
        o = parseInt(e.substr(3, 2), 16);
    return e = parseInt(e.substr(5, 2), 16), [t, o, e]
}, goog.color.rgbToHex = function(e, t, o) {
    if (e = Number(e), t = Number(t), o = Number(o), isNaN(e) || 0 > e || e > 255 || isNaN(t) || 0 > t || t > 255 || isNaN(o) || 0 > o || o > 255) throw Error('"(' + e + "," + t + "," + o + '") is not a valid RGB color');
    return e = goog.color.prependZeroIfNecessaryHelper(e.toString(16)), t = goog.color.prependZeroIfNecessaryHelper(t.toString(16)), o = goog.color.prependZeroIfNecessaryHelper(o.toString(16)), "#" + e + t + o
}, goog.color.rgbArrayToHex = function(e) {
    return goog.color.rgbToHex(e[0], e[1], e[2])
}, goog.color.rgbToHsl = function(e, t, o) {
    e /= 255, t /= 255, o /= 255;
    var n = Math.max(e, t, o),
        i = Math.min(e, t, o),
        r = 0,
        s = 0,
        l = .5 * (n + i);
    return n != i && (n == e ? r = 60 * (t - o) / (n - i) : n == t ? r = 60 * (o - e) / (n - i) + 120 : n == o && (r = 60 * (e - t) / (n - i) + 240), s = l > 0 && .5 >= l ? (n - i) / (2 * l) : (n - i) / (2 - 2 * l)), [Math.round(r + 360) % 360, s, l]
}, goog.color.rgbArrayToHsl = function(e) {
    return goog.color.rgbToHsl(e[0], e[1], e[2])
}, goog.color.hueToRgb_ = function(e, t, o) {
    return 0 > o ? o += 1 : o > 1 && --o, 1 > 6 * o ? e + 6 * (t - e) * o : 1 > 2 * o ? t : 2 > 3 * o ? e + (t - e) * (2 / 3 - o) * 6 : e
}, goog.color.hslToRgb = function(e, t, o) {
    var n = 0,
        i = 0,
        r = 0;
    if (e /= 360, 0 == t) n = i = r = 255 * o;
    else var s = r = 0,
        s = .5 > o ? o * (1 + t) : o + t - t * o,
        r = 2 * o - s,
        n = 255 * goog.color.hueToRgb_(r, s, e + 1 / 3),
        i = 255 * goog.color.hueToRgb_(r, s, e),
        r = 255 * goog.color.hueToRgb_(r, s, e - 1 / 3);
    return [Math.round(n), Math.round(i), Math.round(r)]
}, goog.color.hslArrayToRgb = function(e) {
    return goog.color.hslToRgb(e[0], e[1], e[2])
}, goog.color.validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i, goog.color.isValidHexColor_ = function(e) {
    return goog.color.validHexColorRe_.test(e)
}, goog.color.normalizedHexColorRe_ = /^#[0-9a-f]{6}$/, goog.color.isNormalizedHexColor_ = function(e) {
    return goog.color.normalizedHexColorRe_.test(e)
}, goog.color.rgbColorRe_ = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, goog.color.isValidRgbColor_ = function(e) {
    var t = e.match(goog.color.rgbColorRe_);
    if (t) {
        e = Number(t[1]);
        var o = Number(t[2]),
            t = Number(t[3]);
        if (e >= 0 && 255 >= e && o >= 0 && 255 >= o && t >= 0 && 255 >= t) return [e, o, t]
    }
    return []
}, goog.color.prependZeroIfNecessaryHelper = function(e) {
    return 1 == e.length ? "0" + e : e
}, goog.color.prependHashIfNecessaryHelper = function(e) {
    return "#" == e.charAt(0) ? e : "#" + e
}, goog.color.rgbStyle_ = function(e) {
    return "rgb(" + e.join(",") + ")"
}, goog.color.hsvToRgb = function(e, t, o) {
    var n = 0,
        i = 0,
        r = 0;
    if (0 == t) r = i = n = o;
    else {
        var s = Math.floor(e / 60),
            l = e / 60 - s;
        e = o * (1 - t);
        var a = o * (1 - t * l);
        switch (t = o * (1 - t * (1 - l)), s) {
            case 1:
                n = a, i = o, r = e;
                break;
            case 2:
                n = e, i = o, r = t;
                break;
            case 3:
                n = e, i = a, r = o;
                break;
            case 4:
                n = t, i = e, r = o;
                break;
            case 5:
                n = o, i = e, r = a;
                break;
            case 6:
            case 0:
                n = o, i = t, r = e
        }
    }
    return [Math.floor(n), Math.floor(i), Math.floor(r)]
}, goog.color.rgbToHsv = function(e, t, o) {
    var n = Math.max(Math.max(e, t), o),
        i = Math.min(Math.min(e, t), o);
    if (i == n) i = e = 0;
    else {
        var r = n - i,
            i = r / n;
        e = 60 * (e == n ? (t - o) / r : t == n ? 2 + (o - e) / r : 4 + (e - t) / r), 0 > e && (e += 360), e > 360 && (e -= 360)
    }
    return [e, i, n]
}, goog.color.rgbArrayToHsv = function(e) {
    return goog.color.rgbToHsv(e[0], e[1], e[2])
}, goog.color.hsvArrayToRgb = function(e) {
    return goog.color.hsvToRgb(e[0], e[1], e[2])
}, goog.color.hexToHsl = function(e) {
    return e = goog.color.hexToRgb(e), goog.color.rgbToHsl(e[0], e[1], e[2])
}, goog.color.hslToHex = function(e, t, o) {
    return goog.color.rgbArrayToHex(goog.color.hslToRgb(e, t, o))
}, goog.color.hslArrayToHex = function(e) {
    return goog.color.rgbArrayToHex(goog.color.hslToRgb(e[0], e[1], e[2]))
}, goog.color.hexToHsv = function(e) {
    return goog.color.rgbArrayToHsv(goog.color.hexToRgb(e))
}, goog.color.hsvToHex = function(e, t, o) {
    return goog.color.rgbArrayToHex(goog.color.hsvToRgb(e, t, o))
}, goog.color.hsvArrayToHex = function(e) {
    return goog.color.hsvToHex(e[0], e[1], e[2])
}, goog.color.hslDistance = function(e, t) {
    var o, n;
    return o = .5 >= e[2] ? e[1] * e[2] : e[1] * (1 - e[2]), n = .5 >= t[2] ? t[1] * t[2] : t[1] * (1 - t[2]), (e[2] - t[2]) * (e[2] - t[2]) + o * o + n * n - 2 * o * n * Math.cos(2 * (e[0] / 360 - t[0] / 360) * Math.PI)
}, goog.color.blend = function(e, t, o) {
    return o = goog.math.clamp(o, 0, 1), [Math.round(o * e[0] + (1 - o) * t[0]), Math.round(o * e[1] + (1 - o) * t[1]), Math.round(o * e[2] + (1 - o) * t[2])]
}, goog.color.darken = function(e, t) {
    return goog.color.blend([0, 0, 0], e, t)
}, goog.color.lighten = function(e, t) {
    return goog.color.blend([255, 255, 255], e, t)
}, goog.color.highContrast = function(e, t) {
    for (var o = [], n = 0; n < t.length; n++) o.push({
        color: t[n],
        diff: goog.color.yiqBrightnessDiff_(t[n], e) + goog.color.colorDiff_(t[n], e)
    });
    return o.sort(function(e, t) {
        return t.diff - e.diff
    }), o[0].color
}, goog.color.yiqBrightness_ = function(e) {
    return Math.round((299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3)
}, goog.color.yiqBrightnessDiff_ = function(e, t) {
    return Math.abs(goog.color.yiqBrightness_(e) - goog.color.yiqBrightness_(t))
}, goog.color.colorDiff_ = function(e, t) {
    return Math.abs(e[0] - t[0]) + Math.abs(e[1] - t[1]) + Math.abs(e[2] - t[2])
}, goog.iter = {}, goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration"), goog.iter.Iterator = function() {}, goog.iter.Iterator.prototype.next = function() {
    throw goog.iter.StopIteration
}, goog.iter.Iterator.prototype.__iterator__ = function() {
    return this
}, goog.iter.toIterator = function(e) {
    if (e instanceof goog.iter.Iterator) return e;
    if ("function" == typeof e.__iterator__) return e.__iterator__(!1);
    if (goog.isArrayLike(e)) {
        var t = 0,
            o = new goog.iter.Iterator;
        return o.next = function() {
            for (;;) {
                if (t >= e.length) throw goog.iter.StopIteration;
                if (t in e) return e[t++];
                t++
            }
        }, o
    }
    throw Error("Not implemented")
}, goog.iter.forEach = function(e, t, o) {
    if (goog.isArrayLike(e)) try {
        goog.array.forEach(e, t, o)
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    } else {
        e = goog.iter.toIterator(e);
        try {
            for (;;) t.call(o, e.next(), void 0, e)
        } catch (i) {
            if (i !== goog.iter.StopIteration) throw i
        }
    }
}, goog.iter.filter = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        for (;;) {
            var e = n.next();
            if (t.call(o, e, void 0, n)) return e
        }
    }, e
}, goog.iter.filterFalse = function(e, t, o) {
    return goog.iter.filter(e, goog.functions.not(t), o)
}, goog.iter.range = function(e, t, o) {
    var n = 0,
        i = e,
        r = o || 1;
    if (1 < arguments.length && (n = e, i = t), 0 == r) throw Error("Range step argument must not be zero");
    var s = new goog.iter.Iterator;
    return s.next = function() {
        if (r > 0 && n >= i || 0 > r && i >= n) throw goog.iter.StopIteration;
        var e = n;
        return n += r, e
    }, s
}, goog.iter.join = function(e, t) {
    return goog.iter.toArray(e).join(t)
}, goog.iter.map = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        var e = n.next();
        return t.call(o, e, void 0, n)
    }, e
}, goog.iter.reduce = function(e, t, o, n) {
    var i = o;
    return goog.iter.forEach(e, function(e) {
        i = t.call(n, i, e)
    }), i
}, goog.iter.some = function(e, t, o) {
    e = goog.iter.toIterator(e);
    try {
        for (;;)
            if (t.call(o, e.next(), void 0, e)) return !0
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    }
    return !1
}, goog.iter.every = function(e, t, o) {
    e = goog.iter.toIterator(e);
    try {
        for (;;)
            if (!t.call(o, e.next(), void 0, e)) return !1
    } catch (n) {
        if (n !== goog.iter.StopIteration) throw n
    }
    return !0
}, goog.iter.chain = function() {
    return goog.iter.chainFromIterable(arguments)
}, goog.iter.chainFromIterable = function(e) {
    var t = goog.iter.toIterator(e);
    e = new goog.iter.Iterator;
    var o = null;
    return e.next = function() {
        for (;;) {
            if (null == o) {
                var e = t.next();
                o = goog.iter.toIterator(e)
            }
            try {
                return o.next()
            } catch (n) {
                if (n !== goog.iter.StopIteration) throw n;
                o = null
            }
        }
    }, e
}, goog.iter.dropWhile = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    e = new goog.iter.Iterator;
    var i = !0;
    return e.next = function() {
        for (;;) {
            var e = n.next();
            if (!i || !t.call(o, e, void 0, n)) return i = !1, e
        }
    }, e
}, goog.iter.takeWhile = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        var e = n.next();
        if (t.call(o, e, void 0, n)) return e;
        throw goog.iter.StopIteration
    }, e
}, goog.iter.toArray = function(e) {
    if (goog.isArrayLike(e)) return goog.array.toArray(e);
    e = goog.iter.toIterator(e);
    var t = [];
    return goog.iter.forEach(e, function(e) {
        t.push(e)
    }), t
}, goog.iter.equals = function(e, t, o) {
    e = goog.iter.zipLongest({}, e, t);
    var n = o || goog.array.defaultCompareEquality;
    return goog.iter.every(e, function(e) {
        return n(e[0], e[1])
    })
}, goog.iter.nextOrValue = function(e, t) {
    try {
        return goog.iter.toIterator(e).next()
    } catch (o) {
        if (o != goog.iter.StopIteration) throw o;
        return t
    }
}, goog.iter.product = function() {
    if (goog.array.some(arguments, function(e) {
            return !e.length
        }) || !arguments.length) return new goog.iter.Iterator;
    var e = new goog.iter.Iterator,
        t = arguments,
        o = goog.array.repeat(0, t.length);
    return e.next = function() {
        if (o) {
            for (var e = goog.array.map(o, function(e, o) {
                    return t[o][e]
                }), n = o.length - 1; n >= 0; n--) {
                if (goog.asserts.assert(o), o[n] < t[n].length - 1) {
                    o[n]++;
                    break
                }
                if (0 == n) {
                    o = null;
                    break
                }
                o[n] = 0
            }
            return e
        }
        throw goog.iter.StopIteration
    }, e
}, goog.iter.cycle = function(e) {
    var t = goog.iter.toIterator(e),
        o = [],
        n = 0;
    e = new goog.iter.Iterator;
    var i = !1;
    return e.next = function() {
        var e = null;
        if (!i) try {
            return e = t.next(), o.push(e), e
        } catch (r) {
            if (r != goog.iter.StopIteration || goog.array.isEmpty(o)) throw r;
            i = !0
        }
        return e = o[n], n = (n + 1) % o.length, e
    }, e
}, goog.iter.count = function(e, t) {
    var o = e || 0,
        n = goog.isDef(t) ? t : 1,
        i = new goog.iter.Iterator;
    return i.next = function() {
        var e = o;
        return o += n, e
    }, i
}, goog.iter.repeat = function(e) {
    var t = new goog.iter.Iterator;
    return t.next = goog.functions.constant(e), t
}, goog.iter.accumulate = function(e) {
    var t = goog.iter.toIterator(e),
        o = 0;
    return e = new goog.iter.Iterator, e.next = function() {
        return o += t.next()
    }, e
}, goog.iter.zip = function() {
    var e = arguments,
        t = new goog.iter.Iterator;
    if (0 < e.length) {
        var o = goog.array.map(e, goog.iter.toIterator);
        t.next = function() {
            return goog.array.map(o, function(e) {
                return e.next()
            })
        }
    }
    return t
}, goog.iter.zipLongest = function(e) {
    var t = goog.array.slice(arguments, 1),
        o = new goog.iter.Iterator;
    if (0 < t.length) {
        var n = goog.array.map(t, goog.iter.toIterator);
        o.next = function() {
            var t = !1,
                o = goog.array.map(n, function(o) {
                    var n;
                    try {
                        n = o.next(), t = !0
                    } catch (i) {
                        if (i !== goog.iter.StopIteration) throw i;
                        n = e
                    }
                    return n
                });
            if (!t) throw goog.iter.StopIteration;
            return o
        }
    }
    return o
}, goog.iter.compress = function(e, t) {
    var o = goog.iter.toIterator(t);
    return goog.iter.filter(e, function() {
        return !!o.next()
    })
}, goog.iter.GroupByIterator_ = function(e, t) {
    this.iterator = goog.iter.toIterator(e), this.keyFunc = t || goog.functions.identity
}, goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator), goog.iter.GroupByIterator_.prototype.next = function() {
    for (; this.currentKey == this.targetKey;) this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
    return this.targetKey = this.currentKey, [this.currentKey, this.groupItems_(this.targetKey)]
}, goog.iter.GroupByIterator_.prototype.groupItems_ = function(e) {
    for (var t = []; this.currentKey == e;) {
        t.push(this.currentValue);
        try {
            this.currentValue = this.iterator.next()
        } catch (o) {
            if (o !== goog.iter.StopIteration) throw o;
            break
        }
        this.currentKey = this.keyFunc(this.currentValue)
    }
    return t
}, goog.iter.groupBy = function(e, t) {
    return new goog.iter.GroupByIterator_(e, t)
}, goog.iter.starMap = function(e, t, o) {
    var n = goog.iter.toIterator(e);
    return e = new goog.iter.Iterator, e.next = function() {
        var e = goog.iter.toArray(n.next());
        return t.apply(o, goog.array.concat(e, void 0, n))
    }, e
}, goog.iter.tee = function(e, t) {
    var o = goog.iter.toIterator(e),
        n = goog.isNumber(t) ? t : 2,
        i = goog.array.map(goog.array.range(n), function() {
            return []
        }),
        r = function() {
            var e = o.next();
            goog.array.forEach(i, function(t) {
                t.push(e)
            })
        };
    return goog.array.map(i, function(e) {
        var t = new goog.iter.Iterator;
        return t.next = function() {
            return goog.array.isEmpty(e) && r(), goog.asserts.assert(!goog.array.isEmpty(e)), e.shift()
        }, t
    })
}, goog.iter.enumerate = function(e, t) {
    return goog.iter.zip(goog.iter.count(t), e)
}, goog.iter.limit = function(e, t) {
    goog.asserts.assert(goog.math.isInt(t) && t >= 0);
    var o = goog.iter.toIterator(e),
        n = new goog.iter.Iterator,
        i = t;
    return n.next = function() {
        if (0 < i--) return o.next();
        throw goog.iter.StopIteration
    }, n
}, goog.iter.consume = function(e, t) {
    goog.asserts.assert(goog.math.isInt(t) && t >= 0);
    for (var o = goog.iter.toIterator(e); 0 < t--;) goog.iter.nextOrValue(o, null);
    return o
}, goog.iter.slice = function(e, t, o) {
    return goog.asserts.assert(goog.math.isInt(t) && t >= 0), e = goog.iter.consume(e, t), goog.isNumber(o) && (goog.asserts.assert(goog.math.isInt(o) && o >= t), e = goog.iter.limit(e, o - t)), e
}, goog.iter.hasDuplicates_ = function(e) {
    var t = [];
    return goog.array.removeDuplicates(e, t), e.length != t.length
}, goog.iter.permutations = function(e, t) {
    var o = goog.iter.toArray(e),
        n = goog.isNumber(t) ? t : o.length,
        o = goog.array.repeat(o, n),
        o = goog.iter.product.apply(void 0, o);
    return goog.iter.filter(o, function(e) {
        return !goog.iter.hasDuplicates_(e)
    })
}, goog.iter.combinations = function(e, t) {
    function o(e) {
        return n[e]
    }
    var n = goog.iter.toArray(e),
        i = goog.iter.range(n.length),
        i = goog.iter.permutations(i, t),
        r = goog.iter.filter(i, function(e) {
            return goog.array.isSorted(e)
        }),
        i = new goog.iter.Iterator;
    return i.next = function() {
        return goog.array.map(r.next(), o)
    }, i
}, goog.iter.combinationsWithReplacement = function(e, t) {
    function o(e) {
        return n[e]
    }
    var n = goog.iter.toArray(e),
        i = goog.array.range(n.length),
        i = goog.array.repeat(i, t),
        i = goog.iter.product.apply(void 0, i),
        r = goog.iter.filter(i, function(e) {
            return goog.array.isSorted(e)
        }),
        i = new goog.iter.Iterator;
    return i.next = function() {
        return goog.array.map(r.next(), o)
    }, i
}, goog.dom.TagWalkType = {
    START_TAG: 1,
    OTHER: 0,
    END_TAG: -1
}, goog.dom.TagIterator = function(e, t, o, n, i) {
    this.reversed = !!t, e && this.setPosition(e, n), this.depth = void 0 != i ? i : this.tagType || 0, this.reversed && (this.depth *= -1), this.constrained = !o
}, goog.inherits(goog.dom.TagIterator, goog.iter.Iterator), goog.dom.TagIterator.prototype.node = null, goog.dom.TagIterator.prototype.tagType = goog.dom.TagWalkType.OTHER, goog.dom.TagIterator.prototype.started_ = !1, goog.dom.TagIterator.prototype.setPosition = function(e, t, o) {
    (this.node = e) && (this.tagType = goog.isNumber(t) ? t : this.node.nodeType != goog.dom.NodeType.ELEMENT ? goog.dom.TagWalkType.OTHER : this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG), goog.isNumber(o) && (this.depth = o)
}, goog.dom.TagIterator.prototype.copyFrom = function(e) {
    this.node = e.node, this.tagType = e.tagType, this.depth = e.depth, this.reversed = e.reversed, this.constrained = e.constrained
}, goog.dom.TagIterator.prototype.clone = function() {
    return new goog.dom.TagIterator(this.node, this.reversed, !this.constrained, this.tagType, this.depth)
}, goog.dom.TagIterator.prototype.skipTag = function() {
    var e = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
    this.tagType == e && (this.tagType = -1 * e, this.depth += this.tagType * (this.reversed ? -1 : 1))
}, goog.dom.TagIterator.prototype.restartTag = function() {
    var e = this.reversed ? goog.dom.TagWalkType.START_TAG : goog.dom.TagWalkType.END_TAG;
    this.tagType == e && (this.tagType = -1 * e, this.depth += this.tagType * (this.reversed ? -1 : 1))
}, goog.dom.TagIterator.prototype.next = function() {
    var e;
    if (this.started_) {
        if (!this.node || this.constrained && 0 == this.depth) throw goog.iter.StopIteration;
        e = this.node;
        var t = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
        if (this.tagType == t) {
            var o = this.reversed ? e.lastChild : e.firstChild;
            o ? this.setPosition(o) : this.setPosition(e, -1 * t)
        } else(o = this.reversed ? e.previousSibling : e.nextSibling) ? this.setPosition(o) : this.setPosition(e.parentNode, -1 * t);
        this.depth += this.tagType * (this.reversed ? -1 : 1)
    } else this.started_ = !0;
    if (e = this.node, !this.node) throw goog.iter.StopIteration;
    return e
}, goog.dom.TagIterator.prototype.isStarted = function() {
    return this.started_
}, goog.dom.TagIterator.prototype.isStartTag = function() {
    return this.tagType == goog.dom.TagWalkType.START_TAG
}, goog.dom.TagIterator.prototype.isEndTag = function() {
    return this.tagType == goog.dom.TagWalkType.END_TAG
}, goog.dom.TagIterator.prototype.isNonElement = function() {
    return this.tagType == goog.dom.TagWalkType.OTHER
}, goog.dom.TagIterator.prototype.equals = function(e) {
    return e.node == this.node && (!this.node || e.tagType == this.tagType)
}, goog.dom.TagIterator.prototype.splice = function() {
    var e = this.node;
    this.restartTag(), this.reversed = !this.reversed, goog.dom.TagIterator.prototype.next.call(this), this.reversed = !this.reversed;
    for (var t = goog.isArrayLike(arguments[0]) ? arguments[0] : arguments, o = t.length - 1; o >= 0; o--) goog.dom.insertSiblingAfter(t[o], e);
    goog.dom.removeNode(e)
}, goog.dom.NodeIterator = function(e, t, o, n) {
    goog.dom.TagIterator.call(this, e, t, o, null, n)
}, goog.inherits(goog.dom.NodeIterator, goog.dom.TagIterator), goog.dom.NodeIterator.prototype.next = function() {
    do goog.dom.NodeIterator.superClass_.next.call(this); while (this.isEndTag());
    return this.node
}, goog.ui.PaletteRenderer = function() {
    goog.ui.ControlRenderer.call(this)
}, goog.inherits(goog.ui.PaletteRenderer, goog.ui.ControlRenderer), goog.addSingletonGetter(goog.ui.PaletteRenderer), goog.ui.PaletteRenderer.cellId_ = 0, goog.ui.PaletteRenderer.CSS_CLASS = "goog-palette", goog.ui.PaletteRenderer.prototype.createDom = function(e) {
    var t = this.getClassNames(e);
    return e = e.getDomHelper().createDom(goog.dom.TagName.DIV, t ? t.join(" ") : null, this.createGrid(e.getContent(), e.getSize(), e.getDomHelper())), goog.a11y.aria.setRole(e, goog.a11y.aria.Role.GRID), e
}, goog.ui.PaletteRenderer.prototype.createGrid = function(e, t, o) {
    for (var n = [], i = 0, r = 0; i < t.height; i++) {
        for (var s = [], l = 0; l < t.width; l++) {
            var a = e && e[r++];
            s.push(this.createCell(a, o))
        }
        n.push(this.createRow(s, o))
    }
    return this.createTable(n, o)
}, goog.ui.PaletteRenderer.prototype.createTable = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TABLE, this.getCssClass() + "-table", t.createDom(goog.dom.TagName.TBODY, this.getCssClass() + "-body", e));
    return o.cellSpacing = 0, o.cellPadding = 0, o
}, goog.ui.PaletteRenderer.prototype.createRow = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TR, this.getCssClass() + "-row", e);
    return goog.a11y.aria.setRole(o, goog.a11y.aria.Role.ROW), o
}, goog.ui.PaletteRenderer.prototype.createCell = function(e, t) {
    var o = t.createDom(goog.dom.TagName.TD, {
        "class": this.getCssClass() + "-cell",
        id: this.getCssClass() + "-cell-" + goog.ui.PaletteRenderer.cellId_++
    }, e);
    if (goog.a11y.aria.setRole(o, goog.a11y.aria.Role.GRIDCELL), goog.a11y.aria.setState(o, goog.a11y.aria.State.SELECTED, !1), !goog.dom.getTextContent(o) && !goog.a11y.aria.getLabel(o)) {
        var n = this.findAriaLabelForCell_(o);
        n && goog.a11y.aria.setLabel(o, n)
    }
    return o
}, goog.ui.PaletteRenderer.prototype.findAriaLabelForCell_ = function(e) {
    e = new goog.dom.NodeIterator(e);
    for (var t, o = ""; !o && (t = goog.iter.nextOrValue(e, null));) t.nodeType == goog.dom.NodeType.ELEMENT && (o = goog.a11y.aria.getLabel(t) || t.title);
    return o
}, goog.ui.PaletteRenderer.prototype.canDecorate = function() {
    return !1
}, goog.ui.PaletteRenderer.prototype.decorate = function() {
    return null
}, goog.ui.PaletteRenderer.prototype.setContent = function(e, t) {
    if (e) {
        var o = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.TBODY, this.getCssClass() + "-body", e)[0];
        if (o) {
            var n = 0;
            if (goog.array.forEach(o.rows, function(e) {
                    goog.array.forEach(e.cells, function(e) {
                        if (goog.dom.removeChildren(e), t) {
                            var o = t[n++];
                            o && goog.dom.appendChild(e, o)
                        }
                    })
                }), n < t.length) {
                for (var i = [], r = goog.dom.getDomHelper(e), s = o.rows[0].cells.length; n < t.length;) {
                    var l = t[n++];
                    i.push(this.createCell(l, r)), i.length == s && (l = this.createRow(i, r), goog.dom.appendChild(o, l), i.length = 0)
                }
                if (0 < i.length) {
                    for (; i.length < s;) i.push(this.createCell("", r));
                    l = this.createRow(i, r), goog.dom.appendChild(o, l)
                }
            }
        }
        goog.style.setUnselectable(e, !0, goog.userAgent.GECKO)
    }
}, goog.ui.PaletteRenderer.prototype.getContainingItem = function(e, t) {
    for (var o = e.getElement(); t && t.nodeType == goog.dom.NodeType.ELEMENT && t != o;) {
        if (t.tagName == goog.dom.TagName.TD && goog.dom.classlist.contains(t, this.getCssClass() + "-cell")) return t.firstChild;
        t = t.parentNode
    }
    return null
}, goog.ui.PaletteRenderer.prototype.highlightCell = function(e, t, o) {
    t && (t = this.getCellForItem(t), goog.asserts.assert(t), goog.dom.classlist.enable(t, this.getCssClass() + "-cell-hover", o), o ? goog.a11y.aria.setState(e.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT, t.id) : t.id == goog.a11y.aria.getState(e.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT) && goog.a11y.aria.removeState(e.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT))
}, goog.ui.PaletteRenderer.prototype.getCellForItem = function(e) {
    return e ? e.parentNode : null
}, goog.ui.PaletteRenderer.prototype.selectCell = function(e, t, o) {
    t && (e = t.parentNode, goog.dom.classlist.enable(e, this.getCssClass() + "-cell-selected", o), goog.a11y.aria.setState(e, goog.a11y.aria.State.SELECTED, o))
}, goog.ui.PaletteRenderer.prototype.getCssClass = function() {
    return goog.ui.PaletteRenderer.CSS_CLASS
}, goog.ui.SelectionModel = function(e) {
    goog.events.EventTarget.call(this), this.items_ = [], this.addItems(e)
}, goog.inherits(goog.ui.SelectionModel, goog.events.EventTarget), goog.tagUnsealableClass(goog.ui.SelectionModel), goog.ui.SelectionModel.prototype.selectedItem_ = null, goog.ui.SelectionModel.prototype.selectionHandler_ = null, goog.ui.SelectionModel.prototype.getSelectionHandler = function() {
    return this.selectionHandler_
}, goog.ui.SelectionModel.prototype.setSelectionHandler = function(e) {
    this.selectionHandler_ = e
}, goog.ui.SelectionModel.prototype.getItemCount = function() {
    return this.items_.length
}, goog.ui.SelectionModel.prototype.indexOfItem = function(e) {
    return e ? goog.array.indexOf(this.items_, e) : -1
}, goog.ui.SelectionModel.prototype.getFirst = function() {
    return this.items_[0]
}, goog.ui.SelectionModel.prototype.getLast = function() {
    return this.items_[this.items_.length - 1]
}, goog.ui.SelectionModel.prototype.getItemAt = function(e) {
    return this.items_[e] || null
}, goog.ui.SelectionModel.prototype.addItems = function(e) {
    e && (goog.array.forEach(e, function(e) {
        this.selectItem_(e, !1)
    }, this), goog.array.extend(this.items_, e))
}, goog.ui.SelectionModel.prototype.addItem = function(e) {
    this.addItemAt(e, this.getItemCount())
}, goog.ui.SelectionModel.prototype.addItemAt = function(e, t) {
    e && (this.selectItem_(e, !1), goog.array.insertAt(this.items_, e, t))
}, goog.ui.SelectionModel.prototype.removeItem = function(e) {
    e && goog.array.remove(this.items_, e) && e == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent(goog.events.EventType.SELECT))
}, goog.ui.SelectionModel.prototype.removeItemAt = function(e) {
    this.removeItem(this.getItemAt(e))
}, goog.ui.SelectionModel.prototype.getSelectedItem = function() {
    return this.selectedItem_
}, goog.ui.SelectionModel.prototype.getItems = function() {
    return goog.array.clone(this.items_)
}, goog.ui.SelectionModel.prototype.setSelectedItem = function(e) {
    e != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = e, this.selectItem_(e, !0)), this.dispatchEvent(goog.events.EventType.SELECT)
}, goog.ui.SelectionModel.prototype.getSelectedIndex = function() {
    return this.indexOfItem(this.selectedItem_)
}, goog.ui.SelectionModel.prototype.setSelectedIndex = function(e) {
    this.setSelectedItem(this.getItemAt(e))
}, goog.ui.SelectionModel.prototype.clear = function() {
    goog.array.clear(this.items_), this.selectedItem_ = null
}, goog.ui.SelectionModel.prototype.disposeInternal = function() {
    goog.ui.SelectionModel.superClass_.disposeInternal.call(this), delete this.items_, this.selectedItem_ = null
}, goog.ui.SelectionModel.prototype.selectItem_ = function(e, t) {
    e && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(e, t) : "function" == typeof e.setSelected && e.setSelected(t))
}, goog.ui.Palette = function(e, t, o) {
    goog.ui.Control.call(this, e, t || goog.ui.PaletteRenderer.getInstance(), o), this.setAutoStates(goog.ui.Component.State.CHECKED | goog.ui.Component.State.SELECTED | goog.ui.Component.State.OPENED, !1), this.currentCellControl_ = new goog.ui.Palette.CurrentCell_, this.currentCellControl_.setParentEventTarget(this), this.lastHighlightedIndex_ = -1
}, goog.inherits(goog.ui.Palette, goog.ui.Control), goog.tagUnsealableClass(goog.ui.Palette), goog.ui.Palette.EventType = {
    AFTER_HIGHLIGHT: goog.events.getUniqueId("afterhighlight")
}, goog.ui.Palette.prototype.size_ = null, goog.ui.Palette.prototype.highlightedIndex_ = -1, goog.ui.Palette.prototype.selectionModel_ = null, goog.ui.Palette.prototype.disposeInternal = function() {
    goog.ui.Palette.superClass_.disposeInternal.call(this), this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null), this.size_ = null, this.currentCellControl_.dispose()
}, goog.ui.Palette.prototype.setContentInternal = function(e) {
    goog.ui.Palette.superClass_.setContentInternal.call(this, e), this.adjustSize_(), this.selectionModel_ ? (this.selectionModel_.clear(), this.selectionModel_.addItems(e)) : (this.selectionModel_ = new goog.ui.SelectionModel(e), this.selectionModel_.setSelectionHandler(goog.bind(this.selectItem_, this)), this.getHandler().listen(this.selectionModel_, goog.events.EventType.SELECT, this.handleSelectionChange)), this.highlightedIndex_ = -1
}, goog.ui.Palette.prototype.getCaption = function() {
    return ""
}, goog.ui.Palette.prototype.setCaption = function() {}, goog.ui.Palette.prototype.handleMouseOver = function(e) {
    goog.ui.Palette.superClass_.handleMouseOver.call(this, e);
    var t = this.getRenderer().getContainingItem(this, e.target);
    t && e.relatedTarget && goog.dom.contains(t, e.relatedTarget) || t != this.getHighlightedItem() && this.setHighlightedItem(t)
}, goog.ui.Palette.prototype.handleMouseDown = function(e) {
    goog.ui.Palette.superClass_.handleMouseDown.call(this, e), this.isActive() && (e = this.getRenderer().getContainingItem(this, e.target), e != this.getHighlightedItem() && this.setHighlightedItem(e))
}, goog.ui.Palette.prototype.performActionInternal = function(e) {
    var t = this.getHighlightedItem();
    return t ? (this.setSelectedItem(t), goog.ui.Palette.superClass_.performActionInternal.call(this, e)) : !1
}, goog.ui.Palette.prototype.handleKeyEvent = function(e) {
    var t = this.getContent(),
        t = t ? t.length : 0,
        o = this.size_.width;
    if (0 == t || !this.isEnabled()) return !1;
    if (e.keyCode == goog.events.KeyCodes.ENTER || e.keyCode == goog.events.KeyCodes.SPACE) return this.performActionInternal(e);
    if (e.keyCode == goog.events.KeyCodes.HOME) return this.setHighlightedIndex(0), !0;
    if (e.keyCode == goog.events.KeyCodes.END) return this.setHighlightedIndex(t - 1), !0;
    var n = 0 > this.highlightedIndex_ ? this.getSelectedIndex() : this.highlightedIndex_;
    switch (e.keyCode) {
        case goog.events.KeyCodes.LEFT:
            return (-1 == n || 0 == n) && (n = t), this.setHighlightedIndex(n - 1), e.preventDefault(), !0;
        case goog.events.KeyCodes.RIGHT:
            return n == t - 1 && (n = -1), this.setHighlightedIndex(n + 1), e.preventDefault(), !0;
        case goog.events.KeyCodes.UP:
            if (-1 == n && (n = t + o - 1), n >= o) return this.setHighlightedIndex(n - o), e.preventDefault(), !0;
            break;
        case goog.events.KeyCodes.DOWN:
            if (-1 == n && (n = -o), t - o > n) return this.setHighlightedIndex(n + o), e.preventDefault(), !0
    }
    return !1
}, goog.ui.Palette.prototype.handleSelectionChange = function() {}, goog.ui.Palette.prototype.getSize = function() {
    return this.size_
}, goog.ui.Palette.prototype.setSize = function(e, t) {
    if (this.getElement()) throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
    this.size_ = goog.isNumber(e) ? new goog.math.Size(e, t) : e, this.adjustSize_()
}, goog.ui.Palette.prototype.getHighlightedIndex = function() {
    return this.highlightedIndex_
}, goog.ui.Palette.prototype.getHighlightedItem = function() {
    var e = this.getContent();
    return e && e[this.highlightedIndex_]
}, goog.ui.Palette.prototype.getHighlightedCellElement_ = function() {
    return this.getRenderer().getCellForItem(this.getHighlightedItem())
}, goog.ui.Palette.prototype.setHighlightedIndex = function(e) {
    e != this.highlightedIndex_ && (this.highlightIndex_(this.highlightedIndex_, !1), this.lastHighlightedIndex_ = this.highlightedIndex_, this.highlightedIndex_ = e, this.highlightIndex_(e, !0), this.dispatchEvent(goog.ui.Palette.EventType.AFTER_HIGHLIGHT))
}, goog.ui.Palette.prototype.setHighlightedItem = function(e) {
    var t = this.getContent();
    this.setHighlightedIndex(t ? goog.array.indexOf(t, e) : -1)
}, goog.ui.Palette.prototype.getSelectedIndex = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
}, goog.ui.Palette.prototype.getSelectedItem = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
}, goog.ui.Palette.prototype.setSelectedIndex = function(e) {
    this.selectionModel_ && this.selectionModel_.setSelectedIndex(e)
}, goog.ui.Palette.prototype.setSelectedItem = function(e) {
    this.selectionModel_ && this.selectionModel_.setSelectedItem(e)
}, goog.ui.Palette.prototype.highlightIndex_ = function(e, t) {
    if (this.getElement()) {
        var o = this.getContent();
        if (o && e >= 0 && e < o.length) {
            var n = this.getHighlightedCellElement_();
            this.currentCellControl_.getElement() != n && this.currentCellControl_.setElementInternal(n), this.currentCellControl_.tryHighlight(t) && this.getRenderer().highlightCell(this, o[e], t)
        }
    }
}, goog.ui.Palette.prototype.setHighlighted = function(e) {
    e && -1 == this.highlightedIndex_ ? this.setHighlightedIndex(-1 < this.lastHighlightedIndex_ ? this.lastHighlightedIndex_ : 0) : e || this.setHighlightedIndex(-1), goog.ui.Palette.superClass_.setHighlighted.call(this, e)
}, goog.ui.Palette.prototype.selectItem_ = function(e, t) {
    this.getElement() && this.getRenderer().selectCell(this, e, t)
}, goog.ui.Palette.prototype.adjustSize_ = function() {
    var e = this.getContent();
    e ? this.size_ && this.size_.width ? (e = Math.ceil(e.length / this.size_.width), (!goog.isNumber(this.size_.height) || this.size_.height < e) && (this.size_.height = e)) : (e = Math.ceil(Math.sqrt(e.length)), this.size_ = new goog.math.Size(e, e)) : this.size_ = new goog.math.Size(0, 0)
}, goog.ui.Palette.CurrentCell_ = function() {
    goog.ui.Control.call(this, null), this.setDispatchTransitionEvents(goog.ui.Component.State.HOVER, !0)
}, goog.inherits(goog.ui.Palette.CurrentCell_, goog.ui.Control), goog.ui.Palette.CurrentCell_.prototype.tryHighlight = function(e) {
    return this.setHighlighted(e), this.isHighlighted() == e
}, goog.ui.ColorPalette = function(e, t, o) {
    this.colors_ = e || [], goog.ui.Palette.call(this, null, t || goog.ui.PaletteRenderer.getInstance(), o), this.setColors(this.colors_)
}, goog.inherits(goog.ui.ColorPalette, goog.ui.Palette), goog.tagUnsealableClass(goog.ui.ColorPalette), goog.ui.ColorPalette.prototype.normalizedColors_ = null, goog.ui.ColorPalette.prototype.labels_ = null, goog.ui.ColorPalette.prototype.getColors = function() {
    return this.colors_
}, goog.ui.ColorPalette.prototype.setColors = function(e, t) {
    this.colors_ = e, this.labels_ = t || null, this.normalizedColors_ = null, this.setContent(this.createColorNodes())
}, goog.ui.ColorPalette.prototype.getSelectedColor = function() {
    var e = this.getSelectedItem();
    return e ? (e = goog.style.getStyle(e, "background-color"), goog.ui.ColorPalette.parseColor_(e)) : null
}, goog.ui.ColorPalette.prototype.setSelectedColor = function(e) {
    e = goog.ui.ColorPalette.parseColor_(e), this.normalizedColors_ || (this.normalizedColors_ = goog.array.map(this.colors_, function(e) {
        return goog.ui.ColorPalette.parseColor_(e)
    })), this.setSelectedIndex(e ? goog.array.indexOf(this.normalizedColors_, e) : -1)
}, goog.ui.ColorPalette.prototype.createColorNodes = function() {
    return goog.array.map(this.colors_, function(e, t) {
        var o = this.getDomHelper().createDom("div", {
            "class": this.getRenderer().getCssClass() + "-colorswatch",
            style: "background-color:" + e
        });
        return o.title = this.labels_ && this.labels_[t] ? this.labels_[t] : "#" == e.charAt(0) ? "RGB (" + goog.color.hexToRgb(e).join(", ") + ")" : e, o
    }, this)
}, goog.ui.ColorPalette.parseColor_ = function(e) {
    if (e) try {
        return goog.color.parse(e).hex
    } catch (t) {}
    return null
}, goog.ui.ColorPicker = function(e, t) {
    goog.ui.Component.call(this, e), this.colorPalette_ = t || null, this.getHandler().listen(this, goog.ui.Component.EventType.ACTION, this.onColorPaletteAction_)
}, goog.inherits(goog.ui.ColorPicker, goog.ui.Component), goog.ui.ColorPicker.DEFAULT_NUM_COLS = 5, goog.ui.ColorPicker.EventType = {
    CHANGE: "change"
}, goog.ui.ColorPicker.prototype.focusable_ = !0, goog.ui.ColorPicker.prototype.getColors = function() {
    return this.colorPalette_ ? this.colorPalette_.getColors() : null
}, goog.ui.ColorPicker.prototype.setColors = function(e) {
    this.colorPalette_ ? this.colorPalette_.setColors(e) : this.createColorPalette_(e)
}, goog.ui.ColorPicker.prototype.addColors = function(e) {
    this.setColors(e)
}, goog.ui.ColorPicker.prototype.setSize = function(e) {
    this.colorPalette_ || this.createColorPalette_([]), this.colorPalette_.setSize(e)
}, goog.ui.ColorPicker.prototype.getSize = function() {
    return this.colorPalette_ ? this.colorPalette_.getSize() : null
}, goog.ui.ColorPicker.prototype.setColumnCount = function(e) {
    this.setSize(e)
}, goog.ui.ColorPicker.prototype.getSelectedIndex = function() {
    return this.colorPalette_ ? this.colorPalette_.getSelectedIndex() : -1
}, goog.ui.ColorPicker.prototype.setSelectedIndex = function(e) {
    this.colorPalette_ && this.colorPalette_.setSelectedIndex(e)
}, goog.ui.ColorPicker.prototype.getSelectedColor = function() {
    return this.colorPalette_ ? this.colorPalette_.getSelectedColor() : null
}, goog.ui.ColorPicker.prototype.setSelectedColor = function(e) {
    this.colorPalette_ && this.colorPalette_.setSelectedColor(e)
}, goog.ui.ColorPicker.prototype.isFocusable = function() {
    return this.focusable_
}, goog.ui.ColorPicker.prototype.setFocusable = function(e) {
    this.focusable_ = e, this.colorPalette_ && this.colorPalette_.setSupportedState(goog.ui.Component.State.FOCUSED, e)
}, goog.ui.ColorPicker.prototype.canDecorate = function() {
    return !1
}, goog.ui.ColorPicker.prototype.enterDocument = function() {
    goog.ui.ColorPicker.superClass_.enterDocument.call(this), this.colorPalette_ && this.colorPalette_.render(this.getElement()), this.getElement().unselectable = "on"
}, goog.ui.ColorPicker.prototype.disposeInternal = function() {
    goog.ui.ColorPicker.superClass_.disposeInternal.call(this), this.colorPalette_ && (this.colorPalette_.dispose(), this.colorPalette_ = null)
}, goog.ui.ColorPicker.prototype.focus = function() {
    this.colorPalette_ && this.colorPalette_.getElement().focus()
}, goog.ui.ColorPicker.prototype.onColorPaletteAction_ = function(e) {
    e.stopPropagation(), this.dispatchEvent(goog.ui.ColorPicker.EventType.CHANGE)
}, goog.ui.ColorPicker.prototype.createColorPalette_ = function(e) {
    e = new goog.ui.ColorPalette(e, null, this.getDomHelper()), e.setSize(goog.ui.ColorPicker.DEFAULT_NUM_COLS), e.setSupportedState(goog.ui.Component.State.FOCUSED, this.focusable_), this.addChild(e), this.colorPalette_ = e, this.isInDocument() && this.colorPalette_.render(this.getElement())
}, goog.ui.ColorPicker.createSimpleColorGrid = function(e) {
    return e = new goog.ui.ColorPicker(e), e.setSize(7), e.setColors(goog.ui.ColorPicker.SIMPLE_GRID_COLORS), e
}, goog.ui.ColorPicker.SIMPLE_GRID_COLORS = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "), goog.events.FocusHandler = function(e) {
    goog.events.EventTarget.call(this), this.element_ = e, e = goog.userAgent.IE ? "focusout" : "blur", this.listenKeyIn_ = goog.events.listen(this.element_, goog.userAgent.IE ? "focusin" : "focus", this, !goog.userAgent.IE), this.listenKeyOut_ = goog.events.listen(this.element_, e, this, !goog.userAgent.IE)
}, goog.inherits(goog.events.FocusHandler, goog.events.EventTarget), goog.events.FocusHandler.EventType = {
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout"
}, goog.events.FocusHandler.prototype.handleEvent = function(e) {
    var t = e.getBrowserEvent(),
        t = new goog.events.BrowserEvent(t);
    t.type = "focusin" == e.type || "focus" == e.type ? goog.events.FocusHandler.EventType.FOCUSIN : goog.events.FocusHandler.EventType.FOCUSOUT, this.dispatchEvent(t)
}, goog.events.FocusHandler.prototype.disposeInternal = function() {
    goog.events.FocusHandler.superClass_.disposeInternal.call(this), goog.events.unlistenByKey(this.listenKeyIn_), goog.events.unlistenByKey(this.listenKeyOut_), delete this.element_
}, goog.html.SafeScript = function() {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "", this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
}, goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0, goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeScript.fromConstant = function(e) {
    return e = goog.string.Const.unwrap(e), 0 === e.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.SafeScript.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_
}, goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
    return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
}), goog.html.SafeScript.unwrap = function(e) {
    return e instanceof goog.html.SafeScript && e.constructor === goog.html.SafeScript && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + e + "'"), "type_error:SafeScript")
}, goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(e) {
    return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)
}, goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = e, this
}, goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""), goog.html.uncheckedconversions = {}, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(e, t, o) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, o || null)
}, goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(e, t) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
}, goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(e, t) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
}, goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(e, t) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
}, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
}, goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
    return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
}, goog.structs = {}, goog.structs.getCount = function(e) {
    return "function" == typeof e.getCount ? e.getCount() : goog.isArrayLike(e) || goog.isString(e) ? e.length : goog.object.getCount(e)
}, goog.structs.getValues = function(e) {
    if ("function" == typeof e.getValues) return e.getValues();
    if (goog.isString(e)) return e.split("");
    if (goog.isArrayLike(e)) {
        for (var t = [], o = e.length, n = 0; o > n; n++) t.push(e[n]);
        return t
    }
    return goog.object.getValues(e)
}, goog.structs.getKeys = function(e) {
    if ("function" == typeof e.getKeys) return e.getKeys();
    if ("function" != typeof e.getValues) {
        if (goog.isArrayLike(e) || goog.isString(e)) {
            var t = [];
            e = e.length;
            for (var o = 0; e > o; o++) t.push(o);
            return t
        }
        return goog.object.getKeys(e)
    }
}, goog.structs.contains = function(e, t) {
    return "function" == typeof e.contains ? e.contains(t) : "function" == typeof e.containsValue ? e.containsValue(t) : goog.isArrayLike(e) || goog.isString(e) ? goog.array.contains(e, t) : goog.object.containsValue(e, t)
}, goog.structs.isEmpty = function(e) {
    return "function" == typeof e.isEmpty ? e.isEmpty() : goog.isArrayLike(e) || goog.isString(e) ? goog.array.isEmpty(e) : goog.object.isEmpty(e)
}, goog.structs.clear = function(e) {
    "function" == typeof e.clear ? e.clear() : goog.isArrayLike(e) ? goog.array.clear(e) : goog.object.clear(e)
}, goog.structs.forEach = function(e, t, o) {
    if ("function" == typeof e.forEach) e.forEach(t, o);
    else if (goog.isArrayLike(e) || goog.isString(e)) goog.array.forEach(e, t, o);
    else
        for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, s = 0; r > s; s++) t.call(o, i[s], n && n[s], e)
}, goog.structs.filter = function(e, t, o) {
    if ("function" == typeof e.filter) return e.filter(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.filter(e, t, o);
    var n, i = goog.structs.getKeys(e),
        r = goog.structs.getValues(e),
        s = r.length;
    if (i) {
        n = {};
        for (var l = 0; s > l; l++) t.call(o, r[l], i[l], e) && (n[i[l]] = r[l])
    } else
        for (n = [], l = 0; s > l; l++) t.call(o, r[l], void 0, e) && n.push(r[l]);
    return n
}, goog.structs.map = function(e, t, o) {
    if ("function" == typeof e.map) return e.map(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.map(e, t, o);
    var n, i = goog.structs.getKeys(e),
        r = goog.structs.getValues(e),
        s = r.length;
    if (i) {
        n = {};
        for (var l = 0; s > l; l++) n[i[l]] = t.call(o, r[l], i[l], e)
    } else
        for (n = [], l = 0; s > l; l++) n[l] = t.call(o, r[l], void 0, e);
    return n
}, goog.structs.some = function(e, t, o) {
    if ("function" == typeof e.some) return e.some(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.some(e, t, o);
    for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, s = 0; r > s; s++)
        if (t.call(o, i[s], n && n[s], e)) return !0;
    return !1
}, goog.structs.every = function(e, t, o) {
    if ("function" == typeof e.every) return e.every(t, o);
    if (goog.isArrayLike(e) || goog.isString(e)) return goog.array.every(e, t, o);
    for (var n = goog.structs.getKeys(e), i = goog.structs.getValues(e), r = i.length, s = 0; r > s; s++)
        if (!t.call(o, i[s], n && n[s], e)) return !1;
    return !0
}, goog.structs.Collection = function() {}, goog.structs.Map = function(e) {
    this.map_ = {}, this.keys_ = [], this.version_ = this.count_ = 0;
    var t = arguments.length;
    if (t > 1) {
        if (t % 2) throw Error("Uneven number of arguments");
        for (var o = 0; t > o; o += 2) this.set(arguments[o], arguments[o + 1])
    } else e && this.addAll(e)
}, goog.structs.Map.prototype.getCount = function() {
    return this.count_
}, goog.structs.Map.prototype.getValues = function() {
    this.cleanupKeysArray_();
    for (var e = [], t = 0; t < this.keys_.length; t++) e.push(this.map_[this.keys_[t]]);
    return e
}, goog.structs.Map.prototype.getKeys = function() {
    return this.cleanupKeysArray_(), this.keys_.concat()
}, goog.structs.Map.prototype.containsKey = function(e) {
    return goog.structs.Map.hasKey_(this.map_, e)
}, goog.structs.Map.prototype.containsValue = function(e) {
    for (var t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        if (goog.structs.Map.hasKey_(this.map_, o) && this.map_[o] == e) return !0
    }
    return !1
}, goog.structs.Map.prototype.equals = function(e, t) {
    if (this === e) return !0;
    if (this.count_ != e.getCount()) return !1;
    var o = t || goog.structs.Map.defaultEquals;
    this.cleanupKeysArray_();
    for (var n, i = 0; n = this.keys_[i]; i++)
        if (!o(this.get(n), e.get(n))) return !1;
    return !0
}, goog.structs.Map.defaultEquals = function(e, t) {
    return e === t
}, goog.structs.Map.prototype.isEmpty = function() {
    return 0 == this.count_
}, goog.structs.Map.prototype.clear = function() {
    this.map_ = {}, this.version_ = this.count_ = this.keys_.length = 0
}, goog.structs.Map.prototype.remove = function(e) {
    return goog.structs.Map.hasKey_(this.map_, e) ? (delete this.map_[e], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
}, goog.structs.Map.prototype.cleanupKeysArray_ = function() {
    if (this.count_ != this.keys_.length) {
        for (var e = 0, t = 0; e < this.keys_.length;) {
            var o = this.keys_[e];
            goog.structs.Map.hasKey_(this.map_, o) && (this.keys_[t++] = o), e++
        }
        this.keys_.length = t
    }
    if (this.count_ != this.keys_.length) {
        for (var n = {}, t = e = 0; e < this.keys_.length;) o = this.keys_[e], goog.structs.Map.hasKey_(n, o) || (this.keys_[t++] = o, n[o] = 1), e++;
        this.keys_.length = t
    }
}, goog.structs.Map.prototype.get = function(e, t) {
    return goog.structs.Map.hasKey_(this.map_, e) ? this.map_[e] : t
}, goog.structs.Map.prototype.set = function(e, t) {
    goog.structs.Map.hasKey_(this.map_, e) || (this.count_++, this.keys_.push(e), this.version_++), this.map_[e] = t
}, goog.structs.Map.prototype.addAll = function(e) {
    var t;
    e instanceof goog.structs.Map ? (t = e.getKeys(), e = e.getValues()) : (t = goog.object.getKeys(e), e = goog.object.getValues(e));
    for (var o = 0; o < t.length; o++) this.set(t[o], e[o])
}, goog.structs.Map.prototype.forEach = function(e, t) {
    for (var o = this.getKeys(), n = 0; n < o.length; n++) {
        var i = o[n],
            r = this.get(i);
        e.call(t, r, i, this)
    }
}, goog.structs.Map.prototype.clone = function() {
    return new goog.structs.Map(this)
}, goog.structs.Map.prototype.transpose = function() {
    for (var e = new goog.structs.Map, t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        e.set(this.map_[o], o)
    }
    return e
}, goog.structs.Map.prototype.toObject = function() {
    this.cleanupKeysArray_();
    for (var e = {}, t = 0; t < this.keys_.length; t++) {
        var o = this.keys_[t];
        e[o] = this.map_[o]
    }
    return e
}, goog.structs.Map.prototype.getKeyIterator = function() {
    return this.__iterator__(!0)
}, goog.structs.Map.prototype.getValueIterator = function() {
    return this.__iterator__(!1)
}, goog.structs.Map.prototype.__iterator__ = function(e) {
    this.cleanupKeysArray_();
    var t = 0,
        o = this.keys_,
        n = this.map_,
        i = this.version_,
        r = this,
        s = new goog.iter.Iterator;
    return s.next = function() {
        for (;;) {
            if (i != r.version_) throw Error("The map has changed since the iterator was created");
            if (t >= o.length) throw goog.iter.StopIteration;
            var s = o[t++];
            return e ? s : n[s]
        }
    }, s
}, goog.structs.Map.hasKey_ = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}, goog.structs.Set = function(e) {
    this.map_ = new goog.structs.Map, e && this.addAll(e)
}, goog.structs.Set.getKey_ = function(e) {
    var t = typeof e;
    return "object" == t && e || "function" == t ? "o" + goog.getUid(e) : t.substr(0, 1) + e
}, goog.structs.Set.prototype.getCount = function() {
    return this.map_.getCount()
}, goog.structs.Set.prototype.add = function(e) {
    this.map_.set(goog.structs.Set.getKey_(e), e)
}, goog.structs.Set.prototype.addAll = function(e) {
    e = goog.structs.getValues(e);
    for (var t = e.length, o = 0; t > o; o++) this.add(e[o])
}, goog.structs.Set.prototype.removeAll = function(e) {
    e = goog.structs.getValues(e);
    for (var t = e.length, o = 0; t > o; o++) this.remove(e[o])
}, goog.structs.Set.prototype.remove = function(e) {
    return this.map_.remove(goog.structs.Set.getKey_(e))
}, goog.structs.Set.prototype.clear = function() {
    this.map_.clear()
}, goog.structs.Set.prototype.isEmpty = function() {
    return this.map_.isEmpty()
}, goog.structs.Set.prototype.contains = function(e) {
    return this.map_.containsKey(goog.structs.Set.getKey_(e))
}, goog.structs.Set.prototype.containsAll = function(e) {
    return goog.structs.every(e, this.contains, this)
}, goog.structs.Set.prototype.intersection = function(e) {
    var t = new goog.structs.Set;
    e = goog.structs.getValues(e);
    for (var o = 0; o < e.length; o++) {
        var n = e[o];
        this.contains(n) && t.add(n)
    }
    return t
}, goog.structs.Set.prototype.difference = function(e) {
    var t = this.clone();
    return t.removeAll(e), t
}, goog.structs.Set.prototype.getValues = function() {
    return this.map_.getValues()
}, goog.structs.Set.prototype.clone = function() {
    return new goog.structs.Set(this)
}, goog.structs.Set.prototype.equals = function(e) {
    return this.getCount() == goog.structs.getCount(e) && this.isSubsetOf(e)
}, goog.structs.Set.prototype.isSubsetOf = function(e) {
    var t = goog.structs.getCount(e);
    return this.getCount() > t ? !1 : (!(e instanceof goog.structs.Set) && t > 5 && (e = new goog.structs.Set(e)), goog.structs.every(this, function(t) {
        return goog.structs.contains(e, t)
    }))
}, goog.structs.Set.prototype.__iterator__ = function() {
    return this.map_.__iterator__(!1)
}, goog.debug.LOGGING_ENABLED = goog.DEBUG, goog.debug.catchErrors = function(e, t, o) {
    o = o || goog.global;
    var n = o.onerror,
        i = !!t;
    goog.userAgent.WEBKIT && !goog.userAgent.isVersionOrHigher("535.3") && (i = !i), o.onerror = function(t, o, r, s, l) {
        return n && n(t, o, r, s, l), e({
            message: t,
            fileName: o,
            line: r,
            col: s,
            error: l
        }), i
    }
}, goog.debug.expose = function(e, t) {
    if ("undefined" == typeof e) return "undefined";
    if (null == e) return "NULL";
    var o, n = [];
    for (o in e)
        if (t || !goog.isFunction(e[o])) {
            var i = o + " = ";
            try {
                i += e[o]
            } catch (r) {
                i += "*** " + r + " ***"
            }
            n.push(i)
        }
    return n.join("\n")
}, goog.debug.deepExpose = function(e, t) {
    var o = [],
        n = function(e, i, r) {
            var s = i + "  ";
            r = new goog.structs.Set(r);
            try {
                if (goog.isDef(e))
                    if (goog.isNull(e)) o.push("NULL");
                    else if (goog.isString(e)) o.push('"' + e.replace(/\n/g, "\n" + i) + '"');
                else if (goog.isFunction(e)) o.push(String(e).replace(/\n/g, "\n" + i));
                else if (goog.isObject(e))
                    if (r.contains(e)) o.push("*** reference loop detected ***");
                    else {
                        r.add(e), o.push("{");
                        for (var l in e)(t || !goog.isFunction(e[l])) && (o.push("\n"), o.push(s), o.push(l + " = "), n(e[l], s, r));
                        o.push("\n" + i + "}")
                    }
                else o.push(e);
                else o.push("undefined")
            } catch (a) {
                o.push("*** " + a + " ***")
            }
        };
    return n(e, "", new goog.structs.Set), o.join("")
}, goog.debug.exposeArray = function(e) {
    for (var t = [], o = 0; o < e.length; o++) goog.isArray(e[o]) ? t.push(goog.debug.exposeArray(e[o])) : t.push(e[o]);
    return "[ " + t.join(", ") + " ]"
}, goog.debug.exposeException = function(e, t) {
    var o = goog.debug.exposeExceptionAsHtml(e, t);
    return goog.html.SafeHtml.unwrap(o)
}, goog.debug.exposeExceptionAsHtml = function(e, t) {
    try {
        var o = goog.debug.normalizeErrorObject(e),
            n = goog.debug.createViewSourceUrl_(o.fileName);
        return goog.html.SafeHtml.concat(goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Message: " + o.message + "\nUrl: "), goog.html.SafeHtml.create("a", {
            href: n,
            target: "_new"
        }, o.fileName), goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("\nLine: " + o.lineNumber + "\n\nBrowser stack:\n" + o.stack + "-> [end]\n\nJS stack traversal:\n" + goog.debug.getStacktrace(t) + "-> "))
    } catch (i) {
        return goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Exception trying to expose exception! You win, we lose. " + i)
    }
}, goog.debug.createViewSourceUrl_ = function(e) {
    return goog.isDefAndNotNull(e) || (e = ""), /^https?:\/\//i.test(e) ? (e = goog.html.SafeUrl.sanitize(e), goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + goog.html.SafeUrl.unwrap(e))) : goog.html.SafeUrl.fromConstant(goog.string.Const.from("sanitizedviewsrc"))
}, goog.debug.normalizeErrorObject = function(e) {
    var t = goog.getObjectByName("window.location.href");
    if (goog.isString(e)) return {
        message: e,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: t,
        stack: "Not available"
    };
    var o, n, i = !1;
    try {
        o = e.lineNumber || e.line || "Not available"
    } catch (r) {
        o = "Not available", i = !0
    }
    try {
        n = e.fileName || e.filename || e.sourceURL || goog.global.$googDebugFname || t
    } catch (s) {
        n = "Not available", i = !0
    }
    return !i && e.lineNumber && e.fileName && e.stack && e.message && e.name ? e : {
        message: e.message || "Not available",
        name: e.name || "UnknownError",
        lineNumber: o,
        fileName: n,
        stack: e.stack || "Not available"
    }
}, goog.debug.enhanceError = function(e, t) {
    var o;
    if ("string" == typeof e ? (o = Error(e), Error.captureStackTrace && Error.captureStackTrace(o, goog.debug.enhanceError)) : o = e, o.stack || (o.stack = goog.debug.getStacktrace(goog.debug.enhanceError)), t) {
        for (var n = 0; o["message" + n];) ++n;
        o["message" + n] = String(t)
    }
    return o
}, goog.debug.getStacktraceSimple = function(e) {
    if (goog.STRICT_MODE_COMPATIBLE) {
        var t = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
        if (t) return t
    }
    for (var t = [], o = arguments.callee.caller, n = 0; o && (!e || e > n);) {
        t.push(goog.debug.getFunctionName(o)), t.push("()\n");
        try {
            o = o.caller
        } catch (i) {
            t.push("[exception trying to get caller]\n");
            break
        }
        if (n++, n >= goog.debug.MAX_STACK_DEPTH) {
            t.push("[...long stack...]");
            break
        }
    }
    return e && n >= e ? t.push("[...reached max depth limit...]") : t.push("[end]"), t.join("")
}, goog.debug.MAX_STACK_DEPTH = 50, goog.debug.getNativeStackTrace_ = function(e) {
    var t = Error();
    if (Error.captureStackTrace) return Error.captureStackTrace(t, e), String(t.stack);
    try {
        throw t
    } catch (o) {
        t = o
    }
    return (e = t.stack) ? String(e) : null
}, goog.debug.getStacktrace = function(e) {
    var t;
    return goog.STRICT_MODE_COMPATIBLE && (t = goog.debug.getNativeStackTrace_(e || goog.debug.getStacktrace)), t || (t = goog.debug.getStacktraceHelper_(e || arguments.callee.caller, [])), t
}, goog.debug.getStacktraceHelper_ = function(e, t) {
    var o = [];
    if (goog.array.contains(t, e)) o.push("[...circular reference...]");
    else if (e && t.length < goog.debug.MAX_STACK_DEPTH) {
        o.push(goog.debug.getFunctionName(e) + "(");
        for (var n = e.arguments, i = 0; n && i < n.length; i++) {
            i > 0 && o.push(", ");
            var r;
            switch (r = n[i], typeof r) {
                case "object":
                    r = r ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    r = String(r);
                    break;
                case "boolean":
                    r = r ? "true" : "false";
                    break;
                case "function":
                    r = (r = goog.debug.getFunctionName(r)) ? r : "[fn]";
                    break;
                default:
                    r = typeof r
            }
            40 < r.length && (r = r.substr(0, 40) + "..."), o.push(r)
        }
        t.push(e), o.push(")\n");
        try {
            o.push(goog.debug.getStacktraceHelper_(e.caller, t))
        } catch (s) {
            o.push("[exception trying to get caller]\n")
        }
    } else e ? o.push("[...long stack...]") : o.push("[end]");
    return o.join("")
}, goog.debug.setFunctionResolver = function(e) {
    goog.debug.fnNameResolver_ = e
}, goog.debug.getFunctionName = function(e) {
    if (goog.debug.fnNameCache_[e]) return goog.debug.fnNameCache_[e];
    if (goog.debug.fnNameResolver_) {
        var t = goog.debug.fnNameResolver_(e);
        if (t) return goog.debug.fnNameCache_[e] = t
    }
    return e = String(e), goog.debug.fnNameCache_[e] || (t = /function ([^\(]+)/.exec(e), goog.debug.fnNameCache_[e] = t ? t[1] : "[Anonymous]"), goog.debug.fnNameCache_[e]
}, goog.debug.makeWhitespaceVisible = function(e) {
    return e.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
}, goog.debug.fnNameCache_ = {}, goog.debug.LogRecord = function(e, t, o, n, i) {
    this.reset(e, t, o, n, i)
}, goog.debug.LogRecord.prototype.sequenceNumber_ = 0, goog.debug.LogRecord.prototype.exception_ = null, goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0, goog.debug.LogRecord.nextSequenceNumber_ = 0, goog.debug.LogRecord.prototype.reset = function(e, t, o, n, i) {
    goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof i ? i : goog.debug.LogRecord.nextSequenceNumber_++), this.time_ = n || goog.now(), this.level_ = e, this.msg_ = t, this.loggerName_ = o, delete this.exception_
}, goog.debug.LogRecord.prototype.getLoggerName = function() {
    return this.loggerName_
}, goog.debug.LogRecord.prototype.getException = function() {
    return this.exception_
}, goog.debug.LogRecord.prototype.setException = function(e) {
    this.exception_ = e
}, goog.debug.LogRecord.prototype.setLoggerName = function(e) {
    this.loggerName_ = e
}, goog.debug.LogRecord.prototype.getLevel = function() {
    return this.level_
}, goog.debug.LogRecord.prototype.setLevel = function(e) {
    this.level_ = e
}, goog.debug.LogRecord.prototype.getMessage = function() {
    return this.msg_
}, goog.debug.LogRecord.prototype.setMessage = function(e) {
    this.msg_ = e
}, goog.debug.LogRecord.prototype.getMillis = function() {
    return this.time_
}, goog.debug.LogRecord.prototype.setMillis = function(e) {
    this.time_ = e
}, goog.debug.LogRecord.prototype.getSequenceNumber = function() {
    return this.sequenceNumber_
}, goog.debug.LogBuffer = function() {
    goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY."), this.clear()
}, goog.debug.LogBuffer.getInstance = function() {
    return goog.debug.LogBuffer.instance_ || (goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer), goog.debug.LogBuffer.instance_
}, goog.debug.LogBuffer.CAPACITY = 0, goog.debug.LogBuffer.prototype.addRecord = function(e, t, o) {
    var n = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
    return this.curIndex_ = n, this.isFull_ ? (n = this.buffer_[n], n.reset(e, t, o), n) : (this.isFull_ = n == goog.debug.LogBuffer.CAPACITY - 1, this.buffer_[n] = new goog.debug.LogRecord(e, t, o))
}, goog.debug.LogBuffer.isBufferingEnabled = function() {
    return 0 < goog.debug.LogBuffer.CAPACITY
}, goog.debug.LogBuffer.prototype.clear = function() {
    this.buffer_ = Array(goog.debug.LogBuffer.CAPACITY), this.curIndex_ = -1, this.isFull_ = !1
}, goog.debug.LogBuffer.prototype.forEachRecord = function(e) {
    var t = this.buffer_;
    if (t[0]) {
        var o = this.curIndex_,
            n = this.isFull_ ? o : -1;
        do n = (n + 1) % goog.debug.LogBuffer.CAPACITY, e(t[n]); while (n != o)
    }
}, goog.debug.Logger = function(e) {
    this.name_ = e, this.handlers_ = this.children_ = this.level_ = this.parent_ = null
}, goog.debug.Logger.ROOT_LOGGER_NAME = "", goog.debug.Logger.ENABLE_HIERARCHY = !0, goog.debug.Logger.ENABLE_HIERARCHY || (goog.debug.Logger.rootHandlers_ = []), goog.debug.Logger.Level = function(e, t) {
    this.name = e, this.value = t
}, goog.debug.Logger.Level.prototype.toString = function() {
    return this.name
}, goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", 1 / 0), goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200), goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1e3), goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900), goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800), goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700), goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500), goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400), goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300), goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0), goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL], goog.debug.Logger.Level.predefinedLevelsCache_ = null, goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
    goog.debug.Logger.Level.predefinedLevelsCache_ = {};
    for (var e, t = 0; e = goog.debug.Logger.Level.PREDEFINED_LEVELS[t]; t++) goog.debug.Logger.Level.predefinedLevelsCache_[e.value] = e, goog.debug.Logger.Level.predefinedLevelsCache_[e.name] = e
}, goog.debug.Logger.Level.getPredefinedLevel = function(e) {
    return goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_(), goog.debug.Logger.Level.predefinedLevelsCache_[e] || null
}, goog.debug.Logger.Level.getPredefinedLevelByValue = function(e) {
    if (goog.debug.Logger.Level.predefinedLevelsCache_ || goog.debug.Logger.Level.createPredefinedLevelsCache_(), e in goog.debug.Logger.Level.predefinedLevelsCache_) return goog.debug.Logger.Level.predefinedLevelsCache_[e];
    for (var t = 0; t < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++t) {
        var o = goog.debug.Logger.Level.PREDEFINED_LEVELS[t];
        if (o.value <= e) return o
    }
    return null
}, goog.debug.Logger.getLogger = function(e) {
    return goog.debug.LogManager.getLogger(e)
}, goog.debug.Logger.logToProfilers = function(e) {
    goog.global.console && (goog.global.console.timeStamp ? goog.global.console.timeStamp(e) : goog.global.console.markTimeline && goog.global.console.markTimeline(e)), goog.global.msWriteProfilerMark && goog.global.msWriteProfilerMark(e)
}, goog.debug.Logger.prototype.getName = function() {
    return this.name_
}, goog.debug.Logger.prototype.addHandler = function(e) {
    goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []), this.handlers_.push(e)) : (goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootHandlers_.push(e)))
}, goog.debug.Logger.prototype.removeHandler = function(e) {
    if (goog.debug.LOGGING_ENABLED) {
        var t = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
        return !!t && goog.array.remove(t, e)
    }
    return !1
}, goog.debug.Logger.prototype.getParent = function() {
    return this.parent_
}, goog.debug.Logger.prototype.getChildren = function() {
    return this.children_ || (this.children_ = {}), this.children_
}, goog.debug.Logger.prototype.setLevel = function(e) {
    goog.debug.LOGGING_ENABLED && (goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ = e : (goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), goog.debug.Logger.rootLevel_ = e))
}, goog.debug.Logger.prototype.getLevel = function() {
    return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF
}, goog.debug.Logger.prototype.getEffectiveLevel = function() {
    return goog.debug.LOGGING_ENABLED ? goog.debug.Logger.ENABLE_HIERARCHY ? this.level_ ? this.level_ : this.parent_ ? this.parent_.getEffectiveLevel() : (goog.asserts.fail("Root logger has no level set."), null) : goog.debug.Logger.rootLevel_ : goog.debug.Logger.Level.OFF
}, goog.debug.Logger.prototype.isLoggable = function(e) {
    return goog.debug.LOGGING_ENABLED && e.value >= this.getEffectiveLevel().value
}, goog.debug.Logger.prototype.log = function(e, t, o) {
    goog.debug.LOGGING_ENABLED && this.isLoggable(e) && (goog.isFunction(t) && (t = t()), this.doLogRecord_(this.getLogRecord(e, t, o)))
}, goog.debug.Logger.prototype.getLogRecord = function(e, t, o) {
    return e = goog.debug.LogBuffer.isBufferingEnabled() ? goog.debug.LogBuffer.getInstance().addRecord(e, t, this.name_) : new goog.debug.LogRecord(e, String(t), this.name_), o && e.setException(o), e
}, goog.debug.Logger.prototype.shout = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SHOUT, e, t)
}, goog.debug.Logger.prototype.severe = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.SEVERE, e, t)
}, goog.debug.Logger.prototype.warning = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.WARNING, e, t)
}, goog.debug.Logger.prototype.info = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.INFO, e, t)
}, goog.debug.Logger.prototype.config = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.CONFIG, e, t)
}, goog.debug.Logger.prototype.fine = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINE, e, t)
}, goog.debug.Logger.prototype.finer = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINER, e, t)
}, goog.debug.Logger.prototype.finest = function(e, t) {
    goog.debug.LOGGING_ENABLED && this.log(goog.debug.Logger.Level.FINEST, e, t)
}, goog.debug.Logger.prototype.logRecord = function(e) {
    goog.debug.LOGGING_ENABLED && this.isLoggable(e.getLevel()) && this.doLogRecord_(e)
}, goog.debug.Logger.prototype.doLogRecord_ = function(e) {
    if (goog.debug.Logger.logToProfilers("log:" + e.getMessage()), goog.debug.Logger.ENABLE_HIERARCHY)
        for (var t = this; t;) t.callPublish_(e), t = t.getParent();
    else
        for (var o, t = 0; o = goog.debug.Logger.rootHandlers_[t++];) o(e)
}, goog.debug.Logger.prototype.callPublish_ = function(e) {
    if (this.handlers_)
        for (var t, o = 0; t = this.handlers_[o]; o++) t(e)
}, goog.debug.Logger.prototype.setParent_ = function(e) {
    this.parent_ = e
}, goog.debug.Logger.prototype.addChild_ = function(e, t) {
    this.getChildren()[e] = t
}, goog.debug.LogManager = {}, goog.debug.LogManager.loggers_ = {}, goog.debug.LogManager.rootLogger_ = null, goog.debug.LogManager.initialize = function() {
    goog.debug.LogManager.rootLogger_ || (goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME), goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] = goog.debug.LogManager.rootLogger_, goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG))
}, goog.debug.LogManager.getLoggers = function() {
    return goog.debug.LogManager.loggers_
}, goog.debug.LogManager.getRoot = function() {
    return goog.debug.LogManager.initialize(), goog.debug.LogManager.rootLogger_
}, goog.debug.LogManager.getLogger = function(e) {
    return goog.debug.LogManager.initialize(), goog.debug.LogManager.loggers_[e] || goog.debug.LogManager.createLogger_(e)
}, goog.debug.LogManager.createFunctionForCatchErrors = function(e) {
    return function(t) {
        (e || goog.debug.LogManager.getRoot()).severe("Error: " + t.message + " (" + t.fileName + " @ Line: " + t.line + ")")
    }
}, goog.debug.LogManager.createLogger_ = function(e) {
    var t = new goog.debug.Logger(e);
    if (goog.debug.Logger.ENABLE_HIERARCHY) {
        var o = e.lastIndexOf("."),
            n = e.substr(0, o),
            o = e.substr(o + 1),
            n = goog.debug.LogManager.getLogger(n);
        n.addChild_(o, t), t.setParent_(n)
    }
    return goog.debug.LogManager.loggers_[e] = t
}, goog.log = {}, goog.log.ENABLED = goog.debug.LOGGING_ENABLED, goog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME, goog.log.Logger = goog.debug.Logger, goog.log.Level = goog.debug.Logger.Level, goog.log.LogRecord = goog.debug.LogRecord, goog.log.getLogger = function(e, t) {
    if (goog.log.ENABLED) {
        var o = goog.debug.LogManager.getLogger(e);
        return t && o && o.setLevel(t), o
    }
    return null
}, goog.log.addHandler = function(e, t) {
    goog.log.ENABLED && e && e.addHandler(t)
}, goog.log.removeHandler = function(e, t) {
    return goog.log.ENABLED && e ? e.removeHandler(t) : !1
}, goog.log.log = function(e, t, o, n) {
    goog.log.ENABLED && e && e.log(t, o, n)
}, goog.log.error = function(e, t, o) {
    goog.log.ENABLED && e && e.severe(t, o)
}, goog.log.warning = function(e, t, o) {
    goog.log.ENABLED && e && e.warning(t, o)
}, goog.log.info = function(e, t, o) {
    goog.log.ENABLED && e && e.info(t, o)
}, goog.log.fine = function(e, t, o) {
    goog.log.ENABLED && e && e.fine(t, o)
}, goog.html.legacyconversions = {}, goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS = !0, goog.html.legacyconversions.safeHtmlFromString = function(e) {
    return goog.html.legacyconversions.throwIfConversionsDisallowed(), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e, null)
}, goog.html.legacyconversions.safeStyleFromString = function(e) {
    return goog.html.legacyconversions.throwIfConversionsDisallowed(), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.legacyconversions.trustedResourceUrlFromString = function(e) {
    return goog.html.legacyconversions.throwIfConversionsDisallowed(), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.legacyconversions.safeUrlFromString = function(e) {
    return goog.html.legacyconversions.throwIfConversionsDisallowed(), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
}, goog.html.legacyconversions.reportCallback_ = goog.nullFunction, goog.html.legacyconversions.setReportCallback = function(e) {
    goog.html.legacyconversions.reportCallback_ = e
}, goog.html.legacyconversions.throwIfConversionsDisallowed = function() {
    if (!goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS) throw Error("Error: Legacy conversion from string to goog.html types is disabled");
    goog.html.legacyconversions.reportCallback_()
}, goog.string.StringBuffer = function(e) {
    null != e && this.append.apply(this, arguments)
}, goog.string.StringBuffer.prototype.buffer_ = "", goog.string.StringBuffer.prototype.set = function(e) {
    this.buffer_ = "" + e
}, goog.string.StringBuffer.prototype.append = function(e, t) {
    if (this.buffer_ += e, null != t)
        for (var o = 1; o < arguments.length; o++) this.buffer_ += arguments[o];
    return this
}, goog.string.StringBuffer.prototype.clear = function() {
    this.buffer_ = ""
}, goog.string.StringBuffer.prototype.getLength = function() {
    return this.buffer_.length
}, goog.string.StringBuffer.prototype.toString = function() {
    return this.buffer_
}, goog.ui.tree = {}, goog.ui.tree.BaseNode = function(e, t, o) {
    goog.ui.Component.call(this, o), this.config_ = t || goog.ui.tree.BaseNode.defaultConfig, this.html_ = e instanceof goog.html.SafeHtml ? e : goog.html.legacyconversions.safeHtmlFromString(e)
}, goog.inherits(goog.ui.tree.BaseNode, goog.ui.Component), goog.ui.tree.BaseNode.EventType = {
    BEFORE_EXPAND: "beforeexpand",
    EXPAND: "expand",
    BEFORE_COLLAPSE: "beforecollapse",
    COLLAPSE: "collapse"
}, goog.ui.tree.BaseNode.allNodes = {}, goog.ui.tree.BaseNode.prototype.selected_ = !1, goog.ui.tree.BaseNode.prototype.expanded_ = !1, goog.ui.tree.BaseNode.prototype.toolTip_ = null, goog.ui.tree.BaseNode.prototype.afterLabelHtml_ = goog.html.SafeHtml.EMPTY, goog.ui.tree.BaseNode.prototype.isUserCollapsible_ = !0, goog.ui.tree.BaseNode.prototype.depth_ = -1, goog.ui.tree.BaseNode.prototype.disposeInternal = function() {
    goog.ui.tree.BaseNode.superClass_.disposeInternal.call(this), this.tree && (this.tree.removeNode(this), this.tree = null), this.setElementInternal(null)
}, goog.ui.tree.BaseNode.prototype.initAccessibility = function() {
    var e = this.getElement();
    if (e) {
        var t = this.getLabelElement();
        if (t && !t.id && (t.id = this.getId() + ".label"), goog.a11y.aria.setRole(e, "treeitem"), goog.a11y.aria.setState(e, "selected", !1), goog.a11y.aria.setState(e, "expanded", !1), goog.a11y.aria.setState(e, "level", this.getDepth()), t && goog.a11y.aria.setState(e, "labelledby", t.id), (e = this.getIconElement()) && goog.a11y.aria.setRole(e, "presentation"), (e = this.getExpandIconElement()) && goog.a11y.aria.setRole(e, "presentation"), (e = this.getChildrenElement()) && (goog.a11y.aria.setRole(e, "group"), e.hasChildNodes()))
            for (e = this.getChildCount(), t = 1; e >= t; t++) {
                var o = this.getChildAt(t - 1).getElement();
                goog.asserts.assert(o, "The child element cannot be null"), goog.a11y.aria.setState(o, "setsize", e), goog.a11y.aria.setState(o, "posinset", t)
            }
    }
}, goog.ui.tree.BaseNode.prototype.createDom = function() {
    var e = this.getDomHelper().safeHtmlToNode(this.toSafeHtml());
    this.setElementInternal(e)
}, goog.ui.tree.BaseNode.prototype.enterDocument = function() {
    goog.ui.tree.BaseNode.superClass_.enterDocument.call(this), goog.ui.tree.BaseNode.allNodes[this.getId()] = this, this.initAccessibility()
}, goog.ui.tree.BaseNode.prototype.exitDocument = function() {
    goog.ui.tree.BaseNode.superClass_.exitDocument.call(this), delete goog.ui.tree.BaseNode.allNodes[this.getId()]
}, goog.ui.tree.BaseNode.prototype.addChildAt = function(e, t, o) {
    goog.asserts.assert(!e.getParent()), goog.asserts.assertInstanceof(e, goog.ui.tree.BaseNode), o = this.getChildAt(t - 1);
    var n = this.getChildAt(t);
    if (goog.ui.tree.BaseNode.superClass_.addChildAt.call(this, e, t), e.previousSibling_ = o, e.nextSibling_ = n, o ? o.nextSibling_ = e : this.firstChild_ = e, n ? n.previousSibling_ = e : this.lastChild_ = e, (t = this.getTree()) && e.setTreeInternal(t), e.setDepth_(this.getDepth() + 1), this.getElement() && (this.updateExpandIcon(), this.getExpanded())) {
        t = this.getChildrenElement(), e.getElement() || e.createDom();
        var i = e.getElement(),
            r = n && n.getElement();
        t.insertBefore(i, r), this.isInDocument() && e.enterDocument(), n || (o ? o.updateExpandIcon() : (goog.style.setElementShown(t, !0), this.setExpanded(this.getExpanded())))
    }
}, goog.ui.tree.BaseNode.prototype.add = function(e, t) {
    return goog.asserts.assert(!t || t.getParent() == this, "Can only add nodes before siblings"), e.getParent() && e.getParent().removeChild(e), this.addChildAt(e, t ? this.indexOfChild(t) : this.getChildCount()), e
}, goog.ui.tree.BaseNode.prototype.removeChild = function(e) {
    var t = this.getTree(),
        o = t ? t.getSelectedItem() : null;
    if ((o == e || e.contains(o)) && (t.hasFocus() ? (this.select(), goog.Timer.callOnce(this.onTimeoutSelect_, 10, this)) : this.select()), goog.ui.tree.BaseNode.superClass_.removeChild.call(this, e), this.lastChild_ == e && (this.lastChild_ = e.previousSibling_), this.firstChild_ == e && (this.firstChild_ = e.nextSibling_), e.previousSibling_ && (e.previousSibling_.nextSibling_ = e.nextSibling_), e.nextSibling_ && (e.nextSibling_.previousSibling_ = e.previousSibling_), o = e.isLastSibling(), e.tree = null, e.depth_ = -1, t && (t.removeNode(this), this.isInDocument())) {
        if (t = this.getChildrenElement(), e.isInDocument()) {
            var n = e.getElement();
            t.removeChild(n), e.exitDocument()
        }
        o && (o = this.getLastChild()) && o.updateExpandIcon(), this.hasChildren() || (t.style.display = "none", this.updateExpandIcon(), this.updateIcon_())
    }
    return e
}, goog.ui.tree.BaseNode.prototype.remove = goog.ui.tree.BaseNode.prototype.removeChild, goog.ui.tree.BaseNode.prototype.onTimeoutSelect_ = function() {
    this.select()
}, goog.ui.tree.BaseNode.prototype.getDepth = function() {
    var e = this.depth_;
    return 0 > e && (e = this.computeDepth_(), this.setDepth_(e)), e
}, goog.ui.tree.BaseNode.prototype.computeDepth_ = function() {
    var e = this.getParent();
    return e ? e.getDepth() + 1 : 0
}, goog.ui.tree.BaseNode.prototype.setDepth_ = function(e) {
    if (e != this.depth_) {
        this.depth_ = e;
        var t = this.getRowElement();
        if (t) {
            var o = this.getPixelIndent_() + "px";
            this.isRightToLeft() ? t.style.paddingRight = o : t.style.paddingLeft = o
        }
        this.forEachChild(function(t) {
            t.setDepth_(e + 1)
        })
    }
}, goog.ui.tree.BaseNode.prototype.contains = function(e) {
    for (; e;) {
        if (e == this) return !0;
        e = e.getParent()
    }
    return !1
}, goog.ui.tree.BaseNode.EMPTY_CHILDREN_ = [], goog.ui.tree.BaseNode.prototype.getChildren = function() {
    var e = [];
    return this.forEachChild(function(t) {
        e.push(t)
    }), e
}, goog.ui.tree.BaseNode.prototype.getFirstChild = function() {
    return this.getChildAt(0)
}, goog.ui.tree.BaseNode.prototype.getLastChild = function() {
    return this.getChildAt(this.getChildCount() - 1)
}, goog.ui.tree.BaseNode.prototype.getPreviousSibling = function() {
    return this.previousSibling_
}, goog.ui.tree.BaseNode.prototype.getNextSibling = function() {
    return this.nextSibling_
}, goog.ui.tree.BaseNode.prototype.isLastSibling = function() {
    return !this.nextSibling_
}, goog.ui.tree.BaseNode.prototype.isSelected = function() {
    return this.selected_
}, goog.ui.tree.BaseNode.prototype.select = function() {
    var e = this.getTree();
    e && e.setSelectedItem(this)
}, goog.ui.tree.BaseNode.prototype.deselect = goog.nullFunction, goog.ui.tree.BaseNode.prototype.setSelectedInternal = function(e) {
    if (this.selected_ != e) {
        this.selected_ = e, this.updateRow();
        var t = this.getElement();
        t && (goog.a11y.aria.setState(t, "selected", e), e && (e = this.getTree().getElement(), goog.asserts.assert(e, "The DOM element for the tree cannot be null"), goog.a11y.aria.setState(e, "activedescendant", this.getId())))
    }
}, goog.ui.tree.BaseNode.prototype.getExpanded = function() {
    return this.expanded_
}, goog.ui.tree.BaseNode.prototype.setExpandedInternal = function(e) {
    this.expanded_ = e
}, goog.ui.tree.BaseNode.prototype.setExpanded = function(e) {
    var t = e != this.expanded_;
    if (!t || this.dispatchEvent(e ? goog.ui.tree.BaseNode.EventType.BEFORE_EXPAND : goog.ui.tree.BaseNode.EventType.BEFORE_COLLAPSE)) {
        var o;
        this.expanded_ = e, o = this.getTree();
        var n = this.getElement();
        if (this.hasChildren()) {
            if (!e && o && this.contains(o.getSelectedItem()) && this.select(), n) {
                if ((o = this.getChildrenElement()) && (goog.style.setElementShown(o, e), e && this.isInDocument() && !o.hasChildNodes())) {
                    var i = [];
                    this.forEachChild(function(e) {
                        i.push(e.toSafeHtml())
                    }), goog.dom.safe.setInnerHtml(o, goog.html.SafeHtml.concat(i)), this.forEachChild(function(e) {
                        e.enterDocument()
                    })
                }
                this.updateExpandIcon()
            }
        } else(o = this.getChildrenElement()) && goog.style.setElementShown(o, !1);
        n && (this.updateIcon_(), goog.a11y.aria.setState(n, "expanded", e)), t && this.dispatchEvent(e ? goog.ui.tree.BaseNode.EventType.EXPAND : goog.ui.tree.BaseNode.EventType.COLLAPSE)
    }
}, goog.ui.tree.BaseNode.prototype.toggle = function() {
    this.setExpanded(!this.getExpanded())
}, goog.ui.tree.BaseNode.prototype.expand = function() {
    this.setExpanded(!0)
}, goog.ui.tree.BaseNode.prototype.collapse = function() {
    this.setExpanded(!1)
}, goog.ui.tree.BaseNode.prototype.collapseChildren = function() {
    this.forEachChild(function(e) {
        e.collapseAll()
    })
}, goog.ui.tree.BaseNode.prototype.collapseAll = function() {
    this.collapseChildren(), this.collapse()
}, goog.ui.tree.BaseNode.prototype.expandChildren = function() {
    this.forEachChild(function(e) {
        e.expandAll()
    })
}, goog.ui.tree.BaseNode.prototype.expandAll = function() {
    this.expandChildren(), this.expand()
}, goog.ui.tree.BaseNode.prototype.reveal = function() {
    var e = this.getParent();
    e && (e.setExpanded(!0), e.reveal())
}, goog.ui.tree.BaseNode.prototype.setIsUserCollapsible = function(e) {
    (this.isUserCollapsible_ = e) || this.expand(), this.getElement() && this.updateExpandIcon()
}, goog.ui.tree.BaseNode.prototype.isUserCollapsible = function() {
    return this.isUserCollapsible_
}, goog.ui.tree.BaseNode.prototype.toSafeHtml = function() {
    var e = this.getTree(),
        t = !e.getShowLines() || e == this.getParent() && !e.getShowRootLines() ? this.config_.cssChildrenNoLines : this.config_.cssChildren,
        e = this.getExpanded() && this.hasChildren(),
        t = {
            "class": t,
            style: this.getLineStyle()
        },
        o = [];
    return e && this.forEachChild(function(e) {
        o.push(e.toSafeHtml())
    }), e = goog.html.SafeHtml.create("div", t, o), goog.html.SafeHtml.create("div", {
        "class": this.config_.cssItem,
        id: this.getId()
    }, [this.getRowSafeHtml(), e])
}, goog.ui.tree.BaseNode.prototype.getPixelIndent_ = function() {
    return Math.max(0, (this.getDepth() - 1) * this.config_.indentWidth)
}, goog.ui.tree.BaseNode.prototype.getRowSafeHtml = function() {
    var e = {};
    e["padding-" + (this.isRightToLeft() ? "right" : "left")] = this.getPixelIndent_() + "px";
    var e = {
            "class": this.getRowClassName(),
            style: e
        },
        t = [this.getExpandIconSafeHtml(), this.getIconSafeHtml(), this.getLabelSafeHtml()];
    return goog.html.SafeHtml.create("div", e, t)
}, goog.ui.tree.BaseNode.prototype.getRowClassName = function() {
    var e;
    return e = this.isSelected() ? " " + this.config_.cssSelectedRow : "", this.config_.cssTreeRow + e
}, goog.ui.tree.BaseNode.prototype.getLabelSafeHtml = function() {
    var e = goog.html.SafeHtml.create("span", {
        "class": this.config_.cssItemLabel,
        title: this.getToolTip() || null
    }, this.getSafeHtml());
    return goog.html.SafeHtml.concat(e, goog.html.SafeHtml.create("span", {}, this.getAfterLabelSafeHtml()))
}, goog.ui.tree.BaseNode.prototype.getAfterLabelHtml = function() {
    return goog.html.SafeHtml.unwrap(this.getAfterLabelSafeHtml())
}, goog.ui.tree.BaseNode.prototype.getAfterLabelSafeHtml = function() {
    return this.afterLabelHtml_
}, goog.ui.tree.BaseNode.prototype.setAfterLabelHtml = function(e) {
    this.setAfterLabelSafeHtml(goog.html.legacyconversions.safeHtmlFromString(e))
}, goog.ui.tree.BaseNode.prototype.setAfterLabelSafeHtml = function(e) {
    this.afterLabelHtml_ = e;
    var t = this.getAfterLabelElement();
    t && goog.dom.safe.setInnerHtml(t, e)
}, goog.ui.tree.BaseNode.prototype.getIconSafeHtml = function() {
    return goog.html.SafeHtml.create("span", {
        style: {
            display: "inline-block"
        },
        "class": this.getCalculatedIconClass()
    })
}, goog.ui.tree.BaseNode.prototype.getExpandIconSafeHtml = function() {
    return goog.html.SafeHtml.create("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": this.getExpandIconClass()
    })
}, goog.ui.tree.BaseNode.prototype.getExpandIconClass = function() {
    var e = this.getTree(),
        t = !e.getShowLines() || e == this.getParent() && !e.getShowRootLines(),
        o = this.config_,
        n = new goog.string.StringBuffer;
    if (n.append(o.cssTreeIcon, " ", o.cssExpandTreeIcon, " "), this.hasChildren()) {
        var i = 0;
        switch (e.getShowExpandIcons() && this.isUserCollapsible_ && (i = this.getExpanded() ? 2 : 1), t || (i = this.isLastSibling() ? i + 4 : i + 8), i) {
            case 1:
                n.append(o.cssExpandTreeIconPlus);
                break;
            case 2:
                n.append(o.cssExpandTreeIconMinus);
                break;
            case 4:
                n.append(o.cssExpandTreeIconL);
                break;
            case 5:
                n.append(o.cssExpandTreeIconLPlus);
                break;
            case 6:
                n.append(o.cssExpandTreeIconLMinus);
                break;
            case 8:
                n.append(o.cssExpandTreeIconT);
                break;
            case 9:
                n.append(o.cssExpandTreeIconTPlus);
                break;
            case 10:
                n.append(o.cssExpandTreeIconTMinus);
                break;
            default:
                n.append(o.cssExpandTreeIconBlank)
        }
    } else t ? n.append(o.cssExpandTreeIconBlank) : this.isLastSibling() ? n.append(o.cssExpandTreeIconL) : n.append(o.cssExpandTreeIconT);
    return n.toString()
}, goog.ui.tree.BaseNode.prototype.getLineStyle = function() {
    var e = this.getExpanded() && this.hasChildren();
    return goog.html.SafeStyle.create({
        "background-position": this.getBackgroundPosition(),
        display: e ? null : "none"
    })
}, goog.ui.tree.BaseNode.prototype.getBackgroundPosition = function() {
    return (this.isLastSibling() ? "-100" : (this.getDepth() - 1) * this.config_.indentWidth) + "px 0"
}, goog.ui.tree.BaseNode.prototype.getElement = function() {
    var e = goog.ui.tree.BaseNode.superClass_.getElement.call(this);
    return e || (e = this.getDomHelper().getElement(this.getId()), this.setElementInternal(e)), e
}, goog.ui.tree.BaseNode.prototype.getRowElement = function() {
    var e = this.getElement();
    return e ? e.firstChild : null
}, goog.ui.tree.BaseNode.prototype.getExpandIconElement = function() {
    var e = this.getRowElement();
    return e ? e.firstChild : null
}, goog.ui.tree.BaseNode.prototype.getIconElement = function() {
    var e = this.getRowElement();
    return e ? e.childNodes[1] : null
}, goog.ui.tree.BaseNode.prototype.getLabelElement = function() {
    var e = this.getRowElement();
    return e && e.lastChild ? e.lastChild.previousSibling : null
}, goog.ui.tree.BaseNode.prototype.getAfterLabelElement = function() {
    var e = this.getRowElement();
    return e ? e.lastChild : null
}, goog.ui.tree.BaseNode.prototype.getChildrenElement = function() {
    var e = this.getElement();
    return e ? e.lastChild : null
}, goog.ui.tree.BaseNode.prototype.setIconClass = function(e) {
    this.iconClass_ = e, this.isInDocument() && this.updateIcon_()
}, goog.ui.tree.BaseNode.prototype.getIconClass = function() {
    return this.iconClass_
}, goog.ui.tree.BaseNode.prototype.setExpandedIconClass = function(e) {
    this.expandedIconClass_ = e, this.isInDocument() && this.updateIcon_()
}, goog.ui.tree.BaseNode.prototype.getExpandedIconClass = function() {
    return this.expandedIconClass_
}, goog.ui.tree.BaseNode.prototype.setText = function(e) {
    this.setSafeHtml(goog.html.SafeHtml.htmlEscape(e))
}, goog.ui.tree.BaseNode.prototype.getText = function() {
    return goog.string.unescapeEntities(goog.html.SafeHtml.unwrap(this.html_))
}, goog.ui.tree.BaseNode.prototype.setHtml = function(e) {
    this.setSafeHtml(goog.html.legacyconversions.safeHtmlFromString(e))
}, goog.ui.tree.BaseNode.prototype.setSafeHtml = function(e) {
    this.html_ = e;
    var t = this.getLabelElement();
    t && goog.dom.safe.setInnerHtml(t, e), (e = this.getTree()) && e.setNode(this)
}, goog.ui.tree.BaseNode.prototype.getHtml = function() {
    return goog.html.SafeHtml.unwrap(this.getSafeHtml())
}, goog.ui.tree.BaseNode.prototype.getSafeHtml = function() {
    return this.html_
}, goog.ui.tree.BaseNode.prototype.setToolTip = function(e) {
    this.toolTip_ = e;
    var t = this.getLabelElement();
    t && (t.title = e)
}, goog.ui.tree.BaseNode.prototype.getToolTip = function() {
    return this.toolTip_
}, goog.ui.tree.BaseNode.prototype.updateRow = function() {
    var e = this.getRowElement();
    e && (e.className = this.getRowClassName())
}, goog.ui.tree.BaseNode.prototype.updateExpandIcon = function() {
    var e = this.getExpandIconElement();
    e && (e.className = this.getExpandIconClass()), (e = this.getChildrenElement()) && (e.style.backgroundPosition = this.getBackgroundPosition())
}, goog.ui.tree.BaseNode.prototype.updateIcon_ = function() {
    this.getIconElement().className = this.getCalculatedIconClass()
}, goog.ui.tree.BaseNode.prototype.onMouseDown = function(e) {
    "expand" == e.target.getAttribute("type") && this.hasChildren() ? this.isUserCollapsible_ && this.toggle() : (this.select(), this.updateRow())
}, goog.ui.tree.BaseNode.prototype.onClick_ = goog.events.Event.preventDefault, goog.ui.tree.BaseNode.prototype.onDoubleClick_ = function(e) {
    "expand" == e.target.getAttribute("type") && this.hasChildren() || this.isUserCollapsible_ && this.toggle()
}, goog.ui.tree.BaseNode.prototype.onKeyDown = function(e) {
    var t = !0;
    switch (e.keyCode) {
        case goog.events.KeyCodes.RIGHT:
            if (e.altKey) break;
            this.hasChildren() && (this.getExpanded() ? this.getFirstChild().select() : this.setExpanded(!0));
            break;
        case goog.events.KeyCodes.LEFT:
            if (e.altKey) break;
            if (this.hasChildren() && this.getExpanded() && this.isUserCollapsible_) this.setExpanded(!1);
            else {
                var o = this.getParent(),
                    n = this.getTree();
                o && (n.getShowRootNode() || o != n) && o.select()
            }
            break;
        case goog.events.KeyCodes.DOWN:
            (o = this.getNextShownNode()) && o.select();
            break;
        case goog.events.KeyCodes.UP:
            (o = this.getPreviousShownNode()) && o.select();
            break;
        default:
            t = !1
    }
    return t && (e.preventDefault(), (n = this.getTree()) && n.clearTypeAhead()), t
}, goog.ui.tree.BaseNode.prototype.getLastShownDescendant = function() {
    return this.getExpanded() && this.hasChildren() ? this.getLastChild().getLastShownDescendant() : this
}, goog.ui.tree.BaseNode.prototype.getNextShownNode = function() {
    if (this.hasChildren() && this.getExpanded()) return this.getFirstChild();
    for (var e, t = this; t != this.getTree();) {
        if (e = t.getNextSibling(), null != e) return e;
        t = t.getParent()
    }
    return null
}, goog.ui.tree.BaseNode.prototype.getPreviousShownNode = function() {
    var e = this.getPreviousSibling();
    if (null != e) return e.getLastShownDescendant();
    var e = this.getParent(),
        t = this.getTree();
    return !t.getShowRootNode() && e == t || this == t ? null : e
}, goog.ui.tree.BaseNode.prototype.getClientData = goog.ui.tree.BaseNode.prototype.getModel, goog.ui.tree.BaseNode.prototype.setClientData = goog.ui.tree.BaseNode.prototype.setModel, goog.ui.tree.BaseNode.prototype.getConfig = function() {
    return this.config_
}, goog.ui.tree.BaseNode.prototype.setTreeInternal = function(e) {
    this.tree != e && (this.tree = e, e.setNode(this), this.forEachChild(function(t) {
        t.setTreeInternal(e)
    }))
}, goog.ui.tree.BaseNode.defaultConfig = {
    indentWidth: 19,
    cssRoot: "goog-tree-root goog-tree-item",
    cssHideRoot: "goog-tree-hide-root",
    cssItem: "goog-tree-item",
    cssChildren: "goog-tree-children",
    cssChildrenNoLines: "goog-tree-children-nolines",
    cssTreeRow: "goog-tree-row",
    cssItemLabel: "goog-tree-item-label",
    cssTreeIcon: "goog-tree-icon",
    cssExpandTreeIcon: "goog-tree-expand-icon",
    cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
    cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
    cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
    cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
    cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
    cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
    cssExpandTreeIconT: "goog-tree-expand-icon-t",
    cssExpandTreeIconL: "goog-tree-expand-icon-l",
    cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
    cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
    cssFileIcon: "goog-tree-file-icon",
    cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
    cssSelectedRow: "selected"
}, goog.ui.tree.TreeNode = function(e, t, o) {
    goog.ui.tree.BaseNode.call(this, e, t, o)
}, goog.inherits(goog.ui.tree.TreeNode, goog.ui.tree.BaseNode), goog.ui.tree.TreeNode.prototype.getTree = function() {
    if (this.tree) return this.tree;
    var e = this.getParent();
    return e && (e = e.getTree()) ? (this.setTreeInternal(e), e) : null
}, goog.ui.tree.TreeNode.prototype.getCalculatedIconClass = function() {
    var e = this.getExpanded(),
        t = this.getExpandedIconClass();
    if (e && t) return t;
    if (t = this.getIconClass(), !e && t) return t;
    if (t = this.getConfig(), this.hasChildren()) {
        if (e && t.cssExpandedFolderIcon) return t.cssTreeIcon + " " + t.cssExpandedFolderIcon;
        if (!e && t.cssCollapsedFolderIcon) return t.cssTreeIcon + " " + t.cssCollapsedFolderIcon
    } else if (t.cssFileIcon) return t.cssTreeIcon + " " + t.cssFileIcon;
    return ""
}, goog.structs.Trie = function(e) {
    this.value_ = void 0, this.childNodes_ = {}, e && this.setAll(e)
}, goog.structs.Trie.prototype.set = function(e, t) {
    this.setOrAdd_(e, t, !1)
}, goog.structs.Trie.prototype.add = function(e, t) {
    this.setOrAdd_(e, t, !0)
}, goog.structs.Trie.prototype.setOrAdd_ = function(e, t, o) {
    for (var n = this, i = 0; i < e.length; i++) {
        var r = e.charAt(i);
        n.childNodes_[r] || (n.childNodes_[r] = new goog.structs.Trie), n = n.childNodes_[r]
    }
    if (o && void 0 !== n.value_) throw Error('The collection already contains the key "' + e + '"');
    n.value_ = t
}, goog.structs.Trie.prototype.setAll = function(e) {
    var t = goog.structs.getKeys(e);
    e = goog.structs.getValues(e);
    for (var o = 0; o < t.length; o++) this.set(t[o], e[o])
}, goog.structs.Trie.prototype.getChildNode_ = function(e) {
    for (var t = this, o = 0; o < e.length; o++) {
        var n = e.charAt(o),
            t = t.childNodes_[n];
        if (!t) return
    }
    return t
}, goog.structs.Trie.prototype.get = function(e) {
    return (e = this.getChildNode_(e)) ? e.value_ : void 0
}, goog.structs.Trie.prototype.getKeyAndPrefixes = function(e, t) {
    var o = this,
        n = {},
        i = t || 0;
    for (void 0 !== o.value_ && (n[i] = o.value_); i < e.length; i++) {
        var r = e.charAt(i);
        if (!(r in o.childNodes_)) break;
        o = o.childNodes_[r], void 0 !== o.value_ && (n[i] = o.value_)
    }
    return n
}, goog.structs.Trie.prototype.getValues = function() {
    var e = [];
    return this.getValuesInternal_(e), e
}, goog.structs.Trie.prototype.getValuesInternal_ = function(e) {
    void 0 !== this.value_ && e.push(this.value_);
    for (var t in this.childNodes_) this.childNodes_[t].getValuesInternal_(e)
}, goog.structs.Trie.prototype.getKeys = function(e) {
    var t = [];
    if (e) {
        for (var o = this, n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            if (!o.childNodes_[i]) return [];
            o = o.childNodes_[i]
        }
        o.getKeysInternal_(e, t)
    } else this.getKeysInternal_("", t);
    return t
}, goog.structs.Trie.prototype.getKeysInternal_ = function(e, t) {
    void 0 !== this.value_ && t.push(e);
    for (var o in this.childNodes_) this.childNodes_[o].getKeysInternal_(e + o, t)
}, goog.structs.Trie.prototype.containsKey = function(e) {
    return void 0 !== this.get(e)
}, goog.structs.Trie.prototype.containsPrefix = function(e) {
    return 0 == e.length ? !this.isEmpty() : !!this.getChildNode_(e)
}, goog.structs.Trie.prototype.containsValue = function(e) {
    if (this.value_ === e) return !0;
    for (var t in this.childNodes_)
        if (this.childNodes_[t].containsValue(e)) return !0;
    return !1
}, goog.structs.Trie.prototype.clear = function() {
    this.childNodes_ = {}, this.value_ = void 0
}, goog.structs.Trie.prototype.remove = function(e) {
    for (var t = this, o = [], n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (!t.childNodes_[i]) throw Error('The collection does not have the key "' + e + '"');
        o.push([t, i]), t = t.childNodes_[i]
    }
    for (e = t.value_, delete t.value_; 0 < o.length && (i = o.pop(), t = i[0], i = i[1], t.childNodes_[i].isEmpty());) delete t.childNodes_[i];
    return e
}, goog.structs.Trie.prototype.clone = function() {
    return new goog.structs.Trie(this)
}, goog.structs.Trie.prototype.getCount = function() {
    return goog.structs.getCount(this.getValues())
}, goog.structs.Trie.prototype.isEmpty = function() {
    return void 0 === this.value_ && goog.object.isEmpty(this.childNodes_)
}, goog.ui.tree.TypeAhead = function() {
    this.nodeMap_ = new goog.structs.Trie
}, goog.ui.tree.TypeAhead.prototype.buffer_ = "", goog.ui.tree.TypeAhead.prototype.matchingLabels_ = null, goog.ui.tree.TypeAhead.prototype.matchingNodes_ = null, goog.ui.tree.TypeAhead.prototype.matchingLabelIndex_ = 0, goog.ui.tree.TypeAhead.prototype.matchingNodeIndex_ = 0, goog.ui.tree.TypeAhead.Offset = {
    DOWN: 1,
    UP: -1
}, goog.ui.tree.TypeAhead.prototype.handleNavigation = function(e) {
    var t = !1;
    switch (e.keyCode) {
        case goog.events.KeyCodes.DOWN:
        case goog.events.KeyCodes.UP:
            e.ctrlKey && (this.jumpTo_(e.keyCode == goog.events.KeyCodes.DOWN ? goog.ui.tree.TypeAhead.Offset.DOWN : goog.ui.tree.TypeAhead.Offset.UP), t = !0);
            break;
        case goog.events.KeyCodes.BACKSPACE:
            e = this.buffer_.length - 1, t = !0, e > 0 ? (this.buffer_ = this.buffer_.substring(0, e), this.jumpToLabel_(this.buffer_)) : 0 == e ? this.buffer_ = "" : t = !1;
            break;
        case goog.events.KeyCodes.ESC:
            this.buffer_ = "", t = !0
    }
    return t
}, goog.ui.tree.TypeAhead.prototype.handleTypeAheadChar = function(e) {
    var t = !1;
    return e.ctrlKey || e.altKey || (e = String.fromCharCode(e.charCode || e.keyCode).toLowerCase(), goog.string.isUnicodeChar(e) && (" " != e || this.buffer_) && (this.buffer_ += e, t = this.jumpToLabel_(this.buffer_))), t
}, goog.ui.tree.TypeAhead.prototype.setNodeInMap = function(e) {
    var t = e.getText();
    if (t && !goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t))) {
        var t = t.toLowerCase(),
            o = this.nodeMap_.get(t);
        o ? o.push(e) : this.nodeMap_.set(t, [e])
    }
}, goog.ui.tree.TypeAhead.prototype.removeNodeFromMap = function(e) {
    var t = e.getText();
    if (t && !goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t))) {
        var t = t.toLowerCase(),
            o = this.nodeMap_.get(t);
        o && (goog.array.remove(o, e), o.length && this.nodeMap_.remove(t))
    }
}, goog.ui.tree.TypeAhead.prototype.jumpToLabel_ = function(e) {
    var t = !1;
    return (e = this.nodeMap_.getKeys(e)) && e.length && (this.matchingLabelIndex_ = this.matchingNodeIndex_ = 0, t = this.nodeMap_.get(e[0]), t = this.selectMatchingNode_(t)) && (this.matchingLabels_ = e), t
}, goog.ui.tree.TypeAhead.prototype.jumpTo_ = function(e) {
    var t = !1,
        o = this.matchingLabels_;
    if (o) {
        var t = null,
            n = !1;
        if (this.matchingNodes_) {
            var i = this.matchingNodeIndex_ + e;
            i >= 0 && i < this.matchingNodes_.length ? (this.matchingNodeIndex_ = i, t = this.matchingNodes_) : n = !0
        }
        t || (i = this.matchingLabelIndex_ + e, i >= 0 && i < o.length && (this.matchingLabelIndex_ = i), o.length > this.matchingLabelIndex_ && (t = this.nodeMap_.get(o[this.matchingLabelIndex_])), t && t.length && n && (this.matchingNodeIndex_ = e == goog.ui.tree.TypeAhead.Offset.UP ? t.length - 1 : 0)), (t = this.selectMatchingNode_(t)) && (this.matchingLabels_ = o)
    }
    return t
}, goog.ui.tree.TypeAhead.prototype.selectMatchingNode_ = function(e) {
    var t;
    return e && (this.matchingNodeIndex_ < e.length && (t = e[this.matchingNodeIndex_], this.matchingNodes_ = e), t && (t.reveal(), t.select())), !!t
}, goog.ui.tree.TypeAhead.prototype.clear = function() {
    this.buffer_ = ""
}, goog.ui.tree.TreeControl = function(e, t, o) {
    if (goog.ui.tree.BaseNode.call(this, e, t, o), this.setExpandedInternal(!0), this.setSelectedInternal(!0), this.selectedItem_ = this, this.typeAhead_ = new goog.ui.tree.TypeAhead, goog.userAgent.IE) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (n) {
        goog.log.warning(this.logger_, "Failed to enable background image cache")
    }
}, goog.inherits(goog.ui.tree.TreeControl, goog.ui.tree.BaseNode), goog.ui.tree.TreeControl.prototype.keyHandler_ = null, goog.ui.tree.TreeControl.prototype.focusHandler_ = null, goog.ui.tree.TreeControl.prototype.logger_ = goog.log.getLogger("goog.ui.tree.TreeControl"), goog.ui.tree.TreeControl.prototype.focused_ = !1, goog.ui.tree.TreeControl.prototype.focusedNode_ = null, goog.ui.tree.TreeControl.prototype.showLines_ = !0, goog.ui.tree.TreeControl.prototype.showExpandIcons_ = !0, goog.ui.tree.TreeControl.prototype.showRootNode_ = !0, goog.ui.tree.TreeControl.prototype.showRootLines_ = !0, goog.ui.tree.TreeControl.prototype.getTree = function() {
    return this
}, goog.ui.tree.TreeControl.prototype.getDepth = function() {
    return 0
}, goog.ui.tree.TreeControl.prototype.reveal = function() {}, goog.ui.tree.TreeControl.prototype.handleFocus_ = function() {
    this.focused_ = !0, goog.dom.classlist.add(goog.asserts.assert(this.getElement()), "focused"), this.selectedItem_ && this.selectedItem_.select()
}, goog.ui.tree.TreeControl.prototype.handleBlur_ = function() {
    this.focused_ = !1, goog.dom.classlist.remove(goog.asserts.assert(this.getElement()), "focused")
}, goog.ui.tree.TreeControl.prototype.hasFocus = function() {
    return this.focused_
}, goog.ui.tree.TreeControl.prototype.getExpanded = function() {
    return !this.showRootNode_ || goog.ui.tree.TreeControl.superClass_.getExpanded.call(this)
}, goog.ui.tree.TreeControl.prototype.setExpanded = function(e) {
    this.showRootNode_ ? goog.ui.tree.TreeControl.superClass_.setExpanded.call(this, e) : this.setExpandedInternal(e)
}, goog.ui.tree.TreeControl.prototype.getExpandIconSafeHtml = function() {
    return goog.html.SafeHtml.EMPTY
}, goog.ui.tree.TreeControl.prototype.getIconElement = function() {
    var e = this.getRowElement();
    return e ? e.firstChild : null
}, goog.ui.tree.TreeControl.prototype.getExpandIconElement = function() {
    return null
}, goog.ui.tree.TreeControl.prototype.updateExpandIcon = function() {}, goog.ui.tree.TreeControl.prototype.getRowClassName = function() {
    return goog.ui.tree.TreeControl.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.getConfig().cssHideRoot)
}, goog.ui.tree.TreeControl.prototype.getCalculatedIconClass = function() {
    var e = this.getExpanded(),
        t = this.getExpandedIconClass();
    return e && t ? t : (t = this.getIconClass(), !e && t ? t : (t = this.getConfig(), e && t.cssExpandedRootIcon ? t.cssTreeIcon + " " + t.cssExpandedRootIcon : !e && t.cssCollapsedRootIcon ? t.cssTreeIcon + " " + t.cssCollapsedRootIcon : ""))
}, goog.ui.tree.TreeControl.prototype.setSelectedItem = function(e) {
    if (this.selectedItem_ != e) {
        var t = !1;
        this.selectedItem_ && (t = this.selectedItem_ == this.focusedNode_, this.selectedItem_.setSelectedInternal(!1)), (this.selectedItem_ = e) && (e.setSelectedInternal(!0), t && e.select()), this.dispatchEvent(goog.events.EventType.CHANGE)
    }
}, goog.ui.tree.TreeControl.prototype.getSelectedItem = function() {
    return this.selectedItem_
}, goog.ui.tree.TreeControl.prototype.setShowLines = function(e) {
    this.showLines_ != e && (this.showLines_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowLines = function() {
    return this.showLines_
}, goog.ui.tree.TreeControl.prototype.updateLinesAndExpandIcons_ = function() {
    function e(i) {
        var r = i.getChildrenElement();
        if (r) {
            var s = !o || t == i.getParent() && !n ? i.getConfig().cssChildrenNoLines : i.getConfig().cssChildren;
            r.className = s, (r = i.getExpandIconElement()) && (r.className = i.getExpandIconClass())
        }
        i.forEachChild(e)
    }
    var t = this,
        o = t.getShowLines(),
        n = t.getShowRootLines();
    e(this)
}, goog.ui.tree.TreeControl.prototype.setShowRootLines = function(e) {
    this.showRootLines_ != e && (this.showRootLines_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowRootLines = function() {
    return this.showRootLines_
}, goog.ui.tree.TreeControl.prototype.setShowExpandIcons = function(e) {
    this.showExpandIcons_ != e && (this.showExpandIcons_ = e, this.isInDocument() && this.updateLinesAndExpandIcons_())
}, goog.ui.tree.TreeControl.prototype.getShowExpandIcons = function() {
    return this.showExpandIcons_
}, goog.ui.tree.TreeControl.prototype.setShowRootNode = function(e) {
    if (this.showRootNode_ != e) {
        if (this.showRootNode_ = e, this.isInDocument()) {
            var t = this.getRowElement();
            t && (t.className = this.getRowClassName())
        }!e && this.getSelectedItem() == this && this.getFirstChild() && this.setSelectedItem(this.getFirstChild())
    }
}, goog.ui.tree.TreeControl.prototype.getShowRootNode = function() {
    return this.showRootNode_
}, goog.ui.tree.TreeControl.prototype.initAccessibility = function() {
    goog.ui.tree.TreeControl.superClass_.initAccessibility.call(this);
    var e = this.getElement();
    goog.asserts.assert(e, "The DOM element for the tree cannot be null."), goog.a11y.aria.setRole(e, "tree"), goog.a11y.aria.setState(e, "labelledby", this.getLabelElement().id)
}, goog.ui.tree.TreeControl.prototype.enterDocument = function() {
    goog.ui.tree.TreeControl.superClass_.enterDocument.call(this);
    var e = this.getElement();
    e.className = this.getConfig().cssRoot, e.setAttribute("hideFocus", "true"), this.attachEvents_(), this.initAccessibility()
}, goog.ui.tree.TreeControl.prototype.exitDocument = function() {
    goog.ui.tree.TreeControl.superClass_.exitDocument.call(this), this.detachEvents_()
}, goog.ui.tree.TreeControl.prototype.attachEvents_ = function() {
    var e = this.getElement();
    e.tabIndex = 0;
    var t = this.keyHandler_ = new goog.events.KeyHandler(e),
        o = this.focusHandler_ = new goog.events.FocusHandler(e);
    this.getHandler().listen(o, goog.events.FocusHandler.EventType.FOCUSOUT, this.handleBlur_).listen(o, goog.events.FocusHandler.EventType.FOCUSIN, this.handleFocus_).listen(t, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(e, goog.events.EventType.MOUSEDOWN, this.handleMouseEvent_).listen(e, goog.events.EventType.CLICK, this.handleMouseEvent_).listen(e, goog.events.EventType.DBLCLICK, this.handleMouseEvent_)
}, goog.ui.tree.TreeControl.prototype.detachEvents_ = function() {
    this.keyHandler_.dispose(), this.keyHandler_ = null, this.focusHandler_.dispose(), this.focusHandler_ = null
}, goog.ui.tree.TreeControl.prototype.handleMouseEvent_ = function(e) {
    goog.log.fine(this.logger_, "Received event " + e.type);
    var t = this.getNodeFromEvent_(e);
    if (t) switch (e.type) {
        case goog.events.EventType.MOUSEDOWN:
            t.onMouseDown(e);
            break;
        case goog.events.EventType.CLICK:
            t.onClick_(e);
            break;
        case goog.events.EventType.DBLCLICK:
            t.onDoubleClick_(e)
    }
}, goog.ui.tree.TreeControl.prototype.handleKeyEvent = function(e) {
    var t = !1;
    return (t = this.typeAhead_.handleNavigation(e) || this.selectedItem_ && this.selectedItem_.onKeyDown(e) || this.typeAhead_.handleTypeAheadChar(e)) && e.preventDefault(), t
}, goog.ui.tree.TreeControl.prototype.getNodeFromEvent_ = function(e) {
    var t = null;
    for (e = e.target; null != e;) {
        if (t = goog.ui.tree.BaseNode.allNodes[e.id]) return t;
        if (e == this.getElement()) break;
        e = e.parentNode
    }
    return null
}, goog.ui.tree.TreeControl.prototype.createNode = function(e) {
    return new goog.ui.tree.TreeNode(e || goog.html.SafeHtml.EMPTY, this.getConfig(), this.getDomHelper())
}, goog.ui.tree.TreeControl.prototype.setNode = function(e) {
    this.typeAhead_.setNodeInMap(e)
}, goog.ui.tree.TreeControl.prototype.removeNode = function(e) {
    this.typeAhead_.removeNodeFromMap(e)
}, goog.ui.tree.TreeControl.prototype.clearTypeAhead = function() {
    this.typeAhead_.clear()
}, goog.ui.tree.TreeControl.defaultConfig = goog.ui.tree.BaseNode.defaultConfig, goog.cssom = {}, goog.cssom.CssRuleType = {
    STYLE: 1,
    IMPORT: 3,
    MEDIA: 4,
    FONT_FACE: 5,
    PAGE: 6,
    NAMESPACE: 7
}, goog.cssom.getAllCssText = function(e) {
    return goog.cssom.getAllCss_(e || document.styleSheets, !0)
}, goog.cssom.getAllCssStyleRules = function(e) {
    return goog.cssom.getAllCss_(e || document.styleSheets, !1)
}, goog.cssom.getCssRulesFromStyleSheet = function(e) {
    var t = null;
    try {
        t = e.cssRules || e.rules
    } catch (o) {
        if (15 == o.code) throw o.styleSheet = e, o
    }
    return t
}, goog.cssom.getAllCssStyleSheets = function(e, t) {
    var o = [],
        n = e || document.styleSheets,
        i = goog.isDef(t) ? t : !1;
    if (n.imports && n.imports.length)
        for (var r = 0, s = n.imports.length; s > r; r++) goog.array.extend(o, goog.cssom.getAllCssStyleSheets(n.imports[r]));
    else if (n.length)
        for (r = 0, s = n.length; s > r; r++) goog.array.extend(o, goog.cssom.getAllCssStyleSheets(n[r]));
    else {
        var l = goog.cssom.getCssRulesFromStyleSheet(n);
        if (l && l.length)
            for (var a, r = 0, s = l.length; s > r; r++) a = l[r], a.styleSheet && goog.array.extend(o, goog.cssom.getAllCssStyleSheets(a.styleSheet))
    }
    return !(n.type || n.rules || n.cssRules) || n.disabled && !i || o.push(n), o
}, goog.cssom.getCssTextFromCssRule = function(e) {
    var t = "";
    return e.cssText ? t = e.cssText : e.style && e.style.cssText && e.selectorText && (t = e.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), t = e.selectorText + " { " + t + " }"), t
}, goog.cssom.getCssRuleIndexInParentStyleSheet = function(e, t) {
    if (e.style && e.style["-closure-rule-index"]) return e.style["-closure-rule-index"];
    var o = t || goog.cssom.getParentStyleSheet(e);
    if (!o) throw Error("Cannot find a parentStyleSheet.");
    if ((o = goog.cssom.getCssRulesFromStyleSheet(o)) && o.length)
        for (var n, i = 0, r = o.length; r > i; i++)
            if (n = o[i], n == e) return i;
    return -1
}, goog.cssom.getParentStyleSheet = function(e) {
    return e.parentStyleSheet || e.style && e.style["-closure-parent-stylesheet"]
}, goog.cssom.replaceCssRule = function(e, t, o, n) {
    if (!(o = o || goog.cssom.getParentStyleSheet(e))) throw Error("Cannot proceed without the parentStyleSheet.");
    if (e = n >= 0 ? n : goog.cssom.getCssRuleIndexInParentStyleSheet(e, o), !(e >= 0)) throw Error("Cannot proceed without the index of the cssRule.");
    goog.cssom.removeCssRule(o, e), goog.cssom.addCssRule(o, t, e)
}, goog.cssom.addCssRule = function(e, t, o) {
    if ((0 > o || void 0 == o) && (o = goog.cssom.getCssRulesFromStyleSheet(e).length), e.insertRule) e.insertRule(t, o);
    else {
        if (t = /^([^\{]+)\{([^\{]+)\}/.exec(t), 3 != t.length) throw Error("Your CSSRule appears to be ill-formatted.");
        e.addRule(t[1], t[2], o)
    }
}, goog.cssom.removeCssRule = function(e, t) {
    e.deleteRule ? e.deleteRule(t) : e.removeRule(t)
}, goog.cssom.addCssText = function(e, t) {
    var o = t ? t.getDocument() : goog.dom.getDocument(),
        n = o.createElement("style");
    return n.type = "text/css", o.getElementsByTagName("head")[0].appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : (o = o.createTextNode(e), n.appendChild(o)), n
}, goog.cssom.getFileNameFromStyleSheet = function(e) {
    return (e = e.href) ? /([^\/\?]+)[^\/]*$/.exec(e)[1] : null
}, goog.cssom.getAllCss_ = function(e, t) {
    for (var o = [], n = goog.cssom.getAllCssStyleSheets(e), i = 0; e = n[i]; i++) {
        var r = goog.cssom.getCssRulesFromStyleSheet(e);
        if (r && r.length) {
            if (!t) var s = 0;
            for (var l, a = 0, c = r.length; c > a; a++) l = r[a], t && !l.href ? (l = goog.cssom.getCssTextFromCssRule(l), o.push(l)) : l.href || (l.style && (l.parentStyleSheet || (l.style["-closure-parent-stylesheet"] = e), l.style["-closure-rule-index"] = s), o.push(l)), t || s++
        }
    }
    return t ? o.join(" ") : o
};
var Blockly = {
    Blocks: {}
};
Blockly.Blocks.uidCounter_ = 0, Blockly.Blocks.genUid = function() {
    var e = (++Blockly.Blocks.uidCounter_).toString();
    return Blockly.Realtime.isEnabled() ? Blockly.Realtime.genUid(e) : e
}, Blockly.Blocks.addTemplate = function(e) {
    goog.asserts.assert(e.blockName), goog.asserts.assert(Blockly.Blocks[e.blockName], "Blockly.Blocks already has a field named ", e.blockName), goog.asserts.assert(e.message), goog.asserts.assert(e.colour && "number" == typeof e.colour && 0 <= e.colour && 360 > e.colour, "details.colour must be a number from 0 to 360 (exclusive)"), "undefined" != e.output && (goog.asserts.assert(!e.previousStatement, "When details.output is defined, details.previousStatement must not be true."), goog.asserts.assert(!e.nextStatement, "When details.output is defined, details.nextStatement must not be true."));
    var t = {
        init: function() {
            var t = this;
            this.setColour(e.colour), this.setHelpUrl(e.helpUrl), "string" == typeof e.tooltip ? this.setTooltip(e.tooltip) : "function" == typeof e.tooltip && this.setTooltip(function() {
                return e.tooltip(t)
            }), "undefined" != e.output ? this.setOutput(!0, e.output) : (this.setPreviousStatement("undefined" == typeof e.previousStatement ? !0 : e.previousStatement), this.setNextStatement("undefined" == typeof e.nextStatement ? !0 : e.nextStatement));
            var o = [];
            o.push(e.text), e.args && e.args.forEach(function(e) {
                goog.asserts.assert(e.name), goog.asserts.assert("undefined" != e.check), "undefined" == e.type || e.type == Blockly.INPUT_VALUE ? o.push([e.name, e.check, "undefined" == typeof e.align ? Blockly.ALIGN_RIGHT : e.align]) : goog.asserts.fail("addTemplate() can only handle value inputs.")
            }), o.push(Blockly.ALIGN_RIGHT), e.inline && this.setInlineInputs(e.inline), Blockly.Block.prototype.interpolateMsg.apply(this, o)
        }
    };
    t.mutationToDom = e.switchable ? function() {
        var t = e.mutationToDomFunc ? e.mutatationToDomFunc() : document.createElement("mutation");
        return t.setAttribute("is_statement", this.isStatement || !1), t
    } : e.mutationToDomFunc, Blockly.Blocks[e.blockName] = t
}, Blockly.Workspace = function(e) {
    this.topBlocks_ = [], this.options = e || {}, this.RTL = !!this.options.RTL
}, Blockly.Workspace.prototype.rendered = !1, Blockly.Workspace.prototype.dispose = function() {
    this.clear()
}, Blockly.Workspace.SCAN_ANGLE = 3, Blockly.Workspace.prototype.addTopBlock = function(e) {
    this.topBlocks_.push(e), this.fireChangeEvent()
}, Blockly.Workspace.prototype.removeTopBlock = function(e) {
    for (var t, o = !1, n = 0; t = this.topBlocks_[n]; n++)
        if (t == e) {
            this.topBlocks_.splice(n, 1), o = !0;
            break
        }
    if (!o) throw "Block not present in workspace's list of top-most blocks.";
    this.fireChangeEvent()
}, Blockly.Workspace.prototype.getTopBlocks = function(e) {
    var t = [].concat(this.topBlocks_);
    if (e && 1 < t.length) {
        var o = Math.sin(goog.math.toRadians(Blockly.Workspace.SCAN_ANGLE));
        this.RTL && (o *= -1), t.sort(function(e, t) {
            var n = e.getRelativeToSurfaceXY(),
                i = t.getRelativeToSurfaceXY();
            return n.y + o * n.x - (i.y + o * i.x)
        })
    }
    return t
}, Blockly.Workspace.prototype.getAllBlocks = function() {
    for (var e = this.getTopBlocks(!1), t = 0; t < e.length; t++) e.push.apply(e, e[t].getChildren());
    return e
}, Blockly.Workspace.prototype.clear = function() {
    for (; this.topBlocks_.length;) this.topBlocks_[0].dispose()
}, Blockly.Workspace.prototype.getWidth = function() {
    return 0
}, Blockly.Workspace.prototype.getBlockById = function(e) {
    for (var t, o = this.getAllBlocks(), n = 0; t = o[n]; n++)
        if (t.id == e) return t;
    return null
}, Blockly.Workspace.prototype.remainingCapacity = function() {
    return isNaN(this.options.maxBlocks) ? 1 / 0 : this.options.maxBlocks - this.getAllBlocks().length
}, Blockly.Workspace.prototype.fireChangeEvent = function() {}, Blockly.Workspace.prototype.updateToolbox = function(e) {
    if (e = Blockly.parseToolboxTree_(e)) {
        if (!this.options.languageTree) throw "Existing toolbox is null.  Can't create new toolbox.";
        if (this.options.hasCategories) {
            if (!this.toolbox_) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.languageTree = e, this.toolbox_.populate_(e)
        } else {
            if (!this.flyout_) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.languageTree = e, this.flyout_.show(e.childNodes)
        }
    } else if (this.options.languageTree) throw "Can't nullify an existing toolbox."
}, Blockly.Bubble = function(e, t, o, n, i, r, s) {
    this.workspace_ = e, this.content_ = t, this.shape_ = o, o = Blockly.Bubble.ARROW_ANGLE, this.workspace_.RTL && (o = -o), this.arrow_radians_ = goog.math.toRadians(o), e.getBubbleCanvas().appendChild(this.createDom_(t, !(!r || !s))), this.setAnchorLocation(n, i), r && s || (t = this.content_.getBBox(), r = t.width + 2 * Blockly.Bubble.BORDER_WIDTH, s = t.height + 2 * Blockly.Bubble.BORDER_WIDTH), this.setBubbleSize(r, s), this.positionBubble_(), this.renderArrow_(), this.rendered_ = !0, e.options.readOnly || (Blockly.bindEvent_(this.bubbleBack_, "mousedown", this, this.bubbleMouseDown_), this.resizeGroup_ && Blockly.bindEvent_(this.resizeGroup_, "mousedown", this, this.resizeMouseDown_))
}, Blockly.Bubble.BORDER_WIDTH = 6, Blockly.Bubble.ARROW_THICKNESS = 10, Blockly.Bubble.ARROW_ANGLE = 20, Blockly.Bubble.ARROW_BEND = 4, Blockly.Bubble.ANCHOR_RADIUS = 8, Blockly.Bubble.onMouseUpWrapper_ = null, Blockly.Bubble.onMouseMoveWrapper_ = null, Blockly.Bubble.unbindDragEvents_ = function() {
    Blockly.Bubble.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Bubble.onMouseUpWrapper_), Blockly.Bubble.onMouseUpWrapper_ = null), Blockly.Bubble.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Bubble.onMouseMoveWrapper_), Blockly.Bubble.onMouseMoveWrapper_ = null)
}, Blockly.Bubble.prototype.rendered_ = !1, Blockly.Bubble.prototype.anchorX_ = 0, Blockly.Bubble.prototype.anchorY_ = 0, Blockly.Bubble.prototype.relativeLeft_ = 0, Blockly.Bubble.prototype.relativeTop_ = 0, Blockly.Bubble.prototype.width_ = 0, Blockly.Bubble.prototype.height_ = 0, Blockly.Bubble.prototype.autoLayout_ = !0, Blockly.Bubble.prototype.createDom_ = function(e, t) {
    this.bubbleGroup_ = Blockly.createSvgElement("g", {}, null);
    var o = {
        filter: "url(#blocklyEmboss)"
    };
    return -1 != goog.userAgent.getUserAgentString().indexOf("JavaFX") && (o = {}), o = Blockly.createSvgElement("g", o, this.bubbleGroup_), this.bubbleArrow_ = Blockly.createSvgElement("path", {}, o), this.bubbleBack_ = Blockly.createSvgElement("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: Blockly.Bubble.BORDER_WIDTH,
        ry: Blockly.Bubble.BORDER_WIDTH
    }, o), t ? (this.resizeGroup_ = Blockly.createSvgElement("g", {
        "class": this.workspace_.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.bubbleGroup_), o = 2 * Blockly.Bubble.BORDER_WIDTH, Blockly.createSvgElement("polygon", {
        points: "0,x x,x x,0".replace(/x/g, o.toString())
    }, this.resizeGroup_), Blockly.createSvgElement("line", {
        "class": "blocklyResizeLine",
        x1: o / 3,
        y1: o - 1,
        x2: o - 1,
        y2: o / 3
    }, this.resizeGroup_), Blockly.createSvgElement("line", {
        "class": "blocklyResizeLine",
        x1: 2 * o / 3,
        y1: o - 1,
        x2: o - 1,
        y2: 2 * o / 3
    }, this.resizeGroup_)) : this.resizeGroup_ = null, this.bubbleGroup_.appendChild(e), this.bubbleGroup_
}, Blockly.Bubble.prototype.bubbleMouseDown_ = function(e) {
    this.promote_(), Blockly.Bubble.unbindDragEvents_(), Blockly.isRightButton(e) ? e.stopPropagation() : Blockly.isTargetInput_(e) || (Blockly.Css.setCursor(Blockly.Css.Cursor.CLOSED), this.dragDeltaX = this.workspace_.RTL ? this.relativeLeft_ + e.clientX : this.relativeLeft_ - e.clientX, this.dragDeltaY = this.relativeTop_ - e.clientY, Blockly.Bubble.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.Bubble.unbindDragEvents_), Blockly.Bubble.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.bubbleMouseMove_), Blockly.hideChaff(), e.stopPropagation())
}, Blockly.Bubble.prototype.bubbleMouseMove_ = function(e) {
    this.autoLayout_ = !1, this.relativeLeft_ = this.workspace_.RTL ? this.dragDeltaX - e.clientX : this.dragDeltaX + e.clientX, this.relativeTop_ = this.dragDeltaY + e.clientY, this.positionBubble_(), this.renderArrow_()
}, Blockly.Bubble.prototype.resizeMouseDown_ = function(e) {
    this.promote_(), Blockly.Bubble.unbindDragEvents_(), Blockly.isRightButton(e) || (Blockly.Css.setCursor(Blockly.Css.Cursor.CLOSED), this.resizeDeltaWidth = this.workspace_.RTL ? this.width_ + e.clientX : this.width_ - e.clientX, this.resizeDeltaHeight = this.height_ - e.clientY, Blockly.Bubble.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.Bubble.unbindDragEvents_), Blockly.Bubble.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.resizeMouseMove_), Blockly.hideChaff()), e.stopPropagation()
}, Blockly.Bubble.prototype.resizeMouseMove_ = function(e) {
    this.autoLayout_ = !1;
    var t = this.resizeDeltaWidth,
        o = this.resizeDeltaHeight + e.clientY,
        t = this.workspace_.RTL ? t - e.clientX : t + e.clientX;
    this.setBubbleSize(t, o), this.workspace_.RTL && this.positionBubble_()
}, Blockly.Bubble.prototype.registerResizeEvent = function(e, t) {
    Blockly.bindEvent_(this.bubbleGroup_, "resize", e, t)
}, Blockly.Bubble.prototype.promote_ = function() {
    this.bubbleGroup_.parentNode.appendChild(this.bubbleGroup_)
}, Blockly.Bubble.prototype.setAnchorLocation = function(e, t) {
    this.anchorX_ = e, this.anchorY_ = t, this.rendered_ && this.positionBubble_()
}, Blockly.Bubble.prototype.layoutBubble_ = function() {
    var e = -this.width_ / 4,
        t = -this.height_ - Blockly.BlockSvg.MIN_BLOCK_Y,
        o = this.workspace_.getMetrics();
    this.workspace_.RTL ? this.anchorX_ - o.viewLeft - e - this.width_ < Blockly.Scrollbar.scrollbarThickness ? e = this.anchorX_ - o.viewLeft - this.width_ - Blockly.Scrollbar.scrollbarThickness : this.anchorX_ - o.viewLeft - e > o.viewWidth && (e = this.anchorX_ - o.viewLeft - o.viewWidth) : this.anchorX_ + e < o.viewLeft ? e = o.viewLeft - this.anchorX_ : o.viewLeft + o.viewWidth < this.anchorX_ + e + this.width_ + Blockly.BlockSvg.SEP_SPACE_X + Blockly.Scrollbar.scrollbarThickness && (e = o.viewLeft + o.viewWidth - this.anchorX_ - this.width_ - Blockly.Scrollbar.scrollbarThickness), this.anchorY_ + t < o.viewTop && (t = this.shape_.getBBox().height), this.relativeLeft_ = e, this.relativeTop_ = t
}, Blockly.Bubble.prototype.positionBubble_ = function() {
    this.bubbleGroup_.setAttribute("transform", "translate(" + (this.workspace_.RTL ? this.anchorX_ - this.relativeLeft_ - this.width_ : this.anchorX_ + this.relativeLeft_) + ", " + (this.relativeTop_ + this.anchorY_) + ")")
}, Blockly.Bubble.prototype.getBubbleSize = function() {
    return {
        width: this.width_,
        height: this.height_
    }
}, Blockly.Bubble.prototype.setBubbleSize = function(e, t) {
    var o = 2 * Blockly.Bubble.BORDER_WIDTH;
    e = Math.max(e, o + 45), t = Math.max(t, o + Blockly.BlockSvg.FIELD_HEIGHT), this.width_ = e, this.height_ = t, this.bubbleBack_.setAttribute("width", e), this.bubbleBack_.setAttribute("height", t), this.resizeGroup_ && (this.workspace_.RTL ? this.resizeGroup_.setAttribute("transform", "translate(" + 2 * Blockly.Bubble.BORDER_WIDTH + ", " + (t - o) + ") scale(-1 1)") : this.resizeGroup_.setAttribute("transform", "translate(" + (e - o) + ", " + (t - o) + ")")), this.rendered_ && (this.autoLayout_ && this.layoutBubble_(), this.positionBubble_(), this.renderArrow_()), Blockly.fireUiEvent(this.bubbleGroup_, "resize")
}, Blockly.Bubble.prototype.renderArrow_ = function() {
    var e = [],
        t = this.width_ / 2,
        o = this.height_ / 2,
        n = -this.relativeLeft_,
        i = -this.relativeTop_;
    if (t == n && o == i) e.push("M " + t + "," + o);
    else {
        i -= o, n -= t, this.workspace_.RTL && (n *= -1);
        var r = Math.sqrt(i * i + n * n),
            s = Math.acos(n / r);
        0 > i && (s = 2 * Math.PI - s);
        var l = s + Math.PI / 2;
        l > 2 * Math.PI && (l -= 2 * Math.PI);
        var a = Math.sin(l),
            c = Math.cos(l),
            g = this.getBubbleSize(),
            l = (g.width + g.height) / Blockly.Bubble.ARROW_THICKNESS,
            l = Math.min(l, g.width, g.height) / 2,
            g = 1 - Blockly.Bubble.ANCHOR_RADIUS / r,
            n = t + g * n,
            i = o + g * i,
            g = t + l * c,
            u = o + l * a,
            t = t - l * c,
            o = o - l * a,
            a = s + this.arrow_radians_;
        a > 2 * Math.PI && (a -= 2 * Math.PI), s = Math.sin(a) * r / Blockly.Bubble.ARROW_BEND, r = Math.cos(a) * r / Blockly.Bubble.ARROW_BEND, e.push("M" + g + "," + u), e.push("C" + (g + r) + "," + (u + s) + " " + n + "," + i + " " + n + "," + i), e.push("C" + n + "," + i + " " + (t + r) + "," + (o + s) + " " + t + "," + o)
    }
    e.push("z"), this.bubbleArrow_.setAttribute("d", e.join(" "))
}, Blockly.Bubble.prototype.setColour = function(e) {
    this.bubbleBack_.setAttribute("fill", e), this.bubbleArrow_.setAttribute("fill", e)
}, Blockly.Bubble.prototype.dispose = function() {
    Blockly.Bubble.unbindDragEvents_(), goog.dom.removeNode(this.bubbleGroup_), this.shape_ = this.content_ = this.workspace_ = this.bubbleGroup_ = null
}, Blockly.Icon = function(e) {
    this.block_ = e
}, Blockly.Icon.prototype.png_ = "", Blockly.Icon.prototype.SIZE = 17, Blockly.Icon.prototype.bubble_ = null, Blockly.Icon.prototype.iconX_ = 0, Blockly.Icon.prototype.iconY_ = 0, Blockly.Icon.prototype.createIcon = function() {
    this.iconGroup_ || (this.iconGroup_ = Blockly.createSvgElement("g", {
        "class": "blocklyIconGroup"
    }, null), Blockly.createSvgElement("image", {
        width: this.SIZE,
        height: this.SIZE
    }, this.iconGroup_).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.png_), this.block_.getSvgRoot().appendChild(this.iconGroup_), Blockly.bindEvent_(this.iconGroup_, "mouseup", this, this.iconClick_), this.updateEditable())
}, Blockly.Icon.prototype.dispose = function() {
    goog.dom.removeNode(this.iconGroup_), this.iconGroup_ = null, this.setVisible(!1), this.block_ = null
}, Blockly.Icon.prototype.updateEditable = function() {
    this.block_.isInFlyout || !this.block_.isEditable() ? Blockly.addClass_(this.iconGroup_, "blocklyIconGroupReadonly") : Blockly.removeClass_(this.iconGroup_, "blocklyIconGroupReadonly")
}, Blockly.Icon.prototype.isVisible = function() {
    return !!this.bubble_
}, Blockly.Icon.prototype.iconClick_ = function(e) {
    this.block_.isInFlyout || Blockly.isRightButton(e) || this.setVisible(!this.isVisible())
}, Blockly.Icon.prototype.updateColour = function() {
    if (this.isVisible()) {
        var e = Blockly.makeColour(this.block_.getColour());
        this.bubble_.setColour(e)
    }
}, Blockly.Icon.prototype.renderIcon = function(e) {
    if (this.block_.isCollapsed()) return this.iconGroup_.setAttribute("display", "none"), e;
    this.iconGroup_.setAttribute("display", "block");
    var t = this.SIZE;
    return this.block_.RTL && (e -= t), this.iconGroup_.setAttribute("transform", "translate(" + e + ", 5)"), this.computeIconLocation(), e = this.block_.RTL ? e - Blockly.BlockSvg.SEP_SPACE_X : e + (t + Blockly.BlockSvg.SEP_SPACE_X)
}, Blockly.Icon.prototype.setIconLocation = function(e, t) {
    this.iconX_ = e, this.iconY_ = t, this.isVisible() && this.bubble_.setAnchorLocation(e, t)
}, Blockly.Icon.prototype.computeIconLocation = function() {
    var e = this.block_.getRelativeToSurfaceXY(),
        t = Blockly.getRelativeXY_(this.iconGroup_),
        o = e.x + t.x + this.SIZE / 2,
        e = e.y + t.y + this.SIZE / 2;
    o === this.iconX_ && e === this.iconY_ || this.setIconLocation(o, e)
}, Blockly.Icon.prototype.getIconLocation = function() {
    return {
        x: this.iconX_,
        y: this.iconY_
    }
}, Blockly.Comment = function(e) {
    Blockly.Comment.superClass_.constructor.call(this, e), this.createIcon()
}, goog.inherits(Blockly.Comment, Blockly.Icon), Blockly.Comment.prototype.png_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAANyAAADcgBffIlqAAAAAd0SU1FB98DGgAnBf0Xj5sAAAIBSURBVDjLjZO9SxxRFMXPrFkWl2UFYSOIRtF210YtAiH/gGATRNZFgo19IBaB9Ipgk3SiEoKQgI19JIVgGaOIgpWJEAV1kZk3b1ad0V+KRYIzk5ALh1ecc88978tRSgHPg0Bjvq/BbFalMNR5oaBv+bzWHMfZjOudWPOg6+pDva6elRXlt7fVcnYmPX4sDQ3pdmpKQXu7frS16aXjON8T06OIMWOwtRp3jgNSEpkMTE5y5/v4UcSLePxnroutVNKb4xgYANfFAk/vDbLG8Gtk5P8M7jE6CsZwDDwSMLm5iYmLlpbg4ABOTmBjA4aHk0ZbWxigposLvlarScH5OSwvw9oaABwdJTW1GtTrfJHnUe/uTgqKxeZaKEAUgTEQP/CeHvA8LhRFhLlc+r6zWVhfbyaZn0/yuRxEEaGCAK9USjdZWGgarK5CS0uS7+gAa3EzjYaOy2WlludJi4vSzIx0e5vky2Xp6ko/M4WCPleruk4zsVa6vJSur9OHTEzoqljUJwEdQYDf25uMe3jY3E5fX5Lr7wdr8YGSJCkIeL23h9/a+lA4Pg7T039u6h75POzv4wcBrx5Ec11Wd3bwOzv//VK7umB3F991+Zj2/R1reWstdnaWm3L5YXOlAnNz3FiLbTR4Azj6WwFPjOG953EahoT1On4YEnoep8bwDuiO9/wG1sM4kG8A4fUAAAAASUVORK5CYII=", Blockly.Comment.prototype.text_ = "", Blockly.Comment.prototype.width_ = 160, Blockly.Comment.prototype.height_ = 80, Blockly.Comment.prototype.createEditor_ = function() {
    this.foreignObject_ = Blockly.createSvgElement("foreignObject", {
        x: Blockly.Bubble.BORDER_WIDTH,
        y: Blockly.Bubble.BORDER_WIDTH
    }, null);
    var e = document.createElementNS(Blockly.HTML_NS, "body");
    return e.setAttribute("xmlns", Blockly.HTML_NS), e.className = "blocklyMinimalBody", this.textarea_ = document.createElementNS(Blockly.HTML_NS, "textarea"), this.textarea_.className = "blocklyCommentTextarea", this.textarea_.setAttribute("dir", this.block_.RTL ? "RTL" : "LTR"), e.appendChild(this.textarea_), this.foreignObject_.appendChild(e), Blockly.bindEvent_(this.textarea_, "mouseup", this, this.textareaFocus_), this.foreignObject_
}, Blockly.Comment.prototype.updateEditable = function() {
    this.isVisible() && (this.setVisible(!1), this.setVisible(!0)), Blockly.Icon.prototype.updateEditable.call(this)
}, Blockly.Comment.prototype.resizeBubble_ = function() {
    var e = this.bubble_.getBubbleSize(),
        t = 2 * Blockly.Bubble.BORDER_WIDTH;
    this.foreignObject_.setAttribute("width", e.width - t), this.foreignObject_.setAttribute("height", e.height - t), this.textarea_.style.width = e.width - t - 4 + "px", this.textarea_.style.height = e.height - t - 4 + "px"
}, Blockly.Comment.prototype.setVisible = function(e) {
    if (e != this.isVisible())
        if (!this.block_.isEditable() && !this.textarea_ || goog.userAgent.IE) Blockly.Warning.prototype.setVisible.call(this, e);
        else {
            var t = this.getText(),
                o = this.getBubbleSize();
            e ? (this.bubble_ = new Blockly.Bubble(this.block_.workspace, this.createEditor_(), this.block_.svgPath_, this.iconX_, this.iconY_, this.width_, this.height_), this.bubble_.registerResizeEvent(this, this.resizeBubble_), this.updateColour(), this.text_ = null) : (this.bubble_.dispose(), this.foreignObject_ = this.textarea_ = this.bubble_ = null), this.setText(t), this.setBubbleSize(o.width, o.height)
        }
}, Blockly.Comment.prototype.textareaFocus_ = function() {
    this.bubble_.promote_(), this.textarea_.focus()
}, Blockly.Comment.prototype.getBubbleSize = function() {
    return this.isVisible() ? this.bubble_.getBubbleSize() : {
        width: this.width_,
        height: this.height_
    }
}, Blockly.Comment.prototype.setBubbleSize = function(e, t) {
    this.textarea_ ? this.bubble_.setBubbleSize(e, t) : (this.width_ = e, this.height_ = t)
}, Blockly.Comment.prototype.getText = function() {
    return this.textarea_ ? this.textarea_.value : this.text_
}, Blockly.Comment.prototype.setText = function(e) {
    this.textarea_ ? this.textarea_.value = e : this.text_ = e
}, Blockly.Comment.prototype.dispose = function() {
    this.block_.comment = null, Blockly.Icon.prototype.dispose.call(this)
}, Blockly.Connection = function(e, t) {
    this.sourceBlock_ = e, this.targetConnection = null, this.type = t, this.y_ = this.x_ = 0, this.dbList_ = e.workspace.connectionDBList, this.hidden_ = !this.dbList_, this.inDB_ = !1
}, Blockly.Connection.prototype.dispose = function() {
    if (this.targetConnection) throw "Disconnect connection before disposing of it.";
    this.inDB_ && this.dbList_[this.type].removeConnection_(this), Blockly.highlightedConnection_ == this && (Blockly.highlightedConnection_ = null), Blockly.localConnection_ == this && (Blockly.localConnection_ = null)
}, Blockly.Connection.prototype.isSuperior = function() {
    return this.type == Blockly.INPUT_VALUE || this.type == Blockly.NEXT_STATEMENT
}, Blockly.Connection.prototype.connect = function(e) {
    if (this.sourceBlock_ == e.sourceBlock_) throw "Attempted to connect a block to itself.";
    if (this.sourceBlock_.workspace !== e.sourceBlock_.workspace) throw "Blocks are on different workspaces.";
    if (Blockly.OPPOSITE_TYPE[this.type] != e.type) throw "Attempt to connect incompatible types.";
    if (this.type == Blockly.INPUT_VALUE || this.type == Blockly.OUTPUT_VALUE) {
        if (this.targetConnection) throw "Source connection already connected (value).";
        if (e.targetConnection) {
            var t = e.targetBlock();
            if (t.setParent(null), !t.outputConnection) throw "Orphan block does not have an output connection.";
            for (var o = this.sourceBlock_; o = Blockly.Connection.singleConnection_(o, t);) {
                if (!o.targetBlock()) {
                    o.connect(t.outputConnection), t = null;
                    break
                }
                o = o.targetBlock()
            }
            t && setTimeout(function() {
                t.outputConnection.bumpAwayFrom_(e)
            }, Blockly.BUMP_DELAY)
        }
    } else {
        if (this.targetConnection) throw "Source connection already connected (block).";
        if (e.targetConnection) {
            if (this.type != Blockly.PREVIOUS_STATEMENT) throw "Can only do a mid-stack connection with the top of a block.";
            if (t = e.targetBlock(), t.setParent(null), !t.previousConnection) throw "Orphan block does not have a previous connection.";
            for (o = this.sourceBlock_; o.nextConnection;) {
                if (!o.nextConnection.targetConnection) {
                    t.previousConnection.checkType_(o.nextConnection) && (o.nextConnection.connect(t.previousConnection), t = null);
                    break
                }
                o = o.getNextBlock()
            }
            t && setTimeout(function() {
                t.previousConnection.bumpAwayFrom_(e)
            }, Blockly.BUMP_DELAY)
        }
    }
    var n;
    this.isSuperior() ? (o = this.sourceBlock_, n = e.sourceBlock_) : (o = e.sourceBlock_, n = this.sourceBlock_), this.targetConnection = e, e.targetConnection = this, n.setParent(o), o.rendered && o.updateDisabled(), n.rendered && n.updateDisabled(), o.rendered && n.rendered && (this.type == Blockly.NEXT_STATEMENT || this.type == Blockly.PREVIOUS_STATEMENT ? n.render() : o.render())
}, Blockly.Connection.singleConnection_ = function(e, t) {
    for (var o = !1, n = 0; n < e.inputList.length; n++) {
        var i = e.inputList[n].connection;
        if (i && i.type == Blockly.INPUT_VALUE && t.outputConnection.checkType_(i)) {
            if (o) return null;
            o = i
        }
    }
    return o
}, Blockly.Connection.prototype.disconnect = function() {
    var e = this.targetConnection;
    if (!e) throw "Source connection not connected.";
    if (e.targetConnection != this) throw "Target connection not connected to source connection.";
    this.targetConnection = e.targetConnection = null;
    var t;
    this.isSuperior() ? (t = this.sourceBlock_, e = e.sourceBlock_) : (t = e.sourceBlock_, e = this.sourceBlock_), t.rendered && t.render(), e.rendered && (e.updateDisabled(), e.render())
}, Blockly.Connection.prototype.targetBlock = function() {
    return this.targetConnection ? this.targetConnection.sourceBlock_ : null
}, Blockly.Connection.prototype.bumpAwayFrom_ = function(e) {
    if (0 == Blockly.dragMode_) {
        var t = this.sourceBlock_.getRootBlock();
        if (!t.isInFlyout) {
            var o = !1;
            if (!t.isMovable()) {
                if (t = e.sourceBlock_.getRootBlock(), !t.isMovable()) return;
                e = this, o = !0
            }
            t.getSvgRoot().parentNode.appendChild(t.getSvgRoot());
            var n = e.x_ + Blockly.SNAP_RADIUS - this.x_;
            e = e.y_ + Blockly.SNAP_RADIUS - this.y_, o && (e = -e), t.RTL && (n = -n), t.moveBy(n, e)
        }
    }
}, Blockly.Connection.prototype.moveTo = function(e, t) {
    this.inDB_ && this.dbList_[this.type].removeConnection_(this), this.x_ = e, this.y_ = t, this.hidden_ || this.dbList_[this.type].addConnection_(this)
}, Blockly.Connection.prototype.moveBy = function(e, t) {
    this.moveTo(this.x_ + e, this.y_ + t)
}, Blockly.Connection.prototype.highlight = function() {
    var e;
    this.type == Blockly.INPUT_VALUE || this.type == Blockly.OUTPUT_VALUE ? (e = this.sourceBlock_.RTL ? -Blockly.BlockSvg.TAB_WIDTH : Blockly.BlockSvg.TAB_WIDTH, e = "m 0,0 v 5 c 0,10 " + -e + ",-8 " + -e + ",7.5 s " + e + ",-2.5 " + e + ",7.5 v 5") : e = this.sourceBlock_.RTL ? "m 20,0 h -5 " + Blockly.BlockSvg.NOTCH_PATH_RIGHT + " h -5" : "m -20,0 h 5 " + Blockly.BlockSvg.NOTCH_PATH_LEFT + " h 5";
    var t = this.sourceBlock_.getRelativeToSurfaceXY();
    Blockly.Connection.highlightedPath_ = Blockly.createSvgElement("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: e,
        transform: "translate(" + (this.x_ - t.x) + ", " + (this.y_ - t.y) + ")"
    }, this.sourceBlock_.getSvgRoot())
}, Blockly.Connection.prototype.unhighlight = function() {
    goog.dom.removeNode(Blockly.Connection.highlightedPath_), delete Blockly.Connection.highlightedPath_
}, Blockly.Connection.prototype.tighten_ = function() {
    var e = Math.round(this.targetConnection.x_ - this.x_),
        t = Math.round(this.targetConnection.y_ - this.y_);
    if (0 != e || 0 != t) {
        var o = this.targetBlock(),
            n = o.getSvgRoot();
        if (!n) throw "block is not rendered.";
        n = Blockly.getRelativeXY_(n), o.getSvgRoot().setAttribute("transform", "translate(" + (n.x - e) + ", " + (n.y - t) + ")"), o.moveConnections_(-e, -t)
    }
}, Blockly.Connection.prototype.closest = function(e, t, o) {
    function n(t) {
        var o = i[t];
        if ((o.type == Blockly.OUTPUT_VALUE || o.type == Blockly.PREVIOUS_STATEMENT) && o.targetConnection || o.type == Blockly.INPUT_VALUE && o.targetConnection && !o.targetBlock().isMovable() || !g.checkType_(o)) return !0;
        o = o.sourceBlock_;
        do {
            if (c == o) return !0;
            o = o.getParent()
        } while (o);
        var n = r - i[t].x_,
            o = s - i[t].y_,
            n = Math.sqrt(n * n + o * o);
        return e >= n && (a = i[t], e = n), e > o
    }
    if (this.targetConnection) return {
        connection: null,
        radius: e
    };
    var i = this.dbList_[Blockly.OPPOSITE_TYPE[this.type]],
        r = this.x_ + t,
        s = this.y_ + o;
    t = 0;
    for (var l = o = i.length - 2; l > t;) i[l].y_ < s ? t = l : o = l, l = Math.floor((t + o) / 2);
    o = t = l;
    var a = null,
        c = this.sourceBlock_,
        g = this;
    if (i.length) {
        for (; t >= 0 && n(t);) t--;
        do o++; while (o < i.length && n(o))
    }
    return {
        connection: a,
        radius: e
    }
}, Blockly.Connection.prototype.checkType_ = function(e) {
    var t = this.targetBlock();
    if (t && !t.isMovable() && !this.sourceBlock_.isMovable() || (t = e.targetBlock()) && !t.isMovable() && !e.sourceBlock_.isMovable()) return !1;
    if (!this.check_ || !e.check_) return !0;
    for (t = 0; t < this.check_.length; t++)
        if (-1 != e.check_.indexOf(this.check_[t])) return !0;
    return !1
}, Blockly.Connection.prototype.setCheck = function(e) {
    return e ? (goog.isArray(e) || (e = [e]), this.check_ = e, this.targetConnection && !this.checkType_(this.targetConnection) && (this.isSuperior() ? this.targetBlock().setParent(null) : this.sourceBlock_.setParent(null), this.sourceBlock_.bumpNeighbours_())) : this.check_ = null, this
}, Blockly.Connection.prototype.neighbours_ = function(e) {
    function t(t) {
        var r = n - o[t].x_,
            s = i - o[t].y_;
        return Math.sqrt(r * r + s * s) <= e && a.push(o[t]), e > s
    }
    for (var o = this.dbList_[Blockly.OPPOSITE_TYPE[this.type]], n = this.x_, i = this.y_, r = 0, s = o.length - 2, l = s; l > r;) o[l].y_ < i ? r = l : s = l, l = Math.floor((r + s) / 2);
    var s = r = l,
        a = [];
    if (o.length) {
        for (; r >= 0 && t(r);) r--;
        do s++; while (s < o.length && t(s))
    }
    return a
}, Blockly.Connection.prototype.setHidden = function(e) {
    (this.hidden_ = e) && this.inDB_ ? this.dbList_[this.type].removeConnection_(this) : e || this.inDB_ || this.dbList_[this.type].addConnection_(this)
}, Blockly.Connection.prototype.hideAll = function() {
    if (this.setHidden(!0), this.targetConnection)
        for (var e = this.targetBlock().getDescendants(), t = 0; t < e.length; t++) {
            for (var o = e[t], n = o.getConnections_(!0), i = 0; i < n.length; i++) n[i].setHidden(!0);
            for (o = o.getIcons(), n = 0; n < o.length; n++) o[n].setVisible(!1)
        }
}, Blockly.Connection.prototype.unhideAll = function() {
    this.setHidden(!1);
    var e = [];
    if (this.type != Blockly.INPUT_VALUE && this.type != Blockly.NEXT_STATEMENT) return e;
    var t = this.targetBlock();
    if (t) {
        var o;
        t.isCollapsed() ? (o = [], t.outputConnection && o.push(t.outputConnection), t.nextConnection && o.push(t.nextConnection), t.previousConnection && o.push(t.previousConnection)) : o = t.getConnections_(!0);
        for (var n = 0; n < o.length; n++) e.push.apply(e, o[n].unhideAll());
        0 == e.length && (e[0] = t)
    }
    return e
}, Blockly.ConnectionDB = function() {}, Blockly.ConnectionDB.prototype = [], Blockly.ConnectionDB.constructor = Blockly.ConnectionDB, Blockly.ConnectionDB.prototype.addConnection_ = function(e) {
    if (e.inDB_) throw "Connection already in database.";
    if (!e.sourceBlock_.isInFlyout) {
        for (var t = 0, o = this.length; o > t;) {
            var n = Math.floor((t + o) / 2);
            if (this[n].y_ < e.y_) t = n + 1;
            else {
                if (!(this[n].y_ > e.y_)) {
                    t = n;
                    break
                }
                o = n
            }
        }
        this.splice(t, 0, e), e.inDB_ = !0
    }
}, Blockly.ConnectionDB.prototype.removeConnection_ = function(e) {
    if (!e.inDB_) throw "Connection not in database.";
    e.inDB_ = !1;
    for (var t = 0, o = this.length - 2, n = o; n > t;) this[n].y_ < e.y_ ? t = n : o = n, n = Math.floor((t + o) / 2);
    for (o = t = n; t >= 0 && this[t].y_ == e.y_;) {
        if (this[t] == e) return this.splice(t, 1), void 0;
        t--
    }
    do {
        if (this[o] == e) return this.splice(o, 1), void 0;
        o++
    } while (o < this.length && this[o].y_ == e.y_);
    throw "Unable to find connection in connectionDB."
}, Blockly.ConnectionDB.init = function(e) {
    var t = [];
    t[Blockly.INPUT_VALUE] = new Blockly.ConnectionDB, t[Blockly.OUTPUT_VALUE] = new Blockly.ConnectionDB, t[Blockly.NEXT_STATEMENT] = new Blockly.ConnectionDB, t[Blockly.PREVIOUS_STATEMENT] = new Blockly.ConnectionDB, e.connectionDBList = t
}, Blockly.Field = function(e) {
    this.size_ = new goog.math.Size(0, 25), this.setText(e)
}, Blockly.Field.prototype.sourceBlock_ = null, Blockly.Field.prototype.visible_ = !0, Blockly.Field.prototype.clone = function() {
    goog.asserts.fail("There should never be an instance of Field, only its derived classes.")
}, Blockly.Field.NBSP = " ", Blockly.Field.prototype.EDITABLE = !0, Blockly.Field.prototype.init = function(e) {
    this.sourceBlock_ || (this.sourceBlock_ = e, this.fieldGroup_ = Blockly.createSvgElement("g", {}, null), this.visible_ || (this.fieldGroup_.style.display = "none"), this.borderRect_ = Blockly.createSvgElement("rect", {
        rx: 4,
        ry: 4,
        x: -Blockly.BlockSvg.SEP_SPACE_X / 2,
        y: -12,
        height: 16
    }, this.fieldGroup_), this.textElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText"
    }, this.fieldGroup_), this.updateEditable(), e.getSvgRoot().appendChild(this.fieldGroup_), this.mouseUpWrapper_ = Blockly.bindEvent_(this.fieldGroup_, "mouseup", this, this.onMouseUp_), this.updateTextNode_())
}, Blockly.Field.prototype.dispose = function() {
    this.mouseUpWrapper_ && (Blockly.unbindEvent_(this.mouseUpWrapper_), this.mouseUpWrapper_ = null), this.sourceBlock_ = null, goog.dom.removeNode(this.fieldGroup_), this.borderRect_ = this.textElement_ = this.fieldGroup_ = null
}, Blockly.Field.prototype.updateEditable = function() {
    this.EDITABLE && this.sourceBlock_ && (this.sourceBlock_.isEditable() ? (Blockly.addClass_(this.fieldGroup_, "blocklyEditableText"), Blockly.removeClass_(this.fieldGroup_, "blocklyNoNEditableText"), this.fieldGroup_.style.cursor = this.CURSOR) : (Blockly.addClass_(this.fieldGroup_, "blocklyNonEditableText"), Blockly.removeClass_(this.fieldGroup_, "blocklyEditableText"), this.fieldGroup_.style.cursor = ""))
}, Blockly.Field.prototype.isVisible = function() {
    return this.visible_
}, Blockly.Field.prototype.setVisible = function(e) {
    if (this.visible_ != e) {
        this.visible_ = e;
        var t = this.getSvgRoot();
        t && (t.style.display = e ? "block" : "none", this.render_())
    }
}, Blockly.Field.prototype.getSvgRoot = function() {
    return this.fieldGroup_
}, Blockly.Field.prototype.render_ = function() {
    if (this.visible_ && this.textElement_) {
        try {
            var e = this.textElement_.getComputedTextLength()
        } catch (t) {
            e = 8 * this.textElement_.textContent.length
        }
        this.borderRect_ && this.borderRect_.setAttribute("width", e + Blockly.BlockSvg.SEP_SPACE_X)
    } else e = 0;
    this.size_.width = e
}, Blockly.Field.prototype.getSize = function() {
    return this.size_.width || this.render_(), this.size_
}, Blockly.Field.prototype.getText = function() {
    return this.text_
}, Blockly.Field.prototype.setText = function(e) {
    null !== e && e !== this.text_ && (this.text_ = e, this.updateTextNode_(), this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.workspace.fireChangeEvent()))
}, Blockly.Field.prototype.updateTextNode_ = function() {
    if (this.textElement_) {
        var e = this.text_;
        goog.dom.removeChildren(this.textElement_), e = e.replace(/\s/g, Blockly.Field.NBSP), this.sourceBlock_.RTL && e && (e += "‏"), e || (e = Blockly.Field.NBSP), e = document.createTextNode(e), this.textElement_.appendChild(e), this.size_.width = 0
    }
}, Blockly.Field.prototype.getValue = function() {
    return this.getText()
}, Blockly.Field.prototype.setValue = function(e) {
    this.setText(e)
}, Blockly.Field.prototype.onMouseUp_ = function(e) {
    (!goog.userAgent.IPHONE && !goog.userAgent.IPAD || goog.userAgent.isVersionOrHigher("537.51.2") || 0 === e.layerX || 0 === e.layerY) && (Blockly.isRightButton(e) || 2 != Blockly.dragMode_ && this.sourceBlock_.isEditable() && this.showEditor_())
}, Blockly.Field.prototype.setTooltip = function() {}, Blockly.Field.prototype.getAbsoluteXY_ = function() {
    return goog.style.getPageOffset(this.borderRect_)
}, Blockly.Tooltip = {}, Blockly.Tooltip.visible = !1, Blockly.Tooltip.LIMIT = 50, Blockly.Tooltip.mouseOutPid_ = 0, Blockly.Tooltip.showPid_ = 0, Blockly.Tooltip.lastX_ = 0, Blockly.Tooltip.lastY_ = 0, Blockly.Tooltip.element_ = null, Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.OFFSET_X = 0, Blockly.Tooltip.OFFSET_Y = 10, Blockly.Tooltip.RADIUS_OK = 10, Blockly.Tooltip.HOVER_MS = 1e3, Blockly.Tooltip.MARGINS = 5, Blockly.Tooltip.DIV = null, Blockly.Tooltip.createDom = function() {
    Blockly.Tooltip.DIV || (Blockly.Tooltip.DIV = goog.dom.createDom("div", "blocklyTooltipDiv"), document.body.appendChild(Blockly.Tooltip.DIV))
}, Blockly.Tooltip.bindMouseEvents = function(e) {
    Blockly.bindEvent_(e, "mouseover", null, Blockly.Tooltip.onMouseOver_), Blockly.bindEvent_(e, "mouseout", null, Blockly.Tooltip.onMouseOut_), Blockly.bindEvent_(e, "mousemove", null, Blockly.Tooltip.onMouseMove_)
}, Blockly.Tooltip.onMouseOver_ = function(e) {
    for (e = e.target; !goog.isString(e.tooltip) && !goog.isFunction(e.tooltip);) e = e.tooltip;
    Blockly.Tooltip.element_ != e && (Blockly.Tooltip.hide(), Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.element_ = e), clearTimeout(Blockly.Tooltip.mouseOutPid_)
}, Blockly.Tooltip.onMouseOut_ = function() {
    Blockly.Tooltip.mouseOutPid_ = setTimeout(function() {
        Blockly.Tooltip.element_ = null, Blockly.Tooltip.poisonedElement_ = null, Blockly.Tooltip.hide()
    }, 1), clearTimeout(Blockly.Tooltip.showPid_)
}, Blockly.Tooltip.onMouseMove_ = function(e) {
    if (Blockly.Tooltip.element_ && Blockly.Tooltip.element_.tooltip && 0 == Blockly.dragMode_ && !Blockly.WidgetDiv.isVisible())
        if (Blockly.Tooltip.visible) {
            var t = Blockly.Tooltip.lastY_ - e.clientY;
            Math.sqrt(Math.pow(Blockly.Tooltip.lastX_ - e.clientX, 2) + Math.pow(t, 2)) > Blockly.Tooltip.RADIUS_OK && Blockly.Tooltip.hide()
        } else Blockly.Tooltip.poisonedElement_ != Blockly.Tooltip.element_ && (clearTimeout(Blockly.Tooltip.showPid_), Blockly.Tooltip.lastX_ = e.clientX, Blockly.Tooltip.lastY_ = e.clientY, Blockly.Tooltip.showPid_ = setTimeout(Blockly.Tooltip.show_, Blockly.Tooltip.HOVER_MS))
}, Blockly.Tooltip.hide = function() {
    Blockly.Tooltip.visible && (Blockly.Tooltip.visible = !1, Blockly.Tooltip.DIV && (Blockly.Tooltip.DIV.style.display = "none")), clearTimeout(Blockly.Tooltip.showPid_)
}, Blockly.Tooltip.show_ = function() {
    if (Blockly.Tooltip.poisonedElement_ = Blockly.Tooltip.element_, Blockly.Tooltip.DIV) {
        goog.dom.removeChildren(Blockly.Tooltip.DIV);
        var e = Blockly.Tooltip.element_.tooltip;
        goog.isFunction(e) && (e = e());
        for (var e = Blockly.Tooltip.wrap_(e, Blockly.Tooltip.LIMIT), e = e.split("\n"), t = 0; t < e.length; t++) {
            var o = document.createElement("div");
            o.appendChild(document.createTextNode(e[t])), Blockly.Tooltip.DIV.appendChild(o)
        }
        e = Blockly.Tooltip.element_.RTL, t = goog.dom.getViewportSize(), Blockly.Tooltip.DIV.style.direction = e ? "rtl" : "ltr", Blockly.Tooltip.DIV.style.display = "block", Blockly.Tooltip.visible = !0;
        var o = Blockly.Tooltip.lastX_,
            o = e ? o - (Blockly.Tooltip.OFFSET_X + Blockly.Tooltip.DIV.offsetWidth) : o + Blockly.Tooltip.OFFSET_X,
            n = Blockly.Tooltip.lastY_ + Blockly.Tooltip.OFFSET_Y;
        n + Blockly.Tooltip.DIV.offsetHeight > t.height && (n -= Blockly.Tooltip.DIV.offsetHeight + 2 * Blockly.Tooltip.OFFSET_Y), e ? o = Math.max(Blockly.Tooltip.MARGINS, o) : o + Blockly.Tooltip.DIV.offsetWidth > t.width - 2 * Blockly.Tooltip.MARGINS && (o = t.width - Blockly.Tooltip.DIV.offsetWidth - 2 * Blockly.Tooltip.MARGINS), Blockly.Tooltip.DIV.style.top = n + "px", Blockly.Tooltip.DIV.style.left = o + "px"
    }
}, Blockly.Tooltip.wrap_ = function(e, t) {
    if (e.length <= t) return e;
    for (var o = e.trim().split(/\s+/), n = 0; n < o.length; n++) o[n].length > t && (t = o[n].length);
    var i, r, n = -1 / 0,
        s = 1;
    do {
        i = n, r = e;
        for (var l = [], a = o.length / s, c = 1, n = 0; n < o.length - 1; n++)(n + 1.5) / a > c ? (c++, l[n] = !0) : l[n] = !1;
        l = Blockly.Tooltip.wrapMutate_(o, l, t), n = Blockly.Tooltip.wrapScore_(o, l, t), e = Blockly.Tooltip.wrapToText_(o, l), s++
    } while (n > i);
    return r
}, Blockly.Tooltip.wrapScore_ = function(e, t, o) {
    for (var n = [0], i = [], r = 0; r < e.length; r++) n[n.length - 1] += e[r].length, !0 === t[r] ? (n.push(0), i.push(e[r].charAt(e[r].length - 1))) : !1 === t[r] && n[n.length - 1]++;
    for (e = Math.max.apply(Math, n), r = t = 0; r < n.length; r++) t -= 2 * Math.pow(Math.abs(o - n[r]), 1.5), t -= Math.pow(e - n[r], 1.5), -1 != ".?!".indexOf(i[r]) ? t += o / 3 : -1 != ",;)]}".indexOf(i[r]) && (t += o / 4);
    return 1 < n.length && n[n.length - 1] <= n[n.length - 2] && (t += .5), t
}, Blockly.Tooltip.wrapMutate_ = function(e, t, o) {
    for (var n, i = Blockly.Tooltip.wrapScore_(e, t, o), r = 0; r < t.length - 1; r++)
        if (t[r] != t[r + 1]) {
            var s = [].concat(t);
            s[r] = !s[r], s[r + 1] = !s[r + 1];
            var l = Blockly.Tooltip.wrapScore_(e, s, o);
            l > i && (i = l, n = s)
        }
    return n ? Blockly.Tooltip.wrapMutate_(e, n, o) : t
}, Blockly.Tooltip.wrapToText_ = function(e, t) {
    for (var o = [], n = 0; n < e.length; n++) o.push(e[n]), void 0 !== t[n] && o.push(t[n] ? "\n" : " ");
    return o.join("")
}, Blockly.FieldLabel = function(e) {
    this.sourceBlock_ = null, this.size_ = new goog.math.Size(0, 25), this.setText(e)
}, goog.inherits(Blockly.FieldLabel, Blockly.Field), Blockly.FieldLabel.prototype.clone = function() {
    return new Blockly.FieldLabel(this.getText())
}, Blockly.FieldLabel.prototype.EDITABLE = !1, Blockly.FieldLabel.prototype.init = function(e) {
    this.sourceBlock_ || (this.sourceBlock_ = e, this.textElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText"
    }, null), this.visible_ || (this.textElement_.style.display = "none"), e.getSvgRoot().appendChild(this.textElement_), this.textElement_.tooltip = this.sourceBlock_, Blockly.Tooltip.bindMouseEvents(this.textElement_), this.updateTextNode_())
}, Blockly.FieldLabel.prototype.dispose = function() {
    goog.dom.removeNode(this.textElement_), this.textElement_ = null
}, Blockly.FieldLabel.prototype.getSvgRoot = function() {
    return this.textElement_
}, Blockly.FieldLabel.prototype.setTooltip = function(e) {
    this.textElement_.tooltip = e
}, Blockly.Input = function(e, t, o, n) {
    this.type = e, this.name = t, this.sourceBlock_ = o, this.connection = n, this.fieldRow = [], this.align = Blockly.ALIGN_LEFT, this.visible_ = !0
}, Blockly.Input.prototype.appendField = function(e, t) {
    return e || t ? (goog.isString(e) && (e = new Blockly.FieldLabel(e)), this.sourceBlock_.rendered && e.init(this.sourceBlock_), e.name = t, e.prefixField && this.appendField(e.prefixField), this.fieldRow.push(e), e.suffixField && this.appendField(e.suffixField), this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_()), this) : this
}, Blockly.Input.prototype.appendTitle = function(e, t) {
    return console.warn("Deprecated call to appendTitle, use appendField instead."), this.appendField(e, t)
}, Blockly.Input.prototype.removeField = function(e) {
    for (var t, o = 0; t = this.fieldRow[o]; o++)
        if (t.name === e) return t.dispose(), this.fieldRow.splice(o, 1), this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_()), void 0;
    goog.asserts.fail('Field "%s" not found.', e)
}, Blockly.Input.prototype.isVisible = function() {
    return this.visible_
}, Blockly.Input.prototype.setVisible = function(e) {
    var t = [];
    if (this.visible_ == e) return t;
    for (var o, n = (this.visible_ = e) ? "block" : "none", i = 0; o = this.fieldRow[i]; i++) o.setVisible(e);
    return this.connection && (e ? t = this.connection.unhideAll() : this.connection.hideAll(), i = this.connection.targetBlock()) && (i.getSvgRoot().style.display = n, e || (i.rendered = !1)), t
}, Blockly.Input.prototype.setCheck = function(e) {
    if (!this.connection) throw "This input does not have a connection.";
    return this.connection.setCheck(e), this
}, Blockly.Input.prototype.setAlign = function(e) {
    return this.align = e, this.sourceBlock_.rendered && this.sourceBlock_.render(), this
}, Blockly.Input.prototype.init = function() {
    if (this.sourceBlock_.workspace.rendered)
        for (var e = 0; e < this.fieldRow.length; e++) this.fieldRow[e].init(this.sourceBlock_)
}, Blockly.Input.prototype.dispose = function() {
    for (var e, t = 0; e = this.fieldRow[t]; t++) e.dispose();
    this.connection && this.connection.dispose(), this.sourceBlock_ = null
}, Blockly.ScrollbarPair = function(e) {
    this.workspace_ = e, this.oldHostMetrics_ = null, this.hScroll = new Blockly.Scrollbar(e, !0, !0), this.vScroll = new Blockly.Scrollbar(e, !1, !0), this.corner_ = Blockly.createSvgElement("rect", {
        height: Blockly.Scrollbar.scrollbarThickness,
        width: Blockly.Scrollbar.scrollbarThickness,
        "class": "blocklyScrollbarBackground"
    }, null), Blockly.Scrollbar.insertAfter_(this.corner_, e.getBubbleCanvas())
}, Blockly.ScrollbarPair.prototype.dispose = function() {
    Blockly.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null, goog.dom.removeNode(this.corner_), this.oldHostMetrics_ = this.workspace_ = this.corner_ = null, this.hScroll.dispose(), this.hScroll = null, this.vScroll.dispose(), this.vScroll = null
}, Blockly.ScrollbarPair.prototype.resize = function() {
    var e = this.workspace_.getMetrics();
    if (e) {
        var t = !1,
            o = !1;
        this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == e.viewWidth && this.oldHostMetrics_.viewHeight == e.viewHeight && this.oldHostMetrics_.absoluteTop == e.absoluteTop && this.oldHostMetrics_.absoluteLeft == e.absoluteLeft ? (this.oldHostMetrics_ && this.oldHostMetrics_.contentWidth == e.contentWidth && this.oldHostMetrics_.viewLeft == e.viewLeft && this.oldHostMetrics_.contentLeft == e.contentLeft || (t = !0), this.oldHostMetrics_ && this.oldHostMetrics_.contentHeight == e.contentHeight && this.oldHostMetrics_.viewTop == e.viewTop && this.oldHostMetrics_.contentTop == e.contentTop || (o = !0)) : o = t = !0, t && this.hScroll.resize(e), o && this.vScroll.resize(e), this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == e.viewWidth && this.oldHostMetrics_.absoluteLeft == e.absoluteLeft || this.corner_.setAttribute("x", this.vScroll.xCoordinate), this.oldHostMetrics_ && this.oldHostMetrics_.viewHeight == e.viewHeight && this.oldHostMetrics_.absoluteTop == e.absoluteTop || this.corner_.setAttribute("y", this.hScroll.yCoordinate), this.oldHostMetrics_ = e
    }
}, Blockly.ScrollbarPair.prototype.set = function(e, t) {
    this.hScroll.set(e), this.vScroll.set(t)
}, Blockly.Scrollbar = function(e, t, o) {
    this.workspace_ = e, this.pair_ = o || !1, this.horizontal_ = t, this.createDom_(), t ? (this.svgBackground_.setAttribute("height", Blockly.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("height", Blockly.Scrollbar.scrollbarThickness - 5), this.svgKnob_.setAttribute("y", 2.5)) : (this.svgBackground_.setAttribute("width", Blockly.Scrollbar.scrollbarThickness), this.svgKnob_.setAttribute("width", Blockly.Scrollbar.scrollbarThickness - 5), this.svgKnob_.setAttribute("x", 2.5)), this.onMouseDownBarWrapper_ = Blockly.bindEvent_(this.svgBackground_, "mousedown", this, this.onMouseDownBar_), this.onMouseDownKnobWrapper_ = Blockly.bindEvent_(this.svgKnob_, "mousedown", this, this.onMouseDownKnob_)
}, Blockly.Scrollbar.scrollbarThickness = 15, goog.events.BrowserFeature.TOUCH_ENABLED && (Blockly.Scrollbar.scrollbarThickness = 25), Blockly.Scrollbar.prototype.dispose = function() {
    this.onMouseUpKnob_(), this.onResizeWrapper_ && (Blockly.unbindEvent_(this.onResizeWrapper_), this.onResizeWrapper_ = null), Blockly.unbindEvent_(this.onMouseDownBarWrapper_), this.onMouseDownBarWrapper_ = null, Blockly.unbindEvent_(this.onMouseDownKnobWrapper_), this.onMouseDownKnobWrapper_ = null, goog.dom.removeNode(this.svgGroup_), this.workspace_ = this.svgKnob_ = this.svgBackground_ = this.svgGroup_ = null
}, Blockly.Scrollbar.prototype.resize = function(e) {
    if (e || (e = this.workspace_.getMetrics())) {
        if (this.horizontal_) {
            var t = e.viewWidth - 1;
            this.pair_ ? t -= Blockly.Scrollbar.scrollbarThickness : this.setVisible(t < e.contentHeight), this.ratio_ = t / e.contentWidth, (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0);
            var o = e.viewWidth * this.ratio_,
                n = (e.viewLeft - e.contentLeft) * this.ratio_;
            this.svgKnob_.setAttribute("width", Math.max(0, o)), this.xCoordinate = e.absoluteLeft + .5, this.pair_ && this.workspace_.RTL && (this.xCoordinate += e.absoluteLeft + Blockly.Scrollbar.scrollbarThickness), this.yCoordinate = e.absoluteTop + e.viewHeight - Blockly.Scrollbar.scrollbarThickness - .5, this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"), this.svgBackground_.setAttribute("width", Math.max(0, t)), this.svgKnob_.setAttribute("x", this.constrainKnob_(n))
        } else t = e.viewHeight - 1, this.pair_ ? t -= Blockly.Scrollbar.scrollbarThickness : this.setVisible(t < e.contentHeight), this.ratio_ = t / e.contentHeight, (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0), o = e.viewHeight * this.ratio_, n = (e.viewTop - e.contentTop) * this.ratio_, this.svgKnob_.setAttribute("height", Math.max(0, o)), this.xCoordinate = e.absoluteLeft + .5, this.workspace_.RTL || (this.xCoordinate += e.viewWidth - Blockly.Scrollbar.scrollbarThickness - 1), this.yCoordinate = e.absoluteTop + .5, this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"), this.svgBackground_.setAttribute("height", Math.max(0, t)), this.svgKnob_.setAttribute("y", this.constrainKnob_(n));
        this.onScroll_()
    }
}, Blockly.Scrollbar.prototype.createDom_ = function() {
    this.svgGroup_ = Blockly.createSvgElement("g", {}, null), this.svgBackground_ = Blockly.createSvgElement("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.svgGroup_);
    var e = Math.floor((Blockly.Scrollbar.scrollbarThickness - 5) / 2);
    this.svgKnob_ = Blockly.createSvgElement("rect", {
        "class": "blocklyScrollbarKnob",
        rx: e,
        ry: e
    }, this.svgGroup_), Blockly.Scrollbar.insertAfter_(this.svgGroup_, this.workspace_.getBubbleCanvas())
}, Blockly.Scrollbar.prototype.isVisible = function() {
    return "none" != this.svgGroup_.getAttribute("display")
}, Blockly.Scrollbar.prototype.setVisible = function(e) {
    if (e != this.isVisible()) {
        if (this.pair_) throw "Unable to toggle visibility of paired scrollbars.";
        e ? this.svgGroup_.setAttribute("display", "block") : (this.workspace_.setMetrics({
            x: 0,
            y: 0
        }), this.svgGroup_.setAttribute("display", "none"))
    }
}, Blockly.Scrollbar.prototype.onMouseDownBar_ = function(e) {
    if (this.onMouseUpKnob_(), !Blockly.isRightButton(e)) {
        var t = Blockly.mouseToSvg(e, this.workspace_.options.svg),
            t = this.horizontal_ ? t.x : t.y,
            o = Blockly.getSvgXY_(this.svgKnob_),
            o = this.horizontal_ ? o.x : o.y,
            n = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "width" : "height")),
            i = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
            r = .95 * n;
        o >= t ? i -= r : t >= o + n && (i += r), this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(i)), this.onScroll_()
    }
    e.stopPropagation()
}, Blockly.Scrollbar.prototype.onMouseDownKnob_ = function(e) {
    this.onMouseUpKnob_(), Blockly.isRightButton(e) || (this.startDragKnob = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")), this.startDragMouse = this.horizontal_ ? e.clientX : e.clientY, Blockly.Scrollbar.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, this.onMouseUpKnob_), Blockly.Scrollbar.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.onMouseMoveKnob_)), e.stopPropagation()
}, Blockly.Scrollbar.prototype.onMouseMoveKnob_ = function(e) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(this.startDragKnob + ((this.horizontal_ ? e.clientX : e.clientY) - this.startDragMouse))), this.onScroll_()
}, Blockly.Scrollbar.prototype.onMouseUpKnob_ = function() {
    Blockly.removeAllRanges(), Blockly.hideChaff(!0), Blockly.Scrollbar.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Scrollbar.onMouseUpWrapper_), Blockly.Scrollbar.onMouseUpWrapper_ = null), Blockly.Scrollbar.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Scrollbar.onMouseMoveWrapper_), Blockly.Scrollbar.onMouseMoveWrapper_ = null)
}, Blockly.Scrollbar.prototype.constrainKnob_ = function(e) {
    if (0 >= e || isNaN(e)) e = 0;
    else {
        var t = this.horizontal_ ? "width" : "height",
            o = parseFloat(this.svgBackground_.getAttribute(t)),
            t = parseFloat(this.svgKnob_.getAttribute(t));
        e = Math.min(e, o - t)
    }
    return e
}, Blockly.Scrollbar.prototype.onScroll_ = function() {
    var e = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
        t = parseFloat(this.svgBackground_.getAttribute(this.horizontal_ ? "width" : "height")),
        e = e / t;
    isNaN(e) && (e = 0), t = {}, this.horizontal_ ? t.x = e : t.y = e, this.workspace_.setMetrics(t)
}, Blockly.Scrollbar.prototype.set = function(e) {
    this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", e * this.ratio_), this.onScroll_()
}, Blockly.Scrollbar.insertAfter_ = function(e, t) {
    var o = t.nextSibling,
        n = t.parentNode;
    if (!n) throw "Reference node has no parent.";
    o ? n.insertBefore(e, o) : n.appendChild(e)
}, Blockly.Trashcan = function(e) {
    this.workspace_ = e
}, Blockly.Trashcan.prototype.SPRITE_URL_ = "media/sprites.png", Blockly.Trashcan.prototype.LID_URL_ = "media/trashlid.png", Blockly.Trashcan.prototype.WIDTH_ = 47, Blockly.Trashcan.prototype.BODY_HEIGHT_ = 45, Blockly.Trashcan.prototype.LID_HEIGHT_ = 15, Blockly.Trashcan.prototype.MARGIN_BOTTOM_ = 35, Blockly.Trashcan.prototype.MARGIN_SIDE_ = 35, Blockly.Trashcan.prototype.MARGIN_HOTSPOT_ = 25, Blockly.Trashcan.prototype.isOpen = !1, Blockly.Trashcan.prototype.svgGroup_ = null, Blockly.Trashcan.prototype.svgLid_ = null, Blockly.Trashcan.prototype.lidTask_ = 0, Blockly.Trashcan.prototype.lidOpen_ = 0, Blockly.Trashcan.prototype.left_ = 0, Blockly.Trashcan.prototype.top_ = 0, Blockly.Trashcan.prototype.createDom = function() {
    this.svgGroup_ = Blockly.createSvgElement("g", {}, null);
    var e = Blockly.createSvgElement("clipPath", {
        id: "blocklyTrashBodyClipPath"
    }, this.svgGroup_);
    return Blockly.createSvgElement("rect", {
        width: this.WIDTH_,
        height: this.BODY_HEIGHT_,
        y: this.LID_HEIGHT_
    }, e), Blockly.createSvgElement("image", {
        width: Blockly.SPRITE.width,
        height: Blockly.SPRITE.height,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath)"
    }, this.svgGroup_).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.workspace_.options.pathToMedia + Blockly.SPRITE.url), e = Blockly.createSvgElement("clipPath", {
        id: "blocklyTrashLidClipPath"
    }, this.svgGroup_), Blockly.createSvgElement("rect", {
        width: this.WIDTH_,
        height: this.LID_HEIGHT_
    }, e), this.svgLid_ = Blockly.createSvgElement("image", {
        width: Blockly.SPRITE.width,
        height: Blockly.SPRITE.height,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath)"
    }, this.svgGroup_), this.svgLid_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.workspace_.options.pathToMedia + Blockly.SPRITE.url), this.animateLid_(), this.svgGroup_
}, Blockly.Trashcan.prototype.init = function() {
    this.setOpen_(!1)
}, Blockly.Trashcan.prototype.dispose = function() {
    this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.workspace_ = this.svgLid_ = null, goog.Timer.clear(this.lidTask_)
}, Blockly.Trashcan.prototype.position = function() {
    var e = this.workspace_.getMetrics();
    e && (this.left_ = this.workspace_.RTL ? this.MARGIN_SIDE_ : e.viewWidth + e.absoluteLeft - this.WIDTH_ - this.MARGIN_SIDE_, this.top_ = e.viewHeight + e.absoluteTop - (this.BODY_HEIGHT_ + this.LID_HEIGHT_) - this.MARGIN_BOTTOM_, this.svgGroup_.setAttribute("transform", "translate(" + this.left_ + "," + this.top_ + ")"))
}, Blockly.Trashcan.prototype.getRect = function() {
    var e = Blockly.getSvgXY_(this.svgGroup_);
    return new goog.math.Rect(e.x - this.MARGIN_HOTSPOT_, e.y - this.MARGIN_HOTSPOT_, this.WIDTH_ + 2 * this.MARGIN_HOTSPOT_, this.BODY_HEIGHT_ + this.LID_HEIGHT_ + 2 * this.MARGIN_HOTSPOT_)
}, Blockly.Trashcan.prototype.setOpen_ = function(e) {
    this.isOpen != e && (goog.Timer.clear(this.lidTask_), this.isOpen = e, this.animateLid_())
}, Blockly.Trashcan.prototype.animateLid_ = function() {
    this.lidOpen_ += this.isOpen ? .2 : -.2, this.lidOpen_ = goog.math.clamp(this.lidOpen_, 0, 1);
    var e = 45 * this.lidOpen_;
    this.svgLid_.setAttribute("transform", "rotate(" + (this.workspace_.RTL ? -e : e) + ", " + (this.workspace_.RTL ? 4 : this.WIDTH_ - 4) + ", " + (this.LID_HEIGHT_ - 2) + ")"), e = goog.math.lerp(.4, .8, this.lidOpen_), this.svgGroup_.style.opacity = e, 0 < this.lidOpen_ && 1 > this.lidOpen_ && (this.lidTask_ = goog.Timer.callOnce(this.animateLid_, 20, this))
}, Blockly.Trashcan.prototype.close = function() {
    this.setOpen_(!1)
}, Blockly.Xml = {}, Blockly.Xml.workspaceToDom = function(e) {
    var t;
    e.RTL && (t = e.getWidth());
    for (var o, n = goog.dom.createDom("xml"), i = e.getTopBlocks(!0), r = 0; o = i[r]; r++) {
        var s = Blockly.Xml.blockToDom_(o);
        o = o.getRelativeToSurfaceXY(), s.setAttribute("x", e.RTL ? t - o.x : o.x), s.setAttribute("y", o.y), n.appendChild(s)
    }
    return n
}, Blockly.Xml.blockToDom_ = function(e) {
    var t = goog.dom.createDom("block");
    if (t.setAttribute("type", e.type), t.setAttribute("id", e.id), e.mutationToDom) {
        var o = e.mutationToDom();
        o && t.appendChild(o)
    }
    for (var n, o = 0; n = e.inputList[o]; o++)
        for (var i, r = 0; i = n.fieldRow[r]; r++)
            if (i.name && i.EDITABLE) {
                var s = goog.dom.createDom("field", null, i.getValue());
                s.setAttribute("name", i.name), t.appendChild(s)
            }
    for ((o = e.getCommentText()) && (o = goog.dom.createDom("comment", null, o), "object" == typeof e.comment && (o.setAttribute("pinned", e.comment.isVisible()), n = e.comment.getBubbleSize(), o.setAttribute("h", n.height), o.setAttribute("w", n.width)), t.appendChild(o)), e.data && (o = goog.dom.createDom("data", null, e.data), t.appendChild(o)), r = !1, o = 0; n = e.inputList[o]; o++) {
        var l;
        i = !0, n.type != Blockly.DUMMY_INPUT && (s = n.connection.targetBlock(), n.type == Blockly.INPUT_VALUE ? (l = goog.dom.createDom("value"), r = !0) : n.type == Blockly.NEXT_STATEMENT && (l = goog.dom.createDom("statement")), s && (l.appendChild(Blockly.Xml.blockToDom_(s)), i = !1), l.setAttribute("name", n.name), i || t.appendChild(l))
    }
    return r && t.setAttribute("inline", e.inputsInline), e.isCollapsed() && t.setAttribute("collapsed", !0), e.disabled && t.setAttribute("disabled", !0), e.isDeletable() || t.setAttribute("deletable", !1), e.isMovable() || t.setAttribute("movable", !1), e.isEditable() || t.setAttribute("editable", !1), (e = e.getNextBlock()) && (l = goog.dom.createDom("next", null, Blockly.Xml.blockToDom_(e)), t.appendChild(l)), t
}, Blockly.Xml.domToText = function(e) {
    return (new XMLSerializer).serializeToString(e)
}, Blockly.Xml.domToPrettyText = function(e) {
    e = Blockly.Xml.domToText(e).split("<");
    for (var t = "", o = 1; o < e.length; o++) {
        var n = e[o];
        "/" == n[0] && (t = t.substring(2)), e[o] = t + "<" + n, "/" != n[0] && "/>" != n.slice(-2) && (t += "  ")
    }
    return e = e.join("\n"), e = e.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"), e.replace(/^\n/, "")
}, Blockly.Xml.textToDom = function(e) {
    if (e = (new DOMParser).parseFromString(e, "text/xml"), !e || !e.firstChild || "xml" != e.firstChild.nodeName.toLowerCase() || e.firstChild !== e.lastChild) throw "Blockly.Xml.textToDom did not obtain a valid XML tree.";
    return e.firstChild
}, Blockly.Xml.domToWorkspace = function(e, t) {
    var o;
    e.RTL && (o = e.getWidth());
    for (var n = t.childNodes.length, i = 0; n > i; i++) {
        var r = t.childNodes[i];
        if ("block" == r.nodeName.toLowerCase()) {
            var s = Blockly.Xml.domToBlock(e, r),
                l = parseInt(r.getAttribute("x"), 10),
                r = parseInt(r.getAttribute("y"), 10);
            isNaN(l) || isNaN(r) || s.moveBy(e.RTL ? o - l : l, r)
        }
    }
}, Blockly.Xml.domToBlock = function(e, t, o) {
    var n = Blockly.Xml.domToBlockHeadless_(e, t, o);
    if (e.rendered) {
        for (n.setConnectionsHidden(!0), e = n.getDescendants(), t = e.length - 1; t >= 0; t--) e[t].initSvg();
        for (t = e.length - 1; t >= 0; t--) e[t].render(!1);
        setTimeout(function() {
            n.setConnectionsHidden(!1)
        }, 1), n.updateDisabled(), Blockly.fireUiEvent(window, "resize")
    }
    return n
}, Blockly.Xml.domToBlockHeadless_ = function(e, t, o) {
    var n = null,
        i = t.getAttribute("type");
    if (!i) throw "Block type unspecified: \n" + t.outerHTML;
    var r = t.getAttribute("id");
    if (o && r) {
        if (n = Blockly.Block.getById(r, e), !n) throw "Couldn't get Block with id: " + r;
        r = n.getParent(), n.workspace && n.dispose(!0, !1, !0), n.fill(e, i), n.parent_ = r
    } else n = Blockly.Block.obtain(e, i);
    for (var s, l = null, r = 0; s = t.childNodes[r]; r++)
        if (3 != s.nodeType || !s.data.match(/^\s*$/)) {
            for (var a, l = null, c = 0; a = s.childNodes[c]; c++) 3 == a.nodeType && a.data.match(/^\s*$/) || (l = a);
            switch (c = s.getAttribute("name"), s.nodeName.toLowerCase()) {
                case "mutation":
                    n.domToMutation && (n.domToMutation(s), n.initSvg && n.initSvg());
                    break;
                case "comment":
                    n.setCommentText(s.textContent);
                    var g = s.getAttribute("pinned");
                    g && setTimeout(function() {
                        n.comment && n.comment.setVisible && n.comment.setVisible("true" == g)
                    }, 1), l = parseInt(s.getAttribute("w"), 10), s = parseInt(s.getAttribute("h"), 10), !isNaN(l) && !isNaN(s) && n.comment && n.comment.setVisible && n.comment.setBubbleSize(l, s);
                    break;
                case "data":
                    n.data = s.textContent;
                    break;
                case "title":
                case "field":
                    n.setFieldValue(s.textContent, c);
                    break;
                case "value":
                case "statement":
                    if (s = n.getInput(c), !s) throw "Input " + c + " does not exist in block " + i;
                    if (l && "block" == l.nodeName.toLowerCase())
                        if (l = Blockly.Xml.domToBlockHeadless_(e, l, o), l.outputConnection) s.connection.connect(l.outputConnection);
                        else {
                            if (!l.previousConnection) throw "Child block does not have output or previous statement.";
                            s.connection.connect(l.previousConnection)
                        }
                    break;
                case "next":
                    if (l && "block" == l.nodeName.toLowerCase()) {
                        if (!n.nextConnection) throw "Next statement does not exist.";
                        if (n.nextConnection.targetConnection) throw "Next statement is already connected.";
                        if (l = Blockly.Xml.domToBlockHeadless_(e, l, o), !l.previousConnection) throw "Next block does not have previous statement.";
                        n.nextConnection.connect(l.previousConnection)
                    }
                    break;
                default:
                    console.log("Ignoring unknown tag: " + s.nodeName)
            }
        }
    return (e = t.getAttribute("inline")) && n.setInputsInline("true" == e), (e = t.getAttribute("disabled")) && n.setDisabled("true" == e), (e = t.getAttribute("deletable")) && n.setDeletable("true" == e), (e = t.getAttribute("movable")) && n.setMovable("true" == e), (e = t.getAttribute("editable")) && n.setEditable("true" == e), (t = t.getAttribute("collapsed")) && n.setCollapsed("true" == t), n
}, Blockly.Xml.deleteNext = function(e) {
    for (var t, o = 0; t = e.childNodes[o]; o++)
        if ("next" == t.nodeName.toLowerCase()) {
            e.removeChild(t);
            break
        }
}, goog.global.Blockly || (goog.global.Blockly = {}), goog.global.Blockly.Xml || (goog.global.Blockly.Xml = {}), goog.global.Blockly.Xml.domToText = Blockly.Xml.domToText, goog.global.Blockly.Xml.domToWorkspace = Blockly.Xml.domToWorkspace, goog.global.Blockly.Xml.textToDom = Blockly.Xml.textToDom, goog.global.Blockly.Xml.workspaceToDom = Blockly.Xml.workspaceToDom, Blockly.WorkspaceSvg = function(e) {
    Blockly.WorkspaceSvg.superClass_.constructor.call(this, e), this.getMetrics = e.getMetrics, this.setMetrics = e.setMetrics, Blockly.ConnectionDB.init(this), this.SOUNDS_ = Object.create(null)
}, goog.inherits(Blockly.WorkspaceSvg, Blockly.Workspace), Blockly.WorkspaceSvg.prototype.rendered = !0, Blockly.WorkspaceSvg.prototype.isFlyout = !1, Blockly.WorkspaceSvg.prototype.isScrolling = !1, Blockly.WorkspaceSvg.prototype.scrollX = 0, Blockly.WorkspaceSvg.prototype.scrollY = 0, Blockly.WorkspaceSvg.prototype.trashcan = null, Blockly.WorkspaceSvg.prototype.scrollbar = null, Blockly.WorkspaceSvg.prototype.createDom = function(e) {
    return this.svgGroup_ = Blockly.createSvgElement("g", {}, null), e && (this.svgBackground_ = Blockly.createSvgElement("rect", {
        height: "100%",
        width: "100%",
        "class": e
    }, this.svgGroup_), "blocklyMainBackground" == e && (this.svgBackground_.style.fill = "url(#" + this.options.gridPattern.id + ")")), this.svgBlockCanvas_ = Blockly.createSvgElement("g", {}, this.svgGroup_), this.svgBubbleCanvas_ = Blockly.createSvgElement("g", {}, this.svgGroup_), this.options.hasTrashcan && this.addTrashcan_(), Blockly.bindEvent_(this.svgGroup_, "mousedown", this, this.onMouseDown_), this.options.hasCategories ? this.toolbox_ = new Blockly.Toolbox(this) : this.options.languageTree && this.addFlyout_(), this.fireChangeEvent(), this.svgGroup_
}, Blockly.WorkspaceSvg.prototype.dispose = function() {
    this.rendered = !1, Blockly.WorkspaceSvg.superClass_.dispose.call(this), this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.svgBubbleCanvas_ = this.svgBlockCanvas_ = null, this.flyout_ && (this.flyout_.dispose(), this.flyout_ = null), this.trashcan && (this.trashcan.dispose(), this.trashcan = null), this.options.parentWorkspace || goog.dom.removeNode(this.options.svg)
}, Blockly.WorkspaceSvg.prototype.addTrashcan_ = function() {
    this.trashcan = new Blockly.Trashcan(this);
    var e = this.trashcan.createDom();
    this.svgGroup_.insertBefore(e, this.svgBlockCanvas_), this.trashcan.init()
}, Blockly.WorkspaceSvg.prototype.addFlyout_ = function() {
    this.flyout_ = new Blockly.Flyout({
        parentWorkspace: this,
        RTL: this.RTL
    }), this.flyout_.autoClose = !1;
    var e = this.flyout_.createDom();
    this.svgGroup_.insertBefore(e, this.svgBlockCanvas_)
}, Blockly.WorkspaceSvg.prototype.resize = function() {
    this.toolbox_ && this.toolbox_.position(), this.flyout_ && this.flyout_.position(), this.trashcan && this.trashcan.position(), this.scrollbar && this.scrollbar.resize()
}, Blockly.WorkspaceSvg.prototype.getCanvas = function() {
    return this.svgBlockCanvas_
}, Blockly.WorkspaceSvg.prototype.getBubbleCanvas = function() {
    return this.svgBubbleCanvas_
}, Blockly.WorkspaceSvg.prototype.translate = function(e, t) {
    var o = "translate(" + e + "," + t + ")";
    this.svgBlockCanvas_.setAttribute("transform", o), this.svgBubbleCanvas_.setAttribute("transform", o)
}, Blockly.WorkspaceSvg.prototype.addTopBlock = function(e) {
    Blockly.WorkspaceSvg.superClass_.addTopBlock.call(this, e), Blockly.Realtime.isEnabled() && !this.options.parentWorkspace && Blockly.Realtime.addTopBlock(e)
}, Blockly.WorkspaceSvg.prototype.removeTopBlock = function(e) {
    Blockly.WorkspaceSvg.superClass_.removeTopBlock.call(this, e), Blockly.Realtime.isEnabled() && !this.options.parentWorkspace && Blockly.Realtime.removeTopBlock(e)
}, Blockly.WorkspaceSvg.prototype.getWidth = function() {
    return this.getMetrics().viewWidth
}, Blockly.WorkspaceSvg.prototype.render = function() {
    for (var e, t = this.getAllBlocks(), o = 0; e = t[o]; o++) e.getChildren().length || e.render()
}, Blockly.WorkspaceSvg.prototype.traceOn = function(e) {
    this.traceOn_ = e, this.traceWrapper_ && (Blockly.unbindEvent_(this.traceWrapper_), this.traceWrapper_ = null), e && (this.traceWrapper_ = Blockly.bindEvent_(this.svgBlockCanvas_, "blocklySelectChange", this, function() {
        this.traceOn_ = !1
    }))
}, Blockly.WorkspaceSvg.prototype.highlightBlock = function(e) {
    if (this.traceOn_ && 0 != Blockly.dragMode_ && this.traceOn(!1), this.traceOn_) {
        var t = null;
        if (e && (t = this.getBlockById(e), !t)) return;
        this.traceOn(!1), t ? t.select() : Blockly.selected && Blockly.selected.unselect();
        var o = this;
        setTimeout(function() {
            o.traceOn(!0)
        }, 1)
    }
}, Blockly.WorkspaceSvg.prototype.fireChangeEvent = function() {
    this.rendered && this.svgBlockCanvas_ && Blockly.fireUiEvent(this.svgBlockCanvas_, "blocklyWorkspaceChange")
}, Blockly.WorkspaceSvg.prototype.paste = function(e) {
    if (this.rendered && !(e.getElementsByTagName("block").length >= this.remainingCapacity())) {
        Blockly.terminateDrag_();
        var t = Blockly.Xml.domToBlock(this, e),
            o = parseInt(e.getAttribute("x"), 10);
        if (e = parseInt(e.getAttribute("y"), 10), !isNaN(o) && !isNaN(e)) {
            this.RTL && (o = -o);
            do
                for (var n, i = !1, r = this.getAllBlocks(), s = 0; n = r[s]; s++) n = n.getRelativeToSurfaceXY(), 1 >= Math.abs(o - n.x) && 1 >= Math.abs(e - n.y) && (o = this.RTL ? o - Blockly.SNAP_RADIUS : o + Blockly.SNAP_RADIUS, e += 2 * Blockly.SNAP_RADIUS, i = !0); while (i);
            t.moveBy(o, e)
        }
        t.select()
    }
}, Blockly.WorkspaceSvg.prototype.recordDeleteAreas = function() {
    this.deleteAreaTrash_ = this.trashcan ? this.trashcan.getRect() : null, this.deleteAreaToolbox_ = this.flyout_ ? this.flyout_.getRect() : this.toolbox_ ? this.toolbox_.getRect() : null
}, Blockly.WorkspaceSvg.prototype.isDeleteArea = function(e) {
    if (e = Blockly.mouseToSvg(e, this.options.svg), e = new goog.math.Coordinate(e.x, e.y), this.deleteAreaTrash_) {
        if (this.deleteAreaTrash_.contains(e)) return this.trashcan.setOpen_(!0), Blockly.Css.setCursor(Blockly.Css.Cursor.DELETE), !0;
        this.trashcan.setOpen_(!1)
    }
    return this.deleteAreaToolbox_ && this.deleteAreaToolbox_.contains(e) ? (Blockly.Css.setCursor(Blockly.Css.Cursor.DELETE), !0) : (Blockly.Css.setCursor(Blockly.Css.Cursor.CLOSED), !1)
}, Blockly.WorkspaceSvg.prototype.onMouseDown_ = function(e) {
    this.markFocused(), Blockly.isTargetInput_(e) || (Blockly.svgResize(this), Blockly.terminateDrag_(), Blockly.hideChaff(), e.target && e.target.nodeName && ("svg" == e.target.nodeName.toLowerCase() || e.target == this.svgBackground_) && Blockly.selected && !this.options.readOnly && Blockly.selected.unselect(), Blockly.isRightButton(e) ? this.showContextMenu_(e) : this.scrollbar && (Blockly.removeAllRanges(), this.isScrolling = !0, this.startDragMouseX = e.clientX, this.startDragMouseY = e.clientY, this.startDragMetrics = this.getMetrics(), this.startScrollX = this.scrollX, this.startScrollY = this.scrollY, "mouseup" in Blockly.bindEvent_.TOUCH_MAP && (Blockly.onTouchUpWrapper_ = Blockly.bindEvent_(document, "mouseup", null, Blockly.onMouseUp_)), Blockly.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", null, Blockly.onMouseMove_)), e.stopPropagation())
}, Blockly.WorkspaceSvg.prototype.showContextMenu_ = function(e) {
    if (!this.options.readOnly) {
        var t = [];
        if (this.options.collapse) {
            for (var o = !1, n = !1, i = this.getTopBlocks(!1), r = 0; r < i.length; r++)
                for (var s = i[r]; s;) s.isCollapsed() ? o = !0 : n = !0, s = s.getNextBlock();
            n = {
                enabled: n
            }, n.text = Blockly.Msg.COLLAPSE_ALL, n.callback = function() {
                for (var e = 0, t = 0; t < i.length; t++)
                    for (var o = i[t]; o;) setTimeout(o.setCollapsed.bind(o, !0), e), o = o.getNextBlock(), e += 10
            }, t.push(n), o = {
                enabled: o
            }, o.text = Blockly.Msg.EXPAND_ALL, o.callback = function() {
                for (var e = 0, t = 0; t < i.length; t++)
                    for (var o = i[t]; o;) setTimeout(o.setCollapsed.bind(o, !1), e), o = o.getNextBlock(), e += 10
            }, t.push(o)
        }
        Blockly.ContextMenu.show(e, t, this.RTL)
    }
}, Blockly.WorkspaceSvg.prototype.loadAudio_ = function(e, t) {
    if (window.Audio && e.length) {
        for (var o, n = new window.Audio, i = 0; i < e.length; i++) {
            var r = e[i],
                s = r.match(/\.(\w+)$/);
            if (s && n.canPlayType("audio/" + s[1])) {
                o = new window.Audio(r);
                break
            }
        }
        o && o.play && (this.SOUNDS_[t] = o)
    }
}, Blockly.WorkspaceSvg.prototype.preloadAudio_ = function() {
    for (var e in this.SOUNDS_) {
        var t = this.SOUNDS_[e];
        if (t.volume = .01, t.play(), t.pause(), goog.userAgent.IPAD || goog.userAgent.IPHONE) break
    }
}, Blockly.WorkspaceSvg.prototype.playAudio = function(e, t) {
    var o = this.SOUNDS_[e];
    o ? (o = goog.userAgent.DOCUMENT_MODE && 9 === goog.userAgent.DOCUMENT_MODE || goog.userAgent.IPAD || goog.userAgent.ANDROID ? o : o.cloneNode(), o.volume = void 0 === t ? 1 : t, o.play()) : this.options.parentWorkspace && this.options.parentWorkspace.playAudio(e, t)
}, Blockly.WorkspaceSvg.prototype.addChangeListener = function(e) {
    return Blockly.bindEvent_(this.getCanvas(), "blocklyWorkspaceChange", null, e)
}, Blockly.WorkspaceSvg.prototype.removeChangeListener = function(e) {
    Blockly.unbindEvent_(e)
}, Blockly.WorkspaceSvg.prototype.markFocused = function() {
    Blockly.mainWorkspace = this
}, Blockly.WorkspaceSvg.prototype.clear = Blockly.WorkspaceSvg.prototype.clear, Blockly.WorkspaceSvg.prototype.addChangeListener = Blockly.WorkspaceSvg.prototype.addChangeListener, Blockly.WorkspaceSvg.prototype.removeChangeListener = Blockly.WorkspaceSvg.prototype.removeChangeListener, Blockly.Mutator = function(e) {
    Blockly.Mutator.superClass_.constructor.call(this, null), this.quarkNames_ = e
}, goog.inherits(Blockly.Mutator, Blockly.Icon), Blockly.Mutator.prototype.png_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAANyAAADcgBffIlqAAAAAd0SU1FB98DGhULOIajyb8AAAHMSURBVDjLnZS9SiRBFIXP/CQ9iIHgPoGBTo8vIAaivoKaKJr6DLuxYqKYKIqRgSCMrblmIxqsICgOmAriziIiRXWjYPdnUDvT2+PMsOyBoop7qk71vedWS5KAkrWsGUMjSYjpgSQhNoZGFLEKeGoKGMNttUpULkOhAFL3USiA70MQEBnDDeDJWtaqVaJeB7uNICAKQ1ZkDI1yufOm+XnY2YHl5c6874MxPClJiDulkMvBxYWrw/095POdU0sS4hxALqcWtreloSGpVJLGxtL49bX0+Ci9vUkzM2kcXGFbypUKxHHLBXZ3YW4ONjfh4yN1aGIiPQOQEenrg6MjR+zvZz99Y8PFT09hYCArktdfsFY6PHTr83NlUKu5+eREennJchmR/n5pYcGtJyezG6em3Dw7Kw0OZrlMOr6f1gTg4ACWlmBvz9WoifHxbDpf3Flfd+54njQ9ncYvL6WHB+n9XVpcbHOnW59IUKu5m+p11zftfLHo+qRorZ6Hh/Xt7k5fsLUl1evS1dWfG9swMiJZq9+KIlaD4P/eztkZNgz5LsAzhpvjY6JK5d9e8eioE3h95SdQbDrkhSErxvArjkl6/U/imMQYnsKQH02BT7vbZZfVOiWhAAAAAElFTkSuQmCC", Blockly.Mutator.prototype.workspaceWidth_ = 0, Blockly.Mutator.prototype.workspaceHeight_ = 0, Blockly.Mutator.prototype.iconClick_ = function(e) {
    this.block_.isEditable() && Blockly.Icon.prototype.iconClick_.call(this, e)
}, Blockly.Mutator.prototype.createEditor_ = function() {
    this.svgDialog_ = Blockly.createSvgElement("svg", {
        x: Blockly.Bubble.BORDER_WIDTH,
        y: Blockly.Bubble.BORDER_WIDTH
    }, null);
    for (var e, t = goog.dom.createDom("xml"), o = 0; e = this.quarkNames_[o]; o++) t.appendChild(goog.dom.createDom("block", {
        type: e
    }));
    var n = this;
    return this.workspace_ = new Blockly.WorkspaceSvg({
        languageTree: t,
        parentWorkspace: this.block_.workspace,
        pathToMedia: this.block_.workspace.options.pathToMedia,
        RTL: this.block_.RTL,
        getMetrics: function() {
            return n.getFlyoutMetrics_()
        },
        setMetrics: null,
        svg: this.svgDialog_
    }), this.svgDialog_.appendChild(this.workspace_.createDom("blocklyMutatorBackground")), this.svgDialog_
}, Blockly.Mutator.prototype.updateEditable = function() {
    this.block_.isEditable() ? Blockly.Icon.prototype.updateEditable.call(this) : (this.setVisible(!1), this.iconGroup_ && Blockly.addClass_(this.iconGroup_, "blocklyIconGroupReadonly"))
}, Blockly.Mutator.prototype.resizeBubble_ = function() {
    var e, t = 2 * Blockly.Bubble.BORDER_WIDTH,
        o = this.workspace_.getCanvas().getBBox(),
        n = this.workspace_.flyout_.getMetrics_();
    e = this.block_.RTL ? -o.x : o.width + o.x, o = Math.max(o.height + 3 * t, n.contentHeight + 20), e += 3 * t, (Math.abs(this.workspaceWidth_ - e) > t || Math.abs(this.workspaceHeight_ - o) > t) && (this.workspaceWidth_ = e, this.workspaceHeight_ = o, this.bubble_.setBubbleSize(e + t, o + t), this.svgDialog_.setAttribute("width", this.workspaceWidth_), this.svgDialog_.setAttribute("height", this.workspaceHeight_)), this.block_.RTL && (t = "translate(" + this.workspaceWidth_ + ",0)", this.workspace_.getCanvas().setAttribute("transform", t)), this.workspace_.resize()
}, Blockly.Mutator.prototype.setVisible = function(e) {
    if (e != this.isVisible())
        if (e) {
            this.bubble_ = new Blockly.Bubble(this.block_.workspace, this.createEditor_(), this.block_.svgPath_, this.iconX_, this.iconY_, null, null);
            var t = this;
            this.workspace_.flyout_.init(this.workspace_), this.workspace_.flyout_.show(this.workspace_.options.languageTree.childNodes), this.rootBlock_ = this.block_.decompose(this.workspace_), e = this.rootBlock_.getDescendants();
            for (var o, n = 0; o = e[n]; n++) o.render();
            this.rootBlock_.setMovable(!1), this.rootBlock_.setDeletable(!1), e = 2 * this.workspace_.flyout_.CORNER_RADIUS, n = this.workspace_.flyout_.width_ + e, this.block_.RTL && (n = -n), this.rootBlock_.moveBy(n, e), this.block_.saveConnections && (this.block_.saveConnections(this.rootBlock_), this.sourceListener_ = Blockly.bindEvent_(this.block_.workspace.getCanvas(), "blocklyWorkspaceChange", this.block_, function() {
                t.block_.saveConnections(t.rootBlock_)
            })), this.resizeBubble_(), Blockly.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this.block_, function() {
                t.workspaceChanged_()
            }), this.updateColour()
        } else this.svgDialog_ = null, this.workspace_.dispose(), this.rootBlock_ = this.workspace_ = null, this.bubble_.dispose(), this.bubble_ = null, this.workspaceHeight_ = this.workspaceWidth_ = 0, this.sourceListener_ && (Blockly.unbindEvent_(this.sourceListener_), this.sourceListener_ = null)
}, Blockly.Mutator.prototype.workspaceChanged_ = function() {
    if (0 == Blockly.dragMode_)
        for (var e, t = this.workspace_.getTopBlocks(!1), o = 0; e = t[o]; o++) {
            var n = e.getRelativeToSurfaceXY(),
                i = e.getHeightWidth();
            20 > n.y + i.height && e.moveBy(0, 20 - i.height - n.y)
        }
    this.rootBlock_.workspace == this.workspace_ && (t = this.block_.rendered, this.block_.rendered = !1, this.block_.compose(this.rootBlock_), this.block_.rendered = t, this.block_.initSvg(), this.block_.rendered && this.block_.render(), this.resizeBubble_(), this.block_.workspace.fireChangeEvent(), goog.Timer.callOnce(this.block_.bumpNeighbours_, Blockly.BUMP_DELAY, this.block_))
}, Blockly.Mutator.prototype.getFlyoutMetrics_ = function() {
    return {
        viewHeight: this.workspaceHeight_,
        viewWidth: this.workspaceWidth_,
        absoluteTop: 0,
        absoluteLeft: 0
    }
}, Blockly.Mutator.prototype.dispose = function() {
    this.block_.mutator = null, Blockly.Icon.prototype.dispose.call(this)
}, Blockly.Warning = function(e) {
    Blockly.Warning.superClass_.constructor.call(this, e), this.createIcon()
}, goog.inherits(Blockly.Warning, Blockly.Icon), Blockly.Warning.prototype.png_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAANyAAADcgBffIlqAAAAAd0SU1FB98DGgApDBpIGrEAAAGfSURBVDjLnZM9S2NREIbfc2P8AF27BXshpIzK5g9ssUj8C2tnYyUoiBGSyk4sbCLs1vkRgoW1jYWFICwsMV2Se3JPboLe+FhcNCZcjXFgOMzHeec9M2ekDwTIAEUgo68IsOQczdNTIudoAksTg/g+5+UyDxKUyzz4PueTsvhZr+NmZkCC6Wmo1QiAX58FmLKWf4VCDPCiGxtgLf+B9FiQXo+9y0ucBIUCnJ3B+noMdHGBC0P2xrH4HoYEmUx8qVQCgMPD2F5ehjDEjTbZe2s4p5NKRenb2+Qid3dSpaK0tTp+j8VKq0VncXHQh2IxZrK/P/AtLECjQQf4McQEMNbq786O5qwdANfr8Xl/P/AFgbS7qzlr9Qcwr4EoYvPmBud5wxPJ5+HqCtbWhv3GwPU1Lor4/fKMeedo5vPDiRKsrsLWFuRyybFOhxbwTd0upWqVcDQpaTqjWq0SdruU5PvUkiol/ZNRzeXA96mp3aaRzSYnjdNsFtptGiYI2PY8HaVSmu33xWf3K5WS6ffVe3rSgXnzT+YlpSfY00djjJOkZ/wpr41bQMIsAAAAAElFTkSuQmCC", Blockly.Warning.textToDom_ = function(e) {
    var t = Blockly.createSvgElement("text", {
        "class": "blocklyText blocklyBubbleText",
        y: Blockly.Bubble.BORDER_WIDTH
    }, null);
    e = e.split("\n");
    for (var o = 0; o < e.length; o++) {
        var n = Blockly.createSvgElement("tspan", {
                dy: "1em",
                x: Blockly.Bubble.BORDER_WIDTH
            }, t),
            i = document.createTextNode(e[o]);
        n.appendChild(i)
    }
    return t
}, Blockly.Warning.prototype.text_ = "", Blockly.Warning.prototype.setVisible = function(e) {
    if (e != this.isVisible())
        if (e) {
            if (e = Blockly.Warning.textToDom_(this.text_), this.bubble_ = new Blockly.Bubble(this.block_.workspace, e, this.block_.svgPath_, this.iconX_, this.iconY_, null, null), this.block_.RTL)
                for (var t, o = e.getBBox().width, n = 0; t = e.childNodes[n]; n++) t.setAttribute("text-anchor", "end"), t.setAttribute("x", o + Blockly.Bubble.BORDER_WIDTH);
            this.updateColour(), e = this.bubble_.getBubbleSize(), this.bubble_.setBubbleSize(e.width, e.height)
        } else this.bubble_.dispose(), this.body_ = this.bubble_ = null
}, Blockly.Warning.prototype.bodyFocus_ = function() {
    this.bubble_.promote_()
}, Blockly.Warning.prototype.setText = function(e) {
    this.text_ != e && (this.text_ = e, this.isVisible() && (this.setVisible(!1), this.setVisible(!0)))
}, Blockly.Warning.prototype.dispose = function() {
    this.block_.warning = null, Blockly.Icon.prototype.dispose.call(this)
}, Blockly.Block = function() {
    goog.asserts.assert(0 == arguments.length, "Please use Blockly.Block.obtain.")
}, Blockly.Block.obtain = function(e, t) {
    if (Blockly.Realtime.isEnabled()) return Blockly.Realtime.obtainBlock(e, t);
    var o = e.rendered ? new Blockly.BlockSvg : new Blockly.Block;
    return o.initialize(e, t), o
}, Blockly.Block.prototype.initialize = function(e, t) {
    this.id = Blockly.Blocks.genUid(), e.addTopBlock(this), this.fill(e, t)
}, Blockly.Block.prototype.fill = function(e, t) {
    if (this.previousConnection = this.nextConnection = this.outputConnection = null, this.inputList = [], this.disabled = this.rendered = this.inputsInline = !1, this.tooltip = "", this.contextMenu = !0, this.parentBlock_ = null, this.childBlocks_ = [], this.editable_ = this.movable_ = this.deletable_ = !0, this.collapsed_ = !1, this.comment = null, this.xy_ = new goog.math.Coordinate(0, 0), this.workspace = e, this.isInFlyout = e.isFlyout, this.RTL = e.RTL, t) {
        this.type = t;
        var o = Blockly.Blocks[t];
        goog.asserts.assertObject(o, 'Error: "%s" is an unknown language block.', t), goog.mixin(this, o)
    }
    goog.isFunction(this.init) && this.init()
}, Blockly.Block.getById = function(e, t) {
    return Blockly.Realtime.isEnabled() ? Blockly.Realtime.getBlockById(e) : t.getBlockById(e)
}, Blockly.Block.prototype.dispose = function(e, t, o) {
    for (this.unplug(e, !1), this.workspace && !o && (this.workspace.removeTopBlock(this), this.workspace = null), Blockly.selected == this && (Blockly.selected = null), e = this.childBlocks_.length - 1; e >= 0; e--) this.childBlocks_[e].dispose(!1);
    for (e = 0; t = this.inputList[e]; e++) t.dispose();
    for (this.inputList.length = 0, t = this.getConnections_(!0), e = 0; e < t.length; e++) o = t[e], o.targetConnection && o.disconnect(), t[e].dispose();
    Blockly.Realtime.isEnabled() && !Blockly.Realtime.withinSync && Blockly.Realtime.removeBlock(this)
}, Blockly.Block.prototype.unplug = function(e, t) {
    if (t = t && !!this.getParent(), this.outputConnection) this.outputConnection.targetConnection && this.setParent(null);
    else {
        var o = null;
        this.previousConnection && this.previousConnection.targetConnection && (o = this.previousConnection.targetConnection, this.setParent(null));
        var n = this.getNextBlock();
        if (e && n) {
            var i = this.nextConnection.targetConnection;
            n.setParent(null), o && o.checkType_(i) && o.connect(i)
        }
    }
    t && this.moveBy(Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1), 2 * Blockly.SNAP_RADIUS)
}, Blockly.Block.prototype.duplicate_ = function() {
    var e = Blockly.Xml.blockToDom_(this);
    Blockly.Xml.deleteNext(e);
    var e = Blockly.Xml.domToBlock(this.workspace, e),
        t = this.getRelativeToSurfaceXY();
    return t.x = this.RTL ? t.x - Blockly.SNAP_RADIUS : t.x + Blockly.SNAP_RADIUS, t.y += 2 * Blockly.SNAP_RADIUS, e.moveBy(t.x, t.y), e.select(), e
}, Blockly.Block.prototype.getConnections_ = function(e) {
    var t = [];
    if ((e || this.rendered) && (this.outputConnection && t.push(this.outputConnection), this.previousConnection && t.push(this.previousConnection), this.nextConnection && t.push(this.nextConnection), e || !this.collapsed_)) {
        e = 0;
        for (var o; o = this.inputList[e]; e++) o.connection && t.push(o.connection)
    }
    return t
}, Blockly.Block.prototype.bumpNeighbours_ = function() {
    if (this.workspace && 0 == Blockly.dragMode_) {
        var e = this.getRootBlock();
        if (!e.isInFlyout)
            for (var t, o = this.getConnections_(!1), n = 0; t = o[n]; n++) {
                t.targetConnection && t.isSuperior() && t.targetBlock().bumpNeighbours_();
                for (var i, r = t.neighbours_(Blockly.SNAP_RADIUS), s = 0; i = r[s]; s++) t.targetConnection && i.targetConnection || i.sourceBlock_.getRootBlock() != e && (t.isSuperior() ? i.bumpAwayFrom_(t) : t.bumpAwayFrom_(i))
            }
    }
}, Blockly.Block.prototype.getParent = function() {
    return this.parentBlock_
}, Blockly.Block.prototype.getSurroundParent = function() {
    for (var e = this;;) {
        do {
            var t = e,
                e = e.getParent();
            if (!e) return null
        } while (e.getNextBlock() == t);
        return e
    }
}, Blockly.Block.prototype.getNextBlock = function() {
    return this.nextConnection && this.nextConnection.targetBlock()
}, Blockly.Block.prototype.getRootBlock = function() {
    var e, t = this;
    do e = t, t = e.parentBlock_; while (t);
    return e
}, Blockly.Block.prototype.getChildren = function() {
    return this.childBlocks_
}, Blockly.Block.prototype.setParent = function(e) {
    if (this.parentBlock_) {
        for (var t, o = this.parentBlock_.childBlocks_, n = 0; t = o[n]; n++)
            if (t == this) {
                o.splice(n, 1);
                break
            }
        this.parentBlock_ = null, this.previousConnection && this.previousConnection.targetConnection && this.previousConnection.disconnect(), this.outputConnection && this.outputConnection.targetConnection && this.outputConnection.disconnect()
    } else goog.array.contains(this.workspace.getTopBlocks(!1), this) && this.workspace.removeTopBlock(this);
    (this.parentBlock_ = e) ? e.childBlocks_.push(this): this.workspace.addTopBlock(this)
}, Blockly.Block.prototype.getDescendants = function() {
    for (var e, t = [this], o = 0; e = this.childBlocks_[o]; o++) t.push.apply(t, e.getDescendants());
    return t
}, Blockly.Block.prototype.isDeletable = function() {
    return this.deletable_ && !(this.workspace && this.workspace.options.readOnly)
}, Blockly.Block.prototype.setDeletable = function(e) {
    this.deletable_ = e
}, Blockly.Block.prototype.isMovable = function() {
    return this.movable_ && !(this.workspace && this.workspace.options.readOnly)
}, Blockly.Block.prototype.setMovable = function(e) {
    this.movable_ = e
}, Blockly.Block.prototype.isEditable = function() {
    return this.editable_ && !(this.workspace && this.workspace.options.readOnly)
}, Blockly.Block.prototype.setEditable = function(e) {
    this.editable_ = e, e = 0;
    for (var t; t = this.inputList[e]; e++)
        for (var o, n = 0; o = t.fieldRow[n]; n++) o.updateEditable();
    if (this.rendered)
        for (t = this.getIcons(), e = 0; e < t.length; e++) t[e].updateEditable()
}, Blockly.Block.prototype.setConnectionsHidden = function(e) {
    if (!e && this.isCollapsed()) {
        if (this.outputConnection && this.outputConnection.setHidden(e), this.previousConnection && this.previousConnection.setHidden(e), this.nextConnection) {
            this.nextConnection.setHidden(e);
            var t = this.nextConnection.targetBlock();
            t && t.setConnectionsHidden(e)
        }
    } else
        for (var o = this.getConnections_(!0), n = 0; t = o[n]; n++) t.setHidden(e), t.isSuperior() && (t = t.targetBlock()) && t.setConnectionsHidden(e)
}, Blockly.Block.prototype.setHelpUrl = function(e) {
    this.helpUrl = e
}, Blockly.Block.prototype.setTooltip = function(e) {
    this.tooltip = e
}, Blockly.Block.prototype.getColour = function() {
    return this.colourHue_
}, Blockly.Block.prototype.setColour = function(e) {
    this.colourHue_ = e, this.rendered && this.updateColour()
}, Blockly.Block.prototype.getField_ = function(e) {
    for (var t, o = 0; t = this.inputList[o]; o++)
        for (var n, i = 0; n = t.fieldRow[i]; i++)
            if (n.name === e) return n;
    return null
}, Blockly.Block.prototype.getFieldValue = function(e) {
    return (e = this.getField_(e)) ? e.getValue() : null
}, Blockly.Block.prototype.getTitleValue = function(e) {
    return console.warn("Deprecated call to getTitleValue, use getFieldValue instead."), this.getFieldValue(e)
}, Blockly.Block.prototype.setFieldValue = function(e, t) {
    var o = this.getField_(t);
    goog.asserts.assertObject(o, 'Field "%s" not found.', t), o.setValue(e)
}, Blockly.Block.prototype.setTitleValue = function(e, t) {
    console.warn("Deprecated call to setTitleValue, use setFieldValue instead."), this.setFieldValue(e, t)
}, Blockly.Block.prototype.setPreviousStatement = function(e, t) {
    this.previousConnection && (goog.asserts.assert(!this.previousConnection.targetConnection, "Must disconnect previous statement before removing connection."), this.previousConnection.dispose(), this.previousConnection = null), e && (goog.asserts.assert(!this.outputConnection, "Remove output connection prior to adding previous connection."), void 0 === t && (t = null), this.previousConnection = new Blockly.Connection(this, Blockly.PREVIOUS_STATEMENT), this.previousConnection.setCheck(t)), this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.setNextStatement = function(e, t) {
    this.nextConnection && (goog.asserts.assert(!this.nextConnection.targetConnection, "Must disconnect next statement before removing connection."), this.nextConnection.dispose(), this.nextConnection = null), e && (void 0 === t && (t = null), this.nextConnection = new Blockly.Connection(this, Blockly.NEXT_STATEMENT), this.nextConnection.setCheck(t)), this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.setOutput = function(e, t) {
    this.outputConnection && (goog.asserts.assert(!this.outputConnection.targetConnection, "Must disconnect output value before removing connection."), this.outputConnection.dispose(), this.outputConnection = null), e && (goog.asserts.assert(!this.previousConnection, "Remove previous connection prior to adding output connection."), void 0 === t && (t = null), this.outputConnection = new Blockly.Connection(this, Blockly.OUTPUT_VALUE), this.outputConnection.setCheck(t)), this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.changeOutput = function(e) {
    goog.asserts.assert(this.outputConnection, "Only use changeOutput() on blocks that already have an output."), this.outputConnection.setCheck(e)
}, Blockly.Block.prototype.setInputsInline = function(e) {
    this.inputsInline = e, this.rendered && (this.render(), this.bumpNeighbours_(), this.workspace.fireChangeEvent())
}, Blockly.Block.prototype.setDisabled = function(e) {
    this.disabled = e
}, Blockly.Block.prototype.getInheritedDisabled = function() {
    for (var e = this;;) {
        if (e = e.getSurroundParent(), !e) return !1;
        if (e.disabled) return !0
    }
}, Blockly.Block.prototype.isCollapsed = function() {
    return this.collapsed_
}, Blockly.Block.prototype.setCollapsed = function(e) {
    this.collapsed_ = e
}, Blockly.Block.prototype.toString = function(e) {
    var t = [];
    if (this.collapsed_) t.push(this.getInput("_TEMP_COLLAPSED_INPUT").fieldRow[0].text_);
    else
        for (var o, n = 0; o = this.inputList[n]; n++) {
            for (var i, r = 0; i = o.fieldRow[r]; r++) t.push(i.getText());
            o.connection && ((o = o.connection.targetBlock()) ? t.push(o.toString()) : t.push("?"))
        }
    return t = goog.string.trim(t.join(" ")) || "???", e && (t = goog.string.truncate(t, e)), t
}, Blockly.Block.prototype.appendValueInput = function(e) {
    return this.appendInput_(Blockly.INPUT_VALUE, e)
}, Blockly.Block.prototype.appendStatementInput = function(e) {
    return this.appendInput_(Blockly.NEXT_STATEMENT, e)
}, Blockly.Block.prototype.appendDummyInput = function(e) {
    return this.appendInput_(Blockly.DUMMY_INPUT, e || "")
}, Blockly.Block.prototype.interpolateMsg = function(e) {
    function t(e) {
        e instanceof Blockly.Field ? this.appendField(e) : (goog.asserts.assert(goog.isArray(e)), this.appendField(e[1], e[0]))
    }
    goog.asserts.assertString(e);
    var o = arguments[arguments.length - 1];
    goog.asserts.assert(o === Blockly.ALIGN_LEFT || o === Blockly.ALIGN_CENTRE || o === Blockly.ALIGN_RIGHT, 'Illegal final argument "%d" is not an alignment.', o), --arguments.length;
    for (var n = e.split(this.interpolateMsg.SPLIT_REGEX_), i = [], r = 0; r < n.length; r += 2) {
        var s = goog.string.trim(n[r]),
            l = void 0;
        if (s && i.push(new Blockly.FieldLabel(s)), (s = n[r + 1]) && "%" == s.charAt(0)) {
            var a = parseInt(s.substring(1), 10),
                c = arguments[a];
            goog.asserts.assertArray(c, 'Message symbol "%s" is out of range.', s), goog.asserts.assertArray(c, 'Argument "%s" is not a tuple.', s), c[1] instanceof Blockly.Field ? i.push([c[0], c[1]]) : l = this.appendValueInput(c[0]).setCheck(c[1]).setAlign(c[2]), arguments[a] = null
        } else "\n" == s && i.length && (l = this.appendDummyInput());
        l && i.length && (i.forEach(t, l), i = [])
    }
    for (i.length && (l = this.appendDummyInput().setAlign(o), i.forEach(t, l)), r = 1; r < arguments.length - 1; r++) goog.asserts.assert(null === arguments[r], 'Input "%%s" not used in message: "%s"', r, e);
    this.setInputsInline(!e.match(this.interpolateMsg.INLINE_REGEX_))
}, Blockly.Block.prototype.interpolateMsg.SPLIT_REGEX_ = /(%\d+|\n)/, Blockly.Block.prototype.interpolateMsg.INLINE_REGEX_ = /%1\s*$/, Blockly.Block.prototype.appendInput_ = function(e, t) {
    var o = null;
    return (e == Blockly.INPUT_VALUE || e == Blockly.NEXT_STATEMENT) && (o = new Blockly.Connection(this, e)), o = new Blockly.Input(e, t, this, o), this.inputList.push(o), this.rendered && (this.render(), this.bumpNeighbours_()), o
}, Blockly.Block.prototype.moveInputBefore = function(e, t) {
    if (e != t) {
        for (var o, n = -1, i = t ? -1 : this.inputList.length, r = 0; o = this.inputList[r]; r++)
            if (o.name == e) {
                if (n = r, -1 != i) break
            } else if (t && o.name == t && (i = r, -1 != n)) break;
        goog.asserts.assert(-1 != n, 'Named input "%s" not found.', e), goog.asserts.assert(-1 != i, 'Reference input "%s" not found.', t), this.moveNumberedInputBefore(n, i)
    }
}, Blockly.Block.prototype.moveNumberedInputBefore = function(e, t) {
    goog.asserts.assert(e != t, "Can't move input to itself."), goog.asserts.assert(e < this.inputList.length, "Input index " + e + " out of bounds."), goog.asserts.assert(t <= this.inputList.length, "Reference input " + t + " out of bounds.");
    var o = this.inputList[e];
    this.inputList.splice(e, 1), t > e && t--, this.inputList.splice(t, 0, o), this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.Block.prototype.removeInput = function(e, t) {
    for (var o, n = 0; o = this.inputList[n]; n++)
        if (o.name == e) return o.connection && o.connection.targetConnection && o.connection.targetBlock().setParent(null), o.dispose(), this.inputList.splice(n, 1), this.rendered && (this.render(), this.bumpNeighbours_()), void 0;
    t || goog.asserts.fail('Input "%s" not found.', e)
}, Blockly.Block.prototype.getInput = function(e) {
    for (var t, o = 0; t = this.inputList[o]; o++)
        if (t.name == e) return t;
    return null
}, Blockly.Block.prototype.getInputTargetBlock = function(e) {
    return (e = this.getInput(e)) && e.connection && e.connection.targetBlock()
}, Blockly.Block.prototype.getCommentText = function() {
    return this.comment || ""
}, Blockly.Block.prototype.setCommentText = function(e) {
    this.comment = e
}, Blockly.Block.prototype.setWarningText = function() {}, Blockly.Block.prototype.setMutator = function() {}, Blockly.Block.prototype.getRelativeToSurfaceXY = function() {
    return this.xy_
}, Blockly.Block.prototype.moveBy = function(e, t) {
    this.xy_.translate(e, t)
}, Blockly.ContextMenu = {}, Blockly.ContextMenu.currentBlock = null, Blockly.ContextMenu.show = function(e, t, o) {
    if (Blockly.WidgetDiv.show(Blockly.ContextMenu, o, null), t.length) {
        var n = new goog.ui.Menu;
        n.setRightToLeft(o);
        for (var i, r = 0; i = t[r]; r++) {
            var s = new goog.ui.MenuItem(i.text);
            s.setRightToLeft(o), n.addChild(s, !0), s.setEnabled(i.enabled), i.enabled && goog.events.listen(s, goog.ui.Component.EventType.ACTION, function(e) {
                return function() {
                    Blockly.doCommand(e)
                }
            }(i.callback))
        }
        goog.events.listen(n, goog.ui.Component.EventType.ACTION, Blockly.ContextMenu.hide), t = goog.dom.getViewportSize(), i = goog.style.getViewportPageOffset(document), n.render(Blockly.WidgetDiv.DIV);
        var l = n.getElement();
        Blockly.addClass_(l, "blocklyContextMenu");
        var s = goog.style.getSize(l),
            r = e.clientX + i.x,
            a = e.clientY + i.y;
        e.clientY + s.height >= t.height && (a -= s.height), o ? s.width >= e.clientX && (r += s.width) : e.clientX + s.width >= t.width && (r -= s.width), Blockly.WidgetDiv.position(r, a, t, i, o), n.setAllowAutoFocus(!0), setTimeout(function() {
            l.focus()
        }, 1), Blockly.ContextMenu.currentBlock = null
    } else Blockly.ContextMenu.hide()
}, Blockly.ContextMenu.hide = function() {
    Blockly.WidgetDiv.hideIfOwner(Blockly.ContextMenu), Blockly.ContextMenu.currentBlock = null
}, Blockly.ContextMenu.callbackFactory = function(e, t) {
    return function() {
        var o = Blockly.Xml.domToBlock(e.workspace, t),
            n = e.getRelativeToSurfaceXY();
        n.x = e.RTL ? n.x - Blockly.SNAP_RADIUS : n.x + Blockly.SNAP_RADIUS, n.y += 2 * Blockly.SNAP_RADIUS, o.moveBy(n.x, n.y), o.select()
    }
}, Blockly.BlockSvg = function() {
    this.svgGroup_ = Blockly.createSvgElement("g", {}, null), this.svgPathDark_ = Blockly.createSvgElement("path", {
        "class": "blocklyPathDark",
        transform: "translate(1, 1)"
    }, this.svgGroup_), this.svgPath_ = Blockly.createSvgElement("path", {
        "class": "blocklyPath"
    }, this.svgGroup_), this.svgPathLight_ = Blockly.createSvgElement("path", {
        "class": "blocklyPathLight"
    }, this.svgGroup_), this.svgPath_.tooltip = this, Blockly.Tooltip.bindMouseEvents(this.svgPath_)
}, goog.inherits(Blockly.BlockSvg, Blockly.Block), Blockly.BlockSvg.prototype.height = 0, Blockly.BlockSvg.prototype.width = 0, Blockly.BlockSvg.INLINE = -1, Blockly.BlockSvg.prototype.initSvg = function() {
    goog.asserts.assert(this.workspace.rendered, "Workspace is headless.");
    for (var e, t = 0; e = this.inputList[t]; t++) e.init();
    if (this.mutator && this.mutator.createIcon(), this.updateColour(), this.updateMovable(), !this.workspace.options.readOnly && !this.eventsInit_) {
        Blockly.bindEvent_(this.getSvgRoot(), "mousedown", this, this.onMouseDown_);
        var o = this;
        Blockly.bindEvent_(this.getSvgRoot(), "touchstart", null, function(e) {
            Blockly.longStart_(e, o)
        })
    }
    goog.isFunction(this.onchange) && !this.eventsInit_ && Blockly.bindEvent_(this.workspace.getCanvas(), "blocklyWorkspaceChange", this, this.onchange), this.eventsInit_ = !0, this.getSvgRoot().parentNode || this.workspace.getCanvas().appendChild(this.getSvgRoot())
}, Blockly.BlockSvg.prototype.select = function() {
    Blockly.selected && Blockly.selected.unselect(), Blockly.selected = this, this.addSelect(), Blockly.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange")
}, Blockly.BlockSvg.prototype.unselect = function() {
    Blockly.selected = null, this.removeSelect(), Blockly.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange")
}, Blockly.BlockSvg.prototype.mutator = null, Blockly.BlockSvg.prototype.comment = null, Blockly.BlockSvg.prototype.warning = null, Blockly.BlockSvg.prototype.getIcons = function() {
    var e = [];
    return this.mutator && e.push(this.mutator), this.comment && e.push(this.comment), this.warning && e.push(this.warning), e
}, Blockly.BlockSvg.onMouseUpWrapper_ = null, Blockly.BlockSvg.onMouseMoveWrapper_ = null, Blockly.BlockSvg.terminateDrag_ = function() {
    Blockly.BlockSvg.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.BlockSvg.onMouseUpWrapper_), Blockly.BlockSvg.onMouseUpWrapper_ = null), Blockly.BlockSvg.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.BlockSvg.onMouseMoveWrapper_), Blockly.BlockSvg.onMouseMoveWrapper_ = null);
    var e = Blockly.selected;
    if (2 == Blockly.dragMode_ && e) {
        var t = e.getRelativeToSurfaceXY();
        e.moveConnections_(t.x - e.startDragX, t.y - e.startDragY), delete e.draggedBubbles_, e.setDragging_(!1), e.render(), e.workspace && e.workspace.options.gridOptions && e.workspace.options.gridOptions.snap && goog.Timer.callOnce(e.snapToGrid_, Blockly.BUMP_DELAY / 2, e), goog.Timer.callOnce(e.bumpNeighbours_, Blockly.BUMP_DELAY, e), Blockly.fireUiEvent(window, "resize"), e.workspace.fireChangeEvent()
    }
    Blockly.dragMode_ = 0, Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN)
}, Blockly.BlockSvg.prototype.setParent = function(e) {
    var t = this.getSvgRoot();
    if (this.parentBlock_ && t) {
        var o = this.getRelativeToSurfaceXY();
        this.workspace.getCanvas().appendChild(t), t.setAttribute("transform", "translate(" + o.x + ", " + o.y + ")")
    }
    Blockly.BlockSvg.superClass_.setParent.call(this, e), e && (o = this.getRelativeToSurfaceXY(), e.getSvgRoot().appendChild(t), e = this.getRelativeToSurfaceXY(), this.moveConnections_(e.x - o.x, e.y - o.y))
}, Blockly.BlockSvg.prototype.getRelativeToSurfaceXY = function() {
    var e = 0,
        t = 0,
        o = this.getSvgRoot();
    if (o)
        do var n = Blockly.getRelativeXY_(o),
            e = e + n.x,
            t = t + n.y,
            o = o.parentNode; while (o && o != this.workspace.getCanvas());
    return new goog.math.Coordinate(e, t)
}, Blockly.BlockSvg.prototype.moveBy = function(e, t) {
    var o = this.getRelativeToSurfaceXY();
    this.getSvgRoot().setAttribute("transform", "translate(" + (o.x + e) + ", " + (o.y + t) + ")"), this.moveConnections_(e, t), Blockly.Realtime.blockChanged(this)
}, Blockly.BlockSvg.prototype.snapToGrid_ = function() {
    if (this.workspace && 0 == Blockly.dragMode_ && !this.getParent() && !this.isInFlyout) {
        var e = this.workspace.options.gridOptions.spacing,
            t = e / 2,
            o = this.getRelativeToSurfaceXY(),
            n = Math.round((o.x - t) / e) * e + t - o.x,
            e = Math.round((o.y - t) / e) * e + t - o.y,
            n = Math.round(n),
            e = Math.round(e);
        0 == n && 0 == e || this.moveBy(n, e)
    }
}, Blockly.BlockSvg.prototype.getHeightWidth = function() {
    var e = this.height,
        t = this.width,
        o = this.getNextBlock();
    return o && (o = o.getHeightWidth(), e += o.height - 4, t = Math.max(t, o.width)), {
        height: e,
        width: t
    }
}, Blockly.BlockSvg.prototype.setCollapsed = function(e) {
    if (this.collapsed_ != e) {
        for (var t, o = [], n = 0; t = this.inputList[n]; n++) o.push.apply(o, t.setVisible(!e));
        if (e) {
            for (t = this.getIcons(), n = 0; n < t.length; n++) t[n].setVisible(!1);
            n = this.toString(Blockly.COLLAPSE_CHARS), this.appendDummyInput("_TEMP_COLLAPSED_INPUT").appendField(n).init()
        } else this.removeInput("_TEMP_COLLAPSED_INPUT");
        if (Blockly.BlockSvg.superClass_.setCollapsed.call(this, e), o.length || (o[0] = this), this.rendered)
            for (n = 0; e = o[n]; n++) e.render()
    }
}, Blockly.BlockSvg.prototype.onMouseDown_ = function(e) {
    if (!this.isInFlyout) {
        if (Blockly.svgResize(this.workspace), Blockly.terminateDrag_(), this.select(), Blockly.hideChaff(), Blockly.isRightButton(e)) this.showContextMenu_(e);
        else {
            if (!this.isMovable()) return;
            Blockly.removeAllRanges(), Blockly.Css.setCursor(Blockly.Css.Cursor.CLOSED);
            var t = this.getRelativeToSurfaceXY();
            this.startDragX = t.x, this.startDragY = t.y, this.startDragMouseX = e.clientX, this.startDragMouseY = e.clientY, Blockly.dragMode_ = 1, Blockly.BlockSvg.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, this.onMouseUp_), Blockly.BlockSvg.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.onMouseMove_), this.draggedBubbles_ = [];
            for (var o, t = this.getDescendants(), n = 0; o = t[n]; n++) {
                o = o.getIcons();
                for (var i = 0; i < o.length; i++) {
                    var r = o[i].getIconLocation();
                    r.bubble = o[i], this.draggedBubbles_.push(r)
                }
            }
        }
        e.stopPropagation()
    }
}, Blockly.BlockSvg.prototype.onMouseUp_ = function(e) {
    var t = this;
    Blockly.doCommand(function() {
        if (Blockly.terminateDrag_(), Blockly.selected && Blockly.highlightedConnection_) Blockly.localConnection_.connect(Blockly.highlightedConnection_), t.rendered && (Blockly.localConnection_.isSuperior() ? Blockly.highlightedConnection_ : Blockly.localConnection_).sourceBlock_.connectionUiEffect(), t.workspace.trashcan && t.workspace.trashcan.close();
        else if (t.workspace.isDeleteArea(e) && Blockly.selected.isDeletable()) {
            var o = t.workspace.trashcan;
            o && goog.Timer.callOnce(o.close, 100, o), Blockly.selected.dispose(!1, !0), Blockly.fireUiEvent(window, "resize")
        }
        Blockly.highlightedConnection_ && (Blockly.highlightedConnection_.unhighlight(), Blockly.highlightedConnection_ = null), Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN)
    })
}, Blockly.BlockSvg.prototype.showHelp_ = function() {
    var e = goog.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
    e && window.open(e)
}, Blockly.BlockSvg.prototype.showContextMenu_ = function(e) {
    if (!this.workspace.options.readOnly && this.contextMenu) {
        var t = this,
            o = [];
        if (this.isDeletable() && this.isMovable() && !t.isInFlyout) {
            var n = {
                text: Blockly.Msg.DUPLICATE_BLOCK,
                enabled: !0,
                callback: function() {
                    t.duplicate_()
                }
            };
            if (this.getDescendants().length > this.workspace.remainingCapacity() && (n.enabled = !1), o.push(n), this.isEditable() && !this.collapsed_ && this.workspace.options.comments && (n = {
                    enabled: !0
                }, this.comment ? (n.text = Blockly.Msg.REMOVE_COMMENT, n.callback = function() {
                    t.setCommentText(null)
                }) : (n.text = Blockly.Msg.ADD_COMMENT, n.callback = function() {
                    t.setCommentText("")
                }), o.push(n)), !this.collapsed_)
                for (n = 0; n < this.inputList.length; n++)
                    if (this.inputList[n].type == Blockly.INPUT_VALUE) {
                        n = {
                            enabled: !0
                        }, n.text = this.inputsInline ? Blockly.Msg.EXTERNAL_INPUTS : Blockly.Msg.INLINE_INPUTS, n.callback = function() {
                            t.setInputsInline(!t.inputsInline)
                        }, o.push(n);
                        break
                    }
            this.workspace.options.collapse && (this.collapsed_ ? (n = {
                enabled: !0
            }, n.text = Blockly.Msg.EXPAND_BLOCK, n.callback = function() {
                t.setCollapsed(!1)
            }) : (n = {
                enabled: !0
            }, n.text = Blockly.Msg.COLLAPSE_BLOCK, n.callback = function() {
                t.setCollapsed(!0)
            }), o.push(n)), this.workspace.options.disable && (n = {
                text: this.disabled ? Blockly.Msg.ENABLE_BLOCK : Blockly.Msg.DISABLE_BLOCK,
                enabled: !this.getInheritedDisabled(),
                callback: function() {
                    t.setDisabled(!t.disabled)
                }
            }, o.push(n));
            var n = this.getDescendants().length,
                i = this.getNextBlock();
            i && (n -= i.getDescendants().length), n = {
                text: 1 == n ? Blockly.Msg.DELETE_BLOCK : Blockly.Msg.DELETE_X_BLOCKS.replace("%1", String(n)),
                enabled: !0,
                callback: function() {
                    t.dispose(!0, !0)
                }
            }, o.push(n)
        }
        n = {
            enabled: !(goog.isFunction(this.helpUrl) ? !this.helpUrl() : !this.helpUrl)
        }, n.text = Blockly.Msg.HELP, n.callback = function() {
            t.showHelp_()
        }, o.push(n), this.customContextMenu && !t.isInFlyout && this.customContextMenu(o), Blockly.ContextMenu.show(e, o, this.RTL), Blockly.ContextMenu.currentBlock = this
    }
}, Blockly.BlockSvg.prototype.moveConnections_ = function(e, t) {
    if (this.rendered) {
        for (var o = this.getConnections_(!1), n = 0; n < o.length; n++) o[n].moveBy(e, t);
        for (o = this.getIcons(), n = 0; n < o.length; n++) o[n].computeIconLocation();
        for (n = 0; n < this.childBlocks_.length; n++) this.childBlocks_[n].moveConnections_(e, t)
    }
}, Blockly.BlockSvg.prototype.setDragging_ = function(e) {
    e ? this.addDragging() : this.removeDragging();
    for (var t = 0; t < this.childBlocks_.length; t++) this.childBlocks_[t].setDragging_(e)
}, Blockly.BlockSvg.prototype.onMouseMove_ = function(e) {
    var t = this;
    Blockly.doCommand(function() {
        if (!("mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button)) {
            Blockly.removeAllRanges();
            var o = e.clientX - t.startDragMouseX,
                n = e.clientY - t.startDragMouseY;
            if (1 == Blockly.dragMode_ && Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)) > Blockly.DRAG_RADIUS && (Blockly.dragMode_ = 2, Blockly.longStop_(), t.setParent(null), t.setDragging_(!0), t.workspace.recordDeleteAreas()), 2 == Blockly.dragMode_) {
                var i = t.startDragX + o,
                    r = t.startDragY + n;
                for (t.getSvgRoot().setAttribute("transform", "translate(" + i + ", " + r + ")"), i = 0; i < t.draggedBubbles_.length; i++) r = t.draggedBubbles_[i], r.bubble.setIconLocation(r.x + o, r.y + n);
                for (var r = t.getConnections_(!1), s = null, l = null, a = Blockly.SNAP_RADIUS, i = 0; i < r.length; i++) {
                    var c = r[i],
                        g = c.closest(a, o, n);
                    g.connection && (s = g.connection, l = c, a = g.radius)
                }
                Blockly.highlightedConnection_ && Blockly.highlightedConnection_ != s && (Blockly.highlightedConnection_.unhighlight(), Blockly.highlightedConnection_ = null, Blockly.localConnection_ = null), s && s != Blockly.highlightedConnection_ && (s.highlight(), Blockly.highlightedConnection_ = s, Blockly.localConnection_ = l), t.isDeletable() && t.workspace.isDeleteArea(e)
            }
        }
        e.stopPropagation()
    })
}, Blockly.BlockSvg.prototype.updateMovable = function() {
    this.isMovable() ? Blockly.addClass_(this.svgGroup_, "blocklyDraggable") : Blockly.removeClass_(this.svgGroup_, "blocklyDraggable")
}, Blockly.BlockSvg.prototype.setMovable = function(e) {
    Blockly.BlockSvg.superClass_.setMovable.call(this, e), this.updateMovable()
}, Blockly.BlockSvg.prototype.getSvgRoot = function() {
    return this.svgGroup_
}, Blockly.BlockSvg.SEP_SPACE_X = 10, Blockly.BlockSvg.SEP_SPACE_Y = 10, Blockly.BlockSvg.INLINE_PADDING_Y = 5, Blockly.BlockSvg.MIN_BLOCK_Y = 25, Blockly.BlockSvg.TAB_HEIGHT = 20, Blockly.BlockSvg.TAB_WIDTH = 8, Blockly.BlockSvg.NOTCH_WIDTH = 30, Blockly.BlockSvg.CORNER_RADIUS = 8, Blockly.BlockSvg.FIELD_HEIGHT = 18, Blockly.BlockSvg.DISTANCE_45_INSIDE = (1 - Math.SQRT1_2) * (Blockly.BlockSvg.CORNER_RADIUS - 1) + 1, Blockly.BlockSvg.DISTANCE_45_OUTSIDE = (1 - Math.SQRT1_2) * (Blockly.BlockSvg.CORNER_RADIUS + 1) - 1, Blockly.BlockSvg.NOTCH_PATH_LEFT = "l 6,4 3,0 6,-4", Blockly.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT = "l 6.5,4 2,0 6.5,-4", Blockly.BlockSvg.NOTCH_PATH_RIGHT = "l -6,4 -3,0 -6,-4", Blockly.BlockSvg.JAGGED_TEETH = "l 8,0 0,4 8,4 -16,8 8,4", Blockly.BlockSvg.JAGGED_TEETH_HEIGHT = 20, Blockly.BlockSvg.JAGGED_TEETH_WIDTH = 15, Blockly.BlockSvg.TAB_PATH_DOWN = "v 5 c 0,10 -" + Blockly.BlockSvg.TAB_WIDTH + ",-8 -" + Blockly.BlockSvg.TAB_WIDTH + ",7.5 s " + Blockly.BlockSvg.TAB_WIDTH + ",-2.5 " + Blockly.BlockSvg.TAB_WIDTH + ",7.5", Blockly.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL = "v 6.5 m -" + .98 * Blockly.BlockSvg.TAB_WIDTH + ",2.5 q -" + .05 * Blockly.BlockSvg.TAB_WIDTH + ",10 " + .27 * Blockly.BlockSvg.TAB_WIDTH + ",10 m " + .71 * Blockly.BlockSvg.TAB_WIDTH + ",-2.5 v 1.5", Blockly.BlockSvg.TOP_LEFT_CORNER_START = "m 0," + Blockly.BlockSvg.CORNER_RADIUS, Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL = "m " + Blockly.BlockSvg.DISTANCE_45_INSIDE + "," + Blockly.BlockSvg.DISTANCE_45_INSIDE, Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR = "m 1," + (Blockly.BlockSvg.CORNER_RADIUS - 1), Blockly.BlockSvg.TOP_LEFT_CORNER = "A " + Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS + " 0 0,1 " + Blockly.BlockSvg.CORNER_RADIUS + ",0", Blockly.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT = "A " + (Blockly.BlockSvg.CORNER_RADIUS - 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 " + Blockly.BlockSvg.CORNER_RADIUS + ",1", Blockly.BlockSvg.INNER_TOP_LEFT_CORNER = Blockly.BlockSvg.NOTCH_PATH_RIGHT + " h -" + (Blockly.BlockSvg.NOTCH_WIDTH - 15 - Blockly.BlockSvg.CORNER_RADIUS) + " a " + Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS + " 0 0,0 -" + Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS, Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER = "a " + Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS + " 0 0,0 " + Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS, Blockly.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (Blockly.BlockSvg.CORNER_RADIUS + 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (-Blockly.BlockSvg.DISTANCE_45_OUTSIDE - 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS - Blockly.BlockSvg.DISTANCE_45_OUTSIDE), Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (Blockly.BlockSvg.CORNER_RADIUS + 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (Blockly.BlockSvg.CORNER_RADIUS + 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS + 1), Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR = "a " + (Blockly.BlockSvg.CORNER_RADIUS + 1) + "," + (Blockly.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (Blockly.BlockSvg.CORNER_RADIUS - Blockly.BlockSvg.DISTANCE_45_OUTSIDE) + "," + (Blockly.BlockSvg.DISTANCE_45_OUTSIDE + 1), Blockly.BlockSvg.prototype.dispose = function(e, t, o) {
    for (Blockly.selected == this && Blockly.terminateDrag_(), Blockly.ContextMenu.currentBlock == this && Blockly.ContextMenu.hide(), this.unplug(e, !1), t && this.rendered && this.disposeUiEffect(), this.rendered = !1, t = this.getIcons(), o = 0; o < t.length; o++) t[o].dispose();
    Blockly.BlockSvg.superClass_.dispose.call(this, e), goog.dom.removeNode(this.svgGroup_), this.svgPathDark_ = this.svgPathLight_ = this.svgPath_ = this.svgGroup_ = null
}, Blockly.BlockSvg.prototype.disposeUiEffect = function() {
    this.workspace.playAudio("delete");
    var e = Blockly.getSvgXY_(this.svgGroup_),
        t = this.svgGroup_.cloneNode(!0);
    t.translateX_ = e.x, t.translateY_ = e.y, t.setAttribute("transform", "translate(" + t.translateX_ + "," + t.translateY_ + ")"), this.workspace.options.svg.appendChild(t), t.bBox_ = t.getBBox(), t.startDate_ = new Date, Blockly.BlockSvg.disposeUiStep_(t, this.RTL)
}, Blockly.BlockSvg.disposeUiStep_ = function(e, t) {
    var o = (new Date - e.startDate_) / 150;
    o > 1 ? goog.dom.removeNode(e) : (e.setAttribute("transform", "translate(" + (e.translateX_ + (t ? -1 : 1) * e.bBox_.width / 2 * o + ", " + (e.translateY_ + e.bBox_.height * o)) + ") scale(" + (1 - o) + ")"), setTimeout(function() {
        Blockly.BlockSvg.disposeUiStep_(e, t)
    }, 10))
}, Blockly.BlockSvg.prototype.connectionUiEffect = function() {
    this.workspace.playAudio("click");
    var e = Blockly.getSvgXY_(this.svgGroup_);
    this.outputConnection ? (e.x += this.RTL ? 3 : -3, e.y += 13) : this.previousConnection && (e.x += this.RTL ? -23 : 23, e.y += 3), e = Blockly.createSvgElement("circle", {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10
    }, this.workspace.options.svg), e.startDate_ = new Date, Blockly.BlockSvg.connectionUiStep_(e)
}, Blockly.BlockSvg.connectionUiStep_ = function(e) {
    var t = (new Date - e.startDate_) / 150;
    t > 1 ? goog.dom.removeNode(e) : (e.setAttribute("r", 25 * t), e.style.opacity = 1 - t, setTimeout(function() {
        Blockly.BlockSvg.connectionUiStep_(e)
    }, 10))
}, Blockly.BlockSvg.prototype.updateColour = function() {
    if (!this.disabled) {
        var e = Blockly.makeColour(this.getColour()),
            t = goog.color.hexToRgb(e),
            o = goog.color.lighten(t, .3),
            t = goog.color.darken(t, .4);
        for (this.svgPathLight_.setAttribute("stroke", goog.color.rgbArrayToHex(o)), this.svgPathDark_.setAttribute("fill", goog.color.rgbArrayToHex(t)), this.svgPath_.setAttribute("fill", e), o = this.getIcons(), e = 0; e < o.length; e++) o[e].updateColour();
        for (e = 0; o = this.inputList[e]; e++)
            for (var n, t = 0; n = o.fieldRow[t]; t++) n.setText(null)
    }
}, Blockly.BlockSvg.prototype.updateDisabled = function() {
    var e = Blockly.hasClass_(this.svgGroup_, "blocklyDisabled");
    this.disabled || this.getInheritedDisabled() ? e || (Blockly.addClass_(this.svgGroup_, "blocklyDisabled"), this.svgPath_.setAttribute("fill", "url(#blocklyDisabledPattern)")) : e && (Blockly.removeClass_(this.svgGroup_, "blocklyDisabled"), this.updateColour());
    for (var t, e = this.getChildren(), o = 0; t = e[o]; o++) t.updateDisabled()
}, Blockly.BlockSvg.prototype.getCommentText = function() {
    return this.comment ? this.comment.getText().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
}, Blockly.BlockSvg.prototype.setCommentText = function(e) {
    var t = !1;
    goog.isString(e) ? (this.comment || (this.comment = new Blockly.Comment(this), t = !0), this.comment.setText(e)) : this.comment && (this.comment.dispose(), t = !0), t && this.rendered && (this.render(), this.bumpNeighbours_())
}, Blockly.BlockSvg.prototype.setWarningText = function(e) {
    if (this.setWarningText.pid_ && (clearTimeout(this.setWarningText.pid_), this.setWarningText.pid_ = 0), 2 == Blockly.dragMode_) {
        var t = this;
        this.setWarningText.pid_ = setTimeout(function() {
            t.setWarningText.pid_ = 0, t.setWarningText(e)
        }, 100)
    } else {
        this.isInFlyout && (e = null);
        var o = !1;
        goog.isString(e) ? (this.warning || (this.warning = new Blockly.Warning(this), o = !0), this.warning.setText(e)) : this.warning && (this.warning.dispose(), o = !0), o && this.rendered && (this.render(), this.bumpNeighbours_())
    }
}, Blockly.BlockSvg.prototype.setMutator = function(e) {
    this.mutator && this.mutator !== e && this.mutator.dispose(), e && (e.block_ = this, this.mutator = e, this.rendered && e.createIcon())
}, Blockly.BlockSvg.prototype.setDisabled = function(e) {
    this.disabled != e && (Blockly.BlockSvg.superClass_.setDisabled.call(this, e), this.rendered && this.updateDisabled(), this.workspace.fireChangeEvent())
}, Blockly.BlockSvg.prototype.addSelect = function() {
    Blockly.addClass_(this.svgGroup_, "blocklySelected"), this.svgGroup_.parentNode.appendChild(this.svgGroup_)
}, Blockly.BlockSvg.prototype.removeSelect = function() {
    Blockly.removeClass_(this.svgGroup_, "blocklySelected")
}, Blockly.BlockSvg.prototype.addDragging = function() {
    Blockly.addClass_(this.svgGroup_, "blocklyDragging")
}, Blockly.BlockSvg.prototype.removeDragging = function() {
    Blockly.removeClass_(this.svgGroup_, "blocklyDragging")
}, Blockly.BlockSvg.prototype.render = function(e) {
    this.rendered = !0;
    var t = Blockly.BlockSvg.SEP_SPACE_X;
    this.RTL && (t = -t);
    for (var o = this.getIcons(), n = 0; n < o.length; n++) t = o[n].renderIcon(t);
    t += this.RTL ? Blockly.BlockSvg.SEP_SPACE_X : -Blockly.BlockSvg.SEP_SPACE_X, o = this.renderCompute_(t), this.renderDraw_(t, o), !1 !== e && ((e = this.getParent()) ? e.render(!0) : Blockly.fireUiEvent(window, "resize")), Blockly.Realtime.blockChanged(this)
}, Blockly.BlockSvg.prototype.renderFields_ = function(e, t, o) {
    this.RTL && (t = -t);
    for (var n, i = 0; n = e[i]; i++) {
        var r = n.getSvgRoot();
        r && (this.RTL ? (t -= n.renderSep + n.renderWidth, r.setAttribute("transform", "translate(" + t + ", " + o + ")"), n.renderWidth && (t -= Blockly.BlockSvg.SEP_SPACE_X)) : (r.setAttribute("transform", "translate(" + (t + n.renderSep) + ", " + o + ")"), n.renderWidth && (t += n.renderSep + n.renderWidth + Blockly.BlockSvg.SEP_SPACE_X)))
    }
    return this.RTL ? -t : t
}, Blockly.BlockSvg.prototype.renderCompute_ = function(e) {
    var t = this.inputList,
        o = [];
    o.rightEdge = e + 2 * Blockly.BlockSvg.SEP_SPACE_X, (this.previousConnection || this.nextConnection) && (o.rightEdge = Math.max(o.rightEdge, Blockly.BlockSvg.NOTCH_WIDTH + Blockly.BlockSvg.SEP_SPACE_X));
    for (var n, i = 0, r = 0, s = !1, l = !1, a = !1, c = void 0, g = this.inputsInline && !this.isCollapsed(), u = 0; n = t[u]; u++)
        if (n.isVisible()) {
            var h;
            if (g && c && c != Blockly.NEXT_STATEMENT && n.type != Blockly.NEXT_STATEMENT ? h = o[o.length - 1] : (c = n.type, h = [], h.type = g && n.type != Blockly.NEXT_STATEMENT ? Blockly.BlockSvg.INLINE : n.type, h.height = 0, o.push(h)), h.push(n), n.renderHeight = Blockly.BlockSvg.MIN_BLOCK_Y, n.renderWidth = g && n.type == Blockly.INPUT_VALUE ? Blockly.BlockSvg.TAB_WIDTH + 1.25 * Blockly.BlockSvg.SEP_SPACE_X : 0, n.connection && n.connection.targetConnection) {
                var d = n.connection.targetBlock().getHeightWidth();
                n.renderHeight = Math.max(n.renderHeight, d.height), n.renderWidth = Math.max(n.renderWidth, d.width)
            }
            u == t.length - 1 && n.renderHeight--, h.height = Math.max(h.height, n.renderHeight), n.fieldWidth = 0, 1 == o.length && (n.fieldWidth += this.RTL ? -e : e);
            for (var p, d = !1, f = 0; p = n.fieldRow[f]; f++) {
                0 != f && (n.fieldWidth += Blockly.BlockSvg.SEP_SPACE_X);
                var m = p.getSize();
                p.renderWidth = m.width, p.renderSep = d && p.EDITABLE ? Blockly.BlockSvg.SEP_SPACE_X : 0, n.fieldWidth += p.renderWidth + p.renderSep, h.height = Math.max(h.height, m.height), d = p.EDITABLE
            }
            h.type != Blockly.BlockSvg.INLINE && (h.type == Blockly.NEXT_STATEMENT ? (l = !0, r = Math.max(r, n.fieldWidth)) : (h.type == Blockly.INPUT_VALUE ? s = !0 : h.type == Blockly.DUMMY_INPUT && (a = !0), i = Math.max(i, n.fieldWidth)))
        }
    for (e = 0; h = o[e]; e++)
        if (h.thicker = !1, h.type == Blockly.BlockSvg.INLINE)
            for (t = 0; n = h[t]; t++)
                if (n.type == Blockly.INPUT_VALUE) {
                    h.height += 2 * Blockly.BlockSvg.INLINE_PADDING_Y, h.thicker = !0;
                    break
                }
    return o.statementEdge = 2 * Blockly.BlockSvg.SEP_SPACE_X + r, l && (o.rightEdge = Math.max(o.rightEdge, o.statementEdge + Blockly.BlockSvg.NOTCH_WIDTH)), s ? o.rightEdge = Math.max(o.rightEdge, i + 2 * Blockly.BlockSvg.SEP_SPACE_X + Blockly.BlockSvg.TAB_WIDTH) : a && (o.rightEdge = Math.max(o.rightEdge, i + 2 * Blockly.BlockSvg.SEP_SPACE_X)), o.hasValue = s, o.hasStatement = l, o.hasDummy = a, o
}, Blockly.BlockSvg.prototype.renderDraw_ = function(e, t) {
    if (this.outputConnection) this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0;
    else {
        if (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !1, this.previousConnection) {
            var o = this.previousConnection.targetBlock();
            o && o.getNextBlock() == this && (this.squareTopLeftCorner_ = !0)
        }
        this.getNextBlock() && (this.squareBottomLeftCorner_ = !0)
    }
    var n = this.getRelativeToSurfaceXY(),
        i = [],
        r = [],
        o = [],
        s = [];
    this.renderDrawTop_(i, o, n, t.rightEdge);
    var l = this.renderDrawRight_(i, o, r, s, n, t, e);
    this.renderDrawBottom_(i, o, n, l), this.renderDrawLeft_(i, o, n, l), n = i.join(" ") + "\n" + r.join(" "), this.svgPath_.setAttribute("d", n), this.svgPathDark_.setAttribute("d", n), n = o.join(" ") + "\n" + s.join(" "), this.svgPathLight_.setAttribute("d", n), this.RTL && (this.svgPath_.setAttribute("transform", "scale(-1 1)"), this.svgPathLight_.setAttribute("transform", "scale(-1 1)"), this.svgPathDark_.setAttribute("transform", "translate(1,1) scale(-1 1)"))
}, Blockly.BlockSvg.prototype.renderDrawTop_ = function(e, t, o, n) {
    this.squareTopLeftCorner_ ? (e.push("m 0,0"), t.push("m 1,1")) : (e.push(Blockly.BlockSvg.TOP_LEFT_CORNER_START), t.push(this.RTL ? Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL : Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR), e.push(Blockly.BlockSvg.TOP_LEFT_CORNER), t.push(Blockly.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT)), this.previousConnection && (e.push("H", Blockly.BlockSvg.NOTCH_WIDTH - 15), t.push("H", Blockly.BlockSvg.NOTCH_WIDTH - 15), e.push(Blockly.BlockSvg.NOTCH_PATH_LEFT), t.push(Blockly.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT), this.previousConnection.moveTo(o.x + (this.RTL ? -Blockly.BlockSvg.NOTCH_WIDTH : Blockly.BlockSvg.NOTCH_WIDTH), o.y)), e.push("H", n), t.push("H", n + (this.RTL ? -1 : 0)), this.width = n
}, Blockly.BlockSvg.prototype.renderDrawRight_ = function(e, t, o, n, i, r, s) {
    for (var l, a, c, g, u = 0, h = 0; g = r[h]; h++) {
        if (l = Blockly.BlockSvg.SEP_SPACE_X, 0 == h && (l += this.RTL ? -s : s), t.push("M", r.rightEdge - 1 + "," + (u + 1)), this.isCollapsed()) {
            var d = g[0];
            a = u + Blockly.BlockSvg.FIELD_HEIGHT, this.renderFields_(d.fieldRow, l, a), e.push(Blockly.BlockSvg.JAGGED_TEETH), this.RTL ? t.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4") : t.push("h 8"), d = g.height - Blockly.BlockSvg.JAGGED_TEETH_HEIGHT, e.push("v", d), this.RTL && t.push("v", d - 2), this.width += Blockly.BlockSvg.JAGGED_TEETH_WIDTH
        } else if (g.type == Blockly.BlockSvg.INLINE) {
            for (var p = 0; d = g[p]; p++) a = u + Blockly.BlockSvg.FIELD_HEIGHT, g.thicker && (a += Blockly.BlockSvg.INLINE_PADDING_Y), l = this.renderFields_(d.fieldRow, l, a), d.type != Blockly.DUMMY_INPUT && (l += d.renderWidth + Blockly.BlockSvg.SEP_SPACE_X), d.type == Blockly.INPUT_VALUE && (o.push("M", l - Blockly.BlockSvg.SEP_SPACE_X + "," + (u + Blockly.BlockSvg.INLINE_PADDING_Y)), o.push("h", Blockly.BlockSvg.TAB_WIDTH - 2 - d.renderWidth), o.push(Blockly.BlockSvg.TAB_PATH_DOWN), o.push("v", d.renderHeight + 1 - Blockly.BlockSvg.TAB_HEIGHT), o.push("h", d.renderWidth + 2 - Blockly.BlockSvg.TAB_WIDTH), o.push("z"), this.RTL ? (n.push("M", l - Blockly.BlockSvg.SEP_SPACE_X - 3 + Blockly.BlockSvg.TAB_WIDTH - d.renderWidth + "," + (u + Blockly.BlockSvg.INLINE_PADDING_Y + 1)), n.push(Blockly.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL), n.push("v", d.renderHeight - Blockly.BlockSvg.TAB_HEIGHT + 3), n.push("h", d.renderWidth - Blockly.BlockSvg.TAB_WIDTH + 1)) : (n.push("M", l - Blockly.BlockSvg.SEP_SPACE_X + 1 + "," + (u + Blockly.BlockSvg.INLINE_PADDING_Y + 1)), n.push("v", d.renderHeight + 1), n.push("h", Blockly.BlockSvg.TAB_WIDTH - 2 - d.renderWidth), n.push("M", l - d.renderWidth - Blockly.BlockSvg.SEP_SPACE_X + 1.8 + "," + (u + Blockly.BlockSvg.INLINE_PADDING_Y + Blockly.BlockSvg.TAB_HEIGHT - .4)), n.push("l", .38 * Blockly.BlockSvg.TAB_WIDTH + ",-1.8")), a = this.RTL ? i.x - l - Blockly.BlockSvg.TAB_WIDTH + Blockly.BlockSvg.SEP_SPACE_X + d.renderWidth + 1 : i.x + l + Blockly.BlockSvg.TAB_WIDTH - Blockly.BlockSvg.SEP_SPACE_X - d.renderWidth - 1, c = i.y + u + Blockly.BlockSvg.INLINE_PADDING_Y + 1, d.connection.moveTo(a, c), d.connection.targetConnection && d.connection.tighten_());
            l = Math.max(l, r.rightEdge), this.width = Math.max(this.width, l), e.push("H", l), t.push("H", l + (this.RTL ? -1 : 0)), e.push("v", g.height), this.RTL && t.push("v", g.height - 2)
        } else g.type == Blockly.INPUT_VALUE ? (d = g[0], a = u + Blockly.BlockSvg.FIELD_HEIGHT, d.align != Blockly.ALIGN_LEFT && (p = r.rightEdge - d.fieldWidth - Blockly.BlockSvg.TAB_WIDTH - 2 * Blockly.BlockSvg.SEP_SPACE_X, d.align == Blockly.ALIGN_RIGHT ? l += p : d.align == Blockly.ALIGN_CENTRE && (l += (p + l) / 2)), this.renderFields_(d.fieldRow, l, a), e.push(Blockly.BlockSvg.TAB_PATH_DOWN), p = g.height - Blockly.BlockSvg.TAB_HEIGHT, e.push("v", p), this.RTL ? (t.push(Blockly.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL), t.push("v", p)) : (t.push("M", r.rightEdge - 4.2 + "," + (u + Blockly.BlockSvg.TAB_HEIGHT - .4)), t.push("l", .38 * Blockly.BlockSvg.TAB_WIDTH + ",-1.8")), a = i.x + (this.RTL ? -r.rightEdge - 1 : r.rightEdge + 1), c = i.y + u, d.connection.moveTo(a, c), d.connection.targetConnection && (d.connection.tighten_(), this.width = Math.max(this.width, r.rightEdge + d.connection.targetBlock().getHeightWidth().width - Blockly.BlockSvg.TAB_WIDTH + 1))) : g.type == Blockly.DUMMY_INPUT ? (d = g[0], a = u + Blockly.BlockSvg.FIELD_HEIGHT, d.align != Blockly.ALIGN_LEFT && (p = r.rightEdge - d.fieldWidth - 2 * Blockly.BlockSvg.SEP_SPACE_X, r.hasValue && (p -= Blockly.BlockSvg.TAB_WIDTH), d.align == Blockly.ALIGN_RIGHT ? l += p : d.align == Blockly.ALIGN_CENTRE && (l += (p + l) / 2)), this.renderFields_(d.fieldRow, l, a), e.push("v", g.height), this.RTL && t.push("v", g.height - 2)) : g.type == Blockly.NEXT_STATEMENT && (d = g[0], 0 == h && (e.push("v", Blockly.BlockSvg.SEP_SPACE_Y), this.RTL && t.push("v", Blockly.BlockSvg.SEP_SPACE_Y - 1), u += Blockly.BlockSvg.SEP_SPACE_Y), a = u + Blockly.BlockSvg.FIELD_HEIGHT, d.align != Blockly.ALIGN_LEFT && (p = r.statementEdge - d.fieldWidth - 2 * Blockly.BlockSvg.SEP_SPACE_X, d.align == Blockly.ALIGN_RIGHT ? l += p : d.align == Blockly.ALIGN_CENTRE && (l += (p + l) / 2)), this.renderFields_(d.fieldRow, l, a), l = r.statementEdge + Blockly.BlockSvg.NOTCH_WIDTH, e.push("H", l), e.push(Blockly.BlockSvg.INNER_TOP_LEFT_CORNER), e.push("v", g.height - 2 * Blockly.BlockSvg.CORNER_RADIUS), e.push(Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER), e.push("H", r.rightEdge), this.RTL ? (t.push("M", l - Blockly.BlockSvg.NOTCH_WIDTH + Blockly.BlockSvg.DISTANCE_45_OUTSIDE + "," + (u + Blockly.BlockSvg.DISTANCE_45_OUTSIDE)), t.push(Blockly.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL), t.push("v", g.height - 2 * Blockly.BlockSvg.CORNER_RADIUS), t.push(Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL), t.push("H", r.rightEdge - 1)) : (t.push("M", l - Blockly.BlockSvg.NOTCH_WIDTH + Blockly.BlockSvg.DISTANCE_45_OUTSIDE + "," + (u + g.height - Blockly.BlockSvg.DISTANCE_45_OUTSIDE)), t.push(Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR), t.push("H", r.rightEdge)), a = i.x + (this.RTL ? -l : l), c = i.y + u + 1, d.connection.moveTo(a, c), d.connection.targetConnection && (d.connection.tighten_(), this.width = Math.max(this.width, r.statementEdge + d.connection.targetBlock().getHeightWidth().width)), h == r.length - 1 || r[h + 1].type == Blockly.NEXT_STATEMENT) && (e.push("v", Blockly.BlockSvg.SEP_SPACE_Y), this.RTL && t.push("v", Blockly.BlockSvg.SEP_SPACE_Y - 1), u += Blockly.BlockSvg.SEP_SPACE_Y);
        u += g.height
    }
    return r.length || (u = Blockly.BlockSvg.MIN_BLOCK_Y, e.push("V", u), this.RTL && t.push("V", u - 1)), u
}, Blockly.BlockSvg.prototype.renderDrawBottom_ = function(e, t, o, n) {
    this.height = n + 1, this.nextConnection && (e.push("H", Blockly.BlockSvg.NOTCH_WIDTH + " " + Blockly.BlockSvg.NOTCH_PATH_RIGHT), this.nextConnection.moveTo(this.RTL ? o.x - Blockly.BlockSvg.NOTCH_WIDTH : o.x + Blockly.BlockSvg.NOTCH_WIDTH, o.y + n + 1), this.nextConnection.targetConnection && this.nextConnection.tighten_(), this.height += 4), this.squareBottomLeftCorner_ ? (e.push("H 0"), this.RTL || t.push("M", "1," + n)) : (e.push("H", Blockly.BlockSvg.CORNER_RADIUS), e.push("a", Blockly.BlockSvg.CORNER_RADIUS + "," + Blockly.BlockSvg.CORNER_RADIUS + " 0 0,1 -" + Blockly.BlockSvg.CORNER_RADIUS + ",-" + Blockly.BlockSvg.CORNER_RADIUS), this.RTL || (t.push("M", Blockly.BlockSvg.DISTANCE_45_INSIDE + "," + (n - Blockly.BlockSvg.DISTANCE_45_INSIDE)), t.push("A", Blockly.BlockSvg.CORNER_RADIUS - 1 + "," + (Blockly.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 1," + (n - Blockly.BlockSvg.CORNER_RADIUS))))
}, Blockly.BlockSvg.prototype.renderDrawLeft_ = function(e, t, o) {
    this.outputConnection ? (this.outputConnection.moveTo(o.x, o.y), e.push("V", Blockly.BlockSvg.TAB_HEIGHT), e.push("c 0,-10 -" + Blockly.BlockSvg.TAB_WIDTH + ",8 -" + Blockly.BlockSvg.TAB_WIDTH + ",-7.5 s " + Blockly.BlockSvg.TAB_WIDTH + ",2.5 " + Blockly.BlockSvg.TAB_WIDTH + ",-7.5"), this.RTL ? (t.push("M", -.3 * Blockly.BlockSvg.TAB_WIDTH + ",8.9"), t.push("l", -.45 * Blockly.BlockSvg.TAB_WIDTH + ",-2.1")) : (t.push("V", Blockly.BlockSvg.TAB_HEIGHT - 1), t.push("m", -.92 * Blockly.BlockSvg.TAB_WIDTH + ",-1 q " + -.19 * Blockly.BlockSvg.TAB_WIDTH + ",-5.5 0,-11"), t.push("m", .92 * Blockly.BlockSvg.TAB_WIDTH + ",1 V 1 H 2")), this.width += Blockly.BlockSvg.TAB_WIDTH) : this.RTL || (this.squareTopLeftCorner_ ? t.push("V", 1) : t.push("V", Blockly.BlockSvg.CORNER_RADIUS)), e.push("z")
}, Blockly.Msg = {}, goog.getMsgOrig = goog.getMsg, goog.getMsg = function(e, t) {
    var o = goog.getMsg.blocklyMsgMap[e];
    return o && (e = Blockly.Msg[o]), goog.getMsgOrig(e, t)
}, goog.getMsg.blocklyMsgMap = {
    Today: "TODAY"
}, Blockly.FieldTextInput = function(e, t) {
    Blockly.FieldTextInput.superClass_.constructor.call(this, e), this.changeHandler_ = t
}, goog.inherits(Blockly.FieldTextInput, Blockly.Field), Blockly.FieldTextInput.prototype.clone = function() {
    return new Blockly.FieldTextInput(this.getText(), this.changeHandler_)
}, Blockly.FieldTextInput.prototype.CURSOR = "text", Blockly.FieldTextInput.prototype.spellcheck_ = !0, Blockly.FieldTextInput.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldTextInput.superClass_.dispose.call(this)
}, Blockly.FieldTextInput.prototype.setText = function(e) {
    if (null !== e) {
        if (this.sourceBlock_ && this.changeHandler_) {
            var t = this.changeHandler_(e);
            null !== t && void 0 !== t && (e = t)
        }
        Blockly.Field.prototype.setText.call(this, e)
    }
}, Blockly.FieldTextInput.prototype.setSpellcheck = function(e) {
    this.spellcheck_ = e
}, Blockly.FieldTextInput.prototype.showEditor_ = function(e) {
    var t = e || !1;
    if (!t && (goog.userAgent.MOBILE || goog.userAgent.ANDROID || goog.userAgent.IPAD)) e = window.prompt(Blockly.Msg.CHANGE_VALUE_TITLE, this.text_), this.sourceBlock_ && this.changeHandler_ && (t = this.changeHandler_(e), void 0 !== t && (e = t)), null !== e && this.setText(e);
    else {
        Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, this.widgetDispose_());
        var o = Blockly.WidgetDiv.DIV;
        e = goog.dom.createDom("input", "blocklyHtmlInput"), e.setAttribute("spellcheck", this.spellcheck_), Blockly.FieldTextInput.htmlInput_ = e, o.appendChild(e), e.value = e.defaultValue = this.text_, e.oldValue_ = null, this.validate_(), this.resizeEditor_(), t || (e.focus(), e.select()), e.onKeyDownWrapper_ = Blockly.bindEvent_(e, "keydown", this, this.onHtmlInputKeyDown_), e.onKeyUpWrapper_ = Blockly.bindEvent_(e, "keyup", this, this.onHtmlInputChange_), e.onKeyPressWrapper_ = Blockly.bindEvent_(e, "keypress", this, this.onHtmlInputChange_), t = this.sourceBlock_.workspace.getCanvas(), e.onWorkspaceChangeWrapper_ = Blockly.bindEvent_(t, "blocklyWorkspaceChange", this, this.resizeEditor_)
    }
}, Blockly.FieldTextInput.prototype.onHtmlInputKeyDown_ = function(e) {
    var t = Blockly.FieldTextInput.htmlInput_;
    13 == e.keyCode ? Blockly.WidgetDiv.hide() : 27 == e.keyCode && (this.setText(t.defaultValue), Blockly.WidgetDiv.hide())
}, Blockly.FieldTextInput.prototype.onHtmlInputChange_ = function(e) {
    var t = Blockly.FieldTextInput.htmlInput_;
    27 != e.keyCode && (e = t.value, e !== t.oldValue_ ? (t.oldValue_ = e, this.setText(e), this.validate_()) : goog.userAgent.WEBKIT && this.sourceBlock_.render())
}, Blockly.FieldTextInput.prototype.validate_ = function() {
    var e = !0;
    goog.asserts.assertObject(Blockly.FieldTextInput.htmlInput_);
    var t = Blockly.FieldTextInput.htmlInput_;
    this.sourceBlock_ && this.changeHandler_ && (e = this.changeHandler_(t.value)), null === e ? Blockly.addClass_(t, "blocklyInvalidInput") : Blockly.removeClass_(t, "blocklyInvalidInput")
}, Blockly.FieldTextInput.prototype.resizeEditor_ = function() {
    var e = Blockly.WidgetDiv.DIV,
        t = this.fieldGroup_.getBBox();
    if (e.style.width = t.width + "px", t = this.getAbsoluteXY_(), this.sourceBlock_.RTL) {
        var o = this.borderRect_.getBBox();
        t.x += o.width, t.x -= e.offsetWidth
    }
    t.y += 1, goog.userAgent.WEBKIT && (t.y -= 3), e.style.left = t.x + "px", e.style.top = t.y + "px"
}, Blockly.FieldTextInput.prototype.widgetDispose_ = function() {
    var e = this;
    return function() {
        var t = Blockly.FieldTextInput.htmlInput_,
            o = t.value;
        e.sourceBlock_ && e.changeHandler_ && (o = e.changeHandler_(o), null === o && (o = t.defaultValue)), e.setText(o), e.sourceBlock_.rendered && e.sourceBlock_.render(), Blockly.unbindEvent_(t.onKeyDownWrapper_), Blockly.unbindEvent_(t.onKeyUpWrapper_), Blockly.unbindEvent_(t.onKeyPressWrapper_), Blockly.unbindEvent_(t.onWorkspaceChangeWrapper_), Blockly.FieldTextInput.htmlInput_ = null, Blockly.WidgetDiv.DIV.style.width = "auto"
    }
}, Blockly.FieldTextInput.numberValidator = function(e) {
    return null === e ? null : (e = e.replace(/O/gi, "0"), e = e.replace(/,/g, ""), e = parseFloat(e || 0), isNaN(e) ? null : String(e))
}, Blockly.FieldTextInput.nonnegativeIntegerValidator = function(e) {
    return (e = Blockly.FieldTextInput.numberValidator(e)) && (e = String(Math.max(0, Math.floor(e)))), e
}, Blockly.FieldAngle = function(e, t) {
    var o;
    if (t) {
        var n = this;
        o = function(e) {
            return e = Blockly.FieldAngle.angleValidator.call(n, e), null !== e && t.call(n, e), e
        }
    } else o = Blockly.FieldAngle.angleValidator;
    this.symbol_ = Blockly.createSvgElement("tspan", {}, null), this.symbol_.appendChild(document.createTextNode("°")), Blockly.FieldAngle.superClass_.constructor.call(this, e, o)
}, goog.inherits(Blockly.FieldAngle, Blockly.FieldTextInput), Blockly.FieldAngle.prototype.clone = function() {
    return new Blockly.FieldAngle(this.getText(), this.changeHandler_)
}, Blockly.FieldAngle.ROUND = 15, Blockly.FieldAngle.HALF = 50, Blockly.FieldAngle.RADIUS = Blockly.FieldAngle.HALF - 1, Blockly.FieldAngle.prototype.dispose_ = function() {
    var e = this;
    return function() {
        Blockly.FieldAngle.superClass_.dispose_.call(e)(), e.gauge_ = null, e.clickWrapper_ && Blockly.unbindEvent_(e.clickWrapper_), e.moveWrapper1_ && Blockly.unbindEvent_(e.moveWrapper1_), e.moveWrapper2_ && Blockly.unbindEvent_(e.moveWrapper2_)
    }
}, Blockly.FieldAngle.prototype.showEditor_ = function() {
    Blockly.FieldAngle.superClass_.showEditor_.call(this, goog.userAgent.MOBILE || goog.userAgent.ANDROID || goog.userAgent.IPAD);
    var e = Blockly.WidgetDiv.DIV;
    if (e.firstChild) {
        var e = Blockly.createSvgElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: 2 * Blockly.FieldAngle.HALF + "px",
                width: 2 * Blockly.FieldAngle.HALF + "px"
            }, e),
            t = Blockly.createSvgElement("circle", {
                cx: Blockly.FieldAngle.HALF,
                cy: Blockly.FieldAngle.HALF,
                r: Blockly.FieldAngle.RADIUS,
                "class": "blocklyAngleCircle"
            }, e);
        this.gauge_ = Blockly.createSvgElement("path", {
            "class": "blocklyAngleGauge"
        }, e), this.line_ = Blockly.createSvgElement("line", {
            x1: Blockly.FieldAngle.HALF,
            y1: Blockly.FieldAngle.HALF,
            "class": "blocklyAngleLine"
        }, e);
        for (var o = 0; 360 > o; o += 15) Blockly.createSvgElement("line", {
            x1: Blockly.FieldAngle.HALF + Blockly.FieldAngle.RADIUS,
            y1: Blockly.FieldAngle.HALF,
            x2: Blockly.FieldAngle.HALF + Blockly.FieldAngle.RADIUS - (0 == o % 45 ? 10 : 5),
            y2: Blockly.FieldAngle.HALF,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + o + ", " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF + ")"
        }, e);
        e.style.marginLeft = "-35px", this.clickWrapper_ = Blockly.bindEvent_(e, "click", this, Blockly.WidgetDiv.hide), this.moveWrapper1_ = Blockly.bindEvent_(t, "mousemove", this, this.onMouseMove), this.moveWrapper2_ = Blockly.bindEvent_(this.gauge_, "mousemove", this, this.onMouseMove), this.updateGraph_()
    }
}, Blockly.FieldAngle.prototype.onMouseMove = function(e) {
    var t = this.gauge_.ownerSVGElement.getBoundingClientRect(),
        o = e.clientX - t.left - Blockly.FieldAngle.HALF;
    e = e.clientY - t.top - Blockly.FieldAngle.HALF, t = Math.atan(-e / o), isNaN(t) || (t = goog.math.toDegrees(t), 0 > o ? t += 180 : e > 0 && (t += 360), Blockly.FieldAngle.ROUND && (t = Math.round(t / Blockly.FieldAngle.ROUND) * Blockly.FieldAngle.ROUND), t >= 360 && (t -= 360), t = String(t), Blockly.FieldTextInput.htmlInput_.value = t, this.setText(t))
}, Blockly.FieldAngle.prototype.setText = function(e) {
    Blockly.FieldAngle.superClass_.setText.call(this, e), this.textElement_ && (this.updateGraph_(), this.sourceBlock_.RTL ? this.textElement_.insertBefore(this.symbol_, this.textElement_.firstChild) : this.textElement_.appendChild(this.symbol_), this.size_.width = 0)
}, Blockly.FieldAngle.prototype.updateGraph_ = function() {
    if (this.gauge_) {
        var e = goog.math.toRadians(Number(this.getText()));
        if (isNaN(e)) this.gauge_.setAttribute("d", "M " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF), this.line_.setAttribute("x2", Blockly.FieldAngle.HALF), this.line_.setAttribute("y2", Blockly.FieldAngle.HALF);
        else {
            var t = Blockly.FieldAngle.HALF + Math.cos(e) * Blockly.FieldAngle.RADIUS,
                o = Blockly.FieldAngle.HALF + Math.sin(e) * -Blockly.FieldAngle.RADIUS;
            this.gauge_.setAttribute("d", "M " + Blockly.FieldAngle.HALF + ", " + Blockly.FieldAngle.HALF + " h " + Blockly.FieldAngle.RADIUS + " A " + Blockly.FieldAngle.RADIUS + "," + Blockly.FieldAngle.RADIUS + " 0 " + (e > Math.PI ? 1 : 0) + " 0 " + t + "," + o + " z"), this.line_.setAttribute("x2", t), this.line_.setAttribute("y2", o)
        }
    }
}, Blockly.FieldAngle.angleValidator = function(e) {
    return e = Blockly.FieldTextInput.numberValidator(e), null !== e && (e %= 360, 0 > e && (e += 360), e = String(e)), e
}, Blockly.FieldCheckbox = function(e, t) {
    Blockly.FieldCheckbox.superClass_.constructor.call(this, ""), this.changeHandler_ = t, this.setValue(e)
}, goog.inherits(Blockly.FieldCheckbox, Blockly.Field), Blockly.FieldCheckbox.prototype.clone = function() {
    return new Blockly.FieldCheckbox(this.getValue(), this.changeHandler_)
}, Blockly.FieldCheckbox.prototype.CURSOR = "default", Blockly.FieldCheckbox.prototype.init = function(e) {
    this.sourceBlock_ || (Blockly.FieldCheckbox.superClass_.init.call(this, e), this.checkElement_ = Blockly.createSvgElement("text", {
        "class": "blocklyText",
        x: -3
    }, this.fieldGroup_), e = document.createTextNode("✓"), this.checkElement_.appendChild(e), this.checkElement_.style.display = this.state_ ? "block" : "none")
}, Blockly.FieldCheckbox.prototype.getValue = function() {
    return String(this.state_).toUpperCase()
}, Blockly.FieldCheckbox.prototype.setValue = function(e) {
    e = "TRUE" == e, this.state_ !== e && (this.state_ = e, this.checkElement_ && (this.checkElement_.style.display = e ? "block" : "none"), this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.workspace.fireChangeEvent())
}, Blockly.FieldCheckbox.prototype.showEditor_ = function() {
    var e = !this.state_;
    if (this.sourceBlock_ && this.changeHandler_) {
        var t = this.changeHandler_(e);
        void 0 !== t && (e = t)
    }
    null !== e && this.setValue(String(e).toUpperCase())
}, Blockly.FieldColour = function(e, t) {
    Blockly.FieldColour.superClass_.constructor.call(this, "   "), this.changeHandler_ = t, this.setValue(e), this.colours_ = null, this.columns_ = 0
}, goog.inherits(Blockly.FieldColour, Blockly.Field), Blockly.FieldColour.prototype.init = function(e) {
    Blockly.FieldColour.superClass_.init.call(this, e), this.borderRect_.style.fillOpacity = 1, this.setValue(this.getValue())
}, Blockly.FieldColour.prototype.clone = function() {
    return new Blockly.FieldColour(this.getValue(), this.changeHandler_)
}, Blockly.FieldColour.prototype.CURSOR = "default", Blockly.FieldColour.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldColour.superClass_.dispose.call(this)
}, Blockly.FieldColour.prototype.getValue = function() {
    return this.colour_
}, Blockly.FieldColour.prototype.setValue = function(e) {
    this.colour_ = e, this.borderRect_ && (this.borderRect_.style.fill = e), this.sourceBlock_ && this.sourceBlock_.rendered && (Blockly.Realtime.blockChanged(this.sourceBlock_), this.sourceBlock_.workspace.fireChangeEvent())
}, Blockly.FieldColour.prototype.getText = function() {
    var e = this.colour_,
        t = e.match(/^#(.)\1(.)\2(.)\3$/);
    return t && (e = "#" + t[1] + t[2] + t[3]), e
}, Blockly.FieldColour.COLOURS = goog.ui.ColorPicker.SIMPLE_GRID_COLORS, Blockly.FieldColour.COLUMNS = 7, Blockly.FieldColour.prototype.setColours = function(e) {
    return this.colours_ = e, this
}, Blockly.FieldColour.prototype.setColumns = function(e) {
    return this.columns_ = e, this
}, Blockly.FieldColour.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, Blockly.FieldColour.widgetDispose_);
    var e = new goog.ui.ColorPicker;
    e.setSize(this.columns_ || Blockly.FieldColour.COLUMNS), e.setColors(this.colours_ || Blockly.FieldColour.COLOURS);
    var t = goog.dom.getViewportSize(),
        o = goog.style.getViewportPageOffset(document),
        n = this.getAbsoluteXY_(),
        i = this.borderRect_.getBBox();
    e.render(Blockly.WidgetDiv.DIV), e.setSelectedColor(this.getValue());
    var r = goog.style.getSize(e.getElement());
    n.y = n.y + r.height + i.height >= t.height + o.y ? n.y - (r.height - 1) : n.y + (i.height - 1), this.sourceBlock_.RTL ? (n.x += i.width, n.x -= r.width, n.x < o.x && (n.x = o.x)) : n.x > t.width + o.x - r.width && (n.x = t.width + o.x - r.width), Blockly.WidgetDiv.position(n.x, n.y, t, o, this.sourceBlock_.RTL);
    var s = this;
    Blockly.FieldColour.changeEventKey_ = goog.events.listen(e, goog.ui.ColorPicker.EventType.CHANGE, function(e) {
        if (e = e.target.getSelectedColor() || "#000000", Blockly.WidgetDiv.hide(), s.sourceBlock_ && s.changeHandler_) {
            var t = s.changeHandler_(e);
            void 0 !== t && (e = t)
        }
        null !== e && s.setValue(e)
    })
}, Blockly.FieldColour.widgetDispose_ = function() {
    Blockly.FieldColour.changeEventKey_ && goog.events.unlistenByKey(Blockly.FieldColour.changeEventKey_)
}, Blockly.FieldDropdown = function(e, t) {
    this.menuGenerator_ = e, this.changeHandler_ = t, this.trimOptions_();
    var o = this.getOptions_()[0];
    this.value_ = o[1], Blockly.FieldDropdown.superClass_.constructor.call(this, o[0])
}, goog.inherits(Blockly.FieldDropdown, Blockly.Field), Blockly.FieldDropdown.CHECKMARK_OVERHANG = 25, Blockly.FieldDropdown.ARROW_CHAR = goog.userAgent.ANDROID ? "▼" : "▾", Blockly.FieldDropdown.prototype.clone = function() {
    return new Blockly.FieldDropdown(this.menuGenerator_, this.changeHandler_)
}, Blockly.FieldDropdown.prototype.CURSOR = "default", Blockly.FieldDropdown.prototype.init = function(e) {
    this.sourceBlock_ || (this.arrow_ = Blockly.createSvgElement("tspan", {}, null), this.arrow_.appendChild(document.createTextNode(e.RTL ? Blockly.FieldDropdown.ARROW_CHAR + " " : " " + Blockly.FieldDropdown.ARROW_CHAR)), Blockly.FieldDropdown.superClass_.init.call(this, e), e = this.text_, this.text_ = null, this.setText(e))
}, Blockly.FieldDropdown.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, null);
    for (var e = this, t = new goog.ui.Menu, o = this.getOptions_(), n = 0; n < o.length; n++) {
        var i = o[n][1],
            r = new goog.ui.MenuItem(o[n][0]);
        r.setValue(i), r.setCheckable(!0), t.addChild(r, !0), r.setChecked(i == this.value_)
    }
    goog.events.listen(t, goog.ui.Component.EventType.ACTION, function(t) {
        if (t = t.target) {
            if (t = t.getValue(), e.sourceBlock_ && e.changeHandler_) {
                var o = e.changeHandler_(t);
                void 0 !== o && (t = o)
            }
            null !== t && e.setValue(t)
        }
        Blockly.WidgetDiv.hideIfOwner(e)
    }), t.getHandler().listen(t.getElement(), goog.events.EventType.TOUCHSTART, function(e) {
        this.getOwnerControl(e.target).handleMouseDown(e)
    }), t.getHandler().listen(t.getElement(), goog.events.EventType.TOUCHEND, function(e) {
        this.getOwnerControl(e.target).performActionInternal(e)
    }), o = goog.dom.getViewportSize(), n = goog.style.getViewportPageOffset(document), i = this.getAbsoluteXY_(), r = this.borderRect_.getBBox(), t.render(Blockly.WidgetDiv.DIV);
    var s = t.getElement();
    Blockly.addClass_(s, "blocklyDropdownMenu");
    var l = goog.style.getSize(s);
    i.y = i.y + l.height + r.height >= o.height + n.y ? i.y - l.height : i.y + r.height, this.sourceBlock_.RTL ? (i.x += r.width, i.x += Blockly.FieldDropdown.CHECKMARK_OVERHANG, i.x < n.x + l.width && (i.x = n.x + l.width)) : (i.x -= Blockly.FieldDropdown.CHECKMARK_OVERHANG, i.x > o.width + n.x - l.width && (i.x = o.width + n.x - l.width)), Blockly.WidgetDiv.position(i.x, i.y, o, n, this.sourceBlock_.RTL), t.setAllowAutoFocus(!0), s.focus()
}, Blockly.FieldDropdown.prototype.trimOptions_ = function() {
    this.suffixField = this.prefixField = null;
    var e = this.menuGenerator_;
    if (goog.isArray(e) && !(2 > e.length)) {
        var t = e.map(function(e) {
                return e[0]
            }),
            o = Blockly.shortestStringLength(t),
            n = Blockly.commonWordPrefix(t, o),
            i = Blockly.commonWordSuffix(t, o);
        if ((n || i) && !(n + i >= o)) {
            for (n && (this.prefixField = t[0].substring(0, n - 1)), i && (this.suffixField = t[0].substr(1 - i)), t = [], o = 0; o < e.length; o++) {
                var r = e[o][0],
                    s = e[o][1],
                    r = r.substring(n, r.length - i);
                t[o] = [r, s]
            }
            this.menuGenerator_ = t
        }
    }
}, Blockly.FieldDropdown.prototype.getOptions_ = function() {
    return goog.isFunction(this.menuGenerator_) ? this.menuGenerator_.call(this) : this.menuGenerator_
}, Blockly.FieldDropdown.prototype.getValue = function() {
    return this.value_
}, Blockly.FieldDropdown.prototype.setValue = function(e) {
    this.value_ = e;
    for (var t = this.getOptions_(), o = 0; o < t.length; o++)
        if (t[o][1] == e) return this.setText(t[o][0]), void 0;
    this.setText(e)
}, Blockly.FieldDropdown.prototype.setText = function(e) {
    this.sourceBlock_ && this.arrow_ && (this.arrow_.style.fill = Blockly.makeColour(this.sourceBlock_.getColour())), null !== e && e !== this.text_ && (this.text_ = e, this.updateTextNode_(), this.textElement_ && (this.sourceBlock_.RTL ? this.textElement_.insertBefore(this.arrow_, this.textElement_.firstChild) : this.textElement_.appendChild(this.arrow_)), this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(), this.sourceBlock_.bumpNeighbours_(), this.sourceBlock_.workspace.fireChangeEvent()))
}, Blockly.FieldDropdown.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this), Blockly.FieldDropdown.superClass_.dispose.call(this)
}, Blockly.FieldImage = function(e, t, o, n) {
    this.sourceBlock_ = null, this.height_ = Number(o), this.width_ = Number(t), this.size_ = {
        height: this.height_ + 10,
        width: this.width_
    }, this.text_ = n || "", this.setValue(e)
}, goog.inherits(Blockly.FieldImage, Blockly.Field), Blockly.FieldImage.prototype.clone = function() {
    return new Blockly.FieldImage(this.getSrc(), this.width_, this.height_, this.getText())
}, Blockly.FieldImage.prototype.rectElement_ = null, Blockly.FieldImage.prototype.EDITABLE = !1, Blockly.FieldImage.prototype.init = function(e) {
    if (!this.sourceBlock_) {
        this.sourceBlock_ = e;
        var t = 6 - Blockly.BlockSvg.FIELD_HEIGHT;
        this.fieldGroup_ = Blockly.createSvgElement("g", {}, null), this.imageElement_ = Blockly.createSvgElement("image", {
            height: this.height_ + "px",
            width: this.width_ + "px",
            y: t
        }, this.fieldGroup_), this.setValue(this.src_), goog.userAgent.GECKO && (this.rectElement_ = Blockly.createSvgElement("rect", {
            height: this.height_ + "px",
            width: this.width_ + "px",
            y: t,
            "fill-opacity": 0
        }, this.fieldGroup_)), e.getSvgRoot().appendChild(this.fieldGroup_), e = this.rectElement_ || this.imageElement_, e.tooltip = this.sourceBlock_, Blockly.Tooltip.bindMouseEvents(e)
    }
}, Blockly.FieldImage.prototype.dispose = function() {
    goog.dom.removeNode(this.fieldGroup_), this.rectElement_ = this.imageElement_ = this.fieldGroup_ = null
}, Blockly.FieldImage.prototype.setTooltip = function(e) {
    (this.rectElement_ || this.imageElement_).tooltip = e
}, Blockly.FieldImage.prototype.getValue = function() {
    return this.src_
}, Blockly.FieldImage.prototype.setValue = function(e) {
    null !== e && (this.src_ = e, this.imageElement_ && this.imageElement_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", goog.isString(e) ? e : ""))
}, Blockly.FieldImage.prototype.setText = function(e) {
    null !== e && (this.text_ = e)
}, Blockly.FieldImage.prototype.render_ = function() {}, Blockly.Variables = {}, Blockly.Variables.NAME_TYPE = "VARIABLE", Blockly.Variables.allVariables = function(e) {
    var t;
    if (e.getDescendants) t = e.getDescendants();
    else {
        if (!e.getAllBlocks) throw "Not Block or Workspace: " + e;
        t = e.getAllBlocks()
    }
    e = Object.create(null);
    for (var o = 0; o < t.length; o++) {
        var n = t[o].getVars;
        if (n)
            for (var n = n.call(t[o]), i = 0; i < n.length; i++) {
                var r = n[i];
                r && (e[r.toLowerCase()] = r)
            }
    }
    t = [];
    for (var s in e) t.push(e[s]);
    return t
}, Blockly.Variables.renameVariable = function(e, t, o) {
    o = o.getAllBlocks();
    for (var n = 0; n < o.length; n++) {
        var i = o[n].renameVar;
        i && i.call(o[n], e, t)
    }
}, Blockly.Variables.flyoutCategory = function(e, t, o, n) {
    var i = Blockly.Variables.allVariables(n.targetWorkspace);
    i.sort(goog.string.caseInsensitiveCompare), i.unshift(null);
    for (var r = void 0, s = 0; s < i.length; s++)
        if (i[s] !== r) {
            var l = Blockly.Blocks.variables_get ? Blockly.Block.obtain(n, "variables_get") : null;
            l && l.initSvg();
            var a = Blockly.Blocks.variables_set ? Blockly.Block.obtain(n, "variables_set") : null;
            a && a.initSvg(), null === i[s] ? r = (l || a).getVars()[0] : (l && l.setFieldValue(i[s], "VAR"), a && a.setFieldValue(i[s], "VAR")), a && e.push(a), l && e.push(l), l && a ? t.push(o, 3 * o) : t.push(2 * o)
        }
}, Blockly.Variables.generateUniqueName = function(e) {
    e = Blockly.Variables.allVariables(e);
    var t = "";
    if (e.length)
        for (var o = 1, n = 0, i = "ijkmnopqrstuvwxyzabcdefgh".charAt(n); !t;) {
            for (var r = !1, s = 0; s < e.length; s++)
                if (e[s].toLowerCase() == i) {
                    r = !0;
                    break
                }
            r ? (n++, 25 == n && (n = 0, o++), i = "ijkmnopqrstuvwxyzabcdefgh".charAt(n), o > 1 && (i += o)) : t = i
        } else t = "i";
    return t
}, Blockly.FieldVariable = function(e, t) {
    var o;
    if (t) {
        var n = this;
        o = function(e) {
            var o = Blockly.FieldVariable.dropdownChange.call(n, e);
            return e = void 0 === o ? e : null === o ? n.getValue() : o, t.call(n, e), o
        }
    } else o = Blockly.FieldVariable.dropdownChange;
    Blockly.FieldVariable.superClass_.constructor.call(this, Blockly.FieldVariable.dropdownCreate, o), this.setValue(e || "")
}, goog.inherits(Blockly.FieldVariable, Blockly.FieldDropdown), Blockly.FieldVariable.prototype.init = function(e) {
    this.sourceBlock_ || (this.getValue() || this.setValue(Blockly.Variables.generateUniqueName(e.isInFlyout ? e.workspace.targetWorkspace : e.workspace)), Blockly.FieldVariable.superClass_.init.call(this, e))
}, Blockly.FieldVariable.prototype.clone = function() {
    return new Blockly.FieldVariable(this.getValue(), this.changeHandler_)
}, Blockly.FieldVariable.prototype.getValue = function() {
    return this.getText()
}, Blockly.FieldVariable.prototype.setValue = function(e) {
    this.value_ = e, this.setText(e)
}, Blockly.FieldVariable.dropdownCreate = function() {
    var e = this.sourceBlock_ && this.sourceBlock_.workspace ? Blockly.Variables.allVariables(this.sourceBlock_.workspace) : [],
        t = this.getText();
    t && -1 == e.indexOf(t) && e.push(t), e.sort(goog.string.caseInsensitiveCompare), e.push(Blockly.Msg.RENAME_VARIABLE), e.push(Blockly.Msg.NEW_VARIABLE);
    for (var t = [], o = 0; o < e.length; o++) t[o] = [e[o], e[o]];
    return t
}, Blockly.FieldVariable.dropdownChange = function(e) {
    function t(e, t) {
        Blockly.hideChaff();
        var o = window.prompt(e, t);
        return o && (o = o.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), o == Blockly.Msg.RENAME_VARIABLE || o == Blockly.Msg.NEW_VARIABLE) && (o = null), o
    }
    var o = this.sourceBlock_.workspace;
    if (e == Blockly.Msg.RENAME_VARIABLE) {
        var n = this.getText();
        return (e = t(Blockly.Msg.RENAME_VARIABLE_TITLE.replace("%1", n), n)) && Blockly.Variables.renameVariable(n, e, o), null
    }
    return e == Blockly.Msg.NEW_VARIABLE ? (e = t(Blockly.Msg.NEW_VARIABLE_TITLE, "")) ? (Blockly.Variables.renameVariable(e, e, o), e) : null : void 0
}, Blockly.Generator = function(e) {
    this.name_ = e, this.RESERVED_WORDS_ = "", this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ = new RegExp(this.FUNCTION_NAME_PLACEHOLDER_, "g")
}, Blockly.Generator.NAME_TYPE = "generated_function", Blockly.Generator.prototype.INFINITE_LOOP_TRAP = null, Blockly.Generator.prototype.STATEMENT_PREFIX = null, Blockly.Generator.prototype.workspaceToCode = function(e) {
    e || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), e = Blockly.getMainWorkspace());
    var t = [];
    this.init(e), e = e.getTopBlocks(!0);
    for (var o, n = 0; o = e[n]; n++) {
        var i = this.blockToCode(o);
        goog.isArray(i) && (i = i[0]), i && (o.outputConnection && this.scrubNakedValue && (i = this.scrubNakedValue(i)), t.push(i))
    }
    return t = t.join("\n"), t = this.finish(t), t = t.replace(/^\s+\n/, ""), t = t.replace(/\n\s+$/, "\n"), t = t.replace(/[ \t]+\n/g, "\n")
}, Blockly.Generator.prototype.prefixLines = function(e, t) {
    return t + e.replace(/\n(.)/g, "\n" + t + "$1")
}, Blockly.Generator.prototype.allNestedComments = function(e) {
    var t = [];
    e = e.getDescendants();
    for (var o = 0; o < e.length; o++) {
        var n = e[o].getCommentText();
        n && t.push(n)
    }
    return t.length && t.push(""), t.join("\n")
}, Blockly.Generator.prototype.blockToCode = function(e) {
    if (!e) return "";
    if (e.disabled) return this.blockToCode(e.getNextBlock());
    var t = this[e.type];
    if (!t) throw 'Language "' + this.name_ + '" does not know how to generate code for block type "' + e.type + '".';
    if (t = t.call(e, e), goog.isArray(t)) return [this.scrub_(e, t[0]), t[1]];
    if (goog.isString(t)) return this.STATEMENT_PREFIX && (t = this.STATEMENT_PREFIX.replace(/%1/g, "'" + e.id + "'") + t), this.scrub_(e, t);
    if (null === t) return "";
    throw "Invalid code generated: " + t
}, Blockly.Generator.prototype.valueToCode = function(e, t, o) {
    if (isNaN(o)) throw 'Expecting valid order from block "' + e.type + '".';
    if (e = e.getInputTargetBlock(t), !e) return "";
    var n = this.blockToCode(e);
    if ("" === n) return "";
    if (!goog.isArray(n)) throw 'Expecting tuple from value block "' + e.type + '".';
    if (t = n[0], n = n[1], isNaN(n)) throw 'Expecting valid order from value block "' + e.type + '".';
    return t && n >= o && (o != n || 0 != o && 99 != o) && (t = "(" + t + ")"), t
}, Blockly.Generator.prototype.statementToCode = function(e, t) {
    var o = e.getInputTargetBlock(t),
        n = this.blockToCode(o);
    if (!goog.isString(n)) throw 'Expecting code from statement block "' + o.type + '".';
    return n && (n = this.prefixLines(n, this.INDENT)), n
}, Blockly.Generator.prototype.addLoopTrap = function(e, t) {
    return this.INFINITE_LOOP_TRAP && (e = this.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + t + "'") + e), this.STATEMENT_PREFIX && (e += this.prefixLines(this.STATEMENT_PREFIX.replace(/%1/g, "'" + t + "'"), this.INDENT)), e
}, Blockly.Generator.prototype.INDENT = "  ", Blockly.Generator.prototype.addReservedWords = function(e) {
    this.RESERVED_WORDS_ += e + ","
}, Blockly.Generator.prototype.FUNCTION_NAME_PLACEHOLDER_ = "{leCUI8hutHZI4480Dc}", Blockly.Generator.prototype.provideFunction_ = function(e, t) {
    if (!this.definitions_[e]) {
        var o = this.variableDB_.getDistinctName(e, this.NAME_TYPE);
        this.functionNames_[e] = o, this.definitions_[e] = t.join("\n").replace(this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, o)
    }
    return this.functionNames_[e]
}, Blockly.Names = function(e) {
    if (this.reservedDict_ = Object.create(null), e) {
        e = e.split(",");
        for (var t = 0; t < e.length; t++) this.reservedDict_[e[t]] = !0
    }
    this.reset()
}, Blockly.Names.prototype.reset = function() {
    this.db_ = Object.create(null), this.dbReverse_ = Object.create(null)
}, Blockly.Names.prototype.getName = function(e, t) {
    var o = e.toLowerCase() + "_" + t;
    if (o in this.db_) return this.db_[o];
    var n = this.getDistinctName(e, t);
    return this.db_[o] = n
}, Blockly.Names.prototype.getDistinctName = function(e) {
    for (var t = this.safeName_(e), o = ""; this.dbReverse_[t + o] || t + o in this.reservedDict_;) o = o ? o + 1 : 2;
    return t += o, this.dbReverse_[t] = !0, t
}, Blockly.Names.prototype.safeName_ = function(e) {
    return e ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = "unnamed", e
}, Blockly.Names.equals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase()
}, Blockly.Procedures = {}, Blockly.Procedures.NAME_TYPE = "PROCEDURE", Blockly.Procedures.allProcedures = function(e) {
    e = e.getAllBlocks();
    for (var t = [], o = [], n = 0; n < e.length; n++) {
        var i = e[n].getProcedureDef;
        i && (i = i.call(e[n])) && (i[2] ? t.push(i) : o.push(i))
    }
    return o.sort(Blockly.Procedures.procTupleComparator_), t.sort(Blockly.Procedures.procTupleComparator_), [o, t]
}, Blockly.Procedures.procTupleComparator_ = function(e, t) {
    var o = e[0].toLowerCase(),
        n = t[0].toLowerCase();
    return o > n ? 1 : n > o ? -1 : 0
}, Blockly.Procedures.findLegalName = function(e, t) {
    if (t.isInFlyout) return e;
    for (; !Blockly.Procedures.isLegalName(e, t.workspace, t);) {
        var o = e.match(/^(.*?)(\d+)$/);
        e = o ? o[1] + (parseInt(o[2], 10) + 1) : e + "2"
    }
    return e
}, Blockly.Procedures.isLegalName = function(e, t, o) {
    t = t.getAllBlocks();
    for (var n = 0; n < t.length; n++)
        if (t[n] != o) {
            var i = t[n].getProcedureDef;
            if (i && (i = i.call(t[n]), Blockly.Names.equals(i[0], e))) return !1
        }
    return !0
}, Blockly.Procedures.rename = function(e) {
    e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""), e = Blockly.Procedures.findLegalName(e, this.sourceBlock_);
    for (var t = this.sourceBlock_.workspace.getAllBlocks(), o = 0; o < t.length; o++) {
        var n = t[o].renameProcedure;
        n && n.call(t[o], this.text_, e)
    }
    return e
}, Blockly.Procedures.flyoutCategory = function(e, t, o, n) {
    function i(i, r) {
        for (var s = 0; s < i.length; s++) {
            var l = Blockly.Block.obtain(n, r);
            l.setFieldValue(i[s][0], "NAME");
            for (var a = [], c = 0; c < i[s][1].length; c++) a[c] = "ARG" + c;
            l.setProcedureParameters(i[s][1], a), l.initSvg(), e.push(l), t.push(2 * o)
        }
    }
    if (Blockly.Blocks.procedures_defnoreturn) {
        var r = Blockly.Block.obtain(n, "procedures_defnoreturn");
        r.initSvg(), e.push(r), t.push(2 * o)
    }
    Blockly.Blocks.procedures_defreturn && (r = Blockly.Block.obtain(n, "procedures_defreturn"), r.initSvg(), e.push(r), t.push(2 * o)), Blockly.Blocks.procedures_ifreturn && (r = Blockly.Block.obtain(n, "procedures_ifreturn"), r.initSvg(), e.push(r), t.push(2 * o)), t.length && (t[t.length - 1] = 3 * o), r = Blockly.Procedures.allProcedures(n.targetWorkspace), i(r[0], "procedures_callnoreturn"), i(r[1], "procedures_callreturn")
}, Blockly.Procedures.getCallers = function(e, t) {
    for (var o = [], n = t.getAllBlocks(), i = 0; i < n.length; i++) {
        var r = n[i].getProcedureCall;
        r && (r = r.call(n[i])) && Blockly.Names.equals(r, e) && o.push(n[i])
    }
    return o
}, Blockly.Procedures.disposeCallers = function(e, t) {
    for (var o = Blockly.Procedures.getCallers(e, t), n = 0; n < o.length; n++) o[n].dispose(!0, !1)
}, Blockly.Procedures.mutateCallers = function(e, t, o, n) {
    for (e = Blockly.Procedures.getCallers(e, t), t = 0; t < e.length; t++) e[t].setProcedureParameters(o, n)
}, Blockly.Procedures.getDefinition = function(e, t) {
    for (var o = t.getAllBlocks(), n = 0; n < o.length; n++) {
        var i = o[n].getProcedureDef;
        if (i && (i = i.call(o[n])) && Blockly.Names.equals(i[0], e)) return o[n]
    }
    return null
};
var rtclient = {
    INSTALL_SCOPE: "https://www.googleapis.com/auth/drive.install",
    FILE_SCOPE: "https://www.googleapis.com/auth/drive.file",
    APPDATA_SCOPE: "https://www.googleapis.com/auth/drive.appdata",
    OPENID_SCOPE: "openid",
    REALTIME_MIMETYPE: "application/vnd.google-apps.drive-sdk",
    FOLDER_KEY: "folderId",
    getParams: function() {
        function e(e) {
            e = e.slice(1).split("&");
            for (var t = 0; t < e.length; t++) {
                var n = e[t].split("=");
                o[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
            }
        }
        var t = goog.global.location || {},
            o = {},
            n = t.hash;
        return n && e(n), (t = t.search) && e(t), o
    }
};
rtclient.params = rtclient.getParams(),
rtclient.getOption = function(e, t, o) {
    return e.hasOwnProperty(t) ? e[t] : (void 0 === o && console.error(t + " should be present in the options."), o)
}, rtclient.Authorizer = function(e) {
    this.clientId = rtclient.getOption(e, "clientId"), this.userId = rtclient.params.userId, this.authButton = document.getElementById(rtclient.getOption(e, "authButtonElementId")), this.authDiv = document.getElementById(rtclient.getOption(e, "authDivElementId"))
}, rtclient.Authorizer.prototype.start = function(e) {
    var t = this;
    gapi.load("auth:client,drive-realtime,drive-share", function() {
        t.authorize(e)
    })
}, rtclient.Authorizer.prototype.authorize = function(e) {
    var t = this.clientId,
        o = this.userId,
        n = this,
        i = function(t) {
            t && !t.error ? (n.authButton.disabled = !0, n.fetchUserId(e), n.authDiv.style.display = "none") : (n.authButton.disabled = !1, n.authButton.onclick = r, n.authDiv.style.display = "block")
        },
        r = function() {
            gapi.auth.authorize({
                client_id: t,
                scope: [rtclient.INSTALL_SCOPE, rtclient.FILE_SCOPE, rtclient.OPENID_SCOPE, rtclient.APPDATA_SCOPE],
                user_id: o,
                immediate: !1
            }, i)
        };
    gapi.auth.authorize({
        client_id: t,
        scope: [rtclient.INSTALL_SCOPE, rtclient.FILE_SCOPE, rtclient.OPENID_SCOPE, rtclient.APPDATA_SCOPE],
        user_id: o,
        immediate: !0
    }, i)
}, rtclient.Authorizer.prototype.fetchUserId = function(e) {
    var t = this;
    gapi.client.load("oauth2", "v2", function() {
        gapi.client.oauth2.userinfo.get().execute(function(o) {
            o.id && (t.userId = o.id), e && e()
        })
    })
}, rtclient.createRealtimeFile = function(e, t, o, n) {
    function i(o) {
        gapi.client.drive.files.insert({
            resource: {
                mimeType: t,
                title: e,
                parents: [{
                    id: o
                }]
            }
        }).execute(n)
    }

    function r() {
        function e(e) {
            gapi.client.drive.properties.insert({
                fileId: "appdata",
                resource: {
                    key: rtclient.FOLDER_KEY,
                    value: e
                }
            }).execute(function() {
                i(e)
            })
        }

        function t() {
            gapi.client.drive.files.insert({
                resource: {
                    mimeType: "application/vnd.google-apps.folder",
                    title: o
                }
            }).execute(function(t) {
                e(t.id)
            })
        }
        gapi.client.drive.properties.get({
            fileId: "appdata",
            propertyKey: rtclient.FOLDER_KEY
        }).execute(function(n) {
            if (n.error) o ? t() : e("root");
            else {
                var r = n.result.value;
                gapi.client.drive.files.get({
                    fileId: r
                }).execute(function(e) {
                    e.error || e.labels.trashed ? t() : i(r)
                })
            }
        })
    }
    gapi.client.load("drive", "v2", function() {
        r()
    })
}, rtclient.getFileMetadata = function(e, t) {
    gapi.client.load("drive", "v2", function() {
        gapi.client.drive.files.get({
            fileId: e
        }).execute(t)
    })
}, rtclient.parseState = function(e) {
    try {
        return JSON.parse(e)
    } catch (t) {
        return null
    }
}, rtclient.RealtimeLoader = function(e) {
    this.onFileLoaded = rtclient.getOption(e, "onFileLoaded"), this.newFileMimeType = rtclient.getOption(e, "newFileMimeType", rtclient.REALTIME_MIMETYPE), this.initializeModel = rtclient.getOption(e, "initializeModel"), this.registerTypes = rtclient.getOption(e, "registerTypes", function() {}), this.afterAuth = rtclient.getOption(e, "afterAuth", function() {}), this.autoCreate = rtclient.getOption(e, "autoCreate", !1), this.defaultTitle = rtclient.getOption(e, "defaultTitle", "New Realtime File"), this.defaultFolderTitle = rtclient.getOption(e, "defaultFolderTitle", ""), this.afterCreate = rtclient.getOption(e, "afterCreate", function() {}), this.authorizer = new rtclient.Authorizer(e)
}, rtclient.RealtimeLoader.prototype.redirectTo = function(e, t) {
    var o = [];
    e && o.push("fileIds=" + e.join(",")), t && o.push("userId=" + t), o = 0 == o.length ? window.location.pathname : window.location.pathname + "#" + o.join("&"), window.history && window.history.replaceState ? window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", o) : window.location.href = o, rtclient.params = rtclient.getParams();
    for (var n in e) gapi.drive.realtime.load(e[n], this.onFileLoaded, this.initializeModel, this.handleErrors)
}, rtclient.RealtimeLoader.prototype.start = function() {
    var e = this;
    this.authorizer.start(function() {
        e.registerTypes && e.registerTypes(), e.afterAuth && e.afterAuth(), e.load()
    })
}, rtclient.RealtimeLoader.prototype.handleErrors = function(e) {
    e.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED ? this.authorizer.authorize() : e.type == gapi.drive.realtime.ErrorType.CLIENT_ERROR ? (alert("An Error happened: " + e.message), window.location.href = "/") : e.type == gapi.drive.realtime.ErrorType.NOT_FOUND && (alert("The file was not found. It does not exist or you do not have read access to the file."), window.location.href = "/")
}, rtclient.RealtimeLoader.prototype.load = function() {
    var e = rtclient.params.fileIds;
    e && (e = e.split(","));
    var t = this.authorizer.userId,
        t = rtclient.params.state;
    if (e)
        for (var o in e) gapi.drive.realtime.load(e[o], this.onFileLoaded, this.initializeModel, this.handleErrors);
    else {
        if (t && (o = rtclient.parseState(t), "open" == o.action)) return e = o.ids, t = o.userId, this.redirectTo(e, t), void 0;
        this.autoCreate && this.createNewFileAndRedirect()
    }
}, rtclient.RealtimeLoader.prototype.createNewFileAndRedirect = function() {
    var e = this;
    rtclient.createRealtimeFile(this.defaultTitle, this.newFileMimeType, this.defaultFolderTitle, function(t) {
        t.id ? (e.afterCreate && e.afterCreate(t.id), e.redirectTo([t.id], e.authorizer.userId)) : (console.error("Error creating file."), console.error(t))
    })
}, Blockly.Realtime = {}, Blockly.Realtime.enabled_ = !1, Blockly.Realtime.document_ = null, Blockly.Realtime.model_ = null, Blockly.Realtime.sessionId_ = null, Blockly.Realtime.initUi_ = null, Blockly.Realtime.blocksMap_ = null, Blockly.Realtime.withinSync = !1, Blockly.Realtime.realtimeLoader_ = null, Blockly.Realtime.chatBoxElementId_ = null, Blockly.Realtime.chatBoxInitialText_ = null, Blockly.Realtime.withinUndo_ = !1, Blockly.Realtime.isEnabled = function() {
    return Blockly.Realtime.enabled_
}, Blockly.Realtime.undoElementId_ = null, Blockly.Realtime.redoElementId_ = null, Blockly.Realtime.PROGRESS_URL_ = "progress.gif", Blockly.Realtime.ANONYMOUS_URL_ = "anon.jpeg", Blockly.Realtime.initializeModel_ = function(e) {
    Blockly.Realtime.model_ = e;
    var t = e.createMap();
    e.getRoot().set("blocks", t), t = e.createList(), e.getRoot().set("topBlocks", t), Blockly.Realtime.chatBoxElementId_ && e.getRoot().set(Blockly.Realtime.chatBoxElementId_, e.createString(Blockly.Realtime.chatBoxInitialText_))
}, Blockly.Realtime.removeBlock = function(e) {
    Blockly.Realtime.blocksMap_["delete"](e.id.toString())
}, Blockly.Realtime.addTopBlock = function(e) {
    -1 == Blockly.Realtime.topBlocks_.indexOf(e) && Blockly.Realtime.topBlocks_.push(e)
}, Blockly.Realtime.removeTopBlock = function(e) {
    Blockly.Realtime.topBlocks_.removeValue(e)
}, Blockly.Realtime.obtainBlock = function(e, t) {
    return Blockly.Realtime.model_.create(Blockly.Block, e, t)
}, Blockly.Realtime.getBlockById = function(e) {
    return Blockly.Realtime.blocksMap_.get(e)
}, Blockly.Realtime.logEvent_ = function(e) {
    if (console.log("Object event:"), console.log("  id: " + e.target.id), console.log("  type: " + e.type), e = e.events)
        for (var t = e.length, o = 0; t > o; o++) {
            var n = e[o];
            console.log("  child event:"), console.log("    id: " + n.target.id), console.log("    type: " + n.type)
        }
}, Blockly.Realtime.onObjectChange_ = function(e) {
    var t = e.events;
    e = e.events.length;
    for (var o = 0; e > o; o++) {
        var n = t[o];
        if (!n.isLocal || Blockly.Realtime.withinUndo_) {
            var i = n.target;
            "value_changed" == n.type && ("xmlDom" == n.property ? Blockly.Realtime.doWithinSync_(function() {
                Blockly.Realtime.placeBlockOnWorkspace_(i, !1), Blockly.Realtime.moveBlock_(i)
            }) : "relativeX" != n.property && "relativeY" != n.property || Blockly.Realtime.doWithinSync_(function() {
                i.svg_ || Blockly.Realtime.placeBlockOnWorkspace_(i, !1), Blockly.Realtime.moveBlock_(i)
            }))
        }
    }
}, Blockly.Realtime.onBlocksMapChange_ = function(e) {
    if (!e.isLocal || Blockly.Realtime.withinUndo_) {
        var t = e.newValue;
        t ? Blockly.Realtime.placeBlockOnWorkspace_(t, !e.oldValue) : (t = e.oldValue, Blockly.Realtime.deleteBlock(t))
    }
}, Blockly.Realtime.doWithinSync_ = function(e) {
    if (Blockly.Realtime.withinSync) e();
    else try {
        Blockly.Realtime.withinSync = !0, e()
    } finally {
        Blockly.Realtime.withinSync = !1
    }
}, Blockly.Realtime.placeBlockOnWorkspace_ = function(e, t) {
    Blockly.Realtime.doWithinSync_(function() {
        var o = Blockly.Xml.textToDom(e.xmlDom).firstChild;
        (o = Blockly.Xml.domToBlock(Blockly.mainWorkspace, o, !0)) && (t && o.workspace.addTopBlock(o), (t || goog.array.contains(Blockly.Realtime.topBlocks_, o)) && Blockly.Realtime.moveBlock_(o))
    })
}, Blockly.Realtime.moveBlock_ = function(e) {
    if (!isNaN(e.relativeX) && !isNaN(e.relativeY)) {
        var t = Blockly.svgSize().width,
            o = e.getRelativeToSurfaceXY(),
            n = e.relativeX - o.x;
        e.moveBy(Blockly.RTL ? t - n : n, e.relativeY - o.y)
    }
}, Blockly.Realtime.deleteBlock = function(e) {
    Blockly.Realtime.doWithinSync_(function() {
        e.dispose(!0, !0, !0)
    })
}, Blockly.Realtime.loadBlocks_ = function() {
    for (var e = Blockly.Realtime.topBlocks_, t = 0; t < e.length; t++) {
        var o = e.get(t);
        Blockly.Realtime.placeBlockOnWorkspace_(o, !0)
    }
}, Blockly.Realtime.blockChanged = function(e) {
    if (e.workspace == Blockly.mainWorkspace && Blockly.Realtime.isEnabled() && !Blockly.Realtime.withinSync) {
        e = e.getRootBlock();
        var t = e.getRelativeToSurfaceXY(),
            o = !1,
            n = Blockly.Xml.blockToDom_(e);
        n.setAttribute("id", e.id);
        var i = goog.dom.createDom("xml");
        i.appendChild(n), n = Blockly.Xml.domToText(i), n != e.xmlDom && (o = !0, e.xmlDom = n), (e.relativeX != t.x || e.relativeY != t.y) && (e.relativeX = t.x, e.relativeY = t.y, o = !0), o && Blockly.Realtime.blocksMap_.set(e.id.toString(), e)
    }
}, Blockly.Realtime.onFileLoaded_ = function(e) {
    Blockly.Realtime.document_ = e, Blockly.Realtime.sessionId_ = Blockly.Realtime.getSessionId_(e), Blockly.Realtime.model_ = e.getModel(), Blockly.Realtime.blocksMap_ = Blockly.Realtime.model_.getRoot().get("blocks"), Blockly.Realtime.topBlocks_ = Blockly.Realtime.model_.getRoot().get("topBlocks"), Blockly.Realtime.model_.getRoot().addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, Blockly.Realtime.onObjectChange_), Blockly.Realtime.blocksMap_.addEventListener(gapi.drive.realtime.EventType.VALUE_CHANGED, Blockly.Realtime.onBlocksMapChange_), Blockly.Realtime.initUi_(), e.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED, Blockly.Realtime.onCollaboratorJoined_), e.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_LEFT, Blockly.Realtime.onCollaboratorLeft_), Blockly.Realtime.updateCollabUi_(), Blockly.Realtime.loadBlocks_()
}, Blockly.Realtime.getSessionId_ = function(e) {
    e = e.getCollaborators();
    for (var t = 0; t < e.length; t++) {
        var o = e[t];
        if (o.isMe) return o.sessionId
    }
}, Blockly.Realtime.registerTypes_ = function() {
    var e = gapi.drive.realtime.custom;
    e.registerType(Blockly.Block, "Block"), Blockly.Block.prototype.id = e.collaborativeField("id"), Blockly.Block.prototype.xmlDom = e.collaborativeField("xmlDom"), Blockly.Block.prototype.relativeX = e.collaborativeField("relativeX"), Blockly.Block.prototype.relativeY = e.collaborativeField("relativeY"), e.setInitializer(Blockly.Block, Blockly.Block.prototype.initialize)
}, Blockly.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_ = 18e5, Blockly.Realtime.afterAuth_ = function() {
    setTimeout(function() {
        Blockly.Realtime.realtimeLoader_.authorizer.authorize(Blockly.Realtime.afterAuth_)
    }, Blockly.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_)
}, Blockly.Realtime.afterCreate_ = function(e) {
    var t = gapi.client.drive.permissions.insert({
        fileId: e,
        resource: {
            type: "anyone",
            role: "writer",
            value: "default",
            withLink: !0
        }
    });
    t.execute(function(o) {
        o.error && Blockly.Realtime.getUserDomain(e, function(o) {
            t = gapi.client.drive.permissions.insert({
                fileId: e,
                resource: {
                    type: "domain",
                    role: "writer",
                    value: o,
                    withLink: !0
                }
            }), t.execute(function() {})
        })
    })
}, Blockly.Realtime.getUserDomain = function(e, t) {
    gapi.client.drive.permissions.list({
        fileId: e
    }).execute(function(e) {
        for (var o = 0; o < e.items.length; o++) {
            var n = e.items[o];
            if ("owner" == n.role) {
                t(n.domain);
                break
            }
        }
    })
}, Blockly.Realtime.rtclientOptions_ = {
    clientId: null,
    authButtonElementId: "authorizeButton",
    authDivElementId: "authButtonDiv",
    initializeModel: Blockly.Realtime.initializeModel_,
    autoCreate: !0,
    defaultTitle: "Realtime Blockly File",
    defaultFolderTitle: "Realtime Blockly Folder",
    newFileMimeType: null,
    onFileLoaded: Blockly.Realtime.onFileLoaded_,
    registerTypes: Blockly.Realtime.registerTypes_,
    afterAuth: Blockly.Realtime.afterAuth_,
    afterCreate: Blockly.Realtime.afterCreate_
}, Blockly.Realtime.parseOptions_ = function(e) {
    var t = rtclient.getOption(e, "chatbox");
    t && (Blockly.Realtime.chatBoxElementId_ = rtclient.getOption(t, "elementId"), Blockly.Realtime.chatBoxInitialText_ = rtclient.getOption(t, "initText", Blockly.Msg.CHAT)), Blockly.Realtime.rtclientOptions_.clientId = rtclient.getOption(e, "clientId"), Blockly.Realtime.collabElementId = rtclient.getOption(e, "collabElementId")
}, Blockly.Realtime.startRealtime = function(e, t, o) {
    Blockly.Realtime.parseOptions_(o), Blockly.Realtime.enabled_ = !0, Blockly.Realtime.addAuthUi_(t), Blockly.Realtime.initUi_ = function() {
        if (e(), Blockly.Realtime.chatBoxElementId_) {
            var t = Blockly.Realtime.model_.getRoot().get(Blockly.Realtime.chatBoxElementId_),
                o = document.getElementById(Blockly.Realtime.chatBoxElementId_);
            gapi.drive.realtime.databinding.bindString(t, o), o.disabled = !1
        }
    }, Blockly.Realtime.realtimeLoader_ = new rtclient.RealtimeLoader(Blockly.Realtime.rtclientOptions_), Blockly.Realtime.realtimeLoader_.start()
}, Blockly.Realtime.addAuthUi_ = function(e) {
    e.style.background = "url(" + Blockly.pathToMedia + Blockly.Realtime.PROGRESS_URL_ + ") no-repeat center center";
    var t = goog.style.getBounds(e),
        o = goog.dom.createDom("div");
    o.id = Blockly.Realtime.rtclientOptions_.authDivElementId;
    var n = goog.dom.createDom("p", null, Blockly.Msg.AUTH);
    return o.appendChild(n), n = goog.dom.createDom("button", null, "Authorize"), n.id = Blockly.Realtime.rtclientOptions_.authButtonElementId, o.appendChild(n), e.appendChild(o), o.style.display = "none", o.style.position = "relative", o.style.textAlign = "center", o.style.border = "1px solid", o.style.backgroundColor = "#f6f9ff", o.style.borderRadius = "15px", o.style.boxShadow = "10px 10px 5px #888", o.style.width = t.width / 3 + "px", e = goog.style.getBounds(o), o.style.left = (t.width - e.width) / 3 + "px", o.style.top = (t.height - e.height) / 4 + "px", o
}, Blockly.Realtime.updateCollabUi_ = function() {
    if (Blockly.Realtime.collabElementId) {
        var e = goog.dom.getElement(Blockly.Realtime.collabElementId);
        goog.dom.removeChildren(e);
        for (var t = Blockly.Realtime.document_.getCollaborators(), o = 0; o < t.length; o++) {
            var n = t[o],
                i = goog.dom.createDom("img", {
                    src: n.photoUrl || Blockly.pathToMedia + Blockly.Realtime.ANONYMOUS_URL_,
                    alt: n.displayName,
                    title: n.displayName + (n.isMe ? " (" + Blockly.Msg.ME + ")" : "")
                });
            i.style.backgroundColor = n.color, goog.dom.appendChild(e, i)
        }
    }
}, Blockly.Realtime.onCollaboratorJoined_ = function() {
    Blockly.Realtime.updateCollabUi_()
}, Blockly.Realtime.onCollaboratorLeft_ = function() {
    Blockly.Realtime.updateCollabUi_()
}, Blockly.Realtime.doCommand = function(e) {
    e()
}, Blockly.Realtime.genUid = function(e) {
    var t = Blockly.Realtime.sessionId_ + "-" + e;
    return Blockly.Realtime.blocksMap_.has(t) ? Blockly.Realtime.genUid("-" + e) : t
}, Blockly.Flyout = function(e) {
    var t = this;
    e.getMetrics = function() {
        return t.getMetrics_()
    }, e.setMetrics = function(e) {
        return t.setMetrics_(e)
    }, this.workspace_ = new Blockly.WorkspaceSvg(e), this.workspace_.isFlyout = !0, this.RTL = !!e.RTL, this.eventWrappers_ = [], this.height_ = this.width_ = 0, this.buttons_ = [], this.listeners_ = []
}, Blockly.Flyout.prototype.autoClose = !0, Blockly.Flyout.prototype.CORNER_RADIUS = 8, Blockly.Flyout.prototype.createDom = function() {
    return this.svgGroup_ = Blockly.createSvgElement("g", {}, null), this.svgBackground_ = Blockly.createSvgElement("path", {
        "class": "blocklyFlyoutBackground"
    }, this.svgGroup_), this.svgGroup_.appendChild(this.workspace_.createDom()), this.svgGroup_
}, Blockly.Flyout.prototype.init = function(e) {
    this.targetWorkspace_ = e, this.workspace_.targetWorkspace = e, this.scrollbar_ = new Blockly.Scrollbar(this.workspace_, !1, !1), this.hide(), this.eventWrappers_.concat(Blockly.bindEvent_(this.svgGroup_, "wheel", this, this.wheel_)), this.eventWrappers_.concat(Blockly.bindEvent_(this.svgGroup_, "mousewheel", this, this.wheel_)), this.eventWrappers_.concat(Blockly.bindEvent_(this.targetWorkspace_.getCanvas(), "blocklyWorkspaceChange", this, this.filterForCapacity_)), this.eventWrappers_.concat(Blockly.bindEvent_(this.svgGroup_, "mousedown", this, this.onMouseDown_))
}, Blockly.Flyout.prototype.dispose = function() {
    this.hide(), Blockly.unbindEvent_(this.eventWrappers_), this.eventWrappers_.length = 0, this.scrollbar_ && (this.scrollbar_.dispose(), this.scrollbar_ = null), this.workspace_ = null, this.svgGroup_ && (goog.dom.removeNode(this.svgGroup_), this.svgGroup_ = null), this.targetWorkspace_ = this.svgBackground_ = null
}, Blockly.Flyout.prototype.getMetrics_ = function() {
    if (!this.isVisible()) return null;
    var e = this.height_ - 2 * this.CORNER_RADIUS,
        t = this.width_;
    try {
        var o = this.workspace_.getCanvas().getBBox()
    } catch (n) {
        o = {
            height: 0,
            y: 0
        }
    }
    return {
        viewHeight: e,
        viewWidth: t,
        contentHeight: o.height + o.y,
        viewTop: -this.workspace_.scrollY,
        contentTop: 0,
        absoluteTop: this.CORNER_RADIUS,
        absoluteLeft: 0
    }
}, Blockly.Flyout.prototype.setMetrics_ = function(e) {
    var t = this.getMetrics_();
    t && (goog.isNumber(e.y) && (this.workspace_.scrollY = -t.contentHeight * e.y - t.contentTop), this.workspace_.translate(0, this.workspace_.scrollY + t.absoluteTop))
}, Blockly.Flyout.prototype.position = function() {
    if (this.isVisible()) {
        var e = this.targetWorkspace_.getMetrics();
        if (e) {
            var t = this.width_ - this.CORNER_RADIUS;
            this.RTL && (t *= -1);
            var o = ["M " + (this.RTL ? this.width_ : 0) + ",0"];
            o.push("h", t), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, this.RTL ? 0 : 1, this.RTL ? -this.CORNER_RADIUS : this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("v", Math.max(0, e.viewHeight - 2 * this.CORNER_RADIUS)), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, this.RTL ? 0 : 1, this.RTL ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("h", -t), o.push("z"), this.svgBackground_.setAttribute("d", o.join(" ")), t = e.absoluteLeft, this.RTL && (t += e.viewWidth, t -= this.width_), this.svgGroup_.setAttribute("transform", "translate(" + t + "," + e.absoluteTop + ")"), this.height_ = e.viewHeight, this.scrollbar_ && this.scrollbar_.resize()
        }
    }
}, Blockly.Flyout.prototype.scrollToTop = function() {
    this.scrollbar_.set(0)
}, Blockly.Flyout.prototype.wheel_ = function(e) {
    var t = e.deltaY || -e.wheelDeltaY;
    if (t) {
        goog.userAgent.GECKO && (t *= 10);
        var o = this.getMetrics_(),
            t = o.viewTop + t,
            t = Math.min(t, o.contentHeight - o.viewHeight),
            t = Math.max(t, 0);
        this.scrollbar_.set(t), e.preventDefault()
    }
}, Blockly.Flyout.prototype.isVisible = function() {
    return this.svgGroup_ && "block" == this.svgGroup_.style.display
}, Blockly.Flyout.prototype.hide = function() {
    if (this.isVisible()) {
        this.svgGroup_.style.display = "none";
        for (var e, t = 0; e = this.listeners_[t]; t++) Blockly.unbindEvent_(e);
        this.listeners_.length = 0, this.reflowWrapper_ && (Blockly.unbindEvent_(this.reflowWrapper_), this.reflowWrapper_ = null)
    }
}, Blockly.Flyout.prototype.show = function(e) {
    this.hide();
    for (var t, o = this.workspace_.getTopBlocks(!1), n = 0; t = o[n]; n++) t.workspace == this.workspace_ && t.dispose(!1, !1);
    for (var i, n = 0; i = this.buttons_[n]; n++) goog.dom.removeNode(i);
    this.buttons_.length = 0;
    var r = this.CORNER_RADIUS;
    this.svgGroup_.style.display = "block";
    var o = [],
        s = [];
    if (e == Blockly.Variables.NAME_TYPE) Blockly.Variables.flyoutCategory(o, s, r, this.workspace_);
    else if (e == Blockly.Procedures.NAME_TYPE) Blockly.Procedures.flyoutCategory(o, s, r, this.workspace_);
    else
        for (var l = 0; t = e[l]; l++) t.tagName && "BLOCK" == t.tagName.toUpperCase() && (t = Blockly.Xml.domToBlock(this.workspace_, t), o.push(t), s.push(3 * r));
    for (e = r, l = 0; t = o[l]; l++) {
        n = t.getDescendants(), i = 0;
        for (var a; a = n[i]; i++) a.isInFlyout = !0, a.setCommentText(null);
        t.render(), a = t.getSvgRoot(), i = t.getHeightWidth(), n = this.RTL ? 0 : r + Blockly.BlockSvg.TAB_WIDTH, t.moveBy(n, e), e += i.height + s[l], i = Blockly.createSvgElement("rect", {
            "fill-opacity": 0
        }, null), this.workspace_.getCanvas().insertBefore(i, t.getSvgRoot()), t.flyoutRect_ = i, this.buttons_[l] = i, this.autoClose ? this.listeners_.push(Blockly.bindEvent_(a, "mousedown", null, this.createBlockFunc_(t))) : this.listeners_.push(Blockly.bindEvent_(a, "mousedown", null, this.blockMouseDown_(t))), this.listeners_.push(Blockly.bindEvent_(a, "mouseover", t, t.addSelect)), this.listeners_.push(Blockly.bindEvent_(a, "mouseout", t, t.removeSelect)), this.listeners_.push(Blockly.bindEvent_(i, "mousedown", null, this.createBlockFunc_(t))), this.listeners_.push(Blockly.bindEvent_(i, "mouseover", t, t.addSelect)), this.listeners_.push(Blockly.bindEvent_(i, "mouseout", t, t.removeSelect))
    }
    this.listeners_.push(Blockly.bindEvent_(this.svgBackground_, "mouseover", this, function(e) {
        e = this.workspace_.getTopBlocks(!1);
        for (var t, o = 0; t = e[o]; o++) t.removeSelect()
    })), this.width_ = 0, this.reflow(), this.filterForCapacity_(), Blockly.fireUiEventNow(window, "resize"), this.reflowWrapper_ = Blockly.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this, this.reflow), this.workspace_.fireChangeEvent()
}, Blockly.Flyout.prototype.reflow = function() {
    for (var e, t = 0, o = this.CORNER_RADIUS, n = this.workspace_.getTopBlocks(!1), i = 0; e = n[i]; i++) {
        e.getSvgRoot();
        var r = e.getHeightWidth(),
            t = Math.max(t, r.width)
    }
    if (t += o + Blockly.BlockSvg.TAB_WIDTH + o / 2 + Blockly.Scrollbar.scrollbarThickness, this.width_ != t) {
        for (i = 0; e = n[i]; i++) {
            var r = e.getHeightWidth(),
                s = e.getRelativeToSurfaceXY();
            if (this.RTL) {
                var l = t - o - Blockly.BlockSvg.TAB_WIDTH - s.x;
                e.moveBy(l, 0), s.x += l
            }
            e.flyoutRect_ && (e.flyoutRect_.setAttribute("width", r.width), e.flyoutRect_.setAttribute("height", r.height), e.flyoutRect_.setAttribute("x", this.RTL ? s.x - r.width : s.x), e.flyoutRect_.setAttribute("y", s.y))
        }
        this.width_ = t, Blockly.fireUiEvent(window, "resize")
    }
}, Blockly.Flyout.prototype.blockMouseDown_ = function(e) {
    var t = this;
    return function(o) {
        Blockly.terminateDrag_(), Blockly.hideChaff(), Blockly.isRightButton(o) ? e.showContextMenu_(o) : (Blockly.removeAllRanges(), Blockly.Css.setCursor(Blockly.Css.Cursor.CLOSED), Blockly.Flyout.startDownEvent_ = o, Blockly.Flyout.startBlock_ = e, Blockly.Flyout.startFlyout_ = t, Blockly.Flyout.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.terminateDrag_), Blockly.Flyout.onMouseMoveBlockWrapper_ = Blockly.bindEvent_(document, "mousemove", this, t.onMouseMoveBlock_)), o.stopPropagation()
    }
}, Blockly.Flyout.prototype.onMouseDown_ = function(e) {
    Blockly.isRightButton(e) || (Blockly.hideChaff(!0), Blockly.Flyout.terminateDrag_(), this.startDragMouseY_ = e.clientY, Blockly.Flyout.onMouseMoveWrapper_ = Blockly.bindEvent_(document, "mousemove", this, this.onMouseMove_), Blockly.Flyout.onMouseUpWrapper_ = Blockly.bindEvent_(document, "mouseup", this, Blockly.Flyout.terminateDrag_), e.preventDefault(), e.stopPropagation())
}, Blockly.Flyout.prototype.onMouseMove_ = function(e) {
    var t = e.clientY - this.startDragMouseY_;
    this.startDragMouseY_ = e.clientY, e = this.getMetrics_(), t = e.viewTop - t, t = Math.min(t, e.contentHeight - e.viewHeight), t = Math.max(t, 0), this.scrollbar_.set(t)
}, Blockly.Flyout.prototype.onMouseMoveBlock_ = function(e) {
    if ("mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button) e.stopPropagation();
    else {
        Blockly.removeAllRanges();
        var t = e.clientY - Blockly.Flyout.startDownEvent_.clientY;
        Math.sqrt(Math.pow(e.clientX - Blockly.Flyout.startDownEvent_.clientX, 2) + Math.pow(t, 2)) > Blockly.DRAG_RADIUS && Blockly.Flyout.startFlyout_.createBlockFunc_(Blockly.Flyout.startBlock_)(Blockly.Flyout.startDownEvent_)
    }
}, Blockly.Flyout.prototype.createBlockFunc_ = function(e) {
    var t = this;
    return function(o) {
        if (!Blockly.isRightButton(o) && !e.disabled) {
            var n = Blockly.Xml.blockToDom_(e),
                n = Blockly.Xml.domToBlock(t.targetWorkspace_, n),
                i = e.getSvgRoot();
            if (!i) throw "originBlock is not rendered.";
            var i = Blockly.getSvgXY_(i),
                r = n.getSvgRoot();
            if (!r) throw "block is not rendered.";
            r = Blockly.getSvgXY_(r), n.moveBy(i.x - r.x, i.y - r.y), t.autoClose ? t.hide() : t.filterForCapacity_(), n.onMouseDown_(o)
        }
    }
}, Blockly.Flyout.prototype.filterForCapacity_ = function() {
    for (var e, t = this.targetWorkspace_.remainingCapacity(), o = this.workspace_.getTopBlocks(!1), n = 0; e = o[n]; n++) {
        var i = e.getDescendants().length > t;
        e.setDisabled(i)
    }
}, Blockly.Flyout.prototype.getRect = function() {
    var e = Blockly.getSvgXY_(this.svgGroup_).x;
    return this.RTL || (e -= 1e7), new goog.math.Rect(e, -1e7, 1e7 + this.width_, this.height_ + 2e7)
}, Blockly.Flyout.terminateDrag_ = function() {
    Blockly.Flyout.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseUpWrapper_), Blockly.Flyout.onMouseUpWrapper_ = null), Blockly.Flyout.onMouseMoveBlockWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseMoveBlockWrapper_), Blockly.Flyout.onMouseMoveBlockWrapper_ = null), Blockly.Flyout.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseMoveWrapper_), Blockly.Flyout.onMouseMoveWrapper_ = null), Blockly.Flyout.onMouseUpWrapper_ && (Blockly.unbindEvent_(Blockly.Flyout.onMouseUpWrapper_), Blockly.Flyout.onMouseUpWrapper_ = null), Blockly.Flyout.startDownEvent_ = null, Blockly.Flyout.startBlock_ = null, Blockly.Flyout.startFlyout_ = null
}, Blockly.Toolbox = function(e) {
    this.workspace_ = e
}, Blockly.Toolbox.prototype.width = 0, Blockly.Toolbox.prototype.selectedOption_ = null, Blockly.Toolbox.prototype.lastCategory_ = null, Blockly.Toolbox.prototype.CONFIG_ = {
    indentWidth: 19,
    cssRoot: "blocklyTreeRoot",
    cssHideRoot: "blocklyHidden",
    cssItem: "",
    cssTreeRow: "blocklyTreeRow",
    cssItemLabel: "blocklyTreeLabel",
    cssTreeIcon: "blocklyTreeIcon",
    cssExpandedFolderIcon: "blocklyTreeIconOpen",
    cssFileIcon: "blocklyTreeIconNone",
    cssSelectedRow: "blocklyTreeSelected"
}, Blockly.Toolbox.prototype.init = function() {
    var e = this.workspace_,
        t = e.options.svg;
    this.HtmlDiv = goog.dom.createDom("div", "blocklyToolboxDiv"), this.HtmlDiv.setAttribute("dir", this.workspace_.RTL ? "RTL" : "LTR"), t.parentNode.insertBefore(this.HtmlDiv, t), Blockly.bindEvent_(this.HtmlDiv, "mousedown", this, function(e) {
        Blockly.isRightButton(e) || e.target == this.HtmlDiv ? Blockly.hideChaff(!1) : Blockly.hideChaff(!0)
    }), this.flyout_ = new Blockly.Flyout({
        parentWorkspace: e,
        RTL: e.RTL
    }), goog.dom.insertSiblingAfter(this.flyout_.createDom(), e.svgGroup_), this.flyout_.init(e), this.CONFIG_.cleardotPath = e.options.pathToMedia + "1x1.gif", this.CONFIG_.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (this.workspace_.RTL ? "Rtl" : "Ltr"), this.tree_ = t = new Blockly.Toolbox.TreeControl(this, this.CONFIG_), t.setShowRootNode(!1), t.setShowLines(!1), t.setShowExpandIcons(!1), t.setSelectedItem(null), this.HtmlDiv.style.display = "block", this.populate_(e.options.languageTree), t.render(this.HtmlDiv), this.position()
}, Blockly.Toolbox.prototype.position = function() {
    var e = this.HtmlDiv;
    if (e) {
        var t = this.workspace_.options.svg,
            o = goog.style.getBorderBox(t),
            n = Blockly.svgSize(t);
        this.workspace_.RTL ? (t = Blockly.convertCoordinates(0, 0, !1, t), e.style.left = t.x + n.width - e.offsetWidth + "px") : e.style.marginLeft = o.left, e.style.height = n.height + "px", this.width = e.offsetWidth, this.workspace_.RTL || --this.width, this.flyout_.position()
    }
}, Blockly.Toolbox.prototype.populate_ = function(e) {
    function t(e, n) {
        for (var i, r = 0; i = e.childNodes[r]; r++)
            if (i.tagName) {
                var s = i.tagName.toUpperCase();
                if ("CATEGORY" == s) {
                    s = o.createNode(i.getAttribute("name")), s.blocks = [], n.add(s);
                    var l = i.getAttribute("custom");
                    l ? s.blocks = l : t(i, s)
                } else "HR" == s ? console.warn("The <hr> separator tag in the toolbox XML needs to be changed to <sep></sep> (due to a bug in IE).") : "SEP" == s ? n.add(new Blockly.Toolbox.TreeSeparator) : "BLOCK" == s && n.blocks.push(i)
            }
    }
    var o = this.tree_;
    if (o.removeChildren(), o.blocks = [], t(e, this.tree_), o.blocks.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Blockly.fireUiEvent(window, "resize")
}, Blockly.Toolbox.prototype.clearSelection = function() {
    this.tree_.setSelectedItem(null)
}, Blockly.Toolbox.prototype.getRect = function() {
    var e = this.workspace_.RTL ? Blockly.svgSize(this.workspace_.options.svg).width - this.width : -1e7;
    return new goog.math.Rect(e, -1e7, 1e7 + this.width, 2e7)
}, Blockly.Toolbox.TreeControl = function(e, t) {
    this.toolbox_ = e, goog.ui.tree.TreeControl.call(this, goog.html.SafeHtml.EMPTY, t)
}, goog.inherits(Blockly.Toolbox.TreeControl, goog.ui.tree.TreeControl), Blockly.Toolbox.TreeControl.prototype.enterDocument = function() {
    if (Blockly.Toolbox.TreeControl.superClass_.enterDocument.call(this), goog.events.BrowserFeature.TOUCH_ENABLED) {
        var e = this.getElement();
        Blockly.bindEvent_(e, goog.events.EventType.TOUCHSTART, this, this.handleTouchEvent_)
    }
}, Blockly.Toolbox.TreeControl.prototype.handleTouchEvent_ = function(e) {
    e.preventDefault();
    var t = this.getNodeFromEvent_(e);
    t && e.type === goog.events.EventType.TOUCHSTART && setTimeout(function() {
        t.onMouseDown(e)
    }, 1)
}, Blockly.Toolbox.TreeControl.prototype.createNode = function(e) {
    return new Blockly.Toolbox.TreeNode(this.toolbox_, e ? goog.html.SafeHtml.htmlEscape(e) : goog.html.SafeHtml.EMPTY, this.getConfig(), this.getDomHelper())
}, Blockly.Toolbox.TreeControl.prototype.setSelectedItem = function(e) {
    if (Blockly.removeAllRanges(), this.selectedItem_ != e) {
        goog.ui.tree.TreeControl.prototype.setSelectedItem.call(this, e);
        var t = this.toolbox_;
        e && e.blocks && e.blocks.length ? (t.flyout_.show(e.blocks), t.lastCategory_ != e.blocks && (t.flyout_.scrollToTop(), t.lastCategory_ = e.blocks)) : t.flyout_.hide()
    }
}, Blockly.Toolbox.TreeNode = function(e, t, o, n) {
    goog.ui.tree.TreeNode.call(this, t, o, n), e && (t = function() {
        Blockly.fireUiEvent(window, "resize")
    }, goog.events.listen(e.tree_, goog.ui.tree.BaseNode.EventType.EXPAND, t), goog.events.listen(e.tree_, goog.ui.tree.BaseNode.EventType.COLLAPSE, t))
}, goog.inherits(Blockly.Toolbox.TreeNode, goog.ui.tree.TreeNode), Blockly.Toolbox.TreeNode.prototype.getExpandIconSafeHtml = function() {
    return goog.html.SafeHtml.create("span")
}, Blockly.Toolbox.TreeNode.prototype.onMouseDown = function() {
    this.hasChildren() && this.isUserCollapsible_ ? (this.toggle(), this.select()) : this.isSelected() ? this.getTree().setSelectedItem(null) : this.select(), this.updateRow()
}, Blockly.Toolbox.TreeNode.prototype.onDoubleClick_ = function() {}, Blockly.Toolbox.TreeSeparator = function() {
    Blockly.Toolbox.TreeNode.call(this, null, "", Blockly.Toolbox.TreeSeparator.CONFIG_)
}, goog.inherits(Blockly.Toolbox.TreeSeparator, Blockly.Toolbox.TreeNode), Blockly.Toolbox.TreeSeparator.CONFIG_ = {
    cssTreeRow: "blocklyTreeSeparator"
}, Blockly.Css = {}, Blockly.Css.Cursor = {
    OPEN: "handopen",
    CLOSED: "handclosed",
    DELETE: "handdelete"
}, Blockly.Css.currentCursor_ = "", Blockly.Css.styleSheet_ = null, Blockly.Css.mediaPath_ = "", Blockly.Css.inject = function(e, t) {
    if (!Blockly.Css.styleSheet_) {
        var o = ".blocklyDraggable {}\n";
        e && (o += Blockly.Css.CONTENT.join("\n")), Blockly.Css.mediaPath_ = t.replace(/[\\\/]$/, ""), o = o.replace(/<<<PATH>>>/g, Blockly.Css.mediaPath_), Blockly.Css.styleSheet_ = goog.cssom.addCssText(o).sheet, Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN)
    }
}, Blockly.Css.setCursor = function(e) {
    if (Blockly.Css.currentCursor_ != e) {
        Blockly.Css.currentCursor_ = e;
        var t = "url(" + Blockly.Css.mediaPath_ + "/" + e + ".cur) " + (e == Blockly.Css.Cursor.OPEN ? "8 5" : "7 3") + ", auto";
        goog.cssom.replaceCssRule("", ".blocklyDraggable {\n  cursor: " + t + ";\n}\n", Blockly.Css.styleSheet_, 0);
        for (var o, n = document.getElementsByClassName("blocklyToolboxDiv"), i = 0; o = n[i]; i++) o.style.cursor = e == Blockly.Css.Cursor.OPEN ? "" : t;
        document.body.parentNode.style.cursor = e == Blockly.Css.Cursor.OPEN ? "" : t
    }
}, Blockly.Css.CONTENT = [".blocklySvg {", "  background-color: #fff;", "  outline: none;", "  overflow: hidden;", "}", ".blocklyWidgetDiv {", "  display: none;", "  position: absolute;", "  z-index: 999;", "}", ".blocklyTooltipDiv {", "  background-color: #ffffc7;", "  border: 1px solid #ddc;", "  box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "  colour: #000;", "  display: none;", "  font-family: sans-serif;", "  font-size: 9pt;", "  opacity: 0.9;", "  padding: 2px;", "  position: absolute;", "  z-index: 1000;", "}", ".blocklyResizeSE {", "  cursor: se-resize;", "  fill: #aaa;", "}", ".blocklyResizeSW {", "  cursor: sw-resize;", "  fill: #aaa;", "}", ".blocklyResizeLine {", "  stroke: #888;", "  stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "  fill: none;", "  stroke: #fc3;", "  stroke-width: 4px;", "}", ".blocklyPathLight {", "  fill: none;", "  stroke-linecap: round;", "  stroke-width: 2;", "}", ".blocklySelected>.blocklyPath {", "  stroke: #fc3;", "  stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "  display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "  fill-opacity: .8;", "  stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "  display: none;", "}", ".blocklyDisabled>.blocklyPath {", "  fill-opacity: .5;", "  stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "  display: none;", "}", ".blocklyText {", "  cursor: default;", "  fill: #fff;", "  font-family: sans-serif;", "  font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "  pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "  fill: #fff;", "  fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "  fill: #000;", "}", ".blocklyEditableText:hover>rect {", "  stroke: #fff;", "  stroke-width: 2;", "}", ".blocklyBubbleText {", "  fill: #000;", "}", ".blocklySvg text {", "  user-select: none;", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  cursor: inherit;", "}", ".blocklyHidden {", "  display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "  display: block;", "}", ".blocklyIconGroup {", "  cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "  opacity: .6;", "}", ".blocklyMinimalBody {", "  margin: 0;", "  padding: 0;", "}", ".blocklyCommentTextarea {", "  background-color: #ffc;", "  border: 0;", "  margin: 0;", "  padding: 2px;", "  resize: none;", "}", ".blocklyHtmlInput {", "  border: none;", "  font-family: sans-serif;", "  font-size: 11pt;", "  outline: none;", "  width: 100%", "}", ".blocklyMainBackground {", "  stroke-width: 1;", "  stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "  fill: #fff;", "  stroke: #ddd;", "  stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyColourBackground {", "  fill: #666;", "}", ".blocklyScrollbarBackground {", "  fill: #fff;", "  stroke: #e4e4e4;", "  stroke-width: 1;", "}", ".blocklyScrollbarKnob {", "  fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,", ".blocklyScrollbarKnob:hover {", "  fill: #bbb;", "}", ".blocklyInvalidInput {", "  background: #faa;", "}", ".blocklyAngleCircle {", "  stroke: #444;", "  stroke-width: 1;", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyAngleMarks {", "  stroke: #444;", "  stroke-width: 1;", "}", ".blocklyAngleGauge {", "  fill: #f88;", "  fill-opacity: .8;  ", "}", ".blocklyAngleLine {", "  stroke: #f00;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklyContextMenu {", "  border-radius: 4px;", "}", ".blocklyDropdownMenu {", "  padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "  background-color: #ddd;", "  display: none;", "  overflow-x: visible;", "  overflow-y: auto;", "  position: absolute;", "}", ".blocklyTreeRoot {", "  padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "  outline: none;", "}", ".blocklyTreeRow {", "  line-height: 22px;", "  height: 22px;", "  padding-right: 1em;", "  white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "  padding-right: 0;", "  padding-left: 1em !important;", "}", ".blocklyTreeRow:hover {", "  background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "  border-bottom: solid #e5e5e5 1px;", "  height: 0px;", "  margin: 5px 0;", "}", ".blocklyTreeIcon {", "  background-image: url(<<<PATH>>>/sprites.png);", "  height: 16px;", "  vertical-align: middle;", "  width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "  background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "  background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "  background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "  background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "  background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "  background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "  background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 16px;", "  padding: 0 3px;", "  vertical-align: middle;", "}", ".blocklyTreeSelected  {", "  background-color: #57e !important;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "  outline: none;", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "  border: 1px solid #666;", "  border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "  height: 13px;", "  width: 15px;", "  margin: 0;", "  border: 0;", "  text-align: center;", "  vertical-align: middle;", "  border-right: 1px solid #666;", "  font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "  position: relative;", "  height: 13px;", "  width: 15px;", "  border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "  border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "  border: 1px solid #000;", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-date-picker,", ".blocklyWidgetDiv .goog-date-picker th,", ".blocklyWidgetDiv .goog-date-picker td {", "  font: 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-date-picker {", "  -moz-user-focus: normal;", "  -moz-user-select: none;", "  position: relative;", "  border: 1px solid #000;", "  float: left;", "  padding: 2px;", "  color: #000;", "  background: #c3d9ff;", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-date-picker th {", "  text-align: center;", "}", ".blocklyWidgetDiv .goog-date-picker td {", "  text-align: center;", "  vertical-align: middle;", "  padding: 1px 3px;", "}", ".blocklyWidgetDiv .goog-date-picker-menu {", "  position: absolute;", "  background: threedface;", "  border: 1px solid gray;", "  -moz-user-focus: normal;", "  z-index: 1;", "  outline: none;", "}", ".blocklyWidgetDiv .goog-date-picker-menu ul {", "  list-style: none;", "  margin: 0px;", "  padding: 0px;", "}", ".blocklyWidgetDiv .goog-date-picker-menu ul li {", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-date-picker-menu-selected {", "  background: #ccf;", "}", ".blocklyWidgetDiv .goog-date-picker th {", "  font-size: .9em;", "}", ".blocklyWidgetDiv .goog-date-picker td div {", "  float: left;", "}", ".blocklyWidgetDiv .goog-date-picker button {", "  padding: 0px;", "  margin: 1px 0;", "  border: 0;", "  color: #20c;", "  font-weight: bold;", "  background: transparent;", "}", ".blocklyWidgetDiv .goog-date-picker-date {", "  background: #fff;", "}", ".blocklyWidgetDiv .goog-date-picker-week,", ".blocklyWidgetDiv .goog-date-picker-wday {", "  padding: 1px 3px;", "  border: 0;", "  border-color: #a2bbdd;", "  border-style: solid;", "}", ".blocklyWidgetDiv .goog-date-picker-week {", "  border-right-width: 1px;", "}", ".blocklyWidgetDiv .goog-date-picker-wday {", "  border-bottom-width: 1px;", "}", ".blocklyWidgetDiv .goog-date-picker-head td {", "  text-align: center;", "}", ".blocklyWidgetDiv td.goog-date-picker-today-cont {", "  text-align: center;", "}", ".blocklyWidgetDiv td.goog-date-picker-none-cont {", "  text-align: center;", "}", ".blocklyWidgetDiv .goog-date-picker-month {", "  min-width: 11ex;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-date-picker-year {", "  min-width: 6ex;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-date-picker-monthyear {", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-date-picker table {", "  border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-date-picker-other-month {", "  color: #888;", "}", ".blocklyWidgetDiv .goog-date-picker-wkend-start,", ".blocklyWidgetDiv .goog-date-picker-wkend-end {", "  background: #eee;", "}", ".blocklyWidgetDiv td.goog-date-picker-selected {", "  background: #c3d9ff;", "}", ".blocklyWidgetDiv .goog-date-picker-today {", "  background: #9ab;", "  font-weight: bold !important;", "  border-color: #246 #9bd #9bd #246;", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "  background: #fff;", "  border-color: #ccc #666 #666 #ccc;", "  border-style: solid;", "  border-width: 1px;", "  cursor: default;", "  font: normal 13px Arial, sans-serif;", "  margin: 0;", "  outline: none;", "  padding: 4px 0;", "  position: absolute;", "  z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "  list-style: none;", "  margin: 0;", "  padding: 4px 7em 4px 28px;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "  padding-left: 7em;", "  padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "  padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "  padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "  color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "  opacity: 0.3;", "  -moz-opacity: 0.3;", "  filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "  background-color: #d6e9f8;", "  border-color: #d6e9f8;", "  border-style: dotted;", "  border-width: 1px 0;", "  padding-bottom: 3px;", "  padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "  background-repeat: no-repeat;", "  height: 16px;", "  left: 6px;", "  position: absolute;", "  right: auto;", "  vertical-align: middle;", "  width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "  left: auto;", "  right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "  color: #999;", "  direction: ltr;", "  left: auto;", "  padding: 0 6px;", "  position: absolute;", "  right: 0;", "  text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "  left: 0;", "  right: auto;", "  text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "  text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "  color: #999;", "  font-size: 12px;", "  padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "  border-top: 1px solid #ccc;", "  margin: 4px 0;", "  padding: 0;", "}", ""], Blockly.WidgetDiv = {}, Blockly.WidgetDiv.DIV = null, Blockly.WidgetDiv.owner_ = null, Blockly.WidgetDiv.dispose_ = null, Blockly.WidgetDiv.createDom = function() {
    Blockly.WidgetDiv.DIV || (Blockly.WidgetDiv.DIV = goog.dom.createDom("div", "blocklyWidgetDiv"), document.body.appendChild(Blockly.WidgetDiv.DIV))
}, Blockly.WidgetDiv.show = function(e, t, o) {
    Blockly.WidgetDiv.hide(), Blockly.WidgetDiv.owner_ = e, Blockly.WidgetDiv.dispose_ = o, Blockly.WidgetDiv.DIV.style.direction = t ? "rtl" : "ltr", Blockly.WidgetDiv.DIV.style.display = "block"
}, Blockly.WidgetDiv.hide = function() {
    Blockly.WidgetDiv.owner_ && (Blockly.WidgetDiv.DIV.style.display = "none", Blockly.WidgetDiv.dispose_ && Blockly.WidgetDiv.dispose_(), Blockly.WidgetDiv.owner_ = null, Blockly.WidgetDiv.dispose_ = null, goog.dom.removeChildren(Blockly.WidgetDiv.DIV))
}, Blockly.WidgetDiv.isVisible = function() {
    return !!Blockly.WidgetDiv.owner_
}, Blockly.WidgetDiv.hideIfOwner = function(e) {
    Blockly.WidgetDiv.owner_ == e && Blockly.WidgetDiv.hide()
}, Blockly.WidgetDiv.position = function(e, t, o, n, i) {
    t < n.y && (t = n.y), i ? e > o.width + n.x && (e = o.width + n.x) : e < n.x && (e = n.x), Blockly.WidgetDiv.DIV.style.left = e + "px", Blockly.WidgetDiv.DIV.style.top = t + "px"
}, Blockly.inject = function(e, t) {
    if (goog.isString(e) && (e = document.getElementById(e)), !goog.dom.contains(document, e)) throw "Error: container is not in current document.";
    var o, n = Blockly.parseOptions_(t || {}),
        i = function() {
            var t = Blockly.createDom_(e, n);
            o = Blockly.createMainWorkspace_(t, n), Blockly.init_(o), o.markFocused(), Blockly.bindEvent_(t, "focus", o, o.markFocused)
        };
    if (n.enableRealtime) {
        var r = document.getElementById("realtime");
        r && (r.style.display = "block"), Blockly.Realtime.startRealtime(i, e, n.realtimeOptions)
    } else i();
    return o
}, Blockly.parseToolboxTree_ = function(e) {
    return e ? ("string" != typeof e && "undefined" == typeof XSLTProcessor && (e = e.outerHTML), "string" == typeof e && (e = Blockly.Xml.textToDom(e))) : e = null, e
}, Blockly.parseOptions_ = function(e) {
    var t = !!e.readOnly;
    if (t) var o = null,
        n = !1,
        i = !1,
        r = !1,
        s = !1,
        l = !1,
        a = !1;
    else o = Blockly.parseToolboxTree_(e.toolbox), n = Boolean(o && o.getElementsByTagName("category").length), i = e.trashcan, void 0 === i && (i = n), r = e.collapse, void 0 === r && (r = n), s = e.comments, void 0 === s && (s = n), l = e.disable, void 0 === l && (l = n), a = e.sounds, void 0 === a && (a = !0);
    var c = e.scrollbars;
    void 0 === c && (c = n);
    var g = e.css;
    void 0 === g && (g = !0);
    var u = e.grid || {};
    u.spacing = u.spacing ? parseFloat(u.spacing) : 0, u.colour || (u.colour = "#888"), u.length = u.length ? parseFloat(u.length) : 1, u.snap = 0 < u.spacing && !!u.snap;
    var h = "https://blockly-demo.appspot.com/static/media/";
    e.media ? h = e.media : e.path && (h = e.path + "media/");
    var d = !!e.realtime;
    return {
        RTL: !!e.rtl,
        collapse: r,
        comments: s,
        disable: l,
        readOnly: t,
        maxBlocks: e.maxBlocks || 1 / 0,
        pathToMedia: h,
        hasCategories: n,
        hasScrollbars: c,
        hasTrashcan: i,
        hasSounds: a,
        hasCss: g,
        languageTree: o,
        gridOptions: u,
        enableRealtime: d,
        realtimeOptions: d ? e.realtimeOptions : void 0
    }
}, Blockly.createDom_ = function(e, t) {
    e.setAttribute("dir", "LTR"), goog.ui.Component.setDefaultRightToLeft(t.RTL), Blockly.Css.inject(t.hasCss, t.pathToMedia);
    var o, n, i = Blockly.createSvgElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            "class": "blocklySvg"
        }, e),
        r = Blockly.createSvgElement("defs", {}, i);
    if (o = Blockly.createSvgElement("filter", {
            id: "blocklyEmboss"
        }, r), Blockly.createSvgElement("feGaussianBlur", {
            "in": "SourceAlpha",
            stdDeviation: 1,
            result: "blur"
        }, o), n = Blockly.createSvgElement("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        }, o), Blockly.createSvgElement("fePointLight", {
            x: -5e3,
            y: -1e4,
            z: 2e4
        }, n), Blockly.createSvgElement("feComposite", {
            "in": "specOut",
            in2: "SourceAlpha",
            operator: "in",
            result: "specOut"
        }, o), Blockly.createSvgElement("feComposite", {
            "in": "SourceGraphic",
            in2: "specOut",
            operator: "arithmetic",
            k1: 0,
            k2: 1,
            k3: 1,
            k4: 0
        }, o), o = Blockly.createSvgElement("filter", {
            id: "blocklyShadowFilter"
        }, r), Blockly.createSvgElement("feGaussianBlur", {
            stdDeviation: 2
        }, o), o = Blockly.createSvgElement("pattern", {
            id: "blocklyDisabledPattern",
            patternUnits: "userSpaceOnUse",
            width: 10,
            height: 10
        }, r), Blockly.createSvgElement("rect", {
            width: 10,
            height: 10,
            fill: "#aaa"
        }, o), Blockly.createSvgElement("path", {
            d: "M 0 0 L 10 10 M 10 0 L 0 10",
            stroke: "#cc0"
        }, o), o = t.gridOptions.spacing || 100, r = Blockly.createSvgElement("pattern", {
            id: "blocklyGridPattern" + String(Math.random()).substring(2),
            patternUnits: "userSpaceOnUse",
            width: o,
            height: o
        }, r), 0 < t.gridOptions.length && 0 < t.gridOptions.spacing) {
        o = Math.floor(t.gridOptions.spacing / 2) + .5, n = o - t.gridOptions.length / 2;
        var s = o + t.gridOptions.length / 2;
        Blockly.createSvgElement("line", {
            x1: n,
            y1: o,
            x2: s,
            y2: o,
            stroke: t.gridOptions.colour
        }, r), 1 < t.gridOptions.length && Blockly.createSvgElement("line", {
            x1: o,
            y1: n,
            x2: o,
            y2: s,
            stroke: t.gridOptions.colour
        }, r)
    }
    return t.gridPattern = r, t.svg = i
}, Blockly.createMainWorkspace_ = function(e, t) {
    t.parentWorkspace = null, t.getMetrics = Blockly.getMainWorkspaceMetrics_, t.setMetrics = Blockly.setMainWorkspaceMetrics_;
    var o = new Blockly.WorkspaceSvg(t);
    return e.appendChild(o.createDom("blocklyMainBackground")), o.markFocused(), t.readOnly || t.hasScrollbars || o.addChangeListener(function() {
        if (0 == Blockly.dragMode_) {
            var e = o.getMetrics(),
                n = e.viewLeft + e.absoluteLeft,
                i = e.viewTop + e.absoluteTop;
            if (e.contentTop < i || e.contentTop + e.contentHeight > e.viewHeight + i || e.contentLeft < (t.RTL ? e.viewLeft : n) || e.contentLeft + e.contentWidth > (t.RTL ? e.viewWidth : e.viewWidth + n))
                for (var r, s = o.getTopBlocks(!1), l = 0; r = s[l]; l++) {
                    var a = r.getRelativeToSurfaceXY(),
                        c = r.getHeightWidth(),
                        g = i + 25 - c.height - a.y;
                    g > 0 && r.moveBy(0, g), g = i + e.viewHeight - 25 - a.y, 0 > g && r.moveBy(0, g), g = 25 + n - a.x - (t.RTL ? 0 : c.width), g > 0 && r.moveBy(g, 0), g = n + e.viewWidth - 25 - a.x + (t.RTL ? c.width : 0), 0 > g && r.moveBy(g, 0)
                }
        }
    }), Blockly.svgResize(o), Blockly.WidgetDiv.createDom(), Blockly.Tooltip.createDom(), o
}, Blockly.init_ = function(e) {
    var t = e.options,
        o = e.options.svg;
    if (Blockly.bindEvent_(o, "contextmenu", null, function(e) {
            Blockly.isTargetInput_(e) || e.preventDefault()
        }), Blockly.bindEvent_(o, "touchstart", null, function(e) {
            Blockly.longStart_(e, null)
        }), Blockly.bindEvent_(window, "resize", null, function() {
            Blockly.svgResize(e)
        }), Blockly.documentEventsBound_ || (Blockly.bindEvent_(document, "keydown", null, Blockly.onKeyDown_), Blockly.bindEvent_(document, "touchend", null, Blockly.longStop_), Blockly.bindEvent_(document, "touchcancel", null, Blockly.longStop_), document.addEventListener("mouseup", Blockly.onMouseUp_, !1), goog.userAgent.IPAD && Blockly.bindEvent_(window, "orientationchange", document, function() {
            Blockly.fireUiEvent(window, "resize")
        }), Blockly.documentEventsBound_ = !0), t.languageTree && (e.toolbox_ ? e.toolbox_.init(e) : e.flyout_ && (e.flyout_.init(e), e.flyout_.show(t.languageTree.childNodes), e.scrollX = e.flyout_.width_, t.RTL && (e.scrollX *= -1), o = "translate(" + e.scrollX + ", 0)", e.getCanvas().setAttribute("transform", o), e.getBubbleCanvas().setAttribute("transform", o))), t.hasScrollbars && (e.scrollbar = new Blockly.ScrollbarPair(e), e.scrollbar.resize()), t.hasSounds) {
        e.loadAudio_([t.pathToMedia + "click.mp3", t.pathToMedia + "click.wav", t.pathToMedia + "click.ogg"], "click"), e.loadAudio_([t.pathToMedia + "delete.mp3", t.pathToMedia + "delete.ogg", t.pathToMedia + "delete.wav"], "delete");
        var n = [],
            t = function() {
                for (; n.length;) Blockly.unbindEvent_(n.pop());
                e.preloadAudio_()
            };
        n.push(Blockly.bindEvent_(document, "mousemove", null, t)), n.push(Blockly.bindEvent_(document, "touchstart", null, t))
    }
}, Blockly.updateToolbox = function(e) {
    console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead."), Blockly.getMainWorkspace().updateToolbox(e)
}, Blockly.utils = {}, Blockly.addClass_ = function(e, t) {
    var o = e.getAttribute("class") || ""; - 1 == (" " + o + " ").indexOf(" " + t + " ") && (o && (o += " "), e.setAttribute("class", o + t))
}, Blockly.removeClass_ = function(e, t) {
    var o = e.getAttribute("class");
    if (-1 != (" " + o + " ").indexOf(" " + t + " ")) {
        for (var o = o.split(/\s+/), n = 0; n < o.length; n++) o[n] && o[n] != t || (o.splice(n, 1), n--);
        o.length ? e.setAttribute("class", o.join(" ")) : e.removeAttribute("class")
    }
}, Blockly.hasClass_ = function(e, t) {
    return -1 != (" " + e.getAttribute("class") + " ").indexOf(" " + t + " ")
}, Blockly.bindEvent_ = function(e, t, o, n) {
    var i = o ? function(e) {
        n.call(o, e)
    } : n;
    e.addEventListener(t, i, !1);
    var r = [
        [e, t, i]
    ];
    if (t in Blockly.bindEvent_.TOUCH_MAP)
        for (var s, i = function(e) {
                if (1 == e.changedTouches.length) {
                    var t = e.changedTouches[0];
                    e.clientX = t.clientX, e.clientY = t.clientY
                }
                n.call(o, e), e.preventDefault()
            }, l = 0; s = Blockly.bindEvent_.TOUCH_MAP[t][l]; l++) e.addEventListener(s, i, !1), r.push([e, s, i]);
    return r
}, Blockly.bindEvent_.TOUCH_MAP = {}, goog.events.BrowserFeature.TOUCH_ENABLED && (Blockly.bindEvent_.TOUCH_MAP = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
}), Blockly.unbindEvent_ = function(e) {
    for (; e.length;) {
        var t = e.pop(),
            o = t[2];
        t[0].removeEventListener(t[1], o, !1)
    }
    return o
}, Blockly.fireUiEventNow = function(e, t) {
    var o = Blockly.fireUiEvent.DB_[t];
    if (o) {
        var n = o.indexOf(e); - 1 != n && o.splice(n, 1)
    }
    if (document.createEvent) o = document.createEvent("UIEvents"), o.initEvent(t, !0, !0), e.dispatchEvent(o);
    else {
        if (!document.createEventObject) throw "FireEvent: No event creation mechanism.";
        o = document.createEventObject(), e.fireEvent("on" + t, o)
    }
}, Blockly.fireUiEvent = function(e, t) {
    var o = Blockly.fireUiEvent.DB_[t];
    if (o) {
        if (-1 != o.indexOf(e)) return;
        o.push(e)
    } else Blockly.fireUiEvent.DB_[t] = [e];
    setTimeout(function() {
        Blockly.fireUiEventNow(e, t)
    }, 0)
}, Blockly.fireUiEvent.DB_ = {}, Blockly.noEvent = function(e) {
    e.preventDefault(), e.stopPropagation()
}, Blockly.isTargetInput_ = function(e) {
    return "textarea" == e.target.type || "text" == e.target.type || "number" == e.target.type || "email" == e.target.type || "password" == e.target.type || "search" == e.target.type || "tel" == e.target.type || "url" == e.target.type
}, Blockly.getRelativeXY_ = function(e) {
    var t = {
            x: 0,
            y: 0
        },
        o = e.getAttribute("x");
    return o && (t.x = parseInt(o, 10)), (o = e.getAttribute("y")) && (t.y = parseInt(o, 10)), (e = (e = e.getAttribute("transform")) && e.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/)) && (t.x += parseInt(e[1], 10), e[3] && (t.y += parseInt(e[3], 10))), t
}, Blockly.getSvgXY_ = function(e) {
    var t = 0,
        o = 0;
    do {
        var n = Blockly.getRelativeXY_(e),
            t = t + n.x,
            o = o + n.y;
        e = e.parentNode
    } while (e && "svg" != e.nodeName.toLowerCase());
    return {
        x: t,
        y: o
    }
}, Blockly.createSvgElement = function(e, t, o) {
    e = document.createElementNS(Blockly.SVG_NS, e);
    for (var n in t) e.setAttribute(n, t[n]);
    return document.body.runtimeStyle && (e.runtimeStyle = e.currentStyle = e.style), o && o.appendChild(e), e
}, Blockly.isRightButton = function(e) {
    return e.ctrlKey && goog.userAgent.MAC ? !0 : 2 == e.button
}, Blockly.convertCoordinates = function(e, t, o, n) {
    o && (e -= window.scrollX || window.pageXOffset, t -= window.scrollY || window.pageYOffset);
    var i = n.createSVGPoint();
    return i.x = e, i.y = t, e = n.getScreenCTM(), o && (e = e.inverse()), i = i.matrixTransform(e), o || (i.x += window.scrollX || window.pageXOffset, i.y += window.scrollY || window.pageYOffset), i
}, Blockly.mouseToSvg = function(e, t) {
    return Blockly.convertCoordinates(e.clientX + (window.scrollX || window.pageXOffset), e.clientY + (window.scrollY || window.pageYOffset), !0, t)
}, Blockly.shortestStringLength = function(e) {
    if (!e.length) return 0;
    for (var t = e[0].length, o = 1; o < e.length; o++) t = Math.min(t, e[o].length);
    return t
}, Blockly.commonWordPrefix = function(e, t) {
    if (!e.length) return 0;
    if (1 == e.length) return e[0].length;
    for (var o = 0, n = t || Blockly.shortestStringLength(e), i = 0; n > i; i++) {
        for (var r = e[0][i], s = 1; s < e.length; s++)
            if (r != e[s][i]) return o;
            " " == r && (o = i + 1)
    }
    for (s = 1; s < e.length; s++)
        if ((r = e[s][i]) && " " != r) return o;
    return n
}, Blockly.commonWordSuffix = function(e, t) {
    if (!e.length) return 0;
    if (1 == e.length) return e[0].length;
    for (var o = 0, n = t || Blockly.shortestStringLength(e), i = 0; n > i; i++) {
        for (var r = e[0].substr(-i - 1, 1), s = 1; s < e.length; s++)
            if (r != e[s].substr(-i - 1, 1)) return o;
            " " == r && (o = i + 1)
    }
    for (s = 1; s < e.length; s++)
        if ((r = e[s].charAt(e[s].length - i - 1)) && " " != r) return o;
    return n
}, Blockly.isNumber = function(e) {
    return !!e.match(/^\s*-?\d+(\.\d+)?\s*$/)
}, Blockly.SVG_NS = "http://www.w3.org/2000/svg", Blockly.HTML_NS = "http://www.w3.org/1999/xhtml", Blockly.HSV_SATURATION = .45, Blockly.HSV_VALUE = .65, Blockly.SPRITE = {
    width: 64,
    height: 92,
    url: "sprites.png"
}, Blockly.makeColour = function(e) {
    return goog.color.hsvToHex(e, Blockly.HSV_SATURATION, 255 * Blockly.HSV_VALUE)
}, Blockly.INPUT_VALUE = 1, Blockly.OUTPUT_VALUE = 2, Blockly.NEXT_STATEMENT = 3, Blockly.PREVIOUS_STATEMENT = 4, Blockly.DUMMY_INPUT = 5, Blockly.ALIGN_LEFT = -1, Blockly.ALIGN_CENTRE = 0, Blockly.ALIGN_RIGHT = 1, Blockly.OPPOSITE_TYPE = [], Blockly.OPPOSITE_TYPE[Blockly.INPUT_VALUE] = Blockly.OUTPUT_VALUE, Blockly.OPPOSITE_TYPE[Blockly.OUTPUT_VALUE] = Blockly.INPUT_VALUE, Blockly.OPPOSITE_TYPE[Blockly.NEXT_STATEMENT] = Blockly.PREVIOUS_STATEMENT, Blockly.OPPOSITE_TYPE[Blockly.PREVIOUS_STATEMENT] = Blockly.NEXT_STATEMENT, Blockly.selected = null, Blockly.highlightedConnection_ = null, Blockly.localConnection_ = null, Blockly.DRAG_RADIUS = 5, Blockly.SNAP_RADIUS = 20, Blockly.BUMP_DELAY = 250, Blockly.COLLAPSE_CHARS = 30, Blockly.LONGPRESS = 750, Blockly.mainWorkspace = null, Blockly.clipboardXml_ = null, Blockly.clipboardSource_ = null, Blockly.dragMode_ = 0, Blockly.onTouchUpWrapper_ = null, Blockly.svgSize = function(e) {
    return {
        width: e.cachedWidth_,
        height: e.cachedHeight_
    }
}, Blockly.svgResize = function(e) {
    for (; e.options.parentWorkspace;) e = e.options.parentWorkspace;
    var t = e.options.svg,
        o = t.parentNode;
    if (o) {
        var n = o.offsetWidth,
            o = o.offsetHeight;
        t.cachedWidth_ != n && (t.setAttribute("width", n + "px"), t.cachedWidth_ = n), t.cachedHeight_ != o && (t.setAttribute("height", o + "px"), t.cachedHeight_ = o), e.resize()
    }
}, Blockly.onMouseUp_ = function(e) {
    e = Blockly.getMainWorkspace(), Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN), e.isScrolling = !1, Blockly.onTouchUpWrapper_ && (Blockly.unbindEvent_(Blockly.onTouchUpWrapper_), Blockly.onTouchUpWrapper_ = null), Blockly.onMouseMoveWrapper_ && (Blockly.unbindEvent_(Blockly.onMouseMoveWrapper_), Blockly.onMouseMoveWrapper_ = null)
}, Blockly.onMouseMove_ = function(e) {
    var t = Blockly.getMainWorkspace();
    if (t.isScrolling) {
        Blockly.removeAllRanges();
        var o = e.clientX - t.startDragMouseX,
            n = e.clientY - t.startDragMouseY,
            i = t.startDragMetrics,
            r = t.startScrollX + o,
            s = t.startScrollY + n,
            r = Math.min(r, -i.contentLeft),
            s = Math.min(s, -i.contentTop),
            r = Math.max(r, i.viewWidth - i.contentLeft - i.contentWidth),
            s = Math.max(s, i.viewHeight - i.contentTop - i.contentHeight);
        t.scrollbar.set(-r - i.contentLeft, -s - i.contentTop), Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2)) > Blockly.DRAG_RADIUS && Blockly.longStop_(), e.stopPropagation()
    }
}, Blockly.onKeyDown_ = function(e) {
    if (!Blockly.isTargetInput_(e))
        if (27 == e.keyCode) Blockly.hideChaff();
        else if (8 == e.keyCode || 46 == e.keyCode) try {
        Blockly.selected && Blockly.selected.isDeletable() && (Blockly.hideChaff(), Blockly.selected.dispose(!0, !0))
    } finally {
        e.preventDefault()
    } else(e.altKey || e.ctrlKey || e.metaKey) && (Blockly.selected && Blockly.selected.isDeletable() && Blockly.selected.isMovable() && (Blockly.hideChaff(), 67 == e.keyCode ? Blockly.copy_(Blockly.selected) : 88 == e.keyCode && (Blockly.copy_(Blockly.selected), Blockly.selected.dispose(!0, !0))), 86 == e.keyCode && Blockly.clipboardXml_ && Blockly.clipboardSource_.paste(Blockly.clipboardXml_))
}, Blockly.terminateDrag_ = function() {
    Blockly.BlockSvg.terminateDrag_(), Blockly.Flyout.terminateDrag_()
}, Blockly.longPid_ = 0, Blockly.longStart_ = function(e, t) {
    Blockly.longStop_(), Blockly.longPid_ = setTimeout(function() {
        e.button = 2, t ? t.onMouseDown_(e) : Blockly.onMouseDown_(e)
    }, Blockly.LONGPRESS)
}, Blockly.longStop_ = function() {
    Blockly.longPid_ && (clearTimeout(Blockly.longPid_), Blockly.longPid_ = 0)
}, Blockly.copy_ = function(e) {
    var t = Blockly.Xml.blockToDom_(e);
    Blockly.Xml.deleteNext(t);
    var o = e.getRelativeToSurfaceXY();
    t.setAttribute("x", e.RTL ? -o.x : o.x), t.setAttribute("y", o.y), Blockly.clipboardXml_ = t, Blockly.clipboardSource_ = e.workspace
}, Blockly.onContextMenu_ = function(e) {
    Blockly.isTargetInput_(e) || e.preventDefault()
}, Blockly.hideChaff = function(e) {
    Blockly.Tooltip.hide(), Blockly.WidgetDiv.hide(), e || (e = Blockly.getMainWorkspace(), e.toolbox_ && e.toolbox_.flyout_ && e.toolbox_.flyout_.autoClose && e.toolbox_.clearSelection())
}, Blockly.removeAllRanges = function() {
    getSelection() && setTimeout(function() {
        try {
            var e = getSelection();
            e.isCollapsed || e.removeAllRanges()
        } catch (t) {}
    }, 0)
}, Blockly.getMainWorkspaceMetrics_ = function() {
    var e = Blockly.svgSize(this.options.svg);
    this.toolbox_ && (e.width -= this.toolbox_.width);
    var t = e.width - Blockly.Scrollbar.scrollbarThickness,
        o = e.height - Blockly.Scrollbar.scrollbarThickness;
    try {
        var n = this.getCanvas().getBBox()
    } catch (i) {
        return null
    }
    if (this.scrollbar) var r = this.RTL ? 0 : Blockly.Scrollbar.scrollbarThickness,
        s = Math.min(n.x - t / 2, n.x + n.width - t - (this.RTL ? Blockly.Scrollbar.scrollbarThickness : 0) + 5),
        t = Math.max(n.x + n.width + t / 2, n.x + t + r - 5),
        r = Math.min(n.y - o / 2, n.y + n.height - o + 5),
        o = Math.max(n.y + n.height + o / 2, n.y + o + Blockly.Scrollbar.scrollbarThickness - 5);
    else s = n.x, t = s + n.width, r = n.y, o = r + n.height;
    return n = 0, !this.RTL && this.toolbox_ && (n = this.toolbox_.width), {
        viewHeight: e.height,
        viewWidth: e.width,
        contentHeight: o - r,
        contentWidth: t - s,
        viewTop: -this.scrollY,
        viewLeft: -this.scrollX,
        contentTop: r,
        contentLeft: s,
        absoluteTop: 0,
        absoluteLeft: n
    }
}, Blockly.setMainWorkspaceMetrics_ = function(e) {
    if (!this.scrollbar) throw "Attempt to set main workspace scroll without scrollbars.";
    var t = this.getMetrics();
    goog.isNumber(e.x) && (this.scrollX = -t.contentWidth * e.x - t.contentLeft), goog.isNumber(e.y) && (this.scrollY = -t.contentHeight * e.y - t.contentTop), e = this.scrollX + t.absoluteLeft, t = this.scrollY + t.absoluteTop, this.translate(e, t), this.options.gridPattern && (this.options.gridPattern.setAttribute("x", e), this.options.gridPattern.setAttribute("y", t))
}, Blockly.doCommand = function(e) {
    Blockly.Realtime.isEnabled ? Blockly.Realtime.doCommand(e) : e()
}, Blockly.addChangeListener = function(e) {
    return console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."), Blockly.getMainWorkspace().addChangeListener(e)
}, Blockly.getMainWorkspace = function() {
    return Blockly.mainWorkspace
}, goog.global.Blockly || (goog.global.Blockly = {}), goog.global.Blockly.getMainWorkspace = Blockly.getMainWorkspace, goog.global.Blockly.addChangeListener = Blockly.addChangeListener, goog.global.Blockly.removeChangeListener = Blockly.removeChangeListener, Blockly.Blocks.colour = {}, Blockly.Blocks.colour.HUE = 20, Blockly.Blocks.colour_picker = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL), this.setColour(Blockly.Blocks.colour.HUE), this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"), "COLOUR"), this.setOutput(!0, "Colour"), this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP)
    }
}, Blockly.Blocks.colour_random = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_RANDOM_HELPURL), this.setColour(Blockly.Blocks.colour.HUE), this.appendDummyInput().appendField(Blockly.Msg.COLOUR_RANDOM_TITLE), this.setOutput(!0, "Colour"), this.setTooltip(Blockly.Msg.COLOUR_RANDOM_TOOLTIP)
    }
}, Blockly.Blocks.colour_rgb = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL), this.setColour(Blockly.Blocks.colour.HUE), this.appendValueInput("RED").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_TITLE).appendField(Blockly.Msg.COLOUR_RGB_RED), this.appendValueInput("GREEN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_GREEN), this.appendValueInput("BLUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_BLUE), this.setOutput(!0, "Colour"), this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP)
    }
}, Blockly.Blocks.colour_blend = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL), this.setColour(Blockly.Blocks.colour.HUE), this.appendValueInput("COLOUR1").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_TITLE).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1), this.appendValueInput("COLOUR2").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2), this.appendValueInput("RATIO").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_RATIO), this.setOutput(!0, "Colour"), this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP)
    }
}, Blockly.Blocks.lists = {}, Blockly.Blocks.lists.HUE = 260, Blockly.Blocks.lists_create_empty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.setOutput(!0, "Array"), this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE), this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP)
    }
}, Blockly.Blocks.lists_create_with = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.itemCount_ = 3, this.updateShape_(), this.setOutput(!0, "Array"), this.setMutator(new Blockly.Mutator(["lists_create_with_item"])), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("items", this.itemCount_), e
    },
    domToMutation: function(e) {
        this.itemCount_ = parseInt(e.getAttribute("items"), 10), this.updateShape_()
    },
    decompose: function(e) {
        var t = Blockly.Block.obtain(e, "lists_create_with_container");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 0; n < this.itemCount_; n++) {
            var i = Blockly.Block.obtain(e, "lists_create_with_item");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return t
    },
    compose: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = [], o = 0; e;) t[o] = e.valueConnection_, e = e.nextConnection && e.nextConnection.targetBlock(), o++;
        for (this.itemCount_ = o, this.updateShape_(), o = 0; o < this.itemCount_; o++) t[o] && this.getInput("ADD" + o).connection.connect(t[o])
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 0; e;) {
            var o = this.getInput("ADD" + t);
            e.valueConnection_ = o && o.connection.targetConnection, t++, e = e.nextConnection && e.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else
            for (var e = 0; this.getInput("ADD" + e);) this.removeInput("ADD" + e), e++;
        if (0 == this.itemCount_) this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
        else
            for (e = 0; e < this.itemCount_; e++) {
                var t = this.appendValueInput("ADD" + e);
                0 == e && t.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH)
            }
    }
}, Blockly.Blocks.lists_create_with_container = {
    init: function() {
        this.setColour(Blockly.Blocks.lists.HUE), this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.lists_create_with_item = {
    init: function() {
        this.setColour(Blockly.Blocks.lists.HUE), this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.lists_repeat = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_REPEAT_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.setOutput(!0, "Array"), this.interpolateMsg(Blockly.Msg.LISTS_REPEAT_TITLE, ["ITEM", null, Blockly.ALIGN_RIGHT], ["NUM", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setTooltip(Blockly.Msg.LISTS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.lists_length = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_LENGTH_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.interpolateMsg(Blockly.Msg.LISTS_LENGTH_TITLE, ["VALUE", ["Array", "String"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setOutput(!0, "Number"), this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP)
    }
}, Blockly.Blocks.lists_isEmpty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_IS_EMPTY_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.interpolateMsg(Blockly.Msg.LISTS_IS_EMPTY_TITLE, ["VALUE", ["Array", "String"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setOutput(!0, "Boolean"), this.setTooltip(Blockly.Msg.LISTS_TOOLTIP)
    }
}, Blockly.Blocks.lists_indexOf = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.setOutput(!0, "Number"), this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST), this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(e), "END"), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP)
    }
}, Blockly.Blocks.lists_getIndex = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_GET_INDEX_GET, "GET"],
            [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
            [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), e = new Blockly.FieldDropdown(e, function(e) {
            this.sourceBlock_.updateStatement_("REMOVE" == e)
        }), this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST), this.appendDummyInput().appendField(e, "MODE").appendField("", "SPACE"), this.appendDummyInput("AT"), Blockly.Msg.LISTS_GET_INDEX_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL), this.setInputsInline(!0), this.setOutput(!0), this.updateAt_(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("MODE") + "_" + t.getFieldValue("WHERE");
            return Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_" + e]
        })
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        e.setAttribute("statement", !this.outputConnection);
        var t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("statement");
        this.updateStatement_(t), e = "false" != e.getAttribute("at"), this.updateAt_(e)
    },
    updateStatement_: function(e) {
        e != !this.outputConnection && (this.unplug(!0, !0), e ? (this.setOutput(!1), this.setPreviousStatement(!0), this.setNextStatement(!0)) : (this.setPreviousStatement(!1), this.setNextStatement(!1), this.setOutput(!0)))
    },
    updateAt_: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt_(o), n.setFieldValue(t, "WHERE"), null
            }
        });
        this.getInput("AT").appendField(t, "WHERE"), Blockly.Msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null)
    }
}, Blockly.Blocks.lists_setIndex = {
    init: function() {
        var e = [
            [Blockly.Msg.LISTS_SET_INDEX_SET, "SET"],
            [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
            [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
            [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST), this.appendDummyInput().appendField(new Blockly.FieldDropdown(e), "MODE").appendField("", "SPACE"), this.appendDummyInput("AT"), this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP), this.updateAt_(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("MODE") + "_" + t.getFieldValue("WHERE");
            return Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_" + e]
        })
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        e = "false" != e.getAttribute("at"), this.updateAt_(e)
    },
    updateAt_: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT");
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt_(o), n.setFieldValue(t, "WHERE"), null
            }
        });
        this.moveInputBefore("AT", "TO"), this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO"), this.getInput("AT").appendField(t, "WHERE")
    }
}, Blockly.Blocks.lists_getSublist = {
    init: function() {
        this.WHERE_OPTIONS_1 = [
            [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]
        ], this.WHERE_OPTIONS_2 = [
            [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
            [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
            [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, "LAST"]
        ], this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST), this.appendDummyInput("AT1"), this.appendDummyInput("AT2"), Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL), this.setInputsInline(!0), this.setOutput(!0, "Array"), this.updateAt_(1, !0), this.updateAt_(2, !0), this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at1", t), t = this.getInput("AT2").type == Blockly.INPUT_VALUE, e.setAttribute("at2", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("at1");
        e = "true" == e.getAttribute("at2"), this.updateAt_(1, t), this.updateAt_(2, e)
    },
    updateAt_: function(e, t) {
        this.removeInput("AT" + e), this.removeInput("ORDINAL" + e, !0), t ? (this.appendValueInput("AT" + e).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + e).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + e);
        var o = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + e], function(o) {
            var n = "FROM_START" == o || "FROM_END" == o;
            if (n != t) {
                var i = this.sourceBlock_;
                return i.updateAt_(e, n), i.setFieldValue(o, "WHERE" + e), null
            }
        });
        this.getInput("AT" + e).appendField(o, "WHERE" + e), 1 == e && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2")), Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null)
    }
}, Blockly.Blocks.lists_split = {
    init: function() {
        var e = this,
            t = new Blockly.FieldDropdown([
                [Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
                [Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]
            ], function(t) {
                "SPLIT" == t ? (e.outputConnection.setCheck("Array"), e.getInput("INPUT").setCheck("String")) : (e.outputConnection.setCheck("String"), e.getInput("INPUT").setCheck("Array"))
            });
        this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL), this.setColour(Blockly.Blocks.lists.HUE), this.appendValueInput("INPUT").setCheck("String").appendField(t, "MODE"), this.appendValueInput("DELIM").setCheck("String").appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER), this.setInputsInline(!0), this.setOutput(!0, "Array"), this.setTooltip(function() {
            var t = e.getFieldValue("MODE");
            if ("SPLIT" == t) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == t) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;
            throw "Unknown mode: " + t
        })
    }
}, Blockly.Blocks.logic = {}, Blockly.Blocks.logic.HUE = 210, Blockly.Blocks.controls_if = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF), this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
        var e = this;
        this.setTooltip(function() {
            return e.elseifCount_ || e.elseCount_ ? !e.elseifCount_ && e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_2 : e.elseifCount_ && !e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_3 : e.elseifCount_ && e.elseCount_ ? Blockly.Msg.CONTROLS_IF_TOOLTIP_4 : "" : Blockly.Msg.CONTROLS_IF_TOOLTIP_1
        }), this.elseCount_ = this.elseifCount_ = 0
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) return null;
        var e = document.createElement("mutation");
        return this.elseifCount_ && e.setAttribute("elseif", this.elseifCount_), this.elseCount_ && e.setAttribute("else", 1), e
    },
    domToMutation: function(e) {
        for (this.elseifCount_ = parseInt(e.getAttribute("elseif"), 10), this.elseCount_ = parseInt(e.getAttribute("else"), 10), e = 1; e <= this.elseifCount_; e++) this.appendValueInput("IF" + e).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF), this.appendStatementInput("DO" + e).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.elseCount_ && this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    },
    decompose: function(e) {
        var t = Blockly.Block.obtain(e, "controls_if_if");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 1; n <= this.elseifCount_; n++) {
            var i = Blockly.Block.obtain(e, "controls_if_elseif");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return this.elseCount_ && (e = Blockly.Block.obtain(e, "controls_if_else"), e.initSvg(), o.connect(e.previousConnection)), t
    },
    compose: function(e) {
        this.elseCount_ && this.removeInput("ELSE"), this.elseCount_ = 0;
        for (var t = this.elseifCount_; t > 0; t--) this.removeInput("IF" + t), this.removeInput("DO" + t);
        for (this.elseifCount_ = 0, e = e.getInputTargetBlock("STACK"); e;) {
            switch (e.type) {
                case "controls_if_elseif":
                    this.elseifCount_++;
                    var t = this.appendValueInput("IF" + this.elseifCount_).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
                        o = this.appendStatementInput("DO" + this.elseifCount_);
                    o.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN), e.valueConnection_ && t.connection.connect(e.valueConnection_), e.statementConnection_ && o.connection.connect(e.statementConnection_);
                    break;
                case "controls_if_else":
                    this.elseCount_++, t = this.appendStatementInput("ELSE"), t.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE), e.statementConnection_ && t.connection.connect(e.statementConnection_);
                    break;
                default:
                    throw "Unknown block type."
            }
            e = e.nextConnection && e.nextConnection.targetBlock()
        }
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 1; e;) {
            switch (e.type) {
                case "controls_if_elseif":
                    var o = this.getInput("IF" + t),
                        n = this.getInput("DO" + t);
                    e.valueConnection_ = o && o.connection.targetConnection, e.statementConnection_ = n && n.connection.targetConnection, t++;
                    break;
                case "controls_if_else":
                    n = this.getInput("ELSE"), e.statementConnection_ = n && n.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type."
            }
            e = e.nextConnection && e.nextConnection.targetBlock()
        }
    }
}, Blockly.Blocks.controls_if_if = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE), this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.controls_if_elseif = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE), this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.controls_if_else = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE), this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE), this.setPreviousStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.logic_compare = {
    init: function() {
        var e = this.RTL ? [
            ["=", "EQ"],
            ["≠", "NEQ"],
            [">", "LT"],
            ["≥", "LTE"],
            ["<", "GT"],
            ["≤", "GTE"]
        ] : [
            ["=", "EQ"],
            ["≠", "NEQ"],
            ["<", "LT"],
            ["≤", "LTE"],
            [">", "GT"],
            ["≥", "GTE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.setOutput(!0, "Boolean"), this.appendValueInput("A"), this.appendValueInput("B").appendField(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            }[e]
        }), this.prevBlocks_ = [null, null]
    },
    onchange: function() {
        if (this.workspace) {
            var e = this.getInputTargetBlock("A"),
                t = this.getInputTargetBlock("B");
            if (e && t && !e.outputConnection.checkType_(t.outputConnection))
                for (var o = 0; o < this.prevBlocks_.length; o++) {
                    var n = this.prevBlocks_[o];
                    (n === e || n === t) && (n.setParent(null), n.bumpNeighbours_())
                }
            this.prevBlocks_[0] = e, this.prevBlocks_[1] = t
        }
    }
}, Blockly.Blocks.logic_operation = {
    init: function() {
        var e = [
            [Blockly.Msg.LOGIC_OPERATION_AND, "AND"],
            [Blockly.Msg.LOGIC_OPERATION_OR, "OR"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.setOutput(!0, "Boolean"), this.appendValueInput("A").setCheck("Boolean"), this.appendValueInput("B").setCheck("Boolean").appendField(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                AND: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                OR: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            }[e]
        })
    }
}, Blockly.Blocks.logic_negate = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_NEGATE_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.setOutput(!0, "Boolean"), this.interpolateMsg(Blockly.Msg.LOGIC_NEGATE_TITLE, ["BOOL", "Boolean", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setTooltip(Blockly.Msg.LOGIC_NEGATE_TOOLTIP)
    }
}, Blockly.Blocks.logic_boolean = {
    init: function() {
        var e = [
            [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
            [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.setOutput(!0, "Boolean"), this.appendDummyInput().appendField(new Blockly.FieldDropdown(e), "BOOL"), this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
}, Blockly.Blocks.logic_null = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_NULL_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.setOutput(!0), this.appendDummyInput().appendField(Blockly.Msg.LOGIC_NULL), this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP)
    }
}, Blockly.Blocks.logic_ternary = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL), this.setColour(Blockly.Blocks.logic.HUE), this.appendValueInput("IF").setCheck("Boolean").appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION), this.appendValueInput("THEN").appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE), this.appendValueInput("ELSE").appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE), this.setOutput(!0), this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP), this.prevParentConnection_ = null
    },
    onchange: function() {
        if (this.workspace) {
            var e = this.getInputTargetBlock("THEN"),
                t = this.getInputTargetBlock("ELSE"),
                o = this.outputConnection.targetConnection;
            if ((e || t) && o)
                for (var n = 0; 2 > n; n++) {
                    var i = 1 == n ? e : t;
                    i && !i.outputConnection.checkType_(o) && (o === this.prevParentConnection_ ? (this.setParent(null), o.sourceBlock_.bumpNeighbours_()) : (i.setParent(null), i.bumpNeighbours_()))
                }
            this.prevParentConnection_ = o
        }
    }
}, Blockly.Blocks.loops = {}, Blockly.Blocks.loops.HUE = 120, Blockly.Blocks.controls_repeat = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT).appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.nonnegativeIntegerValidator), "TIMES").appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_TIMES), this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.controls_repeat_ext = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE, ["TIMES", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP)
    }
}, Blockly.Blocks.controls_whileUntil = {
    init: function() {
        var e = [
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]
        ];
        this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(e), "MODE"), this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("MODE");
            return {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            }[e]
        })
    }
}, Blockly.Blocks.controls_for = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_FOR_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH).appendField(new Blockly.FieldVariable(null), "VAR"), this.interpolateMsg(Blockly.Msg.CONTROLS_FOR_INPUT_FROM_TO_BY, ["FROM", "Number", Blockly.ALIGN_RIGHT], ["TO", "Number", Blockly.ALIGN_RIGHT], ["BY", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setInputsInline(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    },
    customContextMenu: function(e) {
        if (!this.isCollapsed()) {
            var t = {
                    enabled: !0
                },
                o = this.getFieldValue("VAR");
            t.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", o), o = goog.dom.createDom("field", null, o), o.setAttribute("name", "VAR"), o = goog.dom.createDom("block", null, o), o.setAttribute("type", "variables_get"), t.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(t)
        }
    }
}, Blockly.Blocks.controls_forEach = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_FOREACH_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_ITEM).appendField(new Blockly.FieldVariable(null), "VAR").appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST), Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL && (this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL), this.setInputsInline(!0)), this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    },
    customContextMenu: Blockly.Blocks.controls_for.customContextMenu
}, Blockly.Blocks.controls_flow_statements = {
    init: function() {
        var e = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL), this.setColour(Blockly.Blocks.loops.HUE), this.appendDummyInput().appendField(new Blockly.FieldDropdown(e), "FLOW"), this.setPreviousStatement(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("FLOW");
            return {
                BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
                CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
            }[e]
        })
    },
    onchange: function() {
        if (this.workspace) {
            var e = !1,
                t = this;
            do {
                if ("controls_repeat" == t.type || "controls_repeat_ext" == t.type || "controls_forEach" == t.type || "controls_for" == t.type || "controls_whileUntil" == t.type) {
                    e = !0;
                    break
                }
                t = t.getSurroundParent()
            } while (t);
            e ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
        }
    }
}, Blockly.Blocks.math = {}, Blockly.Blocks.math.HUE = 230, Blockly.Blocks.math_number = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.appendDummyInput().appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "NUM"), this.setOutput(!0, "Number"), this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
}, Blockly.Blocks.math_arithmetic = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"],
            [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"],
            [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"],
            [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.appendValueInput("A").setCheck("Number"), this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(e), "OP"), this.setInputsInline(!0);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            }[e]
        })
    }
}, Blockly.Blocks.math_single = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
            [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
            ["-", "NEG"],
            ["ln", "LN"],
            ["log10", "LOG10"],
            ["e^", "EXP"],
            ["10^", "POW10"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.interpolateMsg("%1 %2", ["OP", new Blockly.FieldDropdown(e)], ["NUM", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT);
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
                LN: Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
                LOG10: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
                EXP: Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
                POW10: Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10
            }[e]
        })
    }
}, Blockly.Blocks.math_trig = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
            [Blockly.Msg.MATH_TRIG_COS, "COS"],
            [Blockly.Msg.MATH_TRIG_TAN, "TAN"],
            [Blockly.Msg.MATH_TRIG_ASIN, "ASIN"],
            [Blockly.Msg.MATH_TRIG_ACOS, "ACOS"],
            [Blockly.Msg.MATH_TRIG_ATAN, "ATAN"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(e), "OP");
        var t = this;
        this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,
                ASIN: Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN
            }[e]
        })
    }
}, Blockly.Blocks.math_constant = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            ["π", "PI"],
            ["e", "E"],
            ["φ", "GOLDEN_RATIO"],
            ["sqrt(2)", "SQRT2"],
            ["sqrt(½)", "SQRT1_2"],
            ["∞", "INFINITY"]
        ]), "CONSTANT"), this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
}, Blockly.Blocks.math_number_property = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
            [Blockly.Msg.MATH_IS_ODD, "ODD"],
            [Blockly.Msg.MATH_IS_PRIME, "PRIME"],
            [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
            [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
            [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]
        ];
        this.setColour(Blockly.Blocks.math.HUE), this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number"), e = new Blockly.FieldDropdown(e, function(e) {
            this.sourceBlock_.updateShape_("DIVISIBLE_BY" == e)
        }), this.appendDummyInput().appendField(e, "PROPERTY"), this.setInputsInline(!0), this.setOutput(!0, "Boolean"), this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = "DIVISIBLE_BY" == this.getFieldValue("PROPERTY");
        return e.setAttribute("divisor_input", t), e
    },
    domToMutation: function(e) {
        e = "true" == e.getAttribute("divisor_input"), this.updateShape_(e)
    },
    updateShape_: function(e) {
        var t = this.getInput("DIVISOR");
        e ? t || this.appendValueInput("DIVISOR").setCheck("Number") : t && this.removeInput("DIVISOR")
    }
}, Blockly.Blocks.math_change = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CHANGE_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.interpolateMsg(Blockly.Msg.MATH_CHANGE_TITLE_CHANGE + " %1 " + Blockly.Msg.MATH_CHANGE_INPUT_BY + " %2", ["VAR", new Blockly.FieldVariable(Blockly.Msg.MATH_CHANGE_TITLE_ITEM)], ["DELTA", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    }
}, Blockly.Blocks.math_round = {
    init: function() {
        var e = [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]
        ];
        this.setHelpUrl(Blockly.Msg.MATH_ROUND_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(e), "OP"), this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)
    }
}, Blockly.Blocks.math_on_list = {
    init: function() {
        var e = [
                [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
                [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]
            ],
            t = this;
        this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), e = new Blockly.FieldDropdown(e, function(e) {
            "MODE" == e ? t.outputConnection.setCheck("Array") : t.outputConnection.setCheck("Number")
        }), this.appendValueInput("LIST").setCheck("Array").appendField(e, "OP"), this.setTooltip(function() {
            var e = t.getFieldValue("OP");
            return {
                SUM: Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
                MIN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
                MAX: Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
                AVERAGE: Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
                MEDIAN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
                MODE: Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
                STD_DEV: Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
                RANDOM: Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
            }[e]
        })
    }
}, Blockly.Blocks.math_modulo = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_MODULO_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE, ["DIVIDEND", "Number", Blockly.ALIGN_RIGHT], ["DIVISOR", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP)
    }
}, Blockly.Blocks.math_constrain = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CONSTRAIN_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.interpolateMsg(Blockly.Msg.MATH_CONSTRAIN_TITLE, ["VALUE", "Number", Blockly.ALIGN_RIGHT], ["LOW", "Number", Blockly.ALIGN_RIGHT], ["HIGH", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_CONSTRAIN_TOOLTIP)
    }
}, Blockly.Blocks.math_random_int = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_RANDOM_INT_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.interpolateMsg(Blockly.Msg.MATH_RANDOM_INT_TITLE, ["FROM", "Number", Blockly.ALIGN_RIGHT], ["TO", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.MATH_RANDOM_INT_TOOLTIP)
    }
}, Blockly.Blocks.math_random_float = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL), this.setColour(Blockly.Blocks.math.HUE), this.setOutput(!0, "Number"), this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM), this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)
    }
}, Blockly.Blocks.procedures = {}, Blockly.Blocks.procedures.HUE = 290, Blockly.Blocks.procedures_defnoreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL), this.setColour(Blockly.Blocks.procedures.HUE);
        var e = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this),
            e = new Blockly.FieldTextInput(e, Blockly.Procedures.rename);
        e.setSpellcheck(!1), this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(e, "NAME").appendField("", "PARAMS"), this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"])), this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP), this.arguments_ = [], this.setStatements_(!0), this.statementConnection_ = null
    },
    setStatements_: function(e) {
        this.hasStatements_ !== e && (e ? (this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = e)
    },
    updateParams_: function() {
        for (var e = !1, t = {}, o = 0; o < this.arguments_.length; o++) {
            if (t["arg_" + this.arguments_[o].toLowerCase()]) {
                e = !0;
                break
            }
            t["arg_" + this.arguments_[o].toLowerCase()] = !0
        }
        e ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING) : this.setWarningText(null), e = "", this.arguments_.length && (e = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", ")), this.setFieldValue(e, "PARAMS")
    },
    mutationToDom: function() {
        for (var e = document.createElement("mutation"), t = 0; t < this.arguments_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.arguments_[t]), e.appendChild(o)
        }
        return this.hasStatements_ || e.setAttribute("statements", "false"), e
    },
    domToMutation: function(e) {
        this.arguments_ = [];
        for (var t, o = 0; t = e.childNodes[o]; o++) "arg" == t.nodeName.toLowerCase() && this.arguments_.push(t.getAttribute("name"));
        this.updateParams_(), this.setStatements_("false" !== e.getAttribute("statements"))
    },
    decompose: function(e) {
        var t = Blockly.Block.obtain(e, "procedures_mutatorcontainer");
        t.initSvg(), this.getInput("RETURN") ? t.setFieldValue(this.hasStatements_ ? "TRUE" : "FALSE", "STATEMENTS") : t.getInput("STATEMENT_INPUT").setVisible(!1);
        for (var o = t.getInput("STACK").connection, n = 0; n < this.arguments_.length; n++) {
            var i = Blockly.Block.obtain(e, "procedures_mutatorarg");
            i.initSvg(), i.setFieldValue(this.arguments_[n], "NAME"), i.oldLocation = n, o.connect(i.previousConnection), o = i.nextConnection
        }
        return Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.workspace, this.arguments_, null), t
    },
    compose: function(e) {
        this.arguments_ = [], this.paramIds_ = [];
        for (var t = e.getInputTargetBlock("STACK"); t;) this.arguments_.push(t.getFieldValue("NAME")), this.paramIds_.push(t.id), t = t.nextConnection && t.nextConnection.targetBlock();
        this.updateParams_(), Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.workspace, this.arguments_, this.paramIds_), e = e.getFieldValue("STATEMENTS"), null !== e && (e = "TRUE" == e, this.hasStatements_ != e) && (e ? (this.setStatements_(!0), e = this.getInput("STACK").connection, e.targetConnection || !this.statementConnection_ || this.statementConnection_.targetConnection || this.statementConnection_.sourceBlock_.workspace != this.workspace ? this.statementConnection_ = null : e.connect(this.statementConnection_)) : (e = this.getInput("STACK").connection, (this.statementConnection_ = e.targetConnection) && (e = e.targetBlock(), e.setParent(null), e.bumpNeighbours_()), this.setStatements_(!1)))
    },
    dispose: function() {
        var e = this.getFieldValue("NAME");
        Blockly.Procedures.disposeCallers(e, this.workspace), this.constructor.prototype.dispose.apply(this, arguments)
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !1]
    },
    getVars: function() {
        return this.arguments_
    },
    renameVar: function(e, t) {
        for (var o = !1, n = 0; n < this.arguments_.length; n++) Blockly.Names.equals(e, this.arguments_[n]) && (this.arguments_[n] = t, o = !0);
        if (o && (this.updateParams_(), this.mutator.isVisible()))
            for (var i, o = this.mutator.workspace_.getAllBlocks(), n = 0; i = o[n]; n++) "procedures_mutatorarg" == i.type && Blockly.Names.equals(e, i.getFieldValue("NAME")) && i.setFieldValue(t, "NAME")
    },
    customContextMenu: function(e) {
        var t = {
                enabled: !0
            },
            o = this.getFieldValue("NAME");
        t.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", o);
        var n = goog.dom.createDom("mutation");
        n.setAttribute("name", o);
        for (var i = 0; i < this.arguments_.length; i++) o = goog.dom.createDom("arg"), o.setAttribute("name", this.arguments_[i]), n.appendChild(o);
        if (n = goog.dom.createDom("block", null, n), n.setAttribute("type", this.callType_), t.callback = Blockly.ContextMenu.callbackFactory(this, n), e.push(t), !this.isCollapsed())
            for (i = 0; i < this.arguments_.length; i++) t = {
                enabled: !0
            }, o = this.arguments_[i], t.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", o), n = goog.dom.createDom("field", null, o), n.setAttribute("name", "VAR"), n = goog.dom.createDom("block", null, n), n.setAttribute("type", "variables_get"), t.callback = Blockly.ContextMenu.callbackFactory(this, n), e.push(t)
    },
    callType_: "procedures_callnoreturn"
}, Blockly.Blocks.procedures_defreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL), this.setColour(Blockly.Blocks.procedures.HUE);
        var e = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this),
            e = new Blockly.FieldTextInput(e, Blockly.Procedures.rename);
        e.setSpellcheck(!1), this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(e, "NAME").appendField("", "PARAMS"), this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"])), this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP), this.arguments_ = [], this.setStatements_(!0), this.statementConnection_ = null
    },
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !0]
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    callType_: "procedures_callreturn"
}, Blockly.Blocks.procedures_mutatorcontainer = {
    init: function() {
        this.setColour(Blockly.Blocks.procedures.HUE), this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE), this.appendStatementInput("STACK"), this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS"), this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.procedures_mutatorarg = {
    init: function() {
        this.setColour(Blockly.Blocks.procedures.HUE), this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(new Blockly.FieldTextInput("x", this.validator_), "NAME"), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP), this.contextMenu = !1
    },
    validator_: function(e) {
        return (e = e.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null
    }
}, Blockly.Blocks.procedures_callnoreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL), this.setColour(Blockly.Blocks.procedures.HUE), this.appendDummyInput("TOPROW").appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL).appendField("", "NAME"), this.setPreviousStatement(!0), this.setNextStatement(!0), this.arguments_ = [], this.quarkConnections_ = {}, this.quarkArguments_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(e, t) {
        Blockly.Names.equals(e, this.getProcedureCall()) && (this.setFieldValue(t, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", t)))
    },
    setProcedureParameters: function(e, t) {
        if (t)
            if (goog.array.equals(this.arguments_, e)) this.quarkArguments_ = t;
            else {
                if (this.setCollapsed(!1), t.length != e.length) throw "Error: paramNames and paramIds must be the same length.";
                this.quarkArguments_ || (this.quarkConnections_ = {}, this.quarkArguments_ = e.join("\n") == this.arguments_.join("\n") ? t : []);
                var o = this.rendered;
                this.rendered = !1;
                for (var n = this.arguments_.length - 1; n >= 0; n--) {
                    var i = this.getInput("ARG" + n);
                    if (i) {
                        var r = i.connection.targetConnection;
                        this.quarkConnections_[this.quarkArguments_[n]] = r, this.removeInput("ARG" + n)
                    }
                }
                if (this.arguments_ = [].concat(e), this.renderArgs_(), this.quarkArguments_ = t)
                    for (n = 0; n < this.arguments_.length; n++) {
                        var i = this.getInput("ARG" + n),
                            s = this.quarkArguments_[n];
                        s in this.quarkConnections_ && (r = this.quarkConnections_[s], !r || r.targetConnection || r.sourceBlock_.workspace != this.workspace ? delete this.quarkConnections_[s] : i.connection.connect(r))
                    }(this.rendered = o) && this.render()
            }
        else this.quarkConnections_ = {}, this.quarkArguments_ = null
    },
    renderArgs_: function() {
        for (var e = 0; e < this.arguments_.length; e++) {
            var t = this.appendValueInput("ARG" + e).setAlign(Blockly.ALIGN_RIGHT).appendField(this.arguments_[e]);
            t.init()
        }(t = this.getInput("TOPROW")) && (this.arguments_.length ? this.getField_("WITH") || (t.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), t.init()) : this.getField_("WITH") && t.removeField("WITH"))
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        e.setAttribute("name", this.getProcedureCall());
        for (var t = 0; t < this.arguments_.length; t++) {
            var o = document.createElement("arg");
            o.setAttribute("name", this.arguments_[t]), e.appendChild(o)
        }
        return e
    },
    domToMutation: function(e) {
        var t = e.getAttribute("name");
        if (this.setFieldValue(t, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", t)), (t = Blockly.Procedures.getDefinition(t, this.workspace)) && t.mutator && t.mutator.isVisible()) this.setProcedureParameters(t.arguments_, t.paramIds_);
        else {
            for (var o, t = [], n = 0; o = e.childNodes[n]; n++) "arg" == o.nodeName.toLowerCase() && t.push(o.getAttribute("name"));
            this.setProcedureParameters(t, t)
        }
    },
    renameVar: function(e, t) {
        for (var o = 0; o < this.arguments_.length; o++) Blockly.Names.equals(e, this.arguments_[o]) && (this.arguments_[o] = t, this.getInput("ARG" + o).fieldRow[0].setText(t))
    },
    customContextMenu: function(e) {
        var t = {
            enabled: !0
        };
        t.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var o = this.getProcedureCall(),
            n = this.workspace;
        t.callback = function() {
            var e = Blockly.Procedures.getDefinition(o, n);
            e && e.select()
        }, e.push(t)
    }
}, Blockly.Blocks.procedures_callreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL), this.setColour(Blockly.Blocks.procedures.HUE), this.appendDummyInput("TOPROW").appendField(Blockly.Msg.PROCEDURES_CALLRETURN_CALL).appendField("", "NAME"), this.setOutput(!0), this.arguments_ = [], this.quarkConnections_ = {}, this.quarkArguments_ = null
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
    renderArgs_: Blockly.Blocks.procedures_callnoreturn.renderArgs_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu
}, Blockly.Blocks.procedures_ifreturn = {
    init: function() {
        this.setHelpUrl("http://c2.com/cgi/wiki?GuardClause"), this.setColour(Blockly.Blocks.procedures.HUE), this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF), this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP), this.hasReturnValue_ = !0
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("value", Number(this.hasReturnValue_)), e
    },
    domToMutation: function(e) {
        this.hasReturnValue_ = 1 == e.getAttribute("value"), this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.workspace) {
            var e = !1,
                t = this;
            do {
                if ("procedures_defnoreturn" == t.type || "procedures_defreturn" == t.type) {
                    e = !0;
                    break
                }
                t = t.getSurroundParent()
            } while (t);
            e ? ("procedures_defnoreturn" == t.type && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : "procedures_defreturn" != t.type || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null)) : this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING)
        }
    }
}, Blockly.Blocks.texts = {}, Blockly.Blocks.texts.HUE = 160, Blockly.Blocks.text = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.appendDummyInput().appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1)), this.setOutput(!0, "String"), this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    },
    newQuote_: function(e) {
        return new Blockly.FieldImage(e == this.RTL ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC", 12, 12, '"')
    }
}, Blockly.Blocks.text_join = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.itemCount_ = 2, this.updateShape_(), this.setOutput(!0, "String"), this.setMutator(new Blockly.Mutator(["text_create_join_item"])), this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation");
        return e.setAttribute("items", this.itemCount_), e
    },
    domToMutation: function(e) {
        this.itemCount_ = parseInt(e.getAttribute("items"), 10), this.updateShape_()
    },
    decompose: function(e) {
        var t = Blockly.Block.obtain(e, "text_create_join_container");
        t.initSvg();
        for (var o = t.getInput("STACK").connection, n = 0; n < this.itemCount_; n++) {
            var i = Blockly.Block.obtain(e, "text_create_join_item");
            i.initSvg(), o.connect(i.previousConnection), o = i.nextConnection
        }
        return t
    },
    compose: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = [], o = 0; e;) t[o] = e.valueConnection_, e = e.nextConnection && e.nextConnection.targetBlock(), o++;
        for (this.itemCount_ = o, this.updateShape_(), o = 0; o < this.itemCount_; o++) t[o] && this.getInput("ADD" + o).connection.connect(t[o])
    },
    saveConnections: function(e) {
        e = e.getInputTargetBlock("STACK");
        for (var t = 0; e;) {
            var o = this.getInput("ADD" + t);
            e.valueConnection_ = o && o.connection.targetConnection, t++, e = e.nextConnection && e.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else
            for (var e = 0; this.getInput("ADD" + e);) this.removeInput("ADD" + e), e++;
        if (0 == this.itemCount_) this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));
        else
            for (e = 0; e < this.itemCount_; e++) {
                var t = this.appendValueInput("ADD" + e);
                0 == e && t.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)
            }
    },
    newQuote_: Blockly.Blocks.text.newQuote_
}, Blockly.Blocks.text_create_join_container = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE), this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN), this.appendStatementInput("STACK"), this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.text_create_join_item = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE), this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP), this.contextMenu = !1
    }
}, Blockly.Blocks.text_append = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.appendValueInput("TEXT").appendField(Blockly.Msg.TEXT_APPEND_TO).appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), "VAR").appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT), this.setPreviousStatement(!0), this.setNextStatement(!0);
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    }
}, Blockly.Blocks.text_length = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_LENGTH_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.interpolateMsg(Blockly.Msg.TEXT_LENGTH_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setOutput(!0, "Number"), this.setTooltip(Blockly.Msg.TEXT_LENGTH_TOOLTIP)
    }
}, Blockly.Blocks.text_isEmpty = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_ISEMPTY_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.interpolateMsg(Blockly.Msg.TEXT_ISEMPTY_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setOutput(!0, "Boolean"), this.setTooltip(Blockly.Msg.TEXT_ISEMPTY_TOOLTIP)
    }
}, Blockly.Blocks.text_indexOf = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, "FIRST"],
            [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, "LAST"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.setOutput(!0, "Number"), this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT), this.appendValueInput("FIND").setCheck("String").appendField(new Blockly.FieldDropdown(e), "END"), Blockly.Msg.TEXT_INDEXOF_TAIL && this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL), this.setInputsInline(!0), this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP)
    }
}, Blockly.Blocks.text_charAt = {
    init: function() {
        this.WHERE_OPTIONS = [
            [Blockly.Msg.TEXT_CHARAT_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_CHARAT_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_CHARAT_FIRST, "FIRST"],
            [Blockly.Msg.TEXT_CHARAT_LAST, "LAST"],
            [Blockly.Msg.TEXT_CHARAT_RANDOM, "RANDOM"]
        ], this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.setOutput(!0, "String"), this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT), this.appendDummyInput("AT"), this.setInputsInline(!0), this.updateAt_(!0), this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at", t), e
    },
    domToMutation: function(e) {
        e = "false" != e.getAttribute("at"), this.updateAt_(e)
    },
    updateAt_: function(e) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), e ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"), Blockly.Msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));
        var t = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(t) {
            var o = "FROM_START" == t || "FROM_END" == t;
            if (o != e) {
                var n = this.sourceBlock_;
                return n.updateAt_(o), n.setFieldValue(t, "WHERE"), null
            }
        });
        this.getInput("AT").appendField(t, "WHERE")
    }
}, Blockly.Blocks.text_getSubstring = {
    init: function() {
        this.WHERE_OPTIONS_1 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
        ], this.WHERE_OPTIONS_2 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
        ], this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT), this.appendDummyInput("AT1"), this.appendDummyInput("AT2"), Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL), this.setInputsInline(!0), this.setOutput(!0, "String"), this.updateAt_(1, !0), this.updateAt_(2, !0), this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
    },
    mutationToDom: function() {
        var e = document.createElement("mutation"),
            t = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        return e.setAttribute("at1", t), t = this.getInput("AT2").type == Blockly.INPUT_VALUE, e.setAttribute("at2", t), e
    },
    domToMutation: function(e) {
        var t = "true" == e.getAttribute("at1");
        e = "true" == e.getAttribute("at2"), this.updateAt_(1, t), this.updateAt_(2, e)
    },
    updateAt_: function(e, t) {
        this.removeInput("AT" + e), this.removeInput("ORDINAL" + e, !0), t ? (this.appendValueInput("AT" + e).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + e).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + e), 2 == e && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));
        var o = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + e], function(o) {
            var n = "FROM_START" == o || "FROM_END" == o;
            if (n != t) {
                var i = this.sourceBlock_;
                return i.updateAt_(e, n), i.setFieldValue(o, "WHERE" + e), null
            }
        });
        this.getInput("AT" + e).appendField(o, "WHERE" + e), 1 == e && this.moveInputBefore("AT1", "AT2")
    }
}, Blockly.Blocks.text_changeCase = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(e), "CASE"), this.setOutput(!0, "String"), this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)
    }
}, Blockly.Blocks.text_trim = {
    init: function() {
        var e = [
            [Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
            [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
            [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(e), "MODE"), this.setOutput(!0, "String"), this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP)
    }
}, Blockly.Blocks.text_print = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_PRINT_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), this.interpolateMsg(Blockly.Msg.TEXT_PRINT_TITLE, ["TEXT", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP)
    }
}, Blockly.Blocks.text_prompt = {
    init: function() {
        var e = [
                [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
                [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
            ],
            t = this;
        this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), e = new Blockly.FieldDropdown(e, function(e) {
            "NUMBER" == e ? t.changeOutput("Number") : t.changeOutput("String")
        }), this.appendDummyInput().appendField(e, "TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1)), this.setOutput(!0, "String"), t = this, this.setTooltip(function() {
            return "TEXT" == t.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    },
    newQuote_: Blockly.Blocks.text.newQuote_
}, Blockly.Blocks.text_prompt_ext = {
    init: function() {
        var e = [
                [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
                [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
            ],
            t = this;
        this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL), this.setColour(Blockly.Blocks.texts.HUE), e = new Blockly.FieldDropdown(e, function(e) {
            "NUMBER" == e ? t.changeOutput("Number") : t.changeOutput("String")
        }), this.appendValueInput("TEXT").appendField(e, "TYPE"), this.setOutput(!0, "String"), t = this, this.setTooltip(function() {
            return "TEXT" == t.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    }
}, Blockly.Blocks.variables = {}, Blockly.Blocks.variables.HUE = 330, Blockly.Blocks.variables_get = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL), this.setColour(Blockly.Blocks.variables.HUE), this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_GET_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR").appendField(Blockly.Msg.VARIABLES_GET_TAIL), this.setOutput(!0), this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP), this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET, this.contextMenuType_ = "variables_set"
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    },
    customContextMenu: function(e) {
        var t = {
                enabled: !0
            },
            o = this.getFieldValue("VAR");
        t.text = this.contextMenuMsg_.replace("%1", o), o = goog.dom.createDom("field", null, o), o.setAttribute("name", "VAR"), o = goog.dom.createDom("block", null, o), o.setAttribute("type", this.contextMenuType_), t.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(t)
    }
}, Blockly.Blocks.variables_set = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL), this.setColour(Blockly.Blocks.variables.HUE), this.interpolateMsg(Blockly.Msg.VARIABLES_SET_TITLE + " %1 " + Blockly.Msg.VARIABLES_SET_TAIL + " %2", ["VAR", new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP), this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET, this.contextMenuType_ = "variables_get"
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, t) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(t, "VAR")
    },
    customContextMenu: Blockly.Blocks.variables_get.customContextMenu
},
function() {
    Blockly.Ruby = new Blockly.Generator("Ruby"), Blockly.Ruby.addReservedWords("BEGIN    class    ensure   nil      self     whenEND      def      false    not      super    whilealias    defined? for      or       then     yieldand      do       if       redo     true     __LINE__begin    else     in       rescue   undef    __FILE__break    elsif    module   retry    unless   __ENCODING__case     end      next     return   until".split(/\s+/)), Blockly.Ruby.ORDER_ATOMIC = 0, Blockly.Ruby.ORDER_COLLECTION = 1, Blockly.Ruby.ORDER_STRING_CONVERSION = 1, Blockly.Ruby.ORDER_MEMBER = 2, Blockly.Ruby.ORDER_INDEX = 3, Blockly.Ruby.ORDER_FUNCTION_CALL = 4, Blockly.Ruby.ORDER_UNARY_SIGN = 5, Blockly.Ruby.ORDER_EXPONENTIATION = 6, Blockly.Ruby.ORDER_UNARY_MINUS_SIGN = 7, Blockly.Ruby.ORDER_MULTIPLICATIVE = 8, Blockly.Ruby.ORDER_ADDITIVE = 9, Blockly.Ruby.ORDER_BITWISE_SHIFT = 10, Blockly.Ruby.ORDER_BITWISE_AND = 11, Blockly.Ruby.ORDER_BITWISE_XOR = 12, Blockly.Ruby.ORDER_BITWISE_OR = 12, Blockly.Ruby.ORDER_RELATIONAL = 13, Blockly.Ruby.ORDER_EQUALS = 14, Blockly.Ruby.ORDER_LOGICAL_AND = 15, Blockly.Ruby.ORDER_LOGICAL_OR = 16, Blockly.Ruby.ORDER_RANGE = 17, Blockly.Ruby.ORDER_CONDITIONAL = 18, Blockly.Ruby.ORDER_ASSIGNMENT = 19, Blockly.Ruby.ORDER_NOT = 20, Blockly.Ruby.ORDER_AND_OR = 21, Blockly.Ruby.ORDER_NONE = 99, Blockly.Ruby.INFINITE_LOOP_TRAP = null, Blockly.Ruby.init = function() {
        return this.definitions_ = Object.create(null), Blockly.Variables ? (this.variableDB_ ? this.variableDB_.reset() : this.variableDB_ = new Blockly.Names(Blockly.Ruby.RESERVED_WORDS_), this.definitions_.require__smalruby = 'require "smalruby"', this.definitions_.receiver_stack = ["main"], this.definitions_.character_stack = []) : void 0
    }, Blockly.Ruby.defineCharacter = function(e) {
        var t, o, n, i, r, s, l;
        if (s = e.get("name"), t = "character_" + s, !Blockly.Ruby.definitions_[t]) {
            switch (e.get("rotationStyle")) {
                case "left_right":
                    l = ", rotation_style: :left_right";
                    break;
                case "none":
                    l = ", rotation_style: :none";
                    break;
                default:
                    l = ""
            }
            return i = ["costume: "], r = function() {
                var t, n, i, r;
                for (i = e.costumesWithName(), r = [], t = 0, n = i.length; n > t; t++) o = i[t], r.push(Blockly.Ruby.quote_(o));
                return r
            }(), r.length > 1 ? i.push("[" + r.join(", ") + "]") : i.push(r[0]), n = e.get("costumeIndex"), n > 0 && i.push(", costume_index: " + n), Blockly.Ruby.definitions_[t] = "" + s + " = Character.new(" + i.join("") + ", x: " + e.get("x") + ", y: " + e.get("y") + ", angle: " + e.get("angle") + l + ")"
        }
    }, Blockly.Ruby.characterStack = function() {
        return this.definitions_.character_stack
    }, Blockly.Ruby.character = function() {
        return _.last(this.characterStack())
    }, Blockly.Ruby.receiverStack = function() {
        return this.definitions_.receiver_stack
    }, Blockly.Ruby.receiver = function() {
        return _.last(this.receiverStack())
    }, Blockly.Ruby.receiverName = function(e) {
        var t, o;
        return null == e && (e = {}), t = {
            object: Blockly.Ruby.character(),
            dropSelf: !0
        }, _.extend(t, e), o = this.receiver(), o === t.object ? t.dropSelf ? "" : "self." : "" + t.object.get("name") + "."
    }, Blockly.Ruby.cs = Blockly.Ruby.characterStack, Blockly.Ruby.cs_ = Blockly.Ruby.characterStack, Blockly.Ruby.c = Blockly.Ruby.character, Blockly.Ruby.c_ = Blockly.Ruby.character, Blockly.Ruby.rs = Blockly.Ruby.receiverStack, Blockly.Ruby.rs_ = Blockly.Ruby.receiverStack, Blockly.Ruby.r = Blockly.Ruby.receiver, Blockly.Ruby.r_ = Blockly.Ruby.receiver, Blockly.Ruby.rn = Blockly.Ruby.receiverName, Blockly.Ruby.rn_ = Blockly.Ruby.receiverName, Blockly.Ruby.characterMethodCall_ = function(e, t, o) {
        var n;
        return null == o && (o = {}), n = this.characterMethodCallInput_(e, t, o), n[0] ? "" + n[0] + "\n" : ""
    }, Blockly.Ruby.characterMethodCallInput_ = function(e, t, o) {
        var n;
        return null == o && (o = {}), n = this.c_() ? t && t.length > 0 ? "" + this.rn_(o) + e + "(" + t + ")" : "" + this.rn_(o) + e : null, [n, this.ORDER_FUNCTION_CALL]
    }, Blockly.Ruby.characterSetVariable_ = function(e, t, o) {
        return null == o && (o = "="), this.c_() ? "" + this.rn_({
            dropSelf: !1
        }) + e + " " + o + " " + t + "\n" : ""
    }, Blockly.Ruby.characterEvent_ = function(e, t, o, n) {
        var i, r;
        if (null == n && (n = null), r = this.c_()) {
            this.rs_().push(r);
            try {
                i = Blockly.Ruby.statementToCode(e, t) || "\n"
            } finally {
                this.rs_().pop()
            }
            return n = n ? ", " + n : "", "\n" + this.rn_() + "on(:" + o + n + ") do\n" + i + "end\n"
        }
        return ""
    }, Blockly.Ruby.finish = function(e) {
        var t, o, n, i, r, s;
        r = [], i = [], o = [], s = function(e) {
            var t;
            return t = Blockly.Ruby.definitions_[e], _.isString(t) ? e.match(/^require__/) ? r.push(t) : e.match(/^prepare__/) ? i.push(t) : o.push(t) : void 0
        };
        for (n in Blockly.Ruby.definitions_) s(n);
        return 0 === i.length && 0 === o.length && 0 === e.length ? "" : (t = r.join("\n") + "\n\n", i.length > 0 && (t += i.join("\n") + "\n\n"), o.length > 0 && (t += o.join("\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n")), t + e)
    }, Blockly.Ruby.scrubNakedValue = function(e) {
        return e + "\n"
    }, Blockly.Ruby.escapeChars_ = {
        '"': '\\"'
    }, Blockly.Ruby.quote_ = function(e) {
        var t, o, n, i, r, s;
        for (o = String(e), n = ['"'], i = function(e) {
                var t;
                return t = o.charAt(e), n[e + 1] = Blockly.Ruby.escapeChars_[t] || t
            }, t = r = 0, s = o.length; s >= 0 ? s > r : r > s; t = s >= 0 ? ++r : --r) i(t);
        return n.push('"'), n.join("")
    }, Blockly.Ruby.scrub_ = function(e, t) {
        var o, n, i, r, s, l, a, c, g, u = this;
        if (null === t) return "";
        if (n = "", !e.outputConnection || !e.outputConnection.targetConnection)
            for (o = e.getCommentText(), o && (n += this.prefixLines(o, "# ") + "\n"), g = e.inputList, l = function(e) {
                    var t;
                    return e.type === Blockly.INPUT_VALUE && (t = e.connection.targetBlock(), t && (o = u.allNestedComments(t))) ? n += u.prefixLines(o, "# ") : void 0
                }, a = 0, c = g.length; c > a; a++) i = g[a], l(i);
        return r = e.nextConnection && e.nextConnection.targetBlock(), s = this.blockToCode(r), n + t + s
    }, Blockly.Ruby.blockToCode_ = Blockly.Ruby.blockToCode, Blockly.Ruby.blockToCode = function(e) {
        return e && !e.disabled && e.type.match(/^hardware_/) && (this.definitions_.prepare__init_hardware = "init_hardware"), this.blockToCode_(e)
    }
}.call(this);
