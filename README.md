# Registration-Web-Application
Registration form submits to server, data is saved to database file; response is entered data and thank you pg.

Application is a work in progress:
---------------------------------------------------------------------------------------------------------------------------
THIS IS NOT SECURE. Don't try to use it for anything important; I just did this as a learning exercise in node js.

Instructions:
---------------------------------------------------------------------------------------------------------------------------
1. open up command line terminal, & start up your server (doesn't really matter what you use) in the same directory as the project, and navigate to the url.

2. enter data into the form and submit.

3. the server processes the data on the backend and saves it to a database file. Even after the server goes down, the data remains. :)

------------------------------------------------------------------------------------------------------------------------------

I will be working on SQL Server Integration Pipeline soon as well. Thanks for checking out my app!

##BUILD NOTES:  -JAMES HARDY

========================================================================
#Requirements:

DONE
(i) user should be able to enter data on a form and submit it.

DONE
(ii) data should go to a server for processing

DONE
(iii) data should be stored in a database file and saved

DONE ***
(iv) server should send back a response to the client indicating http code, and 
        whether or not the request / response was successful.

HERE:
-------
(v) client should display a thank you page or message to the user at this point.        

(vi) database file should be regularly uploaded to a SQL Server relational database for
        further processing and security. 

(vii) pipeline maintenance for data processing and uploads scheduled                


NOTES:
---------------------
08/12/2022  ~

##setup server environment

##have geolocation happening

##have database saving data to file

-----------------------
08/12/2022    ~

##Form data submitted and saved to DB. 
##everything is saving except the form data from user.   --SOLVED

------------------------
08/13/2022:   ~

##Form data is now posting to the server and saving to the database file.

<input name='userInput'id='input' type="text"></input>

>>

const userInput = document.querySelector('input');


##Upgraded form to include first name, last name, phone number

##we were logging the request params instead of the response body. 

##we are now logging the response body in a string format

##database operations unnaffected. All systems available. 
------------------------

##working on thank you page redirect.

##currently things submit fine on backend, but frontend needs to show a thank you page.
