# Running Tests

The native Polymer Test scenario depends on Selenium server for local browsers and Java installed. Due to complexities with getting these environments configured correctly, these rarely work and it is suggested to use the simpler interactive test method as described below.

#### Run the Polymer Server

```
$ polymer serve
```

#### Visit the following URL:

```
http://127.0.0.1:8081/components/@alaskaair/ods-[name]/test/ods-[name]_test.html
```

Open the inspector/console to review results of the tests.


## Linting tests

Within the build and dist scripts are embeded CSS and JSON linters. If you are interested in running these tests individually, they are:

```
$ npm run cssLint

$ npm run jsonLint
```

These are not set up as watcher tasks as if there is an error in any of these files when build, the cascading effect of the error will be very noticeable. 

Their primary use is within the build/dist scripts to ensure that the coded files are correct at the time of build.

## Accessibility tests

Each component requires a pass though with the pa11y tool. When running `npm run dev` the pa11y tool will run with a watch. 

The accessibility report is exported to the `./pa11yReport.json` file. 

If all tests pass, the file should only contain the following:

```
[]
```

If there are errors, this will be printed to the CLI and exported to the JSON file. 

No pull request will be accepted with an updated `./pa11yReport.json` file. 
