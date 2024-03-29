
    //////////////////////////////////
    //       Functions
    //////////////////////////////////

    function caap_log(msg) {
        if (window.console && typeof console.log === 'function') {
            console.log(caapVersion + (devVersion !== '0' ? 'd' + devVersion : '') + ' |' + (new Date()).toLocaleTimeString() + '| ' + msg);
        }
    }

    function injectScript(url) {
        var inject = document.createElement('script');
        inject.setAttribute('type', 'text/javascript');
        inject.setAttribute('src', url);
        (document.head || document.getElementsByTagName('head')[0]).appendChild(inject);
        caap.removeLibs.push(inject);
    }

    function caap_DomTimeOut() {
        caap_log("DOM onload timeout!!! Reloading ...");
        if (typeof window.location.reload === 'function') {
            window.location.reload();
        } else if (typeof history.go === 'function') {
            history.go(0);
        } else {
            window.location.href = window.location.href;
        }
    }

    function caap_WaitForutility() {
        if (window.utility) {
            caap_log("utility ready ...");
            $j(function () {
                caap.start();
            }).ready();
        } else {
            caap_log("Waiting for utility ...");
            window.setTimeout(caap_WaitForutility, 100);
        }
    }

    function caap_WaitForDataTable() {
        if (window.jQuery().dataTable) {
            caap_log("dataTable ready ...");
            if (!window.utility) {
                caap_log("Inject utility.");
                injectScript(caap.libs.utility);
            }

            caap_WaitForutility();
        } else {
            caap_log("Waiting for dataTable ...");
            window.setTimeout(caap_WaitForDataTable, 100);
        }
    }

    function caap_WaitForFarbtastic() {
        if (window.jQuery.farbtastic) {
            caap_log("farbtastic ready ...");
            if (!window.jQuery().dataTable) {
                caap_log("Inject dataTable.");
                injectScript(caap.libs.dataTables);
            }

            caap_WaitForDataTable();
        } else {
            caap_log("Waiting for farbtastic ...");
            window.setTimeout(caap_WaitForFarbtastic, 100);
        }
    }

    function caap_WaitForjQueryUI() {
        if (window.jQuery.ui) {
            caap_log("jQueryUI ready ...");
            if (!window.jQuery.farbtastic) {
                caap_log("Inject farbtastic.");
                injectScript(caap.libs.farbtastic);
            }

            caap_WaitForFarbtastic();
        } else {
            caap_log("Waiting for jQueryUI ...");
            window.setTimeout(caap_WaitForjQueryUI, 100);
        }
    }

    function caap_WaitForjQuery() {
        if (window.jQuery && window.jQuery().jquery === "!jquery!") {
            caap_log("jQuery ready ...");
            if (!window.$j) {
                window.$j = window.jQuery.noConflict();
            } else {
                if (!window.caap_comms) {
                    throw "$j is already in use!";
                }
            }

            if (!window.jQuery.ui) {
                caap_log("Inject jQueryUI.");
                injectScript(caap.libs.jQueryUI);
            }

            caap_WaitForjQueryUI();
        } else {
            caap_log("Waiting for jQuery ...");
            window.setTimeout(caap_WaitForjQuery, 100);
        }
    }

    /////////////////////////////////////////////////////////////////////
    //                         Begin
    /////////////////////////////////////////////////////////////////////
    caap_log(window.navigator.userAgent);
    if (typeof CAAP_SCOPE_RUN !== 'undefined') {
        caap_log('Remote version: ' + CAAP_SCOPE_RUN[0] + ' ' + CAAP_SCOPE_RUN[1] + ' d' + CAAP_SCOPE_RUN[2]);
    }

    (function () {
        function setDSMSupported() {
            caap.isDOMSubtreeModifiedSupported = true;
        }

        var el = document.createElement('div');
        el.addEventListener("DOMSubtreeModified", setDSMSupported, false);
        el.innerHTML = "set";
        el.removeEventListener("DOMSubtreeModified", setDSMSupported, false);
        el = null;
    }());

    caap_log("Starting ... waiting for libraries and DOM load");
    caap_timeout = window.setTimeout(caap_DomTimeOut, 180000);
    if (!window.jQuery || window.jQuery().jquery !== "!jquery!") {
        caap_log("Inject jQuery");
        injectScript(caap.libs.jQuery);
    }

    caap_WaitForjQuery();

}());

// ENDOFSCRIPT
