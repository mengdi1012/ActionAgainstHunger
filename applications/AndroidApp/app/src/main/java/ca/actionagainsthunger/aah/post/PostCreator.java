package ca.actionagainsthunger.post;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.mobile.client.AWSMobileClient;
import com.amazonaws.mobile.config.AWSConfiguration;

import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;

import java.util.Date;
import java.util.UUID;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.amazonaws.models.PostsDO;
import ca.actionagainsthunger.news_view.NewsFeed;
import ca.actionagainsthunger.user_files.User;
import ca.actionagainsthunger.user_files.UserActivity;

public class PostCreator extends AppCompatActivity {

    private EditText postTitle;
    private EditText postContent;
    private Spinner postType;
    private BottomNavigationView navigation;
    private DynamoDBMapper dynamoDBMapper;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_post_creator);

        AWSCredentialsProvider credentialsProvider = AWSMobileClient.getInstance();
        AWSConfiguration configuration = AWSMobileClient.getInstance().getConfiguration();


        // Add code to instantiate a AmazonDynamoDBClient
//        AmazonDynamoDBClient dynamoDBClient = new AmazonDynamoDBClient(credentialsProvider);
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


        navigation = findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
        navigation.setSelectedItemId(R.id.navigation_post);

        postTitle = findViewById(R.id.post_title);
        postContent = findViewById(R.id.post_content);
        postType = findViewById(R.id.spinner);

        Button post = findViewById(R.id.post_button);
        post.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                postTitle.setError(null);
                postContent.setError(null);


                String postTitleText = postTitle.getText().toString();
                String postContentText = postContent.getText().toString();
                if (postTitleText.isEmpty()){
                    postTitle.setError("Post Title should not be empty.");
                    postTitle.requestFocus();
                } else if (postContentText.isEmpty()){
                    postContent.setError("Post content should not be empty.");
                    postContent.requestFocus();
                } else{
                    createNews();
                    postContent.getText().clear();
                    postTitle.getText().clear();
                }

            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        navigation.setSelectedItemId(R.id.navigation_post);
    }

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_news:
//                    mTextMessage.setText(R.string.title_news);
                    Intent new_intent2 = new Intent(PostCreator.this, NewsFeed.class);
                    startActivity(new_intent2);
                    return true;
                case R.id.navigation_post : {
//          createNewPostDialog().show();

                    return true;
                }
                case R.id.navigation_profile:
//                    mTextMessage.setText(R.string.title_profile);
                    Intent new_intent3 = new Intent(PostCreator.this, UserActivity.class);
                    startActivity(new_intent3);
                    return true;
            }
            return false;
        }
    };

    public void createNews() {
        final PostsDO newsItem = new PostsDO();

        UUID guid = UUID.randomUUID();
        newsItem.setPostId(guid.toString());

        newsItem.setTitle(postTitle.getText().toString());
        newsItem.setContent(postContent.getText().toString());
        newsItem.setType(postType.getSelectedItem().toString());
        newsItem.setCreatedAt((new Date()).getTime());
        newsItem.setSchool(User.getInstance().getSchool());
        newsItem.setUsername(User.getInstance().getUsername());

        newsItem.setUserId(User.getInstance().getUserID());
        new Thread(new Runnable() {
            @Override
            public void run() {
                dynamoDBMapper.save(newsItem);
                // Item saved
            }
        }).start();
    }
}

