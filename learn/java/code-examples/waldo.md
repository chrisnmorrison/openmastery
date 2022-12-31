---
sidebar_position: 1
---

# Where's Waldo?

In this example, we've built a very simple "Where's Waldo" type game. But instead of searching a jumbled picture, you're just searching a 5x5 grid. How.. not very exciting. But, the point is to demonstrate a few concepts at work.

- 2D arrays
- random number generation (one method, at least. There are many)
- looping
- user input
- static methods

```java
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class Learn {
    public static void main(String[] args) {

        String[][] arr = new String[5][5];
        boolean running = true;
        Scanner in = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                arr[i][j] = "O";
            }
        }

        // Where Waldo is hiding
        int index1 = ThreadLocalRandom.current().nextInt(0, 4 + 1);
        int index2 = ThreadLocalRandom.current().nextInt(0, 4 + 1);

//      Giveaway Line. Comment below line to stop this from printing
        System.out.printf("The answer is : %d %d\n", index1, index2);


        System.out.println("Let's find Waldo!");

        while (running) {
            printGrid(arr);
            System.out.println("Guess which location Waldo is hiding at...");
            System.out.print("Enter two numbers between 0-4, separated by spaces (e.g. '1 3' ): ");
            int one = in.nextInt();
            int two = in.nextInt();

            if (one == index1 && two == index2) {
                System.out.printf("You found him! He was hiding at [%d][%d].\n", one, two);
                arr[one][two] = "W";
                printGrid(arr);
                running = false;
            } else {
                System.out.println("Oh no, he's not there.. Try again.");
                arr[one][two] = "X";
            }
        }
        System.out.println("Thanks for playing!");


    }

    public static void printGrid(String[][] arrayName) {
        System.out.println("---------------");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print(arrayName[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println("---------------");
    }
}
```

## What's next?
