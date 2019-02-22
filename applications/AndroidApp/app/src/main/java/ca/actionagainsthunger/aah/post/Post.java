package ca.actionagainsthunger.post;

import android.support.v7.app.AppCompatActivity;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.File;
import java.util.List;

import android.net.Uri;

import ca.actionagainsthunger.comment_files.Comment;
import ca.actionagainsthunger.user_files.User;

public class Post extends AppCompatActivity {

    public enum PostType {NONE, ARTICLES, QUESTIONS, HIGHLIGHTS}

    private String postId;
    private String content;
    private User creator;
    private int likes;
    private Date timeCreated;
    private Date timeEdited;
    private Date recentActivity;
    private ArrayList<String> imageList; //A list of file names for this post's images
    private List<Comment> comments;
    private String title;
    private PostType type;

    public static PostType getTypeFromString(String type){
        if (type == null){ // To prevent NullPointerException
            return PostType.NONE;
        }
        switch (type){
            case "Article":
                return PostType.ARTICLES;
            case "Question":
                return PostType.QUESTIONS;
            case "Highlight":
                return PostType.HIGHLIGHTS;
            default:
                return PostType.NONE;
        }
    }


    public static Post makePost(String postId, User creator, String title, PostType type, String content) {
        return new Post(postId, creator, title, type, content, new Date());
    }

    public Post() {
    }

    public Post(String postId, User creator, String title, PostType type, String content, Date timestamp) {
        this.postId = postId;
        this.creator = creator;
        this.content = content;
        this.likes = 0;
        this.timeCreated = timestamp;
        this.timeEdited = timestamp;
        this.recentActivity = timestamp;
        this.title = title;
        this.type = type;
        imageList = new ArrayList<>();
        comments = new ArrayList<>();
    }

    public String getPostId() { return postId; }

    public String getContent() {
        return content;
    }

    public User getCreator() {
        return creator;
    }

    public int getLikes() {
        return likes;
    }

    public Date getTimeCreated() {
        return timeCreated;
    }

    public Date getTimeEdited() {
        return timeEdited;
    }

    public Date getRecentActivity() {
        return recentActivity;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments){
        this.comments = comments;
    }

    public ArrayList<String> getImageList() {
        return imageList;
    }

    public void editContent(String newContent) {
        //Modify the contents of this post
        content = newContent;
        timeEdited = new Date();
        recentActivity = timeEdited;
    }

    public void incrementLikes() {
        likes += 1;
    }

    public void decrementLikes() {
        likes -= 1;
    }

    public void addComment(Comment newComment) {
        comments.add(newComment);
        recentActivity = new Date();
    }

    public boolean addImage(Uri fileUri) {
        String uriString = fileUri.toString();
        String fileName = uriString.substring(uriString.lastIndexOf("/") + 1);
        String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        boolean imageInBucket = false;
        //Todo: check if image already in bucket
        if (!imageInBucket && !imageList.contains(fileName)) {
            //Todo: upload image to bucket
            imageList.add(fileName);
            return true;
        } else {
            //image already exists in bucket
            return false;
        }
    }

    public Bitmap getImage(String fileName) throws IOException {
        String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        boolean imageInBucket = false;
        //Todo: confirm that image is in bucket
        if (imageInBucket && imageList.contains(fileName)) {
            File localFile = File.createTempFile("image", fileExtension);
            //Todo: download image from bucket and save in localFile
            Bitmap bmp = BitmapFactory.decodeFile(localFile.getAbsolutePath());
            return bmp;
        } else {
            //image not in bucket
            return null;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if(!(o instanceof Post)) {
            return false;
        }
        Post post = (Post) o;
        return creator.equals(post.creator)
                && content.equals(post.content)
                && likes == post.likes
                && timeCreated.equals(post.timeCreated)
                && timeEdited.equals(post.timeEdited)
                && recentActivity.equals(post.recentActivity)
                && comments.equals(post.comments)
                && imageList.equals(post.imageList);
    }

    public String getPostTitle() {
        return title;
    }

    public void setPostTitle(String title) {
        this.title = title;
    }

    public PostType getType() {
        return type;
    }

    public void setType(PostType type) {
        this.type = type;
    }
}
