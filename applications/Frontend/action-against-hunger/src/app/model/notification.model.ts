export class Notification {
    public notifId: string;
    public receiverId: string;
    public commentId: string
    public newNotif: boolean;

    constructor(notifId: string, receiverId: string, commentId: string, newNotif: boolean){
        this.notifId = notifId;
        this.receiverId = receiverId;
        this.commentId = commentId;
        this.newNotif = newNotif;
    }
}