import {ReflectionClass} from "@deepkit/type";
import {User} from "@/app/User";

export default function DeepkitPage() {
  const r = ReflectionClass.from<User>();
  const properties = r.getPropertyNames();
  return (<div className={"text-center"}>
      <h3>Deepkit reflection example (runtime types)</h3>
      <pre>{JSON.stringify(properties)}</pre>
    </div>
  );
}
