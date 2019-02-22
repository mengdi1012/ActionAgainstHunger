package ca.actionagainsthunger.comment_files;

import java.util.Date;

import ca.actionagainsthunger.user_files.User;

public class Comment {

    private String content;
    private User creator;
    private Date created;
    private int likes;
    private boolean removed;

    public Comment(String content, User user, Date dt) {
        contentUpdate(content, user);
        this.creator = user;
        this.created = dt;
        this.likes = 1;
        this.removed = false;
    }

    public String getContent(){
        return this.content;
    }

    public boolean isRemoved() {
        // Just run this before checking any other method, and don't continue if it is removed
        return this.removed;
    }

    public int getLikes() {
        // Just run this before checking any other method, and don't continue if it is removed
        return this.likes;
    }

    public String readContent(User reader) {
        // Formats the content and returns it to this requester
        return content;
    }

    public User getCreator(User reader) {
        // Returns whoever created this comment
        return creator;
    }

    public String getCreatedTime(User reader) {
        // Returns when this comment was created
        return created.toString();
    }

    public boolean changeLikes(int like) {
        // Basically, a like will have 'like' = 1, and a dislike will have 'like' = -1
        likes += like;
        // If successfully increased
        return true;
    }

    public boolean editComment(String newContent, User user) {
        // Only allow creator to edit his/her own comment
        if (this.creator != user) {
            return false;
        }
        contentUpdate(newContent, user);
        return true;
    }

    public void contentUpdate(String content, User user) {
        if (content.length() > 500) {
            // Inform (preferably in a text box) that the comment is too long to the 'user'
        }
        this.content = content;
    }

    public void removeComment(User user) {
        // Only a creator or a moderator can removed CommentFeed
        if (this.creator == user /*|| user isInstanceOf moderator */ ) {
            this.content = "Comment has been removed";
            // Maybe set the content text to be italics
            this.removed = true;
        }
    }
}