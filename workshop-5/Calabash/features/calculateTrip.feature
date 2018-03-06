Feature: Calculate a trip
    AS an user I WANT TO calculate a trip between different stations TO make a preview of my way

    Scenario: remove splash screen
        Given I press "Stations"

    Scenario Outline: Calculat a trip selecting stations from the principal highways
        Given I press "Travel in Transmi, SITP or Taxi"  
        And I click on screen 20% from the left and 20% from the top         
        When I touch the "LINES" text
        And I touch the <line1> text
        And I touch the <station1> text
        And I touch the <line2> text
        And I touch the <station2> text
        Then I wait to see "Recommendation 1" 

        Examples:
            | line1         | station1          | line2         | station2          |
            | "Caracas"     | "Tercer Milenio"  | "AutoNorte"   | "Calle 85"        |
            | "AutoNorte"   | "Calle 85"        | "Caracas"     | "Tercer Milenio"  |
            | "AutoNorte"   | "Calle 85"        | "AutoNorte"   | "Calle 127"       |
            | "AutoNorte"   | "Calle 127"       | "AutoNorte"   | "Calle 85"        |

    Scenario Outline: Calculate a trip using the System Map
        Given I press "Travel in Transmi, SITP or Taxi"           
        And I wait for 3 seconds
        When I touch the "SYSTEM MAP" text
        And I click on screen <station1x>% from the left and <station1y>% from the top
        And I click on screen <station2x>% from the left and <station2y>% from the top
        Then I wait to see "Recommendation 1"

        Examples:
            | station1x | station1y | station2x | station2y |
            | 31        | 28        | 70        | 35        |
            | 70        | 35        | 31        | 28        |
            | 47        | 58        | 61        | 52        |
            | 61        | 52        | 47        | 58        |       

    Scenario Outline: Calculate a trip between 2 different transmilenio stations
        Given I press "Travel in Transmi, SITP or Taxi"
        When I touch the "Your location" text
        And I enter text "Calle 187" into field with id "etSearch"
        And I touch the "Auto Norte / Cll. 185 / Cll. 187B Bis" text    
        And I touch the "End" text    
        And I enter text "Alcalá" into field with id "etSearch"
        And I touch the "Auto Norte / Cll. 137 y Cll. 134A" text  
        And I press view with id "fabGo"
        Then I wait to see "Recommendation 1"

        Examples:
            | stationName1      | stationSelector1                           | stationName2      | stationSelector2                          | 
            | "calle 187"       | "Auto Norte / Cll. 185 / Cll. 187B Bis"    | "Alquería"        | "NQS / Cra. 52A"                          |
            | "Alquería"        | "NQS / Cra. 52A"                           | "calle 187"       | "Auto Norte / Cll. 185 / Cll. 187B Bis"   |
            | "Alcalá"          | "Auto Norte / Cll. 137 y Cll. 134A"        | "Av. El Dorado"   | "NQS / Cll. 40A / Cra. 32A Bis"           |   
            | "Av. El Dorado"   | "NQS / Cll. 40A / Cra. 32A Bis"            | "Alcalá"          | "Auto Norte / Cll. 137 y Cll. 134A"       |   
    
    

