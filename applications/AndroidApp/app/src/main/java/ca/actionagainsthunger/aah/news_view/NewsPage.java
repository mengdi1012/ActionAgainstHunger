package ca.actionagainsthunger.news_view;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.support.annotation.DrawableRes;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.Html;
import android.text.InputType;
import android.text.Layout;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.mobile.client.AWSMobileClient;
import com.amazonaws.mobile.config.AWSConfiguration;
import com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper;
import com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression;
import com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedQueryList;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.GetItemRequest;
import java.util.HashMap;
import java.util.Map;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.amazonaws.models.CommentsDO;

import ca.actionagainsthunger.post.Post;
import ca.actionagainsthunger.user_files.User;
import ca.actionagainsthunger.user_files.UserType;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.comment_files.Comment;

public class NewsPage extends AppCompatActivity {

    DynamoDBMapper dynamoDBMapper;
    private String postId;
    LinearLayout newsPageRoot;
    int FIVE = 5;
    int TEN = 10;
    int commentCounter = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_news_page);

        AWSCredentialsProvider credentialsProvider = AWSMobileClient.getInstance();
        AWSConfiguration configuration = AWSMobileClient.getInstance().getConfiguration();

        AmazonDynamoDBClient dynamoDBClient = Region.getRegion(Regions.US_EAST_1) // CRUCIAL
                .createClient(
                        AmazonDynamoDBClient.class,
                        credentialsProvider,
                        new ClientConfiguration()
                );

        this.dynamoDBMapper = DynamoDBMapper.builder()
                .dynamoDBClient(dynamoDBClient)
                .awsConfiguration(configuration)
                .build();


        newsPageRoot = findViewById(R.id.comment_main_block);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        Intent intent = getIntent();
        postId = intent.getStringExtra("post_id");
        String postTitle = intent.getStringExtra("post_title");
        String postContent = intent.getStringExtra("post_content");

        TextView title = findViewById(R.id.textView5);
        TextView content = findViewById(R.id.textView6);
        title.setText(postTitle);
        content.setText(postContent);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Intent new_intent = new Intent(NewsPage.this, CommentCreator.class);
                // startActivity(new_intent);

                AlertDialog newComment = createNewCommentDialog();
                newComment.show();

                TextView noComm = findViewById(R.id.noCommentsText);
                if (noComm.getVisibility() == View.VISIBLE) {
                    noComm.setVisibility(View.GONE);
                }
            }
        });

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        for (Comment comment : retrieveCommentsFromDB(postId)){
            addComment(comment);
        }
    }
    // ------------------------------------------------

    // New AlertDialog commenting system
    // (if we decide the former is better, we can change it back)
    private AlertDialog createNewCommentDialog(){
        AlertDialog.Builder builder = new AlertDialog.Builder(NewsPage.this);
        builder.setTitle(R.string.write_comment_hint);

        final LinearLayout alertLayout = new LinearLayout(this);
        LinearLayout.LayoutParams alertLayoutParams = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);

        alertLayoutParams.setMargins(TEN, FIVE, TEN, FIVE);
        alertLayout.setGravity(Gravity.CENTER_HORIZONTAL);
        alertLayout.setOrientation(LinearLayout.VERTICAL);
        alertLayout.setLayoutParams(alertLayoutParams);
        alertLayout.setPadding(TEN, TEN, TEN, TEN);

        final EditText postTitleInput = new EditText(this);
        postTitleInput.setInputType(InputType.TYPE_CLASS_TEXT);

        alertLayout.addView(postTitleInput);
        builder.setView(alertLayout);

        builder.setPositiveButton(R.string.ok, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                createNewComment(postTitleInput.getText().toString());
            }
        });
        builder.setNegativeButton(R.string.cancel, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {}
        });

        return builder.create();
    }

    private TextView createNewComment(String commentString){
        Date dateOfCreation = new Date();
        Comment comment = new Comment(commentString, getCurrentUser(), dateOfCreation);
        addCommentToDB(comment, getCurrentUser());
        return addComment(comment);
    }

    private TextView addComment(Comment comment) {
        Context context = getApplicationContext();

        //Creating the number of likes
        TextView likes = new TextView(context);
        likes.setText(Integer.toString(comment.getLikes()));


        int curr_back_color;
        switch((commentCounter%2)) {
            case 0:
                curr_back_color = R.color.comment_back_color_1;
                break;
            case 1:
                curr_back_color = R.color.comment_back_color_2;
                break;
            default:
                curr_back_color = R.color.comment_back_color_1;
        }

        GradientDrawable new_rect_back = new GradientDrawable();
        new_rect_back.setColor(getResources().getColor(curr_back_color));
        new_rect_back.setCornerRadius(5);
        new_rect_back.setStroke(1, 0xFF000000);

        TextView newComm = new TextView(context);
        //String src = ("<b>" + " User:" + "</b> <br> " + comment.readContent(getCurrentUser()));
        String src = ("<b>" + " "+comment.getCreator(null).getUsername()+":" + "</b> <br> " + comment.readContent(getCurrentUser()));
        newComm.setText(Html.fromHtml(src));
        newComm.setTextSize(TypedValue.COMPLEX_UNIT_SP,200);
        newComm.setBackground(new_rect_back);
        newComm.setTextAppearance(context,
                android.R.style.TextAppearance_DeviceDefault_Small);

        newComm.setPadding(FIVE*3, FIVE*4, FIVE*3, FIVE*4);

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT

        );

        LinearLayout.LayoutParams params_likes = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT

        );

        params_likes.setMargins(FIVE, FIVE, FIVE, FIVE);

        final LinearLayout comment_layout = new LinearLayout(this);
        comment_layout.setOrientation(LinearLayout.HORIZONTAL);

        final LinearLayout likes_layout = new LinearLayout(this);
        likes_layout.setLayoutParams(params_likes);
        likes_layout.setOrientation(LinearLayout.VERTICAL);

        final ImageButton like_button = new ImageButton(context);
        like_button.setImageResource(R.drawable.ic_keyboard_arrow_up_amber_300_24dp);


        // Want to use a database to find out the id of the comment so that the likes can be
        // incremented by one
        like_button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Perform action on click


            }
        });


        final ImageButton unlike_button = new ImageButton(context);
        unlike_button.setImageResource(R.drawable.ic_keyboard_arrow_down_black_24dp);


        // Want to use a database to find out the id of the comment so that the likes can be
        // decremented by one
        unlike_button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Perform action on click


            }
        });

        likes_layout.addView(like_button);
        likes_layout.addView(likes);
        likes_layout.addView(unlike_button);
        comment_layout.addView(likes_layout);

        likes.setGravity(Gravity.CENTER);


        params.setMargins(FIVE, FIVE, FIVE, FIVE);
        comment_layout.addView(newComm);
        newComm.setLayoutParams(params);


        newsPageRoot.addView(comment_layout);
        commentCounter++;

        return newComm;
    }


    private User getCurrentUser(){
        //TODO: After setting up DB.
        return User.getInstance();
    }

    private void addCommentToDB(Comment comment, User user){
        //TODO: After setting up DB.
        final CommentsDO newComment = new CommentsDO();

        UUID guid = UUID.randomUUID();
        newComment.setCommentId(guid.toString());

        newComment.setContent(comment.getContent());
        newComment.setPostId(postId);
        newComment.setCreatedAt((new Date()).getTime());
        newComment.setUserId(user.getUserID());
        newComment.setUsername(user.getUsername());

        newComment.setUserId(User.getInstance().getUserID());
        new Thread(new Runnable() {
            @Override
            public void run() {
                dynamoDBMapper.save(newComment);
                // Item saved
            }
        }).start();
    }
    private List<Comment> retrieveCommentsFromDB(final String postId){
        //TODO: After setting up DB.
        List<Comment> comments = new ArrayList<>();
        final List<CommentsDO> commentsDb = new ArrayList<>();

        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {

                CommentsDO c = new CommentsDO();
                c.setPostId(postId);
                DynamoDBQueryExpression<CommentsDO> queryExpression = new DynamoDBQueryExpression<CommentsDO>()
                        .withHashKeyValues(c).withConsistentRead(false);
                PaginatedQueryList<CommentsDO> foundComments = dynamoDBMapper.query(CommentsDO.class, queryExpression);
                commentsDb.addAll(foundComments);
            }
        });
        t.start();
        try {
            t.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        for (CommentsDO comm: commentsDb){
            User user = new User();
            if (comm.getUsername() == null || comm.getUsername().isEmpty()){
                user.setUsername(User.getInstance().getUsername());
            } else{
                user.setUsername(comm.getUsername());
            }
            comments.add(new Comment(comm.getContent(), user,
                    new Date(comm.getCreatedAt())));
        }
        return comments;
    }

}
