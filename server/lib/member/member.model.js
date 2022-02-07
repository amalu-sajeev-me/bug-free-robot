import bcrypt from "bcrypt";
import { User } from "./member.mongo.js";

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
    const result = await User.find({}).populate("reviews");

    const users = result.map(user => {
      const reviewsCount = user.reviews.length;
      const ratingStars = user.reviews.map((user) => user.stars);
      const totalStars =
        ratingStars.length > 0 ? ratingStars.reduce((a, b) => a + b) : 0;

      // const ratingStars = user.reviews.reduce((p, a) => +p.stars + +a.stars);
      // console.log(ratingStars);
      return {
        fullName: `${user.firstName} ${user.lastName}`,
        reviewsCount,
        ratingStars: totalStars / reviewsCount,
      };
    })


    !result && scream(...failureMsg);
    return users;
  }

  static async findProfile({userID: username}) {
    //
    const failureMsg = [404, `such a user doesn't exists`];
    const user = await User.findOne({ username }, { password: false });
    !user && scream(...failureMsg);
    return user;
  }

  // VIRTUALS

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}