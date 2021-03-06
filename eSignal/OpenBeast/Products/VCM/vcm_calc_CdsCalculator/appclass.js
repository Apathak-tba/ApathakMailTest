var UserID_vcm_calc_CdsCalculator = "1";
var CustomerID_vcm_calc_CdsCalculator = "2";
var instanceMode_vcm_calc_CdsCalculator = "conn";
var instanceType_vcm_calc_CdsCalculator = "vcm_calc_CdsCalculator";

F2.Apps["vcm_calc_CdsCalculator"] = (function () {
    var App_Class = function (appConfig, appContent, root) {
        // constructor
        this.appConfig = appConfig;
        this.appContent = appContent;
        this.$root = $(root);
        var $tbody = $('tbody', this.$root);
        var $caption = $('caption', this.$root);

        if (appConfig.context != null) {
            UserID_vcm_calc_CdsCalculator = appConfig.context.UserID;
            CustomerID_vcm_calc_CdsCalculator = appConfig.context.CustomerID;
            instanceMode_vcm_calc_CdsCalculator = appConfig.context.InstanceMode;
        }

        App_Class.prototype.init = function () {
            // perform init actions
            F2.log("Init vcm_calc_CdsCalculator.");

            setupSignalRGeneric(instanceType_vcm_calc_CdsCalculator, UserID_vcm_calc_CdsCalculator, CustomerID_vcm_calc_CdsCalculator, instanceMode_vcm_calc_CdsCalculator);

            $('#vcm_calc_CdsCalculator :text[title="datepick"]').datepicker({ format: 'mm/dd/yyyy', autoclose: true, weekStart: 0 }).on('changeDate', function (ev) {

                try { //alert("abc" + ev.date);
                    var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;
                    //$('#inputDate').datepicker('setValue', ev.date);

                    var itemType = "DDList";

                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();

                    if ($(this).val() != "")
                        SendToBeast(instanceType_vcm_calc_CdsCalculator + "#" + paraValues, idValPair);
                }
                catch (err) {
                    var strerrordesc = "Function:datepick(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                }
            });

            $('#vcm_calc_CdsCalculator :text').click(function () {

                if ($(this).hasClass("priceWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_CdsCalculator + "^" + paraValues + "^" + idValPair;

                        display_PriceWidget(eleInfo, $(this).val(), $(this).attr("name"), clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_priceWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                    }
                }
                else if ($(this).hasClass("termWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_CdsCalculator + "^" + paraValues + "^" + idValPair;

                        display_TermWidget(eleInfo, clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_termWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                    }
                }
                else if ($(this).hasClass("basisWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_CdsCalculator + "^" + paraValues + "^" + idValPair;

                        display_BasisWidget(eleInfo, clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_basisWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                    }
                }

            });

            $("#vcm_calc_CdsCalculator input[type='button']").click(function () {

                if (!$(this).hasClass("inputDisable")) {

                    try {
                        var itemType = "DDList";
                        var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;

                        var valToSubmit = $(this).attr("name");
                        if (valToSubmit == "1")
                            $(this).attr("name", "0");
                        else
                            $(this).attr("name", "1");

                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + valToSubmit;

                        if ($(this).val() != "") {
                            SendToBeast(instanceType_vcm_calc_CdsCalculator + "#" + paraValues, idValPair);
                        }
                    }
                    catch (err) {
                        var strerrordesc = "Function:button_inputDisable(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                    }
                }
            });

            $("#vcm_calc_CdsCalculator select").change(function () {
                try {
                    var itemType = "DDList";
                    var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;

                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();

                    if ($(this).val() != "") {
                        SendToBeast(instanceType_vcm_calc_CdsCalculator + "#" + paraValues, idValPair);
                    }
                }
                catch (err) {
                    var strerrordesc = "Function:select_DDList(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                }
            });

            $("#vcm_calc_CdsCalculator :text").bind("paste", function (e) {
                e.preventDefault();
            });

            $("#vcm_calc_CdsCalculator :text").bind('keydown', function (event) {
                try {
                    if ($(this).hasClass("inputDisable")) {
                        event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    }
                    else {
                        var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

                        if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
                            event.returnValue = true;
                        }
                        else {
                            if (event.keyCode == 9) {
                                event.returnValue = true;
                            }
                            else {
                                if (event.keyCode == 110 || event.keyCode == 190) {
                                    if ($(this).val().indexOf(".") != -1)
                                        event.preventDefault ? event.preventDefault() : event.returnValue = false;
                                }
                                else
                                    event.preventDefault ? event.preventDefault() : event.returnValue = false;
                            }
                        }

                        if (keyNumber == 13) {
                            if (($.browser.mozilla == true) || ($.browser.chrome == true))
                                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                            var paraValues = UserID_vcm_calc_CdsCalculator + "^" + CustomerID_vcm_calc_CdsCalculator + "^" + instanceMode_vcm_calc_CdsCalculator;
                            var itemType = "DDList";
                            var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();
                            //if ($.trim($(this).val()) != "") {
                            SendToBeast(instanceType_vcm_calc_CdsCalculator + "#" + paraValues, idValPair);
                            //}


                        }
                    }
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_CdsCalculator_appclass.js", strerrordesc);
                }
            });
        };
    };
    return App_Class;
})();

