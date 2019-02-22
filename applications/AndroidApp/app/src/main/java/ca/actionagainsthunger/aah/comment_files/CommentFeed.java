package ca.actionagainsthunger.comment_files;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.Date;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.user_files.User;

public class CommentFeed extends AppCompatActivity {

    private ArrayList<Comment> commentList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_commentsfeed);

        populateComments();
    }

    // Populates the commentList with all comments for this specific post
    public void populateComments(){
        // For now, we'll have placeholder comments
        User u1 = new User();
        User u2 = new User();


        commentList.add(new Comment("This is a good post", u1, new Date()));
        commentList.add(new Comment("Indeed he makes good points", u2, new Date()));
        commentList.add(new Comment("Sounds about right", u1, new Date()));
    }

    // Screen displays all the comments on the post
    public void showComments(){
        for (Comment c : commentList) {
            // Do something
        }
    }

}
