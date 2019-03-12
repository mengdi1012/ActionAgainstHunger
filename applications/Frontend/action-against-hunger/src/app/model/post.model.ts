export class Post {
    public postID: string;
    public userID: string;
    public classroomID: string;
    public postTitle: string;
    public postContent: string;
    public dateCreated: string;
    public dateUpdated: string;
    public postType: string;

    constructor(postID: string, userID: string, classroomID: string, postTitle: string, postContent: string, dateCreated: string, dateUpdated: string, postType: string){
        this.postID = postID;
        this.userID = userID;
        this.classroomID = classroomID;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
        this.postType = postType;
    }
}