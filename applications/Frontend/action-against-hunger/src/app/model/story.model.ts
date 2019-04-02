export class Story {
    public storyId: string;
    public author: string;
    public content: string;
    public dateCreated: string;
    public like: number;

    constructor(storyId: string, author: string, content: string, dateCreated: string, like: number){
        this.storyId = storyId;
        this.author = author;
        this.content = content;
        this.dateCreated = dateCreated;
        this.like = like;
    }
}