package ca.actionagainsthunger.user_files;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;


import com.amazonaws.mobile.client.AWSMobileClient;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.actionagainsthunger_login_register.AuthenticationActivity;
import ca.actionagainsthunger.news_view.NewsFeed;
import ca.actionagainsthunger.post.PostCreator;

public class UserActivity extends AppCompatActivity {
    private TextView text;
    private ImageView profilePicture;
    private Button signout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        profilePicture = (ImageView) findViewById(R.id.profile_icon);
        signout = findViewById(R.id.signout);
        signout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AWSMobileClient.getInstance().signOut();
                Intent intent = new Intent(UserActivity.this, AuthenticationActivity.class);
                startActivity(intent);
            }
        });
        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setSelectedItemId(R.id.navigation_profile);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        setImageResource();
        setName();
    }

    @Override
    protected void onResume() {
        super.onResume();
        setName();
        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setSelectedItemId(R.id.navigation_profile);
    }

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_news:
//                    mTextMessage.setText(R.string.title_news);
                    Intent new_intent1 = new Intent(UserActivity.this, NewsFeed.class);
                    startActivity(new_intent1);
                    return true;
                case R.id.navigation_post : {
//                    createNewPostDialog().show();
                    Intent new_intent2 = new Intent(UserActivity.this, PostCreator.class);
                    startActivity(new_intent2);
                    return true;
                }
                case R.id.navigation_profile:
//                    mTextMessage.setText(R.string.title_profile);

                    return true;
            }
            return false;
        }
    };

    public void setImageResource(){
        String profileIcon = User.getInstance().getProfileIcon();
        if (profileIcon == null){
            throw new NullPointerException("No profile icon set for user");
        }
        this.profilePicture.setImageResource(getResources().getIdentifier(profileIcon, "drawable", getPackageName()));
    }

    public void setName(){
        TextView name = findViewById(R.id.textView7);
        name.setText(String.format("%s %s", "Username:", User.getInstance().getUsername()));
    }
}
