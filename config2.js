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
    "github:*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-syncfusion-bundles/0.0.6/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-syncfusion-bundles/0.0.6/jspm_packages/npm/*", 
    "syncfusion-javascript/*": "https://rawgit.com/aurelia-ui-toolkits/aurelia-syncfusion-bundles/0.0.6/npm/syncfusion-javascript@16.1.26/*",
    "bundles/bundle.js": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-syncfusion-bundles/0.0.6/bundles/bundle.js"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.7.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.3.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.1.1",
    "aurelia-http-client": "npm:aurelia-http-client@1.2.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.4.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.5.0",
    "aurelia-syncfusion-bridge": "npm:aurelia-syncfusion-bridge@3.2.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
    "aurelia-templating": "npm:aurelia-templating@1.7.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.6.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.37",
    "jquery": "npm:jquery@3.0.0",
    "jquery-easing": "npm:jquery-easing@0.0.1",
    "jquery-validation": "npm:jquery-validation@1.15.1",
    "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6",
    "json": "github:systemjs/plugin-json@0.1.2",
    "jsrender": "npm:jsrender@0.9.80",
    "syncfusion-javascript": "npm:syncfusion-javascript@16.1.26",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-binding@1.7.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.5",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.1.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.7.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.5.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.6.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.3.1"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.1.5": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-history-browser@1.1.1": {
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-http-client@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-pal-browser@1.7.0": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-polyfills@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-route-recognizer@1.1.1": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.5.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1"
    },
    "npm:aurelia-syncfusion-bridge@3.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.7.0"
    },
    "npm:aurelia-templating-binding@1.4.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-resources@1.6.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating-router@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.5.0",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.7.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.2.3",
      "ieee754": "npm:ieee754@1.1.10"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-easing@0.0.1": {
      "jquery": "npm:jquery@3.0.0"
    },
    "npm:jquery-validation-unobtrusive@3.2.6": {
      "jquery": "npm:jquery@3.0.0",
      "jquery-validation": "npm:jquery-validation@1.15.1"
    },
    "npm:jquery-validation@1.15.1": {
      "jquery": "npm:jquery@2.2.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery@3.0.0": {
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
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:syncfusion-javascript@16.1.26": {
      "jquery": "npm:jquery@3.0.0",
      "jquery-validation": "npm:jquery-validation@1.15.1",
      "jsrender": "npm:jsrender@0.9.80",
      "syncfusion-ej-global": "npm:syncfusion-ej-global@16.1.26"
    },
    "npm:through2@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.5",
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
      "github:systemjs/plugin-css@0.1.37.js",
      "github:systemjs/plugin-css@0.1.37/css.js",
      "github:systemjs/plugin-json@0.1.2.js",
      "github:systemjs/plugin-json@0.1.2/json.js",
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "npm:aurelia-animator-css@1.0.4.js",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-binding@1.7.1.js",
      "npm:aurelia-binding@1.7.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.3.1.js",
      "npm:aurelia-fetch-client@1.3.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.5.js",
      "npm:aurelia-framework@1.1.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.1.1.js",
      "npm:aurelia-history-browser@1.1.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.1.0.js",
      "npm:aurelia-history@1.1.0/aurelia-history.js",
      "npm:aurelia-http-client@1.2.1.js",
      "npm:aurelia-http-client@1.2.1/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.3.js",
      "npm:aurelia-loader-default@1.0.3/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.4.0.js",
      "npm:aurelia-logging@1.4.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.7.0.js",
      "npm:aurelia-pal-browser@1.7.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.7.0.js",
      "npm:aurelia-pal@1.7.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.0.js",
      "npm:aurelia-polyfills@1.3.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.1.js",
      "npm:aurelia-route-recognizer@1.1.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.5.0.js",
      "npm:aurelia-router@1.5.0/aurelia-router.js",
      "npm:aurelia-syncfusion-bridge@3.2.1.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/accordion/accordion.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/autocomplete/autocomplete.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/barcode/barcode.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/bulletgraph/bulletgraph.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/bulletgraph/qualitativerange.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/button/button.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/chart/chart.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/chart/series.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/checkbox/checkbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/circulargauge/circulargauge.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/colorpicker/colorpicker.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/combobox/combobox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/common.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/constants.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/decorators.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/events.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/template-processor.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/template.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/util.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/common/widget-base.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/config-builder.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/currencytextbox/currencytextbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/datepicker/datepicker.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/daterangepicker/daterangepicker.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/datetimepicker/datetimepicker.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/diagram/diagram.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/dialog/dialog.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/digitalgauge/digitalgauge.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/dropdownlist/dropdownlist.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/fileexplorer/fileexplorer.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/gantt/gantt.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/grid/column.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/grid/grid.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/groupbutton/groupbutton.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/heatmap/heatmap.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/heatmaplegend/heatmaplegend.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/index.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/kanban/kanban.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/kanban/kanbancolumn.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/lineargauge/lineargauge.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/listbox/listbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/listview/listview.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/map/layer.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/map/map.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/maskedit/maskedit.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/menu/menu.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/navigationdrawer/navigationdrawer.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/numerictextbox/numerictextbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/overview/overview.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pager/pager.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pdfviewer/pdfviewer.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/percentagetextbox/percentagetextbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pivotchart/pivotchart.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pivotgauge/pivotgauge.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pivotgrid/pivotgrid.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pivotschemadesigner/pivotschemadesigner.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/pivottreemap/pivottreemap.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/progressbar/progressbar.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/radialmenu/item.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/radialmenu/radialmenu.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/radialslider/radialslider.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/radiobutton/radiobutton.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/rangenavigator/rangenavigator.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/rangenavigator/rangeseries.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/rating/rating.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/reportviewer/reportviewer.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/ribbon/ribbon.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/rotator/rotator.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/rte/rte.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/schedule/schedule.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/schedule/scheduleresource.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/scroller/scroller.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/signature/signature.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/slider/slider.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/sparkline/sparkline.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/spellcheck/spellcheck.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/splitbutton/splitbutton.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/splitter/splitter.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/spreadsheet/sheet.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/spreadsheet/spreadsheet.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/sunburstchart/sunburstchart.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/sunburstchart/sunburstlevels.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/symbolpalette/symbolpalette.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/tab/tab.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/tagcloud/tagcloud.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/tile/tile.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/timepicker/timepicker.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/togglebutton/togglebutton.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/toolbar/toolbar.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/tooltip/tooltip.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/treegrid/treegrid.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/treegrid/treegridcolumn.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/treemap/level.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/treemap/treemap.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/treeview/treeview.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/uploadbox/uploadbox.js",
      "npm:aurelia-syncfusion-bridge@3.2.1/waitingpopup/waitingpopup.js",
      "npm:aurelia-task-queue@1.2.1.js",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.4.1.js",
      "npm:aurelia-templating-binding@1.4.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.6.0.js",
      "npm:aurelia-templating-resources@1.6.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.6.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.6.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.6.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.6.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.6.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.6.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.6.0/compose.js",
      "npm:aurelia-templating-resources@1.6.0/css-resource.js",
      "npm:aurelia-templating-resources@1.6.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.6.0/else.js",
      "npm:aurelia-templating-resources@1.6.0/focus.js",
      "npm:aurelia-templating-resources@1.6.0/hide.js",
      "npm:aurelia-templating-resources@1.6.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.6.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.6.0/if-core.js",
      "npm:aurelia-templating-resources@1.6.0/if.js",
      "npm:aurelia-templating-resources@1.6.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.6.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.6.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.6.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.6.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.6.0/repeat.js",
      "npm:aurelia-templating-resources@1.6.0/replaceable.js",
      "npm:aurelia-templating-resources@1.6.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.6.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.6.0/show.js",
      "npm:aurelia-templating-resources@1.6.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.6.0/with.js",
      "npm:aurelia-templating-router@1.3.1.js",
      "npm:aurelia-templating-router@1.3.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.3.1/route-href.js",
      "npm:aurelia-templating-router@1.3.1/route-loader.js",
      "npm:aurelia-templating-router@1.3.1/router-view.js",
      "npm:aurelia-templating@1.7.0.js",
      "npm:aurelia-templating@1.7.0/aurelia-templating.js"
    ]
  }
});