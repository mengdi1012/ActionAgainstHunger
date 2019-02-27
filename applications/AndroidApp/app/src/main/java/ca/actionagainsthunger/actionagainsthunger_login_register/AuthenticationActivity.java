package ca.actionagainsthunger.actionagainsthunger_login_register;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import com.amazonaws.mobile.client.AWSMobileClient;
import com.amazonaws.mobile.client.Callback;
import com.amazonaws.mobile.client.SignInUIOptions;
import com.amazonaws.mobile.client.UserStateDetails;

import java.util.Map;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.news_view.NewsFeed;
import ca.actionagainsthunger.post.PostCreator;
import ca.actionagainsthunger.user_files.User;
import ca.actionagainsthunger.user_files.UserType;

public class AuthenticationActivity extends AppCompatActivity {

    private final String TAG = AuthenticationActivity.class.getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_authentication);
        AWSMobileClient.getInstance().initialize(getApplicationContext(), new Callback<UserStateDetails>() {

            @Override
            public void onResult(UserStateDetails userStateDetails) {
                Log.i(TAG, userStateDetails.getUserState().toString());
                switch (userStateDetails.getUserState()){
                    case SIGNED_IN:
                        AWSMobileClient.getInstance().getUserAttributes(new Callback<Map<String, String>>() {
                            @Override
                            public void onResult(Map<String, String> result) {
                                User.getInstance().setUserID(result.get("sub"));
                                User.getInstance().setUsername(AWSMobileClient.getInstance().getUsername());
                                User.getInstance().setSchool("No School");
                                if (result.containsKey("custom:school")) {
                                    User.getInstance().setSchool(result.get("custom:school"));
                                }
                                if (result.containsKey("custom:profile_icon")){
                                    User.getInstance().setProfileIcon(result.get("custom:profile_icon"));
                                } else{
                                    User.getInstance().setProfileIcon("pear_icon");
                                }
                                Log.d(TAG, "school " + User.getInstance().getSchool());
                                User.getInstance().setUserType(UserType.STUDENT);
                                Intent i = new Intent(AuthenticationActivity.this, NewsFeed.class);
                                startActivity(i);
                            }

                            @Override
                            public void onError(Exception e) {
                                Log.e(TAG, e.toString());
                            }
                        });

                        break;
                    case SIGNED_OUT:
                        showSignIn();
                        break;
                    default:
                        AWSMobileClient.getInstance().signOut();
                        showSignIn();
                        break;
                }
            }

            @Override
            public void onError(Exception e) {
                Log.e(TAG, e.toString());
            }
        });
    }

    private void showSignIn() {
        try {
            AWSMobileClient.getInstance().showSignIn(this,
                    SignInUIOptions.builder().nextActivity(NewsFeed.class).build());
        } catch (Exception e) {
            Log.e(TAG, e.toString());
        }
    }
}
