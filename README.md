angular-bootstrap-multiselect
==========================

Bootstrap styled multiselect directive for AngularJS

Screenshot:

![Screenshot](/multiselect.png?raw=true "Screenshot")

Originally created by Amitava Saha (https://github.com/amitava82/angular-multiselect)

### Installation via Bower:

```
$ bower install angular-bootstrap-multiselect --save
```

### Usage:

Add "ui.multiselect" to your modules list. Then you can use it like follows:

```
<multiselect
    ng-model="multiselectModel"
    options="c for c in multiselectOptions"
    data-multiple="true">
</multiselect>
```

See index.html for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH

Copyright (c) 2014 Amitava Saha

Licensed under the MIT License