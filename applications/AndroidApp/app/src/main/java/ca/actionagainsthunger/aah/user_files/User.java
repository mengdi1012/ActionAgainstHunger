package ca.actionagainsthunger.user_files;


public class User {
    private static final User currentUser = new User();
    private  String profileIcon;
    private  String username;
    private  String userID;
    private String school;
    private  UserType userType;
    private String password;
    private byte[] passwordHash;

    public User(){

    }
    public User(String username, String userID, UserType userType, String school){
        if (username.isEmpty() || userID.isEmpty()){
            throw new IllegalArgumentException("User name or ID is empty.");
        } else if (userType == null){
            throw new NullPointerException("User type cannot be null.");
        }
        this.username = username;
        this.userID = userID;
        this.userType = userType;
        this.password = null;
        this.passwordHash = null;
        this.school = school;
    }

    public static User getInstance(){
        return currentUser;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getSchool() {
        return school;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public byte[] getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(byte[] passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getProfileIcon() {
        return profileIcon;
    }

    public void setProfileIcon(String profileIcon) {
        this.profileIcon = profileIcon;
    }

}
