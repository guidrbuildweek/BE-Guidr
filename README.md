# BE-Guidr
Backend Portion of the Guidr Application

| https://guidr-be.herokuapp.com/register | https://guidr-be.herokuapp.com/login |
|-----------------------------------------|--------------------------------------|
| name, username, password | username, password|
| | 
| |
|TRIP INFO CRUD|
| https://guidr-be.herokuapp.com/trips |
|post /trips --> tripType (string), tripName (string) , durationStart (YYYY-MM-DD), durationEnd (YYYY-MM-DD), privPro (string), datePosted (YYYY-MM-DD), location (string) |
| get /trips |
| get /trips/:id |
| put /trips/:id |
| delete /trips/:id |
| post /trips |
| | 
| |
|PROFILE INFO CRUD|
| name (string)|
| tagline (string)|
| age (int)|
| experience (int) !! include unit of time after this #| 
| get /profile | 
| get/:id /profile |
| post /profile |
| put /profile/:id | 
| delete /profile/:id |
