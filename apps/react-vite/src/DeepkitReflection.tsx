import {cast, MinLength, ReflectionClass} from "@deepkit/type";

class User {
  id: number = 0;
  username: string = "";
  password: string = "";
}


export const DeepkitReflection = () => {

  const rc = ReflectionClass.from<User>();
  const ps = rc.getProperties();

  console.log("Reflection", ps)

  return (
    <div className={"bg-blue-100 rounded p-1"}>
      <h1>Deepkit Reflection</h1>
      <p>
        Open devtools to see some logs.
      </p>
    </div>
  );
}
