export class Post {
    public title: string;
    public username: string;
    public content: string;
    public date: string;

    constructor(title: string, username: string, content: string, date: string){
        this.title = title;
        this.username = username;
        this.content = content;
        this.date = date;
    }
}