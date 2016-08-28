(function (globals) {
    "use strict";

    Bridge.define('WebMrbc.Block', {
        type: null,
        contextMenu: false,
        constructor: function (type) {
            this.type = type;
        }
    });
    
    Bridge.define('WebMrbc.App', {
        statics: {
            module: null,
            term: null,
            preferences: null,
            changedAfterTranslating: false,
            translating: false,
            classGroups: null,
            nodeProfileClass: null,
            config: {
                init: function () {
                    this.preferences = new System.Collections.Generic.Dictionary$2(String,Object)();
                    Bridge.ready(this.main);
                }
            },
            initModule: function () {
                var module = new WebMrbc.EmModule(WebMrbc.App.term);
    
                window.onerror = function (e) {
                    var spinnerElement = document.getElementById("spinner");
                    // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
                    module.setStatus("Exception thrown, see JavaScript console");
                    spinnerElement.style.display = "none";
                    module.setStatus = function (text) {
                        if (!System.String.isNullOrEmpty(text)) {
                            module.printErr(["[post-exception status] " + text]);
                        }
                    };
                };
    
                return module;
            },
            preRun: function () {
                var FS = WebMrbc.App.module.getFileSystem();
    
                FS.createFolder("/", "src", true, false);
                FS.createPreloadedFile("/src", "main.org.rb", "src/main.rb", true, true);
                FS.createFolder("/", "build", true, true);
    
                FS.writeFile("/src/main.rb", window["textEditor"].getValue());
            },
            main: function () {
                Number.isFinite = Number.isFinite || function(any) { return typeof any === 'number' && isFinite(any); };
                Number.isNaN = Number.isNaN || function(any) { return typeof any === 'number' && isNaN(any); };
    
                WebMrbc.Collections.ClassWorkspaces = new WebMrbc.Collection$1(WebMrbc.IClassWorkspace)();
                WebMrbc.Views.MainMenuView = new WebMrbc.MainMenuView();
                WebMrbc.Views.ClassSelectorView = new WebMrbc.ClassSelectorView(WebMrbc.Collections.ClassWorkspaces);
                WebMrbc.Views.EObjectModalView = new WebMrbc.EObjectModalView();
                Blockly.Blocks["eproperty_new"] = new WebMrbc.EPropertyBlock("eproperty_new");
                Blockly.Blocks["switch_case_number"] = new WebMrbc.SwitchCaseNumberBlock("switch_case_number");
                Blockly.Blocks["switch_case_number_first_case"] = new WebMrbc.SwitchCaseNumberFirstCaseBlock("switch_case_number_first_case");
                Blockly.Blocks["switch_case_number_case"] = new WebMrbc.SwitchCaseNumberCaseBlock("switch_case_number_case");
                Blockly.Blocks["switch_case_number_default"] = new WebMrbc.SwitchCaseNumberDefaultBlock("switch_case_number_default");
                Blockly.Blocks["switch_case_text"] = new WebMrbc.SwitchCaseTextBlock("switch_case_text");
                Blockly.Blocks["switch_case_text_first_case"] = new WebMrbc.SwitchCaseTextFirstCaseBlock("switch_case_text_first_case");
                Blockly.Blocks["switch_case_text_case"] = new WebMrbc.SwitchCaseTextCaseBlock("switch_case_text_case");
                Blockly.Blocks["switch_case_text_default"] = new WebMrbc.SwitchCaseTextDefaultBlock("switch_case_text_default");
                Blockly.Blocks["call"] = new WebMrbc.CallBlock("call");
                Blockly.Blocks["pin_mode"] = new WebMrbc.PinModeBlock("pin_mode");
                Blockly.Blocks["digital_write"] = new WebMrbc.DigitalWriteBlock("digital_write");
                Blockly.Blocks["digital_read"] = new WebMrbc.DigitalReadBlock("digital_read");
                Blockly.Blocks["analog_read"] = new WebMrbc.AnalogReadBlock("analog_read");
                Blockly.Blocks["pwm"] = new WebMrbc.PwmBlock("pwm");
                Blockly.Blocks["analog_reference"] = new WebMrbc.AnalogReferenceBlock("analog_reference");
                Blockly.Blocks["init_dac"] = new WebMrbc.InitDacBlock("init_dac");
                Blockly.Blocks["analog_dac"] = new WebMrbc.AnalogDacBlock("analog_dac");
                Blockly.Blocks["delay"] = new WebMrbc.DelayBlock("delay");
                Blockly.Blocks["millis"] = new WebMrbc.MillisBlock("millis");
                Blockly.Blocks["micros"] = new WebMrbc.MicrosBlock("micros");
                Blockly.Blocks["led"] = new WebMrbc.LedBlock("led");
                Blockly.Blocks["tone"] = new WebMrbc.ToneBlock("tone");
                Blockly.Blocks["no_tone"] = new WebMrbc.NoToneBlock("no_tone");
                Blockly.Blocks["random_seed"] = new WebMrbc.RandomSeedBlock("random_seed");
                Blockly.Blocks["random"] = new WebMrbc.RandomBlock("random");
                Blockly.Blocks["i2c_new"] = new WebMrbc.I2cNewBlock("i2c_new");
                Blockly.Blocks["i2c_write"] = new WebMrbc.I2cWriteBlock("i2c_write");
                Blockly.Blocks["i2c_read"] = new WebMrbc.I2cReadBlock("i2c_read");
                Blockly.Blocks["i2c_begin"] = new WebMrbc.I2cBeginBlock("i2c_begin");
                Blockly.Blocks["i2c_lwrite"] = new WebMrbc.I2cLwriteBlock("i2c_lwrite");
                Blockly.Blocks["i2c_end"] = new WebMrbc.I2cEndBlock("i2c_end");
                Blockly.Blocks["i2c_request"] = new WebMrbc.I2cRequestBlock("i2c_request");
                Blockly.Blocks["i2c_lread"] = new WebMrbc.I2cLreadBlock("i2c_lread");
                Blockly.Blocks["i2c_available"] = new WebMrbc.I2cAvailableBlock("i2c_available");
                Blockly.Blocks["i2c_frequency"] = new WebMrbc.I2cFrequencyBlock("i2c_frequency");
                Blockly.Blocks["memfile_open"] = new WebMrbc.MemFileOpenBlock("memfile_open");
                Blockly.Blocks["memfile_close"] = new WebMrbc.MemFileCloseBlock("memfile_close");
                Blockly.Blocks["memfile_read"] = new WebMrbc.MemFileReadBlock("memfile_read");
                Blockly.Blocks["memfile_write"] = new WebMrbc.MemFileWriteBlock("memfile_write");
                Blockly.Blocks["memfile_seek"] = new WebMrbc.MemFileSeekBlock("memfile_seek");
                Blockly.Blocks["memfile_cp"] = new WebMrbc.MemFileCpBlock("memfile_cp");
                Blockly.Blocks["memfile_rm"] = new WebMrbc.MemFileRmBlock("memfile_rm");
                Blockly.Blocks["rtc_gettime"] = new WebMrbc.RtcGetTimeBlock("rtc_gettime");
                Blockly.Blocks["rtc_settime"] = new WebMrbc.RtcSettimeBlock("rtc_settime");
                Blockly.Blocks["rtc_deinit"] = new WebMrbc.RtcDeinitBlock("rtc_deinit");
                Blockly.Blocks["rtc_init"] = new WebMrbc.RtcInitBlock("rtc_init");
                Blockly.Blocks["sd_exists"] = new WebMrbc.SdExistsBlock("sd_exists");
                Blockly.Blocks["sd_mkdir"] = new WebMrbc.SdMkdirBlock("sd_mkdir");
                Blockly.Blocks["sd_remove"] = new WebMrbc.SdRemoveBlock("sd_remove");
                Blockly.Blocks["sd_copy"] = new WebMrbc.SdCopyBlock("sd_copy");
                Blockly.Blocks["sd_rmdir"] = new WebMrbc.SdRmdirBlock("sd_rmdir");
                Blockly.Blocks["sd_open"] = new WebMrbc.SdOpenBlock("sd_open");
                Blockly.Blocks["sd_close"] = new WebMrbc.SdCloseBlock("sd_close");
                Blockly.Blocks["sd_read"] = new WebMrbc.SdReadBlock("sd_read");
                Blockly.Blocks["sd_seek"] = new WebMrbc.SdSeekBlock("sd_seek");
                Blockly.Blocks["sd_write"] = new WebMrbc.SdWriteBlock("sd_write");
                Blockly.Blocks["sd_flush"] = new WebMrbc.SdFlushBlock("sd_flush");
                Blockly.Blocks["sd_size"] = new WebMrbc.SdSizeBlock("sd_size");
                Blockly.Blocks["sd_position"] = new WebMrbc.SdPositionBlock("sd_position");
                Blockly.Blocks["serial_new"] = new WebMrbc.SerialNewBlock("serial_new");
                Blockly.Blocks["serial_bps"] = new WebMrbc.SerialBpsBlock("serial_bps");
                Blockly.Blocks["serial_print"] = new WebMrbc.SerialPrintBlock("serial_print");
                Blockly.Blocks["serial_println"] = new WebMrbc.SerialPrintlnBlock("serial_println");
                Blockly.Blocks["serial_available"] = new WebMrbc.SerialAvailableBlock("serial_available");
                Blockly.Blocks["serial_read"] = new WebMrbc.SerialReadBlock("serial_read");
                Blockly.Blocks["serial_write"] = new WebMrbc.SerialWriteBlock("serial_write");
                Blockly.Blocks["serial_flash"] = new WebMrbc.SerialFlashBlock("serial_flash");
                Blockly.Blocks["servo_attach"] = new WebMrbc.ServoAttachBlock("servo_attach");
                Blockly.Blocks["servo_write"] = new WebMrbc.ServoWriteBlock("servo_write");
                Blockly.Blocks["servo_us"] = new WebMrbc.ServoUsBlock("servo_us");
                Blockly.Blocks["servo_read"] = new WebMrbc.ServoReadBlock("servo_read");
                Blockly.Blocks["servo_attached"] = new WebMrbc.ServoAttachedBlock("servo_attached");
                Blockly.Blocks["servo_detach"] = new WebMrbc.ServoDetachBlock("servo_detach");
                Blockly.Blocks["system_exit"] = new WebMrbc.SystemExitBlock("system_exit");
                Blockly.Blocks["system_setrun"] = new WebMrbc.SystemSetRunBlock("system_setrun");
                Blockly.Blocks["system_version"] = new WebMrbc.SystemVersionBlock("system_version");
                Blockly.Blocks["system_push"] = new WebMrbc.SystemPushBlock("system_push");
                Blockly.Blocks["system_pop"] = new WebMrbc.SystemPopBlock("system_pop");
                Blockly.Blocks["system_fileload"] = new WebMrbc.SystemFileLoadBlock("system_fileload");
                Blockly.Blocks["system_reset"] = new WebMrbc.SystemResetBlock("system_reset");
                Blockly.Blocks["system_use_sd"] = new WebMrbc.SystemUseSdBlock("system_use_sd");
                Blockly.Blocks["system_use_wifi"] = new WebMrbc.SystemUseWifiBlock("system_use_wifi");
                Blockly.Blocks["system_get_mrb_path"] = new WebMrbc.SystemGetMrbPathBlock("system_get_mrb_path");
                Blockly.Ruby = new WebMrbc.Ruby();
    
                var termElement = document.getElementById("term");
                WebMrbc.App.term = new Terminal(new $_.$AnonymousType$1(80, 24, true, true, false));
                WebMrbc.App.term.on("data", $_.WebMrbc.App.f1);
                WebMrbc.App.term.on("title", $_.WebMrbc.App.f2);
    
                WebMrbc.App.term.open(termElement);
    
                Blockly.HSV_SATURATION = 1.0;
                Blockly.HSV_VALUE = 0.8;
                Blockly.mainWorkspace = Blockly.inject("blockly-div", new $_.$AnonymousType$2(document.getElementById("toolbox"), true));
    
                WebMrbc.App.hideEmptyCategory();
    
                Blockly.mainWorkspace.addChangeListener(WebMrbc.App.workspace_Changed);
    
                var textEditor = ace.edit("text-editor");
                window["textEditor"] = textEditor;
                textEditor.setTheme("ace/theme/vibrant_ink");
                textEditor.setShowInvisibles(true);
                textEditor.gotoLine(0, 0);
                textEditor.on("change", $_.WebMrbc.App.f3);
                var session = textEditor.getSession();
                session.setMode("ace/mode/ruby");
                session.setTabSize(2);
                session.setUseSoftTabs(false);
    
                WebMrbc.App.applyPreferences();
    
                var statusElement = document.getElementById("status");
                var progressElement = document.getElementById("progress");
                var spinnerElement = document.getElementById("spinner");
    
                statusElement.innerHTML = "Downloading...";
                var xhr = new XMLHttpRequest();
                xhr.onload = function (e) {
                    window["textEditor"].setValue(xhr.responseText);
                    textEditor.moveCursorTo(0, 0);
                };
                xhr.open("GET", "src/main.rb", true);
                xhr.send(Bridge.cast(null, String));
    
                statusElement.innerHTML = "";
                spinnerElement.style.display = "none";
    
                WebMrbc.Collections.MainLoopWorkspace = new WebMrbc.MainLoopWorkspace("MainLoop");
                WebMrbc.Collections.ClassWorkspaces.add(WebMrbc.Collections.MainLoopWorkspace);
                WebMrbc.Collections.EcnlTaskWorkspace = new WebMrbc.EcnlTaskWorkspace("EchonetTask");
                WebMrbc.Collections.ClassWorkspaces.add(WebMrbc.Collections.EcnlTaskWorkspace);
    
                $($_.WebMrbc.App.f4);
            },
            workspace_Changed: function (e) {
                WebMrbc.App.changedAfterTranslating = true;
                window["changed"] = true;
    
                var block = Blockly.mainWorkspace.getBlockById(e.blockId);
                var eobject = Bridge.as(WebMrbc.Views.ClassSelectorView.getCurrent(), WebMrbc.EObjectWorkspace);
    
                switch (e.type) {
                    case Blockly.Events.CREATE: 
                        var cre = e;
                        if (Bridge.referenceEquals(block.type, "eproperty_new")) {
                            var propertyBlock = block;
                            propertyBlock.onCreate(eobject, cre);
                        }
                        break;
                    case Blockly.Events.DELETE: 
                        var del = e;
                        if ((block != null) && (Bridge.referenceEquals(block.type, "eproperty_new"))) {
                            var propertyBlock1 = block;
                            propertyBlock1.onDelete(eobject, del);
                        }
                        break;
                    case Blockly.Events.CHANGE: 
                        var chg = e;
                        if (Bridge.referenceEquals(block.type, "eproperty_new")) {
                            var propertyBlock2 = block;
                            propertyBlock2.onChange(eobject, chg);
                        }
                        break;
                    case Blockly.Events.MOVE: 
                        var mov = e;
                        if ((block != null) && (Bridge.referenceEquals(block.type, "eproperty_new"))) {
                            var propertyBlock3 = block;
                            propertyBlock3.onMove(eobject, mov);
                        }
                        break;
                    case Blockly.Events.UI: 
                        var ui = e;
                        WebMrbc.App.onUi(ui);
                        break;
                }
            },
            onUi: function (ui) {
                switch (ui.element) {
                    case "selected": 
                        if (ui.newValue != null) {
                            var block = Blockly.mainWorkspace.getBlockById(ui.newValue.toString());
                        }
                        break;
                    case "category": 
                        break;
                    case "click": 
                        break;
                    case "commentOpen": 
                        break;
                    case "mutatorOpen": 
                        break;
                    case "warningOpen": 
                        break;
                }
            },
            initClassGroups: function (ele) {
                $.ajax({ url: "devices/ClassGroupList.json", success: function (data, textStatus, request) {
                    var $t;
                    var profileClass = null;
                    var _classGroups = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data), String)) ? $.parseJSON(Bridge.cast(data, String)) : data), Array);
                    var classGroups = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_classGroups);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonClassGroupInfo(_item);
                        classGroups.push(item);
                        if (item.classGroupCode === 14) {
                            profileClass = item;
                            continue;
                        }
                        else  {
                            if (item.classGroupCode === 15) {
                                continue;
                            }
                        }
                    }
                    WebMrbc.App.classGroups = classGroups;
    
                    WebMrbc.Views.EObjectModalView.initClassGroups();
    
                    if (profileClass != null) {
                        WebMrbc.App.updateClass(profileClass, $_.WebMrbc.App.f6);
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            updateClass: function (eclass, success) {
                if (success === void 0) { success = null; }
                $.ajax({ url: "devices/ClassList" + System.Byte.format(eclass.classGroupCode, "X2").toUpperCase() + ".json", success: function (data1, textStatus1, request1) {
                    var $t;
                    var _classes = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data1), String)) ? $.parseJSON(Bridge.cast(data1, String)) : data1), Array);
                    var classes = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_classes);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonClassInfo(_item);
                        classes.push(item);
                        item.classGroup = eclass;
                        if (item.classCode === 240) {
                            WebMrbc.App.nodeProfileClass = item;
                        }
                    }
                    eclass.classes = classes;
    
                    if (!Bridge.staticEquals(success, null)) {
                        success();
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            updateProperties: function (eclass, success) {
                if (success === void 0) { success = null; }
                $.ajax({ url: "devices/PropertyList" + System.Byte.format(eclass.classGroup.classGroupCode, "X2").toUpperCase() + System.Byte.format(eclass.classCode, "X2").toUpperCase() + ".json", success: function (data, textStatus, request) {
                    var $t;
                    var _properties = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data), String)) ? $.parseJSON(Bridge.cast(data, String)) : data), Array);
                    var properties = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_properties);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonPropertyInfo("constructor$1", _item);
                        properties.push(item);
                    }
                    eclass.properties = properties;
    
                    if (!Bridge.staticEquals(success, null)) {
                        success();
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            ajaxError: function (request, textStatus, error) {
            },
            loadXml: function (data, workspace) {
                if (workspace === void 0) { workspace = null; }
                var xmlChild;
                if (workspace == null) {
                    workspace = Blockly.mainWorkspace;
                }
                var xml = Blockly.Xml.textToDom(data);
                workspace.clear();
                var eobjs = System.Array.init(0, null);
                for (var i = 0; ((xmlChild = Bridge.cast(xml.childNodes[i], Element))) != null; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals("eobject", xmlChild.nodeName.toLowerCase())) {
                        var type = WebMrbc.App.getClass(parseInt(xmlChild.getAttribute("classGroupCode")), parseInt(xmlChild.getAttribute("classCode"), 10));
                        if (type == null) {
                            continue;
                        }
    
                        var c = Bridge.merge(new WebMrbc.JsonObjectInfo(type, xmlChild.getAttribute("identifer")), {
                            attribute: xmlChild.getAttribute("attribute"),
                            instanceCode: ((parseInt(xmlChild.getAttribute("instanceCode"))) & 255),
                            properties: WebMrbc.App.getProperties(type, xmlChild.getAttribute("propertys").split(","))
                        } );
                        eobjs.push(new WebMrbc.EObjectWorkspace(c));
                    }
                }
                WebMrbc.Collections.ClassWorkspaces.reset$1(eobjs);
                Blockly.Xml.domToWorkspace(xml, workspace);
            },
            getClass: function (classGroupCode, classCode) {
                var t = System.Linq.Enumerable.from(WebMrbc.App.classGroups).firstOrDefault(function (cg) {
                    return cg.classGroupCode === classGroupCode;
                }, null);
                if (t == null) {
                    return null;
                }
                return System.Linq.Enumerable.from(t.classes).firstOrDefault(function (c) {
                    return c.classCode === classCode;
                }, null);
            },
            getProperties: function (type, properties) {
                var pcs = System.Linq.Enumerable.from(properties).select($_.WebMrbc.App.f7);
                var ps = System.Linq.Enumerable.from(type.properties).where(function (p) {
                    return pcs.contains(p.propertyCode);
                });
                return ps.toArray();
            },
            dumpXml: function (workspace, models) {
                if (workspace == null) {
                    workspace = Blockly.mainWorkspace;
                }
                if (models == null) {
                    models = WebMrbc.Collections.ClassWorkspaces;
                }
                var xmlDom = Blockly.Xml.workspaceToDom(workspace);
                var blocklyDom = xmlDom.firstChild;
                models.each(function (c) {
                    var e = goog.dom.createDom("eobject");
                    e.setAttribute("x", c.get("x"));
                    e.setAttribute("y", c.get("y"));
                    e.setAttribute("name", c.get("name"));
                    e.setAttribute("epropertys", c.epropertysWithName().join(","));
                    var epropertyIndex = c.get("epropertyIndex");
                    if (!Bridge.referenceEquals(epropertyIndex, 0)) {
                        e.setAttribute("eproperty_index", epropertyIndex);
                    }
                    e.setAttribute("attribute", c.get("attribute"));
                    var rotationStyle = c.get("rotationStyle");
                    if (!Bridge.referenceEquals(rotationStyle, "free")) {
                        e.setAttribute("rotation_style", rotationStyle);
                    }
                    xmlDom.insertBefore(e, blocklyDom);
                });
                return Blockly.Xml.domToPrettyText(xmlDom);
            },
            /**
             * テキスト入力欄のEnter(Return)キーを無視する
             *
             * @static
             * @private
             * @this WebMrbc.App
             * @memberof WebMrbc.App
             * @param   {$}    el
             * @return  {$}
             */
            ignoreEnterKey: function (el) {
                return el.find("input[type=text]").keypress($_.WebMrbc.App.f8);
            },
            removeBackdropOnHidden: function (el) {
                return el.on("hidden", $_.WebMrbc.App.f9);
            },
            reset: function () {
                Blockly.mainWorkspace.clear();
                WebMrbc.Collections.ClassWorkspaces.reset();
                $("#filename").val("");
                window["textEditor"].getSession().getDocument().setValue("");
                window["textEditor"].moveCursorTo(0, 0);
                WebMrbc.App.addEObjectFromBeginning();
                window["changed"] = false;
            },
            bm: function (name) {
                var msg = Blockly.Msg[name];
                return (Bridge.referenceEquals(String, String)) ? msg : name;
            },
            addEObjectFromBeginning: function () {
                var $t;
                if (!WebMrbc.App.isEnabled("disabled_add_eobject_from_beginning")) {
                    var identifer = WebMrbc.Collections.ClassWorkspaces.uniqueName("LocalNode");
                    var localNode = new WebMrbc.JsonNodeInfo(WebMrbc.App.nodeProfileClass, identifer, "local");
                    $t = Bridge.getEnumerator(localNode.type.properties);
                    while ($t.moveNext()) {
                        var item = $t.getCurrent();
                        if ((item.required.length > 0) && (!Bridge.referenceEquals(item.required[0], "NONE"))) {
                            localNode.properties.push(new WebMrbc.JsonPropertyInfo("constructor$1", item));
                        }
                    }
                    var enode = new WebMrbc.ENodeWorkspace(localNode);
                    WebMrbc.Collections.LocalNode = enode;
                    WebMrbc.Collections.ClassWorkspaces.add(enode);
                    WebMrbc.Views.ClassSelectorView.selectItem(enode);
                    window["changed"] = false;
                }
            },
            applyPreferences: function () {
                window["textEditor"].setReadOnly(WebMrbc.App.isEnabled("enabled_readonly_ruby_mode"));
    
                if (WebMrbc.App.isEnabled("disabled_new_eobject")) {
                    $("#add-eobject-item").hide();
                }
                else  {
                    $("#add-eobject-item").show();
                }
            },
            setPreferences: function (preferences) {
                WebMrbc.App.preferences = preferences;
                WebMrbc.App.applyPreferences();
                WebMrbc.App.changedAfterTranslating = true;
                WebMrbc.App.reloadToolbox();
            },
            isEnabled: function (name) {
                var e = { };
                if (!WebMrbc.App.preferences.tryGetValue(name, e)) {
                    return false;
                }
                if (Bridge.is(e.v, Boolean)) {
                    return Bridge.cast(e.v, Boolean);
                }
                var s = e.v.toString();
                return Bridge.referenceEquals(s, "true") || Bridge.referenceEquals(s, "1");
            },
            reloadToolbox: function () {
                Blockly.hideChaff();
    
                var workspace = WebMrbc.Views.ClassSelectorView.getCurrent();
                var toolbox = document.getElementById("toolbox");
                workspace.reloadToolbox(toolbox);
    
                Blockly.mainWorkspace.updateToolbox(toolbox);
            },
            hideEmptyCategory: function () {
                var $t;
                var i = 1;
                $t = Bridge.getEnumerator(Blockly.getMainWorkspace().options.languageTree.childNodes);
                while ($t.moveNext()) {
                    var node = $t.getCurrent();
                    var element = Bridge.as(node, Element);
                    if (element == null) {
                        continue;
                    }
    
                    if ((element.getElementsByTagName("block").length === 0) && (element.getAttribute("custom") == null)) {
                        $("div.blocklyTreeRoot > div:nth-child(2) > div:nth-child(" + i + ")[aria-level='1']").hide();
                    }
                    i = (i + 1) | 0;
                }
            }
        },
        $entryPoint: true
    });
    
    var $_ = {};
    
    Bridge.define("$AnonymousType$1", $_, {
        constructor: function (cols, rows, useStyle, screenKeys, cursorBlink) {
            this.cols = cols;
            this.rows = rows;
            this.useStyle = useStyle;
            this.screenKeys = screenKeys;
            this.cursorBlink = cursorBlink;
        },
        getcols : function () {
            return this.cols;
        },
        getrows : function () {
            return this.rows;
        },
        getuseStyle : function () {
            return this.useStyle;
        },
        getscreenKeys : function () {
            return this.screenKeys;
        },
        getcursorBlink : function () {
            return this.cursorBlink;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.cols, o.cols) && Bridge.equals(this.rows, o.rows) && Bridge.equals(this.useStyle, o.useStyle) && Bridge.equals(this.screenKeys, o.screenKeys) && Bridge.equals(this.cursorBlink, o.cursorBlink);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1305346792;
            hash = hash * 23 + (this.cols == null ? 0 : Bridge.getHashCode(this.cols));
            hash = hash * 23 + (this.rows == null ? 0 : Bridge.getHashCode(this.rows));
            hash = hash * 23 + (this.useStyle == null ? 0 : Bridge.getHashCode(this.useStyle));
            hash = hash * 23 + (this.screenKeys == null ? 0 : Bridge.getHashCode(this.screenKeys));
            hash = hash * 23 + (this.cursorBlink == null ? 0 : Bridge.getHashCode(this.cursorBlink));
            return hash;
        },
        toJSON: function () {
            return {
                cols : this.cols,
                rows : this.rows,
                useStyle : this.useStyle,
                screenKeys : this.screenKeys,
                cursorBlink : this.cursorBlink
            };
        }
    });
    
    Bridge.define("$AnonymousType$2", $_, {
        constructor: function (toolbox, trashcan) {
            this.toolbox = toolbox;
            this.trashcan = trashcan;
        },
        gettoolbox : function () {
            return this.toolbox;
        },
        gettrashcan : function () {
            return this.trashcan;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$2)) {
                return false;
            }
            return Bridge.equals(this.toolbox, o.toolbox) && Bridge.equals(this.trashcan, o.trashcan);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -260737149;
            hash = hash * 23 + (this.toolbox == null ? 0 : Bridge.getHashCode(this.toolbox));
            hash = hash * 23 + (this.trashcan == null ? 0 : Bridge.getHashCode(this.trashcan));
            return hash;
        },
        toJSON: function () {
            return {
                toolbox : this.toolbox,
                trashcan : this.trashcan
            };
        }
    });
    
    Bridge.ns("WebMrbc.App", $_);
    
    Bridge.apply($_.WebMrbc.App, {
        f1: function (data) {
            if (WebMrbc.App.module != null && WebMrbc.App.module.stdin != null) {
                WebMrbc.App.module.stdin(data);
            }
        },
        f2: function (title) {
            document.title = title;
        },
        f3: function () {
            if (!WebMrbc.App.translating) {
                window["changed"] = true;
                WebMrbc.App.changedAfterTranslating = true;
            }
        },
        f4: function () {
            WebMrbc.App.initClassGroups($("#eobject-modal").get(0));
        },
        f5: function () {
            WebMrbc.App.addEObjectFromBeginning();
        },
        f6: function () {
            if (WebMrbc.App.nodeProfileClass != null) {
                WebMrbc.App.updateProperties(WebMrbc.App.nodeProfileClass, $_.WebMrbc.App.f5);
            }
        },
        f7: function (pc) {
            return parseInt(pc, 16);
        },
        f8: function (e) {
            if (e == null) {
                e = Bridge.cast(window["Event"], jQuery.Event);
            }
            if (e.keyCode === 13) {
                return false;
            }
            else  {
                return true;
            }
        },
        f9: function () {
            $(".modal-backdrop").remove();
        }
    });
    
    Bridge.define('WebMrbc.Value');
    
    Bridge.define('WebMrbc.ClassSelectorView', {
        collection: null,
        el: null,
        templateText: null,
        m_ClassWorkspace: null,
        constructor: function (collection) {
            this.el = $("#class-selector-tab");
    
            this.collection = collection;
            collection.onAdd = Bridge.fn.combine(collection.onAdd, Bridge.fn.bind(this, this.onChange));
            collection.onRemove = Bridge.fn.combine(collection.onRemove, Bridge.fn.bind(this, this.onChange));
            collection.onReset = Bridge.fn.combine(collection.onReset, Bridge.fn.bind(this, this.onChange));
            collection.onChange = Bridge.fn.combine(collection.onChange, Bridge.fn.bind(this, this.onChange));
    
            if (collection.getLength() > 0) {
                this.m_ClassWorkspace = collection.at(0);
            }
    
            this.templateText = $("#class-selector-template").text();
            $("#add-eobject-button").click(Bridge.fn.bind(this, function (e) {
                var $t;
                e.preventDefault();
                this.m_ClassWorkspace.loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
                Blockly.mainWorkspace.clear();
    
                var eobject = new WebMrbc.JsonObjectInfo(WebMrbc.App.nodeProfileClass, collection.uniqueName("Kaden"));
                this.m_ClassWorkspace = new WebMrbc.EObjectWorkspace(eobject);
                $t = Bridge.getEnumerator(eobject.type.properties);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    if ((item.required.length > 0) && (!Bridge.referenceEquals(item.required[0], "NONE"))) {
                        eobject.properties.push(new WebMrbc.JsonPropertyInfo("constructor$1", item));
                    }
                }
                this.m_ClassWorkspace.openModifyView(Bridge.fn.bind(this, function (ok) {
                    if (ok) {
                        collection.add(this.m_ClassWorkspace);
                    }
                }));
            }));
            this.render();
        },
        getCurrent: function () {
            return this.m_ClassWorkspace;
        },
        render: function () {
            var charsEl = $("#class-selector-eobject-set");
            charsEl.children().remove();
            this.collection.each((Bridge.fn.bind(this, function (eobject) {
                var html = $(eobject.template(this.templateText));
                charsEl.append(html);
                var selectedMark = html.find("a.selected-mark");
                if (Bridge.referenceEquals(this.m_ClassWorkspace, eobject)) {
                    selectedMark.show();
                }
                else  {
                    selectedMark.hide();
                }
                html.find("a.eobject").click((Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    if (!Bridge.referenceEquals(this.m_ClassWorkspace, eobject)) {
                        this.selectItem(eobject);
                    }
                })));
                html.find("a.modify-button").click(Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    this.m_ClassWorkspace = eobject;
                    this.m_ClassWorkspace.openModifyView(Bridge.fn.bind(this, $_.WebMrbc.ClassSelectorView.f1));
                }));
                var removeButton = html.find("a.remove-button");
                removeButton.click(Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    this.m_ClassWorkspace = null;
                    this.removeEObject_(eobject);
                }));
                if ((WebMrbc.App.isEnabled("disabled_new_eobject")) || eobject.isPreset()) {
                    removeButton.hide();
                }
                var img = html.find("img");
                img.on("dragstart", $_.WebMrbc.ClassSelectorView.f2);
            })));
        },
        selectItem: function (model) {
            var html, selectedMark;
            var charsEl = $("#class-selector-eobject-set");
    
            if (this.m_ClassWorkspace != null) {
                html = charsEl.find("#" + this.m_ClassWorkspace.getIdentifer());
                selectedMark = html.find("a.selected-mark");
                selectedMark.hide();
                this.m_ClassWorkspace.loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
            }
    
            this.m_ClassWorkspace = model;
            WebMrbc.App.reloadToolbox();
            Blockly.mainWorkspace.clear();
    
            if ((this.m_ClassWorkspace == null) && (this.collection.getLength() > 0)) {
                this.m_ClassWorkspace = this.collection.at(0);
            }
    
            if (this.m_ClassWorkspace != null) {
                Blockly.Xml.domToWorkspace(this.m_ClassWorkspace.toDom(), Blockly.mainWorkspace);
    
                html = charsEl.find("#" + this.m_ClassWorkspace.getIdentifer());
                selectedMark = html.find("a.selected-mark");
                selectedMark.show();
            }
        },
        onChange: function (sender, e) {
            this.render();
        },
        removeEObject_: function (model) {
            if (WebMrbc.App.isEnabled("disabled_new_eobject") || model.isPreset()) {
                return;
            }
    
            if (Bridge.referenceEquals(this.m_ClassWorkspace, model)) {
                this.m_ClassWorkspace = null;
            }
    
            this.collection.remove(model);
        }
    });
    
    Bridge.ns("WebMrbc.ClassSelectorView", $_);
    
    Bridge.apply($_.WebMrbc.ClassSelectorView, {
        f1: function (ok) {
            this.render();
        },
        f2: function (e) {
            e.preventDefault();
        }
    });
    
    Bridge.define('WebMrbc.CodeGenerator', {
        statics: {
            getClassIdentifier: function (ci) {
                var cls = ci;
                var result = ci.type.type;
    
                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("ecn_cls{0:X2}{1:X2}_t", cls.type.classGroup.classGroupCode, cls.type.classCode);
                }
                else  {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do  {
                            var len = (ms.lastIndex - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);
                        if (Bridge.referenceEquals(blocks[((blocks.length - 1) | 0)], "type")) {
                            blocks[((blocks.length - 1) | 0)] = "t";
                        }
                        else  {
                            blocks.push("t");
                        }
                        result = blocks.join("_");
                    }
                }
    
                return result;
            },
            getPropertyIdentifier: function (pi) {
                var cls = pi.classInfo;
                var fi = pi;
                var result = fi.identifer;
    
                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("property{0:X2}", pi.propertyCode);
                }
                else  {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do  {
                            var len = (ms.lastIndex - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);
                        result = blocks.join("_");
                    }
                }
    
                if (fi.isArray) {
                    result += System.String.format("[{0}]", pi.arrayCount);
                }
    
                return result;
            },
            getFieldIdentifier: function (efi) {
                var fi = efi;
                var result = fi.identifer;
    
                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("field{0:X8}", efi.type);
                }
                else  {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do  {
                            var len = (ms.lastIndex - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);
    
                        result = blocks.join("_");
                    }
                }
    
                if (fi.isArray) {
                    result += System.String.format("[{0}]", efi.arrayCount);
                }
    
                return "@" + result;
            },
            getObjectIdentifier: function (ci) {
                var name = ci.identifer;
    
                if (System.String.endsWith(name, "_EOBJ")) {
                    name = name.substr(0, ((name.length - 5) | 0));
                }
    
                if (System.String.startsWith(name, "0x")) {
                    return "eobj_" + name.substr(2, ((name.length - 2) | 0)) + "_data";
                }
    
                return name.toLowerCase() + "_data";
            },
            getEobjAttribute: function (eci) {
                switch (eci.attribute) {
                    case "local": 
                        return "EOBJ_LOCAL_NODE";
                    case "sync": 
                        return "EOBJ_SYNC_REMOTE_NODE";
                    case "async": 
                        return "EOBJ_ASYNC_REMOTE_NODE";
                    case "device": 
                        return "EOBJ_DEVICE";
                    default: 
                        return "EOBJ_NONE";
                }
            },
            getNode: function (eci) {
                var parent = eci.parent;
    
                if (parent == null) {
                    return "EOBJ_NULL";
                }
                else  {
                    return parent.identifer;
                }
            },
            getEpc: function (epi) {
                return System.String.format("0x{0:X2}", epi.propertyCode);
            },
            getAccess: function (epi) {
                var result = System.Array.init(0, null);
    
                var access = System.Linq.Enumerable.from(epi.access).toArray();
    
                if (System.Linq.Enumerable.from(access).contains("RULE_ANNO")) {
                    result.push("EPC_RULE_ANNO");
                }
    
                if (System.Linq.Enumerable.from(access).contains("RULE_SET")) {
                    result.push("EPC_RULE_SET");
                }
    
                if (System.Linq.Enumerable.from(access).contains("RULE_GET")) {
                    result.push("EPC_RULE_GET");
                }
    
                if (System.Linq.Enumerable.from(access).contains("ANNOUNCE")) {
                    result.push("EPC_ANNOUNCE");
                }
    
                if (System.Linq.Enumerable.from(access).contains("VARIABLE")) {
                    result.push("EPC_VARIABLE");
                }
    
                if (result.length === 0) {
                    return "EPC_NONE";
                }
    
                return result.join(" | ");
            },
            getSize: function (epi) {
                return (((((epi.arrayCount === 0) ? 1 : epi.arrayCount) * epi.size) | 0)).toString();
            },
            getExinf: function (epi) {
                switch (epi.propertyCode) {
                    case 151: 
                    case 152: 
                        // 現在年月日設定
                        return "nil";
                    default: 
                        return "@" + WebMrbc.CodeGenerator.getPropertyIdentifier(epi);
                }
            },
            hasPropSetter: function (epi, valueRange) {
                valueRange.v = null;
    
                if (!epi.primitive || (epi.arrayCount !== 0)) {
                    return false;
                }
    
                valueRange.v = WebMrbc.ValueRange.parse(epi.valueDescription, epi);
                if ((valueRange.v.getValues().length > 0) || (valueRange.v.getRanges().length > 0)) {
                    return true;
                }
    
                valueRange.v = null;
                return false;
            },
            getSetter: function (epi) {
                switch (epi.propertyCode) {
                    case 128: 
                        return "onoff_prop_set";
                    case 136: 
                        return "alarm_prop_set";
                    case 151: 
                        return "time_prop_set";
                    case 152: 
                        return "date_prop_set";
                    default: 
                        var valueRange = { };
                        if (WebMrbc.CodeGenerator.hasPropSetter(epi, valueRange)) {
                            var clsName = WebMrbc.CodeGenerator.getClassIdentifier(epi.classInfo);
                            if (System.String.endsWith(clsName, "_t")) {
                                clsName = clsName.substr(0, ((clsName.length - 2) | 0));
                            }
                            return clsName + "_" + WebMrbc.CodeGenerator.getPropertyIdentifier(epi) + "_set";
                        }
                        return "ecn_data_prop_set";
                }
            },
            getSetterBody: function (indent_, epi) {
                var $t, $t1;
                var body = new System.Text.StringBuilder();
    
                switch (epi.propertyCode) {
                    case 128: 
                        body.appendLine(indent_ + "# 動作状態ON/OFF設定関数（0x30, 0x31のみ受け付け）");
                        body.appendLine(indent_ + "def onoff_prop_set(prop, src)");
                        body.appendLine(indent_ + "\t# サイズが1以外は受け付けない");
                        body.appendLine(indent_ + "\tif (src.bytesize != 1) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\tif (prop.anno) then");
                        body.appendLine(indent_ + "\t\tprop.set_anno(prop.exinf != src)");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\tcase (src.getbyte(0))");
                        body.appendLine(indent_ + "\t# ONの場合");
                        body.appendLine(indent_ + "\twhen 0x30 then");
                        body.appendLine(indent_ + "\t\tprop.set_exinf(src)");
                        body.appendLine(indent_ + "\t\t# TODO: ONの場合の処理");
                        body.appendLine(indent_ + "\t# OFFの場合");
                        body.appendLine(indent_ + "\twhen 0x31 then");
                        body.appendLine(indent_ + "\t\tprop.set_exinf(src)");
                        body.appendLine(indent_ + "\t\t# TODO: OFFの場合の処理");
                        body.appendLine(indent_ + "\t# 0x30か0x31以外は受け付けない");
                        body.appendLine(indent_ + "\telse");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn 1");
                        body.appendLine(indent_ + "end");
                        break;
                    case 136: 
                        body.appendLine(indent_ + "# 異常発生状態設定関数（0x41, 0x42のみ受け付け）");
                        body.appendLine(indent_ + "def alarm_prop_set(prop, src)");
                        body.appendLine(indent_ + "\t# サイズが1以外は受け付けない");
                        body.appendLine(indent_ + "\tif (src.bytesize != 1) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine();
                        body.appendLine(indent_ + "\tif (prop.anno) then");
                        body.appendLine(indent_ + "\t\tprop.set_anno(prop.exinf != src)");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\tcase (src.getbyte(0))");
                        body.appendLine(indent_ + "\t# 異常発生あり/なしの場合");
                        body.appendLine(indent_ + "\twhen 0x41,0x42 then");
                        body.appendLine(indent_ + "\t\tprop.set_exinf(src)");
                        body.appendLine(indent_ + "\t# 0x41か0x42以外は受け付けない");
                        body.appendLine(indent_ + "\telse");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn 1");
                        body.appendLine(indent_ + "end");
                        break;
                    case 151: 
                        body.appendLine(indent_ + "# 現在時刻設定関数");
                        body.appendLine(indent_ + "def date_prop_get(prop, size)");
                        body.appendLine(indent_ + "\t# サイズが2以外は受け付けない");
                        body.appendLine(indent_ + "\tif (src.bytesize != 2) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\ttime = Rtc.getTime");
                        body.appendLine(indent_ + "\ttime[3] = src.getbyte(0)");
                        body.appendLine(indent_ + "\ttime[4] = src.getbyte(1)");
                        body.appendLine(indent_ + "\tRtc.setTime time");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn 2");
                        body.appendLine(indent_ + "end");
                        break;
                    case 152: 
                        body.appendLine(indent_ + "# 現在年月日設定関数");
                        body.appendLine(indent_ + "def date_prop_get(prop, size)");
                        body.appendLine(indent_ + "\t# サイズが4以外は受け付けない");
                        body.appendLine(indent_ + "\tif (src.bytesize != 4) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\ttime = Rtc.getTime");
                        body.appendLine(indent_ + "\ttime[0] = (src.getbyte(0) << 8) | src.getbyte(1)");
                        body.appendLine(indent_ + "\ttime[1] = src.getbyte(2)");
                        body.appendLine(indent_ + "\ttime[2] = src.getbyte(3)");
                        body.appendLine(indent_ + "\tRtc.setTime time");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn 4");
                        body.appendLine(indent_ + "end");
                        break;
                    default: 
                        var valueRange = { };
                        if (WebMrbc.CodeGenerator.hasPropSetter(epi, valueRange)) {
                            var Xn = "X" + (((2 * epi.size) | 0)).toString();
                            var indent = indent_ + "\t";
    
                            body.appendLine(indent_ + System.String.format("# {0}設定関数", epi.description));
                            body.appendLine(indent_ + System.String.format("def {0}(prop, src)", WebMrbc.CodeGenerator.getSetter(epi)));
                            body.appendLine(indent_ + System.String.format("\t# サイズが{0}以外は受け付けない", epi.size));
                            body.appendLine(indent_ + System.String.format("\tif (src.bytesize != {0}) then", epi.size));
                            body.appendLine(indent_ + "\t\treturn 0");
                            body.appendLine(indent_ + "\tend");
                            body.appendLine();
                            if (valueRange.v.getValues().length > 0) {
                                indent += "\t";
                                body.appendLine(indent_ + "\tcase (src.getbyte(0))");
                                $t = Bridge.getEnumerator(valueRange.v.getValues());
                                while ($t.moveNext()) {
                                    var i = $t.getCurrent();
                                    body.appendLine(indent_ + System.String.format("\t# {0}の場合", i.getDisp()));
                                    body.appendLine(indent_ + System.String.format("\twhen 0x{0} then", i.getVal().toString(16)));
                                    body.appendLine(indent_ + "\t\tprop.set_exinf(src)");
                                    body.appendLine(indent_ + System.String.format("\t\t# TODO: {0}の場合の処理", i.getDisp()));
                                }
                                body.appendLine(indent_ + "\telse");
                            }
                            var first = true;
                            $t1 = Bridge.getEnumerator(valueRange.v.getRanges());
                            while ($t1.moveNext()) {
                                var i1 = $t1.getCurrent();
                                if (!System.String.isNullOrEmpty(i1.getDisp())) {
                                    body.appendLine(indent + System.String.format("# {0}の場合", i1.getDisp()));
                                }
                                if (first) {
                                    first = false;
                                    body.append(indent);
                                }
                                else  {
                                    body.append(indent + "else ");
                                }
                                body.appendLine(indent + System.String.format("if((*({0} *)src >= 0x{1}) && (*({0} *)src <= 0x{2})){{", epi.type, i1.getMin().toString(16), i1.getMax().toString(16)));
                                body.appendLine(indent + System.String.format("\t*(({0} *)item->exinf) = *(({0} *)src);", epi.type));
                                body.appendLine(indent + System.String.format("\t# TODO: {0}の場合の処理", System.String.isNullOrEmpty(i1.getDisp()) ? "この" : i1.getDisp()));
                                body.appendLine(indent + "end");
                            }
                            if (valueRange.v.getValues().length > 0) {
                                body.appendLine(indent_ + "\t\t# 上記以外は受け付けない");
                                body.appendLine(indent_ + "\t\treturn 0");
                                body.appendLine(indent_ + "\tend");
                            }
                            else  {
                                body.appendLine(indent_ + "\t# 上記以外は受け付けない");
                                body.appendLine(indent_ + "\telse");
                                body.appendLine(indent_ + "\t\treturn 0");
                                body.appendLine(indent_ + "\tend");
                            }
                            body.appendLine();
                            body.appendLine(indent_ + System.String.format("\treturn {0}", epi.size));
                            body.appendLine(indent_ + "end");
                            break;
                        }
                        break;
                }
    
                body.appendLine();
    
                return body.toString();
            },
            getGetter: function (epi) {
                switch (epi.propertyCode) {
                    case 151: 
                        return "time_prop_get";
                    case 152: 
                        return "date_prop_get";
                    default: 
                        return "ecn_data_prop_get";
                }
            },
            getGetterBody: function (indent_, epi) {
                var body = new System.Text.StringBuilder();
    
                switch (epi.propertyCode) {
                    case 151: 
                        body.appendLine(indent_ + "# 現在時刻設定関数");
                        body.appendLine(indent_ + "def date_prop_get(prop, size)");
                        body.appendLine(indent_ + "\t# サイズが2以外は受け付けない");
                        body.appendLine(indent_ + "\tif (size != 2) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\ttime = Rtc.getTime");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn time[3].chr + time[4].chr");
                        body.appendLine(indent_ + "end");
                        break;
                    case 152: 
                        body.appendLine(indent_ + "# 現在年月日設定関数");
                        body.appendLine(indent_ + "def date_prop_get(prop, size)");
                        body.appendLine(indent_ + "\t# サイズが4以外は受け付けない");
                        body.appendLine(indent_ + "\tif (size != 4) then");
                        body.appendLine(indent_ + "\t\treturn 0");
                        body.appendLine(indent_ + "\tend");
                        body.appendLine();
                        body.appendLine(indent_ + "\ttime = Rtc.getTime");
                        body.appendLine();
                        body.appendLine(indent_ + "\treturn ((time[0] & 0xFF00) >> 8).chr + (time[0] & 0xFF).chr + time[1].chr + time[2].chr");
                        body.appendLine(indent_ + "end");
                        break;
                    default: 
                        break;
                }
    
                body.appendLine();
    
                return body.toString();
            },
            getInitialValue$1: function (body, emi, description, valRng, indent, recursive) {
                var $t;
                var pluse = "";
                body.appendLine(indent + "# " + description);
                if (recursive) {
                    body.append(indent);
                    pluse = " +";
                }
                else  {
                    body.append(indent + WebMrbc.CodeGenerator.getFieldIdentifier(emi) + " = ");
                }
    
                if (Bridge.referenceEquals(emi.type, "manufacturer_code_t")) {
                    body.appendLine("$MAKER_CODE" + pluse);
                    return;
                }
    
                if (Bridge.referenceEquals(emi.type, "version_information_t")) {
                    body.appendLine("\"\\x01\\x0A\\x01\\x00\"" + pluse);
                    return;
                }
    
                if (Bridge.referenceEquals(emi.type, "standard_version_information_t")) {
                    body.appendLine("\"\\x00\\x00C\\x00\"" + pluse);
                    return;
                }
    
                if (emi.primitive) {
                    var count = emi.arrayCount;
                    if (count === 0) {
                        body.appendLine("\"" + WebMrbc.CodeGenerator.getInitialValue(valRng, emi) + "\"" + pluse);
                    }
                    else  {
                        body.append("\"");
                        for (var i = 0; i < count; i = (i + 1) | 0) {
                            body.append(WebMrbc.CodeGenerator.getInitialValue(valRng, emi));
                        }
                        body.appendLine("\"" + pluse);
                    }
                }
                else  {
                    if (!recursive) {
                        body.appendLine();
                    }
                    $t = Bridge.getEnumerator(emi.fields);
                    while ($t.moveNext()) {
                        var efi = $t.getCurrent();
                        WebMrbc.CodeGenerator.getInitialValue$1(body, efi, efi.description, efi.valueDescription, indent + "\t", true);
                    }
                    if (!recursive) {
                        body.appendLine(indent + "\t\"\"");
                    }
                }
            },
            getInitialValue: function (valRng, pi) {
                var valueRange = WebMrbc.ValueRange.parse(valRng, pi);
                var init = "0000000000000000" + valueRange.getInitailValue();
    
                var temp = System.Array.init(((4 * pi.size) | 0), function (){
                    return new System.Char();
                });
                for (var i = 0, j = (init.length - ((2 * pi.size) | 0)) | 0; i < temp.length; i = (i + 1) | 0, j = (j + 1) | 0) {
                    if ((i % 4) === 0) {
                        temp[Bridge.identity(i, (i = (i + 1) | 0))] = 92;
                        temp[Bridge.identity(i, (i = (i + 1) | 0))] = 120;
                    }
                    temp[i] = init.charCodeAt(j);
                }
                return String.fromCharCode.apply(null, temp);
            },
            isExtractProperty: function (prp) {
                switch (prp.propertyCode) {
                    case 155: 
                    case 156:  // ＳｅｔＭプロパティマップ // ＧｅｔＭプロパティマップ
                        // はECHONET Liteにはないので作らない
                        return true;
                    case 157: 
                    case 158: 
                    case 159: 
                    case 211: 
                    case 212: 
                    case 213: 
                    case 214: 
                    case 215:  // 状変アナウンスプロパティマップ // Ｓｅｔプロパティマップ // Ｇｅｔプロパティマップ // 自ノードインスタンス数 // 自ノードクラス数 // インスタンスリスト通知 // 自ノードインスタンスリストＳ // 自ノードクラスリストＳ
                        // はコンフィグレーターで生成するので作らない
                        return true;
                }
    
                return false;
            }
        },
        _ClassInfo: null,
        _PropertyInfos: null,
        constructor: function (cls) {
            var $t;
            this._ClassInfo = cls;
            $t = Bridge.getEnumerator(cls.properties);
            while ($t.moveNext()) {
                var prp = $t.getCurrent();
                prp.classInfo = cls;
            }
            this._PropertyInfos = cls.properties;
    },
    defineEchonetObject: function (indent) {
        var $t;
        var body = new System.Text.StringBuilder();
    
        $t = Bridge.getEnumerator(this._PropertyInfos);
        while ($t.moveNext()) {
            var pi = $t.getCurrent();
            if (WebMrbc.CodeGenerator.isExtractProperty(pi)) {
                continue;
            }
    
            WebMrbc.CodeGenerator.getInitialValue$1(body, pi, pi.description, pi.valueDescription, indent, false);
        }
    
        return body.toString();
    },
    defineEchonetAccesser: function (indent, wa) {
        var $t;
        var body = new System.Text.StringBuilder();
    
        $t = Bridge.getEnumerator(this._PropertyInfos);
        while ($t.moveNext()) {
            var pi = $t.getCurrent();
            if (WebMrbc.CodeGenerator.isExtractProperty(pi)) {
                continue;
            }
    
            var func = WebMrbc.CodeGenerator.getSetter(pi);
            if (!System.Linq.Enumerable.from(wa.setterDefs).contains(func)) {
                wa.setterDefs.push(func);
                body.append(WebMrbc.CodeGenerator.getSetterBody(indent, pi));
            }
    
            func = WebMrbc.CodeGenerator.getGetter(pi);
            if (!System.Linq.Enumerable.from(wa.getterDefs).contains(func)) {
                wa.getterDefs.push(func);
                body.append(WebMrbc.CodeGenerator.getGetterBody(indent, pi));
            }
        }
    
        return body.toString();
    },
    configEchonetObject: function (indent) {
        var $t;
        var body = new System.Text.StringBuilder();
    
        body.appendLine(indent + "# プロパティ定義");
        body.appendLine(indent + "eprpinib_table = [");
        $t = Bridge.getEnumerator(this._PropertyInfos);
        while ($t.moveNext()) {
            var epi = $t.getCurrent();
            if (WebMrbc.CodeGenerator.isExtractProperty(epi)) {
                continue;
            }
    
            body.appendLine(indent + System.String.format("\tECNL::EProperty.new({0}, {1}, {2}, {3}, :{4}, :{5}),", WebMrbc.CodeGenerator.getEpc(epi), WebMrbc.CodeGenerator.getAccess(epi), WebMrbc.CodeGenerator.getSize(epi), WebMrbc.CodeGenerator.getExinf(epi), WebMrbc.CodeGenerator.getSetter(epi), WebMrbc.CodeGenerator.getGetter(epi)));
        }
        body.appendLine(indent + "]");
    
        return body.toString();
    }
    });
    
    Bridge.define('WebMrbc.CodeGenWorkArea', {
        setterDefs: null,
        getterDefs: null,
        config: {
            init: function () {
                this.setterDefs = System.Array.init(0, null);
                this.getterDefs = System.Array.init(0, null);
            }
        }
    });
    
    Bridge.define('WebMrbc.IModel', {
        $interface: true
    });
    
    Bridge.define('WebMrbc.Collections', {
        statics: {
            LocalNode: null,
            ClassWorkspaces: null,
            EcnlTaskWorkspace: null,
            MainLoopWorkspace: null
        }
    });
    
    Bridge.define('WebMrbc.EmModule', {
        preRun: null,
        postRun: null,
        _Term: null,
        canvas: null,
        setStatus: null,
        _last: null,
        _text: null,
        totalDependencies: 0,
        config: {
            init: function () {
                this.preRun = System.Array.init(0, null);
                this.postRun = System.Array.init(0, null);
            }
        },
        constructor: function (term) {
            this._Term = term;
            this.canvas = document.getElementById("canvas");
    
            // As a default initial behavior, pop up an alert when webgl context is lost. To make your
            // application robust, you may want to override this behavior before shipping!
            // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
            this.canvas.addEventListener("webglcontextlost", $_.WebMrbc.EmModule.f1, false);
            this.setStatus = Bridge.fn.bind(this, this._setStatus);
        },
        print: function (arg) {
            var $t;
            var text;
            var args;
            if (Bridge.referenceEquals(Bridge.getType(arg), String)) {
                text = Bridge.cast(arg, String);
            }
            else  {
                if (Bridge.is(Bridge.getType(arg), Array) && ((args = Bridge.cast(arg, Array))).length > 1) {
                    var texts = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(args);
                    while ($t.moveNext()) {
                        var ele = $t.getCurrent();
                        texts.push(ele.toString());
                    }
                    text = texts.join(" ");
                }
                else  {
                    text = arg.toString();
                }
            }
    
            System.Console.log(text);
            if (this._Term != null) {
                this._Term.write(text + "\r\n");
            }
        },
        printErr: function (arg) {
            var $t;
            var text;
            var args;
            if (Bridge.referenceEquals(Bridge.getType(arg), String)) {
                text = Bridge.cast(arg, String);
            }
            else  {
                if (Bridge.is(Bridge.getType(arg), Array) && ((args = Bridge.cast(arg, Array))).length > 1) {
                    var texts = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(args);
                    while ($t.moveNext()) {
                        var ele = $t.getCurrent();
                        texts.push(ele.toString());
                    }
                    text = texts.join(" ");
                }
                else  {
                    text = arg.toString();
                }
            }
    
            System.Console.log(text);
            if (this._Term != null) {
                this._Term.write(text + "\r\n");
            }
        },
        _setStatus: function (text) {
            if (this._last == null) {
                this._last = new $_.$AnonymousType$3(System.Int64((new Date()).getTime()).mul(10000), "");
            }
            if (Bridge.referenceEquals(text, this._text)) {
                return;
            }
            var progressElement = Bridge.cast(document.getElementById("progress"), HTMLProgressElement);
            var spinnerElement = Bridge.cast(document.getElementById("spinner"), HTMLDivElement);
            var m = text.match(new RegExp("([^(]+)\\((\\d+(\\.\\d+)?)\\/(\\d+)\\)"));
            var now = System.Int64((new Date()).getTime()).mul(10000);
            if (m != null && now.sub(System.Int64((new Date()).getTime()).mul(10000)).lt(System.Int64(30))) {
                return;
            } // if this is a progress update, skip it if too soon
            if (m != null) {
                text = m[1];
                progressElement.value = (parseInt(m[2]) * 100) | 0;
                progressElement.max = (parseInt(m[4]) * 100) | 0;
                progressElement.setAttribute("hidden", "false");
                spinnerElement.setAttribute("hidden", "false");
            }
            else  {
                progressElement.value = 0.0;
                progressElement.max = 0.0;
                progressElement.setAttribute("hidden", "true");
                if (!System.String.isNullOrEmpty(text)) {
                    spinnerElement.style.display = "none";
                }
            }
            var statusElement = Bridge.cast(document.getElementById("status"), HTMLDivElement);
            statusElement.innerHTML = text;
        },
        monitorRunDependencies: function (left) {
            this.totalDependencies = Math.max(this.totalDependencies, left);
            this.setStatus((left !== 0) ? "Preparing... (" + (((this.totalDependencies - left) | 0)) + "/" + this.totalDependencies + ")" : "All downloads complete.");
        },
        getFileSystem: function () {
            return this.FS;
        }
    });
    
    Bridge.define("$AnonymousType$3", $_, {
        constructor: function (time, text) {
            this.time = time;
            this.text = text;
        },
        gettime : function () {
            return this.time;
        },
        gettext : function () {
            return this.text;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$3)) {
                return false;
            }
            return Bridge.equals(this.time, o.time) && Bridge.equals(this.text, o.text);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1826821090;
            hash = hash * 23 + (this.time == null ? 0 : Bridge.getHashCode(this.time));
            hash = hash * 23 + (this.text == null ? 0 : Bridge.getHashCode(this.text));
            return hash;
        },
        toJSON: function () {
            return {
                time : this.time,
                text : this.text
            };
        }
    });
    
    Bridge.ns("WebMrbc.EmModule", $_);
    
    Bridge.apply($_.WebMrbc.EmModule, {
        f1: function (e) {
            window.alert("WebGL context lost. You will need to reload the page.");
            e.preventDefault();
        }
    });
    
    Bridge.define('WebMrbc.EObjectModalView', {
        el: null,
        model: null,
        target: null,
        currentClassGroup: null,
        config: {
            events: {
                Closed: null
            }
        },
        constructor: function () {
            this.el = $("#eobject-modal");
        },
        setEObject: function (eobject, imgUrl) {
            this.target = eobject;
            this.model = WebMrbc.JsonObjectInfoExtention.clone(eobject);
    
            var img = ($("<img>"));
            img.attr("src", imgUrl);
            img.attr("alt", this.model.identifer);
            $("#eobject-modal-eobject img").replaceWith(img);
    
            $("#eobject_identifer").val(this.model.identifer);
            $("#eobject_instanceCode").val(this.model.instanceCode.toString());
            this.setAttribute(this.model.attribute);
    
            this.setClassGroup(this.model.type.classGroup, Bridge.fn.bind(this, $_.WebMrbc.EObjectModalView.f1));
        },
        render: function () {
            this.el.modal({ backdrop: "static", show: true });
        },
        setAttribute: function (attribute) {
            var dropdown = $("#eobject_attribute").parent();
            var menuitem = $("a[role='menuitem']", dropdown);
    
            var text;
            switch (attribute) {
                case "local": 
                    text = menuitem.get(0).textContent;
                    break;
                case "sync": 
                    text = menuitem.get(1).textContent;
                    break;
                case "async": 
                    text = menuitem.get(2).textContent;
                    break;
                case "device": 
                    text = menuitem.get(3).textContent;
                    break;
                default: 
                    text = attribute;
                    break;
            }
    
            this.setAttribute$1(attribute, text);
        },
        setAttribute$1: function (attribute, text) {
            this.model.attribute = attribute;
    
            var button = $("#eobject_attribute");
            button.text(text);
    
            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);
        },
        setClassGroup: function (cg, success) {
            if (success === void 0) { success = null; }
            this.currentClassGroup = cg;
    
            var button = $("#eobject_classGroupCode");
            button.text(cg.description);
    
            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);
    
            if (cg.classes != null) {
                this.initClasss(cg);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
                return;
            }
    
            WebMrbc.App.updateClass(cg, Bridge.fn.bind(this, function () {
                this.initClasss(cg);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
            }));
        },
        setClass: function (c, success) {
            if (success === void 0) { success = null; }
            this.model.type = c;
    
            var button = $("#eobject_classCode");
            button.text(c.description);
    
            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);
    
            if (c.properties != null) {
                this.initProperties(c);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
                return;
            }
    
            WebMrbc.App.updateProperties(c, Bridge.fn.bind(this, function () {
                this.initProperties(c);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
            }));
        },
        initClassGroups: function () {
            var $t;
            var ul = $("#eobject_classGroups").get(0);
    
            ul.innerHTML = "";
    
            $t = Bridge.getEnumerator(WebMrbc.App.classGroups);
            while ($t.moveNext()) {
                var cg = $t.getCurrent();
                var li = document.createElement("li");
                li.setAttribute("role", "presentation");
    
                var a = document.createElement("a");
                a.setAttribute("role", "menuitem");
                a.appendChild(document.createTextNode(cg.description));
                ($(a)).click(cg, Bridge.fn.bind(this, this.onSelectClassGroupCode));
    
                li.appendChild(a);
                ul.appendChild(li);
            }
        },
        initClasss: function (cg) {
            var $t;
            var ul = $("#eobject_classs").get(0);
    
            ul.innerHTML = "";
    
            $t = Bridge.getEnumerator(cg.classes);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                var li = document.createElement("li");
                li.setAttribute("role", "presentation");
    
                var a = document.createElement("a");
                a.setAttribute("role", "menuitem");
                a.appendChild(document.createTextNode(c.description));
                ($(a)).click(c, Bridge.fn.bind(this, this.onSelectClassCode));
    
                li.appendChild(a);
                ul.appendChild(li);
            }
        },
        initProperties: function (c) {
            var $t;
            var div = $("#eobject_properties").get(0);
    
            div.innerHTML = "";
    
            $t = Bridge.getEnumerator(c.properties);
            while ($t.moveNext()) {
                var p = $t.getCurrent();
                var label = document.createElement("label");
                label.setAttribute("class", "btn btn-default");
    
                var input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("autocomplete", "off");
    
                label.appendChild(input);
                label.appendChild(document.createTextNode(p.description));
                label.setAttribute("data-ecnl-epc", p.propertyCode.toString());
    
                div.appendChild(label);
    
                if ((p.required.length > 0) && (!Bridge.referenceEquals(p.required[0], "NONE"))) {
                    ($(label)).button('toggle');
                }
            }
        },
        updateProperties: function () {
            var $t, $t1;
            var labels = $("#eobject_properties > .btn.btn-default");
    
            $t = Bridge.getEnumerator(labels.get());
            while ($t.moveNext()) {
                var l = $t.getCurrent();
                var label = $(l);
                if (label.is(".active")) {
                    label.button('toggle');
                }
    
                var sepc = label.attr("data-ecnl-epc");
                if (sepc == null) {
                    continue;
                }
    
                var epc = parseInt(sepc);
                var prop = null;
                $t1 = Bridge.getEnumerator(this.model.properties);
                while ($t1.moveNext()) {
                    var p = $t1.getCurrent();
                    if (p.propertyCode !== epc) {
                        continue;
                    }
                    prop = p;
                    break;
                }
                if (prop != null) {
                    label.button('toggle');
                }
            }
        },
        onSelectAttribute: function (sender, attribute) {
            var text = sender.textContent;
            this.setAttribute$1(attribute, text);
        },
        onSelectClassGroupCode: function (e) {
            this.setClassGroup(Bridge.cast(e.data, WebMrbc.JsonClassGroupInfo));
        },
        onSelectClassCode: function (e) {
            this.setClass(Bridge.cast(e.data, WebMrbc.JsonClassInfo));
        },
        onChangeInstanceCode: function (sender) {
            this.model.instanceCode = (parseInt(($(sender)).val())) & 255;
        },
        onOk: function (ele) {
            var $t, $t1;
            this.el.modal("hide");
    
            this.target.type = this.model.type;
            this.target.identifer = this.model.identifer;
            this.target.parent = this.model.parent;
            this.target.instanceCode = this.model.instanceCode;
            this.target.attribute = this.model.attribute;
            this.target.properties = System.Array.init(0, null);
    
            var labels = $("#eobject_properties > .btn.btn-default");
    
            $t = Bridge.getEnumerator(labels.get());
            while ($t.moveNext()) {
                var l = $t.getCurrent();
                var label = $(l);
                if (!label.is(".active")) {
                    continue;
                }
    
                var sepc = label.attr("data-ecnl-epc");
                if (sepc == null) {
                    continue;
                }
    
                var epc = parseInt(sepc);
                var prop = null;
                $t1 = Bridge.getEnumerator(this.model.type.properties);
                while ($t1.moveNext()) {
                    var p = $t1.getCurrent();
                    if (p.propertyCode !== epc) {
                        continue;
                    }
                    prop = p;
                    break;
                }
                if (prop != null) {
                    this.target.properties.push(prop);
                }
            }
    
            if (!Bridge.staticEquals(this.Closed, null)) {
                this.Closed(this, true);
            }
        },
        onCancel: function (ele) {
            this.el.modal("hide");
    
            if (!Bridge.staticEquals(this.Closed, null)) {
                this.Closed(this, false);
            }
        }
    });
    
    Bridge.ns("WebMrbc.EObjectModalView", $_);
    
    Bridge.apply($_.WebMrbc.EObjectModalView, {
        f1: function () {
            this.setClass(this.model.type, Bridge.fn.bind(this, this.updateProperties));
        }
    });
    
    Bridge.define('WebMrbc.Generator', {
        constructor: function (name) {
            var i; var g = new Blockly.Generator(); for (i in g) if (!this[i]) this[i] = g[i];
            Blockly.Generator.call(this, name);
        }
    });
    
    Bridge.define('WebMrbc.HexDump', {
        text: null,
        constructor: function (bytes, width) {
            var sb = new System.Text.StringBuilder();
    
            for (var index = 0; index < bytes.length; index = (index + width) | 0) {
                sb.appendFormat("{0:X4} : ", index);
                sb.append(this.binBump(bytes, index, width));
                sb.appendLine(this.asciiDump(bytes, index, width));
            }
    
            this.text = sb.toString();
        },
        binBump: function (bytes, offset, width) {
            var sb = new System.Text.StringBuilder();
    
            for (var index = 0; index < width; index = (index + 1) | 0) {
                if (((index + offset) | 0) < bytes.length) {
                    sb.appendFormat("{0:X2} ", bytes[((index + offset) | 0)]);
                }
                else  {
                    sb.append("   ");
                }
            }
    
            return sb.toString();
        },
        asciiDump: function (bytes, index, width) {
            var sb = new System.Text.StringBuilder();
    
            if (index < bytes.length) {
                width = Math.min(width, ((bytes.length - index) | 0));
    
                sb.append(": ");
                for (var i = 0; i < width; i = (i + 1) | 0) {
                    var b = bytes[((i + index) | 0)];
                    if (b < 32) {
                        b = 32;
                    }
                    sb.append(String.fromCharCode(b));
                }
            }
            else  {
                sb.append(":         ");
            }
    
            return sb.toString();
        },
        toString: function () {
            return this.text;
        }
    });
    
    Bridge.define('WebMrbc.JsonClassGroupInfo', {
        classGroupCode: 0,
        description: null,
        define: null,
        classes: null,
        constructor: function (p) {
            this.classGroupCode = p.classGroupCode;
            this.description = p.description;
            this.define = p.define;
        }
    });
    
    Bridge.define('WebMrbc.JsonClassInfo', {
        classCode: 0,
        description: null,
        name: null,
        define: null,
        type: null,
        classGroup: null,
        properties: null,
        constructor: function (p) {
            this.classCode = p.classCode;
            this.description = p.description;
            this.name = p.name;
            this.define = p.define;
            this.type = p.type;
            this.classGroup = p.classGroup;
            this.properties = p.properties;
        }
    });
    
    Bridge.define('WebMrbc.JsonFieldInfo', {
        description: null,
        valueDescription: null,
        unitDescription: null,
        initialValue: null,
        type: null,
        identifer: null,
        primitive: false,
        isArray: false,
        arrayCount: 0,
        size: 0,
        fields: null
    });
    
    Bridge.define('WebMrbc.JsonObjectInfo', {
        type: null,
        parent: null,
        identifer: null,
        instanceCode: 0,
        attribute: null,
        properties: null,
        constructor: function (type, identifer) {
            this.type = type;
            this.identifer = identifer;
            this.instanceCode = 1;
            this.attribute = "device";
            this.properties = System.Array.init(0, null);
        },
        findProperty: function (epc) {
            var $t;
            $t = Bridge.getEnumerator(this.properties);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item.propertyCode === epc) {
                    return item;
                }
            }
            return null;
        }
    });
    
    Bridge.define('WebMrbc.JsonObjectInfoExtention', {
        statics: {
            clone: function (obj) {
                return Bridge.merge(new WebMrbc.JsonObjectInfo(obj.type, obj.identifer), {
                    parent: obj.parent,
                    instanceCode: obj.instanceCode,
                    attribute: obj.attribute,
                    properties: Bridge.cast(System.Array.clone(obj.properties), Array)
                } );
            },
            copy: function (dst, src) {
                dst.type = src.type;
                dst.identifer = src.identifer;
                dst.parent = src.parent;
                dst.instanceCode = src.instanceCode;
                dst.attribute = src.attribute;
                dst.properties = Bridge.cast(System.Array.clone(src.properties), Array);
            }
        }
    });
    
    Bridge.define('WebMrbc.JsonSkeltonResult', {
        macro: null,
        declare: null,
        predefine: null,
        types: null,
        funcs: null,
        instance: null,
        define: null,
        config: null
    });
    
    Bridge.define('WebMrbc.MainMenuView', {
        el: "#main-menu",
        constructor: function () {
            $("#filename").keypress($_.WebMrbc.MainMenuView.f1);
    
            // HACK: if don't do below, can't open submenu on Chromium on Raspberry Pi
            $(".dropdown-toggle").dropdown();
        },
        onHelp: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
    
            var args = "--help";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write("$ mrbc " + args + "\r\n");
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onVersion: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
    
            var args = "--version";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write("$ mrbc " + args + "\r\n");
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onCompileToC: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
            WebMrbc.App.module.preRun.push(WebMrbc.App.preRun);
            WebMrbc.App.module.postRun.push($_.WebMrbc.MainMenuView.f2);
    
            var args = "-Bmain_rb_code -o build/main_rb.c src/main.rb";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write("$ mrbc " + args + "\r\n");
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onCompileToBin: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
            WebMrbc.App.module.preRun.push(WebMrbc.App.preRun);
            WebMrbc.App.module.postRun.push($_.WebMrbc.MainMenuView.f3);
    
            var args = "-o build/main_rb.bin src/main.rb";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write("$ mrbc " + args + "\r\n");
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onBlockMode: function () {
            $("#tabs a[href='#block-tab']").tab("show");
            $(".blocklyToolboxDiv").show();
        },
        onRubyMode: function () {
            WebMrbc.Views.ClassSelectorView.getCurrent().loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
    
            var code = new System.Text.StringBuilder();
            WebMrbc.Collections.ClassWorkspaces.each(function (e) {
                if (Bridge.is(e, WebMrbc.EObjectWorkspace)) {
                    code.append(e.toCode());
                }
            });
            code.append(WebMrbc.Collections.EcnlTaskWorkspace.toCode());
            code.append(WebMrbc.Collections.MainLoopWorkspace.toCode());
    
            var textEditor = window["textEditor"];
            textEditor.setValue(code.toString());
            textEditor.moveCursorTo(0, 0);
    
            $("#tabs a[href='#ruby-tab']").tab("show");
            $(".blocklyToolboxDiv").hide();
        },
        onOutputMode: function () {
            $("#tabs a[href='#output-tab']").tab("show");
            $(".blocklyToolboxDiv").hide();
        },
        onRun: function () {
        },
        onLoadLocal: function () {
        },
        onSave: function () {
        },
        onCheck: function () {
        },
        onReset: function () {
        },
        onPreference: function () {
        },
        onSignout: function () {
        },
        onSignin: function () {
        },
        onUsername: function () {
        },
        load: function (info) {
            if (info.error != null) {
                window["errorMessage"].call(null, goog.getMsg(WebMrbc.App.bm("VIEWS_MAIN_MENU_VIEW_LOAD_ERROR"), new $_.$AnonymousType$4(info.filename, info.error)));
            }
            else  {
                clearMessages();
    
                var filename = info.filename;
                if (filename.match(new RegExp("\\.xml$")) != null) {
                    if (Bridge.referenceEquals(window["blockMode"], undefined)) {
                        window["blockMode"] = true;
                    }
                    $("#tabs a[href='#block-tab']").tab("show");
    
                    filename = filename.replace(new RegExp("(\\.rb)?\\.xml$"), ".rb");
                    WebMrbc.App.loadXml(info.data);
                    info.data = Blockly.Ruby.workspaceToCode(Blockly.mainWorkspace);
                }
                else  {
                    WebMrbc.Collections.ClassWorkspaces.reset();
                    Blockly.mainWorkspace.clear();
    
                    if (window["blockMode"]) {
                        window["blockMode"] = false;
                        $("#tabs a[href='#ruby-tab']").tab("show");
    
                        window["textEditor"].focus();
                    }
                }
    
                $("#filename").val(filename);
                window["textEditor"].getSession().getDocument().setValue(info.data);
                window["textEditor"].moveCursorTo(0, 0);
                // TODO: Window.changed -> Smalruby.Models.SourceCode.changed
                window["changed"] = false;
                WebMrbc.App.changedAfterTranslating = true;
                window["successMessage"].call(null, WebMrbc.App.bm("VIEWS_MAIN_MENU_VIEW_LOAD_SUCCEEDED"));
            }
        }
    });
    
    Bridge.define("$AnonymousType$4", $_, {
        constructor: function (filename, error) {
            this.filename = filename;
            this.error = error;
        },
        getfilename : function () {
            return this.filename;
        },
        geterror : function () {
            return this.error;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$4)) {
                return false;
            }
            return Bridge.equals(this.filename, o.filename) && Bridge.equals(this.error, o.error);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 545831905;
            hash = hash * 23 + (this.filename == null ? 0 : Bridge.getHashCode(this.filename));
            hash = hash * 23 + (this.error == null ? 0 : Bridge.getHashCode(this.error));
            return hash;
        },
        toJSON: function () {
            return {
                filename : this.filename,
                error : this.error
            };
        }
    });
    
    Bridge.ns("WebMrbc.MainMenuView", $_);
    
    Bridge.apply($_.WebMrbc.MainMenuView, {
        f1: function (e) {
            if (e == null) {
                e = window["event"];
            }
            if (e.keyCode === 13) {
                $("#save-button").click();
                return false;
            }
            else  {
                return true;
            }
        },
        f2: function () {
            var FS = WebMrbc.App.module.getFileSystem();
    
            var stt = FS.stat("build/main_rb.c");
            var stream = FS.open("build/main_rb.c", "r");
            var buf = new Uint8Array(stt.size);
            FS.read(stream, buf, 0, stt.size, 0);
            FS.close(stream);
    
            var element = Bridge.cast(document.getElementById("output"), HTMLTextAreaElement);
            element.value = WebMrbc.App.module.UTF8ArrayToString(buf, 0) + "\n";
            element.scrollTop = element.scrollHeight; // focus on bottom
        },
        f3: function () {
            var FS = WebMrbc.App.module.getFileSystem();
    
            var stt = FS.stat("build/main_rb.bin");
            var stream = FS.open("build/main_rb.bin", "r");
            var buf = new Uint8Array(stt.size);
            FS.read(stream, buf, 0, stt.size, 0);
            FS.close(stream);
    
            var element = Bridge.cast(document.getElementById("output"), HTMLTextAreaElement);
            element.value = (new WebMrbc.HexDump(buf, 16)).toString();
            element.scrollTop = element.scrollHeight; // focus on bottom
        }
    });
    
    Bridge.define('WebMrbc.State', {
        statics: {
            Value: 0,
            EqualOrRange: 1,
            Description: 2,
            UnitOrCommaOrEnd: 3,
            RengeMax: 4,
            StartParenthesis: 5,
            RangeDescription: 6,
            MinDescription: 7,
            RangeSeparetor: 8,
            MaxDescription: 9,
            EndParenthesis: 10,
            CommaOrEnd: 11,
            BitFieldLSB: 12,
            BitRange: 13,
            BitFieldMSB: 14,
            BitFieldDescription: 15,
            BitRangeEnd: 16,
            Colon: 17
        },
        $enum: true
    });
    
    Bridge.define('WebMrbc.TokenInfo', {
        statics: {
            separetor: "[=,:\\(\\)\\[\\]～]",
            hexValue: "^0x[0-9A-Fa-f]+",
            numeric: "^[\\-\\+]?[\\.]?[0-9]+[0-9,\\.]*"
        },
        token: null,
        type: 0,
        constructor: function (token, type) {
            this.token = token;
            this.type = type;
        },
        toString: function () {
            return this.token;
        },
        toInt32: function () {
            switch (this.type) {
                case WebMrbc.TokenType.HexValue: 
                    return parseInt(this.token.substr(2), 16);
                case WebMrbc.TokenType.Numeric: 
                    return parseInt(this.token);
                default: 
                    return 0;
            }
        },
        toInt64: function (typeName) {
            var temp;
    
            switch (this.type) {
                case WebMrbc.TokenType.HexValue: 
                    temp = this.token.substr(2);
                    return System.Int64(parseInt(temp, 16));
                case WebMrbc.TokenType.Numeric: 
                    return System.Int64(parseInt(this.token));
                default: 
                    return System.Int64(0);
            }
        }
    });
    
    Bridge.define('WebMrbc.TokenType', {
        statics: {
            Separetor: 0,
            HexValue: 1,
            Numeric: 2,
            String: 3,
            End: 4
        },
        $enum: true
    });
    
    Bridge.define('WebMrbc.ValueRange', {
        statics: {
            _ParsedText: null,
            config: {
                init: function () {
                    this._ParsedText = new System.Collections.Generic.Dictionary$2(String,WebMrbc.ValueSet)();
                }
            },
            parseValueRange: function (input, type, values, ranges, bitFeild, initialValue) {
                var $t;
                bitFeild.v = null;
                initialValue.v = null;
    
                var tokens = System.Array.init(0, null);
                var pos = 0;
                while (pos < input.length) {
                    var ms;
                    var m;
                    if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.hexValue))).exec(input.substr(pos)))) != null) {
                        tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.HexValue));
                        pos = (pos + m[0].length) | 0;
                    }
                    else  {
                        if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.numeric))).exec(input.substr(pos)))) != null) {
                            tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Numeric));
                            pos = (pos + m[0].length) | 0;
                        }
                        else  {
                            if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.separetor))).exec(input.substr(pos)))) == null) {
                                tokens.push(new WebMrbc.TokenInfo(input.substr(pos), WebMrbc.TokenType.String));
                                break;
                            }
                            var index = (pos + ms.lastIndex) | 0;
                            if (index === pos) {
                                tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Separetor));
                                pos = (pos + 1) | 0;
                            }
                            else  {
                                tokens.push(new WebMrbc.TokenInfo(input.substr(pos, ((index - pos) | 0)), WebMrbc.TokenType.String));
                                tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Separetor));
                                pos = (index + 1) | 0;
                            }
                        }
                    }
                }
                tokens.push(new WebMrbc.TokenInfo("", WebMrbc.TokenType.End));
    
                var OK = false;
                var sentence = System.Array.init(0, null);
                var state = WebMrbc.State.Value;
                $t = Bridge.getEnumerator(tokens);
                while ($t.moveNext()) {
                    var token = $t.getCurrent();
                    switch (state) {
                        case WebMrbc.State.Value: 
                            if ((token.type === WebMrbc.TokenType.HexValue) || (token.type === WebMrbc.TokenType.Numeric)) {
                                sentence.push(token);
                                state = WebMrbc.State.EqualOrRange;
                                continue;
                            }
                            else  {
                                if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "["))) {
                                    if (bitFeild.v != null) {
                                        break;
                                    }
                                    state = WebMrbc.State.BitFieldLSB;
                                    continue;
                                }
                            }
                            break;
                        case WebMrbc.State.EqualOrRange: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "=": 
                                        state = WebMrbc.State.Description;
                                        continue;
                                    case "～": 
                                        state = WebMrbc.State.RengeMax;
                                        continue;
                                }
                            }
                            else  {
                                if (token.type === WebMrbc.TokenType.End) {
                                    var option = new WebMrbc.Option(sentence[0].toInt64(type), "固定");
                                    if (bitFeild.v != null) {
                                        bitFeild.v.addValue(option);
                                    }
                                    else  {
                                        if (initialValue.v == null) {
                                            initialValue.v = option;
                                        }
                                        values.push(option);
                                    }
                                    sentence.splice(0, sentence.length);
                                    state = WebMrbc.State.CommaOrEnd;
                                    continue;
                                }
                            }
                            break;
                        case WebMrbc.State.Description: 
                            if (token.type === WebMrbc.TokenType.String) {
                                var option1 = new WebMrbc.Option(sentence[0].toInt64(type), token.token);
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option1);
                                }
                                else  {
                                    if (initialValue.v == null) {
                                        initialValue.v = option1;
                                    }
                                    values.push(option1);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            }
                            else  {
                                if (token.type === WebMrbc.TokenType.Numeric) {
                                    sentence.push(token);
                                    state = WebMrbc.State.UnitOrCommaOrEnd;
                                    continue;
                                }
                            }
                            break;
                        case WebMrbc.State.UnitOrCommaOrEnd: 
                            if (token.type === WebMrbc.TokenType.String) {
                                var option2 = new WebMrbc.Option(sentence[0].toInt64(type), sentence[1].token + token.token);
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option2);
                                }
                                else  {
                                    if (initialValue.v == null) {
                                        initialValue.v = option2;
                                    }
                                    values.push(option2);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            }
                            else  {
                                if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ","))) {
                                    var option3 = new WebMrbc.Option(sentence[0].toInt64(type), sentence[1].token);
                                    if (bitFeild.v != null) {
                                        bitFeild.v.addValue(option3);
                                    }
                                    else  {
                                        if (initialValue.v == null) {
                                            initialValue.v = option3;
                                        }
                                        values.push(option3);
                                    }
                                    sentence.splice(0, sentence.length);
                                    state = WebMrbc.State.Value;
                                    continue;
                                }
                                else  {
                                    if (token.type === WebMrbc.TokenType.End) {
                                        var option4 = new WebMrbc.Option(sentence[0].toInt64(type), sentence[1].token);
                                        if (bitFeild.v != null) {
                                            bitFeild.v.addValue(option4);
                                        }
                                        else  {
                                            if (initialValue.v == null) {
                                                initialValue.v = option4;
                                            }
                                            values.push(option4);
                                        }
                                        sentence.splice(0, sentence.length);
                                        OK = true;
                                    }
                                }
                            }
                            break;
                        case WebMrbc.State.RengeMax: 
                            if ((token.type === WebMrbc.TokenType.HexValue) || (token.type === WebMrbc.TokenType.Numeric)) {
                                sentence.push(token);
                                state = WebMrbc.State.StartParenthesis;
                                continue;
                            }
                            else  {
                                if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "="))) {
                                    var max = "0x";
                                    for (var i = (sentence[0].token.length - 2) | 0; i > 0; i = (i - 1) | 0) {
                                        max += "F";
                                    }
                                    sentence.push(new WebMrbc.TokenInfo(max, WebMrbc.TokenType.HexValue));
                                    state = WebMrbc.State.RangeDescription;
                                    continue;
                                }
                            }
                            break;
                        case WebMrbc.State.StartParenthesis: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "=": 
                                        if (sentence.length === 2) {
                                            state = WebMrbc.State.RangeDescription;
                                            continue;
                                        }
                                        break;
                                    case "(": 
                                        sentence.push(new WebMrbc.TokenInfo("", WebMrbc.TokenType.String));
                                        state = WebMrbc.State.MinDescription;
                                        continue;
                                    case ",": 
                                        var range = new WebMrbc.Range("constructor", sentence[0].toInt64(type), sentence[1].toInt64(type), (sentence.length > 2) ? sentence[2].token : "");
                                        if (bitFeild.v != null) {
                                            bitFeild.v.addRange(range);
                                        }
                                        else  {
                                            if (initialValue.v == null) {
                                                initialValue.v = range;
                                            }
                                            ranges.push(range);
                                        }
                                        sentence.splice(0, sentence.length);
                                        state = WebMrbc.State.Value;
                                        continue;
                                }
                            }
                            else  {
                                if (token.type === WebMrbc.TokenType.End) {
                                    var range1 = new WebMrbc.Range("constructor", sentence[0].toInt64(type), sentence[1].toInt64(type), (sentence.length > 2) ? sentence[2].token : "");
                                    if (bitFeild.v != null) {
                                        bitFeild.v.addRange(range1);
                                    }
                                    else  {
                                        if (initialValue.v == null) {
                                            initialValue.v = range1;
                                        }
                                        ranges.push(range1);
                                    }
                                    sentence.splice(0, sentence.length);
                                    OK = true;
                                }
                            }
                            break;
                        case WebMrbc.State.RangeDescription: 
                            if (token.type === WebMrbc.TokenType.String) {
                                sentence.push(token);
                                state = WebMrbc.State.StartParenthesis;
                                continue;
                            }
                            break;
                        case WebMrbc.State.MinDescription: 
                            if ((token.type === WebMrbc.TokenType.Numeric) || (token.type === WebMrbc.TokenType.String)) {
                                sentence.push(token);
                                state = WebMrbc.State.RangeSeparetor;
                                continue;
                            }
                            break;
                        case WebMrbc.State.RangeSeparetor: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "～"))) {
                                state = WebMrbc.State.MaxDescription;
                                continue;
                            }
                            break;
                        case WebMrbc.State.MaxDescription: 
                            if ((token.type === WebMrbc.TokenType.Numeric) || (token.type === WebMrbc.TokenType.String)) {
                                sentence.push(token);
                                state = WebMrbc.State.EndParenthesis;
                                continue;
                            }
                            break;
                        case WebMrbc.State.EndParenthesis: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ")"))) {
                                var range2 = new WebMrbc.Range("constructor$1", sentence[0].toInt64(type), sentence[1].toInt64(type), sentence[2].token, sentence[3].token, sentence[4].token, (sentence.length > 5) ? sentence[5].token : "");
                                if (bitFeild.v != null) {
                                    bitFeild.v.addRange(range2);
                                }
                                else  {
                                    if (initialValue.v == null) {
                                        initialValue.v = range2;
                                    }
                                    ranges.push(range2);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            }
                            else  {
                                if (token.type === WebMrbc.TokenType.String) {
                                    sentence.push(token);
                                    state = WebMrbc.State.EndParenthesis;
                                    continue;
                                }
                            }
                            break;
                        case WebMrbc.State.BitFieldLSB: 
                            if (token.type === WebMrbc.TokenType.Numeric) {
                                sentence.push(token);
                                state = WebMrbc.State.BitRange;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitRange: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "～": 
                                        state = WebMrbc.State.BitFieldMSB;
                                        continue;
                                    case "]": 
                                        sentence.push(sentence[0]);
                                        state = WebMrbc.State.BitFieldDescription;
                                        continue;
                                }
                            }
                            break;
                        case WebMrbc.State.BitFieldMSB: 
                            if (token.type === WebMrbc.TokenType.Numeric) {
                                sentence.push(token);
                                state = WebMrbc.State.BitRangeEnd;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitRangeEnd: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "]"))) {
                                state = WebMrbc.State.BitFieldDescription;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitFieldDescription: 
                            if (token.type === WebMrbc.TokenType.String) {
                                sentence.push(token);
                                state = WebMrbc.State.Colon;
                                continue;
                            }
                            break;
                        case WebMrbc.State.Colon: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ":"))) {
                                bitFeild.v = new WebMrbc.BitField(sentence[0].toInt32(), sentence[1].toInt32(), sentence[2].token);
                                if (initialValue.v == null) {
                                    initialValue.v = bitFeild.v;
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.Value;
                                continue;
                            }
                            else  {
                                if (token.type === WebMrbc.TokenType.End) {
                                    bitFeild.v = new WebMrbc.BitField(sentence[0].toInt32(), sentence[1].toInt32(), sentence[2].token);
                                    if (initialValue.v == null) {
                                        initialValue.v = bitFeild.v;
                                    }
                                    sentence.splice(0, sentence.length);
                                    OK = true;
                                    break;
                                }
                            }
                            break;
                        case WebMrbc.State.CommaOrEnd: 
                            if (token.type === WebMrbc.TokenType.End) {
                                OK = true;
                            }
                            else  {
                                if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ","))) {
                                    state = WebMrbc.State.Value;
                                    continue;
                                }
                            }
                            break;
                    }
                    break;
                }
    
                return OK;
            },
            parse: function (valrng, emti) {
                var $t, $t1;
                var valueRange = new WebMrbc.ValueRange();
    
                if (emti.primitive) {
                    var lines = valrng.split(new RegExp("\r\n"));
                    $t = Bridge.getEnumerator(lines);
                    while ($t.moveNext()) {
                        var line = $t.getCurrent();
                        if (new RegExp("^<(.+)>$").test(line)) {
                            continue;
                        }
    
                        var values;
                        var ranges;
                        var bitField = { };
                        var initialValue = { };
    
                        var pair = { };
                        if (WebMrbc.ValueRange._ParsedText.tryGetValue(line, pair)) {
                            values = pair.v.values;
                            ranges = pair.v.ranges;
                            bitField.v = pair.v.bitField;
                            initialValue.v = pair.v.initialValue;
                        }
                        else  {
                            values = System.Array.init(0, null);
                            ranges = System.Array.init(0, null);
    
                            WebMrbc.ValueRange.parseValueRange(line, emti.type, values, ranges, bitField, initialValue);
    
                            WebMrbc.ValueRange._ParsedText.add(line, new WebMrbc.ValueSet(values, ranges, bitField.v, initialValue.v));
                        }
    
                        valueRange._Values.concat.apply(valueRange._Values, values);
                        valueRange._Ranges.concat.apply(valueRange._Ranges, ranges);
                        if (bitField.v != null) {
                            valueRange._BitFields.push(bitField.v);
                        }
                        if (valueRange._InitailValue == null) {
                            valueRange._InitailValue = initialValue.v;
                        }
                    }
                }
                else  {
                    $t1 = Bridge.getEnumerator(emti.fields);
                    while ($t1.moveNext()) {
                        var efi = $t1.getCurrent();
                        var member = WebMrbc.ValueRange.parse(efi.valueDescription, efi);
                        valueRange._MemberFields.push(member);
                    }
                }
    
                return valueRange;
            }
        },
        _Values: null,
        _Ranges: null,
        _BitFields: null,
        _MemberFields: null,
        _InitailValue: null,
        config: {
            init: function () {
                this._Values = System.Array.init(0, null);
                this._Ranges = System.Array.init(0, null);
                this._BitFields = System.Array.init(0, null);
                this._MemberFields = System.Array.init(0, null);
            }
        },
        getValues: function () {
            return this._Values;
        },
        getRanges: function () {
            return this._Ranges;
        },
        getBitFields: function () {
            return this._BitFields;
        },
        getMemberFields: function () {
            return this._MemberFields;
        },
        getInitailValue: function () {
            if (this._InitailValue == null) {
                return "";
            }
            return this._InitailValue.getInitialValue();
        },
        setInitailValue: function (value) {
            var $t, $t1, $t2;
            var val64 = parseInt(value);
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(System.Int64(val64))) {
                    continue;
                }
    
                this._InitailValue = val;
                return;
            }
    
            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(System.Int64(val64))) || (rng.getMax().lt(System.Int64(val64)))) {
                    continue;
                }
    
                this._InitailValue = new WebMrbc.InRangeValue(rng, System.Int64(val64));
                return;
            }
    
            if (this._BitFields.length > 0) {
                var ok = true;
                var bitFlds = System.Array.init(0, null);
                $t2 = Bridge.getEnumerator(this._BitFields);
                while ($t2.moveNext()) {
                    var bit = $t2.getCurrent();
                    if (!bit.isInRange(System.Int64(val64))) {
                        ok = false;
                        break;
                    }
    
                    bitFlds.push(bit.getInRangeValue(System.Int64(val64)));
                }
    
                if (ok) {
                    this._InitailValue = new WebMrbc.BitFiledsValue(this._BitFields, bitFlds, System.Int64(val64));
                    return;
                }
            }
        }
    });
    
    Bridge.define('WebMrbc.ValueSet', {
        values: null,
        ranges: null,
        bitField: null,
        initialValue: null,
        constructor: function (values, ranges, bitField, initialValue) {
            this.values = values;
            this.ranges = ranges;
            this.bitField = bitField;
            this.initialValue = initialValue;
        }
    });
    
    Bridge.define('WebMrbc.Views', {
        statics: {
            ClassSelectorView: null,
            MainMenuView: null,
            EObjectModalView: null
        }
    });
    
    Bridge.define('WebMrbc.AnalogDacBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("アナログDAC出力");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.AnalogReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("アナログリード").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.AnalogReferenceBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("アナログ入力基準電圧").appendField(new Blockly.FieldDropdown([["5.0V Arduino互換", "AR_DEFAULT"], ["1.1V 内蔵電圧", "AR_INTERNAL"], ["AVREFピン供給電圧", "AR_EXTERNAL"], ["3.3V 12ビットA/D変換を行う", "AR_RAW12BIT"]]), "ANALOG_REFERENCE_MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.BitField', {
        inherits: [WebMrbc.Value],
        _Least: 0,
        _Most: 0,
        _Disp: null,
        _Values: null,
        _Ranges: null,
        _InitailValue: null,
        config: {
            init: function () {
                this._Values = System.Array.init(0, null);
                this._Ranges = System.Array.init(0, null);
            }
        },
        constructor: function (least, most, disp) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._Least = least;
            this._Most = most;
            this._Disp = disp;
        },
        getLeast: function () {
            return this._Least;
        },
        getMost: function () {
            return this._Most;
        },
        getDisp: function () {
            return this._Disp;
        },
        getValues: function () {
            return this._Values;
        },
        getRanges: function () {
            return this._Ranges;
        },
        getInitailValue: function () {
            return this._InitailValue;
        },
        getInitialValue: function () {
            if (this._InitailValue == null) {
                return "";
            }
            return this._InitailValue.getInitialValue();
        },
        addValue: function (option) {
            if (this._InitailValue == null) {
                this._InitailValue = option;
            }
            this._Values.push(option);
        },
        addRange: function (range) {
            if (this._InitailValue == null) {
                this._InitailValue = range;
            }
            this._Ranges.push(range);
        },
        isInRange: function (val64) {
            var $t, $t1;
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(val64)) {
                    continue;
                }
    
                return true;
            }
    
            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(val64)) || (rng.getMax().lt(val64))) {
                    continue;
                }
    
                return true;
            }
    
            return false;
        },
        getInRangeValue: function (val64) {
            var $t, $t1;
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(val64)) {
                    continue;
                }
    
                return val;
            }
    
            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(val64)) || (rng.getMax().lt(val64))) {
                    continue;
                }
    
                return new WebMrbc.InRangeValue(rng, val64);
            }
    
            return null;
        }
    });
    
    Bridge.define('WebMrbc.BitFiledsValue', {
        inherits: [WebMrbc.Value],
        _BitFields: null,
        _BitFieldValues: null,
        _Value: System.Int64(0),
        constructor: function (bitFlds, bitFldVals, value) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._BitFields = bitFlds;
            this._BitFieldValues = bitFldVals;
            this._Value = value;
        },
        getDisp: function () {
            return "";
        },
        getInitialValue: function () {
            return this._Value.toString(16).toUpperCase();
        }
    });
    
    Bridge.define('WebMrbc.CallBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendValueInput("RET").setCheck(null).appendField("呼び出し");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.Collection$1', function (T) { return {
        list: null,
        onAdd: null,
        onRemove: null,
        onReset: null,
        onChange: null,
        config: {
            init: function () {
                this.list = System.Array.init(0, function (){
        return Bridge.getDefaultValue(T);
    });
            }
        },
        getLastModel: function () {
            var i = this.list.length;
            if (i === 0) {
                return Bridge.getDefaultValue(T);
            }
            return this.list[((i - 1) | 0)];
        },
        getLength: function () {
            return this.list.length;
        },
        add: function (eobject) {
            this.list.push(eobject);
    
            if (!Bridge.staticEquals(this.onAdd, null)) {
                this.onAdd(this, Object.empty);
            }
        },
        remove: function (eobject) {
            var i = Bridge.Linq.Enumerable.from(this.list).indexOf(eobject);
            if (i >= 0) {
                this.list.splice(i, 1);
            }
    
            if (!Bridge.staticEquals(this.onRemove, null)) {
                this.onRemove(this, Object.empty);
            }
        },
        reset: function () {
            this.list.splice(0, this.list.length);
    
            if (!Bridge.staticEquals(this.onReset, null)) {
                this.onReset(this, Object.empty);
            }
        },
        reset$1: function (n) {
            this.list.splice(0, this.list.length);
            this.list.concat(n);
    
            if (!Bridge.staticEquals(this.onReset, null)) {
                this.onReset(this, Object.empty);
            }
        },
        at: function (index) {
            return this.list[index];
        },
        uniqueName: function (identifer) {
            var $t;
            var prefix = identifer;
            var max = 0;
            var n = new RegExp("^" + prefix + "([0-9]+)$");
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                var m = c.getIdentifer().match(n);
                if (m != null) {
                    max = Math.max(max, parseInt(m[0]));
                }
                break;
            }
            return "" + prefix + (((max + 1) | 0));
        },
        findWhere: function (p) {
            var $t;
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                if ((function(c) { for (var i in p) if (p[i] !== c[i]) return false; return true; })(c)) {
                    return c;
                }
            }
            return Bridge.getDefaultValue(T);
        },
        each: function (cb) {
            var $t;
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                cb(c);
            }
        }
    }; });
    
    Bridge.define('WebMrbc.DelayBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ディレイ");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.DigitalReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("デジタルリード").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.setInputsInline(true);
            this.setOutput(true, "PIN_VALUE");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.DigitalWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("デジタルライト").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.appendDummyInput().appendField("値").appendField(new Blockly.FieldDropdown([["LOW", "PIN_VALUE_LOW"], ["HIGH", "PIN_VALUE_HIGH"]]), "PIN_VALUE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.IClassWorkspace', {
        inherits: [WebMrbc.IModel],
        $interface: true
    });
    
    Bridge.define('WebMrbc.EPropertyBlock', {
        inherits: [WebMrbc.Block],
        propertyInfo: null,
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput("PROPERTY").appendField(new Blockly.FieldTextInput("onoff_prop"), "IDENTIFER").appendField("動作状態", "DESCRIPTION").appendField("EPC:").appendField("80", "PROPERTY_CODE").appendField("Size:").appendField("1", "PROPERTY_SIZE").appendField("byte");
            this.appendStatementInput("SET").setCheck("ESetHandler").appendField("設定(prop, src)");
            this.appendValueInput("SET_RET").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("設定に使用したバイト数");
            this.appendStatementInput("GET").setCheck("EGetHandler").appendField("取得(prop, size)");
            this.appendValueInput("GET_RET").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("返すデータ");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
    
            this.getField("PROPERTY_CODE").EDITABLE = true;
        },
        initPropertyInfo: function (workspace) {
            var $t;
            var c = workspace.eobject;
            var epc = parseInt(this.getFieldValue("PROPERTY_CODE"), 16);
            $t = Bridge.getEnumerator(c.properties);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item.propertyCode !== epc) {
                    continue;
                }
    
                this.setPropertyInfo(item);
                break;
            }
        },
        setPropertyInfo: function (pi) {
            this.propertyInfo = pi;
    
            this.setFieldValue(WebMrbc.CodeGenerator.getPropertyIdentifier(pi), "IDENTIFER");
            this.setFieldValue(pi.description, "DESCRIPTION");
            this.setFieldValue(System.Byte.format(pi.propertyCode, "X2"), "PROPERTY_CODE");
            this.setFieldValue(pi.size.toString(), "PROPERTY_SIZE");
        },
        onCreate: function (workspace, cre) {
            if (this.propertyInfo == null) {
                this.initPropertyInfo(workspace);
            }
        },
        onChange: function (workspace, chg) {
            if (!Bridge.referenceEquals(chg.element, "field")) {
                return;
            }
    
            switch (chg.name) {
                case "IDENTIFER": 
                    this.propertyInfo.identifer = this.getFieldValue("IDENTIFER");
                    break;
                case "PROPERTY_CODE": 
                    this.initPropertyInfo(workspace);
                    break;
            }
        },
        onDelete: function (workspace, del) {
        },
        onMove: function (workspace, mov) {
        }
    });
    
    Bridge.define('WebMrbc.I2cAvailableBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの受信バッファ内にあるデータ数を調べる").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cBeginBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信開始準備").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cEndBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信シーケンスを発行する").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendDummyInput().appendField("ストップコンディション発生").appendField(new Blockly.FieldCheckbox("TRUE"), "STOP");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cFrequencyBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの周波数を変更する").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendValueInput("FREQUENCY").setCheck("Number").appendField("周波数");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cLreadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへ受信シーケンスを発行しデータを読み出す").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cLwriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信バッファの末尾に数値を追加する").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendValueInput("DATA").setCheck("Number").appendField("データ");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cNewBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの初期化").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cからの読み込み").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendValueInput("ADDRESS_L").setCheck("Number").appendField("下位アドレス");
            this.appendValueInput("ADDRESS_H").setCheck("Number").appendField("上位アドレス");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cRequestBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへ受信シーケンスを発行する").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("COUNT").setCheck("Number").appendField("データ数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.I2cWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへの書き込み").appendField(new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]), "PORT_NO");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("アドレス");
            this.appendValueInput("DATA").setCheck("Number").appendField("データ");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.InitDacBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("アナログDACピン初期化");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.InRangeValue', {
        inherits: [WebMrbc.Value],
        _Range: null,
        _Value: System.Int64(0),
        constructor: function (range, value) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._Range = range;
            this._Value = value;
        },
        getRange: function () {
            return this._Range;
        },
        getValue: function () {
            return this._Value;
        },
        getDisp: function () {
            return this._Range.getDisp$1(this._Value);
        },
        getInitialValue: function () {
            return this._Value.toString(16).toUpperCase();
        }
    });
    
    Bridge.define('WebMrbc.JsonNodeInfo', {
        inherits: [WebMrbc.JsonObjectInfo],
        objects: null,
        constructor: function (type, identifer, attribute) {
            WebMrbc.JsonObjectInfo.prototype.$constructor.call(this, type, identifer);
    
            this.attribute = attribute;
            this.objects = System.Array.init(0, null);
        }
    });
    
    Bridge.define('WebMrbc.JsonPropertyInfo', {
        inherits: [WebMrbc.JsonFieldInfo],
        classInfo: null,
        propertyCode: 0,
        access: null,
        required: null,
        constructor: function () {
            WebMrbc.JsonFieldInfo.prototype.$constructor.call(this);
    
        },
        constructor$1: function (p) {
            WebMrbc.JsonFieldInfo.prototype.$constructor.call(this);
    
            this.classInfo = p.classInfo;
            this.propertyCode = p.propertyCode;
            this.access = p.access;
            this.required = p.required;
            this.description = p.description;
            this.valueDescription = p.valueDescription;
            this.unitDescription = p.unitDescription;
            this.initialValue = p.initialValue;
            this.type = p.type;
            this.identifer = p.identifer;
            this.primitive = p.primitive;
            this.isArray = p.isArray;
            this.arrayCount = p.arrayCount;
            this.size = p.size;
            this.fields = p.fields;
        }
    });
    
    Bridge.define('WebMrbc.LedBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("LED").appendField(new Blockly.FieldDropdown([["ON", "LED_ON"], ["OFF", "LED_OFF"]]), "SW");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileCloseBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをクローズします").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileCpBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをコピーします");
            this.appendValueInput("SRC_FILENAME").setCheck("String").appendField("コピー元ファイル名");
            this.appendValueInput("DST_FILENAME").setCheck("String").appendField("コピー先ファイル名");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["上書きしない", "NO_OVERWRITE"], ["上書きする", "OVERWRITE"]]), "MODE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileOpenBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをオープンします").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("FILENAME").setCheck("String").appendField("ファイル名(8.3形式)");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["Read", "READ"], ["Append", "APPEND"], ["New Create", "NEW_CREATE"]]), "MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルから1バイト読み込みます").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileRmBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルを削除します");
            this.appendValueInput("FILENAME").setCheck("String").appendField("削除するファイル名");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileSeekBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの読み出し位置を移動する").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("POSITION").setCheck("Number").appendField("seekするバイト数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MemFileWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルにバイナリデータを書き込みます").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MicrosBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("起動してからのマイクロ秒数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.MillisBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("起動してからのミリ秒数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.NoToneBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("トーン出力停止").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.Option', {
        inherits: [WebMrbc.Value],
        _Val: System.Int64(0),
        _Disp: null,
        constructor: function (val, disp) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._Val = val;
            this._Disp = disp;
        },
        getVal: function () {
            return this._Val;
        },
        getDisp: function () {
            return this._Disp;
        },
        getInitialValue: function () {
            return this._Val.toString(16).toUpperCase();
        }
    });
    
    Bridge.define('WebMrbc.PinModeBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("PINのモード設定").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["INPUT", "PIN_MODE_INPUT"], ["OUTPUT", "PIN_MODE_OUTPUT"]]), "PIN_MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.PwmBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("PWM出力").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.appendValueInput("PWM_OUT").setCheck("Number").appendField("出力PWM比率");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.RandomBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("乱数を取得");
            this.appendValueInput("MIN").setCheck("Number").appendField("最小値");
            this.appendValueInput("MIN").setCheck("Number").appendField("最大値");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.RandomSeedBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("乱数を得るための種を与えます");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.Range', {
        inherits: [WebMrbc.Value],
        _Min: System.Int64(0),
        _Max: System.Int64(0),
        _Disp: null,
        _MinDisp: null,
        _MaxDisp: null,
        _Unit: null,
        _InitialValue: System.Int64(0),
        constructor: function (min, max, disp) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._Min = min;
            this._Max = max;
            this._Disp = disp;
            this._MinDisp = "";
            this._MaxDisp = "";
            this._Unit = "";
            this._InitialValue = min;
        },
        constructor$1: function (min, max, disp, minDisp, maxDisp, unit) {
            WebMrbc.Value.prototype.$constructor.call(this);
    
            this._Min = min;
            this._Max = max;
            this._Disp = disp;
            this._MinDisp = minDisp;
            this._MaxDisp = maxDisp;
            this._Unit = unit;
            this._InitialValue = min;
        },
        getMin: function () {
            return this._Min;
        },
        getMax: function () {
            return this._Max;
        },
        getDisp: function () {
            return this._Disp;
        },
        getMinDisp: function () {
            return this._MinDisp;
        },
        getMaxDisp: function () {
            return this._MaxDisp;
        },
        getUnit: function () {
            return this._Unit;
        },
        getInitialValue$1: function () {
            return this._InitialValue;
        },
        setInitialValue$1: function (value) {
            this._InitialValue = value;
        },
        getInitialValue: function () {
            return this._InitialValue.toString(16).toUpperCase();
        },
        getDisp$1: function (value) {
            return this._Disp + value.toString() + this._Unit;
        }
    });
    
    Bridge.define('WebMrbc.RtcDeinitBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("RTCを停止します");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.RtcGetTimeBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("RTCの時計を取得します");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.RtcInitBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("RTCを起動します");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.RtcSettimeBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("RTCの時計をセットします");
            this.appendValueInput("DATE").setCheck("Array");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.Ruby', {
        inherits: [WebMrbc.Generator],
        ORDER_ATOMIC: 0,
        ORDER_MEMBER: 2,
        ORDER_FUNCTION_CALL: 2,
        ORDER_EXPONENTIATION: 3,
        ORDER_LOGICAL_NOT: 4,
        ORDER_UNARY_SIGN: 4,
        ORDER_BITWISE_NOT: 4,
        ORDER_MULTIPLICATIVE: 5,
        ORDER_ADDITIVE: 6,
        ORDER_BITWISE_SHIFT: 7,
        ORDER_BITWISE_AND: 8,
        ORDER_BITWISE_XOR: 9,
        ORDER_BITWISE_OR: 9,
        ORDER_RELATIONAL: 11,
        ORDER_LOGICAL_AND: 13,
        ORDER_LOGICAL_OR: 14,
        ORDER_CONDITIONAL: 15,
        ORDER_NONE: 99,
        INFINITE_LOOP_TRAP: null,
        definitions_: null,
        functionNames_: null,
        variableDB_: null,
        escapeChars_: null,
        config: {
            init: function () {
                this.escapeChars_ = new System.Collections.Generic.Dictionary$2(String,String)();
            }
        },
        constructor: function () {
            WebMrbc.Generator.prototype.$constructor.call(this, "Ruby");
    
            this.addReservedWords("Class,Object,BEGIN,END,__ENCODING__,__END__,__FILE__,__LINE__alias,and,begin,break,case,class,def,defined?,do,else,elsif,end,ensure,false,for,if,in,module,nextnil,not,or,redo,rescue,retry,return,self,super,then,true,undef,unless,until,when,while,yield");
    
            this.escapeChars_.add("\"", "\\\"");
        },
        i2c_new: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$i2c" + dropdown_port_no + " = I2c.new(" + dropdown_port_no + ")\n";
            return code;
        },
        i2c_write: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$i2c" + dropdown_port_no + ".write(" + value_address + ",\"" + value_data + "\")\n";
            return code;
        },
        i2c_read: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_address_l = Blockly.Ruby.valueToCode(block, "ADDRESS_L", Blockly.Ruby.ORDER_ATOMIC);
            var value_address_h = Blockly.Ruby.valueToCode(block, "ADDRESS_H", Blockly.Ruby.ORDER_ATOMIC);
            var code;
            if (value_address_h == null) {
                code = "$i2c" + dropdown_port_no + ".read(" + value_address_l + ")";
            }
            else  {
                code = "$i2c" + dropdown_port_no + ".read(" + value_address_l + "," + value_address_h + ")";
            }
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_begin: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$i2c" + dropdown_port_no + ".begin()\n";
            return code;
        },
        i2c_lwrite: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$i2c" + dropdown_port_no + ".lwrite(" + value_data + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_end: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var checkbox_stop = Bridge.referenceEquals(block.getFieldValue("STOP"), "TRUE");
            var code = "$i2c" + dropdown_port_no + ".lwrite(" + checkbox_stop + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_request: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_count = Blockly.Ruby.valueToCode(block, "COUNT", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$i2c" + dropdown_port_no + ".request(" + value_address + "," + value_count + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_lread: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$i2c" + dropdown_port_no + ".lread()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_available: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$i2c" + dropdown_port_no + ".available()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_frequency: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_frequency = Blockly.Ruby.valueToCode(block, "FREQUENCY", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$i2c" + dropdown_port_no + ".frequency(" + value_frequency + ")\n";
            return code;
        },
        call: function (block) {
            var value_name = Blockly.Ruby.valueToCode(block, "RET", Blockly.Ruby.ORDER_ATOMIC);
            var code = value_name + "\n";
            return code;
        },
        pin_mode: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var dropdown_pin_mode = block.getFieldValue("PIN_MODE");
            var code = "pinMode(" + dropdown_pin_no + "," + dropdown_pin_mode + ")\n";
            return code;
        },
        digital_write: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var dropdown_pin_value = block.getFieldValue("PIN_VALUE");
            var code = "digitalWrite(" + dropdown_pin_no + "," + dropdown_pin_value + ")\n";
            return code;
        },
        digital_read: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = "digitalRead(" + dropdown_pin_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        analog_read: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = "analogRead(" + dropdown_pin_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        pwm: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var value_pwm_out = Blockly.Ruby.valueToCode(block, "PWM_OUT", Blockly.Ruby.ORDER_ATOMIC);
            var code = "pwm(" + dropdown_pin_no + "," + value_pwm_out + ")\n";
            return code;
        },
        analog_reference: function (block) {
            var dropdown_analog_reference_mode = block.getFieldValue("ANALOG_REFERENCE_MODE");
            var code = "analogReference(" + dropdown_analog_reference_mode + ")\n";
            return code;
        },
        init_dac: function (block) {
            var code = "initDac()\n";
            return code;
        },
        analog_dac: function (block) {
            var value_value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "analogDac(" + value_value + ")\n";
            return code;
        },
        delay: function (block) {
            var value_value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "delay(" + value_value + ")\n";
            return code;
        },
        millis: function (block) {
            var code = "millis()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        micros: function (block) {
            var code = "micros()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        led: function (block) {
            var dropdown_sw = block.getFieldValue("SW");
            var code = "led(" + dropdown_sw + ")\n";
            return code;
        },
        tone: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var value_frequency = Blockly.Ruby.valueToCode(block, "FREQUENCY", Blockly.Ruby.ORDER_ATOMIC);
            var value_duration = Blockly.Ruby.valueToCode(block, "DURATION", Blockly.Ruby.ORDER_ATOMIC);
            var code = "tone(" + dropdown_pin_no + "," + value_frequency + "," + value_duration + ")\n";
            return code;
        },
        no_tone: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = "noTone(" + dropdown_pin_no + ")\n";
            return code;
        },
        random_seed: function (block) {
            var value_name = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "randomSeed(" + value_name + ")\n";
            return code;
        },
        random: function (block) {
            var value_min = Blockly.Ruby.valueToCode(block, "MIN", Blockly.Ruby.ORDER_ATOMIC);
            var value_max = Blockly.Ruby.valueToCode(block, "MAX", Blockly.Ruby.ORDER_ATOMIC);
            var code = "random(" + value_min + "," + value_max + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_open: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_mode = block.getFieldValue("MODE");
            var code = "MemFile.open(" + dropdown_file_no + "," + value_filename + "," + dropdown_mode + ")\n";
            return code;
        },
        memfile_close: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "MemFile.close(" + dropdown_file_no + ")\n";
            return code;
        },
        memfile_read: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "MemFile.read(" + dropdown_file_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_write: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = "MemFile.write(" + dropdown_file_no + "," + value_data + "," + value_length + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_seek: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var code = "MemFile.seek(" + dropdown_file_no + "," + value_position + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_cp: function (block) {
            var value_src_filename = Blockly.Ruby.valueToCode(block, "SRC_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var value_dst_filename = Blockly.Ruby.valueToCode(block, "DST_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_mode = block.getFieldValue("MODE");
            var code = "MemFile.cp(" + value_dst_filename + "," + value_dst_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_rm: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "MemFile.rm(" + value_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_gettime: function (block) {
            var code = "Rtc.getTime()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_settime: function (block) {
            var value_date = Blockly.Ruby.valueToCode(block, "DATE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "Rtc.setTime(" + value_date + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_deinit: function (block) {
            var code = "Rtc.deinit()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_init: function (block) {
            var code = "Rtc.init()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_exists: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.exists(" + value_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_mkdir: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.mkdir(" + value_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_remove: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.remove(" + value_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_copy: function (block) {
            var value_src_filename = Blockly.Ruby.valueToCode(block, "SRC_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var value_dst_filename = Blockly.Ruby.valueToCode(block, "DST_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.copy(" + value_src_filename + "," + value_dst_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_rmdir: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.rmdir(" + value_filename + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_open: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_mode = block.getFieldValue("MODE");
            var code = "SD.open(" + dropdown_file_no + "," + value_filename + "," + dropdown_mode + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_close: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "SD.close(" + dropdown_file_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_read: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "SD.read(" + dropdown_file_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_seek: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.seek(" + dropdown_file_no + "," + value_position + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_write: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = "SD.write(" + dropdown_file_no + "," + value_data + "," + value_length + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_flush: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "SD.flush(" + dropdown_file_no + ")\n";
            return code;
        },
        sd_size: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "SD.size(" + dropdown_file_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_position: function (block) {
            var dropdown_file_no = block.getFieldValue("FILE_NO");
            var code = "SD.position(" + dropdown_file_no + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_new: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_bps = Blockly.Ruby.valueToCode(block, "BPS", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$Serial" + dropdown_port_no + " = Serial.new(" + dropdown_port_no + "," + value_bps + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_bps: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_bps = Blockly.Ruby.valueToCode(block, "BPS", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$Serial" + dropdown_port_no + ".bps(" + value_bps + ")\n";
            return code;
        },
        serial_print: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_str = Blockly.Ruby.valueToCode(block, "STR", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$Serial" + dropdown_port_no + ".print(" + value_str + ")\n";
            return code;
        },
        serial_println: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_str = Blockly.Ruby.valueToCode(block, "STR", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$Serial" + dropdown_port_no + ".println(" + value_str + ")\n";
            return code;
        },
        serial_available: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$Serial" + dropdown_port_no + ".available()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_read: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$Serial" + dropdown_port_no + ".read()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_write: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = "$Serial" + dropdown_port_no + ".bps(" + value_data + "," + value_length + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_flash: function (block) {
            var dropdown_port_no = block.getFieldValue("PORT_NO");
            var code = "$Serial" + dropdown_port_no + ".flash()\n";
            return code;
        },
        servo_attach: function (block) {
            var number_ch = block.getFieldValue("CH");
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var text_min = block.getFieldValue("MIN");
            var text_max = block.getFieldValue("MAX");
            var code = "Servo.attach(" + number_ch + "," + dropdown_pin_no + "," + text_min + "," + text_max + ")\n";
            return code;
        },
        servo_write: function (block) {
            var number_ch = block.getFieldValue("CH");
            var value_angle = Blockly.Ruby.valueToCode(block, "ANGLE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "Servo.write(" + number_ch + "," + value_angle + ")\n";
            return code;
        },
        servo_us: function (block) {
            var number_ch = block.getFieldValue("CH");
            var value_us = Blockly.Ruby.valueToCode(block, "US", Blockly.Ruby.ORDER_ATOMIC);
            var code = "Servo.us(" + number_ch + "," + value_us + ")\n";
            return code;
        },
        servo_read: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = "Servo.read(" + number_ch + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_attached: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = "Servo.attached(" + number_ch + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_detach: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = "Servo.detach(" + number_ch + ")\n";
            return code;
        },
        system_exit: function (block) {
            var code = "System.exit()\n";
            return code;
        },
        system_setrun: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = "System.setrun(" + value_filename + ")\n";
            return code;
        },
        system_version: function (block) {
            var code = "System.version()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_push: function (block) {
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = "System.push(" + value_address + "," + value_data + "," + value_length + ")\n";
            return code;
        },
        system_pop: function (block) {
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = "System.pop(" + value_address + "," + value_length + ")";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_fileload: function (block) {
            var code = "System.fileload()\n";
            return code;
        },
        system_reset: function (block) {
            var code = "System.reset()\n";
            return code;
        },
        system_use_sd: function (block) {
            var code = "System.useSD()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_use_wifi: function (block) {
            var code = "System.useWiFi()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_get_mrb_path: function (block) {
            var code = "System.getMrbPath()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        defineSvcTask: function (workspace, localNode) {
            var $t, $t1;
            var code = Blockly.Ruby.workspaceToCode(workspace.workspace);
            var identifer = workspace.getIdentifer();
            var funcs = System.Array.init(0, null);
    
            var blocks = Blockly.mainWorkspace.getTopBlocks(true);
            for (var i = 0; i < blocks.length; i = (i + 1) | 0) {
                var block = blocks[i];
                var name;
    
                switch (block.type) {
                    case "procedures_defnoreturn": 
                        name = block.getFieldValue("NAME");
                        switch (name) {
                            case "setup": 
                            case "recv_esv": 
                            case "break_wait": 
                            case "timeout": 
                            case "snd_msg": 
                                funcs.push(name);
                                break;
                        }
                        break;
                    case "procedures_defreturn": 
                        name = block.getFieldValue("NAME");
                        switch (name) {
                            case "is_local_addr": 
                            case "is_multicast_addr": 
                            case "is_valid_addrid": 
                            case "get_local_addr": 
                            case "get_multicast_addr": 
                            case "get_remote_addr": 
                            case "get_remote_id": 
                            case "set_remote_addr": 
                            case "add_remote_addr": 
                                funcs.push(name);
                                break;
                        }
                        break;
                }
            }
    
            var wa = new WebMrbc.CodeGenWorkArea();
            var sb = new System.Text.StringBuilder();
    
            sb.appendLine("class " + identifer + " ECNL::SvcTask");
            sb.appendLine("\tdef initialize()");
            sb.appendLine("\t\t@profile = " + localNode.identifer + ".new(" + localNode.instanceCode + ")");
            switch (localNode.objects.length) {
                case 0: 
                    sb.appendLine("\t\t@devices = []");
                    break;
                case 1: 
                    {
                        var o = localNode.objects[0];
                        sb.appendLine("\t\t@devices = [ " + o.identifer + ".new(" + o.instanceCode + ", @profile) ]");
                    }
                    break;
                default: 
                    sb.appendLine("\t\t@devices = [");
                    $t = Bridge.getEnumerator(localNode.objects);
                    while ($t.moveNext()) {
                        var o1 = $t.getCurrent();
                        sb.appendLine("\t\t\t" + o1.identifer + ".new(" + o1.instanceCode + ", @profile) ]");
                    }
                    sb.appendLine("\t\t]");
                    break;
            }
            sb.appendLine("\t\t@enodadrb_table = []");
            sb.appendLine();
            sb.appendLine("\t\tsuper()");
            if (System.Linq.Enumerable.from(funcs).contains("setup")) {
                sb.appendLine();
                sb.appendLine("\t\tsetup()");
            }
            sb.appendLine("\tend");
            sb.appendLine();
            $t1 = Bridge.getEnumerator(code.split("\n"));
            while ($t1.moveNext()) {
                var line = $t1.getCurrent();
                sb.appendLine("\t" + line);
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("recv_esv")) {
                sb.appendLine("\tdef recv_esv(esv)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("break_wait")) {
                sb.appendLine("\tdef break_wait(data)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("timeout")) {
                sb.appendLine("\tdef timeout()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("snd_msg")) {
                sb.appendLine("\tdef snd_msg(ep, data)");
                sb.appendLine("\t\t# 通信レイヤーへ送信");
                sb.appendLine("\t\tTargetBoard::snd_msg(ep, data)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("is_local_addr")) {
                sb.appendLine("\tdef is_local_addr(ep)");
                sb.appendLine("\t\tTargetBoard::is_local_addr(ep)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("is_multicast_addr")) {
                sb.appendLine("\tdef is_multicast_addr(ep)");
                sb.appendLine("\t\tTargetBoard::is_multicast_addr(ep)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("is_valid_addrid")) {
                sb.appendLine("\tdef is_valid_addrid(id)");
                sb.appendLine("\t\t(id >= 0) && ((id - ECNL::ENOD_REMOTE_ID) < @enodadrb_table.length)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("get_local_addr")) {
                sb.appendLine("\tdef get_local_addr()");
                sb.appendLine("\t\tTargetBoard::get_local_addr()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("get_multicast_addr")) {
                sb.appendLine("\tdef get_multicast_addr()");
                sb.appendLine("\t\tTargetBoard::get_multicast_addr()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("get_remote_addr")) {
                sb.appendLine("\tdef get_remote_addr(id)");
                sb.appendLine("\t\tindex = id - ECNL::ENOD_REMOTE_ID");
                sb.appendLine("\t\tif (index < 0) || (index >= @enodadrb_table.length)");
                sb.appendLine("\t\t\tnil");
                sb.appendLine("\t\telse");
                sb.appendLine("\t\t\t@enodadrb_table[index]");
                sb.appendLine("\t\tend");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("get_remote_id")) {
                sb.appendLine("\t# 通信レイヤーアドレスの同じものを検索");
                sb.appendLine("\tdef get_remote_id(ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif !ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine("\t\t\tif !TargetBoard::equals_addr(ea, ep) then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("set_remote_addr")) {
                sb.appendLine("\t# 対応するリモートノードを検索");
                sb.appendLine("\tdef set_remote_addr(edata, ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif !ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine("\t\t\tif !is_match(svc, edata, ep) then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\t# 対応するリモートノードがあれば通信レイヤーアドレスを設定");
                sb.appendLine("\t\t\t@enodadrb_table[id - ECNL::ENOD_REMOTE_ID] = ep");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Linq.Enumerable.from(funcs).contains("add_remote_addr")) {
                sb.appendLine("\t# 空き領域を探して自動登録");
                sb.appendLine("\tdef add_remote_addr(edata, ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\t@enodadrb_table[id - ECNL::ENOD_REMOTE_ID] = ep");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\tif @enodadrb_table.length >= 100 then");
                sb.appendLine("\t\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\tid = @enodadrb_table.length;");
                sb.appendLine("\t\t@enodadrb_table[id] = ep");
                sb.appendLine();
                sb.appendLine("\t\treturn id + ECNL::ENOD_REMOTE_ID");
                sb.appendLine("\tend");
                sb.appendLine("end");
    
                code = sb.toString();
            }
            return code;
        },
        itr_code: function () {
            var sb = new System.Text.StringBuilder();
    
            sb.appendLine("itr = esv.itr_ini()");
            sb.appendLine("itr.itr_nxt()");
            sb.appendLine("until itr.is_eof do");
            sb.appendLine("\tif itr.epc == 0xD6 then");
            sb.appendLine("\t\t# LEDをON");
            sb.appendLine("\t\tdigitalWrite(2, 1)");
            sb.appendLine("\tend");
            sb.appendLine("\titr.itr_nxt()");
            sb.appendLine("end");
    
            return sb.toString();
        },
        init_smalruby: function (workspace) {
            this.definitions_.set("receiver_stack", ["main"]);
            this.definitions_.set("eobject_stack", System.Array.init(0, null));
        },
        defineENode: function (enode, workspace) {
            var code = Blockly.Ruby.workspaceToCode(workspace);
            var identifer = enode.identifer;
            var blockName = "enode_" + identifer;
    
            if (!Blockly.Ruby.definitions_.containsKey(blockName)) {
                var wa = new WebMrbc.CodeGenWorkArea();
                var cg = new WebMrbc.CodeGenerator(enode);
                var sb = new System.Text.StringBuilder();
    
                sb.appendLine("class " + identifer + " < ECNL::ENode");
                sb.appendLine("\tdef initialize(eojx3)");
                sb.append(cg.defineEchonetObject("\t\t"));
                sb.appendLine();
                sb.append(cg.configEchonetObject("\t\t"));
                sb.appendLine();
                sb.appendLine("\t\tsuper(eojx3, eprpinib_table)");
                sb.appendLine("\tend");
                sb.appendLine();
                sb.append(code);
                sb.appendLine("end");
    
                code = sb.toString();
                Blockly.Ruby.definitions_.set(blockName, code);
            }
            return code;
        },
        defineEObject: function (eobject, workspace) {
            var code = Blockly.Ruby.workspaceToCode(workspace);
            var identifer = eobject.identifer;
            var wa = new WebMrbc.CodeGenWorkArea();
            var cg = new WebMrbc.CodeGenerator(eobject);
            var sb = new System.Text.StringBuilder();
    
            sb.appendLine("class " + identifer + " < ECNL::EObject");
            sb.appendLine("\tdef initialize(eojx3, enod)");
            sb.append(cg.defineEchonetObject("\t\t"));
            sb.appendLine();
            sb.append(cg.configEchonetObject("\t\t"));
            sb.appendLine();
            sb.appendLine("\t\tsuper(" + eobject.type.classGroup.classGroupCode + ", " + eobject.type.classCode + ", eojx3, enod, eprpinib_table)");
            sb.appendLine("\tend");
            sb.appendLine();
            sb.append(code);
            sb.appendLine("end");
    
            return sb.toString();
        },
        eobjectStack: function () {
            return Bridge.cast(this.definitions_.get("eobject_stack"), Array);
        },
        eobject: function () {
            var t = this.eobjectStack();
            if (t.length === 0) {
                return null;
            }
            return t[((t.length - 1) | 0)];
        },
        receiverStack: function () {
            return Bridge.cast(this.definitions_.get("receiver_stack"), Array);
        },
        receiver: function () {
            var t = this.receiverStack();
            if (t.length === 0) {
                return null;
            }
            return t[((t.length - 1) | 0)];
        },
        receiverName: function (options) {
            if (options === void 0) { options = null; }
            if (options == null) {
                options = new $_.$AnonymousType$5();
            }
    
            var opts = new $_.$AnonymousType$6(this.eobject(), true);
    
            for (var o in options) opts[o] = options[o];
            var r = this.receiver();
            if (Bridge.referenceEquals(r, opts.object)) {
                if (opts.dropSelf) {
                    return "";
                }
                else  {
                    return "self.";
                }
            }
            else  {
                return opts.object.identifer + ".";
            }
        },
        eobjectMethodCall_: function (method, args, options) {
            if (options === void 0) { options = null; }
            var res = this.eobjectMethodCallInput_(method, args, options);
            if (res[0] != null) {
                return res[0] + "\n";
            }
            else  {
                return "";
            }
        },
        eobjectMethodCallInput_: function (method, args, options) {
            if (options === void 0) { options = null; }
            var code;
            if (this.eobject() != null) {
                if (args != null && args.length > 0) {
                    code = this.receiverName(options) + method + "(" + args + ")";
                }
                else  {
                    code = this.receiverName(options) + method;
                }
            }
            else  {
                code = null;
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        eobjectSetVariable_: function (name, val, operator) {
            if (operator === void 0) { operator = "="; }
            if (this.eobject() != null) {
                return this.receiverName(new $_.$AnonymousType$7(false)) + name + operator + " " + val + "\n";
            }
            else  {
                return "";
            }
        },
        eobjectEvent_: function (block, bodyName, name, arg) {
            if (arg === void 0) { arg = null; }
            var c;
            var body;
    
            if (((c = this.eobject())) != null) {
                this.receiverStack().push(c);
                try {
                    body = this.statementToCode(block, bodyName);
                    if (System.String.isNullOrEmpty(body)) {
                        body = "\n";
                    }
                }
                finally {
                    this.receiverStack().pop();
                }
    
                if (arg != null) {
                    arg = ", " + arg;
                }
                else  {
                    arg = "";
                }
    
                return "\n" + this.receiverName(new $_.$AnonymousType$5()) + "on(:" + name + arg + ") do\n" + body + "end\n";
            }
            else  {
                return "";
            }
        },
        eproperty_new: function (block) {
            var $t, $t1;
            var text_identifer = block.getFieldValue("IDENTIFER");
            var value_description = block.getFieldValue("DESCRIPTION");
            var value_property_code = block.getFieldValue("PROPERTY_CODE");
            var value_property_size = block.getFieldValue("PROPERTY_SIZE");
            var statements_set = Blockly.Ruby.statementToCode(block, "SET");
            var value_set_ret = Blockly.Ruby.valueToCode(block, "SET_RET", Blockly.Ruby.ORDER_ATOMIC);
            var statements_get = Blockly.Ruby.statementToCode(block, "GET");
            var value_get_ret = Blockly.Ruby.valueToCode(block, "GET_RET", Blockly.Ruby.ORDER_ATOMIC);
            var code = new System.Text.StringBuilder();
            var indent = "\t";
    
            code.appendLine(indent + System.String.format("# {0}設定関数", value_description));
            code.appendLine(indent + "def " + text_identifer + "_set(prop, src)");
            indent += "\t";
            $t = Bridge.getEnumerator(statements_set.split(String.fromCharCode(10)));
            while ($t.moveNext()) {
                var line = $t.getCurrent();
                code.appendLine(indent + line);
            }
            code.appendLine(indent + "return " + value_set_ret);
            indent = indent.substr(0, ((indent.length - 1) | 0));
            code.appendLine(indent + "end");
            code.appendLine();
    
            code.appendLine(indent + System.String.format("# {0}取得関数", value_description));
            code.appendLine(indent + "def " + text_identifer + "_get(prop, size)");
            indent += "\t";
            $t1 = Bridge.getEnumerator(statements_get.split(String.fromCharCode(10)));
            while ($t1.moveNext()) {
                var line1 = $t1.getCurrent();
                code.appendLine(indent + line1);
            }
            code.appendLine(indent + "return " + value_get_ret);
            indent = indent.substr(0, ((indent.length - 1) | 0));
            code.appendLine(indent + "end");
            code.appendLine();
    
            return code.toString();
        },
        defineMainLoop: function (workspace, localNode) {
            var code = Blockly.Ruby.workspaceToCode(workspace.workspace);
            var sb = new System.Text.StringBuilder();
    
            sb.append(code);
            sb.appendLine();
    
            sb.appendLine("ctrl = Controller.new()");
            sb.appendLine();
            sb.appendLine("# メインループ");
            sb.appendLine("while (true) do");
            sb.appendLine("\t# メッセージ待ち");
            sb.appendLine("\tret = TargetBoard::wait_msg(ctrl.timer)");
            sb.appendLine("\tif !ret then");
            sb.appendLine("\t\tbreak;");
            sb.appendLine("\tend");
            sb.appendLine();
            sb.appendLine("\t# 経過時間の計算");
            sb.appendLine("\tctrl.progress ret[0]");
            sb.appendLine();
            sb.appendLine("\t# 戻り値が２つなら");
            sb.appendLine("\tif ret.length == 2 then");
            sb.appendLine("\t\t# 内部イベント");
            sb.appendLine("\t\tcase (ret[1])");
            sb.appendLine("\t\twhen 1 then");
            sb.appendLine("\t\t\tTargetBoard::restart");
            sb.appendLine("\t\twhen 2 then");
            sb.appendLine("\t\t\tctrl.ntf_inl");
            sb.appendLine("\t\tend");
            sb.appendLine("\t# 戻り値が３つなら");
            sb.appendLine("\telsif ret.length == 3 then");
            sb.appendLine("\t\t# 通信レイヤーからのメッセージ（通信端点と電文）");
            sb.appendLine("\t\tctrl.recv_msg(ret[1], ret[2])");
            sb.appendLine("\tend");
            sb.appendLine();
            sb.appendLine("\t# タイムアウトの処理があれば行う");
            sb.appendLine("\tctrl.call_timeout");
            sb.appendLine("end");
    
            return sb.toString();
        },
        functionNamePlaceholder: function () {
            return this.FUNCTION_NAME_PLACEHOLDER_;
        },
        reservedWords: function () {
            return this.RESERVED_WORDS_;
        },
        init: function (workspace) {
            // Create a dictionary of definitions to be printed before the code.
            Blockly.Ruby.definitions_ = new System.Collections.Generic.Dictionary$2(String,Object)();
            // Create a dictionary mapping desired function names in definitions_
            // to actual function names (to avoid collisions with user functions).
            Blockly.Ruby.functionNames_ = new System.Collections.Generic.Dictionary$2(String,String)();
    
            if (Blockly.Variables != null) {
                if (Blockly.Ruby.variableDB_ == null) {
    
                    Blockly.Ruby.variableDB_ = new Blockly.Names(Blockly.Ruby.reservedWords());
    
                    Blockly.Ruby.variableDB_.localVars = null;
                    this.variableDB_.localVarsDB = null;
    
                    Blockly.Ruby.variableDB_.getRubyName = $_.WebMrbc.Ruby.f1;
    
                    Blockly.Ruby.variableDB_.pushScope = $_.WebMrbc.Ruby.f2;
    
                    Blockly.Ruby.variableDB_.addLocalVariable = Bridge.fn.bind(this, $_.WebMrbc.Ruby.f3);
    
                    Blockly.Ruby.variableDB_.popScope = Bridge.fn.bind(this, $_.WebMrbc.Ruby.f4);
                }
                else  {
                    Blockly.Ruby.variableDB_.reset();
                }
    
                var defvars = System.Array.init(0, null);
                var variables = Blockly.Variables.allVariables(workspace);
                for (var x = 0; x < variables.length; x = (x + 1) | 0) {
                    defvars.push("@" + Blockly.Ruby.variableDB_.getName(variables[x], Blockly.Variables.NAME_TYPE) + " = nil");
                }
                var code = defvars.join("\n");
                this.definitions_.set("variables", code);
            }
    
            this.init_smalruby(workspace);
        },
        validName: function (name) {
            return this.variableDB_.safeName_(name);
        },
        generateDefinitions: function (helpers) {
            var $t;
            var requires = System.Array.init(0, null);
            var prepares = System.Array.init(0, null);
            var definitions = System.Array.init(0, null);
            $t = Bridge.getEnumerator(this.definitions_.getKeys());
            while ($t.moveNext()) {
                var name = $t.getCurrent();
                var def = this.definitions_.get(name);
                if (!Bridge.referenceEquals(Bridge.getType(def), String)) {
                    continue;
                }
    
                if (name.match(new RegExp("^require__")) != null) {
                    requires.push(def);
                }
                else  {
                    if (name.match(new RegExp("^prepare__")) != null) {
                        prepares.push(def);
                    }
                    else  {
                        definitions.push(def);
                    }
                }
            }
    
            var allDefs = "";
    
            if (requires.length > 0) {
                allDefs += requires.join("\n") + "\n\n";
            }
    
            if (helpers.length > 0) {
                allDefs += helpers.join("\n") + "\n\n";
            }
    
            if (prepares.length > 0) {
                allDefs += prepares.join("\n") + "\n\n";
            }
    
            if (definitions.length > 0) {
                allDefs += definitions.join("\n").replace(new RegExp("\n\n+", "g"), "\n\n").replace(new RegExp("\n*$"), "\n");
            }
            return allDefs;
        },
        finish: function (code) {
            // need some helper functions to conform to Blockly's behavior
            var helpers = System.Array.init(0, null);
            var allDefs = this.generateDefinitions(helpers);
            return allDefs.replace(new RegExp("\n\n+", "g"), "\n\n").replace(new RegExp("\n*$"), "\n\n\n") + code;
        },
        scrubNakedValue: function (line) {
            return line + "\n";
        },
        quote_: function (str) {
            // copy and modified goog.string.quote:
            // http://docs.closure-library.googlecode.com/git/namespace_goog_string.html
            var s = str.toString();
            var sb = ["\""];
            for (var i = 0; i < s.length; i = (i + 1) | 0) {
                var ch = s.charAt(i);
                var rch = { };
                if (!Blockly.Ruby.escapeChars_.tryGetValue(ch, rch)) {
                    rch.v = ch;
                }
                sb[((i + 1) | 0)] = rch.v;
            }
            sb.push("\"");
            return sb.join("");
        },
        scrub_: function (block, code) {
            if (code == null) {
                // Block has handled code generation itself.
                return "";
            }
            var commentCode = "";
            // Only collect comments for blocks that aren't inline.
            if (block.outputConnection == null || block.outputConnection.targetConnection == null) {
                // Collect comment for this block.
                var comment = block.getCommentText();
                if (!System.String.isNullOrEmpty(comment)) {
                    commentCode += this.prefixLines(comment, "# ") + "\n";
                }
                // Collect comments for all value arguments.
                // Don't collect comments for nested statements.
                for (var x = 0; x < block.inputList.length; x = (x + 1) | 0) {
                    if (block.inputList[x].type === Blockly.INPUT_VALUE) {
                        var childBlock = block.inputList[x].connection.targetBlock();
                        if (childBlock != null) {
                            comment = this.allNestedComments(childBlock);
                            if (!System.String.isNullOrEmpty(comment)) {
                                commentCode += this.prefixLines(comment, "# ");
                            }
                        }
                    }
                }
            }
            var nextBlock = null;
            if (block.nextConnection != null) {
                nextBlock = block.nextConnection.targetBlock();
            }
            var nextCode = this.blockToCode(nextBlock);
    
            return commentCode + code + nextCode;
        },
        colour_picker: function (block) {
            // Colour picker.
            var code = "'" + block.getFieldValue("COLOUR") + "'";
            return [code, this.ORDER_ATOMIC];
        },
        colour_random: function (block) {
            // Generate a random colour.
            var code = "'#%06x' % rand(2**24 - 1)";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        colour_rgb: function (block) {
            // Compose a colour from RGB components expressed as percentages.
            var functionName = Blockly.Ruby.provideFunction_("colour_rgb", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(r, g, b)", "  r = (2.55 * [100, [0, r].max].min).round", "  g = (2.55 * [100, [0, g].max].min).round", "  b = (2.55 * [100, [0, b].max].min).round", "  '#%02x%02x%02x' % [r, g, b]", "end"]);
            var r = Blockly.Ruby.valueToCode(block, "RED", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(r)) {
                r = "0";
            }
            var g = Blockly.Ruby.valueToCode(block, "GREEN", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(g)) {
                g = "0";
            }
            var b = Blockly.Ruby.valueToCode(block, "BLUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(b)) {
                b = "0";
            }
            var code = functionName + "(" + r + ", " + g + ", " + b + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        colour_blend: function (block) {
            // Blend two colours together.
            var functionName = Blockly.Ruby.provideFunction_("colour_blend", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(colour1, colour2, ratio) ", "  _, r1, g1, b1 = colour1.unpack('A1A2A2A2').map {|x| x.to_i(16)}", "  _, r2, g2, b2 = colour2.unpack('A1A2A2A2').map {|x| x.to_i(16)}", "  ratio = [1, [0, ratio].max].min", "  r = (r1 * (1 - ratio) + r2 * ratio).round", "  g = (g1 * (1 - ratio) + g2 * ratio).round", "  b = (b1 * (1 - ratio) + b2 * ratio).round", "  '#%02x%02x%02x' % [r, g, b]", "end"]);
            var colour1 = Blockly.Ruby.valueToCode(block, "COLOUR1", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(colour1)) {
                colour1 = "'#000000'";
            }
            var colour2 = Blockly.Ruby.valueToCode(block, "COLOUR2", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(colour2)) {
                colour2 = "'#000000'";
            }
            var ratio = Blockly.Ruby.valueToCode(block, "RATIO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(ratio)) {
                ratio = "0";
            }
            var code = functionName + "(" + colour1 + ", " + colour2 + ", " + ratio + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        lists_create_empty: function (block) {
            // Create an empty list.
            return ["[]", this.ORDER_ATOMIC];
        },
        lists_create_with: function (block) {
            // Create a list with any number of elements of any type.
            var code = System.Array.init(block.itemCount_, null);
            for (var n = 0; n < block.itemCount_; n = (n + 1) | 0) {
                code[n] = Blockly.Ruby.valueToCode(block, "ADD" + n, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(code[n])) {
                    code[n] = "None";
                }
            }
            var _code = "[" + code.join(", ") + "]";
            return [_code, this.ORDER_ATOMIC];
        },
        lists_repeat: function (block) {
            // Create a list with one element repeated.
            var argument0 = Blockly.Ruby.valueToCode(block, "ITEM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "None";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = "[" + argument0 + "] * " + argument1;
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        lists_length: function (block) {
            // List length.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            return [argument0 + ".length", this.ORDER_FUNCTION_CALL];
        },
        lists_isEmpty: function (block) {
            // Is the list empty?
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            var code = argument0 + ".empty?";
            return [code, this.ORDER_LOGICAL_NOT];
        },
        lists_indexOf: function (block) {
            // Find an item in the list.
            var search = Blockly.Ruby.valueToCode(block, "FIND", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(search)) {
                search = "[]";
            }
            var list = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "''";
            }
            var finder = Bridge.referenceEquals(block.getFieldValue("END"), "FIRST") ? ".find_first" : ".find_last";
            var code = list + finder + "(" + search + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        lists_getIndex: function (block) {
            // Get element at index.
            var mode = block.getFieldValue("MODE");
            if (System.String.isNullOrEmpty(mode)) {
                mode = "GET";
            }
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_UNARY_SIGN);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var list = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
    
            if (Bridge.referenceEquals(where, "FIRST")) {
                if (Bridge.referenceEquals(mode, "GET")) {
                    var code = list + ".first";
                    return [code, this.ORDER_FUNCTION_CALL];
                }
                else  {
                    var code1 = list + ".shift";
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code1, this.ORDER_FUNCTION_CALL];
                    }
                    else  {
                        if (Bridge.referenceEquals(mode, "REMOVE")) {
                            return code1 + "\n";
                        }
                    }
                }
            }
            else  {
                if (Bridge.referenceEquals(where, "LAST")) {
                    if (Bridge.referenceEquals(mode, "GET")) {
                        var code2 = list + ".last";
                        return [code2, this.ORDER_MEMBER];
                    }
                    else  {
                        var code3 = list + ".pop";
                        if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                            return [code3, this.ORDER_FUNCTION_CALL];
                        }
                        else  {
                            if (Bridge.referenceEquals(mode, "REMOVE")) {
                                return code3 + "\n";
                            }
                        }
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where, "FROM_START")) {
                        // Blockly uses one-based indicies.
                        if (Blockly.isNumber(at)) {
                            // If the index is a naked number, decrement it right now.
                            at = (((parseInt(at, 10) - 1) | 0)).toString();
                        }
                        else  {
                            // If the index is dynamic, decrement it in code.
                            at = "(" + at + " - 1).to_i";
                        }
                        if (Bridge.referenceEquals(mode, "GET")) {
                            var code4 = list + "[" + at + "]";
                            return [code4, this.ORDER_MEMBER];
                        }
                        else  {
                            var code5 = list + ".delete_at(" + at + ")";
                            if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                                return [code5, this.ORDER_FUNCTION_CALL];
                            }
                            else  {
                                if (Bridge.referenceEquals(mode, "REMOVE")) {
                                    return code5 + "\n";
                                }
                            }
                        }
                    }
                    else  {
                        if (Bridge.referenceEquals(where, "FROM_END")) {
                            if (Bridge.referenceEquals(mode, "GET")) {
                                var code6 = list + "[-" + at + "]";
                                return [code6, this.ORDER_MEMBER];
                            }
                            else  {
                                var code7 = list + ".delete_at(-" + at + ")";
                                if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                                    return [code7, this.ORDER_FUNCTION_CALL];
                                }
                                else  {
                                    if (Bridge.referenceEquals(mode, "REMOVE")) {
                                        return code7 + "\n";
                                    }
                                }
                            }
                        }
                        else  {
                            if (Bridge.referenceEquals(where, "RANDOM")) {
                                if (Bridge.referenceEquals(mode, "GET")) {
                                    var functionName = Blockly.Ruby.provideFunction_("lists_random_item", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(myList)", "  myList[rand(myList.size)]", "end"]);
                                    var code8 = functionName + "(" + list + ")";
                                    return [code8, this.ORDER_FUNCTION_CALL];
                                }
                                else  {
                                    var functionName1 = Blockly.Ruby.provideFunction_("lists_remove_random_item", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(myList)", "  myList.delete_at(rand(myList.size))", "end"]);
                                    var code9 = functionName1 + "(" + list + ")";
                                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                                        return [code9, this.ORDER_FUNCTION_CALL];
                                    }
                                    else  {
                                        if (Bridge.referenceEquals(mode, "REMOVE")) {
                                            return code9 + "\n";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            throw new System.Exception("Unhandled combination (lists_getIndex).");
        },
        lists_setIndex: function (block) {
            // Set element at index.
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var mode = block.getFieldValue("MODE");
            if (System.String.isNullOrEmpty(mode)) {
                mode = "GET";
            }
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var value = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(value)) {
                value = "None";
            }
    
            if (Bridge.referenceEquals(where, "FIRST")) {
                if (Bridge.referenceEquals(mode, "SET")) {
                    return list + "[0] = " + value + "\n";
                }
                else  {
                    if (Bridge.referenceEquals(mode, "INSERT")) {
                        return list + ".unshift(" + value + ")\n";
                    }
                }
            }
            else  {
                if (Bridge.referenceEquals(where, "LAST")) {
                    if (Bridge.referenceEquals(mode, "SET")) {
                        return list + "[-1] = " + value + "\n";
                    }
                    else  {
                        if (Bridge.referenceEquals(mode, "INSERT")) {
                            return list + ".push(" + value + ")\n";
                        }
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where, "FROM_START")) {
                        // Blockly uses one-based indicies.
                        if (Blockly.isNumber(at)) {
                            // If the index is a naked number, decrement it right now.
                            at = (((parseInt(at, 10) - 1) | 0)).toString();
                        }
                        else  {
                            // If the index is dynamic, decrement it in code.
                            at = "(" + at + " - 1).to_i";
                        }
                        if (Bridge.referenceEquals(mode, "SET")) {
                            return list + "[" + at + "] = " + value + "\n";
                        }
                        else  {
                            if (Bridge.referenceEquals(mode, "INSERT")) {
                                return list + ".insert(" + at + ", " + value + ")\n";
                            }
                        }
                    }
                    else  {
                        if (Bridge.referenceEquals(where, "FROM_END")) {
                            if (Bridge.referenceEquals(mode, "SET")) {
    
                                // Blockly uses one-based indicies.
                                if (Blockly.isNumber(at)) {
                                    // If the index is a naked number, decrement it right now.
                                    at = parseInt(at, 10).toString();
                                }
                                else  {
                                    // If the index is dynamic, decrement it in code.
                                    at = "(" + at + ").to_i";
                                }
    
                                return list + "[-" + at + "] = " + value + "\n";
                            }
                            else  {
                                if (Bridge.referenceEquals(mode, "INSERT")) {
    
                                    // Blockly uses one-based indicies.
                                    if (Blockly.isNumber(at)) {
                                        // If the index is a naked number, decrement it right now.
                                        at = (((parseInt(at, 10) + 1) | 0)).toString();
                                    }
                                    else  {
                                        // If the index is dynamic, decrement it in code.
                                        at = "(" + at + " + 1).to_i";
                                    }
    
                                    return list + ".insert(-" + at + ", " + value + ")\n";
                                }
                            }
                        }
                        else  {
                            if (Bridge.referenceEquals(where, "RANDOM")) {
                                if (Bridge.referenceEquals(mode, "SET")) {
                                    var functionName = Blockly.Ruby.provideFunction_("lists_set_random_item", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(myList, value)", "  myList[rand(myList.size)] = " + value, "end"]);
                                    var code = functionName + "(" + list + ", " + value + ")\n";
                                    return code;
                                }
                                else  {
                                    if (Bridge.referenceEquals(mode, "INSERT")) {
                                        var functionName1 = Blockly.Ruby.provideFunction_("lists_insert_random_item", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(myList, value)", "  myList.insert(rand(myList.size), " + value + ")", "end"]);
                                        var code1 = functionName1 + "(" + list + ", " + value + ")\n";
                                        return code1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            throw new System.Exception("Unhandled combination (lists_setIndex).");
        },
        lists_getSublist: function (block) {
            var functionName = Blockly.Ruby.provideFunction_("lists_sublist", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(myList, range)", "  myList[range] || []", "end"]);
            // Get sublist.
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var where1 = block.getFieldValue("WHERE1");
            var where2 = block.getFieldValue("WHERE2");
            var at1 = Blockly.Ruby.valueToCode(block, "AT1", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(at1)) {
                at1 = "1";
            }
            var at2 = Blockly.Ruby.valueToCode(block, "AT2", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(at2)) {
                at2 = "1";
            }
            if (Bridge.referenceEquals(where1, "FIRST") || (Bridge.referenceEquals(where1, "FROM_START") && Bridge.referenceEquals(at1, "1"))) {
                at1 = "0";
            }
            else  {
                if (Bridge.referenceEquals(where1, "FROM_START")) {
                    // Blockly uses one-based indicies.
                    if (Blockly.isNumber(at1)) {
                        at1 = (((parseInt(at1, 10) - 1) | 0)).toString();
                    }
                    else  {
                        at1 = at1 + ".to_i - 1)";
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where1, "FROM_END")) {
                        if (Blockly.isNumber(at1)) {
                            at1 = (((-parseInt(at1, 10)) | 0)).toString();
                        }
                        else  {
                            at1 = "-" + at1 + ".to_i";
                        }
                    }
                }
            }
            if (Bridge.referenceEquals(where2, "LAST") || (Bridge.referenceEquals(where2, "FROM_END") && Bridge.referenceEquals(at2, "1"))) {
                at2 = "-1";
            }
            else  {
                if (Bridge.referenceEquals(where2, "FROM_START")) {
                    if (Blockly.isNumber(at2)) {
                        at2 = (((parseInt(at2, 10) - 1) | 0)).toString();
                    }
                    else  {
                        at2 = at2 + ".to_i - 1";
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where2, "FROM_END")) {
                        if (Blockly.isNumber(at2)) {
                            at2 = (((-parseInt(at2, 10)) | 0)).toString();
                        }
                        else  {
                            at2 = "-" + at2 + ".to_i";
                        }
                    }
                }
            }
            var code = functionName + "(" + list + ", " + at1 + ".." + at2 + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        controls_if: function (block) {
            // If/elseif/else condition.
            var n = 0;
            var argument = Blockly.Ruby.valueToCode(block, "IF" + n, Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "false";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO" + n);
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            var code = "if " + argument + "\n" + branch;
            for (n = 1; n <= block.elseifCount_; n = (n + 1) | 0) {
                argument = Blockly.Ruby.valueToCode(block, "IF" + n, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument)) {
                    argument = "false";
                }
                branch = Blockly.Ruby.statementToCode(block, "DO" + n);
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "elsif " + argument + "\n" + branch;
            }
            if (block.elseCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "ELSE");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "else\n" + branch;
            }
            code += "end\n";
            return code;
        },
        logic_compare: function (block) {
            // Comparison operator.
            var OPERATORS = new System.Collections.Generic.Dictionary$2(String,String)();
            OPERATORS.add("EQ", "==");
            OPERATORS.add("NEQ", "!=");
            OPERATORS.add("LT", "<");
            OPERATORS.add("LTE", "<=");
            OPERATORS.add("GT", ">");
            OPERATORS.add("GTE", ">=");
            var operator = OPERATORS.get(block.getFieldValue("OP"));
            var order = Blockly.Ruby.ORDER_RELATIONAL;
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = argument0 + String.fromCharCode(32) + operator + String.fromCharCode(32) + argument1;
            return [code, order];
        },
        logic_operation: function (block) {
            // Operations 'and', 'or'.
            var operator = (Bridge.referenceEquals(block.getFieldValue("OP"), "AND")) ? "&&" : "||";
            var order = (Bridge.referenceEquals(operator, "&&")) ? Blockly.Ruby.ORDER_LOGICAL_AND : Blockly.Ruby.ORDER_LOGICAL_OR;
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument0) && System.String.isNullOrEmpty(argument1)) {
                // If there are no arguments, then the return value is false.
                argument0 = "false";
                argument1 = "false";
            }
            else  {
                // Single missing arguments have no effect on the return value.
                var defaultArgument = (Bridge.referenceEquals(operator, "&&")) ? "true" : "false";
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = defaultArgument;
                }
                if (System.String.isNullOrEmpty(argument1)) {
                    argument1 = defaultArgument;
                }
            }
            var code = argument0 + String.fromCharCode(32) + operator + String.fromCharCode(32) + argument1;
            return [code, order];
        },
        logic_negate: function (block) {
            // Negation.
            var argument0 = Blockly.Ruby.valueToCode(block, "BOOL", Blockly.Ruby.ORDER_LOGICAL_NOT);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "true";
            }
            var code = "! " + argument0;
            return [code, this.ORDER_LOGICAL_NOT];
        },
        logic_boolean: function (block) {
            // Boolean values true and false.
            var code = (Bridge.referenceEquals(block.getFieldValue("BOOL"), "TRUE")) ? "true" : "false";
            return [code, this.ORDER_ATOMIC];
        },
        logic_null: function (block) {
            // Null data type.
            return ["nil", this.ORDER_ATOMIC];
        },
        logic_ternary: function (block) {
            // Ternary operator.
            var value_if = Blockly.Ruby.valueToCode(block, "IF", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_if)) {
                value_if = "false";
            }
            var value_then = Blockly.Ruby.valueToCode(block, "THEN", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_then)) {
                value_then = "nil";
            }
            var value_else = Blockly.Ruby.valueToCode(block, "ELSE", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_else)) {
                value_else = "nil";
            }
            var code = value_if + " ? " + value_then + " : " + value_else;
            return [code, this.ORDER_CONDITIONAL];
        },
        controls_repeat: function (block) {
            // Repeat n times (internal number).
            var repeats = parseInt(block.getFieldValue("TIMES"), 10);
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), "'" + block.id + "'") + branch;
            }
            var code = repeats + ".times do\n" + branch + "end\n";
            return code;
        },
        controls_repeat_ext: function (block) {
            // Repeat n times (external number).
            var repeats = Blockly.Ruby.valueToCode(block, "TIMES", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(repeats)) {
                repeats = "0";
            }
            if (Blockly.isNumber(repeats)) {
                repeats = parseInt(repeats, 10).toString();
            }
            else  {
                repeats = repeats + ".to_i";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), "'" + block.id + "'") + branch;
            }
            var code = repeats + ".times do\n" + branch + "end\n";
            return code;
        },
        controls_whileUntil: function (block) {
            // Do while/until loop.
            var until = Bridge.referenceEquals(block.getFieldValue("MODE"), "UNTIL");
            var argument0 = Blockly.Ruby.valueToCode(block, "BOOL", until ? Blockly.Ruby.ORDER_LOGICAL_NOT : Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "false";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), "\"" + block.id + "\"") + branch;
            }
            var mode = until ? "until " : "while ";
            return mode + argument0 + " do\n" + branch + "end\n";
        },
        controls_for: function (block) {
            // For loop.
            Blockly.Ruby.variableDB_.pushScope();
    
            var loopVar = Blockly.Ruby.variableDB_.addLocalVariable(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var fromVal = Blockly.Ruby.valueToCode(block, "FROM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(fromVal)) {
                fromVal = "0";
            }
            var toVal = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(toVal)) {
                toVal = "0";
            }
            var increment = Blockly.Ruby.valueToCode(block, "BY", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(increment)) {
                increment = null;
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), String.fromCharCode(34) + block.id + String.fromCharCode(34)) + branch;
            }
    
            // Helper function
            var forLoop = $_.WebMrbc.Ruby.f5;
    
            var generateForLoop = function (_fromVal, _toVal, _increment) {
                return forLoop() + " from: (" + _fromVal + "), " + "to: (" + _toVal + "), " + "by: (" + _increment + ")";
            };
    
            var code = "";
            var _forLoop;
    
            if (Blockly.isNumber(fromVal) && Blockly.isNumber(toVal) && (increment == null || Blockly.isNumber(increment))) {
    
                if (increment == null) {
                    increment = "1";
                }
    
                // All parameters are simple numbers.
                fromVal = System.Double.format(parseFloat(fromVal), 'G');
                toVal = System.Double.format(parseFloat(toVal), 'G');
                increment = System.Double.format(parseFloat(increment), 'G');
    
                _forLoop = generateForLoop(fromVal, toVal, increment);
            }
            else  {
                if (increment == null) {
                    increment = "1";
                }
                else  {
                    increment = "(" + increment + ").to_f";
                }
    
                _forLoop = generateForLoop(fromVal + ".to_f", toVal + ".to_f", increment);
            }
    
            Blockly.Ruby.variableDB_.popScope();
    
            code += _forLoop + " do |" + loopVar + "|\n" + branch + "end\n";
    
            return code;
        },
        controls_forEach: function (block) {
            // For each loop.
            Blockly.Ruby.variableDB_.pushScope();
    
            var loopVar = Blockly.Ruby.variableDB_.addLocalVariable(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var argument0 = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_RELATIONAL);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), "\"" + block.id + "\"") + branch;
            }
    
            Blockly.Ruby.variableDB_.popScope();
    
            var code = argument0 + ".each do |" + loopVar + "|\n" + branch + "end\n";
            return code;
        },
        controls_flow_statements: function (block) {
            // Flow statements: continue, break.
            switch (block.getFieldValue("FLOW")) {
                case "BREAK": 
                    return "break\n";
                case "CONTINUE": 
                    return "next\n";
            }
            throw new System.Exception("Unknown flow statement.");
        },
        math_number: function (block) {
            // Numeric value.
            var code = parseFloat(block.getFieldValue("NUM"));
            var order = code < 0 ? Blockly.Ruby.ORDER_UNARY_SIGN : Blockly.Ruby.ORDER_ATOMIC;
            return [code, order];
        },
        math_arithmetic: function (block) {
            // Basic arithmetic operators, and power.
            var OPERATORS = new System.Collections.Generic.Dictionary$2(String,Array)();
            OPERATORS.add("ADD", [" + ", Blockly.Ruby.ORDER_ADDITIVE]);
            OPERATORS.add("MINUS", [" - ", Blockly.Ruby.ORDER_ADDITIVE]);
            OPERATORS.add("MULTIPLY", [" * ", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            OPERATORS.add("DIVIDE", [" / ", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            OPERATORS.add("POWER", [" ** ", Blockly.Ruby.ORDER_EXPONENTIATION]);
            var tuple = OPERATORS.get(block.getFieldValue("OP"));
            var operator = tuple[0];
            var order = Bridge.cast(tuple[1], System.Int32);
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = argument0 + operator + argument1;
            return [code, order];
        },
        math_single: function (block) {
            // Math operators with single operand.
            var operator = block.getFieldValue("OP");
            var code = null;
            var arg;
            if (Bridge.referenceEquals(operator, "NEG")) {
                // Negation is a special case given its different operator precedence.
                code = Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_UNARY_SIGN);
                if (System.String.isNullOrEmpty(code)) {
                    code = "0";
                }
                return ["-" + code, this.ORDER_UNARY_SIGN];
            }
            if (Bridge.referenceEquals(operator, "SIN") || Bridge.referenceEquals(operator, "COS") || Bridge.referenceEquals(operator, "TAN")) {
                arg = "(" + Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_MULTIPLICATIVE) + ")";
                if (System.String.isNullOrEmpty(arg)) {
                    arg = "0";
                }
            }
            else  {
                arg = "(" + Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_NONE) + ")";
                if (System.String.isNullOrEmpty(arg)) {
                    arg = "0";
                }
            }
            // First, handle cases which generate values that don't need parentheses
            // wrapping the code.
            switch (operator) {
                case "ABS": 
                    code = arg + ".abs";
                    break;
                case "ROOT": 
                    code = "Math.sqrt(" + arg + ")";
                    break;
                case "LN": 
                    code = "Math.log(" + arg + ")";
                    break;
                case "LOG10": 
                    code = "Math.log10(" + arg + ")";
                    break;
                case "EXP": 
                    code = "Math.exp(" + arg + ")";
                    break;
                case "POW10": 
                    code = "(10 ** " + arg + ")";
                    break;
                case "ROUND": 
                    code = arg + ".round";
                    break;
                case "ROUNDUP": 
                    code = arg + ".ceil";
                    break;
                case "ROUNDDOWN": 
                    code = arg + ".floor";
                    break;
                case "SIN": 
                    code = "Math.sin(" + arg + " / 180.0 * Math::PI)";
                    break;
                case "COS": 
                    code = "Math.cos(" + arg + " / 180.0 * Math::PI)";
                    break;
                case "TAN": 
                    code = "Math.tan(" + arg + " / 180.0 * Math::PI)";
                    break;
            }
            if (!System.String.isNullOrEmpty(code)) {
                return [code, this.ORDER_FUNCTION_CALL];
            }
            // Second, handle cases which generate values that may need parentheses
            // wrapping the code.
            switch (operator) {
                case "ASIN": 
                    code = "Math.asin(" + arg + ") / Math::PI * 180";
                    break;
                case "ACOS": 
                    code = "Math.acos(" + arg + ") / Math::PI * 180";
                    break;
                case "ATAN": 
                    code = "Math.atan(" + arg + ") / Math::PI * 180";
                    break;
                default: 
                    throw new System.Exception("Unknown math operator: " + operator);
            }
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        math_constant: function (block) {
            // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
            var CONSTANTS = new System.Collections.Generic.Dictionary$2(String,Array)();
            CONSTANTS.add("PI", ["Math::PI", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("E", ["Math::E", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("GOLDEN_RATIO", ["(1 + Math.sqrt(5)) / 2", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            CONSTANTS.add("SQRT2", ["Math.sqrt(2)", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("SQRT1_2", ["Math.sqrt(1.0 / 2)", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("INFINITY", ["1/0.0", Blockly.Ruby.ORDER_ATOMIC]);
            var constant = block.getFieldValue("CONSTANT");
            return CONSTANTS.get(constant);
        },
        math_number_property: function (block) {
            // Check if a number is even, odd, prime, whole, positive, or negative
            // or if it is divisible by certain number. Returns true or false.
            var number_to_check = Blockly.Ruby.valueToCode(block, "NUMBER_TO_CHECK", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(number_to_check)) {
                number_to_check = "0";
            }
            var dropdown_property = block.getFieldValue("PROPERTY");
            var code = null;
            if (Bridge.referenceEquals(dropdown_property, "PRIME")) {
                var functionName = Blockly.Ruby.provideFunction_("is_prime", ["def " + Blockly.Ruby.functionNamePlaceholder() + " n", "  return false if n < 0", "  (2..Math.sqrt(n)).each { |i| return false if n % i == 0}", "  true", "end"]);
                code = functionName + "(" + number_to_check + ")";
                return [code, this.ORDER_FUNCTION_CALL];
            }
            switch (dropdown_property) {
                case "EVEN": 
                    code = number_to_check + ".even?";
                    break;
                case "ODD": 
                    code = number_to_check + ".odd?";
                    break;
                case "WHOLE": 
                    code = number_to_check + " % 1 == 0";
                    break;
                case "POSITIVE": 
                    code = number_to_check + " > 0";
                    break;
                case "NEGATIVE": 
                    code = number_to_check + " < 0";
                    break;
                case "DIVISIBLE_BY": 
                    var divisor = Blockly.Ruby.valueToCode(block, "DIVISOR", Blockly.Ruby.ORDER_MULTIPLICATIVE);
                    // If "divisor" is some code that evals to 0, Ruby will raise an error.
                    if (System.String.isNullOrEmpty(divisor) || Bridge.referenceEquals(divisor, "0")) {
                        return ["false", this.ORDER_ATOMIC];
                    }
                    code = number_to_check + " % " + divisor + " == 0";
                    break;
            }
            return [code, this.ORDER_RELATIONAL];
        },
        math_change: function (block) {
            // Add to a variable in place.
            var argument0 = Blockly.Ruby.valueToCode(block, "DELTA", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return varName + " += " + argument0 + "\n";
        },
        math_round: function (block) {
            return this.math_single(block);
        },
        math_trig: function (block) {
            return this.math_single(block);
        },
        math_on_list: function (block) {
            // Math functions for lists.
            var func = block.getFieldValue("OP");
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var code;
            switch (func) {
                case "SUM": 
                    code = list + ".sum";
                    break;
                case "MIN": 
                    code = list + ".numbers.min";
                    break;
                case "MAX": 
                    code = list + ".numbers.max";
                    break;
                case "AVERAGE": 
                    code = list + ".average";
                    break;
                case "MEDIAN": 
                    code = list + ".median";
                    break;
                case "MODE": 
                    // As a list of numbers can contain more than one mode,
                    // the returned result is provided as an array.
                    // Mode of [3, "x", "x", 1, 1, 2, "3"] -> ["x", 1].
                    var functionName = Blockly.Ruby.provideFunction_("math_modes", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(some_list)", "  groups = some_list.group_by{|v| v}", "  ", "  groups = groups.sort {|a,b| b[1].size <=> a[1].size}", "  ", "  max_size = groups[0][1].size", "  ", "  modes = []", "  ", "  groups.each do |group|", "    ", "    break if group[1].size != max_size", "    ", "    modes << group[0]", "    ", "  end", "  ", "  modes", "", "end"]);
                    code = functionName + "(" + list + ")";
                    break;
                case "STD_DEV": 
                    code = list + ".standard_deviation";
                    break;
                case "RANDOM": 
                    code = list + "[rand(" + list + ".size)]";
                    break;
                default: 
                    throw new System.Exception("Unknown operator: " + func);
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_modulo: function (block) {
            // Remainder computation.
            var argument0 = Blockly.Ruby.valueToCode(block, "DIVIDEND", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "DIVISOR", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = argument0 + " % " + argument1;
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        math_constrain: function (block) {
            // Constrain a number between two limits.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "LOW", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var argument2 = Blockly.Ruby.valueToCode(block, "HIGH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument2)) {
                argument2 = "float('inf')";
            }
            var code = "[[" + argument0 + ", " + argument1 + "].max, " + argument2 + "].min";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_random_int: function (block) {
            // Random integer between [X] and [Y].
            var argument0 = Blockly.Ruby.valueToCode(block, "FROM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = "rand(" + argument0 + ".." + argument1 + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_random_float: function (block) {
            // Random fraction between 0 and 1.
            return ["rand", this.ORDER_FUNCTION_CALL];
        },
        procedures_defreturn: function (block) {
            Blockly.Ruby.variableDB_.pushScope();
    
            // Define a procedure with a return value.
            var globals = Blockly.Variables.allVariables(block);
            for (var i = (globals.length - 1) | 0; i >= 0; i = (i - 1) | 0) {
                var varName = globals[i];
                if (block.arguments_.indexOf(varName) === -1) {
                    globals[i] = Blockly.Ruby.variableDB_.getRubyName(varName, Blockly.Variables.NAME_TYPE);
                }
                else  {
                    // This variable is actually a parameter name.  Do not include it in
                    // the list of globals, thus allowing it be of local scope (quote from
                    // the python generator)
                    globals.splice(i, 1);
                }
            }
            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.variableDB_.addLocalVariable(block.arguments_[x], Blockly.Variables.NAME_TYPE);
            }
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var branch = Blockly.Ruby.statementToCode(block, "STACK");
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), "\"" + block.id + "\"") + branch;
            }
            var returnValue = Blockly.Ruby.valueToCode(block, "RETURN", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(returnValue)) {
                returnValue = "\n  return " + returnValue + "\n";
            }
            var code = "def " + funcName + "(" + args.join(", ") + ")\n" + branch + returnValue + "end";
            code = Blockly.Ruby.scrub_(block, code);
            Blockly.Ruby.definitions_.set(funcName, code);
    
            Blockly.Ruby.variableDB_.popScope();
    
            return null;
        },
        procedures_defnoreturn: function (block) {
            return Blockly.Ruby.procedures_defreturn(block);
        },
        procedures_callreturn: function (block) {
            // Call a procedure with a return value.
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.valueToCode(block, "ARG" + x, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(args[x])) {
                    args[x] = "None";
                }
            }
    
            var code = funcName + "(" + args.join(", ") + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        procedures_callnoreturn: function (block) {
            // Call a procedure with no return value.
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.valueToCode(block, "ARG" + x, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(args[x])) {
                    args[x] = "None";
                }
            }
            var code = funcName + "(" + args.join(", ") + ")\n";
            return code;
        },
        procedures_ifreturn: function (block) {
            // Conditionally return value from a procedure.
            var condition = Blockly.Ruby.valueToCode(block, "CONDITION", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(condition)) {
                condition = "False";
            }
            var code = "if " + condition + "\n";
            if (block.hasReturnValue_) {
                var value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(value)) {
                    value = "None";
                }
                code += "\n  return " + value + "\n";
            }
            else  {
                code += "\n  return\n";
            }
            code += "end\n";
    
            return code;
        },
        text: function (block) {
            // Text value.
            var code = Blockly.Ruby.quote_(block.getFieldValue("TEXT"));
            return [code, this.ORDER_ATOMIC];
        },
        text_join: function (block) {
            // Create a string made up of any number of elements of any type.
            var code;
            if (block.itemCount_ === 0) {
                return ["''", this.ORDER_ATOMIC];
            }
            else  {
                if (block.itemCount_ === 1) {
                    var argument0 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                    if (System.String.isNullOrEmpty(argument0)) {
                        argument0 = "''";
                    }
                    code = argument0 + ".to_s";
                    return [code, this.ORDER_FUNCTION_CALL];
                }
                else  {
                    if (block.itemCount_ === 2) {
                        var argument01 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                        if (System.String.isNullOrEmpty(argument01)) {
                            argument01 = "''";
                        }
                        var argument1 = Blockly.Ruby.valueToCode(block, "ADD1", Blockly.Ruby.ORDER_NONE);
                        if (System.String.isNullOrEmpty(argument1)) {
                            argument1 = "''";
                        }
                        code = argument01 + ".to_s + " + argument1 + ".to_s";
                        return [code, this.ORDER_UNARY_SIGN];
                    }
                    else  {
                        var codes = System.Array.init(0, null);
                        for (var n = 0; n < block.itemCount_; n = (n + 1) | 0) {
                            var temp = Blockly.Ruby.valueToCode(block, "ADD" + n, Blockly.Ruby.ORDER_NONE);
                            if (System.String.isNullOrEmpty(temp)) {
                                temp = "''";
                            }
                            codes[n] = temp + ".to_s";
                        }
                        code = codes.join(" + ");
                        return [code, this.ORDER_FUNCTION_CALL];
                    }
                }
            }
        },
        text_append: function (block) {
            // Append to a variable in place.
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return varName + " = " + varName + ".to_s + (" + argument0 + ").to_s\n";
        },
        text_length: function (block) {
            // String length.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return [argument0 + ".size", this.ORDER_FUNCTION_CALL];
        },
        text_isEmpty: function (block) {
            // Is the string null?
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            var code = argument0 + ".empty?";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        text_indexOf: function (block) {
            // Search the text for a substring.
            // Should we allow for non-case sensitive???
            var finder = Bridge.referenceEquals(block.getFieldValue("END"), "FIRST") ? ".find_first" : ".find_last";
            var search = Blockly.Ruby.valueToCode(block, "FIND", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(search)) {
                search = "''";
            }
            var text = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }
            var code = text + finder + "(" + search + ")";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        text_charAt: function (block) {
            // Get letter at index.
            // Note: Until January 2013 this block did not have the WHERE input.
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_UNARY_SIGN);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var text = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }
    
            // Blockly uses one-based indicies.
            if (Blockly.isNumber(at)) {
                // If the index is a naked number, decrement it right now.
                at = (((parseInt(at, 10) - 1) | 0)).toString();
            }
            else  {
                // If the index is dynamic, decrement it in code.
                at = at + ".to_i - 1";
            }
    
            var code, functionName;
            switch (where) {
                case "FIRST": 
                    code = text + "[0]";
                    return [code, this.ORDER_MEMBER];
                case "LAST": 
                    code = text + "[-1]";
                    return [code, this.ORDER_MEMBER];
                case "FROM_START": 
                    functionName = Blockly.Ruby.provideFunction_("text_get_from_start", ["def " + Blockly.Ruby.functionNamePlaceholder() + " (text, index)", "  return \"\" if index < 0", "  text[index] || \"\"", "end"]);
                    code = functionName + "(" + text + ", " + at + ")";
                    return [code, this.ORDER_FUNCTION_CALL];
                case "FROM_END": 
                    functionName = Blockly.Ruby.provideFunction_("text_get_from_end", ["def " + Blockly.Ruby.functionNamePlaceholder() + " (text, index)", "  return \"\" if index < 0", "  text[-index-1] || \"\"'", "end"]);
                    code = functionName + "(" + text + ", " + at + ")";
                    return [code, this.ORDER_FUNCTION_CALL];
                case "RANDOM": 
                    functionName = Blockly.Ruby.provideFunction_("text_random_letter", ["def " + Blockly.Ruby.functionNamePlaceholder() + " (text)", "  text[rand(text.size)]", "end"]);
                    code = functionName + "(" + text + ")";
                    return [code, this.ORDER_FUNCTION_CALL];
            }
            throw new System.Exception("Unhandled option (text_charAt).");
        },
        text_getSubstring: function (block) {
            // Get substring.
            var text = Blockly.Ruby.valueToCode(block, "STRING", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }
            var where1 = block.getFieldValue("WHERE1");
            var where2 = block.getFieldValue("WHERE2");
            var at1 = Blockly.Ruby.valueToCode(block, "AT1", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at1)) {
                at1 = "1";
            }
            var at2 = Blockly.Ruby.valueToCode(block, "AT2", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at2)) {
                at2 = "1";
            }
            if (Bridge.referenceEquals(where1, "FIRST") || (Bridge.referenceEquals(where1, "FROM_START") && Bridge.referenceEquals(at1, "1"))) {
                at1 = "0";
            }
            else  {
                if (Bridge.referenceEquals(where1, "FROM_START")) {
                    // Blockly uses one-based indicies.
                    if (Blockly.isNumber(at1)) {
                        // If the index is a naked number, decrement it right now.
                        at1 = (((parseInt(at1, 10) - 1) | 0)).toString();
                    }
                    else  {
                        // If the index is dynamic, decrement it in code.
                        at1 = at1 + ".to_i - 1";
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where1, "FROM_END")) {
                        if (Blockly.isNumber(at1)) {
                            at1 = (((-parseInt(at1, 10)) | 0)).toString();
                        }
                        else  {
                            at1 = "-" + at1 + ".to_i";
                        }
                    }
                }
            }
            if (Bridge.referenceEquals(where2, "LAST") || (Bridge.referenceEquals(where2, "FROM_END") && Bridge.referenceEquals(at2, "1"))) {
                at2 = "-1";
            }
            else  {
                if (Bridge.referenceEquals(where2, "FROM_START")) {
                    if (Blockly.isNumber(at2)) {
                        at2 = (((parseInt(at2, 10) - 1) | 0)).toString();
                    }
                    else  {
                        at2 = at2 + ".to_i - 1";
                    }
                }
                else  {
                    if (Bridge.referenceEquals(where2, "FROM_END")) {
                        if (Blockly.isNumber(at2)) {
                            at2 = (((-parseInt(at2, 10)) | 0)).toString();
                        }
                        else  {
                            at2 = at2 + ".to_i";
                        }
                    }
                }
            }
            var code = text + "[" + at1 + ".." + at2 + "]";
            return [code, this.ORDER_MEMBER];
        },
        text_changeCase: function (block) {
            // Change capitalization.
            var OPERATORS = new System.Collections.Generic.Dictionary$2(String,String)();
            OPERATORS.add("UPPERCASE", ".upcase");
            OPERATORS.add("LOWERCASE", ".downcase");
            OPERATORS.add("TITLECASE", null);
            var code;
            var operator = OPERATORS.get(block.getFieldValue("CASE"));
            if (!System.String.isNullOrEmpty(operator)) {
                operator = OPERATORS.get(block.getFieldValue("CASE"));
                var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_MEMBER);
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = "''";
                }
                code = argument0 + operator;
            }
            else  {
                // Title case is not a native Ruby function. Define one.
                var functionName = Blockly.Ruby.provideFunction_("text_to_title_case", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(str)", "  str.gsub(/\\S+/) {|txt| txt.capitalize}", "end"]);
                var argument01 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument01)) {
                    argument01 = "''";
                }
                code = functionName + "(" + argument01 + ")";
            }
    
            return [code, this.ORDER_MEMBER];
        },
        text_trim: function (block) {
            // Trim spaces.
            var OPERATORS = new System.Collections.Generic.Dictionary$2(String,String)();
            OPERATORS.add("LEFT", ".lstrip");
            OPERATORS.add("RIGHT", ".rstrip");
            OPERATORS.add("BOTH", ".strip");
            var operator = OPERATORS.get(block.getFieldValue("MODE"));
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            var code = argument0 + operator;
            return [code, this.ORDER_MEMBER];
        },
        text_print: function (block) {
            // Print statement.
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return "blockly_puts(" + argument0 + ")\n";
        },
        text_prompt: function (block) {
            // Prompt function.
            var functionName = Blockly.Ruby.provideFunction_("text_prompt", ["def " + Blockly.Ruby.functionNamePlaceholder() + "(msg):", "    print (msg)", "    $stdin.gets"]);
            var msg = Blockly.Ruby.quote_(block.getFieldValue("TEXT"));
            var code = functionName + "(" + msg + ")";
            var toNumber = Bridge.referenceEquals(block.getFieldValue("TYPE"), "NUMBER");
            if (toNumber) {
                code = code + ".to_f";
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        variables_get: function (block) {
            // Variable getter.
            var code = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return [code, this.ORDER_ATOMIC];
        },
        variables_set: function (block) {
            // Variable setter.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return varName + " = " + argument0 + "\n";
        },
        switch_case_number: function (block) {
            // case/when/else condition.
            var argument = Blockly.Ruby.valueToCode(block, "SWITCH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "-1";
            }
            var code = "case " + argument + "\n";
            var n = 0;
            argument = Blockly.Ruby.valueToCode(block, "CASE" + n, Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = n.toString();
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO" + n);
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            code += "when " + argument + "\n" + branch;
            for (n = 1; n <= block.caseCount_; n = (n + 1) | 0) {
                argument = Blockly.Ruby.valueToCode(block, "CASE" + n, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument)) {
                    argument = n.toString();
                }
                branch = Blockly.Ruby.statementToCode(block, "DO" + n);
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "when " + argument + "\n" + branch;
            }
            if (block.defaultCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "DEFAULT");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "else\n" + branch;
            }
            code += "end\n";
            return code;
        },
        switch_case_text: function (block) {
            // case/when/else condition.
            var argument = Blockly.Ruby.valueToCode(block, "SWITCH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "-1";
            }
            var code = "case " + argument + "\n";
            var n = 0;
            argument = Blockly.Ruby.valueToCode(block, "CASE" + n, Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = n.toString();
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO" + n);
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            code += "when " + argument + "\n" + branch;
            for (n = 1; n <= block.caseCount_; n = (n + 1) | 0) {
                argument = Blockly.Ruby.valueToCode(block, "CASE" + n, Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument)) {
                    argument = n.toString();
                }
                branch = Blockly.Ruby.statementToCode(block, "DO" + n);
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "when " + argument + "\n" + branch;
            }
            if (block.defaultCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "DEFAULT");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code += "else\n" + branch;
            }
            code += "end\n";
            return code;
        }
    });
    
    Bridge.define("$AnonymousType$5", $_, {
        constructor: function () {
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$5)) {
                return false;
            }
            return ;
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1020252036;
            return hash;
        },
        toJSON: function () {
            return {
    
            };
        }
    });
    
    Bridge.define("$AnonymousType$6", $_, {
        constructor: function (object, dropSelf) {
            this.object = object;
            this.dropSelf = dropSelf;
        },
        getobject : function () {
            return this.object;
        },
        getdropSelf : function () {
            return this.dropSelf;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$6)) {
                return false;
            }
            return Bridge.equals(this.object, o.object) && Bridge.equals(this.dropSelf, o.dropSelf);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1708631319;
            hash = hash * 23 + (this.object == null ? 0 : Bridge.getHashCode(this.object));
            hash = hash * 23 + (this.dropSelf == null ? 0 : Bridge.getHashCode(this.dropSelf));
            return hash;
        },
        toJSON: function () {
            return {
                object : this.object,
                dropSelf : this.dropSelf
            };
        }
    });
    
    Bridge.define("$AnonymousType$7", $_, {
        constructor: function (dropSelf) {
            this.dropSelf = dropSelf;
        },
        getdropSelf : function () {
            return this.dropSelf;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$7)) {
                return false;
            }
            return Bridge.equals(this.dropSelf, o.dropSelf);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 142547378;
            hash = hash * 23 + (this.dropSelf == null ? 0 : Bridge.getHashCode(this.dropSelf));
            return hash;
        },
        toJSON: function () {
            return {
                dropSelf : this.dropSelf
            };
        }
    });
    
    Bridge.ns("WebMrbc.Ruby", $_);
    
    Bridge.apply($_.WebMrbc.Ruby, {
        f1: function (name, type) {
    
            if (Bridge.referenceEquals(type, Blockly.Variables.NAME_TYPE)) {
    
                var scope = Blockly.Ruby.variableDB_.localVars;
    
                while (scope != null) {
    
                    if (name in scope) {
                        return scope["name"];
                    }
    
                    scope = scope["chain"];
                }
    
                return "@" + Blockly.Ruby.variableDB_.getName(name, type);
            }
            else  {
                return Blockly.Ruby.variableDB_.getName(name, type);
            }
        },
        f2: function () {
            var previousLV = Blockly.Ruby.variableDB_.localVars;
            var previousDB = Blockly.Ruby.variableDB_.localVarsDB;
    
            Blockly.Ruby.variableDB_.localVars = Object("create", null);
            Blockly.Ruby.variableDB_.localVarsDB = new Blockly.Names(Blockly.Ruby.reservedWords());
    
            Blockly.Ruby.variableDB_.localVars["chain"] = previousLV;
            Blockly.Ruby.variableDB_.localVarsDB.chain = previousDB;
        },
        f3: function (name, type) {
            Blockly.Ruby.variableDB_.localVars[name] = this.variableDB_.localVarsDB.getName(name, Blockly.Variables.NAME_TYPE);
            return Blockly.Ruby.variableDB_.localVars[name].toString();
        },
        f4: function () {
            Blockly.Ruby.variableDB_.localVars = this.variableDB_.localVars["chain"];
            Blockly.Ruby.variableDB_.localVarsDB = this.variableDB_.localVarsDB.chain;
        },
        f5: function () {
            return Blockly.Ruby.provideFunction_("for_loop", ["# loops though all numbers from +params[:from]+ to +params[:to]+ by the step", "# value +params[:by]+ and calls the given block passing the numbers", "def ' + Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_() + ' params", "", "  from = params[:from] #.to_f", "  to = params[:to] #.to_f", "  by = params[:by].abs #.to_f", "", "  from.step(to, (from > to) ? -1 * by : by) do |value|", "    yield value", "  end", "", "end"]);
        }
    });
    
    Bridge.define('WebMrbc.SdCloseBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをクローズします").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdCopyBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをコピーする");
            this.appendValueInput("SRC_FILENAME").setCheck("String").appendField("コピー元ファイル名");
            this.appendValueInput("DST_FILENAME").setCheck("String").appendField("コピー先ファイル名");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdExistsBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルが存在するかどうか調べる");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdFlushBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの書き込みをフラッシュします").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdMkdirBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ディレクトリを作成する");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdOpenBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをオープンします").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("FILENAME").setCheck("String").appendField("ファイル名");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["Read", "READ"], ["Append", "APPEND"], ["New Create", "NEW_CREATE"]]), "MODE");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdPositionBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルのseek位置を取得します").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルから1バイト読み込みます").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdRemoveBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルを削除する");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdRmdirBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ディレクトリを削除する");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdSeekBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの読み出し位置を移動する").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("POSITION").setCheck("Number").appendField("バイト数");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdSizeBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルのサイズを取得します").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SdWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルにバイナリデータを書き込む").appendField(new Blockly.FieldDropdown([["File0", "FILE0"], ["File1", "FILE1"]]), "FILE_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialAvailableBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルデータがあるかどうか調べます").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialBpsBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ボーレートを設定します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.appendValueInput("BPS").setCheck("Number").appendField("ボーレート");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialFlashBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルデータをフラッシュします").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialNewBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアル通信を初期化します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.appendValueInput("BPS").setCheck("Number").appendField("ボーレート");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialPrintBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルに出力します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.appendValueInput("STR").setCheck("String").appendField("文字列");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialPrintlnBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルに\\r\\n付きで出力します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.appendValueInput("STR").setCheck("String").appendField("文字列");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルからデータを取得します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SerialWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルにデータを出力します").appendField(new Blockly.FieldDropdown([["USB", "PORT0"], ["TX-0/RX-1", "PORT1"], ["TX-5/RX-6", "PORT2"], ["TX-7/RX-8", "PORT3"], ["TX-12/RX-11", "PORT4"], ["TX-9(26)/RX-3", "PORT5"]]), "PORT_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoAttachBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("サーボ出力を任意のピンに割り当てます").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendDummyInput().appendField("割り当てるピン番号").appendField(new Blockly.FieldDropdown([["Pin0", "PIN0"], ["Pin1", "PIN1"], ["Pin2", "PIN2"]]), "PIN_NO").appendField("Min").appendField(new Blockly.FieldTextInput("default"), "MIN").appendField("Max").appendField(new Blockly.FieldTextInput("default"), "MAX");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoAttachedBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ピンにサーボが割り当てられているかを確認する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoDetachBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("サーボの動作を止め、割り込みを禁止する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoReadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("最後に設定された角度を読み出す").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoUsBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("サーボモータにus単位で角度を指定する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendValueInput("US").setCheck("Number").appendField("出力したいパルスの幅");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ServoWriteBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("サーボの角度をセットします").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendValueInput("ANGLE").setCheck("Number").appendField("角度");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseNumberBlock', {
        inherits: [WebMrbc.Block],
        caseCount_: 0,
        defaultCount_: 0,
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {void}
         */
        init: function () {
            this.setHelpUrl("http://www.example.com/");
            this.setColour(210);
            this.appendValueInput("SWITCH").setCheck("Number").appendField("右の数値が");
            this.appendDummyInput("CASE0").appendField("右の数値と").appendField(new Blockly.FieldNumber("0", "-Infinity", "Infinity", 1), "CASE_VALUE0");
            this.appendStatementInput("DO0").appendField("同じなら");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setMutator(new Blockly.Mutator(["switch_case_number_case", "switch_case_number_default"]));
            this.setTooltip(Bridge.fn.bind(this, $_.WebMrbc.SwitchCaseNumberBlock.f1));
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
        },
        /**
         * Create XML to represent the number of else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {Element}        XML storage element.
         */
        mutationToDom: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return null;
            }
            var container = document.createElement("mutation");
            if (this.caseCount_ !== 0) {
                container.setAttribute("case", this.caseCount_.toString());
            }
            if (this.defaultCount_ !== 0) {
                container.setAttribute("default", "1");
            }
            return container;
        },
        /**
         * Parse XML to restore the else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Element}    xmlElement    XML storage element.
         * @return  {void}
         */
        domToMutation: function (xmlElement) {
            this.caseCount_ = parseInt(xmlElement.getAttribute("case"), 10) || 0;
            this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10) || 0;
            this.updateShape_();
        },
        /**
         * Populate the mutator"s dialog with this block"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Workspace}    workspace    Mutator"s workspace.
         * @return  {Blockly.Block}                     Root block in mutator.
         */
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("switch_case_number_first_case");
            containerBlock.initSvg();
            var connection = containerBlock.nextConnection;
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                var elseifBlock = workspace.newBlock("switch_case_number_case");
                elseifBlock.initSvg();
                connection.connect(elseifBlock.previousConnection);
                connection = elseifBlock.nextConnection;
            }
            if (this.defaultCount_ !== 0) {
                var elseBlock = workspace.newBlock("switch_case_number_default");
                elseBlock.initSvg();
                connection.connect(elseBlock.previousConnection);
            }
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        compose: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            // Count number of inputs.
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
            var statementConnections = System.Array.init(0, null);
            var elseStatementConnection = null;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_number_case": 
                        this.caseCount_ = (this.caseCount_ + 1) | 0;
                        statementConnections.push(clauseBlock.statementConnection_);
                        break;
                    case "switch_case_number_default": 
                        this.defaultCount_ = (this.defaultCount_ + 1) | 0;
                        elseStatementConnection = clauseBlock.statementConnection_;
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                Blockly.Mutator.reconnect(statementConnections[i], this, "DO" + i);
            }
            Blockly.Mutator.reconnect(elseStatementConnection, this, "DEFAULT");
        },
        /**
         * Store pointers to any connected child blocks.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        saveConnections: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            var i = 1;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_number_case": 
                        {
                            var inputCase = this.getInput("CASE" + i);
                            var inputDo = this.getInput("DO" + i);
                            clauseBlock.statementConnection_ = (inputDo != null) ? inputDo.connection.targetConnection : null;
                            i = (i + 1) | 0;
                        }
                        break;
                    case "switch_case_number_default": 
                        {
                            var inputDo1 = this.getInput("DEFAULT");
                            clauseBlock.statementConnection_ = (inputDo1 != null) ? inputDo1.connection.targetConnection : null;
                        }
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
    
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
        },
        /**
         * Modify this block to have the correct number of inputs.
         *
         * @instance
         * @private
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {void}
         */
        updateShape_: function () {
            // Delete everything.
            if (this.getInput("DEFAULT") != null) {
                this.removeInput("DEFAULT");
            }
            var i = 1;
            while (this.getInput("CASE" + i) != null) {
                this.removeInput("CASE" + i);
                this.removeInput("DO" + i);
                i = (i + 1) | 0;
            }
            // Rebuild block.
            for (i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                this.appendDummyInput("CASE" + i).appendField("右の数値と").appendField(new Blockly.FieldNumber(i.toString(), "-Infinity", "Infinity", 1), "CASE_VALUE" + i);
                this.appendStatementInput("DO" + i).appendField("同じなら");
            }
            if (this.defaultCount_ !== 0) {
                this.appendStatementInput("DEFAULT").appendField("なければ");
            }
        }
    });
    
    Bridge.ns("WebMrbc.SwitchCaseNumberBlock", $_);
    
    Bridge.apply($_.WebMrbc.SwitchCaseNumberBlock, {
        f1: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return "数値の等しいブロックを実行";
            }
            else  {
                if ((this.caseCount_ === 0) && (this.defaultCount_ !== 0)) {
                    return "数値の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
                }
                else  {
                    if ((this.caseCount_ !== 0) && (this.defaultCount_ === 0)) {
                        return "数値の等しいブロックを実行";
                    }
                    else  {
                        if ((this.caseCount_ !== 0) && (this.defaultCount_ !== 0)) {
                            return "数値の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
                        }
                    }
                }
            }
            return "";
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseTextBlock', {
        inherits: [WebMrbc.Block],
        caseCount_: 0,
        defaultCount_: 0,
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {void}
         */
        init: function () {
            this.setHelpUrl("http://www.example.com/");
            this.setColour(210);
            this.appendValueInput("SWITCH").setCheck("String").appendField("右の文字列が");
            this.appendDummyInput("CASE0").appendField("右の文字列と").appendField(new Blockly.FieldTextInput("0"), "CASE_VALUE0");
            this.appendStatementInput("DO0").appendField("同じなら");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setMutator(new Blockly.Mutator(["switch_case_text_case", "switch_case_text_default"]));
            this.setTooltip(Bridge.fn.bind(this, $_.WebMrbc.SwitchCaseTextBlock.f1));
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
        },
        /**
         * Create XML to represent the text of else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {Element}        XML storage element.
         */
        mutationToDom: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return null;
            }
            var container = document.createElement("mutation");
            if (this.caseCount_ !== 0) {
                container.setAttribute("case", this.caseCount_.toString());
            }
            if (this.defaultCount_ !== 0) {
                container.setAttribute("default", "1");
            }
            return container;
        },
        /**
         * Parse XML to restore the else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Element}    xmlElement    XML storage element.
         * @return  {void}
         */
        domToMutation: function (xmlElement) {
            this.caseCount_ = parseInt(xmlElement.getAttribute("case"), 10) || 0;
            this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10) || 0;
            this.updateShape_();
        },
        /**
         * Populate the mutator"s dialog with this block"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Workspace}    workspace    Mutator"s workspace.
         * @return  {Blockly.Block}                     Root block in mutator.
         */
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("switch_case_text_first_case");
            containerBlock.initSvg();
            var connection = containerBlock.nextConnection;
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                var elseifBlock = workspace.newBlock("switch_case_text_case");
                elseifBlock.initSvg();
                connection.connect(elseifBlock.previousConnection);
                connection = elseifBlock.nextConnection;
            }
            if (this.defaultCount_ !== 0) {
                var elseBlock = workspace.newBlock("switch_case_text_default");
                elseBlock.initSvg();
                connection.connect(elseBlock.previousConnection);
            }
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        compose: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            // Count text of inputs.
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
            var statementConnections = System.Array.init(0, null);
            var elseStatementConnection = null;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_text_case": 
                        this.caseCount_ = (this.caseCount_ + 1) | 0;
                        statementConnections.push(clauseBlock.statementConnection_);
                        break;
                    case "switch_case_text_default": 
                        this.defaultCount_ = (this.defaultCount_ + 1) | 0;
                        elseStatementConnection = clauseBlock.statementConnection_;
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                Blockly.Mutator.reconnect(statementConnections[i], this, "DO" + i);
            }
            Blockly.Mutator.reconnect(elseStatementConnection, this, "DEFAULT");
        },
        /**
         * Store pointers to any connected child blocks.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        saveConnections: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            var i = 1;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_text_case": 
                        {
                            var inputCase = this.getInput("CASE" + i);
                            var inputDo = this.getInput("DO" + i);
                            clauseBlock.statementConnection_ = (inputDo != null) ? inputDo.connection.targetConnection : null;
                            i = (i + 1) | 0;
                        }
                        break;
                    case "switch_case_text_default": 
                        {
                            var inputDo1 = this.getInput("DEFAULT");
                            clauseBlock.statementConnection_ = (inputDo1 != null) ? inputDo1.connection.targetConnection : null;
                        }
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
    
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
        },
        /**
         * Modify this block to have the correct text of inputs.
         *
         * @instance
         * @private
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {void}
         */
        updateShape_: function () {
            // Delete everything.
            if (this.getInput("DEFAULT") != null) {
                this.removeInput("DEFAULT");
            }
            var i = 1;
            while (this.getInput("CASE" + i) != null) {
                this.removeInput("CASE" + i);
                this.removeInput("DO" + i);
                i = (i + 1) | 0;
            }
            // Rebuild block.
            for (i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                this.appendDummyInput("CASE" + i).appendField("右の文字列と").appendField(new Blockly.FieldTextInput(i.toString()), "CASE_VALUE" + i);
                this.appendStatementInput("DO" + i).appendField("同じなら");
            }
            if (this.defaultCount_ !== 0) {
                this.appendStatementInput("DEFAULT").appendField("なければ");
            }
        }
    });
    
    Bridge.ns("WebMrbc.SwitchCaseTextBlock", $_);
    
    Bridge.apply($_.WebMrbc.SwitchCaseTextBlock, {
        f1: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return "文字列の等しいブロックを実行";
            }
            else  {
                if ((this.caseCount_ === 0) && (this.defaultCount_ !== 0)) {
                    return "文字列の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
                }
                else  {
                    if ((this.caseCount_ !== 0) && (this.defaultCount_ === 0)) {
                        return "文字列の等しいブロックを実行";
                    }
                    else  {
                        if ((this.caseCount_ !== 0) && (this.defaultCount_ !== 0)) {
                            return "文字列の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
                        }
                    }
                }
            }
            return "";
        }
    });
    
    Bridge.define('WebMrbc.SystemExitBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("終了させます");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemFileLoadBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルローダーを呼び出します");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemGetMrbPathBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("実行しているmrbファイルパスを取得します");
            this.setInputsInline(true);
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemPopBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("フラッシュメモリから読み出します");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("サイズ");
            this.setInputsInline(true);
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemPushBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("フラッシュメモリに書き込みます");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("サイズ");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemResetBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("リセットします");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemSetRunBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("次に実行するスクリプトファイルをセットします");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemUseSdBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("SDカードを使えるようにします");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemUseWifiBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("WiFiモジュールESP8266ボードを使えるようにします");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.SystemVersionBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("システムのバージョンを取得します");
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.ToneBlock', {
        inherits: [WebMrbc.Block],
        constructor: function (type) {
            WebMrbc.Block.prototype.$constructor.call(this, type);
    
        },
        init: function () {
            this.appendDummyInput().appendField("トーン出力").appendField(new Blockly.FieldDropdown([["Pin1", "PIN1"], ["Pin2", "PIN2"], ["Pin3", "PIN3"]]), "PIN_NO");
            this.appendValueInput("FREQUENCY").setCheck("Number").appendField("周波数");
            this.appendValueInput("DURATION").setCheck("Number").appendField("出力を維持する時間[ms]");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });
    
    Bridge.define('WebMrbc.EcnlTaskWorkspace', {
        inherits: [WebMrbc.IClassWorkspace],
        identifer: null,
        workspace: null,
        constructor: function (identifer) {
            this.identifer = identifer;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifer: function () {
            return this.identifer;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineSvcTask(this, WebMrbc.Collections.LocalNode.getenode());
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var $t, $t1;
            var funcs = ["setup", "recv_esv", "break_wait", "timeout", "snd_msg"];
            var procs = ["is_local_addr", "is_multicast_addr", "is_valid_addrid", "get_local_addr", "get_multicast_addr", "get_remote_addr", "get_remote_id", "set_remote_addr", "add_remote_addr"];
            var echonet_category = $("#echonet_category", toolbox);
    
            echonet_category.html("");
            $t = Bridge.getEnumerator(funcs);
            while ($t.moveNext()) {
                var name = $t.getCurrent();
                var block = $("<block>");
                block.attr("type", "procedures_defnoreturn");
    
                var field = $("<field>");
                field.attr("name", "NAME");
                field.text(name);
                block.append(field);
    
                echonet_category.append(block);
            }
    
            $t1 = Bridge.getEnumerator(procs);
            while ($t1.moveNext()) {
                var name1 = $t1.getCurrent();
                var block1 = $("<block>");
                block1.attr("type", "procedures_defreturn");
    
                var field1 = $("<field>");
                field1.attr("name", "NAME");
                field1.text(name1);
                block1.append(field1);
    
                echonet_category.append(block1);
            }
        },
        openModifyView: function (callback) {
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifer%", this.identifer);
            template = System.String.replaceAll(template, "%attribute%", "SvcTask");
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });
    
    Bridge.define('WebMrbc.EObjectWorkspace', {
        inherits: [WebMrbc.IClassWorkspace],
        eobject: null,
        workspace: null,
        callback: null,
        constructor: function (eobject) {
            this.eobject = eobject;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifer: function () {
            return this.eobject.identifer;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return false;
        },
        toCode: function () {
            return Blockly.Ruby.defineEObject(this.eobject, this.workspace);
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var $t;
            var echonet_category = $("#echonet_category", toolbox);
    
            echonet_category.html("");
    
            $t = Bridge.getEnumerator(this.eobject.properties);
            while ($t.moveNext()) {
                var pi = $t.getCurrent();
                if (WebMrbc.CodeGenerator.isExtractProperty(pi)) {
                    continue;
                }
    
                var block = $("<block>");
                block.attr("type", "eproperty_new");
    
                var field = $("<field>");
                field.attr("name", "IDENTIFER");
                field.text(WebMrbc.CodeGenerator.getPropertyIdentifier(pi));
                block.append(field);
    
                field = $("<field>");
                field.attr("name", "DESCRIPTION");
                field.text(pi.description);
                block.append(field);
    
                field = $("<field>");
                field.attr("name", "PROPERTY_CODE");
                field.text(System.Byte.format(pi.propertyCode, "X2"));
                block.append(field);
    
                field = $("<field>");
                field.attr("name", "PROPERTY_SIZE");
                field.text(pi.size.toString());
                block.append(field);
    
                echonet_category.append(block);
            }
        },
        openModifyView: function (callback) {
            if (!Bridge.staticEquals(this.callback, null)) {
                return;
            }
            this.callback = callback;
            WebMrbc.Views.EObjectModalView.setEObject(this.eobject, this.getImageUrl());
            WebMrbc.Views.EObjectModalView.addClosed(Bridge.fn.bind(this, this.eObjectModalView_Closed));
            WebMrbc.Views.EObjectModalView.render();
        },
        eObjectModalView_Closed: function (view, ok) {
            view.removeClosed(Bridge.fn.bind(this, this.eObjectModalView_Closed));
    
            WebMrbc.App.reloadToolbox();
    
            if (!Bridge.staticEquals(this.callback, null)) {
                this.callback(ok);
            }
            this.callback = null;
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifer%", this.eobject.identifer);
            template = System.String.replaceAll(template, "%attribute%", "EOBJ: " + System.Byte.format(this.eobject.type.classGroup.classGroupCode, "X2") + System.Byte.format(this.eobject.type.classCode, "X2") + System.Byte.format(this.eobject.instanceCode, "X2") + "<br>区分: " + this.eobject.attribute);
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });
    
    Bridge.define('WebMrbc.MainLoopWorkspace', {
        inherits: [WebMrbc.IClassWorkspace],
        identifer: null,
        workspace: null,
        constructor: function (identifer) {
            this.identifer = identifer;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifer: function () {
            return this.identifer;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineMainLoop(this, WebMrbc.Collections.LocalNode.getenode());
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var echonet_category = $("#echonet_category", toolbox);
    
            echonet_category.html("");
        },
        openModifyView: function (callback) {
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifer%", this.identifer);
            template = System.String.replaceAll(template, "%attribute%", "MainLoop");
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseNumberCaseBlock', {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseNumberBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberCaseBlock
         * @memberof WebMrbc.SwitchCaseNumberCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip("switch");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseNumberDefaultBlock', {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseNumberBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberDefaultBlock
         * @memberof WebMrbc.SwitchCaseNumberDefaultBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("default");
            this.setPreviousStatement(true);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseNumberFirstCaseBlock', {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseNumberBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberFirstCaseBlock
         * @memberof WebMrbc.SwitchCaseNumberFirstCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setNextStatement(true);
            this.setTooltip("case when");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseTextCaseBlock', {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseTextBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextCaseBlock
         * @memberof WebMrbc.SwitchCaseTextCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip("switch");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseTextDefaultBlock', {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseTextBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextDefaultBlock
         * @memberof WebMrbc.SwitchCaseTextDefaultBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("default");
            this.setPreviousStatement(true);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.SwitchCaseTextFirstCaseBlock', {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        constructor: function (type) {
            WebMrbc.SwitchCaseTextBlock.prototype.$constructor.call(this, type);
    
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextFirstCaseBlock
         * @memberof WebMrbc.SwitchCaseTextFirstCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setNextStatement(true);
            this.setTooltip("case when");
            this.contextMenu = false;
        }
    });
    
    Bridge.define('WebMrbc.ENodeWorkspace', {
        inherits: [WebMrbc.EObjectWorkspace],
        constructor: function (enode) {
            WebMrbc.EObjectWorkspace.prototype.$constructor.call(this, enode);
    
        },
        getenode: function () {
            return Bridge.cast(this.eobject, WebMrbc.JsonNodeInfo);
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineENode(Bridge.cast(this.eobject, WebMrbc.JsonNodeInfo), this.workspace);
        }
    });
    
    Bridge.init();
})(this);
