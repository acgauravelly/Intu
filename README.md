# Intu
Test cases and Tasks

//test

The file name Manual Testcases has all the test cases for the manual scenario assigned for login.They are all in BDD.
The QA tasks document has the bugs found and the bug raised in Jira 
The QA tasks document has also the copy of the manual test case swritten in IDE hence the format
In the folder Intu/src/test/resources
Open SignIn.feature and change the correct email and correct password in the scenario examples to the valid crendtials
Open a command line to the Intu folder
And run the following command
mvn clean install -Dbrowser=firefox -Dcucumber.options="--tags @All" -P test
