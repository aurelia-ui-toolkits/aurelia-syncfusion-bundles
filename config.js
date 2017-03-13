System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": [
      "github:*",
      "npm:*"
    ],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.2.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.0",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.4",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.1",
    "aurelia-logging": "npm:aurelia-logging@1.3.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.2.1",
    "aurelia-syncfusion-bridge": "npm:aurelia-syncfusion-bridge@0.5.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.3.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.33",
    "jquery": "npm:jquery@2.2.4",
    "jquery-easing": "npm:jquery-easing@0.0.1",
    "jquery-validation": "npm:jquery-validation@1.15.1",
    "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6",
    "json": "github:systemjs/plugin-json@0.1.2",
    "jsrender": "npm:jsrender@0.9.80",
    "syncfusion-javascript": "npm:syncfusion-javascript@15.1.37",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-binding@1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.0",
      "aurelia-router": "npm:aurelia-router@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.3.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.3.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0"
    },
    "npm:aurelia-framework@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-http-client@1.0.4": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-syncfusion-bridge@0.5.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-framework": "npm:aurelia-framework@1.1.0",
      "aurelia-http-client": "npm:aurelia-http-client@1.0.4",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0",
      "jquery-validation": "npm:jquery-validation@1.16.0",
      "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6",
      "jsrender": "npm:jsrender@0.9.80"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating-resources@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-easing@0.0.1": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:jquery-validation-unobtrusive@3.2.6": {
      "jquery": "npm:jquery@3.1.1",
      "jquery-validation": "npm:jquery-validation@1.16.0"
    },
    "npm:jquery-validation@1.15.1": {
      "jquery": "npm:jquery@2.2.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery-validation@1.16.0": {
      "jquery": "npm:jquery@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jsrender@0.9.80": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@2.0.3"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@2.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:syncfusion-javascript@15.1.37": {
      "jquery": "npm:jquery@2.2.4",
      "jquery-validation": "npm:jquery-validation@1.16.0",
      "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6",
      "jsrender": "npm:jsrender@0.9.80",
      "syncfusion-ej-global": "npm:syncfusion-ej-global@15.1.37"
    },
    "npm:through2@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "bundles/bundle.js": [
      "github:systemjs/plugin-css@0.1.33.js",
      "github:systemjs/plugin-css@0.1.33/css.js",
      "github:systemjs/plugin-json@0.1.2.js",
      "github:systemjs/plugin-json@0.1.2/json.js",
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.0.js",
      "npm:aurelia-binding@1.2.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.0.js",
      "npm:aurelia-dependency-injection@1.3.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.1.js",
      "npm:aurelia-fetch-client@1.1.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.0.js",
      "npm:aurelia-framework@1.1.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.0.4.js",
      "npm:aurelia-http-client@1.0.4/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.1.js",
      "npm:aurelia-loader-default@1.0.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.0.js",
      "npm:aurelia-logging@1.3.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.1.0.js",
      "npm:aurelia-pal-browser@1.1.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.0.js",
      "npm:aurelia-polyfills@1.2.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.2.1.js",
      "npm:aurelia-router@1.2.1/aurelia-router.js",
      "npm:aurelia-syncfusion-bridge@0.5.0.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/accordion/accordion.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/autocomplete/autocomplete.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/barcode/barcode.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/bulletgraph/bulletgraph.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/bulletgraph/qualitativerange.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/button/button.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/chart/chart.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/chart/series.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/checkbox/checkbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/circulargauge/circulargauge.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/colorpicker/colorpicker.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/common.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/constants.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/decorators.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/events.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/template-processor.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/template.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/util.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/common/widget-base.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/config-builder.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/currencytextbox/currencytextbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/datepicker/datepicker.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/datetimepicker/datetimepicker.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/diagram/diagram.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/dialog/dialog.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/digitalgauge/digitalgauge.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/dropdownlist/dropdownlist.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/fileexplorer/fileexplorer.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/gantt/gantt.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/grid/column.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/grid/grid.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/groupbutton/groupbutton.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/heatmap/heatmap.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/heatmaplegend/heatmaplegend.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/index.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/kanban/kanban.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/kanban/kanbancolumn.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/lineargauge/lineargauge.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/listbox/listbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/listview/listview.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/map/layer.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/map/map.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/maskedit/maskedit.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/menu/menu.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/navigationdrawer/navigationdrawer.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/numerictextbox/numerictextbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/overview/overview.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pager/pager.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pdfviewer/pdfviewer.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/percentagetextbox/percentagetextbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pivotchart/pivotchart.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pivotgauge/pivotgauge.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pivotgrid/pivotgrid.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pivotschemadesigner/pivotschemadesigner.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/pivottreemap/pivottreemap.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/progressbar/progressbar.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/radialmenu/item.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/radialmenu/radialmenu.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/radialslider/radialslider.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/radiobutton/radiobutton.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/rangenavigator/rangenavigator.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/rangenavigator/rangeseries.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/rating/rating.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/reportviewer/reportviewer.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/ribbon/ribbon.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/rotator/rotator.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/rte/rte.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/schedule/schedule.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/schedule/scheduleresource.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/scroller/scroller.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/signature/signature.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/slider/slider.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/sparkline/sparkline.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/splitbutton/splitbutton.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/splitter/splitter.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/spreadsheet/sheet.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/spreadsheet/spreadsheet.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/sunburstchart/sunburstchart.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/sunburstchart/sunburstlevels.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/symbolpalette/symbolpalette.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/tab/tab.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/tagcloud/tagcloud.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/tile/tile.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/timepicker/timepicker.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/togglebutton/togglebutton.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/toolbar/toolbar.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/tooltip/tooltip.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/treegrid/treegrid.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/treegrid/treegridcolumn.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/treemap/level.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/treemap/treemap.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/treeview/treeview.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/uploadbox/uploadbox.js",
      "npm:aurelia-syncfusion-bridge@0.5.0/waitingpopup/waitingpopup.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.3.0.js",
      "npm:aurelia-templating-binding@1.3.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.3.1.js",
      "npm:aurelia-templating-resources@1.3.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.3.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.3.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.3.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.3.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.3.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.3.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.3.1/compose.js",
      "npm:aurelia-templating-resources@1.3.1/css-resource.js",
      "npm:aurelia-templating-resources@1.3.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.3.1/focus.js",
      "npm:aurelia-templating-resources@1.3.1/hide.js",
      "npm:aurelia-templating-resources@1.3.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.3.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.3.1/if.js",
      "npm:aurelia-templating-resources@1.3.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.3.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.3.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.3.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.3.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.3.1/repeat.js",
      "npm:aurelia-templating-resources@1.3.1/replaceable.js",
      "npm:aurelia-templating-resources@1.3.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.3.1/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.3.1/show.js",
      "npm:aurelia-templating-resources@1.3.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.3.1/with.js",
      "npm:aurelia-templating-router@1.1.0.js",
      "npm:aurelia-templating-router@1.1.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.1.0/route-href.js",
      "npm:aurelia-templating-router@1.1.0/route-loader.js",
      "npm:aurelia-templating-router@1.1.0/router-view.js",
      "npm:aurelia-templating@1.3.0.js",
      "npm:aurelia-templating@1.3.0/aurelia-templating.js"
    ]
  }
});