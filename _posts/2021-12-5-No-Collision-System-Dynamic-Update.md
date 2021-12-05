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