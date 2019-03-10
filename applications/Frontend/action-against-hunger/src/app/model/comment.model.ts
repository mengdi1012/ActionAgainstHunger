export class Comment {
    public post: string;
    public username: string;
    public content: string;

    constructor(post: string, username: string, content: string){
        this.post = post;
        this.username = username;
        this.content = content;
    }
}