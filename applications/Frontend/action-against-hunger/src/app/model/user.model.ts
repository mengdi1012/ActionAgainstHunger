export class User {
    public username: string;
    public school: string;
    public usertype: string;
    public profession: string;


    constructor(username: string, school: string, usertype: string, profession: string){
        this.username = username;
        this.school = school;
        this.usertype = usertype;
        this.profession = profession;
    }
}