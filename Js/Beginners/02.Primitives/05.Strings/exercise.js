// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = 'Tom';
let favActorLastName = 'Hanks';
let fullName = `${favActorFirstName} ${favActorLastName}`;

let upcase = fullName.toUpperCase();

let mess = `My favorite Actor Is ${upcase} & his acting is awesome. Very Natural Actor. His best performace was `;
let appmessage = `${mess} his best show is Silicon Valley`;

console.log(appmessage);