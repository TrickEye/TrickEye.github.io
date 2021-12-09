---
title: No Collision System | Dynamically Updated | TrickEye's Personal Blog
description: This is a java program aimed at generating a no-collision-system from a randomly-generated status of distribution of the balls. 
--- 

# Words Above All:
    
This is a page where I record the whole developing process of my Java program. For the next few days I'll dynamically update some of my important iterations of the software. If you are interested, go check it out every now and then!

Please note that this project is and only is Java-friendly. All releases are published with a *.jar File, which requires a Java Environment to run. Your Java version should be above: Java 1.8.*

This whole project is open-source, as you can find all necessary files in my GitHub repo: TrickEye/NoCollsionSystem. And a great many thanks to GitHub user JohnBuffer and his project NoCol, without which this program would be impossible.

If you are interested in collaborating with me, you can contact me with email: 
    
- [TrickEye@buaa.edu.cn](mailto:trickeye@buaa.edu.cn)

# Iteration 2 | Version 1.0

Thank you all for joining me in going further to the next great step of the project. Today we are celebrating the release of the first ready-to-publish version of the software. 

In this iteration, I have:
- added more supported operations to the main screen. You can now speed up or slow down the simulation speed. 
- improved the collision judgement logic. As is known to all that float calculation may cause inaccuracy. The new version has made the balls *harder to collide* with each other. As a result, the simulation cycle will be much smaller.
- added an adaptive color-allocation system. Yes, we can determine whether the ball no longer collide with any other balls. And those balls who were judged *safe* will appear green, while those who has just collided will appear red.
- added an file IO feature. This enables the program to read from scene.ncl file to load the scene recorded in the file. This also enables user to save an interesting scene in the Main Screen. 

To use the new file IO system, you should:
- name the file with: **scene.ncl**
- put it under the same directory with the *.jar file.
- click **load from scene.ncl** button on the start screen.

Here I have prepared the packed jar file, as well as a scene.ncl file that I provide. You can try this feature on your own!

[GitHub Release](https://github.com/TrickEye/NoCollisionSystem/releases/tag/v1.0)

[Bhpan Download](https://bhpan.buaa.edu.cn:443/link/FDCA46BA25915B9EBA0DAA986733FFBE)

    TrickEye, 00:27, 2021-12-10.

# Iteration 1 | Version 0.5

This version includes some bug fixes and a new start screen GUI.

Bug Fix: I have mistakenly use diameter as radius. This has caused wrong collision behavior of the balls. Now the collision behaviour is much more appropiate.

New Feature: A new start screen GUI!

To run the software is much more convenient now.
You can simply click the *.jar file you have downloaded.

[GitHub Release](https://github.com/TrickEye/NoCollisionSystem/releases/tag/v0.5)

[Bhpan Download](https://bhpan.buaa.edu.cn:443/link/18B37F1E26382F609D85F3C35CD9200B)

    TrickEye, 10:50, 2021-12-6.

# Iteration 0 | Version 0.1

This version provides the basic illustration of the fundamental features of the project. 

To run the software, you should: 

- Enter the local directory where you download the *.jar file with command line. For Windows, Windows PowerShell or Command Line is both supported by Java.
- Run the following instruction, {Filename} is the name of your downloaded jar file: 
    - java -jar {FileName}.jar
- You should see the output down below:
    - Input a integer n as the number of the balls. (1 < n <= 50)
    - If you input 0, load from default.
- You can either provide an integer n as the number of the balls generated (and the program will continue to ask you for upperBound and lowerBound), or input 0 and the program will further execute with the default configuration, which is {n, upperBound, lowerBound} = {10, 300, 100}
- This peogram is float-computation-based, so please treat your computer nicely and cut down on your input.
- The GUI launches, and you'll find n balls with random diameters generated. They will automatically collide with each other. And after a while none will further collide with others. Hence the No-Col system is genrated.

The physical calculation refresh rate is 200 fps.
The graphical refresh rate is 30 fps.

[Download.](../_assets/PinBall.jar)(I am not sure if this works.)(No it doesn't, never mind)

[GitHub Release](https://github.com/TrickEye/NoCollisionSystem/releases/tag/Release)

[Bhpan Download](https://bhpan.buaa.edu.cn:443/link/5C2AC063FF8244C880558D447438DF70)

    TrickEye, 10:20, 2021-12-5.

# End.

## [Back To Top](#words-above-all)