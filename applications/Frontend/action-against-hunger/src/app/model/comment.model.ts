export class Comment {
    public commentId: String;
    public postId: string;
    public user: string;
    public content: string;
    public dateCreated: string;

    constructor(commentId: string, postId: string, user: string, content: string, dateCreated: string){
        this.commentId = commentId;
        this.postId = postId;
        this.user = user;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}