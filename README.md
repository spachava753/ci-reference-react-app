# ci-ref-react-app

This is a simple React app. The primary purpose of this app is to demonstrate how to setup a CI pipeline with Jenkins!

The repository contains a simple Node.js and React application which generates
a web page and is accompanied by a test to check that the application renders satisfactorily.

The `jenkins` directory contains an example of the `Jenkinsfile` (i.e. Pipeline) and the `scripts` subdirectory
contains shell scripts with commands that are executed when Jenkins processes the "Test" and "Deliver" stages of your Pipeline.
