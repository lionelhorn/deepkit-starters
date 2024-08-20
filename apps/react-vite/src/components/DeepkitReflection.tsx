import {cast, defaultValue, MinLength, ReflectionClass, typeOf} from "@deepkit/type";
import {MinMaxPositive} from "@lionelhorn/utils";

class User {
  id: number = 0;
  username: string = "";
  password: string = "";
}


export const DeepkitReflection = () => {

  const rc = ReflectionClass.from<User>();
  const ps = rc.getProperties();

  console.log("Reflection", ps)

  class SearchableAttributes {
    parcel?: {
      area?: MinMaxPositive
    }
  }

  const dv = defaultValue(typeOf<SearchableAttributes>());
  console.log(dv);

  return (
    <div className={"bg-blue-100 rounded p-1"}>
      <h1>Deepkit Reflection</h1>
      <p>
        Open devtools to see some logs.
      </p>
    </div>
  );
}
