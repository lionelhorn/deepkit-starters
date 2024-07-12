import {ReflectionClass} from "@deepkit/type";
import {User} from "@/app/User";

export default function DeepkitPage() {
  const r = ReflectionClass.from<User>();
  const properties = r.getPropertyNames();
  return <div>{JSON.stringify(properties)}</div>;
}
