import bcrypt from "bcrypt";
import { scream } from "../../utils/APIError.js";
import { User } from "./member.mongo.js";
// export default class UserSchemaExtension {
//   static async userAlreadyExists({ username }) {
//     return await this.exists({ username });
//   }

//   static async login({ username, password }) {
//     const user = await this.findOne(
//       { username },
//       { username: true, password: true }
//     );
//     if (!user) scream(401, `invalid credentials`);
//     const hash = user.password;
//     const result = await bcrypt.compare(password, hash);
//     if (result) console.log(`logged in!!`);
//     else scream(401, `invalid credentials`);
//     return user._id;
//   }

//   async encryptPassword() {
//     const salt = 12;
//     const { password } = this;
//     const hash = await bcrypt.hash(password, salt);
//     this.password = hash;
//     return hash;
//   }

//   async registerAccount() {
//     await this.encryptPassword();
//     return await this.save();
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }


export default class UserSchemaExtension{
  async registerAccount() {
    // 
    const { username, password } = this;
    const existingUserMsg = [401, `user already exists`];

    const existingUser = await User.exists({ username });
    existingUser && scream(...existingUserMsg);

    const salt = 12;
    const hash = await bcrypt.hash(password, salt);
    this.password = hash;

    return await this.save();


  }

  static async login({username, password}) {
    // 
    const failureMsg = [403, "invalid credentials"];
    const user = await User.findOne({ username });
    !user && scream(...failureMsg);

    const result = await bcrypt.compare(password, user.password);
    !result && scream(...failureMsg);

    return user;
  }

  static async fetchMembers() {
    // 
    const failureMsg = [403, "couldn't find any members"];
    const result = await User.find({}, { username: true });
    !result && scream(...failureMsg);
    return result;
  }

  static async findProfile({userID: username}) {
    //
    const failureMsg = [404, `such a user doesn't exists`];
    const user = await User.findOne({ username }, { password: false });
    !user && scream(...failureMsg);
    return user;
  }
}