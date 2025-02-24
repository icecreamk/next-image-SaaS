import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/server/db/db";
export default async function Home() {
  // const users = await db.query.Users.findMany();
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App name"></Input>
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
      {/* {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id}/{user.name}
          </div>
        );
      })} */}
    </div>
  );
}
