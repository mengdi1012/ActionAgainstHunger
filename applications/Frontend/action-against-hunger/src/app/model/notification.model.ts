export class Notification {
    public notificationId: String;
    public receiverId: string;
    public commandId: string
    public newNotif: boolean;

    constructor(notificationId: string, receiverId: string, commandId: string, newNotif: boolean){
        this.notificationId = notificationId;
        this.receiverId = receiverId;
        this.commandId = commandId;
        this.newNotif = newNotif;
    }
}