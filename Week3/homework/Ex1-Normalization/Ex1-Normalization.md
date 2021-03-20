1- 
member_id : It's primary key but It has duplicate value
member_name: OK
memeber_address: OK
dinner_id: OK
dinner_date: The values don't have the same type
venue_code: OK
venue_description: OK
food_code: They aren't atoomic
food description: They aren't atomic

2-
First entity: members
Second entity: dinners
Third entity: venues
forth entity: food
Fifth entity: dinner_food

3- 
Table one: members
member_id(PK)   member_name  member address
    1           Amit          325 Max park
    2           Ben           24 Hudson lane 
    3           Cristina      516 6th Ave 
    4           Dan           89 John St
    5           Gabor         54 Vivaldi St 
    6           Hema          9 Peter St

table two: dinners
dinner_id(PK)  dinner_date  member_id  venue_code
    D0001001    2020-03-15  1           B01
    D0001002    2020-03-15  2           B02
    D0001003    2020-03-15  3           B02
    D0001004    2020-03-20  4           B03
    D0001005    2020-03-20  1           B03
    D0001006    2020-03-25  3           B04
    D0001007    2020-03-26  5           B05
    D0001007    2020-04-01  6           B03

Table three: venues
venue_code(PK)  venue_description
    B01         Grand Ball Room
    B02         Zoku Roof Top
    B03         Goat Farm
    B04         Mama's Kitchen
    B05         Hungry Hungary

Table four: food
food_code(PK)  food_description
    C1         Curry
    C2         Cake
    S1         Soup
    P1         Pie
    T1         Tea
    M1         Mousee
    F1         Lalafal
    G1         Goulash
    P2         Pasca

Table five: dinner_food
dinner_id(FK)   food_code(FK)
    D0001001    C1
    D0001001    C2
    D0001002    S1
    D0001002    C2
    D0001003    S1
    D0001003    C2
    D0001004    P1
    D0001004    T1
    D0001004    M1
    D0001005    P1
    D0001005    T1
    D0001005    M1
    D0001006    F1
    D0001006    M1
    D0001007    G1
    D0001007    P2
    D0001008    P1
    D0001008    T1
    D0001008    M1