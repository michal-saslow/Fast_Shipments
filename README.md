## Fast Shipments
The application follows a client-server architecture.
The client-side application interfaces with the server-side API,
The server side interacts with the database to store the data and return information.

The way the system components communicate with each other:
- Client side is developed in Angular designed by primeng.
- Server side is developed in .Net using Entity Framework,Automating.
- Database implemented in SQL server.

  
## The application is used to order delivery people.

The application is understood to be used by the delivery people as well as used by the user.
### The delivery people useing: 
- Accepting all orders for the current day,
- The salary he will earn for that day
### Customer useing:
- Gets the history of all his orders and whether they have already been done or not,Can only change orders that have not yet been placed.
- Can add a new order.

  For a new order, a suitable delivery is automatically determined according to the geographical location
