import axios from 'axios';
import { useContext } from '@modern-js/plugin-egg';

interface User {
  key: string;
  name: string;
  age: number;
  country: string;
}

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'modernjs',
});
const query = (sql: string) =>
  new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

export default async (): Promise<User | string> => {
  const users: User[] = await query(`select * from users`);
  const ctx = useContext();
  const user = users.find(user => user.id == ctx.params.id);
  return user || 'not found';
};
