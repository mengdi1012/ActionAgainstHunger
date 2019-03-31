export class Post {
    public postID: string;
    public author: string;
    public school: string;
    public title: string;
    public content: string;
    public dateCreated: string;
    public type: string;

    constructor(postID: string, author: string, school: string, title: string, content: string, dateCreated: string, type: string){
        this.postID = postID;
        this.author = author;
        this.school = school;
        this.title = title;
        this.content = content;
        this.dateCreated = dateCreated;
        this.type = type;
    }
}