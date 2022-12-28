import { Request, Response } from "express";
import { User } from "../models/user.model";
import { userSchema } from "../schema/user.schema";
import { validateUser } from "../middelware/user.validation";
export const get_users = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.json({ success: true, users });
};

export const get_user_byid = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};

export const add_user = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });

  let { message, success } = validateUser(req.body, userSchema);
  if (!success) {
    return res.status(400).json({ success, message });
  }

  await user.save();
  res.json({ success: true, message: "user added" });
};

export const delete_user = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    res.status(200).json({ success: true, message: "user deleted" });
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};

export const update_user = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.body;
    await User.findOneAndUpdate({ _id: id }, user);
    res.status(200).json({ success: true, message: "user updated" });
  } catch (error) {
    console.log(error);
    return process.exit(1);
  }
};
