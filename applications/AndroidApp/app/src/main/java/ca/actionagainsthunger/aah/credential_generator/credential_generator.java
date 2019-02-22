package ca.actionagainsthunger.credential_generator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class credential_generator {

    private List<String> AnimalNames;
    private List<String> ColourNames;

    public credential_generator() {
        setAnimalNames();
        setColourNames();
    }

    // Returns a list of [username, password], confirmed not taken
    public List<String> generate_new_cred() {

        List<String> cred = new ArrayList<String>();
        String newUsername = "";
        String newPassword = "";

        Boolean credNotValid = true;
        Random rand = new Random();

        int animalTot = AnimalNames.size() - 1;
        int colourTot = ColourNames.size() - 1;
        int randNum;

        while (credNotValid) {
            // Make a random username of 3 concatenations
            // Get random Colour
            randNum = rand.nextInt(colourTot);
            newUsername += ColourNames.get(randNum);

            // Get random Animal
            randNum = rand.nextInt(animalTot);
            newUsername += AnimalNames.get(randNum);

            // Get a random number suffix between 1000 and 9999
            randNum = rand.nextInt(9999) + 1000;
            newUsername += String.valueOf(randNum);

            // Make a random password of 6 characters, which has numbers and letters
            for (int i = 0; i < 6; i++) {
                Boolean char_or_int = (rand.nextInt(100)%2 == 0);
                if (char_or_int) {
                    newPassword += (char)(rand.nextInt(26) + 'a');
                }
                else {
                    newPassword += String.valueOf(rand.nextInt(9));
                }
            }

            // We should call the database to make sure the credentials are not taken
            // --- Here, run a query to ensure newUsername/newPassword are not taken ---
            // If the check fails, keep going until you don't have a complete match
            if (false /*The check fails (unlikely)*/) {
                newUsername = "";
                newPassword = "";
            }
            else {
                credNotValid = false;
            }
        }

        cred.add(newUsername);
        cred.add(newPassword);

        return cred;
    }

    private void setAnimalNames() {
        this.AnimalNames = Arrays.asList(
                "alligator",
                "ant",
                "bear",
                "bee",
                "bird",
                "camel",
                "cat",
                "cheetah",
                "chicken",
                "chimpanzee",
                "cow",
                "crocodile",
                "deer",
                "dog",
                "dolphin",
                "duck",
                "eagle",
                "elephant",
                "fish",
                "fly",
                "fox",
                "frog",
                "giraffe",
                "goat",
                "goldfish",
                "hamster",
                "hippopotamus",
                "horse",
                "kangaroo",
                "kitten",
                "lion",
                "lobster",
                "monkey",
                "octopus",
                "owl",
                "panda",
                "pig",
                "puppy",
                "rabbit",
                "rat",
                "scorpion",
                "seal",
                "shark",
                "sheep",
                "snail",
                "snake",
                "spider",
                "squirrel",
                "tiger",
                "turtle",
                "wolf",
                "zebra"
        );
    }

    private void setColourNames() {
        this.ColourNames = Arrays.asList(
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Purple"
        );
    }

//    public static void main(String[] args){
//        credential_generator a = new credential_generator();
//        List<String> b = a.generate_new_cred();
//        System.out.println(b.get(0));
//        System.out.println(b.get(1));
//    }
}
