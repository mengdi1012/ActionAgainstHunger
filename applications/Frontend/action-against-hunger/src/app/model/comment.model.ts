export class Comment {
    public commentID: String;
    public postID: string;
    public userID: string;
    public commentContent: string;
    public dateCreated: string;
    public postTitle: string;

    constructor(commentID: string, postID: string, userID: string, commentContent: string, dateCreated: string, postTitle: string){
        this.commentID = commentID;
        this.postID = postID;
        this.userID = userID;
        this.commentContent = commentContent;
        this.dateCreated = dateCreated;
        this.postTitle = postTitle;
    }
}