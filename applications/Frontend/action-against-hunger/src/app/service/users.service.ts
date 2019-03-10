import { User } from "../model/user.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class UsersService {
    user: User;
    childUsers: User[] = [];

    getUserInfo(userId: string){

    }

    getChildUserInfo(userId: string){

    }

    createChildUser(){

    }

}