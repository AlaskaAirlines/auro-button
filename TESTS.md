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
