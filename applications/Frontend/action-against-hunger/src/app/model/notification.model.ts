export class Notification {
    public notificationId: String;
    public receiverId: string;
    public commentId: string
    public newNotif: boolean;

    constructor(notificationId: string, receiverId: string, commentId: string, newNotif: boolean){
        this.notificationId = notificationId;
        this.receiverId = receiverId;
        this.commentId = commentId;
        this.newNotif = newNotif;
    }
}