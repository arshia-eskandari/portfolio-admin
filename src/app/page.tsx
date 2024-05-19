import connectDB from "@/db/conn";
import { createUser } from "@/db/controllers/userControllers";
import { Role } from "@/db/models/user";

export default async function Home() {
  // await connectDB();
  // const user = await createUser({
  //   firstName: 'arshia',
  //   lastName: 'eskandari',
  //   email: 'arshia.eskandari.3000@gmail.com',
  //   password: '@Password_For_Admin_2024',
  //   role: Role.Admin,
  // })
  // console.log(user)
  return <div>HIggggggggggggggggggggggggggggg</div>;
}
