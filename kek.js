const kek = {
    q: 1,
    w: 2,
    e: 3,
    r: 4,
    t: 5,
    y: 6
  };
  
  function someShit(obj) {
    const filteredKeys = Object.entries(obj)
        .filter(([key, value]) => value % 2 === 0)
        .map(x => x[0]);
    
        return filteredKeys.join('');
  }

  //someShit(kek)
  
/////////////////////////////////////////////////////

//   const users = [
//     {
//       id: 1,
//       name: 'Nikita',
//       meta: {
//         friendId: 1
//       }
//     },
//     {
//       id: 2,
//       name: 'Valera',
//       meta: {
//         friendId: 4
//       }
//     },
//     {
//       id: 3,
//       name: 'Sirod',
//       meta: {
//         friendId: 5
//       }
//     },
//     {
//       id: 4,
//       name: 'Semen',
//       meta: {
//         friendId: 2
//       }
//     },
//   ];

//   function getUserFriends(userId) {
//       let user = users.find(user => user.id === userId)
//       let userFriendsArr = []
//       let friend = users.find(user => user.id === users[userId - 1].meta.friendId)
//       if(friend !== undefined) {
//         friend.pivot = {
//             type: ''
//         }
//         userFriendsArr.push(friend)
//         if(friend.id === userId){
//             friend.pivot.type = 'self'
//         } else if(friend.meta.friendId === userId) {
//             friend.pivot.type = 'mutually'
//         }
//       } else {
//           userFriendsArr.push(pivot = { type: 'virtual'})
//       }
      
//       return userFriendsArr
//   }

//  getUserFriends(4)
//  console.log(getUserFriends(4))

  //////////////////////////////////////////////////////

  const users = [
    {
      id: 1,
      name: 'Nikita',
      dob: new Date('2000-12-04')
    },
    {
      id: 2,
      name: 'Valera',
      dob: new Date('1999-04-22')
    },
    {
      id: 3,
      name: 'Sirod',
      dob: new Date('2001-02-14')
    },
  ];
  
  function getDescSortedUsersWithAge(users) {
      users
        .sort((a, b) => a.dob - b.dob)
        .forEach(user => {
          user.age = Math.abs((new Date(Date.now() - user.dob.getTime())).getUTCFullYear() - 1970)
      });

      return users
  }

  getDescSortedUsersWithAge(users)
console.log(getDescSortedUsersWithAge(users))

