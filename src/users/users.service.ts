import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager',
      email: 'janesmith@example.com',
    },
    {
      id: 3,
      name: 'Robert Brown',
      role: 'UX Designer',
      email: 'robertbrown@example.com',
    },
    {
      id: 4,
      name: 'Emily Johnson',
      role: 'Data Analyst',
      email: 'emilyjohnson@example.com',
    },
    {
      id: 5,
      name: 'Michael Lee',
      role: 'Admin',
      email: 'michael@gmail.com',
    },
  ];

  findAll(){
    return this.users
     
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
  createUser(userData: {
    name: string;
    role:
      | 'Software Engineer'
      | 'Product Manager'
      | 'UX Designer'
      | 'Data Analyst'
      | 'Admin';
    email: string;
  }) {
    const uniqueId = this.users.length + 1;

    const newUserData = {
      id: uniqueId,
      ...userData,
    };
    this.users.push(newUserData);
    return newUserData;
  }

  update(
    id: number,
    updatedata: {
      name: string;
      role:
        | 'Software Engineer'
        | 'Product Manager'
        | 'UX Designer'
        | 'Data Analyst'
        | 'Admin';
      email: string;
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedata };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
}
