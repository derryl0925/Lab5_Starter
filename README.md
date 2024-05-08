# Lab 5 - Starter

Derrick Lin

[Explore](https://derryl0925.github.io/Lab5_Starter/explore.html)

[Expose](https://derryl0925.github.io/Lab5_Starter/expose.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

It depends on the scope of the test. Unit tests are ideal for testing the functionality of individual components or methods. If the "message" feature involves complex interactions with multiple components (like UI, network, and database operations), a unit test may not be sufficient as it primarily verifies the functionality of isolated pieces. However, if the aim is to test a specific part of the messaging feature, like validating the message format or ensuring the correct handling of input data before it is sent, then unit tests are appropriate.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, the "max message length" feature is a good candidate for unit testing because it involves a very specific, isolated piece of functionality that can be easily tested in isolation. A unit test could verify that the message length validation logic correctly prevents the user from typing more than 80 characters.
