import {cast, MinLength} from "@deepkit/type";

export const DeepkitReflection = () => {
  interface User {
    username: string & MinLength<3>;
    birthDate?: Date;
  }

  const user = cast<User>({
    username: 'Peter',
    birthDate: '2010-10-10T00:00:00Z'
  });

  console.log(user.birthDate);
  console.log(user.birthDate instanceof Date);

  return (
    <div>
      <h1>Deepkit Reflection</h1>
      <p>
        Open devtools to see some logs.
      </p>
    </div>
  );
}
