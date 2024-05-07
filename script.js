const mongoose = require('mongoose');
const User = require('./User');

// mongoose.connect("mongodb://localhost/testdb")

mongoose
  .connect('mongodb://localhost/textdb')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error(err);
  });

run();
async function run() {
  try {
    const user = await User.findOne({ name: 'Kyle', email: 'test@test.com' });
    // console.log(user);
    await user.save();
    console.log(user);
    // console.log(user.namedEmail);
  } catch (e) {
    console.log(e.message);
  }
}

// user.save().then(() => console.log('User Saved'));

// async function run() {
//   User.findById.save()
//   try {
//     const user = await User.create({
//       name: 'Kyle',
//       age: 29,
//       email: 'TEST@test.com',
//       hobbies: ['Weight Lifting', 'Bowling'],
//       address: {
//         street: 'Laryea Safari',
//         city: 'Adjiringanor',
//       },
//     });
//     user.createdAt = 6;
//     await user.save();
//     console.log(user);
//   } catch (e) {
//     console.log(e.message);
//   }
//   // user.name = 'Kwame_Adu';
//   // user.save();
//   // const user = new User({ name: 'Kyle', age: 26 });
//   // await user.save();
//   // console.log(user);
// }

// user.save().then(() => console.log('User Saved'));

// .gt(12)
//       .where('name')
//       .equals('Kyle')
//       .populate('bestFriend')
//       .limit(1);
