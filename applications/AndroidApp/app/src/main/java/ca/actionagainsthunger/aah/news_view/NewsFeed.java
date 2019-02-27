package ca.actionagainsthunger.news_view;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Looper;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.CardView;
import android.text.InputType;
import android.text.SpannableString;
import android.text.TextUtils;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.ForegroundColorSpan;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.view.Menu;

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
import java.util.Locale;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.amazonaws.models.PostsDO;
import ca.actionagainsthunger.post.Post;
import ca.actionagainsthunger.post.PostCreator;
import ca.actionagainsthunger.user_files.User;
import ca.actionagainsthunger.user_files.UserActivity;
import ca.actionagainsthunger.user_files.UserType;

import static android.text.Spanned.SPAN_INCLUSIVE_INCLUSIVE;

public class NewsFeed extends AppCompatActivity {

  private TextView mTextMessage;
  LinearLayout rootView;
  private DynamoDBMapper dynamoDBMapper;
  int TEN_DP;
  Post.PostType filter_option;
  List<Post> posts;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_news_feed);
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

    filter_option = Post.PostType.NONE;

    mTextMessage = (TextView) findViewById(R.id.message);

    TEN_DP = (int) TypedValue.applyDimension(
        TypedValue.COMPLEX_UNIT_DIP,
        10,
        getApplicationContext().getResources().getDisplayMetrics()
    );

    BottomNavigationView navigation = findViewById(R.id.navigation);
    navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
    rootView = findViewById(R.id.post_feed);
    posts = new ArrayList<Post>();
    updateView();
  }

  @Override
  protected void onResume() {
    super.onResume();
    BottomNavigationView navigation = findViewById(R.id.navigation);
    navigation.setSelectedItemId(R.id.navigation_news);
    updateView();
  }
  private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
      = new BottomNavigationView.OnNavigationItemSelectedListener() {

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
      switch (item.getItemId()) {
        case R.id.navigation_news:
//                    mTextMessage.setText(R.string.title_news);
          return true;
        case R.id.navigation_post : {
//          createNewPostDialog().show();
            Intent new_intent2 = new Intent(NewsFeed.this, PostCreator.class);
            startActivity(new_intent2);
          return true;
        }
        case R.id.navigation_profile:
//                    mTextMessage.setText(R.string.title_profile);
          Intent new_intent3 = new Intent(NewsFeed.this, UserActivity.class);
          if (getIntent().getExtras() != null) {
            new_intent3.putExtras(getIntent().getExtras());
          }
          startActivity(new_intent3);
          return true;
      }
      return false;
    }
  };

  @Override
  public boolean onCreateOptionsMenu(Menu menu){
    MenuInflater inflater = getMenuInflater();
    inflater.inflate(R.menu.filter_menu, menu);
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item){
    // Handle item selection
    switch(item.getItemId()) {
      case R.id.All:
        filter_option = Post.PostType.NONE;
        updateView();
        return true;
      case R.id.Articles:
        filter_option = Post.PostType.ARTICLES;
        updateView();
        return true;
      case R.id.Questions:
        filter_option = Post.PostType.QUESTIONS;
        updateView();
        return true;
      case R.id.Highlights:
        filter_option = Post.PostType.HIGHLIGHTS;
        updateView();
        return true;
      default:
        return super.onOptionsItemSelected(item);
    }
  }

  public void updateView(){
    retrievePostsFromDB();
    rootView.removeAllViews();
    for (Post post: posts){
      if (filter_option.equals(Post.PostType.NONE) || filter_option.equals(post.getType())){
        addNews(post);
      }
    }
  }

  private AlertDialog createNewPostDialog(){
    AlertDialog.Builder builder = new AlertDialog.Builder(NewsFeed.this);
    builder.setTitle(R.string.write_post_hint);

    LinearLayout alertLayout = new LinearLayout(this);
    LinearLayout.LayoutParams alertLayoutParams = new LinearLayout.LayoutParams(
        LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);

    alertLayoutParams.setMargins(TEN_DP, TEN_DP, TEN_DP, 0);
    alertLayout.setGravity(Gravity.CENTER_HORIZONTAL);
    alertLayout.setOrientation(LinearLayout.VERTICAL);
    alertLayout.setLayoutParams(alertLayoutParams);
    alertLayout.setPadding(TEN_DP, TEN_DP, TEN_DP, TEN_DP);

    final EditText postTitleInput = new EditText(this);
    postTitleInput.setInputType(InputType.TYPE_CLASS_TEXT);

    alertLayout.addView(postTitleInput);
    builder.setView(alertLayout);

    builder.setPositiveButton(R.string.ok, new DialogInterface.OnClickListener() {
      public void onClick(DialogInterface dialog, int id) {
          //TODO: get user from app + add content field
        Post post = Post.makePost("Placeholder", getCurrentUser(),
                postTitleInput.getText().toString(), Post.PostType.ARTICLES,
                "");
        addNews(post);
        addPostToDB(post, getCurrentUser());

        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setSelectedItemId(R.id.navigation_news);
      }
    });
    builder.setNegativeButton(R.string.cancel, new DialogInterface.OnClickListener() {
      public void onClick(DialogInterface dialog, int id) {
        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setSelectedItemId(R.id.navigation_news);}
    });

    return builder.create();
  }

  private CardView addNews(final Post post) {
    Context context = getApplicationContext();

    CardView newItem = new CardView(context);
    newItem.setOnClickListener(new OnClickListener() {
      @Override
      public void onClick(View view) {
        Intent myIntent = new Intent(getBaseContext(), NewsPage.class);
        //NOTE: This is temporary until we get the database up, then we can instead just pass the id
        // of the post in the database and let NewsPage fetch it.
          myIntent.putExtra("post_id", post.getPostId());
        myIntent.putExtra("post_title", post.getPostTitle());
        myIntent.putExtra("post_content", post.getContent());

        startActivity(myIntent);
      }
    });

    TextView textViewInfo = createInfo(context, post);
    newItem.addView(textViewInfo);

    TextView textViewTitle = createTitle(context, post.getPostTitle());

    LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
        LinearLayout.LayoutParams.MATCH_PARENT,
        LinearLayout.LayoutParams.WRAP_CONTENT
    );
    params.setMargins(0, 0, 0, TEN_DP);
    newItem.setLayoutParams(params);

    newItem.setRadius(20f);

    newItem.addView(textViewTitle);
    newItem.setCardBackgroundColor(100);
    rootView.addView(newItem);
    return newItem;
  }
  /* Creates the TextView that contains the author's name and icon and date of creation.
   */
  private TextView createInfo(Context context, Post post){
    TextView textViewInfo = new TextView(context);
    SpannableString name = new SpannableString(post.getCreator().getUsername());
    name.setSpan(new AbsoluteSizeSpan(getResources().getDimensionPixelSize(R.dimen.post_creater_name_size)),
            0, post.getCreator().getUsername().length(), SPAN_INCLUSIVE_INCLUSIVE);
    name.setSpan(new ForegroundColorSpan(Color.BLACK), 0, post.getCreator().getUsername().length(), 0);
    SimpleDateFormat format;

    format = new SimpleDateFormat("dd MMM", Locale.getDefault());

    String dateString = format.format( post.getTimeCreated());
    SpannableString date = new SpannableString(dateString);
    date.setSpan(new AbsoluteSizeSpan(getResources().getDimensionPixelSize(R.dimen.post_date_size)),
            0, dateString.length(), SPAN_INCLUSIVE_INCLUSIVE);
    textViewInfo.setText(TextUtils.concat(name, System.lineSeparator(), date));
    //TODO: get actual icon from user
    Drawable img = getDrawable(getResources().getIdentifier(post.getCreator().getProfileIcon(), "drawable", getPackageName()));
    assert img != null;

    img.setBounds(0, 0,   getResources().getDimensionPixelSize(R.dimen.profile_icon_size_in_post),
             getResources().getDimensionPixelSize(R.dimen.profile_icon_size_in_post));
    textViewInfo.setCompoundDrawables(img, null, null, null);

    textViewInfo.setCompoundDrawablePadding(25);
    CardView.LayoutParams cardParams = new CardView.LayoutParams(
            CardView.LayoutParams.WRAP_CONTENT,
            CardView.LayoutParams.WRAP_CONTENT
    );
    final int SIXTEEN_DP = (int) TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            16,
            getApplicationContext().getResources().getDisplayMetrics()
    );

    cardParams.setMargins(SIXTEEN_DP, 0, 0, 0);
    textViewInfo.setLayoutParams(cardParams);
    return textViewInfo;
  }

  private TextView createTitle(Context context, String title){
    TextView textViewTitle = new TextView(context);
    textViewTitle.setText(title);
    textViewTitle.setTextAppearance(
            android.support.v7.appcompat.R.style.TextAppearance_AppCompat_Title);

    CardView.LayoutParams cardParams = new CardView.LayoutParams(
            CardView.LayoutParams.WRAP_CONTENT,
            CardView.LayoutParams.WRAP_CONTENT
    );
    final int SIXTEEN_DP = (int) TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            16,
            getApplicationContext().getResources().getDisplayMetrics()
    );
    final int FORTYEIGHT_DP = (int) TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            48,
            getApplicationContext().getResources().getDisplayMetrics()
    );
    cardParams.setMargins(SIXTEEN_DP, FORTYEIGHT_DP, SIXTEEN_DP, SIXTEEN_DP);
    textViewTitle.setLayoutParams(cardParams);

    return textViewTitle;

  }

  private void retrievePostsFromDB(){
    //TODO: After setting up DB.
//    User user = new User("Ken Bone", "1", UserType.STUDENT);
//    user.setProfileIcon("grape_icon");
    Thread t = new Thread(new Runnable() {
      @Override
      public void run() {
          Looper.prepare();
          PostsDO p = new PostsDO();
          p.setUserId(User.getInstance().getUserID());
          p.setSchool(User.getInstance().getSchool());

          DynamoDBQueryExpression<PostsDO> queryExpression = new DynamoDBQueryExpression<PostsDO>()
                  .withHashKeyValues(p).withIndexName("getSchoolPosts")
                  .withConsistentRead(false);
          PaginatedQueryList<PostsDO> postQuery = dynamoDBMapper.query(PostsDO.class, queryExpression);
          posts.clear();
          for (PostsDO postObject: postQuery){
            User postCreator = new User();
            postCreator.setProfileIcon(User.getInstance().getProfileIcon());
            if (postObject.getUsername() == null || postObject.getUsername().isEmpty()){
              postCreator.setUsername(User.getInstance().getUsername());
            } else {
              postCreator.setUsername(postObject.getUsername());
            }
            postCreator.setUserID(postObject.getUserId());
            posts.add(new Post(postObject.getPostId(), postCreator, postObject.getTitle(), Post.getTypeFromString(postObject.getType()),
                postObject.getContent(), new Date(postObject.getCreatedAt())));
          }
      }
    });
    t.start();
    try {
      t.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }

  public List<Post> getFakePosts(){
    List<Post> posts = new ArrayList<>();
    User user = new User("Ken Bone", "1",UserType.STUDENT, "goodSchool");
    posts.add(Post.makePost("Placeholder1", user, getString(R.string.title_news1), Post.PostType.ARTICLES, getString(R.string.content_news1)));
    posts.add(Post.makePost("Placeholder2", user, getString(R.string.title_news2),Post.PostType.ARTICLES, getString(R.string.content_news2)));
    posts.add(Post.makePost("Placeholder3", user, getString(R.string.title_news3), Post.PostType.ARTICLES, getString(R.string.content_news3)));
    posts.add(Post.makePost("Placeholder4", user, getString(R.string.title_news4), Post.PostType.ARTICLES, getString(R.string.content_news4)));
    return posts;
  }

  private User getCurrentUser(){
    return User.getInstance();
  }

  public void onBackPressed() {
    // Override default back button behaviour.
  }


  private void addPostToDB(Post post, User user){
    //TODO: After setting up DB.
  }

}
