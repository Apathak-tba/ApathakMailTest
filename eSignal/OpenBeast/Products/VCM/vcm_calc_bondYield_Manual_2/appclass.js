var UserID_vcm_calc_bondYield_Manual_2 = "1";
var CustomerID_vcm_calc_bondYield_Manual_2 = "2";
var instanceMode_vcm_calc_bondYield_Manual_2 = "conn";
var instanceType_vcm_calc_bondYield_Manual_2 = "vcm_calc_bondYield_Manual_2";

F2.Apps["vcm_calc_bondYield_Manual_2"] = (function () {
    var App_Class = function (appConfig, appContent, root) {
        // constructor
        this.appConfig = appConfig;
        this.appContent = appContent;
        this.$root = $(root); //if you're using jQuery.
        var $tbody = $('tbody', this.$root);
        var $caption = $('caption', this.$root);

        if (appConfig.context != null) {
            UserID_vcm_calc_bondYield_Manual_2 = appConfig.context.UserID;
            CustomerID_vcm_calc_bondYield_Manual_2 = appConfig.context.CustomerID;
            instanceMode_vcm_calc_bondYield_Manual_2 = appConfig.context.InstanceMode;
        }

        App_Class.prototype.init = function () {
            // perform init actions
            F2.log("Init Bond Yield.");

            setupSignalRGeneric(instanceType_vcm_calc_bondYield_Manual_2, UserID_vcm_calc_bondYield_Manual_2, CustomerID_vcm_calc_bondYield_Manual_2, instanceMode_vcm_calc_bondYield_Manual_2);

            $('#vcm_calc_bondYield_Manual_2 :text[title="datepick"]').datepicker({ format: 'mm/dd/yyyy', autoclose: true, weekStart: 0 }).on('changeDate', function (ev) {
                try {
                    //alert("abc" + ev.date);
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    //$('#inputDate').datepicker('setValue', ev.date);

                    var itemType = "DDList";

                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();

                    if ($(this).val() != "")
                        SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                }
                catch (err) {
                    var strerrordesc = "Function:datepick(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });

            $('#vcm_calc_bondYield_Manual_2 :text').click(function () {

                if ($(this).hasClass("priceWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_bondYield_Manual_2 + "^" + paraValues + "^" + idValPair;

                        display_PriceWidget(eleInfo, $(this).val(), $(this).attr("name"), clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_priceWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                    }
                }
                else if ($(this).hasClass("termWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_bondYield_Manual_2 + "^" + paraValues + "^" + idValPair;

                        display_TermWidget(eleInfo, clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_termWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                    }
                }
                else if ($(this).hasClass("basisWidget")) {
                    try {
                        var clsAryMed = $(this).attr("class");

                        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1);

                        var eleInfo = instanceType_vcm_calc_bondYield_Manual_2 + "^" + paraValues + "^" + idValPair;

                        display_BasisWidget(eleInfo, clsAryMed.split(' ')[2].split('_')[1], $(this));
                    }
                    catch (err) {
                        var strerrordesc = "Function:text_basisWidget(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                    }
                }

            });

            $("#vcm_calc_bondYield_Manual_2 input[type='button']").click(function () {

                if (!$(this).hasClass("inputDisable")) {
                    try {

                        if ($(this).attr("id") != 'vcm_calc_bondYield_Manual_2_70') {
                            var itemType = "DDList";
                            var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;

                            //var valToSubmit = $(this).eq(0).find('td').find('input').attr("name");
                            //if (valToSubmit == "1")
                            //    $(this).eq(0).find('td').find('input').attr("name", "0");
                            //else
                            //    $(this).eq(0).find('td').find('input').attr("name", "1");

                            var valToSubmit = $(this).attr("name");
                            if (valToSubmit == "1")
                                $(this).attr("name", "0");
                            else
                                $(this).attr("name", "1");

                            var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + valToSubmit;


                            // if ($(this).val() != "") {
                            SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                            if ($(this).attr("id") != 'vcm_calc_bondYield_Manual_2_3004' && $(this).attr("id") != 'vcm_calc_bondYield_Manual_2_3006' && $(this).attr("id") != 'vcm_calc_bondYield_Manual_2_3005') {

                                $('#searchlst2').hide();
                                $('.bondYield_Manual2').show();
                                //}
                            }
                        }
                    }
                    catch (err) {
                        var strerrordesc = "Function:button_inputDisable(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                    }
                }

            });

            $("#searchlst2 tbody tr").click(function () {

                if (!$(this).hasClass("inputDisable")) {
                    try {

                        var itemType = "DDList";
                        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;

                        var valToSubmit = $(this).eq(0).find('td').find('input').attr("name");

                        if ($(this).eq(0).find('td').attr("class") != 'first1' && $(this).eq(0).find('td').attr("class") != "first" && $(this).eq(0).find('td').find('input').attr("name") != "" && $(this).eq(0).find('td').find('input').val() != "Next" && $(this).eq(0).find('td').find('input').val() != "Prev") {
                            if (valToSubmit == "1")
                                $(this).eq(0).find('td').find('input').attr("name", "0");
                            else
                                $(this).eq(0).find('td').find('input').attr("name", "1");



                            var idValPair = itemType + "#" + $(this).eq(0).find('td').find('input').attr("id").substring($(this).eq(0).find('td').find('input').attr("id").lastIndexOf('_') + 1) + "#" + valToSubmit;

                            // if ($(this).val() != "") {
                            SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);

                            $('#searchlst2').hide();
                            $('.bondYield_Manual2').show();
                            //}

                        }
                    }
                    catch (err) {
                        var strerrordesc = "Function:button_inputDisable(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                    }
                }

            });


            $("#vcm_calc_bondYield_Manual_2 select").change(function () {
                try {
                    var itemType = "DDList";
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();

                    if ($(this).val() != "") {

                        SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);

                    }
                }
                catch (err) {
                    var strerrordesc = "Function:select_DDList(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });

            $("#vcm_calc_bondYield_Manual_2 :text").bind("paste", function (e) {
                e.preventDefault();
            });

            $("#vcm_calc_bondYield_Manual_2 :text").bind('keydown', function (event) {
                try {
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
                                // if ($(this).val().indexOf(".") != -1)
                                // event.preventDefault ? event.preventDefault() : event.returnValue = false;
                            }
                            //else
                            //event.preventDefault ? event.preventDefault() : event.returnValue = false;
                        }
                    }

                    if (keyNumber == 13) {
                        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                        var itemType = "DDList";
                        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this).val();

                        // if ($.trim($(this).val()) != "") {
                        SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                        return false;
                        //}
                        //   else {
                        alert("Input cannot be blank.");
                        // }
                    }
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });

            //$("#vcm_calc_bondYield_Manual_2 :text").bind('blur', function (event) {
            //    try {
            //        var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

            //        //if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
            //        //    event.returnValue = true;
            //        //}
            //        //else {
            //        //    if (event.keyCode == 9) {
            //        //        event.returnValue = true;
            //        //    }
            //        //    else {
            //        //        if (event.keyCode == 110 || event.keyCode == 190) {
            //        //            // if ($(this).val().indexOf(".") != -1)
            //        //            // event.preventDefault ? event.preventDefault() : event.returnValue = false;
            //        //        }
            //        //        //else
            //        //        //event.preventDefault ? event.preventDefault() : event.returnValue = false;
            //        //    }
            //        //}

            //        //  if (keyNumber == 13) {
            //        var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
            //        var itemType = "DDList";
            //        var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this)[0].name;

            //        //if ($.trim($(this).val()) != "") {
            //        //SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
            //        //}
            //        //else {
            //        //    alert("Input cannot be blank.");
            //        //}
            //        //}
            //    }
            //    catch (err) {
            //        var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
            //        onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
            //    }
            //});
            $("#vcm_calc_bondYield_Manual_2_3000").bind('blur', function (event) {
                try {
                    var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

                    //if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
                    //    event.returnValue = true;
                    //}
                    //else {
                    //    if (event.keyCode == 9) {
                    //        event.returnValue = true;
                    //    }
                    //    else {
                    //        if (event.keyCode == 110 || event.keyCode == 190) {
                    //            // if ($(this).val().indexOf(".") != -1)
                    //            // event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //        }
                    //        //else
                    //        //event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //    }
                    //}

                    //  if (keyNumber == 13) {
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    var itemType = "DDList";
                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this)[0].name;

                    //if ($.trim($(this).val()) != "") {
                    SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                    //}
                    //else {
                    //    alert("Input cannot be blank.");
                    //}
                    //}
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });
            $("#vcm_calc_bondYield_Manual_2_3001").bind('blur', function (event) {
                try {
                    var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

                    //if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
                    //    event.returnValue = true;
                    //}
                    //else {
                    //    if (event.keyCode == 9) {
                    //        event.returnValue = true;
                    //    }
                    //    else {
                    //        if (event.keyCode == 110 || event.keyCode == 190) {
                    //            // if ($(this).val().indexOf(".") != -1)
                    //            // event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //        }
                    //        //else
                    //        //event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //    }
                    //}

                    //  if (keyNumber == 13) {
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    var itemType = "DDList";
                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this)[0].name;

                    //if ($.trim($(this).val()) != "") {
                    SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                    //}
                    //else {
                    //    alert("Input cannot be blank.");
                    //}
                    //}
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });
            $("#vcm_calc_bondYield_Manual_2_3002").bind('blur', function (event) {
                try {
                    var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

                    //if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
                    //    event.returnValue = true;
                    //}
                    //else {
                    //    if (event.keyCode == 9) {
                    //        event.returnValue = true;
                    //    }
                    //    else {
                    //        if (event.keyCode == 110 || event.keyCode == 190) {
                    //            // if ($(this).val().indexOf(".") != -1)
                    //            // event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //        }
                    //        //else
                    //        //event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //    }
                    //}

                    //  if (keyNumber == 13) {
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    var itemType = "DDList";
                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this)[0].name;

                    //if ($.trim($(this).val()) != "") {
                    SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                    //}
                    //else {
                    //    alert("Input cannot be blank.");
                    //}
                    //}
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });
            $("#vcm_calc_bondYield_Manual_2_3003").bind('blur', function (event) {
                try {
                    var keyNumber = event.keyCode; if ($(this).attr("title") == "datepick") event.preventDefault ? event.preventDefault() : event.returnValue = false; if (event.shiftKey) event.preventDefault ? event.preventDefault() : event.returnValue = false;

                    //if ((keyNumber > 47 && keyNumber < 58) || (keyNumber > 95 && keyNumber < 106) || (keyNumber > 34 && keyNumber < 41) || keyNumber == 8 || keyNumber == 13 || keyNumber == 46) {
                    //    event.returnValue = true;
                    //}
                    //else {
                    //    if (event.keyCode == 9) {
                    //        event.returnValue = true;
                    //    }
                    //    else {
                    //        if (event.keyCode == 110 || event.keyCode == 190) {
                    //            // if ($(this).val().indexOf(".") != -1)
                    //            // event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //        }
                    //        //else
                    //        //event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    //    }
                    //}

                    //  if (keyNumber == 13) {
                    var paraValues = UserID_vcm_calc_bondYield_Manual_2 + "^" + CustomerID_vcm_calc_bondYield_Manual_2 + "^" + instanceMode_vcm_calc_bondYield_Manual_2;
                    var itemType = "DDList";
                    var idValPair = itemType + "#" + $(this).attr("id").substring($(this).attr("id").lastIndexOf('_') + 1) + "#" + $(this)[0].name;

                    //if ($.trim($(this).val()) != "") {
                    SendToBeast(instanceType_vcm_calc_bondYield_Manual_2 + "#" + paraValues, idValPair);
                    //}
                    //else {
                    //    alert("Input cannot be blank.");
                    //}
                    //}
                }
                catch (err) {
                    var strerrordesc = "Function:text_keydown(); Error is : " + err.description + "; Error number is " + err.number + "; Message :" + err.message;
                    onJavascriptLog("vcm_calc_bondYield_Manual_2_appclass.js", strerrordesc);
                }
            });

        };
    };
    return App_Class;
})();

