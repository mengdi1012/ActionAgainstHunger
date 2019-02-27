package ca.actionagainsthunger.comment_files;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import ca.actionagainsthunger.ActionAgainstHunger.R;
import ca.actionagainsthunger.news_view.NewsPage;

public class CommentCreator extends AppCompatActivity {
    private TextView write_area;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_comment);
        write_area = (TextView)findViewById(R.id.comment_textview);
        button = (Button)findViewById(R.id.comment);


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(CommentCreator.this, NewsPage.class);
                Bundle bundle = new Bundle();
                String test = write_area.getText().toString();
                bundle.putString("Comment", test);
                intent.putExtras(bundle);
                startActivity(intent);
            }
        });

    }
}
