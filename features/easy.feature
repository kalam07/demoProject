Feature: Add Text Fields on easy demo site

Background: As a user
  Given open easy demo site 
  When go to dummy testing page 

Scenario: Add Input on text field 
  When enter the text on input field 
  Then should read the value from text 

Scenario: Add a and b values 
  When enter a and b values
  Then verify the value from get total
  
    
