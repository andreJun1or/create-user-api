import { SafeParseReturnType, z } from 'zod';

type safeParseValidate = Promise<z.SafeParseReturnType<{
  username: string;
  password: string;
  first_name: string;
  last_name?: string | undefined;
}, {
  username: string;
  password: string;
  first_name: string;
  last_name?: string | undefined;
}>>

type safeParseError = SafeParseReturnType<{ username: string; password: string; first_name: string; last_name?: string | undefined; }, { username: string; password: string; first_name: string; last_name?: string | undefined; }>

interface IErrors {
  statusCode: number,
  error: string | safeParseError
}

interface IUsers {
  username: string,
  password: string,
  first_name: string,
  last_name?: string
}

interface ISuccess {
  statusCode: number,
  user: Map<string, IUsers>
}

type TResultReturn = IErrors | safeParseValidate | ISuccess

export { TResultReturn };