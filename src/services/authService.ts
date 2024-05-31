import jwt from "jsonwebtoken";
import * as fs from "fs";

const usersFilePath = "./data/users.json";

interface User {
  username: string;
  password: string;
  name: string;
}

interface Result {
  token: string;
  name: string;
}

class AuthService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  public login(username: string, password: string): Result {
    const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    const user: User | undefined = usersData.find(
      (u: User) => u.username === username && u.password === password
    );
    if (!user) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign({ username }, this.secretKey);

    return { token: token, name: user.name };
  }
}

export default AuthService;
