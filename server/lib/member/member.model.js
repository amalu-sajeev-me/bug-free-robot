import bcrypt from "bcrypt";
import { scream } from "../../utils/APIError.js";
export default class UserSchemaExtension {
  static async userAlreadyExists({ username }) {
    return await this.exists({ username });
  }

  static async login({ username, password }) {
    const user = await this.findOne(
      { username },
      { username: true, password: true }
    );
    if (!user) scream(401, `invalid credentials`);
    const hash = user.password;
    const result = await bcrypt.compare(password, hash);
    if (result) console.log(`logged in!!`);
    else scream(401, `invalid credentials`);
    return user._id;
  }

  async encryptPassword() {
    const salt = 12;
    const { password } = this;
    const hash = await bcrypt.hash(password, salt);
    this.password = hash;
    return hash;
  }

  async registerAccount() {
    await this.encryptPassword();
    return await this.save();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
