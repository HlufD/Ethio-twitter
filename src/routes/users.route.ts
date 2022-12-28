import { Router } from "express";
import {
  get_users,
  add_user,
  get_user_byid,
  delete_user,
  update_user,
} from "../controler/user.comtroler";
import { validateUser } from "../middelware/user.validation";

const router = Router();

router.get("/", get_users);
router.post("/adduser", add_user);
router.get("/:id", get_user_byid);
router.delete("/deleteuser/:id", delete_user);
router.patch("/updateuser/:id", update_user);
export default router;
